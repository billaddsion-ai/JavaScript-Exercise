window.knowledgeExpansionEstimate = "本轮继续补齐 4 个独立知识页，并把浏览器对象速查、术语索引、项目拆解继续往前推进一轮；目前累计 32 个独立知识页 + 1 个知识总览页，仍适合继续按专题扩展。";

window.knowledgeBacklog = [
  "继续补充 storage 事件、History / hash 路由、URL hash 与导航状态等独立知识页。",
  "继续扩展更像教程站的 API 对照表，例如数组变异/非变异方法、事件流阶段、异步并发策略。",
  "继续把跨知识点项目拆成真正的独立步骤页面，并给更多题目补配套项目路线。",
];

window.knowledgeGroups = {
  foundation: {
    title: "语言起步",
    description: "先建立变量、条件、循环、作用域的直觉，能把一句话需求翻成基础代码。",
    sequence: "建议第 1 阶段学习",
  },
  data: {
    title: "数据组织与函数",
    description: "学会用函数、对象、数组和现代语法整理数据，让代码开始具备复用能力。",
    sequence: "建议第 2 阶段学习",
  },
  dom: {
    title: "页面交互与 DOM",
    description: "把 JavaScript 和网页连起来，完成选择元素、监听事件、收集输入等常见交互。",
    sequence: "建议第 3 阶段学习",
  },
  async: {
    title: "异步、请求与存储",
    description: "围绕 Promise、await、fetch 和 localStorage 建立真实前端流程。",
    sequence: "建议第 4 阶段学习",
  },
  engineering: {
    title: "工程化与质量",
    description: "开始从“能跑”走向“更稳”，关注模块拆分、错误兜底和高频交互治理。",
    sequence: "建议第 5 阶段学习",
  },
  internals: {
    title: "底层机制与性能",
    description: "理解闭包、原型链、事件循环、this 与渲染性能这些面试和项目都常见的核心概念。",
    sequence: "建议第 6 阶段学习",
  },
};

