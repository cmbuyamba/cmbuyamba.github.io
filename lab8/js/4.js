const Person = {

    name: 'Mbuyamba',
    age: 39,
    greeting: function () {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old");
    },
    salute: function () {
        console.log("Good morining!, and in case I don't see you, good afternoon, good evening and good night");
    }
};

function Person2(name, age) {
    this.name = name;
    this.age = age;
}

Person2.prototype.greeting = function () {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old");
};

Person2.prototype.salute = function () {
    console.log("Good morining!, and in case I don't see you, good afternoon, good evening and good night");
};

let Student = new Person2("Li Zhang", 100);

Student.major = "Modern Programming Practices";
Student.greeting = function () {
    console.log("Hey, my name is " + this.name + ' I am studying ' + this.major);
};

let Professor = new Person2("Beya Alob", 44);

Professor.department = "Chemistry";
Professor.greeting = function () {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department");
};


Student.greeting();
Student.salute();
Student.greeting();
Student.salute();