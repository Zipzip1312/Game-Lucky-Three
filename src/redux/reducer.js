import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'app',
  initialState: {
    data: undefined
  },
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload
    }
  }
})

export const { setData } = slice.actions

export default slice.reducer

export function fetchData() {
  return async (dispatch) => {
    dispatch(setData('data'))
  }
}
