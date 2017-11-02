function Ninja(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
}

Ninja.prototype.sayName = function(){
    console.log('My ninja name is ' + this.name)
}

Ninja.prototype.showStats = function(){
    console.log('Name: ' + this.name + ' Health: ' + this.health+ ' Speed: ' + this.speed+ ' Strength: ' + this.strength)
}

Ninja.prototype.drinkSake = function(){
    this.health += 10;
    return this;
}

Ninja.prototype.punch = function(otherNinja){
    if (otherNinja.constructor != Ninja){
        console.log("Ninjas only punch other ninjas")
        return this;
    } else{
        otherNinja.health -= 5;
        console.log(otherNinja.name + " was punched by " + this.name +" and lost 5 health")
        return this;
    }
}

Ninja.prototype.kick = function(otherNinja){
    if (otherNinja.constructor != Ninja){
        console.log("Ninjas only kick other ninjas")
        return this;
    } else{
        otherNinja.health -= 15;
        console.log(otherNinja.name + " was kickeded by " + this.name +" and lost 15 health")
        return this;
    }
}

var redNinja = new Ninja('Michael Jordan')
var blueNinja = new Ninja('Bill Gates')

blueNinja.punch(redNinja).punch(redNinja).punch(redNinja).punch("computer");
redNinja.kick(blueNinja).showStats()
blueNinja.drinkSake().showStats()