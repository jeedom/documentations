# Los demonios y las dependencias

## Introducción

En el [tutorial](tutorial_plugin) y la [documentación](plugin_template) Has aprendido a programar tu primer plugin con acciones relativamente sencillas que el usuario activa mediante un comando de acción o mediante una tarea programada por el núcleo (los crons).
El plugin es capaz de recuperar información de forma puntual (por ejemplo, mediante una solicitud HTTP) o de realizar todo tipo de operaciones, siempre que estas puedan programarse en PHP.

Puede que en algún momento necesites algo más que eso; a continuación, te ofrecemos algunos ejemplos, sin pretender que la lista sea exhaustiva:

- utilizar recursos del sistema, como una memoria USB u otros dispositivos (Bluetooth, etc.)
- mantener una conexión con un sistema remoto (en una red local o a través de Internet, pero no con Jeedom)
- mantener los procesos activos en segundo plano, lo que no ocurre con el código PHP, que solo «vive» mientras se ejecuta la solicitud HTTP
- realizar un procesamiento en tiempo real

Para ello, la mayoría de las veces se utiliza un «demonio».
Que no cunda el pánico, en el núcleo de Jeedom ya está todo previsto para ayudarnos a configurar este demonio, y lo vamos a explicar con detalle aquí.

## Estructura de los archivos de un demonio

El código y/o el ejecutable de tu demonio deben encontrarse, evidentemente, en el árbol de directorios de tu plugin y, por lo tanto, deben incluirse y entregarse junto con el archivo comprimido al instalar un plugin.
No hay ninguna regla estricta sobre la ubicación exacta de tu demonio; sin embargo, lo habitual es colocarlo en el subdirectorio `./resources/` del complemento.

En la plantilla del complemento encontrarás los fundamentos para implementar un demonio en Python, y ese es el ejemplo que vamos a utilizar en esta documentación; sin embargo, tienes libertad para desarrollar tu propio demonio en el lenguaje que prefieras, siempre que pueda ejecutarse en los [plataformas compatibles con Jeedom](/compatibility/).
La mayoría de los demonios de los complementos de Jeedom están escritos en Python o Node.js, pero también hay algunos en .NET Core y seguramente en otras tecnologías.

También encontrarás algunos métodos útiles para un demonio en Node.js que quizá se detallen en una próxima versión de esta documentación. Por ahora, te invito a consultar la comunidad de desarrolladores para ponerte al día con el resto de desarrolladores en todo lo relacionado con Node.js, sobre todo en cuanto a la versión que se debe utilizar.

Estructura del directorio de la plantilla:

![imagen](../images/daemon_struct.png)

### el demonio de Python

En la plantilla del complemento, el directorio del demonio se ha denominado `demond`, y el propio demonio se llama `demond.py`.
Estos nombres son arbitrarios, puedes cambiarlos si lo deseas.
La convención consiste en utilizar el ID del complemento seguido de la letra «d». Por ejemplo, para el complemento `blea` el directorio `./resources/blead/` que contiene, entre otros, el archivo `blead.py`, ya que este archivo es el punto de partida del demonio.

> **CONSEJO**
>
> No dudes en inspirarte en los complementos oficiales con demonio para comprender los detalles, como blea, openzwave o sms.

### el paquete Jeedom para un demonio de Python

Jeedom incluye, junto con la plantilla del plugin, un paquete de Python que ofrece las clases y métodos básicos necesarios para gestionar el demonio y la comunicación entre este y el código PHP de tu plugin.
Estas clases se encuentran en el directorio `./resources/demond/jeedom/jeedom.py` (como se puede ver en la captura de pantalla anterior).
Para empezar, no es necesario que conozcas los detalles de la implementación de estas clases y métodos, así que aquí solo encontrarás un resumen de lo que permiten hacer.

#### clase jeedom_utils()

Esta clase es un conjunto de métodos estáticos útiles, tales como `convert_log_level` para convertir el nivel de registro recibido de Jeedom en un nivel de registro de la clase de Python `logging` o `find_tty_usb` para devolver una lista de dispositivos del sistema.
No vamos a detallarlas todas aquí, ya que el nombre de cada uno de los métodos es bastante claro; las descubrirás al profundizar en el código.

#### clase jeedom_serial()

Esta clase encapsula las operaciones de lectura y escritura en un dispositivo.
Una vez más, no vamos a entrar en detalles sobre la clase, ya que los métodos hablan por sí solos; solo tened en cuenta que está ahí si lo necesitáis.

> **Atención**
>
> Si tu demonio no necesita realizar este tipo de acción, debes tener en cuenta que no debes utilizar ni importar esta clase, ya que el paquete de Python `serial` no viene instalado por defecto y, en ese caso, tu demonio no se iniciará (un problema que se ha visto varias veces en la comunidad). Volveremos sobre esto en la gestión de dependencias.

