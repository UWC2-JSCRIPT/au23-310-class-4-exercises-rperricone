/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  const deck = []
  const suits = ['hearts', 'spades', 'clubs', 'diamonds']

  for (let index = 0; index < suits.length; index++) {
    console.log(suits[index])
    // create an array of 13 objects
    for (let j = 1; j <= 13; j++) {
      let displayVal = j + ''

      if (j == 11) {
        displayVal = 'Jack'


      }
      if (j == 12) {
        displayVal = 'Queen'

      }

      if (j == 13) {
        displayVal = 'King'
      }
      if (j == 1) {
        displayVal = 'Ace'
      }
      deck.push({ val: j, suit: suits[index], displayVal: displayVal })

    }

    // for each loop, push a card object to the deck

    // special cases for when j > 10

  }
  return deck
}
// CHECKS
const deck = getDeck()
console.log(`Deck length equals 52? ${deck.length === 52}`)

const randomCard = deck[Math.floor(Math.random() * 52)]

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === 'number'
console.log(`Random card has val? ${cardHasVal}`)

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === 'string'
console.log(`Random card has suit? ${cardHasSuit}`)

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string'
console.log(`Random card has display value? ${cardHasDisplayVal}`)

module.exports = {getDeck}