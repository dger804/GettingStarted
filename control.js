var getDieRoll = function(dieSize){
	
	var result = Math.ceil(dieSize*Math.random());
	return result;
};

var things = [1,2,3,"pizza"];

//console.log(things[3]);
for(var i = 0; i < process.argv.length; i ++ ){ //i< things.length
	console.log(process.argv[i]);	
}

var roll = getDieRoll(6);

for(var i = 0; i < 5; i += 1){
	console.log(roll);
	roll = getDieRoll(6);
}

if(roll >= 3 && roll <= 5){ // roll >= 3 && roll <= 5
	console.log("Great roll!");
}
else if(roll == 1){	
	console.log("Terrible roll");
}
else{	
	console.log("That was an ok roll");
}
console.log("You rolled a "+ roll);

