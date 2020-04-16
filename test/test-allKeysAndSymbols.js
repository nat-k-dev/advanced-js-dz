var {allKeysAndSymbols} = require('./../src/allKeysAndSymbols');
var chai = require('chai');
var expect = chai.expect;

describe('Функция allKeysAndSymbols', () => {
    describe('возвращает все свойства и символы как в самом объекте, так и во всей его цепочке прототипов', () => {
        it('принимает {}"', () => {
            const input = {};
            const result = allKeysAndSymbols(input);
            expect(result).to.be.an('array').that.deep.includes.members([
                "constructor", 
                "__defineGetter__", 
                "__defineSetter__", 
                "hasOwnProperty",
                "__lookupGetter__",
                "__lookupSetter__",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toString",
                "valueOf",
                "__proto__",
                "toLocaleString"
            ]);
        });

        it('принимает непустой объект {fruit: apple}', () => {
            const input = {fruit: 'apple'};
            const result = allKeysAndSymbols(input);
            expect(result).to.be.an('array').that.deep.includes.members([
                "fruit",
                "constructor", 
                "__defineGetter__", 
                "__defineSetter__", 
                "hasOwnProperty",
                "__lookupGetter__",
                "__lookupSetter__",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toString",
                "valueOf",
                "__proto__",
                "toLocaleString"
            ]);
        });

        it('принимает объект с функцией {washIt: function(){}}', () => {
            const input = {washIt: function(){}};
            const result = allKeysAndSymbols(input);
            expect(result).to.be.an('array').that.deep.includes.members([
                "washIt",
                "constructor", 
                "__defineGetter__", 
                "__defineSetter__", 
                "hasOwnProperty",
                "__lookupGetter__",
                "__lookupSetter__",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toString",
                "valueOf",
                "__proto__",
                "toLocaleString"
            ]);
        });

        it('принимает объект в объекте {vitamines: {A: true, B: true}}', () => {
            const input = {vitamines: {A: true, B: true}};
            const result = allKeysAndSymbols(input);
            expect(result).to.be.an('array').that.deep.includes.members([
                "vitamines",
                "A",
                "B",
                "constructor", 
                "__defineGetter__", 
                "__defineSetter__", 
                "hasOwnProperty",
                "__lookupGetter__",
                "__lookupSetter__",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toString",
                "valueOf",
                "__proto__",
                "toLocaleString"
            ]);
        })
    })
})
