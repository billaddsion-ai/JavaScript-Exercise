const knowledgeBase = [
  {
    category: "语法基础",
    level: "常规",
    title: "变量声明（let / const）",
    description: "推荐优先使用 const，只有值会变化时才使用 let。",
    code: `const name = "JS";\nlet count = 1;\ncount += 1;\nconsole.log(name, count);`,
    previewDoc: `<body><button id="b">点我+1</button><p id="o">1</p><script>let n=1;const o=document.getElementById("o");document.getElementById("b").onclick=()=>{n+=1;o.textContent=n};</script></body>`,
  },
  {
    category: "语法基础",
    level: "常规",
    title: "模板字符串",
    description: "用反引号拼接字符串和变量更直观。",
    code: `const user = "Alice";\nconst msg = \`Hello, \${user}\`;\nconsole.log(msg);`,
    previewDoc: `<body><script>const user="Alice";document.body.innerHTML="<h4>"+\`Hello, \${user}\`+"</h4>"</script></body>`,
  },
  {
    category: "流程控制",
    level: "常规",
    title: "数组遍历 map/filter/reduce",
    description: "函数式数组 API 可组合数据处理流程。",
    code: `const nums=[1,2,3,4];\nconst result=nums.filter(n=>n%2===0).map(n=>n*10);\nconsole.log(result);`,
    previewDoc: `<body><script>const nums=[1,2,3,4,5,6];const result=nums.filter(n=>n%2===0).map(n=>n*10);document.body.textContent=result.join(", ");</script></body>`,
  },
  {
    category: "对象与函数",
    level: "常规",
    title: "解构赋值",
    description: "快速从对象/数组提取值。",
    code: `const user={name:"Lee",age:20};\nconst {name,age}=user;\nconsole.log(name,age);`,
    previewDoc: `<body><script>const user={name:"Lee",age:20};const {name,age}=user;document.body.textContent=name+" - "+age;</script></body>`,
  },
  {
    category: "异步编程",
    level: "进阶",
    title: "Promise 链",
    description: "then/catch/finally 适合顺序异步任务。",
    code: `Promise.resolve(1)\n  .then(n=>n+1)\n  .then(console.log);`,
    previewDoc: `<body><p id="o">loading...</p><script>Promise.resolve(1).then(n=>n+1).then(n=>{document.getElementById("o").textContent="结果: "+n});</script></body>`,
  },
  {
    category: "异步编程",
    level: "进阶",
    title: "async / await",
    description: "让异步代码写起来更像同步流程。",
    code: `async function run(){\n  const value = await Promise.resolve("done");\n  console.log(value);\n}\nrun();`,
    previewDoc: `<body><p id="o">等待中...</p><script>async function run(){const v=await Promise.resolve("done");document.getElementById("o").textContent=v;}run();</script></body>`,
  },
  {
    category: "DOM 操作",
    level: "常规",
    title: "事件监听",
    description: "通过 addEventListener 绑定交互。",
    code: `button.addEventListener("click", ()=>{ ... });`,
    previewDoc: `<body><button id="btn">点击</button><span id="txt"></span><script>document.getElementById("btn").addEventListener("click",()=>{document.getElementById("txt").textContent=" 已触发";});</script></body>`,
  },
  {
    category: "DOM 操作",
    level: "进阶",
    title: "事件委托",
    description: "把监听挂在父元素上，处理动态子元素。",
    code: `list.addEventListener("click",(e)=>{\n  if(e.target.matches("li")){ ... }\n});`,
    previewDoc: `<body><ul id="list"><li>A</li><li>B</li><li>C</li></ul><p id="o"></p><script>document.getElementById("list").addEventListener("click",(e)=>{if(e.target.matches("li")){document.getElementById("o").textContent="选中: "+e.target.textContent;}});</script></body>`,
  },
  {
    category: "浏览器 API",
    level: "进阶",
    title: "localStorage",
    description: "在浏览器本地存储字符串数据。",
    code: `localStorage.setItem("theme","dark");\nconst theme = localStorage.getItem("theme");`,
    previewDoc: `<body><button id="save">保存随机数</button><p id="o"></p><script>const o=document.getElementById("o");document.getElementById("save").onclick=()=>{const n=String(Math.floor(Math.random()*100));localStorage.setItem("demo-number",n);o.textContent="已保存: "+localStorage.getItem("demo-number");};</script></body>`,
  },
  {
    category: "浏览器 API",
    level: "进阶",
    title: "fetch 请求",
    description: "fetch 返回 Promise，常配合 async/await。",
    code: `const res = await fetch(url);\nconst data = await res.json();`,
    previewDoc: `<body><p>fetch 示例请在真实项目中连接 API。</p></body>`,
  },
  {
    category: "模块化",
    level: "进阶",
    title: "ES Module",
    description: "用 import/export 拆分代码，提升可维护性。",
    code: `// a.js\nexport const add=(a,b)=>a+b;\n// b.js\nimport {add} from "./a.js";`,
    previewDoc: `<body><p>模块示例：请在多文件环境运行。</p></body>`,
  },
  {
    category: "工程能力",
    level: "进阶",
    title: "防抖（debounce）",
    description: "高频事件触发时仅在停止后执行。",
    code: `function debounce(fn, delay) {\n  let timer;\n  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };\n}`,
    previewDoc: `<body><input id="i" placeholder="快速输入"><p id="o">等待触发...</p><script>function debounce(fn,d){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),d)}}const o=document.getElementById("o");document.getElementById("i").addEventListener("input",debounce((e)=>{o.textContent="最终值: "+e.target.value},500));</script></body>`,
  },
  {
    category: "工程能力",
    level: "进阶",
    title: "节流（throttle）",
    description: "固定间隔执行，适合滚动等场景。",
    code: `function throttle(fn,delay){\n let last=0;\n return (...args)=>{const now=Date.now();if(now-last>delay){last=now;fn(...args);}}\n}`,
    previewDoc: `<body><button id="b">狂点</button><p id="o">0</p><script>function throttle(fn,d){let last=0;return(...a)=>{const n=Date.now();if(n-last>d){last=n;fn(...a)}}}let c=0;const o=document.getElementById("o");document.getElementById("b").onclick=throttle(()=>{c++;o.textContent=c},800);</script></body>`,
  },
  {
    category: "语言特性",
    level: "进阶",
    title: "原型链",
    description: "对象通过原型链共享属性和方法。",
    code: `function User(name){this.name=name}\nUser.prototype.say=function(){return this.name}\nconsole.log(new User("A").say());`,
    previewDoc: `<body><script>function User(name){this.name=name}User.prototype.say=function(){return "Hi "+this.name};document.body.textContent=new User("Tom").say();</script></body>`,
  },
  {
    category: "语言特性",
    level: "进阶",
    title: "闭包",
    description: "函数可“记住”其词法作用域变量。",
    code: `function counter(){\n let n=0;\n return ()=>++n;\n}\nconst inc=counter();`,
    previewDoc: `<body><button id="b">计数</button><p id="o">0</p><script>function counter(){let n=0;return ()=>++n}const inc=counter();document.getElementById("b").onclick=()=>{document.getElementById("o").textContent=inc();};</script></body>`,
  },
];

