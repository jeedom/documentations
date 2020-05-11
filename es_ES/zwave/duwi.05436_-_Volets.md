DUWI 05436 "Persiana enrollable" 
==========================

\

-   **El módulo**

\

![1 Module](images/duwi.05436/1-Module.PNG)

\

-   **El visual de Jeedom**

\

![Visuel defaut](images/duwi.05436/Visuel_defaut.PNG)

\

Resumen 
------

\

El módulo de persiana enrollable DUWI 05436 se utiliza para controlar persianas
rodando en dos direcciones.

Sus características principales son :

-   La posibilidad de usar un 'Común' para cambiar la subida
    o el descenso. Entonces es posible ordenar ambos
    direcciones con cualquier tipo de voltaje, incluso neutral.

-   La capacidad de enviar una señal continua arriba / abajo sin
    límite de tiempo.

Atención: este módulo no envía su estado al controlador de onda z cuando
el usuario presiona los botones directamente. Tienes que hacer un
'Actualizar 'en su posición para actualizar o ajustar la Encuesta (ver
más lejos).

\

Funciones 
---------

\

-   Arriba / abajo

-   Un cable común que se activará en ascenso o descenso

-   Requiere neutral para operar

-   Protección de fusibles

-   Tiempos de subida y caída ajustables por ajuste o por
    módulo de aprendizaje

-   El interruptor se suministra con el módulo, no intercambiable

\

Características técnicas 
---------------------------

\

-   Tipo de módulo : Receptor / actuador Z-Wave

-   230V, 50Hz fuente de alimentación

-   Neutral requerido

-   Carga máxima : 1800W (resistivo), 460VA (inductivo)

-   Fusible : T8AH

-   Frecuencia : 868.42 Mhz

-   Dimensiones : 52 x 52 x 31 mm

-   Rango de temperatura : 0 ° C / + 40 ° C

\

Datos del módulo 
-----------------

\

-   Hacer : Popp / Duwi

-   Nombre : Control de persianas ZW ESJ

-   ID del fabricante : 100

-   Tipo de producto : 16385

-   ID del producto : 0

\

Conexión 
---------

![2 Montage](images/duwi.05436/2-Montage.PNG)

\

Configuración 
-------------

\

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://jeedom.fr/doc/Documentación/plugins/openzwave/es_ES/openzwave.html).

\

> **Importante**
>
> Para poner el módulo en modo de inclusión, presione tres veces
> en el ascenso o descenso. La exclusión se realiza de la misma manera.

\

Una vez incluido, deberías obtener esto :

\

![Plugin Zwave](images/duwi.05436/3-Inclusion.PNG)

\

### Comandos 

\

Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponible.

\

![Comandos](images/duwi.05436/4-Comandos.PNG)

\

Aquí está la lista de comandos :

\

-   Estado : Esta es la posición actual del obturador, en porcentaje de 0 a 99

-   Bajar : comando para descender por completo

-   Subir : comando para montar completamente

-   Detener : parada inmediata del movimiento

-   Refrescar : actualizar el estado actual del módulo

-   Nivel : control deslizante para colocar una abertura parcial

\

#### Establecer los tiempos de subida y bajada : 

Se debe quitar el interruptor para acceder a los dos botones
"ascenso "y" descenso".

Coloque la aleta en la parte superior si desea ajustar el
descendencia y viceversa.

Presione al menos 2 segundos en ambos botones (arriba y abajo)
Simultáneamente El LED debería comenzar a parpadear en verde.

Luego presione y mantenga presionado el botón hacia abajo o hacia arriba,
hasta alcanzar la posición deseada. Cuando sueltas el botón, el
El LED se ilumina en verde continuo durante unos segundos. El tiempo es memorizado.

Repita la operación en la otra dirección.

\

### Configuracion del modulo 

\

Entonces, si desea configurar el módulo de acuerdo con
de su instalación, debe pasar por el botón
"Configuración "del complemento OpenZwave de Jeedom.

\

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

\

Llegará a esta página (después de hacer clic en la pestaña
configuraciones)

\

![Config1](images/duwi.05436/5-Paramètres.PNG)

\

Detalles del parámetro :

\

-   0 : Tiempo de funcionamiento :

Estos son los tiempos de subida y bajada. Deberías encontrar tu
aprendiendo.

La codificación se realiza mediante dos pares de bytes : el primero para la escalada
y el segundo para el descenso.

Los valores se codifican en hexadecimal en el módulo y se restablecen
decimal en la pantalla Jeedom.

Por ejemplo : para 4626, esto da en hexadecimal : 0x1212. O 0x12
para ascenso y 0x12 para descenso. O, traído de nuevo en
decimal : 18 años para ascenso y descenso.

Anotar : forzar un valor a cero para este parámetro implicará que el
el módulo activará el ascenso o descenso sin límite de tiempo. Habrá que
luego envíe un 'Stop' para interrumpir.

-   1 : Funcionalidad de parada : Habilitado o deshabilitado :

Se usa para indicar si presionar en la dirección opuesta durante un
el desplazamiento detiene el obturador o lo devuelve inmediatamente en la dirección
opuesto.

\

### Grupos 

\

Este módulo tiene solo un grupo de asociación en el que debe estar
encuentra tu controlador Z-Wave.

\

![Groupe](images/duwi.05436/6-Grupos.PNG)

\

Bueno saber 
------------

\

-   Como se especificó al principio, el módulo no informa los cambios en
    posiciones hechas por el usuario presionando directamente
    en el interruptor. Para tener un retorno del estado, es necesario :

        o bien configurar una encuesta a los 5 minutos en la configuración, valores de pestaña'

![Groupe](images/duwi.05436/7-Poll.PNG)

    o bien cree un escenario que inicie el comando 'Actualizar' cada x minutos (al menos 1 minuto)

-   Establecer una operación sin límite de tiempo puede resultar ser
    útil para los comandos de VMC

\

### Visual alternativo 

\

![Visuel custom](images/duwi.05436/Visuel_custom.PNG)

> **Punta**
>
> El widget "Store \ _2 \ _IMG" utilizado en el comando de información "Estado". Este
> el widget es bueno porque muestra estados 'parcialmente abiertos''.

**@Theduck38**
