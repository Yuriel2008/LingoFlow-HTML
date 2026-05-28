<?php
// db_connect.php

// 1. Database Credentials (The Keys to the Kitchen)
$host = 'localhost';      // The database is on this same computer
$dbname = 'lingoflow_db'; // The name of the room we created
$username = 'root';       // Default XAMPP username
$password = '';           // Default XAMPP password is empty

try {
    // 2. The Connection Line (Plugging in the cable)
    // We create a new PDO connection. Think of $conn as the "Phone Line" to MySQL.
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    // 3. Set Error Mode
    // If something breaks, tell us exactly what happened (good for debugging)
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // If we get here, the connection worked! 
    // We don't echo anything here, or it will mess up our data later.

} catch(PDOException $e) {
    // 4. If the connection fails
    echo "Connection failed: " . $e->getMessage();
}
?>