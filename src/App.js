import { createRef } from 'react'
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
// Components -----------------------------
import WelcomeScreen from 'components/screens/WelcomeScreen'
import FormScreen from 'components/screens/FormScreen'
import InviteScreen from 'components/screens/InviteScreen'
import GameScreen from 'components/screens/GameScreen'

const routes = [
  { path: '/welcome', name: 'Welcome', Component: WelcomeScreen },
  { path: '/form', name: 'Form', Component: FormScreen },
  { path: '/invite', name: 'Invite', Component: InviteScreen },
  { path: '/game', name: 'Game', Component: GameScreen }
]

function App() {
  // -----------------------------
  // Create ref for each route
  // -----------------------------
  routes.forEach(({ name }) => (routes[name] = createRef()))

  return (
    <>
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
    </>
  )
}

export default App
