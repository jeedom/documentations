# Valor del pedido

Esta documentación recopila recomendaciones para valores de comando (acción o información) según tipos. Seguir estos pasos no es obligatorio, pero para una mejor integración con Jeedom es muy recomendable.

## Luz

|  |  |
|---------------|-------------|
|Información/Estado de la luz|Brillo<br/>0-100 o 0-99 o 0-255<br/>(dependiendo del control deslizante de acción/luz máximo)<br/>o binario<br/><br/> distinto de 0 = Encendido<br/>**Obligatorio**| 
|Información/Brillo de la luz|Luminosité<br/>0-100 o 0-99 o 0-255<br/>(dependiendo del control deslizante de acción/luz máximo)<br/>|
||<br/>|
||)|
||)|
|||
|||
||)|
||<br/>|
|||
|||

## Prise

|  |  |
|----------------|------------|
|<br/>Etat|<br/>|
|<br/>|| 
|<br/>||

## Interrupteurs

|  |  |
|----------------|------------|
|<br/>Etat|<br/>|
|<br/>|| 
|<br/>||

## Ventilateur

|  |  |
|----------------|------------|
|<br/>Etat|<br/><br/>|
|<br/>|Allumer| 
|<br/>|Eteindre|
|<br/>Vitesse<br/>Rotation||

## Volet

|  |  |
|---------------|----------------|
|| :<br/><br/>1 = Abierto<br/>Si es digital :<br/>min del botón deslizante (de lo contrario min del estado, de lo contrario 0) = Cerrado <br/>máximo del botón deslizante (de lo contrario, máximo del estado; de lo contrario, 100) = Abrir<br/>Si no hay botón Silder : Los valores mínimos y máximos son obligatorios en el estado !|
||<br/>| 
||<br/>|
|||
||<br/>Si está presente:<br/>|

opcional :

|  |  |
|---------------|----------------|
||)|
||<br/>|
||)|
||<br/>|

## Valves

|  |  |
|---------------|----------------|
|<br/>Etat|<br/>|
|<br/>|Allumer| 
|<br/>|Eteindre|

|  |  |
|---------------|----------------|
|<br/>Etat|<br/>|
|<br/>|Allumer| 
|<br/>|Eteindre|

|  |  |
|---------------|----------------|
|<br/>Genérico<br/>Etat|<br/>|
|<br/>Genérico<br/>|Allumer| 
|<br/>Genérico<br/>|Eteindre|

añadir un regulador de intensidad ? y añadir tecnología digital a la acción ? existe ?

## Serrures

|  |  |
|---------------|----------------|
||)<br/>)|
||| 
||Verrouillage| 

## Mouvement

|  |  |
|---------------|----------------|
||<br/>|

##  

|  |  |
|---------------|----------------|
|<br/>Información/Ventana<br/>()|)<br/>)| 

## Sirenas

|  |  |
|---------------|----------------|
||<br/>|

## Alarme

|  |  |
|---------------|----------------|
||<br/>()|
||<br/>()|
|| **Exactamente** |
|||
|||
|||

## Thermostats

|  |  |
|---------------|----------------|
|)|<br/>|
|)|''<br/>'calor' o 'calefacción''<br/>''fresco' o 'aire acondicionado''<br/><br/>| 
||'<br/>''Ninguno' o 'Termostato' = Modo de punto de ajuste<br/> **Exactamente** |
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
|<br/>Información/Estado de apertura del garaje<br/>()|<br/>252 = Cierre en curso<br/>253 = Detenido<br/>254 = Apertura en proceso<br/>255 = Abierto<br/>( ?)|

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
