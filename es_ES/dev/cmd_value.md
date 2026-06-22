# Valor del pedido

Esta documentación recopila recomendaciones para valores de comandos (acción o información) en función de los tipos. Seguir estos pasos no es obligatorio, pero para una mejor integración con Jeedom se recomienda encarecidamente.

## Luz

|  |  |
|---------------|-------------|
|Información/Estado de la luz|Brillo<br/>0-100 o 0-99 o 0-255<br/>(dependiendo del deslizador de acción/luz máximo)<br/>o binario<br/>0 = Apagado<br/> distinto de 0 = Encendido<br/>**Obligatorio**| 
|Información/Brillo de la luz|Luminosité<br/>0-100 o 0-99 o 0-255<br/>(dependiendo del deslizador de acción/luz máximo)<br/>Siempre utilice con Light State en comando binario|
|Deslizador de acción/luz|Interruptor regulador de intensidad<br/>Mínimo y máximo obligatorio|
|Botón de acción/luz encendido|Luz encendida (cambio de estado))|
|Botón de acción/luz apagado|Apagar la luz (Cambio de estado))|
|Información/Color de luz|Formato #RRGGBB|
|Acción/Color de luz|Modificación de color, formato #RRGGBB|
|Información/Color de temperatura de luz|Formato Mired (<=500) o Kelvin (>500))|
|Acción/Temperatura de luz Color|Modificación de la temperatura del color<br/>Mínimo y máximo obligatorio|
|Interruptor de acción/luz|Invierte el estado si es binario|
|Modo de acción/luz|Luz preestablecida/de escena, puede ser múltiple|

## Prise

|  |  |
|----------------|------------|
|Información/Punto de venta<br/>Etat|0 = Apagado<br/>1 = Encendido|
|Acción/Tomar<br/>Botón de encendido|Enciende el enchufe| 
|Acción/Tomar<br/>Botón de apagado|Apague la toma de corriente|

## Interrupteurs

|  |  |
|----------------|------------|
|Información/Interruptor<br/>Etat|0 = Apagado<br/>1 = Encendido|
|Acción/Interruptor<br/>Botón de encendido|Enciende el interruptor| 
|Acción/Interruptor<br/>Botón de apagado|Apague el interruptor|

## Ventilateur

|  |  |
|----------------|------------|
|Información/Aficionado<br/>Etat|0 = Apagado<br/>1 = Encendido<br/>o gradación si la velocidad|
|Acción/Aficionado<br/>Botón de encendido|Allumer| 
|Acción/Aficionado<br/>Botón de apagado|Eteindre|
|Acción/Aficionado<br/>Vitesse<br/>Rotation|Mínimo/Máximo requerido|

## Volet

|  |  |
|---------------|----------------|
|Sección de información/estado|Si binario :<br/><br/>1 = Abierto<br/>Si es digital :<br/>mínimo del botón deslizante (de lo contrario, mínimo del estado; de lo contrario, 0) = Cerrado <br/>Máximo del botón deslizante (de lo contrario, máximo del estado; de lo contrario, 100) = Abierto<br/>Si no hay botón de silenciar : Valores mínimos y máximos requeridos en el estado !|
|Botón de acción/obturador arriba|Abriendo el obturador<br/>Iniciar la apertura o establecer el valor máximo del control deslizante o estado o 100| 
|Botón de acción/en blanco pulsado|Cierre de la persiana<br/>Iniciar el cierre o establecer el valor mínimo del control deslizante o el estado o 0|
|Botón de acción/parada del obturador|Detenga el movimiento del obturador|
|Deslizador de botón de acción/en blanco|Indique la proporción de apertura de la persiana<br/>Si está presente:<br/>Los valores mínimos y máximos son obligatorios|

opcional :

|  |  |
|---------------|----------------|
|Panel de información/estado con inclinación horizontal|Ángulo 0->90° (mediante deslizador))|
|Acción/Control deslizante: Inclinación horizontal|Ángulo 0->90°<br/>modificable mediante el control deslizante de mínimo y máximo|
|Panel de información/estado/inclinación vertical|Ángulo 0->90° (mediante deslizador))|
|Inclinación vertical del deslizador/acción|Ángulo 0->90°<br/>modificable mediante el control deslizante de mínimo y máximo|

