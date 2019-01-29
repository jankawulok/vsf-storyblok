import { MutationTree } from 'vuex'
import * as types from './mutation-types'

export const mutations: MutationTree<any> = {
  [types.STORYBLOK_UPD_CURRENT] (state, payload) {
    state.story = payload.data.story
  },
  [types.STORYBLOK_RESET_CURRENT] (state) {
    state.story = {}
  }
}