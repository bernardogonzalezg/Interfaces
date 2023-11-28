let spiderWhite = document.getElementById('spider-white');
let spiderRed = document.getElementById('spider-red');
let spiderBlack = document.getElementById('spider-black');

spiderWhite.addEventListener('mouseover', function(){
    section7.style.backgroundImage = 'url("images/pink_bground.png")';
    section7.style.backgroundSize = '100% 1000px';
    section7.style.backgroundRepeat = 'no-repeat';
    spiderWhite.style.transform = 'scale(1.05)';
    spiderWhite.style.filter= 'blur(0)';
    spiderRed.style.transform = 'scale(0.7)';
    spiderRed.style.filter= 'blur(5px)';
    spiderBlack.style.transform = 'scale(0.7)';
    spiderBlack.style.filter= 'blur(5px)';
});

spiderRed.addEventListener('mouseover', function(){
    section7.style.backgroundImage = 'url("images/blue_bground.png")';
    section7.style.backgroundSize = '100% 1000px';
    section7.style.backgroundRepeat = 'no-repeat';
    spiderRed.style.transform= 'scale(1.1)';
    spiderRed.style.filter= 'blur(0)';
    spiderWhite.style.transform = 'scale(0.7)';
    spiderWhite.style.filter= 'blur(5px)';
    spiderBlack.style.transform = 'scale(0.7)';
    spiderBlack.style.filter= 'blur(5px)';

});

spiderBlack.addEventListener('mouseover', function(){
    section7.style.backgroundImage = 'url("images/grey_bground.png")';
    section7.style.backgroundSize = '100% 1000px';
    section7.style.backgroundRepeat = 'no-repeat';
    spiderBlack.style.transform ='scale(1.1)';
    spiderBlack.style.filter= 'blur(0)';
    spiderWhite.style.transform = 'scale(0.7)';
    spiderWhite.style.filter= 'blur(5px)';
    spiderRed.style.transform = 'scale(0.7)';
    spiderRed.style.filter= 'blur(5px)';

});
