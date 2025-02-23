// Async/Await Explanation:
// - Async makes a function return a Promise.
// - Await makes an async function wait for a Promise to resolve before continuing execution.
// - This allows writing asynchronous code in a synchronous manner.
// - Async functions do not use resolve/reject directly; instead, they return a Promise.
// - Everything after 'await' is placed in an event queue and executed once the Promise resolves.

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

async function doChores() {
    try {
        // Await pauses execution until the Promise resolves
        const walkDogResult = await walkDog();
        console.log(walkDogResult); // Logs success message if resolved

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult); // Logs success message if resolved

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult); // Logs success message if resolved
    } 
    catch (err) {
        console.error(err); // Catches and logs any rejected Promise error
    }
}

// Start executing the async function
doChores();
