import axios from 'axios'
import history from '../../history'
import { setError } from 'redux/appReducer'

const apiErrorMiddleware = (store) => (next) => (action) => {
  /** Handle errors */
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      let code, message

      try {
        code = error.response.status
        message = error.response.data
      } catch (e) {
        code = 500
        message = 'Сталася помилка, щось пішло не так. спробуй пізніше'
      } finally {
        store.dispatch(setError({ code, message }))
        history.push('error')

        return Promise.reject(error)
      }
    }
  )

  next(action)
}

export default apiErrorMiddleware
