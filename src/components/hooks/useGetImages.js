import images from '../data/data'

import { useEffect, useState } from 'react'

const useGetImages = (gameOptions) => {
  const [gameCards, setGameCards] = useState([])

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }
    return array
  }

  const getGameCards = () => {
    const shuffleAllCards = shuffleArray(images)
    const numberOfCards = -gameOptions?.cardsCount
    const gameCards = shuffleAllCards.slice(numberOfCards / 2)
    setGameCards(gameCards)
  }

  useEffect(() => {
    if (!gameOptions) return
    getGameCards()
  }, [gameOptions])

  return gameCards
}

export default useGetImages
