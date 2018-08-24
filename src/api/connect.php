<?php
$sql = new mysqli("localhost", "root", "", "nutrition");
$error_connection = false;
if(!$sql) {
	$error_connection = true;
} else {
	mysqli_set_charset($sql, "utf8");
}
?>