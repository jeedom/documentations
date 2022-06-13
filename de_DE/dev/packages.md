# Description

Ab jeedom v4.2 ist es möglich, die Verwaltung der Abhängigkeiten Ihrer Plugins teilweise dem Kern anzuvertrauen. Es ist ganz einfach, einfach eine Datei zu erstellen ``packages.json`` in ``plugin_info``.

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
    "reset_apache" : true
  }
}
```

```json
{
  "apt" : {
    "python3" : {},
    "python3-pip" : {},
    "python3-pyudev" : {},
    "python3-Anfragen" : {},
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

Derzeit verwaltet er : ``apt``, ``nodejs (npm)`` , ``pip2`` und ``pip3``, mit der Möglichkeit, Skripte vor/nach der Installation zu starten und zu bitten, Apache in der Post neu zu starten.

Wenn die Datei vorhanden ist, stützt sich der Kern NUR AUF DIESER, er ignoriert die Funktionen `dependancy_info` und `dependancy_install`. Es wird daher nur aus dieser JSON-Datei berechnet, ob Pakete installiert werden müssen oder nicht.

## Nodejs

Für nodejs ist es ein bisschen speziell, jede Anfrage für nodejs oder npm wird überschrieben, um nodejs v12 unabhängig von der Plattform zu installieren. Dann gibt es 2 Möglichkeiten :

- es ist ein Paketname, in diesem Fall wird es global auf dem System installiert
- es ist ein Pfad in diesem Fall wird jeedom in das betreffende Verzeichnis gelegt wird eine npm-Installation gestartet (mit Löschen des Verzeichnisses ``node_modules``)