#### clase jeedom_socket() y jeedom_socket_handler()

No vas a utilizar la clase `jeedom_socket_handler()` directamente, solo sirve para `jeedom_socket()`.
El objetivo de `jeedom_socket()` consiste en garantizar una comunicación descendente (desde tu código PHP hacia el demonio).
Cuando tu plugin tenga que enviar una instrucción a tu demonio, podrá hacerlo a través de este socket; más adelante en esta documentación verás un ejemplo.

Así pues, la clase abre un socket TCP y permanece a la escucha. Cuando se recibe un mensaje, este se coloca en una cola que posteriormente leerá tu demonio; ya volveremos sobre esto más adelante.

Una vez más, no es obligatorio utilizar este mecanismo; tienes libertad para crear otra cosa (por ejemplo, un servidor HTTP), pero es lo que ofrece Jeedom de serie, es ligero y funciona muy bien.

#### clase jeedom_com()

Esto garantiza la comunicación ascendente, desde el demonio hacia tu código PHP.
Utilizarás principalmente `send_change_immediate()` al principio, lo que permite enviar una carga útil JSON a Jeedom mediante una solicitud HTTP. Es muy sencillo y eficaz; más adelante veremos un ejemplo.

### Esqueleto del demonio Python

Ahora que ya conocemos el entorno, podemos centrarnos en lo que más nos interesa: el demonio y lo que tendremos que programar.

Vamos a ver con detalle la estructura básica de un demonio tal y como la propone Jeedom. Abre el archivo `demond.py` y vamos a empezar por las últimas líneas, que en realidad son el inicio del programa:

```python
_log_level = "error"
_socket_port = 55009 # à modifier
_socket_host = 'localhost'
_device = 'auto'
_pidfile = '/tmp/demond.pid'
_apikey = ''
_callback = ''

for arg in sys.argv:
    if arg.startswith("--loglevel="):
        temp, _log_level = arg.split("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = arg.split("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = arg.split("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith("--apikey="):
        temp, _apikey = arg.split("=")
    elif arg.startswith("--device="):
        temp, _device = arg.split("=")

_socket_port = int(_socket_port)

jeedom_utils.set_log_level(_log_level)

logging.info('Start demond')
logging.info('Log level : '+str(_log_level))
logging.info('Socket port : '+str(_socket_port))
logging.info('Socket host : '+str(_socket_host))
logging.info('PID file : '+str(_pidfile))
logging.info('Apikey : '+str(_apikey))
logging.info('Device : '+str(_device))

signal.signal(signal.SIGINT, handler)
signal.signal(signal.SIGTERM, handler)

try:
    jeedom_utils.write_pid(str(_pidfile))
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle)
    if not jeedom_com.test():
        logging.error('Network communication issues. Please fixe your Jeedom network configuration.')
        shutdown()
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host)
    listen()
except Exception as e:
    logging.error('Fatal error : '+str(e))
    shutdown()
```

Algunas inicializaciones de variables:

```python
_log_level = "error" # le log level par défaut, au format texte tel qu'il est envoyé par Jeedom
_socket_port = 55009 # le port que votre démon utilisera par défaut pour ouvrir le socket d'écoute de Jeedom, à modifier.
_socket_host = 'localhost' # l'interface sur laquelle ouvrir le socket, à priori ne pas changer.
_device = 'auto' # ne sert à rien si vous n'utilisez pas un device matériel
_pidfile = '/tmp/demond.pid' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;
_apikey = '' # apikey pour authentifier la communication entre Jeedom et votre démon
_callback = '' ## l'url de callback pour envoyer les notifications à Jeedom (et à votre code php)
```

> **Atención**
>
> Hay que tener mucho cuidado al elegir el puerto que vas a utilizar para tu socket, ya que es un aspecto que se podría mejorar en Jeedom, pues no existe ningún mecanismo para evitar colisiones: por lo tanto, si otro complemento utiliza el mismo puerto que tú, esto, evidentemente, supondrá un problema. Por el momento, la única forma de elegir es buscar entre los complementos existentes los puertos que ya están en uso y coordinarse entre los desarrolladores y la comunidad (ya hay hilos abiertos al respecto). Además, es importante dejar que el usuario pueda configurar esto en la configuración de tu complemento, para que el número de puerto se pueda modificar si se produjera un conflicto de este tipo.

A continuación, recuperamos los argumentos recibidos en la línea de comandos; esta línea de comandos la generará tu código PHP, ya volveremos sobre ello.
Tú mismo puedes eliminar lo que no sea necesario (como el argumento «device») o añadir otros, como un nombre de usuario y una contraseña, si tu demonio tiene que conectarse a un sistema remoto.

