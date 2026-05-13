window.knowledgeExpansionEstimate = "本轮先交付 24 个独立知识页 + 1 个知识总览页，先把语法、DOM、异步、工程化、底层机制整理成可连续浏览的专题库。";

window.knowledgeBacklog = [
  "补充正则表达式、BOM、Date / Math、Map / Set 等独立页面。",
  "继续扩展与 runoob 风格接近的 API 速查页、示意图和术语索引。",
  "补充更多跨知识点项目，把知识页和题库之间的跳转再细化。",
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
};
