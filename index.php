<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php 
        include("conexion.php");
         $sql = "call estadistica.histograma(@BACHILLERATO, @NINGUNO, @NO_INDICA, @POSTGRADO, @PREGRADO, @PRIMARIA);";
         $call = $conexion->query($sql);

    $sql2 = "select @BACHILLERATO as BACHILLERATO, @NINGUNO as NINGUNO,  @NO_INDICA as 'NO INDICA', @POSTGRADO as POSTGRADO, @PREGRADO as PREGRADO, @PRIMARIA as PRIMARIA;
";
         $valores = $conexion->query($sql2);

       $valor = $valores->fetch_assoc();
    
       $total=$valor["BACHILLERATO"]+$valor["NINGUNO"]+$valor["BACHILLERATO"]+$valor["NO INDICA"]+$valor["POSTGRADO"]+$valor["PREGRADO"]+$valor["PRIMARIA"];
       $prop_no_indica = $valor["NO INDICA"]*100/$total;
       $total_producido=$valor["BACHILLERATO"]+$valor["NINGUNO"]+$valor["BACHILLERATO"]+$valor["POSTGRADO"]+$valor["PREGRADO"]+$valor["PRIMARIA"];
    $probabilidad_sin_estudios=$valor["NINGUNO"]*100/$total_producido;
    
       
    ?>
    <h1>Probabilidades</h1>
    <p>La probabilidad de que una persona inmigrante de colombia no haya especificado su nivel academico es de:<?php echo" ".round($prop_no_indica,2)."%<br>"; ?></p>
    <p>La propabilidad de que una persona no tenga ningun estudio entre aquellos que indicaron algun nivel academico es de: <?php echo" ".round($probabilidad_sin_estudios,2)."%<br>";?> </p>

</body>
</html>