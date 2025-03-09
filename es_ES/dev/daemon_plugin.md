# 

## Introduction

 [](/es_ES/dev/tutorial_plugin)  [](/es_ES/dev/plugin_template) ).
.

:

- ...)
- )
- 
- 

".
.

## 

.
..

 [](/es_ES/compatibility/).
 ..

. .

:

![image](images/daemon_struct.png)

### 

.
.
. ...

> ****
>
> .

### 

.
.).
.

#### ()

.
.

#### ()

.
.

> ****
>
> ). .

#### ()

.
).
.

. .

.

#### ()

.
. .

### 

: .

.:

python
"

'
'
'
 = ''
 = ''

:
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")

)

)

')
 : '))
 : '))
 : '))
 : '))
 : '))
 : '))

)
)

try:
    ))
    )
    ():
        . .')
        shutdown()
    )
    listen()
:
     : '))
    shutdown()


:

python

.
.

' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;

 = '' ## )


> ****
>
> : . ). .

.
.

python
:
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")
    ="):
        ("=")


:

python
)
)


:

python
def manejador(signum=Ninguno, marco=Ninguno):
    logging.debug("Señal %i capturada, saliendo..." % int(signum))
    shutdown()


que solo agrega un registro y llama al método `shutdown()` definido justo debajo:

python
def apagado():
    logging.debug("Apagado")
    logging.debug("Eliminando archivo PID " + str(_pidfile))
    try:
        os.remove(_archivopid)
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
    salida estándar del sistema()
    sistema operativo_salir(0)


Este es el método en el que debe escribir el código que se ejecutará en caso de apagado del demonio, por ejemplo, para cerrar la sesión del sistema remoto y cerrar limpiamente las conexiones abiertas.

> ****
>
> Debes adaptar este método y eliminar el código que no sea necesario en tu caso, en particular el try/except en `jeedom_serial.close()` si no estás usando esta clase.

Si volvemos al inicio del demonio, aquí está la continuación comentada:

python
try:
    jeedom_utils.write_pid(str(_pidfile)) # escribe el archivo pid que el núcleo jeedom monitoreará para determinar si el demonio está iniciado
    jeedom_com = jeedom_com(apikey = _apikey,url = _callback,cycle=_cycle) # creación del objeto jeedom_com
    (): #Primera prueba para verificar que la URL de devolución de llamada sea correcta
        . .')
        shutdown()
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host) # declaramos el socket para recibir órdenes de jeedom
    listen() # y escuchamos
:
     : '))
    shutdown()


El método `listen()` definido al principio del archivo:

python
Definitivamente escucha():
    jeedom_socket.abierto()
    try:
        mientras 1:
            tiempo.dormir(0.5)
            toma de lectura()
    excepto Interrupción del teclado:
        shutdown()


No hay nada que cambiar aquí, podemos ver que el socket está abierto y luego un bucle infinito para leer el socket cada medio segundo

El método `read_socket()`

python
definición de toma de lectura():
    MENSAJE DE SOCKET JEEDOM GLOBAL
    si no JEEDOM_SOCKET_MESSAGE.vacío():
        logging.debug("Mensaje recibido en el socket JEEDOM_SOCKET_MESSAGE")
        mensaje = json.loads(jeedom_utils.stripped(JEEDOM_SOCKET_MESSAGE.get()))
        si mensaje['apikey'] != _apikey:
            logging.error("Apikey no válida del socket : " + str(mensaje))
            return
        try:
            imprimir 'leer'
        excepto Excepción, e:
            logging.error('Enviar comando al demonio error : '))


La variable `JEEDOM_SOCKET_MESSAGE` es una `queue()` de Python impulsada por la clase `jeedom_socket()` como se vio anteriormente.

Si la cola no está vacía, cargamos el json y verificamos que la clave API recibida con el mensaje coincida con la recibida al iniciar el demonio (`_apikey`) luego podemos leer el mensaje y realizar nuestras acciones en el try/except:

python
        try:
            imprimir 'leer'
        excepto Excepción, e:
            logging.error('Enviar comando al demonio error : '))


