interface IChild {
    name: string;
}

interface ISibling {
    name : string;
    year : number;
}

class Parent<T> {
    children: T[];
    constructor() {
        this.children = [];
    }
}

let childData : IChild = { name: "Kunal"};
let siblingData : ISibling = { name : "Anshuman", year : 2010};

let parents: Parent<IChild> = new Parent<IChild>();
let siblings: Parent<ISibling> = new Parent<ISibling>();
parents.children.push(childData);
siblings.children.push(siblingData);
console.log(parents.children);
console.log(siblings.children);