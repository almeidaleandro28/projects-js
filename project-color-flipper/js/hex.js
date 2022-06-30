const colors = [ "1", "2", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];

const btn = document.querySelector(".btn");
const setColor = document.querySelector(".change-color");



const changeColor = () => {
  const randomNumber = Math.floor( Math.random() * colors.length );
  let hexColor = "#";

  for ( let i = 0; i < 6; i++ ) {
  
    hexColor += colors[ randomNumber ];
  }
  
  setColor.textContent = hexColor;
  document.querySelector(".main").style.backgroundColor = hexColor ; 


}

btn.addEventListener("click", changeColor);