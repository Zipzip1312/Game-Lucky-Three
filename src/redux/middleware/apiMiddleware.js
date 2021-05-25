import { updateState as updateAppState, toggleScreen } from 'redux/appReducer'
import { updateState as updateGameState } from 'redux/gameReducer'

const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === 'fetchStatus/fulfilled') {
    const { app, game } = action.payload
    store.dispatch(updateAppState(app))
    store.dispatch(updateGameState(game))
    store.dispatch(toggleScreen())
  }
  next(action)
}

export default apiMiddleware
