# Using OpenGarage

OpenGarage is a DIY-type object that is also available pre-assembled on command and is used in the garage.

It features a relay (to open the garage) and a proximity sensor to detect the presence of the car.

<http://opengarage.io/>

# Reading OpenGarage statuses

To retrieve the status of the relay and the distance sensor, use the following URL: ``http://addropengarage/jc``

The result is a JSON object. Therefore, you must use a Script-type device and a JSON-type info command.

For the relay status, the name of the JSON property is: ``door``

For the distance sensor: dist

# Action on OpenGarage

The address for activating the relay is ``http://addropengarage/cc?dkey=xxxx&click=1``

``dkey`` is the API key; by default, it is opendoor

# More info

The complete API documentation is available at [GitHub](https://github.com/OpenGarage/OpenGarage-Firmware/tree/master/docs)
