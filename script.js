function getComputerChoice(){
   let choices = ["Rock", "Paper", "Scissors"]
   let choice = choices[Math.floor(Math.random(2)*choices.length)];
   return choice

}
console.log(getComputerChoice())