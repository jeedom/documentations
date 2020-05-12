# Panel ematronics

## Encontrar la identificación del control remoto

### Vaya a "Complementos", "Gestión de complementos", "RFX COM"

![Imagen07](images/volet.ematronic/image07.png)

### En "Gestión de protocolos RFXcom"

![Imagen04](images/volet.ematronic/image04.png)

verifique el Protocolo 8, BlindsT1, Guardar y salir.

![Imagen08](images/volet.ematronic/image08.png)

### Activar, "Iniciar en modo de depuración"

![Imagen03](images/volet.ematronic/image03.png)

Espere a que se abra la ventana, luego presione el botón Abrir en su control remoto Ematronic.

````
MainThread - rfxcmd:2765 - DEBUG - Test message: 09 19 03 01 1F 84 B9 01 01 60
MainThread - rfxcmd:2805 - DEBUG - Message OK
MainThread - rfxcmd:328 - DEBUG - Verified OK
MainThread - rfxcmd:334 - DEBUG - PacketType: 19
MainThread - rfxcmd:338 - DEBUG - SubType: 03
MainThread - rfxcmd:342 - DEBUG - SeqNbr: 01
MainThread - rfxcmd:346 - DEBUG - Id1: 1F
MainThread - rfxcmd:350 - DEBUG - Id2: 84
MainThread - rfxcmd:359 - DEBUG - Verify correct packet length
MainThread - rfxcmd:556 - DEBUG - Save packet to log_msgfile
````

### Buscar ID de control remoto

Remarque: Los controles remotos de Ematronic siempre comienzan con : 09 19 03 así que la zona que nos interesa comienza desde "Mensaje de prueba" : 09 19 03.

Identificar : Id1 e Id2 y agregue el siguiente hexadecimal : en mi ejemplo Id1 = 1F e Id2 = 84. por lo tanto, debe ubicarlos en la línea "Mensaje de prueba" y extraer el Id3, aquí Id3 = B9, por lo tanto, nuestro control remoto tiene como ID ⇒ 1F84B9.

### Detenga el modo de depuración con el botón "Detener / reiniciar el demonio"

![Imagen06](images/volet.ematronic/image06.png)

## Creación del control remoto bajo JeeDom

Vaya a Complementos, Protocolo de inicio, RFXcom.

![Imagen10](images/volet.ematronic/image10.png)

Haga clic en "Agregar" e ingrese un nombre para su control remoto virtual.

![Imagen00](images/volet.ematronic/image00.png)

Elija la plantilla de la lista de equipos : "Obturador ematrónico - Fallo".

Reemplace la identificación automática con la que extrajo anteriormente y marque "Activar" y "Visible" :

![Imagen11](images/volet.ematronic/image11.png)

Haga clic en "Guardar" para guardar su configuración y cargar la plantilla "Panel Ematronic - Predeterminado"".

![Imagen02](images/volet.ematronic/image02.png)

Aquí está su control remoto listo, debería verse así :

![Imagen05](images/volet.ematronic/image05.png)

## Asocia tu control remoto virtual JeeDom con tu motor Ematronic

### Reinicio del motor

-   Desconectar eléctricamente el motor.
-   En el control remoto original, deje presionado el botón "Arriba" durante 3 o 4 segundos, el LED se volverá rojo fijo.
-   Conectar eléctricamente el motor.
-   Suelte el botón en el control remoto.
-   El motor emitirá 5 pitidos.
-   Presione rápidamente el "micro botón" en la parte posterior del control remoto con un clip.
-   El motor emitirá 3 pitidos.

## Asociación del control remoto virtual JeeDom con el motor Ematronic

-   Desconectar eléctricamente el motor.
-   En el control remoto original, deje el botón "Arriba" Presione 3 o 4 segundos, el LED se vuelve rojo fijo.
-   Conectar eléctricamente el motor.
-   Suelte el botón en el control remoto.
-   El motor emitirá 5 pitidos.
-   Presione el comando "Montar" en el control remoto virtual JeeDom.
[Imagen](images/volet.ematronic/image09.png)
-   El motor emitirá un pitido 3 veces para anunciar que su JeeDoom está asociado !!
