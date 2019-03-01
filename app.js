$(document).ready(function () {
    /* Guardando lo que esta en el formulario*/
   $('#search').keyup(function(e){
        let search = $('#search').val();
        $.ajax({
            url: 'task-search.php',
            type: 'POST',
            data: {search}, //Enviando valor de input
            success: function (response) {
                console.log(response);
            }
        })
        //console.log(search);
   }); 

});