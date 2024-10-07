function Meditation(seconds) {
    this.seconds = seconds;
}


Meditation.prototype.start = function () {
    const interval = setInterval(() => {
        console.log(this.seconds--);
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('Jay Guru Dev');
    }, (this.seconds + 1) * 1000);
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);
// Start meditation
// 5
// 4
// 3
// 2
// 1
// Jay Guru Dev