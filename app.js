$(document).ready(function () {
    $('#task-result').hide();


    /* Guardando lo que esta en el formulario*/
    $('#search').keyup(function (e) {
        if ($('#search').val()) {
            let search = $('#search').val();
            $.ajax({
                url: 'task-search.php',
                type: 'POST',
                data: { search }, //Enviando valor de input
                success: function (response) {

                    let tasks = JSON.parse(response);
                    let template = '';

                    tasks.forEach(tasks => {
                        template += `<li>${tasks.name}</li>`
                    });

                    $('#container').html(template);
                    $('#task-result').show();
                }
            })
        } else { $('#task-result').hide(); }
    });

    /* Enviando por JQuery con el metodo POST */
    $('#task-form').submit(function (e) {
        const postData = {
            name: $('#name').val(),
            description: $('#description').val()
        }
        $.post('task-add.php', postData, function(response){
            console.log(response);
        });
        e.preventDefault();

    });
});