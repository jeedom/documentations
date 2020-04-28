Nodered is a tool written in Nodejs to manage IoT oriented flows or
Automation. It offers a graphical interface for editing flows. The
tuto describes its installation, a reverse proxy configuration and a
service start

Installation of Nodered 
=======================

Here are the commands to launch to install nodered with a nodejs
functional :

    sudo apt-get -y install libavahi-compat-libdnssd-dev libusb-1.0-0-dev build-essential
    sudo npm install -g node-red

To get Nodejs you can install one of the jeedom plugins which
Charge.

Automatic start of Nodered 
================================

It is possible to declare Nodered as a service so that it is
automatically started when the box starts. An example here :

<https://gist.github.com/bigmonkeyboy/9962293>

Apache configuration 
======================

Here is an example of a file to access Nodered via a reverse
proxy.

    <Location /jeedom/nodered>
    ProxyPass ws::
    ::
    #::
    #::
    </Location>

 
======================

Here is an example of a file to access Nodered via a reverse
proxy.

     {
      ::
      
      
      
      
      
      
      
      
      
    }

 
==============================

.

 
==============================















#


-#


#












-


-#




.#







-#



