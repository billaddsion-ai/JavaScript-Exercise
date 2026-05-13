const levelMeta = {
  basic: {
    label: "基础",
    short: "从语法、流程、DOM 入门开始",
    description: "面向第一次接触 JavaScript 的学习者，重点是认识概念、会读代码、能改简单示例。",
    studyPlan: ["先看概念解释", "再抄一遍示例代码", "最后运行示例并试着改动数字、文本、条件"],
    colorClass: "basic",
    recommendedType: "choice",
  },
  intermediate: {
    label: "进阶",
    short: "学会常见开发写法和浏览器 API",
    description: "适合已经掌握基础语法的学习者，开始接触异步、模块化、存储、数据处理。",
    studyPlan: ["先理解为什么要这样写", "再对比基础写法和进阶写法", "最后完成对应练习"],
    colorClass: "intermediate",
    recommendedType: "fill",
  },
  hard: {
    label: "困难",
    short: "理解底层机制与复杂场景",
    description: "适合准备做真实项目或面试提升的学习者，内容包含原型链、事件循环、性能优化等。",
    studyPlan: ["先画出执行流程", "再阅读代码结果为什么如此", "最后尝试自己封装函数或完成复杂题目"],
    colorClass: "hard",
    recommendedType: "practice",
  },
};

const questionTypeMeta = {
  choice: {
    label: "选择题",
    intro: "适合快速检查概念理解是否准确。",
  },
  fill: {
    label: "填空题",
    intro: "适合记忆关键 API、关键字和常见写法。",
  },
  practice: {
    label: "实战题",
    intro: "适合把知识点变成页面功能。",
  },
};

const studyPhases = [
  {
    title: "先建立全局地图",
    description: "先看首页路线和每级别目标，知道“为什么学、先学什么、学到哪里算完成”。",
    actions: ["先从基础知识库开始", "遇到新词先看示例再记定义", "每学完一个主题就立即练习"],
  },
  {
    title: "再做同级别练习",
    description: "知识页学完后立即进入对应难度题库，用选择题校准概念、用填空题强化记忆、用实战题连接页面交互。",
    actions: ["基础先做选择题", "进阶优先补 API 与异步", "困难阶段多做实战和挑战项目"],
  },
  {
    title: "最后进入挑战项目",
    description: "当你能独立改动示例后，再去做更完整的小项目，把多个知识点串起来。",
    actions: ["先完成最小可用版本", "再补空状态和错误处理", "最后优化交互和代码组织"],
  },
];

const challengeProjects = [
  {
    level: "basic",
    title: "个人资料卡生成器",
    summary: "练习表单输入、条件判断、DOM 更新，让新手快速看到“输入 → 输出”的闭环。",
  },
  {
    level: "intermediate",
    title: "课程筛选与排序面板",
    summary: "把数组方法、事件委托、本地存储串起来，完成更接近真实后台列表的交互。",
  },
  {
    level: "hard",
    title: "异步数据看板",
    summary: "同时覆盖 fetch、Promise.all、错误重试、加载状态与性能优化，适合进阶挑战。",
  },
];

const knowledgeGroups = window.knowledgeGroups || {};
const knowledgeArticleMeta = window.knowledgeArticleMeta || {};
const knowledgeExpansionEstimate = window.knowledgeExpansionEstimate || "";
const knowledgeBacklog = window.knowledgeBacklog || [];

