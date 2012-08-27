<?php
	if($dh = opendir('.')) {
			print '<ul>';
		while($file = readdir($dh)){
			if($file != "." && $file != "..") {
				print '<li><a href="'. $file .'">'. $file. '</a></li>';
			}
		}
		closedir($dh);
			print '</ul>';
	}
?>
