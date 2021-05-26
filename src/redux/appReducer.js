import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { status } from 'mock'

const sleep = (m) => new Promise((r) => setTimeout(r, m))
export const fetchStatus = createAsyncThunk('fetchStatus', async () => {
  await sleep(1000)
  return status
})

export const slice = createSlice({
  name: 'app',
  initialState: {
    pending: true,
    screens: ['welcome', 'form', 'invite', 'game'],
    activeScreen: undefined,
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
      state.activeScreen = state.screens[activeScreen]
      state.enableNav = false
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
    },
    updateState: (state, { payload }) => {
      return { ...state, ...payload }
    }
  },
  extraReducers: {
    [fetchStatus.pending]: (state) => {
      state.pending = true
    },
    [fetchStatus.fulfilled]: (state) => {
      state.pending = false
    }
    // [fetchStatus.rejected]: (state, action) => {
    //   state.pending = true
    // }
  }
})

export const {
  toggleScreen,
  toggleNav,
  toggleRules,
  toggleRulesAccepted,
  toggleFormFilled,
  handleSendInvite,
  updateState
} = slice.actions

export default slice.reducer
