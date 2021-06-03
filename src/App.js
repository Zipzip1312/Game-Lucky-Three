import { useState, useEffect, createRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { fetchStatus } from 'redux/appReducer'
import isSafari from 'util/isSafari'
// Images ---------------------------------
import imagePreload from 'util/imagePreload'
import ScoreHolderImage from 'images/score-holder.svg'
import HolderActiveImage from 'images/holder-active.svg'
import LockImage from 'images/lock.svg'
import CoinImage from 'images/coin.svg'
// Components -----------------------------
import WelcomeScreen from 'components/screens/WelcomeScreen'
import FormScreen from 'components/screens/FormScreen'
import InviteScreen from 'components/screens/InviteScreen'
import GameScreen from 'components/screens/GameScreen'
import SpaceBackground from 'components/SpaceBackground'
// import Ruler from 'components/Ruler'

const routes = [
  { path: ['/welcome'], name: 'Welcome', Component: WelcomeScreen },
  { path: '/form', name: 'Form', Component: FormScreen },
  { path: '/invite', name: 'Invite', Component: InviteScreen },
  { path: '/game', name: 'Game', Component: GameScreen }
]

function App() {
  const { pending } = useSelector((state) => state.app)
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
  // -----------------------------
  // Create ref for each route
  // -----------------------------
  routes.forEach(({ name }) => (routes[name] = createRef()))
  // Wait for api response
  if (pending) return <></>

  return (
    <>
      <div className="app flex-center flex-column">
        {routes.map(({ path, name, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                nodeRef={routes[name]}
                in={match != null}
                timeout={2000}
                classNames="screen"
                unmountOnExit
              >
                <div className="screen" ref={routes[name]}>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
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

export default App
