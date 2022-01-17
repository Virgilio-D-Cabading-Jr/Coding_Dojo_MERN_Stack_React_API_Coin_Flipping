////////////////////////////////////////////////////////////////////
// COIN FLIPPING
////////////////////////////////////////////////////////////////////

// const noMondays = new Promise((resolve, reject) => {
//     if (new Date().getDay() !== 1) {
//         resolve("Good, it's not Monday!");
//     } else {
//         reject("Someone has a case of the Mondays!");
//     }
// });
// noMondays
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

/**
 * /////////////////////////////////////////////////////////////////
 *  TOSS COIN
 * /////////////////////////////////////////////////////////////////
 * @returns A Random Head or Tail
 */
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while (headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if (result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");

const fiveHeadsAsync = new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while ((headsCount < 25) && (attempts <= 100000000)) {
            attempts++;
            let result = tossCoin();
            // console.log(`Got ${ result } || attempt: ${ attempts }`);
            if (result === "heads") {
                headsCount++;
            } else {
                // A tail Resets head count to Zero
                headsCount = 0;
            }
        }
        // **** Resolve Or Reject Promise ****
        if (attempts < 100000000) {
            resolve (`It took ${attempts} tries to flip 25 "heads" in a row`);
        } else {
            reject (`Could not get 25 Heads in a row after 100,000,000 attempts`);
        }
    }
);

// //// CALL THE FIVE HEADS ASYNC PROMISE /////////////////////
fiveHeadsAsync
    .then( res => console.log(res) )
    .catch( err => console.log(err) );

// //// EXECUTE A FUNCTION AFTER PROMISE GIVEN ////////////////
console.log("************************************");
console.log("This is run after the fiveHeadsAsync function was promised");
console.log("************************************");
