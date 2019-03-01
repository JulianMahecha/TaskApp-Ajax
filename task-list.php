<?php
 /* Se incluye la conexion a la base de datos */
include('database.php');

$query = "SELECT * FROM tareas";
$result = mysqli_query($connection, $query);

if (!$result) {
    die('Query Failed');
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
        'name' => $row['nombre'],
        'description' => $row['descripcion'],
        'id' => $row['id']
    );
}

$jsonString = json_encode($json);
echo $jsonString;

