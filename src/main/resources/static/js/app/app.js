$(document).ready(new function () {
    console.log("Carregou JQuery Ready. " + new Date());
    $("#btnSearch").click(function () {
        //var keyword = $.escapeSelector($("#txSearch").val());
        var keyword = $("#txSearch").val();
        //var inputString = "Exemplo de string de entrada com caracteres especiais!@#$";
        var sanitizedString = keyword.replace(/[^a-zA-Z0-9]/g, "");
        // console.log(sanitizedString); // Output: "Exemplodestringdeentradacaracteresespeciais"

        alert("Buscar por: " + sanitizedString);
        console.log("busca [" + sanitizedString + "]");
    });

    $("#btnAjax").click(function () {
        //var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
        //alert("antes do ajax. " + CONTEXT_PATH );
        //alert("antes do ajax. ");

        $.ajax({
            dataType: "json",
            type: 'GET',
            url: 'home',
            data: {
                text: 'hello'
            },
            success: function (text) {
                var retorno = JSON.stringify(text);
                //alert('Sucesso: ' + JSON.stringify(text));
                console.log("nome: " + text.nome);
                console.log("sobrenome: " + text.sobrenome);
                //document.getElementById("divResult").textContent = JSON.stringify(text);
                $("#divResult").text(retorno);
            },
            error: function (jqXHR) {
                console.log('Error: ' + jqXHR.status);
            }
        });

        /* 
        $.post("homePost", {"valor": "100"}, function(data, status){
            alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        });
        */

        /*
        $.ajax({
            type: "GET",
            url: "home",
        }).then(function (data, status, jqxhr) {
            alert("data: " + JSON.stringify(data));
            alert("status: " + status);
            if (jqxhr) {
                alert("jqxhr: " + jqxhr.status);
            }
        });
        */
    });
});