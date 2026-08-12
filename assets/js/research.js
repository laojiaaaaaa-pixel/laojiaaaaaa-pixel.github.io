const translations = {
  zh: {
    navHome: "首页", navProjects: "项目", navMethod: "方法", navResearch: "研究", navExperience: "经历", navAbout: "关于", navContact: "联系",
    homeEyebrow: "个人主页 · 北京", homeGreeting: "你好，我是", homeLead: "我学习国际事务，并关注人工智能与数字媒体如何重塑信息、信任与社会。",
    homeProjects: "查看我的项目", homeEmail: "和我打个招呼 ↗", profileLabel: "个人信息", profileSchool: "学校", profileSchoolValue: "外交学院",
    profileMajor: "专业", profileMajorValue: "国际事务与国际关系", profileMinor: "辅修", profileMinorValue: "西班牙语", profileClass: "毕业年份",
    homeAboutEyebrow: "关于我", homeAboutTitle: "用计算方法连接社会科学问题。",
    homeAboutBody1: "我的学术背景是国际事务与国际关系，辅修西班牙语，并学习了研究设计、Python、经济研究方法和学术写作。",
    homeAboutBody2: "我尤其关注人工智能与社会、计算社会科学、新闻信任，以及技术如何改变公共生活。",
    interestLabel: "目前关注", interest1: "人工智能与社会", interest2: "计算社会科学", interest3: "信息信任", interest4: "面向社会研究的自然语言处理",
    gatewayEyebrow: "研究与项目", gatewayTitle: "项目详情放在独立页面中。", gatewayBody: "查看我的 AI 与新闻模拟、实验数据和自然语言处理研究。", gatewayLink: "查看全部项目 →",
    documentsLabel: "资料", cvEnglish: "英文简历 ↗", cvChinese: "中文简历 ↗", homeFooter: "国际事务 · 计算方法 · 社会",
    projectsEyebrow: "研究与项目", projectsTitle: "代表性项目。", projectsLead: "我目前的项目关注 AI 介入的信息如何影响信任，以及计算方法如何服务社会科学研究。",
    projectsExplore: "开始浏览", backHome: "返回首页 ↗", projectsMeta: "多智能体模拟 · 实验 · 自然语言处理",
    projectEndEyebrow: "项目笔记结束", projectEndTitle: "返回个人主页，或继续和我交流。",
    experiencePageEyebrow: "实习与研究经历", experiencePageTitle: "在研究、数据与传播实践中持续学习。",
    experiencePageLead: "我的实践经历涵盖调查数据核查、公共政策研究、ESG、清洁交通和国际传播。",
    experienceCount: "段实践经历", experiencePeriod: "时间跨度", experienceFieldsValue: "研究 · 数据 · 传播", experienceFields: "领域",
    experienceTimelineEyebrow: "代表性经历", experienceTimelineTitle: "实践工作的时间线。",
    tagDataValidation: "数据核查", tagResearchDesign: "研究设计", tagSampling: "抽样", tagPublicPolicy: "公共政策",
    tagInterview: "访谈", tagBenchmarking: "对标分析", tagCleanTransport: "清洁交通", tagDeskResearch: "案头研究",
    tagBilingualWriting: "双语写作", tagTranslation: "翻译", tagNewsCuration: "新闻策划", tagGlobalMedia: "国际传播",
    experienceNextEyebrow: "继续浏览", experienceNextTitle: "了解这些能力如何与我的研究相连。", experienceNextLink: "查看项目 →",
    heroEyebrow: "研究者 · 计算社会科学", heroTitle: "劳嘉瑞", heroFocus: "人工智能、信息与技术的社会生命。",
    heroLead: "我关注人们如何理解由 AI 介入的信息，以及机器参与新闻生产后，信任如何发生变化。我的研究结合多智能体模拟、实验与自然语言处理，并从社会科学问题出发。",
    heroCTA: "查看代表性研究", heroAbout: "了解更多关于我 ↓", availability: "现居北京 · 使用中文、英文与西班牙语开展学习与研究。",
    visualQuestion: "研究问题", visualMain: "AI 生成新闻如何改变信任？", visualAgents: "异质智能体", visualConditions: "多条件", visualActions: "社会实验", visualMethod: "混合推理",
    statGPA: "核心问题", statAgents: "模拟智能体", statLanguages: "研究工具", statGrad: "进行中的项目",
    researchEyebrow: "研究主题", researchTitle: "人工智能参与新闻生产如何影响信任与用户行为。",
    reaction1: "“我相信这个来源。”", reaction2: "“让我先核实一下。”", reaction3: "“先转发，再核实。”",
    sceneLabel: "研究动机", sceneTitle: "同一条新闻可能引发不同用户的判断差异。",
    sceneBody: "面对同一篇新闻，用户可能依据媒体声誉、AI 披露、内容质量或社交信号作出判断。本研究检验这些线索如何与用户特征及重复接触共同作用。",
    sceneQuote: "本研究考察生产方式线索、用户特征与重复接触如何共同影响这些差异。",
    beat1: "新闻接触", beat2: "生产方式线索", beat3: "异质用户反应", beat4: "信任的动态更新",
    oasisKicker: "多智能体模拟 · 2026—至今", oasisTitle: "使用异质智能体模拟新闻接触与信任更新。",
    oasisSummary: "OASIS 为 1,000 多个异质智能体提供可控的信息环境，记录其在不同实验条件和时间步下对新闻的评价与行为反应。",
    questionLabel: "研究对象", questionBody: "真实新闻和用户画像构成 1,000 多个异质智能体共享的信息环境。",
    methodLabel: "实验因素", methodBody: "AI 标签、纠错信息和用户类型在不同实验条件中发生变化。",
    outputLabel: "测量结果", outputBody: "记录信任轨迹、行为日志与结构化反思，用于分析个体判断及其变化。",
    methodsCaption: "研究方法与实现", projectFormalTitle: "AI 生成新闻与社交媒体信任", projectRole: "研究项目 · 研究者", researchPlanLink: "研究计划 ↗",
    viewRepo: "研究进行中", observeEyebrow: "研究目标", observeBody: "比较不同条件下的信任水平与变化轨迹，并分析不同类型智能体之间的差异。",
    resultsEyebrow: "阶段 01 · 初始判断", resultsTitle: "维系初始信任的关键是人工监督，而非完全排除 AI。",
    resultsIntro: "9 篇固定新闻文本在每种模式的 100 个匹配智能体间均衡分配。文章长度、正文、发布媒体与智能体—文本配对保持一致，仅改变生产方式披露。",
    metaModes: "篇固定新闻文本", metaAgents: "每种模式的匹配智能体", metaObservations: "条 T0 观测", metaPanel: "条回退响应",
    snapshotTitle: "初始文章信任", snapshotNote: "均值与 95% 置信区间 · 0–1 标准化", snapshotTakeaway: "三种保留人工监督的模式集中在 67.5%–69.4%；AI 主导比人类主导低 24.8 个百分点。",
    trajectoryTitle: "感知人工控制与核查", trajectoryNote: "首次接触时的均值", controlLegend: "人工控制", verificationLegend: "核查程度", mechanismTakeaway: "信任与感知人工控制、核查程度同步变化；当 AI 成为主导生产者时，两者均明显下降。",
    modeHuman: "人类主导", modeAssist: "AI 工具辅助", modeDraft: "AI 起草—人工编辑", modeDominant: "AI 主导",
    insight1Label: "篇文本均出现信任惩罚", insight1Body: "在每篇固定文本中，AI 主导组的文章信任均低于其他模式。",
    insight2Label: "AI 主导的信任差距", insight2Body: "首次接触时相较人类主导生产的匹配均值差。",
    insight3Label: "选择主动核查", insight3Body: "AI 主导条件为 74%，三种人工监督模式仅为 9%–12%。",
    expandedTitle: "判断、认知与行为意向均出现同一分化。", judgmentMeasures: "判断结果", cognitiveMeasures: "机器启发式", intentionMeasures: "行为意向",
    qualityMetric: "感知文章质量", trustMetric: "文章信任", mediaTrustMetric: "媒体信任", positiveMetric: "正向机器线索", negativeMetric: "负向机器线索", humanControlMetric: "人工控制", readingMetric: "阅读", sharingMetric: "分享", verificationMetric: "核查",
    measureNote: "数值为 0–100 展示尺度上的均值；H = 人类主导，A = AI 工具辅助，D = AI 起草—人工编辑，X = AI 主导。",
    actionTitle: "AI 主导披露将行动明显推向主动核查。", actionNote: "T0 所选行动 · 智能体占比", actionLike: "点赞", actionComment: "评论", actionRepost: "转发", actionVerify: "核查", actionNone: "无行动",
    validationTitle: "AI 主导的信任惩罚在 9 篇文本中均重复出现。", validationNote: "按固定新闻文本计算的平均文章信任", validationStat1: "篇文本方向一致", validationStat2: "AI 主导惩罚范围", validationBody: "文本本身会改变总体信任——E003 最高、E007 最低——但无法解释生产方式带来的信任差距。",
    resultsCaveat: "阶段 01 匹配模拟 · 9 篇固定文本在每种模式中各分配 11–12 个智能体 · 使用同一发布媒体 · 400 条 T0 记录完整，无回退或验证错误 · 结果仅描述本次模拟群体，不代表真实用户效应。",
    signalEyebrow: "虚假新闻实验 · 配对比较", signalTitle: "在纠错出现之前，AI 披露标签已经降低了虚假信息相信率。",
    signalBody: "同一组 25 篇虚假新闻分别以有、无 AI 生成标签呈现。在新闻接触、同伴讨论和专家纠错三个阶段，带标签的智能体相信率更低、真实性怀疑更高。",
    falseItems: "篇配对新闻", falseTopics: "类新闻题材", falseStages: "个阶段", falseReflections: "条智能体反思",
    falseT1Title: "新闻接触", falseT1Body: "虚假新闻进入信息流", falseT2Title: "同伴讨论", falseT2Body: "社交信号逐步累积", falseT3Title: "专家纠错", falseT3Body: "权威证据出现",
    beliefChartTitle: "相信虚假说法", beliefChartNote: "各阶段比例 · 新闻与随机种子匹配", beliefFinding: "标签差距在同伴讨论阶段最大：T2 低 33.7 个百分点。",
    reasonChartTitle: "智能体在反思中引用的依据", reasonChartNote: "T1–T3 编码理由占比", reasonFinding: "标签改变了推理框架：从依赖信源权威，转向审视内容真实性。",
    signalCaveat: "描述性配对模拟 · 覆盖 5 类题材的 25 篇新闻 · 每篇一个随机种子 · 无标签组 373/375 条反思、标签组 375/375 条反思 · 作为机制信号而非最终因果估计。",
    noLabel: "无标签", sourceReason: "无标签组引用信源权威", withLabel: "AI 标签", labelReason: "标签组直接提及披露信息", skepticReason: "标签组表达怀疑或质疑",
    topicGapTitle: "T3 相信率差距：无标签减 AI 标签", topicEconomy: "经济", topicDisaster: "灾难", topicPolicy: "政策", topicEntertainment: "娱乐", topicHealth: "生活健康",
    nlpKicker: "面向政治学的 NLP · 2026—至今",
    nlpTitle: "中国领土争端中的权力政治与规范动态", nlpSummary: "从多国新闻构建外交活动纵向数据库，并结合规则抽取与 BERT 分类，识别行为主体、机构、访问方向、事件类型和主题。",
    approachEyebrow: "我正在探索", approachTitle: "引导我当前研究的问题。",
    approach1Title: "生产方式效应", approach1Body: "保持新闻正文一致，只改变四种人机生产方式，从而分离生产主体带来的第一印象。",
    approach2Title: "生产方式 × 内容质量", approach2Body: "将准确新闻与仅含一条可核查虚假事实的新闻交叉，区分生产身份和内容质量。",
    approach3Title: "重复接触", approach3Body: "追踪匹配智能体的多次接触，观察熟悉性、核查行为和信任如何随时间更新。",
    approach4Title: "信息生态", approach4Body: "将个体判断扩展为由互动、推荐、纠错和异质用户共同塑造的信息生态。",
    experienceEyebrow: "实践经历", experienceTitle: "跨领域的研究、数据与传播实践。",
    exp1Org: "北京大学中国社会科学调查中心", exp1Role: "CFPS 数据核查实习生", exp1Body: "将问卷逻辑转化为核查流程，使用 SAS 构建缺失值、异常值和一致性自动检查工具。",
    tsinghuaOrg: "清华大学 · 2026 数字政府回应项目", tsinghuaRole: "科研助理", tsinghuaBody: "参与搭建政府回应度测量框架，协助设计覆盖 50 个城市、四类平台的多层随机抽样方案，并制定 1—10 分标准化评价量表。",
    exp2Org: "北京商道纵横咨询有限公司", exp2Role: "ESG 咨询实习生", exp2Body: "通过问卷、访谈、案头研究和对标分析，支持 ESG 战略与公司治理研究。",
    exp3Org: "能源与交通创新中心", exp3Role: "研究实习生", exp3Body: "追踪全球清洁交通动态，撰写中英双语行业简报。",
    exp4Org: "中国外文局国际传播中心", exp4Role: "新媒体实习生", exp4Body: "翻译并策划面向国际平台的中国相关新闻内容。",
    educationEyebrow: "教育背景", educationSchool: "外交学院", educationDegree: "国际事务与国际关系学士 · 西班牙语辅修 · 2023—2027",
    courseLabel: "核心课程", courseBody: "研究设计、Python、经济研究方法、学术写作、国际政治经济学",
    awardLabel: "荣誉", awardBody: "优秀学生奖学金 · “资深外交官”奖学金",
    contactEyebrow: "保持联系", contactTitle: "很高兴与你交流关于人工智能、信息与社会的想法。",
    contactBody: "如果你也在研究计算社会科学、可信信息系统、大语言模型智能体或相关问题，欢迎来信交流。",
    emailMe: "给我写信", contactResearch: "阅读我的研究计划 ↗", footer: "为求知、清晰与交流而构建。", backTop: "返回顶部 ↑"
  }
};

const english = {};
document.querySelectorAll("[data-i18n]").forEach((node) => { english[node.dataset.i18n] = node.innerHTML; });

let language = localStorage.getItem("language") || "en";
const langButton = document.querySelector(".lang-toggle");

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.innerHTML = next === "zh" ? translations.zh[key] : english[key];
  });
  langButton.textContent = next === "zh" ? "EN" : "中文";
  langButton.setAttribute("aria-label", next === "zh" ? "Switch to English" : "切换到中文");
  localStorage.setItem("language", next);
}

langButton.addEventListener("click", () => setLanguage(language === "en" ? "zh" : "en"));
setLanguage(language);

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