window.knowledgeArticleMeta = {
  1: {
    fileName: "knowledge-01-variables-types.html",
    group: "foundation",
    point: "变量与数据类型",
    advancedNotes: [
      "日常开发里优先用 const，只有真的需要重新赋值时再退回 let。",
      "类型判断不要只背 typeof，数组、null、对象要结合 Array.isArray 和显式比较一起看。",
    ],
    funIdeas: ["把一个“个人资料快照”对象打印出来，同时观察 string、number、boolean 的 typeof。"],
    relatedIds: [15, 2, 5],
  },
  2: {
    fileName: "knowledge-02-conditionals.html",
    group: "foundation",
    point: "条件判断与比较",
    advancedNotes: [
      "把 if/else 想成页面分支：登录态、权限态、空状态本质上都是条件判断。",
      "能用 === 就不要急着用 ==，先减少隐式转换带来的意外结果。",
    ],
    funIdeas: ["做一个“今日状态提示”小组件：输入温度或分数，动态显示不同提示语。"],
    relatedIds: [1, 3, 16],
  },
  3: {
    fileName: "knowledge-03-loops.html",
    group: "foundation",
    point: "循环与遍历",
    advancedNotes: [
      "真实项目里循环经常和列表渲染、累计统计、批量校验一起出现。",
      "写循环前先确认边界条件：从哪开始、到哪结束、每轮如何变化。",
    ],
    funIdeas: ["试着把 1 到 20 的偶数渲染成列表，再统计它们的总和。"],
    relatedIds: [5, 9, 24],
  },
  4: {
    fileName: "knowledge-04-functions.html",
    group: "data",
    point: "函数与复用",
    advancedNotes: [
      "当一段逻辑重复两次以上，就值得考虑抽成函数。",
      "给函数取“动作 + 对象”的名字，后续读代码时会轻松很多。",
    ],
    funIdeas: ["把购物车总价、平均分、折扣价都封装成独立函数，再组合调用。"],
    relatedIds: [5, 8, 19],
  },
  5: {
    fileName: "knowledge-05-arrays-objects.html",
    group: "data",
    point: "数组、对象与读取数据",
    advancedNotes: [
      "前端接口返回的数据大多都是“数组里放对象”，这个主题是后续练习的基础。",
      "引用类型的赋值是共享地址，修改前要先想清楚是否需要复制。",
    ],
    funIdeas: ["做一个电影列表数组，包含名称、评分、年份，再把第一条电影信息输出到页面。"],
    relatedIds: [3, 8, 9],
  },
  6: {
    fileName: "knowledge-06-dom-select.html",
    group: "dom",
    point: "查找元素与更新内容",
    advancedNotes: [
      "页面交互的第一步通常都是“先找到元素”，再决定改文本、类名还是结构。",
      "插入用户输入时优先 textContent，先建立安全意识。",
    ],
    funIdeas: ["做一个“标题切换器”，按钮每点一次就在两段文案之间切换。"],
    relatedIds: [7, 13, 24],
  },
  7: {
    fileName: "knowledge-07-events-input.html",
    group: "dom",
    point: "事件监听与输入反馈",
    advancedNotes: [
      "按钮点击、输入联动、滚动吸顶，本质上都是某个事件触发后再执行逻辑。",
      "理解 event.target 之后，你会更容易读懂事件委托和表单处理。",
    ],
    funIdeas: ["做一个实时字数统计器，让输入框和提示文字同步变化。"],
    relatedIds: [6, 13, 16],
  },
  8: {
    fileName: "knowledge-08-destructuring-spread.html",
    group: "data",
    point: "解构赋值与展开运算符",
    advancedNotes: [
      "现代代码里经常用解构让参数读取更直接，用展开语法做浅拷贝和拼装对象。",
      "记住“展开只到第一层”，复杂对象更新时仍要关注嵌套引用。",
    ],
    funIdeas: ["把课程对象拆出 title、teacher，再用展开语法追加 progress 字段。"],
    relatedIds: [5, 9, 14],
  },
  9: {
    fileName: "knowledge-09-array-methods.html",
    group: "data",
    point: "数组方法与数据处理",
    advancedNotes: [
      "map / filter / reduce 是列表页、统计页、筛选器里最常见的一组组合拳。",
      "先把每个方法单独练熟，再去读链式调用会轻松很多。",
    ],
    funIdeas: ["对课程成绩做“筛选及格 → 提升 5 分 → 统计总分”的三步处理。"],
    relatedIds: [3, 5, 17],
  },
  10: {
    fileName: "knowledge-10-promise.html",
    group: "async",
    point: "Promise 基础",
    advancedNotes: [
      "Promise 最大的价值是把“成功流”和“失败流”都写清楚。",
      "先学会读 then/catch，再学 async/await 会更稳。",
    ],
    funIdeas: ["模拟一个 1 秒后返回结果的异步任务，观察 pending 到 fulfilled 的变化。"],
    relatedIds: [11, 17, 21],
  },
  11: {
    fileName: "knowledge-11-async-await.html",
    group: "async",
    point: "async / await",
    advancedNotes: [
      "当异步步骤超过两层时，用 async/await 往往比连写多个 then 更好读。",
      "记得用 try/catch 收口错误，不要只写成功路径。",
    ],
    funIdeas: ["试着把一个 Promise 链改写成 async/await，对比可读性差异。"],
    relatedIds: [10, 17, 18],
  },
  12: {
    fileName: "knowledge-12-json-localstorage.html",
    group: "async",
    point: "JSON 与 localStorage",
    advancedNotes: [
      "localStorage 适合保存体积小、结构简单、需要跨刷新保留的前端状态。",
      "对象进存储前要 stringify，取出来后再 parse，这个流程要反复练到熟悉。",
    ],
    funIdeas: ["做一个“学习进度草稿箱”，刷新页面后还能记住上次输入内容。"],
    relatedIds: [5, 16, 17],
  },
  13: {
    fileName: "knowledge-13-event-delegation.html",
    group: "dom",
    point: "事件委托",
    advancedNotes: [
      "列表很多、项目会增删时，用事件委托比逐个绑事件更省心。",
      "理解冒泡路径之后，再看 event.target.closest 会更容易。",
    ],
    funIdeas: ["做一个待办列表，新增条目后不用重新绑事件也能完成点击删除。"],
    relatedIds: [7, 6, 24],
  },
  14: {
    fileName: "knowledge-14-modules.html",
    group: "engineering",
    point: "模块化思维",
    advancedNotes: [
      "模块化不是为了“写高级语法”，而是为了把职责拆清楚。",
      "先从“数据、渲染、事件”三类职责拆分，最适合新手过渡。",
    ],
    funIdeas: ["把一个小页面拆成“状态模块”和“渲染模块”，体验维护成本的变化。"],
    relatedIds: [4, 18, 24],
  },
  15: {
    fileName: "knowledge-15-scope-template-strings.html",
    group: "foundation",
    point: "作用域与模板字符串",
    advancedNotes: [
      "模板字符串让插值更自然，而作用域决定变量在什么范围内可见。",
      "这两个点经常一起出现：你在循环、条件、函数里拼装文案时都会遇到。",
    ],
    funIdeas: ["拼一个“欢迎回来，用户名，今天第 N 天学习”的动态文案。"],
    relatedIds: [1, 4, 16],
  },
  16: {
    fileName: "knowledge-16-forms-validation.html",
    group: "dom",
    point: "表单输入与基础校验",
    advancedNotes: [
      "前端表单通常先做“空值、类型、长度”这三层基础校验。",
      "输入框的 value 默认都是字符串，数值题一定要主动转换。",
    ],
    funIdeas: ["做一个报名表单，输入年龄、昵称后即时显示“是否通过基础校验”。"],
    relatedIds: [2, 7, 12],
  },
  17: {
    fileName: "knowledge-17-fetch-loading.html",
    group: "async",
    point: "fetch 与加载状态",
    advancedNotes: [
      "真实页面不只是“拿到数据”，还要处理加载中、空数据、请求失败三种状态。",
      "先养成检查 response.ok 的习惯，再做后续数据解析。",
    ],
    funIdeas: ["做一个“随机一句话”加载按钮，分别展示加载中、成功和失败提示。"],
    relatedIds: [10, 11, 18],
  },
  18: {
    fileName: "knowledge-18-error-handling.html",
    group: "engineering",
    point: "错误处理与用户提示",
    advancedNotes: [
      "对开发者要保留错误细节，对用户要给出简单、可执行的提示。",
      "错误处理不是补丁，而是页面流程的一部分。",
    ],
    funIdeas: ["把同一个错误同时转成“开发日志提示”和“用户可读提示”两种版本。"],
    relatedIds: [11, 17, 22],
  },
  19: {
    fileName: "knowledge-19-closures.html",
    group: "internals",
    point: "闭包",
    advancedNotes: [
      "闭包常见于计数器、缓存、工厂函数和事件处理器里。",
      "真正关键的不是死记定义，而是弄清“谁还在引用外部变量”。",
    ],
    funIdeas: ["写一个只能递增的私有计数器，感受“函数记住外部变量”这件事。"],
    relatedIds: [4, 15, 23],
  },
  20: {
    fileName: "knowledge-20-prototypes-class.html",
    group: "internals",
    point: "原型链与 class",
    advancedNotes: [
      "class 更像更好读的写法，本质仍然是基于原型的继承模型。",
      "把“实例 → 原型 → 更上层原型”的查找顺序画出来，会比纯文字更容易理解。",
    ],
    funIdeas: ["定义一个 Student 类，并在原型上挂一个 sayHello 方法，再观察实例如何访问它。"],
    relatedIds: [5, 14, 23],
  },
  21: {
    fileName: "knowledge-21-event-loop.html",
    group: "internals",
    point: "事件循环、宏任务与微任务",
    advancedNotes: [
      "读懂事件循环后，你会更容易解释 Promise.then、setTimeout 和 DOM 渲染顺序。",
      "建议把同步任务、微任务、宏任务画成队列，再手动推一遍执行顺序。",
    ],
    funIdeas: ["准备几行 console.log + Promise.then + setTimeout，先猜输出，再运行验证。"],
    relatedIds: [10, 11, 17],
  },
  22: {
    fileName: "knowledge-22-debounce-throttle.html",
    group: "engineering",
    point: "防抖与节流",
    advancedNotes: [
      "输入搜索更适合防抖，滚动监听和拖拽更常用节流。",
      "理解“触发频率”和“用户体验”的平衡，比只会背定义更重要。",
    ],
    funIdeas: ["对同一个输入框分别尝试防抖和不防抖，感受请求次数差别。"],
    relatedIds: [7, 18, 24],
  },
  23: {
    fileName: "knowledge-23-this-bind.html",
    group: "internals",
    point: "this 与绑定规则",
    advancedNotes: [
      "this 的难点在于调用方式不同，指向就可能不同。",
      "箭头函数、bind、对象方法是最值得优先吃透的三种场景。",
    ],
    funIdeas: ["用同一个函数分别直接调用、对象调用、bind 后调用，观察 this 变化。"],
    relatedIds: [19, 20, 24],
  },
  24: {
    fileName: "knowledge-24-render-performance.html",
    group: "engineering",
    point: "渲染性能与批量更新",
    advancedNotes: [
      "优化页面时先找瓶颈，再决定是减少重排、减少查询，还是减少无意义计算。",
      "DocumentFragment、缓存节点、事件委托经常会一起出现。",
    ],
    funIdeas: ["比较“循环里逐条插入 DOM”和“先拼 fragment 再一次插入”的差异。"],
    relatedIds: [6, 13, 22],
  },
  25: {
    fileName: "knowledge-25-regexp.html",
    group: "engineering",
    point: "正则表达式入门",
    advancedNotes: [
      "正则最适合先从“匹配什么文本”来理解，再逐步记住元字符和修饰符。",
      "表单校验、关键词提取、批量替换都是最容易感受到正则价值的场景。",
    ],
    funIdeas: ["写一个用户名校验器，只允许 4~12 位字母、数字和下划线。"],
    relatedIds: [16, 18, 26],
  },
  26: {
    fileName: "knowledge-26-bom-timers.html",
    group: "dom",
    point: "BOM、窗口对象与定时器",
    advancedNotes: [
      "BOM 更关注浏览器环境本身，比如窗口尺寸、地址栏、历史记录和定时任务。",
      "定时器不是越多越好，页面切换或组件销毁时要记得清理。",
    ],
    funIdeas: ["做一个倒计时提示条，开始后每秒刷新一次，到点自动停止。"],
    relatedIds: [7, 17, 21],
  },
  27: {
    fileName: "knowledge-27-date-math.html",
    group: "foundation",
    point: "Date 与 Math 常用工具",
    advancedNotes: [
      "Date 适合解决“现在是什么时间、相差多久”，Math 适合做随机数、取整和边界处理。",
      "做倒计时、抽奖、分页、价格计算时，这两个内置对象会非常常见。",
    ],
    funIdeas: ["做一个“今日学习第几天”提示，并顺手生成一个随机鼓励文案。"],
    relatedIds: [1, 3, 26],
  },
  28: {
    fileName: "knowledge-28-map-set.html",
    group: "data",
    point: "Map 与 Set",
    advancedNotes: [
      "Set 擅长去重与成员判断，Map 擅长用任意类型做键保存映射关系。",
      "当对象键不再只是字符串，或者你需要稳定记录插入顺序时，可以优先想到 Map。",
    ],
    funIdeas: ["用 Set 给标签数组去重，再用 Map 统计每个标签出现次数。"],
    relatedIds: [5, 9, 20],
  },
  29: {
    fileName: "knowledge-29-sessionstorage.html",
    group: "async",
    point: "sessionStorage 与临时状态保存",
    advancedNotes: [
      "sessionStorage 很适合保存“当前标签页还没提交流程”的临时状态，例如筛选条件、草稿步骤、分步表单。",
      "它和 localStorage 的区别要先讲“生命周期”，再讲“跨标签页是否共享”。",
    ],
    funIdeas: ["做一个“本页临时筛选器”，刷新后仍保留，换新标签页时重新开始。"],
    relatedIds: [12, 16, 31],
  },
  30: {
    fileName: "knowledge-30-cookie.html",
    group: "async",
    point: "Cookie 基础与前端读取",
    advancedNotes: [
      "Cookie 更适合先建立“它是浏览器自动夹带的小文本”的直觉，再区分哪些属性能前端设置、哪些只是知道概念。",
      "前端通常负责轻量偏好与演示性读写；遇到安全属性时，更重要的是知道边界，而不是在前端硬做所有事。",
    ],
    funIdeas: ["做一个“欢迎语偏好”示例，体验把主题色或称呼保存成 Cookie 字符串。"],
    relatedIds: [12, 18, 31],
  },
  31: {
    fileName: "knowledge-31-url-searchparams.html",
    group: "dom",
    point: "URL 与 URLSearchParams",
    advancedNotes: [
      "当页面状态需要可分享、可刷新恢复时，可以优先考虑把条件放进 URL 查询参数。",
      "URLSearchParams 最适合和筛选器、分页、搜索词联动，帮助你把页面状态变成可复制链接。",
    ],
    funIdeas: ["做一个课程筛选链接生成器，把 level、keyword、sort 三个条件实时拼进地址。"],
    relatedIds: [17, 26, 30],
  },
  32: {
    fileName: "knowledge-32-array-sort.html",
    group: "data",
    point: "数组排序策略",
    advancedNotes: [
      "排序最容易踩坑的地方不是 API 名字，而是“默认按字符串排”和“比较函数返回值”的含义。",
      "现代代码里还要顺手知道 toSorted 这类不改原数组的写法，方便减少副作用。",
    ],
    funIdeas: ["把课程列表按价格、评分、上新时间各排一遍，再比较原数组有没有被改动。"],
    relatedIds: [9, 27, 28],
  },
};

