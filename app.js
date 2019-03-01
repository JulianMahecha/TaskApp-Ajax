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
                        `<tr>
                            <td>${tasks.id}</td>
                            <td>${tasks.name}</td>
                            <td>${tasks.description}</td>
                        </tr>`
                });

                $('#tasks').html(template);
            }
        });
    }


});
