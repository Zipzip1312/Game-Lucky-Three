import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'app',
  initialState: {
    screens: ['welcome', 'form', 'invite', 'game'],
    activeScreen: 'welcome',
    enableNav: false,
    rulesAccepted: false,
    form: {},
    formFilled: false,
    invitesLeft: 2,
    doneInviting: false
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
    toggleNav: (state, { payload }) => {
      state.enableNav = payload
    },
    toggleRulesAccepted: (state, { payload }) => {
      state.rulesAccepted = payload
      state.enableNav = payload
    },
    toggleFormFilled: (state, { payload }) => {
      state.formFilled = payload
    },
    handleSendInvite: (state) => {
      --state.invitesLeft
      if (state.invitesLeft === 0) {
        state.doneInviting = true
      }
    }
  }
})

export const {
  setScreen,
  nextScreen,
  prevScreen,
  toggleNav,
  toggleRulesAccepted,
  toggleFormFilled,
  handleSendInvite
} = slice.actions

export default slice.reducer
