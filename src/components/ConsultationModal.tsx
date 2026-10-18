import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const [category, setCategory] = useState<'buy' | 'sell' | 'corp'>('buy');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('Lexus LS500h / Executive Hybrid');
  const [budget, setBudget] = useState('5,000,000');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#dae2fd]"
        onClick={(e) => e.stopPropagation()}
        id="consultation-modal-card"
      >
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#eff4ff] text-[#004ac6] rounded-full flex items-center justify-center mx-auto shadow-inner border border-[#dce9ff]">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b1c30]">
              {t.modal_success_title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              {t.modal_success_desc}
            </p>
            <div className="bg-[#f8f9ff] p-4 rounded-xl text-left text-xs font-mono space-y-1.5 border border-[#eff4ff]">
              <div><span className="text-slate-500">Case Reference:</span> <strong className="text-[#004ac6]">#KS-REQ-2026-9921</strong></div>
              <div><span className="text-slate-500">Target Vehicle:</span> {vehicle}</div>
              <div><span className="text-slate-500">Budget Ceiling:</span> ¥{budget}</div>
              <div><span className="text-slate-500">Representative:</span> {name || 'Apex Procurement'}</div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="mt-4 px-6 py-2.5 rounded-lg bg-[#004ac6] text-white font-semibold text-sm hover:bg-[#003da8] transition-all shadow-md shadow-[#004ac6]/20"
              id="consultation-close-success-btn"
            >
              {lang === 'ja' ? '確認して閉じる' : 'Close & Return to Platform'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-[#eff4ff] pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#004ac6]">
                  K-SOLUTIONS Transaction Advisory
                </span>
                <h3 className="text-lg md:text-xl font-bold text-[#0b1c30]">
                  {t.modal_consult_title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                id="consultation-close-x-btn"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              {t.modal_consult_desc}
            </p>

            {/* Category tabs */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                {t.modal_type_label}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setCategory('buy')}
                  className={`py-2 px-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all ${
                    category === 'buy'
                      ? 'bg-[#004ac6] text-white border-[#004ac6] shadow-sm shadow-[#004ac6]/20'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {t.modal_type_buy}
                </button>
                <button
                  type="button"
                  onClick={() => setCategory('sell')}
                  className={`py-2 px-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all ${
                    category === 'sell'
                      ? 'bg-[#004ac6] text-white border-[#004ac6] shadow-sm shadow-[#004ac6]/20'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {t.modal_type_sell}
                </button>
                <button
                  type="button"
                  onClick={() => setCategory('corp')}
                  className={`py-2 px-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all ${
                    category === 'corp'
                      ? 'bg-[#004ac6] text-white border-[#004ac6] shadow-sm shadow-[#004ac6]/20'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {t.modal_type_corp}
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  {t.modal_name} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'ja' ? '山田 太郎 / 社名' : 'e.g. John Doe / Apex Corp'}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  {t.modal_email} *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@company.jp"
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-transparent bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  {t.modal_phone}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="03-1234-5678"
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  {t.modal_budget}
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="5,000,000"
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-transparent bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {t.modal_vehicle}
              </label>
              <input
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                placeholder="2024 Lexus LS500h / Toyota Alphard Executive"
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-transparent bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {t.modal_notes}
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={lang === 'ja' ? 'サンルーフ必須、禁煙車、4月納車希望など' : 'Sunroof required, non-smoking, delivery by April, etc.'}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004ac6] focus:border-transparent bg-white"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#eff4ff]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0b1c30] rounded-lg hover:bg-slate-100 transition-colors"
                id="consultation-cancel-btn"
              >
                {t.modal_cancel}
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-[#004ac6] text-white text-sm font-semibold hover:bg-[#003da8] transition-all shadow-md shadow-[#004ac6]/20 active:scale-[0.99]"
                id="consultation-submit-btn"
              >
                {t.modal_submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
