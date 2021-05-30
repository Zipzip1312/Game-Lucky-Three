import { updateState as updateAppState, toggleScreen } from 'redux/appReducer'
import { updateState as updateGameState } from 'redux/gameReducer'

const apiMiddleware = (store) => (next) => (action) => {
  if (action.type === 'fetchStatus/fulfilled') {
    const { app, game } = action.payload
    game.gameOver = game.gameResults.length > 0
    store.dispatch(updateGameState(game))
    store.dispatch(updateAppState(app))
    store.dispatch(toggleScreen())
  }
  next(action)
}

export default apiMiddleware
