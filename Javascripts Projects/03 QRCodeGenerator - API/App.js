let input = document.getElementById("input");
const submit = document.getElementById("submit");
const img = document.getElementById("img");
const title = document.querySelector(".title");
const main = document.getElementById("main");

function generateQR() {
  if (input.value.length > 0) {
    console.log(input);
    title.innerHTML = input.value;
    img.style.display = "block";
    main.style.height = "600px";
  }
  return;
}
generateQR();

submit.addEventListener("click", generateQR);
