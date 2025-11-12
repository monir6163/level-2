const convarter = (input: string | number): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Output is: ${Number(value) * 1000}`;
  }
};
const result1 = convarter(2) as number; // type assertion
console.log(result1);
const result2 = convarter("3 kg") as string; // type assertion
console.log(result2);
