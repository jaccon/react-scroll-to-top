# react-scrolltop

React component that adds a 'scroll to top' button fixed on the bottom of the page and shown if not scrolled up.


## Installation

Install the package with either yarn or npm.

With yarn:

```sh
yarn add @jaccon/react-scroll-to-top
```

With npm:

```sh
npm install --save @jaccon/react-scroll-to-top
```

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import ScrollTop from '@jaccon/react-scroll-to-top'

const App = () => (
  ...
  <ScrollTop />
)

ReactDOM.render(<App />, document.getElementById('root'))
```
