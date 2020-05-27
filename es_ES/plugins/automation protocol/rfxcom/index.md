# Complemento RFXcom

Complemento para usar una clave RFXcom con Jeedom. Este complemento funciona tanto local como remotamente (con el complemento Jeedom Link)

El complemento RFXcom le permite comunicarse con todos los periféricos compatibles con el módulo USB RFXCOM. Entre estos periféricos se encuentran las siguientes marcas : Oregon, LaCross, Chacon, X10, DI-O, Blyss, etc.

# Configuración del plugin

Después de instalar el complemento, solo necesita activarlo y configurar el puerto en automático, después de guardar el demonio debería iniciarse. El complemento ya está configurado de manera predeterminada; no tienes que hacer nada más. Sin embargo, puede modificar esta configuración. Aquí está el detalle de los parámetros :

-   **Dependencias** : Esta parte le proporciona el estado de las dependencias. Si no están bien, puede iniciarlas manualmente o esperar 5 minutos, Jeedom las iniciará por sí mismo.
-   **Demonio** : esta parte te da el estado del demonio, si no está bien puedes lanzarlo a mano o esperar 5 minutos, Jeedom lo lanzará solo.
-   **Configuración** : Esta parte le permite configurar los parámetros generales del complemento.
    -   *Prohibir las siguientes identificaciones* : permite dar una lista de identificadores RFXcom a Jeedom para que no cree el equipo correspondiente. Los identificadores deben estar separados por espacios. Ejemplo : "1356AD87 DB54AF".
-   **Demonio** : ajustes de configuración de daemon.
    -   *Puerto RFXcom* : el puerto USB al que está conectada su interfaz RFXcom.
        > **Punta**
        >
        > Si no sabe qué puerto USB se utiliza, simplemente puede indicar "Auto". Pero tenga cuidado, algunos módulos pueden entrar en conflicto con el descubrimiento automático (tipo teleinfo) y la selección automática no funcionará.

    -   *Velocidad de comunicación* : velocidad de comunicación de
        Puerto RFXcom.

        > **Punta**
        >
        > Deje por defecto a menos que use un modelo de controlador anterior.

    -   \_Puerto de zócalo interno (modificación peligrosa : permite modificar el puerto de comunicación interna del demonio.
        > **Importante**
        >
        > Cambie solo si sabe lo que está haciendo.

-   *Protocolos* : le permite seleccionar los protocolos activos de la interfaz RFXcom.

    > **Importante**
    >
    > No los active a todos, algunos son incompatibles entre sí, aquí está la matriz de compatibilidad :

Para iniciar el demonio en depuración es suficiente a nivel de la configuración de los registros del complemento para poner en depuración, guardar y volver a iniciar el demonio.

> **Importante**
>
> En este modo, el demonio es muy hablador. Una vez que finalice la depuración, no olvide hacer clic en "Reiniciar" para salir del modo de depuración !!

# Configuración del equipo

Se puede acceder a la configuración del equipo RFXcom desde el menú de complementos y luego desde el protocolo de automatización del hogar. Lo encuentras aqui :

-   un botón para crear equipos manualmente
-   un botón para cambiar al modo de inclusión
-   un botón para mostrar la configuración del complemento
-   un botón que le brinda el estado de salud de todos sus equipos RFXcom
-   finalmente a continuación encontrará la lista de su equipo

Al hacer clic en uno de sus equipos, llega a la página de configuración de su equipo, que incluye 2 pestañas, equipos y controles.

-   **Pestaña del equipo** :
-   **Nombre del dispositivo RFXcom** : nombre de su equipo RFXcom
-   **Identificación** : La identificación de su sonda (se debe cambiar solo con pleno conocimiento de los hechos))
-   **Activar** : activa su equipo
-   **Visible** : lo hace visible en el tablero
-   **Objeto padre** : indica el objeto padre al que pertenece el equipo
-   **Categoría** : categorías de equipos (puede pertenecer a varias categorías)
-   **No comprobar la batería** : le dice a Jeedom que no le avise si el equipo envía un marco de batería baja (algunos módulos no manejan esta información correctamente y generan alertas falsas)
-   **Tiempo máximo permitido entre 2 mensajes (min)** : El tiempo máximo permitido entre 2 mensajes antes de que Jeedom declare el equipo como tiempo de espera".
-   **Recuperar ID (cambio de batería)** : el RFXcom tiene la particularidad de cambiar la ID de la sonda al cambiar la batería, Jeedom ofrece un asistente para facilitar la operación. Usted debe :
    -   cambie la batería de su sonda
    -   espere su creación de Jeedom y vaya a la nueva sonda creada
    -   presione el botón "Recuperar ID (cambio de batería))"
    -   En la ventana, en el menú desplegable, elija la sonda anterior,
    -   Valider
