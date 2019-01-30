# Storyblok module for Vue Storefront

 Storyblok module for [vue-storefront](https://github.com/DivanteLtd/vue-storefront).

## Installation

```shell
git clone git@github.com:jankawulok/vsf-storyblok.git ./vue-storefront/src/modules/storyblok
```

Add to your `config/local.json` and configure the `stripe.apiKey` to point to your Stripe details.

```json
"storyblok": {
    "accessToken": "my_access_token",
    "version": "draft or published"
  }
```

## Registration of module

Add to `./src/modules/index.ts`

```js
...
import { Storyblok } from './storyblok';

export const registerModules: VueStorefrontModule[] = [
  ...
  Storyblok
]
```

## Integration with your page

Add mixin

```js
import StoryblokMixin from 'src/modules/storyblok/components/StoryblokMixin'

export default {
  mixins: [..., StoryblokMixin],
```

Then story is fetch based on url path and available via `story` prop.
