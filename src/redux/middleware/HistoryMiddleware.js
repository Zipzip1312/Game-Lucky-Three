import history from '../../history'
import { toggleNav } from 'redux/appReducer'

const historyMiddleware = (store) => (next) => (action) => {
  next(action)

  const type = action.type
  const screenChangeActions = [
    'app/setScreen',
    'app/nextScreen',
    'app/prevScreen'
  ]

  if (screenChangeActions.includes(type)) {
    history.push(store.getState().app.activeScreen)
    store.dispatch(toggleNav(false))
  }
}

export default historyMiddleware
