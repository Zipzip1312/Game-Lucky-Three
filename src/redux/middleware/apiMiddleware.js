import { updateState as updateAppState, toggleScreen } from 'redux/appReducer'
import { updateState as updateGameState } from 'redux/gameReducer'
import { acceptRules, saveProfile, sendInvite } from 'api'

const apiMiddleware = (store) => (next) => (action) => {
  const { type } = action

  if (type === 'fetchStatus/fulfilled') {
    store.dispatch(updateGameState(action.payload.game))
    store.dispatch(updateAppState(action.payload.app))
    store.dispatch(toggleScreen())
  }

  type === 'app/toggleRulesAccepted' && acceptRules()
  type === 'app/disableForm' && saveProfile(store.getState().app.form)
  type === 'app/handleSendInvite' && sendInvite()

  next(action)
}

export default apiMiddleware
