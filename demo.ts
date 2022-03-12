interface IPerson {
    name: string;
    age: number;
}

class Person{
    constructor(private info: IPerson){
    }
    getInfo<T extends keyof IPerson>(key: T): IPerson[T] {
        return this.info[key];
    }
}

const person = new Person({
    name: 'ruochuan',
    age: 18,
});

const ob = person.getInfo('name');
console.log(ob);

