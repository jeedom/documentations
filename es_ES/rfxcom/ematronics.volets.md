Encontrar la identificación del control remoto 
====================================

Vaya a "Complementos", "Gestión de complementos", "RFX COM" 
------------------------------------------------------

![image07](images/volet.ematronic/image07.png)

En "Gestión de protocolos RFXcom", 
-------------------------------------

![image04](images/volet.ematronic/image04.png)

verifique el Protocolo 8, BlindsT1, Guardar y salir.

![image08](images/volet.ematronic/image08.png)

Activar, "Iniciar en modo de depuración" 
-------------------------------

![image03](images/volet.ematronic/image03.png)

Espere a que se abra la ventana, luego presione el botón Abrir
su control remoto Ematronic.

    MainThread - rfxcmd:2765 - DEPURACIÓN - Mensaje de prueba: 09 19 03 01 1F 84 B9 01 01 60
    MainThread - rfxcmd:2805 - DEPURACIÓN - Mensaje OK
    MainThread - rfxcmd:328 - DEPURACIÓN - Verificado OK
    MainThread - rfxcmd:334 - DEPURACIÓN - Tipo de paquete: 19
    MainThread - rfxcmd:338 - DEPURACIÓN - Subtipo: 03
    MainThread - rfxcmd:342 - DEPURACIÓN - SeqNbr: 01
    MainThread - rfxcmd:346 - DEPURACIÓN - Id1: 1F
    MainThread - rfxcmd:350 - DEPURACIÓN - Id2: 84
    MainThread - rfxcmd:359 - DEPURACIÓN - Verifique la longitud correcta del paquete
    MainThread - rfxcmd:556 - DEPURACIÓN - Guardar paquete en log_msgfile

Buscar ID de control remoto 
-------------------------------------

Remarque: Los controles remotos de Ematronic siempre comienzan con : 09 19 03
entonces el área que nos interesa comienza desde "Mensaje de prueba" : 09 19 03.

Identificar : Id1 e Id2 y agregue el siguiente hexadecimal : en mi ejemplo
Id1 = 1F e Id2 = 84. así que debes ubicarlos en la línea "Prueba
mensaje "y extraer Id3, aquí Id3 = B9, nuestro control remoto tiene
como ID ⇒ 1F84B9.

Detenga el modo de depuración con el botón "Detener / reiniciar el demonio" 
-----------------------------------------------------------------

![image06](images/volet.ematronic/image06.png)

Creación del control remoto bajo JeeDom 
=======================================

Vaya a Complementos, Protocolo de inicio, RFXcom.

![image10](images/volet.ematronic/image10.png)

Haga clic en "Agregar" e ingrese un nombre para su control remoto
virtuelle.

![image00](images/volet.ematronic/image00.png)

Elija la plantilla de la lista de equipos : "Obturador ematronic -
Por defecto".

Reemplace la identificación automática con la que extrajo anteriormente
y marque "Activar" y "Visible" :

![image11](images/volet.ematronic/image11.png)

Haga clic en "Guardar" para guardar su configuración y
cargar la plantilla "Componente Ematronic - Predeterminado".

![image02](images/volet.ematronic/image02.png)

Aquí está su control remoto listo, debería verse así :

![image05](images/volet.ematronic/image05.png)

Asocia tu control remoto virtual JeeDom con tu motor Ematronic: 
======================================================================

Reinicio del motor: 
---------------------------

-   Desconectar eléctricamente el motor.

-   En el control remoto original, deje el botón "Arriba" presionado 3 o 4
    segundos, el LED se vuelve rojo sólido.

-   Conectar eléctricamente el motor.

-   Suelte el botón en el control remoto.

-   El motor emitirá 5 pitidos.

-   Presione rápidamente el "micro botón" con un clip
    la parte posterior del control remoto.

-   El motor emitirá 3 pitidos.

Asociación del control remoto virtual JeeDom con el motor Ematronic: 
====================================================================

-   Desconectar eléctricamente el motor.

-   En el control remoto original, deje el botón "Arriba" Presione 3 o 4
    segundos, el LED se vuelve rojo sólido.

-   Conectar eléctricamente el motor.

-   Suelte el botón en el control remoto.

-   El motor emitirá 5 pitidos.

-   Presione el comando "Montar" en el control remoto virtual de
    JeeDom. foto::images / shutter.ematronic / image09.png \ [\]

-   El motor emitirá un pitido 3 veces para anunciar que su JeeDoom está asociado
    !!


