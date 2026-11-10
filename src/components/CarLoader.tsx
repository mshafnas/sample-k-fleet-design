import React, { useState, useEffect } from 'react';

interface CarLoaderProps {
  onComplete?: () => void;
  lang?: 'en' | 'ja';
  minDurationMs?: number;
}

export const CarLoader: React.FC<CarLoaderProps> = ({
  onComplete,
  lang = 'ja',
  minDurationMs = 1800,
}) => {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState({
    en: 'Connecting to nationwide vehicle networks...',
    ja: '全国車両ネットワーク・提携オークションへ接続中...',
  });

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / minDurationMs) * 100));
      setProgress(rawProgress);

      if (rawProgress < 35) {
        setStageText({
          en: 'Scanning nationwide dealer & auction networks...',
          ja: '全国提携オークション・仕入れネットワークを照合中...',
        });
      } else if (rawProgress < 70) {
        setStageText({
          en: 'Calibrating digital vehicle inspection protocols...',
          ja: 'プロ査定士による実車検査プロトコルを準備中...',
        });
      } else if (rawProgress < 98) {
        setStageText({
          en: 'Loading transparent market pricing & vehicle data...',
          ja: '完全明朗な実費相場・車両データを同期中...',
        });
      } else {
        setStageText({
          en: 'Ready to buy & sell with confidence.',
          ja: '準備完了 · 確かな安心をすべての車両取引に。',
        });
      }

      if (rawProgress >= 100) {
        clearInterval(interval);
        if (onComplete) {
          setTimeout(onComplete, 250);
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [minDurationMs, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8f9ff] text-[#0b1c30] select-none overflow-hidden transition-opacity duration-300">
      {/* Background ambient lighting */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#004ac6]/10 to-[#dae2fd]/30 blur-3xl -z-10 pointer-events-none" />

      {/* Main Container Card */}
      <div className="flex flex-col items-center max-w-md w-full px-6 text-center">
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white p-2.5 rounded-xl shadow-md border border-[#dae2fd]">
            <img
              alt="K-SOLUTIONS"
              className="h-7 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1WM8GEUZjjs6gyTBNfawSqY-NA-ryKYglO47iGxngoGeyWC7-43o1ewgflXuTQ8q4yJxkCMfsPijledvFswKLOeo9YMV190ieIYOo8-pDcia7DEWpVo0Qd0NruiobJPVrHnVWHpQGF71DwGjQwFPJuSgJ7DD9PnlLsQ3D20wXj4FAuyeY01tOXLXHl-2pp4MsJozv72vocEgMDOWt0XKV__JPrdjh5dZ01K2jkYnq6htmYjih4GFqLujhg"
            />
          </div>
          <div className="text-left">
            <span className="block text-xs font-bold tracking-wider uppercase text-[#004ac6]">
              K-SOLUTIONS
            </span>
            <span className="block text-[11px] font-medium text-slate-500">
              Vehicle Transaction SaaS
            </span>
          </div>
        </div>

        {/* Dynamic Car Animation Canvas */}
        <div className="relative w-full max-w-[340px] h-32 flex items-center justify-center">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 340 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Metallic body gradient */}
              <linearGradient id="carBodyGrad" x1="40" y1="30" x2="270" y2="75" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0b1c30" />
                <stop offset="35%" stopColor="#003da8" />
                <stop offset="70%" stopColor="#004ac6" />
                <stop offset="100%" stopColor="#002b78" />
              </linearGradient>

              {/* Tinted glass gradient */}
              <linearGradient id="glassGrad" x1="110" y1="36" x2="190" y2="54" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#dae2fd" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#82a5ff" stopOpacity="0.45" />
              </linearGradient>

              {/* Headlight beam glow */}
              <linearGradient id="beamGrad" x1="260" y1="62" x2="335" y2="78" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#93c5fd" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#004ac6" stopOpacity="0" />
              </linearGradient>

              {/* Inspection laser beam gradient */}
              <linearGradient id="laserGrad" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
                <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#004ac6" stopOpacity="0" />
              </linearGradient>

              {/* Alloy wheel pattern */}
              <radialGradient id="wheelRim" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="45%" stopColor="#cbd5e1" />
                <stop offset="70%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#1e293b" />
              </radialGradient>
            </defs>

            {/* Wind / Speed Streaks (Moving Left) */}
            <g className="animate-[pulse_1.5s_ease-in-out_infinite] opacity-60">
              <line x1="30" y1="28" x2="65" y2="28" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6 8" />
              <line x1="15" y1="42" x2="45" y2="42" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 6" />
              <line x1="285" y1="36" x2="320" y2="36" stroke="#004ac6" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.5" />
            </g>

            {/* Headlight Beam Cone */}
            <polygon
              points="255,62 335,48 335,84 255,68"
              fill="url(#beamGrad)"
              className="animate-[pulse_2s_ease-in-out_infinite]"
            />

            {/* Car Chassis Group with Subtle Suspension Bounce */}
            <g className="animate-[carVibrate_1.2s_ease-in-out_infinite]">
              {/* Car Body Silhouette (Executive Sedan Profile) */}
              <path
                d="M 45 74 
                   C 45 74, 40 68, 48 64 
                   C 55 60, 75 58, 92 56 
                   C 108 54, 118 36, 140 33 
                   C 168 30, 205 32, 218 42 
                   C 228 49, 235 55, 252 59 
                   C 264 62, 268 67, 266 74 
                   C 260 75, 248 75, 240 75 
                   C 238 64, 226 56, 212 56 
                   C 198 56, 186 64, 184 75 
                   L 122 75 
                   C 120 64, 108 56, 94 56 
                   C 80 56, 68 64, 66 75 
                   Z"
                fill="url(#carBodyGrad)"
                stroke="#dae2fd"
                strokeWidth="1.2"
                filter="drop-shadow(0px 8px 12px rgba(0, 74, 198, 0.22))"
              />

              {/* Tinted Cabin Windows */}
              <path
                d="M 125 53 
                   L 142 37 
                   C 165 34, 195 35, 210 43 
                   L 224 53 
                   Z"
                fill="url(#glassGrad)"
                stroke="#ffffff"
                strokeWidth="0.8"
              />

              {/* Window Pillar / Divider */}
              <line x1="172" y1="35" x2="172" y2="53" stroke="#0b1c30" strokeWidth="2.5" />

              {/* Sleek Headlight Cluster (Cyan-White glow) */}
              <path
                d="M 256 61 C 263 63, 266 65, 266 67 L 254 67 Z"
                fill="#ffffff"
                filter="drop-shadow(0px 0px 4px #60a5fa)"
              />

              {/* Taillight LED Bar (Red) */}
              <path
                d="M 44 65 C 41 67, 41 70, 44 71 Z"
                fill="#ef4444"
                filter="drop-shadow(0px 0px 4px #ef4444)"
              />

              {/* Aerodynamic Door Line Accent */}
              <path
                d="M 112 62 Q 165 64 228 62"
                stroke="#60a5fa"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Car Door Handle Details */}
              <rect x="145" y="58" width="8" height="2" rx="1" fill="#ffffff" opacity="0.8" />
              <rect x="188" y="58" width="8" height="2" rx="1" fill="#ffffff" opacity="0.8" />

              {/* Digital Laser Inspection Scanner Beam */}
              <g className="animate-[scanTranslate_2s_easeInOut_infinite]">
                <line x1="45" y1="25" x2="45" y2="85" stroke="#00e5ff" strokeWidth="2" filter="drop-shadow(0 0 6px #00e5ff)" />
                <circle cx="45" cy="40" r="3" fill="#ffffff" filter="drop-shadow(0 0 4px #00e5ff)" />
                <circle cx="45" cy="70" r="2.5" fill="#ffffff" filter="drop-shadow(0 0 4px #00e5ff)" />
              </g>
            </g>

            {/* Wheels (Fixed position, Rotating Rims) */}
            {/* Rear Wheel (Left) */}
            <g transform="translate(94, 75)">
              {/* Outer Rubber Tire */}
              <circle cx="0" cy="0" r="14" fill="#0b1c30" stroke="#334155" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="11" fill="url(#wheelRim)" />
              {/* Spinning Alloy Spokes */}
              <g className="animate-[spin_0.6s_linear_infinite]" style={{ transformOrigin: '0px 0px' }}>
                <line x1="-8" y1="0" x2="8" y2="0" stroke="#0f172a" strokeWidth="2" />
                <line x1="0" y1="-8" x2="0" y2="8" stroke="#0f172a" strokeWidth="2" />
                <line x1="-6" y1="-6" x2="6" y2="6" stroke="#0f172a" strokeWidth="1.5" />
                <line x1="-6" y1="6" x2="6" y2="-6" stroke="#0f172a" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="3" fill="#004ac6" />
              </g>
            </g>

            {/* Front Wheel (Right) */}
            <g transform="translate(212, 75)">
              {/* Outer Rubber Tire */}
              <circle cx="0" cy="0" r="14" fill="#0b1c30" stroke="#334155" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="11" fill="url(#wheelRim)" />
              {/* Spinning Alloy Spokes */}
              <g className="animate-[spin_0.6s_linear_infinite]" style={{ transformOrigin: '0px 0px' }}>
                <line x1="-8" y1="0" x2="8" y2="0" stroke="#0f172a" strokeWidth="2" />
                <line x1="0" y1="-8" x2="0" y2="8" stroke="#0f172a" strokeWidth="2" />
                <line x1="-6" y1="-6" x2="6" y2="6" stroke="#0f172a" strokeWidth="1.5" />
                <line x1="-6" y1="6" x2="6" y2="-6" stroke="#0f172a" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="3" fill="#004ac6" />
              </g>
            </g>

            {/* Road Surface & Dashed High-Speed Highway Line */}
            <line x1="15" y1="91" x2="325" y2="91" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
            <line
              x1="20"
              y1="97"
              x2="320"
              y2="97"
              stroke="#004ac6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="16 14"
              className="animate-[roadMove_0.4s_linear_infinite]"
            />
          </svg>
        </div>

        {/* Progress Bar & Percentage Gauge */}
        <div className="w-full mt-4 max-w-xs">
          <div className="flex items-center justify-between text-xs font-semibold mb-2">
            <span className="text-[#004ac6] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm animate-spin">autorenew</span>
              <span>{lang === 'ja' ? '車両データ同期中' : 'Synchronizing'}</span>
            </span>
            <span className="text-xs font-bold text-[#0b1c30] font-tabular tracking-wider">
              {progress}%
            </span>
          </div>

          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden p-0.5 border border-[#dae2fd]">
            <div
              className="h-full bg-gradient-to-r from-[#004ac6] via-[#2563eb] to-[#38bdf8] rounded-full transition-all duration-75 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Contextual Status Message */}
        <div className="mt-4 min-h-[36px] flex flex-col items-center justify-center">
          <p className="text-xs sm:text-sm font-semibold text-[#0b1c30] tracking-wide transition-all duration-300">
            {lang === 'ja' ? stageText.ja : stageText.en}
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            {lang === 'ja' ? '安心の専門査定 · 完全明朗価格 · 全国陸送手配' : 'Professional Appraisals · Transparent Fees · Nationwide Delivery'}
          </p>
        </div>
      </div>

      {/* Embedded keyframe styles for smooth hardware-accelerated animations */}
      <style>{`
        @keyframes carVibrate {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-1.5px); }
        }
        @keyframes scanTranslate {
          0% { transform: translateX(0px); opacity: 0; }
          15% { opacity: 0.9; }
          85% { opacity: 0.9; }
          100% { transform: translateX(200px); opacity: 0; }
        }
        @keyframes roadMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -30; }
        }
      `}</style>
    </div>
  );
};
