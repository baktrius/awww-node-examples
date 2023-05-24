function test(id) {
    return new Promise((resolve) => {
        console.log(`promise start ${id}`)
        setTimeout(() => {
            console.log(`timeout start ${id}`)
            resolve();
            console.log(`timeout end ${id}`)
        }, 0);
        console.log(`promise end ${id}`)
    });
}

console.log("control 1");
const p1 = test(1);
console.log("control 2");
const p2 = test(2);
console.log("control 3");
await p2;
console.log("control 4");
await p1;
console.log("control 5");
