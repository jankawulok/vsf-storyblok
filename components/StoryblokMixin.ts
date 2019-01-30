import { mapGetters } from 'vuex'
import * as types from '../store/mutation-types'

export const Storyblok = {
  name: 'Storyblok',
  computed: {
    ...mapGetters({
      story: 'storyblok/storyCurrent'
    })
  },
  mounted () {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          // this.story.content = event.story.content
          console.log(event)
          this.$store.commit('storyblok/STORYBLOK_UPD_CURRENT', event.story)
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  },
  asyncData ({ store, route, context }) {
    return new Promise((resolve, reject) => {
      store.dispatch('storyblok/fetchAsync', {
        value: route.fullPath,
        setCurrent: true
      }).then(data => {
        if (context) context.output.cacheTags.add(`storyblok`)
        resolve(data)
      }).catch(err => {
        console.error(err)
        reject(err)
      })
    })
  },
  methods: {
  }
}