{
  "name": "vscode-vue-ts-snippet", // 包名
  "version": "0.0.1", // 版本h号
  "description": "Vue with Typescript snippets", // 包的描述
  "icon": "icons/icon.png", // 显示插件的图标 文件夹一定不不能用icon 好像源码有这个变量 icons 就行
  "publisher": "crperlin", // vscode 插件自有的属性,发布人
  "repository": { // 包的存放仓库
    "type": "git", // 类型 git
    "url":"https://github.com/crper/vscode-vs-ts-snippets.git" // 访问链接
  },
  "galleryBanner": { // 横幅描述
    "color": "#0273D4",
    "theme": "dark"
  },
  "scripts": { // 这里没用到,一般用来写拓展才用到,跑测试什么的
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["vue","typescript-vue","typescript","vue-snippets","vue-ts-snippets","vue-typescript-snippets","vue2+"],  // 关键字,就是可一个人去搜索的
  "engines": { // 限制 vscode 的版本
    "vscode": "^1.18.0"
  },
  "author":{ // 不言而喻,发布人的一些基础信息
    "name": "crper(QunHe Lin)",
    "email": "crper@outlook.com",
    "url": "https://github.com/crper"
  },
  "categories": [ // 插件的归类
    "Snippets",
    "Other"
  ],
  "contributes":{ // 这里就是索引 snippet 的,如何让插件知道你共享的东西
    "snippets": [
      {
        "language": "vue", // 针对.vue 格式的 snippets
        "path":"./snippets/vue.json"
      },
      {
        "language": "typescript", // 针对.typescript 的 snippets
        "path":"./snippets/vue-typescript.json"
      },
      {
        "language": "javascript", // 针对.js 的 snippets
        "path":"./snippets/vue-typescript.json"
      }
    ]
  },
  "bugs": {  // 一般就是反馈 bug,issue 的路径
    "url": "https://github.com/crper/vscode-vs-ts-snippets/issues"
  },
  "homepage": "https://github.com/crper/vscode-vs-ts-snippets/readme", // 包的主页,就是放在哪里
  "license": "SEE LICENSE IN LICENSE" // 包使用的协议!
}