const choiceQuestions = [
  {
    question: "以下哪个关键字用于声明块级作用域变量？",
    options: ["var", "const", "function", "import"],
    answer: 1,
    explanation: "const/let 都是块级作用域，这题答案使用 const。",
  },
  {
    question: "typeof null 的结果是？",
    options: ["null", "object", "undefined", "number"],
    answer: 1,
    explanation: "历史遗留问题，结果为 object。",
  },
  {
    question: "哪一个方法会返回新数组且不改变原数组？",
    options: ["splice", "push", "slice", "sort"],
    answer: 2,
    explanation: "slice 会返回浅拷贝数组。",
  },
  {
    question: "Promise 链中处理异常常用？",
    options: [".catch()", ".finally()", ".map()", ".allSettled()"],
    answer: 0,
    explanation: ".catch() 用于捕获拒绝状态或 throw 异常。",
  },
  {
    question: "事件冒泡是指？",
    options: ["从父到子", "从子到父", "随机传播", "不会传播"],
    answer: 1,
    explanation: "默认是从目标元素向上冒泡。",
  },
  {
    question: "JSON.stringify 的作用是？",
    options: ["字符串转对象", "对象转字符串", "对象深拷贝", "数组排序"],
    answer: 1,
    explanation: "把 JS 值序列化成 JSON 字符串。",
  },
  {
    question: "以下哪个是严格相等运算符？",
    options: ["==", "=", "===", "!==="],
    answer: 2,
    explanation: "=== 不做类型转换。",
  },
  {
    question: "map 方法主要用于？",
    options: ["过滤元素", "映射转换", "查找索引", "修改原数组长度"],
    answer: 1,
    explanation: "map 返回同长度新数组。",
  },
  {
    question: "下面哪项可以阻止默认行为？",
    options: ["event.stop", "event.preventDefault()", "event.break()", "return false 必须总是有效"],
    answer: 1,
    explanation: "标准方式是 preventDefault。",
  },
  {
    question: "以下哪个用于异步等待 Promise 完成？",
    options: ["await", "yield", "wait", "pause"],
    answer: 0,
    explanation: "await 只能在 async 函数中使用（或顶层模块）。",
  },
  {
    question: "localStorage 存储的数据类型本质上是？",
    options: ["任意类型", "字符串", "二进制", "对象"],
    answer: 1,
    explanation: "localStorage 仅存字符串。",
  },
  {
    question: "下列哪个会创建新的 Promise？",
    options: ["new Promise()", "Promise.value()", "Promise.make()", "async new()"],
    answer: 0,
    explanation: "标准构造方式是 new Promise(executor)。",
  },
  {
    question: "数组去重常见写法是？",
    options: ["new Set(arr)", "arr.unique()", "arr.removeDup()", "unique(arr) 内置函数"],
    answer: 0,
    explanation: "Set 可去重，再转回数组。",
  },
  {
    question: "在箭头函数中，this 指向？",
    options: ["调用者", "定义时外层作用域", "window", "undefined"],
    answer: 1,
    explanation: "箭头函数不绑定自己的 this。",
  },
  {
    question: "哪种循环可直接遍历可迭代对象值？",
    options: ["for...in", "for...of", "while...of", "loop...in"],
    answer: 1,
    explanation: "for...of 遍历值。",
  },
  {
    question: "for...in 主要用于遍历？",
    options: ["数组值", "对象键", "Map 值", "Set 键值对"],
    answer: 1,
    explanation: "for...in 遍历可枚举属性键。",
  },
  {
    question: "以下哪个属于浅拷贝？",
    options: ["JSON.parse(JSON.stringify(obj))", "{...obj}", "structuredClone(obj)", "递归拷贝"],
    answer: 1,
    explanation: "对象展开是浅拷贝。",
  },
  {
    question: "DOMContentLoaded 事件触发时机是？",
    options: ["所有资源加载完", "DOM 树构建完成", "脚本第一次执行", "窗口关闭时"],
    answer: 1,
    explanation: "不等待图片等资源完成。",
  },
  {
    question: "setTimeout(fn, 0) 表示？",
    options: ["立即同步执行", "进入宏任务队列尽快执行", "进入微任务队列", "每秒执行一次"],
    answer: 1,
    explanation: "最小延迟后在宏任务队列执行。",
  },
  {
    question: "Promise.then 回调属于？",
    options: ["宏任务", "微任务", "渲染任务", "同步任务"],
    answer: 1,
    explanation: "then 回调进微任务队列。",
  },
];

