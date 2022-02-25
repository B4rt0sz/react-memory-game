const GameCard = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card.uniqueId)
  }

  return (
    <div className='gameCard'>
      <div className={card.shown || card.matched ? 'gameCard__flipped' : null}>
        <img className='gameCard__front' src={card.src} alt='card front' />
        <img
          className='gameCard__back'
          src='/images/cover.jpg'
          alt='card back'
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default GameCard
