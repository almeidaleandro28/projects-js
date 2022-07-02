const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
let count = 0;

const changeCounter = ( e ) => {
  const styles = e.currentTarget.classList;
  
  if ( styles.contains( "decrease" ) ) {
    count--;
  } else if ( styles.contains( "increase" ) ) {
    count++;
  } else {
    count = 0;
  }

  if ( count > 0 ) {
    result.style.color = "green";
  } else if ( count < 0  ) {
    result.style.color = "red";
  } else {
    result.style.color = "blue";
  }

 result.textContent = count;
   
}

btns.forEach( btn =>  btn.addEventListener("click", changeCounter ) );



