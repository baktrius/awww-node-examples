import fetch from 'node-fetch';

const requests = [];
for (let i = 0; i < 1000; ++i) {
    requests.push(fetch('http://localhost:3000/'))
}

try {
    // wait for all requests to finish
    await Promise.all(requests);

    const nextResponse = await fetch('http://localhost:3000/')
    const val = await nextResponse.text()
    console.log(val)
} catch(err) {
    console.log("something went wrong", err)
}
