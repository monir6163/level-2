const addToCourse = <T>(stuentInfo: T) => {
  return {
    course: "Next level",
    ...stuentInfo,
  };
};

const student1 = {
  name: "Monir",
  roll: 10,
  class: 5,
  isPen: true,
};
const student2 = {
  name: "Rakib",
  roll: 5,
  class: 5,
  isPen: false,
  isMarried: false,
};
const result = addToCourse(student1);
console.log(result);
const result1 = addToCourse(student2);
console.log(result1);
