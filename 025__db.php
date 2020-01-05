<?php
// 12/31/2019
// building on interacting with a db in php

// https://www.allphptricks.com/insert-view-edit-and-delete-record-from-database-using-php-and-mysqli/



// Enter your (Host, username, password, database) below.
$con = mysqli_connect("localhost","test_user","test","test_user");
// Check connection
if (mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


  //This would be the code to create our table if needed

// // Create our table  if it doesn't exist
// $sql = "CREATE TABLE IF NOT EXISTS `users` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `username` varchar(50) NOT NULL,
//     `email` varchar(50) NOT NULL,
//     `password` varchar(50) NOT NULL,
//     `trn_date` datetime NOT NULL,
//     PRIMARY KEY (`id`)
// );";

// if ($con->query($sql) === TRUE) {
//  echo "Database created successfully";
// } else {
//  echo "Error creating database: " . $conn->error;
// }


?>

