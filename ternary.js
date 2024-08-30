// TERNARY ---> three parts
/*
*------Structure-------
    ?   :
 condition ? do something when true : do something when false
*/

// Simple id else
// const age = 12;
// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("Ghuma ja");
// }

// ----------Ternary operation----------------->

const age = 20;
age >= 18 ? console.log("Vote dio") : console.log("Ghuma ja");

// ---------------------->
let price = 500;
const isLeader = true;

if (isLeader === false) {
  price = 0;
} else {
  price += 100;
}
console.log(price);
