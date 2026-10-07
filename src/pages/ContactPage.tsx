import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';
import { ContactFormData } from '../types';
import { SITE } from '../config/site';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Form-encoded POST (not JSON)
      const res = await fetch(`${SITE.appUrl}/api_cwa/contact_mail`, {
        method: 'POST',
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data?.status === 'success') {
        setSubmitted(true);
      } else {
        setErrorMessage(data?.msg || 'Your message could not be sent. Please try again.');
      }
    } catch {
      setErrorMessage('Your message could not be sent. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-white border border-slate-200 text-slate-950 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>Customer Support</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Contact {SITE.name}
              </h1>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Have questions about decoding a specific VIN, need help locating your build sheet, or seeking volume access for your dealership? Our automotive team is ready to assist.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xs bg-slate-100 border border-slate-200 text-slate-950 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Toll-Free Support Line
                  </span>
                  <a
                    href={SITE.phoneHref}
                    className="text-base font-bold text-slate-950 hover:text-blue-600 transition-colors"
                  >
                    {SITE.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Open 24/7</p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-sm border border-slate-200 shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xs bg-slate-100 border border-slate-200 text-slate-950 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Direct Email
                  </span>
                  <a
                    href={SITE.emailHref}
                    className="text-base font-bold text-slate-950 hover:text-blue-600 transition-colors"
                  >
                    {SITE.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Responses typically within 2-4 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-sm p-6 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h2 className="text-xl font-bold text-slate-950">Send us a Message</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill in your details below and our team will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Robert Smith"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xs text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-950 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="robert@example.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xs text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-950 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                    How Can We Help You? <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the vehicle or questions regarding your order..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xs text-sm focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-950 transition-all"
                  />
                </div>

                <button
                  id="btn-submit-contact"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xs bg-slate-950 hover:bg-slate-800 text-white font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border-l-4 border-red-600 text-xs text-red-800 rounded-xs">
                    {errorMessage}
                  </div>
                )}
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">Message Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}. Our automotive support specialists will review your inquiry and contact you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xs bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
