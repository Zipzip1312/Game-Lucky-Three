export default function isSafari() {
  const standalone = window.navigator.standalone,
    userAgent = window.navigator.userAgent.toLowerCase(),
    safari =
      userAgent.indexOf('safari') !== -1 && userAgent.indexOf('chrome') === -1

  return (/iphone|ipod|ipad/.test(userAgent) && !standalone) || safari
}