-   **Dispositivos** : le permite definir el modelo de su equipo (para ser configurado solo para la creación manual de equipos, en Jeedom automático configura este campo solo)
-   **Creación** : le da la fecha de creación del equipo
-   **Comunicación** : le da la fecha de la última comunicación con el equipo (por ejemplo, puede estar vacío en el caso de un enchufe))
-   **Batería** : nivel de batería del equipo
-   **Estado** : estado del equipo (puede ser tiempo de espera, por ejemplo)
-   **Pestaña de pedidos** :
  -   el nombre que se muestra en el tablero
  -   tipo y subtipo
  -   la clave de información si es una información, o el código hexadecimal para enviar cuando es una acción. Las configuraciones permiten que estos campos se completen automáticamente (debe crear el equipo, elegir la configuración y luego guardar)
  -   El grupo permite una fácil administración de equipos que soportan la noción de grupo. Esto reemplaza la etiqueta \#GROUP\# en la cadena hexadecimal al ejecutar el comando
  -   "Valor de retroalimentación de estado "y" Duración antes de la retroalimentación de estado" : permite indicar a Jeedom que después de un cambio en la información, su valor debe volver a Y, X min después del cambio. Ejemplo : en el caso de un detector de presencia que emite solo durante una detección de presencia, es útil establecer, por ejemplo, 0 en valor y 4 en duración, de modo que 4 minutos después de una detección de movimiento (y s ' no ha habido noticias desde entonces) Jeedom restablece el valor de la información a 0 (no se detecta más movimiento)
  -   Guardar historial : permite historizar los datos
  -   Mostrar : permite mostrar los datos en el tablero
  -   Evento : en el caso de RFXcom, esta casilla siempre debe estar marcada porque no puede interrogar a un módulo RFXcom
  -   Unidad : unidad de datos (puede estar vacía)
  -   min / max : límites de datos (pueden estar vacíos)
  -   Configuración avanzada (ruedas pequeñas con muescas) : muestra la configuración avanzada del comando (método de registro, widget, etc.))
  -   Probar : Se usa para probar el comando
  -   Eliminar (firmar -) : permite eliminar el comando

# Operación en equipos RFXcom

En la parte superior de la página de configuración de su equipo, tiene 3 botones que le permiten realizar ciertas opciones :

-   Duplicar : equipo duplicado
-   Configuración avanzada : mismo principio que para los comandos, permite una configuración avanzada del equipo
-   Borrar : Retira tu equipo
-   Guardar : Realiza una copia de seguridad de su equipo y cualquier cambio realizado

# Inclusión de equipos RFXcom

Agregar equipo RFXcom es muy simple, solo tiene que entrar en modo de inclusión y esperar a que el equipo envíe un mensaje, cuando este sea el caso Jeedom le dirá que ha incluido equipo nuevo y lo creará automáticamente.

# Lista de módulos compatibles

