const cardStep = 4

const CardCounter = ({ cardsCount, onClick }) => {
  const onDecrement = (e) => {
    const cardNumber = cardsCount - cardStep
    if (cardNumber >= 4) onClick(cardNumber)
  }
  const onIncrement = (e) => {
    const cardNumber = cardsCount + cardStep
    if (cardNumber <= 24) onClick(cardNumber)
  }

  return (
    <div className='cardCounter'>
      <button className='cardCounter__minus' onClick={onDecrement}>
        -
      </button>
      <span className='cardCounter__quantity'>{cardsCount}</span>
      <button className='cardCounter__plus' onClick={onIncrement}>
        +
      </button>
    </div>
  )
}

export default CardCounter
