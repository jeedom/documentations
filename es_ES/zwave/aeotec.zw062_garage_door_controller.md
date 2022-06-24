 
====================================



-   **El módulo**



![module](images/aeotec.garagedoorcontroller/module.jpg)



-   **La imagen de Jeedom**



![vuedefaut1](images/aeotec.garagedoorcontroller/vuedefaut1.jpg)



Resumen 
------





. 

. 


.



Funciones 
---------



-   .

-   
    .

-   .

-   .

-   .

-   )

-   .

-   .

-   .

-   .

-   Integra el chip de la serie Z-Wave 500.

-   
    .

-   .

-   .



Características técnicas 
---------------------------



-   Tipo de mod : 

-   Alimento :  :  : Pile
    

-   Consumo en espera : 1W

-    : 2W

-    : 

-    : 

-   Frecuencia : 868.42Mhz

-   Distancia de transmisión : 

-   Temperatura de funcionamiento : -

-   Humedad de funcionamiento : 

-   Certifications: FCC, UL, CE, ROHS



Datos del módulo 
-----------------



-   Marca : Aeotec

-   Apellido : Controlador de puerta de garaje (ZW062)

-   Identificación del fabricante : 134

-   Tipo Producto : 3

-   Identificación de producto : 62



Configuración 
-------------



Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión se refieren a este
[documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).



> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón
> Z-Wave, de acuerdo con su documentación en papel.



![inclusion](images/aeotec.garagedoorcontroller/inclusion.jpg)



Una vez incluido, debe obtener esto :



![Plugin Zwave](images/aeotec.garagedoorcontroller/information.jpg)



### Pedidos 



Una vez que se reconoce el módulo, los comandos asociados con el módulo serán
disponibles.



![Pedidos](images/aeotec.garagedoorcontroller/commandes.jpg)



Aquí está la lista de comandos :



-   Abierto cerrado : Abrir, cerrar o detener la puerta del garaje.

-   Posición : Posición actual de la puerta del garaje.

-   Volumen : Volumen actual del altavoz.

-   La temperatura : Temperatura de zona, sin ascensor automático.

-   Sabotaje : Estado de manipulación en el texto.



### Configuración del módulo 



Luego, si desea configurar el módulo de acuerdo con
de su instalación, debe pasar por el botón
"Configuración" del complemento Jeedom OpenZwave.



![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)



Llegará a esta página (después de hacer clic en la pestaña
Configuraciones)



![Config1](images/aeotec.garagedoorcontroller/config1.jpg)

![Config1](images/aeotec.garagedoorcontroller/config2.jpg)



Detalles del parámetro :



-   34: Permite iniciar la calibración del tiempo de apertura de la
    la puerta.

-   41: Le permite restablecer el estado de sabotaje seleccionando "Aliviar
    el estado de alarma"

-   80: en granizo

-   255 : le permite restablecer la configuración de fábrica



### Grupos 



Este módulo tiene dos grupos de asociación. El primer "Lifeline" es
indispensable.



![Groupe](images/aeotec.garagedoorcontroller/groupe.jpg)



Bueno saber 
------------



### Especificidades 

Calibración del tiempo de apertura de la puerta del garaje:

-   1 : La puerta del garaje debe estar completamente cerrada.

-   2 : Activar el parámetro 34 en "Hacer calibración".

-   3 : Iniciar apertura de puerta

-   4 : Espere a que la puerta esté completamente abierta.

-   5 : Empieza a cerrar la puerta

La calibración está completa

-   El parámetro 34 se actualizará a "Normal".

-   El parámetro 35 se actualizará con el tiempo de apertura calculado.



Restablecimiento de sabotaje:

-   1 : El sensor debe estar correctamente fijado.

-   2 : Activar el parámetro 41 en "Aliviar el estado de alarma".

-   3 : Actualizar configuración.

La calibración está completa

-   El parámetro 41 se actualizará con "Sensor no eliminado".



Preguntas frecuentes. 
------





**@nechry**
