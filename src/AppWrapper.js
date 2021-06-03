import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStatus } from 'redux/appReducer'
import isSafari from 'util/isSafari'
// Images to preload ----------------------
import imagePreload from 'util/imagePreload'
import ScoreHolderImage from 'images/score-holder.svg'
import HolderActiveImage from 'images/holder-active.svg'
import LockImage from 'images/lock.svg'
import CoinImage from 'images/coin.svg'
// Components -----------------------------
import App from 'App'
import SpaceBackground from 'components/SpaceBackground'
// import Ruler from 'components/Ruler'

function AppWrapper() {
  const { pending } = useSelector((state) => state.app)
  const [animation, setAnimation] = useState('hidden')
  const [showSpaceBg, setShowSpaceBg] = useState(false)
  const dispatch = useDispatch()
  // -----------------------------
  // Initial setup
  // -----------------------------
  useEffect(() => {
    isSafari() && document.documentElement.classList.add('safari')
    imagePreload([ScoreHolderImage, HolderActiveImage, LockImage, CoinImage])
    setTimeout(setShowSpaceBg, isSafari() ? 0 : 1000, true) // fix bug on android webview
    dispatch(fetchStatus())
  }, [dispatch])

  useEffect(() => {
    !pending && setAnimation('zoomIn')
  }, [pending])

  return (
    <>
      <div className={`app flex-center flex-column animate ${animation}`}>
        <App />
      </div>
      {showSpaceBg && (
        <SpaceBackground
          size={{ width: window.innerWidth, height: window.innerHeight }}
        />
      )}
      {/* {showSpaceBg && <Ruler />} */}
    </>
  )
}

export default AppWrapper
