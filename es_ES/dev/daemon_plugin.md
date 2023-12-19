# Demonios y dependencias

## Introduction

En el [tutorial](/es_ES/dev/tutorial_plugin) y la [documentación](/es_ES/dev/plugin_template) aprendió a codificar su primer complemento con acciones relativamente simples activadas por el usuario a través de un comando de acción o por una tarea programada por el núcleo (los crons).
Luego, el complemento puede obtener información ocasionalmente (por ejemplo, a través de una solicitud http) o realizar todo tipo de operaciones siempre que se pueda codificar en PHP.

Ocurrirá que necesitas más que eso, unos ejemplos sin ser exhaustivos:

- utilizar los recursos del sistema, por ejemplo, una llave USB u otro hardware (bluetooth...)
- mantener una conexión con un sistema remoto (en una red local o en Internet, pero no jeedom)
- mantener los procesos activos en segundo plano, que no es el caso con el código PHP que solo "vive" durante la ejecución de la solicitud http
- hacer procesamiento en tiempo real

Para esto, la mayoría de las veces usamos un "demonio".
Que no cunda el pánico, todo ya está planeado en el núcleo de jeedom para ayudarnos a poner este demonio en su lugar y lo detallaremos aquí.

## Estructura de archivos de un demonio

El código y / o el ejecutable de su demonio obviamente debe estar en la estructura de árbol de su complemento y, por lo tanto, debe incluirse y entregarse con el archivo al instalar un complemento.
No existe una regla estricta sobre la ubicación exacta de su demonio, sin embargo, la convención es colocarlo en el subdirectorio `./ resources / `del complemento.

En la plantilla del complemento, encontrará los conceptos básicos para implementar un demonio en Python y este es el ejemplo que usaremos en esta documentación, sin embargo, puede desarrollar su demonio en el idioma de su elección siempre que se pueda ejecutar en [plataformas soportadas por Jeedom](/es_ES/compatibility/).
La mayoría de los demonios de complementos de Jeedom están en python o nodeJs, pero también hay algunos en .netCore y ciertamente otras tecnologías.

También encontrará algunos métodos útiles para un demonio de nodeJs que pueden detallarse en una versión futura de esta documentación. Por ahora te invito a consultar al desarrollador de la comunidad para alinearte con los demás desarrolladores en todo lo relacionado con NodeJs, principalmente en la versión a usar.

Estructura del directorio de plantillas:

![image](images/daemon_struct.png)

### el demonio pitón

En el complemento de plantilla, el directorio del demonio se ha denominado `demond`, y el demonio en sí se llama` demond.py`.
Estos nombres son arbitrarios, puede cambiarlos.
La convención es tomar el ID del complemento seguido de la letra ´d´. Esto da, por ejemplo, para el complemento `blea` el directorio`./ resources / blead / `que contiene, entre otras cosas, el archivo` blead.py`, siendo este archivo el punto de partida del demonio.

> **INCLINAR**
>
> No dude en inspirarse en los complementos oficiales con daemon para comprender los detalles, como blea, openzwave o sms.

### el paquete jeedom para un demonio de Python

Jeedom proporciona con la plantilla de complemento un paquete de Python que ofrece las clases y métodos básicos útiles para la gestión del demonio y la comunicación entre el demonio y el código php de su complemento.
Estas clases se pueden encontrar en el `./resources/demond/jeedom/jeedom/directory.py` (visible en la captura de pantalla de arriba).
Para comenzar, no necesita conocer los detalles de implementación de estas clases y métodos, por lo que aquí solo tendrá un resumen de lo que permiten.

#### clase jeedom_utils()

Esta clase es un conjunto de métodos estáticos útiles como `convert_log_level` para convertir el nivel de registro recibido de jeedom en un nivel de registro de la clase de python` logging` o` find_tty_usb` para devolver una lista de dispositivos en el sistema.
No los detallaremos todos aquí, el nombre de cada uno de los métodos es bastante explícito, los descubrirás sumergiéndote en el código.

#### clase jeedom_serial()

Esta clase encapsula la lectura y escritura en un dispositivo.
Nuevamente no detallaremos la clase, los métodos hablan por sí mismos, solo sepa que existe si lo necesita.

> **Atención**
>
> Si su demonio no necesita realizar este tipo de acción, tendrá que recordar no usar o importar esta clase porque el paquete de Python `serial` no está instalado por defecto y en este caso su demonio no se iniciará (problema visto varios tiempos en la comunidad). Volveremos a esto en la gestión de dependencias.

#### clase jeedom_socket () y jeedom_socket_handler()

