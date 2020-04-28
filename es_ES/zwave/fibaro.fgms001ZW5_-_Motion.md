 
===============================

\

-   **El módulo**

\

![module](images/fibaro.fgms001zw5/module.jpg)

\

-   **El visual de Jeedom**

\

![vuedefaut1](images/fibaro.fgms001zw5/vuedefaut1.jpg)

\

Resumen 
------

\

.

. 

Dispositivo.



,

.


.

\

Funciones 
---------

\

-   

-   

-   

-   

-   

-   

-   
    

-   Botón para incluir / excluir el detector

-   Detección de batería baja

-   Muy pequeño, dimensiones reducidas

-   

\

Características técnicas 
---------------------------

\

-   Puntao de módulo : 

-   Suministro : 

-    : 

-    : -

-    : 

-    : X

-   Frecuencia : 868.42 Mhz

-   Distancia de transmisión : 50m de campo libre, 30m en interiores

-   Dimensiones: 

-   Temperatura de funcionamiento : 0-40 ° C

-   Certificaciones : 
    

\

Datos del módulo 
-----------------

\

-   Hacer : Grupo Fibar

-   Nombre : ]

-   ID del fabricante : 271

-   Puntao de producto : 2048

-   ID del producto : 4097

\

Configuración 
-------------

\

Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/es_ES/openzwave.html).

\

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón 3 veces
> botón de inclusión, de acuerdo con su documentación en papel.

\

![inclusion](images/fibaro.fgms001zw5/inclusion.jpg)

\


 :

\

![Plugin Zwave](images/fibaro.fgms001zw5/information.jpg)

\

### Comandos 

\



.

\

![Comandos](images/fibaro.fgms001zw5/commandes.jpg)

\

Aquí está la lista de comandos :

\

-   Presencia : es el comando que detectará una detección de presencia

-   Temperatura : es el comando que permite subir el
    Temperatura

-   Brillo : es el comando que hace posible aumentar el brillo

-    : 
    

-   Sabotaje : 
    

-   Batería : es el comando de la batería

\

### Configuracion del modulo 

\

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después
> inclusión.

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

![Config1](images/fibaro.fgms001zw5/config1.jpg)

![Config2](images/fibaro.fgms001zw5/config2.jpg)

![Config3](images/fibaro.fgms001zw5/config3.jpg)

![Config3](images/fibaro.fgms001zw5/config4.jpg)

\

Detalles del parámetro :

\

-   Despertador : este es el intervalo de activación del módulo (valor
    7200 recomendado)

-   1: 

-   2: 

-   3: 

-   4: 

-   6: 
    

-   8: 
     : 

-   9: 
    

-   12: 
    

-   14: ídem

-   16: ídem

-   20: 

-   22: 
    

-   24:  :
     : 
    
    

-   26: 

-   40: 
    

-   42: 
    

-   60: 
    .

-   62: 
    

-   64: 
    

-   66: 

-   80: 
    

-   81: 

-   82: 
    

-   83: 
    100% led (vinculado al parámetro 81)

-   86: temperatura por debajo de la cual el LED se iluminará en azul
    (vinculado al parámetro 81)

-   87: temperatura por encima de la cual el LED se iluminará en rojo
    (vinculado al parámetro 81)

-   89: permite que el LED parpadee en azul / blanco / rojo en caso de
    sabotaje

\

### Grupos 

\

![Groupe](images/fibaro.fgms001zw5/groupe.jpg)

\

> **Punta**
>
> 
> .

:

-   1 : . 
    .

-   2 : .

-   3 : .

-   4 : . 
    
    .

-   5 : . 
    
    .

\

Bueno saber 
------------

\

### Específicos 

\

> **Punta**
>
> Este módulo es muy complicado al despertar y está muy mal configurado
> fabrica. Es esencial despertarlo bien después de la inclusión.
> (varias veces son mejores que uno), para configurarlo de acuerdo a su
> deseos, y despertarlo bien para que la configuración se tenga en cuenta
> Cuenta.

\

### Visual alternativo 

\

![vuewidget](images/fibaro.fgms001zw5/vuewidget.jpg)

\

Despertador 
------

\

Para activar este módulo, solo hay una forma :

-   presione el botón de inclusión 3 veces (la luz se enciende
    en azul). Incluso si la luz se enciende, puede ser necesario
    hazlo varias veces seguidas (2 o 3)

\

Faq. 
------

\

Este módulo se activa presionando 3 veces en su botón de inclusión.

\

Este módulo es muy meticuloso.. Es recomendable incluir
.

\

Este módulo es un módulo de batería, la nueva configuración será
tomado en cuenta en el próximo despertar.

\

Nota importante 
---------------

\

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio
> de la configuración, después de un cambio de activación, después de un
> cambio de grupos de asociación

\

**@nechry**
