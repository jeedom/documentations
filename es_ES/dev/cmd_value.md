# 

. .

## 

|Tipo genérico  | Valores/Acción |
|---------------|-------------|
||<br/><br/>()<br/><br/>0 = Apagado<br/> <br/>****| 
||Luminosité<br/><br/>()<br/>Usar siempre con estado de luz en comando binario|
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
|Acción/Tomada<br/>Botón de encendido|Enciende el enchufe| 
|Acción/Tomada<br/>Botón de apagado|Apague el enchufe|

## Interrupteurs

|Tipo genérico  | Valores/Acción |
|----------------|------------|
|Información/Cambiar<br/>Etat|0 = Apagado<br/>1 = activado|
|Acción/cambio<br/>Botón de encendido|Enciende el interruptor| 
|Acción/cambio<br/>Botón de apagado|Apague el interruptor|

## Ventilateur

|Tipo genérico  | Valores/Acción |
|----------------|------------|
|Información/Ventilador<br/>Etat|0 = Apagado<br/>1 = activado<br/>o atenuación si la velocidad|
|Acción/Fan<br/>Botón de encendido|Allumer| 
|Acción/Fan<br/>Botón de apagado|Eteindre|
|Acción/Fan<br/>Vitesse<br/>Rotation|Mín. Máx. Obligatorio|

## Volet

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Panel de información/estado|Si es binario :<br/>0 = Cerrado<br/><br/> :<br/> <br/><br/> :  !|
|Botón de acción/escudo arriba|Abriendo la persiana<br/>Lanzamiento de apertura o establecimiento del valor o estado máximo del control deslizante o 100| 
|Botón de acción/obturador abajo|Cerrando la persiana<br/>Lanzar cierre o establecer valor mínimo del control deslizante o estado o 0|
|Botón de acción/parada del obturador|Detener el movimiento de la persiana|
|Control deslizante del botón de acción/panel|Da la proporción de apertura de la persiana<br/>:<br/>Mínimo y máximo obligatorios|

 :

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Panel de estado de información/inclinación horizontal|Ángulo 0->90° (mediante control deslizante)|
|Control deslizante de acción/obturador Inclinación horizontal|Ángulo 0->90°<br/>modificable mediante min-max del control deslizante|
|Panel de estado de información/inclinación vertical|Ángulo 0->90° (mediante control deslizante)|
|Control deslizante de acción/obturador Inclinación vertical|Ángulo 0->90°<br/>modificable mediante min-max del control deslizante|

## Valves

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Información/Tocar<br/>Etat|0 = Apagado<br/>1 = activado|
|Acción/Toque<br/>Botón de encendido|Allumer| 
|Acción/Toque<br/>Botón de apagado|Eteindre|

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Información/Riego<br/>Etat|0 = Apagado<br/>1 = activado|
|Acción/Riego<br/>Botón de encendido|Allumer| 
|Acción/Riego<br/>Botón de apagado|Eteindre|

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Información/Válvula<br/><br/>Etat|0 = Apagado<br/>1 = activado|
|Acción/Válvula<br/><br/>Botón de encendido|Allumer| 
|Acción/Válvula<br/><br/>Botón de apagado|Eteindre|

 ?  ?  ?

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
|Información/Puerta<br/><br/>(mismo trato)|0 = Contacto (Cerrado)<br/>1 = Sin contacto (Abierto)| 

## 

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Información/estado de sirena|0 = No suena<br/>1 = Anillos|

## Alarme

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Estado de información/alarma|1 = Activado<br/>(prioridad en modos activados y)|
|Alarma de información/estado activada|0 = Desarmado<br/>(prioridad en los modos)|
|Modo información/alarma|Etiqueta que muestra **** el nombre de un comando del modo acción/alarma|
|Acción/Alarma armada|Armar la alarma|
|Acción/alarma liberada|Desarmar la alarma|
|Modo de acción/alarma|Modo de alarma, puede ser múltiple|

## Thermostats

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Información/estado del termostato (BINARIO)|0 = Apagado<br/>1 = activado|
|Información/Estado del termostato (HUMANO)|'apagado' o 'detenido' o 'arresto'<br/>''<br/>''<br/><br/>Prefiero inglés| 
|Modo información/termostato|'Apagado' o 'Arret' = APAGADO<br/>'<br/>Etiqueta que muestra **** el nombre de un comando de modo acción/termostato|
|Modo acción/termostato|Modo termostato, puede ser múltiple|
|Información/Termostato Temperatura exterior|Grados Celsius|
|Información/Termostato Temperatura ambiente|Grados Celsius| 
|Información/punto de ajuste del termostato|Valor entre Min y Max del Setpoint de Acción/Termostato| 
|Punto de ajuste de acción/termostato|Mín. y Máx. obligatorios| 
|Información/Bloqueo del termostato|0 = No bloqueado<br/>1 = bloqueado| 
|Bloqueo de acción/termostato|Bloquear el termostato|
|Desbloqueo de acción/termostato|Desbloquear el termostato|

## 

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Información/Estado de apertura del portal<br/><br/>(mismo trato)|0 = Cerrado<br/><br/><br/><br/><br/>(Basado en equipos de onda z, también podría ser binario o etiquetado ?)|

 :

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Botón de alternar acción/puerta o garaje|El interruptor se abre si está cerrado y se cierra si está abierto<br/>Apertura si está bloqueada (por seguridad))| 

 :

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Botón de acción/apertura de portón o garaje|Ouverture|
|Botón de acción/cierre de puerta o garaje|Fermeture|

## Electricité

|Tipo genérico  | Unidad |
|---------------|----------------|
|Información/Energía Eléctrica|Watts| 
|Información/Consumo Eléctrico|KWh| 

## Divers

|Tipo genérico  | Valores/Unidad |
|---------------|----------------|
|Información/Presencia Ocupación|0 = nadie<br/>1 = alguien|
|Información/Calidad del aire (Índice ICA)|índice ICA|
|Información/Calidad del aire (Índice personalizable)|ppb o µg/m3|
|Información/detector de CO|0 = CO normal<br/>1 = CO anormal|
|Información/Brillo|0 → 100000 lux| 
|Información/Humedad|%|
|Información/CO2 (ppm)|PPM o binario ?|
|Información/Temperatura|-50 → 300°C| 
|Información/Batería|%| 
|Información/Carga de batería|0 = NO<br/>1 = SÍ<br/>No presente = No recargable| 
|Información/batería baja|0 = NO<br/>1 = SÍ| 
|Información/Detección de humo|0 = Sin humo<br/>1 = Humo detectado| 
|Información/inundación<br/>Información/Fuga de agua|0 = No se detectó ninguna fuga<br/>1 = Fuga detectada| 
|Información/Sabotaje|0 = Sin sabotaje<br/>1 = Sabotaje| 
|Información/Choque|0 = Sin descarga<br/>1 = Choque| 
|Información/Presión|bar|
|Información/Sonido (dB)|dB|

## 

|Tipo genérico  | Valores/Acción |
|---------------|----------------|
|Información/Estado activo|0 = inactivo<br/>1 = activo|
|Información/conectividad en línea|0 = fuera de línea<br/>1 = en línea|
|Información/estado defectuoso|0 = no<br/>1 = si|
