const GameResult = ({ restartGame }) => {
  return (
    <div className='gameResult'>
      <p>You won!</p>
      <button className='gameResult__button' onClick={restartGame}>
        New Game
      </button>
    </div>
  )
}

export default GameResult
