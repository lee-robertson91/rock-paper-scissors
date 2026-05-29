console.log("hello world");

//I want a function to return a random value of Rock, Paper or Scissors.
//It has been hinted that the answer lies in the Math.random method. 
//To solve the issue I want to generate a random interger out of a possible 3.
//I then want to establish the value of those Intergers as "0 = Rock", "1 = Paper", "2 = Scissors".
//I reviewed the Math.random lesson and found how to draw 3 intergers 0, 1 or 2.
//The below did not work and instead prints full numbers up to 100.

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);

//The next line does not work as I want, but prints a single number up to 9 followed by decimal points.

function getRandom() {
    return Math.random() * 10;
}

console.log(getRandom(3))

//I am in the right ball park with the code above but I am still getting results more than 0, 1 and 2.The code below is the same but up to 20. 

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) * 10;
  }

console.log (getRandomArbitrary(0, 2))

//The code below successfully gives me a return of 1, 2 or 3 every time when the parameters 1, 4 are entered.

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);}

//The code below works in so far as printing a word, but only Rock is being printed regardless of the number that is generated. 
//function getComputerChoice() {
 //   let rpsSelector = getRandomInt(1, 4);
 //   if (rpsSelector = 1){
 //       return "Rock";
 //   } else if (rpsSelector = 2) {
 //       return "Paper"
 //   } else {
 //       return "Scissors";
  //  }
//}

// console.log(getComputerChoice())

//function getComputerChoice() {
   // let rpsSelector = getRandomInt(1, 4);
   // if (1){
  //      return "Rock";
 //   } else if (2) {
 //       return "Paper"
 //   } else {
  //      return "Scissors";
  //  }
//}

//console.log(getComputerChoice())


// a different approach but same issue. 
// If the I write: if (1) {rps = 'Rock';} etc... only Rock is logged in console.
// If I write: if (getRandomInt === 1) {rps = 'Rock';} etc... only Scissors is logged in the console. 
// If I write: if (num === 1) {return 'Rock';} etc... only Scissors is logged. 

let comp = getRandomInt(1, 4);
console.log(comp)

function getComputerChoice() { 
    if (comp === 1) {
     console.log('Rock');}
     else if (comp === 2) {
     console.log('Paper');}
     else {
     console.log('Scissors');}
    }  
getComputerChoice();

// The above code works. I needed to set a variable for the getRandomInt fuction to return a number.
// I then needed to compare the number stored in the 'comp' variable and then output what I wanted in the console. 

// I now need to create a getHumanChoice() function. It wants me to use the prompt function to do this. 
// I need to make a prompt with a text input box.
// I need the text inputted by the user to log in the console panel. 

let choice = prompt ('Rock (and Stone)' + ',' + ' ' + 'Paper' + ',' + '' + 'Scissors', );
console.log(choice);

function getHumanChoice(choice) {
    return 'You chose' + ' ' + choice + '!';
}   
 
let human = getHumanChoice(choice);
//console.log(human)

//The above works on my first attempt. I'm suspicious. 

let humanScore = 0;
let computerScore = 0;

// I now need to create a function to play a round. 
// TOP is telling me how to do this (create a function that takes the human and computer choices as parameters.

let humanChoice = 'nothing';
let computerChoice = 'nothing';
   
function playRound(humanChoice, computerChoice){
    humanChoice = choice.toLowerCase();
    computerChoice = comp;

    if (humanChoice === 'rock' && computerChoice === 2) {
        console.log('You lose');}
        else if (humanChoice === 'rock' && computerChoice === 3) {
            console.log('You win');}
    else if (humanChoice === 'paper' && computerChoice === 1) {
        console.log('You win');}
            else if (humanChoice === 'paper' && computerChoice === 3) {
                console.log('You lose');}
        else if (humanChoice === 'scissors' && computerChoice === 1) {
            console.log('You lose');} 
            else if (humanChoice === 'scissors' && computerChoice === 2) {
                console.log('You win');}
            else {
                console.log('Draw');}
}


playRound(humanChoice, computerChoice);

//The code above works. It was not working for me earlier as I had put the wrong refence in for humanChoice. 
//I had been putting in human instead of choice which was returning only draw results. 
//The built in toLowerCase() function made it easy to ensure that the human entry is case insensitive. 