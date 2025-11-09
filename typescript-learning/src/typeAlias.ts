type User = {
  id: number;
  name: string;
  age: number;
  address?: string;
  phone: string;
};

const userInfo: User = {
  id: 1,
  name: "Monir",
  age: 24,
  address: "Dhaka",
  phone: "017",
}; // userInfo:User => type alias
