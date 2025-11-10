// --- ឯកសារនេះផ្ទុកនូវ Components ទាំងអស់ ---
const { useState, useEffect, useMemo, useCallback } = React;

// --- ១. ផ្ទុក Icons បែប SVG ---
const HomeIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);
const UserIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
const SettingsIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 .54 1.81v.65a2 2 0 0 1-.54 1.81l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-.54-1.81v-.65a2 2 0 0 1 .54 1.81l.15.1a2 2 0 0 0 .73 2.73l.22.38a2 2 0 0 0 2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);
const ClockIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
const BuildingIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="18" rx="2" ry="2"></rect>
    <line x1="8" y1="9" x2="16" y2="9"></line>
    <line x1="8" y1="13" x2="16" y2="13"></line>
    <line x1="8" y1="17" x2="12" y2="17"></line>
  </svg>
);
const IdIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
    <line x1="9" y1="10" x2="15" y2="10"></line>
    <line x1="9" y1="14" x2="15" y2="14"></line>
  </svg>
);
const ChevronLeftIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);
const ChevronRightIcon = ({ className, ...props }) => (
  <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);
const ChartBarIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10M12 20V4M6 20V14"></path>
  </svg>
);

// --- ២. ផ្ទុក Themes ---
const themes = {
  glass: ['bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400', 'text-white', 'កញ្ចក់ (ដើម)'],
  light: ['bg-gray-100', 'text-gray-800', 'ភ្លឺ (Light)'],
  dark: ['bg-gray-900', 'text-gray-100', 'ងងឹត (Dark)'],
  slate: ['bg-slate-800', 'text-slate-100', 'ងងឹត (Slate)'],
  sky: ['bg-sky-600', 'text-white', 'មេឃ (Sky)'],
  solarizedLight: ['bg-yellow-50', 'text-yellow-900', 'Solarized (ភ្លឺ)'],
  solarizedDark: ['bg-neutral-900', 'text-neutral-100', 'Solarized (ងងឹត)'],
  strawberry: ['bg-pink-100', 'text-pink-800', 'Strawberry'],
  emerald: ['bg-emerald-700', 'text-white', 'ត្បូង (Emerald)'],
  royal: ['bg-indigo-800', 'text-indigo-100', 'រាជ (Royal)'],
  hotpink: ['bg-pink-500', 'text-white', 'ផ្កាឈូក (ខ្លាំង)'],
  white: ['bg-white', 'text-black', 'ស (White)'],
};

// --- ៣. Functions ជំនួយ ---
const getLocalDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// --- (មុខងារថ្មី) បកប្រែ Date ទៅជាអក្សរខ្មែរ ---
const formatKhmerDate = (dateString) => { // dateString = "YYYY-MM-DD"
  if (!dateString) return "";
  try {
    // ប្រើ UTC ដើម្បីចៀសវាងបញ្ហា Timezone ពេលបំប្លែង
    const date = new Date(dateString + 'T00:00:00');
    
    // --- (កែប្រែ) ជួសជុលបញ្ហា Timezone (ប្តូរពី UTC ទៅ Local) ---
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    
    const khmerMonths = [
      'មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 
      'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆកា', 'ធ្នូ'
    ];
    
    return `ទី ${toKhmerNumber(day)} ${khmerMonths[monthIndex]} ${toKhmerNumber(year)}`;
  } catch (e) {
    console.error("Error formatting Khmer date:", e);
    return dateString; // បង្ហាញ Date ដើម វិញបើមានបញ្ហា
  }
};

// --- (មុខងារថ្មី) បំប្លែងលេខឡាតាំងទៅលេខខ្មែរ ---
const toKhmerNumber = (num) => {
  if (num === null || num === undefined) return '';
  const str = String(num);
  const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  return str.replace(/[0-9]/g, (digit) => khmerDigits[parseInt(digit)]);
};

