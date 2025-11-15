class Person {
  getSleep() {
    console.log("I Sleep 8 Hours");
  }
}

class Student extends Person {
  getSleep() {
    console.log("I'm Student");
  }
}

const getSleeping = (params: Person) => {
  params.getSleep();
};

const person1 = new Person();
const student = new Student();

getSleeping(person1);
getSleeping(student);

class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  redius: number;
  constructor(redius: number) {
    super();
    this.redius = redius;
  }
  getArea(): number {
    return Math.PI * this.redius * this.redius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    (this.height = height), (this.width = width);
  }
  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (params: Shape) => {
  console.log(params.getArea());
};

const shape = new Shape();
const circle = new Circle(5);
const rectangle = new Rectangle(10, 20);

getArea(shape);
