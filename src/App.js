import { useEffect, createRef } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import history from './history'
import isSafari from 'util/isSafari'
// ------------------------------------------------------------------------
import WelcomeScreen from 'components/screens/WelcomeScreen'
import FormScreen from 'components/screens/FormScreen'
import InviteScreen from 'components/screens/InviteScreen'
import GameScreen from 'components/screens/GameScreen'

const routes = [
  { path: ['/welcome'], name: 'Welcome', Component: WelcomeScreen },
  { path: '/form', name: 'Form', Component: FormScreen },
  { path: '/invite', name: 'Invite', Component: InviteScreen },
  { path: '/game', name: 'Game', Component: GameScreen }
]

function App() {
  // ------------------------------------------------------------------------
  useEffect(() => {
    isSafari() && document.documentElement.classList.add('safari')
  }, [])
  // ------------------------------------------------------------------------
  const activeScreen = useSelector((state) => state.app.activeScreen)
  useEffect(() => {
    history.push(activeScreen)
  }, [activeScreen])
  // ------------------------------------------------------------------------
  // Create ref for each route
  routes.forEach(({ name }) => (routes[name] = createRef()))

  return (
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
      <Redirect to="/welcome" />
    </div>
  )
}

export default App
