import { shuffleCards } from 'redux/gameReducer'
import isSafari from 'util/isSafari'

const shuffleMiddleware = (store) => (next) => (action) => {
  next(action)

  function makeShuffle() {
    const duration = store.getState().game.shuffleDuration
    const iterations = store.getState().game.timesToShuffle
    const clearIntervalTimeout = duration * (iterations - (isSafari() ? 0 : 1)) // fix safari interval bug

    setTimeout(() => {
      store.dispatch(shuffleCards())
      const intervalId = setInterval(store.dispatch, duration, shuffleCards())
      setTimeout(clearInterval, clearIntervalTimeout, intervalId)
    }, 1000)
  }

  if (action.type === 'game/startShuffle') makeShuffle()
}

export default shuffleMiddleware