No usarás la clase `jeedom_socket_handler ()` directamente, es solo para `jeedom_socket ()`.
El propósito de `jeedom_socket ()` es asegurar la comunicación descendente (desde su código php al demonio).
Cuando su complemento tenga que enviar una instrucción a su demonio, podrá hacerlo a través de este socket, verá un ejemplo más adelante en esta documentación.

Entonces la clase abre un socket tcp y escucha. Cuando se recibe un mensaje, se coloca en una cola que será leído más tarde por su demonio, volveremos a él.

Nuevamente, no tienes que usar este mecanismo, eres libre de crear algo más (servidor http por ejemplo) pero esto es lo que proporciona Jeedom como base, es liviano y funciona muy bien.

#### clase jeedom_com()

Esto asegura la comunicación ascendente, desde el demonio hasta su código php.
Utilizará principalmente `send_change_immediate ()` al principio, lo que, por lo tanto, permite enviar una carga útil json a jeedom a través de una solicitud http. Es muy simple y efectivo, veremos un ejemplo más adelante.

### Esqueleto de demonio pitón

Ahora que conocemos el entorno, podemos fijarnos en la parte que más nos interesa: el demonio y lo que tendremos que codificar.

Por lo tanto, veremos en detalle el esqueleto de un demonio propuesto por Jeedom, abra el archivo `demond.py` y comenzaremos con las últimas líneas que de hecho son el inicio del programa:

`` ``python
_log_level = "error"
_socket_port = 55009 # para modificar
_socket_host = 'localhost'
_device = 'auto'
_pidfile = '/tmp/demond.pid'
_Clave API = ''
_llamar de vuelta = ''

para arg en sys.argv:
    if arg.startswith ("- loglevel="):
        temp, _log_level = arg.split("=")
    elif arg.startswith ("- socketport="):
        temp, _socket_port = arg.split("=")
    elif arg.startswith ("- sockethost="):
        temp, _socket_host = arg.split("=")
    elif arg.startswith ("- pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith ("- apikey="):
        temp, _apikey = arg.split("=")
    elif arg.startswith ("- dispositivo="):
        temp, _device = arg.split("=")

_socket_port = int (_socket_port)

jeedom_utils.set_log_level (_log_level)

logging.info ('Iniciar demond')
logging.info ('Nivel de registro : '+ str (_log_level))
logging.info ('Puerto de socket : '+ str (_socket_port))
logging.info ('Socket host : '+ str (_socket_host))
logging.info ('archivo PID : '+ str (_pidfile))
logging.info ('Apikey : '+ str (_apikey))
logging.info ('Dispositivo : '+ str (_dispositivo))

señal.señal (señal.SIGINT, manejador)
señal.señal (señal.SIGTERM, manejador)

try:
    jeedom_utils.write_pid (str (_pidfile))
    jeedom_com = jeedom_com (apikey = _apikey, url = _callback, ciclo = _ciclo)
    si no es jeedom_com.test():
        logging.error ('Problemas de comunicación de red. Corrija la configuración de su red Jeedom.')
        shutdown()
    jeedom_socket = jeedom_socket (puerto = _socket_port, dirección = _socket_host)
    listen()
excepto la excepción como e:
    logging.error ('Error fatal : '+ str (e))
    shutdown()
`` ``

Algunas inicializaciones de variables:

`` ``python
_log_level = "error" # el nivel de registro predeterminado, en formato de texto enviado por Jeedom
_socket_port = 55009 # el puerto que su demonio usará por defecto para abrir el socket de escucha Jeedom, para ser modificado.
_socket_host = 'localhost' # la interfaz en la que abrir el socket, a priori no cambia.
_device = 'auto' # es inútil si no está utilizando un dispositivo de hardware
_pidfile = '/tmp/demond.pid' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;
_apikey = '' # apikey para autenticar la comunicación entre Jeedom y tu demonio
_llamar de vuelta = '' ## la URL de devolución de llamada para enviar notificaciones a Jeedom (y su código php)
`` ``

> **Atención**
>
> Tienes que tener cuidado a la hora de elegir el puerto que vas a utilizar para tu socket, este es un posible punto de mejora bajo jeedom, ya que no existe ningún mecanismo para evitar colisiones: Entonces, si otro complemento usa el mismo puerto que usted, obviamente será un problema. Por el momento, el único método para hacer su elección es buscar entre los complementos existentes para los puertos ya utilizados y alinear entre desarrolladores en la comunidad (ya hay temas abiertos sobre este tema)). Además es importante dejar esto configurable por el usuario en la configuración de su plugin para que el número de puerto pueda ser modificado en caso de producirse tal conflicto.