const knowledgeBase = [
  {
    id: 1,
    level: "basic",
    category: "语法基础",
    title: "变量、常量与数据类型",
    summary: "先分清“盒子”和“盒子里的值”：变量是盒子，字符串、数字、布尔值是盒子里的内容。",
    goals: ["知道 let 和 const 的区别", "认识字符串、数字、布尔值、null、undefined", "能用 typeof 做初步判断"],
    steps: [
      "先记住：const 表示这个变量名之后不会再指向别的值，let 表示后面还可能改。",
      "再理解：变量保存的是值，值有类型；类型不同，能做的操作也不同。",
      "最后练习：自己声明 3 个变量，分别保存姓名、年龄、是否已学完第一章。",
    ],
    pitfalls: ["const 不能重新赋值，但如果值是对象，对象内部属性仍可修改。", "typeof null 会得到 object，这是历史遗留行为。"],
    code: `const userName = "小林";\nlet age = 18;\nconst isBeginner = true;\nconsole.log(typeof userName, typeof age, typeof isBeginner);`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="btn">年龄 +1</button><p id="out">小林：18 岁</p><script>let age=18;const out=document.getElementById('out');document.getElementById('btn').onclick=()=>{age+=1;out.textContent='小林：'+age+' 岁';};</script></body>`,
    practiceHint: "把姓名和年龄改成你自己的，再添加一个“是否喜欢编程”的布尔值。",
  },
  {
    id: 2,
    level: "basic",
    category: "流程控制",
    title: "条件判断与比较运算",
    summary: "程序会根据条件决定走哪条路，if/else 就像“如果满足条件就这样做，否则那样做”。",
    goals: ["会写 if / else if / else", "知道 === 比 == 更安全", "知道逻辑与 &&、逻辑或 || 的作用"],
    steps: [
      "先判断一个条件：例如分数是否大于等于 60。",
      "再连接多个条件：例如既要登录成功，又要角色是管理员。",
      "最后记住：比较值时优先用 ===，避免隐式类型转换带来的误判。",
    ],
    pitfalls: ["if (0) 会进入 false 分支，因为 0 是假值。", "== 会自动转换类型，新手阶段尽量少用。"],
    code: `const score = 78;\nif (score >= 90) {\n  console.log("优秀");\n} else if (score >= 60) {\n  console.log("及格");\n} else {\n  console.log("继续努力");\n}`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><input id="score" value="78" type="number" /><button id="check">判断成绩</button><p id="out">结果会显示在这里</p><script>document.getElementById('check').onclick=()=>{const score=Number(document.getElementById('score').value);let result='继续努力';if(score>=90){result='优秀';}else if(score>=60){result='及格';}document.getElementById('out').textContent='判断结果：'+result;};</script></body>`,
    practiceHint: "把成绩阈值改一改，看看不同输入下会进入哪一个分支。",
  },
  {
    id: 3,
    level: "basic",
    category: "流程控制",
    title: "循环：重复做一件事",
    summary: "循环能让程序自动重复工作，常见场景是遍历数组、累计求和、依次渲染列表。",
    goals: ["认识 for 循环的三个部分", "知道 while 在什么情况下使用", "会把循环和数组结合起来"],
    steps: [
      "先看 for (初始值; 条件; 每轮变化) 这三个位置分别做什么。",
      "再学会在循环里更新结果，比如把总和累加起来。",
      "最后尝试遍历数组，把每一项打印出来。",
    ],
    pitfalls: ["循环条件写错可能导致死循环。", "数组最后一个索引是 length - 1，不是 length。"],
    code: `const numbers = [3, 5, 8];\nlet total = 0;\nfor (let i = 0; i < numbers.length; i += 1) {\n  total += numbers[i];\n}\nconsole.log(total);`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="sum">计算总和</button><p id="out">3, 5, 8</p><script>document.getElementById('sum').onclick=()=>{const numbers=[3,5,8];let total=0;for(let i=0;i<numbers.length;i+=1){total+=numbers[i];}document.getElementById('out').textContent='总和：'+total;};</script></body>`,
    practiceHint: "试着把数组换成 [10, 20, 30, 40]，观察结果变化。",
  },
  {
    id: 4,
    level: "basic",
    category: "对象与函数",
    title: "函数：把一段逻辑打包重复用",
    summary: "函数像一个工具箱：你把输入给它，它帮你处理，再返回结果。",
    goals: ["知道函数声明和调用", "理解参数和返回值", "会写一个简单的计算函数"],
    steps: [
      "先写函数名，让名字表达用途，例如 getTotal。",
      "再给函数参数，参数就是函数接收的外部数据。",
      "最后用 return 把计算结果交回去。",
    ],
    pitfalls: ["没有 return 的函数默认返回 undefined。", "参数名只是占位符，真正的值来自调用时传入的数据。"],
    code: `function getTotal(price, count) {\n  return price * count;\n}\nconsole.log(getTotal(12, 3));`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><input id="price" value="12" type="number" /><input id="count" value="3" type="number" /><button id="run">计算</button><p id="out">等待计算</p><script>function getTotal(price,count){return price*count;}document.getElementById('run').onclick=()=>{const price=Number(document.getElementById('price').value);const count=Number(document.getElementById('count').value);document.getElementById('out').textContent='总价：'+getTotal(price,count);};</script></body>`,
    practiceHint: "再写一个 getAverage(a, b) 函数，算两数平均值。",
  },
  {
    id: 5,
    level: "basic",
    category: "数组与对象",
    title: "数组、对象与读取数据",
    summary: "数组适合放一组有顺序的数据，对象适合描述一个事物的多个属性。",
    goals: ["会用 [] 创建数组", "会用 {} 创建对象", "会读取数组项和对象属性"],
    steps: [
      "数组用索引读取：arr[0] 表示第一项。",
      "对象用键读取：user.name 表示 name 属性。",
      "现实中经常组合使用，例如数组里放多个对象。",
    ],
    pitfalls: ["访问不存在的属性不会报错，而是得到 undefined。", "数组和对象都是引用类型，赋值时传递的是引用。"],
    code: `const user = { name: "小林", city: "上海" };\nconst hobbies = ["阅读", "跑步"];\nconsole.log(user.name, hobbies[0]);`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="show">显示资料</button><p id="out">点击按钮</p><script>const user={name:'小林',city:'上海'};const hobbies=['阅读','跑步'];document.getElementById('show').onclick=()=>{document.getElementById('out').textContent=user.name+' 来自 '+user.city+'，爱好：'+hobbies[0];};</script></body>`,
    practiceHint: "自己创建一个 movie 对象，包含名称、评分、年份。",
  },
  {
    id: 6,
    level: "basic",
    category: "DOM 操作",
    title: "找到页面元素并修改内容",
    summary: "JavaScript 能操作网页上的元素，最常见的第一步是先找到它，再改文本或样式。",
    goals: ["知道 document.querySelector 的用途", "会修改 textContent", "会区分 HTML 和文本"],
    steps: [
      "先用选择器找到元素，例如 #title 或 .item。",
      "再修改 textContent，让页面文字发生变化。",
      "最后给元素加样式类，理解“逻辑”和“展示”分离。",
    ],
    pitfalls: ["querySelector 没找到元素会返回 null。", "需要插入纯文本时优先用 textContent，避免误插 HTML。"],
    code: `const title = document.querySelector("#title");\ntitle.textContent = "学习 JavaScript";`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><h3 id="title">原始标题</h3><button id="btn">修改标题</button><script>const title=document.querySelector('#title');document.getElementById('btn').onclick=()=>{title.textContent='学习 JavaScript';};</script></body>`,
    practiceHint: "再加一个按钮，让标题在两段文字之间切换。",
  },
  {
    id: 7,
    level: "basic",
    category: "DOM 操作",
    title: "事件监听：点击、输入时发生什么",
    summary: "事件就是用户在页面上的动作，例如点击、输入、滚动；事件监听就是“动作发生时执行代码”。",
    goals: ["会绑定 click 事件", "知道事件对象 event 的基本作用", "能根据输入实时更新页面"],
    steps: [
      "先找到目标元素并绑定 addEventListener。",
      "再在回调函数里写事件发生后要执行的逻辑。",
      "最后通过 event.target 读取是谁触发了事件。",
    ],
    pitfalls: ["不要把函数调用结果直接传给 addEventListener。", "同一个元素可以绑定多个不同事件。"],
    code: `const input = document.querySelector("#keyword");\nconst output = document.querySelector("#output");\ninput.addEventListener("input", (event) => {\n  output.textContent = event.target.value;\n});`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><input id="keyword" placeholder="输入一些文字" /><p id="output">这里会同步显示</p><script>const input=document.querySelector('#keyword');const output=document.querySelector('#output');input.addEventListener('input',(event)=>{output.textContent=event.target.value||'这里会同步显示';});</script></body>`,
    practiceHint: "把 input 事件换成 click 事件，做一个按钮计数器。",
  },
  {
    id: 8,
    level: "intermediate",
    category: "语法进阶",
    title: "解构赋值与展开运算符",
    summary: "它们能让取值和复制写得更短，更适合处理对象、数组和函数参数。",
    goals: ["会从对象里快速取值", "知道数组解构的顺序", "理解展开运算符的浅拷贝特性"],
    steps: [
      "先学对象解构：const { name } = user。",
      "再学数组解构：const [first, second] = list。",
      "最后用 ... 合并数组、复制对象。",
    ],
    pitfalls: ["展开对象只会复制第一层属性。", "解构的变量名要和对象属性名一致，除非手动重命名。"],
    code: `const user = { name: "Amy", age: 20 };\nconst { name, age } = user;\nconst nextUser = { ...user, city: "杭州" };\nconsole.log(name, age, nextUser);`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="run">展示结果</button><pre id="out">等待中</pre><script>document.getElementById('run').onclick=()=>{const user={name:'Amy',age:20};const {name,age}=user;const nextUser={...user,city:'杭州'};document.getElementById('out').textContent=JSON.stringify({name,age,nextUser},null,2);};</script></body>`,
    practiceHint: "把 user 改成课程对象，并为它追加一个 teacher 属性。",
  },
  {
    id: 9,
    level: "intermediate",
    category: "数组方法",
    title: "map / filter / reduce 的常见思路",
    summary: "这三个方法是现代 JavaScript 最常见的数据处理工具：变形、筛选、累计。",
    goals: ["区分 map、filter、reduce 的用途", "会写箭头函数回调", "能读懂链式调用"],
    steps: [
      "先记口诀：map 改形状，filter 做筛选，reduce 出结果。",
      "再分别写一个最小例子，感受它们返回的新值。",
      "最后把它们串起来处理一组订单数据。",
    ],
    pitfalls: ["map 和 filter 都返回新数组，不会直接改原数组。", "reduce 需要清楚累计值 accumulator 的含义。"],
    code: `const scores = [58, 72, 90, 61];\nconst passed = scores.filter((score) => score >= 60);\nconst doubled = passed.map((score) => score * 2);\nconst total = doubled.reduce((sum, score) => sum + score, 0);\nconsole.log(total);`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="run">处理成绩</button><p id="out">等待处理</p><script>document.getElementById('run').onclick=()=>{const scores=[58,72,90,61];const passed=scores.filter((score)=>score>=60);const doubled=passed.map((score)=>score*2);const total=doubled.reduce((sum,score)=>sum+score,0);document.getElementById('out').textContent='通过分数翻倍后总和：'+total;};</script></body>`,
    practiceHint: "尝试把 passed 改成“只保留偶数成绩”。",
  },
  {
    id: 10,
    level: "intermediate",
    category: "异步编程",
    title: "Promise：把“将来会得到的结果”写清楚",
    summary: "Promise 常用于网络请求、延时操作、文件处理等场景，它能表达任务成功或失败。",
    goals: ["知道 pending / fulfilled / rejected 三种状态", "会写 then 和 catch", "理解链式调用"],
    steps: [
      "先把 Promise 想成“未来的结果单据”。",
      "成功时走 then，失败时走 catch。",
      "前一个 then return 的值，会交给下一个 then。",
    ],
    pitfalls: ["Promise 状态一旦确定就不会再改。", "then 里如果抛错，也会进入 catch。"],
    code: `Promise.resolve(2)\n  .then((value) => value * 3)\n  .then((value) => console.log("结果：", value))\n  .catch((error) => console.error(error));`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="run">运行 Promise</button><p id="out">等待中</p><script>document.getElementById('run').onclick=()=>{Promise.resolve(2).then((value)=>value*3).then((value)=>{document.getElementById('out').textContent='结果：'+value;});};</script></body>`,
    practiceHint: "把 Promise.resolve 改成 Promise.reject，看看 catch 会不会执行。",
  },
  {
    id: 11,
    level: "intermediate",
    category: "异步编程",
    title: "async / await：把异步流程写得像同步",
    summary: "当一个异步流程有多步时，async / await 往往比一长串 then 更容易读。",
    goals: ["知道 async 函数一定返回 Promise", "会在 async 函数里使用 await", "知道 try/catch 处理异步错误"],
    steps: [
      "先给函数加 async。",
      "再在函数内部对 Promise 前面加 await，暂停等待结果。",
      "最后用 try/catch 包住可能失败的异步代码。",
    ],
    pitfalls: ["await 只能在 async 函数中使用（模块顶层除外）。", "await 等到的不是 Promise 本身，而是 Promise 成功后的值。"],
    code: `async function loadData() {\n  const message = await Promise.resolve("加载完成");\n  console.log(message);\n}\nloadData();`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="run">加载数据</button><p id="out">等待中</p><script>async function loadData(){const message=await Promise.resolve('加载完成');document.getElementById('out').textContent=message;}document.getElementById('run').onclick=loadData;</script></body>`,
    practiceHint: "再写一个 async 函数，先等待姓名，再等待年龄，然后拼成一句话。",
  },
  {
    id: 12,
    level: "intermediate",
    category: "浏览器 API",
    title: "JSON 与 localStorage：把数据存起来",
    summary: "页面刷新后还想保留内容，就要把数据序列化成字符串再存进 localStorage。",
    goals: ["知道 localStorage 只能存字符串", "会使用 JSON.stringify / JSON.parse", "能做一个简单草稿保存"],
    steps: [
      "先把对象转成 JSON 字符串。",
      "再用 localStorage.setItem 保存。",
      "读取时用 getItem 拿回来，再 JSON.parse 还原。",
    ],
    pitfalls: ["JSON 不能直接保存函数。", "读取不到键时 getItem 会返回 null，需要做兜底处理。"],
    code: `const draft = { title: "学习计划", done: false };\nlocalStorage.setItem("draft", JSON.stringify(draft));\nconst saved = JSON.parse(localStorage.getItem("draft"));\nconsole.log(saved.title);`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="save">保存草稿</button><button id="read">读取草稿</button><p id="out">尚未操作</p><script>const out=document.getElementById('out');document.getElementById('save').onclick=()=>{const draft={title:'学习计划',done:false};localStorage.setItem('draft-demo',JSON.stringify(draft));out.textContent='已保存';};document.getElementById('read').onclick=()=>{const raw=localStorage.getItem('draft-demo');const saved=raw?JSON.parse(raw):null;out.textContent=saved?'读取到：'+saved.title:'暂无数据';};</script></body>`,
    practiceHint: "做一个输入框，输入内容后点击按钮保存，再点击另一个按钮读出来。",
  },
  {
    id: 13,
    level: "intermediate",
    category: "DOM 进阶",
    title: "事件委托：少绑事件也能管很多元素",
    summary: "当列表项很多、而且可能动态新增时，把事件绑在父元素上更省心。",
    goals: ["知道事件冒泡和 event.target", "会用 matches 判断点击目标", "理解为什么父元素监听更适合动态列表"],
    steps: [
      "先把事件绑在父元素上。",
      "再通过 event.target 找出真正被点中的子元素。",
      "最后只处理符合条件的子元素，忽略其他点击。",
    ],
    pitfalls: ["event.currentTarget 是绑定事件的元素，不一定是被点击的元素。", "如果子元素结构复杂，可以配合 closest 使用。"],
    code: `list.addEventListener("click", (event) => {\n  if (event.target.matches("li")) {\n    console.log(event.target.textContent);\n  }\n});`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><ul id="list"><li>HTML</li><li>CSS</li><li>JavaScript</li></ul><p id="out">点击任意一项</p><script>document.getElementById('list').addEventListener('click',(event)=>{if(event.target.matches('li')){document.getElementById('out').textContent='你点击了：'+event.target.textContent;}});</script></body>`,
    practiceHint: "给列表添加一个“新增项”按钮，看看事件委托是否还能生效。",
  },
  {
    id: 14,
    level: "intermediate",
    category: "工程化",
    title: "模块化思维：把代码拆成更容易维护的块",
    summary: "当代码越来越多时，把功能拆到不同模块，能让修改和复用都更轻松。",
    goals: ["认识 import / export", "理解“一个文件一个职责”", "知道模块的价值在于组织代码"],
    steps: [
      "先把通用函数放到单独文件并导出。",
      "再在主文件里 import 使用。",
      "最后思考：哪些代码适合放在一起，哪些需要拆分。",
    ],
    pitfalls: ["浏览器中直接使用模块时，script 标签需要加 type=module。", "模块路径要写对相对位置。"],
    code: `// utils.js\nexport function add(a, b) {\n  return a + b;\n}\n\n// main.js\nimport { add } from "./utils.js";\nconsole.log(add(1, 2));`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><p>模块示例更适合在多文件环境中运行，本页重点先理解结构与职责拆分。</p></body>`,
    practiceHint: "想象把“购物车计算”和“页面渲染”拆成两个文件，各自负责什么。",
  },
  {
    id: 15,
    level: "hard",
    category: "语言机制",
    title: "闭包：函数为什么能“记住”外部变量",
    summary: "闭包的重点不是记定义，而是理解函数执行结束后，某些变量为什么还能继续被访问。",
    goals: ["理解词法作用域", "知道闭包如何保存状态", "认识闭包在计数器、防抖中的常见用途"],
    steps: [
      "先理解内层函数可以访问外层函数变量。",
      "再观察外层函数执行完后，内层函数为什么还拿得到这个变量。",
      "最后把它用在一个计数器函数上。",
    ],
    pitfalls: ["闭包不是“复制变量”，而是继续引用原来的词法环境。", "闭包用得太多可能让状态难追踪，要命名清晰。"],
    code: `function createCounter() {\n  let count = 0;\n  return function increase() {\n    count += 1;\n    return count;\n  };\n}\nconst increase = createCounter();\nconsole.log(increase(), increase());`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="btn">计数</button><p id="out">0</p><script>function createCounter(){let count=0;return function increase(){count+=1;return count;};}const increase=createCounter();document.getElementById('btn').onclick=()=>{document.getElementById('out').textContent=increase();};</script></body>`,
    practiceHint: "尝试写一个 createStepCounter(step)，每次点击都加 step。",
  },
  {
    id: 16,
    level: "hard",
    category: "语言机制",
    title: "原型链与 class 的关系",
    summary: "class 写法更直观，但底层仍然是原型链；理解这一点后，继承与方法共享会更清晰。",
    goals: ["知道方法为什么写在 prototype 上", "理解 class 是原型语法糖", "会区分实例属性和原型方法"],
    steps: [
      "先看构造函数创建实例。",
      "再看 prototype 上的方法如何被多个实例共享。",
      "最后把它和 class 写法对应起来。",
    ],
    pitfalls: ["实例属性通常在 constructor 中定义，方法通常放在 prototype 或 class 方法里。", "不要把所有方法都写进构造函数，否则每个实例都会复制一份。"],
    code: `function User(name) {\n  this.name = name;\n}\nUser.prototype.say = function () {\n  return "Hi, " + this.name;\n};\nconsole.log(new User("Tom").say());`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="run">创建实例</button><p id="out">等待中</p><script>function User(name){this.name=name;}User.prototype.say=function(){return 'Hi, '+this.name;};document.getElementById('run').onclick=()=>{document.getElementById('out').textContent=new User('Tom').say();};</script></body>`,
    practiceHint: "把 User 改成 Course，并给它添加一个 print 方法。",
  },
  {
    id: 17,
    level: "hard",
    category: "异步机制",
    title: "事件循环、宏任务与微任务",
    summary: "看懂异步输出顺序时，最重要的是分清同步代码、微任务、宏任务谁先执行。",
    goals: ["知道同步代码先执行", "知道 Promise.then 属于微任务", "知道 setTimeout 回调属于宏任务"],
    steps: [
      "先按书写顺序执行同步代码。",
      "同步代码结束后，清空本轮微任务。",
      "最后再进入下一个宏任务，例如 setTimeout 回调。",
    ],
    pitfalls: ["setTimeout(fn, 0) 也不是立刻同步执行。", "多个 Promise.then 会按加入顺序进入微任务队列。"],
    code: `console.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="run">查看输出顺序</button><pre id="out">等待中</pre><script>document.getElementById('run').onclick=()=>{const logs=[];logs.push('A');setTimeout(()=>{logs.push('B');document.getElementById('out').textContent=logs.join(' -> ');},0);Promise.resolve().then(()=>{logs.push('C');});logs.push('D');setTimeout(()=>{document.getElementById('out').textContent=logs.join(' -> ');},20);};</script></body>`,
    practiceHint: "先猜输出顺序，再点击运行，看看是不是 A → D → C → B。",
  },
  {
    id: 18,
    level: "hard",
    category: "工程能力",
    title: "防抖与节流：控制高频事件",
    summary: "输入框、滚动、窗口缩放等高频事件如果每次都执行重逻辑，会造成卡顿，所以需要“控频”。",
    goals: ["理解防抖和节流的差别", "知道防抖适合输入搜索", "知道节流适合滚动和拖拽"],
    steps: [
      "先记防抖：停下来后再执行。",
      "再记节流：每隔一段时间最多执行一次。",
      "最后把它们应用到 input 和 click / scroll 场景。",
    ],
    pitfalls: ["防抖会重置计时器，节流不会。", "不同业务对“首次立即执行”或“结束再执行”要求不同。"],
    code: `function debounce(fn, delay) {\n  let timer = null;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><input id="keyword" placeholder="快速输入" /><p id="out">停止输入后显示结果</p><script>function debounce(fn,delay){let timer=null;return(...args)=>{clearTimeout(timer);timer=setTimeout(()=>fn(...args),delay);};}const render=debounce((value)=>{document.getElementById('out').textContent='最终值：'+value;},500);document.getElementById('keyword').addEventListener('input',(event)=>{render(event.target.value);});</script></body>`,
    practiceHint: "把上面的 debounce 改成 throttle，对比交互差别。",
  },
  {
    id: 19,
    level: "basic",
    category: "语法基础",
    title: "作用域、模板字符串与更自然的拼接",
    summary: "先理解“变量在哪儿能访问”，再学会用模板字符串把变量和文本更清晰地组合起来。",
    goals: ["知道全局作用域、函数作用域、块级作用域的区别", "会使用模板字符串插入变量", "能避免变量名冲突和硬拼接文本"],
    steps: [
      "先记住：let / const 遵循块级作用域，var 更容易造成意外覆盖。",
      "再把字符串拼接从 '+' 改成模板字符串，观察可读性变化。",
      "最后尝试在函数里声明局部变量，只让当前逻辑能访问它。",
    ],
    pitfalls: ["在 if / for 代码块里声明的 let 变量，出了代码块就不能再访问。", "模板字符串要用反引号 `，不是普通引号。"],
    code: [
      'const student = "小林";',
      "const score = 92;",
      "if (score >= 60) {",
      "  const result = `${student} 通过了考试`;",
      "  console.log(result);",
      "}",
    ].join("\n"),
    previewDoc: [
      '<body style="font-family:Arial;padding:16px">',
      '<input id="name" value="小林" />',
      '<input id="score" value="92" type="number" />',
      '<button id="run">生成结果</button>',
      '<p id="out">等待中</p>',
      "<script>",
      "document.getElementById('run').onclick=()=>{",
      "  const student=document.getElementById('name').value||'学员';",
      "  const score=Number(document.getElementById('score').value);",
      "  const result=score>=60?`${student} 通过了考试`:`${student} 还需要继续练习`;",
      "  document.getElementById('out').textContent=result;",
      "};",
      "</script>",
      "</body>",
    ].join(""),
    practiceHint: "把“通过/未通过”再扩展成“优秀 / 及格 / 待加强”三个分支。",
  },
  {
    id: 20,
    level: "basic",
    category: "表单交互",
    title: "表单输入、类型转换与基础校验",
    summary: "页面里很多数据一开始都是字符串，学会先取值、再转换、再校验，才能写出可靠交互。",
    goals: ["知道 input.value 得到的是字符串", "会用 Number 做数值转换", "会先校验空值再做计算"],
    steps: [
      "先拿到输入框内容，并观察浏览器返回的数据类型。",
      "再把数字类输入用 Number 转换后参与计算。",
      "最后先处理空输入、非数字等异常情况，再更新页面结果。",
    ],
    pitfalls: ["即使 input 的 type 是 number，取到的 value 仍然是字符串。", "空字符串转成数字会得到 0，要先判断是否真的输入了内容。"],
    code: `const height = Number(document.querySelector("#height").value);\nconst weight = Number(document.querySelector("#weight").value);\nif (!height || !weight) {\n  console.log("请先填写完整信息");\n}`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><input id="height" placeholder="身高 cm" type="number" /><input id="weight" placeholder="体重 kg" type="number" /><button id="run">检查输入</button><p id="out">等待输入</p><script>document.getElementById('run').onclick=()=>{const height=document.getElementById('height').value.trim();const weight=document.getElementById('weight').value.trim();if(!height||!weight){document.getElementById('out').textContent='请先填写完整信息';return;}document.getElementById('out').textContent='输入有效，可继续计算';};</script></body>`,
    practiceHint: "把它改成 BMI 计算器，顺便区分偏瘦、正常、偏胖。",
  },
  {
    id: 21,
    level: "intermediate",
    category: "浏览器 API",
    title: "fetch：请求远程数据并处理加载状态",
    summary: "真实项目里经常要从接口拿数据，除了写请求本身，还要处理等待中、成功和失败三种状态。",
    goals: ["知道 fetch 返回 Promise", "会检查 response.ok", "能为页面补上加载中和失败提示"],
    steps: [
      "先发起 fetch 请求，并在页面显示“加载中”。",
      "再判断响应是否成功，把 JSON 数据解析出来。",
      "最后为失败情况准备提示文案和重试入口。",
    ],
    pitfalls: ["fetch 遇到 404/500 不一定直接进入 catch，需要结合 response.ok 判断。", "异步更新页面时要注意旧数据和新状态是否一致。"],
    code: `async function loadUser() {\n  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");\n  if (!response.ok) throw new Error("请求失败");\n  const user = await response.json();\n  console.log(user.name);\n}`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="run">模拟加载</button><p id="out">等待中</p><script>document.getElementById('run').onclick=async()=>{const out=document.getElementById('out');out.textContent='加载中...';await new Promise((resolve)=>setTimeout(resolve,500));out.textContent='成功：已拿到示例数据';};</script></body>`,
    practiceHint: "再加一个“重新加载”按钮，并把加载、成功、失败文案拆开处理。",
  },
  {
    id: 22,
    level: "intermediate",
    category: "代码质量",
    title: "错误处理与用户提示",
    summary: "代码不只是“跑起来”，还要在失败时告诉用户发生了什么、下一步该怎么做。",
    goals: ["知道 try/catch 适合包裹可能失败的逻辑", "会区分给开发者和给用户的提示", "能为失败结果准备回退方案"],
    steps: [
      "先找出哪一步可能失败，例如解析、请求或读取本地数据。",
      "再用 try/catch 捕获错误，并记录技术信息。",
      "最后给用户显示简洁可执行的提示，例如“请重试”或“请检查输入”。",
    ],
    pitfalls: ["不要把所有错误都吞掉，否则排查问题会更困难。", "给用户的提示不应只显示原始报错堆栈。"],
    code: `try {\n  const raw = localStorage.getItem("profile");\n  const profile = JSON.parse(raw);\n  console.log(profile.name);\n} catch (error) {\n  console.error("读取资料失败", error);\n}`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="run">模拟出错</button><p id="out">等待中</p><script>document.getElementById('run').onclick=()=>{try{JSON.parse('{bad json}');}catch(error){document.getElementById('out').textContent='读取失败，请检查数据后重试';}};</script></body>`,
    practiceHint: "把你的表单、请求或 localStorage 示例都补上一段“出错时怎么办”的分支。",
  },
  {
    id: 23,
    level: "hard",
    category: "语言机制",
    title: "this、call / apply / bind 的使用边界",
    summary: "this 的难点不在定义，而在“调用方式一变，指向就可能变”；call、apply、bind 正是为了解决这种变化。",
    goals: ["理解普通函数 this 会受调用方式影响", "知道 call / apply 立即调用、bind 返回新函数", "能修复方法被脱离对象调用时的 this 问题"],
    steps: [
      "先比较 obj.say() 与直接提取 say 再调用的区别。",
      "再分别试试 call、apply、bind，让同一个函数在不同对象上下文里运行。",
      "最后观察箭头函数为什么不适合拿来动态绑定 this。",
    ],
    pitfalls: ["箭头函数没有自己的 this，不能用 call / apply 改写它的指向。", "bind 不会立刻执行，而是返回一个绑定了 this 的新函数。"],
    code: `const user = {\n  name: "小林",\n  say() {\n    return "你好，" + this.name;\n  },\n};\nconst say = user.say;\nconsole.log(say.call({ name: "老师" }));`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="run">切换调用对象</button><p id="out">等待中</p><script>const user={name:'小林',say(){return '你好，'+this.name;}};const say=user.say;document.getElementById('run').onclick=()=>{document.getElementById('out').textContent=say.call({name:'老师'});};</script></body>`,
    practiceHint: "把对象方法交给 setTimeout 或事件回调后，再想办法保证 this 仍然正确。",
  },
  {
    id: 24,
    level: "hard",
    category: "性能优化",
    title: "渲染性能：减少重复计算与无意义更新",
    summary: "性能优化不一定从复杂算法开始，很多时候只是避免频繁改 DOM、重复计算和不必要的监听。",
    goals: ["知道频繁改 DOM 会带来额外开销", "会先缓存重复使用的数据和元素", "能把高频事件和防抖 / 节流联系起来"],
    steps: [
      "先找出高频触发点，例如 scroll、resize、input。",
      "再把重复查询 DOM、重复创建节点的操作收拢起来。",
      "最后为页面补上批量更新、延迟更新或按需更新的思路。",
    ],
    pitfalls: ["性能优化前先确定瓶颈，不要盲目“到处缓存”。", "为性能写的代码也要保证可读性和可维护性。"],
    code: `const list = document.querySelector("#list");\nconst fragment = document.createDocumentFragment();\nfor (let i = 0; i < 3; i += 1) {\n  const item = document.createElement("li");\n  item.textContent = "项目 " + (i + 1);\n  fragment.appendChild(item);\n}\nlist.appendChild(fragment);`,
    previewDoc: `<body style="font-family:Arial;padding:16px"><button id="run">批量渲染</button><ul id="list"></ul><script>document.getElementById('run').onclick=()=>{const list=document.getElementById('list');list.innerHTML='';const fragment=document.createDocumentFragment();for(let i=0;i<5;i+=1){const item=document.createElement('li');item.textContent='项目 '+(i+1);fragment.appendChild(item);}list.appendChild(fragment);};</script></body>`,
    practiceHint: "观察你的实战题里哪些地方会重复查 DOM 或在循环里频繁改页面，再尝试优化。",
  },
];

const choiceQuestions = [
  { question: "以下哪个关键字通常用于声明不会被重新赋值的块级作用域变量？", options: ["var", "const", "function", "import"], answer: 1, explanation: "const 是块级作用域，也适合表示“这个变量名之后不再改指向”。", difficulty: "basic", topic: "变量", source: "原题整理" },
  { question: "typeof null 的结果是？", options: ["null", "object", "undefined", "number"], answer: 1, explanation: "历史遗留问题，结果为 object。", difficulty: "basic", topic: "数据类型", source: "原题整理" },
  { question: "哪一个方法会返回新数组且不改变原数组？", options: ["splice", "push", "slice", "sort"], answer: 2, explanation: "slice 会返回浅拷贝数组。", difficulty: "basic", topic: "数组", source: "原题整理" },
  { question: "Promise 链中处理异常常用？", options: [".catch()", ".finally()", ".map()", ".allSettled()"], answer: 0, explanation: ".catch() 用于捕获拒绝状态或 throw 异常。", difficulty: "intermediate", topic: "Promise", source: "原题整理" },
  { question: "事件冒泡是指？", options: ["从父到子", "从子到父", "随机传播", "不会传播"], answer: 1, explanation: "默认是从目标元素向上冒泡。", difficulty: "basic", topic: "事件", source: "原题整理" },
  { question: "JSON.stringify 的作用是？", options: ["字符串转对象", "对象转字符串", "对象深拷贝", "数组排序"], answer: 1, explanation: "把 JS 值序列化成 JSON 字符串。", difficulty: "intermediate", topic: "JSON", source: "原题整理" },
  { question: "以下哪个是严格相等运算符？", options: ["==", "=", "===", "!==="], answer: 2, explanation: "=== 不做类型转换。", difficulty: "basic", topic: "运算符", source: "原题整理" },
  { question: "map 方法主要用于？", options: ["过滤元素", "映射转换", "查找索引", "修改原数组长度"], answer: 1, explanation: "map 返回同长度新数组。", difficulty: "intermediate", topic: "数组方法", source: "原题整理" },
  { question: "下面哪项可以阻止默认行为？", options: ["event.stop", "event.preventDefault()", "event.break()", "return false 必须总是有效"], answer: 1, explanation: "标准方式是 preventDefault。", difficulty: "basic", topic: "事件", source: "原题整理" },
  { question: "以下哪个用于异步等待 Promise 完成？", options: ["await", "yield", "wait", "pause"], answer: 0, explanation: "await 只能在 async 函数中使用（或顶层模块）。", difficulty: "intermediate", topic: "异步", source: "原题整理" },
  { question: "localStorage 存储的数据类型本质上是？", options: ["任意类型", "字符串", "二进制", "对象"], answer: 1, explanation: "localStorage 仅存字符串。", difficulty: "intermediate", topic: "浏览器 API", source: "原题整理" },
  { question: "下列哪个会创建新的 Promise？", options: ["new Promise()", "Promise.value()", "Promise.make()", "async new()"], answer: 0, explanation: "标准构造方式是 new Promise(executor)。", difficulty: "intermediate", topic: "Promise", source: "原题整理" },
  { question: "数组去重常见写法是？", options: ["new Set(arr)", "arr.unique()", "arr.removeDup()", "unique(arr) 内置函数"], answer: 0, explanation: "Set 可去重，再转回数组。", difficulty: "intermediate", topic: "Set", source: "原题整理" },
  { question: "在箭头函数中，this 指向？", options: ["调用者", "定义时外层作用域", "window", "undefined"], answer: 1, explanation: "箭头函数不绑定自己的 this。", difficulty: "hard", topic: "this", source: "原题整理" },
  { question: "哪种循环可直接遍历可迭代对象值？", options: ["for...in", "for...of", "while...of", "loop...in"], answer: 1, explanation: "for...of 遍历值。", difficulty: "basic", topic: "循环", source: "原题整理" },
  { question: "for...in 主要用于遍历？", options: ["数组值", "对象键", "Map 值", "Set 键值对"], answer: 1, explanation: "for...in 遍历可枚举属性键。", difficulty: "basic", topic: "对象", source: "原题整理" },
  { question: "以下哪个属于浅拷贝？", options: ["JSON.parse(JSON.stringify(obj))", "{...obj}", "structuredClone(obj)", "递归拷贝"], answer: 1, explanation: "对象展开是浅拷贝。", difficulty: "intermediate", topic: "对象复制", source: "原题整理" },
  { question: "DOMContentLoaded 事件触发时机是？", options: ["所有资源加载完", "DOM 树构建完成", "脚本第一次执行", "窗口关闭时"], answer: 1, explanation: "不等待图片等资源完成。", difficulty: "basic", topic: "DOM", source: "原题整理" },
  { question: "setTimeout(fn, 0) 表示？", options: ["立即同步执行", "进入宏任务队列尽快执行", "进入微任务队列", "每秒执行一次"], answer: 1, explanation: "最小延迟后在宏任务队列执行。", difficulty: "hard", topic: "事件循环", source: "原题整理" },
  { question: "Promise.then 回调属于？", options: ["宏任务", "微任务", "渲染任务", "同步任务"], answer: 1, explanation: "then 回调进微任务队列。", difficulty: "hard", topic: "事件循环", source: "原题整理" },
  { question: "NaN 与自身比较结果是？", options: ["true", "false", "undefined", "报错"], answer: 1, explanation: "NaN !== NaN。", difficulty: "basic", topic: "数字", source: "原题整理" },
  { question: "Number('') 的结果是？", options: ["NaN", "0", "undefined", "''"], answer: 1, explanation: "空字符串转数字为 0。", difficulty: "basic", topic: "类型转换", source: "原题整理" },
  { question: "parseInt('08', 10) 结果是？", options: ["8", "0", "NaN", "10"], answer: 0, explanation: "按十进制解析得到 8。", difficulty: "basic", topic: "数字", source: "原题整理" },
  { question: "includes 用于？", options: ["查找并返回元素", "判断是否包含并返回布尔值", "删除元素", "替换元素"], answer: 1, explanation: "includes 返回布尔值。", difficulty: "basic", topic: "数组", source: "原题整理" },
  { question: "find 返回值是？", options: ["匹配元素", "索引", "布尔值", "全部元素"], answer: 0, explanation: "find 返回首个匹配元素。", difficulty: "intermediate", topic: "数组方法", source: "原题整理" },
  { question: "findIndex 返回值是？", options: ["元素", "索引", "对象", "数组"], answer: 1, explanation: "返回首个匹配项索引。", difficulty: "intermediate", topic: "数组方法", source: "原题整理" },
  { question: "Object.keys(obj) 返回？", options: ["键数组", "值数组", "键值对数组", "对象长度"], answer: 0, explanation: "返回可枚举属性键数组。", difficulty: "basic", topic: "对象", source: "原题整理" },
  { question: "Object.entries(obj) 每项结构是？", options: ["{k:v}", "[key, value]", "key:value", "(k,v)"], answer: 1, explanation: "entries 返回 [key, value]。", difficulty: "intermediate", topic: "对象", source: "原题整理" },
  { question: "class 语法本质上是？", options: ["全新对象模型", "原型继承语法糖", "函数替代", "模块系统"], answer: 1, explanation: "class 是基于原型的语法糖。", difficulty: "hard", topic: "原型链", source: "原题整理" },
  { question: "super() 在子类构造器中作用是？", options: ["销毁父类", "调用父类构造器", "创建模块", "绑定事件"], answer: 1, explanation: "继承时先调用父类构造器。", difficulty: "hard", topic: "类", source: "原题整理" },
  { question: "可选链运算符是？", options: ["??", "?:", "?.", "::"], answer: 2, explanation: "?. 用于安全访问深层属性。", difficulty: "intermediate", topic: "运算符", source: "原题整理" },
  { question: "空值合并运算符是？", options: ["||", "&&", "??", "|>"], answer: 2, explanation: "?? 仅在 null/undefined 时取右侧。", difficulty: "intermediate", topic: "运算符", source: "原题整理" },
  { question: "Symbol 常见用途是？", options: ["生成唯一属性键", "存大文件", "类型转换", "创建数组"], answer: 0, explanation: "Symbol 常用于避免属性名冲突。", difficulty: "hard", topic: "内置类型", source: "原题整理" },
  { question: "Set 的特性是？", options: ["允许重复", "值唯一", "键值对结构", "按索引访问"], answer: 1, explanation: "Set 元素唯一。", difficulty: "intermediate", topic: "Set", source: "原题整理" },
  { question: "Map 与普通对象相比优势之一是？", options: ["只能字符串键", "支持任意类型键", "不能迭代", "无 size"], answer: 1, explanation: "Map 键类型更灵活。", difficulty: "intermediate", topic: "Map", source: "原题整理" },
  { question: "try...catch 中 finally 的特点是？", options: ["仅成功时执行", "仅失败时执行", "通常都会执行", "永不执行"], answer: 2, explanation: "finally 通常一定执行。", difficulty: "intermediate", topic: "错误处理", source: "原题整理" },
  { question: "URLSearchParams 用于？", options: ["解析/构造查询参数", "解析 HTML", "处理二进制", "数据库查询"], answer: 0, explanation: "专门处理 URL 查询串。", difficulty: "intermediate", topic: "浏览器 API", source: "原题整理" },
  { question: "document.querySelector 返回？", options: ["匹配的全部元素", "首个匹配元素", "节点数组", "布尔值"], answer: 1, explanation: "只返回首个匹配项。", difficulty: "basic", topic: "DOM", source: "原题整理" },
  { question: "innerText 与 textContent 的区别之一是？", options: ["完全一样", "innerText 受样式影响", "textContent 会触发重排", "innerText 更快"], answer: 1, explanation: "innerText 更接近“渲染后文本”。", difficulty: "intermediate", topic: "DOM", source: "原题整理" },
  { question: "严格模式可通过什么开启？", options: ["'use strict';", "strict on;", "mode(strict);", "#strict"], answer: 0, explanation: "函数或脚本顶部加 'use strict'。", difficulty: "intermediate", topic: "语法", source: "原题整理" },
  { question: "Array.isArray([]) 的结果是？", options: ["true", "false", "undefined", "报错"], answer: 0, explanation: "Array.isArray 用于标准判断数组。", difficulty: "basic", topic: "数组", source: "新增" },
  { question: "两个空数组 [] === [] 的结果是？", options: ["true", "false", "null", "报错"], answer: 1, explanation: "引用类型比较的是地址，不是内容。", difficulty: "intermediate", topic: "对象引用", source: "新增" },
  { question: "async function demo() { return 1; } 调用 demo() 会得到？", options: ["1", "Promise", "undefined", "函数本身"], answer: 1, explanation: "async 函数总是返回 Promise。", difficulty: "intermediate", topic: "异步", source: "新增" },
  { question: "Promise.all 的特点是？", options: ["任何一个失败也会继续 fulfilled", "全部成功才 fulfilled，任一失败就 rejected", "只能传两个 Promise", "返回普通数组"], answer: 1, explanation: "Promise.all 适合并发且要求全部成功的场景。", difficulty: "hard", topic: "Promise", source: "新增" },
  { question: "Object.freeze(obj) 的常见作用是？", options: ["深拷贝对象", "阻止对象被继续修改", "把对象转 JSON", "清空对象"], answer: 1, explanation: "冻结后不能继续添加、删除或修改第一层属性。", difficulty: "hard", topic: "对象", source: "新增" },
  { question: "filter 回调通常应该返回什么？", options: ["一个数组", "一个布尔结果", "一个对象", "一个索引"], answer: 1, explanation: "返回 true 的项会被保留。", difficulty: "intermediate", topic: "数组方法", source: "新增" },
  { question: "structuredClone 常用于？", options: ["深拷贝可克隆的数据", "发起网络请求", "创建原型链", "遍历对象"], answer: 0, explanation: "structuredClone 是原生深拷贝方案之一。", difficulty: "hard", topic: "对象复制", source: "新增" },
  { question: "event.target 表示什么？", options: ["绑定事件的父元素", "真正触发事件的元素", "浏览器窗口", "事件名称"], answer: 1, explanation: "event.target 是事件实际发生的目标元素。", difficulty: "basic", topic: "事件", source: "新增" },
  { question: "模板字符串中用于插入表达式的写法是？", options: ["{{ value }}", "${value}", "(value)", "[value]"], answer: 1, explanation: "模板字符串使用反引号包裹，并通过 ${...} 插入表达式。", difficulty: "basic", topic: "字符串", source: "新增" },
  { question: "input 元素的 value 读取出来默认是什么类型？", options: ["number", "boolean", "string", "object"], answer: 2, explanation: "无论输入框类型如何，value 默认读取为字符串。", difficulty: "basic", topic: "表单", source: "新增" },
  { question: "检查 fetch 响应是否成功时，常用哪个属性？", options: ["response.statusTextOnly", "response.ok", "response.done", "response.bodyUsedOnly"], answer: 1, explanation: "response.ok 可快速判断状态码是否落在 200-299。", difficulty: "intermediate", topic: "fetch", source: "新增" },
  { question: "catch(error) 更适合负责什么？", options: ["生成 HTML 结构", "捕获失败并给出兜底处理", "自动重试所有请求", "替代所有 if 判断"], answer: 1, explanation: "错误处理的重点是识别失败、记录信息并做兜底。", difficulty: "intermediate", topic: "错误处理", source: "新增" },
  { question: "bind 的返回值通常是？", options: ["原对象", "一个已绑定 this 的新函数", "立即执行结果", "Promise"], answer: 1, explanation: "bind 不会立刻调用，而是返回绑定后的函数。", difficulty: "hard", topic: "this", source: "新增" },
  { question: "DocumentFragment 更适合用在什么场景？", options: ["批量插入多个节点", "读取 localStorage", "取消事件冒泡", "创建 Promise"], answer: 0, explanation: "它适合减少多次逐个插入 DOM 带来的额外开销。", difficulty: "hard", topic: "性能", source: "新增" },
  { question: "下面哪种做法更适合优化高频输入触发的搜索？", options: ["每敲一个字都立刻发请求", "使用防抖延迟触发", "每次都刷新整个页面", "只用 alert 提示"], answer: 1, explanation: "输入搜索更适合防抖，减少无意义重复执行。", difficulty: "hard", topic: "性能", source: "新增" },
  { question: "块级作用域常见于哪组关键字？", options: ["let / const", "var / function", "if / else", "true / false"], answer: 0, explanation: "let 和 const 会把变量限制在当前代码块中。", difficulty: "basic", topic: "作用域", source: "新增" },
  { question: "用户可执行的错误提示更应该像哪一种？", options: ["SyntaxError: Unexpected token", "请求失败，请重试或检查网络", "undefined at <anonymous>", "VM123:1"], answer: 1, explanation: "面向用户的提示要简洁、可理解、可执行。", difficulty: "intermediate", topic: "错误处理", source: "新增" },
];

const fillQuestions = [
  { question: "请填空：用于声明不会被重新赋值变量的关键字是 ____。", answers: ["const"], difficulty: "basic", topic: "变量", source: "原题整理" },
  { question: "请填空：数组长度属性是 ____。", answers: ["length"], difficulty: "basic", topic: "数组", source: "原题整理" },
  { question: "请填空：把字符串转为数字的函数之一是 ____。", answers: ["Number", "parseInt", "parseFloat"], difficulty: "basic", topic: "类型转换", source: "原题整理" },
  { question: "请填空：判断数组的标准方法是 Array.____(value)。", answers: ["isArray"], difficulty: "basic", topic: "数组", source: "原题整理" },
  { question: "请填空：Promise 成功回调常用方法是 ____。", answers: ["then"], difficulty: "intermediate", topic: "Promise", source: "原题整理" },
  { question: "请填空：Promise 失败回调常用方法是 ____。", answers: ["catch"], difficulty: "intermediate", topic: "Promise", source: "原题整理" },
  { question: "请填空：异步函数声明关键字是 ____。", answers: ["async"], difficulty: "intermediate", topic: "异步", source: "原题整理" },
  { question: "请填空：等待 Promise 结果的关键字是 ____。", answers: ["await"], difficulty: "intermediate", topic: "异步", source: "原题整理" },
  { question: "请填空：添加事件监听的方法是 ____。", answers: ["addEventListener"], difficulty: "basic", topic: "事件", source: "原题整理" },
  { question: "请填空：阻止事件冒泡的方法是 event.____()。", answers: ["stopPropagation"], difficulty: "basic", topic: "事件", source: "原题整理" },
  { question: "请填空：阻止默认行为的方法是 event.____()。", answers: ["preventDefault"], difficulty: "basic", topic: "事件", source: "原题整理" },
  { question: "请填空：在浏览器本地保存字符串数据可用 ____。", answers: ["localStorage"], difficulty: "intermediate", topic: "浏览器 API", source: "原题整理" },
  { question: "请填空：获取 JSON 对象文本化的方法是 JSON.____()。", answers: ["stringify"], difficulty: "intermediate", topic: "JSON", source: "原题整理" },
  { question: "请填空：将 JSON 字符串还原成对象的方法是 JSON.____()。", answers: ["parse"], difficulty: "intermediate", topic: "JSON", source: "原题整理" },
  { question: "请填空：对象键数组可通过 Object.____() 获取。", answers: ["keys"], difficulty: "basic", topic: "对象", source: "原题整理" },
  { question: "请填空：用于数组过滤的方法是 ____。", answers: ["filter"], difficulty: "intermediate", topic: "数组方法", source: "原题整理" },
  { question: "请填空：用于数组映射的方法是 ____。", answers: ["map"], difficulty: "intermediate", topic: "数组方法", source: "原题整理" },
  { question: "请填空：用于数组累计计算的方法是 ____。", answers: ["reduce"], difficulty: "intermediate", topic: "数组方法", source: "原题整理" },
  { question: "请填空：判断值是否严格相等的运算符是 ____。", answers: ["==="], difficulty: "basic", topic: "运算符", source: "原题整理" },
  { question: "请填空：可选链运算符是 ____。", answers: ["?."], difficulty: "intermediate", topic: "运算符", source: "原题整理" },
  { question: "请填空：空值合并运算符是 ____。", answers: ["??"], difficulty: "intermediate", topic: "运算符", source: "原题整理" },
  { question: "请填空：用于创建唯一值标识的内置类型是 ____。", answers: ["Symbol"], difficulty: "hard", topic: "内置类型", source: "原题整理" },
  { question: "请填空：用于去重常见的数据结构是 ____。", answers: ["Set"], difficulty: "intermediate", topic: "Set", source: "原题整理" },
  { question: "请填空：可保存任意类型键值对的数据结构是 ____。", answers: ["Map"], difficulty: "intermediate", topic: "Map", source: "原题整理" },
  { question: "请填空：浏览器发 HTTP 请求的常见 API 是 ____。", answers: ["fetch"], difficulty: "intermediate", topic: "浏览器 API", source: "原题整理" },
  { question: "请填空：DOM 树构建完成后触发事件是 ____。", answers: ["DOMContentLoaded"], difficulty: "basic", topic: "DOM", source: "原题整理" },
  { question: "请填空：定时执行函数 API 是 ____。", answers: ["setInterval"], difficulty: "basic", topic: "定时器", source: "原题整理" },
  { question: "请填空：延时执行函数 API 是 ____。", answers: ["setTimeout"], difficulty: "basic", topic: "定时器", source: "原题整理" },
  { question: "请填空：把代码拆成模块导出的关键字是 ____。", answers: ["export"], difficulty: "intermediate", topic: "模块化", source: "原题整理" },
  { question: "请填空：从模块引入成员的关键字是 ____。", answers: ["import"], difficulty: "intermediate", topic: "模块化", source: "原题整理" },
  { question: "请填空：选择页面中第一个匹配元素的方法是 document.____()。", answers: ["querySelector"], difficulty: "basic", topic: "DOM", source: "新增" },
  { question: "请填空：生成 0 到 1 之间随机数的方法是 Math.____()。", answers: ["random"], difficulty: "basic", topic: "数字", source: "新增" },
  { question: "请填空：等待多个 Promise 全部成功的 API 是 Promise.____()。", answers: ["all"], difficulty: "hard", topic: "Promise", source: "新增" },
  { question: "请填空：无论 try/catch 是否出错，通常都会执行的代码块关键字是 ____。", answers: ["finally"], difficulty: "intermediate", topic: "错误处理", source: "新增" },
  { question: "请填空：读取 data-id 这类自定义属性时，常用元素的 ____ 对象。", answers: ["dataset"], difficulty: "intermediate", topic: "DOM", source: "新增" },
  { question: "请填空：浏览器原生深拷贝常用方法之一是 ____()。", answers: ["structuredClone"], difficulty: "hard", topic: "对象复制", source: "新增" },
  { question: "请填空：把对象转成 [key, value] 数组列表的方法是 Object.____()。", answers: ["entries"], difficulty: "intermediate", topic: "对象", source: "新增" },
  { question: "请填空：取消 setTimeout 定时器常用的方法是 ____()。", answers: ["clearTimeout"], difficulty: "basic", topic: "定时器", source: "新增" },
  { question: "请填空：更适合做浏览器动画帧更新的 API 是 ____()。", answers: ["requestAnimationFrame"], difficulty: "hard", topic: "性能", source: "新增" },
  { question: "请填空：模板字符串中插入表达式的写法是 ____。", answers: ["${...}", "${ }"], difficulty: "basic", topic: "字符串", source: "新增" },
  { question: "请填空：读取输入框内容时，常见属性是元素的 ____。", answers: ["value"], difficulty: "basic", topic: "表单", source: "新增" },
  { question: "请填空：fetch 响应对象中常用来判断是否请求成功的属性是 ____。", answers: ["ok"], difficulty: "intermediate", topic: "fetch", source: "新增" },
  { question: "请填空：捕获同步异常常用的语句是 try...____。", answers: ["catch"], difficulty: "intermediate", topic: "错误处理", source: "新增" },
  { question: "请填空：不会立刻执行、而是返回绑定后函数的方法是 ____。", answers: ["bind"], difficulty: "hard", topic: "this", source: "新增" },
  { question: "请填空：用于批量插入节点、减少零散 DOM 更新的对象是 Document____。", answers: ["Fragment"], difficulty: "hard", topic: "性能", source: "新增" },
  { question: "请填空：限制搜索输入高频触发的常见技巧叫 ____。", answers: ["debounce", "防抖"], difficulty: "hard", topic: "性能", source: "新增" },
  { question: "请填空：let 和 const 提供的是 ____ 级作用域。", answers: ["块", "block", "块级"], difficulty: "basic", topic: "作用域", source: "新增" },
  { question: "请填空：把失败原因记录给开发者排查时，常用的方法是 console.____()。", answers: ["error"], difficulty: "intermediate", topic: "错误处理", source: "新增" },
];

const practiceQuestions = [
  ["点击计数器", "实现按钮每点击一次，数字 +1。", "basic", "事件与状态", "原题整理"],
  ["待办列表", "输入任务后点击添加，渲染到列表中。", "basic", "数组与 DOM", "原题整理"],
  ["深色模式切换", "点击按钮在明亮/深色主题间切换。", "basic", "DOM 样式", "原题整理"],
  ["实时字符计数", "输入文本时显示当前字符数。", "basic", "输入事件", "原题整理"],
  ["表单必填校验", "提交时校验用户名和邮箱不能为空。", "basic", "表单事件", "原题整理"],
  ["搜索过滤", "输入关键字过滤列表项。", "basic", "数组过滤", "原题整理"],
  ["随机颜色生成器", "点击按钮给页面设置随机背景色。", "basic", "函数与 DOM", "原题整理"],
  ["倒计时器", "输入秒数后点击开始倒计时。", "intermediate", "定时器", "原题整理"],
  ["图片预览", "选择图片文件后显示预览图。", "intermediate", "文件输入", "原题整理"],
  ["进度条模拟", "点击开始后进度条逐步增长到100%。", "intermediate", "定时器", "原题整理"],
  ["Tab 切换", "实现三个 tab 的内容切换。", "basic", "DOM 交互", "原题整理"],
  ["回到顶部", "滚动到一定位置显示按钮，点击回到顶部。", "intermediate", "滚动事件", "原题整理"],
  ["购物车小计", "数量变化时自动计算小计金额。", "basic", "计算逻辑", "原题整理"],
  ["密码强度提示", "根据长度和字符种类显示弱/中/强。", "intermediate", "字符串处理", "原题整理"],
  ["简易计算器", "实现 + - * / 四则运算。", "basic", "函数", "原题整理"],
  ["模态框弹窗", "点击按钮显示弹窗，点击关闭隐藏。", "basic", "DOM 显隐", "原题整理"],
  ["拖拽排序（简化）", "点击上移/下移按钮调整列表顺序。", "intermediate", "数组与 DOM", "原题整理"],
  ["分页显示", "每页显示固定条数并可切页。", "intermediate", "数组切片", "原题整理"],
  ["星级评分", "点击星星设置评分并显示结果。", "basic", "事件处理", "原题整理"],
  ["时间格式化", "把时间戳格式化为 yyyy-mm-dd hh:mm:ss。", "intermediate", "日期处理", "原题整理"],
  ["防抖输入", "输入停止 500ms 后才触发搜索输出。", "hard", "防抖", "原题整理"],
  ["节流滚动", "滚动事件每 300ms 最多触发一次更新。", "hard", "节流", "原题整理"],
  ["本地存储草稿", "输入内容自动保存到 localStorage 并回显。", "intermediate", "localStorage", "原题整理"],
  ["fetch 数据渲染", "从公开 API 获取数据并列表展示。", "hard", "fetch", "原题整理"],
  ["Promise 串行任务", "两个异步任务按顺序执行并输出日志。", "hard", "Promise", "原题整理"],
  ["错误处理展示", "try/catch 捕获错误并在页面显示。", "intermediate", "错误处理", "原题整理"],
  ["类封装计时器", "使用 class 封装一个可开始/暂停计时器。", "hard", "class", "原题整理"],
  ["事件委托列表", "父元素监听子元素点击并显示被点项。", "intermediate", "事件委托", "原题整理"],
  ["键盘快捷键", "按下 Enter 触发提交逻辑。", "basic", "键盘事件", "原题整理"],
  ["Canvas 简单绘图", "在 canvas 上绘制一个会移动的小球。", "hard", "Canvas", "原题整理"],
  ["BMI 计算器", "输入身高体重后实时计算 BMI，并给出偏瘦/正常/偏胖提示。", "basic", "表单与条件", "新增"],
  ["手风琴问答", "点击问题展开答案，再点击时收起，且同一时间最多展开一项。", "basic", "DOM 交互", "新增"],
  ["课程表排序器", "点击表头按课程名或分数升序/降序排序。", "intermediate", "数组排序", "新增"],
  ["请求重试面板", "模拟一个会失败的异步请求，点击按钮后最多重试 3 次并展示状态。", "hard", "异步重试", "新增"],
  ["多接口并发加载", "同时请求多个接口，全部成功后再统一渲染结果。", "hard", "Promise.all", "新增"],
  ["拖拽上传预览（简化）", "实现拖拽文件到容器后显示文件名和图片预览。", "hard", "文件与拖拽", "新增"],
  ["个人资料卡生成器", "输入昵称、城市和学习目标后，实时生成一张资料展示卡。", "basic", "表单与 DOM", "新增挑战"],
  ["价格筛选与统计面板", "输入最低价并筛选课程列表，同时显示筛选后的数量和总价。", "intermediate", "数组方法", "新增挑战"],
  ["学习清单本地保存器", "实现任务添加、完成切换、筛选和 localStorage 持久化。", "intermediate", "状态管理", "新增挑战"],
  ["异步数据看板", "同时请求多份数据，展示加载、成功、失败和重试状态。", "hard", "异步与状态", "新增挑战"],
  ["可撤销提示队列", "实现消息通知列表，支持自动消失、手动关闭和撤销最近一次关闭。", "hard", "定时器与闭包", "新增挑战"],
  ["性能优化搜索页", "实现输入防抖、结果高亮和无结果提示，避免高频重复渲染。", "hard", "性能", "新增挑战"],
];

function buildPracticeQuestions() {
  return practiceQuestions.map(([title, requirement, difficulty, topic, source], index) => {
    const starter = `<!doctype html>\n<html lang="zh-CN">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>${title}</title>\n  <style>\n    body{font-family:Arial,sans-serif;padding:16px;background:#f8fafc}.app{max-width:720px;margin:auto;background:#fff;padding:16px;border-radius:12px;box-shadow:0 8px 24px rgba(15,23,42,.08)}button,input,select,textarea{margin:6px 0;padding:8px 12px;font-size:14px}ul{padding-left:20px}\n  </style>\n</head>\n<body>\n  <div class="app">\n    <h2>${title}</h2>\n    <p>题目要求：${requirement}</p>\n    <div id="root"></div>\n  </div>\n  <script>\n    const root = document.getElementById("root");\n    root.innerHTML = "<p>请在这里完成题目。建议先写 HTML 结构，再补充交互逻辑。</p>";\n  </script>\n</body>\n</html>`;
    const reference = `解题提示：\n1. 先围绕“${title}”写出最小可用的 HTML 结构。\n2. 再实现与“${topic}”相关的核心交互，确保满足：${requirement}\n3. 最后补上边界处理，例如空输入、重复点击、请求失败或重置状态。`;
    return {
      id: index + 1,
      title,
      requirement,
      difficulty,
      topic,
      source,
      starter,
      reference,
    };
  });
}

const allChoiceQuestions = choiceQuestions.map((item, index) => ({ id: index + 1, ...item }));
const allFillQuestions = fillQuestions.map((item, index) => ({ id: index + 1, ...item }));
const allPracticeQuestions = buildPracticeQuestions();

function escapeHtml(input) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase();
}

