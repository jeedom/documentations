# Demonios y Adicciones

## Introduction

En el [tutorial](/es_ES/dev/tutorial_plugin) y la [documentación](/es_ES/dev/plugin_template) aprendió a codificar su primer complemento con acciones relativamente simples activadas por el usuario a través de un comando de acción o por una tarea programada por el núcleo (los crones).
Luego, el complemento puede obtener información puntualmente (por ejemplo, a través de una solicitud http) o realizar todo tipo de operaciones, siempre que se pueda codificar en PHP.

Pasará que necesitas más que eso, algunos ejemplos sin ser exhaustivos:

- usar recursos del sistema, por ejemplo, llave USB u otro hardware (bluetooth...)
- mantener una conexión con un sistema remoto (en la red local o en Internet, pero no en jeedom))
- mantener los procesos activos en segundo plano, lo que no ocurre con el código PHP que "vive" solo durante la ejecución de la solicitud http
- hacer procesamiento en tiempo real

Para esto, la mayoría de las veces usamos un "demonio".
No entren en pánico, ya está todo planeado en el núcleo de jeedom para ayudarnos a poner en su lugar a este demonio y lo detallaremos aquí.

## Estructura de archivos de un demonio

El código y/o el ejecutable de su daemon obviamente debe estar en la estructura de árbol de su complemento y, por lo tanto, debe incluirse y entregarse con el archivo durante la instalación de un complemento.
No existe una regla estricta y rápida sobre la ubicación exacta de su daemon, sin embargo, la convención es colocarlo en `./resources/ del complemento.

En el complemento de la plantilla, encontrará los conceptos básicos para implementar un demonio en Python y este es el ejemplo que usaremos en esta documentación, sin embargo, puede desarrollar su demonio en el idioma de su elección, siempre que pueda ejecutarse en [plataformas compatibles con Jeedom](/es_ES/compatibility/).
La mayoría de los demonios de complementos de Jeedom están en python o nodeJs, pero también hay algunos en .netCore y ciertamente otras tecnologías.

También encontrará algunos métodos útiles para un demonio nodeJs que pueden detallarse en una versión futura de esta documentación. Por ahora los invito a consultar a la comunidad dev para alinearse con otros desarrolladores en todo lo relacionado con NodeJs, principalmente en la versión a usar.

Estructura del directorio de plantillas:

![image](images/daemon_struct.png)

### el demonio de pitón

En el complemento de la plantilla, el directorio del daemon se llamaba `demond`, y el daemon en sí se llama `demond.py`.
Estos nombres son arbitrarios, puede cambiarlos libremente.
La convención es tomar el ID del complemento seguido de la letra ´d´. Lo que da, por ejemplo, para el complemento `blea` el directorio `./resources/blead/` que contiene, entre otras cosas, el archivo `blead.py`, siendo este archivo el punto de partida del daemon.

> **PUNTAS**
>
> No dude en inspirarse en los complementos oficiales con daemon para comprender los detalles, como blea, openzwave o sms.

### el paquete jeedom para un demonio de python

Jeedom proporciona con el complemento de plantilla un paquete de python que ofrece las clases y métodos básicos útiles para administrar el demonio y la comunicación entre el demonio y el código php de su complemento.
Estas clases están en el directorio `./resources/demond/jeedom/jeedom.py` (visible en la captura de arriba).
Para comenzar, no necesita conocer los detalles de implementación de estas clases y métodos, por lo que aquí solo tendrá un resumen de lo que hacen.

#### clase jeedom_utils()

Esta clase es un conjunto de métodos estáticos útiles como `convert_log_level` para convertir el nivel de registro recibido de jeedom en un nivel de registro de la clase python `logging` o `find_tty_usb` para devolver una lista de dispositivos en el sistema.
No los vamos a detallar todos aquí, el nombre de cada uno de los métodos es bastante explícito, los descubrirás sumergiéndote en el código.

#### clase jeedom_serial()

Esta clase encapsula lectura y escritura en un dispositivo.
Nuevamente, no vamos a detallar la clase, los métodos hablan por sí solos, solo sepa que existe si lo necesita.

> **Atención**
>
> Si su daemon no necesita hacer este tipo de acción, deberá recordar no usar o importar esta clase porque el paquete `serial` de python no está instalado por defecto y en este caso su daemon no se iniciará (problema visto varias veces). veces en la comunidad). Volveremos sobre esto en la gestión de dependencias.

#### clase jeedom_socket() & jeedom_socket_handler()

No utilizará la clase `jeedom_socket_handler()` directamente, es solo para `jeedom_socket()`.
El propósito de `jeedom_socket()` es proporcionar comunicación hacia abajo (desde su código php al demonio).
Cuando su complemento necesita enviar una instrucción a su daemon, puede hacerlo a través de este socket, verá un ejemplo más adelante en esta documentación.

Entonces la clase abre un socket tcp y escucha. Cuando se recibe un mensaje, se coloca en una cola que su daemon leerá más tarde, volveremos a él.

Nuevamente, no está obligado a usar este mecanismo, es libre de crear otra cosa (servidor http, por ejemplo), pero es lo que Jeedom proporciona de forma básica, es liviano y funciona muy bien.

#### clase jeedom_com()

Esto asegura la comunicación ascendente, desde el daemon hasta su código php.
Básicamente, usará `send_change_immediate()` al principio, lo que le permite enviar una carga json a Jeedom a través de una solicitud http. Es muy sencillo y efectivo, veremos un ejemplo más adelante.

### Esqueleto de demonio pitón

Ahora que conocemos el entorno, podemos fijarnos en la parte que más nos interese: el daemon y lo que tendremos que codificar.

Por lo tanto, veremos en detalle el esqueleto de un demonio propuesto por Jeedom, abra el archivo `demond.py` y comenzaremos con las últimas líneas que de hecho son el comienzo del programa:

```python
_log_level = "error"
_socket_port = 55009 # para modificar
_socket_host = 'host local'
_dispositivo = 'uno mismo'
_pidfile = '/tmp/demonio.pid'
_Clave API = ''
_llamar de vuelta = ''

