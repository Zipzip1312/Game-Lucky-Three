export default function getPlayerParam(returnFullQueryString = true) {
  const regex = new RegExp('[?&]player(=([^&#]*)|&|#|$)'),
    results = regex.exec(window.location.href)
  if (!results || !results[2]) return ''

  const token = decodeURIComponent(results[2].replace(/\+/g, ' '))

  return returnFullQueryString ? '?player=' + token : token
}