Encontrará la lista no exhaustiva de módulos compatibles
[aquí](https://doc.jeedom.com/es_ES/rfxcom/equipement.compatible)

# Agregar una salida

Este modo de funcionamiento es válido para enchufes, receptores de luz, etc. Vaya al menú "Complementos", luego "Protocolo de automatización del hogar" y finalmente "RFXcom".

Haga clic en "Agregar" para agregar un módulo, asigne un nombre a su módulo y haga clic en "Aceptar"".

Seleccione "Plug - Fault" en "Equipo", luego haga clic en "Guardar".

-   Vaya a la pestaña "Pedidos""
-   Pon tu módulo / socket en modo de aprendizaje. (Haga clic en el botón de aprendizaje en su módulo / socket. Algunos enchufes no tienen un botón, solo desenchufe el enchufe, luego vuelva a enchufarlo y durante los primeros 3 segundos después de enchufar el enchufe está en modo de aprendizaje).
-   Haga clic en "Probar" un pedido.
-   Si la conexión fue buena, puede hacer clic en "Guardar", de lo contrario puede repetir este paso.

Su módulo / socket ahora está conectado con JEEDOM, recuerde activarlo y hacerlo visible para verlo aparecer en el Tablero.

# Agregar una tienda somfy

Desde el lanzamiento del nuevo módulo RFXcom RFXtrx433E, ahora es posible controlar sus dispositivos Somfy RTS (RFY / RFU) desde Jeedom. (Quién admite este módulo a través del complemento RFXcom)

Pour ajouter un nouveau périphérique, se rendre dans le menu Plugins &gt; Protocole Domotique &gt; RFXcom

Haga clic en el botón + Agregar y asigne un nombre a su dispositivo. Ex : « Veranda persiana ».

Se rendre sur le nouveau Périphérique créé et dans le menu déroulant Equipement, choisir « RTS Store Somfy – Défaut », en profiter pour lui définir un objet parent et une catégorie si vous le souhaitez et cliquer sur Enregistrer.

Los comandos útiles para gestionar la persiana se generan automáticamente. Solo queda emparejar el obturador con este dispositivo Jeedom. Para hacer esto, presione el botón de emparejamiento en el control remoto del obturador que desea controlar durante 2 a 3 segundos, hasta que el obturador haga un ligero disparo de regreso.

Una vez que el obturador haya indicado que está esperando una orden de emparejamiento, haga clic en el botón Prueba correspondiente al comando Programa en Jeedom.

Para validar el aprendizaje del nuevo comando, el obturador realizará un breve viaje de regreso.

Afin de tester tout de suite, vous pouvez cliquer sur les boutons Probar correspondants aux commandes « Monter, Descendre, Stop ». Le bouton « My » correspond à la commande Stop.

Active y haga visible el dispositivo con las casillas de verificación correspondientes para poder verlo y usarlo en el tablero.

Ahora puede pedir su componente Somfy RTS con Jeedom.

# FAQ

>**Simule / reconozca un control remoto chino rfxcom (sin codificar).**
>
>   **Programación de controles remotos de código chino en Jeedom**
>
>En el complemento RFXCom → Gestión de protocolos RFXCom :
>
>-   NO marque Sin codificar
>-   Compruebe Lightning4
>
>Para recuperar los códigos del control remoto : Active la opción "Guardar todos los mensajes" y recupere las ID presionando el
>Teclas de control remoto que parecen mensaje : 0913004C410A24015970, Subtipo = ARC, Id = 400A24 ... Ejemplo "Mensajes"
>un control remoto de 4 botones : 0913006D410A21015E70 0913006E410A22015970 0913006F410A24015970 09130070410A28015970
>
>Para simular una presión sobre el comando (emisión), debe elegir un tipo de equipo "Lightning4 (13) Predeterminado". A continuación, agregue un comando de tipo Acción / Falla y coloque el valor "Mensaje" en la ID Logística (de tipo0913006D410A21015E70). El botón de prueba le permite verificar la operación correcta.
>
>Para la recepción, es imprescindible utilizar el comando automático generado por Jeedom (uno por tecla) con el valor Id = 400A24 en el campo ID en la parte superior izquierda, mientras se selecciona un tipo de equipo "Lightning4 (13) Predeterminado". Es la información "Pulse" que se recibe cada vez que se presiona el control remoto y, por lo tanto, permite activar eventos en Jeedom.

>**Caja de relés china ak-rk01-12 pilotada desde Jeedom**
>
>Para el control de relé de Jeedom live : coloque el puente en la posición 1-2 (lado del LED rojo y 3 bloques de terminales) para activar el modo Latch con el comando ON y OFF por separado. En Jeedom, cree un comando ON con un valor 09130038410B20015C70 (lo importante es la cadena en el medio 410B20 para ON y 410B21 para OFF. Es posible variar los códigos con las primeras 4 letras 410B, pero mantenga los extremos en 20 y 21 para los comandos ON y OFF. También puede establecer el puente en 2-3 y usar solo el primer comando para invertir el estado ON / OFF cada vez que se envía el comando

>**No veo el puerto USB rfxcom**
>
>Asegúrese de que no tiene que instalar brltty (`sudo apt-get remove brltty` para eliminarlo)


>**Después de unas pocas horas / días ya no tengo actualizaciones para mis sondas, corrige un renacimiento del demonio**
>
>Verifique su cable USB (un cable USB defectuoso a menudo causa este tipo de problema, tampoco debería ser demasiado largo), también verifique su fuente de alimentación, se recomienda encarecidamente un concentrador USB

>**Tengo un mensaje que me dice que el puerto no existe**
>
>Compruebe que el puerto está configurado correctamente y que la configuración está guardada (debe guardarse; de lo contrario, la modificación no se tiene en cuenta).

>**Mis sondas no se ven**
>
>Asegúrese de haber marcado la casilla para la creación automática de equipos. Comprueba que el demonio es lanzado. También es posible reiniciar el demonio de depuración para ver si recibe los mensajes de las sondas. También verifique que los protocolos correctos estén activados (tenga cuidado de no activar demasiados, de lo contrario tampoco funcionará).

>**Al comenzar en modo de depuración me sale el mensaje : "no se puede vincular la dirección del socket "o" No se puede asignar la dirección solicitada"**
>
>Esto probablemente se deba a una dirección IP incorrecta configurada en el menú General / administración / Configuración, sección "Configuración de red", luego "Acceso interno" y URL o dirección IP.

>**El demonio se niega a comenzar**
>
>Intenta iniciar el demonio en modo de depuración para ver el error.

>**Por qué la asociación de un socket es más compleja en Jeedom que en otras soluciones de automatización del hogar ?**
>
>En otras soluciones de automatización del hogar, a menudo es suficiente hacer clic en los botones del control remoto para poder controlar el zócalo que controla el control remoto, por qué este no es el caso con Jeedom ?
>
>Jeedom disocia el control remoto del zócalo, con el método anterior, sus botones deben controlar el zócalo, y si rompe la asociación entre el zócalo y el control remoto, la solución de automatización del hogar ya no puede controlar el zócalo.
>
>Bajo Jeedom es diferente : la asociación es más compleja pero ya no es necesario que el control remoto tenga botones X monopolizados por el control del zócalo. Estos botones se pueden usar para controlar un grupo de salida que mezcla varias tecnologías (Z-Wwave, Enocean y RFXcom por ejemplo).

>**Mi conector DIO no quiere asociarse con Jeedom**
>
>Esto suele ocurrir cuando la memoria interna de la salida está llena. Para borrar la memoria de los zócalos DIO / Chacon (no aceptan más de 3 códigos diferentes) bajo Jeedom, debe crear un comando "reset" con el valor 0B110006 \#ID\#09030070 En este momento, el LED rojo parpadea dos veces y el zócalo puede aceptar una nueva asociación con Jeedom.

>**La batería de mis sondas no sube correctamente**
>
>Compruebe que tiene un pedido de batería con "batería" de Id. Lógico en su equipo

>**Tengo el error [Errno 5] Error de entrada / salida**
>
>Este error es lamentablemente hardware (problema de comunicación con RFXcom). A menudo, esto se debe a un problema con la fuente de alimentación o el cable USB, por lo que puede intentar cambiar el cable USB y / o pasar por un concentrador USB con alimentación

>**No puedo reconocer algunos sensores a pesar de la activación del protocolo correcto**
>
> Verifique que el firmware esté actualizado. Entonces, si aún no es bueno, tienes que probar con rfxmng

>**Tengo el error Estado de espera de tiempo de espera**
>
> Esto generalmente ocurre en 2 casos :
>- Su módulo RFXCOM no está actualizado, vea [aquí](http://www.rfxcom.com/epages/78165469.sf/nl_NL/?ObjectPath=/Shops/78165469/Categories/Downloads)
>- Tomó el complemento RFXCOM mientras tenía un RFPLAYER, por lo que debe tomar el complemento RFPLAYER

>**Tengo problemas para volver a ensamblar los sensores y la única solución es reiniciar todo**
>
> Con la ayuda de Windows y el rfxmanager es necesario endurecer en el rfxcom la activación o no de los diferentes protocolos
