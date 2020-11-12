# Stimulus Character Counter

[![](https://img.shields.io/npm/dt/stimulus-character-counter.svg)](https://www.npmjs.com/package/stimulus-character-counter)
[![](https://img.shields.io/npm/v/stimulus-character-counter.svg)](https://www.npmjs.com/package/stimulus-character-counter)
[![](https://github.com/stimulus-components/stimulus-character-counter/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-character-counter)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-character-counter.svg)](https://github.com/stimulus-components/stimulus-character-counter)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7ef669f5-d255-4a59-8461-5b2360d1674b/deploy-status)](https://stimulus-character-counter.netlify.com)

## Getting started

A Stimulus controller that counts the number of characters in any input fields.

## Installation

```bash
$ yarn add stimulus-character-counter
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import CharacterCounter from "stimulus-character-counter"

const application = Application.start()
application.register("character-counter", CharacterCounter)
```

## Usage

In your view:
```html
<div data-controller="character-counter">
  <textarea data-target="character-counter.input"></textarea>

  <p>
    There are <strong data-target="character-counter.counter"></strong> characters in this textarea.
  </p>
</div>
```

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus component:

```js
import CharacterCounter from "stimulus-character-counter"

export default class extends CharacterCounter {
  connect() {
    super.connect()
    console.log("Do what you want here.")

    this.count // Will return the number of characters in the input/texterea.
  }
}
```

These controllers will automatically have access to targets defined in the parent class.

If you override the `connect`, `disconnect` or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Project setup
```bash
$ yarn install
$ yarn dev
```

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
