import { useState } from 'react'

import GameTitle from './components/GameTitle/GameTitle'
import GameSettings from './components/GameSettings/GameSettings'
import useGetImages from './components/hooks/useGetImages'

import './styles/index.scss'

function App() {
  const [gameOptions, setGameOptions] = useState(null)
  const gameCards = useGetImages(gameOptions)

  console.log({ gameCards })

  const startGame = (options) => {
    setGameOptions(options)
  }

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
