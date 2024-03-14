<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Example</title>
</head>

<body>
    <form action="index.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <input type="submit" value="Submit">
    </form>


    <?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = htmlspecialchars($_POST["username"]);
        $email = ($_POST["email"]);
        $password = password_hash($_POST["password"], PASSWORD_DEFAULT);

        echo "<h2>Your Input:</h2>";
        echo "Username: $username <br>";
        echo "Email: $email <br>";
        echo "Password: $password <br>";
    }

    ?>
</body>

</html>