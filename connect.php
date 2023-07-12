<?php
    $name = $_POST['name'];
    $age = $_POST['password'];
    $wieght = $_POST['wieght'];
    $email = $_POST['email'];
    $myfile = $_POST['myfile'];

    $email  = 'ram@gmail.com';
    $username = strstr($email, '@', true);
    echo $username."\n";

    //DATtabadse connection
    $conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(name, age, wieght, email, myfile) values(?, ?, ?, ?, ?,?)");
		$stmt->bind_param("sssssi", $name, $password, $age, $wieght, $email, $myfile);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>