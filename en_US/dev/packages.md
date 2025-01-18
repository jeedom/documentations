# Description

From jeedom v4.2 it is possible to partly entrust the management of the dependencies of your plugins to the core. It's quite simple, just create a file ``packages.json`` In ``plugin_info``.

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

Currently he manages : ``apt``, ``nodejs (npm)`` , ``pip2`` And ``pip3``, with the possibility of launching pre/post installation scripts and asking for an Apache restart in post.

If the file is present the core is based ONLY ON THIS ONE, it ignores the `dependancy_info` and `dependancy_install` functions. So it will only calculate if there are packages to install or not from this json file.

## Nodejs

For nodejs it's a bit special, any request for nodejs or npm is bypassed to install nodejs v12 whatever the platform. Then there are 2 possibilities :

- it is a package name in this case it is installed globally on the system
- it is a path in this case jeedom places itself in the directory in question and launches an npm install (with deletion of the directory ``node_modules``)
