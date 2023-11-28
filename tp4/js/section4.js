let card01 = document.getElementById('section-4-card1');
let card02 = document.getElementById('section-4-card2');
let card03 = document.getElementById('section-4-card3');

let section4 = document.getElementById('section4');

window.addEventListener('scroll', function(e){
    let rect = section4.getBoundingClientRect();
    if (rect.top+100 <= window.innerHeight && rect.bottom-100 >= 0) {
        let scroll = window.scrollY;
        card01.style.transform = 'translateX(calc(-65% + ' + scroll *0.15 + 'px))';
        card02.style.transform = 'translateX(calc(-65% + ' + scroll *0.15 + 'px))';
        card03.style.transform = 'translateX(calc(-65% + ' + scroll *0.15 + 'px))';   
    }
});

card01.addEventListener('mouseenter', function() {
    card01.style.transform = 'skewY(7deg)';
    card01.style.transition = 'all 0.5s ease-in-out';
});

card01.addEventListener('mouseleave', function() {
    card01.style.transform = 'none';
    card01.style.transition = 'none';
});

card02.addEventListener('mouseenter', function() {
    card02.style.transform = 'skewY(7deg)';
    card02.style.transition = 'all 0.5s ease-in-out';
});

card02.addEventListener('mouseleave', function() {
    card02.style.transform = 'none';
    card02.style.transition = 'none';
});

card03.addEventListener('mouseenter', function() {
    card03.style.transform = 'skewY(7deg)';
    card03.style.transition = 'all 0.5s ease-in-out';
});

card3.addEventListener('mouseleave', function() {
    card3.style.transform = 'none';
    card3.style.transition = 'none';
});