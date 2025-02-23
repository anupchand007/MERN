//Promise = An object that manages asynchronous operations.
// wrap a promise object around {async code}
// "I promise to return a value"
// PENDING -> Resolve or Reject
// way to implement:
//                  new Promise ((resolve, reject) => {async code})


function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true; // Simulating whether the dog was walked

            if (dogWalked) {
                resolve("You walked the dog 🐕‍🦺"); // Resolves if true
            } else {
                reject("You didn't walk the dog"); // Rejects if false
            }
        }, 1500); // Simulating delay of 1.5 seconds
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true; // Simulating kitchen cleaning

            if (kitchenCleaned) {
                resolve("You cleaned the kitchen"); // Resolves if true
            } else {
                reject("You didn't clean the kitchen"); // Rejects if false
            }
        }, 1500); // Simulating delay of 1.5 seconds
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashCleaned = false; // Simulating trash cleanup (set to false to trigger rejection)

            if (trashCleaned) {
                resolve("You cleaned the trash"); // Resolves if true
            } else {
                reject("You didn't clean the trash"); // Rejects if false
            }
        }, 1500); // Simulating delay of 1.5 seconds
    });
}