Luego obtenemos los argumentos recibidos de la línea de comando, esta línea de comando será generada por su código php, volveremos a ella.
Depende de usted eliminar lo que no es útil (como el argumento del dispositivo) o agregar otros como un usuario / pswd si su demonio debe conectarse a un sistema remoto.

`` ``python
para arg en sys.argv:
    if arg.startswith ("- loglevel="):
        temp, _log_level = arg.split("=")
    elif arg.startswith ("- socketport="):
        temp, _socket_port = arg.split("=")
    elif arg.startswith ("- sockethost="):
        temp, _socket_host = arg.split("=")
    elif arg.startswith ("- pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith ("- apikey="):
        temp, _apikey = arg.split("=")
    elif arg.startswith ("- dispositivo="):
        temp, _device = arg.split("=")
`` ``

Luego hay algunas líneas de registro y estas dos líneas, clásicas en python, que simplemente registran el método a llamar en caso de que se reciban estas dos señales de interrupción, lo que detendrá el demonio:

`` ``python
señal.señal (señal.SIGINT, manejador)
señal.señal (señal.SIGTERM, manejador)
`` ``

y el método "handler" que se define un poco más arriba en el demonio:

`` ``python
def handler (signum = None, frame = None):
    logging.debug ("Señal% i atrapado, saliendo ..."% int (signum))
    shutdown()
`` ``

que solo agrega un registro y llama al método `shutdown ()` definido justo debajo:

`` ``python
def shutdown():
    logging.debug ("Apagar")
    logging.debug ("Eliminando archivo PID" + str (_pidfile))
    try:
        os.remove (_pidfile)
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
    logging.debug ("Salida 0")
    sys.stdout.flush()
    os._exit (0)
`` ``

Es en este método que debe escribir el código que se ejecutará en caso de cierre del demonio, por ejemplo, cerrar la sesión del sistema remoto y cerrar limpiamente las conexiones abiertas.

> **Atención**
>
> debe adaptar este método y eliminar el código que no es necesario en su caso, en particular el try / except en `jeedom_serial.close () `si no usas esta clase.

Si volvemos a iniciar el demonio, aquí está la continuación comentada:

`` ``python
try:
    jeedom_utils.write_pid (str (_pidfile)) # escribe el archivo pid que el núcleo jeedom supervisará para determinar si el demonio se inicia
    jeedom_com = jeedom_com (apikey = _apikey, url = _callback, cycle = _cycle) # creación del objeto jeedom_com
    si no es jeedom_com.test(): #primera prueba para verificar que la URL de devolución de llamada sea correcta
        logging.error ('Problemas de comunicación de red. Corrija la configuración de su red Jeedom.')
        shutdown()
    jeedom_socket = jeedom_socket (puerto = _socket_port, address = _socket_host) # declaramos el socket para recibir pedidos de jeedom
    escucha () # y escuchamos
excepto la excepción como e:
    logging.error ('Error fatal : '+ str (e))
    shutdown()
`` ``

El método `listen ()` definido al principio del archivo:

`` ``python
Definitivamente escucha():
    jeedom_socket.open()
    try:
        mientras que 1:
            tiempo. de sueño (0.5)
            read_socket()
    excepto KeyboardInterrupt:
        shutdown()
`` ``

Nada que modificar aquí, podemos ver que el socket está abierto y luego un bucle infinito para leer el socket cada medio segundo

El método `read_socket ()`

`` ``python
def read_socket():
    JEEDOM_SOCKET_MESSAGE global
    si no es JEEDOM_SOCKET_MESSAGE.empty():
        logging.debug ("Mensaje recibido en el zócalo JEEDOM_SOCKET_MESSAGE")
        mensaje = json.loads (jeedom_utils.stripped (JEEDOM_SOCKET_MESSAGE.get()))
        si el mensaje ['apikey'] != _apikey:
            logging.error ("Apikey no válido del socket : " + str (mensaje))
            return
        try:
            imprimir leer'
        excepto Excepción, e:
            logging.error ('Enviar comando al error demonio : '+ str (e))
`` ``

La variable `JEEDOM_SOCKET_MESSAGE` es una cola de python ()` alimentada por la clase` jeedom_socket () `como se vio anteriormente.

Si la cola no está vacía, cargamos el json y comprobamos que la clave api recibida con el mensaje corresponde a la recibida al iniciar el daemon (`_apikey`) luego podemos leer el mensaje y hacer nuestras acciones en el try / excepto:

`` ``python
        try:
            imprimir leer'
        excepto Excepción, e:
            logging.error ('Enviar comando al error demonio : '+ str (e))
`` ``

Entonces, en lugar de `` imprimir 'leer' ', depende de usted leer los elementos relevantes del mensaje que su complemento habrá enviado y activar las acciones o llamar a sus clases o métodos específicos de su complemento.

A partir de aquí, tienes un demonio que se puede ejecutar incluso si aún no hace nada (ese es tu trabajo).

## Adaptación del código php del complemento

Tener un demonio y comprender su estructura es muy bueno, pero faltan algunos elementos clave para que su complemento (código php) pueda controlar este demonio y para que el núcleo también esté informado de que existe.

### plugin_info / info.json

En el archivo de información.json de su complemento, debe agregar la propiedad `hasOwnDeamon` y asignar el valor` true`, ejemplo:

`` ``json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 10,
    ...
}
`` ``

Veremos más adelante el uso de `hasDependency` y` maxDependancyInstallTime`.

### Administrar el demonio en su clase eqLogic

En la clase eqLogic de su complemento hay algunos métodos a implementar para la administración adecuada del demonio.

#### Función Deamon_info()

La función `deamon_info ()` será llamada por el núcleo cuando muestre el siguiente marco en la página de configuración de su complemento, necesariamente debe existir:

![image](images/daemon_info.png)

Por lo general, se verá así, la matriz devuelta y las claves utilizadas en esta matriz son obviamente importantes.
Puede copiar / pegar el código a continuación tal como está y adaptar el código al final de la función para verificar la configuración necesaria para su complemento.

`` ``php
    función estática pública deamon_info() {
        $regreso = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::getTmpFolder (__ CLASE__) . '/deamon.pid';
        si (archivo_existe ($ archivo_pid)) {
            if (@posix_getsid (trim (file_get_contents ($ pid_file)))) {
                $return['state'] = 'ok';
            } demás {
                shell_exec (sistema::getCmdSudo() . 'rm -rf ' . $pid_file . ' 2> & 1> / dev / null ');
            }
        }
        $return['launchable'] = 'ok';
        $user = config::byKey('user', __CLASS__); // exemple si votre démon à besoin de la config user,
        $pswd = config::byKey('password', __CLASS__); // password,
        $clientId = config::byKey('clientId', __CLASS__); // et clientId
        si ($ usuario == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le nom d\'utilisateur n\'est pas configuré', __FILE__);
        } elseif ($ pswd == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le mot de passe n\'est pas configuré', __FILE__);
        } elseif ($ clientId == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('La clé d\'application n\'est pas configurée', __FILE__);
        }
        return $ return;
    }
`` ``

> **Atención**
>
> No hay error tipográfico en el ejemplo, el método se llama `deamon_info ()` y no `daemon_info`, el error está en el núcleo.

La tecla `state` obviamente corresponde al estado que se muestra en la pantalla, podemos leer arriba que probamos la presencia de nuestro" pid_file "para saber si el demonio se está ejecutando o no.

La tecla `launchable` corresponde a la columna" Configuración "del marco y por tanto podemos comprobar si la configuración está completa y es correcta para poder iniciar el daemon. `launchable_message` permite mostrar un mensaje al usuario en caso de" NOK"

#### Función Deamon_start()

La función `deamon_start ()` es, como su nombre indica, el método que será llamado por el núcleo para iniciar su demonio.
Puede copiar / pegar el código a continuación como está y modificar las líneas indicadas.

`` ``php
    función estática pública deamon_start() {
        self::deamon_stop ();
        $deamon_info = self::deamon_info();
        if ($ deamon_info ['ejecutable'] != 'ok') {
            throw new Exception (__ ('Por favor verifique la configuración', __FILE__));
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = 'python3 ' . $path . '/demond.py'; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'http:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --pidentificación ' . jeedom::getTmpFolder (__ CLASE__) . '/deamon.pid'; // et on précise le chemin vers le pidentificación file (ne pas modifier)
        log::add (__ CLASS__, 'info', 'Lanzar demonio');
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du Iniciar sesión pour votre démon, vous devez nommer votre Iniciar sesión en commençant par le pluginidentificación pour que le fichier apparaisse dans la page de config
        $i = 0;
        mientras que ($ i <20) {
            $deamon_info = self::deamon_info();
            if ($ deamon_info ['estado'] == 'ok') {
                break;
            }
            sleep(1);
            $i++;
        }
        si ($ i> = 30) {
            log::add (__ CLASS__, 'error', __ ('No se puede iniciar el demonio, verifique el registro', __FILE__), 'cannotStartDeamon');
            falso retorno;
        }
        message::removeAll (__ CLASS__, 'cannotStartDeamon');
        devuelve verdadero;
    }
`` ``

Solo modifique las líneas con un comentario, el resto debe permanecer sin cambios.

Tenga en cuenta que comenzamos por detener el demonio, esto para administrar el reinicio.
Luego verificamos si el demonio realmente se puede iniciar con el método `deamon_info ()` y generamos la línea de comando en la variable `$ cmd` para iniciar nuestro demonio, aquí con python3

#### Función Deamon_stop()

Este método se utilizará para detener el demonio: obtenemos el pid del demonio, que fue escrito en el "pid_file" y enviamos el sistema kill al proceso.

`` ``php
    función estática pública deamon_stop() {
        $pid_file = jeedom::getTmpFolder (__ CLASE__) . '/deamon.pid'; // ne pas modifier
        si (archivo_existe ($ archivo_pid)) {
            $pidentificación = intval(trim(file_get_contents($pid_file)));
            system::matar ($ pid);
        }
        system::matar ('templated.py'); // nombre del demonio a modificar
        sleep(1);
    }
`` ``

Llegó aquí, declaró el demonio en la información.json e implementó los 3 métodos necesarios para que el núcleo de Jeedom inicie y detenga su demonio y muestre su estado. Se cumplen los requisitos previos.

### Comunicación entre el demonio y el código PHP

Queda por administrar la comunicación desde y hacia el demonio. En el código python ya hemos visto cómo se manejó: como recordatorio el método `listen ()` y `read_socket ()` que escucha en un socket y el método `send_change_immediate ()` para enviar una carga json al código php.

Por lo tanto, debemos administrar el equivalente en el lado de PHP.

#### Envíe un mensaje al demonio

Esta función no existe en el núcleo y no es estándar para todos los complementos de Jeedom, tampoco es obligatoria.
Esta es la función que uso (@Mips) en cada uno de mis plugins que tienen un demonio, lo pongo aquí para ti y tú haces lo que quieras con él;-)

Por lo tanto, recibe una matriz de valores como parámetro y es responsable de enviarla al socket del demonio que, por lo tanto, podrá leer esta matriz en el método `read_socket ()` que vimos anteriormente.

`` ``php
    función estática pública sendToDaemon ($ params) {
        $deamon_info = self::deamon_info();
        if ($ deamon_info ['estado'] != 'ok') {
            lanzar una nueva excepción ("El demonio no se inicia");
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        socket_connect ($ socket, '127.0.0.1 ', config::byKey ('puerto de conexión', __CLASS__, '55009')); // puerto predeterminado de su complemento para modificar
        socket_write ($ socket, $ payLoad, strlen ($ payLoad));
        socket_close ($ socket);
    }
`` ``

Lo que hay en la matriz `$ params` y cómo usa esos datos en su demonio depende de usted, depende de lo que esté haciendo su complemento.

Como recordatorio, esta matriz se recuperará en el método `read_socket ()`; fragmento de código de Python:

`` ``python
        si el mensaje ['apikey'] != _apikey:
            logging.error ("Apikey no válido del socket : " + str (mensaje))
            return
        try:
            imprimir leer'
        excepto Excepción, e:
            logging.error ('Enviar comando al error demonio : '+ str (e))
`` ``

Podemos ver la clave "apikey" agregada por el código php que será leído por el código Python en la matriz "message""

#### Recibe un mensaje del demonio

Para hacer esto debemos agregar un archivo a nuestro complemento en la carpeta `. / Core / php /`. Por convención, llamaremos a este archivo `jee [pluginId] .php`. `/ plugins / [pluginId] / core / php / jee [pluginId].php` será, por tanto, la ruta a utilizar como URL de devolución de llamada en el método `deamon_start ()`

Aquí está el contenido básico que puede copiar / pegar en este archivo:

`` ``php
<?php

intentar {
    require_once dirname (__ FILE__). "/../../../../core/php/core.inc.php";

    tejo (!jeedom::apiAccess (init ('apikey'), 'template')) {// reemplace la plantilla con su ID de complemento
        echo __ ('No tienes autorización para realizar esta acción', __FILE__);
        die();
    }
    si (init ('prueba') != '') {
        echo 'OK';
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
    tejo (!is_array ($ resultado)) {
        die();
    }

    if (isset ($ resultado ['clave1'])) {
        // hacer algo
    } elseif (isset ($ resultado ['clave2'])) {
        // hacer algo más
    } demás {
        log::add ('plantilla', 'error', 'mensaje desconocido recibido del demonio'); // reemplaza la plantilla con la identificación de tu complemento
    }
} catch (Excepción $ e) {
    log::add ('plantilla', 'error', displayException ($ e)); // reemplaza la plantilla con la identificación de tu complemento
}
`` ``

El código comienza validando que el apikey es correcto:

`` ``php
    tejo (!jeedom::apiAccess (init ('apikey'), 'template')) {// reemplace la plantilla con su ID de complemento
        echo __ ('No tienes autorización para realizar esta acción', __FILE__);
        die();
    }
`` ``

La primera prueba se utiliza como método de prueba al iniciar el demonio (consulte la llamada `jeedom_com.test () `en el código del demonio):

`` ``php
    si (init ('prueba') != '') {
        echo 'OK';
        die();
    }
`` ``

y finalmente cargamos el payload que decodificamos en el arreglo `$ result`:

`` ``php
    $result = json_decode(file_get_contents("php://input"), true);
    tejo (!is_array ($ resultado)) {
        die();
    }
`` ``

Entonces depende de usted leer la tabla y realizar las acciones en su complemento en consecuencia, ejemplo:

`` ``php
    if (isset ($ resultado ['clave1'])) {
        // hacer algo
    } elseif (isset ($ resultado ['clave2'])) {
        // hacer algo más
    } demás {
        log::add ('plantilla', 'error', 'mensaje desconocido recibido del demonio'); // reemplaza la plantilla con la identificación de tu complemento
    }
`` ``

El código de Python para enviar el mensaje se verá así:

`` ``python
jeedom_com.send_change_immediate ({'clave1' : 'valor1 ',' clave2' : 'value2' })
`` ``

Voila, tienes un demonio completamente funcional y puedes comunicarte de un lado a otro entre tu demonio y tu código php.La parte difícil aún está por hacer: código demonio lógica.

## Dependencias

Cuando vamos a escribir un demonio, muy a menudo necesitaremos bibliotecas externas además de nuestras propias clases.

En debian, normalmente usaremos la herramienta apt para instalar los paquetes necesarios y para python usaremos pip.

Y para manejar esto, una vez más, todo está planeado en el núcleo de Jeedom para ayudarnos a través de dos métodos distintos:

1. El método procesal.  
   Este método era el único método posible con versiones de jeedom anteriores a 4.2
1. El método del archivo json de configuración.  
   Este método apareció con la versión 4.2 del núcleo de Jeedom.
  
Ambos métodos se pueden implementar en un solo complemento.
* Si ambos métodos se implementan en un complemento:
  * Núcleos antes de 4.2 utilizará el método procesal.
  * Núcleo 4.2 y posteriores usarán el método de archivo de configuración per json.
* Si solo se implementa el método de procedimiento en un complemento:
  * Todos los núcleos utilizarán este método.
* Si solo se implementa el método del archivo de configuración json en un complemento.
  * El complemento no será compatible con las versiones principales anteriores a la 4.2

El método del archivo de configuración ofrece varias ventajas sobre la versión de procedimiento. Este método
debe implementarse en todos los complementos.

El método de procedimiento solo debe implementarse en complementos que deben ser compatibles con núcleos anteriores
a la versión 4.2. El método del archivo de configuración json también debe implementarse en estos complementos.

### El método del archivo de configuración json
Hay 2 requisitos previos que detallaremos a continuación.

#### Declaración en plugin_info / info.json

El mismo ejemplo que para la declaración del demonio, debe agregar la propiedad `hasDependency` y asignar el valor` true`:

`` ``json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    ...
}
`` ``

#### Creación del archivo plugin_info/packages.json

La sintaxis de este archivo se describe aquí. Ver también 
[el artículo de lanzamiento en el blog](https://blog.jeedom.com/6170-introduction-jeedom-4-2-installation-de-dependance/).

Este archivo puede contener cualquiera de las siguientes secciones:
##### pre-install: la ruta a un script para ejecutar antes de la instalación
Ejemplo :
`` ``json
{
  "pre-install" : {
    "script" : "complementos/openzwave/resources/post-install.sh"
  }
`` ``

##### post-install:
Esta puede ser la ruta a un script que se ejecutará después de la instalación o la acción de reiniciar Apache. 
Ejemplo :
`` ``json
{
  "post-install" : {
    "reiniciar_apache" : true,
    "script" : "complementos/openzwave/resources/post-install.sh"
  }
`` ``

##### apt: dependencias de debian
Exemple
`` ``json
{
  "apt" : {
    "libav-tools" : {"alternative" : ["ffmpeg"]},
    "ffmpeg" : {"alternative" : ["libav-herramientas"]},
    "python-pil" : {},
    "php-gd" : {}
  }
}
`` ``

Para cada paquete, podemos especificar "versión" para establecer una versión, "alternativa" si está disponible,
 `opcional` si es opcional, `reinstalar` para forzar la reinstalación del paquete, `comentario` para agregar un comentario gratuito.
##### pip3: Dependencias de Python3 (también se admite pip2))
Exemple:
`` ``json
{
  "apt" : {
    "python3" : {},
    "python3-pip" : {},
    "python3-pyudev" : {},
    "solicitudes de python3" : {},
    "herramientas de configuración de python3" : {},
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
`` ``

##### npm: dependencias para NodeJS
Para NodeJS las dependencias están en otro archivo de 'paquetes'.json` en su propio formato, 
colocado en el directorio `/resources` por ejemplo, es este archivo el que se indicará en el de Jeedom:
`` ``json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    "complementos/dyson/recursos/dysond"  : {}
  }
}
`` ``

