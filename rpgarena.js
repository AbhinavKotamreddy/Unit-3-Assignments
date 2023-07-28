class Character {
    constructor(name,health,strength,defense) {
        this.name=name;
        this.health=health;
        this.strength=strength;
        this.defense=defense;
    }
    takeDamage(damage){
        let damageTaken= damage - this.defense;
        this.health-=damageTaken;
        return damageTaken;
    }
    attack(target) {
        let damage = this.strength * 2
        let damageDealt = target.takeDamage(damage)
        return damageDealt;
    }
    isAlive(){
        return this.health >0;
    }
}
class Rogue extends Character {
    constructor() {
        super();
        this.name = "Latte"
        this.health = 100
        this.defense = 4
        this.strength = 8
    }
    attack(target) {
        let dexterity = 20;
        let criticalHit= Math.floor(Math.random()*101)<dexterity;
        let damage = this.strength * 2
        if (criticalHit){
            damage*=2;
            console.log("Critical Hit!")
        }
        let damageDealt = target.takeDamage(damage)
        return damageDealt;
    }
}
class Mage extends Character {
    constructor() {
        super();
        this.name= "Jack"
        this.health= 100
        this.defense=6
        this.strength=6
    }
    attack(target) {
        let damage = this.strength * 2
        let randomNumber = Math.floor((Math.random()*100));
        if (randomNumber >= 75) {
            damage*=3;
            console.log(player3.name + " throws a fireball")
        }
        let damageDealt = target.takeDamage(damage)
        return damageDealt;
    }
}


let player1 = new Character("Cheetah", 100, 10, 2)
let player2 = new Rogue()
let player3= new Mage()
console.log(player1);
console.log(player2)
while(player1.isAlive() && player2.isAlive() && player3.isAlive) {
    console.log(player1.name+":"+player1.health)
    console.log(player2.name+":"+player2.health)
    console.log(player3.name+":"+player3.health)
    let damage;
    damage = player1.attack(player2);
    console.log(player1.name +" hits " +player2.name +" for " + damage);
    damage = player1.attack(player3);
    console.log(player1.name +" hits " +player3.name +" for " + damage);
    damage =player2.attack(player1)
    console.log(player2.name +" hits " +player1.name +" for " + damage);
    damage = player2.attack(player3);
    console.log(player2.name +" hits " +player3.name +" for " + damage);
    damage = player3.attack(player1);
    console.log(player3.name +" hits " +player1.name +" for " + damage);
    damage = player3.attack(player2);
    console.log(player3.name +" hits " +player2.name +" for " + damage);
    if(player1.isAlive() && player2.health<=0 && player3.health<=0){
        console.log(player1.name + " wins")
    }
    else if(player2.isAlive() && player3.health<=0 && player1.health <= 0) {
        console.log(player2.name + " wins")
    }
    else if(player3.isAlive() && player2.health<=0 && player1.health<=0) {
        console.log(player3.name + " wins")
    }
    else if(player2.health<=0 && player1.health<=0 && player3.health<=0){
        console.log("Its a draw")
    }
}

