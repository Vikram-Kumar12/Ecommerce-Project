let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById('guesses');

let answer = Math.floor(Math.random()*100)+1;
let numGuesses = 0;

btn.addEventListener('click',()=>{
    guessesNumber();
})

function guessesNumber(){
    if(input.value<1 || input.value>100){
        wrng.innerHTML = "Please Enter number between 1 to 100";

    }
    else {
        numGuesses++;
        guesses.innerHTML = "No. of Guess : " + numGuesses;
        if(input.value > answer){
            wrng.innerHTML = "You Guessed Too High Number!";
            input.value = "";
        }
        else if(input.value < answer){
            wrng.innerHTML = "You Guessed Too Low Number!";
            input.value = "";
        }
        else {
            wrng.innerHTML = "Congratulation You Guessed The Correct Number..";
            setTimeout(()=>{
                resetGame();
            },3000);
        }
    }
}

function resetGame(){
    wrng.innerHTML = "";
    numGuesses = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value = "";
    guesses.innerHTML = "No. of Guess : 0 ";
     
}