class Animal {
    constructor(name, speed = 0) {
        this.speed = speed;
        this.name = name;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(this.name, ' run with speed ', this.speed)
    }

    static compareBySpeed(a1, a2) {
        return a1.speed - a2.speed;
    }

}
class Rabbit extends Animal {

    hide() {
        console.log('${this.name} hides!');
    }
}

let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
];
rabbits.sort(Rabbit.compareBySpeed);
rabbits[0].run()