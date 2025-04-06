function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

const john = new Person("John", 30);
const jane = new Employee("Jane", 25, "Engineer");

john.introduce();
jane.introduce();
jane.work();
