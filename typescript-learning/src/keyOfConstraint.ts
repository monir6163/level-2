// keyOf operator

const user = {
  name: "Monir",
  age: 25,
  address: {
    city: "Dhaka",
  },
};

const products = {
  name: "HP",
  price: 50,
  brand: "HP",
  category: "Laptop",
};

const getKeyOfObj = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const result1 = getKeyOfObj(user, "name");
console.log(result1);

const result2 = getKeyOfObj(products, "price");

console.log(result2);
