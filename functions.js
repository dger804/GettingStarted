var getDieRoll = function(dieSize, var2, var3){
	console.log("rolling a die");
	return Math.ceil(dieSize*Math.random())
};

var firstDie = getDieRoll(10);

console.log(firstDie);

var secondDie = getDieRoll(3);
console.log(secondDie);
console.log(firstDie + secondDie);

