import { combineReducers, Action, AnyAction } from 'redux'
import { IStoreState } from './store'
import { BoxSize } from 'lib/geometry/common'

import {
  SET_SELECTED_SEED,
  SET_SELECTED_MODEL,
  SET_SELECTED_BOX_SIZE
} from './actions'

function selectedSeed(state = null, action: Action) {
  switch (action.type) {

    case SET_SELECTED_SEED: {
      const value = action['value'] as string
      return value
    }

    default:
      return state
  }
}

function selectedModel(state = null, action: Action) {
  switch (action.type) {

    case SET_SELECTED_MODEL: {
      const value = action['value'] as string
      return value
    }

    default:
      return state
  }
}

function selectedBoxSize(state = null, action: Action) {
  switch (action.type) {

    case SET_SELECTED_BOX_SIZE: {
      const value = action['value'] as BoxSize
      return Object.assign({}, state, value)
    }

    default:
      return state
  }
}

const reducers = combineReducers<IStoreState>({
  selectedSeed,
  selectedModel,
  selectedBoxSize
})

export default reducers
