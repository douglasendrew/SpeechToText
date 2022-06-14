function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// window.addEventListener('DOMContentLoaded', function () {
//     recognition.start();
// }, false);


$("#speakBtn").click(() => {

    setInterval(() => {
        recognition.start();
    }, 1000);


    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

    var recognition = new SpeechRecognition();

    recognition.addEventListener('result', function (e) {

        setTimeout(() => {
        }, 1000);

        var result = e.results[0][0].transcript;

        $("#pesquisaUsuario").html("Você disse: " + result);

        if (result.toLowerCase().indexOf('acender luz') > -1) {
            $("body").removeClass('luz-apagada');
        }

        if (result.toLowerCase().indexOf('apagar luz') > -1) {
            $("body").addClass('luz-apagada');
        }

        if (
            result.toLowerCase().indexOf('abrir') > -1 ||
            result.toLowerCase().indexOf('abre') > -1 ||
            result.toLowerCase().indexOf('abra') > -1
        ) {

            if (result.toLowerCase().indexOf('google') > -1) {
                if (result.toLowerCase().indexOf('pesquise') > -1) {
                    $("#bip").trigger("click");

                    var posicaoPesquisa = result.toLowerCase().indexOf('pesquise');
                    var pesquisaUsuario = result.substring((posicaoPesquisa + 9), result.length);

                    window.open('https://www.google.com.br/search?q=' + pesquisaUsuario, '_blank');
                } else if (result.toLowerCase().indexOf('pesquisa') > -1) {
                    $("#bip").trigger("click");

                    var posicaoPesquisa = result.toLowerCase().indexOf('pesquisa');
                    var pesquisaUsuario = result.substring((posicaoPesquisa + 9), result.length);

                    window.open('https://www.google.com.br/search?q=' + pesquisaUsuario, '_blank');
                } else if (result.toLowerCase().indexOf('pesquisar') > -1) {
                    $("#bip").trigger("click");

                    var posicaoPesquisa = result.toLowerCase().indexOf('pesquisar');
                    var pesquisaUsuario = result.substring((posicaoPesquisa + 9), result.length);

                    window.open('https://www.google.com.br/search?q=' + pesquisaUsuario, '_blank');
                } else {
                    $("#bip").trigger("click");

                    window.open('https://www.google.com.br', '_blank');
                }
            } else if (result.toLowerCase().indexOf('youtube') > -1) {
                if (result.toLowerCase().indexOf('pesquise') > -1) {
                    $("#bip").trigger("click");

                    var posicaoPesquisa = result.toLowerCase().indexOf('pesquise');
                    var pesquisaUsuario = result.substring((posicaoPesquisa + 9), result.length);

                    window.open('https://www.youtube.com/search?q=' + pesquisaUsuario, '_blank');
                } else if (result.toLowerCase().indexOf('pesquisa') > -1) {

                    $("#bip").trigger("click");

                    var posicaoPesquisa = result.toLowerCase().indexOf('pesquisa');
                    var pesquisaUsuario = result.substring((posicaoPesquisa + 9), result.length);

                    window.open('https://www.youtube.com/search?q=' + pesquisaUsuario, '_blank');
                } else if (result.toLowerCase().indexOf('pesquisar') > -1) {

                    $("#bip").trigger("click");

                    var posicaoPesquisa = result.toLowerCase().indexOf('pesquisar');
                    var pesquisaUsuario = result.substring((posicaoPesquisa + 9), result.length);

                    window.open('https://www.youtube.com/search?q=' + pesquisaUsuario, '_blank');
                } else {
                    window.open('https://www.youtube.com', '_blank');
                    $("#bip").trigger("click");
                }
            }

        }

        if (
            result.toLowerCase().indexOf('ola') > -1 ||
            result.toLowerCase().indexOf('olá') > -1 ||
            result.toLowerCase().indexOf('oi') > -1 ||
            result.toLowerCase().indexOf('eai') > -1
        ) {

            $("#bip").trigger("click");

            setTimeout(() => {
                $("#oi").trigger("click");
            }, 1000);

        }

        if (
            result.toLowerCase().indexOf('tudo bem') > -1 ||
            result.toLowerCase().indexOf('esta bem') > -1 ||
            result.toLowerCase().indexOf('tudo joia') > -1
        ) {

            var num = Math.floor(Math.random() * 1);

            if (num == 0) {
                $("#bip").trigger("click");

                setTimeout(() => {
                    $("#tudo_bem").trigger("click");
                }, 500);
            } else {
                $("#bip").trigger("click");
                
                setTimeout(() => {
                    $("#tudo_bem2").trigger("click");
                }, 1000);
            }
        }

    }, false);

    $("#oi").click(function () {
        const music = new Audio('sounds/Ola.mp3');
        music.play();
    });

    $("#tudo_bem").click(function () {
        const music = new Audio('sounds/estoubem.mp3');
        music.play();
    });

    $("#tudo_bem2").click(function () {
        const music = new Audio('sounds/Tudoevoce.mp3');
        music.play();
    });

    $("#bip").click(function () {
        const music = new Audio('sounds/bip.mp3');
        music.play();
    });

});