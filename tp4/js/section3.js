window.onscroll = function(){cardsIn()};


const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

let distanceCard1;

function cardsIn(){
    distanceCard1 = window.innerHeight - card1.getBoundingClientRect().top;
    console.log(distanceCard1);
    if(distanceCard1 >= 25){
        card1.classList.add("efecto-card1");
        card2.classList.add("efecto-card2");
        card3.classList.add("efecto-card3");
    } else{
        card1.classList.remove("efecto-card1");
        card2.classList.remove("efecto-card2");
        card3.classList.remove("efecto-card3");
        card1.classList.add("efecto-card1-remove");
        card2.classList.add("efecto-card2-remove");
        card3.classList.add("efecto-card3-remove");
    }
}