const choiceExtraConcepts = [
  ["NaN 与自身比较结果是？", ["true", "false", "undefined", "报错"], 1, "NaN !== NaN。"],
  ["Number('') 的结果是？", ["NaN", "0", "undefined", "''"], 1, "空字符串转数字为 0。"],
  ["parseInt('08',10) 结果是？", ["8", "0", "NaN", "10"], 0, "按十进制解析得到 8。"],
  ["includes 用于？", ["查找并返回元素", "判断是否包含并返回布尔值", "删除元素", "替换元素"], 1, "includes 返回布尔值。"],
  ["find 返回值是？", ["匹配元素", "索引", "布尔值", "全部元素"], 0, "find 返回首个匹配元素。"],
  ["findIndex 返回值是？", ["元素", "索引", "对象", "数组"], 1, "返回首个匹配项索引。"],
  ["Object.keys(obj) 返回？", ["键数组", "值数组", "键值对数组", "对象长度"], 0, "返回可枚举属性键数组。"],
  ["Object.entries(obj) 每项结构是？", ["{k:v}", "[key, value]", "key:value", "(k,v)"], 1, "entries 返回 [key,value]。"],
  ["class 语法本质上是？", ["全新对象模型", "原型继承语法糖", "函数替代", "模块系统"], 1, "class 是基于原型的语法糖。"],
  ["super() 在子类构造器中作用是？", ["销毁父类", "调用父类构造器", "创建模块", "绑定事件"], 1, "继承时先调用父类构造器。"],
  ["可选链运算符是？", ["??", "?:", "?.", "::"], 2, "?. 用于安全访问深层属性。"],
  ["空值合并运算符是？", ["||", "&&", "??", "|>"], 2, "?? 仅在 null/undefined 时取右侧。"],
  ["Symbol 常见用途是？", ["生成唯一属性键", "存大文件", "类型转换", "创建数组"], 0, "Symbol 常用于避免属性名冲突。"],
  ["Set 的特性是？", ["允许重复", "值唯一", "键值对结构", "按索引访问"], 1, "Set 元素唯一。"],
  ["Map 与普通对象相比优势之一是？", ["只能字符串键", "支持任意类型键", "不能迭代", "无 size"], 1, "Map 键类型更灵活。"],
  ["try...catch 中 finally 的特点是？", ["仅成功时执行", "仅失败时执行", "通常都会执行", "永不执行"], 2, "finally 通常一定执行。"],
  ["URLSearchParams 用于？", ["解析/构造查询参数", "解析 HTML", "处理二进制", "数据库查询"], 0, "专门处理 URL 查询串。"],
  ["document.querySelector 返回？", ["匹配的全部元素", "首个匹配元素", "节点数组", "布尔值"], 1, "只返回首个匹配项。"],
  ["innerText 与 textContent 的区别之一是？", ["完全一样", "innerText 受样式影响", "textContent 会触发重排", "innerText 更快"], 1, "innerText 更接近“渲染后文本”。"],
  ["严格模式可通过什么开启？", ["'use strict';", "strict on;", "mode(strict);", "#strict"], 0, "函数或脚本顶部加 'use strict'。"],
];

