$(document).ready(function () {
    $('#task-result').hide();
    fetchTasks();

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
        $.post('task-add.php', postData, function (response) {
            $('#task-form').trigger('reset');
            fetchTasks();
        });
        e.preventDefault();
    });

    /* Mostrando datos en la Tabla */
    function fetchTasks() {
        $.ajax({

            url: 'task-list.php',
            type: 'GET',
            success: function (response) {
                let tasks = JSON.parse(response);
                let template = '';
                tasks.forEach(tasks => {
                    template +=
                        `<tr task-id= "${tasks.id}">
                            <td>${tasks.id}</td>
                            <td>${tasks.name}</td>
                            <td>${tasks.description}</td>
                            <td><button class="task-delete btn btn-danger">Delete</button></td>
                        </tr>`
                });
                $('#tasks').html(template);
            }
        });
    }

    /* Detectando Boton Eliminar */
    $(document).on('click', '.task-delete', function(){
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('task-id')
        
        $.post('task-delete.php', {id}, function (response) {
            fetchTasks();
        });
    })

});