##### composer: para instalar otra dependencia de PHP
no hay ningún ejemplo a la mano; la sintaxis es similar a la de otros paquetes, con la palabra clave `compose`.

##### Dependencias de otro complemento:
Si un complemento requiere la instalación de otro complemento, esto también es posible con la siguiente sintaxis; 
el complemento debe ser gratuito o ya comprado :
`` ``json
{
    "plugin":{
        "mqtt2": {}
    }
}
`` ``

### El método procesal
Hay 3 requisitos previos que detallaremos a continuación.

#### Declaración en plugin_info / info.json

El mismo ejemplo que para la declaración del demonio, debe agregar la propiedad `hasDependency` y asignar el valor` true`:

`` ``json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 10,
    ...
}
`` ``

La propiedad `maxDependancyInstallTime` es el retraso en minutos después del cual el núcleo considerará que la instalación no se realizó correctamente.
 En este caso, el modo automático del demonio se desactivará y se publicará un mensaje en el centro de notificaciones.
 Si esta propiedad no está definida, el tiempo predeterminado será de 30 minutos.

> **INCLINAR**
>
> La secuencia de comandos de instalación no se interrumpirá, por lo que puede terminar con éxito. Este es solo el tiempo después del cual el núcleo ya no espera y ya no muestra el progreso.

