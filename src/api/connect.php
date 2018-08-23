<?php
$con = new mysqli("localhost", "root", "", "nutrition");

if(!$con) {
	$error_con = true;
} else {
	mysqli_set_charset($con, "utf8");
}
?>