class Suit {
    constructor(suit){
        this._suit = suit;
        // this.unicode = unicode;
    }
    get suit (){
        return this._suit;
    }
    set suit (suit){
        this._suit = suit;
    }
}

class Card {
    constructor(suit, pointVal){
        this._suit = suit
        this._faceVal;
        
        //Generates the face value for the cards (using blackjack rules)
        //////////////////////////////////// Need to worry about Aces
        if (pointVal <= 10){
            this.pointVal = pointVal;
            this._faceVal = pointVal;
        } else if (pointVal == 11){
            this._faceVal = "Jack";
            this.pointVal = 10;
        } else if (pointVal == 12){
            this._faceVal = "Queen";
            this.pointVal = 10;
        } else if (pointVal == 13){
            this._faceVal = "King";
            this.pointVal = 10;
        } else if (pointVal == 14){
            this._faceVal = "Ace";
            this.pointVal = 11;
        }
    }
    get suit (){
        return this._suit.suit; //returns the Suit's suit
    }
    set suit (suit){
        this._suit = suit.suit;
    }
}

class Deck {
    constructor (){
        this._suits = [
            new Suit('Hearts'), new Suit('Diamonds'), new Suit('Clubs'), new Suit('Spades')
        ];
        this._cards;
        this.reset();
    }
    
    get cards (){
        return this._cards;
    }

    shuffle (){
        for (let i=0; i<52; i++){
            let rand = this.genRandom();
            let temp = this._cards[i];

            this._cards[i] = this._cards[rand];
            this._cards[rand] = temp;
        }
        return this;
    }
    deal (player){
       return this._cards.pop();
    }

    reset (){
        this._cards = [];
        for (let i=0; i<this._suits.length; i++){
            for (let j=2; j<=14; j++){
                this._cards.push(new Card(this._suits[i], j));
            }
        }
    }
    genRandom(){
        return Math.floor(Math.random()*51)+1;
    }
}


class Player {
    constructor (name){
        this._name = name;
        this._hand;
        this.reset();
    }
    get hand (){
        return this._hand;
    }
    getCard (deck){
        this._hand.push(deck.deal());
        return this;
    }
    discard (Num){
        this._hand.splice(Num, 1) // removes card by creating a new array without the card specified
        return this;
    }
    reset (){
        this._hand = [];
    }
}


var deck1 = new Deck();
p1 = new Player('Gandalf');

deck1.shuffle().shuffle();

p1.getCard(deck1).getCard(deck1).getCard(deck1).getCard(deck1).getCard(deck1);
console.log(p1.hand);
console.log("****************************/n")

p1.discard(4).discard(3).getCard(deck1).getCard(deck1);
console.log(p1.hand);

console.log(deck1._cards.length)
