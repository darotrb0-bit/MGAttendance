// --- ឯកសារគោល សម្រាប់ Logic របស់ App ---
const { useState, useEffect, useMemo, useCallback } = React;

// --- ផ្ទុក Components ទាំងអស់ពី Global Namespace ---
const {
  HomeIcon, UserIcon, SettingsIcon, ChartBarIcon,
  themes, getLocalDate,
  EditModal,
  AttendanceList, ProfilePage, SettingsPage, ReportPage
} = window.AppComponents;

// --- Firebase Config ---
const firebaseConfig = {
  apiKey: "AIzaSyCgc3fq9mDHMCjTRRHD3BPBL31JkKZgXFc",
  authDomain: "checkme-10e18.firebaseapp.com",
  projectId: "checkme-10e18",
  storageBucket: "checkme-10e18.firebasestorage.app",
  messagingSenderId: "1030447497157",
  appId: "1:1030447497157:web:9792086df1e864559fd5ac",
  measurementId: "G-QCJ2JH4WH6"
};

// --- ចាប់ផ្តើម Firebase (v8 style) ---
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();


// --- Component គោលរបស់កម្មវិធី ---
function App() {
  
  // --- Custom Hook សម្រាប់រក្សាទុក State ក្នុង localStorage ---
  const useStickyState = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
  };

  // --- State សម្រាប់ទិន្នន័យ ---
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  // --- State សម្រាប់ UI (រក្សាទុកក្នុង localStorage) ---
  const [activePage, setActivePage] = useStickyState('home', 'checkme_activePage');
  const [activeThemeKey, setActiveThemeKey] = useStickyState('glass', 'checkme_activeThemeKey');
  const [filterToday, setFilterToday] = useStickyState(false, 'checkme_filterToday');
  const [filterIncomplete, setFilterIncomplete] = useStickyState(false, 'checkme_filterIncomplete');
  const [filterIncompleteNotToday, setFilterIncompleteNotToday] = useStickyState(false, 'checkme_filterIncompleteNotToday');
  const [entryMode, setEntryMode] = useStickyState(false, 'checkme_entryMode');
  
  // --- State សម្រាប់ UI (បណ្តោះអាសន្ន) ---
  const [editingRecord, setEditingRecord] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [touchStartX, setTouchStartX] = useState(null);
  
  // យក Theme object បច្ចុប្បន្ន
  const themeArray = themes[activeThemeKey] || themes['glass'];
  const theme = {
    key: activeThemeKey,
    bgClass: themeArray[0],
    textClass: themeArray[1],
    name: themeArray[2]
  };

  // --- កំណត់កម្ពស់អេក្រង់ (Fix បញ្ហាលើទូរស័ព្ទ) ---
  useEffect(() => {
    const setAppHeight = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', setAppHeight);
    setAppHeight(); 
    return () => window.removeEventListener('resize', setAppHeight);
  }, []);

  // --- ផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់ ---
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        auth.signInAnonymously().catch((authError) => {
          console.error("Error signing in anonymously:", authError);
          setError("មិនអាចភ្ជាប់ទៅសេវាកម្មផ្ទៀងផ្ទាត់បានទេ។");
          setLoading(false);
        });
      }
    });
    return () => unsubscribeAuth();
  }, []);

  // --- ទាញទិន្នន័យពី Firestore ---
  useEffect(() => {
    if (!userId) return;

    const allRecordsQuery = db.collectionGroup('records');
    setLoading(true);
    setError(null);

    const unsubscribeFirestore = allRecordsQuery.onSnapshot((querySnapshot) => {
      const records = [];
      querySnapshot.forEach((doc) => {
        const employeeId = doc.ref.parent.parent ? doc.ref.parent.parent.id : 'unknown';
        records.push({ 
          id: `${employeeId}-${doc.id}`,
          employeeId: employeeId,
          dateId: doc.id,
          ...doc.data() 
        });
      });

      records.sort((a, b) => b.dateId.localeCompare(a.dateId));
      
      setAttendanceRecords(records);
      setLoading(false);
    }, (firestoreError) => {
      console.error("Error fetching Firestore data: ", firestoreError);
      setError("ទាញទិន្នន័យមិនជោគជ័យ។ សូមពិនិត្យ Security Rules (ប្រហែលជាត្រូវបន្ថែម Index សម្រាប់ Collection Group)។");
      setLoading(false);
    });

    return () => unsubscribeFirestore();
  }, [userId]);
  
  // --- ត្រងទិន្នន័យ (Filter Records) ---
  const filteredRecords = useMemo(() => {
    let records = attendanceRecords;
    if (filterToday) {
      const today = getLocalDate();
      records = records.filter(record => record.dateId === today);
    }
    if (filterIncomplete) {
      records = records.filter(record => !record.checkIn || !record.checkOut);
    }
    if (filterIncompleteNotToday) {
      const today = getLocalDate();
      records = records.filter(record => (!record.checkIn || !record.checkOut) && record.dateId !== today);
    }
    return records;
  }, [attendanceRecords, filterToday, filterIncomplete, filterIncompleteNotToday]);
  
  // --- Reset ទំព័រ ពេល Filter ---
  useEffect(() => {
    setCurrentPage(1);
  }, [filterToday, filterIncomplete, filterIncompleteNotToday]);
  
  // --- រក្សាទុកទិន្នន័យ (Save/Update) ---
  const handleSaveRecord = async (updatedData) => {
    if (!updatedData.employeeId || !updatedData.dateId) {
      console.error("Missing Employee ID or Date ID");
      return;
    }
    const docRef = db.collection('attendance').doc(updatedData.employeeId).collection('records').doc(updatedData.dateId);
    try {
      await docRef.update({
        checkIn: updatedData.checkIn,
        checkOut: updatedData.checkOut
      });
      console.log("Record updated successfully!");
      setEditingRecord(null);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  // --- Swipe Gesture Handlers ---
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX;
    const threshold = 50;
    
    if (activePage === 'home') {
      const totalPages = Math.ceil(filteredRecords.length / 12);
      
      if (diffX > threshold) {
        setCurrentPage(prev => Math.max(prev - 1, 1));
      } else if (diffX < -threshold) {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
      }
    }
    setTouchStartX(null);
  };

  // --- ប្តូរចំណងជើង Header តាមទំព័រ ---
  const getHeaderTitle = () => {
    switch (activePage) {
      case 'home':
        return 'បញ្ជីវត្តមាន';
      case 'profile':
        return 'គណនីរបស់ខ្ញុំ';
      case 'report':
        return 'របាយការណ៍';
      case 'settings':
        return 'ការកំណត់';
      default:
        return 'CheckMe App';
    }
  };
  
  // --- ផ្លាស់ប្តូរទំព័រ និងរក្សាទុក ---
  const handlePageChange = (page) => {
    setActivePage(page);
  };
  
  // --- កំណត់ Theme Class សម្រាប់ App ទាំងមូល ---
  const { bgClass, textClass } = theme;
  const isGlass = bgClass.includes('gradient');
  const headerBg = isGlass ? 'bg-white/10 backdrop-blur-lg' : 'bg-white shadow-lg';
  const headerText = isGlass ? 'text-white' : 'text-gray-800';
  const footerBg = isGlass ? 'bg-white/10 backdrop-blur-lg' : 'bg-white shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)]';
  const navText = isGlass ? 'text-gray-300' : 'text-gray-500';
  const navTextActive = isGlass ? 'text-white' : 'text-blue-600';
  const navBgActive = isGlass ? 'bg-white/20' : 'bg-blue-50';

  // --- ផ្នែកបង្ហាញទិន្នន័យ (UI) ---
  return (
    <div className={`w-full h-full min-h-screen ${bgClass}`} style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}>
      
      {/* Mobile App Container */}
      <div className="w-full max-w-md mx-auto h-[var(--app-height)] shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <header className={`flex-shrink-0 p-4 w-full z-10 transition-colors duration-300 ${headerBg}`}>
          <h1 className={`text-xl font-bold text-center tracking-wide ${headerText}`}>{getHeaderTitle()}</h1>
        </header>

        {/* Content Area - អាច Scroll បាន */}
        <main 
          className={`flex-1 overflow-y-auto custom-scrollbar ${textClass}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* ដំណើរការ render ទំព័រតាម State */}
          <div key={activePage} className="page-content-animation">
            {activePage === 'home' && (
              <AttendanceList 
                records={filteredRecords}
                loading={loading} 
                error={error}
                entryMode={entryMode}
                onRecordClick={(record) => setEditingRecord(record)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                theme={theme}
              />
            )}
            {activePage === 'profile' && <ProfilePage theme={theme} />}
            {activePage === 'report' && <ReportPage records={attendanceRecords} theme={theme} />}
            {activePage === 'settings' && (
              <SettingsPage
                filterToday={filterToday}
                setFilterToday={setFilterToday}
                filterIncomplete={filterIncomplete}
                setFilterIncomplete={setFilterIncomplete}
                filterIncompleteNotToday={filterIncompleteNotToday}
                setFilterIncompleteNotToday={setFilterIncompleteNotToday}
                entryMode={entryMode}
                setEntryMode={setEntryMode}
                activeThemeKey={activeThemeKey}
                onThemeChange={setActiveThemeKey}
                theme={theme}
              />
            )}
          </div>
        </main>

        {/* Footer Navigation Bar */}
        <footer className={`flex-shrink-0 w-full flex justify-around items-center p-2 transition-colors duration-300 ${footerBg}`}>
          <button
            onClick={() => handlePageChange('home')}
            className={`flex flex-col items-center justify-center p-2 rounded-lg w-24 transition-all duration-200 ${activePage === 'home' ? `${navTextActive} ${navBgActive} scale-105` : `${navText} hover:bg-gray-500/10`}`}
          >
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs font-medium mt-1">ទំព័រដើម</span>
          </button>
          
          <button
            onClick={() => handlePageChange('profile')}
            className={`flex flex-col items-center justify-center p-2 rounded-lg w-24 transition-all duration-200 ${activePage === 'profile' ? `${navTextActive} ${navBgActive} scale-105` : `${navText} hover:bg-gray-500/10`}`}
          >
            <UserIcon className="w-6 h-6" />
            <span className="text-xs font-medium mt-1">គណនី</span>
          </button>

          <button
            onClick={() => handlePageChange('report')}
            className={`flex flex-col items-center justify-center p-2 rounded-lg w-24 transition-all duration-200 ${activePage === 'report' ? `${navTextActive} ${navBgActive} scale-105` : `${navText} hover:bg-gray-500/10`}`}
          >
            <ChartBarIcon className="w-6 h-6" />
            <span className="text-xs font-medium mt-1">របាយការណ៍</span>
          </button>

          <button
            onClick={() => handlePageChange('settings')}
            className={`flex flex-col items-center justify-center p-2 rounded-lg w-24 transition-all duration-200 ${activePage === 'settings' ? `${navTextActive} ${navBgActive} scale-105` : `${navText} hover:bg-gray-500/10`}`}
          >
            <SettingsIcon className="w-6 h-6" />
            <span className="text-xs font-medium mt-1">កំណត់</span>
          </button>
        </footer>
        
        {/* បង្ហាញ Modal ពេល editingRecord មានទិន្នន័យ */}
        {editingRecord && (
          <EditModal
            record={editingRecord}
            onSave={handleSaveRecord}
            onClose={() => setEditingRecord(null)}
            theme={theme}
          />
        )}
      </div>
    </div>
  );
}

// Render កម្មវិធី
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
