// Control Flow Part 1
// const PI = 3.1415
// const radius = 5
// const area = PI * radius * radius

// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

//Predict plant grow after a specific number of weeks
// const plant = 20;
// const w1 = 1
// const w2 = 2
// const w3 = 3 

//Week One 
// let = (growth = plant * 2 **w1); {
//     console.log(growth);
// }
// if (growth > 78) {
//     console.log('Prune');
// } else if (growth < 39) {
//     console.log('Plant More'); 
// } else {
//     console.log('Monitor')
// } // growth is 40; Monitor

//Week Two
// let = (growth = plant * 2 **w2); {
//     console.log(growth);
// }
// if (growth > 78) {
//     console.log('Prune');
// } else if (growth < 39) {
//     console.log('Plant More'); 
// } else {
//     console.log('Monitor')
// } //growth is 80; Prune

//Week Three
// let = (growth = plant * 2 **w3); {
//     console.log(growth);
// }
// if (growth > 78) {
//     console.log('Prune');
// } else if (growth < 39) {
//     console.log('Plant More'); 
// } else {
//     console.log('Monitor')
// } //growth is 160; Prune

//Control Flow Part 2
// const PI = 3.1415
// const radius = 5
// const area = PI * radius * radius

// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

//2a. amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// console.log(area); // total area is 78.54
// let plant = 100;
// let space = .8
// console.log(plant * space); //100 plants require 80 square meters

// const plant = 100
// const w10 = 10
// let = (growth = plant * 2 **w10); {
//     console.log(growth);
// } // 102,400 plants grown after 10 weeks
// console.log(growth * .8); // 81,920 meters needed for the additional plants

// 2b. the space remained circular, what would be the radius of this expanded garden?
// console.log(Math.sqrt(81920 / PI)); //radius of garden: 161.48 meters

//Control Flow Part 3
// 
const PI = 3.1415
const radius = 5
const area = PI * radius * radius
let plant = 100
// if the amount of space required to hold the originally provided number of plants exceeds the amount of space available, 
// throw a new error and log an appropriate message.
console.log(area); //78.54 meters total
 
let = (space = plant * .8);
    console.log(space); // 80 meters used up by 100 plants
try {
    if (space <= area) {
        console.log('there is room');
    } else {
        throw "error - too many plants!";
    }
} catch (error) {
    console.log(error)
}