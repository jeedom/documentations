# Complemento de Zigbee

El complemento Zigbee le permite comunicarse con la mayoría de los equipos Zigbee existentes. Se basa en el proyecto (super) Zigpy que es compatible con las siguientes teclas zigbee :

- Deconz. Probado y validado por el equipo de Jeedom. No es necesario tener instalado Deconz
- EZSP (clave basada en un chupset de Silicon Labs). Sometido a prueba por el equipo de Jeedom
- X-bee. No probado por el equipo de Jeedom
- Zigate. No probado por el equipo, marcado como experimental en Zigpy
- ZNP (instrumento de Texas, pila Z 3.X.X). No probado por el equipo, marcado como experimental en Zigpy
- CC (instrumento de Texas, pila Z 1.2.X). No probado por el equipo, marcado como experimental en Zigpy

# Configuración del plugin

Después de instalar el complemento, solo tiene que instalar las dependencias, seleccionar su tipo de clave, el puerto (tenga cuidado solo el tipo de clave deconz admite el puerto en automático) e iniciar el demonio. También puedes elegir el canal para el zigbee.

>**Importante**
>
>Cualquier cambio de canal requiere necesariamente un reinicio del demonio. Un cambio de canal también puede requerir la reincorporación de cierto módulo

## Copia de seguridad de restauracion 

Es posible en llaves tipo EZSP (Elelabs por ejemplo) y ZNP hacer una copia de seguridad de esta para restaurarla en otra llave.

>**Importante**
>
> En las claves de tipo EZXP (Elelabs) solo es posible realizar una única restauración de respaldo en todas y durante la vida de la clave !!!!

La copia de seguridad no contiene la lista de módulos sino solo la información básica de la red zigbee, por lo que no es necesario hacerlo con frecuencia, solo uno es suficiente porque no se mueve durante la vida de la llave.

>**Importante**
>
> Durante una copia de seguridad o una restauración, los demonios de zigbee se detienen

## Actualización de firmware 

Es posible desde Jeedom actualizar el firmware de la clave Zigbee (solo para Elelabs por el momento). El firmware es realmente muy importante en zigbee (es él quien gestiona el enrutamiento por ejemplo) es importante actualizarlo.

>**Importante**
>
> Durante una actualización de firmware, los demonios zigbee se detienen

## Parámetros específicos de Zigpy (reservados para expertos !!!!)

Es posible configurar parámetros específicos para el subsistema zigbee (zigpy). Esta parte está realmente reservada para expertos y Jeedom no proporciona una lista de posibles parámetros (hay cientos que dependen del tipo de clave). El campo toma como entrada del ejemplo json : 

````
{
    "ezsp": {
        "CONFIG_ADDRESS_TABLE_SIZE": "16"
    }
}
````

>**Importante**
>
>Durante CUALQUIER solicitud de soporte, si hay una configuración anterior, la solicitud de soporte se rechazará automáticamente


# Inclusión del módulo

La inclusión es la parte más difícil en Zigbee. Aunque simple, la operación a menudo se realiza varias veces. En el lado del complemento, es fácil simplemente hacer clic en el botón "Incluir modo", una vez hecho esto, tiene 3 minutos para incluir su equipo.

Cambios de lado del equipo en función del módulo, es necesario consultar la documentación de este cada vez.

>**Importante**
>
>No olvide hacer un reset del módulo antes de cualquier inclusión

# Equipement

Una vez incluido, Jeedom debe reconocer automáticamente su módulo (si este no es el caso, consulte el siguiente capítulo) y por lo tanto crear los comandos que vayan bien. Tenga en cuenta que debido a un error en cierto firmware (Ikea, Sonoff ...) a veces es necesario elegir el tipo de módulo directamente en la lista "Equipo" y luego guardar para tener los comandos correctos.

Tienes en la pestaña de equipos los siguientes parámetros :

- **Nombre del equipo zigbee** : nombre de su equipo Zigbee
- **Identificación** : identificadores únicos del equipo, incluso durante una reincorporación (o incluso si cambia el tipo de llave zigbee)
- **Activar**
- **Visible**
- **Objeto padre**
- **Despacho**
- **Categoría**
- **No espere el regreso de ejecución de órdenes (más rápido pero menos confiable)** : no espere a que la validación de la clave diga que el comando se ha ejecutado. Hace que la mano sea más rápida pero no garantiza que todo haya ido bien

En la pestaña de comandos encontrarás los comandos de tu módulo (si ha sido reconocido)

## Pedido de expertos

Para los expertos, así es como funcionan los controles :

