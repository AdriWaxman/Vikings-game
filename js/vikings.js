// Vikings
var Vikings = function(name, health, strength){
	this.name = name;
	this.health = health;
	this.strength = strength;
}


var vk1 = new Vikings('Ragnar', 99, 60)
var vk2 = new Vikings ('Rolo', 80, 50)


// Vikings Pit

var Pit= function(vk1, vk2){
	this.turns = turn;
	this.player1 = vk1;
	this.player2 = vk2;
	this.fight = function(vk1, vk2, turns){
		while(vk2.health > vk1.strength && vk1.health > vk2.strength ){
			vk2.health -= vk1.strength;
			vk1.health -= vk2.strength; 
		}
	};
	winner : if(vk1.health < vk2.health){
			console.log('The ' + vk2 + ' is he winner!!');
		} else{
			console.log('The ' + vk1 + ' is he winner!!')
		}
	
};










		





// Saxons

var Saxons = function(health, strength){
	this.health = health;
	this.strength = strength;
}






// Battle


