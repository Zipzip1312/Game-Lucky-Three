export default function getPlayerParam() {
  var regex = new RegExp('[?&]player(=([^&#]*)|&|#|$)'),
    results = regex.exec(window.location.href)
  if (!results || !results[2]) return 'unregistered'

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
