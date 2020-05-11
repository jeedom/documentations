# Complemento Deconz

Este complemento permite, a través de una clave de conbee (1 o 2), controlar la herramienta deconz que permite zigbee (módulo xiaomi, philips hue, ikea ...).

Este complemento no tiene nubes, por lo que no se comunica con el exterior (servidor de terceros) y funciona 100% localmente !!!!

Atención, el Zigbee no funciona en absoluto como el Zwave, la lista de módulos incluidos no se guarda en absoluto en la clave (nada se guarda en la clave). Por lo tanto, es fácil reemplazar la clave (mediante copia de seguridad / restauración, la copia de seguridad se puede recuperar de jeedom pero no se puede restaurar desde jeedom, es necesario que la restauración pase por Deconz, si está en una instalación local es IP_JEEDOM:8484). Por contra en caso de mover la llave de un sistema a otro, también es necesario hacer una copia de seguridad / restaurar.

>**Importante**
>
> Este complemento requiere una llave USB [Conbee](http://bit.ly/2n4VyWc)

>**Importante**
>
> Debian Strech (debian 9) o superior es absolutamente necesario para que el complemento funcione

>**Importante**
>
> El complemento no es compatible con una arquitectura de 32 bits (hardware antiguo). El módulo es compatible con todas las Raspberry Pi

>**Importante**
>
> En RPI, debe desactivar las opciones de serie para que la clave conbee funcione correctamente (ocurre en ssh en raspi-config)

# Módulo compatible

Aquí encontrará la lista de módulos compatibles con deconz [aquí](https://phoscon.de/en/conbee/compatible)

>**Nota**
>
> Agregar un módulo no es administrado directamente por Jeedom SAS sino por el editor de la escapada Deconz. Por lo tanto, no podemos garantizar que una solicitud de soporte para un nuevo módulo tenga éxito. Por lo tanto, se recomienda comprar un módulo compatible

>**Nota**
>
> En el caso de un denominado módulo compatible que no es compatible o parcialmente compatible, la empresa Jeedom SAS no se hace responsable y no tiene obligación de resultado en la corrección de inquietudes

# Configuración de complementos

El complemento admite varias puertas de enlace deconz (1 clave de conbee por puerta de enlace). Se puede instalar una puerta de enlace conbee en :

- Jeedom en sí (compatible con smart, rpi y x64_86)
- un rpi remoto
- o cualquier otra tarjeta compatible con deconz.

Para la instalación remota aquí está el [Documentación](https://phoscon.de/en/conbee/install)

Para la instalación en jeedom solo tiene que hacer clic en el botón para instalar deconz localmente.

>**Importante**
>
> NO DEBE hacer los 2 métodos de instalación en el mismo sistema, es uno u otro

>**Nota**
>
>Para actualizar la descontaminación local, simplemente haga clic en el botón de instalación de descontaminación local

## Agregar puertas de enlace

Para agregar nuevas puertas de enlace al complemento, ya sea en la página de configuración del complemento (Complemento -&gt; Administración del complemento y luego descontaminar), haga clic en descubrimiento (no siempre funciona) o agregue manualmente al menos la ip de la puerta de entrada y el puerto.

Luego, en deconz (Phoscon, si lo instaló localmente, debe ir a IPJEEDOM:8484) luego en el menú en la parte superior izquierda (las 3 líneas pequeñas) debe ir a "puerta de enlace" y luego "avanzado" y hacer clic en "Autenticar aplicación" y finalmente en los años 60 vaya a la configuración del complemento en Jeedom, guarde el lista de puertas de enlace si la ha cambiado, haga clic en "Recuperar clave API".

# Redes Deconz

Atención en la parte superior derecha tiene un botón de selección para elegir la puerta de enlace para mirar

## Resumen

Aquí encontrará la información principal de sus redes deconz (en particular la versión de deconz y firmware).

## Action

Allí podrás :

- actualizar el firmware (solo funciona si no hay otra llave USB conectada a la máquina)
- hacer un reinicio (cuidado, requiere volver a asociar todo)
- cambiar la fuente de actualización de firmware (no se recomienda tocarlo)
- cambiar el canal

## Noeuds

Aquí tiene un resumen de los nodos conocidos de la clave, con la fecha de la última comunicación, la versión del firmware, el nivel de batería y haciendo clic en el botón de información los detalles del nodo.

>**Nota**
>
>Aquí los nodos se cortan por tipo, por lo que un módulo puede aparecer varias veces dependiendo del número de tipo

# Inclusion

Para la inclusión solo tiene que hacer clic en el botón de inclusión, el sistema solicita la puerta de enlace una vez validado, tiene 3 minutos para hacerlo.

Para cambiar el módulo al modo de inclusión, debe ir a la documentación del módulo en cuestión

>**Importante**
>
> La red Zigbee es muy diferente de la red Zwave, el zigbee puede pasar por un repetidor pero debe ser el caso desde la inclusión. Por lo tanto, es necesario durante la inclusión del módulo hacerlo lo más cerca posible de la clave si no desea que la comunicación pase por un repetidor (tenga cuidado de que puede tener un máximo de 32 módulos en vivo en la clave de conbee).O lo más cerca posible del repetidor (cualquier módulo alimentado puede ser un repetidor).

# Synchronisation

Una vez hecha la inclusión, Jeedom debería enviarlo directamente a la página del nuevo módulo. Si el descubrimiento no funcionó, simplemente haga clic en sincronizar

# Equipement

Encontrarás en la primera pestaña toda la configuración de tu equipo :

- Nombre del equipo : nombre de su equipo de simulación,
- Objeto padre : indica el objeto padre al que pertenece el equipo,
- Activar : activa su equipo,
- Visible : hace que su equipo sea visible en el tablero.
- Un botón de configuración que, según el módulo, le ofrecerá las posibles opciones (tenga cuidado aquí, jeedom mostrará las opciones que el módulo les ofrece a veces no tiene mucho sentido dependiendo del módulo)
- información general sobre el módulo
- la elección de visual

>**Importante**
>
> Aquí la gestión de pedidos no se parece en nada a la zwave. Al incluir un módulo hay varios casos posibles :
> - el módulo tiene una configuración específica : en este caso, tiene el visual del módulo, así como una configuración adaptada (rara vez es así porque puede ser necesario en zigbee)
> - el módulo tiene una configuración genérica dependiendo de los tipos  : tiene un visual genérico y los comandos correspondientes a los tipos del módulo (este es el caso más común)
> - módulo y tipos son desconocidos de jeedom : en este caso, debe abrir una solicitud de soporte para agregarla en la próxima actualización del complemento

# Actualización de firmware

## Conbee II

Puede hacerlo directamente desde jeedom si la clave está conectada, desde la configuración del complemento

## Conbee

Seguir [aquí](https://www.dresden-elektronik.de/rpi/deconz-firmware/?C=M;O=D) y verifique si hay un nuevo firmware, en caso afirmativo, recupere

````
wget https://www.dresden-elektronik.de/rpi/deconz-firmware/deCONZ_Rpi_0x26300500.bin.GCF
sudo GCFFlasher_internal -d 0 -f deCONZ_Rpi_0x26300500.bin.GCF
````

>**Importante**
>
>Atención para poder flashear es absolutamente necesario que todos los demonios en una clave USb (zwave, enocean, rfxcom ...) se corten y verifiquen que la clave esté realmente en 0 con ``GCFFlasher_internal -l``. Es recomendable desconectar las otras claves

# FAQ

>**El demonio comienza y se corta después de un minuto**
>
>Si está bajo RPI, la serie no debería haberse cortado (sucede en raspi-config)

>**Tengo un equipo de luz diurna en la lista de nodos pero no en Jeedom**
>
>Normalmente es un equipo virtual no extraíble creado por Deconz. Como no es un equipo &quot;real&quot; de Jeedom, no lo vuelve a montar

>**Tengo el error &quot;Error durante la solicitud : 127.0.0.1:8484 / api / 931559A482 / sensores (POST), datos : error nulo : 1 => usuario no autorizado"**
>
>No ha autorizado a Jeedom para conectarse a Deconz, debe hacerlo en deconz (Phoscon, si lo instaló localmente debe ir a IPJEEDOM:8484) luego en el menú en la parte superior izquierda (las 3 líneas pequeñas) tienes que ir a "puerta de enlace" y luego "avanzado" y hacer clic en Autenticar aplicación y finalmente en los años 60 ir a la configuración del complemento en Jeedom, guardar la lista de puerta de enlace si la ha cambiado, haga clic en "Recuperar clave API"

>**Mi rpi (4) no ve la tecla deconz**
>
>Debe actualizar el firmware clave utilizando otro sistema (Windows)

>**Me las arreglo para controlar mi equipo pero no tengo comentarios sobre pedidos de información**
>
>Esto probablemente se deba a un problema con las zonas horarias (deconz es muy exigente al respecto). Hay que :
>- marque en &quot;Deconz Networks&quot; que la zona horaria y la hora son correctas, si no puede configurarlo en deconz o marque la casilla &quot;Zonas horarias&quot; en la puerta de enlace en la configuración del complemento deconz (si hace este último método, debe espere 1 hora antes de que la corrección sea efectiva)
>- compruebe la zona horaria de su sistema operativo (especialmente en el rpi) que debe ser absolutamente bueno
