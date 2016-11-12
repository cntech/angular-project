import { Injectable, Component, NgZone } from '@angular/core'

import { Store, createStore, Unsubscribe } from 'redux'

import reducer from './reducers'

@Injectable()
export class StoreService {
  private reduxStore: Store<any>
  private reduxUnsubscribe: Unsubscribe
  constructor() {
    this.reduxStore = createStore(reducer)
    window['setMainText'] = (mainText) => {
      this.reduxStore.dispatch({
        type: 'SetMainText',
        mainText: mainText
      })
    }
  }
  subscribe(component: Component, ngZone: NgZone): () => void {
    this.reduxUnsubscribe = this.reduxStore.subscribe(() => ngZone.run(() => {
      console.log('inform angular')
    }))
    return () => this.reduxUnsubscribe()
  }
  getState(): any {
    return this.reduxStore.getState()
  }
}
