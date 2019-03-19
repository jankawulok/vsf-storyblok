import Vue from 'vue'
import { StoryblokState } from '../types/StoryblokState'
import { ActionTree } from 'vuex';
import * as types from './mutation-types'
import config from 'config'
import { Logger } from '@vue-storefront/core/lib/logger';

export const actions: ActionTree<StoryblokState, any> = {
  fetchStory (context, { route }) {
    return new Promise ((resolve, reject) => {
      Logger.info('Fetching story data asynchronously' , 'storyblok', route)()

      Vue.prototype.$storyapi.get('cdn/stories' + route, {
        version: config.storyblok.version
      }).then((response) => {
        context.commit(types.STORYBLOK_UPD_CURRENT, {route: route, story: response.data.story})
        resolve(response.data.story)
      }).catch(err => {
        context.commit(types.STORYBLOK_UPD_CURRENT, {route: route, story: {}})
        console.error(err)
        reject()
      })
      
    })
  },
  /**
   * Reset current story
   * @param {Object} context
   */
  reset(context) {
    context.commit(types.STORYBLOK_RESET_CURRENT)
  }
}
