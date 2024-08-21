# Description

De jeedom v4.2 es posible confiar parcialmente la gestión de las dependencias de sus complementos al núcleo. Es bastante simple, solo crea un archivo ``packages.json`` dentro ``plugin_info``.

# Exemples

`` ``json
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
    "script" : "plugins / openzwave / resources / post-install.sh"
  }
}
`` ``

`` ``json
{
  "apt" : {
    "libav-tools" : {"alternative" : ["ffmpeg"]},
    "ffmpeg" : {"alternative" : ["libav-tools"]},
    "python-pil" : {},
    "php-gd" : {}
  },
  "post-install" : {
    "reiniciar_apache" : true
  }
}
`` ``

`` ``json
{
  "apt" : {
    "python3-pip" : {},
    "python3-pyudev" : {},
    "Python3-solicitudes" : {},
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
`` ``

`` ``json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    "plugins / dyson / resources / dysond"  : {}
  }
}
`` ``

Actualmente maneja : ``apt``, ``nodejs (npm)`` , ``pip2`` y ``pip3``, con la posibilidad de ejecutar scripts previos / posteriores a la instalación y pedirle que reinicie Apache en la publicación.

Si el archivo está presente, el núcleo se basa SOLAMENTE EN ÉL, ignora las funciones `dependdancy_info` y` dependdancy_install`. Por lo tanto, solo calculará si hay paquetes para instalar o no desde este archivo json.

## Nodejs

Para nodejs es un poco especial, cualquier solicitud de nodejs o npm se anula para instalar nodejs v12 sea cual sea la plataforma. Entonces hay 2 posibilidades :

- es un nombre de paquete en este caso está instalado globalmente en el sistema
- es una ruta en este caso jeedom se coloca en el directorio en cuestión se inicia una instalación npm (con la eliminación del directorio ``node_modules``)