```python
for arg in sys.argv:
    if arg.startswith("--loglevel="):
        temp, _log_level = arg.split("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = arg.split("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = arg.split("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith("--apikey="):
        temp, _apikey = arg.split("=")
    elif arg.startswith("--device="):
        temp, _device = arg.split("=")
```

A continuación hay unas cuantas líneas de registro y estas dos líneas, típicas de Python, que simplemente registran el método que hay que llamar en caso de que se reciban estas dos señales de interrupción, lo que permitirá detener el demonio:

```python
signal.signal(signal.SIGINT, handler)
signal.signal(signal.SIGTERM, handler)
```

y el método `handler` que se define un poco más arriba en el demonio:

```python
def handler(signum=None, frame=None):
    logging.debug("Signal %i caught, exiting..." % int(signum))
    shutdown()
```

que solo añade un registro y llama al método `shutdown()` definida justo a continuación:

```python
def shutdown():
    logging.debug("Shutdown")
    logging.debug("Removing PID file " + str(_pidfile))
    try:
        os.remove(_pidfile)
    except:
        pass
    try:
        jeedom_socket.close()
    except:
        pass
    try:
        jeedom_serial.close()
    except:
        pass
    logging.debug("Exit 0")
    sys.stdout.flush()
    os._exit(0)
```

En este método debes escribir el código que se ejecutará en caso de que el demonio se cierre, por ejemplo, cerrar la sesión en el sistema remoto y cerrar correctamente las conexiones abiertas.

> **Atención**
>
> Debes adaptar este método y eliminar el código que no sea necesario en tu caso, en particular el bloque «try/except» sobre `jeedom_serial.close()` si no utilizas esta clase.

Volviendo al inicio del demonio, aquí tienes la continuación comentada:

```python
try:
    jeedom_utils.write_pid(str(_pidfile)) # écrit le pidfile que le core de jeedom va surveiller pour déterminer si le démon est démarré
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle) # création de l'objet jeedom_com
    if not jeedom_com.test(): #premier test pour vérifier que l'url de callback est correcte
        logging.error('Network communication issues. Please fixe your Jeedom network configuration.')
        shutdown()
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host) # on déclare le socket pour recevoir les ordres de jeedom
    listen() # et on écoute
except Exception as e:
    logging.error('Fatal error : '+str(e))
    shutdown()
```

El método `listen()` definida al principio del archivo:

```python
def listen():
    jeedom_socket.open()
    try:
        while 1:
            time.sleep(0.5)
            read_socket()
    except KeyboardInterrupt:
        shutdown()
```

Aquí no hay que modificar nada; se puede ver que el socket está abierto y, a continuación, hay un bucle infinito para leer el socket cada medio segundo.

El método `read_socket()`

```python
def read_socket():
    global JEEDOM_SOCKET_MESSAGE
    if not JEEDOM_SOCKET_MESSAGE.empty():
        logging.debug("Message received in socket JEEDOM_SOCKET_MESSAGE")
        message = json.loads(jeedom_utils.stripped(JEEDOM_SOCKET_MESSAGE.get()))
        if message['apikey'] != _apikey:
            logging.error("Invalid apikey from socket : " + str(message))
            return
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to demon error : '+str(e))
```

La variable `JEEDOM_SOCKET_MESSAGE` es una `queue()` Python basado en la clase `jeedom_socket()` como se ha visto anteriormente.

Si la cola no está vacía, se carga el JSON y se comprueba que la clave API recibida con el mensaje coincida con la recibida al iniciar el demonio (`_apikey`) A continuación, podemos leer el mensaje y realizar nuestras acciones en el bloque try/except:

```python
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to demon error : '+str(e))
```

Así que, en lugar del `print 'read'` Te corresponde a ti leer los elementos relevantes del mensaje que habrá enviado tu plugin y activar las acciones o llamar a las clases o métodos propios de tu plugin.

A partir de aquí tienes un demonio que se puede ejecutar aunque todavía no haga nada (eso ya es cosa tuya).

## Adaptación del código PHP del plugin

Tener un demonio y comprender su estructura está muy bien, pero faltan algunos elementos clave para que tu plugin (código PHP) pueda controlar ese demonio y para que el núcleo también sepa que existe.

### plugin_info/info.json

En el archivo info.json de tu plugin, hay que añadir la propiedad `hasOwnDeamon` y asignar el valor `true`, ejemplo:

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

Más adelante veremos cómo se utiliza `hasDependency` y `maxDependancyInstallTime`.

