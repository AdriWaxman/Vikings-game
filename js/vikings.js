// Vikings
var Vikings = function(name, health, strength){
	this.name = name;
	this.health = health;
	this.strength = strength;
}



// Vikings Pit

var PitRing = function(vk1, vk2){
	this.turns = 5;
	this.vk1 = vk1;
	this.vk2 = vk2;
	
};

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

var vk1 = new Vikings('Ragnar', 99, 20);
var vk2 = new Vikings ('Rolo', 80, 15);

var pit = new PitRing(vk1, vk2);
pit.fight();
pit.winner();










		





// Saxons

var Saxons = function(health, strength){
	this.health = health;
	this.strength = strength;
}






// Battle


