import { createSlice } from '@reduxjs/toolkit'
import shuffle from 'lodash.shuffle'

const sleep = (m) => new Promise((r) => setTimeout(r, m))

export const slice = createSlice({
  name: 'game',
  initialState: {
    player: '',
    picks: 3,
    screens: ['welcome', 'rules', 'form', 'invite', 'game', 'score'],
    activeScreen: 'game',
    gameStarted: false,
    finishedPlaying: false,
    scores: [1000, 500, 250, 250, 100, 100, 50, 50, 25, 25, 10, 10, 0, 0, 0, 0],
    indexes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    currentScore: []
    // currentScore: [
    //   { index: 2, score: 1000 },
    //   { index: 10, score: 25 },
    //   { index: 8, score: 0 }
    // ]
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
    toggleGame: (state) => {
      state.gameStarted = !state.gameStarted
    },
    shuffleScore: (state) => {
      state.scores = shuffle(state.scores)
      state.indexes = shuffle(state.indexes)
    },
    updateCurrentScore: (state, { payload }) => {
      state.currentScore.push(payload)
      // if (state.currentScore.length === state.picks) {
      //   state.finishedPlaying = true
      // }
    }
  }
})

export const {
  setPlayer,
  setScreen,
  nextScreen,
  prevScreen,
  toggleGame,
  shuffleScore,
  updateCurrentScore
} = slice.actions

export default slice.reducer

export function registerPlayer() {
  return async (dispatch) => {
    await sleep(500)
    const response = {
      verification: 'CoIenJl'
    }
    dispatch(setPlayer(response.verification))
  }
}

export function makePick(index) {
  return async (dispatch, getState) => {
    await sleep(300)
    const score = getState().game.scores[index]
    dispatch(updateCurrentScore({ index, score }))
    return score
  }
}
