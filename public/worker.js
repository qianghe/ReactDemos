let counter = 3;

const timer = setInterval(() => {
    counter--;
    postMessage({
        counter,
    });
}, 1000);