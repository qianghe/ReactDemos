let counter = 3;

const timer = setInterval(() => {
    counter--;
    postMessage({
        counter,
    });
    if (counter === 0) clearInterval(timer);
}, 1000);