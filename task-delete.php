<?php
/* Se incluye la conexion a la base de datos */
include('database.php');

if (isset($_POST['id'])) {
    $id = $_POST['id'];
    /* Eliminando datos de la base de datos */
    $query = "DELETE FROM tareas WHERE id = $id";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        die('Query Error');
    }

    echo 'Task Added';

}