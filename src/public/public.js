/**
 * Created by tangzhiqiang on 2017/3/5.
 */

const publicFunction = {
  // 锚点跳转
  goAnchor (selector) {
    var anchor = document.querySelector(selector)
    console.log(anchor)
    document.body.scrollTop = anchor.offsetTop
  }
}

export default publicFunction