Entonces, en lugar de "imprimir 'leer'", depende de usted leer los elementos relevantes del mensaje que su complemento habrá enviado y activar las acciones o llamar a sus clases o métodos específicos de su complemento.

Desde aquí tienes un demonio que se puede ejecutar incluso si aún no hace nada (ese es tu trabajo)).

## Adaptación del código php del plugin

Tener un demonio y comprender su estructura es genial, pero faltan algunos elementos clave para que tu complemento (código php) pueda controlar este demonio y para que el núcleo también esté informado de que existe.

### plugin_info/info.json

En el archivo de información.json de tu plugin, debes agregar la propiedad `hasOwnDeamon` y asignar el valor `true`, ejemplo:

json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 10,
    ...
}


Veremos el uso de `hasDependency` y `maxDependancyInstallTime` más adelante.

### Administrar el demonio en su clase eqLogic

En la clase eqLogic de tu plugin hay algunos métodos a implementar para la gestión adecuada del demonio.

#### Función deamon_info()

La función `deamon_info()` será llamada por el núcleo cuando se muestre el siguiente marco en la página de configuración de su complemento, debe existir:

![image](images/daemon_info.png)

Normalmente se verá así: la matriz devuelta y las claves utilizadas en esa matriz son obviamente importantes.
Puede copiar y pegar el código a continuación tal como está y adaptar el código al final de la función para verificar la configuración necesaria para su complemento.

php
    función estática pública deamon_info() {
        $devolver = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::) . '/deamon.pid';
        si (archivo_existe($archivo_pid))) {
            si (@posix_getsid(trim(archivo_obtener_contenido($archivo_pid))))) {
                $return['state'] = 'ok';
            } demás {
                shell_exec(sistema::getCmdSudo() . 'rm-rf ' . $pid_file . ' 2>&1 > /dev/null');
            }
        }
        $return['launchable'] = 'ok';
        $user = config::byKey('user', __CLASS__); // exemple si votre démon à besoin de la config user,
        $pswd = config::byKey('password', __CLASS__); // password,
        $clientId = config::byKey('clientId', __CLASS__); // et clientId
        si ($usuario == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le nom d\'utilisateur n\'est pas configuré', __FILE__);
        } De lo contrario ($pswd) == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le mot de passe n\'est pas configuré', __FILE__);
        } De lo contrario, si ($ID de cliente) == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('La clé d\'application n\'est pas configurée', __FILE__);
        }
        devolver $return;
    }


> ****
>
> No hay ningún error tipográfico en el ejemplo, el método se llama `deamon_info()` y no `daemon_info`, el error está en el núcleo.

La clave `state` corresponde obviamente al estado que se muestra en la pantalla, podemos leer arriba que estamos probando la presencia de nuestro "pid_file" para saber si el demonio se está ejecutando o no.

La clave `lanzable` corresponde a la columna "Configuración" del marco y así podemos comprobar si la configuración está completa y correcta para poder iniciar el demonio. `launchable_message` permite mostrar un mensaje al usuario en caso de "NOK""

#### Función damon_start()

La función `deamon_start()` es como su nombre lo sugiere el método que será llamado por el núcleo para iniciar su demonio.
Puede copiar/pegar el código a continuación tal como está y modificar las líneas indicadas.

php
    función estática pública damon_start() {
        self::demonio_parada();
        $deamon_info = self::deamon_info();
        si ($deamon_info['lanzable'] != 'ok') {
            lanzar nueva excepción (__('Por favor verifique la configuración', __FILE__));
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = system::) . " {$path}/demond.py"; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'http:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --pidentificación ' . jeedom::) . '/deamon.pid'; // et on précise le chemin vers le pidentificación file (ne pas modifier)
        log::add(__CLASS__, 'info', 'Lanzamiento de Daemon');
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du registro pour votre démon, vous devez nommer votre registro en commençant par le pluginidentificación pour que le fichier apparaisse dans la page de config
        $i = 0;
        mientras ($i < 20) {
            $deamon_info = self::deamon_info();
            ') {
                break;
            }
            sleep(1);
            $i++;
        }
        ) {
            log::
            
        }
        message::
        
    }


