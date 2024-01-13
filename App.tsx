import React, { type FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import Navigation from './src/navigation'
// import { type JSX } from 'react'

const App: FC = () => {
  return (
      <>
          <StatusBar style={'auto'} />
        <Navigation />
      </>
  )
}

export default App