function renderListMarkup(entries, tagName = "ul") {
  return `<${tagName}>${entries.map((entry) => `<li>${entry}</li>`).join("")}</${tagName}>`;
}

function getParam(name, fallback) {
  const value = new URLSearchParams(window.location.search).get(name);
  return value || fallback;
}

function getPathPrefix() {
  return document.body.dataset.pathPrefix || "./";
}

function buildLocalPath(path) {
  return `${getPathPrefix()}${path}`;
}

function getLevelLinks(currentLevel) {
  return Object.entries(levelMeta)
    .map(
      ([key, meta]) => `<a class="pill ${key === currentLevel ? "active" : ""}" href="${buildLocalPath(`knowledge.html?level=${key}`)}">${meta.label}</a>`
    )
    .join("");
}

function getQuestionLinks(currentDifficulty, currentType) {
  return Object.entries(levelMeta)
    .map(
      ([difficulty, meta]) => `
        <div class="matrix-card ${meta.colorClass}">
          <h4>${meta.label}</h4>
          <div class="mini-links">
            ${Object.entries(questionTypeMeta)
              .map(
                ([type, typeMeta]) => `<a class="mini-link ${difficulty === currentDifficulty && type === currentType ? "active" : ""}" href="${buildLocalPath(`questions.html?difficulty=${difficulty}&type=${type}`)}">${typeMeta.label}</a>`
              )
              .join("")}
          </div>
        </div>
      `
    )
    .join("");
}

