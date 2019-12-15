let deck = [
    {image: "images/alligator.jpg", card: "alligator"},
    {image: "images/alligator.jpg", card: "alligator"},
    {image: "images/bat.png", card: "bat"},
    {image: "images/bat.png", card: "bat"},
    {image: "images/duck.jpg", card: "duck"},
    {image: "images/duck.jpg", card: "duck"},
    {image: "images/fawn.jpg", card: "fawn"},
    {image: "images/fawn.jpg", card: "fawn"},
    {image: "images/fennec.jpg", card: "fennec"},
    {image: "images/fennec.jpg", card: "fennec"},
    {image: "images/giraffe.jpg", card: "giraffe"},
    {image: "images/giraffe.jpg", card: "giraffe"},
    {image: "images/owlette.jpg", card: "owl"},
    {image: "images/owlette.jpg", card: "owl"},
    {image: "images/seal.jpg", card: "seal"},
    {image: "images/seal.jpg", card: "seal"},
    {image: "images/sloth.jpg", card: "sloth"},
    {image: "images/sloth.jpg", card: "sloth"},
    {image: "images/panda.jpeg", card: "panda"},
    {image: "images/panda.jpeg", card: "panda"}
]

let currentScore = 0;
let board = document.querySelector(".game-holder");


function newGame(array) {
    let board = document.querySelector(".game-holder");
    board.innerHTML = "";

    shuffleDeck(array);
    dealCards(array);
    currentScore = 0;
    document.getElementsByClassName("current-score")[0].innerText = " " +currentScore;

}

window.onload = function() {
    newGame(deck);

    let button = document.querySelector('#new-game');
    button.addEventListener("click", () => newGame(deck));

    board.addEventListener("click", function(event) {
        event.target.parentElement.parentElement.classList.toggle('flipped');
        currentScore += 1
        document.getElementsByClassName("current-score")[0].innerText = " " +currentScore;

        let cardOne = "";
        let cardTwo = "";

        if (!cardOne) {
            cardOne = event.target.getAttribute("data-card");
        } else if (!cardTwo) {
            cardTwo = event.target.getAttribute("data-card");
        }


    })
}

function shuffleDeck(array) {
    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
}

function dealCards(array) {

    for (let i=0; i<array.length; i++) {
        //create the cards in the DOM
        let frontFace = document.createElement("img");
        frontFace.src = array[i]["image"] 

        let backFace = document.createElement("img");
        backFace.src = "images/card-back.jpeg";    

        let cardHolder = document.createElement("div");
        cardHolder.className = "flipCard";

        let card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-card", array[i]["card"] )
        
        let cardBack = document.createElement("div");
        cardBack.className = "side";

        let cardFront = document.createElement("div");
        cardFront.className = "side back";

        cardBack.appendChild(backFace);
        cardFront.appendChild(frontFace);
        card.appendChild(cardBack);
        card.appendChild(cardFront);
        cardHolder.appendChild(card);
        board.appendChild(cardHolder);
    }

}
