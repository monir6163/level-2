class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: number) {
    console.log(`This ${this.name} Sleeping ${numOfHours} daily`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(numOfHours: number) {
    console.log(`This ${this.name} Study ${numOfHours} daily`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(numOfHours: number) {
    console.log(`This ${this.name} Class ${numOfHours} daily`);
  }
}

const student = new Student("Mr. Student");
const teacher = new Teacher("Mr. Teacher");

const getPersonInfo = (user: Person) => {
  if (isStudent(user)) {
    console.log("this is student instance");
  } else if (isTeacher(user)) {
    console.log("this is teacher instance");
  } else {
    console.log("this is person instance");
  }
};

// function gurd
const isStudent = (user: Person) => {
  return user instanceof Student;
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};
const student1 = getPersonInfo(student);
const teacher1 = getPersonInfo(teacher);
