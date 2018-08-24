<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $request = json_decode(file_get_contents("php://input"));
    include("connect.php");
    if(!$error_connection) {
        $stmt = $sql->prepare("CALL GetMeals(?, ?)");
        $stmt->bind_param('is', $request->userId, $request->mealsDay);
        if ($stmt->execute()) {
            $response = '[';
            $result = $stmt->get_result();
            $actualRow = $result->fetch_assoc();
            while ($actualRow) {
                $actualMeal = $actualRow["meal-type"];
                $response .= '{"name":"'.$actualMeal.'","items":[';           
                while($actualRow && $actualMeal == $actualRow["meal-type"]) {    
                    $response .= '{"id":'.$actualRow["id"].',"name":"'.$actualRow["name"].'",';
                    if($actualRow["quantity"]) {
                        $response .= '"quantity":'.$actualRow["quantity"].',"unit":"'.$actualRow["unit"].'",';
                    }
                    $response .= '"kcal":'.$actualRow["calories"].'}';     
                    $actualRow = $result->fetch_assoc();
                    if($actualRow && $actualMeal == $actualRow["meal-type"]) {
                        $response .= ',';
                    } else {
                        $response .= ']}';
                    }
                }
                if($actualRow) {
                    $response .= ',';
                }   
            }
            $response .= ']';
            $result->close();
            $stmt->close();
            $sql->close();
            echo $response;
        } else {
            echo "Falló CALL: (" . $sql->errno . ") " . $sql->error;
            $stmt->close();
            $sql->close();
        }
    }  
}
?>