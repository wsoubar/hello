$(document).ready(new function(){
    //console.log("Carregou JQuery Ready. " + new Date());
    $("#btnSearch").on('click', function(e){
        var keyword = $("#txSearch").val();
        alert("Buscar por: "+ keyword);
    });

    $("#btnAjax").on('click', function(e){
        //var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
        //alert("antes do ajax. " + CONTEXT_PATH );
        alert("antes do ajax. ");
        $.ajax({
            type: "GET",
            contextType: "application/json",
            url: "https://dummyjson.com/carts",
        }).then(function (data, status, jqxhr) {
            alert("oooiii");
        });
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