window.knowledgeSupportPages = [
  {
    title: "JavaScript API 速查页",
    description: "把数组方法、DOM、异步、存储、Cookie、URL / URLSearchParams、BOM 等按场景归档，适合遇到 API 时快速回查。",
    fileName: "api-reference.html",
    badge: "速查",
  },
  {
    title: "JavaScript 术语索引",
    description: "集中解释作用域、闭包、事件冒泡、微任务等高频名词，读知识页和做题时能更快对齐概念。",
    fileName: "glossary.html",
    badge: "术语",
  },
  {
    title: "跨知识点项目页",
    description: "把输入、存储、URL 状态、异步、性能等主题串成完整项目路线，方便从单点知识过渡到页面功能。",
    fileName: "project-paths.html",
    badge: "项目",
  },
];

window.knowledgeApiSections = [
  {
    title: "基础语法与内置工具",
    summary: "先覆盖最常回头查的字符串、数字、时间和随机数工具。",
    entries: [
      {
        name: "Number / parseInt / parseFloat",
        kind: "类型转换",
        syntax: "Number(value)\nparseInt(value, 10)\nparseFloat(value)",
        description: "把输入框、URL 参数、存储里的字符串转成数字时最常用。",
        tips: ["Number 更适合整体转数值。", "parseInt 记得传 10，避免旧环境歧义。"],
      },
      {
        name: "Math.floor / Math.ceil / Math.round / Math.random",
        kind: "Math",
        syntax: "Math.floor(3.9)\nMath.ceil(3.1)\nMath.round(3.5)\nMath.random()",
        description: "做分页、随机题目、抽样显示、价格处理时都很常见。",
        tips: ["随机整数常写成 Math.floor(Math.random() * max)。", "涉及金额时先想清楚取整规则。"],
      },
      {
        name: "Date.now / new Date / getTime",
        kind: "Date",
        syntax: "const now = new Date();\nDate.now();\nnow.getTime();",
        description: "适合时间戳比较、倒计时、学习打卡时间记录。",
        tips: ["时间比较通常用时间戳更直接。", "展示给用户前最好自己格式化。"],
      },
    ],
  },
  {
    title: "DOM 与 BOM 常用 API",
    summary: "把网页元素操作和浏览器窗口对象放在一起查，方便做交互页面。",
    entries: [
      {
        name: "querySelector / querySelectorAll",
        kind: "DOM 查询",
        syntax: "document.querySelector('#app')\ndocument.querySelectorAll('.item')",
        description: "选中单个元素或一组元素，是几乎所有页面脚本的起点。",
        tips: ["没找到元素会得到 null。", "querySelectorAll 返回静态列表。"],
      },
      {
        name: "addEventListener",
        kind: "事件监听",
        syntax: "button.addEventListener('click', handler)",
        description: "统一绑定点击、输入、提交、滚动等用户事件。",
        tips: ["同一元素可绑定多个事件。", "需要移除时要保留同一个 handler 引用。"],
      },
      {
        name: "window.location / history / setTimeout / setInterval",
        kind: "BOM / 定时器",
        syntax: "window.location.href\nhistory.back()\nsetTimeout(fn, 500)\nsetInterval(fn, 1000)",
        description: "处理跳转、浏览历史、延时和轮询时会频繁遇到。",
        tips: ["setInterval 常要搭配 clearInterval。", "页面跳转前先确认是否会丢失状态。"],
      },
    ],
  },
  {
    title: "数组、对象与集合处理",
    summary: "列表页、筛选器和配置表最常回查的操作集中在这里。",
    entries: [
      {
        name: "map / filter / reduce",
        kind: "数组方法",
        syntax: "list.map(fn)\nlist.filter(fn)\nlist.reduce(fn, initialValue)",
        description: "分别负责变形、筛选和累计，是处理中后台列表的高频组合。",
        tips: ["map / filter 会返回新数组。", "reduce 前先确认累计值是什么。"],
      },
      {
        name: "Object.keys / Object.values / Object.entries",
        kind: "对象遍历",
        syntax: "Object.keys(obj)\nObject.values(obj)\nObject.entries(obj)",
        description: "把对象转成可循环的数据结构，适合做配置渲染和统计。",
        tips: ["entries 常和 for...of 搭配。", "遍历前先确认属性是否真的需要全部暴露。"],
      },
      {
        name: "Set / Map",
        kind: "集合",
        syntax: "const set = new Set(arr)\nconst map = new Map([[key, value]])",
        description: "Set 适合去重，Map 适合保存更灵活的键值映射。",
        tips: ["Set 去重后可用 [...set] 转回数组。", "Map 保留插入顺序，读取用 map.get(key)。"],
      },
    ],
  },
  {
    title: "异步、存储与文本处理",
    summary: "请求、缓存和校验类场景常会把这些 API 连在一起使用。",
    entries: [
      {
        name: "Promise / async / await",
        kind: "异步控制",
        syntax: "await fetch(url)\nPromise.all(list)",
        description: "把请求、并发加载、延迟操作串成更清晰的异步流程。",
        tips: ["await 记得配合 try/catch。", "并发请求前先确认是否需要全部成功。"],
      },
      {
        name: "localStorage / sessionStorage / JSON.stringify / JSON.parse",
        kind: "Web Storage",
        syntax: "sessionStorage.setItem('draft', value)\nlocalStorage.setItem('prefs', JSON.stringify(data))\nJSON.parse(localStorage.getItem('prefs'))",
        description: "把轻量状态缓存到浏览器：sessionStorage 更适合当前标签页，localStorage 更适合跨刷新长期保留。",
        tips: ["sessionStorage 与 localStorage 要先区分生命周期。", "JSON.parse 前先判断是否为 null。"],
      },
      {
        name: "document.cookie",
        kind: "Cookie",
        syntax: "document.cookie = 'theme=dark; max-age=3600; path=/'\ndocument.cookie.split('; ')",
        description: "适合认识 Cookie 的基础读写格式，以及它与 Storage、请求头之间的关系。",
        tips: ["Cookie 更适合小体积文本。", "HttpOnly 这类安全属性要知道边界：前端只能理解概念，不能读取。"],
      },
      {
        name: "RegExp / test / match / replace",
        kind: "正则",
        syntax: "/^\\w{4,12}$/.test(name)\ntext.match(/\\d+/g)\ntext.replace(/-/g, '/')",
        description: "输入校验、关键词提取、格式清洗时很常见。",
        tips: ["先写最小匹配规则，再逐步加复杂条件。", "全局匹配常配合 g 修饰符。"],
      },
    ],
  },
  {
    title: "浏览器对象与地址栏速查",
    summary: "把 window、document、location、URL、URLSearchParams 这些常见对象放在一起，更方便像教程站一样回查。",
    entries: [
      {
        name: "window / document / navigator",
        kind: "浏览器对象",
        syntax: "window.innerWidth\ndocument.title\nnavigator.userAgent",
        description: "分别代表窗口、页面文档和浏览器环境信息，是浏览器对象模型里最常接触的入口。",
        tips: ["window 是很多全局 API 的宿主。", "读取 navigator 信息前先确认场景是否真的需要。"],
      },
      {
        name: "location / history",
        kind: "导航状态",
        syntax: "location.href\nlocation.search\nhistory.back()\nhistory.pushState(state, '', url)",
        description: "处理跳转、回退和地址栏状态时会频繁遇到。",
        tips: ["改 location.href 通常会触发导航。", "pushState 更适合无刷新更新地址。"],
      },
      {
        name: "URL / URLSearchParams",
        kind: "地址解析",
        syntax: "const url = new URL(location.href)\nconst params = new URLSearchParams('?level=basic')\nparams.set('sort', 'score-desc')",
        description: "适合解析路径、拼接查询参数、生成可分享链接。",
        tips: ["多个筛选条件很适合交给 URLSearchParams 管理。", "需要分享页面状态时优先考虑 URL。"],
      },
      {
        name: "sort / toSorted",
        kind: "排序策略",
        syntax: "list.sort((a, b) => a.score - b.score)\nlist.toSorted((a, b) => b.time - a.time)",
        description: "对列表做升序、降序、多条件排序时最常回查。",
        tips: ["sort 会改原数组。", "toSorted 返回新数组，更适合保留原数据。"],
      },
    ],
  },
];

