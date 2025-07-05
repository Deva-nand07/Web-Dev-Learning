let rand = Math.random();
console.log(rand);
let boxes = document.getElementsByClassName("boxes");
console.log(boxes);
function randomColor() {
  let r = Math.floor(Math.random() * 256); // Random number between 0 and 255
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = randomColor();
  boxes[i].style.color = randomColor();
}
setInterval(() => {
  let boxes = document.querySelectorAll(".boxes");
  boxes.forEach((box) => {
    box.style.backgroundColor = randomColor();
    box.style.color = randomColor();
  });
}, 1000); // changes colors every 1000 milliseconds (1 second)
