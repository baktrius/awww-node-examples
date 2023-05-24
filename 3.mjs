import process from "./process.mjs"

const tasks = [
    process('1', 10),
    process('2', 20),
    process('3', 30),
    process('4', 40),
]

await Promise.race(tasks);
console.log("Done")