.

.
. ::.

#### ()

: .

php
    () {
        $pid_file = jeedom::) . '/deamon.pid'; // ne pas modifier
        si (archivo_existe($archivo_pid))) {
            $pidentificación = intval(trim(file_get_contents($pid_file)));
            system::
        }
        system::
        sleep(1);
    }


.. .

### 

. : .

.

#### 

.
-)

.

php
    ) {
        $deamon_info = self::deamon_info();
        '] != 'ok') {
            
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        .::
        
        
    }


.

:

python
        si mensaje['apikey'] != _apikey:
            logging.error("Apikey no válida del socket : " + str(mensaje))
            return
        try:
            imprimir 'leer'
        excepto Excepción, e:
            logging.error('Enviar comando al demonio error : '))


"

#### 

. ].

:

php
<?php

 {
    

     (!jeedom::
        
        die();
    }
    ') != '') {
        
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
     (!)) {
        die();
    }

    '])) {
        
    } '])) {
        
    } demás {
        log::
    }
} ) {
    log::
}


:

php
     (!jeedom::
        
        die();
    }


.):

php
    ') != '') {
        
        die();
    }


:

php
    $result = json_decode(file_get_contents("php://input"), true);
     (!)) {
        die();
    }


:

php
    '])) {
        
    } '])) {
        
    } demás {
        log::
    }


:

python
' : '' : 'value2' })


: .

## 

.

.

:

.
   
.
   ..

.

- :
  - ..
  - ..
- :
  - .
- .
  - 

. .

### 

.
:

json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 30,
    ...
}


.
 .
 .

> ****
>
> . .

### 

#### 

. 
[](https://blog.jeedom.com/6170-introduction-jeedom-4-2-installation-de-dependance/).

:

##### pre-install: 

 :

json
{
  "pre-install" : {
    "script" : ""
  }


##### post-install

.
 :

json
{
  "post-install" : {
    "" : true,
    "script" : ""
  }


##### apt: 

Exemple

json
{
  "apt" : {
    "libav-tools" : {"alternative" : "]},
    "ffmpeg" : {"alternative" : "]},
    "python-pil" : {},
    "php-gd" : {}
  }
}


,
 .

##### pip3: 

Exemple:

json
{
  "apt" : {
    "" : {},
    "" : {},
    "" : {}
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


> **
>
> ..  ** ()
> ::.
> Exemple: ::) . " {$path}/demond.py";`

##### npm: 

.,
:

json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    ""  : {}
  }
}


##### composer: 

.

##### 


 :

json
{
    "plugin":{
        "mqtt2": {}
    }
}


### 

.

#### 

. 

php
    () {
        log::
        #stype#. ' . jeedom::) . '::
    }


.

#stype#.#stype#. #stype#.
.

: `jeedom::) . ').

..

:

> ****
>
> .
>
> Je vous invite également à consulter cette  qui offre une alternative: <https://github.com/Mips2648/dependance.lib/blob/master/pyenv.md>

bash


 ! -
    
fi
}
}
 "*************************************"
 "*     *"
 "*************************************"
)
}

}

}

 "*****************************"
"
 "*****************************"

}

 "*************************************"
"
 "*************************************"
"
}

}
)
 "***************************"
 "*            *"
 "***************************"
}


:

...
-).

bash


 ! -
    
fi


: ).

:

- ! .
- . .
- .
- : ....

> ****
>
> . . . .

#### 

![image](images/dependencies_info.png)

..

? .

:

php
    () {
        $devolver = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::) . '/dependance';
        ::) . '/dependance')) {
            $return['state'] = 'in_progress';
        } demás {
            ::getCmdSudo() . system::') . '-||
                $return['state'] = 'nok';
            } ::getCmdSudo() . ' | 
                $return['state'] = 'nok';
            } demás {
                $return['state'] = 'ok';
            }
        }
        devolver $return;
    }


: `system::getCmdSudo() . system::') . '-||. : .

:  | . : 

> ****
>
> .

: .
