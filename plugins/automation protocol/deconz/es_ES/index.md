# Complemento Deconz

Este complemento permite, mediante una llave Conbee (1 o 2), controlar la herramienta Deconz, que permite utilizar Zigbee (módulos Xiaomi, Philips Hue, IKEA...).

Este plugin no utiliza la nube en absoluto, por lo que no establece ninguna comunicación con el exterior (servidores de terceros) y funciona al 100 % de forma local.

Atención: Zigbee no funciona en absoluto como Z-Wave; la lista de módulos incluidos no se guarda en absoluto en la llave (no se guarda nada en la llave). Por lo tanto, es fácil sustituir la llave (mediante copia de seguridad/restauración; la copia de seguridad se puede recuperar desde Jeedom, pero no restaurar desde Jeedom; para la restauración hay que hacerlo a través de Deconz; si tienes una instalación local, es IP_JEEDOM:8484). Sin embargo, en caso de trasladar la llave de un sistema a otro, también hay que realizar una copia de seguridad y una restauración.

>**IMPORTANTE**
>
> Este complemento requiere una memoria USB [Conbee](http://bit.ly/2n4VyWc)

>**IMPORTANTE**
>
> Debian Strech (debian 9) o superior es absolutamente necesario para que el complemento funcione

>**IMPORTANTE**
>
> El complemento no es compatible con una arquitectura de 32 bits (hardware antiguo). El módulo es compatible con todas las Raspberry Pi.

>**IMPORTANTE**
>
> En la RPI hay que desactivar las opciones serie para que la llave Conbee funcione correctamente (esto se hace por SSH en raspi-config)

# Módulo compatible

Aquí encontrarás la lista de módulos compatibles con Deconz [aquí](https://phoscon.de/en/conbee/compatible)

>**NOTA**
>
> La incorporación de módulos no la gestiona directamente Jeedom SAS, sino la empresa fabricante del gateway Deconz. Por lo tanto, no podemos garantizar que una solicitud de asistencia técnica para un nuevo módulo tenga éxito. Por ello, se recomienda encarecidamente adquirir un módulo compatible.

>**NOTA**
>
> En el caso de un denominado módulo compatible que no es compatible o parcialmente compatible, la empresa Jeedom SAS no se hace responsable y no tiene obligación de resultado en la corrección de inquietudes

# Configuración de complementos

El complemento admite varias pasarelas Deconz (1 llave Conbee por pasarela). Una pasarela Conbee se puede instalar en:

- el propio Jeedom (compatible con Smart, RPi y x64_86)
- un rpi remoto
- o cualquier otra tarjeta compatible con Deconz.

Para la instalación remota, aquí tienes la [Documentación](https://phoscon.de/en/conbee/install)

Para instalarlo en Jeedom, solo tienes que hacer clic en el botón para instalar Deconz de forma local.

>**IMPORTANTE**
>
> NO DEBE hacer los 2 métodos de instalación en el mismo sistema, es uno u otro

>**NOTA**
>
>Para actualizar Deconz localmente, solo tienes que volver a hacer clic en el botón de instalación de Deconz localmente

## Agregar puertas de enlace

Para añadir nuevas pasarelas al complemento, hay que ir a la página de configuración del complemento (Complementos -> Gestión de complementos y, a continuación, deconz), hacer clic en «Detectar» (aunque no siempre funciona) o bien introducir manualmente, como mínimo, la dirección IP de la pasarela y el puerto.

A continuación, en Deconz (Phoscon; si lo has instalado localmente, debes acceder a IPJEEDOM:8484) y, en el menú de la esquina superior izquierda (las tres rayitas) hay que ir a «gateway», luego a «advanced» y hacer clic en «Authenticate App»; por último, en un plazo de 60 segundos, hay que acceder a la configuración del complemento en Jeedom, guardar bien la lista de gateways si la has cambiado y, a continuación, hacer clic en «Recuperar clave API».

# Redes Deconz

Atención en la parte superior derecha tiene un botón de selección para elegir la puerta de enlace para mirar

## Resumen

Aquí encontrarás la información principal sobre tu red Deconz (en concreto, la versión de Deconz y del firmware).

## Acción

Aquí podrás:

- Actualizar el firmware (solo funciona si no hay ninguna otra memoria USB conectada al ordenador)
- Realizar un reinicio (atención: esto obliga a volver a asociar todo)
- Cambiar la fuente de actualización del firmware (no se recomienda modificarla)
- cambiar el canal

## Nudos

Aquí tienes un resumen de los nodos conocidos de la llave, con la fecha de la última comunicación, la versión del firmware y el nivel de batería; al hacer clic en el botón «Info», se muestran los detalles del nodo.

>**NOTA**
>
>Aquí los nodos se clasifican por tipo, por lo que un módulo puede aparecer varias veces en función del número de tipos

# Inclusión

Para añadir un dispositivo, solo tienes que hacer clic en el botón «Añadir». El sistema te pedirá la puerta de enlace y, una vez validada, dispondrás de 3 minutos para realizar la configuración.

Para cambiar el módulo al modo de inclusión, debe ir a la documentación del módulo en cuestión

>**IMPORTANTE**
>
> La red Zigbee es muy diferente de la red Z-Wave: Zigbee puede pasar por un repetidor, pero debe ser así desde el momento de la inclusión. Por lo tanto, al incluir el módulo, hay que hacerlo lo más cerca posible del dispositivo Conbee si no quieres que la comunicación pase por un repetidor (atención: puedes tener un máximo de 32 módulos conectados directamente al dispositivo Conbee).O lo más cerca posible del repetidor (cualquier módulo alimentado puede actuar como repetidor).

# Sincronización

Una vez realizada la incorporación, Jeedom debería redirigirte directamente a la página del nuevo módulo. Si la detección no ha funcionado, solo tienes que hacer clic en «sincronizar».

# Dispositivos

En la primera pestaña encontrarás toda la configuración de tu equipo:

- Nombre del equipo: nombre de tu equipo de simulación,
- Objeto principal: indica el objeto principal al que pertenece el equipo,
- Activar: permite poner en marcha tu equipo,
- Visible: hace que tu equipo aparezca en el panel de control.
- Un botón de configuración que, en función del módulo, te mostrará las opciones disponibles (atención: aquí, Jeedom muestra las opciones tal y como las propone el módulo; a veces, esto no tiene mucho sentido dependiendo del módulo).
- información general sobre el módulo
- la elección de visual

>**IMPORTANTE**
>
> En este caso, la gestión de los comandos no se parece en nada a la de Z-Wave. Al añadir un módulo, pueden darse varios casos:
> - El módulo tiene una configuración específica: en este caso, dispones de la interfaz gráfica del módulo, así como de una configuración adaptada (esto no suele ser habitual, ya que rara vez es necesario en Zigbee).
> - El módulo tiene una configuración genérica en función de los tipos: dispone de una interfaz genérica y de los controles correspondientes a los tipos del módulo (este es el caso más habitual).
> - Jeedom no reconoce el módulo ni los tipos: en ese caso, hay que enviar una solicitud de asistencia para que se añadan en la próxima actualización del complemento

# Salvaguardia

El complemento realiza una copia de seguridad de la red contenida en la memoria USB en un archivo local; puedes descargarla desde la página de configuración.

# Catering

Al restaurar una copia de seguridad de Jeedom, los dispositivos se restauran pero no se vuelven a vincular a la llave; es posible que tengas que volver a instalar la llave. Para ello, necesitarás la copia de seguridad mencionada anteriormente. Este archivo se encuentra en ``plugins/deconz/data`` y se incluirá en Phoscon, pero primero hay que cambiar la extensión del archivo ``.tar.gz`` en ``.dat``.

A continuación, accede a la interfaz de Phoscon. Menú => Gateway => Opciones de copia de seguridad => Cargar copia de seguridad.

Ahora solo tienes que generar una clave API, guardar los datos y, por último, realizar una sincronización desde la página del complemento.

# Actualización de firmware

## Conbee II

Puede hacerlo directamente desde jeedom si la clave está conectada a él, desde la configuración del complemento, pero es más que recomendable hacerlo desde Windows siguiendo la documentación oficial de Deconz

## Conbee

Ir a [aquí](https://www.dresden-elektronik.de/rpi/deconz-firmware/?C=M;O=D) y comprueba si hay un nuevo firmware; si es así, descárgalo

````
wget https://www.dresden-elektronik.de/rpi/deconz-firmware/deCONZ_Rpi_0x26300500.bin.GCF
sudo GCFFlasher_internal -d 0 -f deCONZ_Rpi_0x26300500.bin.GCF
````

>**IMPORTANTE**
>
>Atención: para poder actualizar el firmware, es imprescindible que todos los demonios de la memoria USB (Z-Wave, Enocean, RFXcom...) estén desactivados y que compruebes que la memoria USB está realmente a 0 con ``GCFFlasher_internal -l``. Se recomienda desconectar las demás llaves

# Preguntas frecuentes

>**El demonio se inicia y se apaga solo al cabo de un minuto**
>
>Si utilizas RPI, no se te debe haber desactivado el puerto serie (esto se configura en raspi-config)

>**Tengo un dispositivo Daylight en la lista de nodos, pero no aparece en Jeedom**
>
>Normalmente se trata de un dispositivo virtual no eliminable creado por Deconz. Como no es un dispositivo «real», Jeedom no lo muestra.

>**Me aparece el error «Error al realizar la solicitud: 127.0.0.1:8484/api/931559A482/sensors(POST), datos: null, error: 1 => usuario no autorizado»**
>
>No has autorizado a Jeedom a conectarse a Deconz; tienes que ir a Deconz (Phoscon; si lo has instalado localmente, tienes que ir a IPJEEDOM:8484) y, en el menú de la esquina superior izquierda (las tres rayitas) hay que ir a «gateway», luego a «advanced» y hacer clic en «Authenticate App»; por último, en un plazo de 60 segundos, hay que acceder a la configuración del plugin en Jeedom, guardar bien la lista de gateways si la has modificado y, a continuación, hacer clic en «Recuperar clave API».

>**Mi RPi (4) no detecta la llave Deconz**
>
>Hay que actualizar el firmware del dispositivo mediante otro sistema (Windows)

>**Puedo controlar mis dispositivos, pero no recibo respuesta a las solicitudes de información**
>
>Seguramente se deba a un problema con las zonas horarias (deconz es muy exigente en este aspecto). Hay que:
>- Comprueba en «Redes de Deconz» que la zona horaria y la hora sean correctas; si no es así, puedes configurarlo en Deconz o marcar la casilla «Zonas horarias» en la pasarela, en la configuración del complemento de Deconz (si eliges este último método, tendrás que esperar una hora para que el cambio surta efecto).
>- comprueba la zona horaria de tu sistema operativo (especialmente en los RPi), que debe estar correctamente configurada
