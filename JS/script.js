let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){

    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("gimp");
        habilidades[4].classList.add("wordpress");
        habilidades[5].classList.add("flutter");
        habilidades[6].classList.add("sql");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajoenequipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("proyect");
        habilidades[12].classList.add("habilidadestec");
        habilidades[13].classList.add("adaptabilidad");
    }
}

window.onscroll = function(){
    efectoHabilidades();
} 
const bgAnimation = document.getElementById('bgAnimation');
const numberOfColorBoxes = 400;
for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
window.addEventListener('resize', function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    contenedorPrincipal.style.width = windowWidth + '100px';
    contenedorPrincipal.style.height = windowHeight + '100px';

  });
  
window.dispatchEvent(new Event('resize'));
  