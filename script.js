const deck = [
    {image: "images/0.jpg", card: "alligator"},
    {image: "images/0.jpg", card: "alligator"},
    {image: "images/1.png", card: "bat"},
    {image: "images/1.png", card: "bat"},
    {image: "images/2.jpg", card: "duck"},
    {image: "images/2.jpg", card: "duck"},
    {image: "images/3.jpg", card: "fawn"},
    {image: "images/3.jpg", card: "fawn"},
    {image: "images/4.jpg", card: "fennec"},
    {image: "images/4.jpg", card: "fennec"},
    {image: "images/5.jpg", card: "giraffe"},
    {image: "images/5.jpg", card: "giraffe"},
    {image: "images/6.jpg", card: "owl"},
    {image: "images/6.jpg", card: "owl"},
    {image: "images/8.jpg", card: "seal"},
    {image: "images/8.jpg", card: "seal"},
    {image: "images/9.jpg", card: "sloth"},
    {image: "images/9.jpg", card: "sloth"},
    {image: "images/7.jpeg", card: "panda"},
    {image: "images/7.jpeg", card: "panda"}
]

let currentScore = 0;
let bestScore = localStorage.getItem("bestScore");
let board = document.querySelector(".game-holder");
let cardOne = "";
let cardTwo = "";
let winCount = 0;


window.onload = function() {
    newGame(deck);
    let button = document.querySelector('#new-game');
    button.addEventListener("click", () => newGame(deck));

    board.addEventListener("click", function(event) {
        let activeCard = event.target.parentElement.parentElement;
        if (activeCard.classList.contains("flipped") || event.target.tagName != "IMG") { //insure clicks only register on unflipped cards, not other child elements
            return;
        } else {
            activeCard.classList.toggle('flipped');
            currentScore += 1
            document.getElementsByClassName("current-score")[0].innerText = " " +currentScore;

            if (!cardOne) {
                cardOne = activeCard;
            } else {
                cardTwo = activeCard;
                if (cardOne.getAttribute("data-card") == cardTwo.getAttribute("data-card")) {
                    winCount += 1;
                    cardOne="";
                    cardTwo="";
                    if (winCount == 10) {
                        let close = document.getElementsByClassName("close")[0];

                        let winAlert = document.querySelector(".win-alert");

                        winAlert.style.display = "block";

                        close.onclick = function() {
                            winAlert.style.display = "none";
                        };
                        let winNewGameButton = document.querySelector('#new-game-win');
                        winNewGameButton.onclick = function() {
                            newGame(deck);
                            winAlert.style.display = "none";
                        }
                        if (!bestScore || currentScore < bestScore) {
                            localStorage.setItem("bestScore", currentScore);
                            bestScore = localStorage.getItem("bestScore");
                            document.getElementsByClassName("best-score")[0].innerText = " " + bestScore;
                        }
                    }
                } else {
                    board.style.pointerEvents = "none";
                    window.setTimeout(noMatch, 1000);
                }
            }
        }

    })
}

function newGame(array) {
    let board = document.querySelector(".game-holder");
    board.innerHTML = "";

    shuffleDeck(array);
    dealCards(array);
    currentScore = 0;
    winCount = 0;
    document.getElementsByClassName("current-score")[0].innerText = " " +currentScore;
    document.getElementsByClassName("best-score")[0].innerText = " " + bestScore;
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

function noMatch() {
    cardOne.classList.toggle('flipped');
    cardTwo.classList.toggle("flipped");
    cardOne="";
    cardTwo="";
    board.style.pointerEvents = "auto";
}
