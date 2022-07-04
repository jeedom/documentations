# Uso de garaje abierto

OpenGarage es un objeto de tipo bricolaje, pero también está disponible ensamblado bajo pedido y utilizado en el garaje.

Ofrece la activación de un relé (para abrir el garaje) y un sensor de distancia para comprobar la presencia del coche.

<http://opengarage.io/>

# Lectura de estados de OpenGarage

Para recuperar el estado del relé y del sensor de distancia, la url a utilizar es ``http://addropengarage/jc``

El resultado es un json. Por lo tanto, es necesario utilizar un equipo de tipo Script y un comando de información de tipo json

Para el estado del relé el nombre de la propiedad del json : ``door``

Para el sensor de distancia : dist

# Acción en el OpenGarage

La dirección para la activación del relé es ``http://addropengarage/cc?dkey=xxxx&click=1``

``dkey`` es la clave api, por defecto es opendoor

# Mas información

La documentación completa de la API está disponible en [github](https://github.com/OpenGarage/OpenGarage-Firmware/tree/master/docs)
