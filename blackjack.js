const { getDeck } = require('./createCardDeck')


const blackjackDeck = getDeck();
console.log(blackjackDeck, 'deck')
/**
 * Represents a card player (including dealer).
 * @constructor
 * @param {string} name - The name of the player
 */
class CardPlayer {
    constructor(name) {
        this.name = name
    }
};                                      //TODO Done

// CREATE TWO NEW CardPlayers
const dealer = new CardPlayer('Dealer'); // TODO Done
const player = new CardPlayer('Player'); // TODO Done

/**
 * Calculates the score of a Blackjack hand
 * @param {Array} hand - Array of card objects with val, displayVal, suit properties
 * @returns {Object} blackJackScore
 * @returns {number} blackJackScore.total
 * @returns {boolean} blackJackScore.isSoft   //isSoft - boolean - true if there is an Ace in the hand that is being counted as 11 points.  false if the hand has no Aces, or if all Aces are counting as 1 point
 */
const calcPoints = (hand) => {//come back to do
    // CREATE FUNCTION HERE
    let sum = 0
    let isSoft = false
    for (let card of hand) {
        sum += card.val
    if (val === 11 && displayVal === "Ace"){
        isSoft = true
    }
    }
    
    return { total: sum, isSoft: isSoft }

}

/**
 * Determines whether the dealer should draw another card.
 * 
 * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
 * @returns {boolean} whether dealer should draw another card
 */
const dealerShouldDraw = (dealerHand) => {
    // CREATE FUNCTION HERE
    //The dealer must abide by a strict set of rules:
//If the dealer's hand is 16 points or less, the dealer must draw another card
//If the dealer's hand is exactly 17 points, and the dealer has an Ace valued at 11, the dealer must draw another card
//Otherwise if the dealer's hand is 17 points or more, the dealer will end her turn

// get sum of dealer hand. 
// if dealer hand is less than or equal to 16, then return true 
//  if dealer hand is equal to 17  and one of the aces is 11 , then return true 
// if  dealer's hand is greater or equal to 17 , then return false 

}

/**
 * Determines the winner if both player and dealer stand
 * @param {number} playerScore 
 * @param {number} dealerScore 
 * @returns {string} Shows the player's score, the dealer's score, and who wins
 */
const determineWinner = (playerScore, dealerScore) => {
    // CREATE FUNCTION HERE
/***
 * If at any time the dealer's point total goes over 21, the dealer will lose the round immediately and the player will win
If both the player and the dealer have ended their turns without going over 21, they will compare the points of their two hands.  
Whoever's point total is greater will win the round.  If both point totals are equal, they will tie the round (push)
 */
// id dealers score is greater than 21 return player won not dealer.
//if dealerpts < 21  and player < 21 , compare score, pick largest as winner
//if dealer and player have same sum they both tie  
// playerScore is: 17 , dealerScore is 17, the tied! 
// playerScore is 15 , dealer score is 18 , ddealer wins! 

}

/**
 * Creates user prompt to ask if they'd like to draw a card
 * @param {number} count 
 * @param {string} dealerCard 
 */
const getMessage = (count, dealerCard) => {
    return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}

/**
 * Logs the player's hand to the console
 * @param {CardPlayer} player 
 */
const showHand = (player) => {
    const displayHand = player.hand.map((card) => card.displayVal);
    console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
}

/**
 * Runs Blackjack Game
 */
const startGame = function () {
    player.drawCard();
    dealer.drawCard();
    player.drawCard();
    dealer.drawCard();

    let playerScore = calcPoints(player.hand).total;
    showHand(player);
    while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
        player.drawCard();
        playerScore = calcPoints(player.hand).total;
        showHand(player);
    }
    if (playerScore > 21) {
        return 'You went over 21 - you lose!';
    }
    console.log(`Player stands at ${playerScore}`);

    let dealerScore = calcPoints(dealer.hand).total;
    while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
        dealer.drawCard();
        dealerScore = calcPoints(dealer.hand).total;
        showHand(dealer);
    }
    if (dealerScore > 21) {
        return 'Dealer went over 21 - you win!';
    }
    console.log(`Dealer stands at ${dealerScore}`);

    return determineWinner(playerScore, dealerScore);
}
// console.log(startGame());