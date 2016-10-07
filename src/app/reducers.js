export const userReducer = (state = {
  letter: '',
  word: 'dracula',
  turns: 6,
  guessArray: []
}, action) => {

  switch(action.type) {
    case "GUESS_LETTER":
      state = {
        ...state,
        letter: action.payload,
        turns: state.turns - action.incrementOrDecrement
      }
      return state
    default:
      return state
  }
}

export const clientReducer = (state = {}, action) => {
  switch(action.type) {
    case "MESSAGE":
      return Object.assign({}, {message: action.data})
    case "NEW_GAME":
      return Object.assign({}, {id: action.data})
    default:
      return state
  }
}
