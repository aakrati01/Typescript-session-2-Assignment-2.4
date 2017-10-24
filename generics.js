var Parent = /** @class */ (function () {
    function Parent() {
        this.children = [];
    }
    return Parent;
}());
var childData = { name: "Kunal" };
var siblingData = { name: "Anshuman", year: 2010 };
var parents = new Parent();
var siblings = new Parent();
parents.children.push(childData);
siblings.children.push(siblingData);
console.log(parents.children);
console.log(siblings.children);
