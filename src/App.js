import { useState, useEffect, createRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { getPlayerStatus } from 'redux/appReducer'
import history from './history'
import isSafari from 'util/isSafari'
// ------------------------------------------------------------------------
import imagePreload from 'util/imagePreload'
import ScoreHolderImage from 'images/score-holder.svg'
import HolderActiveImage from 'images/holder-active.svg'
import LockImage from 'images/lock.svg'
import CoinImage from 'images/coin.svg'
// ------------------------------------------------------------------------
import WelcomeScreen from 'components/screens/WelcomeScreen'
import FormScreen from 'components/screens/FormScreen'
import InviteScreen from 'components/screens/InviteScreen'
import GameScreen from 'components/screens/GameScreen'
import SpaceBackground from 'components/SpaceBackground'

const routes = [
  { path: ['/welcome'], name: 'Welcome', Component: WelcomeScreen },
  { path: '/form', name: 'Form', Component: FormScreen },
  { path: '/invite', name: 'Invite', Component: InviteScreen },
  { path: '/game', name: 'Game', Component: GameScreen }
]

function App() {
  const { pending } = useSelector((state) => state.app)
  const classes = 'app flex-center flex-column'
  const dispatch = useDispatch()
  const [showSpaceBg, setShowSpaceBg] = useState(false)
  // ------------------------------------------------------------------------
  useEffect(() => {
    isSafari() && document.documentElement.classList.add('safari')
    imagePreload([ScoreHolderImage, HolderActiveImage, LockImage, CoinImage])
    setTimeout(setShowSpaceBg, isSafari() ? 0 : 1000, true) // fix bug on android webview
    dispatch(getPlayerStatus())
  }, [dispatch])
  // ------------------------------------------------------------------------
  // ------------------------------------------------------------------------
  const activeScreen = useSelector((state) => state.app.activeScreen)
  useEffect(() => {
    history.push(activeScreen)
  }, [activeScreen])
  // ------------------------------------------------------------------------
  // Create ref for each route
  routes.forEach(({ name }) => (routes[name] = createRef()))

  return (
    <>
      <div className={`${classes} ${pending ? 'pending' : 'animate zoomIn'}`}>
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
        <Redirect to="/welcome" />
      </div>
      {showSpaceBg && (
        <SpaceBackground
          size={{ width: window.innerWidth, height: window.innerHeight }}
        />
      )}
    </>
  )
}

export default App
