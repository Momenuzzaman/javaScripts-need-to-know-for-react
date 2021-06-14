const person = {
    name : "Abdul Kuddus",
    age : 25
};

// JSON convert back and forth

const data = JSON.stringify(person);
console.log(data);

const dataParsed = JSON.parse(data);
console.log(dataParsed);

// API 
fetch('url')
.then(res => res.json())
.then(data => console.log(data));