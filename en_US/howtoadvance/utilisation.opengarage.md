OpenGarage is a DIY type object but also available mounted on
used in the garage.

It offers the activation of a relay (to open the garage) and a
ance sensor to check the presence of the car.

<http://opengarage.io/>

Reading of OpenGarage states 
===============================

In order to recover the status of the relay and the ance sensor, the url to
use is :

    http://addropengarage/jc

The result is a json. So use type equipment
Script and info command of type json

For the state of the relay the name of the property of the json : 

For the ance sensor : 

Action on OpenGarage 
========================

The address for relay activation is :

    http://addropengarage/cc?dkey=xxxx&click=1

dkey is the key to the API, by default it's open

More informations 
============

Full API documentation is available on github :

<https://github.com/OpenGarage/OpenGarage-Firmware/tree/master/docs>
