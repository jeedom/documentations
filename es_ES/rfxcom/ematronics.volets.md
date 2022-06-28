# Componente de ematronica

## Encontrar la identificación remota

### Vaya a "Complementos", "Administración de complementos", "RFX COM"

![image07](images/volet.ematronic/image07.png)

### En "Gestión de protocolo RFXcom"

![image04](images/volet.ematronic/image04.png)

verifique el Protocolo 8, BlindsT1, Guardar y Salir.

![image08](images/volet.ematronic/image08.png)

### Habilitar, "Iniciar en modo de depuración"

![image03](images/volet.ematronic/image03.png)

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

Remarque: Los controles remotos de Ematronic siempre comienzan con : 09 19 03 por lo que el área que nos interesa parte de "Mensaje de prueba" : 09 19 03.

Identificar : Id1 e Id2 y agregue el siguiente hexadecimal : en mi ejemplo Id1=1F y Id2=84. por lo tanto, debe ubicarlos en la línea "Mensaje de prueba" y extraer el Id3, aquí Id3 = B9, Nuestro control remoto por lo tanto tiene el ID ⇒ 1F84B9.

### Detener el modo de depuración con el botón "Detener/Reiniciar el daemon""

![image06](images/volet.ematronic/image06.png)

## Creación del control remoto bajo JeeDom

Vaya a Complementos, Protocolo domótico, RFXcom.

![image10](images/volet.ematronic/image10.png)

Haga clic en "Agregar" e ingrese un nombre para su control remoto virtual.

![image00](images/volet.ematronic/image00.png)

Elija la plantilla de la lista de equipos : "Flap Ematronic - Avería".

Reemplace la identificación automática con la que extrajo anteriormente y marque "Habilitar" y "Visible" :

![image11](images/volet.ematronic/image11.png)

Haga clic en "Guardar" para guardar su configuración y cargar la plantilla "Volet Ematronic - Predeterminada"".

![image02](images/volet.ematronic/image02.png)

Aquí está su control remoto listo, debería verse así :

![image05](images/volet.ematronic/image05.png)

## Asocie su control remoto virtual JeeDom con su motor Ematronic

### Restablecimiento del motor

-   Desconectar eléctricamente el motor.
-   En el control remoto original, deje presionado el botón "Arriba" durante 3 o 4 segundos, el led se vuelve rojo fijo.
-   Conectar el motor eléctricamente.
-   Suelte el botón en el control remoto.
-   El motor emitirá un pitido 5 veces.
-   Rápidamente, presione con un clip en el "botón micro" en la parte posterior del control remoto.
-   El motor emitirá un pitido 3 veces.

## Asociación del control remoto virtual JeeDom con el motor Ematronic

-   Desconectar eléctricamente el motor.
-   En el control remoto original, deje presionado el botón "Arriba" durante 3 o 4 segundos, el led se vuelve rojo fijo.
-   Conectar el motor eléctricamente.
-   Suelte el botón en el control remoto.
-   El motor emitirá un pitido 5 veces.
-   Presione el comando "Montar" en el control remoto virtual JeeDom.
[imagen](images/volet.ematronic/image09.png)
-   El motor emitirá un pitido 3 veces para anunciar que su JeeDoom está asociado !!
