function checkWithPattern(
  data: number | string,
  pattern: { [key: number]: string } = { 3: "Fizz", 5: "Buzz" }
) {
  let result: string = "";
  const mergedPattern = { 3: "Fizz", 5: "Buzz", ...pattern };
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
  map: { [key: number]: string } = { 3: "Fizz", 5: "Buzz" }
) {
  if (typeof input === "number") {
    return checkWithPattern(input);
  } else {
    for (let i = 0; i <= input.length; i++) {
      let answer = checkWithPattern(input[i], map);
      if (answer !== input[i]) {
        input[i] = answer;
      }
    }
  }

  return input;
}

console.log(fizzBuzz([3, 5, 2, 8, 10], { 2: "Nick", 4: "Peter" }));

// (number | number[], pattern : {ket: value})
