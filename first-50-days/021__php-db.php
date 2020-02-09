<?php
// 12/31/2019
// felt bad only doing a txt file yesterday so I'll push a little extra today!
// https://www.cloudways.com/blog/connect-mysql-with-php/#connection
// https://www.allphptricks.com/insert-view-edit-and-delete-record-from-database-using-php-and-mysqli/


function OpenCon(){
    $dbhost = "localhost";
    $dbuser = "test_user";
    $dbpass = "test";
    $db = "test_user";

    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db) or die("Connect failed: %s\n" . $conn -> error);
    // This "%s" is a placeholder for a var of type "s" for string/ opposed to "%d" for a decimal var (int or float)
    

    return $conn;
}

function CloseCon($conn){
    $conn -> close();
}

$new_conn = OpenCon();

echo "Connected Successfully if there are no errors above";


CloseCon($new_conn);



?>