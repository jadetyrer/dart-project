import React from 'react'
import Counter from './components/Counter'
import { GlobalStyle } from './components/StyledComponents'

const App = () => {
  return (
    <div >
      <GlobalStyle />
      <Counter />
    </div>
  )
}

export default App
