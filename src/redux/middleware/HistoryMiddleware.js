import history from '../../history'
import { toggleNav } from 'redux/reducer'

const HistoryMiddleware = (store) => (next) => (action) => {
  next(action)

  const type = action.type
  const screenChangeActions = [
    'game/setScreen',
    'game/nextScreen',
    'game/prevScreen'
  ]

  if (screenChangeActions.includes(type)) {
    history.push(store.getState().game.activeScreen)
    store.dispatch(toggleNav(false))
  }
}

export default HistoryMiddleware
