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

	var VikingRandom = Math.floor((Math.random() * 50) + 1);
	var vikings = [];
	var vikingsNumber = Math.floor((Math.random() * 80) + 10);
	var vikingsDead = [];
	// var name, health, strength;
	// var viking;

	for(var i= 0; i <= vikingsNumber; i++){
		var name = 'vk'+i;
		vikings.push(new Viking()); 
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
pit.fight();
pit.winner();

//SAXONS

var Saxon = function(health, strength){
	this.health = Math.floor((Math.random() * 40 ) + 10);
	this.strength = Math.floor((Math.random() * 10 ) + 5);
};

var saxons = [];
var SaxonsNumber = Math.floor((Math.random() * 80) + 10);
var saxonsDead = []; 

for(var i = 0; i - SaxonsNumber; i++) {
	saxons.push(new Saxon());
}


// BATTLE ROYALE

var BattleRoyale = function(){
	this.turn = getRandomTurn(3,8);
	this.rounds = rounds; 
}

BattleRoyale.prototype.BattleArena = function(){
	var initialVikings = this.vikings.length;
	var initialSaxons = this.saxons.length;
	// var fightTurn = 1; 
	console.log('The vikings army are ' + initialVikings + ' soldiers'); 
	console.log('The saxons army are ' + initialSaxons + ' possible dead people');
	console.log(' The vikings army shout : VAMONOOOOOH!');
	
	while(vikings.length !== 0 && saxons.length !== 0){
		if(this.vikings.health > 0 && this.saxons.health > 0){
			this.saxons.health -= this.vikings.strength;
		  this.vikings.health -= this.saxons.strength;
		
		console.log(this.vikings.name + ' causes ' + this.vikings.strength + ' damage points');
		console.log(this.saxons.name + ' health is ' + this.saxons.health);
		console.log(this.saxons.name + ' causes ' + this.saxons.strength + ' damage points');
		console.log(this.vikings.name + ' health is ' + this.vikings.health);

		turn --;
		}

		if(this.vikings.health === 0){
			console.log('The viking dies!');
			vikingsDead.push(this.vikings);
			vikings = vikings.slice(1, vikings.length);
			this.vikings = vikings[0]
		}

		if(this.saxons.health === 0){
			console.log('The saxon dies!');
			saxonsDead.push(this.saxons);
			saxons = saxons.slice(1, saxons.length);
			this.saxons = saxons[0]
		}
	};
};

// var battle = function(VikingRandom, SaxonsRandom){
// 	this.turns = Math.floor((Math.random() * 10) + 1);
// 	this.VikingRandom = VikingRandom;
// 	this.SaxonsRandom = SaxonsRandom;
// };

// var battleRing = new battle(vikings, saxons);
// Viking = vikings;
// Saxons = saxons;



// battleRing.prototype.fight = function(){
// 		while(this.Vikings.health > this.Saxons.strength && this.Saxons.health > this.Vikings.strength ){
// 			this.Saxons.health -= this.Vikings.strength;
// 			console.log('The viking ' + ' with the name of ' + this.Vikings.name + ' make a hit of '+ this.Vikings.strength + 
// 				' and health of ' + this.Vikings.health);
// 			this.Vikings.health -= this.Saxons.strength; 
// 			console.log('The viking ' + ' with the name of ' + this.Saxons.name + ' make a hit of '+ this.Saxons.strength + 
// 				' and health of ' + this.Saxons.health);

// 			this.turns --;
// 		}
// 	};

// battleRing.fight();













