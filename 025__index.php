<?php
//include auth.php file on all secure pages
include("025__auth.php");
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Welcome Home</title>
<link rel="stylesheet" href="025__style.css" />
</head>
<body>
<div class="form">
<p>Welcome <?php echo $_SESSION['username']; ?>!</p>
<p>This is secure area.</p>
<p><a href="025__dashboard.php">Dashboard</a></p>
<a href="025__logout.php">Logout</a>
</div>
</body>
</html>