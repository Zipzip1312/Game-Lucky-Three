import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'game',
  initialState: {
    screens: ['welcome', 'rules', 'form', 'invite', 'game', 'score'],
    activeScreen: 'game',
    finishedPlaying: false,
    gameStarted: false,
    scores: [1000, 500, 250, 250, 100, 100, 50, 50, 25, 25, 10, 10, 0, 0, 0, 0],
    currentScore: {}
  },
  reducers: {
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
    }
  }
})

export const { setScreen, nextScreen, prevScreen, toggleGame } = slice.actions

export default slice.reducer

export function fetchData() {
  return async (dispatch) => {
    dispatch(setScreen('game'))
  }
}
