import { mapGetters } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  name: 'Storyblok',
  computed: {
    ...mapGetters({
      story: 'storyblok/story'
    })
  },
  mounted () {
    if(!this.story)
    {
      this.fetchStory()
    }
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story = event.story
        }
      } else if (!event.slugChanged) {
        window.location.reload()
      }
    })
  },
  serverPrefetch () {
    return this.fetchStory()
  },
  methods: {
    fetchStory () {
      return this.$store.dispatch('storyblok/fetchStory', {
        // value: this.$route.fullPath
        route: '/home'
      })
    }
  }
}