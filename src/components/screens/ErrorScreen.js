import { useSelector } from 'react-redux'
import isSafari from 'util/isSafari'
import ErrorImg from 'images/error.svg'

export default function ErrorScreen() {
  const { code, message } = useSelector((state) => state.app.error)
  const downloadLink = isSafari()
    ? 'https://apps.apple.com/us/app/епіцентр/id1489179679?l=uk&ls=1'
    : 'https://play.google.com/store/apps/details?id=ua.epicentrk&hl=ru&ah=07oQkdT7Cj2AjQL6fWLRUouXNYo'
  // const downloadLink = 'https://epicentrk.page.link/tobR'

  return (
    <div className="card">
      <img className="card-image error" src={ErrorImg} alt="error" />
      <div className="title-1 card-title-error mt-1 mb-2">Даруй (</div>
      <div className="card-info error mt-2 pb-1">
        {message}
        {(code === 401 || code === 403) && (
          <div className="mt-2">
            <a className="form-submit error" href={downloadLink}>
              <span className="btn active nowrap light-blue">ЗАВАНТАЖИТИ</span>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
