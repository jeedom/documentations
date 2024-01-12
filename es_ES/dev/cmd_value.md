# Valor del pedido

Esta documentación reúne recomendaciones para valores de comando (acción o información) según los tipos. No es obligatorio seguirlos, pero para una mejor integración en Jeedom se recomienda encarecidamente hacerlo.

## Luz

|Tipo genérico  | Valores/Acción |
|---------------|-------------|
|Información/Estado de la luz|O brillo<br/>0-100 o 0-99 o 0-255<br/>(dependiendo del control deslizante de acción/luz máxima)<br/>o binario<br/>0 = Apagado<br/> distinto de 0 = activado<br/>**Obligatorio**| 
|Información/Brillo de luz|Luminosité<br/>0-100 o 0-99 o 0-255<br/>(dependiendo del control deslizante de acción/luz máxima)<br/>Usar siempre con estado de luz en comando binario|
|Control deslizante de acción/luz|Atenuador de brillo<br/>Mín. y Máx. Obligatorio|
|Botón de acción/encendido de luz|Encendido de la luz (Cambio de Estado))|
|Botón de acción/apagado de luz|Apagar la luz (Cambio de Estado))|
|Información/Color de luz|Formato #RRGGBB|
|Acción/Color de luz|Cambiando el color, Formato #RRGGBB|
|Información/Temperatura de luz Color|Formato Mired (<=500) o Kelvin (>500))|
|Acción/Temperatura de luz Color|Cambiar la temperatura del color<br/>Mín. y Máx. Obligatorio|
|Alternar acción/luz|Inversión de estado si es binario|
|Modo acción/luz|Escena preestablecida/luz, puede ser múltiple|

## Prise

|Tipo genérico  | Valores/Acción |
|----------------|------------|
|Información/Enchufe<br/>Etat|0 = Apagado<br/>1 = activado|
|Acción tomada<br/>Botón de encendido|Enciende el enchufe| 
|Acción tomada<br/>Botón de apagado|Apague el enchufe|

## Volet

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Panel de información/estado|Si es binario :<br/>0 = Cerrado<br/>1 = Abierto<br/>Si es digital :<br/>mínimo del control deslizante del botón (de lo contrario, mínimo del estado, de lo contrario 0) = Cerrado <br/>máximo del control deslizante del botón (de lo contrario, máximo del estado, de lo contrario 100) = Abierto<br/>Si no hay ningún botón Silder : Mínimo y máximo obligatorios en el estado !|
|Botón de acción/escudo arriba|Abriendo la persiana<br/>Lanzamiento de apertura o establecimiento del valor o estado máximo del control deslizante o 100| 
|Botón de acción/obturador abajo|Cerrando la persiana<br/>Inicio del cierre o establecimiento del valor o estado mínimo del control deslizante o 0|
|Botón de acción/parada del obturador|Detener el movimiento de la persiana|
|Control deslizante del botón de acción/panel|Da la proporción de apertura de la persiana<br/>Si está presente:<br/>Mínimo y máximo obligatorios|

## Serrures

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Información/Estado de bloqueo|0 = No seguro (no bloqueado))<br/>1 = Seguro (Bloqueado)|
|Botón de acción/bloqueo de apertura|Desbloqueo| 
|Botón de cierre de acción/bloqueo|Verrouillage| 

## Mouvement

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Información/Presencia|0 = Sin movimiento<br/>1 = movimiento|

## Apertura 

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Información/Puerta<br/>Información/Ventana<br/>(mismo trato)|0 = Contacto (Cerrado)<br/>1 = Sin contacto (Abierto)| 

## Electricité
|Tipo genérico  | Unidad |
|---------------|----------------|
|Información/Energía Eléctrica|Watts| 
|Información/Consumo Eléctrico|KWh| 
