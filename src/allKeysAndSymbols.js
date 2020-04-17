'use strict'

console.log('*** allKeysAndSymbols function ***');

function allKeysAndSymbols (object) {
    if (typeof object !== 'object') return [];
    let result = new Set([].concat(Object.getOwnPropertyNames(object), 
                           Object.getOwnPropertySymbols(object)));
    if (object.__proto__ !== null) {
        result = new Set(allKeysAndSymbols(object.__proto__).concat([...result]));
    }
    for (const field in object) {
        result = new Set(allKeysAndSymbols(object[field]).concat([...result]));
    }
    return Array.from(result);
}

const result = allKeysAndSymbols({}) // ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", ... ]
console.log(result);

module.exports = {
    allKeysAndSymbols
}