function getQuestionCountByLevel(level) {
  return (
    allChoiceQuestions.filter((item) => item.difficulty === level).length +
    allFillQuestions.filter((item) => item.difficulty === level).length +
    allPracticeQuestions.filter((item) => item.difficulty === level).length
  );
}

function getKnowledgeMeta(item) {
  return knowledgeArticleMeta[item.id] || null;
}

function getKnowledgePagePath(item) {
  const meta = getKnowledgeMeta(item);
  if (!meta) return buildLocalPath("knowledge.html");
  return buildLocalPath(`knowledge-pages/${meta.fileName}`);
}

function getKnowledgeCollection() {
  return knowledgeBase
    .map((item) => {
      const meta = getKnowledgeMeta(item);
      if (!meta) return null;
      const group = knowledgeGroups[meta.group];
      if (!group) return null;
      return {
        ...item,
        ...meta,
        groupTitle: group.title,
        groupDescription: group.description,
        groupSequence: group.sequence,
      };
    })
    .filter(Boolean);
}

function getKnowledgeLevelFilter() {
  const level = getParam("level", "all");
  return level === "all" || !levelMeta[level] ? "all" : level;
}

function renderHome() {
  const home = document.getElementById("home-content");
  const totalQuestions = allChoiceQuestions.length + allFillQuestions.length + allPracticeQuestions.length;
  const challengeCount = allPracticeQuestions.filter((item) => item.source.includes("挑战")).length;
  const knowledgePages = getKnowledgeCollection();
  home.innerHTML = `
    <section class="stats-grid">
      <article class="stat-card">
        <strong>${knowledgePages.length}</strong>
        <span>独立知识页</span>
      </article>
      <article class="stat-card">
        <strong>${totalQuestions}</strong>
        <span>题库总题量</span>
      </article>
      <article class="stat-card">
        <strong>${Object.keys(knowledgeGroups).length} 个大类</strong>
        <span>按专题总览后再进入知识点</span>
      </article>
      <article class="stat-card">
        <strong>3 类题型</strong>
        <span>选择 / 填空 / 实战</span>
      </article>
      <article class="stat-card">
        <strong>${challengeCount}</strong>
        <span>挑战项目</span>
      </article>
    </section>

    <section class="content-block">
      <div class="section-head">
        <h3>推荐学习节奏</h3>
        <p>先建立地图，再读知识，再做练习，最后用挑战项目把知识点串起来。</p>
      </div>
      <div class="route-grid feature-grid">
        ${studyPhases
          .map(
            (phase) => `
              <article class="route-card">
                <h4>${phase.title}</h4>
                <p>${phase.description}</p>
                <ul>
                  ${phase.actions.map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="content-block">
      <div class="section-head">
        <h3>按学习阶段进入</h3>
        <p>每个难度都给出清晰目标、推荐题型与题量；知识库入口现在会先进入专题总览页。</p>
      </div>
      <div class="route-grid">
        ${Object.entries(levelMeta)
          .map(
            ([key, meta]) => `
              <article class="route-card ${meta.colorClass}">
                <h4>${meta.label}</h4>
                <p>${meta.description}</p>
                <ul>
                  ${meta.studyPlan.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <p class="route-meta">当前级别共有 ${knowledgeBase.filter((item) => item.level === key).length} 个知识主题、${getQuestionCountByLevel(key)} 道练习。</p>
                <div class="row">
                  <a class="btn primary" href="${buildLocalPath(`knowledge.html?level=${key}`)}">先读${meta.label}知识库</a>
                  <a class="btn" href="${buildLocalPath(`questions.html?difficulty=${key}&type=${meta.recommendedType}`)}">做推荐练习</a>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="content-block">
      <div class="section-head">
        <h3>知识库扩充范围</h3>
        <p>${knowledgeExpansionEstimate}</p>
      </div>
      <div class="row">
        <a class="btn primary" href="${buildLocalPath("knowledge.html")}">进入知识库总览</a>
      </div>
    </section>

    <section class="content-block">
      <div class="section-head">
        <h3>题库分页面入口</h3>
        <p>每个“难度 + 题型”组合都是独立页面，便于针对性刷题。</p>
      </div>
      <div class="matrix-grid">
        ${getQuestionLinks("basic", "choice")}
      </div>
    </section>

    <section class="content-block">
      <div class="section-head">
        <h3>挑战项目路线</h3>
        <p>当你觉得常规题目已经不够用了，可以从这些更完整的项目开始。</p>
      </div>
      <div class="challenge-grid">
        ${challengeProjects
          .map(
            (project) => `
              <article class="challenge-card ${levelMeta[project.level].colorClass}">
                <span class="tag">${levelMeta[project.level].label}</span>
                <h4>${project.title}</h4>
                <p>${project.summary}</p>
                <a class="btn primary" href="./questions.html?difficulty=${project.level}&type=practice">查看该级别实战题</a>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderKnowledge() {
  const container = document.getElementById("knowledge-page");
  if (!container) return;
  const activeLevel = getKnowledgeLevelFilter();
  const items = getKnowledgeCollection().filter((item) => activeLevel === "all" || item.level === activeLevel);
  const groupEntries = Object.entries(knowledgeGroups)
    .map(([key, group]) => ({
      key,
      group,
      items: items.filter((item) => item.group === key),
    }))
    .filter((entry) => entry.items.length);

  const filterLinks = [
    { key: "all", label: "全部" },
    ...Object.entries(levelMeta).map(([key, meta]) => ({ key, label: meta.label })),
  ]
    .map(
      ({ key, label }) =>
        `<a class="pill ${key === activeLevel ? "active" : ""}" href="${buildLocalPath(key === "all" ? "knowledge.html" : `knowledge.html?level=${key}`)}">${label}</a>`
    )
    .join("");

  const groupMarkup = groupEntries
    .map(
      ({ key, group, items: groupItems }) => `
        <section class="content-block library-group-block">
          <div class="section-head">
            <div class="tags">
              <span class="tag">${group.title}</span>
              <span class="tag muted-tag">${group.sequence}</span>
            </div>
            <h3>${group.title}</h3>
            <p>${group.description}</p>
          </div>
          <div class="cards library-overview-grid">
            ${groupItems
              .map(
                (item) => `
                  <article class="card knowledge-overview-card">
                    <div class="tags">
                      <span class="tag">${levelMeta[item.level].label}</span>
                      <span class="tag">${item.category}</span>
                      <span class="tag muted-tag">${item.point}</span>
                    </div>
                    <h4>${item.title}</h4>
                    <p>${item.summary}</p>
                    <div class="card-section">
                      <h5>基础内容</h5>
                      ${renderListMarkup(item.goals.slice(0, 3))}
                    </div>
                    <div class="card-section practice-tip">
                      <h5>进阶 / 趣味内容</h5>
                      ${renderListMarkup([...(item.pitfalls || []).slice(0, 1), ...(item.advancedNotes || []).slice(0, 1), ...(item.funIdeas || [])].slice(0, 3))}
                    </div>
                    <div class="row">
                      <a class="btn primary" href="${getKnowledgePagePath(item)}">进入独立页面</a>
                      <a class="btn" href="${buildLocalPath(`questions.html?difficulty=${item.level}&type=${levelMeta[item.level].recommendedType}`)}">配套练习</a>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");

  container.innerHTML = `
    <section class="content-block highlight-block ${activeLevel === "all" ? "basic" : levelMeta[activeLevel].colorClass}">
      <div class="section-head">
        <h2>JavaScript 分类知识库</h2>
        <p>${knowledgeExpansionEstimate}</p>
      </div>
      <div class="pill-row">${filterLinks}</div>
      <div class="stats-grid compact-stats">
        <article class="stat-card">
          <strong>${Object.keys(knowledgeGroups).length}</strong>
          <span>知识大类别</span>
        </article>
        <article class="stat-card">
          <strong>${getKnowledgeCollection().length}</strong>
          <span>独立知识页</span>
        </article>
        <article class="stat-card">
          <strong>${items.length}</strong>
          <span>${activeLevel === "all" ? "当前可浏览专题" : `${levelMeta[activeLevel].label}专题数`}</span>
        </article>
        <article class="stat-card">
          <strong>${allChoiceQuestions.length + allFillQuestions.length + allPracticeQuestions.length}</strong>
          <span>可衔接题库总题量</span>
        </article>
      </div>
      <div class="study-grid">
        <article class="study-card">
          <h3>浏览方式</h3>
          <ol>
            <li>先看“大类别”，明确当前阶段最该补哪一块。</li>
            <li>再进入独立知识页，按“基础内容 → 进阶/趣味内容 → 示例”往下看。</li>
            <li>最后跳到同难度题库，把刚读过的知识点马上练一遍。</li>
          </ol>
        </article>
        <article class="study-card">
          <h3>当前筛选说明</h3>
          <p>${activeLevel === "all" ? "当前展示全部 24 个独立知识页，适合建立全局地图。" : `当前只展示 ${levelMeta[activeLevel].label} 难度内容，方便集中补齐同阶段知识。`}</p>
        </article>
        <article class="study-card">
          <h3>下一次可继续</h3>
          ${renderListMarkup(knowledgeBacklog)}
        </article>
      </div>
    </section>
    ${groupMarkup}
    <section class="content-block backlog-note">
      <div class="section-head">
        <h3>未完成 / 留给下一次任务</h3>
        <p>这次先把 24 个独立知识页和总览页搭起来，下面这些方向适合继续扩充。</p>
      </div>
      ${renderListMarkup(knowledgeBacklog)}
    </section>
  `;
}

function renderKnowledgeDetail() {
  const container = document.getElementById("knowledge-article-page");
  if (!container) return;

  const articleId = Number(document.body.dataset.knowledgeId);
  const item = knowledgeBase.find((entry) => entry.id === articleId);
  const meta = item ? getKnowledgeMeta(item) : null;
  const group = meta ? knowledgeGroups[meta.group] : null;

  if (!item || !meta || !group) {
    container.innerHTML = `
      <section class="content-block">
        <div class="section-head">
          <h2>未找到对应知识页</h2>
          <p>请返回知识库总览重新选择专题。</p>
        </div>
        <a class="btn primary" href="${buildLocalPath("knowledge.html")}">回到知识库总览</a>
      </section>
    `;
    return;
  }

  const relatedItems = (meta.relatedIds || [])
    .map((id) => getKnowledgeCollection().find((entry) => entry.id === id))
    .filter(Boolean);
  const recommendedType = levelMeta[item.level].recommendedType;
  const questionCount = getQuestionCountByLevel(item.level);

  container.innerHTML = `
    <section class="content-block highlight-block ${levelMeta[item.level].colorClass}">
      <div class="breadcrumb-row">
        <a class="mini-link" href="${buildLocalPath("knowledge.html")}">知识库总览</a>
        <span class="breadcrumb-separator">/</span>
        <span class="mini-link">${group.title}</span>
        <span class="breadcrumb-separator">/</span>
        <span class="mini-link active">${meta.point}</span>
      </div>
      <div class="section-head">
        <h2>${item.title}</h2>
        <p>${item.summary}</p>
      </div>
      <div class="stats-grid compact-stats">
        <article class="stat-card">
          <strong>${levelMeta[item.level].label}</strong>
          <span>适合当前阶段</span>
        </article>
        <article class="stat-card">
          <strong>${group.title}</strong>
          <span>知识类型大类别</span>
        </article>
        <article class="stat-card">
          <strong>${meta.point}</strong>
          <span>当前知识点</span>
        </article>
        <article class="stat-card">
          <strong>${questionCount}</strong>
          <span>同级别可练题量</span>
        </article>
      </div>
      <div class="row">
        <a class="btn primary" href="${buildLocalPath(`questions.html?difficulty=${item.level}&type=${recommendedType}`)}">做配套练习</a>
        <a class="btn" href="${buildLocalPath(`knowledge.html?level=${item.level}`)}">查看同级别专题</a>
      </div>
    </section>

    <section class="content-block article-grid">
      <article class="card article-panel">
        <h3>基础内容</h3>
        <p class="lead">先把“这是什么、能解决什么问题、最小写法是什么”吃透。</p>
        <div class="card-section">
          <h4>你将学会</h4>
          ${renderListMarkup(item.goals)}
        </div>
        <div class="card-section">
          <h4>一步步理解</h4>
          ${renderListMarkup(item.steps, "ol")}
        </div>
      </article>

      <article class="card article-panel">
        <h3>进阶 / 趣味内容</h3>
        <div class="card-section">
          <h4>常见易错点</h4>
          ${renderListMarkup(item.pitfalls)}
        </div>
        <div class="card-section">
          <h4>再往前一步</h4>
          ${renderListMarkup(meta.advancedNotes || [])}
        </div>
        <div class="card-section practice-tip">
          <h4>趣味练习</h4>
          ${renderListMarkup([item.practiceHint, ...(meta.funIdeas || [])])}
        </div>
      </article>
    </section>

    <section class="content-block">
      <div class="section-head">
        <h3>示例代码</h3>
        <p>先阅读示例，再点击运行；修改其中的数字、文本或条件，会更容易形成自己的理解。</p>
      </div>
      <div class="card knowledge-detail-code">
        <pre><code>${escapeHtml(item.code)}</code></pre>
        <div class="row">
          <button class="btn primary run-knowledge-detail" type="button" data-id="${item.id}">运行示例</button>
        </div>
        <iframe class="preview" id="knowledge-preview-${item.id}" sandbox="allow-scripts"></iframe>
      </div>
    </section>

    <section class="content-block">
      <div class="section-head">
        <h3>同类延伸知识点</h3>
        <p>建议把相邻主题连起来看，知识会更像一条完整链路。</p>
      </div>
      <div class="cards related-knowledge-grid">
        ${relatedItems
          .map(
            (related) => `
              <article class="card related-knowledge-card">
                <div class="tags">
                  <span class="tag">${related.groupTitle}</span>
                  <span class="tag">${levelMeta[related.level].label}</span>
                </div>
                <h4>${related.title}</h4>
                <p>${related.summary}</p>
                <a class="btn primary" href="${getKnowledgePagePath(related)}">继续阅读</a>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;

  document.querySelectorAll(".run-knowledge-detail").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const currentItem = knowledgeBase.find((entry) => entry.id === id);
      const iframe = document.getElementById(`knowledge-preview-${id}`);
      iframe.srcdoc = currentItem.previewDoc;
    });
  });
}

function getQuestionsByType(type) {
  if (type === "choice") return allChoiceQuestions;
  if (type === "fill") return allFillQuestions;
  return allPracticeQuestions;
}

function renderChoiceQuestions(items) {
  return items
    .map(
      (question) => `
        <article class="card">
          <div class="tags">
            <span class="tag">${levelMeta[question.difficulty].label}</span>
            <span class="tag">${question.topic}</span>
            <span class="tag muted-tag">${question.source}</span>
          </div>
          <h3>${question.id}. ${question.question}</h3>
          <div class="options">
            ${question.options
              .map(
                (option, index) => `
                  <label><input type="radio" name="choice-${question.id}" value="${index}" /> ${option}</label>
                `
              )
              .join("")}
          </div>
          <div class="row">
            <button class="btn primary check-choice" data-id="${question.id}">提交答案</button>
          </div>
          <div class="answer-status" id="choice-status-${question.id}"></div>
        </article>
      `
    )
    .join("");
}

function renderFillQuestions(items) {
  return items
    .map(
      (question) => `
        <article class="card">
          <div class="tags">
            <span class="tag">${levelMeta[question.difficulty].label}</span>
            <span class="tag">${question.topic}</span>
            <span class="tag muted-tag">${question.source}</span>
          </div>
          <h3>${question.id}. ${question.question}</h3>
          <input class="answer-input" id="fill-input-${question.id}" type="text" placeholder="请输入答案" />
          <div class="row">
            <button class="btn primary check-fill" data-id="${question.id}">提交答案</button>
          </div>
          <div class="answer-status" id="fill-status-${question.id}"></div>
        </article>
      `
    )
    .join("");
}

function renderPracticeQuestions(items) {
  return items
    .map(
      (question) => `
        <article class="card practice-card">
          <div class="tags">
            <span class="tag">${levelMeta[question.difficulty].label}</span>
            <span class="tag">${question.topic}</span>
            <span class="tag muted-tag">${question.source}</span>
          </div>
          <h3>${question.id}. ${question.title}</h3>
          <p>${question.requirement}</p>
          <textarea class="editor" id="practice-editor-${question.id}">${escapeHtml(question.starter)}</textarea>
          <div class="row">
            <button class="btn primary run-practice" data-id="${question.id}">运行预览</button>
            <button class="btn" data-id="${question.id}" type="button">重置代码</button>
          </div>
          <iframe class="preview" id="practice-preview-${question.id}" sandbox="allow-scripts allow-forms"></iframe>
          <details>
            <summary>查看解题提示</summary>
            <pre><code>${escapeHtml(question.reference)}</code></pre>
          </details>
        </article>
      `
    )
    .join("");
}

function bindChoiceAnswerEvents() {
  document.querySelectorAll(".check-choice").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const question = allChoiceQuestions.find((entry) => entry.id === id);
      const checked = document.querySelector(`input[name="choice-${id}"]:checked`);
      const status = document.getElementById(`choice-status-${id}`);
      if (!checked) {
        status.className = "answer-status bad";
        status.textContent = "请先选择一个选项。";
        return;
      }
      const isCorrect = Number(checked.value) === question.answer;
      status.className = `answer-status ${isCorrect ? "ok" : "bad"}`;
      status.textContent = isCorrect
        ? `回答正确。解析：${question.explanation}`
        : `回答错误。正确答案：${question.options[question.answer]}。解析：${question.explanation}`;
    });
  });
}

