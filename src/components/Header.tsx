import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  activeScreen: 'site' | 'portal';
  onNavigateScreen: (screen: 'site' | 'portal') => void;
  onRequestConsultation: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  activeScreen,
  onNavigateScreen,
  onRequestConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (activeScreen !== 'site') {
      onNavigateScreen('site');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label: t.nav_home },
    { id: 'how-it-works', label: t.nav_how_it_works },
    { id: 'services', label: t.nav_services },
    { id: 'inspection', label: lang === 'ja' ? '実車診断基準' : 'Inspection' },
    { id: 'platform', label: lang === 'ja' ? 'プラットフォーム' : 'Platform' },
    { id: 'pricing', label: t.nav_pricing },
    { id: 'why-k-solutions', label: t.nav_why_k_solutions },
    { id: 'about', label: t.nav_about },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#ffffff]/95 backdrop-blur-xl border-b border-[#eff4ff] shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
        <div className="h-16 sm:h-20 max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo only (per requirements, no text brand name) */}
          <div
            className="flex items-center cursor-pointer shrink-0 select-none py-1"
            onClick={() => {
              onNavigateScreen('site');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="header-brand-logo"
          >
            <img
              alt="K-SOLUTIONS Logo"
              className="h-8 sm:h-9 w-auto object-contain shrink-0"
              src="https://lh3.googleusercontent.com/aida/AEtjO1WM8GEUZjjs6gyTBNfawSqY-NA-ryKYglO47iGxngoGeyWC7-43o1ewgflXuTQ8q4yJxkCMfsPijledvFswKLOeo9YMV190ieIYOo8-pDcia7DEWpVo0Qd0NruiobJPVrHnVWHpQGF71DwGjQwFPJuSgJ7DD9PnlLsQ3D20wXj4FAuyeY01tOXLXHl-2pp4MsJozv72vocEgMDOWt0XKV__JPrdjh5dZ01K2jkYnq6htmYjih4GFqLujhg"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6" id="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs xl:text-sm font-medium transition-colors py-1 ${
                  link.id === 'hero' && activeScreen === 'site'
                    ? 'text-[#004ac6] font-bold'
                    : 'text-slate-600 hover:text-[#0b1c30]'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Language Switcher Button */}
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1 sm:gap-1.5 text-xs font-semibold px-2 sm:px-2.5 py-1.5 rounded-lg border border-[#dae2fd] text-[#0b1c30] bg-[#ffffff] hover:bg-[#f8f9ff] hover:border-[#004ac6] transition-all min-h-[36px] sm:min-h-[38px] active:scale-[0.98]"
              title={lang === 'en' ? '日本語に切り替え' : 'Switch to English'}
              id="lang-toggle-btn"
              aria-label="Switch Language"
            >
              <span className="material-symbols-outlined text-sm sm:text-base text-[#004ac6]">translate</span>
              <span className="font-medium tracking-wide">
                <span className="sm:hidden">{lang === 'en' ? 'JA' : 'EN'}</span>
                <span className="hidden sm:inline">{lang === 'en' ? '日本語' : 'English'}</span>
              </span>
            </button>

            {/* Request Consultation (Primary Action) */}
            <button
              onClick={onRequestConsultation}
              className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-2 rounded-lg bg-[#004ac6] text-white shadow-sm shadow-[#004ac6]/20 hover:bg-[#003da8] transition-all min-h-[36px] sm:min-h-[38px] active:scale-[0.99]"
              id="header-consult-btn"
            >
              <span className="material-symbols-outlined text-sm sm:text-base mr-1 hidden sm:inline">edit_document</span>
              <span>{t.nav_request_consultation}</span>
            </button>

            {/* Mobile Hamburger Menu Toggle (Visible < 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#0b1c30] hover:bg-[#eff4ff] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#004ac6]/30"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-btn"
            >
              <span className="material-symbols-outlined text-2xl text-[#0b1c30]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer & Backdrop (Fully Mobile Responsive) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop blur overlay */}
          <div
            className="fixed inset-0 bg-[#0b1c30]/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            className="relative z-10 w-full max-h-[85vh] bg-white rounded-t-2xl shadow-2xl border-t border-[#dae2fd] flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-250"
            id="mobile-drawer-panel"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#eff4ff] bg-[#f8f9ff]">
              <div className="flex items-center">
                <img
                  alt="K-SOLUTIONS Logo"
                  className="h-7 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WM8GEUZjjs6gyTBNfawSqY-NA-ryKYglO47iGxngoGeyWC7-43o1ewgflXuTQ8q4yJxkCMfsPijledvFswKLOeo9YMV190ieIYOo8-pDcia7DEWpVo0Qd0NruiobJPVrHnVWHpQGF71DwGjQwFPJuSgJ7DD9PnlLsQ3D20wXj4FAuyeY01tOXLXHl-2pp4MsJozv72vocEgMDOWt0XKV__JPrdjh5dZ01K2jkYnq6htmYjih4GFqLujhg"
                />
              </div>

              <div className="flex items-center gap-2">
                {/* Language Switcher inside Drawer */}
                <button
                  onClick={onToggleLang}
                  className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-white border border-[#dae2fd] text-[#0b1c30]"
                >
                  <span className="material-symbols-outlined text-sm text-[#004ac6]">translate</span>
                  <span>{lang === 'en' ? '日本語' : 'English'}</span>
                </button>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 min-h-[40px] min-w-[40px] flex items-center justify-center"
                  aria-label="Close"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>
            </div>

            {/* Navigation Links (Touch Targets >= 48px) */}
            <div className="overflow-y-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-left text-sm font-semibold text-slate-800 hover:bg-[#eff4ff] hover:text-[#004ac6] active:bg-[#e5eeff] transition-colors min-h-[48px]"
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-slate-400 text-lg">chevron_right</span>
                </button>
              ))}
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 border-t border-[#eff4ff] bg-[#f8f9ff] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestConsultation();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#004ac6] text-white font-semibold text-sm shadow-md shadow-[#004ac6]/20 hover:bg-[#003da8] active:scale-[0.99] transition-all flex items-center justify-center gap-2 min-h-[48px]"
                id="mobile-drawer-consult-btn"
              >
                <span className="material-symbols-outlined text-lg">edit_document</span>
                <span>{t.nav_request_consultation}</span>
              </button>

              <div className="pt-2 text-center">
                <span className="text-xs text-slate-400 font-medium">
                  K-SOLUTIONS • Tokyo, Japan
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