window.knowledgeGlossaryTerms = [
  {
    term: "作用域",
    definition: "变量在什么范围内可以被访问。",
    remember: "看变量是写在全局、函数里，还是块级语句里。",
    relatedIds: [1, 4, 15],
  },
  {
    term: "闭包",
    definition: "函数在外部作用域结束后，仍然记住并访问其中变量的现象。",
    remember: "关键不是背定义，而是看“谁还在引用那个变量”。",
    relatedIds: [4, 19, 23],
  },
  {
    term: "事件冒泡",
    definition: "事件从目标元素逐层向父元素传播的默认过程。",
    remember: "事件委托就是借助冒泡把监听放到更高一层。",
    relatedIds: [7, 13, 24],
  },
  {
    term: "微任务",
    definition: "在当前同步任务结束后、下一个宏任务前执行的一类任务，Promise.then 很常见。",
    remember: "常拿来和 setTimeout 这样的宏任务做顺序比较。",
    relatedIds: [10, 11, 21],
  },
  {
    term: "原型链",
    definition: "对象查找属性时沿着原型持续向上查找的关系链。",
    remember: "实例没有的属性，才会继续去原型上找。",
    relatedIds: [20, 23, 28],
  },
  {
    term: "浅拷贝",
    definition: "只复制第一层，嵌套对象仍然共享引用的复制方式。",
    remember: "展开运算符和 slice 都属于常见浅拷贝。",
    relatedIds: [5, 8, 28],
  },
  {
    term: "防抖",
    definition: "高频触发时只在停止一段时间后执行一次。",
    remember: "更适合搜索输入、联想提示这类场景。",
    relatedIds: [7, 22, 24],
  },
  {
    term: "节流",
    definition: "高频触发时按固定时间间隔执行。",
    remember: "滚动监听、拖拽、窗口缩放更常见。",
    relatedIds: [22, 24, 26],
  },
  {
    term: "BOM",
    definition: "Browser Object Model，描述浏览器窗口环境本身的一组对象。",
    remember: "window、location、history、navigator 都属于这类范围。",
    relatedIds: [17, 21, 26],
  },
  {
    term: "Set 去重",
    definition: "把数组传给 Set 后，会自动移除重复值。",
    remember: "常见写法是 [...new Set(arr)]。",
    relatedIds: [9, 28, 24],
  },
  {
    term: "正则修饰符",
    definition: "用来影响正则匹配方式的附加标记，如 g、i、m。",
    remember: "g 常用于全局查找，i 常用于忽略大小写。",
    relatedIds: [16, 18, 25],
  },
  {
    term: "加载状态",
    definition: "页面请求远程数据时，对“等待中、成功、失败”三种状态的管理。",
    remember: "真正的异步页面不只处理成功结果。",
    relatedIds: [10, 11, 17],
  },
  {
    term: "sessionStorage",
    definition: "当前标签页级别的浏览器存储，适合保存临时状态或短流程草稿。",
    remember: "关掉当前标签页后通常就结束，重点记“只属于这个标签页”。",
    relatedIds: [12, 29, 31],
  },
  {
    term: "Cookie",
    definition: "浏览器保存的一小段文本，可跟随请求发送，也可在前端做基础读写。",
    remember: "先记“体积小、字符串格式、会带到请求里”这三个特点。",
    relatedIds: [12, 30, 31],
  },
  {
    term: "查询参数",
    definition: "URL 中 ? 后面的键值对，适合表达筛选、分页、搜索词等可分享页面状态。",
    remember: "把页面条件放进链接里，刷新和分享都会更自然。",
    relatedIds: [17, 26, 31],
  },
  {
    term: "比较函数",
    definition: "数组排序时传给 sort / toSorted 的函数，用返回值决定前后顺序。",
    remember: "返回负数表示 a 在前，正数表示 b 在前，0 表示保持相对位置。",
    relatedIds: [9, 28, 32],
  },
];

