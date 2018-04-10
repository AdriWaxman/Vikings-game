// Vikings
var Vikings = function(name, health, strength){
	this.name = name;
	this.health = health;
	this.strength = strength;
}

var Ragnar = new Vikings('Ragnar', 99, 60)
var Rolo = new Vikings ('Rolo', 80, 50)


// Vikings Pit

var Pit = {

}

var pitFight = function(viking1,viking2){
	while(viking1.health >= 5 && viking2.health >= 5){
		new viking2Health = viking2.health - viking1.strength;
		new viking1Health = viking1.health - viking2.strength;
	}
	// return viking1.health - viking2.strength
	// return viking2.health - viking1.strength
}





// Saxons

var Saxons = function(health, strength){
	this.health = health;
	this.strength = strength;
}






// Battle


