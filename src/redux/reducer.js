import { createSlice } from '@reduxjs/toolkit'
import shuffle from 'lodash.shuffle'

const sleep = (m) => new Promise((r) => setTimeout(r, m))

export const slice = createSlice({
  name: 'game',
  initialState: {
    player: '',
    picksAvailable: 3,
    picksEnabled: false,
    screens: ['welcome', 'rules', 'form', 'invite', 'game', 'score'],
    activeScreen: 'game',
    shuffling: false,
    shuffleDuration: 1500,
    timesToShuffle: 1,
    finishedPlaying: false,
    scores: [1000, 500, 250, 250, 100, 100, 50, 50, 25, 25, 10, 10, 0, 0, 0, 0],
    indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], // for shuffling animation and further score select
    currentScore: [],
    selectedCards: [],
    gameResults: [],
    resettable: true
  },
  reducers: {
    setPlayer: (state, { payload }) => {
      state.player = payload
    },
    setScreen: (state, { payload }) => {
      state.activeScreen = payload
    },
    nextScreen: (state) => {
      const activeScreenIdx = state.screens.indexOf(state.activeScreen)
      if (activeScreenIdx >= 0 && activeScreenIdx < state.screens.length - 1) {
        state.activeScreen = state.screens[activeScreenIdx + 1]
      }
    },
    prevScreen: (state) => {
      const activeScreenIdx = state.screens.indexOf(state.activeScreen)
      if (activeScreenIdx > 0 && activeScreenIdx <= state.screens.length) {
        state.activeScreen = state.screens[activeScreenIdx - 1]
      }
    },
    startShuffle: (state) => {
      state.shuffling = true
      if (state.resettable) {
        state.finishedPlaying = false
        state.currentScore = []
        state.selectedCards = []
      }
    },
    stopShuffle: (state) => {
      state.picksEnabled = true
      if (state.resettable) {
        state.shuffling = false
      }
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
      state.selectedCards.push(payload.index)
      state.picksEnabled = state.currentScore.length < state.picksAvailable

      if (!state.picksEnabled) {
        state.finishedPlaying = true
        // Set game results
        for (let i = 0; i < state.indexes.length; i++) {
          state.gameResults.push({
            score: state.scores[i],
            won: state.selectedCards.includes(i)
          })
        }
      }
    }
  }
})

export const {
  setPlayer,
  setScreen,
  nextScreen,
  prevScreen,
  startShuffle,
  stopShuffle,
  shuffleScores,
  updateCurrentScore,
  disablePicks
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
