import { createSlice } from '@reduxjs/toolkit'
import shuffle from 'lodash.shuffle'

const sleep = (m) => new Promise((r) => setTimeout(r, m))

export const slice = createSlice({
  name: 'game',
  initialState: {
    player: '',
    picksAvailable: 3,
    picksEnabled: false,
    showPicksCounter: false,
    shuffling: false,
    shuffleDuration: 1500,
    timesToShuffle: 3,
    gameOver: false,
    scores: [1000, 500, 250, 250, 100, 100, 50, 50, 25, 25, 10, 10, 0, 0, 0, 0],
    indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], // for shuffling animation and further score select
    totalScore: 0,
    currentScore: [],
    selectedCards: [],
    gameResults: []
  },
  reducers: {
    setPlayer: (state, { payload }) => {
      state.player = payload
    },
    startShuffle: (state) => {
      state.shuffling = true
    },
    stopShuffle: (state) => {
      state.picksEnabled = true
      state.showPicksCounter = true
    },
    shuffleScores: (state) => {
      state.scores = shuffle(state.scores)
      state.indexes = shuffle(state.indexes)
    },
    disablePicks: (state) => {
      state.picksEnabled = false
    },
    updateCurrentScore: (state, { payload }) => {
      state.currentScore.push(payload)
      state.totalScore += payload.score
      state.selectedCards.push(payload.index)
      state.picksEnabled = state.currentScore.length < state.picksAvailable

      if (!state.picksEnabled) {
        state.gameOver = true
        // Set game results
        for (let i = 0; i < state.indexes.length; i++) {
          state.gameResults.push({
            score: state.scores[i],
            won: state.selectedCards.includes(i)
          })
        }
      }
    },
    updateState: (state, { payload }) => {
      return { ...state, ...payload }
    }
  }
})

export const {
  setPlayer,
  startShuffle,
  stopShuffle,
  shuffleScores,
  updateCurrentScore,
  disablePicks,
  updateState
} = slice.actions

export default slice.reducer

export function registerPlayer() {
  return async (dispatch) => {
    await sleep(500)
    const response = {
      verification: 'Player'
    }
    dispatch(setPlayer(response.verification))
  }
}

export function makePick(index) {
  return async (dispatch, getState) => {
    dispatch(disablePicks())
    await sleep(300)
    const score = getState().game.scores[index]
    dispatch(updateCurrentScore({ index, score }))

    return score
  }
}
