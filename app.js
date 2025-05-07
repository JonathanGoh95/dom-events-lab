/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const displayContent = display.textContent;

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  // console.log(event.target.innerText);

  // Example (Do something with a number)
  if (event.target.classList.contains("number")) {
    if (event.target.innerText === "0") {
      display.textContent += 0;
    } else if (event.target.innerText === "1") {
      // display.textContent += 1;
      setNumbers(1);
    } else if (event.target.innerText === "2") {
      display.textContent += 2;
    } else if (event.target.innerText === "3") {
      display.textContent += 3;
    } else if (event.target.innerText === "4") {
      display.textContent += 4;
    } else if (event.target.innerText === "5") {
      display.textContent += 5;
    } else if (event.target.innerText === "6") {
      display.textContent += 6;
    } else if (event.target.innerText === "7") {
      display.textContent += 7;
    } else if (event.target.innerText === "8") {
      display.textContent += 8;
    } else if (event.target.innerText === "9") {
      display.textContent += 9;
    }
  }

  // Example (Do something with this operator)
  if (event.target.classList.contains("operator")) {
    if (event.target.innerText === "+") {
      display.textContent += "+";
    } else if (event.target.innerText === "-") {
      display.textContent += "-";
    } else if (event.target.innerText === "*") {
      display.textContent += "*";
    } else if (event.target.innerText === "/") {
      display.textContent += "/";
    } else if (event.target.innerText === "C") {
      display.textContent = "";
    }
  }

  if (event.target.innerText === "=") {
    if (display.textContent.includes("+")) {
      let result = display.textContent.split("+").map(Number);
      let output = result.reduce((acc, num) => acc + num);
      display.textContent = output;
    } else if (display.textContent.includes("-")) {
      let result = display.textContent.split("-").map(Number);
      let output = result.reduce((acc, num) => acc - num);
      display.textContent = output;
    } else if (display.textContent.includes("*")) {
      let result = display.textContent.split("*").map(Number);
      let output = result.reduce((acc, num) => acc * num);
      display.textContent = output;
    } else if (display.textContent.includes("/")) {
      let result = display.textContent.split("/").map(Number);
      let output = result.reduce((acc, num) => acc / num);
      display.textContent = output;
    }
    setTimeout(() => (display.textContent = ""), 5000); //Clears Display within 5 seconds after clicking the Equal Button
  }
});

/*-------------------------------- Functions --------------------------------*/
const setNumbers = (num) = {
  return displayContent += num;
}