### Gestión del demonio en tu clase eqLogic

En la clase eqLogic de tu plugin hay algunos métodos que debes implementar para gestionar correctamente el demonio.

#### Función daemon_info()

La función `deamon_info()` El núcleo la llamará al mostrar el siguiente cuadro en la página de configuración de tu plugin, por lo que es obligatorio que exista:

![imagen](../images/daemon_info.png)

Normalmente tendrá este aspecto; el array devuelto y las claves utilizadas en dicho array son, evidentemente, importantes.
Puedes copiar y pegar el código que aparece a continuación tal cual y adaptarlo al final de la función para comprobar la configuración necesaria para tu plugin.

```php
    public static function deamon_info() {
        $return = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::getTmpFolder(__CLASS__) . '/deamon.pid';
        if (file_exists($pid_file)) {
            if (@posix_getsid(trim(file_get_contents($pid_file)))) {
                $return['state'] = 'ok';
            } else {
                shell_exec(system::getCmdSudo() . 'rm -rf ' . $pid_file . ' 2>&1 > /dev/null');
            }
        }
        $return['launchable'] = 'ok';
        $user = config::byKey('user', __CLASS__); // exemple si votre démon à besoin de la config user,
        $pswd = config::byKey('password', __CLASS__); // password,
        $clientId = config::byKey('clientId', __CLASS__); // et clientId
        if ($user == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le nom d\'utilisateur n\'est pas configuré', __FILE__);
        } elseif ($pswd == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le mot de passe n\'est pas configuré', __FILE__);
        } elseif ($clientId == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('La clé d\'application n\'est pas configurée', __FILE__);
        }
        return $return;
    }
```

> **Atención**
>
> No hay ningún error tipográfico en el ejemplo, el método se llama efectivamente `deamon_info()` y no `daemon_info`, el error está en el núcleo.

La clave `state` corresponde, evidentemente, al estado que se muestra en pantalla; como se puede ver más arriba, se comprueba la presencia de nuestro «pid_file» para saber si el demonio está en marcha o no.

La clave `launchable` corresponde a la columna «Configuración» del cuadro, por lo que se puede comprobar si la configuración está completa y es correcta para poder iniciar el demonio. `launchable_message` permite mostrar un mensaje al usuario en caso de «NOK»

#### Función daemon_start()

La función `deamon_start()` es, como su nombre indica, el método que utilizará el núcleo para iniciar tu demonio.
Puedes copiar y pegar el código que aparece a continuación tal cual y modificar las líneas indicadas.

```php
    public static function deamon_start() {
        self::deamon_stop();
        $deamon_info = self::deamon_info();
        if ($deamon_info['launchable'] != 'ok') {
            throw new Exception(__('Veuillez vérifier la configuration', __FILE__));
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = system::getCmdPython3(__CLASS__) . " {$path}/demond.py"; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'http:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --pid ' . jeedom::getTmpFolder(__CLASS__) . '/deamon.pid'; // et on précise le chemin vers le pid file (ne pas modifier)
        log::add(__CLASS__, 'info', 'Lancement démon');
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du log pour votre démon, vous devez nommer votre log en commençant par le pluginid pour que le fichier apparaisse dans la page de config
        $i = 0;
        while ($i < 20) {
            $deamon_info = self::deamon_info();
            if ($deamon_info['state'] == 'ok') {
                break;
            }
            sleep(1);
            $i++;
        }
        if ($i >= 30) {
            log::add(__CLASS__, 'error', __('Impossible de lancer le démon, vérifiez le log', __FILE__), 'unableStartDeamon');
            return false;
        }
        message::removeAll(__CLASS__, 'unableStartDeamon');
        return true;
    }
```

Modifica solo las líneas que tengan un comentario; el resto debe permanecer sin cambios.

Ten en cuenta que primero hay que detener el demonio, para poder gestionar el reinicio.
A continuación, se comprueba si el demonio se puede iniciar efectivamente con el método `deamon_info()` y generamos la línea de comando en la variable `$cmd` para iniciar nuestro demonio, en este caso con Python 3. Fíjate en el uso de la función `system::getCmdPython3(__CLASS__)` que devolverá la ruta a Python 3 que debes utilizar para que sea compatible con Debian 12 si tus dependencias las instala el núcleo.

#### Función daemon_stop()

Este método se utilizará para detener el demonio: se recupera el PID del demonio, que se ha escrito en el «pid_file», y se envía la orden «kill» al proceso.

```php
    public static function deamon_stop() {
        $pid_file = jeedom::getTmpFolder(__CLASS__) . '/deamon.pid'; // ne pas modifier
        if (file_exists($pid_file)) {
            $pid = intval(trim(file_get_contents($pid_file)));
            system::kill($pid);
        }
        system::kill('templated.py'); // nom du démon à modifier
        sleep(1);
    }
```

