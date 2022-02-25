import { useEffect, useState } from 'react'
import { Watch } from 'react-loader-spinner'
import useGetCards from '../hooks/useGetCards'
import GameCard from '../GameCard/GameCard'
import GameResult from '../GameResult/GameResult'

const GameBoard = ({ gameOptions, restartGame }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { gameCards, handleChoice, win } = useGetCards(gameOptions)

  useEffect(() => {
    if (gameCards.length > 0) setIsLoading(false)
  }, [gameCards])

  return (
    <>
      {win && <GameResult restartGame={restartGame} />}
      {isLoading ? (
        <Watch height='100' width='100' color='#ffffff40' ariaLabel='loading' />
      ) : (
        <div className='gameBoard'>
          {gameCards.map((card) => (
            <GameCard
              key={card.uniqueId}
              card={card}
              handleChoice={handleChoice}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default GameBoard
