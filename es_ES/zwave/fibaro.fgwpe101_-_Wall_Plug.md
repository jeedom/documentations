Fibaro FGRWPE-101 "enchufe de pared" 
=============================



-   **El módulo**



![module](images/fibaro.fgwpe101/module.jpg)



-   **El visual de Jeedom**



![vuedefaut1](images/fibaro.fgwpe101/vuedefaut1.jpg)



Resumen 
------



El Fibaro Wall Plug es un receptor-zócalo-transmisor universal bajo
forma de un adaptador para enchufar a una toma de corriente a la red
eléctrico, compatible con el estándar Z-Wave. Te permite gestionar
cualquier dispositivo con una potencia máxima de 2.5kW, mientras
integrando la funcionalidad de medir la potencia activa de la corriente y
consumo de energía de dispositivos. Este módulo está equipado con un
anillo de luz con LEDs que indican su estado y consumo
de energía de cualquier dispositivo conectado. El enchufe de pared Fibaro puede ser
controlado por un botón en su carcasa o desde cualquier
Controlador compatible estándar Z-Wave



Funciones 
---------



-   Controlado desde un controlador compatible con el estándar Z-Wave.

-   Control de microchip.

-   Elemento de ejecución: Relé.

-   Medida de potencia activa de corriente y energía eléctrica
    del receptor.



Características técnicas 
---------------------------



-   Tipo de módulo : Receptor Z-Wave

-   Suministro : 230V, 50Hz

-   El consumo de energía : hasta 0.8W

-   Carga máxima : 2.5kW

-   Frecuencia : 868.42 Mhz UE

-   Distancia de transmisión : 50m de campo libre, 30m en interiores

-   Dimensions: 17 x 42 x 37 mm

-   Temperatura de funcionamiento : 0-40 ° C

-   Temperatura límite : 105°C

-   Normas : LVD (2006/95 / WE), EMC (2004/108 / EC), R & TTE (1999/5 / WE)



Datos del módulo 
-----------------



-   Hacer : Grupo Fibar

-   Nombre : Enchufe de pared FGWPE-101

-   ID del fabricante : 271

-   Tipo de producto : 1536

-   ID del producto : 4096



Configuración 
-------------



Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).



> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón 3 veces
> botón de inclusión, de acuerdo con su documentación en papel.



![inclusion](images/fibaro.fgwpe101/inclusion.jpg)



Una vez incluido, deberías obtener esto :



![Plugin Zwave](images/fibaro.fgwpe101/information.jpg)



### Comandos 



Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.



![Comandos](images/fibaro.fgwpe101/commandes.jpg)



Aquí está la lista de comandos :



-   Estado : Es el comando que permite conocer el estado de la
    prise

-   Uno : Este es el comando que enciende la salida

-   Apagado : Es el comando que hace posible extinguir la captura

-   Potencia : Este es el comando que trae el poder instantáneo
    consumido

-   El consumo : Es el orden que informa el consumo total



Tenga en cuenta que en el tablero los comandos ON / OFF / STATUS están agrupados
en un botón.



### Configuracion del modulo 



Entonces, si desea configurar el módulo de acuerdo con
de su instalación, debe pasar por el botón
"Configuración "del complemento OpenZwave de Jeedom.



![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)



Llegará a esta página (después de hacer clic en la pestaña
configuraciones)



![Config1](images/fibaro.fgwpe101/config1.jpg)

![Config2](images/fibaro.fgwpe101/config2.jpg)

![Config3](images/fibaro.fgwpe101/config3.jpg)

![Config4](images/fibaro.fgwpe101/config4.jpg)



Detalles del parámetro :



-   1: permite bloquear el módulo siempre en ON

-   16: le permite recordar el último estado en caso de corte de energía
    courant

-   34: le permite elegir el tipo de alarma en la red Zwave
    debe reaccionar

-   35: le permite configurar cómo responderá la salida a las alarmas

-   39: establece la duración de la alarma

-   40: define cuánto debe variar el poder para ser
    aumento (en%)

-   42: igual que en el modo estándar (hasta 5 veces por paso definido en
    param 43)

-   43: intervalo de aumento de potencia

-   45: intervalo de aumento del consumo (en kWh 10 = 0.1 kWh)

-   47: intervalo en segundos de informe de información de forma independiente
    de una variación

-   49: tener en cuenta el consumo del propio módulo en el
    valeurs

-   50: valor mínimo utilizado por el parámetro 52

-   51: valor máximo utilizado por el parámetro 52

-   52: acción a tomar si el poder se sale de los límites definidos en
    parámetros 50 y 51

-   60: potencia más allá de la cual el enchufe parpadeará en púrpura

-   61: color cuando el enchufe está encendido

-   62: color cuando el enchufe está apagado

-   63: color cuando se detecta una alarma Zwave

-   70: energía de seguridad (el enchufe se cortará cuando la energía
    alcanzará este umbral)



### Grupos 



Este módulo tiene 3 grupos de asociación, solo el tercero es
indispensable.



![Groupe](images/fibaro.fgwpe101/groupe.jpg)



Bueno saber 
------------



### Restablecer 



![Config5](images/fibaro.fgwpe101/config5.jpg)



Puede restablecer su medidor de consumo haciendo clic en
en este botón disponible en la pestaña Sistema. Hay que elegir
PressButton.



### Visual alternativo 



![vuewidget](images/fibaro.fgwpe101/vuewidget.jpg)



Despertador 
------



No hay noción de activación en este módulo.



Faq. 
------



Lea la sección Restablecer de este documento.



**@sarakha63**
