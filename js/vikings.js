// Vikings
var Viking = function(name, health, strength){
	this.name = name;
	this.health = Math.floor((Math.random() * 30 ) + 60);
	this.strength = Math.floor((Math.random() * 20 ) + 10);
}



// Vikings Pit

function getRandomTurn(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var PitRing = function(vk1, vk2){
	this.turns = getRandomTurn(2,7);
	this.vk1 = vk1;
	this.vk2 = vk2;

};

	//var VikingRandom = Math.floor((Math.random() * 50) + 1);
	var vikingArmy = [];
	var vikingsNumber = Math.floor((Math.random() * 80) + 10);
	var vikingsDead = [];
	// var name, health, strength;
	// var viking;

	for(var i= 0; i <= vikingsNumber; i++){
		
		vikingArmy.push(new Viking()); 
		// vikings.push(Viking);

	}
	


PitRing.prototype.fight = function(){
		while(this.vk2.health > this.vk1.strength && this.vk1.health > this.vk2.strength ){
			this.vk2.health -= this.vk1.strength;
			console.log('The viking ' + ' with the name of ' + this.vk1.name + ' make a hit of '+ this.vk1.strength + 
				' and health of ' + this.vk1.health);
			this.vk1.health -= this.vk2.strength; 
			console.log('The viking ' + ' with the name of ' + this.vk2.name + ' make a hit of '+ this.vk2.strength + 
				' and health of ' + this.vk2.health);

			this.turns --;
		}
	};
	
	PitRing.prototype.winner = function() { 
			if(this.vk1.health < this.vk2.health){
				console.log(vk2.name + ' is the winner!!');
			} else{
				console.log(vk1.name + ' is the winner!!');
			}
		};

var vk1 = new Viking('Ragnar', 99, 20);
var vk2 = new Viking('Rolo', 80, 15);

var pit = new PitRing(vk1, vk2);
// pit.fight();
// pit.winner();

//SAXONS

var Saxon = function(health, strength){
	this.health = Math.floor((Math.random() * 40 ) + 10);
	this.strength = Math.floor((Math.random() * 10 ) + 5);
};

var saxonArmy = [];
var SaxonsNumber = Math.floor((Math.random() * 80) + 10);
var saxonsDead = []; 

for(var i = 0; i - SaxonsNumber; i++) {
	saxonArmy.push(new Saxon());
}


// BATTLE ROYALE

var BattleRoyale = function(vikingArmy, saxonArmy){
	this.rounds = getRandomTurn(3,8);
	this.vikingArmy = vikingArmy;
	this.saxonArmy = saxonArmy;
	//this.rounds = rounds; 
}

BattleRoyale.prototype.BattleArena = function(){
	console.log('THE BATTLE BEGINS!!');
	console.log('The vikings runs shouting : VAMONOOOH!');

	while(this.vikingArmy.health > this.saxonArmy.strength && this.saxonArmy.health > this.vikingArmy.strength){
		this.vikingArmy.health -= this.saxonArmy.strength;
		console.log('The saxons hit first!');

		this.saxonArmy.health -= this.vikingArmy.strength;
		console.log('The vikings hit stronger!');

		this.rounds --;
	}
}
// 	if(this.viking.health <= 0){

// 	}
// }















