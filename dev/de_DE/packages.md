# Beschreibung

Ab Jeedom v4.2 ist es möglich, die Verwaltung der Abhängigkeiten Ihrer Plugins teilweise dem Core zu überlassen. Das ist ganz einfach: Sie müssen lediglich eine Datei erstellen ``packages.json`` in ``plugin_info``.

# Beispiele

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

Derzeit verwaltet es: ``apt``, ``nodejs (npm)`` , ``pip2`` und ``pip3``, mit der Möglichkeit, Skripte vor und nach der Installation auszuführen und anschließend einen Neustart von Apache anzufordern.

Wenn die Datei vorhanden ist, stützt sich der Kern NUR AUF DIESE und ignoriert die Funktionen `dependancy_info` und `dependancy_install`. Es wird also lediglich anhand dieser JSON-Datei ermittelt, ob Pakete installiert werden müssen oder nicht.

## Node.js

Bei Node.js ist es etwas speziell: Jede Anfrage nach Node.js oder npm wird zusätzlich zur Installation von Node.js v12 weitergeleitet, unabhängig von der Plattform. Anschließend gibt es zwei Möglichkeiten:

- Das ist in diesem Fall ein Paketname; dieses Paket ist systemweit installiert.
- In diesem Fall handelt es sich um einen Pfad: Jeedom wird in das betreffende Verzeichnis kopiert und ein „npm install“ wird ausgeführt (unter Löschung des Verzeichnisses ``node_modules``)
