<?php
// Import the connector we just made
require 'db_connect.php';

// Prepare a simple question for the database
// "SELECT everything FROM the users table"
$sql = "SELECT * FROM users";

// Send the Waiter to get the data
$stmt = $conn->query($sql);

// Fetch the data and show it on screen
while ($row = $stmt->fetch()) {
    echo "User found: " . $row['username'] . "<br>";
    echo "XP: " . $row['xp'] . "<br>";
    echo "Rank: " . $row['rank_name'] . "<br>";
}
?>