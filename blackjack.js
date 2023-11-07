
/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck1 = () => {
    const deck = []
    const suits = ['hearts', 'spades', 'clubs', 'diamonds']
  
    for (let index = 0; index < suits.length; index++) {
      console.log(suits[index])
      // create an array of 13 objects
      for (let j = 1; j <= 13; j++) {
        let displayVal = `${j}`
  // j = 13,index = 3
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


const blackjackDeck = getDeck1();
console.log(blackjackDeck, 'deck')
/**
 * Represents a card player (including dealer).
 * @constructor
 * @param {string} name - The name of the player
 */
class CardPlayer {
    /**
     * When new CardPlayer is called (with a name argument), it should return an object with the following properties and method:

name - string - equal to name passed in
hand - array - initially equal to an empty array
drawCard - function with no arguments - selects a card at random from the deck, and adds to hand array.
  This does not need to remove the card from the deck 
  (so theoretically a player could draw the same card multiple times - that's okay for this scenario).
     *select a random card from blackjackdeck 
     * add onto hand array .push
     */
    constructor(name) {
        this.name = name
        this.hand = []
    }
    drawCard(){
        
        //0 0.5 0.6 0.7 1
       // .50 * 52
       // 51.44444
       let randomNumber = Math.floor(Math.random()* 52)
     console.log( blackjackDeck[randomNumber])
     this.hand.push(blackjackDeck[randomNumber])
    }


};                                      //TODO Done

// CREATE TWO NEW CardPlayers
const dealer = new CardPlayer('Dealer'); // TODO Done
const player = new CardPlayer('Player'); // TODO Done
function sumIn(arrayOfNums){
    let sum = 0
    for(let num of arrayOfNums){
        sum += num
    }
    return sum 
}
/**
 * Calculates the score of a Blackjack hand
 * @param {Array} hand - Array of card objects with val, displayVal, suit properties
 * @returns {Object} blackJackScore
 * @returns {number} blackJackScore.total
 * @returns {boolean} blackJackScore.isSoft   //isSoft - boolean - true if there is an Ace in the hand that is being counted as 11 points.  false if the hand has no Aces, or if all Aces are counting as 1 point
 */
const calcPoints = (hand) => {//come back to do
    // CREATE FUNCTION HERE
    let aces = [] 
    let sum = 0
    let isSoft = false
    for (let card of hand) {
        if( card.displayVal === "Ace"){
            aces.push(1)
        }
        else{
        sum += card.val
        }
    
    // if (card.val === 11 && card.displayVal === "Ace"){
    //     isSoft = true
    // }
    }
    // sum of points that are not aces 10 
    // points that are aces : 1,1,1,1  
    let sumOfAces = 0
    let outputSum = sum
    if(aces.length > 0 ){
       sumOfAces =  sumIn(aces) // without 11 
       aces[0] = 11 
       hypotheticalAce = sumIn(aces) // with 11 
      if( (hypotheticalAce + sum)> 21){
        outputSum =  sum + sumOfAces
      }
      else{
        outputSum=  sum + hypotheticalAce 
        isSoft = true
      }
    }
   
    return { total: outputSum, isSoft: isSoft }

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
//return { total: sum, isSoft: isSoft }
let points = calcPoints(dealerHand)
if(dealerHand <= 16){
    return true

}
if(dealerHand === 17 && points.isSoft === true){
    return true

}
if(dealerHand >= 17){
    return false

}
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
if(playerScore === dealerScore){
    return `playerScore is: ${playerScore} , dealerScore is ${dealerScore}, they tied!`

}
if(playerScore < 21 && dealerScore < 21 ){
    if(playerScore < dealerScore){
       return `playerScore is: ${playerScore} , dealerScore is ${dealerScore}, dealer Wins` 
    }
    else{
        return `playerScore is: ${playerScore} , dealerScore is ${dealerScore}, player Wins` 
    }

}
}

/**
 * Creates user prompt to ask if they'd like to draw a card
 * @param {number} count 
 * @param {string} dealerCard 
 */
const getMessage = (count, dealerCard) => {
    return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}

function lookupIcon(suit){
    switch(suit){
        case 'hearts':
            return '♥'
        case 'spades':
            return '♠'
        case 'diamonds':
            return '♦'
        case 'clubs':
            return '♣'
         
    }
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
    console.log(dealer.hand[0],'hand')
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
onload = loadme;

//function addElement() {
  // create a new div element
  //const newDiv = document.createElement("div");

  // and give it some content
 // const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  //newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
 // const currentDiv = document.getElementById("div1");
 // document.body.insertBefore(newDiv, currentDiv);
  
//}
function loadme(){
    console.log('loading')
   // addElement()
    console.log('starting game')
    console.log(startGame());
}


