// ============================================================
//  溫習筆記目錄 — 新增筆記只需喺下面加一個物件！
//  file 有兩種：
//   - PDF:       type:'pdf', file:'pdfs/xxx.pdf'      （放入 notes/pdfs/）
//   - Markdown:  type:'md',  file:'md/xxx.md'         （放入 notes/md/）
// ============================================================

const DSE_TOPICS = [
  'I. 地球',
  'II. 微觀世界 I',
  'III. 金屬',
  'IV. 酸和鹽基',
  'V. 化石燃料和碳化合物',
  'VI. 微觀世界 II',
  'VII. 氧化還原反應、化學電池和電解',
  'VIII. 化學反應與能量',
  'IX. 反應速率',
  'X. 化學平衡',
  'XI. 碳化合物的化學',
  'XII. 化學世界中的規律',
];

const NOTES = [
  {
    title: '分子間引力：沸點比較答題規範',
    topic: 'VI. 微觀世界 II',
    type: 'md',
    file: 'md/intermolecular-forces-boiling-point.md',
    desc: '氫鍵 vs 范德華力、熔沸點比較邏輯、表面張力、黏度、DSE 必背句式'
  },
  {
    title: '分子晶體：冰與水的結構與性質',
    topic: 'VI. 微觀世界 II',
    type: 'md',
    file: 'md/ice-water-molecular-crystal.md',
    desc: '分子晶體定義、冰嘅敞開結構、密度異常、熔點與氫鍵關係'
  },
  {
    title: '鍵極性與分子極性答題規範',
    topic: 'VI. 微觀世界 II',
    type: 'md',
    file: 'md/bond-polarity-molecular-polarity.md',
    desc: '極性鍵形成、分子極性判斷邏輯、帶電棒實驗題型、DSE 常見分子速查表'
  },
  {
    title: '分子形狀預測指南（VSEPR 學說）',
    topic: 'VI. 微觀世界 II',
    type: 'md',
    file: 'md/vsepr-molecular-shapes.md',
    desc: '價層電子對相斥理論、分子形狀總覽表、水分子 V-shaped 判定步驟'
  },
  {
    title: '酸和鹽基 — 核心概念速覽（示範）',
    topic: 'IV. 酸和鹽基',
    type: 'md',
    file: 'md/acids-bases-demo.md',
    desc: '酸鹼定義、中和反應、指示劑選擇、DSE 常見陷阱'
  },
  // 範例（等你提供 PDF / MD 之後填入）：
  // {
  //   title: '酸和鹽基 — 完整溫習筆記',
  //   topic: 'IV. 酸和鹽基',
  //   type: 'pdf',
  //   file: 'pdfs/acids-bases.pdf',
  //   desc: '酸鹼定義、滴定計算、指示劑選擇、常見 DSE 題型'
  // },
  // {
  //   title: '碳化合物的化學（NotebookLM 整理）',
  //   topic: 'XI. 碳化合物的化學',
  //   type: 'md',
  //   file: 'md/carbon-chemistry.md',
  //   desc: '官能基、同分異構、反應類型總整理'
  // },
];
