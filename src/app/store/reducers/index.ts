import { Reducer, combineReducers } from 'redux'
import texts from './texts'

const app: Reducer<any> = combineReducers({
  texts: texts
})

export default app