para arg en sys.argv:
    if arg.startswith("--nivel de registro="):
        temp, _log_level = división de argumentos("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = división arg("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = división de argumentos("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = división arg("=")
    elif arg.startswith("--apikey="):
        temp, _apikey=arg.split("=")
    elif arg.startswith("--dispositivo="):
        temp, _dispositivo = división arg("=")

_puerto_socket = int(_puerto_socket)

jeedom_utils.set_log_level(_log_level)

logging.info('Solicitud de inicio')
logging.info('Nivel de registro : '+str(_nivel_de_registro))
logging.info('Puerto de socket : '+str(_puerto_socket))
logging.info('Host de socket : '+str(_socket_host))
logging.info('Archivo PID : '+str(_archivopid))
logging.info('Apikey : '+str(_apikey))
logging.info('Dispositivo : '+str(_dispositivo))

señal.señal(señal.SIGINT, manejador)
señal.señal(señal.SIGTERM, controlador)

try:
    jeedom_utils.write_pid(str(_pidfile))
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,ciclo=_ciclo)
    si no jeedom_com.test():
        logging.error('Problemas de comunicación de red. Arregle la configuración de su red Jeedom.')
        shutdown()
    jeedom_socket = jeedom_socket(puerto=_socket_port,dirección=_socket_host)
    listen()
excepto Excepción como e:
    logging.error('Error fatal : '+str(e))
    shutdown()
```

Algunas inicializaciones de variables:

```python
_log_level = "error" # el nivel de registro predeterminado, en formato de texto enviado por Jeedom
_socket_port = 55009 # el puerto que su daemon usará por defecto para abrir el socket de escucha de Jeedom, para ser modificado.
_socket_host = 'localhost' # la interfaz en la que abrir el socket, a priori no cambiar.
_device = 'auto' # es inútil si no está utilizando un dispositivo de hardware
_pidfile = '/tmp/demonio.pid' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;
_apikey = '' # apikey para autenticar la comunicación entre Jeedom y su daemon
_llamar de vuelta = '' ## la URL de devolución de llamada para enviar notificaciones a Jeedom (y a su código php)
```

> **Atención**
>
> Debe tener cuidado al elegir el puerto que va a usar para su socket, este es un posible punto de mejora bajo Jeedom, porque no existe un mecanismo para evitar colisiones: entonces, si otro complemento usa el mismo puerto que usted, obviamente causará un problema. Por el momento, el único método para elegir es buscar entre los complementos existentes los puertos que ya se usaron y alinearse entre la comunidad de desarrolladores (ya hay temas abiertos al respecto)). También es importante dejar este usuario configurable en la configuración de su complemento para que el número de puerto pueda cambiarse si ocurriera tal conflicto.

Luego recuperamos los argumentos recibidos en la línea de comando, esta línea de comando será generada por su código php, volveremos a ella.
Depende de usted eliminar lo que no es útil (como el argumento del dispositivo) o agregar otros, como un usuario/contraseña, si su daemon debe conectarse a un sistema remoto.

```python
para arg en sys.argv:
    if arg.startswith("--nivel de registro="):
        temp, _log_level = división de argumentos("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = división arg("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = división de argumentos("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = división arg("=")
    elif arg.startswith("--apikey="):
        temp, _apikey=arg.split("=")
    elif arg.startswith("--dispositivo="):
        temp, _dispositivo = división arg("=")
```

Luego hay unas pocas líneas de registro y estas dos líneas, clásicas en python, que simplemente registran el método a llamar en caso de que se reciban estas dos señales de interrupción, lo que permitirá detener el demonio:

```python
señal.señal(señal.SIGINT, manejador)
señal.señal(señal.SIGTERM, controlador)
```

y el método `handler` que se define un poco más arriba en el daemon:

```python
def handler(signum=Ninguno, frame=Ninguno):
    logging.debug("Señal %i capturada, saliendo..." % int(signum))
    shutdown()
```

que solo agrega un registro y llama al método `shutdown()` definido justo debajo:

```python
apagado def():
    logging.debug("Apagar")
    logging.debug("Eliminando archivo PID " + str(_pidfile))
    try:
        os.remove(_pidfile)
    except:
        pass
    try:
        jeedom_socket.cerrar()
    except:
        pass
    try:
        jeedom_serial.cerrar()
    except:
        pass
    logging.debug("Salir 0")
    sys.stdout.flush()
    os._exit(0)
```

Es en este método que debe escribir el código que se ejecutará en caso de cierre del daemon, por ejemplo, para cerrar sesión en el sistema remoto y cerrar correctamente las conexiones abiertas.

> **Atención**
>
> debe adaptar este método y eliminar el código que no es necesario en su caso, en particular el intento/excepto en `jeedom_serial.close()` si no usa esta clase.

Si volvemos al inicio del daemon, aquí está la continuación comentada:

```python
try:
    jeedom_utils.write_pid(str(_pidfile)) # escribe el archivo pid que el núcleo de jeedom monitoreará para determinar si el demonio se está ejecutando
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle) # creación del objeto jeedom_com
    si no jeedom_com.test(): #primera prueba para verificar que la URL de devolución de llamada sea correcta
        logging.error('Problemas de comunicación de red. Arregle la configuración de su red Jeedom.')
        shutdown()
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host) # declaramos el socket para recibir órdenes de jeedom
    listen() # y escuchamos
excepto Excepción como e:
    logging.error('Error fatal : '+str(e))
    shutdown()
```

El método `listen()` definido al principio del archivo:

```python
definitivamente escucha():
    jeedom_socket.abierto()
    try:
        mientras 1:
            tiempo.dormir(0.5)
            read_socket()
    excepto KeyboardInterrupt:
        shutdown()
```

Nada que modificar aquí, podemos ver que el socket está abierto y luego un ciclo infinito para leer el socket cada medio segundo

El método `read_socket()`

```python
def read_socket():
    JEEDOM_SOCKET_MESSAGE global
    si no es JEEDOM_SOCKET_MESSAGE.empty():
        logging.debug("Mensaje recibido en el socket JEEDOM_SOCKET_MESSAGE")
        mensaje = json.loads(jeedom_utils.stripped(JEEDOM_SOCKET_MESSAGE.get()))
        si el mensaje ['apikey'] != _apikey:
            logging.error("Apikey del socket no válido : " + str(mensaje))
            return
        try:
            imprimir 'leer'
        excepto Excepción, e:
            logging.error('Enviar comando al error del demonio : '+str(e))
```

La variable `JEEDOM_SOCKET_MESSAGE` es una `queue()` de python impulsada por la clase `jeedom_socket()` como se vio anteriormente.

Si la cola no está vacía, cargamos el json y verificamos que la clave api recibida con el mensaje corresponda a la recibida al iniciar el daemon (`_apikey`) luego podemos leer el mensaje y hacer nuestras acciones en el try/ excepto:

```python
        try:
            imprimir 'leer'
        excepto Excepción, e:
            logging.error('Enviar comando al error del demonio : '+str(e))
```

Entonces, en lugar de `imprimir 'leer'`, depende de usted leer los elementos relevantes del mensaje que su complemento habrá enviado y activar las acciones o llamar a sus clases o métodos específicos para su complemento.

Desde aquí tienes un demonio que se puede ejecutar incluso si no está haciendo nada todavía (ese es tu trabajo).

## Adaptación del código php del plugin

Tener un demonio y comprender su estructura es muy bueno, pero faltan algunos elementos clave para que su complemento (código php) pueda controlar este demonio y para que el núcleo también sepa que existe.

### plugin_info/info.json

En el archivo de información.json de tu plugin, debes agregar la propiedad `hasOwnDeamon` y asignarle el valor `true`, ejemplo:

```json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 10,
    ...
}
```

Veremos más adelante el uso de `hasDependency` y `maxDependancyInstallTime`.

### Administrar el daemon en su clase eqLogic

En la clase eqLogic de tu plugin hay algunos métodos a implementar para el buen manejo del daemon.

#### Función deamon_info()

El núcleo llamará a la función `deamon_info()` cuando muestre el siguiente cuadro en la página de configuración de su complemento, debe existir:

![image](images/daemon_info.png)

Por lo general, se verá así, la matriz devuelta y las claves utilizadas en esa matriz son obviamente importantes.
Puede copiar/pegar el código a continuación tal como está y adaptar el código al final de la función para verificar la configuración necesaria para su complemento.

```php
    función estática pública deamon_info() {
        $devolver = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::getTmpFolder(__CLASE__) . '/deamon.pid';
        si (archivo_existe($pid_archivo)) {
            si (@posix_getsid(trim(file_get_contents($pid_file)))) {
                $return['state'] = 'ok';
            } más {
                shell_exec(sistema::getCmdSudo() . 'rm-rf ' . $pid_file . ' 2>&1 > /desarrollo/null');
            }
        }
        $return['launchable'] = 'ok';
        $user = config::byKey('user', __CLASS__); // exemple si votre démon à besoin de la config user,
        $pswd = config::byKey('password', __CLASS__); // password,
        $clientId = config::byKey('clientId', __CLASS__); // et clientId
        si ($usuario == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le nom d\'utilisateur n\'est pas configuré', __FILE__);
        } de lo contrario ($pswd == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le mot de passe n\'est pas configuré', __FILE__);
        } elseif ($clienteId == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('La clé d\'application n\'est pas configurée', __FILE__);
        }
        devolver $retorno;
    }
