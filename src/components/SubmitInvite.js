import { useDispatch } from 'react-redux'
import { nextScreen } from 'redux/reducer'

export default function SubmitInvite({ media, done, onClick }) {
  const dispatch = useDispatch()

  if (!media) {
    return <div className="disabled">Оберіть зручний спосіб відправки</div>
  }
  if (done) {
    return (
      <div className="done" onClick={() => dispatch(nextScreen())}>
        До гри
      </div>
    )
  }
  return (
    <a className="active" href={`#${media}`} onClick={onClick}>
      Запросити
    </a>
  )
}
