"use strict";
class Person {
    constructor(info) {
        this.info = info;
    }
    getInfo(key) {
        return this.info[key];
    }
}
const person = new Person({
    name: 'ruochuan',
    age: 18,
});
const ob = person.getInfo('name');
console.log(ob);