```

> **Atención**
>
> No hay ningún error tipográfico en el ejemplo, el método se llama `deamon_info()` y no `daemon_info`, el error está en el núcleo.

La clave `state` obviamente corresponde al estado que se muestra en la pantalla, podemos leer arriba que estamos probando la presencia de nuestro "pid_file" para averiguar si el daemon se está ejecutando o no.

La clave `ejecutable` corresponde a la columna "Configuración" en el marco y, por lo tanto, se puede verificar si la configuración está completa y es correcta para poder iniciar el demonio. `launchable_message` muestra un mensaje al usuario en caso de "NO OK"

#### Función deamon_start()

La función `deamon_start()` es, como su nombre indica, el método que llamará el núcleo para iniciar su daemon.
Puede copiar/pegar el código a continuación tal como está y modificar las líneas indicadas.

```php
    función estática pública deamon_start() {
        self::deamon_stop();
        $deamon_info = self::deamon_info();
        si ($deamon_info['ejecutable'] != 'ok') {
            throw new Exception(__('Compruebe la configuración', __FILE__));
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = 'python3 ' . $path . '/demond.py'; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'proto:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --pidentificación ' . jeedom::getTmpFolder(__CLASE__) . '/deamon.pid'; // et on précise le chemin vers le pidentificación file (ne pas modifier)
        log::add(__CLASS__, 'info', 'Iniciando demonio');
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du Iniciar sesión pour votre démon, vous devez nommer votre Iniciar sesión en commençant par le pluginidentificación pour que le fichier apparaisse dans la page de config
        $i = 0;
        mientras ($i < 20) {
            $deamon_info = self::deamon_info();
            if ($deamon_info['estado'] == 'bien') {
                break;
            }
            sleep(1);
            $i++;
        }
        si ($i >= 30) {
            log::add(__CLASS__, 'error', __('No se puede iniciar el daemon, verifique el registro', __FILE__), 'unableStartDeamon');
            falso retorno;
        }
        message::removeAll(__CLASS__, 'unableStartDeamon');
        devolver verdadero;
    }
```

Modifique solo las líneas con un comentario, el resto debe permanecer sin cambios.

Tenga en cuenta que comenzamos por detener el daemon, esto para gestionar el reinicio.
Luego comprobamos si el daemon realmente se puede iniciar con el método `deamon_info()` y generamos la línea de comando en la variable `$cmd` para iniciar nuestro daemon, aquí con python3

#### Función deamon_stop()

Este método se utilizará para detener el daemon: recuperamos el pid del daemon, que estaba escrito en el "pid_file" y enviamos el sistema kill al proceso.

```php
    función estática pública deamon_stop() {
        $pid_file = jeedom::getTmpFolder(__CLASE__) . '/deamon.pid'; // ne pas modifier
        si (archivo_existe($pid_archivo)) {
            $pidentificación = intval(trim(file_get_contents($pid_file)));
            system::matar ($ pid);
        }
        system::matar('plantilla.py'); // nombre del demonio a modificar
        sleep(1);
    }
```

Llegaste aquí declaraste al demonio en la info.json e implementó los 3 métodos necesarios para que el núcleo de Jeedom inicie y detenga su daemon y muestre su estado. Los requisitos previos están en su lugar.

### Comunicación entre demonio y código PHP

Queda por gestionar la comunicación desde y hacia el daemon. En el código de python ya hemos visto cómo se manejaba: como recordatorio, el método `listen()` y `read_socket()` que escucha en un socket y el método `send_change_immediate()` para enviar una carga json al código php.

Por lo tanto, es necesario administrar el equivalente en el lado de PHP.

#### Enviar un mensaje al demonio

Esta función no existe en el núcleo y no es estándar para todos los complementos de Jeedom, tampoco es obligatoria.
Esta es la función que yo mismo uso (@Mips) en cada uno de mis plugins que tienen un daemon, lo pongo aquí y haces lo que quieres con él;-)

Por lo tanto, recibe una matriz de valores como parámetro y se encarga de enviarla al socket del daemon, que por lo tanto puede leer esta matriz en el método `read_socket()` que vimos anteriormente.

```php
    función estática pública sendToDaemon($params)) {
        $deamon_info = self::deamon_info();
        si ($deamon_info['estado'] != 'ok') {
            throw new Exception("Daemon no iniciado");
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        socket_connect($enchufe, '127.0.0.1', configuración::byKey('socketport', __CLASS__, '55009')); // puerto predeterminado de su complemento para modificar
        socket_write($socket, $payLoad, strlen($payLoad));
        socket_close($enchufe);
    }
```

Lo que hay en la matriz `$params` y cómo usa esos datos en su daemon depende de usted, dependiendo de lo que haga su complemento.

Como recordatorio, esta matriz se recuperará en el método `read_socket()`; fragmento de código de Python:

```python
        si el mensaje ['apikey'] != _apikey:
            logging.error("Apikey del socket no válido : " + str(mensaje))
            return
        try:
            imprimir 'leer'
        excepto Excepción, e:
            logging.error('Enviar comando al error del demonio : '+str(e))
```

Podemos ver claramente la clave "apikey" agregada por el código php que será leída por el código python en la tabla "mensaje""

#### Recibir un mensaje del daemon

Para ello, debemos añadir un archivo a nuestro plugin en la carpeta `./core/php/`. Por convención, llamaremos a este archivo `jee[pluginId].php`. `/plugins/[pluginId]/core/php/jee[pluginId].Por lo tanto, php` será la ruta a usar como URL de devolución de llamada en el método `deamon_start()`

Aquí está el contenido básico que puede copiar/pegar en este archivo:

```php
<?php

probar {
    require_once dirname(__FILE__) . "/../../../../core/php/core.inc.php";

    si (!jeedom::apiAccess(init('apikey'), 'template')) { //reemplace la plantilla con su ID de complemento
        echo __('No está autorizado para realizar esta acción', __FILE__);
        die();
    }
    si (init('prueba') != '') {
        echo 'OK';
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
    si (!is_array($resultado)) {
        die();
    }

    if (isset($resultado['clave1'])) {
        // hacer algo
    } elseif (isset($resultado['clave2'])) {
        // hacer algo más
    } más {
        log::add('plantilla', 'error', 'mensaje desconocido recibido del daemon'); //reemplace la plantilla con su ID de complemento
    }
} catch (Excepción $e) {
    log::add('plantilla', 'error', displayException($e)); //reemplace la plantilla con su ID de complemento
}
```

El código comienza validando que la apikey sea correcta:

```php
    si (!jeedom::apiAccess(init('apikey'), 'template')) { //reemplace la plantilla con su ID de complemento
        echo __('No está autorizado para realizar esta acción', __FILE__);
        die();
    }
```

La primera prueba sirve como método de prueba al iniciar el daemon (ver llamada `jeedom_com.test()` en código daemon):

```php
    si (init('prueba') != '') {
        echo 'OK';
        die();
    }
```

y finalmente cargamos el payload que decodificamos en el arreglo `$result`:

```php
    $result = json_decode(file_get_contents("php://input"), true);
    si (!is_array($resultado)) {
        die();
    }
```

Luego, depende de usted leer la tabla y realizar las acciones en su complemento en consecuencia, ejemplo:

```php
    if (isset($resultado['clave1'])) {
        // hacer algo
    } elseif (isset($resultado['clave2'])) {
        // hacer algo más
    } más {
        log::add('plantilla', 'error', 'mensaje desconocido recibido del daemon'); //reemplace la plantilla con su ID de complemento
    }
```

El código Python para enviar el mensaje se verá así:

```python
jeedom_com.send_change_immediate({'key1' : 'valor1', 'clave2' : 'value2' })
```

Voila, tienes un daemon completamente funcional y puedes comunicarte de un lado a otro entre tu daemon y tu código php, la parte más difícil aún está por hacer: lógica del demonio de código.

## Dependencias

Cuando vamos a escribir un demonio, muy a menudo necesitaremos bibliotecas externas además de nuestras propias clases.

Bajo Debian, típicamente, usaremos la herramienta apt para instalar los paquetes necesarios y para python, usaremos pip.

Y para gestionar esto, una vez más, todo está planeado en el núcleo de Jeedom para ayudarnos. Hay 3 requisitos previos que detallaremos a continuación.

### Declaración en plugin_info/info.json

Mismo ejemplo que para la declaración del daemon, es necesario agregar la propiedad `hasDependency` y asignar el valor `true`:

```json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 10,
    ...
}
```

La propiedad `maxDependancyInstallTime` es el tiempo en minutos después del cual el núcleo considerará que la instalación no tuvo éxito. En este caso, el modo automático del demonio se desactivará y se publicará un mensaje en el centro de notificaciones. Si no se define esta propiedad, el retraso predeterminado será de 30 min.

> **PUNTAS**
>
> El script de instalación no se interrumpirá, por lo que puede terminar con éxito. Este es solo el retraso después del cual el núcleo ya no espera y muestra el progreso.

### Instalación de dependencias

En su clase eqLogic debe agregar esta función si no existe. Puedes copiarlo/pegarlo tal como está sin modificar nada

```php
    función estática pública dependencia_instalación() {
        log::eliminar(__CLASE__.'_actualizar');
        return array('script' => dirname(__FILE__) . '/../../resources/install_#stype#.sh ' . jeedom::getTmpFolder(__CLASE__) . '/dependencia', 'registro' => registro::getPathToLog(__CLASS__.'_update'));
    }
```

Esta función comienza eliminando el registro de la instalación anterior si existió y luego devolverá al núcleo el comando de script a ejecutar y la ubicación del registro.

Tenga en cuenta que el archivo de script devuelto se llama `install_#stype#.sh`. Efectivamente, `#stype#` será reemplazado dinámicamente por el núcleo con la herramienta de administración de paquetes que se usará según el sistema en el que esté instalado Jeedom. Entonces `#stype#` será reemplazado por `apt` en un sistema Debian.
Esto hace posible ofrecer scripts de instalación de dependencias para varios sistemas y, por lo tanto, admitir algo diferente a Debian/apt, que es el mínimo y el único que administraremos aquí.

El primer argumento: `jeedom::getTmpFolder(__CLASE__) . '/dependency'` es el archivo que se usa para rastrear el progreso de la instalación (el porcentaje que aparece en la pantalla durante la instalación).

Eso es todo por la parte de php, ahora tienes que crear el script en `./resources/install_apt.sh` y obviamente el contenido del script dependerá de tu plugin y de los paquetes que quieras instalar.

Aquí hay un ejemplo de un script bastante simple de uno de mis complementos, pero puede hacerlo mucho más completo y avanzado:

```bash
PROGRESS_FILE=/tmp/jeedom/template/dependency #replace template con su ID de complemento

si [ ! -z$1]; después
    PROGRESO_ARCHIVO=$1
fi
toque ${PROGRESS_FILE}
echo 0 > ${ARCHIVO_PROGRESO}
eco "*************************************"
eco "*   Iniciar instalación de dependencias  *"
eco "*************************************"
echo $(fecha)
echo 5 > ${ARCHIVO_PROGRESO}
apt-get-clean
echo 10 > ${ARCHIVO_PROGRESO}
apt-obtener actualización
echo 20 > ${ARCHIVO_PROGRESO}

eco "*****************************"
echo "Instalar módulos usando apt-get"
eco "*****************************"
apt-get install -y python3 python3-requests python3-pip python3-voluptuoso python3-bs4
echo 60 > ${ARCHIVO_PROGRESO}

eco "*************************************"
echo "Instalar las bibliotecas de python requeridas"
eco "*************************************"
python3 -m pip instalar "aiohttp"
echo 80 > ${ARCHIVO_PROGRESO}

echo 100 > ${ARCHIVO_PROGRESO}
echo $(fecha)
eco "***************************"
eco "*      Instalación completa      *"
eco "***************************"
rm ${PROGRESS_FILE}
```

Detallaremos unas líneas:

Comenzamos definiendo la ubicación predeterminada del archivo de progreso en caso de que no hayamos realizado correctamente el paso anterior...
Y usamos el primer argumento recibido como ubicación porque hicimos el paso anterior correctamente;-).

