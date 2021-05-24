import { createSlice } from '@reduxjs/toolkit'
import history from '../history'

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
    invitesLeft: 2
  },
  reducers: {
    toggleScreen: (state) => {
      let activeScreen = 0
      state.rulesAccepted && activeScreen++
      state.formFilled && activeScreen++
      state.invitesLeft < 1 && activeScreen++
      history.push(state.screens[activeScreen])
      state.enableNav = false
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
    },
    toggleFormFilled: (state, { payload }) => {
      state.formFilled = payload
      state.enableNav = payload
    },
    handleSendInvite: (state) => {
      state.invitesLeft = state.invitesLeft - 1
    }
  }
})

export const {
  togglePending,
  toggleScreen,
  toggleNav,
  toggleRules,
  toggleRulesAccepted,
  toggleFormFilled,
  handleSendInvite
} = slice.actions

export default slice.reducer

export function getPlayerStatus() {
  return async (dispatch) => {
    await sleep(1500)
    dispatch(togglePending())
  }
}
