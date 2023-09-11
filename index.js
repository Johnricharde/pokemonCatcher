// MODEL ////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');

const pokemonArray = [
    "charmander",
    "squirtle",
    "bulbasaur",
    "caterpie",
    "weedle",
    "pidgey",
    "rattata",
];

// VIEW /////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
let html = /*HTML*/ `
<div>
    <div class="container">
        <img src="/img/${pokemonArray[randomNum] || "rattata"}.png">
    </div>
    <button onClick="catchPokemon()">Catch</button>
    <button onClick="runAway()">Run</button><br>
    <button onClick="showMyPokemon()">Show</button><br>
</div>
<div>
    ${showCollection ? myPokemon : ""}
</div>
`
app.innerHTML = html
}



// CONTROLLER ///////////////////////////////////////////////////////////////////////////
var showCollection = false;
var randomNum = "";
var currentPokemon = pokemonArray[randomNum];
var myPokemon = [
]




function showMyPokemon() {
    if (showCollection == false) {
        showCollection = true
    } else if (showCollection == true) {
        showCollection = false
    }
    updateView()
}

function catchPokemon() {
    myPokemon.push(pokemonArray[randomNum]);
    console.log(myPokemon)

    new Audio("audio/caught.mp3").play();
    generateRandomNumber();
}
generateRandomNumber()
function generateRandomNumber() {
    randomNum = Math.floor(Math.random() * pokemonArray.length)
    updateView()
}
function runAway() {
    new Audio("audio/runAway.mp3").play();
    generateRandomNumber();
}
