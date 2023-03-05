let result = document.querySelector("#result");
let string = "";

const buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      result.innerHTML = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      result.innerHTML = "";
    } else {
      string = string + e.target.innerHTML;
      result.innerHTML = string;
      console.log(result);
    }
  });
});
