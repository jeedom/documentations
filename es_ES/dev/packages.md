# Description

Desde jeedom v4.2 es posible confiar parcialmente la gestión de las dependencias de sus complementos al núcleo. Es bastante sencillo, solo necesitas crear un archivo ``packages.json`` En ``plugin_info``.

# Exemples

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
    "script" : "complementos/openzwave/recursos/post-install.sh"
  }
}
```

```json
{
  "apt" : {
    "libav-tools" : {"alternative" : ["ffmpeg"]},
    "ffmpeg" : {"alternative" : ["herramientas libav"]},
    "python-pil" : {},
    "php-gd" : {}
  },
  "post-install" : {
    "reiniciar_apache" : true
  }
}
```

```json
{
  "apt" : {
    "python3-pip" : {},
    "python3-pyudev" : {},
    "solicitudes de python3" : {},
    "herramientas de configuración de python3" : {},
    "desarrollo de python3" : {}
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
    "complementos/dyson/recursos/dysond"  : {}
  }
}
```

Actualmente dirige : ``apt``, ``node.js (npm)`` , ``pip2`` Y ``pip3``, con la capacidad de ejecutar scripts de pre/post instalación y solicitar un reinicio de Apache en post.

Si el archivo está presente, el núcleo se basa SÓLO EN ÉL, ignora las funciones `dependancy_info` y `dependancy_install`. Por lo tanto, solo calculará si hay paquetes para instalar o no desde este archivo json.

## Nodejs

Para nodejs es un poco especial, cualquier solicitud para nodejs o npm se pasa para instalar nodejs v12 sea cual sea la plataforma. Entonces hay 2 posibilidades :

- 
-  ``node_modules``)
