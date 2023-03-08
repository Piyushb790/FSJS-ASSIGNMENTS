const button = document.getElementById("button");

const canvas = document.getElementById("canvas");
const hexcolor = () => {
  let color = (Math.random() * 0xffffff) << 0;
  result = color.toString(16).slice(0, 6);
  canvas.innerHTML = "#" + result;
  canvas.style.backgroundColor = "#" + result;
  return result;
};

hexcolor();

button.addEventListener("click", hexcolor);
