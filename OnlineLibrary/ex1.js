//Ex1
let n = 30;
let m = 50;

let sum = n + m;

console.log("Sum = " + sum);
//Ex2
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 =[];
for (let i = 0; i<arr.length; i++){
    arr[i] % 2 === 0 && arr2.push(arr[i]);
}
console.log(arr2);
//Ex3
let number = prompt("your number: ");
function isPrime(number){
    if (number <=1){
        return false;
    }
    for (let i=2; i<= Math.sqrt(number); i++){
        if (number % 1 === 0){
            return false;
        }
    }
    return true;
}

//Ex4
let name = prompt("Write a name: ");
alert("hi " + name);