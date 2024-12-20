console.log(window.innerWidth);
console.log(window.innerHeight);

if (window.innerWidth > 1050) {
  document.body.classList.add("padding20");
}
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
  let crystal = document.createElement("img");
  crystal.src = "../img/logo1.png";
  crystal.classList.add("crystal");
  crystal.style.position = "absolute";
  crystal.style.top = `${rand(
    0,
    document.documentElement.scrollHeight - 100
  )}px`;
  crystal.style.left = `${rand(
    0,
    document.documentElement.scrollWidth - 100
  )}px`;

  let temp = rand(0, 5);

  crystal.style.rotate = `${rand(0, 360)}deg`;

  switch (temp) {
    case 1:
      crystal.style.filter = `blur(${temp}px)`;
      crystal.style.height = `90px`;
      crystal.style.zIndex = `1`;
      break;
    case 2:
      crystal.style.filter = `blur(${temp}px)`;
      crystal.style.height = `60px`;
      crystal.style.zIndex = `1`;
      break;
    case 3:
      crystal.style.filter = `blur(${temp}px)`;
      crystal.style.height = `40px`;
      crystal.style.zIndex = `1`;
      break;
    case 4:
      crystal.style.filter = `blur(${temp}px)`;
      crystal.style.height = `20px`;
      crystal.style.zIndex = `1`;
      break;
    case 5:
      crystal.style.filter = `blur(${temp}px)`;
      crystal.style.height = `10px`;
      crystal.style.zIndex = `1`;
      break;
    default:
      crystal.style.filter = `blur(${temp}px)`;
      crystal.style.height = `100px`;
      crystal.style.zIndex = `3`;
      break;
  }

  document.body.append(crystal);
}

document.addEventListener("mousemove", function (e) {
  let moveElements = document.querySelectorAll(".crystal");
  moveElements.forEach(function (moveElement) {
    let offsetX = (window.innerWidth / 2 - e.clientX) * 0.05;
    let offsetY = (window.innerHeight / 2 - e.clientY) * 0.05;

    moveElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

document.getElementById("btn2").addEventListener("click", () => {
  const textToCopy = "NorthLights.org";

  const tempInput = document.createElement("textarea");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999); 
  document.execCommand("copy");

  document.body.removeChild(tempInput);
});
