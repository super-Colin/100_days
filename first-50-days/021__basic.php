<?php 
// 12/31/2019
// learning some basic php
// 

echo "hello world" . "<br/>";


echo "<br /> <br />";



// random number
echo rand(1,10) . "<br/>";
echo rand(1,100) . "<br/>";
echo rand(1,1000) . "<br/>";
echo rand(1,10000) . "<br/>";
echo rand(1,100000) . "<br/>";


echo "<br /> <br />";



// vars and arrays
$new_var = 10;

$new_array = array("some1", "some2", "some3");
echo "first " . $new_array[0] . " second: " . $new_array[1] . "<br/>";

// use count() function to get array length
$array_length = count($new_array);
echo "array length = " . $array_length;


echo "<br /> <br />";



// concatenating strings
$first = "this is a var: ";
$string = rand(10,1000);
$third = $first . $string;
echo "here's more testing::  " . $third;


echo "<br /> <br />";



// if statement
$ifTest = rand(1,100);
echo $ifTest . "<br />";

if( $ifTest < 50){
    echo "the number is less than 50 <br />";
} else {
    echo "the number is higher than 50 <br />";
}
echo "--------------- <br />";
if( $ifTest < 33){
    echo "the number is less than 33 <br />";
} elseif( $ifTest > 33 && $ifTest < 66) {
    echo "the number is between 33 and 66 <br />";
} else {
    echo "the number is higher than 66 <br />";
}


echo "<br /> <br />";



// basic for loop
for ($i=1; $i < 10; $i++){
    echo "i = " . $i . "<br />";
}

echo "<br /> <br />";




?>