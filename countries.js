/* =====================================================================
   数字游民签证数据 · 中国护照版
   数据核对：2026-10-01（政策常变，递交前务必以官方入口为准）

   如何添加 / 修改一个国家：
   1. 复制下面任意一个对象，改 id（英文小写，唯一）。
   2. iso2 填两位国家代码（小写），国旗自动从 flagcdn.com 加载，例如 https://flagcdn.com/es.svg。
      mapId 填 ISO 数字代码的三位字符串（在地图上高亮国土；小岛国可留空，只显示圆点）。
      pin 填 [经度, 纬度]，新国家需重新生成 worldmap.js 中的坐标，或直接填 map 像素坐标 px:[x,y]。
   3. inc = 每月收入门槛 [金额, 币种]；sav = 可替代的存款门槛；fee = 政府费用；不适用填 null。
      文字里的外币金额（如 €2,849、50 万泰铢、RM 1,000）显示时会自动换算成人民币。
   4. abbr 为卡片上的大号签证缩写（如 DTV、D8）；continent 为卡片上显示的所在洲。
   6. sources 为整理资料时参考的来源链接。
   5. steps 为申请步骤，links 为官方入口，fees 为费用明细，随时可以追加。
   ===================================================================== */

window.RATES = { CNY: 1, USD: 6.73, EUR: 7.62, MYR: 1.65, THB: 0.20, KRW: 0.00496, AED: 1.83, ZAR: 0.41, MXN: 0.373, ALL: 0.079 };
// 1 单位外币 ≈ 多少人民币（2026-09-30 银行间中间价取整）。网站上所有外币金额按这里自动换算成「约 ¥」，汇率变了只改这一行。

