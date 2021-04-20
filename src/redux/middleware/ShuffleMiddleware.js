import { shuffleScores } from 'redux/reducer'

const ShuffleMiddleware = (store) => (next) => (action) => {
  next(action)

  function makeShuffle() {
    const game = store.getState().game
    setTimeout(() => {
      store.dispatch(shuffleScores())
      const intervalId = setInterval(
        store.dispatch,
        game.shuffleDuration,
        shuffleScores()
      )
      setTimeout(
        clearInterval,
        game.shuffleDuration * (game.timesToShuffle - 1),
        intervalId
      )
    }, 1000)
  }

  if (action.type === 'game/startShuffle') makeShuffle()
}

export default ShuffleMiddleware
