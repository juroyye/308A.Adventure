// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//     name: "Leo",
//     type: "Cat",
//     companion: {
//       name: "Frank",
//       type: "FLea",
//       hat: "fedora",
//       glasses: "sunglasses",
//     },
//   },

//   roll(mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`);
//   },
// };

// for (let i = 0; i < adventurer.inventory.length; i++) {
//   console.log(adventurer.inventory[i]);
// }

// adventurer.roll();

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    this.MAX_HEALTH = 100;
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

class Adventurer extends Character {
    constructor (name, role, roles) {
      super(name,role, roles);
      // Adventurers have specialized roles.
      this.role = role;
      this.roles = ['Fighter', 'Healer', 'Wizard']
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    duel(){
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
    }

  }


  class Companions {
    constructor(name, weight, hometown){
        this.name = name;
        this.weight = weight;
        this.hometown = hometown;
    }
    dance(){
        console.log('The companions do a little two step shuffle!')
    }
}

const Robin = new Companions('Billy', '186', 'Bridgeport')
const Justin = new Adventurer('Justin', "software developer")
console.log(Justin)

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");
  
