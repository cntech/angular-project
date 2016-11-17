import { Injectable, Component, NgZone } from '@angular/core'

import { Store, createStore, Unsubscribe } from 'redux'

import reducer from './reducers'
import State from './states'
import { setMainText, SetMainText } from './actions'

@Injectable()
export class StoreService {
  private reduxStore: Store<State>
  private reduxUnsubscribe: Unsubscribe
  constructor() {
    this.reduxStore = createStore(reducer)
    window['setMainText'] = (mainText: string) => {
      this.reduxStore.dispatch(setMainText({ mainText: mainText }))
    }
  }
  subscribe(component: Component, ngZone: NgZone): () => void {
    this.reduxUnsubscribe = this.reduxStore.subscribe(() => ngZone.run(() => {
      console.log('inform angular')
    }))
    return () => this.reduxUnsubscribe()
  }
  getState(): State {
    return this.reduxStore.getState()
  }
}
