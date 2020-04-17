'use strict'

console.log('*** in operator ***');

const proto = { value: 42 };
const object = Object.create(proto);

Object.defineProperty(object, 'year', {
    value: 2020,
    writable: true,
    configurable: true,
    enumerable: false,
});

const symbol = Symbol('bazzinga');
object[symbol] = 42;

// без proxy
console.log('value' in object); // true
console.log('year' in object); // true
console.log(symbol in object); // true

const proxy = new Proxy(object, {
    has (target, prop) {
        return Object.getOwnPropertyNames(target).includes(prop) || Object.getOwnPropertySymbols(target).includes(prop);
   }
});

// с proxy
console.log('value' in proxy); // false
console.log('year' in proxy); // true
console.log(symbol in proxy); // true