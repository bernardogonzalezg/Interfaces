let card01 = document.getElementById('section-4-card1');
let card02 = document.getElementById('section-4-card2');
let card03 = document.getElementById('section-4-card3');

let section4 = document.getElementById('section4');

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

card03.addEventListener('mouseleave', function() {
    card03.style.transform = 'none';
    card03.style.transition = 'none';
});