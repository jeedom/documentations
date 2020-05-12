SmartHome de Everspring en pared encendido apagado - AN179-0 
================================================



-   **El módulo**



![module](images/smarthomebyeverspring.AN179-0/module.jpg)



-   **El visual de Jeedom**



![vuedefaut1](images/smarthomebyeverspring.AN179-0/vuedefaut1.jpg)



Resumen 
------



Micromódulo de pared ON / OFF de la marca SmartHome Europe by Everspring,
está diseñado para controlar la iluminación de encendido y apagado y
electrodomésticos en su hogar. Dos juegos de contactos secos
permitir la conexión de dos interruptores.

Por razones de seguridad, la unidad puede detectar sobrecalentamiento y se apagará
el relé directamente para evitar daños. A una tensión de 230
V, este módulo puede soportar una carga resistiva de hasta 11 A, 1200 vatios
incandescente, 700 vatios de motor o 320 vatios (8 x 40 vatios) de
carga fluorescente.

El Micromodule Mural ON / OFF es un dispositivo compatible con Z-Wave ™ que es
diseñado para funcionar con todas las redes compatibles con Z-Wave ™. Él
puede ser controlado por control remoto, software de PC o cualquier
qué controlador Z-Wave en su red.



Funciones 
---------



-   Controlar una luz / dispositivo de forma remota

-   Se instala detrás de un interruptor existente

-   Función ON / OFF

-   Bajo consumo de energía

-   Muy pequeño, dimensiones reducidas

-   Antena de largo alcance

-   Tecnología Z-Wave Plus

-   Se instala fácilmente en una caja de empotrar estándar

-   Botón para incluir / excluir / asociar el módulo

-   Función repetidora Z-Wave



Características técnicas 
---------------------------



-   Tipo de módulo : Receptor Z-Wave

-   Suministro : 230 V, 50 Hz

-   El consumo : 0.5W

-   Potencia máxima : Carga resistiva : Bombilla incandescente de 2500W
    : Bombilla fluorescente compacta de 1200 vatios : 320W

-   Frecuencia : 868.42 Mhz

-   Alcance : hasta 70 m en exteriores, hasta 30 m en edificios

-   Affichage: LED en el botón

-   Dimensiones : 42 mm x 43 mm x 16 mm



Datos del módulo 
-----------------



-   Hacer : Smarthome por everspring

-   Nombre : En pared encendido apagado

-   ID del fabricante : 96

-   Tipo de producto : 4

-   ID del producto : 8



Configuración 
-------------



Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).



> **Importante**
>
> Para poner este módulo en modo de inclusión, presione 3 veces en su
> botón, de acuerdo con su documentación en papel. Es importante
> tenga en cuenta que este módulo va directamente a la inclusión cuando
> no pertenece a ninguna red y está alimentado



![inclusion](images/smarthomebyeverspring.AN179-0/inclusion.jpg)



Una vez incluido, deberías obtener esto :



![Plugin Zwave](images/smarthomebyeverspring.AN179-0/information.jpg)



### Comandos 



Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.



![Comandos](images/smarthomebyeverspring.AN179-0/commandes.jpg)



Aquí está la lista de comandos :



-   Uno : Es el control que enciende la luz

-   Apagado : Es el comando que apaga la luz

-   Estado : Es el comando que permite conocer el estado de la
    Iluminación



Tenga en cuenta que en el tablero, la información de estado, ON / OFF, se puede encontrar en
el mismo icono.



### Configuracion del modulo 



Puede configurar el módulo de acuerdo con su
instalación Esto requiere pasar por el botón "Configuración" del
Complemento Jeedom OpenZwave.



![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)



Llegará a esta página (después de hacer clic en la pestaña
configuraciones)



![Config1](images/smarthomebyeverspring.AN179-0/config1.jpg)



Detalles del parámetro :



-   1 : Este parámetro define el comando de valor de estado, no es
    aconseja cambiar este valor.

-   2 : Este parámetro define el retraso en el envío del cambio de estado a
    grupo 1 (valor entre 3 y 25 segundos)

-   3 : Este parámetro le permite definir si el interruptor reanudará su
    estado (ON u OFF) después de una recuperación de energía.

-   4 : Este parámetro define el tipo
    interruptor (push / biestable)

### Grupos 



Este módulo tiene 2 grupos de asociación.



![Groupe](images/smarthomebyeverspring.AN179-0/groupe.jpg)



> **Importante**
>
> Al menos Jeedom debería terminar en el grupo 1 

Bueno saber 
------------



### Específicos 



-   La retroalimentación de estado no se puede configurar por debajo de 3
    segundos. 

### Visual alternativo 



![vuewidget](images//smarthomebyeverspring.AN179-0/vuewidget.jpg)



Despertar 
-------



No hay noción de despertar en este módulo.



Faq. 
------



Sí, es el parámetro 2 y no se puede establecer por debajo de 3
secondes.



No este módulo se puede incluir o excluir presionando varias veces
en el interruptor.



**@sarakha63**
