# Use opengarage

OpenGarage is a DIY type object but also available assembled on order and which is used in the garage.

It offers the activation of a relay (to open the garage) and a distance sensor to check the presence of the car.

<http://opengarage.io/>

# Reading of OpenGarage states

In order to retrieve the status of the relay and the distance sensor, the url to use is ``http://addropengarage/jc``

The result is a json. It is therefore necessary to use a Script type equipment and an info command of json type

For the state of the relay the name of the property of the json : ``door``

For the distance sensor : dist

# Action on OpenGarage

The address for relay activation is ``http://addropengarage/cc?dkey=xxxx&click=1``

``dkey`` is the key to the API, by default it's opendoor

# More informations

Full API documentation is available at [Github](https://github.com/OpenGarage/OpenGarage-Firmware/tree/master/docs)
