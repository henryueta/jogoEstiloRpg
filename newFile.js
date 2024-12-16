window.addEventListener("keydown", function (event) {
    var tecla = event.keyCode;
    if (atack == true) {
        if (tecla == 90) {
            console.log(vida);
            vida--;

            if (vida == 0) {
                alert("AAAAAAA");
                document.getElementById('circulo').style.display = "none";
            }


        }
    }

    if (tecla == 38) {
        cimaB();
        clearInterval(tempo4);
    }

    if (tecla == 40) {
        baixoB();
        clearInterval(tempo4);
    }

    if (tecla == 37) {
        esquerdaB();
        clearInterval(tempo4);
    }

    if (tecla == 39) {
        direitaB();
        clearInterval(tempo4);
    }


});
