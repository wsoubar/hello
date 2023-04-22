$(document).ready(new function(){
    //console.log("Carregou JQuery Ready. " + new Date());
    $("#btnSearch").on('click', function(e){
        var keyword = $("#txSearch").val().escape();
        alert("Buscar por: "+ keyword);
    });

    $("#btnAjax").on('click', function(e){
        //var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
        //alert("antes do ajax. " + CONTEXT_PATH );
        alert("antes do ajax. ");

        $.ajax({
            type: 'GET',
            url: 'home',
            data: {
                text: 'hello'
            },
            success: function(text) {
                alert('Sucesso: ' + JSON.stringify(text));
                console.log("nome: " + text.nome);
                console.log("sobrenome: "+ text.sobrenome);
            },
            error: function(jqXHR) {
                console.log('Error: ' + jqXHR.status);
            }
        });

        $.post("homePost", {"valor": "100"}, function(data, status){
            alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        });
        
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