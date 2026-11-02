// Arrow function that returns a Promise
const divide = (a, b) =>
  new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
      reject("Both inputs must be valid numbers.");
    } else if (b === 0) {
      reject("Division by zero is not allowed.");
    } else {
      resolve(a / b);
    }
  });

// Dummy test cases (7 cases)
const testCases = [
  [10, 2],
  [10, 0],
  [7, 2],
  [-9, 3],
  [0, 5],
  [100, 4],
  [5, "abc"] // invalid input
];

const output = document.getElementById("output");

// Show one result in the console and on the page
const show = (lines, type) => {
  lines.forEach((line) => console.log(line));
  const div = document.createElement("div");
  div.className = "case " + type;
  div.innerHTML = lines.map((l, i) => `<p class="${i === 1 ? "status" : ""}">${l}</p>`).join("");
  output.appendChild(div);
};

// Run every case in order, handling resolve and reject
const runTests = async () => {
  for (const [a, b] of testCases) {
    const first = `Dividing ${a} by ${b}...`;
    await divide(a, b)
      .then((result) => show([first, `Result: ${result}`], "success"))
      .catch((error) => show([first, `Error: ${error}`], "error"));
  }
};

runTests();