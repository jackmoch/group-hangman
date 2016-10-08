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
    case "NEW_GAME":
      return Object.assign({}, state, {id: action.data})
    case "GAMES_LIST":
      return Object.assign({}, state, {gamesList: action.data})
    default:
      return state
  }
}