window.knowledgeProjectGuides = [
  {
    level: "basic",
    title: "学习打卡卡片",
    summary: "把表单输入、Date、DOM 更新、基础校验串成一个最小可用的小页面。",
    deliverables: ["输入学习主题和天数后生成卡片", "显示今天日期和累计学习天数", "空输入时给出校验提示"],
    milestones: ["先完成表单结构和结果卡片容器。", "再把输入值读出来并实时更新卡片文案。", "最后补空值校验和日期格式化，让页面可直接演示。"],
    relatedIds: [6, 16, 27],
    questionPath: "questions.html?difficulty=basic&type=practice",
  },
  {
    level: "intermediate",
    title: "标签去重与筛选面板",
    summary: "把数组方法、Set、事件监听和 localStorage 串起来，适合做课程/文章标签管理。",
    deliverables: ["输入标签后自动去重", "支持筛选、删除和本地保存", "刷新后恢复上次状态"],
    milestones: ["先把标签输入、列表渲染和删除按钮跑通。", "再用 Set 做去重，并补关键词筛选。", "最后接入本地存储，刷新后恢复上次状态。"],
    relatedIds: [9, 12, 28],
    questionPath: "questions.html?difficulty=intermediate&type=practice",
  },
  {
    level: "intermediate",
    title: "账号安全小助手",
    summary: "把正则表达式、表单校验和错误提示合起来，做一个实时密码/用户名检查页面。",
    deliverables: ["用户名和密码实时校验", "区分通过、警告、失败三种提示", "提交前统一阻止不合法输入"],
    milestones: ["先列出用户名、密码、确认密码三类规则。", "再做输入时即时反馈和统一错误提示。", "最后补提交校验和成功状态重置逻辑。"],
    relatedIds: [16, 18, 25],
    questionPath: "questions.html?difficulty=intermediate&type=fill",
  },
  {
    level: "intermediate",
    title: "筛选链接生成器",
    summary: "把 URL、URLSearchParams、数组排序和 sessionStorage 串起来，做一个可刷新恢复状态的筛选页。",
    deliverables: ["筛选条件实时写入 URL 查询参数", "支持排序切换并同步渲染结果", "刷新页面后恢复当前标签页状态"],
    milestones: ["先定义课程数据和筛选表单，确保筛选结果能正确渲染。", "再把 keyword、level、sort 三个条件同步到 URLSearchParams。", "最后用 sessionStorage 保存临时 UI 状态，例如最后展开的筛选面板。"],
    relatedIds: [9, 29, 31, 32],
    questionPath: "questions.html?difficulty=intermediate&type=practice",
  },
  {
    level: "intermediate",
    title: "主题偏好欢迎页",
    summary: "把 Cookie、DOM、表单和错误提示串起来，完成一个会记住称呼与主题偏好的欢迎页。",
    deliverables: ["输入昵称后生成个性化欢迎语", "可保存浅色/深色主题偏好", "下次打开时读取 Cookie 并恢复界面"],
    milestones: ["先完成主题切换和欢迎语渲染。", "再封装 Cookie 的基础读写辅助函数。", "最后补非法输入兜底和“恢复默认设置”按钮。"],
    relatedIds: [16, 18, 30],
    questionPath: "questions.html?difficulty=intermediate&type=practice",
  },
  {
    level: "hard",
    title: "异步倒计时公告栏",
    summary: "结合 fetch、BOM 定时器、事件循环与性能优化，模拟一个会自动轮播更新的公告面板。",
    deliverables: ["请求远程数据并显示加载状态", "使用定时器定期刷新公告", "切换标签页或销毁时及时清理定时器"],
    milestones: ["先完成加载中、成功、失败三种状态。", "再做自动刷新、倒计时与手动刷新协同。", "最后在标签页切换或组件销毁时清理定时器并检查性能。"],
    relatedIds: [17, 21, 24, 26],
    questionPath: "questions.html?difficulty=hard&type=practice",
  },
];
