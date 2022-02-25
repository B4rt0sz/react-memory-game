import images from '../data/data'

import { useEffect, useState } from 'react'

const PACES = {
  easy: 1100,
  medium: 900,
  hard: 700,
  expert: 500,
}

const useGetImages = (gameOptions) => {
  const [score, setScore] = useState(0)
  const [win, setWin] = useState(false)
  const [gameCards, setGameCards] = useState([])
  const [selectedCards, setSelectedCards] = useState([])

  const flipCard = (uniqueCardId) => {
    const flippedCards = gameCards.map((card) => {
      if (card.uniqueId === uniqueCardId) {
        card.shown = true
      }
      if (card.shown)
        setSelectedCards((prevState) => [...prevState, card.uniqueId])

      return card
    })
    setGameCards(flippedCards)
  }

  const handleChoice = (uniqueCardId) => {
    if (selectedCards.length < 2) flipCard(uniqueCardId)
  }

  const updateScore = () => {
    setScore((prevState) => prevState + 1)
  }

  const checkMatch = () => {
    const visibleCards = gameCards.filter(
      (card) => selectedCards.indexOf(card.uniqueId) !== -1
    )
    const matched = visibleCards[0]?.id === visibleCards[1]?.id
    const shuffleCards = gameCards.map((card) => {
      if (selectedCards.indexOf(card.uniqueId) !== -1) {
        card.shown = false
        card.matched = matched
      }
      return card
    })
    setTimeout(
      () => {
        setGameCards(shuffleCards)
        setSelectedCards([])
        if (matched) updateScore()
      },
      matched ? 100 : PACES[gameOptions.pace]
    )
  }

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
    const shuffledDataCards = shuffleArray(images)
    const numberOfCards = -gameOptions?.cardsCount
    const gameCards = shuffledDataCards.slice(numberOfCards / 2)
    const cardsForGame = [...gameCards, ...gameCards]
    const shuffledCardsForGame = shuffleArray(cardsForGame).map((card) => ({
      ...card,
      uniqueId: Math.random(),
    }))
    setGameCards(shuffledCardsForGame)
  }

  useEffect(() => {
    if (!gameOptions) return
    getGameCards()
  }, [gameOptions])

  useEffect(() => {
    if (selectedCards.length >= 2) {
      checkMatch()
    }
  }, [selectedCards])

  useEffect(() => {
    if (gameCards.length && score === gameCards.length / 2) setWin(true)
  }, [score])

  return { gameCards, handleChoice, win }
}

export default useGetImages
