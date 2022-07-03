# Open garage use

OpenGarage is a DIY type object but also available assembled to order and used in the garage.

It offers the activation of a relay (to open the garage) and a distance sensor to check the presence of the car.

<http://opengarage.io/>

# Reading OpenGarage states

In order to retrieve the status of the relay and the distance sensor, the url to use is ``http://addropengarage/jc``

The result is a json. It is therefore necessary to use a Script type equipment and a json type info command

For the state of the relay the name of the property of the json : ``door``

For the distance sensor : dist

# Action on the OpenGarage

The address for relay activation is ``http://addropengarage/cc?dkey=xxxx&click=1``

``dkey`` is the api key, default is opendoor

# More informations

Full API documentation is available at [github](https://github.com/OpenGarage/OpenGarage-Firmware/tree/master/docs)
