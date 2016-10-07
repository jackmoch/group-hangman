export const setName = name => {
  return {
    type: 'HELLO',
    payload: name
  }
}
export const guessLetter = letter => {
  return {
    type: 'GUESS_LETTER',
    payload: letter,
    incrementOrDecrement: 1
  }
}
export const serverTest = () => {
  return {
    type: 'server/hello',
    data: 'hello!'
  }
}
