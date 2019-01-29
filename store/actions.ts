import Vue from 'vue'
import { StoryblokState } from '../types/StoryblokState'
import { ActionTree } from 'vuex';
import * as types from './mutation-types'
import config from 'config'
import { Logger } from '@vue-storefront/core/lib/logger';

export const actions: ActionTree<StoryblokState, any> = {
  /**
  * Load story data
  */ 
  fetchStoryAsync(context, { value, setcurrent = true }) {
    console.log('Storyblok is being fetched ...')
    Logger.info('Fetching story data asynchronously' , 'storyblok', value)()
    Vue.prototype.$storyblok.get('cdn/stories' + value, {
      version: config.storyblok.version
    }).then((response) => {
      context.commit(types.STORYBLOK_UPD_CURRENT, response)
    }).catch((err) => {
      console.error(err)
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
