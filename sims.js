// ============================================================
//  科學模擬器目錄 — 新增 simulation 只需喺下面加一個物件！
//  Each entry:
//  {
//    id:        唯一 ID（同 sims/ 下面個資料夾名一樣）
//    title:     中文標題
//    titleEn:   英文標題
//    subject:   'chemistry' | 'physics' | 'biology' | 'is'   ← 篩選用
//    topic:     課題（顯示喺卡片上）
//    level:     'junior' | 'dse' | 'both'
//    desc:      一句簡介
//    emoji:     卡片圖示
//    tags:      搜尋用關鍵字（array）
//  }
// ============================================================

const SIMS = [
  {
    id: 'ice-melting',
    title: '冰融化：分子視角 3D',
    titleEn: 'Ice Melting: Molecular View',
    subject: 'chemistry',
    topic: '微觀世界 II Microscopic World II',
    level: 'both',
    desc: '3D 分子模型展示冰嘅開放六角晶格，融化後點樣變成較緊密嘅液態水結構',
    emoji: '🧊',
    tags: ['ice', 'water', 'melting', 'hydrogen bond', '冰', '融化', '水', '氫鍵', '晶格']
  },
  {
    id: 'addition-polymerisation',
    title: '加成聚合作用 3D 模擬器',
    titleEn: 'Addition Polymerisation 3D',
    subject: 'chemistry',
    topic: '碳化合物的化學 Chemistry of Carbon Compounds',
    level: 'dse',
    desc: '3D 球棍模型：乙烯單體斷開 C=C 雙鍵連接成聚乙烯鋸齒長鏈，支援逐步聚合模式',
    emoji: '🧪',
    tags: ['polymerisation', 'polymer', 'ethene', 'polyethene', '聚合', '聚乙烯', '乙烯', 'addition']
  },
  {
    id: 'free-radical-substitution',
    title: '自由基取代反應模擬器',
    titleEn: 'Free Radical Substitution Simulator',
    subject: 'chemistry',
    topic: '碳化合物的化學 Chemistry of Carbon Compounds',
    level: 'dse',
    desc: '微觀粒子動畫展示烷烴與鹵素在 UV 光下的自由基取代機理：引發、鏈增長、終止',
    emoji: '⚛️',
    tags: ['free radical', 'substitution', 'alkane', 'halogen', '自由基', '取代', '烷烴', '鹵素', 'UV']
  },
  {
    id: 'limiting-reactant',
    title: '限量與過量反應物模擬器',
    titleEn: 'Limiting Reactant Simulator Pro',
    subject: 'chemistry',
    topic: '摩爾計量 Mole & Stoichiometry',
    level: 'dse',
    desc: '微觀分子動畫：觀察反應物點樣按比例消耗，邊種係限量試劑、邊種有剩餘',
    emoji: '⚖️',
    tags: ['limiting', 'excess', 'reactant', 'mole', 'stoichiometry', '限量', '過量', '反應物', '摩爾']
  },
  {
    id: 'titration-lab',
    title: '互動式酸鹼滴定虛擬實驗室',
    titleEn: 'Interactive Titration Lab',
    subject: 'chemistry',
    topic: '酸與鹽基 Acids and Bases',
    level: 'dse',
    desc: '完整滴定操作：滴定管、指示劑顏色變化、滴定曲線，支援中英雙語介面',
    emoji: '🧫',
    tags: ['titration', 'acid', 'base', 'indicator', '滴定', '酸鹼', '指示劑', 'equivalence']
  },
  {
    id: 'thermometric-titration',
    title: '溫度滴定法：中和反應等當點',
    titleEn: 'Thermometric Titration',
    subject: 'chemistry',
    topic: '能量變化 Energetics',
    level: 'dse',
    desc: '用溫度變化搵出強酸強鹼中和嘅等當點，探究中和焓變，附反應原理及自我評估',
    emoji: '🌡️',
    tags: ['neutralization', 'temperature', 'enthalpy', 'thermometric', '中和', '溫度', '焓變', '等當點', 'energetics']
  },
  // 👇 之後新 simulation 就加喺呢度，例如：
  // {
  //   id: 'reaction-rate',
  //   title: '反應速率模擬器',
  //   titleEn: 'Reaction Rate',
  //   subject: 'chemistry',
  //   topic: '反應速率 Rate of Reaction',
  //   level: 'dse',
  //   desc: '碰撞理論粒子模擬：調節濃度、溫度觀察反應速率變化',
  //   emoji: '⚡',
  //   tags: ['rate', 'collision', '速率', '碰撞']
  // },
];
