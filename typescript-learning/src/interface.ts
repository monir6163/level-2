type User = {
  name: string;
  age: number;
};

interface UserWithDetail extends User {
  address: string;
  role: "admin" | "user";
}

// interface jokhn object type er structer hbe and need extends then use interface
const user: UserWithDetail = {
  name: "Monir",
  age: 24,
  address: "Dhaka",
  role: "admin",
};

console.log(user);
