import { useRef } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { nextScreen, prevScreen } from 'redux/reducer'
import { CSSTransition } from 'react-transition-group'
import WelcomeScreen from 'components/screens/WelcomeScreen'
import RulesScreen from 'components/screens/RulesScreen'
import FormScreen from 'components/screens/FormScreen'
import InviteScreen from 'components/screens/InviteScreen'
import GameScreen from 'components/screens/GameScreen'
import ScoreScreen from 'components/screens/ScoreScreen'

const routes = [
  { path: ['/', '/welcome'], name: 'Welcome', Component: WelcomeScreen },
  { path: '/rules', name: 'Rules', Component: RulesScreen },
  { path: '/form', name: 'Form', Component: FormScreen },
  { path: '/invite', name: 'Invite', Component: InviteScreen },
  { path: '/game', name: 'Game', Component: GameScreen },
  { path: '/score', name: 'Score', Component: ScoreScreen }
]

function App() {
  const refs = {
    Welcome: useRef(null),
    Rules: useRef(null),
    Form: useRef(null),
    Invite: useRef(null),
    Game: useRef(null),
    Score: useRef(null)
  }
  const dispatch = useDispatch()
  return (
    <div className="app">
      <div className="control-buttons">
        <button onClick={() => dispatch(prevScreen())}>Go BACK</button>
        <button onClick={() => dispatch(nextScreen())}>Go NEXT</button>
      </div>
      {routes.map(({ path, name, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              nodeRef={refs[name]}
              in={match != null}
              timeout={300}
              classNames="screen"
              unmountOnExit
            >
              <div className="screen" ref={refs[name]}>
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
      <Redirect to="/" />
    </div>
  )
}

export default App
