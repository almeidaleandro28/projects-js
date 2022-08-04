const coments = [
  {
  id: 1,
    name: "susan smith",
    job: "DBA",
    img:"prople-dba.jpg",
    text: "I'm DBA junior. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, vero. Natus ex qui esse quae?"
  },
  {
    id: 2,
    name: "anna johnson",
    job: "UX design",
    img:"people-ux.jpg",
    text:"I'm UX design. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, vero. Natus ex qui esse quae?"
  }
];

const avatar = document.querySelector(".card-avatar");
const author = document.querySelector(".card-name");
const job = document.querySelector(".card-job");
const information = document.querySelector(".card-info");
// buttons
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const btnRandom = document.querySelector(".btn-random");

let currentItem = 0;

// load initial item
const loadItem = () => {
  const item = coments[ currentItem ];
  console.log(item);
  avatar.src = `./img/${item.img}`; 
  author.innerHTML = item.name;
  job.innerHTML = item.job;
  information.innerHTML = item.text;
}

window.addEventListener("DOMContentLoaded", loadItem);

const nextComment = () => {
  currentItem > coments.length ? currentItem = 0 : currentItem++;
  showPerson( currentItem );
};
const previousComent = () => {
  currentItem--;
  if( currentItem < 0 ) {
    currentItem = coments.length -1;
    console.log(coments.length);
    console.log( currentItem );
  }
  showPerson( currentItem );

};

// show person 
const showPerson = ( person ) => {
  const item = coments[ person ];
  console.log(item);
  avatar.src = `./img/${item.img}`; 
  author.innerHTML = item.name;
  job.innerHTML = item.job;
  information.innerHTML = item.text;
}

// next comment 
btnNext.addEventListener("click", nextComment );
// previous comment
btnPrev.addEventListener("click", previousComent );

