# Description

..  ``packages.json``  ``plugin_info``.

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
    "script" : ""
  }
}
```

```json
{
  "apt" : {
    "libav-tools" : {"alternative" : "]},
    "ffmpeg" : {"alternative" : "]},
    "python-pil" : {},
    "php-gd" : {}
  },
  "post-install" : {
    "" : true
  }
}
```

```json
{
  "apt" : {
    "" : {},
    "" : {},
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
```

```json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    ""  : {}
  }
}
```

 : ``apt``, `` (npm)`` , ``pip2``  ``pip3``, .

. .

## Nodejs

.  :

- es handelt sich um einen Paketnamen, in diesem Fall wird es global auf dem System installiert
- es ist ein Pfad in diesem Fall platziert sich jeedom in das betreffende Verzeichnis und startet eine npm-Installation (mit Löschung des Verzeichnisses ``node_modules``)
