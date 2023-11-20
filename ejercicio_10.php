<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $min;
    $contador; 
    for ($i=0; $i < 10; $i++) { 
        $numero = rand(1, 6);
        if ($i === 0) {
            $min = $numero;
            $contador = 1;
        }else{
            if ($numero<$min) {
                $min = $numero;
                $contador = 1;
            }elseif ($numero === $min) {
                $contador++;
            }
        }
    }
    echo "El numero $min ha sido el más pequeño, y ha aparecido $contador veces";
    ?>
</body>
</html>