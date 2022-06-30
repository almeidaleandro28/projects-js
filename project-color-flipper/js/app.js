const colors = ["red", "blue", "orange", "gray", "black"];

const btn = document.querySelector(".btn");
const setColor = document.querySelector(".change-color")

const changeColor = () => {
  const randomNumber = Math.floor( Math.random() * colors.length );
  
  document.querySelector(".main").style.backgroundColor = colors[ randomNumber ];
  setColor.textContent = colors[ randomNumber ];
}

btn.addEventListener("click", changeColor);