Llegados a este punto, ya has declarado el demonio en el archivo info.json y has implementado los tres métodos necesarios para que el núcleo de Jeedom pueda iniciar y detener tu demonio, así como mostrar su estado. Ya se cumplen los requisitos previos.

### Comunicación entre el demonio y el código PHP

Ahora queda gestionar la comunicación desde y hacia el demonio. En el código de Python ya hemos visto cómo se gestiona: a modo de recordatorio, el método `listen()` y `read_socket()` que escucha en un socket y el método `send_change_immediate()` para enviar una carga útil JSON al código PHP.

Por lo tanto, hay que gestionar el equivalente en PHP.

#### Enviar un mensaje al demonio

Esta función no existe en el núcleo y no es estándar en todos los complementos de Jeedom; tampoco es obligatoria.
Esta es la función que yo (@Mips) utilizo en todos mis complementos que tienen un demonio; os la pongo aquí y podéis hacer con ella lo que queráis ;-)

Por lo tanto, recibe como parámetro una matriz de valores y se encarga de enviarla al socket del demonio, que podrá leer dicha matriz en el método `read_socket()` que hemos visto anteriormente.

```php
    public static function sendToDaemon($params) {
        $deamon_info = self::deamon_info();
        if ($deamon_info['state'] != 'ok') {
            throw new Exception("Le démon n'est pas démarré");
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        socket_connect($socket, '127.0.0.1', config::byKey('socketport', __CLASS__, '55009')); //port par défaut de votre plugin à modifier
        socket_write($socket, $payLoad, strlen($payLoad));
        socket_close($socket);
    }
```

Lo que aparece en la tabla `$params` Y cómo utilices esos datos en tu demonio es cosa tuya, depende de lo que haga tu complemento.

A modo de recordatorio, esta tabla se recuperará en el método `read_socket()`; fragmento del código Python:

```python
        if message['apikey'] != _apikey:
            logging.error("Invalid apikey from socket : " + str(message))
            return
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to demon error : '+str(e))
```

Se puede ver claramente la clave «apikey» añadida por el código PHP, que será leída por el código Python en la matriz «message».

#### Recibir un mensaje del demonio

Para ello, hay que añadir un archivo a nuestro plugin en la carpeta `./core/php/`. Por convención, vamos a llamar a este archivo `jee[pluginId].php`. `/plugins/[pluginId]/core/php/jee[pluginId].php` será, por tanto, la ruta que se debe utilizar como URL de callback en el método `deamon_start()`

Este es el contenido básico que puedes copiar y pegar en este archivo:

```php
<?php

try {
    require_once dirname(__FILE__) . "/../../../../core/php/core.inc.php";

    if (!jeedom::apiAccess(init('apikey'), 'template')) { //remplacez template par l'id de votre plugin
        echo __('Vous n\'êtes pas autorisé à effectuer cette action', __FILE__);
        die();
    }
    if (init('test') != '') {
        echo 'OK';
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
    if (!is_array($result)) {
        die();
    }

    if (isset($result['key1'])) {
        // do something
    } elseif (isset($result['key2'])) {
        // do something else
    } else {
        log::add('template', 'error', 'unknown message received from daemon'); //remplacez template par l'id de votre plugin
    }
} catch (Exception $e) {
    log::add('template', 'error', displayException($e)); //remplacez template par l'id de votre plugin
}
```

El código comienza por comprobar que la clave API es correcta:

```php
    if (!jeedom::apiAccess(init('apikey'), 'template')) { //remplacez template par l'id de votre plugin
        echo __('Vous n\'êtes pas autorisé à effectuer cette action', __FILE__);
        die();
    }
```

La primera prueba sirve como método de prueba al iniciar el demonio (véase la llamada `jeedom_com.test()` en el código del demonio):

```php
    if (init('test') != '') {
        echo 'OK';
        die();
    }
```

y, por último, cargamos la carga útil que descodificamos en la matriz `$result`:

```php
    $result = json_decode(file_get_contents("php://input"), true);
    if (!is_array($result)) {
        die();
    }
```

A continuación, te toca a ti leer la tabla y realizar las acciones correspondientes en tu plugin, por ejemplo:

```php
    if (isset($result['key1'])) {
        // do something
    } elseif (isset($result['key2'])) {
        // do something else
    } else {
        log::add('template', 'error', 'unknown message received from daemon'); //remplacez template par l'id de votre plugin
    }
```

El código en Python para enviar el mensaje tendrá este aspecto:

```python
jeedom_com.send_change_immediate({'key1' : 'value1', 'key2' : 'value2' })
```

