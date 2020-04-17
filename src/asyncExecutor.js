'use strict'

function asyncExecutor (generator) {
    const iterator = generator();
    const run = (...args) => {
        const next = args.length > 0 ? iterator.next(...args) : iterator.next();
        if (next.done) {
            return next.value; // undefined
        } else {
            return Promise.resolve(next.value).then(run).catch(run);
        }
    };
    run();
}

// тесты
const ID = 42;
const delayMS = 1000;

function getId () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ID);
        }, delayMS);
    });
}

function getDataById (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            id === ID ? resolve('apple') : reject('fire'); // 🍎 💥
        }, delayMS);
    });
}

asyncExecutor(function* () {
    console.time("Time");

    const id = yield getId();
    console.log('id', id);
    const data = yield getDataById(id);
    console.log('Data', data);

    console.timeEnd("Time");
});

