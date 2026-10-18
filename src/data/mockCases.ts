import { TransactionCase, WorkflowStage } from '../types';

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: '01',
    nameEn: 'Request Received',
    nameJa: 'リクエスト受付',
    descEn: 'Vehicle search or sale criteria logged with structured parameters.',
    descJa: '調達または売却希望条件を詳細パラメータとしてシステムへ登録。',
    badgeEn: 'Stage Initiated',
    badgeJa: '受付完了',
  },
  {
    step: '02',
    nameEn: 'Vehicle Search',
    nameJa: '車両探索・選定',
    descEn: 'Real-time scan across verified wholesale auctions and inventories.',
    descJa: '全国の加盟業者オークションおよび提携共有在庫をリアルタイム走査。',
    badgeEn: 'Matching Active',
    badgeJa: '照合実行中',
  },
  {
    step: '03',
    nameEn: 'Under Inspection',
    nameJa: '現地実車検査',
    descEn: 'Physical appraisal, defect documentation, and risk scoring conducted.',
    descJa: '有資格査定士による現地実車確認、傷・修復歴の精査、リスク採点。',
    badgeEn: 'On-Site Dispatch',
    badgeJa: '査定士派遣中',
  },
  {
    step: '04',
    nameEn: 'Proposal',
    nameJa: '提案書・見積作成',
    descEn: 'Complete vehicle report, itemized estimate, and bid recommendation prepared.',
    descJa: '実車検査報告書、全費用明細内訳、および入札推奨価格の提示パッケージ。',
    badgeEn: 'Data Package Ready',
    badgeJa: '提案書完成',
  },
  {
    step: '05',
    nameEn: 'Waiting for Approval',
    nameJa: '顧客承認待ち',
    descEn: 'Customer reviews total cost and inspection report to confirm or decline.',
    descJa: 'お客様による総額費用・検査内容の最終確認および承認判断。',
    badgeEn: 'Decision Gate',
    badgeJa: '判定フェーズ',
  },
  {
    step: '06',
    nameEn: 'E-Sign Contract',
    nameJa: '電子契約締結',
    descEn: 'Legally binding transaction terms executed digitally via CloudSign.',
    descJa: 'クラウドサイン連携による法的効力を持つ電子署名・取引約款の締結。',
    badgeEn: 'Cloud Execution',
    badgeJa: 'クラウド締結',
  },
  {
    step: '07',
    nameEn: 'Bidding',
    nameJa: 'オークション応札',
    descEn: 'Authorized specialist participates up to the approved ceiling limit.',
    descJa: '事前合意された上限額を上限として専属バイヤーがオークション応札。',
    badgeEn: 'Auction Floor',
    badgeJa: '応札スタンバイ',
  },
  {
    step: '08',
    nameEn: 'Purchased',
    nameJa: '落札・車両確保',
    descEn: 'Lot secured. Winning bid confirmation and ownership documentation transferred.',
    descJa: '落札完了通知、出品店からの譲渡書類の即時照合と所有権保全。',
    badgeEn: 'Asset Secured',
    badgeJa: '落札完了',
  },
  {
    step: '09',
    nameEn: 'Payment',
    nameJa: 'エスクロー決済',
    descEn: 'Final settlement handled securely through institutional escrow rules.',
    descJa: '金融機関規定に準拠した分別管理エスクロー口座による安全な決済執行。',
    badgeEn: 'Escrow Settlement',
    badgeJa: 'エスクロー精算',
  },
  {
    step: '10',
    nameEn: 'Transport',
    nameJa: '陸送・輸送追跡',
    descEn: 'GPS-tracked nationwide carrier transit and terminal dispatch coordination.',
    descJa: 'GPS追跡可能な全国キャリアによる陸送手配、中継デポ配車管理。',
    badgeEn: 'Carrier Transit',
    badgeJa: '全国陸送中',
  },
  {
    step: '11',
    nameEn: 'Delivery',
    nameJa: '納車・登録完了',
    descEn: 'Direct handover to customer doorstep or designated corporate facility.',
    descJa: '名義変更登録完了、ご指定の企業拠点またはお客様ご自宅への直接納車。',
    badgeEn: 'Handover Complete',
    badgeJa: '納車完了',
  },
];

