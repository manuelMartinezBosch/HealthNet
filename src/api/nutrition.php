<?php
header('Access-Control-Allow-Origin: *');
$valor = '[{"name":"Desayuno","elements":[{"id":1,"name":"Brocoli","isAliment":true,"quantity":3,"unit":"Loncha","kcal":20},{"id":2,"name":"Verduras con pollo","isAliment":false,"kcal":200}]}]';
echo $valor;
?>