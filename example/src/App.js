import React from 'react'

import ToggleButton from 'wp-toggle-button'
import 'wp-toggle-button/dist/index.css'

const App = () => {
  return (
    <ToggleButton
      options={[
        { label: 'one', value: "1" },
        { label: 'two', value: "2" }
      ]}
      onChange={() => console.log('changing...')}
    />
  )
}

export default App
