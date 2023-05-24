module.exports =  function busy_wait(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
}
