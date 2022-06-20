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

 [plataformas compatibles con Jeedom](/es_ES/compatibility/).
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

> **Atención**
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

```python
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
```

:

```python

.
.

' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas; nom du démon à modifier comme expliqué ci-dessus;

 = '' ## )
```

> **Atención**
>
> : . ). .

.
.

```python
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
```

:

```python
)
)
```

:

```python
):
    ))
    shutdown()
```

:

```python
():
    ")
    ))
    try:
        )
    except:
        pass
    try:
        ()
    except:
        pass
    try:
        ()
    except:
        pass
    ")
    ()
    )
```

.

> **Atención**
>
> ..

:

```python
try:
    
    
    (): #
        . .')
        shutdown()
    
    
:
     : '))
    shutdown()
```

:

```python
():
    ()
    try:
        :
            )
            ()
    :
        shutdown()
```





```python
():
    
    ():
        ")
        ()))
        '] != _apikey:
             : " ))
            return
        try:
            '
        :
             : '))
```

.

:

```python
        try:
            '
        :
             : '))
```

.

).

## 

.

### 

.:

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

.

### 

.

#### ()

:

![image](images/daemon_info.png)

.
.

```php
    () {
        $ = array();
        $return['log'] = __CLASS__;
        $return['state'] = 'nok';
        $pid_file = jeedom::) . '/deamon.pid';
        )) {
            )))) {
                $return['state'] = 'ok';
            } más {
                ::getCmdSudo() . ' ' . $pid_file . ' 
            }
        }
        $return['launchable'] = 'ok';
        $user = config::byKey('user', __CLASS__); // exemple si votre démon à besoin de la config user,
        $pswd = config::byKey('password', __CLASS__); // password,
        $clientId = config::byKey('clientId', __CLASS__); // et clientId
         == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le nom d\'utilisateur n\'est pas configuré', __FILE__);
        }  == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('Le mot de passe n\'est pas configuré', __FILE__);
        }  == '') {
            $return['launchable'] = 'nok';
            $return['launchable_message'] = __('La clé d\'application n\'est pas configurée', __FILE__);
        }
        devolver $retorno;
    }
```

> **Atención**
>
> .

.

. "

#### ()

.
.

```php
    () {
        self::
        $deamon_info = self::deamon_info();
        '] != 'ok') {
            
        }

        $path = realpath(dirname(__FILE__) . '/../../resources/demond'); // répertoire du démon à modifier
        $cmd = 'python3 ' . $path . '/demond.py'; // nom du démon à modifier
        $cmd .= ' --loglevel ' . log::convertLogLevel(log::getLogLevel(__CLASS__));
        $cmd .= ' --socketport ' . config::byKey('socketport', __CLASS__, '55009'); // port par défaut à modifier
        $cmd .= ' --callback ' . network::getNetworkAccess('internal', 'proto:127.0.0.1:port:comp') . '/plugins/template/core/php/jeeTemplate.php'; // chemin de la callback url à modifier (voir ci-dessous)
        $cmd .= ' --user "' . trim(str_replace('"', '\"', config::byKey('user', __CLASS__))) . '"'; // on rajoute les paramètres utiles à votre démon, ici user
        $cmd .= ' --pswd "' . trim(str_replace('"', '\"', config::byKey('password', __CLASS__))) . '"'; // et password
        $cmd .= ' --apikey ' . jeedom::getApiKey(__CLASS__); // l'apikey pour authentifier les échanges suivants
        $cmd .= ' --p ' . jeedom::) . '/deamon.pid'; // et on précise le chemin vers le p file (ne pas modifier)
        log::
        $result = exec($cmd . ' >> ' . log::getPathToLog('template_daemon') . ' 2>&1 &'); // 'template_daemon' est le nom du  pour votre démon, vous devez nommer votre  en commençant par le plugin pour que le fichier apparaisse dans la page de config
        $i = 0;
        ) {
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
```

.

.


#### ()

: .

```php
    () {
        $pid_file = jeedom::) . '/deamon.pid'; // ne pas modifier
        )) {
            $p = intval(trim(file_get_contents($pid_file)));
            system::
        }
        system::
        sleep(1);
    }
```

.. .

### 

. : .

.

#### 

.
-)

.

```php
    ) {
        $deamon_info = self::deamon_info();
        '] != 'ok') {
            
        }
        $params['apikey'] = jeedom::getApiKey(__CLASS__);
        $payLoad = json_encode($params);
        $socket = socket_create(AF_INET, SOCK_STREAM, 0);
        .::
        
        
    }
```

.

:

```python
        '] != _apikey:
             : " ))
            return
        try:
            '
        :
             : '))
```

"

#### 

. ].

:

```php
<?php

 {
    

    si (!jeedom::
        
        die();
    }
    ') != '') {
        
        die();
    }
    $result = json_decode(file_get_contents("php://input"), true);
    si (!)) {
        die();
    }

    '])) {
        
    } '])) {
        
    } más {
        log::
    }
} ) {
    log::
}
```

:

```php
    si (!jeedom::
        
        die();
    }
```

.):

```php
    ') != '') {
        
        die();
    }
```

:

```php
    $result = json_decode(file_get_contents("php://input"), true);
    si (!)) {
        die();
    }
```

:

```php
    '])) {
        
    } '])) {
        
    } más {
        log::
    }
```

:

```python
' : '' : 'value2' })
```

: .

## 

.

.

. .

### 

:

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

. . .

> ****
>
> . .

### 

. 

```php
    () {
        log::
        #stype#. ' . jeedom::) . '::
    }
```

.

#stype#.#stype#. #stype#.
.

: `jeedom::) . ').

..

:

```bash


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
```

:

...
-).

```bash


 ! -
    
fi
```

: ).

:

- ! .
- . .
- .
- : ....

> **Atención**
>
> . . . .

### 

![image](images/dependencies_info.png)

..

? .

:

```php
    () {
        $ = array();
        $return['log'] = log::getPathToLog(__CLASS__ . '_update');
        $return['progress_file'] = jeedom::) . '/dependency';
        ::) . '/dependency')) {
            $return['state'] = 'in_progress';
        } más {
            ::getCmdSudo() . system::') . '-Ec "python3\-solicitudes|python3\-voluptuosa|python3\-bs4"') < 3) { // adapta la lista de paquetes y el total
                $return['state'] = 'nok';
            } ::getCmdSudo() . 'lista pip3 | grep -Ewc "aiohttp"') < 1) { // adapta la lista de paquetes y el total
                $return['state'] = 'nok';
            } más {
                $return['state'] = 'ok';
            }
        }
        devolver $retorno;
    }
```

: `system::getCmdSudo() . system::') . '-Ec "python3\-solicitudes|python3\-voluptuosa|python3\-bs4"'`. : .

: `lista de pip3 | grep -Ewc "aiohttp"'`. : 

: .