const fillQuestions = [
  { question: "请填空：用于声明不会被重新赋值变量的关键字是 ____。", answers: ["const"] },
  { question: "请填空：数组长度属性是 ____。", answers: ["length"] },
  { question: "请填空：把字符串转为数字的函数之一是 ____。", answers: ["Number", "parseInt", "parseFloat"] },
  { question: "请填空：判断数组的标准方法是 Array.____(value)。", answers: ["isArray"] },
  { question: "请填空：Promise 成功回调常用方法是 ____。", answers: ["then"] },
  { question: "请填空：Promise 失败回调常用方法是 ____。", answers: ["catch"] },
  { question: "请填空：异步函数声明关键字是 ____。", answers: ["async"] },
  { question: "请填空：等待 Promise 结果的关键字是 ____。", answers: ["await"] },
  { question: "请填空：添加事件监听的方法是 ____。", answers: ["addEventListener"] },
  { question: "请填空：阻止事件冒泡的方法是 event.____()。", answers: ["stopPropagation"] },
  { question: "请填空：阻止默认行为的方法是 event.____()。", answers: ["preventDefault"] },
  { question: "请填空：在浏览器本地保存字符串数据可用 ____。", answers: ["localStorage"] },
  { question: "请填空：获取 JSON 对象文本化的方法是 JSON.____()。", answers: ["stringify"] },
  { question: "请填空：将 JSON 字符串还原成对象的方法是 JSON.____()。", answers: ["parse"] },
  { question: "请填空：对象键数组可通过 Object.____() 获取。", answers: ["keys"] },
  { question: "请填空：用于数组过滤的方法是 ____。", answers: ["filter"] },
  { question: "请填空：用于数组映射的方法是 ____。", answers: ["map"] },
  { question: "请填空：用于数组累计计算的方法是 ____。", answers: ["reduce"] },
  { question: "请填空：判断值是否严格相等的运算符是 ____。", answers: ["==="] },
  { question: "请填空：可选链运算符是 ____。", answers: ["?."] },
  { question: "请填空：空值合并运算符是 ____。", answers: ["??"] },
  { question: "请填空：用于创建唯一值标识的内置类型是 ____。", answers: ["Symbol"] },
  { question: "请填空：用于去重常见的数据结构是 ____。", answers: ["Set"] },
  { question: "请填空：可保存任意类型键值对的数据结构是 ____。", answers: ["Map"] },
  { question: "请填空：浏览器发 HTTP 请求的常见 API 是 ____。", answers: ["fetch"] },
  { question: "请填空：DOM 树构建完成后触发事件是 ____。", answers: ["DOMContentLoaded"] },
  { question: "请填空：定时执行函数 API 是 ____。", answers: ["setInterval"] },
  { question: "请填空：延时执行函数 API 是 ____。", answers: ["setTimeout"] },
  { question: "请填空：把代码拆成模块导出的关键字是 ____。", answers: ["export"] },
  { question: "请填空：从模块引入成员的关键字是 ____。", answers: ["import"] },
];

