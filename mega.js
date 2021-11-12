let noticias = document.querySelector('.titulo-pub-conteudo-h1 h1');
let imgBanner = document.querySelector('.foto-banners-second-pub-img-1 img')

function ultima(){
    // noticias.innerHTML = 'Willy Biti';
    // imgBanner.style.display = 'none';
}


ultima();



function subirTela(){
    //SCROLL = ROLAGEM
    window.scrollTo({
        top: 0,
        behavior: 'smooth' //BEHAVIOR= COMPORTEMENTO
    })
}

function botaoSumir(){
    if(window.scrollY === 0){
        document.querySelector('.botao-subir').style.display = 'none';
    } else{
        document.querySelector('.botao-subir').style.display = 'block';
    }
}

window.addEventListener('scroll', botaoSumir)