<!-- Creating order page -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Order Page</title>
</head>

<body>
    <h1>Order Page</h1>
    <form method="post" action="">
        <label for="item">Select Item:</label>
        <select name="item" id="item">
            <option value="burger">Burger - $5.00</option>
            <option value="pizza">Pizza - $8.00</option>
            <option value="sandwich">Sandwich - $4.50</option>
        </select>

        <br><br>

        <label for="quantity">Enter Quantity:</label>
        <input type="number" name="quantity" id="quantity" min="1" value="1" max="100">

        <br><br>

        <input type="submit" name="calculate" value="Total">
    </form>

    <?php
    // Array of food items with prices
    $foodPrices = [
        "burger" => 5.00,
        "pizza" => 8.00,
        "sandwich" => 4.50
    ];

    // Process the form submission
    if (isset($_POST['calculate'])) {
        $selectedItem = $_POST['item'];
        $quantity = (int)$_POST['quantity'];

        if (array_key_exists($selectedItem, $foodPrices)) {
            $price = $foodPrices[$selectedItem];

            $price = $foodPrices[$selectedItem];
            $total = $price * $quantity;

            echo "<br><br>";
            echo "<strong>Your Order Summary:</strong><br>";
            echo "Item: " . ($selectedItem) . "<br>";
            echo "Quantity: $quantity<br>";
            echo "Total Price: $$total";
        } else {
            echo "<br><br>";
            echo "<strong>Invalid item selected.</strong>";
        }
    }
    ?>
</body>

</html>