window.COUNTRIES = [
  /* ------------------------------ 欧洲 ------------------------------ */
  {
    id: "spain", iso2: "es", abbr: "DNV", name: "西班牙", en: "Spain", code: "ESP", region: "europe", continent: "欧洲", mapId: "724",
    visa: "数字游民居留（Ley de Startups）",
    inc: [2849,"EUR"], incomeText: "€2,849 / 月（税前）", sav: null,
    familyText: "配偶 +€1,068/月，每名子女 +€356/月",
    duration: "境内申请 3 年卡，可续 2 年", durationMonths: 36,
    fee: [89,"EUR"], speedWeeks: 4,
    tags: ["schengen", "pr", "tax", "family"],
    intro: "西欧综合条件最均衡的数字游民签证。马德里、巴塞罗那、瓦伦西亚、加那利群岛都有成熟的远程工作社群，气候温和，生活成本低于西北欧。",
    pros: ["境内向 UGE 递交可直接拿 3 年居留卡，审批约 20 个工作日", "可申请「贝克汉姆税制」：前 6 年 60 万欧以内收入按 24% 单一税率", "居住满 5 年可转长期居留，持卡畅行申根"],
    cons: ["雇主公司需成立满 1 年，且你已受雇满 3 个月", "需本科学历或 3 年以上相关工作经验", "自由职业者至少要有一家公司客户，不能只靠个人客户"],
    reqs: ["月收入 ≥ €2,849（西班牙最低工资 200%）", "为西班牙境外公司远程工作，西班牙本地收入不超过总收入 20%", "本科学历，或 3 年以上相关工作经验", "无犯罪记录证明（海牙认证 + 西语宣誓翻译）", "西班牙全险型私人医疗保险（无自付）"],
    china: "中国护照需先获申根 C 签入境，才能在西班牙境内向 UGE 递交；也可在驻华使领馆申请 1 年期签证，入境后再换卡。",
    steps: [
      { t: "准备文件", d: "劳动合同/服务合同、雇主授权远程信、近 3 个月收入流水、学历或工作经验证明、无犯罪记录证明及翻译认证。" },
      { t: "选择路线", d: "路线 A：持申根签入境后，线上向 UGE 递交（3 年卡）。路线 B：在驻华使领馆申请数字游民签证（1 年）。" },
      { t: "缴费并等待审批", d: "UGE 法定审批约 20 个工作日，超时未答复视为批准。" },
      { t: "按指纹领 TIE 卡", d: "获批后 1 个月内在警局预约按指纹，领取外国人身份卡（TIE）。" }
    ],
    fees: [["UGE 申请费（Modelo 038）", "约 €73"], ["TIE 居留卡工本费", "约 €16"], ["领馆路线签证费（替代）", "€80 + 签证中心服务费"], ["学历/无犯罪文件翻译认证", "约 ¥1,500–3,000"], ["西班牙私人医疗保险", "约 €600–1,200 / 年"]],
    links: [["西班牙大企业与战略人才局（UGE）", "https://www.inclusion.gob.es/web/unidadgrandesempresas"], ["西班牙驻华使馆", "https://www.exteriores.gob.es/Embajadas/pekin/zh/Paginas/index.aspx"]],
    sources: ["https://movingtospain.com/spain-digital-nomad-visa/"],
    pin: [-3.7, 40.4]
  },
  {
    id: "portugal", iso2: "pt", abbr: "D8", name: "葡萄牙", en: "Portugal", code: "PRT", region: "europe", continent: "欧洲", mapId: "620",
    visa: "D8 远程工作者签证",
    inc: [3680,"EUR"], incomeText: "€3,680 / 月（最低工资 4 倍）", sav: null,
    familyText: "配偶 +€460/月，每名子女 +€276/月",
    duration: "首张居留卡 2 年，之后每次续 3 年", durationMonths: 24,
    fee: [110,"EUR"], speedWeeks: 12,
    tags: ["schengen", "pr", "family"],
    intro: "里斯本、波尔图、马德拉是全球最有名的游民据点，英语普及、治安好。门槛在欧洲属于偏高，移民局 AIMA 排期是最大痛点。",
    pros: ["申根区居留，法律路径清晰", "居住满 5 年可申请永久居留", "游民社区规模大，落地资源多"],
    cons: ["2026 年国籍法修订后，非葡语国家公民入籍年限延长至 10 年", "递签前通常要先办 NIF 税号、开户、租房，前期投入不小", "AIMA 换卡排期长，拿到实体卡前出行受限"],
    reqs: ["近 3 个月平均月收入 ≥ €3,680", "境外雇主合同或自由职业服务合同", "葡萄牙税号 NIF（多数领馆要求葡国银行账户）", "住宿证明（租约或担保声明）", "无犯罪记录证明、旅行医疗保险"],
    china: "在驻华使领馆/签证中心按居住地领区递交；D8 新申请不走电子签门户。",
    steps: [
      { t: "远程办 NIF 税号", d: "可委托当地税务代表远程申请，同时开设葡国银行账户。" },
      { t: "准备收入与住宿文件", d: "近 3 个月工资流水、合同、租约或住宿担保、无犯罪证明（海牙认证）。" },
      { t: "领馆递签", d: "向驻华使领馆/签证中心提交居留签证申请，常规约 60 天出结果。" },
      { t: "入境后 AIMA 换卡", d: "签证 4 个月有效、2 次入境；入境后在 AIMA 预约换 2 年居留卡。" }
    ],
    fees: [["居留签证费", "€110 + 签证中心服务费"], ["AIMA 居留卡费用", "按 AIMA 当年收费表"], ["NIF 税务代表（可选）", "约 €100–300"], ["文件认证与翻译", "约 ¥1,000–2,500"], ["旅行/医疗保险", "约 ¥1,500–4,000 / 年"]],
    links: [["葡萄牙外交部签证门户", "https://vistos.mne.gov.pt/"], ["葡萄牙移民局 AIMA", "https://aima.gov.pt/"]],
    sources: ["https://liveinpt.com/guides/d8-digital-nomad-visa-portugal/"],
    pin: [-9.14, 38.72]
  },
  {
    id: "italy", iso2: "it", abbr: "DNV", name: "意大利", en: "Italy", code: "ITA", region: "europe", continent: "欧洲", mapId: "380",
    visa: "数字游民签证（Nomadi Digitali）",
    inc: [2333,"EUR"], incomeText: "年入 €28,000（约 €2,333 / 月）", sav: null,
    familyText: "有配偶时门槛 +20%，每名子女 +€1,500/年",
    duration: "1 年，可无限次续签", durationMonths: 12,
    fee: [250,"EUR"], speedWeeks: 10,
    tags: ["schengen", "pr", "family"],
    intro: "收入门槛在申根大国里最友好，但明确面向「高技能」人群。适合本科以上、做软件、设计、咨询的远程从业者。",
    pros: ["年入 €28,000 即可，约合税前月薪 2 万人民币", "自由职业者可选统一税制（Forfettario），新业务前 5 年税率低至 5%", "连续居住 5 年可申请欧盟长期居留"],
    cons: ["需本科学历，或 5 年相关经验（IT 岗 3 年）", "要证明已从事远程工作满 6 个月", "学历文件需额外做价值声明或认证"],
    reqs: ["年收入 ≥ €28,000", "高等学历或相应工作年限", "远程工作经验 ≥ 6 个月", "意大利住所证明", "医疗保险、无犯罪记录证明"],
    china: "在驻华使领馆/签证中心递交；学历建议提前办理价值声明或 CIMEA 认证。",
    steps: [
      { t: "学历认证", d: "准备学历学位证书及认证（价值声明或 CIMEA），这一步最耗时。" },
      { t: "准备收入和住所", d: "上年度完税证明、近半年合同及流水、意大利租约。" },
      { t: "领馆递签", d: "驻华使领馆审批约 2 个月。" },
      { t: "入境 8 天内申请居留许可", d: "在邮局领取 Kit 提交居留许可（Permesso di Soggiorno），再去警局按指纹。" }
    ],
    fees: [["签证费", "€116"], ["居留许可邮寄套件", "€30.46"], ["居留卡及印花税", "约 €70–130"], ["学历认证与翻译", "约 ¥2,000–4,000"], ["医疗保险", "约 ¥2,000–5,000 / 年"]],
    links: [["意大利签证官方门户", "https://vistoperitalia.esteri.it/"]],
    sources: ["https://www.globalcitizensolutions.com/italy-digital-nomad-visa/"],
    pin: [12.5, 41.9]
  },
  {
    id: "greece", iso2: "gr", abbr: "DNV", name: "希腊", en: "Greece", code: "GRC", region: "europe", continent: "欧洲", mapId: "300",
    visa: "数字游民签证及居留许可",
    inc: [3500,"EUR"], incomeText: "€3,500 / 月（税后）", sav: null,
    familyText: "配偶 +20%，每名子女 +15%",
    duration: "签证 1 年，转居留许可 2 年可续", durationMonths: 24,
    fee: [75,"EUR"], speedWeeks: 8,
    tags: ["schengen", "tax", "family"],
    intro: "爱琴海生活方式、物价在西欧偏低。雅典和克里特岛游民社区在扩大。",
    pros: ["转税务居民可申请 7 年所得税减半优惠", "居留许可 2 年一续，可带家属", "申根区内自由出行"],
    cons: ["税后月入 €3,500，门槛偏高", "2026 年 2 月起不再接受境内申请，必须在领馆递交", "居留许可阶段行政效率一般"],
    reqs: ["税后月收入 ≥ €3,500", "为希腊境外雇主或客户工作", "医疗保险", "无犯罪记录证明"],
    china: "须在驻华使领馆递交数字游民签证，入境后再转 2 年居留许可。",
    steps: [
      { t: "准备收入证明", d: "雇佣合同或客户合同、近期工资单和银行流水。" },
      { t: "领馆递交签证", d: "向驻华使领馆申请 1 年期数字游民国家签证。" },
      { t: "入境后转居留许可", d: "在签证有效期内向移民部门申请 2 年居留许可。" },
      { t: "可选：申请税收优惠", d: "向希腊税务局（AADE）申请 50% 减税制度。" }
    ],
    fees: [["国家签证费", "€75"], ["居留许可行政费", "以当年官方收费为准"], ["文件翻译认证", "约 ¥1,000–2,500"], ["医疗保险", "约 ¥2,000–5,000 / 年"]],
    links: [["希腊移民与庇护部", "https://migration.gov.gr/"]],
    sources: ["https://www.globalcitizensolutions.com/greece-digital-nomad-visa/"],
    pin: [23.7, 37.98]
  },
  {
    id: "croatia", iso2: "hr", abbr: "DN", name: "克罗地亚", en: "Croatia", code: "HRV", region: "europe", continent: "欧洲", mapId: "191",
    visa: "数字游民临时居留",
    inc: [3622.5,"EUR"], incomeText: "€3,622.5 / 月", sav: [43470,"EUR"],
    savingsText: "或存款 €43,470（12 个月）/ €65,205（18 个月）",
    familyText: "每名家属 +€145/月",
    duration: "一次性最长 18 个月", durationMonths: 18,
    fee: [150,"EUR"], speedWeeks: 6,
    tags: ["schengen", "tax", "family"],
    intro: "亚得里亚海岸线，萨格勒布与斯普利特生活成本适中。境外收入在居留期内免征克罗地亚个税。",
    pros: ["境外收入免征克罗地亚个人所得税", "可以用存款替代收入证明", "申根国家"],
    cons: ["最长 18 个月，到期须离境满 6 个月才能再申请", "不能转为永居，也不能在境内换成其他居留类型", "收入证明从 3 个月增加到 6 个月"],
    reqs: ["月收入 ≥ €3,622.5 或对应存款", "近 6 个月收入流水", "医疗保险", "无犯罪记录证明", "克罗地亚住址"],
    china: "中国护照需签证，通常经驻华使馆递交；也可持有效签证入境后在当地警局递交。",
    steps: [
      { t: "准备 6 个月收入证明", d: "工资单、银行流水或存款证明，按 12 或 18 个月计算。" },
      { t: "递交申请", d: "驻华使馆或克罗地亚内政部（MUP）指定渠道。" },
      { t: "入境登记住址", d: "获批后入境，在当地警局登记住址、领取居留卡。" }
    ],
    fees: [["使馆途径合计", "约 €150"], ["境内警局途径", "约 €46–100"], ["医疗保险", "约 ¥2,000–5,000 / 年"]],
    links: [["克罗地亚内政部（MUP）", "https://mup.gov.hr/"]],
    sources: ["https://relocationcroatia.com/digital-nomad-visa"],
    pin: [15.98, 45.81]
  },
  {
    id: "malta", iso2: "mt", abbr: "NRP", name: "马耳他", en: "Malta", code: "MLT", region: "europe", continent: "欧洲", mapId: "",
    visa: "游民居留许可（Nomad Residence Permit）",
    inc: [3500,"EUR"], incomeText: "年入 €42,000（约 €3,500 / 月）", sav: null,
    familyText: "家属每人 €300 申请费，收入门槛按家庭总额计算",
    duration: "1 年一续，最长 4 年", durationMonths: 48,
    fee: [300,"EUR"], speedWeeks: 6,
    tags: ["schengen", "tax", "family"],
    intro: "英语是官方语言，地中海小岛，节奏慢、阳光多。适合英语工作环境的远程从业者。",
    pros: ["第一年远程收入免税，之后 10% 单一税率", "英语官方语言，生活沟通无障碍", "申根区成员"],
    cons: ["不通向永久居留或入籍", "每年须在马耳他住满约 5 个月", "岛上房租偏高"],
    reqs: ["年收入 ≥ €42,000", "覆盖欧盟的医疗保险（保额 ≥ €100,000）", "马耳他租约或购房合同", "无犯罪记录证明"],
    china: "通过 Residency Malta 在线递交，获批后按指引办理入境签证。",
    steps: [
      { t: "在线提交申请", d: "Residency Malta 游民门户上传材料并缴费。" },
      { t: "获得原则性批准", d: "按通知办理入境签证并租房。" },
      { t: "入境按指纹领卡", d: "在 Residency Malta 办公室采集生物信息，领取居留卡。" }
    ],
    fees: [["申请费", "€300 / 人"], ["医疗保险", "约 ¥3,000–6,000 / 年"]],
    links: [["Residency Malta 游民门户", "https://nomad.residencymalta.gov.mt/"]],
    sources: ["https://immigrationmalta.com/nomad/"],
    pin: [14.51, 35.9]
  },
  {
    id: "estonia", iso2: "ee", abbr: "DNV", name: "爱沙尼亚", en: "Estonia", code: "EST", region: "europe", continent: "欧洲", mapId: "233",
    visa: "数字游民签证（D 类）",
    inc: [4500,"EUR"], incomeText: "€4,500 / 月（税前，近 6 个月）", sav: null,
    familyText: "家属需分别申请签证",
    duration: "最长 1 年", durationMonths: 12,
    fee: [100,"EUR"], speedWeeks: 3,
    tags: ["schengen"],
    intro: "电子政务最发达的国家，科技创业氛围浓。冬季漫长，适合短期体验北欧。",
    pros: ["不占工作居留配额，审批较快", "数字化程度高，办事便捷", "申根区成员"],
    cons: ["收入门槛欧洲最高之一", "只是签证，不能续成长期居留", "住满 183 天成为税务居民，全球收入适用约 24% 税率"],
    reqs: ["近 6 个月税前月收入 ≥ €4,500", "境外雇主合同或自有境外公司", "医疗保险", "无犯罪记录证明"],
    china: "向爱沙尼亚驻华使馆申请 D 类长期签证。",
    steps: [
      { t: "准备收入流水", d: "近 6 个月收入证明、合同或公司注册文件。" },
      { t: "使馆递交 D 签", d: "驻华使馆预约递交。" },
      { t: "入境登记", d: "长期停留需在当地登记住址。" }
    ],
    fees: [["D 类签证费", "约 €100"], ["医疗保险", "约 ¥2,000–4,000 / 年"]],
    links: [["爱沙尼亚外交部", "https://www.vm.ee/en"]],
    sources: ["https://www.jobbatical.com/blog/estonia-digital-nomad-visa-e-residency-tax-income-updates"],
    pin: [24.75, 59.44]
  },
  {
    id: "hungary", iso2: "hu", abbr: "White Card", name: "匈牙利", en: "Hungary", code: "HUN", region: "europe", continent: "欧洲", mapId: "348",
    visa: "白卡（White Card）",
    inc: [3000,"EUR"], incomeText: "约 €3,000 / 月（税后）", sav: null,
    familyText: "不允许家属随行，每人需单独申请",
    duration: "1 年，可续 1 年（最长 2 年）", durationMonths: 24,
    fee: [110,"EUR"], speedWeeks: 4,
    tags: ["schengen"],
    intro: "布达佩斯物价在申根国家中偏低，交通便利，适合单身远程工作者在中欧落脚。",
    pros: ["审批快，约 2–4 周", "生活成本在申根区里较低", "可在境内或境外递交"],
    cons: ["不允许家庭团聚", "最长只有 2 年", "不能接匈牙利本地客户"],
    reqs: ["税后月收入约 €3,000", "为境外雇主或客户工作", "医疗保险", "住宿证明、无犯罪记录"],
    china: "通过 Enter Hungary 系统在线填表，向驻华使领馆递交原件。",
    steps: [
      { t: "Enter Hungary 在线填表", d: "注册账户并填写白卡申请。" },
      { t: "使领馆递交", d: "携带原件及生物信息到驻华使领馆。" },
      { t: "入境领卡", d: "入境后到移民局领取居留卡。" }
    ],
    fees: [["申请费", "约 €60–110"], ["医疗保险", "约 ¥2,000–4,000 / 年"]],
    links: [["Enter Hungary 官方系统", "https://enterhungary.gov.hu/"]],
    sources: ["https://remoteworkeurope.eu/insights/hungary-digital-nomad-visa/"],
    pin: [19.04, 47.5]
  },
  {
    id: "albania", iso2: "al", abbr: "UP", name: "阿尔巴尼亚", en: "Albania", code: "ALB", region: "europe", continent: "欧洲", mapId: "008",
    visa: "单一许可（数字游民）",
    inc: [50000,"ALL"], incomeText: "ALL 50,000 / 月（当地最低工资）", sav: [300000,"ALL"],
    savingsText: "或在阿尔巴尼亚银行存入 ALL 300,000",
    familyText: "家属可随行申请",
    duration: "1 年，可连续续签 5 次", durationMonths: 12,
    fee: [4500,"ALL"], speedWeeks: 12,
    tags: ["cheap", "pr", "family"],
    intro: "巴尔干地区生活成本最低的地中海国家之一，地拉那、萨兰达物价约为西欧的一半。门槛极低，适合收入起步阶段。",
    pros: ["2026 年 4 月起门槛改为当地最低工资，全欧最低", "连续居住 5 年可申请永居", "申请费极低"],
    cons: ["不在申根区", "无税收优惠，住满 183 天需申报全球收入", "审批最长 12 周"],
    reqs: ["月收入 ≥ ALL 50,000 或本地存款", "境外雇主或客户合同", "医疗保险", "无犯罪记录证明", "当地住址"],
    china: "通过 e-Albania 在线申请单一许可，需要签证的国籍会在同一流程中获发 D 签。",
    steps: [
      { t: "e-Albania 在线申请", d: "选择「Leje Unike」，事由选数字游民。" },
      { t: "等待审批并获发 D 签", d: "最长约 12 周。" },
      { t: "入境领卡", d: "入境后按指纹领取居留卡。" }
    ],
    fees: [["首次申请费", "ALL 4,500"], ["续签费", "ALL 2,250"], ["医疗保险", "约 ¥1,000–3,000 / 年"]],
    links: [["e-Albania 政务平台", "https://e-albania.al/"]],
    sources: ["https://www.stampednomad.com/visas/albania-digital-nomad-visa"],
    pin: [19.82, 41.33]
  },

  /* ------------------------------ 亚洲 / 中东 ------------------------------ */
  {
    id: "thailand", iso2: "th", abbr: "DTV", name: "泰国", en: "Thailand", code: "THA", region: "asia", continent: "亚洲", mapId: "764",
    visa: "DTV 目的地签证（远程工作类）",
    inc: null, incomeText: "无月收入门槛", sav: [500000,"THB"],
    savingsText: "存款 ≥ 50 万泰铢，需持有约 3 个月",
    familyText: "配偶及 20 岁以下子女可申请家属 DTV",
    duration: "5 年多次入境，每次停留 180 天，可延 180 天", durationMonths: 60,
    fee: [10000,"THB"], speedWeeks: 2,
    tags: ["cheap", "fast", "family"],
    intro: "清迈、曼谷、普吉是亚洲游民首选，离国内近、航班多、中文环境友好。DTV 用一笔存款换来 5 年多次入境。",
    pros: ["不看月收入，只看存款", "5 年有效期，每次入境停留 180 天", "中泰互免签证，递签前可先去考察"],
    cons: ["2026 年 8 月 31 日起须在国籍国或居住国申请，并提交无犯罪证明", "境外收入汇入泰国当年可能需缴税", "不通向永居"],
    reqs: ["50 万泰铢或等值存款（近 3 个月）", "境外雇佣合同，或自由职业作品集与客户合同", "无犯罪记录证明（2026-08-31 起）", "护照有效期 6 个月以上"],
    china: "中国公民须在国内通过泰国电子签系统递交（归驻华使领馆审理），不能再去第三国申请。",
    steps: [
      { t: "存款并保留 3 个月", d: "在本人名下账户保持 ≥ 50 万泰铢等值，开具存款证明和流水。" },
      { t: "开无犯罪证明", d: "按新规准备无犯罪记录证明（公证/认证按使馆要求）。" },
      { t: "电子签递交", d: "在 thaievisa.go.th 选择驻华使领馆，上传材料并缴费，约 1–3 周出结果。" },
      { t: "入境与延期", d: "每次入境 180 天，可在移民局付 1,900 泰铢 延期一次。" }
    ],
    fees: [["签证费", "10,000 泰铢（按递交地货币收取）"], ["境内延期", "1,900 泰铢 / 次"], ["无犯罪证明公证认证", "约 ¥300–800"]],
    links: [["泰国电子签证系统", "https://www.thaievisa.go.th/"]],
    sources: ["https://thethaiger.com/visas/dtv/", "https://tvc.co.th/dtv-changes-august-31"],
    pin: [100.5, 13.75]
  },
  {
    id: "malaysia", iso2: "my", abbr: "DE Rantau", name: "马来西亚", en: "Malaysia", code: "MYS", region: "asia", continent: "亚洲", mapId: "458",
    visa: "DE Rantau 游民通行证",
    inc: [2000,"USD"], incomeText: "年入 $24,000（约 $2,000 / 月）", sav: null,
    familyText: "家属每人 RM 500",
    duration: "12 个月，可续 12 个月", durationMonths: 24,
    fee: [1000,"MYR"], speedWeeks: 6,
    tags: ["cheap", "family"],
    intro: "吉隆坡、槟城华人多、普通话通行，饮食习惯接近，租房与生活成本低。对中国远程工作者几乎没有文化门槛。",
    pros: ["门槛低，约税前月薪 1.4 万人民币", "华人社区大，语言无障碍", "中马互免签证，可先入境考察"],
    cons: ["需属于数字/科技类岗位", "最长 2 年", "不通向永居"],
    reqs: ["年收入 ≥ $24,000", "数字或科技相关职业（开发、设计、营销、内容等）", "至少 3 个月剩余合同或项目", "医疗保险", "无犯罪记录证明"],
    china: "在 MDEC 官网在线申请，获批后在马来西亚使馆或吉隆坡移民局贴签。",
    steps: [
      { t: "MDEC 在线申请", d: "上传合同、收入证明、简历、无犯罪证明。" },
      { t: "等待审核", d: "约 4–8 周。" },
      { t: "贴签入境", d: "获批后在使馆或入境后在移民局完成贴签。" }
    ],
    fees: [["主申请人", "RM 1,000"], ["每名家属", "RM 500"], ["医疗保险", "约 ¥1,500–3,000 / 年"]],
    links: [["MDEC DE Rantau 官网", "https://mdec.my/derantau"]],
    sources: ["https://visawisely.com/en/visa/malaysia/malaysia-de-rantau/"],
    pin: [101.69, 3.14]
  },
  {
    id: "indonesia", iso2: "id", abbr: "E33G", name: "印度尼西亚", en: "Indonesia", code: "IDN", region: "asia", continent: "亚洲", mapId: "360",
    visa: "E33G 远程工作者 KITAS",
    inc: [5000,"USD"], incomeText: "年入 $60,000", sav: null,
    familyText: "家属可申请随行 KITAS",
    duration: "1 年（到期需重新申请）", durationMonths: 12,
    fee: [280,"USD"], speedWeeks: 2,
    tags: ["fast"],
    intro: "巴厘岛仓古、乌布是全球知名的游民据点，冲浪、瑜伽、共享办公齐全。",
    pros: ["全程线上申请，审批快", "可以长住巴厘岛", "不限国籍"],
    cons: ["年入 $6 万，亚洲门槛最高之一", "1 年不能续，只能重新申请", "取得 KITAS 可能被认定为印尼税务居民"],
    reqs: ["年收入 ≥ $60,000", "近 3 个月账户余额 ≥ $2,000", "境外雇主或客户合同", "医疗保险"],
    china: "在印尼电子签官网在线申请，获批后电子签入境。",
    steps: [
      { t: "电子签官网申请", d: "选择 E33G，上传收入证明、合同和护照。" },
      { t: "审批并缴费", d: "通常 1–2 周。" },
      { t: "入境激活 KITAS", d: "持电子签入境，完成生物信息登记。" }
    ],
    fees: [["签证及 KITAS 费用", "约 $250–300（以官网为准）"], ["医疗保险", "约 ¥1,500–4,000 / 年"]],
    links: [["印尼移民局电子签", "https://evisa.imigrasi.go.id/"]],
    sources: ["https://emerhub.com/indonesia/visas/remote-worker-visa/"],
    pin: [115.2, -8.65]
  },
  {
    id: "srilanka", iso2: "lk", abbr: "DNV", name: "斯里兰卡", en: "Sri Lanka", code: "LKA", region: "asia", continent: "亚洲", mapId: "144",
    visa: "数字游民居留签证（2026 年新推出）",
    inc: [2000,"USD"], incomeText: "$2,000 / 月", sav: null,
    familyText: "超过 2 名家属后每人 +$500/月",
    duration: "1 年，每年可续", durationMonths: 12,
    fee: [500,"USD"], speedWeeks: 6,
    tags: ["cheap", "family"],
    intro: "印度洋岛国，海岸、茶园与冲浪点多，生活成本低。2026 年刚开放数字游民签证，政策细节仍在完善。",
    pros: ["门槛低", "可带家属", "生活成本低"],
    cons: ["新政策，执行细节可能调整", "每人每年 $500 年费", "续签需提供当地税务登记"],
    reqs: ["月收入 ≥ $2,000", "境外雇主或客户", "医疗保险", "无犯罪记录证明"],
    china: "向斯里兰卡移民局居留签证处申请，细则以移民局最新公告为准。",
    steps: [
      { t: "准备收入与合同", d: "近期收入流水、雇佣或服务合同。" },
      { t: "向移民局申请", d: "居留签证处递交。" },
      { t: "续签时税务登记", d: "续签需提供税务登记证明。" }
    ],
    fees: [["年费", "$500 / 人 / 年"]],
    links: [["斯里兰卡移民局", "https://www.immigration.gov.lk/"]],
    sources: ["https://citizenremote.com/visas/sri-lanka-digital-nomad-visa/"],
    pin: [79.86, 6.93]
  },
  {
    id: "korea", iso2: "kr", abbr: "F-1-D", name: "韩国", en: "South Korea", code: "KOR", region: "asia", continent: "亚洲", mapId: "410",
    visa: "F-1-D 数字游民（工作度假）签证",
    inc: [8733333,"KRW"], incomeText: "年入 ₩1.048 亿（人均 GNI 2 倍）", sav: null,
    familyText: "配偶及未成年子女可随行",
    duration: "最长 3 年（1 年 + 两次延期）", durationMonths: 36,
    fee: [90,"USD"], speedWeeks: 4,
    tags: ["family"],
    intro: "首尔、釜山都市便利，离国内最近的发达国家选项之一。2026 年转为常设项目并放宽年轻人和地方城市的门槛。",
    pros: ["18–34 岁或选择首都圈以外居住，门槛可降至约 1 倍 GNI（约 ₩5,240 万）", "最长可停留 3 年", "可在驻华使领馆申请"],
    cons: ["标准门槛很高（约年薪 52 万人民币）", "需在境外公司工作满 1 年", "不能在韩国本地就业"],
    reqs: ["年收入 ≥ 2 倍人均 GNI（符合条件可降低）", "境外公司任职或自有公司满 1 年", "含医疗与送返的私人保险", "无犯罪记录证明"],
    china: "向驻华使领馆申请，或持短期签证在韩国境内转换（以使领馆最新受理为准）。",
    steps: [
      { t: "确认适用门槛", d: "根据年龄与计划居住地确认 1 倍或 2 倍 GNI。" },
      { t: "准备文件", d: "在职证明、收入证明、保险、无犯罪证明。" },
      { t: "使领馆递交", d: "约 3–4 周出结果。" },
      { t: "入境登记", d: "入境后 90 天内办理外国人登录证。" }
    ],
    fees: [["签证费", "约 $60–90（视领馆）"], ["外国人登录证", "约 ₩30,000"], ["私人保险", "约 ¥2,000–5,000 / 年"]],
    links: [["韩国签证门户 Visa Portal", "https://www.visa.go.kr/"]],
    sources: ["https://sharedhomies.com/blog/korea-digital-nomad-visa-2026"],
    pin: [126.98, 37.57]
  },
  {
    id: "uae", iso2: "ae", abbr: "RWV", name: "阿联酋（迪拜）", en: "UAE", code: "ARE", region: "asia", continent: "亚洲 · 中东", mapId: "784",
    visa: "远程工作（Virtual Work）居留签证",
    inc: [3500,"USD"], incomeText: "$3,500 / 月", sav: null,
    familyText: "可担保配偶及子女",
    duration: "1 年，可续", durationMonths: 12,
    fee: [740,"AED"], speedWeeks: 1,
    tags: ["tax", "fast", "family"],
    intro: "迪拜是中东枢纽，直飞国内多个城市，个人所得税为 0。生活成本高，但基础设施和安全感一流。",
    pros: ["个人所得税 0%", "审批快，材料齐全约 48 小时", "中阿互免签证，可入境后办理"],
    cons: ["房租和生活成本高", "需每年续签", "夏季炎热"],
    reqs: ["月收入 ≥ $3,500", "境外雇主证明或自有境外公司", "阿联酋有效医疗保险", "护照有效期 6 个月以上"],
    china: "中国护照免签入境后，可在迪拜 GDRFA 或 ICP 线上系统办理。",
    steps: [
      { t: "线上提交", d: "迪拜走 GDRFA，其他酋长国走 ICP。" },
      { t: "体检", d: "入境后在指定机构体检。" },
      { t: "办理 Emirates ID", d: "录指纹，领取阿联酋身份证。" }
    ],
    fees: [["政府费用", "约 AED 740 起"], ["体检与 Emirates ID", "约 AED 600–900"], ["当地医疗保险", "约 AED 800–2,000 / 年"]],
    links: [["迪拜 GDRFA 智能服务", "https://smart.gdrfad.gov.ae/"], ["阿联酋 ICP", "https://icp.gov.ae/"]],
    sources: ["https://egsh.ae/insights/virtual-work-visa-uae"],
    pin: [55.27, 25.2]
  },

  /* ------------------------------ 美洲 ------------------------------ */
  {
    id: "mexico", iso2: "mx", abbr: "RT", name: "墨西哥", en: "Mexico", code: "MEX", region: "americas", continent: "北美洲", mapId: "484",
    visa: "临时居民签证（经济偿付能力）",
    inc: [4400,"USD"], incomeText: "约 $4,400 / 月（各领馆标准不同）", sav: [74000,"USD"],
    savingsText: "或存款/投资约 $74,000",
    familyText: "家属按领馆标准另计",
    duration: "首年 1 年卡，可续至 4 年，之后转永居", durationMonths: 48,
    fee: [6500,"MXN"], speedWeeks: 6,
    tags: ["pr", "family"],
    intro: "墨西哥城、瓦哈卡、梅里达气候宜人，与北美同一时区。虽非专门的数字游民签证，但是游民在拉美最常用的长居方式。",
    pros: ["临时居留 4 年后可转永久居民", "可用存款代替收入", "文化与美食丰富，北美时区方便为美国客户工作"],
    cons: ["领馆标准不一，驻华使领馆预约紧张", "中国护照需墨西哥签证", "安全状况因城市而异"],
    reqs: ["近 6 个月月收入约 $4,400，或近 12 个月存款约 $74,000", "领馆面谈", "入境后 30 天内到移民局换卡"],
    china: "向墨西哥驻华使领馆预约面谈，获批后入境并在 30 天内到移民局（INM）换卡。",
    steps: [
      { t: "确认领馆标准", d: "各领馆的收入/存款门槛不同，先查询驻华使领馆最新要求。" },
      { t: "预约面谈", d: "携带收入或存款流水、护照、照片。" },
      { t: "入境换卡", d: "入境 30 天内到 INM 办理临时居民卡。" }
    ],
    fees: [["领馆签证费", "约 $54"], ["INM 1 年居民卡", "约 MXN 5,500–6,000"]],
    links: [["墨西哥驻华使馆", "https://embamex.sre.gob.mx/china/"]],
    sources: ["https://www.mexperience.com/qualifying-for-legal-residency-in-mexico/"],
    pin: [-99.13, 19.43]
  },
  {
    id: "costarica", iso2: "cr", abbr: "DNV", name: "哥斯达黎加", en: "Costa Rica", code: "CRI", region: "americas", continent: "中美洲", mapId: "188",
    visa: "数字游民（远程工作者）签证",
    inc: [3000,"USD"], incomeText: "$3,000 / 月", sav: null,
    familyText: "带家属时约 $4,000 / 月",
    duration: "1 年，可再续 1 年", durationMonths: 24,
    fee: [100,"USD"], speedWeeks: 3,
    tags: ["tax", "family"],
    intro: "中美洲最稳定的国家之一，雨林、海滩、生态旅游闻名，美式时区。",
    pros: ["境外收入不征税", "申请费低、审批约 15 天", "可带家属"],
    cons: ["中国护照需先获签证入境", "距离远，航班需转机", "不通向永居"],
    reqs: ["月收入 ≥ $3,000", "境外雇主或客户", "覆盖全程的医疗保险"],
    china: "在线向哥斯达黎加移民局提交，入境需按中国护照签证政策办理。",
    steps: [
      { t: "在线提交", d: "移民局线上系统提交收入与保险证明。" },
      { t: "缴费审批", d: "约 2–3 周。" },
      { t: "入境登记", d: "获批后入境办理证件。" }
    ],
    fees: [["申请费", "$100"], ["医疗保险", "约 ¥3,000–6,000 / 年"]],
    links: [["哥斯达黎加移民局", "https://www.migracion.go.cr/"]],
    sources: ["https://getwherenext.com/digital-nomad-visas/cr"],
    pin: [-84.09, 9.93]
  },
  {
    id: "brazil", iso2: "br", abbr: "VITEM XIV", name: "巴西", en: "Brazil", code: "BRA", region: "americas", continent: "南美洲", mapId: "076",
    visa: "VITEM XIV 数字游民签证",
    inc: [1500,"USD"], incomeText: "$1,500 / 月", sav: [18000,"USD"],
    savingsText: "或存款 $18,000",
    familyText: "家属可申请团聚签证",
    duration: "1 年，可续 1 年", durationMonths: 24,
    fee: [200,"USD"], speedWeeks: 10,
    tags: ["cheap", "family"],
    intro: "里约、弗洛里亚诺波利斯、圣保罗城市多样，门槛在拉美最低之一。",
    pros: ["$1,500 月收入或 $18,000 存款即可", "境内递交无需医疗保险", "城市选择多"],
    cons: ["中国护照需签证，领馆审批 4–26 周不等", "葡语环境", "需在 90 天内到联邦警察局登记"],
    reqs: ["月收入 ≥ $1,500 或存款 ≥ $18,000", "境外雇主或客户", "90 天内开具的无犯罪证明（认证 + 葡语翻译）", "医疗保险（领馆途径）"],
    china: "通过巴西领事电子系统向驻华使领馆递交。",
    steps: [
      { t: "e-Consular 填表", d: "上传收入或存款证明、无犯罪证明等。" },
      { t: "领馆审批", d: "4–26 周不等。" },
      { t: "联邦警察局登记", d: "入境 90 天内办理外国人登记卡（CRNM）。" }
    ],
    fees: [["领馆签证费", "约 $100–290（按对等原则）"], ["无犯罪证明与翻译", "约 ¥800–1,500"]],
    links: [["巴西领事门户", "https://www.gov.br/mre/pt-br/assuntos/portal-consular"]],
    sources: ["https://getbrazilvisa.com/brazil-digital-nomad-visa"],
    pin: [-43.2, -22.9]
  },
  {
    id: "uruguay", iso2: "uy", abbr: "ND", name: "乌拉圭", en: "Uruguay", code: "URY", region: "americas", continent: "南美洲", mapId: "858",
    visa: "数字游民临时身份",
    inc: [0,"USD"], incomeText: "无收入门槛（需声明生活来源）", sav: null,
    familyText: "",
    duration: "6 个月，可续 1 次", durationMonths: 12,
    fee: [15,"USD"], speedWeeks: 3,
    tags: ["cheap"],
    intro: "南美最安定的国家之一，蒙得维的亚节奏舒缓。",
    pros: ["无收入门槛", "费用极低", "社会稳定"],
    cons: ["只能在境内申请", "中国护照需先办乌拉圭签证入境", "最长约 1 年"],
    reqs: ["合法入境", "远程工作声明", "护照"],
    china: "先办理乌拉圭入境签证，入境后在当地申请。",
    steps: [
      { t: "办理入境签证", d: "向乌拉圭驻华使馆申请。" },
      { t: "境内在线申请", d: "入境后提交数字游民申请。" }
    ],
    fees: [["申请费", "约 $10–15"]],
    links: [["乌拉圭外交部", "https://www.gub.uy/ministerio-relaciones-exteriores/"]],
    sources: ["https://nomadsignal.io/visas/uruguay-dnv"],
    pin: [-56.16, -34.9]
  },
  {
    id: "barbados", iso2: "bb", abbr: "Welcome Stamp", name: "巴巴多斯", en: "Barbados", code: "BRB", region: "americas", continent: "北美洲 · 加勒比", mapId: "",
    visa: "Welcome Stamp 欢迎签",
    inc: [4167,"USD"], incomeText: "年入 $50,000", sav: null,
    familyText: "家庭套餐 $3,000",
    duration: "12 个月，可续", durationMonths: 12,
    fee: [2000,"USD"], speedWeeks: 1,
    tags: ["tax", "fast", "family"],
    intro: "加勒比海岛国，英语环境，节奏悠闲。",
    pros: ["境外收入不征巴巴多斯个税", "全程线上，约 5 个工作日出结果", "中巴互免签证"],
    cons: ["申请费 $2,000，全表最高", "岛上生活成本高", "离中国极远"],
    reqs: ["预期年收入 ≥ $50,000", "境外雇主或客户", "医疗保险"],
    china: "中国护照可免签入境，全程在线申请。",
    steps: [
      { t: "在线申请", d: "官网提交材料。" },
      { t: "获批后 28 天内缴费", d: "个人 $2,000 / 家庭 $3,000。" },
      { t: "入境开始计算 12 个月", d: "" }
    ],
    fees: [["个人", "$2,000"], ["家庭", "$3,000"]],
    links: [["Barbados Welcome Stamp", "https://barbadoswelcomestamp.bb/"]],
    sources: ["https://www.stampednomad.com/guides/barbados"],
    pin: [-59.6, 13.1]
  },

  /* ------------------------------ 非洲 / 印度洋 ------------------------------ */
  {
    id: "mauritius", iso2: "mu", abbr: "Premium", name: "毛里求斯", en: "Mauritius", code: "MUS", region: "africa", continent: "非洲 · 印度洋", mapId: "",
    visa: "Premium Visa 高级签证",
    inc: [1500,"USD"], incomeText: "$1,500 / 月", sav: null,
    familyText: "每名家属另需额外收入",
    duration: "最长 1 年，可续", durationMonths: 12,
    fee: [0,"USD"], speedWeeks: 1,
    tags: ["cheap", "fast", "family"],
    intro: "印度洋海岛，英法双语，华人社区历史悠久。对中国护照最友好的选项之一。",
    pros: ["免申请费", "中国护照免签入境", "前 6 个月境外收入不征税"],
    cons: ["住满 183 天成为税务居民，汇入收入需纳税", "海岛生活圈子小", "不通向永居"],
    reqs: ["月收入 ≥ $1,500", "境外收入来源", "医疗保险", "回程或续程机票"],
    china: "向毛里求斯经济发展局（EDB）在线申请，全程免费。",
    steps: [
      { t: "EDB 在线申请", d: "上传护照、收入证明、保险、行程。" },
      { t: "获批后入境", d: "通常 1–2 周出结果。" }
    ],
    fees: [["申请费", "免费"], ["医疗保险", "约 ¥1,500–4,000 / 年"]],
    links: [["毛里求斯经济发展局 EDB", "https://www.edbmauritius.org/"]],
    sources: ["https://tbimauritius.com/premium-visa-mauritius/"],
    pin: [57.5, -20.16]
  },
  {
    id: "southafrica", iso2: "za", abbr: "RWV", name: "南非", en: "South Africa", code: "ZAF", region: "africa", continent: "非洲", mapId: "710",
    visa: "远程工作签证",
    inc: [54233,"ZAR"], incomeText: "年入 ZAR 650,796", sav: null,
    familyText: "家属可随行",
    duration: "最长 3 年", durationMonths: 36,
    fee: [425,"ZAR"], speedWeeks: 8,
    tags: ["family"],
    intro: "开普敦是南半球的游民之都，自然风光一流，与欧洲时差小。",
    pros: ["最长 3 年", "政府费用低", "与欧洲时区接近"],
    cons: ["中国护照需签证，经 VFS 递交", "不通向永居", "治安需谨慎选择居住区"],
    reqs: ["年收入 ≥ ZAR 650,796", "境外雇主或客户", "医疗保险", "无犯罪记录证明"],
    china: "向南非驻华使领馆或指定签证中心递交。",
    steps: [
      { t: "准备文件", d: "收入证明、合同、无犯罪证明、保险。" },
      { t: "签证中心递交", d: "按领区预约。" },
      { t: "入境", d: "每满 183 天须关注南非税务登记要求。" }
    ],
    fees: [["政府费用", "ZAR 425"], ["签证中心服务费", "按 VFS 当地标准"]],
    links: [["南非内政部", "https://www.dha.gov.za/"]],
    sources: ["https://www.stampednomad.com/guides/south-africa"],
    pin: [18.42, -33.92]
  }
];

/* 暂不对中国护照开放（或实际不可行）的热门项目 */
window.RESTRICTED = [
  { id: "x-japan", iso2: "jp", name: "日本", note: "数字游民签证仅限与日本互免签证且有税收协定的国家/地区，中国大陆护照不在名单。" },
  { id: "x-czechia", iso2: "cz", name: "捷克", note: "数字游民项目限定澳、加、日、韩、新、英、美等少数国籍。" },
  { id: "x-argentina", iso2: "ar", name: "阿根廷", note: "面向免签入境阿根廷的国籍，中国护照需签证，无法走该通道。" },
  { id: "x-colombia", iso2: "co", name: "哥伦比亚", note: "V 类游民签证面向免签国籍，中国申请人需走其他签证类别。" },
  { id: "x-iceland", iso2: "is", name: "冰岛", note: "长期远程工作签证限申根免签国籍，中国护照不适用。" }
];
