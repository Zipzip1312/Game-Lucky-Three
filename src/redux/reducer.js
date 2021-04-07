import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'game',
  initialState: {
    screens: ['welcome', 'rules', 'form', 'invite', 'game', 'score'],
    activeScreen: 'game',
    data: undefined
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
    }
  }
})

export const { setScreen, nextScreen, prevScreen } = slice.actions

export default slice.reducer

export function fetchData() {
  return async (dispatch) => {
    dispatch(setScreen('game'))
  }
}
