<?php
include('../../../include/general.php');
include('../../../include/database.php');
if(!checkLogin()){
	header("Location: login.html");
}

$db = new Database;
$db->query("DELETE FROM `cms-user` as user WHERE user.name='".$_POST['user']."' AND user.groupId=( SELECT id FROM `group` WHERE name='".$_POST['group']."')");
echo '{"return":"Success!"}';

?>