const numbers = [10,20,30,40];
// const x = numbers[0];
// const y = numbers[1];

// const [x,y] = [10,20];

const [x,y] = numbers;
console.log(x,y);

function boxify(number){
    return [number, number*2];
}

const [box1,box2] = boxify(20);
console.log(box1,box2);

// object destructring
const {name,age} = {id:1,name:"Rohim",age:25};
console.log(name,age);

// create object shortcut 

const a = 20;
const b = 30;

const object = {a,b};
console.log(object);

// three dots

const mewNumbers = [...numbers,56];
console.log(mewNumbers);