# Descripción

A partir de Jeedom v4.2, es posible delegar parcialmente la gestión de las dependencias de tus complementos al núcleo. Es bastante sencillo: solo tienes que crear un archivo ``packages.json`` en ``plugin_info``.

# Ejemplos

```json
{
  "apt" : {
    "git" : {},
    "python-pip" : {},
    "python-dev" : {},
    "python-pyudev" : {},
    "python-louie" : {},
    "python-setuptools" : {},
    "make" : {},
    "build-essential" : {},
    "libudev-dev" : {},
    "g++" : {},
    "gcc" : {},
    "python-lxml" : {},
    "unzip" : {},
    "libjpeg-dev" : {},
    "python-serial" : {},
    "python-requests" : {}
  },
  "pip2":{
    "wheel" : {},
    "urwid" : {},
    "louie" : {},
    "six" : {},
    "tornado" : {}
  },
  "post-install" : {
    "script" : "plugins/openzwave/resources/post-install.sh"
  }
}
```

```json
{
  "apt" : {
    "libav-tools" : {"alternative" : ["ffmpeg"]},
    "ffmpeg" : {"alternative" : ["libav-tools"]},
    "python-pil" : {},
    "php-gd" : {}
  },
  "post-install" : {
    "restart_apache" : true
  }
}
```

```json
{
  "apt" : {
    "python3-pip" : {},
    "python3-pyudev" : {},
    "python3-requests" : {},
    "python3-setuptools" : {},
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

Actualmente gestiona: ``apt``, ``nodejs (npm)`` , ``pip2`` y ``pip3``, con la posibilidad de ejecutar scripts previos y posteriores a la instalación y de solicitarle que reinicie Apache tras la instalación.

Si el archivo está presente, el núcleo se basa ÚNICAMENTE EN ÉL e ignora las funciones `dependancy_info` y `dependancy_install`. Por lo tanto, solo comprobará si hay paquetes que instalar o no a partir de este archivo JSON.

## Node.js

En el caso de Node.js, es un poco especial: cualquier solicitud de Node.js o npm se procesa para instalar Node.js v12, independientemente de la plataforma. A continuación, hay dos posibilidades:

- Es el nombre de un paquete; en este caso, está instalado de forma global en el sistema.
- En este caso, hay que seguir estos pasos: colocar Jeedom en el directorio en cuestión y ejecutar un «npm install» (eliminando el directorio ``node_modules``)
