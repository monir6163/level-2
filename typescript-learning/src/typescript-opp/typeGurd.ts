// type of gurd
const add = (num1: number | string, num2: number | string) => {
  if (typeof num1 === "number" && num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};
console.log(add(2, "2"));

// type in gurd

type User = {
  name: string;
};

type Admin = {
  name: string;
  role: "Admin";
};
const getUserInfo = (user: User | Admin) => {
  if ("role" in user) {
    console.log("Admin role");
  } else {
    console.log("user name");
  }
};
