import { Switch, Route, Redirect } from 'react-router-dom'
import WelcomeScreen from 'components/screens/WelcomeScreen'
import RulesScreen from 'components/screens/RulesScreen'
import FormScreen from 'components/screens/FormScreen'
import InviteScreen from 'components/screens/InviteScreen'
import GameScreen from 'components/screens/GameScreen'
import ScoreScreen from 'components/screens/ScoreScreen'

import { useDispatch } from 'react-redux'
import { nextScreen, prevScreen } from 'redux/reducer'

function App() {
  const dispatch = useDispatch()
  return (
    <div className="app">
      <div style={{ display: 'flex' }}>
        <button onClick={() => dispatch(prevScreen())}>Go BACK</button>
        <button onClick={() => dispatch(nextScreen())}>Go NEXT</button>
      </div>
      <Switch>
        <Route exact path="/" component={WelcomeScreen} />
        <Route path="/rules" component={RulesScreen} />
        <Route path="/form" component={FormScreen} />
        <Route path="/invite" component={InviteScreen} />
        <Route path="/game" component={GameScreen} />
        <Route path="/score" component={ScoreScreen} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
