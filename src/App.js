import { createRef } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import WelcomeScreen from 'components/screens/WelcomeScreen'
import RulesScreen from 'components/screens/RulesScreen'
import FormScreen from 'components/screens/FormScreen'
import InviteScreen from 'components/screens/InviteScreen'
import GameScreen from 'components/screens/GameScreen'
// ------------------------------------------------------------------------
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import history from './history'
// ------------------------------------------------------------------------

const routes = [
  { path: ['/welcome'], name: 'Welcome', Component: WelcomeScreen },
  { path: '/rules', name: 'Rules', Component: RulesScreen },
  { path: '/form', name: 'Form', Component: FormScreen },
  { path: '/invite', name: 'Invite', Component: InviteScreen },
  { path: '/game', name: 'Game', Component: GameScreen }
]

function App() {
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
