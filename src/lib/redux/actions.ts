import { BoxSize } from 'lib/geometry/common'

// Action Types
export const SET_SELECTED_SEED = 'SET_SELECTED_SEED'
export const SET_SELECTED_MODEL = 'SET_SELECTED_MODEL'
export const SET_SELECTED_BOX_SIZE = 'SET_SELECTED_BOX_SIZE'

// Action Creators
export const actions = {

  setSelectedSeed: (value: string) => {
    return { type: SET_SELECTED_SEED, value }
  },

  setSelectedModel: (value: string) => {
    return { type: SET_SELECTED_MODEL, value }
  },

  setSelectedBoxSize: (value: BoxSize) => {
    return { type: SET_SELECTED_BOX_SIZE, value }
  }

}
