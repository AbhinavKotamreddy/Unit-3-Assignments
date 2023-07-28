// Character Class
class Character {
    // Constructor
    constructor(name, strength, health, defense) {
        this.name = name;
        this.strength = strength;
        this.health = health;
        this.defense = defense;
    }
}

// Player Objects
let player1 = new Character("Cheetah", 10, 100, 2);
console.log(player1);