## Valves

|  |  |
|---------------|----------------|
|Información/Toca<br/>Etat|0 = Apagado<br/>1 = Encendido|
|Acción/Toque<br/>Botón de encendido|Allumer| 
|Acción/Toque<br/>Botón de apagado|Eteindre|

|  |  |
|---------------|----------------|
|Información/Riego<br/>Etat|0 = Apagado<br/>1 = Encendido|
|Acción/Riego<br/>Botón de encendido|Allumer| 
|Acción/Riego<br/>Botón de apagado|Eteindre|

|  |  |
|---------------|----------------|
|Información/Válvula<br/>Genérico<br/>Etat|0 = Apagado<br/>1 = Encendido|
|Acción/Válvula<br/>Genérico<br/>Botón de encendido|Allumer| 
|Acción/Válvula<br/>Genérico<br/>Botón de apagado|Eteindre|

agregar un atenuador ? y añadir tecnología digital a la acción ? Existe ?

## Serrures

|  |  |
|---------------|----------------|
|Información/Estado de bloqueo|0 = No seguro (No bloqueado))<br/>1 = Seguro (Bloqueado))|
|Botón de acción/bloqueo abierto|Desbloqueo| 
|Botón de acción/bloqueo Cerrar|Verrouillage| 

## Mouvement

|  |  |
|---------------|----------------|
|Información/Presencia|0 = Sin movimiento<br/>1 = Movimiento|

##  

|  |  |
|---------------|----------------|
|Información/Puerta<br/>Información/Ventana<br/>()|0 = Contacto (Cerrado))<br/>1 = Sin contacto (Abierto))| 

## Sirenas

|  |  |
|---------------|----------------|
|Información estatal/Sirena|0 = No suena<br/>1 = Anillo|

## Alarme

|  |  |
|---------------|----------------|
|Información/Alerta estatal|1 = Activado<br/>(prioridad en los modos activados y)|
|Estado de información/alarma activado|0 = Desarmado<br/>(prioridad sobre los modos)|
|Modo de información/alarma|Etiqueta que muestra **Exactamente** el nombre de un comando de modo de acción/alarma|
|Alarma de acción/activada|Activa la alarma|
|Se ha emitido una alerta/acción|Desactivar la alarma|
|Modo de acción/alarma|Modo de alarma, puede ser múltiple|

## Thermostats

|  |  |
|---------------|----------------|
|Información/Estado del termostato (BINARIO))|0 = Apagado<br/>1 = Encendido|
|Información/Estado del termostato (HUMANO))|'apagado o detenido o parar'<br/>''calor' o 'calefacción''<br/>''frío' o 'aire acondicionado''<br/><br/>| 
||'<br/>''Ninguno' o 'Termostato' = Modo de punto de ajuste<br/>Etiqueta que muestra **Exactamente** |
|||
|||
||| 
||| 
||| 
||<br/>| 
|||
|||

## Puertas o garajes

|  |  |
|---------------|----------------|
|<br/>Información/Estado de apertura del garaje<br/>()|<br/>252 = Cierre en curso<br/>253 = Detenido<br/>254 = Apertura en curso<br/>255 = Abierto<br/>( ?)|

con cualquiera de los dos :

|  |  |
|---------------|----------------|
||<br/>)| 

o :

|  |  |
|---------------|----------------|
||Ouverture|
||Fermeture|

## Electricité

|  |  |
|---------------|----------------|
||Watts| 
||KWh| 

## Divers

|  |  |
|---------------|----------------|
||<br/>|
|)||
|)||
||<br/>|
||| 
|||
|)| ?|
||-| 
||| 
||<br/><br/>| 
||<br/>| 
||<br/>| 
|<br/>|<br/>| 
||<br/>| 
||<br/>| 
||bar|
|)|dB|

## Estado del equipo

|  |  |
|---------------|----------------|
||<br/>|
||<br/>|
||<br/>|
