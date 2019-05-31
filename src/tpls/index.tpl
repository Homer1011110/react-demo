<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test</title>
    <style>
      body {
        margin: 0;
      }
      .image-viewer {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: lightblue;
      }
      .image-viewer-content {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
      .image-viewer-content > img {
        top: 0;
        left: 0;
        width: 100%;
      }
    </style>
    <link rel="stylesheet" type="text/css" href="http://minhtranite.github.io/react-photoswipe/6e9d9a3b9e481dcbd63280598fead186.css">
</head>
<body>
    <div id="react-app"></div>
</body>
</html>