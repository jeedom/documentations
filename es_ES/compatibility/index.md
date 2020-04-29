Hardware
========

Hardware | Estado | Observaciones
--- | --- | ---
Jeedomboard             | Estable                  |
Colibrí            | Estable                  |
               | Estable                  |                          
INTELIGENTE                   | Estable                  |                          
                    | Estable                  |                          
                    | No ofaquíal / estable     |                          
                    | No ofaquíal / estable     | Atención si usas un wifi / bluetooth Razberry no funcionará
64 bit                 | Estable                  |                          
32 bit                 | No compatible            |                          
VMware                  | Estable                  | No hay soporte para VMware, solo para Jeedom. ATENCIÓN VmWare 6.5 requiere la instalación de un parche VMWare para el soporte de Zwave.         

Imágenes
======

Puedes encontrar todas las imágenes de Jeedom
[aquí](https://images.jeedom.com/),
luego en la carpeta Imágenes

> **Nota**
>
> Una imagen  instalará el
> última versión estable de Jeedom, por lo que esta startup es un poco más
> largo y requiere acceso a internet. Puedes seguir
> el progreso de ello yendo a la IP de su Jeedom con su
> navegador

| Imágenes         | Hardware       | Estado           | Acceso SSH      | Observaciones      |
|----------------|----------------|----------------|----------------|----------------|
| Jeedomboard    | Jeedomboard y |            | root / Mjeedom96 |                |
|      | colibrí   |                |                |                |
| Jeedomboard    | Jeedomboard y | Estable         | root / Mjeedom96 |                |
|                | colibrí   |                |                |                |
| Estibador         |                |            | root / Mjeedom96 |                |


Todas las demás imágenes descargables anteriormente ya no son
mantenido, es mejor pasar por la instalación manual de Jeedom
[Doctor](https://github.com/jeedom/documentation/blob/master/installation/es_ES/other.asciidoc)
después de instalar una distribución de Linux correspondiente a su
material : Debian (vm, pc, ...), Raspbian Lite (Raspberry pi), Armbian
(Ordoide, ...), ...

Software
========

> **Importante**
>
> Jeedom solo es compatible con Debian Jessie (estable) y Stretch (estable).
> Cualquier otra versión (Wheezy ...) o distribución (Ubuntu ...) no es
> apoyado por Jeedom.


| Nombre                     | Estado                    | Observaciones                |
|-------------------------|-------------------------|--------------------------|
| .5 o menos        | No compatible            |                          |
| .6                 | Estable                  |                          |
| .X                 | Estable                  |                          |
| .5 / 5.6           | Estable                  |                          |
| .7               |                     |                          |
|                  | Estable                  |                          |

Otro
=====

Memoria USB / Módulo de expansión
---------------------------

Controlador ENOCEAN :

-   Llave USB EnOcean USB300
-   Memoria USB EnOcean USB310 (recomendada)

Interfaz RFXCOM :

-   
-   RFXtrx433E USB (recomendado)

Gateway EDISIO :

-   Edisio Dongle (Recomendado)

Indicador led :

-   parpadeo (1) mk2 (recomendado)

 :

-   HUAWEI E220 (Recomendado)
-   
-   .2MBPS 3G inalámbrico

Controlador Z-Wave :

-   DISEÑOS SIGMA Controlador USB Z-Wave Plus
-   Onda Z.ME - Mini controlador USB Z-Wave Plus UZB1
-   Controlador AEON LABS Z-Wave Aeon Labs Z-Stick S2
-   AEON LABS - Controlador USB Z-Wave Plus Z-Stick GEN5 (recomendado)


Controlador Zigbee :

- [](http://bit.ly/2n4VyWc)

Módulos Zwave
-------------

Encontrarás la lista
[aquí](https://doc.jeedom.com/es_ES/zwave/equipement.compatible)

Módulos EnOcean
---------------

Encontrarás la lista
[aquí](https://doc.jeedom.com/es_ES/enocean/equipement.compatible)

Módulos Edisio
--------------

Encontrarás la lista
[aquí](https://doc.jeedom.com/es_ES/edisio/equipement.compatible)

Módulos RFXcom
--------------

Encontrarás la lista
[aquí](https://doc.jeedom.com/es_ES/rfxcom/equipement.compatible)

Cámaras
-------

Encontrarás la lista
[aquí](https://doc.jeedom.com/es_ES/camera/equipement.compatible)

Plataforma de hardware recomendada
---------------------------------

El equipo de jeedom lo recomienda (según su presupuesto) :

-   Jeedom INTELIGENTE (todo está preinstalado, no tiene que hacer nada)

-    (mejor relación rendimiento / precio)

-   Intel Nuc gen6 (rendimiento extremo, vea la categoría tutorial
    para la elección en los diferentes modelos y la instalación)
