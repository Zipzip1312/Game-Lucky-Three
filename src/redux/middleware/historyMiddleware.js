import getPlayerParam from 'util/getPlayerParam'
import history from '../../history'

const historyMiddleware = (store) => (next) => (action) => {
  next(action)
  // -----------------------------
  // Track for screen change to sync it with history and keep player param if presented
  // -----------------------------
  if (action.type === 'app/toggleScreen') {
    const { activeScreen } = store.getState().app
    history.push(activeScreen + getPlayerParam())
  }
}

export default historyMiddleware
