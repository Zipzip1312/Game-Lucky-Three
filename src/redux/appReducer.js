import { createSlice } from '@reduxjs/toolkit'

const sleep = (m) => new Promise((r) => setTimeout(r, m))

export const slice = createSlice({
  name: 'app',
  initialState: {
    pending: true,
    screens: ['welcome', 'form', 'invite', 'game'],
    activeScreen: 'welcome',
    enableNav: false,
    showRules: false,
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
    togglePending: (state) => {
      state.pending = false
    },
    toggleNav: (state, { payload }) => {
      state.enableNav = payload
    },
    toggleRules: (state) => {
      state.showRules = !state.showRules
    },
    toggleRulesAccepted: (state) => {
      state.rulesAccepted = !state.rulesAccepted
      state.enableNav = state.rulesAccepted
    },
    toggleFormFilled: (state, { payload }) => {
      state.formFilled = payload
      state.enableNav = payload
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
  togglePending,
  setScreen,
  nextScreen,
  prevScreen,
  toggleNav,
  toggleRules,
  toggleRulesAccepted,
  toggleFormFilled,
  handleSendInvite
} = slice.actions

export default slice.reducer

export function getPlayerStatus() {
  return async (dispatch) => {
    await sleep(1000)
    dispatch(togglePending())
  }
}
