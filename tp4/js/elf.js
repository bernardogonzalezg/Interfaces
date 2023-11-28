let duende = document.getElementById('duende');
let spidey = document.getElementById('spidey');

window.addEventListener('scroll', function(e){
    let rect = spidey.getBoundingClientRect();
    if (rect.top+400 <= window.innerHeight && rect.bottom-550 >= 0) {
        let scrollTop = window.scrollY;
        duende.style.transform = 'translate(0, calc(-50% + ' + scrollTop / 2 + 'px)) scale(0.9)';
    }
});
