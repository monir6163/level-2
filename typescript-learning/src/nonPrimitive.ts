// array, object, function

// tupple
let bazarList: string[] = ["eggs", "milk", "sugar", "apple"];
bazarList.push("85");

let mixArr: (string | number)[] = ["eggs", 4, "milk", 2, "sugar", 5];
mixArr.push("apple");

const coordinates: [number, number] = [5, 8];

const user: {
  readonly organization: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  organization: "insanSoft",
  firstName: "Monir",
  lastName: "Hossain",
  isMarried: true,
};
// console.log(user);
