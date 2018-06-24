import { Action } from 'redux'
import { Observable } from 'rxjs'
import { BoxSize } from 'lib/geometry/common'

export interface IStore {
  dispatch(action: Action)
  getState(): Observable<IStoreState>
  getSelectedSeed(): Observable<string>
  getSelectedModel(): Observable<string>
  getSelectedBoxSize(): Observable<BoxSize>
}

export interface IStoreState {
  selectedSeed: string
  selectedModel: string
  selectedBoxSize: BoxSize
}
