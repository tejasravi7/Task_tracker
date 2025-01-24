// // Array are created in []

// let marks = [10,20,30,40];
// console.log(marks.length);

// // array in string
// let heros = [33,22,33,34,23];
// for(let i of heros){
//     console.log('vall are',i);
// }
// heros.push(20,30,80);
// console.log(heros);

// // using concat
// let dogs = ["bull","pug"];
// let animals = ["lion"];
// let pets= dogs.concat(animals);
// console.log(pets);

// // shift and unshift is used like to delete and add to the array
// let company=["micro","facwebook", "ola", "7edge"];
// console.log(company);
// company.shift;
// console.log(company);
// company.splice(2,1,"uber");
// console.log(company);
function possibleBonus(a, b) {
    // Check if the friend's position is ahead and within 1-6 tiles
    return b > a && b - a <= 6;
}

// Test cases
console.log(possibleBonus(3, 7)); // ➞ true
console.log(possibleBonus(1, 9)); // ➞ false
console.log(possibleBonus(5, 3)); // ➞ false