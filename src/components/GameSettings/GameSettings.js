import { useState } from 'react'
import CardCounter from './CardCounter'
import GamePace from './GamePace'

const initialCardsNumber = 12
const paceLevels = ['easy', 'medium', 'hard', 'expert']

const GameSettings = ({ startGame }) => {
  const [pace, setPace] = useState(paceLevels[0])
  const [cardsCount, setCardsCount] = useState(initialCardsNumber)
  const handleChange = (e) => setPace(e.target.value)

  const onStartGame = () => {
    startGame({ cardsCount, pace })
  }

  return (
    <>
      <div className='gameSettings'>
        <h2 className='gameSettings__bigTitle'>Settings</h2>
        <h3 className='gameSettings__smallTitle'>Amout of cards:</h3>
        <div className='gameSettings__settingsCounter'>
          <CardCounter cardsCount={cardsCount} onClick={setCardsCount} />
        </div>
        <h3 className='gameSettings__smallTitle'>Pace:</h3>
        <div className='gameSettings__settingsPace'>
          {paceLevels.map((item) => (
            <GamePace
              key={item}
              name={item}
              selectedItem={pace}
              onChange={handleChange}
            />
          ))}
        </div>
        <button className='gameSettings__button' onClick={onStartGame}>
          Start
        </button>
      </div>
    </>
  )
}

export default GameSettings