#### Instalación de dependencias

En su clase eqLogic debe agregar esta función si no existe. Puede copiarlo / pegarlo como está sin modificar nada

`` ``php
    función estática pública instalación_dependencia() {
        log::eliminar (__ CLASS__. '_update');
        return array ('script' => dirname (__ FILE__). '/../../resources/install_#stype#.sh ' . jeedom::getTmpFolder (__ CLASE__) . '/ dependencia ',' registro '=> registro::getPathToLog (__ CLASS__. '_update'));
    }
`` ``

Esta función comienza eliminando el registro de la instalación anterior si existía y luego volverá al núcleo el comando del script a ejecutar y la ubicación del registro.

Tenga en cuenta que el archivo de script devuelto se llama `install_#stype#.sh`. De hecho,#stype#`será reemplazado dinámicamente por el núcleo con la herramienta de administración de paquetes que se utilizará según el sistema en el que esté instalado Jeedom. Entonces '#stype#`será reemplazado por` apt` en un sistema Debian.
Esto hace posible ofrecer scripts de instalación de dependencias para varios sistemas y, por lo tanto, admitir algo diferente a Debian / apt, que es el mínimo estricto y el único que gestionaremos aquí.

El primer argumento: `jeedom::getTmpFolder (__ CLASE__) . '/ dependency'` es el archivo que se usa para monitorear el progreso de la instalación (el porcentaje que aparece en la pantalla durante la instalación).

