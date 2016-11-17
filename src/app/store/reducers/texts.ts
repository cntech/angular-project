import { Reducer, Action as ReduxAction } from 'redux'
import { isType, Action } from '../lib/actions'
import TextsState from '../states/texts'
import { setMainText, SetMainText } from '../actions'

const texts: Reducer<TextsState> = (state: TextsState = {}, action: ReduxAction) => {
  if(isType(action, setMainText)) {
    return Object.assign({}, state, {
      mainText: action.payload.mainText
    })
  }
  return state
}

export default texts
