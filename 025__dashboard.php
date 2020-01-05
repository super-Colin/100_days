<?php
require('025__db.php');
include("025__auth.php");
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Dashboard - Secured Page</title>
<link rel="stylesheet" href="025__style.css" />
</head>
<body>
<div class="form">
<p>Dashboard</p>
<p>This is another secured page.</p>
<p><a href="025__index.php">Home</a></p>
<a href="025__logout.php">Logout</a>
</div>
</body>
</html>