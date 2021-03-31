const middleware = (store) => (next) => (action) => {
  next(action)
  console.log('Action: ', action)
}

export default middleware
