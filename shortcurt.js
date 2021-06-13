let money =150;
let food;
let active = true;
if(money >100){
    food = "Biriany";
}
else{
    food = "Shada vat and alu vorta";
}

// ternary: 
// condition ? true value : false value

const food2 = money > 100 ? "Biriany" : "alu vorta";

const cssClass = active ? "active" : "inactive";
active ? displayUser() : displayHide();

const x = active && 5;
const y = active || 5;

// string to  number 
const number = +"40";
console.log(number);

// number to string

const numText = 50 + "";
console.log(numText);