Eso es todo por la parte de php, ahora tienes que crear el script en `./resources/install_apt.sh` y obviamente el contenido del script dependerá de su complemento y de los paquetes que desee instalar.

Aquí hay un ejemplo de un script bastante simple de uno de mis complementos, pero puede hacerlo mucho más completo y avanzado:

`` ``bash
PROGRESS_FILE = / tmp / jeedom / template / dependency #sustituya la plantilla con su ID de complemento

Si [ ! -z $ 1]; luego
    PROGRESS_FILE = $ 1
fi
toca $ {PROGRESS_FILE}
echo 0> $ {PROGRESS_FILE}
eco "*************************************"
eco "*   Iniciar instalación de dependencias  *"
eco "*************************************"
echo $ (fecha)
echo 5> $ {PROGRESS_FILE}
apt-get clean
echo 10> $ {PROGRESS_FILE}
apt-get update
echo 20> $ {PROGRESS_FILE}

eco "*****************************"
echo "Instalar módulos usando apt-get"
eco "*****************************"
apt-get install -y python3 python3-solicita python3-pip python3-voluptuous python3-bs4
echo 60> $ {PROGRESS_FILE}

eco "*************************************"
echo "Instala las bibliotecas de Python necesarias"
eco "*************************************"
python3 -m pip install "aiohttp"
echo 80> $ {PROGRESS_FILE}

