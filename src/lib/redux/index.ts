import * as _ from 'lodash'
import { Subject, Observable } from 'rxjs'
import { createStore, Action } from 'redux'
import { IStore, IStoreState } from './store'
import reducers from './reducers'

const store = createStore<IStoreState, Action, {}, {}>(reducers)
const subject = new Subject<IStoreState>()
const observable = subject.asObservable()

store.subscribe(() => {
  const state = store.getState()
  subject.next(state)
})

export class ReduxStore implements IStore {

  dispatch(action: Action) {
    store.dispatch(action)
  }

  private getObservable() {
    const state = store.getState()
    return observable.startWith(state)
  }

  private getStoreItem(item: any) {
    return this.getObservable()
      .map(store => store[item])
      .filter(value => value !== null)
      .distinctUntilChanged(_.isEqual)
  }

  getState() {
    return this.getObservable()
  }

  getSelectedSeed() {
    return this.getStoreItem('selectedSeed')
  }

  getSelectedModel() {
    return this.getStoreItem('selectedModel')
  }

  getSelectedBoxSize() {
    return this.getStoreItem('selectedBoxSize')
  }

}

export * from './actions'
export * from './store'
