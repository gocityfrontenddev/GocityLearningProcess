// =====================
// BASIC IF/ELSE
// =====================
// let random = Math.random();
// if (random < 1) {
//     console.log("YOUR NUMBER IS LESS THAN 1")
// } else {
//     console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 1")
// }
// console.log(random);

// =====================
// PROMPT EXAMPLE
// =====================

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("YAYYY, LET'S MAKE THAT MONEY!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("IT'S TIME TO PARTY!")
// } else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE FUN, ESPECIALLY AFTER WORK!")
// } else {
//     console.log("UWOOO I don't know that day!")
// }


const password = prompt("please enter a new password");

// // Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}


// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10 
// 10 - 65 ADULT $20 
// 65+ SENIOR $10

// const age = 10;

// if (age < 5) {
//     console.log("You are a baby.  You get in for free!")
// } else if (age < 10) {
//     console.log("You are a child.  You pay $10")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20")
// } else {
//     console.log("Your age range is not available. You pay $100")
// }






