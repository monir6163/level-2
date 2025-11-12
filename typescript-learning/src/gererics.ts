type GenericType<T> = Array<T>;

const friends: GenericType<string> = ["Monir", "Rakib"];
const rollNumber: GenericType<number> = [33, 22, 55];

const isAdmin: GenericType<boolean> = [true, false];

// Generics with type alias
type User = {
  name: string;
  age: number;
};

const userList: GenericType<User> = [
  {
    name: "Monir",
    age: 23,
  },
];
