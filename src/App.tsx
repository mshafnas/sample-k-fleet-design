import React, { useState } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './i18n/translations';
import { WORKFLOW_STAGES, PRICING_TIERS } from './data/mockCases';
import { Header } from './components/Header';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ja');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  // Pricing calculator state
  const [calcVehiclePrice, setCalcVehiclePrice] = useState<number>(4500000);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const t = TRANSLATIONS[lang];

  // Language toggle
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ja' : 'en'));
  };

  // Calculate pricing tier for calculator
  const getCalculatedFees = (price: number) => {
    let corp = 400000;
    let ind = 700000;
    if (price <= 1000000) {
      corp = 200000;
      ind = 300000;
    } else if (price <= 2000000) {
      corp = 250000;
      ind = 400000;
    } else if (price <= 3000000) {
      corp = 300000;
      ind = 500000;
    } else if (price <= 4000000) {
      corp = 350000;
      ind = 600000;
    } else if (price <= 5000000) {
      corp = 400000;
      ind = 700000;
    } else if (price <= 7000000) {
      corp = 500000;
      ind = 800000;
    } else if (price <= 10000000) {
      corp = 600000;
      ind = 1000000;
    } else {
      return { corp: 'Custom Quote', ind: 'Custom Quote', totalCorp: price + 700000 };
    }
    return {
      corp: `¥${corp.toLocaleString()}`,
      ind: `¥${ind.toLocaleString()}`,
      totalCorp: price + corp + 68000 + 55000 + 142000,
    };
  };

  const calculated = getCalculatedFees(calcVehiclePrice);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] selection:bg-[#004ac6] selection:text-white">
      {/* Fixed Navigation Header */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        activeScreen="site"
        onNavigateScreen={() => {}}
        onRequestConsultation={() => setIsConsultModalOpen(true)}
      />

      {/* MAIN OVERVIEW & INSTITUTIONAL PRESENTATION SCREENS */}
      <main className="w-full pt-20 bg-[#f8f9ff]">
        <div className="flex flex-col w-full">
            {/* 1. HERO SECTION */}
            <section
              id="hero"
              className="relative w-full pt-6 md:pt-10 pb-12 md:pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-gradient-to-b from-white via-[#f8f9ff] to-[#eff4ff]"
            >
              <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Typography & CTAs */}
                <div className="lg:col-span-6 flex flex-col items-start z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eff4ff] text-[#004ac6] text-xs font-semibold mb-4 shadow-sm border border-[#dae2fd]">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#004ac6] animate-pulse"></span>
                    <span>{t.hero_badge}</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1c30] tracking-tight leading-[1.15] mb-4">
                    {t.hero_title_line1} <br className="hidden sm:inline" />
                    {t.hero_title_line2}
                  </h1>

                  <p className="text-base md:text-lg text-slate-600 max-w-xl mb-6 leading-relaxed">
                    {t.hero_subtitle}
                  </p>

                  {/* CTA Cluster */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                    <button
                      onClick={() => setIsConsultModalOpen(true)}
                      className="inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-lg bg-[#004ac6] text-white shadow-md shadow-[#004ac6]/25 hover:bg-[#003da8] transition-all active:scale-[0.99] min-h-[44px]"
                      id="hero-get-started-btn"
                    >
                      {t.hero_cta_start}
                    </button>

                    <button
                      onClick={() => {
                        const el = document.getElementById('how-it-works');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-lg bg-white text-[#0b1c30] border border-[#dae2fd] shadow-sm hover:bg-[#f8f9ff] hover:border-[#004ac6] transition-all min-h-[44px]"
                      id="hero-explore-btn"
                    >
                      {t.hero_cta_how}
                    </button>
                  </div>

                  {/* Trust Bar */}
                  <div className="w-full pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-700 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-sm border border-[#dae2fd]">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#004ac6] text-sm">verified</span>
                      <span>{t.hero_trust_inspection}</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">/</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#004ac6] text-sm">visibility</span>
                      <span>{t.hero_trust_pricing}</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">/</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#004ac6] text-sm">draw</span>
                      <span>{t.hero_trust_approval}</span>
                    </div>
                    <span className="text-slate-300 hidden sm:inline">/</span>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#004ac6] text-sm">route</span>
                      <span>{t.hero_trust_tracking}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Hero Graphic Composition */}
                <div className="lg:col-span-6 relative mt-4 lg:mt-0">
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-[#dae2fd]">
                    <img
                      className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                      alt="High-end dark metallic luxury sedan positioned under architectural studio ceiling lights with clean floor reflections in an ultra-modern vehicle showroom"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU9hMUwqRYCw3x9rL7FjYwGwQaD5nF00Nb5khoxvJ3B-hlqba09JksDYb2NrPz10gog1lT_cfJAaVgZsSG29WVXNFj3Hh0jZMk7Qv0y-iZIRJmqyNSG_66wxv8HF_FfqPmkzfD6b8y_OVsXIkZ4vZXlf5tCcldH3L3XFfb95XzsnsciC-o1NG267fgY1sepyUmgD3sgRodLXlzIU0lzs2HiSQAIJE6FU3uoSmS6sTRQzlQhqxG0qoG"
                    />

                    {/* Conceptual Product Architecture Badge */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-[#0b1c30]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-white flex items-center gap-2.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#004ac6] animate-pulse"></span>
                      <span className="text-xs font-medium tracking-wide">
                        {lang === 'ja'
                          ? '有資格査定士の実車検査 · 明朗エスクロー決済 · 電子契約基盤'
                          : 'Certified Inspection · Itemized Escrow · CloudSign e-Contracts'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. PROBLEM / VALUE PROPOSITION SECTION */}
            <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="max-w-2xl mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#004ac6] mb-2">
                    {t.value_badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mb-3">
                    {t.value_title}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t.value_desc}
                  </p>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Card 1 */}
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#004ac6] mb-4">
                        <span className="material-symbols-outlined text-2xl">visibility</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0b1c30] mb-2">
                        {t.pill_transparency_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t.pill_transparency_desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-3 border-t border-[#dae2fd]/60 flex items-center gap-1 text-[#004ac6] text-xs font-semibold">
                      <span>{t.pill_transparency_point}</span>
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#004ac6] mb-4">
                        <span className="material-symbols-outlined text-2xl">engineering</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0b1c30] mb-2">
                        {t.pill_inspection_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t.pill_inspection_desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-3 border-t border-[#dae2fd]/60 flex items-center gap-1 text-[#004ac6] text-xs font-semibold">
                      <span>{t.pill_inspection_point}</span>
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#004ac6] mb-4">
                        <span className="material-symbols-outlined text-2xl">account_tree</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0b1c30] mb-2">
                        {t.pill_workflow_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t.pill_workflow_desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-3 border-t border-[#dae2fd]/60 flex items-center gap-1 text-[#004ac6] text-xs font-semibold">
                      <span>{t.pill_workflow_point}</span>
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#004ac6] mb-4">
                        <span className="material-symbols-outlined text-2xl">dashboard_customize</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0b1c30] mb-2">
                        {t.pill_visibility_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t.pill_visibility_desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-3 border-t border-[#dae2fd]/60 flex items-center gap-1 text-[#004ac6] text-xs font-semibold">
                      <span>{t.pill_visibility_point}</span>
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. HOW IT WORKS (11 EXPLICIT WORKFLOW STAGES) */}
            <section
              id="how-it-works"
              className="w-full py-16 px-4 md:px-8 lg:px-12 bg-[#eff4ff]"
            >
              <div className="max-w-[1440px] mx-auto">
                <div className="max-w-2xl mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#004ac6] mb-2">
                    {t.workflow_badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mb-3">
                    {t.workflow_title}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t.workflow_desc}
                  </p>
                </div>

                {/* 11 Stages Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {WORKFLOW_STAGES.map((st, idx) => {
                    const isStep5 = st.step === '05';
                    return (
                      <div
                        key={st.step}
                        className={`p-4 bg-white rounded-xl shadow-sm border flex flex-col justify-between transition-all ${
                          isStep5
                            ? 'border-[#004ac6] ring-1 ring-[#004ac6] shadow-md relative overflow-hidden'
                            : 'border-[#dae2fd] hover:border-[#004ac6]'
                        }`}
                      >
                        {isStep5 && (
                          <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/10 rounded-bl-full pointer-events-none"></div>
                        )}
                        <div>
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-xs font-mono font-bold mb-2 ${
                              isStep5 ? 'bg-[#004ac6] text-white' : 'bg-[#eff4ff] text-[#004ac6]'
                            }`}
                          >
                            {st.step}
                          </span>
                          <div
                            className={`text-sm font-bold mb-1 ${
                              isStep5 ? 'text-[#004ac6]' : 'text-[#0b1c30]'
                            }`}
                          >
                            {lang === 'ja' ? st.nameJa : st.nameEn}
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {lang === 'ja' ? st.descJa : st.descEn}
                          </p>
                        </div>
                        <div
                          className={`mt-4 text-xs font-semibold ${
                            isStep5 ? 'text-[#004ac6]' : 'text-slate-500'
                          }`}
                        >
                          {lang === 'ja' ? st.badgeJa : st.badgeEn}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 4. MAJOR SERVICES SECTION */}
            <section
              id="services"
              className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white"
            >
              <div className="max-w-[1440px] mx-auto">
                <div className="max-w-2xl mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#004ac6] mb-2">
                    {t.services_badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mb-3">
                    {t.services_title}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t.services_desc}
                  </p>
                </div>

                {/* 6 Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Service 1 */}
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-[#004ac6] tracking-wider mb-2">
                        {t.srv_01_cat}
                      </div>
                      <h3 className="text-lg font-bold text-[#0b1c30] mb-2">
                        {t.srv_01_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        {t.srv_01_desc}
                      </p>
                      <div className="bg-white/80 p-3 rounded-lg text-xs text-slate-600 space-y-1 border border-[#eff4ff]">
                        <div>{t.srv_01_pt1}</div>
                        <div>{t.srv_01_pt2}</div>
                        <div>{t.srv_01_pt3}</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-3 flex items-center text-[#004ac6] text-xs font-semibold">
                      <span>{t.srv_01_tag}</span>
                      <span className="material-symbols-outlined ml-1 text-sm">tune</span>
                    </div>
                  </div>

                  {/* Service 2 */}
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-[#004ac6] tracking-wider mb-2">
                        {t.srv_02_cat}
                      </div>
                      <h3 className="text-lg font-bold text-[#0b1c30] mb-2">
                        {t.srv_02_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        {t.srv_02_desc}
                      </p>
                      <div className="bg-white/80 p-3 rounded-lg text-xs text-slate-600 space-y-1 border border-[#eff4ff]">
                        <div>{t.srv_02_pt1}</div>
                        <div>{t.srv_02_pt2}</div>
                        <div>{t.srv_02_pt3}</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-3 flex items-center text-[#004ac6] text-xs font-semibold">
                      <span>{t.srv_02_tag}</span>
                      <span className="material-symbols-outlined ml-1 text-sm">trending_up</span>
                    </div>
                  </div>

                  {/* Service 3 */}
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-[#004ac6] tracking-wider mb-2">
                        {t.srv_03_cat}
                      </div>
                      <h3 className="text-lg font-bold text-[#0b1c30] mb-2">
                        {t.srv_03_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        {t.srv_03_desc}
                      </p>
                      <div className="bg-white/80 p-3 rounded-lg text-xs text-slate-600 space-y-1 border border-[#eff4ff]">
                        <div>{t.srv_03_pt1}</div>
                        <div>{t.srv_03_pt2}</div>
                        <div>{t.srv_03_pt3}</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-3 flex items-center text-[#004ac6] text-xs font-semibold">
                      <span>{t.srv_03_tag}</span>
                      <span className="material-symbols-outlined ml-1 text-sm">verified_user</span>
                    </div>
                  </div>

                  {/* Service 4 */}
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-[#004ac6] tracking-wider mb-2">
                        {t.srv_04_cat}
                      </div>
                      <h3 className="text-lg font-bold text-[#0b1c30] mb-2">
                        {t.srv_04_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        {t.srv_04_desc}
                      </p>
                      <div className="bg-white/80 p-3 rounded-lg text-xs text-slate-600 space-y-1 border border-[#eff4ff]">
                        <div>{t.srv_04_pt1}</div>
                        <div>{t.srv_04_pt2}</div>
                        <div>{t.srv_04_pt3}</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-3 flex items-center text-[#004ac6] text-xs font-semibold">
                      <span>{t.srv_04_tag}</span>
                      <span className="material-symbols-outlined ml-1 text-sm">receipt_long</span>
                    </div>
                  </div>

                  {/* Service 5 */}
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-[#004ac6] tracking-wider mb-2">
                        {t.srv_05_cat}
                      </div>
                      <h3 className="text-lg font-bold text-[#0b1c30] mb-2">
                        {t.srv_05_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        {t.srv_05_desc}
                      </p>
                      <div className="bg-white/80 p-3 rounded-lg text-xs text-slate-600 space-y-1 border border-[#eff4ff]">
                        <div>{t.srv_05_pt1}</div>
                        <div>{t.srv_05_pt2}</div>
                        <div>{t.srv_05_pt3}</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-3 flex items-center text-[#004ac6] text-xs font-semibold">
                      <span>{t.srv_05_tag}</span>
                      <span className="material-symbols-outlined ml-1 text-sm">history_edu</span>
                    </div>
                  </div>

                  {/* Service 6 */}
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-bold text-[#004ac6] tracking-wider mb-2">
                        {t.srv_06_cat}
                      </div>
                      <h3 className="text-lg font-bold text-[#0b1c30] mb-2">
                        {t.srv_06_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                        {t.srv_06_desc}
                      </p>
                      <div className="bg-white/80 p-3 rounded-lg text-xs text-slate-600 space-y-1 border border-[#eff4ff]">
                        <div>{t.srv_06_pt1}</div>
                        <div>{t.srv_06_pt2}</div>
                        <div>{t.srv_06_pt3}</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-3 flex items-center text-[#004ac6] text-xs font-semibold">
                      <span>{t.srv_06_tag}</span>
                      <span className="material-symbols-outlined ml-1 text-sm">folder_managed</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. INSPECTION PROTOCOL SHOWCASE */}
            <section id="inspection" className="w-full py-16 px-4 md:px-8 lg:px-12 bg-[#eff4ff]">
              <div className="max-w-[1440px] mx-auto">
                <div className="max-w-2xl mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#004ac6] mb-2">
                    {t.insp_badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mb-3">
                    {t.insp_title}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t.insp_desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Inspection Photography */}
                  <div className="lg:col-span-5">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-slate-900 border border-[#dae2fd]">
                      <img
                        className="w-full h-full object-cover object-center"
                        alt="Automotive engineer conducting a precise digital tablet vehicle inspection inside a brightly lit clinical white automotive technical facility next to a luxury vehicle"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9bT9ftkysud7FWZ_kNL7Kzjdt7K8mUAb4BJPVK01pk1XY-6Kz_AtJSSUCDWLp6-0UCjIwfgNULQnPDhirB8DqO6B-0TrdYyY8ZGPtngSC6adZxhhkrBzgNHZhKR7SqjbgIg2dJn57MeiTN0OsgrJ5Fdef-od9kH8IE9ocMN1QbxDQvNPGTVCz1AGjimNdQCDnvt_jr5f-ki11TUygb7WAEwrYh3eH5fgAYOCoFuB1FmEduW7NP_qo"
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#0b1c30] shadow-sm flex items-center gap-1.5 border border-[#dae2fd]">
                        <span className="w-2 h-2 rounded-full bg-[#004ac6] animate-pulse"></span>
                        <span>150+ Diagnostic Points</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 4 Diagnostic Pillars & Quality Guarantees */}
                  <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-[#dae2fd] flex flex-col gap-5">
                    <div className="border-b border-[#eff4ff] pb-3 flex items-center justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#004ac6] font-bold">
                          {lang === 'ja' ? '技術診断モジュール' : 'Diagnostic Framework'}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-[#0b1c30]">
                          {lang === 'ja' ? '厳格な4大査定項目' : 'Core Diagnostic Checkpoints'}
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#eff4ff] text-[#004ac6] border border-[#dae2fd]">
                        {lang === 'ja' ? '完全独立検査' : 'Certified Standard'}
                      </span>
                    </div>

                    {/* 4 Diagnostic Pillars */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-[#eff4ff]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="material-symbols-outlined text-[#004ac6] text-lg">engineering</span>
                          <h4 className="text-xs font-bold text-[#0b1c30]">{t.insp_diag1_title}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{t.insp_diag1_desc}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-[#eff4ff]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="material-symbols-outlined text-[#004ac6] text-lg">straighten</span>
                          <h4 className="text-xs font-bold text-[#0b1c30]">{t.insp_diag2_title}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{t.insp_diag2_desc}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-[#eff4ff]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="material-symbols-outlined text-[#004ac6] text-lg">shield</span>
                          <h4 className="text-xs font-bold text-[#0b1c30]">{t.insp_diag3_title}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{t.insp_diag3_desc}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#f8f9ff] border border-[#eff4ff]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="material-symbols-outlined text-[#004ac6] text-lg">verified_user</span>
                          <h4 className="text-xs font-bold text-[#0b1c30]">{t.insp_diag4_title}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{t.insp_diag4_desc}</p>
                      </div>
                    </div>

                    {/* Inspection Guarantees Bar */}
                    <div className="pt-3 border-t border-[#eff4ff] flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex flex-wrap items-center gap-4 text-slate-600">
                        <span className="inline-flex items-center gap-1 font-semibold text-[#0b1c30]">
                          <span className="material-symbols-outlined text-sm text-[#004ac6]">check_circle</span>
                          {t.insp_guarantee_neutral}
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-[#0b1c30]">
                          <span className="material-symbols-outlined text-sm text-[#004ac6]">photo_camera</span>
                          {t.insp_guarantee_photos}
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-[#0b1c30]">
                          <span className="material-symbols-outlined text-sm text-[#004ac6]">gavel</span>
                          {t.insp_guarantee_bid}
                        </span>
                      </div>
                      <button
                        onClick={() => setIsConsultModalOpen(true)}
                        className="inline-flex items-center gap-1 text-[#004ac6] font-bold hover:underline"
                      >
                        <span>{lang === 'ja' ? '検査基準について相談する' : 'Inquire on Inspection'}</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. PLATFORM ARCHITECTURE & CAPABILITIES */}
            <section id="platform" className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="max-w-2xl mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#004ac6] mb-2">
                    {t.portal_badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mb-3">
                    {t.portal_title}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t.portal_desc}
                  </p>
                </div>

                {/* 4 Architectural Capability Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#eff4ff] text-[#004ac6] flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-2xl">timeline</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0b1c30] mb-2">
                        {t.arch_col1_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t.arch_col1_desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#dae2fd]/60 text-xs font-semibold text-[#004ac6] flex items-center gap-1">
                      <span>{lang === 'ja' ? 'ステータス完全自動化' : 'Deterministic Lifecycle'}</span>
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                  </div>

                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#eff4ff] text-[#004ac6] flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-2xl">rule</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0b1c30] mb-2">
                        {t.arch_col2_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t.arch_col2_desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#dae2fd]/60 text-xs font-semibold text-[#004ac6] flex items-center gap-1">
                      <span>{lang === 'ja' ? '有資格者による客観性' : 'Independent Inspection'}</span>
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                  </div>

                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#eff4ff] text-[#004ac6] flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-2xl">account_balance</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0b1c30] mb-2">
                        {t.arch_col3_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t.arch_col3_desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#dae2fd]/60 text-xs font-semibold text-[#004ac6] flex items-center gap-1">
                      <span>{lang === 'ja' ? '不透明な上乗せゼロ' : 'Zero Hidden Markup'}</span>
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                  </div>

                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#eff4ff] text-[#004ac6] flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-2xl">history_edu</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0b1c30] mb-2">
                        {t.arch_col4_title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t.arch_col4_desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#dae2fd]/60 text-xs font-semibold text-[#004ac6] flex items-center gap-1">
                      <span>{lang === 'ja' ? 'クラウドサイン連携' : 'CloudSign Compliance'}</span>
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                  </div>
                </div>

                {/* Conceptual Workflow Journey Banner */}
                <div className="p-6 md:p-8 bg-[#0b1c30] text-white rounded-2xl border border-[#1e344f] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-[#dae2fd] uppercase tracking-wider">
                      {lang === 'ja' ? '統合トランザクションフロー' : 'Integrated End-to-End Data Pipeline'}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {lang === 'ja' ? '探索から納車まで、確かなデータで繋ぐ' : 'From Discovery to Handover — Pure Operational Clarity'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                      {lang === 'ja'
                        ? '1台ごとの車両ファイルに専任の査定記録、明細エスクロー台帳、タイムスタンプ付き電子契約が紐付けられます。'
                        : 'Every vehicle file is linked with verifiable inspection records, an itemized escrow ledger, and timestamped digital signatures.'}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsConsultModalOpen(true)}
                    className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg bg-[#004ac6] text-white shadow-md shadow-[#004ac6]/30 hover:bg-[#003da8] transition-all shrink-0 active:scale-[0.99]"
                  >
                    {lang === 'ja' ? 'プラットフォームの導入相談' : 'Inquire on Platform Integration'}
                  </button>
                </div>
              </div>
            </section>

            {/* 7. TRANSPARENT PRICING SECTION & CALCULATOR */}
            <section
              id="pricing"
              className="w-full py-16 px-4 md:px-8 lg:px-12 bg-[#eff4ff]"
            >
              <div className="max-w-[1440px] mx-auto">
                <div className="max-w-2xl mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#004ac6] mb-2">
                    {t.pricing_badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mb-3">
                    {t.pricing_title}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t.pricing_desc}
                  </p>
                </div>

                {/* Interactive Fee Estimator Widget */}
                <div className="mb-8 p-6 bg-white rounded-xl shadow-md border border-[#dae2fd]">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#004ac6] uppercase tracking-wider">
                        {lang === 'ja' ? 'リアルタイム手数料シミュレーター' : 'Interactive Service Fee Calculator'}
                      </span>
                      <h4 className="text-base font-bold text-[#0b1c30]">
                        {lang === 'ja' ? '想定車両落札価格を入力して試算' : 'Estimate fee based on target bid ceiling'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {lang === 'ja' ? 'スライダーを動かすと手数料と総支払概算が即座に計算されます。' : 'Adjust the target price to see tiered corporate and individual fees.'}
                      </p>
                    </div>

                    <div className="flex-1 max-w-md space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-slate-600">{lang === 'ja' ? '車両落札想定額:' : 'Target Bid Price:'}</span>
                        <span className="text-[#004ac6] text-base font-tabular">¥{calcVehiclePrice.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="500000"
                        max="12000000"
                        step="250000"
                        value={calcVehiclePrice}
                        onChange={(e) => setCalcVehiclePrice(Number(e.target.value))}
                        className="w-full accent-[#004ac6] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                        <span>¥500,000</span>
                        <span>¥5,000,000</span>
                        <span>¥12,000,000+</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-[#f8f9ff] p-4 rounded-xl border border-[#eff4ff] shrink-0">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-500">{t.pricing_col_corp}</div>
                        <div className="text-base font-extrabold text-[#004ac6] font-tabular">{calculated.corp}</div>
                      </div>
                      <div className="h-8 w-px bg-slate-200"></div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-500">{t.pricing_col_ind}</div>
                        <div className="text-base font-bold text-slate-900 font-tabular">{calculated.ind}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Table */}
                <div className="w-full bg-white rounded-xl shadow-md overflow-x-auto mb-8 border border-[#dae2fd]">
                  <table className="w-full text-left border-collapse min-w-[640px]">
                    <thead>
                      <tr className="bg-[#eff4ff] text-[#0b1c30] text-xs font-bold uppercase tracking-wider border-b border-[#dae2fd]">
                        <th className="py-4 px-6">{t.pricing_col_band}</th>
                        <th className="py-4 px-6 text-[#004ac6]">{t.pricing_col_corp}</th>
                        <th className="py-4 px-6">{t.pricing_col_ind}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eff4ff] text-xs sm:text-sm text-slate-800">
                      {PRICING_TIERS.map((tier, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#f8f9ff] transition-colors"
                        >
                          <td className="py-3.5 px-6 font-mono font-medium">
                            {lang === 'ja' ? tier.bandJa : tier.bandEn}
                          </td>
                          <td className="py-3.5 px-6 font-mono font-bold text-[#004ac6]">
                            {tier.corpFee}
                          </td>
                          <td className="py-3.5 px-6 font-mono text-slate-700">
                            {tier.indFee}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Corporate Membership Callout */}
                <div className="p-6 md:p-8 bg-white rounded-2xl shadow-md border border-[#dae2fd] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-bold bg-[#eff4ff] text-[#004ac6] border border-[#dce9ff] mb-2">
                      {t.pricing_member_badge}
                    </div>
                    <h3 className="text-xl font-bold text-[#0b1c30]">
                      {t.pricing_member_title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1 leading-relaxed">
                      {t.pricing_member_desc}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsConsultModalOpen(true)}
                    className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg bg-[#004ac6] text-white shadow-md shadow-[#004ac6]/25 hover:bg-[#003da8] transition-all shrink-0 active:scale-[0.99]"
                  >
                    {t.pricing_inquire_btn}
                  </button>
                </div>

                <p className="text-xs text-slate-500 mt-4">
                  {t.pricing_disclaimer}
                </p>
              </div>
            </section>

            {/* 8. CORPORATE MEMBERSHIP SECTION */}
            <section id="fleet" className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="max-w-2xl mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#004ac6] mb-2">
                    {t.fleet_badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mb-3">
                    {t.fleet_title}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t.fleet_desc}
                  </p>
                </div>

                {/* 6 Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd]">
                    <div className="text-[#004ac6] mb-3">
                      <span className="material-symbols-outlined text-3xl">corporate_fare</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0b1c30] mb-1">
                      {t.fleet_f1_title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.fleet_f1_desc}
                    </p>
                  </div>

                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd]">
                    <div className="text-[#004ac6] mb-3">
                      <span className="material-symbols-outlined text-3xl">percent</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0b1c30] mb-1">
                      {t.fleet_f2_title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.fleet_f2_desc}
                    </p>
                  </div>

                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd]">
                    <div className="text-[#004ac6] mb-3">
                      <span className="material-symbols-outlined text-3xl">group_add</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0b1c30] mb-1">
                      {t.fleet_f3_title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.fleet_f3_desc}
                    </p>
                  </div>

                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd]">
                    <div className="text-[#004ac6] mb-3">
                      <span className="material-symbols-outlined text-3xl">fact_check</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0b1c30] mb-1">
                      {t.fleet_f4_title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.fleet_f4_desc}
                    </p>
                  </div>

                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd]">
                    <div className="text-[#004ac6] mb-3">
                      <span className="material-symbols-outlined text-3xl">cloud_done</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0b1c30] mb-1">
                      {t.fleet_f5_title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.fleet_f5_desc}
                    </p>
                  </div>

                  <div className="p-6 bg-[#f8f9ff] rounded-xl shadow-sm border border-[#eff4ff] hover:border-[#dae2fd]">
                    <div className="text-[#004ac6] mb-3">
                      <span className="material-symbols-outlined text-3xl">manage_history</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0b1c30] mb-1">
                      {t.fleet_f6_title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.fleet_f6_desc}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. WHY K-SOLUTIONS (FOUR CORE PILLARS) */}
            <section
              id="why-k-solutions"
              className="w-full py-16 px-4 md:px-8 lg:px-12 bg-[#eff4ff]"
            >
              <div className="max-w-[1440px] mx-auto">
                <div className="max-w-2xl mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#004ac6] mb-2">
                    {t.why_badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mb-3">
                    {t.why_title}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t.why_desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-[#dae2fd]">
                    <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#004ac6] font-bold text-sm mb-4">
                      1
                    </div>
                    <h3 className="text-base font-bold text-[#0b1c30] mb-2">
                      {t.why_c1_title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t.why_c1_desc}
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl shadow-sm border border-[#dae2fd]">
                    <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#004ac6] font-bold text-sm mb-4">
                      2
                    </div>
                    <h3 className="text-base font-bold text-[#0b1c30] mb-2">
                      {t.why_c2_title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t.why_c2_desc}
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl shadow-sm border border-[#dae2fd]">
                    <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#004ac6] font-bold text-sm mb-4">
                      3
                    </div>
                    <h3 className="text-base font-bold text-[#0b1c30] mb-2">
                      {t.why_c3_title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t.why_c3_desc}
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl shadow-sm border border-[#dae2fd]">
                    <div className="w-10 h-10 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#004ac6] font-bold text-sm mb-4">
                      4
                    </div>
                    <h3 className="text-base font-bold text-[#0b1c30] mb-2">
                      {t.why_c4_title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {t.why_c4_desc}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. ABOUT THE COMPANY */}
            <section
              id="about"
              className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white"
            >
              <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#004ac6]">
                      {t.about_badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight">
                      {t.about_title}
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {t.about_desc1}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t.about_desc2}
                    </p>
                  </div>

                  <div className="lg:col-span-4 bg-[#f8f9ff] p-6 rounded-2xl border border-[#dae2fd] space-y-3">
                    <div className="text-sm font-bold text-[#0b1c30]">
                      {t.about_tenets_title}
                    </div>
                    <div className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-base">domain_verification</span>
                      <span>{t.about_t1}</span>
                    </div>
                    <div className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-base">verified</span>
                      <span>{t.about_t2}</span>
                    </div>
                    <div className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-base">receipt_long</span>
                      <span>{t.about_t3}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. FREQUENTLY ASKED QUESTIONS (FAQ) */}
            <section
              id="faq"
              className="w-full py-16 px-4 md:px-8 lg:px-12 bg-[#eff4ff]"
            >
              <div className="max-w-[1440px] mx-auto">
                <div className="max-w-2xl mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#004ac6] mb-2">
                    {t.faq_badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c30] tracking-tight mb-3">
                    {t.faq_title}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t.faq_desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { q: t.faq_q1, a: t.faq_a1 },
                    { q: t.faq_q2, a: t.faq_a2 },
                    { q: t.faq_q3, a: t.faq_a3 },
                    { q: t.faq_q4, a: t.faq_a4 },
                    { q: t.faq_q5, a: t.faq_a5 },
                    { q: t.faq_q6, a: t.faq_a6 },
                  ].map((faq, idx) => {
                    const isExpanded = expandedFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setExpandedFaqIndex(isExpanded ? null : idx)}
                        className="p-5 bg-white rounded-xl shadow-sm border border-[#dae2fd] cursor-pointer hover:border-[#004ac6] transition-all"
                      >
                        <h3 className="text-sm sm:text-base font-bold text-[#0b1c30] flex items-start justify-between gap-2">
                          <span className="flex items-start gap-2">
                            <span className="text-[#004ac6]">Q.</span>
                            <span>{faq.q}</span>
                          </span>
                          <span className="material-symbols-outlined text-slate-400 text-lg shrink-0 mt-0.5">
                            {isExpanded ? 'expand_less' : 'expand_more'}
                          </span>
                        </h3>
                        <p className={`text-xs sm:text-sm text-slate-600 pl-5 mt-2 leading-relaxed ${isExpanded ? 'block' : 'line-clamp-2 md:line-clamp-3'}`}>
                          {faq.a}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 12. PRE-FOOTER CONSULTATION BANNER */}
            <section className="w-full py-10 px-4 md:px-8 lg:px-12 bg-white">
              <div className="max-w-[1440px] mx-auto">
                <div className="w-full p-6 md:p-10 rounded-2xl bg-[#0b1c30] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#1e344f]">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff]/10 text-xs font-mono text-[#dce9ff] border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004ac6]"></span>
                      <span>{t.prefooter_badge}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                      {t.prefooter_title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                      {t.prefooter_desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsConsultModalOpen(true)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full bg-[#004ac6] text-white hover:bg-[#003da8] transition-all shadow-lg shadow-[#004ac6]/30 shrink-0 active:scale-[0.99]"
                    id="prefooter-login-btn"
                  >
                    <span>{t.prefooter_btn}</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            </section>

            {/* 13. FINAL CALL TO ACTION (CTA) */}
            <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-[#eff4ff] text-center">
              <div className="max-w-3xl mx-auto flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0b1c30] tracking-tight mb-3">
                  {t.cta_title}
                </h2>
                <p className="text-base text-slate-600 max-w-xl mb-8 leading-relaxed">
                  {t.cta_desc}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => setIsConsultModalOpen(true)}
                    className="inline-flex items-center justify-center text-sm font-semibold px-8 py-3.5 rounded-lg bg-[#004ac6] text-white shadow-md shadow-[#004ac6]/25 hover:bg-[#003da8] transition-all active:scale-[0.99] min-h-[44px]"
                  >
                    {t.cta_start_btn}
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('how-it-works');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center text-sm font-semibold px-6 py-3.5 rounded-lg bg-white text-[#0b1c30] border border-[#dae2fd] shadow-sm hover:bg-[#f8f9ff] hover:border-[#004ac6] transition-all min-h-[44px]"
                  >
                    {t.hero_cta_how}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>

      {/* INSTITUTIONAL FOOTER */}
      <footer className="w-full bg-[#0b1c30] text-slate-300 border-t border-[#1e344f] shadow-2xl">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <img
                  alt="K-SOLUTIONS Logo"
                  className="h-7 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WM8GEUZjjs6gyTBNfawSqY-NA-ryKYglO47iGxngoGeyWC7-43o1ewgflXuTQ8q4yJxkCMfsPijledvFswKLOeo9YMV190ieIYOo8-pDcia7DEWpVo0Qd0NruiobJPVrHnVWHpQGF71DwGjQwFPJuSgJ7DD9PnlLsQ3D20wXj4FAuyeY01tOXLXHl-2pp4MsJozv72vocEgMDOWt0XKV__JPrdjh5dZ01K2jkYnq6htmYjih4GFqLujhg"
                />
                <span className="font-bold text-lg text-white">K-SOLUTIONS</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                {t.footer_desc}
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-bold text-white">
                {t.footer_product}
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#inspection" className="hover:text-white transition-colors">{t.footer_p1}</a></li>
                <li><a href="#platform" className="hover:text-white transition-colors">{t.footer_p2}</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">{t.footer_p3}</a></li>
                <li><a href="#fleet" className="hover:text-white transition-colors">{t.footer_p4}</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-bold text-white">
                {lang === 'ja' ? 'システム & ガバナンス' : 'Platform & Governance'}
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">{t.nav_how_it_works}</a></li>
                <li><a href="#inspection" className="hover:text-white transition-colors">{lang === 'ja' ? '実車診断基準' : 'Inspection Standards'}</a></li>
                <li><a href="#why-k-solutions" className="hover:text-white transition-colors">{t.nav_why_k_solutions}</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">{t.nav_about}</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-bold text-white">
                {t.footer_legal}
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><span className="hover:text-white transition-colors cursor-pointer">{t.footer_l1}</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">{t.footer_l2}</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">{t.footer_l4}</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1e344f] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>{t.footer_copyright}</p>
            <div className="flex items-center gap-4">
              <span>{t.footer_iso}</span>
              <span>•</span>
              <span>{t.footer_fincen}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
