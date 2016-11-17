import { Reducer, combineReducers } from 'redux'
import texts from './texts'
import State from '../states'

const app: Reducer<State> = combineReducers<State>({
  texts: texts
})

export default app
