(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{786:function(t,a,s){"use strict";s.r(a);var e=s(62),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"web-webpack5-vue2-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-webpack5-vue2-javascript"}},[t._v("#")]),t._v(" web-webpack5-vue2-javascript")]),t._v(" "),a("p",[t._v("该模板是基于 webpack5 和 vue2 搭建，内部已经集成 eslint、router、vue-store、axios、各类样式预处理（less、sass、stylus）、模板引擎（pug）以及 webpack 打包分析配置。模板内部未集成任何第三方样式库，需要开发者自己扩展。")]),t._v(" "),a("h2",{attrs:{id:"目录说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录说明"}},[t._v("#")]),t._v(" 目录说明")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── build                                // webpack 配置目录\n|——|—— webpack_build.config.js           // 生产环境配置\n|——|—— webpack_common.config.js\n|——|—— webpack_dev.config.js             // 开发环境配置 \n|——|—— webpack_analyzer.config.js        // 打包分析配置\n├── public                               // 公共文件目录\n├──|—— index.html                        // html 模板\n├── src                                  // 公共模块\n├──|—— components                        // 公共组件目录\n├──|—— router                            // 路由逻辑目录\n├──|—— service                           // 网络请求逻辑目录\n├──|—— store                             // vuex目录\n├──|——|——module                          // vuex 各个子模块\n├──|——|——index.js                        // vuex 根文件\n├──|—— style                             // 样式\n├──|—— utils                             // 工具目录\n├──|—— views                             // 页面级组件目录\n|——|—— main.js                           // 系统入口文件\n|—— .eslintignore                        // eslint 忽略文件\n|—— .eslintrc.js                         // eslint配置\n|—— postcss.config                       // autoprefixer 配置\n\n")])])]),a("h2",{attrs:{id:"npm-脚本说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-脚本说明"}},[t._v("#")]),t._v(" npm 脚本说明")]),t._v(" "),a("h3",{attrs:{id:"npm-run-webpack-dev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-webpack-dev"}},[t._v("#")]),t._v(" npm run webpack:dev")]),t._v(" "),a("p",[t._v("采用 webpack 方式启动工程工程。")]),t._v(" "),a("h3",{attrs:{id:"npm-run-webpack-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-webpack-build"}},[t._v("#")]),t._v(" npm run webpack:build")]),t._v(" "),a("p",[t._v("采用 webpack 方式打包工程。")]),t._v(" "),a("h3",{attrs:{id:"npm-run-webpack-analyzer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-webpack-analyzer"}},[t._v("#")]),t._v(" npm run webpack:analyzer")]),t._v(" "),a("p",[t._v("该脚本用于 webpack 打包速度分析，控制台会打印出 各个模块的构建速度，也可以通过浏览器可视化分析各模块的体积占比。")]),t._v(" "),a("h2",{attrs:{id:"webpack5-升级问题汇总"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack5-升级问题汇总"}},[t._v("#")]),t._v(" webpack5 升级问题汇总")]),t._v(" "),a("h3",{attrs:{id:"_1、使用-optimize-css-assets-webpack-plugin时会有如下警告-但不影响打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、使用-optimize-css-assets-webpack-plugin时会有如下警告-但不影响打包"}},[t._v("#")]),t._v(" 1、使用 optimize-css-assets-webpack-plugin时会有如下警告，但不影响打包")]),t._v(" "),a("p",[a("strong",[t._v("问题")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEP_WEBPACK_COMPILATION_OPTIMIZE_CHUNK_ASSETS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" DeprecationWarning: optimizeChunkAssets is deprecated "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use Compilation.hook.processAssets instead and use one of Compilation.PROCESS_ASSETS_STAGE_* as stage option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Use "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" --trace-deprecation "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". to show where the warning was created"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("方案")])]),t._v(" "),a("p",[t._v("官方回答：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/NMFR/optimize-css-assets-webpack-plugin/issues/134",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("解决方案\n替换插件为 "),a("a",{attrs:{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("css-minimizer-webpack-plugin"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_2、使用-hash-是出现弃用警告-不影响打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、使用-hash-是出现弃用警告-不影响打包"}},[t._v("#")]),t._v(" 2、使用 hash 是出现弃用警告，不影响打包")]),t._v(" "),a("p",[a("strong",[t._v("问题")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" DeprecationWarning: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" is now "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fullhash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("also consider using "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("chunkhash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" or "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("contenthash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", see documentation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" details"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("方案")])]),t._v(" "),a("p",[t._v("按提示替换 "),a("code",[t._v("hash")]),t._v(" 为 "),a("code",[t._v("chunkhash | contenthash")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("publicPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].[chunkhash:8].js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("clean")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3、使用-copy-webpack-plugin-报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用-copy-webpack-plugin-报错"}},[t._v("#")]),t._v(" 3、使用 copy-webpack-plugin 报错")]),t._v(" "),a("p",[a("strong",[t._v("问题")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ValidationError: Invalid options object. Copy Plugin has been initialized using an options object that does not match the API schema.\n")])])]),a("p",[a("strong",[t._v("方案")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/webpack-contrib/copy-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("copy-webpack-plugin"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CopyWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("patterns")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("to")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"优化配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化配置"}},[t._v("#")]),t._v(" 优化配置")]),t._v(" "),a("h3",{attrs:{id:"_1、图片、字体-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、图片、字体-loader"}},[t._v("#")]),t._v(" 1、图片、字体 loader")]),t._v(" "),a("p",[t._v("在 webpack 5 中，可以使用内置的 "),a("a",{attrs:{href:"https://webpack.docschina.org/guides/asset-modules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Asset Modules"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.png|jpg|gif|jpeg|svg")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'asset/resource'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parser")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dataUrlCondition")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("maxSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("generator")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images/[base]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(eot|ttf|woff|woff2)(\\?\\S*)?$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'asset/resource'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("generator")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fonts/[base]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);