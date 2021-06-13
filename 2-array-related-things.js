const number =[10,20,30,40,50];

const friendName = ["Abir","Shakib","Rasel"];

const products = [
    {id:1, name:"Laptop",price:10},
    {id:2, name:"Mobile",price:20},
    {id:3, name:"Tab",price:30}
];

// map
const productName = products.map(product => product.name);
console.log(productName);

const productPrice = products.map(product => product.price);
console.log(productPrice);


// forEach
products.forEach(product => console.log(product.name));

// filter 

const cheper = products.filter(product => product.price > 10);
console.log(cheper);


// remove an item using filter  
const remaining = products.filter(product => product.id != 3);
console.log(remaining);
    
// find
const laptop = products.find(product => product.name ==="Laptop");
console.log(laptop);

