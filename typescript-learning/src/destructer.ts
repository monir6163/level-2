type User = {
  id: number;
  name: string;
  age: number;
  phone: string;
};
const user: User = {
  id: 1,
  name: "Monir",
  age: 24,
  phone: "017",
};

const { id, name: userName, age, phone } = user; // name:userName => name alias