echo 100> $ {PROGRESS_FILE}
echo $ (fecha)
eco "***************************"
eco "*      Instalación finalizada      *"
eco "***************************"
rm $ {PROGRESS_FILE}
`` ``

Detallaremos unas líneas:

Comenzamos por definir la ubicación predeterminada del archivo de progreso en caso de que no hayamos realizado correctamente el paso anterior...
Y usamos el primer argumento recibido como ubicación porque hicimos el paso anterior correctamente;-).

`` ``bash
PROGRESS_FILE = / tmp / jeedom / template / dependency #sustituya la plantilla con su ID de complemento

Si [ ! -z $ 1]; luego
    PROGRESS_FILE = $ 1
fi
`` ``

Las líneas del tipo `echo 60> $ {PROGRESS_FILE}` se utilizan obviamente para devolver el progreso: para tranquilizar al usuario lo ponemos regularmente hasta llegar a 100 (suelen enfatizar cuando supera los 100 por lo que evitamos).

Algunos consejos:

- No hagas una actualización de apt-get! No sabe lo que hay en la máquina y no es su trabajo actualizar todo.
- No use `apt` sino` apt-get`. `apt` está hecho para uso interactivo y generará una advertencia.
- Agregue la marca `-y` cuando sea necesario para confirmar las solicitudes; de lo contrario, el script se detendrá con una solicitud como` ¿Quiere continuar [y / n] `y el usuario será bloqueado?.
- Prefiera la sintaxis `python3 -m pip install ...` en lugar de `pip3 install ...` para instalar paquetes de python porque la segunda causará problemas si `pip3` (o` pip` si está usando python v2) n ' no está relacionado con la misma versión que python3: si por ejemplo python3 apunta a la versión 3.7 y pip3 apunta a 3.9 o peor el 2.7; No sabe lo que se ha hecho en el sistema y no está a salvo de dicho problema en la máquina del usuario, hay docenas de casos enumerados en la comunidad.

