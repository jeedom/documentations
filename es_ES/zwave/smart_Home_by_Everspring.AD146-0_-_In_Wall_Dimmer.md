SmartHome de Everspring en dimmer de pared - AD146-0
================================================

-   **El módulo**

![module](images/smarthomebyeverspring.AD146-0/module.jpg)

-   **El visual de Jeedom**

![vuedefaut1](images/smarthomebyeverspring.AD146-0/vuedefaut1.jpg)

Resumen
------

Este micromódulo de atenuador de pared de SmartHome Europe por
Everspring, está diseñado para controlar el encendido y apagado de
artefactos de iluminación y equipos eléctricos en su hogar. Puede
También proporciona una función de atenuación que es solo
compatible con bombillas. A un voltaje de 230V, este módulo puede
admite hasta 300 vatios en carga resistiva o incandescente, o 200
Vatios de carga fluorescente.

Se puede utilizar en modo de 2 hilos (sin neutro), reemplazando un
interruptor existente, o tres cables con fuente de alimentación convencional de
módulo (Fase + Neutro).

El Wall Dimmer Module es un dispositivo compatible con Z-Wave ™ que es
diseñado para funcionar con todas las redes compatibles con Z-Wave ™. Él
puede ser controlado por control remoto, software de PC o cualquier
qué controlador Z-Wave en su red.

Fonctions
---------

-   Controlar una luz / dispositivo de forma remota

-   Se instala detrás de un interruptor existente

-   ON / OFF y función de variación

-   Bajo consumo de energía

-   Muy pequeño, dimensiones reducidas

-   Antena de largo alcance

-   Tecnología Z-Wave Plus

-   Se instala fácilmente en una caja de empotrar estándar

-   Usar en modo de 2 hilos (no es necesario neutral)

-   Compatible con bombillas Led regulables

-   Botón para incluir / excluir / asociar el módulo

-   Función repetidora Z-Wave

Características técnicas
---------------------------

-   Tipo de módulo : Receptor Z-Wave

-   Suministro : 230 V, 50 Hz

-   El consumo : 0.5W

-   Potencia máxima :

-   Carga resistiva : 300W

-   Bombilla incandescente : 300W

-   Bombilla fluorescente compacta : 200W

-   Frecuencia : 868.42 Mhz

-   Alcance : hasta 70 m en exteriores, hasta 30 m en edificios

-   Affichage: LED en el botón

-   Dimensiones : 42 mm x 43 mm x 16 mm

Datos del módulo
-----------------

-   Hacer : Smarthome por everspring

-   Nombre : En pared dimmer

-   ID del fabricante : 96

-   Tipo de producto : 3

-   ID del producto : 2

Configuration
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

![inclusion](images/smarthomebyeverspring.AD146-0/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/smarthomebyeverspring.AD146-0/information.jpg)

### Commandes

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.

![Comandos](images/smarthomebyeverspring.AD146-0/commandes.jpg)

Aquí está la lista de comandos :

-   Intensidad : Este es el comando para ajustar la intensidad de la luz

-   Uno : Es el control que enciende la luz

-   Apagado : Es el comando que apaga la luz

-   Estado : Es el comando que permite conocer el estado de la luz

Tenga en cuenta que en el tablero, la información de estado, ON / OFF, intensidad es
encontrado en el mismo icono.

### Configuracion del modulo

Puede configurar el módulo de acuerdo con su
instalación Esto requiere pasar por el botón "Configuración" del
Complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña
configuraciones)

![Config1](images/smarthomebyeverspring.AD146-0/config1.jpg)

Detalles del parámetro :

-   1 : Este parámetro define el comando de valor de estado, no es aconsejable cambiar este valor.

-   2 : Este parámetro define el retraso para enviar el cambio de estado al grupo 1 (valor entre 3 y 25 segundos)

-   3 : Este parámetro se usa para definir si el interruptor reanudará su estado (ON u OFF) después de una recuperación de energía.

-   4 : Este parámetro define el tipo de interruptor (push / bistable)

-   5 : Este parámetro define si el interruptor funcionará en modo de atenuación o en modo encendido / apagado

### Groupes

Este módulo tiene 2 grupos de asociación.

![Groupe](images/smarthomebyeverspring.AD146-0/groupe.jpg)

> **Importante**
>
> Al menos Jeedom debería terminar en el grupo 1

Bueno saber
------------

### Específicos

-   La retroalimentación de estado no se puede configurar en 3 segundos.

### Visual alternativo

![vuewidget](images//smarthomebyeverspring.AD146-0/vuewidget.jpg)

Wakeup
------

No hay noción de despertar en este módulo.

Faq.
------

Sí, es el parámetro 2 y no se puede establecer por debajo de 3
secondes.

No este módulo se puede incluir o excluir presionando varias veces
en el interruptor.

**@sarakha63**
