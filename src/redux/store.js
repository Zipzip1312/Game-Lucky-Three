import { configureStore } from '@reduxjs/toolkit'
import appReducer from 'redux/appReducer'
import gameReducer from 'redux/gameReducer'
import apiMiddleware from 'redux/middleware/apiMiddleware'
import historyMiddleware from 'redux/middleware/historyMiddleware'
import shuffleMiddleware from 'redux/middleware/shuffleMiddleware'

export default configureStore({
  reducer: {
    app: appReducer,
    game: gameReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      apiMiddleware,
      historyMiddleware,
      shuffleMiddleware
    ])
})