function bindFillAnswerEvents() {
  document.querySelectorAll(".check-fill").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const question = allFillQuestions.find((entry) => entry.id === id);
      const input = document.getElementById(`fill-input-${id}`);
      const status = document.getElementById(`fill-status-${id}`);
      const answer = normalizeAnswer(input.value);
      const isCorrect = question.answers.some((item) => normalizeAnswer(item) === answer);
      status.className = `answer-status ${isCorrect ? "ok" : "bad"}`;
      status.textContent = isCorrect
        ? "回答正确。"
        : `回答错误。参考答案：${question.answers.join(" / ")}`;
    });
  });
}

function bindPracticeEvents() {
  document.querySelectorAll(".run-practice").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const editor = document.getElementById(`practice-editor-${id}`);
      const iframe = document.getElementById(`practice-preview-${id}`);
      iframe.srcdoc = editor.value;
    });
  });

  document.querySelectorAll(".practice-card .btn:not(.primary)").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const question = allPracticeQuestions.find((entry) => entry.id === id);
      const editor = document.getElementById(`practice-editor-${id}`);
      const iframe = document.getElementById(`practice-preview-${id}`);
      editor.value = question.starter;
      iframe.srcdoc = "";
    });
  });
}

function renderQuestions() {
  const container = document.getElementById("question-page");
  if (!container) return;
  const difficulty = getParam("difficulty", "basic");
  const type = getParam("type", "choice");
  const activeDifficulty = levelMeta[difficulty] ? difficulty : "basic";
  const activeType = questionTypeMeta[type] ? type : "choice";
  const items = getQuestionsByType(activeType).filter((item) => item.difficulty === activeDifficulty);
  const typeStats = {
    choice: allChoiceQuestions.length,
    fill: allFillQuestions.length,
    practice: allPracticeQuestions.length,
  };
  const activeKnowledgeCount = knowledgeBase.filter((item) => item.level === activeDifficulty).length;
  const challengeItems = allPracticeQuestions
    .filter((item) => item.difficulty === activeDifficulty && item.source.includes("挑战"))
    .slice(0, 3);

  let questionMarkup = "";
  if (activeType === "choice") questionMarkup = renderChoiceQuestions(items);
  if (activeType === "fill") questionMarkup = renderFillQuestions(items);
  if (activeType === "practice") questionMarkup = renderPracticeQuestions(items);

  container.innerHTML = `
    <section class="content-block highlight-block ${levelMeta[activeDifficulty].colorClass}">
      <div class="section-head">
        <h2>${levelMeta[activeDifficulty].label} · ${questionTypeMeta[activeType].label}</h2>
        <p>${questionTypeMeta[activeType].intro} 建议先回顾 ${activeKnowledgeCount} 个同级别知识主题，再按“基础概念 → 常见错误 → 综合应用”顺序刷题。</p>
      </div>
      <div class="matrix-grid">${getQuestionLinks(activeDifficulty, activeType)}</div>
      <div class="stats-grid compact-stats">
        <article class="stat-card">
          <strong>${items.length}</strong>
          <span>当前页面题目数</span>
        </article>
        <article class="stat-card">
          <strong>${typeStats[activeType]}</strong>
          <span>该题型总数</span>
        </article>
        <article class="stat-card">
          <strong>${levelMeta[activeDifficulty].label}</strong>
          <span>${levelMeta[activeDifficulty].short}</span>
        </article>
        <article class="stat-card">
          <strong>${activeKnowledgeCount}</strong>
          <span>同级别知识主题</span>
        </article>
      </div>
    </section>

    <section class="content-block question-guide">
      <div class="section-head">
        <h3>刷题建议</h3>
        <p>先用本页题型建立稳定手感，再切换到其他题型补齐记忆与动手能力。</p>
      </div>
      <div class="study-grid">
        <article class="study-card">
          <h4>推荐顺序</h4>
          <ol>
            <li>先完成当前页面全部题目，记录易错知识点。</li>
            <li>回到知识库复习对应主题，再重新做错题。</li>
            <li>若当前为实战题，先完成最小功能，再补空状态和异常处理。</li>
          </ol>
        </article>
        <article class="study-card">
          <h4>配套跳转</h4>
          <p>如果发现概念不稳，先回到 ${levelMeta[activeDifficulty].label} 知识库补课，再回来继续刷题。</p>
          <div class="row">
            <a class="btn primary" href="./knowledge.html?level=${activeDifficulty}">回到知识库</a>
            <a class="btn" href="./questions.html?difficulty=${activeDifficulty}&type=practice">切换到实战题</a>
          </div>
        </article>
      </div>
    </section>

    ${
      activeType === "practice" && challengeItems.length
        ? `
          <section class="content-block">
            <div class="section-head">
              <h3>挑战升级</h3>
              <p>如果你已经能完成当前页面题目，可以继续尝试这些更完整的项目。</p>
            </div>
            <div class="challenge-grid">
              ${challengeItems
                .map(
                  (item) => `
                    <article class="challenge-card ${levelMeta[item.difficulty].colorClass}">
                      <span class="tag">${item.source}</span>
                      <h4>${item.title}</h4>
                      <p>${item.requirement}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>
        `
        : ""
    }

    <section class="cards question-cards">${questionMarkup}</section>
  `;

  if (activeType === "choice") bindChoiceAnswerEvents();
  if (activeType === "fill") bindFillAnswerEvents();
  if (activeType === "practice") bindPracticeEvents();
}

function init() {
  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "knowledge") renderKnowledge();
  if (page === "knowledge-detail") renderKnowledgeDetail();
  if (page === "questions") renderQuestions();
}

init();
