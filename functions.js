var getDieRoll = function(dieSize){
	console.log("rolling a die");
	var result = Math.ceil(dieSize*Math.random());
	return result;
};

var showResult = function(){
	console.log(firstDie);
	console.log(secondDie);
	console.log(firstDie + secondDie);

};

var firstDie = getDieRoll(10);
var secondDie = getDieRoll(3);
showResult();