- ``attributes::ENDPOINT::CLUSTER_TYPE::CLUSTER::ATTRIBUT::VALUE``, le permite escribir el valor de un atributo (tenga cuidado de que no todos los atributos se pueden cambiar) con :
  - ``ENDPOINT`` : número de punto final
  - ``CLUSTER_TYPE`` : tipo de clúster (IN o OUT)
  - ``CLUSTER`` : número de grupo
  - ``ATTRIBUT`` : número de atributo
  - ``VALUE`` : valor para escribir
Ejemplo : ``attributes::1::in::513::18::#slider#*100``, aquí escribiremos el atributo en el punto final 1, clúster entrante (``in``) 513, atributo 18 con el valor de la ``slider*10``
- ``ENDPOINT::CLUSTER:COMMAND::PARAMS``, permite ejecutar un comando del servidor, con :
  - ``ENDPOINT`` : número de punto final
  - ``CLUSTER`` : nombre del clúster
  - ``COMMAND`` : Nombre de la orden
  - ``PARAMS`` parámetro en el orden correcto separado por ::
Ejemplo : ``1::on_off::on``, aquí ejecutamos el comando ``on`` en el punto final 1 del clúster ``on_off`` sin parámetros
Ejemplo : ``1::level::move_to_level::#slider#::0``, aquí ejecutamos el comando ``move_to_level`` en el punto final 1 del clúster ``level`` Con parámetros ``#slider#`` y ``0``

# Mi módulo no es reconocido

Si su módulo no es reconocido por jeedom (sin comando) pero está incluido, debe pedirle al equipo de Jeedom que lo agregue.

>**Importante**
>
>El equipo de Jeedom se reserva el derecho de rechazar cualquier solicitud de integración, siempre es mejor tomar un módulo ya compatible

Para ello, debe proporcionar los siguientes elementos (cualquier solicitud incompleta será rechazada sin una respuesta del equipo de Jeedom) :

- Proporcione el modelo exacto de su módulo (con un enlace a la página de ventas)
- En la página del equipo, haga clic en configuración, luego en la pestaña "Información sin procesar" y envíe el contenido al equipo de Jeedom
- Ponga el daemon en debug (y reinícielo), realice acciones en el equipo (si es un sensor de temperatura, varíe la temperatura por ejemplo, si es una válvula, varíe el setpoint ...) y envíe el registro de depuración de zigbee (tenga cuidado de tomar el zigbee y no el zigbeed)

# Touchlink

Touchlink o Lightlink es una parte especial del Zigbee que le permite enviar órdenes de gestión a un módulo si está muy cerca de él (50cm). Se usa por ejemplo para hacer un reset en las bombillas que no tienen botón.

Esto por lo tanto concierne a todo lo que sean bombillas Zigbee tipo Philips Hue, Ikea, Osram, Icasa ... etc. El principio es muy sencillo para poder asociar este tipo de módulo con una red zigbee, primero debes hacer un reset. Luego, al reiniciar, el módulo intentará asociarse automáticamente con la primera red Zigbee abierta que encuentre.

## Restablecer en Touchlink

Esta es la parte complicada (como siempre en Zigbee lo más difícil es el reinicio / asociación). Varios métodos :

- Haga el encendido / apagado 5 o 6 veces rápidamente, la bombilla normalmente parpadea rápidamente al final para indicar que está bien (rara vez funciona)
- Utilice un control remoto zigbee y
  - presione al mismo tiempo el botón de ENCENDIDO y APAGADO durante 5 a 10 segundos cerca de la bombilla encendida (tenga cuidado con ciertas bombillas, a veces tiene que apagar / encender la bombilla justo antes) para los controles remotos de Philips hue
  - presione el botón de reinicio (al lado de la batería) durante 5 a 10 segundos cerca de la bombilla encendida (tenga cuidado con ciertas bombillas, a veces tiene que apagar / encender la bombilla justo antes) para los controles remotos de Ikea
- Para las bombillas de tono, también puede incluirlas en el puente de tono y luego quitarlas de él

# Actualización de OTA 

Las actualizaciones OTA son actualizaciones de firmware del módulo, lleva mucho tiempo (varias horas) pero le permite tener menos preocupaciones en general. Para poder actualizar un módulo, el fabricante debe comunicar el firmware : 

