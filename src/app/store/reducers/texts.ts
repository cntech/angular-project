import { Reducer } from 'redux'

const texts: Reducer<any> = (state = {}, action) => {
  switch(action.type) {
    case 'SetMainText':
      return Object.assign({}, state, {
        mainText: action.mainText
      })
    default:
      return state
  }
}

export default texts
