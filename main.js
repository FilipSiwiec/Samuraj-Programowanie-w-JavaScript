const Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
    // this.addChildren = function (name){
    //     this.children.push(name);
    // }
}

Person.prototype.addChildren = function (name){
    this.children.push(name);
}

const arek = new Person ("Arek", 20);
const monika = new Person ("Monika", 30);

monika.addChildren("Basia");
Person.prototype.gender = "female";