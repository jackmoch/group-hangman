export const userReducer = (state = {}, action) => {

  switch(action.type) {
    case "GUESS_LETTER":
      state = {
        ...state,
        letter: action.payload,
        turns: state.turns - action.incrementOrDecrement
      }
      return state
    case "NEW_GAME":
      return Object.assign({}, state, {gameState: action.data})
    case "GAME_UPDATE":
      return Object.assign({}, state, {gameState: action.data})
    default:
      return state
  }
}

export const clientReducer = (state = {}, action) => {
  switch(action.type) {
    case "GAMES_LIST":
      return Object.assign({}, state, {gamesList: action.data})
    default:
      return state
  }
}