> **Atención**
>
> Es muy importante instalar todos los paquetes necesarios y prestar especial atención a los que muy a menudo ya están instalados ... pero no siempre. Con frecuencia hay problemas con los paquetes `python3-request`,` python3-pip` y / o `serial`. Estos no están preinstalados en un debian básico, pero muy a menudo ya están instalados por otro complemento ... a menos que su complemento sea el primero y, en este caso, su demonio no se iniciará. Sucede con más frecuencia de lo que piensas.

#### Conoce el estado

![image](images/dependencies_info.png)

Por lo tanto, es nuestra función php `dependdancy_install ()` la que será llamada por el núcleo y la que permitirá lanzar nuestro script `./resources/install_apt.sh` cuando el usuario hace clic en el botón "Relanzar" o automáticamente por el núcleo cuando detecta que las dependencias no están instaladas o no están actualizadas.

Pero, ¿cómo sabe el núcleo el estado y cómo lo muestra en el cuadro de arriba?? Gracias a la función `dependdancy_info ()` que tenemos que agregar en nuestra clase eqLogic.

A continuación, se muestra un ejemplo del cual puede utilizar la mayoría:

`` ``php
    función estática pública dependancy_info() {
        $regreso = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::getTmpFolder (__ CLASE__) . '/dependency';
        si (file_exists (jeedom::getTmpFolder (__ CLASE__) . '/dependency')) {
            $return['state'] = 'in_progress';
        } demás {
            si (exec (sistema::getCmdSudo() . system::obtener ('cmd_check') . '-Ec "python3 \ -requests|python3 \ -voluptuoso|python3 \ -bs4 "') <3) {// adaptar la lista de paquetes y el total
                $return['state'] = 'nok';
            } elseif (exec (sistema::getCmdSudo() . 'lista pip3 | grep -Ewc "aiohttp" ') <1) {// adaptar la lista de paquetes y el total
                $return['state'] = 'nok';
            } demás {
                $return['state'] = 'ok';
            }
        }
        return $ return;
    }
`` ``

En este ejemplo probamos la presencia de paquetes apt: `system::getCmdSudo() . system::obtener ('cmd_check') . '-Ec "python3 \ -requests|python3 \ -voluptuoso|python3 \ -bs4 "'`. Aquí queremos `python3-request`,` python3-voluptuous` y `python3-bs4` y, por lo tanto, el comando debe devolver 3, de ahí la comparación: `<3`.

Lo mismo para los paquetes de Python: `lista pip3 | grep -Ewc "aiohttp" '`. La presencia de `aiohttp` está validada, solo un paquete, por lo que comparamos: `<1`;

Entonces es muy simple: la lista de paquetes y el total son los únicos elementos que debes modificar si solo tienes este tipo de verificación de lo contrario será fácil agregar las otras pruebas relevantes en tu caso.
