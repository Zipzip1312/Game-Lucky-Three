import { configureStore } from '@reduxjs/toolkit'
import appReducer from 'redux/appReducer'
import gameReducer from 'redux/gameReducer'
import shuffleMiddleware from 'redux/middleware/shuffleMiddleware'

export default configureStore({
  reducer: {
    app: appReducer,
    game: gameReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([shuffleMiddleware])
})
