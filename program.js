var dice = require("./dice");
var die = dice.die;

console.log(dice.name);

die.size = 10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("Total Rolls: "+die.totalRolls);
console.log(die);

