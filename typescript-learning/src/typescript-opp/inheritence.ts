// inheritence

class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    (this.name = name), (this.age = age), (this.address = address);
  }

  getSleep() {
    console.log("Ghumai");
  }
}
const person = new Person("Monir", 25, "Bangladesh");
person.getSleep();

class Student extends Person {
  // inheritence
}
const student = new Student("Mr.X", 24, "Dhaka");
student.name;

class Teacher extends Person {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
}

const teacher = new Teacher("Mr.Y", 32, "Bangladesh", "Teacher");
teacher.designation;
