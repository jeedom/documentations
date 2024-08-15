# Description

A partir de jeedom v4.2 il est possible de confier en partie la gestions des dépendances de vos plugins au core. C'est assez simple il suffit de créer un fichier ``packages.json`` dans ``plugin_info``.

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

Actuellement il gère : ``apt``, ``nodejs (npm)`` , ``pip2`` et ``pip3``, avec possibilité de lancer des script de pre/post installation et de lui demander un restart d'apache en post.

Si le fichier est présent le core ne se base QUE SUR CELUI-CI, il ignore les fonctions `dependancy_info` et `dependancy_install`. Il va donc uniquement calculer si il y a des paquets à installer ou non à partir de ce fichier json.

## Nodejs

Pour nodejs c'est un peu particulier, toute demande de nodejs ou npm est outre passée pour installer nodejs v12 quelque soit la plateforme. Ensuite il y a 2 possibilités :

- c'est un nom de package dans ce cas celui-ci est installé en global sur le système
- c'est un chemin dans ce cas jeedom se place dans le répertoire en question est lance un npm install (avec suppression du répertoire ``node_modules``)
