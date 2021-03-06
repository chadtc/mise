# Mise (_en place_)

[![Build Status](https://travis-ci.org/blueseph/mise.svg?branch=develop)](https://travis-ci.org/blueseph/mise) [![codebeat badge](https://codebeat.co/badges/e3012ee9-f823-423a-a40b-ca759768952c)](https://codebeat.co/projects/github-com-blueseph-mise-develop) [![codecov](https://codecov.io/gh/blueseph/mise/branch/develop/graph/badge.svg)](https://codecov.io/gh/blueseph/mise)



[Mise](https://en.wikipedia.org/wiki/Mise_en_place) is a fully-featured front-end application library with built-in state management. Mise uses component-based architecture to promote [constructing elegant hierarchies for maximum code reuse and extensibility](http://siliconvalleyism.com/silicon-valley-quote.php?id=206). By explicitly manipulating your state _only_ via actions, code paths are clearly defined and change in predictable ways. Applications lend themselves to being highly and rigorously testable.

Mise has zero dependencies and strives for performance.

* VDOM managed updates for fast rendering.
* Easy state-management.
* Highly testable.
* Small file size (2.25kb minified, 1028 bytes gzipped)

#### Installation (coming soon)
```
npm i mise
```

In your actual project

```javascript
import { dom, component } from 'mise';
```

Or, if you prefer to use umd

```javascript
<script async src="https://unpkg.com/mise"></script>
<script type="javascript">
  const { dom, component } = mise;
</script>
```

Mise doesn't require compilation to run, but you won't be able to use JSX until you do.

##### Example
```javascript
/** @jsx dom */

import { dom, component } from 'mise';

component({
  template: state => actions => (
    <div>
      <span>{state.counter}</span>
      <button onclick={actions.increment}>+</button>
      <button onclick={actions.decrement}>-</button>
    </div>
  ),
  state: {
    counter: 0,
  },
  actions: {
    increment: state => ({ counter: state.counter + 1 }),
    decrement: state => ({ counter: state.counter - 1 }),
  },
  root: document.querySelector('#app'),
});
```

### FAQs

**Do I have to use `/** @jsx dom */` on every file?**

You can add the the `transform-react-jsx` plugin to your webpack config.

```javascript
{
  "plugins": {
    [
      "transform-react-jsx", {
        "pragma": "dom",
      }
    ]
  }
}
```

You'll still have to `import dom` just like you would `import React`, though.

**Why doesn't installing Mise via npm work?**

Mise on npm currently isn't this package. We're trying to hash it out with the current owner of the mise namespace. Sorry for the inconvenience!
