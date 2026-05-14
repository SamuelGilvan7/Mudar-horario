window.addEventListener("load", carregar);

function carregar() {
    let hora = new Date();
    let hora_atual = hora.getHours();

    let imagem = document.getElementById("imagem");
    let mensagem = document.getElementById("msg");

    mensagem.innerHTML = `Agora são ${hora_atual} horas`;

    if (hora_atual >= 0 && hora_atual < 12) {

        imagem.src ="img/pexels-koyeldey-34789439-photoaidcom-cropped.png";
        document.body.style.background = "#e2cd9f";

    }else if(hora_atual >= 12 && hora_atual < 18) {

        imagem.src = "img/pexels-2dreamersphoto-2753112-photoaidcom-cropped.png";
        document.body.style.background = "#b9846f";

    }else {

        imagem.src = "img/pexels-2dreamersphoto-2753112-photoaidcom-cropped (1).png"
        document.body.style.background = "#515154"
        
    }



}