# Description

Starting with Jeedom v4.2, you can partially delegate the management of your plugins' dependencies to the core. It's quite simple—just create a file ``packages.json`` in ``plugin_info``.

# Examples

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

It currently supports: ``apt``, ``nodejs (npm)`` , ``pip2`` and ``pip3``, with the ability to run pre- and post-installation scripts and request a post-installation restart of Apache.

If the file is present, the core relies SOLELY ON IT; it ignores the functions `dependancy_info` and `dependancy_install`. It will therefore only determine whether there are any packages to install based on this JSON file.

## Node.js

For Node.js, it's a bit different: any request for Node.js or npm is automatically processed to install Node.js v12, regardless of the platform. After that, there are two options:

- This is a package name; in this case, it is installed system-wide.
- In this case, it's a path; Jeedom is placed in the directory in question, and an `npm install` is run (with the directory removed) ``node_modules``)
