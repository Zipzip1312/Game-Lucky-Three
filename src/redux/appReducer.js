import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPlayerStatus } from 'api'

export const fetchStatus = createAsyncThunk('fetchStatus', async () => {
  return await getPlayerStatus()
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
    form: {
      sex: '',
      birthday: '',
      messenger: '',
      disabled: false
    },
    formFilled: false,
    inviteLink: '',
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
    updateForm: (state, { payload }) => {
      state.form = payload
      let formFiled = true
      for (const key in state.form) {
        if (state.form[key] === '') {
          formFiled = false
        }
      }
      state.formFilled = formFiled
      state.enableNav = formFiled
      // set default inviteLink same as messenger
      if (formFiled) state.inviteLink = state.form.messenger
    },
    disableForm: (state) => {
      state.form.disabled = true
    },
    setInviteLink: (state, { payload }) => {
      state.inviteLink = payload
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
  }
})

export const {
  toggleScreen,
  toggleNav,
  toggleRules,
  toggleRulesAccepted,
  updateForm,
  disableForm,
  setInviteLink,
  handleSendInvite,
  updateState
} = slice.actions

export default slice.reducer
