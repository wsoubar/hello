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
            url: 'http://localhost:8080/SampleApp/home',
            data: {
                text: 'hello'
            },
            success: function(text) {
                console.log('Sucesso: ' + JSON.stringify(text));
                console.log("nome: " + text.nome);
                console.log("sobrenome: "+ text.sobrenome);
            },
            error: function(jqXHR) {
                console.log('Error: ' + jqXHR.status);
            }
        });        
            /*
        $.ajax({
            type: "GET",
            contextType: "application/json",
            url: "http://localhost:8080/SampleApp/home",
        }).then(function (data, status, jqxhr) {
            alert("oooiii");
        });
        &*/
    });
    /*
            dataType: "json",
            cache: false,
            success: function(result){
                alert(result);
                $("#divResult").html(result);
            },
            error: function (e) {
                alert("Deu erro " + e.responseText);                
            }

    */
});