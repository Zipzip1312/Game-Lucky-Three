import { shuffleScores } from 'redux/gameReducer'

const shuffleMiddleware = (store) => (next) => (action) => {
  next(action)

  function makeShuffle() {
    const shuffleDuration = store.getState().game.shuffleDuration
    const timesToShuffle = store.getState().game.timesToShuffle

    setTimeout(() => {
      store.dispatch(shuffleScores())
      const intervalId = setInterval(
        store.dispatch,
        shuffleDuration,
        shuffleScores()
      )
      setTimeout(
        clearInterval,
        shuffleDuration * (timesToShuffle - 1),
        intervalId
      )
    }, 1000)
  }

  if (action.type === 'game/startShuffle') makeShuffle()
}

export default shuffleMiddleware
