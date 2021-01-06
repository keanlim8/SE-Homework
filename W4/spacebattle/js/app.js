// class Ship
class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
};

// game object
const game = {
  title: "Space Battle",
  playing: true,
  ussSchwarz: new Ship('USS Schwarz', 20, 5, 0.7),
  alienShipNames: ['Millennium Falcon', 'Super Star Destroyer', 'X-wing Starfighter', 'USCSS Nostromo', 'Endurance', 'USCSS Prometheus'],
  alienShips: [],

  //attack method
  attack: function(attacker, attacked) {
    console.log(`%c${attacker.name} is attacking ${attacked.name}!`,"color: #00ff00");
    //check if attack higher than attacked ship's directory
    if (Math.random() < attacked.accuracy) {
      //tell us the attacked ship has been hit
      console.log(`%c${attacked.name} has been hit!`, "color: #FF0D07");
      //remove hull points of attacked ship
      attacked.hull = attacked.hull - attacker.firepower;
      //if hull reaches 0, keep it at 0 (no negative hull points)
      if (attacked.hull < 0) {
        attacked.hull = 0
      };
      //tell us remaining hull score of attacked ship
      console.log(`%c${attacked.name}'s hull is now ${attacked.hull}.`, "display: inline-block; border: 3px solid red; border-radius: 7px; " +
        "padding: 10px; margin: 20px;");
      //if the attacked ships' hull reached 0 and is destroyed
      if (attacked.hull === 0) {
        console.log(`%c${attacked.name} has been DESTROYED!`, "display: inline-block ; background-image: url( 'https://i.ibb.co/Pj8s6Q2/destroyed.jpg' ) ; " +
          "background-size: cover; padding: 10px 340px 190px 10px; " +
          "border: 2px solid black; font-size: 13px; line-height: 11px; " +
          "font-family: monospace;");
        //if you are destroyed
        if (attacked.name === 'USS Schwarz') {
          console.log('%cYou LOSE!',"display: inline-block ; background-image: url( 'https://i.ibb.co/jvCgpjW/gameover.gif' ) ; " +
            "background-size: cover; padding: 10px 340px 190px 10px; " +
            "border: 2px solid black; font-size: 13px; line-height: 11px; " +
            "font-family: monospace;");
          //exit out of game
          this.playing = false;
        } else {
          //remove destroyed alien ship out of array
          this.removeDestroyed(attacked);
          //check if there are any remaining enemy ships
          if (this.alienShips.length > 0) {
            //prompt user if they want to attack next ship or retreat
            let answer = prompt('Would you like to attack the next ship or retreat?');
            //if answer is retreat, game is over
            if (answer.toLowerCase() === 'retreat') {
              console.log('Game Over.');
              //exit out of game
              this.playing = false;
            } else if (answer.toLowerCase() === 'attack') {
              //attack next alien ship
              this.pickShip();
            }
          } else {
            //exit out of game after hard earned victory
            console.log('%cYou saved Earth!', "display: inline-block ; background-image: url( 'https://i.ibb.co/qdcWHxG/giphy.gif' ) ; " +
              "background-size: cover; padding: 10px 340px 190px 10px; " +
              "border: 2px solid black; font-size: 15px; line-height: 11px; " +
              "font-family: monospace;");
            this.playing = false;
          }
        }
      }
      //else, attacked becomes the attacker
      else {
        this.attack(attacked, attacker);
      }
    } else {
      //tell us the attacking ship missed
      console.log(`${attacker.name} has missed!`);
      this.attack(attacked, attacker);
    }
  },

  //generate enemy ships function
  generateEnemies() {
    //iterate over list of alien ship names
    for (ship of this.alienShipNames) {
      //for each alien ship name:
      //give it its name
      let name = ship;
      //randomize its hull number between 3 and 6
      let hull = (Math.floor(Math.random() * (6 - 3 + 1) + 3));
      //randomize its firepower between 2 and 4
      let firepower = (Math.floor(Math.random() * (4 - 2 + 1) + 2));
      //randomize its accuracy between 0.6 and 0.8
      let accuracy = Math.random() * (0.8 - 0.6) + 0.6;
      //create a new Ship object with those values
      let alienShip = new Ship(ship, hull, firepower, accuracy);
      //add that object to the array of alien ships
      this.alienShips.push(alienShip);
    }
  },

  //reset function
  reset: function() {
    game.playing = true;
    game.ussSchwarz.hull = 20;
    game.alienShips = [];
  },

  //show alien ships function
  displayAliens: function() {
    let description = '';
    for (i = 0; i < this.alienShips.length; i++) {
      let alien = this.alienShips[i];
      description = description + `[${i+1}] ${alien.name}\nHull: ${alien.hull}, Firepower: ${alien.firepower}, Accuracy: ${alien.accuracy}\n`
    }
    return prompt('Which alien ship would you like to attack? \n' + description);
  },

  //pick which ship to attack
  pickShip: function() {
    //ask user which alien ship to attack
    let AlienToAttack = parseInt(this.displayAliens()) - 1;
    //attack chosen ship
    this.attack(this.ussSchwarz, this.alienShips[AlienToAttack]);
  },

  //remove destroyed ship from array
  removeDestroyed: function(enemy) {
    for (i = 0; i < this.alienShips.length; i++) {
      if (enemy === this.alienShips[i]) {
        for (ship of this.alienShips) {}
        this.alienShips.splice(i, 1);
      };
    };
  },

  //play function
  play: function() {
    //welcome player
    alert('Welcome to Space Battle');
    //let player decide to play
    if (confirm("You are the captain of USS Schwarz. \nDo you wish to engage in a deadly space battle?")) {
      alert('Game on!');
      //get our array of enemies
      this.generateEnemies();
      //check the conditional loop
      while (this.playing === true) {
        //ask user which alien ship to attack
        //let AlienToAttack = parseInt(this.displayAliens())-1;
        //start the game by attacking first alien ship
        //this.attack(this.ussSchwarz, this.alienShips[AlienToAttack]);
        this.pickShip();
      }
      //let player play again if they want to
      if (confirm('Would you like to play again?')) {
        alert('Here we go again!');
        game.reset();
        game.play();
      } else {
        alert('Alright. Take a break, space cadet!');
        this.playing = false;
      }
    } else {
      alert('You chose not to save Earth.');
      this.playing = false;
    };
  }
}


console.log(game.play());
