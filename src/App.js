import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import WelcomeScreen from 'components/screens/WelcomeScreen'
import RulesScreen from 'components/screens/RulesScreen'
import FormScreen from 'components/screens/FormScreen'
import InviteScreen from 'components/screens/InviteScreen'
import GameScreen from 'components/screens/GameScreen'
import ScoreScreen from 'components/screens/ScoreScreen'

function App() {
  const screen = useSelector((state) => state.game.screen)
  console.log(screen)

  return (
    <Router>
      <div className="app">
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
    </Router>
  )
}

export default App