const practiceTemplates = [
  ["点击计数器", "实现按钮每点击一次，数字 +1。"],
  ["待办列表", "输入任务后点击添加，渲染到列表中。"],
  ["深色模式切换", "点击按钮在明亮/深色主题间切换。"],
  ["实时字符计数", "输入文本时显示当前字符数。"],
  ["表单必填校验", "提交时校验用户名和邮箱不能为空。"],
  ["搜索过滤", "输入关键字过滤列表项。"],
  ["随机颜色生成器", "点击按钮给页面设置随机背景色。"],
  ["倒计时器", "输入秒数后点击开始倒计时。"],
  ["图片预览", "选择图片文件后显示预览图。"],
  ["进度条模拟", "点击开始后进度条逐步增长到100%。"],
  ["Tab 切换", "实现三个 tab 的内容切换。"],
  ["回到顶部", "滚动到一定位置显示按钮，点击回到顶部。"],
  ["购物车小计", "数量变化时自动计算小计金额。"],
  ["密码强度提示", "根据长度和字符种类显示弱/中/强。"],
  ["简易计算器", "实现 + - * / 四则运算。"],
  ["模态框弹窗", "点击按钮显示弹窗，点击关闭隐藏。"],
  ["拖拽排序（简化）", "点击上移/下移按钮调整列表顺序。"],
  ["分页显示", "每页显示固定条数并可切页。"],
  ["星级评分", "点击星星设置评分并显示结果。"],
  ["时间格式化", "把时间戳格式化为 yyyy-mm-dd hh:mm:ss。"],
  ["防抖输入", "输入停止500ms后才触发搜索输出。"],
  ["节流滚动", "滚动事件每300ms最多触发一次更新。"],
  ["本地存储草稿", "输入内容自动保存到 localStorage 并回显。"],
  ["fetch 数据渲染", "从公开 API 获取数据并列表展示。"],
  ["Promise 串行任务", "两个异步任务按顺序执行并输出日志。"],
  ["错误处理展示", "try/catch 捕获错误并在页面显示。"],
  ["类封装计时器", "使用 class 封装一个可开始/暂停计时器。"],
  ["事件委托列表", "父元素监听子元素点击并显示被点项。"],
  ["键盘快捷键", "按下 Enter 触发提交逻辑。"],
  ["Canvas 简单绘图", "在 canvas 上绘制一个会移动的小球。"],
];

