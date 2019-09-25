// console.log('working');



// make a function that will have player attack the alien every time invoked
// create player object and alien object


const playerShip = {
	name: 'USS Assembly',
	hull: 20,
	firepower: 5,
	accuracy: .7,
	attackAlien: function(life) {
		alienShip.hull -= 5;
		return life;
	}
}



// we are making an array alien ships keys
// delcare three array for the key

const alienShip = {
	hull: [3, 4, 5, 6],
	firepower:  [2, 3, 4],
	accuracy: [.6, .7, .8],
	attackPlayer: function(life){

	}

}


playerShip.attackAlien();
console.log(playerShip.attackAlien(alienShip.hull));


