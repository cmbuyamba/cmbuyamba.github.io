function Person(name) {
    this.name = name;
}

let Teacher = new Person("Celestin Mbuyamba");

Person.prototype.teach = function (subject) {
    console.log(this.name + " is teaching " + subject);
};

Teacher.teach("Web Application Programming");

console.log("//using factory Function");

const person = {
    fname: 'unkown',
    teach: function (subject) {
        console.log(this.fname + " is teaching " + subject);
    }
};

let teacher = Object.create(person);
teacher.fname = 'Celestin Mbuyamba';
teacher.teach("WAP");