/*
console.log(1);
console.log(2);
console.log(3);
setTimeout( () => {
	console.log("Yooohooo!");
}, 5000 );
console.log(4);
console.log(5);
let tick = 0;
setInterval( () => {
	tick++;
	console.log("tick:", tick);
}, 1000);
console.log("ticker started");
*/

//Reference till HTML
const setHour = document.querySelector("#hour");
const setMinute = document.querySelector("#minute")
const setSecond = document.querySelector("#second")

const zeroPad = num => (num < 10)
        ? "0" + num
        : num;

//Function för att få ti
const showTime = () => {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
            
    setHour.innerHTML = zeroPad(hour);
    console.log("Hour:", zeroPad(hour));

    setMinute.innerHTML = zeroPad(minute);
    console.log("Minute:", zeroPad(minute));

    setSecond.innerHTML = zeroPad(second);
    console.log("Second:", zeroPad(second));
}
//const now = new Date(); // gets current timestamp when this line was executed
setInterval(() => {
   showTime();
},1000)

showTime();