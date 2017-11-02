class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    punch(otherNinja){
        if (otherNinja.constructor != Ninja){
            console.log("Ninjas only punch other ninjas")
            return this;
        } else {
            otherNinja.health -= 5;
            console.log(otherNinja.name + " was punched by " + this.name +" and lost 5 health");
            return this;
        }
    }
    kick(otherNinja){
        if (otherNinja.constructor != Ninja){
            console.log("Ninjas only kick other ninjas");
            return this;
        } else {
            otherNinja.health -= 15;
            console.log(otherNinja.name + " was kicked by " + this.name +" and lost 15 health");
            return this;
        }
    }
    drinkSake(){
        this.health += 10
        console.log(this.name + " drank sake and gained 10 health");
        return this;
    }
    sayName(){
        console.log(this.name);
        return this;
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("'What one programmer can do in one month, two programmers can do in two months.'");
        return self;
    }
}

var redNinja = new Ninja("Hiromoto");
var splinter = new Sensei("Splinter");

redNinja.kick(splinter).punch(splinter);
splinter.showStats();

splinter.kick(redNinja).kick(redNinja).punch(redNinja).punch(redNinja).kick(redNinja);
redNinja.showStats();
splinter.speakWisdom();