Ya está, tienes un demonio totalmente operativo y puedes comunicarte en ambos sentidos entre tu demonio y tu código PHP. Ahora viene lo más difícil: programar la lógica del demonio.

## Las dependencias

Cuando vamos a escribir un demonio, muy a menudo necesitaremos bibliotecas externas además de nuestras propias clases.

En Debian, lo habitual es utilizar la herramienta apt para instalar los paquetes necesarios y, para Python 3, utilizaremos pip3.

Y para gestionarlo, una vez más, todo está previsto en el núcleo de Jeedom para ayudarnos mediante dos métodos distintos:

1. El método por procedimientos.
Este método era el único posible con las versiones de Jeedom anteriores a la 4.2
1. El método mediante un archivo JSON de configuración.
Este método apareció con la versión 4.2 del núcleo de Jeedom.

Ambos métodos pueden implementarse en un mismo complemento.

- Si ambos métodos se implementan en un complemento:
  - Las versiones anteriores a la 4.2 utilizarán el método basado en procedimientos.
  - Las versiones 4.2 y posteriores utilizarán el método basado en un archivo de configuración JSON.
- Si en un complemento solo se ha implementado el método por procedimientos:
  - Todos los núcleos utilizarán este método.
- Por el momento, solo se ha implementado el método mediante un archivo de configuración JSON en un complemento.
  - El plugin no será compatible con versiones del núcleo anteriores a la 4.2

Ambos métodos tienen sus ventajas y sus inconvenientes. Tú decides cuál te conviene más según tu situación.

### Declaración en plugin_info/info.json

En ambos casos, debes adaptar tu archivo `info.json`.
Al igual que en el ejemplo de la declaración del demonio, hay que añadir la propiedad `hasDependency` y asignar el valor `true`:

```json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 30,
    ...
}
```

La vivienda `maxDependancyInstallTime` es el tiempo, en minutos, tras el cual el núcleo considerará que la instalación no se ha completado.
En ese caso, se desactivará el modo automático del demonio y se publicará un mensaje en el centro de notificaciones.
Si esta propiedad no se define, el tiempo de espera por defecto será de 30 minutos.

> **CONSEJO**
>
> El script de instalación no se interrumpirá, por lo que es posible que acabe completándose con éxito. Se trata únicamente del tiempo tras el cual el núcleo deja de esperar y ya no muestra el progreso.

### El método mediante un archivo de configuración JSON

#### Creación del archivo plugin_info/packages.json