export const INITIAL_CASES: TransactionCase[] = [
  {
    id: 'case-8942',
    caseNumber: 'KS-2026-8942',
    titleEn: '2024 Luxury Executive Hybrid Sedan',
    titleJa: '2024年式 高級エグゼクティブ ハイブリッドセダン',
    vin: 'JTHBA-89211',
    targetAuctionDate: '2026-04-02',
    clientNameEn: 'Apex Logistics Japan',
    clientNameJa: '日本エイペックスロジスティクス株式会社',
    currentStageIndex: 4, // Step 05: Waiting for Approval
    status: 'waiting_approval',
    grade: '4.5 / A',
    mileageKm: 18450,
    engine: '3.5L V6 Multi-Stage Hybrid',
    drive: 'AWD (All-Wheel Drive)',
    exteriorColorEn: 'Sonic Titanium Metallic',
    exteriorColorJa: 'ソニックチタニウムメタリック',
    riskRatingEn: 'Low Risk (Grade 4.5A)',
    riskRatingJa: '低リスク (評価点 4.5A)',
    maxRecBidJpy: 4850000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU9hMUwqRYCw3x9rL7FjYwGwQaD5nF00Nb5khoxvJ3B-hlqba09JksDYb2NrPz10gog1lT_cfJAaVgZsSG29WVXNFj3Hh0jZMk7Qv0y-iZIRJmqyNSG_66wxv8HF_FfqPmkzfD6b8y_OVsXIkZ4vZXlf5tCcldH3L3XFfb95XzsnsciC-o1NG267fgY1sepyUmgD3sgRodLXlzIU0lzs2HiSQAIJE6FU3uoSmS6sTRQzlQhqxG0qoG',
    inspectionSummaryEn: [
      'Engine, hybrid battery telemetry, and transmission operate within factory tolerances.',
      'Minor 12mm scratch on left rear bumper skirt (Photographed & cataloged in Case File).',
      'Undercarriage clean of surface corrosion; tire tread depth measured at 7.2mm across all axles.',
      'Brake pads remaining: Front 8.5mm, Rear 8.0mm. No rotor warping detected.',
      'Interior non-smoking environment, leather seats condition A with no creases or tears.'
    ],
    inspectionSummaryJa: [
      'エンジン、ハイブリッドバッテリーテレメトリ、トランスミッションはメーカー規定値内で正常稼働。',
      '左リアバンパースカート下部に12mm程度の極小キズあり（写真撮影済み・案件ファイルに記録）。',
      '下廻りの塩害・サビなし。全輪タイヤ残溝7.2mmで均等摩耗良好。',
      'ブレーキパッド残量: フロント8.5mm / リア8.0mm。ローターの歪みやレコード摩耗なし。',
      '室内完全禁煙仕様。本革シート状態A（擦れ・シワ・へたり極少、異臭一切なし）。'
    ],
    inspectionDefects: [
      {
        id: 'df-1',
        locationEn: 'Left Rear Bumper Skirt',
        locationJa: '左リアバンパースカート下部',
        severity: 'minor',
        descEn: '12mm superficial surface scratch. Does not penetrate base primer. Clear coat buffing recommended.',
        descJa: '12mmの表面浅傷。下地塗装には達しておらず、納車前コンパウンド磨きで補修可能。'
      },
      {
        id: 'df-2',
        locationEn: 'Right Front Alloy Wheel',
        locationJa: '右フロントアルミホイール',
        severity: 'minor',
        descEn: '3mm stone chip along outer rim edge. Structural integrity 100% sound.',
        descJa: 'アウターリム端に3mmの極小飛び石痕あり。歪み・クラックなし（構造健全性100%）。'
      },
      {
        id: 'df-3',
        locationEn: 'Engine Bay & Underbody',
        locationJa: 'エンジンルーム・下廻り',
        severity: 'clean',
        descEn: 'Zero fluid leaks, rust-free subframe, factory battery health verified at 96.4%.',
        descJa: '油脂類にじみ・漏れゼロ。サブフレーム防錆状態良好。ハイブリッド駆動用バッテリー健全度96.4%。'
      }
    ],
    photos: [
      {
        id: 'p-1',
        titleEn: 'Exterior Studio Profile',
        titleJa: '外装スタジオ全景 (左前)',
        categoryEn: 'Exterior',
        categoryJa: '外装',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU9hMUwqRYCw3x9rL7FjYwGwQaD5nF00Nb5khoxvJ3B-hlqba09JksDYb2NrPz10gog1lT_cfJAaVgZsSG29WVXNFj3Hh0jZMk7Qv0y-iZIRJmqyNSG_66wxv8HF_FfqPmkzfD6b8y_OVsXIkZ4vZXlf5tCcldH3L3XFfb95XzsnsciC-o1NG267fgY1sepyUmgD3sgRodLXlzIU0lzs2HiSQAIJE6FU3uoSmS6sTRQzlQhqxG0qoG',
        noteEn: 'Clean body lines, flawless panel gaps, Sonic Titanium metallic finish.',
        noteJa: 'パネルチリのズレなし。ボディライン極めて良好。'
      },
      {
        id: 'p-2',
        titleEn: 'Field Diagnostic Inspection',
        titleJa: '現地タブレット診断・検査',
        categoryEn: 'Telemetry',
        categoryJa: '診断計測',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9bT9ftkysud7FWZ_kNL7Kzjdt7K8mUAb4BJPVK01pk1XY-6Kz_AtJSSUCDWLp6-0UCjIwfgNULQnPDhirB8DqO6B-0TrdYyY8ZGPtngSC6adZxhhkrBzgNHZhKR7SqjbgIg2dJn57MeiTN0OsgrJ5Fdef-od9kH8IE9ocMN1QbxDQvNPGTVCz1AGjimNdQCDnvt_jr5f-ki11TUygb7WAEwrYh3eH5fgAYOCoFuB1FmEduW7NP_qo',
        noteEn: 'Field engineer live OBD-II diagnostic readouts and physical confirmation.',
        noteJa: '有資格エンジニアによるOBD-IIダイアグノスティック診断と全機能確認。'
      },
      {
        id: 'p-3',
        titleEn: 'Tire Tread & Suspension',
        titleJa: 'タイヤ溝・足回り詳細',
        categoryEn: 'Undercarriage',
        categoryJa: '足回り',
        url: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80',
        noteEn: '7.2mm tread remaining on Michelin Pilot Sport tires. No dry rot.',
        noteJa: 'ミシュラン製タイヤ残溝7.2mm、ひび割れなし。'
      },
      {
        id: 'p-4',
        titleEn: 'Cockpit & Leather Trim',
        titleJa: '運転席・コックピット内装',
        categoryEn: 'Interior',
        categoryJa: '内装',
        url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
        noteEn: 'Zero scuffs on instrument cluster; leather conditioning pristine.',
        noteJa: 'インパネ・スイッチ類キズなし。革の質感良好。'
      }
    ],
    costs: [
      {
        labelEn: 'Target Auction Winning Bid (Estimated Ceiling)',
        labelJa: 'オークション予想落札額 (上限設定)',
        amount: 4500000,
        noteEn: 'Ceiling bid authorized for buyer',
        noteJa: '専属バイヤー応札上限枠'
      },
      {
        labelEn: 'K-SOLUTIONS Service Fee (Tier 5: ¥4M-¥5M)',
        labelJa: 'K-SOLUTIONS 仲介・検査サービス手数料 (Tier 5: 400万〜500万円帯)',
        amount: 400000,
        noteEn: 'Corporate Member discounted rate applied',
        noteJa: '法人会員優待レート適用済み'
      },
      {
        labelEn: 'Auction Venue Transaction & Processing Fees',
        labelJa: 'オークション会場 落札料・出品店取扱手数料',
        amount: 68000,
        noteEn: 'Official USS/TAA auction venue charge',
        noteJa: 'USS / TAA 会場規定正規料金'
      },
      {
        labelEn: 'Carrier Nationwide Transport (Kanto to Kansai)',
        labelJa: '全国専用ローダー陸送費用 (関東デポ → 関西納車先)',
        amount: 55000,
        noteEn: 'Insured enclosed carrier transit',
        noteJa: '運送保険付帯・専属キャリア便'
      },
      {
        labelEn: 'Registration, Legal Taxes & Official Plate Reassignment',
        labelJa: '名義変更・法定重量税・ナンバープレート再交付印紙代',
        amount: 142000,
        noteEn: 'Land Transport Bureau statutory fees',
        noteJa: '運輸支局法定印紙・自動車税月割'
      },
      {
        labelEn: 'Estimated Total Payable to Escrow',
        labelJa: 'エスクロー口座お振込み概算総額',
        amount: 5165000,
        isTotal: true,
        noteEn: '100% held in trust before bidding commences',
        noteJa: '落札前の確実な資金保全・信託分別管理'
      }
    ],
    contractStatus: 'pending',
    messages: [
      {
        id: 'msg-1',
        sender: 'staff',
        authorEn: 'Kenji Sato (Lead Inspector #304)',
        authorJa: '佐藤 健二 (主任査定士 #304)',
        roleEn: 'Technical Appraisal Team',
        roleJa: '技術査定部門',
        contentEn: 'Hello Apex Logistics team. We completed the physical inspection of the Lexus hybrid sedan at the Tokyo depot. Hybrid battery capacity is stellar at 96.4%. The minor bumper skirt scratch is very light and easily buffed out during pre-delivery preparation. We recommend approving with a ceiling of ¥4.5M.',
        contentJa: '日本エイペックスロジスティクス様、お世話になっております。東京中央デポにて現地査定を完了いたしました。ハイブリッドバッテリーの劣化は極めて少なく、健全度96.4%を維持しております。リアバンパーの小傷も表面クリア層の磨きで解消可能です。上限¥4,500,000でのご承認を推奨いたします。',
        timestamp: 'Today, 10:48 AM'
      },
      {
        id: 'msg-2',
        sender: 'client',
        authorEn: 'Takahiro Mori (Fleet Manager)',
        authorJa: '森 貴大 (運行管理部長)',
        roleEn: 'Apex Logistics Japan',
        roleJa: '日本エイペックスロジスティクス株式会社',
        contentEn: 'Thank you Kenji. Does the price include the navigation map software update to the 2026 Q1 revision?',
        contentJa: '佐藤様、迅速な実車検査をありがとうございます。ナビゲーションの地図データは2026年Q1版への更新込みでしょうか？',
        timestamp: 'Today, 11:15 AM'
      },
      {
        id: 'msg-3',
        sender: 'staff',
        authorEn: 'Emi Tanaka (Case Manager)',
        authorJa: '田中 えみ (専任担当)',
        roleEn: 'Client Support Services',
        roleJa: 'カスタマーサクセス',
        contentEn: 'Yes! As a Corporate Member, dealer telematics and factory SD nav update to 2026 Q1 are bundled in your pre-delivery checklist at zero extra charge.',
        contentJa: 'はい！法人会員特典として、2026年Q1最新版SDナビ更新および通信ユニット初期設定は追加料金なしで納車整備に含まれております。',
        timestamp: 'Today, 11:22 AM'
      }
    ],
    auditLog: [
      {
        id: 'aud-1',
        timeEn: '10:45 AM Today',
        timeJa: '本日 10:45',
        eventEn: 'Proposal file generated & dispatched to client approval inbox',
        eventJa: '提案書パッケージ生成完了・顧客承認トレイへ送付',
        actorEn: 'System Automated Workflow',
        actorJa: 'システム自動処理'
      },
      {
        id: 'aud-2',
        timeEn: '09:15 AM Today',
        timeJa: '本日 09:15',
        eventEn: 'Condition grade confirmed at 4.5 by Field Engineer #304',
        eventJa: '主任査定士 #304 により評価点4.5点確定・診断書サイン',
        actorEn: 'Kenji Sato (Lead Inspector)',
        actorJa: '佐藤 健二 (主任査定士)'
      },
      {
        id: 'aud-3',
        timeEn: 'Yesterday',
        timeJa: '昨日 15:30',
        eventEn: 'Lot located at Tokyo Central Auction depot & scheduled for morning physical audit',
        eventJa: '東京中央オークション会場にて車両実車確保・翌朝検査割当完了',
        actorEn: 'Depot Dispatch Specialist',
        actorJa: '会場手配担当'
      },
      {
        id: 'aud-4',
        timeEn: 'Apr 01',
        timeJa: '4月1日 11:00',
        eventEn: 'Initial acquisition request validated & budget ceiling registered',
        eventJa: '車両調達リクエスト受付確認・希望条件および予算枠確定',
        actorEn: 'Corporate Account Team',
        actorJa: '法人アカウントチーム'
      }
    ]
  },
  {
    id: 'case-9104',
    caseNumber: 'KS-2026-9104',
    titleEn: '2023 Commercial Fleet High-Roof Van',
    titleJa: '2023年式 商用ハイルーフバン (事業用車両)',
    vin: 'TRH20-55419',
    targetAuctionDate: '2026-04-05',
    clientNameEn: 'Apex Logistics Japan',
    clientNameJa: '日本エイペックスロジスティクス株式会社',
    currentStageIndex: 2, // Step 03: Under Inspection
    status: 'under_inspection',
    grade: '4.0 / B',
    mileageKm: 34100,
    engine: '2.8L Clean Diesel Turbo',
    drive: 'FR 6-Speed AT',
    exteriorColorEn: 'Pure White (Solid)',
    exteriorColorJa: 'ピュアホワイト (ソリッド)',
    riskRatingEn: 'Low-Medium (Commercial Normal)',
    riskRatingJa: '標準商用車レベル (通常摩耗のみ)',
    maxRecBidJpy: 3100000,
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    inspectionSummaryEn: [
      'Commercial grade vehicle with robust diesel powertrain in top running condition.',
      'Minor bed loading scratches inside cargo bay (typical utility use).',
      'No frame distortion, clean title with maintenance book verified.'
    ],
    inspectionSummaryJa: [
      '耐久性に優れたクリーンディーゼルターボ搭載、エンジン始動・吹け上がり極めてスムーズ。',
      '荷室フロアに通常使用に伴う小キズあり（業務利用想定範囲内）。',
      '修復歴なし・骨格部位健全、ディーラー整備記録簿完備。'
    ],
    inspectionDefects: [
      {
        id: 'df-201',
        locationEn: 'Cargo Bay Floor',
        locationJa: '荷室フロアパネル',
        severity: 'minor',
        descEn: 'Surface abrasions from logistics crates. Anti-slip floor liner intact.',
        descJa: 'コンテナ積載による擦り傷。床張り防滑加工は健全。'
      }
    ],
    photos: [
      {
        id: 'p-201',
        titleEn: 'Van Exterior Front 3/4',
        titleJa: '商用バン外観 (前右)',
        categoryEn: 'Exterior',
        categoryJa: '外装',
        url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
        noteEn: 'Clean bodywork without commercial vinyl decals.',
        noteJa: '社名看板等の剥がし痕なし、外装艶良好。'
      }
    ],
    costs: [
      {
        labelEn: 'Target Auction Winning Bid (Estimated Ceiling)',
        labelJa: 'オークション予想落札額 (上限設定)',
        amount: 2850000,
      },
      {
        labelEn: 'K-SOLUTIONS Service Fee (Tier 3: ¥2M-¥3M)',
        labelJa: 'K-SOLUTIONS サービス手数料 (Tier 3: 200万〜300万円帯)',
        amount: 300000,
      },
      {
        labelEn: 'Auction Fees, Transport & Registration',
        labelJa: '会場手数料・陸送・名義変更諸費用一式',
        amount: 195000,
      },
      {
        labelEn: 'Estimated Total Payable to Escrow',
        labelJa: 'エスクロー口座お振込み概算総額',
        amount: 3345000,
        isTotal: true,
      }
    ],
    contractStatus: 'draft',
    messages: [
      {
        id: 'm-201',
        sender: 'staff',
        authorEn: 'Hiroshi Ogawa',
        authorJa: '小川 博 (査定担当)',
        roleEn: 'Inspection Team',
        roleJa: '検査査定班',
        contentEn: 'Field assessment scheduled for 2:00 PM today at Nagoya Auction Yard. We will upload the full report by 4:00 PM.',
        contentJa: '本日14:00より名古屋オークション会場にて実車査定を実施予定です。16:00までに詳細検査レポートを反映いたします。',
        timestamp: 'Today, 08:30 AM'
      }
    ],
    auditLog: [
      {
        id: 'aud-201',
        timeEn: '08:30 AM Today',
        timeJa: '本日 08:30',
        eventEn: 'Field inspection assigned to Nagoya Hub Specialist',
        eventJa: '名古屋会場査定士への現地出動アサイン完了',
      }
    ]
  },
  {
    id: 'case-7831',
    caseNumber: 'KS-2026-7831',
    titleEn: '2025 All-Terrain Premium Luxury SUV',
    titleJa: '2025年式 プレミアム オールテレイン SUV',
    vin: 'UZJ20-99381',
    targetAuctionDate: '2026-03-25',
    clientNameEn: 'Apex Logistics Japan',
    clientNameJa: '日本エイペックスロジスティクス株式会社',
    currentStageIndex: 9, // Step 10: Transport
    status: 'transport',
    grade: '5.0 / S',
    mileageKm: 4200,
    engine: '3.3L Twin-Turbo V6',
    drive: 'Permanent 4WD',
    exteriorColorEn: 'Pearl Crystal White',
    exteriorColorJa: 'ホワイトパールクリスタルシャイン',
    riskRatingEn: 'Zero Risk (Showroom Condition)',
    riskRatingJa: 'リスクなし (極上新車同等品)',
    maxRecBidJpy: 8900000,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    inspectionSummaryEn: [
      'Showroom grade vehicle with only 4,200 km.',
      'Purchased at auction on March 25, 2026.',
      'Transport in progress via enclosed carrier with GPS live tracking.'
    ],
    inspectionSummaryJa: [
      '走行わずか4,200km、新車保証継承可能な極上コンディション。',
      '2026年3月25日に目標上限内にて無事落札。',
      '全天候型専用トランスポーターにてGPS位置追跡運行中。'
    ],
    inspectionDefects: [],
    photos: [],
    costs: [
      {
        labelEn: 'Winning Bid Settlement',
        labelJa: '落札確定金額',
        amount: 8450000,
      },
      {
        labelEn: 'K-SOLUTIONS Fee',
        labelJa: 'サービス手数料',
        amount: 600000,
      },
      {
        labelEn: 'Total Settled via Escrow',
        labelJa: 'エスクロー決済完了総額',
        amount: 9320000,
        isTotal: true,
      }
    ],
    contractStatus: 'signed',
    contractSignedAt: '2026-03-24 16:40 JST',
    contractSigner: 'Takahiro Mori (Fleet Director, Apex Logistics)',
    contractSha256: '9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b',
    messages: [
      {
        id: 'm-301',
        sender: 'staff',
        authorEn: 'Logistics Control Center',
        authorJa: 'ロジスティクス運行管理センター',
        roleEn: 'Transport Dispatch',
        roleJa: '配車管理課',
        contentEn: 'Carrier departure confirmed from Kobe Terminal. Expected arrival at Osaka HQ tomorrow morning at 09:30 AM.',
        contentJa: '神戸デポより専用ローダーが出発いたしました。明日朝09:30に大阪本社拠点へ到着予定です。',
        timestamp: 'Yesterday, 17:00'
      }
    ],
    auditLog: [
      {
        id: 'aud-301',
        timeEn: 'Yesterday 17:00',
        timeJa: '昨日 17:00',
        eventEn: 'Carrier departed Kobe Terminal with live GPS tracking',
        eventJa: '神戸ターミナルより陸送出発・GPS運行管理開始',
      }
    ]
  }
];

