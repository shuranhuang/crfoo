<?php
header('Content-Security-Policy: sandbox allow-scripts');
?>
<!DOCTYPE html>
<meta charset="utf-8">
<video src="./video.php" width="500px" onerror="alert('Video will not load');"></video>
<br>
The video will when the "unpartitioned" cookie is available and will not load if the cookie is blocked.
<br>
The video may take time to load, so check the Network tab in DevTools for the result of the request more immediately.