```bash
PROGRESS_FILE=/tmp/jeedom/template/dependency #replace template con su ID de complemento

si [ ! -z$1]; después
    PROGRESO_ARCHIVO=$1
fi
```

Las líneas del tipo `echo 60 > ${PROGRESS_FILE}` obviamente se usan para devolver el progreso: para tranquilizar al usuario, lo ponemos regularmente hasta llegar a 100 (suelen estresarse cuando pasa de 100 así evitamos).

Algunos consejos:

- No haga `apt-get upgrade`! No sabe lo que hay en la máquina y no depende de usted actualizar todo.
- No use `apt` sino `apt-get`. `apt` está hecho para uso interactivo y esto generará una advertencia.
- Agregue el indicador `-y` cuando sea necesario para confirmar las indicaciones; de lo contrario, el script se detendrá con una solicitud como `¿Desea continuar [s/n]` y el usuario será bloqueado.
- Prefiera la sintaxis `python3 -m pip install ...` en lugar de `pip3 install ...` para instalar paquetes de python porque la segunda causará problemas si `pip3` (o `pip` si está usando python v2) no lo hace no está relacionado con la misma versión que python3: si por ejemplo python3 apunta a la versión 3.7 y pip3 apunta a 3.9 o peor 2.7; No sabe lo que se ha hecho en el sistema y no está a salvo de dicho problema en la máquina del usuario, hay docenas de casos enumerados en la comunidad.

