/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
display.textContent = "0"; //Loads up the calculator with a display value of 0
calculator.addEventListener("click", (event) => {
  //Clears the display field if a 0 is inside it upon clicking any of the number buttons
  if (display.textContent === "0") {
    display.textContent = "";
  }
  //Appends the respective numbers to the display upon clicking
  if (event.target.classList.contains("number")) {
    if (event.target.innerText === "0") {
      display.textContent += 0;
    } else if (event.target.innerText === "1") {
      display.textContent += 1;
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

  //Appends the respective operator symbols to the display upon clicking
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
      //Sets the display value to 0 when the 'C' button is clicked
      display.textContent = "0";
    }
  }

  //Performs the respective arithmetic operations
  if (event.target.innerText === "=") {
    if (display.textContent.includes("+")) {
      let result = display.textContent.split("+").map(Number);
      display.textContent = operatorFuncs("+", result);
    } else if (display.textContent.includes("-")) {
      let result = display.textContent.split("-").map(Number);
      display.textContent = operatorFuncs("-", result);
    } else if (display.textContent.includes("*")) {
      let result = display.textContent.split("*").map(Number);
      display.textContent = operatorFuncs("*", result);
    } else if (display.textContent.includes("/")) {
      let result = display.textContent.split("/").map(Number);
      display.textContent = operatorFuncs("/", result);
    }

    //Set Display back to 0 within 5 seconds after clicking the Equal Button
    const dispTimeout = setTimeout(() => {
      display.textContent = "0";
    }, 5000);
    //If user clicks a number of operator button within 5 seconds of clicking the Equal button, the timeout function will be removed.
    calculator.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("number") ||
        event.target.classList.contains("operator")
      ) {
        clearTimeout(dispTimeout);
      }
    });
  }
});

/*-------------------------------- Functions --------------------------------*/
//Function for handling the respective arithmetic operations using the array iterator reduce method
const operatorFuncs = (oper, output) => {
  if (oper === "+") {
    return output.reduce((acc, num) => acc + num);
  } else if (oper === "-") {
    return output.reduce((acc, num) => acc - num);
  } else if (oper === "*") {
    return output.reduce((acc, num) => acc * num);
  } else if (oper === "/") {
    return output.reduce((acc, num) => acc / num);
  }
};