// Function ពិនិត្យប្រភេទទិន្នន័យ (សម្រាប់ ReportPage)
const checkEntryType = (entry) => {
  if (!entry || entry.trim() === '') return 'EMPTY';
  // ពិនិត្យមើល Pattern ម៉ោង (e.g., "07:30 AM" or "17:30 PM")
  if (/^\d{2}:\d{2}\s(AM|PM)$/i.test(entry)) {
    return 'TIME';
  }
  return 'LEAVE'; // បើមិនមែនម៉ោង គឺចាត់ទុកជា "សុំច្បាប់"
};


// --- ៤. Components សម្រាប់ UI ---

// Component ផ្ទុក Font និង Style
const StyleAndFontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;500;700&display=swap');
    
    body {
      font-family: 'Kantumruy Pro', sans-serif;
      overscroll-behavior-y: contain;
    }
    
    @keyframes fadeInCard {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-in-card {
      opacity: 0;
      animation: fadeInCard 0.4s ease-out forwards;
    }

    @keyframes pageFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .page-content-animation {
      animation: pageFadeIn 0.3s ease-in-out;
    }
    
    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.3); border-radius: 10px; }
    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
  `}</style>
);

// Component សម្រាប់ Edit Modal
const EditModal = ({ record, onSave, onClose, theme }) => {
  const [checkIn, setCheckIn] = useState(record.checkIn || '');
  const [checkOut, setCheckOut] = useState(record.checkOut || '');
  const [isSaving, setIsSaving] = useState(false);
  
  const isGlass = theme.bgClass.includes('gradient');
  const modalBg = isGlass ? 'bg-white/30 backdrop-blur-xl' : 'bg-white';
  const textTitle = isGlass ? 'text-white' : 'text-gray-900';
  const textLabel = isGlass ? 'text-gray-100' : 'text-gray-700';
  const textInput = isGlass ? 'text-white placeholder-gray-300' : 'text-gray-900 placeholder-gray-400';
  const inputBg = isGlass ? 'bg-white/20 border-white/30' : 'bg-white border-gray-300';
  const infoBg = isGlass ? 'bg-black/20' : 'bg-gray-100';

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave({
        ...record,
        checkIn: checkIn,
        checkOut: checkOut,
      });
    } catch (error) {
      console.error("Error saving record:", error);
    } finally {
      setIsSaving(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 page-content-animation">
      <div className={`rounded-2xl shadow-xl w-full max-w-sm p-5 ${modalBg}`}>
        <h2 className={`text-xl font-bold mb-2 ${textTitle}`}>កែប្រែទិន្នន័យ</h2>
        <div className={`mb-4 p-3 rounded-lg ${infoBg}`}>
          <p className={`font-semibold ${textTitle}`}>{record.employeeName}</p>
          {/* (កែប្រែ) ប្រើ toKhmerNumber និង formatKhmerDate */}
          <p className={`text-sm ${textLabel}`}>ID: {toKhmerNumber(record.employeeId)} | {formatKhmerDate(record.dateId)}</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-1 ${textLabel}`}>Check In</label>
            <input
              type="text"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${inputBg} ${textInput}`}
              placeholder="ឧទាហរណ៍: 08:00 AM"
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-1 ${textLabel}`}>Check Out</label>
            <input
              type="text"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${inputBg} ${textInput}`}
              placeholder="ឧទាហរណ៍: 05:30 PM"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            disabled={isSaving}
            className={`px-4 py-2 rounded-md hover:opacity-80 disabled:opacity-50 ${isGlass ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            បោះបង់
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isSaving ? 'កំពុងរក្សាទុក...' : 'រក្សាទុក'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Component សម្រាប់ Toggle Switch
const ToggleSwitch = ({ label, enabled, onChange, theme }) => {
  const isGlass = theme.bgClass.includes('gradient');
  const bgCard = isGlass ? 'bg-white/10 backdrop-blur-md' : 'bg-white shadow-sm border border-gray-100';
  const textClass = isGlass ? 'text-gray-100' : 'text-gray-700';
  
  return (
    <div className={`flex items-center justify-between p-4 rounded-xl ${bgCard}`}>
      <span className={`font-medium ${textClass}`}>{label}</span>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
          enabled ? 'bg-blue-500' : (isGlass ? 'bg-black/20' : 'bg-gray-300')
        }`}
      >
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

// Component សម្រាប់ Pagination
const PaginationControls = ({ currentPage, totalPages, onNext, onPrev, theme }) => {
  if (totalPages <= 1) return null;

  const isGlass = theme.bgClass.includes('gradient');
  const btnBg = isGlass ? 'bg-white/20 backdrop-blur-md text-white' : 'bg-white shadow-md text-blue-600';
  const textClass = isGlass ? 'text-gray-100' : 'text-gray-700';

  return (
    <div className="flex items-center justify-between mt-6 px-4">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`flex items-center justify-center p-2 rounded-full transition-all disabled:opacity-30 ${btnBg} hover:opacity-80`}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <span className={`font-medium text-sm ${textClass}`}>
        {/* (កែប្រែ) ប្រើ toKhmerNumber */}
        ទំព័រ {toKhmerNumber(currentPage)} / {toKhmerNumber(totalPages)}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center p-2 rounded-full transition-all disabled:opacity-30 ${btnBg} hover:opacity-80`}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

// --- ៥. Components សម្រាប់ទំព័រនីមួយៗ ---

// Component ទំព័រ Home (AttendanceList)
const AttendanceList = ({ records, loading, error, entryMode, onRecordClick, currentPage, setCurrentPage, theme }) => {
  
  const ITEMS_PER_PAGE = 12;
  const totalPages = Math.ceil(records.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = records.slice(indexOfFirstItem, indexOfLastItem);
  
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  
  // Theme Styles
  const isGlass = theme.bgClass.includes('gradient');
  const bgCard = isGlass ? 'bg-white/10 backdrop-blur-md' : 'bg-white shadow-lg border border-gray-100';
  const textTitle = isGlass ? 'text-white' : 'text-gray-800';
  const textSubtitle = isGlass ? 'text-gray-200' : 'text-gray-500';
  const textMuted = isGlass ? 'text-gray-300' : 'text-gray-400';
  const textRed = 'text-red-500 font-bold';
  const textGreen = isGlass ? 'text-green-300' : 'text-green-700';
  const textRedTime = isGlass ? 'text-red-300' : 'text-red-700';
  const bgIconGreen = isGlass ? 'bg-green-500/20' : 'bg-green-100';
  const bgIconRed = isGlass ? 'bg-red-500/20' : 'bg-red-100';
  const bgIconMuted = isGlass ? 'bg-gray-500/20' : 'bg-gray-100';
  const borderCard = isGlass ? 'border-t border-white/10' : 'border-t border-gray-100';
  const ringClass = isGlass ? 'hover:ring-white/50' : 'hover:ring-blue-500';

  if (loading) {
    return <div className="flex justify-center items-center h-full p-6">កំពុងទាញទិន្នន័យ...</div>;
  }
  if (error) {
    return <div className="p-4"><div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><strong className="font-bold">Error: </strong><span className="block sm:inline">{error}</span></div></div>;
  }
  if (records.length === 0) {
    return <div className="flex justify-center items-center h-64 p-6 text-center">មិនមានទិន្នន័យសម្រាប់បង្ហាញទេ។</div>;
  }

  return (
    <div className="pb-4">
      {entryMode && (
        <div className={`px-4 py-3 rounded-lg text-center m-4 ${isGlass ? 'bg-white/20' : 'bg-blue-100 border border-blue-300 text-blue-800'}`}>
          <p className="font-semibold">របៀបកែប្រែ (Edit Mode) កំពុងបើក</p>
          <p className="text-sm">សូមចុចលើ Card ណាមួយដើម្បីកែប្រែ។</p>
        </div>
      )}
      <div className="space-y-4 px-4">
        {currentItems.map((record, index) => (
          <div 
            key={record.id} 
            onClick={() => entryMode && onRecordClick(record)}
            className={`p-4 rounded-xl overflow-hidden transition-all fade-in-card ${bgCard} ${
              entryMode ? `cursor-pointer hover:shadow-xl hover:ring-2 ${ringClass}` : ''
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Section 1: Main Info */}
            <div className="flex items-center">
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h2 className={`text-xl font-bold truncate ${textTitle}`} title={record.employeeName}>{record.employeeName}</h2>
                  <div className={`flex-shrink-0 flex items-center ml-2 ${textSubtitle}`}>
                    <IdIcon className="w-4 h-4 mr-1.5" />
                    {/* (កែប្រែ) ប្រើ toKhmerNumber */}
                    <span className="text-sm font-mono font-medium">ID: {toKhmerNumber(record.employeeId)}</span>
                  </div>
                </div>
                <div className={`flex items-center mt-1 ${textSubtitle}`}>
                  <BuildingIcon className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium truncate">{record.department}</span>
                </div>
                {/* (កែប្រែ) ប្រើ formatKhmerDate */}
                <span className={`text-sm font-medium mt-1 block ${isGlass ? 'text-blue-300' : 'text-blue-600'}`}>{formatKhmerDate(record.dateId)}</span>
              </div>
            </div>
            
            {/* Section 2: Check-in/Out */}
            <div className={`grid grid-cols-2 gap-4 pt-4 mt-4 ${borderCard}`}>
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-full ${checkEntryType(record.checkIn) === 'TIME' ? bgIconGreen : bgIconRed}`}>
                  <ClockIcon className={`w-5 h-5 ${checkEntryType(record.checkIn) === 'TIME' ? textGreen : textRed}`} />
                </div>
                <div>
                  <span className={`text-xs ${textSubtitle}`}>Check In</span>
                  {checkEntryType(record.checkIn) === 'TIME' ? (
                    <p className={`font-bold text-lg ${textGreen}`}>{toKhmerNumber(record.checkIn)}</p>
                  ) : (
                    <p className={`font-bold text-base ${textRed}`}>
                      {checkEntryType(record.checkIn) === 'LEAVE' ? 'សុំច្បាប់' : 'អវត្តមាន'}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-full ${checkEntryType(record.checkOut) === 'TIME' ? bgIconRed : (checkEntryType(record.checkIn) === 'TIME' ? bgIconMuted : bgIconRed)}`}>
                  <ClockIcon className={`w-5 h-5 ${checkEntryType(record.checkOut) === 'TIME' ? textRedTime : (checkEntryType(record.checkIn) === 'TIME' ? textMuted : textRed)}`} />
                </div>
                <div>
                  <span className={`text-xs ${textSubtitle}`}>Check Out</span>
                  {checkEntryType(record.checkOut) === 'TIME' ? (
                    <p className={`font-bold text-lg ${textRedTime}`}>{toKhmerNumber(record.checkOut)}</p>
                  ) : (
                    <p className={`font-bold text-base ${checkEntryType(record.checkIn) === 'TIME' ? textMuted : textRed}`}>
                      {checkEntryType(record.checkOut) === 'LEAVE' ? 'សុំច្បាប់' : 'អវត្តមាន'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <PaginationControls 
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={nextPage}
        onPrev={prevPage}
        theme={theme}
      />
    </div>
  );
};

// Component ទំព័រ Profile
const ProfilePage = ({ theme }) => {
  const isGlass = theme.bgClass.includes('gradient');
  const textTitle = isGlass ? 'text-white' : 'text-gray-800';
  const textSubtitle = isGlass ? 'text-gray-300' : 'text-gray-500';
  
  return (
    <div className="p-6 text-center">
      <UserIcon className={`w-24 h-24 mx-auto ${isGlass ? 'text-white/30' : 'text-gray-300'}`} />
      <h2 className={`text-2xl font-semibold mt-4 ${textTitle}`}>ទំព័រគណនី</h2>
      <p className={`mt-2 ${textSubtitle}`}>មុខងារនេះនឹងត្រូវបន្ថែមក្នុងពេលឆាប់ៗនេះ។</p>
    </div>
  );
};

// Component ទំព័រ Report
const ReportPage = ({ records, theme }) => {
  // --- (កែប្រែ) បន្ថែម State សម្រាប់ផ្ទុក Date ដែលបានជ្រើសរើស ---
  const [selectedDate, setSelectedDate] = useState(getLocalDate());

  // Logic គណនា (កែប្រែចុងក្រោយ)
  const stats = useMemo(() => {
    // --- (កែប្រែ) ប្រើ selectedDate ជំនួស today ---
    const todayRecords = records.filter(r => r.dateId === selectedDate);
    
    // --- Logic ថ្មី (កែតម្រូវ) ---
    const leaveRecords = [];
    const attendanceRecords = [];

    // 1. បែងចែក "សុំច្បាប់" និង "វត្តមាន"
    for (const record of todayRecords) {
      const checkInType = checkEntryType(record.checkIn);
      const checkOutType = checkEntryType(record.checkOut);
      
      if (checkInType === 'LEAVE' || checkOutType === 'LEAVE') {
        leaveRecords.push(record);
      } else {
        attendanceRecords.push(record);
      }
    }
    
    // 2. គណនា "វត្តមាន"
    let totalToday = attendanceRecords.length;
    let completeToday = 0;
    let scannedInOnlyToday = 0;
    let incompleteToday = 0;
    
    // 3. គណនា "សុំច្បាប់"
    let onLeaveToday = leaveRecords.length;
    
    const statsByDept = {};

    // 4. គណនា "វត្តមាន" តាមក្រុម
    for (const record of attendanceRecords) {
      const dept = (record.department || 'N/A').toUpperCase();
      if (!statsByDept[dept]) {
        statsByDept[dept] = { totalAttendance: 0, complete: 0, scannedInOnly: 0, incomplete: 0, onLeave: 0 };
      }
      
      statsByDept[dept].totalAttendance++;
      
      const checkInType = checkEntryType(record.checkIn);
      const checkOutType = checkEntryType(record.checkOut);

      if (checkInType === 'TIME' && checkOutType === 'TIME') {
        completeToday++;
        statsByDept[dept].complete++;
      } else if (checkInType === 'TIME' && checkOutType !== 'TIME') {
        scannedInOnlyToday++;
        statsByDept[dept].scannedInOnly++;
      } else {
        incompleteToday++;
        statsByDept[dept].incomplete++;
      }
    }
    
    // 5. គណនា "សុំច្បាប់" តាមក្រុម
    for (const record of leaveRecords) {
        const dept = (record.department || 'N/A').toUpperCase();
        if (!statsByDept[dept]) {
            statsByDept[dept] = { totalAttendance: 0, complete: 0, scannedInOnly: 0, incomplete: 0, onLeave: 0 };
        }
        statsByDept[dept].onLeave++;
    }

    return {
      totalToday,
      completeToday,
      scannedInOnlyToday,
      incompleteToday,
      onLeaveToday,
      statsByDept
    };
    // --- (កែប្រែ) បន្ថែម selectedDate ទៅក្នុង Dependency ---
  }, [records, selectedDate]);

  // Theme Styles
  const isGlass = theme.bgClass.includes('gradient');
  const bgCard = isGlass ? 'bg-white/10 backdrop-blur-md' : 'bg-white shadow-md';
  const bgHeader = isGlass ? 'bg-black/10' : 'bg-gray-50 border-b border-gray-100';
  const textTitle = isGlass ? 'text-white' : 'text-gray-800';
  const textLabel = isGlass ? 'text-gray-100' : 'text-gray-600';
  const textValue = isGlass ? 'text-white' : 'text-gray-900';
  const textHeader = isGlass ? 'text-blue-300' : 'text-blue-600';
  // --- (ស្តាយថ្មី) សម្រាប់ Date Input ---
  const inputBg = isGlass ? 'bg-white/20 border-white/30 text-white' : 'bg-white border-gray-300 text-gray-900';

  const StatItem = ({ label, value }) => (
    <div className="flex justify-between items-center p-3">
      <span className={`text-sm ${textLabel}`}>{label}</span>
      {/* (កែប្រែ) ប្រើ toKhmerNumber */}
      <span className={`font-bold text-lg ${textValue}`}>{toKhmerNumber(value)}</span>
    </div>
  );

  // --- (កែប្រែ) ប្រើ Function ថ្មីដើម្បី Format ចំណងជើង ---
  const formattedTitle = formatKhmerDate(selectedDate);

  return (
    <div className="p-4 space-y-6">
      {/* --- (កែប្រែ) ចំណងជើងថ្មី --- */}
      <h2 className={`text-center text-lg font-semibold ${textHeader}`}>
        ទិន្នន័យប្រចាំ{formattedTitle}
      </h2>
      
      {/* --- (ថ្មី) ប្រអប់ Filter Date --- */}
      <div className="px-0">
        <label className={`block text-sm font-medium mb-1 ${isGlass ? 'text-gray-100' : 'text-gray-700'}`}>
          ជ្រើសរើសកាលបរិច្ឆេទ
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400 ${inputBg}`}
        />
      </div>

      {/* សរុបទូទៅ */}
      <div className={`rounded-xl overflow-hidden ${bgCard}`}>
        <div className={`p-3 ${bgHeader}`}>
          <h3 className={`font-semibold ${textTitle}`}>សរុបទូទៅ (ប្រចាំថ្ងៃ)</h3>
        </div>
        <div className="divide-y divide-gray-100/10">
          <StatItem label="បុគ្គលិកបានស្កេន (សរុបថ្ងៃនេះ)" value={stats.totalToday} />
          <StatItem label="ចំនួនបុគ្គលិកបានស្កេនពេញលេញ" value={stats.completeToday} />
          <StatItem label="ចំនួនបុគ្គលិកបានស្កេនចូល" value={stats.scannedInOnlyToday} />
          <StatItem label="ចំនួនបុគ្គលិកទិន្នន័យមិនពេញលេញ" value={stats.incompleteToday} />
          <StatItem label="សុំច្បាប់" value={stats.onLeaveToday} />
        </div>
      </div>
      
      {/* សរុបតាមក្រុម */}
      <div>
        <h3 className={`font-semibold mb-2 ${textTitle}`}>សរុបតាមក្រុម (ប្រចាំថ្ងៃ)</h3>
        <div className="space-y-4">
          {Object.keys(stats.statsByDept).length === 0 ? (
            <div className={`p-4 rounded-xl text-center ${bgCard} ${textLabel}`}>
              {/* (កែប្រែ) បង្ហាញ Date ដែលបានជ្រើសរើស */}
              មិនមានទិន្នន័យសម្រាប់ថ្ងៃ {formattedTitle} ទេ។
            </div>
          ) : (
            Object.entries(stats.statsByDept).map(([deptName, deptStats]) => (
              <div key={deptName} className={`rounded-xl overflow-hidden ${bgCard}`}>
                <div className={`p-3 ${bgHeader}`}>
                  <h4 className={`font-semibold ${textTitle}`}>{deptName}</h4>
                </div>
                <div className="divide-y divide-gray-100/10">
                  <StatItem label="សរុបក្នុងក្រុម (វត្តមាន)" value={deptStats.totalAttendance} />
                  <StatItem label="ចំនួនបុគ្គលិកបានស្កេនពេញលេញ" value={deptStats.complete} />
                  <StatItem label="ចំនួនបុគ្គលិកបានស្កេនចូល" value={deptStats.scannedInOnly} />
                  <StatItem label="ចំនួនបុគ្គលិកទិន្នន័យមិនពេញលេញ" value={deptStats.incomplete} />
                  <StatItem label="សុំច្បាប់" value={deptStats.onLeave} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};


// Component ទំព័រ Settings
const SettingsPage = ({
  filterToday, setFilterToday,
  filterIncomplete, setFilterIncomplete,
  filterIncompleteNotToday, setFilterIncompleteNotToday,
  entryMode, setEntryMode,
  activeThemeKey, onThemeChange,
  theme
}) => {
  
  const isGlass = theme.bgClass.includes('gradient');
  const textTitle = isGlass ? 'text-white' : 'text-gray-800';
  const bgCard = isGlass ? 'bg-white/10 backdrop-blur-md' : 'bg-white shadow-sm';
  const textLabel = isGlass ? 'text-gray-100' : 'text-gray-700';
  
  return (
    <div className="p-4 space-y-6">
      
      {/* ផ្នែក Filters */}
      <div>
        <h2 className={`text-xl font-semibold px-2 mb-2 ${textTitle}`}>តម្រងបង្ហាញ (Filters)</h2>
        <div className="space-y-3">
          <ToggleSwitch
            label="បង្ហាញតែថ្ងៃនេះ"
            enabled={filterToday}
            onChange={setFilterToday}
            theme={theme}
          />
          <ToggleSwitch
            label="បង្ហាញតែទិន្នន័យមិនពេញលេញ"
            enabled={filterIncomplete}
            onChange={setFilterIncomplete}
            theme={theme}
          />
          <ToggleSwitch
            label="បង្ហាញមិនពេញលេញ (ក្រៅពីថ្ងៃនេះ)"
            enabled={filterIncompleteNotToday}
            onChange={setFilterIncompleteNotToday}
            theme={theme}
          />
        </div>
      </div>

      {/* ផ្នែក បញ្ចូលទិន្នន័យ */}
      <div>
        <h2 className={`text-xl font-semibold px-2 mb-2 pt-4 ${textTitle}`}>ការបញ្ចូលទិន្នន័យ</h2>
        <ToggleSwitch
          label="បើករបៀបកែប្រែ/បញ្ចូល"
          enabled={entryMode}
          onChange={setEntryMode}
          theme={theme}
        />
        {entryMode && (
          <p className={`text-sm px-2 mt-2 ${isGlass ? 'text-gray-200' : 'text-gray-600'}`}>
            នៅពេលបើក, អ្នកអាចចូលទៅទំព័រដើម ហើយចុចលើ Card ណាមួយដើម្បីកែប្រែទិន្នន័យ។
          </p>
        )}
      </div>
      
      {/* ផ្នែក Themes */}
      <div>
        <h2 className={`text-xl font-semibold px-2 mb-2 pt-4 ${textTitle}`}>រចនាបថ (UI Themes)</h2>
        <div className={`p-4 rounded-xl ${bgCard}`}>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(themes).map(([key, themeData]) => (
              <div key={key} className="flex flex-col items-center" onClick={() => onThemeChange(key)}>
                <button 
                  className={`w-12 h-12 rounded-full border-2 transition-all ${
                    activeThemeKey === key ? 'border-blue-500 scale-110 ring-2 ring-blue-500/50' : (isGlass ? 'border-white/20' : 'border-gray-200')
                  } ${themeData[0]}`}
                ></button>
                <span className={`text-xs mt-2 text-center ${textLabel}`}>{themeData[2]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};


// --- ៦. Export Components ទាំងអស់ ---
// ដាក់ Components ទាំងអស់ចូលក្នុង Global Namespace
// ដើម្បីឱ្យ app.jsx អាចហៅប្រើបាន
window.AppComponents = {
  HomeIcon,
  UserIcon,
  SettingsIcon,
  ClockIcon,
  BuildingIcon,
  IdIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChartBarIcon,
  themes,
  getLocalDate,
  formatKhmerDate, // <-- (ថ្មី) បន្ថែម Function ថ្មី
  toKhmerNumber, // <-- (ថ្មី) បន្ថែម Function ថ្មី
  checkEntryType,
  StyleAndFontLoader,
  EditModal,
  ToggleSwitch,
  PaginationControls,
  AttendanceList,
  ProfilePage,
  SettingsPage,
  ReportPage
};
