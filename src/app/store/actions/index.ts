import actionCreatorFactory from '../lib/actions'
const actionCreator = actionCreatorFactory()

export interface SetMainText {
  mainText: string
}

export const setMainText = actionCreator<SetMainText>('SetMainText')
