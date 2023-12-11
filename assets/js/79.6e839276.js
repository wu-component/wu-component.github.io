(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{785:function(t,s,a){"use strict";a.r(s);var e=a(62),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"web-webpack5-vue2-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-webpack5-vue2-typescript"}},[t._v("#")]),t._v(" web-webpack5-vue2-typescript")]),t._v(" "),s("p",[t._v("该模板是基于 webpack5 和 vue2 搭建，内部已经集成 eslint、router、vue-store、axios、各类样式预处理（less、sass、stylus）、模板引擎（pug）以及 webpack 打包分析配置。模板内部未集成任何第三方样式库，需要开发者自己扩展。")]),t._v(" "),s("h2",{attrs:{id:"目录说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录说明"}},[t._v("#")]),t._v(" 目录说明")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("├── build                                // webpack 配置目录\n|——|—— webpack_build.config.js           // 生产环境配置\n|——|—— webpack_common.config.js\n|——|—— webpack_dev.config.js             // 开发环境配置 \n|——|—— webpack_analyzer.config.js        // 打包分析配置\n├── public                               // 公共文件目录\n├──|—— index.html                        // html 模板\n├── src                                  // 公共模块\n├──|—— components                        // 公共组件目录\n├──|—— router                            // 路由逻辑目录\n├──|—— service                           // 网络请求逻辑目录\n├──|—— store                             // vuex目录\n├──|——|——module                          // vuex 各个子模块\n├──|——|——index.js                        // vuex 根文件\n├──|—— style                             // 样式\n├──|—— utils                             // 工具目录\n├──|—— views                             // 页面级组件目录\n|——|—— main.js                           // 系统入口文件\n|—— .eslintignore                        // eslint 忽略文件\n|—— .eslintrc.js                         // eslint配置\n|—— postcss.config                       // autoprefixer 配置\n|—— tsconfig.json                        // ts 配置\n\n")])])]),s("h2",{attrs:{id:"npm-脚本说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-脚本说明"}},[t._v("#")]),t._v(" npm 脚本说明")]),t._v(" "),s("h3",{attrs:{id:"npm-run-webpack-dev"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-webpack-dev"}},[t._v("#")]),t._v(" npm run webpack:dev")]),t._v(" "),s("p",[t._v("采用 webpack 方式启动工程工程。")]),t._v(" "),s("h3",{attrs:{id:"npm-run-webpack-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-webpack-build"}},[t._v("#")]),t._v(" npm run webpack:build")]),t._v(" "),s("p",[t._v("采用 webpack 方式打包工程。")]),t._v(" "),s("h3",{attrs:{id:"npm-run-webpack-analyzer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-webpack-analyzer"}},[t._v("#")]),t._v(" npm run webpack:analyzer")]),t._v(" "),s("p",[t._v("该脚本用于 webpack 打包速度分析，控制台会打印出 各个模块的构建速度，也可以通过浏览器可视化分析各模块的体积占比。")]),t._v(" "),s("h2",{attrs:{id:"webpack5-升级问题汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack5-升级问题汇总"}},[t._v("#")]),t._v(" webpack5 升级问题汇总")]),t._v(" "),s("h3",{attrs:{id:"_1、使用-optimize-css-assets-webpack-plugin时会有如下警告-但不影响打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、使用-optimize-css-assets-webpack-plugin时会有如下警告-但不影响打包"}},[t._v("#")]),t._v(" 1、使用 optimize-css-assets-webpack-plugin时会有如下警告，但不影响打包")]),t._v(" "),s("p",[s("strong",[t._v("问题")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEP_WEBPACK_COMPILATION_OPTIMIZE_CHUNK_ASSETS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" DeprecationWarning: optimizeChunkAssets is deprecated "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use Compilation.hook.processAssets instead and use one of Compilation.PROCESS_ASSETS_STAGE_* as stage option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Use "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" --trace-deprecation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". to show where the warning was created"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("方案")])]),t._v(" "),s("p",[t._v("官方回答：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/NMFR/optimize-css-assets-webpack-plugin/issues/134",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("解决方案\n替换插件为 "),s("a",{attrs:{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("css-minimizer-webpack-plugin"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"_2、使用-hash-是出现弃用警告-不影响打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用-hash-是出现弃用警告-不影响打包"}},[t._v("#")]),t._v(" 2、使用 hash 是出现弃用警告，不影响打包")]),t._v(" "),s("p",[s("strong",[t._v("问题")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" DeprecationWarning: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" is now "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fullhash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("also consider using "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("chunkhash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" or "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("contenthash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", see documentation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" details"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("方案")])]),t._v(" "),s("p",[t._v("按提示替换 "),s("code",[t._v("hash")]),t._v(" 为 "),s("code",[t._v("chunkhash | contenthash")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("publicPath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].[chunkhash:8].js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("clean")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3、使用-copy-webpack-plugin-报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用-copy-webpack-plugin-报错"}},[t._v("#")]),t._v(" 3、使用 copy-webpack-plugin 报错")]),t._v(" "),s("p",[s("strong",[t._v("问题")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("ValidationError: Invalid options object. Copy Plugin has been initialized using an options object that does not match the API schema.\n")])])]),s("p",[s("strong",[t._v("方案")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/webpack-contrib/copy-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("copy-webpack-plugin"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CopyWebpackPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("patterns")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"优化配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化配置"}},[t._v("#")]),t._v(" 优化配置")]),t._v(" "),s("h3",{attrs:{id:"_1、图片、字体-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、图片、字体-loader"}},[t._v("#")]),t._v(" 1、图片、字体 loader")]),t._v(" "),s("p",[t._v("在 webpack 5 中，可以使用内置的 "),s("a",{attrs:{href:"https://webpack.docschina.org/guides/asset-modules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Asset Modules"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.png|jpg|gif|jpeg|svg")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'asset/resource'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parser")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dataUrlCondition")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maxSize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("generator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images/[base]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(eot|ttf|woff|woff2)(\\?\\S*)?$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'asset/resource'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("generator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fonts/[base]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);