- Para Ikea y Ledavance, no se preocupe, Ikea lo proporciona en línea directamente, el complemento lo recogerá directamente de ellos 
- Para otros (ver [aquí](https://github.com/Koenkk/zigbee-OTA/tree/master/images)) el fabricante a veces proporciona una actualización no oficial 
- Para todos los demás, no hay posibilidad de actualizar el módulo mediante el complemento 

Para activar las actualizaciones OTA, simplemente marque la casilla en la configuración del complemento, luego guarde y luego haga clic en el botón para actualizar los archivos OTA. Entonces simplemente reinicia el (los) demonio (s) zigbee.

Las actualizaciones se lanzan si hay una y luego el módulo pregunta si hay una (puede forzar esto en la pestaña de acción en la configuración del módulo / nodo). Desafortunadamente, no hay un indicador simple para ver el progreso de la actualización, la única solución es ir a los registros de zigbee_X (si el registro está depurado) y buscar ota y puedes ver si un módulo se actualiza con registros del tipo : 

````
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA query_next_image handler for 'IKEA of Sweden TRADFRI control outlet': field_control=1, manufacture_id=4476, image_type=4353, current_file_version=536974883, hardware_version=60
2020-02-27 15:51:10 [DEBUG][0x7813:1:0x0019] OTA image version: 537011747, size: 204222. Update needed: True
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA image_block handler for 'IKEA of Sweden TRADFRI control outlet': field_control=0, manufacturer_id=4476, image_type=4353, file_version=537011747, file_offset=0, max_data_size=63, request_node_addr=Noneblock_request_delay=None
2020-02-27 15:51:18 [DEBUG][0x7813:1:0x0019] OTA upgrade progress: 0.0

 ````

# Consejos para hacer más confiables las redes zigbee 

Para tener una red zigbee confiable es más que recomendable tener al menos 3 módulos de enrutador permanentemente alimentados y evitar desenchufarlos. De hecho, durante nuestras pruebas notamos una gran mejora en la confiabilidad y resistencia de las redes zigbee al agregar un módulo de enrutador. También es aconsejable incluirlos primero (de lo contrario, el dispositivo final [módulo sin enrutador] tardará entre 24 y 48 horas en descubrirlo)).

Otro punto importante es que durante la extracción de un módulo router es posible que parte del dispositivo final [módulo no router] se pierda durante más o menos tiempo (diez horas o más), o incluso definitivamente y que tengas que volver a incluirlos. Desafortunadamente, el equipo de Jeedom no puede hacer nada al respecto, es específico para el dispositivo final [módulo sin enrutador] dependiendo de cómo lo configuró el fabricante (y no el complemento Jeedom que no se ocupa de la parte de enrutamiento en absoluto))

>**NOTA**
>
> El gráfico de las redes Zigbee es solo informativo y se basa en los vecinos que los módulos declaran tener, por lo que no es necesariamente el enrutamiento real sino los posibles enrutamientos.

Otro punto importante: las pasarelas zigbee en wifi son menos confiables que las pasarelas zigbee en USB, es obvio, pero preferimos recordarle que aquí, por lo tanto, se recomienda encarecidamente utilizar pasarelas USB.
 

# FAQ

>**LQI o RSSI es N / A
>
>Normalmente es luego de un reinicio de las redes Zigbee los valores se vacían, es necesario esperar a que el módulo se vuelva a unir para que los valores regresen

>**Tengo problemas de inclusión o errores en los registros de tipos ``TXStatus.MAC_CHANNEL_ACCESS_FAILURE``**
>
>Intente quitar la extensión USB si tiene una o cámbiela o coloque una si no tiene una

>**Tengo errores "no se puede enviar al dispositivo" o "error de envío" o "error en el envío del mensaje""**
>
>Desafortunadamente es muy complicado de corregir, generalmente se debe a un problema de enrutamiento (el enrutamiento es más o menos fijo en zigbee y no simétrico : el módulo puede usar una ruta diferente para responderte que la que usó para hablar con él). A menudo, el corte eléctrico (quitar las baterías, por ejemplo) y restablecer la corriente (o reemplazar las baterías) es suficiente para resolver el problema.

>**Tengo errores extraños en módulos apilados o problemas de inclusión**
>
>Notamos que una buena parte de los problemas de zigbee en los módulos de batería se deben a las baterías (o problemas de resetear los módulos antes de la inclusión). Incluso si parece nuevo, es aconsejable probar con otras personas para asegurarse.

>**Me preocupa actualizar los valores del equipo**
>
> Hay 2 casos posibles :
> - c'est un "vieux module" en ZLL (voir configuration de l'équipement Jeedom indique si c'est du ZHA ou ZLL), dans ce cas il faut absolument une commande "Rafraichir" pour que vous ou Jeedom force une mise à jour valores. Si no lo tiene, debe ponerse en contacto con el soporte técnico para que se pueda agregar a la próxima versión estable. Una vez que haya salido, tendrá que hacer clic en "volver a crear pedidos" sin eliminar
> - el módulo está en ZHA, por lo que es una preocupación de inclusión  : en la pestaña de acciones de la configuración del equipo tienes un botón de reinicio para forzar acciones de inclusión posterior, recuerda mantener el módulo despierto si está en batería.
