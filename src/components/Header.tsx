import React, { useState } from 'react';
import { PageRoute } from '../types';
import { User, Menu, X } from 'lucide-react';
import { SITE } from '../config/site';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenLookup: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenLookup,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageRoute }[] = [
    { label: 'Vehicle History', page: 'vehicle-history' },
    { label: 'Sample Report', page: 'sample' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Contact Us', page: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 transition-all">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo - Reference Style */}
        <button
          id="nav-brand-logo"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <img
            src={SITE.logo}
            alt={SITE.name}
            className="h-14 w-auto object-contain group-hover:opacity-80 transition-opacity"
          />
        </button>

        {/* Desktop Navigation - Reference Style */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                id={`nav-link-${item.page}`}
                onClick={() => {
                  onNavigate(item.page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`cursor-pointer px-3.5 py-1.5 rounded-xs text-xs font-bold transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls - Reference Style */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            id="nav-login-btn"
            onClick={() => { window.location.href = SITE.loginUrl; }}
            className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs border border-slate-900 bg-slate-950 text-white hover:bg-blue-600 hover:border-blue-600 active:scale-[0.98] transition-all duration-150 text-xs font-bold uppercase tracking-wider shadow-2xs group"
          >
            <span className="w-5 h-5 rounded-xs bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <User className="w-3 h-3 text-blue-300 group-hover:text-white transition-colors" />
            </span>
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-2.5 py-1.5 rounded-xs border border-slate-200 text-slate-800 hover:bg-slate-100 hover:text-slate-950 focus:outline-none font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <>
                <X className="w-4 h-4 text-slate-900" />
                <span>Close</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4 text-slate-900" />
                <span>Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150 mt-3.5">
          <div className="space-y-1">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-3 py-2.5 rounded-xs text-xs font-bold flex items-center justify-between ${
                currentPage === 'home' ? 'bg-blue-50 text-blue-600' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Home</span>
            </button>

            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-left px-3 py-2.5 rounded-xs text-xs font-bold ${
                  currentPage === item.page
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = SITE.loginUrl;
              }}
              className="w-full py-2.5 px-4 rounded-xs border border-slate-900 bg-slate-950 text-white hover:bg-blue-600 active:scale-[0.98] transition-all font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
            >
              <span className="w-5 h-5 rounded-xs bg-white/10 flex items-center justify-center">
                <User className="w-3 h-3 text-blue-300" />
              </span>
              <span>Login</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
