export default ({ Vue, isServer, options, router, siteData}) => {
  /**
   * Only import element-ui under client side.
   */
  if (!isServer) {
   /* import("./js/core/index.umd").then(() => {})
    import("./js/ui/index.umd").then(() => {})*/
  }
}
