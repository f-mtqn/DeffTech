import React, { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'diffatech-accessibility';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Initialize state with default values or from localStorage
  const [fontSize, setFontSize] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (['normal', 'large', 'xlarge'].includes(parsed.fontSize)) {
          return parsed.fontSize;
        }
      }
    } catch (error) {
      console.error('Error reading fontSize from localStorage:', error);
    }
    return 'normal';
  });

  const [dyslexiaFont, setDyslexiaFont] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Boolean(parsed.dyslexiaFont);
      }
    } catch (error) {
      console.error('Error reading dyslexiaFont from localStorage:', error);
    }
    return false;
  });

  const [highContrast, setHighContrast] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Boolean(parsed.highContrast);
      }
    } catch (error) {
      console.error('Error reading highContrast from localStorage:', error);
    }
    return false;
  });

  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Boolean(parsed.darkMode);
      }
    } catch (error) {
      console.error('Error reading darkMode from localStorage:', error);
    }
    return false;
  });

  // Inject required CSS rules into head once
  useEffect(() => {
    const styleId = 'diffatech-accessibility-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @import url('https://fonts.cdnfonts.com/css/opendyslexic');
        .font-dyslexic, .font-dyslexic * {
          font-family: 'OpenDyslexic', sans-serif !important;
        }
        .high-contrast {
          filter: contrast(1.4);
        }
        .dark-mode {
          filter: invert(1) hue-rotate(180deg);
        }
        .dark-mode img, .dark-mode video, .dark-mode svg {
          filter: invert(1) hue-rotate(180deg);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Apply accessibility settings to document and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Apply font size
    root.classList.remove('text-lg', 'text-xl');
    if (fontSize === 'large') {
      root.classList.add('text-lg');
    } else if (fontSize === 'xlarge') {
      root.classList.add('text-xl');
    }

    // Apply dyslexia font
    if (dyslexiaFont) {
      body.classList.add('font-dyslexic');
    } else {
      body.classList.remove('font-dyslexic');
    }

    // Apply high contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply dark mode
    if (darkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }

    // Persist settings
    try {
      const settings = {
        fontSize,
        dyslexiaFont,
        highContrast,
        darkMode,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving accessibility settings to localStorage:', error);
    }
  }, [fontSize, dyslexiaFont, highContrast, darkMode]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Reset to default settings
  const handleReset = () => {
    setFontSize('normal');
    setDyslexiaFont(false);
    setHighContrast(false);
    setDarkMode(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing accessibility settings from localStorage:', error);
    }
  };

  const fontOptions = [
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Besar' },
    { value: 'xlarge', label: 'Sangat Besar' },
  ];

  return (
    <div className="relative inline-block text-left font-['Plus_Jakarta_Sans']" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Pengaturan Aksesibilitas"
        className="inline-flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-[#45556C] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 cursor-pointer"
      >
        {/* Wheelchair SVG Icon (18x18) */}
        <svg
          className="w-[18px] h-[18px] text-[#45556C] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="4.5" r="2" />
          <path d="m14 11.5-2-3.5H9" />
          <path d="M7 16a5 5 0 1 0 5-5H8.5" />
          <path d="m14 11.5 3 7h3" />
        </svg>

        {/* Text */}
        <span className="font-['Plus_Jakarta_Sans'] font-medium text-[14px] text-[#45556C]">
          Aksesibilitas
        </span>

        {/* Chevron-down Icon (14x14) */}
        <svg
          className={`w-[14px] h-[14px] text-[#45556C] shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Pengaturan Aksesibilitas"
          className="absolute right-0 top-full mt-2 w-80 min-w-[320px] bg-white border border-slate-200 rounded-2xl shadow-lg p-5 z-50 flex flex-col gap-5"
        >
          {/* 1. Title Row */}
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] text-[#0F172B]">
              Pengaturan Aksesibilitas
            </h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Tutup panel pengaturan"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* 2. Ukuran Font */}
          <div>
            <span className="block font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#314158]">
              Ukuran Font
            </span>
            <div className="flex gap-2 mt-2" role="radiogroup" aria-label="Pilihan Ukuran Font">
              {fontOptions.map((option) => {
                const isActive = fontSize === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => setFontSize(option.value)}
                    className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium cursor-pointer transition-colors text-center ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Font Ramah Disleksia */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 pr-2">
              <span className="block font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#314158]">
                Font Ramah Disleksia
              </span>
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] text-[#62748E] mt-0.5">
                Gunakan font OpenDyslexic untuk kemudahan membaca
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={dyslexiaFont}
              onClick={() => setDyslexiaFont((prev) => !prev)}
              aria-label="Font Ramah Disleksia"
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                dyslexiaFont ? 'bg-blue-600' : 'bg-slate-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  dyslexiaFont ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* 4. Mode Kontras Tinggi */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 pr-2">
              <span className="block font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#314158]">
                Mode Kontras Tinggi
              </span>
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] text-[#62748E] mt-0.5">
                Meningkatkan kontras warna untuk visibilitas lebih baik
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={highContrast}
              onClick={() => setHighContrast((prev) => !prev)}
              aria-label="Mode Kontras Tinggi"
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                highContrast ? 'bg-blue-600' : 'bg-slate-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  highContrast ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* 5. Mode Gelap */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 pr-2">
              <span className="block font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#314158]">
                Mode Gelap
              </span>
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] text-[#62748E] mt-0.5">
                Tampilan gelap yang nyaman untuk mata
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={darkMode}
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Mode Gelap"
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                darkMode ? 'bg-blue-600' : 'bg-slate-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  darkMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* 6. Reset Button */}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={handleReset}
              className="w-full text-center font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-blue-600 hover:text-blue-700 hover:underline cursor-pointer py-1 transition-colors"
            >
              Reset ke Default
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;
