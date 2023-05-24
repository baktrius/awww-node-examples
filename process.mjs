import { stderr } from 'node:process';

function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}

export default async function process(char = '.', num = 20) {
    for (let i = 0; i < num; ++i) {
        await wait(100);
        stderr.write(char);
    }
    console.error()
}