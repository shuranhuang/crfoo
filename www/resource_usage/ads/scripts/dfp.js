<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/core.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.min.js"></script>
</head>
<body>

<h1> This frame is generating a large number of hashes, simulating a cryptominer.</h1>
<script>  
    var seed = "starting seed for hash";
    
    function doHash() {
      while (true) {
        seed = CryptoJS.MD5(seed);
        console.log(seed);
      }
    }
    doHash();
    //setTimeout(doHash, 500);
</script>

</body>