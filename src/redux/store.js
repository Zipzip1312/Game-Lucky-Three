import { configureStore } from '@reduxjs/toolkit'
import reducer from 'redux/reducer'
import HistoryMiddleware from 'redux/middleware/HistoryMiddleware'
import ShuffleMiddleware from 'redux/middleware/ShuffleMiddleware'

export default configureStore({
  reducer: {
    game: reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([HistoryMiddleware, ShuffleMiddleware])
})
