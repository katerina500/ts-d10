"use strict";
class Resource {
    constructor(data) {
        this.data = data;
    }
}
const mockUserData = [
    {
        id: 1,
        name: "Lane Mcdonald",
        phone: "1-980-603-4363",
        email: "dui@aol.com",
        address: "P.O. Box 895, 4432 Placerat, Avenue",
    },
    {
        id: 2,
        name: "Emma Ford",
        phone: "(472) 855-7514",
        email: "aliquam.ornare@protonmail.net",
        address: "P.O. Box 311, 427 Egestas Av.",
    },
    {
        id: 3,
        name: "Louis Juarez",
        phone: "1-895-966-2657",
        email: "venenatis.lacus@outlook.net",
        address: "Ap #125-478 Sit Av.",
    },
    {
        id: 4,
        name: "Zorita Mason",
        phone: "1-262-419-4287",
        email: "arcu.vel@protonmail.net",
        address: "P.O. Box 631, 1093 Metus Street",
    },
    {
        id: 5,
        name: "Harriet Acevedo",
        phone: "1-788-618-2639",
        email: "consequat.dolor@protonmail.net",
        address: "P.O. Box 769, 5046 Pellentesque, Rd.",
    }
];
class UserModel extends Resource {
    get() {
        return this.data;
    }
    add(newData) {
        this.data = this.data.concat(newData);
        return this.data;
    }
    getOne(id) {
        return this.data.find(item => item.id === id);
    }
    update(key, val, partialData) {
        const target = this.data.find(item => item[key] === val);
        if (target) {
            Object.assign(target, partialData);
            return target;
        }
        return undefined;
    }
    delete(key, val) {
        const item = this.data.find(item => item[key] === val);
        if (item) {
            this.data = this.data.filter(item => item[key] !== val);
            return item;
        }
        return undefined;
    }
    constructor(data) {
        super(data);
    }
}
const users = new UserModel([...mockUserData]);
console.log('users.get()', users.get());
const newObj = {
    id: 6,
    name: "Ivan Petrov",
    phone: "1-788-618-2639",
    email: "consequat.dolor@protonmail.net",
    address: "P.O. Box 769, 5046 Pellentesque, Rd.",
};
console.log('users add', users.add(newObj));
console.log('users.getOne()', users.getOne(4));
console.log('users.update()', users.update('id', 4, { name: 'Sergey' }));
console.log('users.update()', users.update('email', 'dui@aol.com', { address: 'Moscow, Russia',
    phone: '12345678910' }));
console.log('users.update()', users.update('name', 'Leo Tolstoy', { address: 'Yasnaya polyana, Russia' }));
console.log('users.delete()', users.delete("name", "Ivan Petrov"));
console.log('users.delete()', users.delete("id", 222));
//# sourceMappingURL=script.js.map