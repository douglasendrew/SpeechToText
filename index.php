<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Rangel</title>

    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

    <style>
        body {
            font-size: 30px;
        }

        .luz-apagada {
            color: white;
            background-color: black;
        }
    </style>

</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <span id="pesquisaUsuario"></span>
            </div>
        </div>

        <div class="text-center">
            <button class="btn btn-success btn-lg" id="speakBtn">Iniciar</button>
        </div>
    </div>


    <!-- Botoes de voz interativa -->
    <button id="oi" hidden>ola</button>
    <button id="tudo_bem" hidden>tudo bem?</button>
    <button id="tudo_bem2" hidden>tudo bem?</button>
    <button id="bip" hidden>bip</button>

</body>

</html>
<script src="includes/main.js"></script>