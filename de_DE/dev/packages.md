# Description

Aus jeedom v4.2 Es ist möglich, die Verwaltung der Abhängigkeiten Ihrer Plugins teilweise dem Kern anzuvertrauen. Es ist ziemlich einfach, einfach eine Datei zu erstellen ``packages.json`` im ``plugin_info``.

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
    "restart_apache" : true
  }
}
`` ``

`` ``json
{
  "apt" : {
    "python3-pip" : {},
    "python3-pyudev" : {},
    "Python3-Anfragen" : {},
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
    "Plugins / Dyson / Ressourcen / Dysond"  : {}
  }
}
`` ``

Derzeit schafft er : ``apt``, ``nodejs (npm)`` , ``pip2`` und ``pip3``, mit der Möglichkeit, Skripte vor / nach der Installation zu starten und ihn zu bitten, Apache in der Post neu zu starten.

Wenn die Datei vorhanden ist, basiert der Kern NUR darauf, er ignoriert die Funktionen `dependancy_info` und `dependancy_install`. Es wird daher nur berechnet, ob Pakete aus dieser JSON-Datei installiert werden müssen oder nicht.

## Nodejs

Für nodejs ist es etwas Besonderes, jede Anforderung für nodejs oder npm wird überschrieben, um nodejs v12 unabhängig von der Plattform zu installieren. Dann gibt es 2 Möglichkeiten :

- In diesem Fall handelt es sich um einen Paketnamen, der global auf dem System installiert ist
- es ist ein Pfad in diesem Fall wird jeedom in das betreffende Verzeichnis gelegt wird eine npm-Installation gestartet (mit Löschen des Verzeichnisses) ``node_modules``)
