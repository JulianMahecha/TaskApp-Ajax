<?php
/* Se incluye la conexion a la base de datos */
include('database.php');

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $description = $_POST['description'];
    /* Insertando datos en la base de datos */
    $query = "INSERT INTO tareas(nombre, descripcion) VALUES('$name', '$description')";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        die('Query Error');
    }

    echo 'Task Added';

}