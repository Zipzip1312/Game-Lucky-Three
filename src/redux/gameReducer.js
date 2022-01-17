import { createSlice } from '@reduxjs/toolkit'
import shuffle from 'lodash.shuffle'

export const slice = createSlice({
  name: 'game',
  initialState: {
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
    gameResults: [],
    showConfetti: true
  },
  reducers: {
    startShuffle: (state) => {
      state.shuffling = true
      // Hide score values
      state.scores = state.scores.map(() => 0)
    },
    shuffleCards: (state) => {
      state.indexes = shuffle(state.indexes)
    },
    stopShuffle: (state) => {
      state.picksEnabled = true
      state.showPicksCounter = true
    },
    disablePicks: (state) => {
      state.picksEnabled = false
    },
    updateCurrentScore: (state, { payload }) => {
      const { index, score, finished } = payload
      state.currentScore.push({ index, score })
      state.totalScore += score
      state.selectedCards.push(index)
      state.picksEnabled = !finished

      if (finished) {
        state.gameOver = true
        state.gameResults = payload.results
        state.scores = payload.results.map(({ score }) => score)
      }
    },
    updateState: (state, { payload }) => {
      return { ...state, ...payload }
    }
  }
})

export const {
  startShuffle,
  stopShuffle,
  shuffleCards,
  updateCurrentScore,
  disablePicks,
  updateState
} = slice.actions

export default slice.reducer