La sintaxis de este archivo se describe aquí. Véase también
[el artículo de presentación del blog](https://blog.jeedom.com/6170-introduction-jeedom-4-2-installation-de-dependance/).

Este archivo puede contener alguna de las siguientes secciones:

##### pre-install: la ruta a un script que se debe ejecutar antes de la instalación

Ejemplo:

```json
{
  "pre-install" : {
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }
```

##### posinstalación

Puede ser la ruta a un script que se ejecutará tras la instalación, o bien la acción de reiniciar Apache.
Ejemplo:

```json
{
  "post-install" : {
    "restart_apache" : true,
    "script" : "plugins/[pluginID]/resources/post-install.sh"
  }
```

##### apt: dependencias de Debian

Ejemplo

```json
{
  "apt" : {
    "libav-tools" : {"alternative" : ["ffmpeg"]},
    "ffmpeg" : {"alternative" : ["libav-tools"]},
    "python-pil" : {},
    "php-gd" : {}
  }
}
```

Para cada paquete, se puede especificar `version` para fijar una versión, `alternative` si está disponible,
`optional` si es opcional, `reinstall` para forzar la reinstalación del paquete, `remark` para añadir un comentario libre.

##### pip3: dependencias de Python 3

Ejemplo:

```json
{
  "apt" : {
    "python3-pyudev" : {},
    "python3-requests" : {},
    "python3-dev" : {}
  },
  "pip3" : {
    "wheel" : {},
    "pyserial" : {},
    "tornado" : {},
    "zigpy" : {"reinstall" : true},
    "zha-quirks" : {"reinstall" : true},
    "zigpy-znp" : {"reinstall" : true},
    "zigpy-xbee" : {"reinstall" : true},
    "zigpy-deconz" : {"reinstall" : true},
    "zigpy-zigate" : {"reinstall" : true},
    "zigpy-cc" : {"reinstall" : true},
    "bellows" : {"reinstall" : true}
  }
}
```

> *Sugerencia*
>
> A partir de la versión 4.4.9 de Jeedom, el núcleo puede gestionar la instalación de las dependencias de Python 3 en Debian 12. Las dependencias se instalarán en un *venv* (entorno virtual).
> Debes adaptar tu plugin en consecuencia y dejar de codificar de forma estática la ruta hacia `python3` pero utilizar `system::getCmdPython3(__CLASS__)` en su lugar.
> Ejemplo: `$cmd = system::getCmdPython3(__CLASS__) . " {$path}/demond.py";`

##### npm: las dependencias para NodeJS

En NodeJS, las dependencias se encuentran en otro archivo `packages.json` en un formato propio,
ubicado en el directorio `/resources` Por ejemplo, este es el archivo que se indicará en el de Jeedom:

```json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    "plugins/dyson/resources/dysond"  : {}
  }
}
```

##### composer: para instalar otra dependencia de PHP

No tengo ningún ejemplo a mano; la sintaxis es similar a la de otros paquetes, con la palabra clave `composer`.

##### Dependencias de otro complemento

Si un plugin requiere la instalación de otro plugin, también es posible hacerlo con la siguiente sintaxis:
El complemento tiene que ser gratuito o ya estar comprado:

```json
{
    "plugin":{
        "mqtt2": {}
    }
}
```

### El método por procedimientos

Hay dos requisitos previos que vamos a detallar a continuación.

#### Instalación de los edificios anexos

En tu clase eqLogic debes añadir esta función si aún no existe. Puedes copiarla y pegarla tal cual, sin modificar nada.

```php
    public static function dependancy_install() {
        log::remove(__CLASS__ . '_update');
        return array('script' => dirname(__FILE__) . '/../../resources/install_#stype#.sh ' . jeedom::getTmpFolder(__CLASS__) . '/dependance', 'log' => log::getPathToLog(__CLASS__ . '_update'));
    }
```

Esta función comienza eliminando el registro de la instalación anterior, si existiera, y a continuación envía al núcleo el comando de script que se debe ejecutar y la ubicación del registro.

Ten en cuenta que el archivo de script devuelto se llama `install_#stype#.sh`. De hecho, `#stype#` será sustituido dinámicamente por el núcleo mediante la herramienta de gestión de paquetes que se utilice en función del sistema en el que esté instalado Jeedom. Por lo tanto, `#stype#` será sustituido por `apt` en un sistema Debian.
Esto permite ofrecer scripts de instalación de dependencias para varios sistemas y, por lo tanto, dar soporte a otras opciones además de Debian/apt, que es lo mínimo imprescindible y lo único que vamos a gestionar aquí.

El primer argumento: `jeedom::getTmpFolder(__CLASS__) . '/dependance'` es el archivo que sirve para realizar un seguimiento del avance de la instalación (el porcentaje que aparece en pantalla durante la instalación).

Esto es todo en cuanto a la parte de PHP; ahora hay que crear el script en `./resources/install_apt.sh` y, por supuesto, el contenido del script dependerá de tu plugin y de los paquetes que quieras instalar.

Aquí tienes un ejemplo de script bastante sencillo extraído de uno de mis complementos, pero puedes crear otros mucho más completos y avanzados:

> **Atención**
>
> A partir de Debian 12, es obligatorio instalar los paquetes de Python en un entorno virtual, por lo que este script de ejemplo ya no funcionará tal cual; tendrás que adaptarlo en consecuencia.
>
> También os invito a consultar esta documentación, que ofrece una alternativa: <https://github.com/Mips2648/dependance.lib/blob/master/pyenv.md>

```bash
PROGRESS_FILE=/tmp/jeedom/template/dependance #remplacez template par l'ID de votre plugin

if [ ! -z $1 ]; then
    PROGRESS_FILE=$1
fi
touch ${PROGRESS_FILE}
echo 0 > ${PROGRESS_FILE}
echo "*************************************"
echo "*   Launch install of dependencies  *"
echo "*************************************"
echo $(date)
echo 5 > ${PROGRESS_FILE}
apt-get clean
echo 10 > ${PROGRESS_FILE}
apt-get update
echo 20 > ${PROGRESS_FILE}

echo "*****************************"
echo "Install modules using apt-get"
echo "*****************************"
apt-get install -y python3 python3-requests python3-pip python3-voluptuous python3-bs4
echo 60 > ${PROGRESS_FILE}

echo "*************************************"
echo "Install the required python libraries"
echo "*************************************"
python3 -m pip install "aiohttp"
echo 80 > ${PROGRESS_FILE}

echo 100 > ${PROGRESS_FILE}
echo $(date)
echo "***************************"
echo "*      Install ended      *"
echo "***************************"
rm ${PROGRESS_FILE}
```

Vamos a explicarlo con más detalle:

Empezamos por definir la ubicación predeterminada del archivo de progreso, por si acaso no hubiéramos realizado correctamente el paso anterior...
Y utilizamos el primer argumento recibido como ubicación porque hemos seguido correctamente el paso anterior ;-).

