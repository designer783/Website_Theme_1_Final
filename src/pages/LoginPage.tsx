import React, { useState } from 'react';
import { ShieldCheck, LogIn, Lock, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';

interface LoginPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [orderOrPassword, setOrderOrPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-50 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-sm p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 space-y-6">
        <div className="text-center">
          <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
          </div>
          <h1 className="text-2xl font-black text-slate-950 tracking-tight">
            Customer Portal Login
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Access your purchased vehicle history reports &amp; window stickers
          </p>
        </div>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your-email@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xs text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-950"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                Password or Order Confirmation #
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  value={orderOrPassword}
                  onChange={(e) => setOrderOrPassword(e.target.value)}
                  placeholder="•••••••• or DBS-XXXX"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xs text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-950"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold uppercase tracking-wider rounded-xs text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In to Portal</span>
            </button>

            <div className="text-center text-xs text-slate-500 pt-2">
              Looking for a new report?{' '}
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="text-blue-600 font-bold hover:underline"
              >
                Run VIN Search
              </button>
            </div>
          </form>
        ) : (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-950">Welcome Back!</h3>
            <p className="text-xs text-slate-600">
              Authenticated as {email || 'customer'}. You have <strong>2 unused report credits</strong> available.
            </p>
            <button
              onClick={() => onNavigate('sample')}
              className="w-full py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-bold uppercase tracking-wider text-xs rounded-xs cursor-pointer"
            >
              Browse Saved Reports
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
