
document.addEventListener("DOMContentLoaded", function () {
  let title1 = document.getElementById("title-1");
  let title2 = document.getElementById("title-2");
  let title3 = document.getElementById("title-3");
  let title4 = document.getElementById("title-4");

  let text1 = document.getElementById("text-1");
  let text2 = document.getElementById("text-2");
  let text3 = document.getElementById("text-3");
  let text4 = document.getElementById("text-4");

  let texts = [text1, text2, text3, text4];

  let img1 = document.getElementById("image1");
  let img2 = document.getElementById("image2");
  let img3 = document.getElementById("image3");
  let img4 = document.getElementById("image4");

  const observador = new IntersectionObserver(entries => {
    //itera x cada entrada, por cada texto
    entries.forEach(entry => {
      //esta visible?
      if (entry.isIntersecting) {
        //indice del texto actual del arreglo texts, asi se ve cual texto es el visible
        //entry.target(me devuelve el obj), indexof el indice de ese obj en arrglo
    
        const index = texts.indexOf(entry.target);

        //Ajusta la opacidad de todas las imágenes a 0, para q solo este visible la q yo quiero
        [img1, img2, img3, img4].forEach(img => (img.style.opacity = 0));
        //ajusta titulos
        [text1, text2, text3, text4].forEach(title => (title.style.opacity = 0));

        [title1, title2, title3, title4].forEach(title => (title.style.opacity = 0));
        
        //segun la pos en el arreglo sera la imagen y texto q quiero ver
        switch (index) {

          case 0:
            img1.style.opacity = 1;
            text1.style.opacity = 1;
            title1.style.opacity = 1;
            // title2.style.opacity =0;
            break;

          case 1:
            img2.style.opacity = 1;
            text1.style.opacity = 0;
            title1.style.opacity = 0;
            text2.style.opacity = 1;
            title2.style.opacity =1;
            break;

          case 2:
            img3.style.opacity = 1;
            text3.style.opacity = 1;
            title3.style.opacity =1;
            text2.style.opacity = 0;
            title2.style.opacity = 0;
            break;

          case 3:
            img4.style.opacity = 1;
            title4.style.opacity = 1;
            text3.style.opacity = 0;
            title3.style.opacity = 0;
            text4.style.opacity = 1;
            break;
            
          default:
            break;
        }
      }
    });
  });
  //Observa cada texto individual, que este en el arrgelo
  texts.forEach(text => {
    observador.observe(text);
  });
});
