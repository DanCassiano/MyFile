<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>File</title>
	<link rel="stylesheet" type="text/css" href="componentes/bootstrap/dist/css/bootstrap.min.css">
	<style type="text/css">
		body{
			background-color: #ccc;
		}
	</style>
</head>
<body>
		
	<div class="container">
		
	</div>

	<button >Abrir</button>

	<script type="text/javascript" src="componentes/jquery/dist/jquery.js"></script>
	<script type="text/javascript" src="componentes/bootstrap/dist/js/bootstrap.js"></script>
	<script type="text/javascript" src="dist/js/file.min.js"></script>
	<script type="text/javascript">
		$(function(){
			var f = new Fille({ target:".container" });
			
			
			$("button").click(function(){
				f.show();
			})
		})
	</script>
</body>
</html>
