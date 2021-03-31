import { configureStore } from '@reduxjs/toolkit'
import reducer from 'redux/reducer'
import middleware from 'redux/middleware'

export default configureStore({
  reducer: {
    app: reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware)
})
