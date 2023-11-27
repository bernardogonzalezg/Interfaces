let card1 = document.getElementById('section-4-card1');
let card2 = document.getElementById('section-4-card2');
let card3 = document.getElementById('section-4-card3');

let section4 = document.getElementById('section4');

window.addEventListener('scroll', function(e){
    let rect = section4.getBoundingClientRect();
    if (rect.top+100 <= window.innerHeight && rect.bottom-100 >= 0) {
        // Obtener el valor de desplazamiento vertical (scroll)
        let scroll = window.scrollY;
        //card1.style.transform = 'translate(0, calc(-50% + ' + scroll / 12 + 'px))';
        card1.style.transform = 'translateX(calc(-65% + ' + scroll *0.15 + 'px))';
        card2.style.transform = 'translateX(calc(-65% + ' + scroll *0.15 + 'px))';
        card3.style.transform = 'translateX(calc(-65% + ' + scroll *0.15 + 'px))';
        
        //card2.style.transform = 'translate(0, calc(-50% + ' + scroll / 12 + 'px))';
       // card3.style.transform = 'translate(0, calc(-50% + ' + scroll / 12 + 'px))';
 }
});

card1.addEventListener('mouseenter', function() {
    card1.style.transform = 'skewY(7deg)';
    card1.style.transition = 'all 0.5s ease-in-out';
});

card1.addEventListener('mouseleave', function() {
    card1.style.transform = 'none';
    card1.style.transition = 'none';
});

card2.addEventListener('mouseenter', function() {
    card2.style.transform = 'skewY(7deg)';
    card2.style.transition = 'all 0.5s ease-in-out';
});

card2.addEventListener('mouseleave', function() {
    card2.style.transform = 'none';
    card2.style.transition = 'none';
});

card3.addEventListener('mouseenter', function() {
    card3.style.transform = 'skewY(7deg)';
    card3.style.transition = 'all 0.5s ease-in-out';
});

card3.addEventListener('mouseleave', function() {
    card3.style.transform = 'none';
    card3.style.transition = 'none';
});