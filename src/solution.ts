function checkWithPattern(
  data: number | string,
  pattern: { [key: number]: string } = { 3: "Fizz", 5: "Buzz" },
  useDefaultPattern: boolean = true
) {
  let result: string = "";
  const mergedPattern = useDefaultPattern
    ? { 3: "Fizz", 5: "Buzz", ...pattern }
    : pattern;
  const dividers = Object.keys(mergedPattern).map(Number);
  for (let divider of dividers) {
    if (typeof data === "number" && data % divider === 0) {
      result += mergedPattern[divider];
    }
  }
  return result !== "" ? result : data;
}

function fizzBuzz(
  input: number | (number | string)[],
  map: { [key: number]: string } = { 3: "Fizz", 5: "Buzz" },
  useDefaultPattern: boolean = true
) {
  if (typeof input === "number") {
    return checkWithPattern(input, map, useDefaultPattern);
  } else if (Array.isArray(input)) {
    for (let i = 0; i < input.length; i++) {
      const item = input[i];

      if (typeof item === "number") {
        let answer = checkWithPattern(item, map, useDefaultPattern);

        if (answer !== item) {
          input[i] = answer;
        }
      }
    }
  }

  return input;
}

const data = [3, 5, 20, 90, 8];
const pattern = {
  2: "try",
  3: "huhu",
  9: "kids",
};

console.log(fizzBuzz(data, pattern, false));

// (number | number[], pattern : {ket: value})
