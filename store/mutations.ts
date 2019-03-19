import { MutationTree } from 'vuex'
import * as types from './mutation-types'

export const mutations: MutationTree<any> = {
  [types.STORYBLOK_UPD_CURRENT] (state, {route, story}) {
    state.story = story
  },
  [types.STORYBLOK_RESET_CURRENT] (state,  {route}) {
    state.story = {}
  }
}