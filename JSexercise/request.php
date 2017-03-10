<?php
	
	$username=$_GET['username'];
	if ($username=="chaoyong") {
		echo "用户名不可用";
	}else{
		echo "用户名可用"
	}
?>