export default ({ Vue, isServer, options, router, siteData}) => {
  Vue.config.ignoredElements = [/^wu-/];

  /**
   * Only import element-ui under client side.
   */
  if (!isServer) {
    import("@wu-component/wu-right-menu").then(res => {
      window.WuRightMenu = res.WuRightMenu;
      window.RightMenuCore = res.RightMenuCore;
    })
    /*import("./public/js/menu/index.esm").then(res => {
      console.log(res);
      window.WuRightMenu = res.WuRightMenu;
      window.RightMenuCore = res.RightMenuCore;
    })*/
   /* import('./component/Comment').then(res => {
      Vue.component("Comment", res.default);
    })*/

    // import("./public/js/lottie/index.umd.js").then(() => {})
  }
}
