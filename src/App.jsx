import { useState } from 'react'

import GameTitle from './components/GameTitle/GameTitle'
import GameSettings from './components/GameSettings/GameSettings'

import './styles/index.scss'

function App() {
  const [gameOptions, setGameOptions] = useState([])

  const startGame = (options) => {
    setGameOptions(options)
  }

  console.log(gameOptions)

  return (
    <div className='wrapper'>
      <div className='wrapper__container'>
        <GameTitle />
        <GameSettings startGame={startGame} />
      </div>
    </div>
  )
}

export default App
