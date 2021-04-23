import { useDispatch } from 'react-redux'
import { nextScreen } from 'redux/reducer'

const SelectMediaBtn = () => {
  return <div className="message">Обери зручний спосіб відправки</div>
}

const InviteBtn = ({ onClick }) => {
  return (
    <div className="active animate headShake" onClick={onClick}>
      Запросити
    </div>
  )
}

const ToGameBtn = () => {
  const dispatch = useDispatch()
  return (
    <div className="done red" onClick={() => dispatch(nextScreen())}>
      До гри!
    </div>
  )
}

export default function InviteButton({ media, done, onClick }) {
  const animation = 'animate bounceInRight'
  return (
    <div className={`form-submit invite ${done ? animation : ''}`}>
      {done ? (
        <ToGameBtn />
      ) : media ? (
        <InviteBtn onClick={onClick} />
      ) : (
        <SelectMediaBtn />
      )}
    </div>
  )
}
