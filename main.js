////////////////////////////////////////////////////////////////////
// COIN FLIPPING
////////////////////////////////////////////////////////////////////

const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
noMondays
    .then( res => console.log(res) )
    .catch( err => console.log(err) );

/**
 * /////////////////////////////////////////////////////////////////
 *  TOSS COIN
 * /////////////////////////////////////////////////////////////////
 * @returns A Random Head or Tail
 */
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}