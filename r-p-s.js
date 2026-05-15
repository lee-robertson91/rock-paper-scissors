console.log("hello world");

//I want a function to return a random value of Rock, Paper or Scissors.
//I have been hinted that the answer lies in the Math.random method. 
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

//The code below successfully gives me a return of 0, 1 or 2 every time. 

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);}

console.log(getRandomInt(0, 3))