> **Atención**
>
> Es muy importante instalar todos los paquetes necesarios y prestar especial atención a aquellos que muy a menudo ya están instalados... pero no siempre. Hay problemas frecuentes con los paquetes `python3-requests`, `python3-pip` y/o `serial`. Estos no están preinstalados en un Debian básico, pero muy a menudo ya están instalados por otro complemento ... a menos que su complemento sea el primero y, en este caso, su daemon no se iniciará. Sucede más a menudo de lo que crees.

### Conoce el estado

![image](images/dependencies_info.png)

Por lo tanto, es nuestra función php `dependancy_install()` la que será llamada por el núcleo y la que permitirá ejecutar nuestro script `./resources/install_apt.sh` cuando el usuario hace clic en el botón "Reiniciar" o automáticamente por el núcleo cuando detecta que las dependencias no están instaladas o no están actualizadas.

Pero, ¿cómo conoce el núcleo el estado y cómo lo muestra en el cuadro anterior?? Gracias a la función `dependancy_info()` que debemos añadir en nuestra clase eqLogic.

Aquí hay un ejemplo del que puede tomar la mayoría:

```php
    función estática pública dependency_info() {
        $devolver = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::getTmpFolder(__CLASE__) . '/dependency';
        si (archivo_existe(jeedom::getTmpFolder(__CLASE__) . '/dependency')) {
            $return['state'] = 'in_progress';
        } más {
            si (ejecutivo(sistema::getCmdSudo() . system::obtener('cmd_check') . '-Ec "python3\-solicitudes|python3\-voluptuosa|python3\-bs4"') < 3) { // adapta la lista de paquetes y el total
                $return['state'] = 'nok';
            } elseif (ejec(sistema::getCmdSudo() . 'lista pip3 | grep -Ewc "aiohttp"') < 1) { // adapta la lista de paquetes y el total
                $return['state'] = 'nok';
            } más {
                $return['state'] = 'ok';
            }
        }
        devolver $retorno;
    }
```

En este ejemplo probamos la presencia de paquetes apt: `system::getCmdSudo() . system::obtener('cmd_check') . '-Ec "python3\-solicitudes|python3\-voluptuosa|python3\-bs4"'`. Aquí queremos `python3-requests`, `python3-voluptuous` y `python3-bs4` y, por lo tanto, el comando debe devolver 3, de ahí la comparación: `< 3`.

Lo mismo para los paquetes de python: `lista de pip3 | grep -Ewc "aiohttp"'`. Se valida la presencia de `aiohttp`, solo un paquete por lo que comparamos: `< 1`;

Entonces es muy simple: la lista de paquetes y el total son los únicos elementos que debe modificar si solo tiene este tipo de verificación de lo contrario será fácil agregar las otras pruebas relevantes en su caso.
