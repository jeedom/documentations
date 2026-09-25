# Uso de OpenGarage

OpenGarage es un objeto de bricolaje, aunque también está disponible ya montado por encargo, y se utiliza en el garaje.

Permite activar un relé (para abrir el garaje) y cuenta con un sensor de distancia para detectar la presencia del coche.

<http://opengarage.io/>

# Lectura de los estados de OpenGarage

Para consultar el estado del relé y del sensor de distancia, la URL que hay que utilizar es ``http://addropengarage/jc``

El resultado es un archivo JSON. Por lo tanto, hay que utilizar un dispositivo de tipo «Script» y un comando «info» de tipo JSON.

Para el estado del relé, el nombre de la propiedad del JSON es: ``door``

Para el sensor de distancia: dist

# Oferta en OpenGarage

La dirección para activar el relé es ``http://addropengarage/cc?dkey=xxxx&click=1``

``dkey`` es la clave de la API; por defecto es «opendoor»

# Más información

La documentación completa de la API está disponible en [GitHub](https://github.com/OpenGarage/OpenGarage-Firmware/tree/master/docs)
