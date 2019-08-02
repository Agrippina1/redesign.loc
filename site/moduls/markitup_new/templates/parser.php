<?php
$text = <<<HTML

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>markItUp! preview template</title>
<link rel="stylesheet" type="text/css" href="~/templates/preview.css" />
</head>
<body>
HTML;
if (!isset($_REQUEST['data'])) $data = "";
else $data = stripslashes($_REQUEST['data']);

require_once '../../bbcode/bbcode.lib.php';
$xbbcode = new bbcode;
require_once '../../../../blog/smiles.php';
$xbbcode = new bbcode;
$xbbcode -> mnemonics = $smiles;

//$data = iconv("UTF-8","windows-1251",$data);
//$data = mb_convert_encoding($data, "UTF-8", "windows-1251" );

$xbbcode -> parse($data);
$data = $xbbcode -> get_html();

$data = mb_convert_encoding($data, "windows-1251", "UTF-8" );
//$data = iconv("windows-1251","UTF-8",$data);

echo $text.$data."</body></html>"; 
?>

