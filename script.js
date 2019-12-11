const deck = [
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
    {image: "images/sloth.jpg", card: "sloth"}
    {image: "images/panda.jpeg", card: "panda"},
    {image: "images/panda.jpeg", card: "panda"}
]

function shuffleDeck(array) {
    for(let i = array.length — 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
}