function buildChoiceQuestions() {
  const merged = [...choiceQuestions];
  choiceExtraConcepts.forEach(([question, options, answer, explanation]) =>
    merged.push({ question, options, answer, explanation })
  );
  return merged.map((item, index) => ({
    id: index + 1,
    source: "自编（参考 MDN / ECMAScript 体系）",
    ...item,
  }));
}

function buildFillQuestions() {
  return fillQuestions.map((item, index) => ({
    id: index + 1,
    source: "自编（参考 MDN / javascript.info 体系）",
    ...item,
  }));
}

function buildPracticeQuestions() {
  return practiceTemplates.map(([title, requirement], index) => {
    const starter = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <style>
    body{font-family:Arial,sans-serif;padding:16px}
    .app{max-width:680px;margin:auto}
    button,input{margin:4px 0;padding:6px 10px}
  </style>
</head>
<body>
  <div class="app">
    <h2>${title}</h2>
    <p>题目要求：${requirement}</p>
    <div id="root"></div>
  </div>
  <script>
    // TODO: 在这里实现功能
    const root = document.getElementById("root");
    root.innerHTML = "<p>请在代码编辑器中完成实现。</p>";
  </script>
</body>
</html>`;
    const reference = `<!doctype html>
<html lang="zh-CN"><body style="font-family:Arial;padding:16px"><h3>${title}（参考）</h3><p>这是参考实现占位。你可以基于题目自由发挥，达到要求即可。</p></body></html>`;
    return {
      id: index + 1,
      title,
      requirement,
      starter,
      reference,
      source: "自编实战题（参考真实前端开发场景）",
    };
  });
}

const allChoiceQuestions = buildChoiceQuestions();
const allFillQuestions = buildFillQuestions();
const allPracticeQuestions = buildPracticeQuestions();

function escapeHtml(input) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderKnowledge() {
  const container = document.getElementById("knowledge-list");
  container.innerHTML = knowledgeBase
    .map(
      (item, index) => `
      <article class="card">
        <div class="tags">
          <span class="tag">${item.category}</span>
          <span class="tag">${item.level}</span>
        </div>
        <h4>${index + 1}. ${item.title}</h4>
        <p>${item.description}</p>
        <pre><code>${escapeHtml(item.code)}</code></pre>
        <button class="btn primary run-knowledge" data-index="${index}">运行示例</button>
        <iframe class="preview" id="knowledge-preview-${index}" sandbox="allow-scripts"></iframe>
      </article>
    `
    )
    .join("");

  document.querySelectorAll(".run-knowledge").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.index);
      const iframe = document.getElementById(`knowledge-preview-${idx}`);
      iframe.srcdoc = knowledgeBase[idx].previewDoc;
    });
  });
}

function renderChoices() {
  const container = document.getElementById("choice-list");
  container.innerHTML = allChoiceQuestions
    .map(
      (q) => `
      <article class="card">
        <h4>${q.id}. ${q.question}</h4>
        <div class="options">
          ${q.options
            .map(
              (opt, i) => `
            <label><input type="radio" name="choice-${q.id}" value="${i}" /> ${opt}</label>
          `
            )
            .join("")}
        </div>
        <div class="row">
          <button class="btn primary check-choice" data-id="${q.id}">提交答案</button>
        </div>
        <div class="answer-status" id="choice-status-${q.id}"></div>
      </article>
    `
    )
    .join("");

  document.querySelectorAll(".check-choice").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const q = allChoiceQuestions.find((item) => item.id === id);
      const checked = document.querySelector(`input[name="choice-${id}"]:checked`);
      const status = document.getElementById(`choice-status-${id}`);
      if (!checked) {
        status.className = "answer-status bad";
        status.textContent = "请先选择一个选项。";
        return;
      }
      const ok = Number(checked.value) === q.answer;
      status.className = `answer-status ${ok ? "ok" : "bad"}`;
      status.textContent = ok
        ? `回答正确。解析：${q.explanation}`
        : `回答错误。正确答案：${q.options[q.answer]}。解析：${q.explanation}`;
    });
  });
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase();
}

function renderFill() {
  const container = document.getElementById("fill-list");
  container.innerHTML = allFillQuestions
    .map(
      (q) => `
      <article class="card">
        <h4>${q.id}. ${q.question}</h4>
        <input id="fill-input-${q.id}" type="text" placeholder="请输入答案" />
        <div class="row">
          <button class="btn primary check-fill" data-id="${q.id}">提交答案</button>
        </div>
        <div class="answer-status" id="fill-status-${q.id}"></div>
      </article>
    `
    )
    .join("");

  document.querySelectorAll(".check-fill").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const q = allFillQuestions.find((item) => item.id === id);
      const status = document.getElementById(`fill-status-${id}`);
      const input = document.getElementById(`fill-input-${id}`);
      const answer = normalizeAnswer(input.value);
      const ok = q.answers.some((item) => normalizeAnswer(item) === answer);
      status.className = `answer-status ${ok ? "ok" : "bad"}`;
      status.textContent = ok
        ? "回答正确。"
        : `回答错误。参考答案：${q.answers.join(" / ")}`;
    });
  });
}

function renderPractice() {
  const container = document.getElementById("practice-list");
  container.innerHTML = allPracticeQuestions
    .map(
      (q) => `
      <article class="card">
        <h4>${q.id}. ${q.title}</h4>
        <p>${q.requirement}</p>
        <textarea class="editor" id="practice-editor-${q.id}">${escapeHtml(q.starter)}</textarea>
        <div class="row">
          <button class="btn primary run-practice" data-id="${q.id}">运行预览</button>
          <button class="btn reset-practice" data-id="${q.id}">重置代码</button>
        </div>
        <iframe class="preview" id="practice-preview-${q.id}" sandbox="allow-scripts allow-forms"></iframe>
        <details>
          <summary>查看参考实现（仅供比对）</summary>
          <pre><code>${escapeHtml(q.reference)}</code></pre>
        </details>
      </article>
    `
    )
    .join("");

  document.querySelectorAll(".run-practice").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const editor = document.getElementById(`practice-editor-${id}`);
      const iframe = document.getElementById(`practice-preview-${id}`);
      iframe.srcdoc = editor.value;
    });
  });

  document.querySelectorAll(".reset-practice").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const q = allPracticeQuestions.find((item) => item.id === id);
      const editor = document.getElementById(`practice-editor-${id}`);
      const iframe = document.getElementById(`practice-preview-${id}`);
      editor.value = q.starter;
      iframe.srcdoc = "";
    });
  });
}

function bindTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
}

function renderStats() {
  const total =
    allChoiceQuestions.length + allFillQuestions.length + allPracticeQuestions.length;
  document.getElementById(
    "question-stats"
  ).textContent = `总题量：${total}（选择 ${allChoiceQuestions.length} + 填空 ${allFillQuestions.length} + 实战 ${allPracticeQuestions.length}）`;
}

function init() {
  bindTabs();
  renderKnowledge();
  renderChoices();
  renderFill();
  renderPractice();
  renderStats();
}

init();
