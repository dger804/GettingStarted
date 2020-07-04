var getDieRoll = function(){
	console.log("rolling a die");
	return Math.ceil(6*Math.random())
};

var firstDie = getDieRoll();


//var value=6*Math.random(); //se multiplica por 6 para tener un valor mayor entre 0.0 y 1
//var roll =Math.ceil(value); //redondea
//console.log(roll);
//console.log(Math.ceil(6*Math.random()));


console.log(firstDie);

var secondDie = getDieRoll();
console.log(secondDie);
console.log(firstDie + secondDie);

