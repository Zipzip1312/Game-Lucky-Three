import { createSlice } from '@reduxjs/toolkit'

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
    // currentScore: []
    currentScore: [
      { index: 2, score: 1000 },
      { index: 10, score: 25 },
      { index: 8, score: 0 }
    ]
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
  return async (dispatch) => {
    await sleep(300)
    const response = {
      score: 1000
    }
    dispatch(updateCurrentScore({ index, score: response.score }))
    return response.score
  }
}
