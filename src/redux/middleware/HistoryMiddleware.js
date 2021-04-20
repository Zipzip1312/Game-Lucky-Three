import history from '../../history'

const HistoryMiddleware = (store) => (next) => (action) => {
  next(action)

  const type = action.type
  const screenChangeActions = [
    'game/setScreen',
    'game/nextScreen',
    'game/prevScreen'
  ]

  screenChangeActions.includes(type) &&
    history.push(store.getState().game.activeScreen)
}

export default HistoryMiddleware