export const PRICING_TIERS = [
  { bandEn: 'Up to ¥1,000,000', bandJa: '100万円以下', corpFee: '¥200,000', indFee: '¥300,000' },
  { bandEn: '¥1,000,001 – ¥2,000,000', bandJa: '100万1円 – 200万円', corpFee: '¥250,000', indFee: '¥400,000' },
  { bandEn: '¥2,000,001 – ¥3,000,000', bandJa: '200万1円 – 300万円', corpFee: '¥300,000', indFee: '¥500,000' },
  { bandEn: '¥3,000,001 – ¥4,000,000', bandJa: '300万1円 – 400万円', corpFee: '¥350,000', indFee: '¥600,000' },
  { bandEn: '¥4,000,001 – ¥5,000,000', bandJa: '400万1円 – 500万円', corpFee: '¥400,000', indFee: '¥700,000' },
  { bandEn: '¥5,000,001 – ¥7,000,000', bandJa: '500万1円 – 700万円', corpFee: '¥500,000', indFee: '¥800,000' },
  { bandEn: '¥7,000,001 – ¥10,000,000', bandJa: '700万1円 – 1,000万円', corpFee: '¥600,000', indFee: '¥1,000,000' },
  { bandEn: 'Over ¥10,000,000', bandJa: '1,000万円超', corpFee: 'Custom Quote', indFee: 'Custom Quote' },
];
