import { configureStore } from '@reduxjs/toolkit'
import reducer from 'redux/reducer'
import middleware from 'redux/middleware'

export default configureStore({
  reducer: {
    game: reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware)
})
