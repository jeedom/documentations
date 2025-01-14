# Description

Von jeedom v4.2 ist es möglich, die Verwaltung der Abhängigkeiten Ihrer Plugins teilweise dem Kern anzuvertrauen. Es ist ganz einfach: Erstellen Sie einfach eine Datei ``packages.json`` In ``plugin_info``.

# Exemples

„json
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
    "script" : "Plugins/openzwave/resources/post-install.sh"
  }
}
„

„json
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
„

„json
{
  "apt" : {
    "python3-pip" : {},
    "python3-pyudev" : {},
    "Python3-Anfragen" : {},
    "Python3-Setuptools" : {},
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
„

„json
{
  "apt" : {
    "nodejs" : {}
  },
  "npm" : {
    "Plugins/dyson/resources/dysond"  : {}
  }
}
„

Derzeit verwaltet er : ``apt``, ``nodejs (npm)`` , ``pip2`` Und ``pip3``, mit der Möglichkeit, Skripte vor/nach der Installation zu starten und nachträglich einen Apache-Neustart anzufordern.

Wenn die Datei vorhanden ist, basiert sich der Kern NUR AUF DIESER Datei und ignoriert die Funktionen „dependancy_info“ und „dependancy_install“. Es wird daher nur aus dieser JSON-Datei berechnet, ob Pakete installiert werden müssen oder nicht.

## Nodejs

Bei NodeJS ist es etwas speziell: Jede Anfrage nach NodeJS oder NPM wird ignoriert, um NodeJS v12 unabhängig von der Plattform zu installieren. Dann gibt es 2 Möglichkeiten :

- Es handelt sich um einen Paketnamen, in diesem Fall wird er global auf dem System installiert
- In diesem Fall handelt es sich um einen Pfad. Jeedom platziert sich im betreffenden Verzeichnis und startet eine NPM-Installation (mit Löschung des Verzeichnisses) ``node_modules``)
