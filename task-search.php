<?php
/* Se incluye la conexion a la base de datos */
include('database.php');
/* Se almacena lo que llega por POST */
$search = $_POST['search'];
/* Evaluando que no este vacio */
if (!empty($search)) {
    $query = "SELECT * FROM tareas WHERE nombre LIKE '$search%'";
    $result = mysqli_query($connection, $query);
    /* Si no se genera la consulta se muestra el error */
    if (!$result) {
        die('Query Error!'.mysqli_error($connection));
    }

    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[]=array(
            'name' => $row['nombre'],
            'description' => $row['descripcion'],
            'id' => $row['id']
        );
    }

    $jsonString = json_encode($json);
    echo $jsonString;

}
