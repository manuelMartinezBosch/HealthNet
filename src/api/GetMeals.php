<?php

include("connect.php");

if (!$con->query("CALL GetMeals()")) {
    echo "Falló CALL: (" . $con->errno . ") " . $con->error;
}

?>