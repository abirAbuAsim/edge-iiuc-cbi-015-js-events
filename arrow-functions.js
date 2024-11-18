// Tradition function
function sum(num1, num2) {
    if(num1 < 0) {
        console.log('Negative number');
    }
    return num1 + num2; // Expression
}

console.log(sum(3, 5));

// Arrow function
// Anonymous function: no name, assignment is must 
let sumArrow = (num1, num2) => num1 + num2;

console.log(sumArrow(3, 10));

let user = {
    "name": "Abid Khan",
    "email": "abid@gmail.com",
    "birthday": "2024-04-28",
    "age": 30,
    "schools": [
        "CCPC",
        "CC",
        "IIUC"
    ],
    "salary": 100.5,
    "isWishAllowed": false
};

console.log(user);
console.log(typeof user);