```bash
PROGRESS_FILE=/tmp/jeedom/template/dependance #remplacez template par l'ID de votre plugin

if [ ! -z $1 ]; then
    PROGRESS_FILE=$1
fi
```

Las líneas del tipo `echo 60 > ${PROGRESS_FILE}` sirven, evidentemente, para invertir la progresión: para tranquilizar al usuario, se van añadiendo regularmente hasta llegar a 100 (normalmente se estresan cuando supera los 100, así que se evita).

Algunos consejos:

- No hagas `apt-get upgrade`! No sabes qué hay instalado en el ordenador y no te corresponde a ti actualizarlo todo.
- No utilices `apt` pero `apt-get`. `apt` está pensada para un uso interactivo y esto generará una advertencia.
- Añade el indicador `-y` cuando sea necesario para confirmar las indicaciones; de lo contrario, el script se detendrá con un mensaje del tipo `Do you want to continue [y/n]` y el usuario quedará bloqueado.
- Utiliza la sintaxis `python3 -m pip install ...` en lugar de `pip3 install ...` para instalar los paquetes de Python, ya que el segundo causará problemas si `pip3` (o `pip` si utilizas Python v2) no está vinculado a la misma versión que Python 3: si, por ejemplo, Python 3 apunta a la versión 3.7 y pip3 apunta a la 3.9 o, peor aún, a la 2.7; No sabes qué cambios se han realizado en el sistema y no estás a salvo de este tipo de problemas en el equipo del usuario; hay decenas de casos registrados en la comunidad.

> **Atención**
>
> Es muy importante instalar todos los paquetes necesarios y prestar especial atención a aquellos que, aunque suelen estar ya instalados, no siempre lo están. A menudo surgen problemas con los paquetes `python3-requests`, `python3-pip` y/o `serial`. Estos no vienen preinstalados en una instalación básica de Debian, pero muy a menudo ya están instalados por otro complemento... salvo que tu complemento sea el primero, en cuyo caso tu demonio no se iniciará. Esto ocurre con más frecuencia de lo que cabría imaginar.

#### Consultar el estado

![imagen](../images/dependencies_info.png)

Esta es, pues, nuestra función PHP `dependancy_install()` que será llamada por el núcleo y que permitirá ejecutar nuestro script `./resources/install_apt.sh` cuando el usuario haga clic en el botón «Reiniciar» o automáticamente por parte del núcleo cuando detecte que las dependencias no están instaladas o no están actualizadas.

Pero, ¿cómo sabe el núcleo cuál es el estado y cómo lo muestra en el recuadro de arriba? Gracias a la función `dependancy_info()` que debemos añadir a nuestra clase eqLogic.

Aquí tienes un ejemplo del que puedes tomar como referencia la mayor parte:

```php
    public static function dependancy_info() {
        $return = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::getTmpFolder(__CLASS__) . '/dependance';
        if (file_exists(jeedom::getTmpFolder(__CLASS__) . '/dependance')) {
            $return['state'] = 'in_progress';
        } else {
            if (exec(system::getCmdSudo() . system::get('cmd_check') . '-Ec "python3\-requests|python3\-voluptuous|python3\-bs4"') < 3) { // adaptez la liste des paquets et le total
                $return['state'] = 'nok';
            } elseif (exec(system::getCmdSudo() . 'pip3 list | grep -Ewc "aiohttp"') < 1) { // adaptez la liste des paquets et le total
                $return['state'] = 'nok';
            } else {
                $return['state'] = 'ok';
            }
        }
        return $return;
    }
```

En este ejemplo se comprueba la presencia de paquetes apt: `system::getCmdSudo() . system::get('cmd_check') . '-Ec "python3\-requests|python3\-voluptuous|python3\-bs4"'`. Aquí queremos `python3-requests`, `python3-voluptuous` y `python3-bs4` y, por lo tanto, la orden debe devolver 3, de ahí la comparación: `< 3`.

Lo mismo ocurre con los paquetes de Python: `pip3 list | grep -Ewc "aiohttp"'`. La presencia de `aiohttp` está validado, es un único paquete, así que comparamos: `< 1`;

> **Atención**
>
> A partir de Debian 12, es obligatorio instalar los paquetes de Python en un entorno virtual, por lo que este comando ya no funcionará tal cual; tendrás que adaptarlo en consecuencia.

Así pues, es muy sencillo: la lista de paquetes y el total son los únicos elementos que debes modificar si solo realizas este tipo de comprobación; de lo contrario, te resultará fácil añadir las demás pruebas pertinentes en tu caso.
