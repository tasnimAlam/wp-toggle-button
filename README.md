# wp-toggle-button

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/wp-toggle-button.svg)](https://www.npmjs.com/package/wp-toggle-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save wp-toggle-button
```

## Usage

```jsx
import React, { Component } from 'react'

import ToggleButton from 'wp-toggle-button'
import 'wp-toggle-button/dist/index.css'

class Example extends Component {
  render() {
    return (
      <ToggleButton
        options={[
          { label: 'one', value: "1" },
          { label: 'two', value: "2" }
        ]}
        onChange={(value) => console.log('value is ', value)}
      />
    )
}
```

## License

MIT © [tasnimAlam](https://github.com/tasnimAlam)
