import { useState } from 'react'

import GameTitle from './components/GameTitle/GameTitle'
import GameSettings from './components/GameSettings/GameSettings'
import GameBoard from './components/GameBoard/GameBoard'

import './styles/index.scss'

function App() {
  const [gameOptions, setGameOptions] = useState(null)

  const startGame = (options) => {
    setGameOptions(options)
  }

  const restartGame = () => {
    setGameOptions(null)
  }

  return (
    <div className='wrapper'>
      <div className='wrapper__container'>
        <GameTitle />
        {!gameOptions ? (
          <GameSettings startGame={startGame} />
        ) : (
          <GameBoard gameOptions={gameOptions} restartGame={restartGame} />
        )}
      </div>
    </div>
  )
}

export default App
