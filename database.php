<?php
    $connection = mysqli_connect(
        'localhost',
        'root',
        '',
        'task_app'
    );

    if ($connection) {
        echo "ok";
    }

?>