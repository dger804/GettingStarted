var getDieRoll = function(dieSize){
	console.log("rolling a die");
	var result = Math.ceil(dieSize*Math.random());
	return result;
};
var roll = getDieRoll(6);
if(roll>=5){
	
	console.log("You get a great roll")
}


console.log("You rolled a "+ roll);