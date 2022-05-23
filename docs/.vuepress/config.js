module.exports = {
	title: 'WebComponent',
	description: '开箱即用的 webComponent 框架',
	head: [
		['script', { charset: "utf-8", src: "/core.esm.js" }],
		['script', { charset: "utf-8", src: "/web-plus.esm.js" }],
		['link', { rel: 'icon', href: '/images/photo.png' }],
		['meta', { name: 'theme-color', content: '#0084ff' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['meta', { name: 'msapplication-TileImage', content: '/images/photo' }],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }]
	],
	theme: 'antdocs',
	base: '/',
	markdown: {
		lineNumbers: false
	},
	themeConfig: {
		lastUpdated: false,
		backToTop: true,
		smoothScroll: true,
		nav:[
			// {text: 't-cli', key: '1', link: '/t-cli/'},
			{text: 'web-plus-ui', key: '13', link: '/component-plus/'},
			/*{text: 'web-ui', key: '2', link: '/web-component-ui/'},*/
			// {text: '前端', key: '3', link: '/web/'},
			// {text: '浏览器扩展', link: '/chrome-extension/'},
			/*{text: '浏览器扩展', key: '4', link: '/extension/'},
			{text: '后端', key: '5', link: '/after/'},
			{text: '进阶', key: '6', link: '/other/'},
			{text: '设计', key: '7', link: '/design/'},
			{text: 'Blog', key: '8', link: 'http://blog.canyuegongzi.xyz'},
			{text: '全栈项目', key: '9', link: 'https://github.com/canyuegongzi'},*/
			{text: 'Github', key: '10', link: 'https://github.com/wu-component'}
		],
		sidebar: {
			'/t-cli/': [
				{
					title: '安装',
					sidebarDepth: 0,
					children: [
						'/t-cli/安装/install',
						'/t-cli/安装/t-cli-cmd',
					]
				},
				{
					title: '工程模板',
					sidebarDepth: 0,
					children: [
						'/t-cli/工程模板/web-core-component',
						'/t-cli/工程模板/node-nest',
						'/t-cli/工程模板/node-simple-typescript',
						'/t-cli/工程模板/web-webpack4-typescript',
						'/t-cli/工程模板/web-webpack4-vue2-javascript',
						'/t-cli/工程模板/web-webpack4-vue2-typescript',
						'/t-cli/工程模板/web-webpack4-react-javascript',
						'/t-cli/工程模板/web-webpack4-react-typescript',
						'/t-cli/工程模板/web-webpack5-vue2-javascript',
						'/t-cli/工程模板/web-webpack5-vue2-typescript',
					]
				}
			],
			'/component-plus/': [
				{
					title: "开发者",
					sidebarDepth: 0,
					children: [
						'/component-plus/CorePlus/Install',
						'/component-plus/CorePlus/Decorators',
						'/component-plus/CorePlus/Lifecycle',
						'/component-plus/CorePlus/Build',

					]
				},
				{
					title: 'Basic',
					sidebarDepth: 0,
					children: [
						'/component-plus/Basic/Button',
						'/component-plus/Basic/Icon',
						'/component-plus/Basic/Link',
						'/component-plus/Basic/Tag',
						'/component-plus/Basic/Progress',
					]
				},
				{
					title: 'Form',
					sidebarDepth: 0,
					children: [
						'/component-plus/Form/Radio',
						'/component-plus/Form/Input',
						'/component-plus/Form/Switch',
						'/component-plus/Form/Checkbox',
						'/component-plus/Form/Rate',
					]
				},
				{
					title: 'Layout',
					sidebarDepth: 0,
					children: [
						'/component-plus/Layout/Layout',
						'/component-plus/Layout/Breadcrumb',
						'/component-plus/Layout/PageHeader',
					]
				},
				{
					title: 'TimePicker',
					sidebarDepth: 0,
					children: []
				},
				{
					title: 'Data',
					sidebarDepth: 0,
					children: [
						'/component-plus/Data/Table',
					]
				},
				{
					title: 'Notice',
					sidebarDepth: 0,
					children: [
						'/component-plus/Navigation/Message',
					]
				},
				{
					title: 'Navigation',
					sidebarDepth: 0,
					children: [
					]
				},
				{
					title: 'Others',
					sidebarDepth: 0,
					children: [
					]
				},




			],
		}
	},
	plugins: [
		require('vuepress-plugin-demo-container'),
		/*[
			'vuepress-plugin-comment',
			{
				// choosen: 'valine',
				choosen: 'gitalk',
				// options选项中的所有参数，会传给Valine的配置
				options: {
					// el: '#valine-vuepress-comment',
					// appId: 'PVsiIhfVXf7pLlF4CKL4duC7-gzGzoHsz',
					// appKey: 'kpiIiP94nrjz2w5lMMHmyRcA'

					clientID: 'e2904d004ede111c5047',
					clientSecret: '31929050c6443cdba855213a72a31c904dceb050',
					repo: 'canyuegongzi.github.io',
					owner: 'canyuegongzi',
					admin: ['canyuegongzi'],
					distractionFreeMode: false
				}
			}
		]*/
	],
};
