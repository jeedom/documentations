Asegure SES 303 "Temperatura / Humedad" 
=====================================



-   **El módulo**



![module](images/secure.ses303/module.jpg)



-   **El visual de la libertad**



![vuedefaut1](images/secure.ses303/vuedefaut1.jpg)



Resumen 
------



La sonda SES303 permite la medición de la temperatura ambiente interior
así como la humedad. Está alimentado por 2 pilas AA y está certificado
Z-Wave Plus. Además de su función principal, es posible
conecte varias sondas seguras externas al módulo, es decir:

-   Un sensor de temperatura externo NTC (SES001)

-   4 sensores de temperatura con cable para manguera o tanque (SES002)
    conectado por cables de 1 m

-   1 sensor de temperatura con cable para manguera o tanque (SES003)
    conectado por un cable de 4 m

Estos módulos son ideales para la medición de temperatura en
aplicaciones de control de calefacción central o cualquier otra
aplicación similar. Su interfaz de usuario es simple, con un
pulsador local y un LED indicador en el panel posterior. Nosotros
puede incluirlo / excluirlo fácilmente en una red Z-Wave.



Funciones 
---------



-   Medición precisa de temperatura y humedad

-   Aplicación en sistemas de control dinámico
    tanques / tubos / pisos calentados /…

-   Posibilidad de conectar sensores externos

-   Interoperable con productos y sistemas certificados Z-Wave

-   Instalación rápida y fácil

-   Informe de batería baja



Características técnicas 
---------------------------



-   Type: Portátil / montaje en pared

-   Rango de medición de temperatura: ± 0.5 ° C para 0 ° C a 40 ° C

-   Chip Z-Wave Plus

-   Frecuencia : 868.42 Mhz

-   Alimentation: 2 pilas AA (LR6)

-   Alcance : hasta 100 m en campo libre

-   Indice de PROTECCION : IP30

-   Dimensiones : 86 x 85 x 30 mm



Datos del módulo 
-----------------



-   Hacer : Horstmann

-   Nombre : Sensor de temperatura y humedad SES 303

-   ID del fabricante : 89

-   Tipo de producto : 13

-   ID del producto : 3



Configuración 
-------------



Para configurar el complemento OpenZwave y saber cómo poner Jeedom en
inclusión refiérase a esto
[Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).



> **Importante**
>
> Para poner este módulo en modo de inclusión, presione 1 segundo en
> el botón en la parte posterior y suelte, de acuerdo con su documentación en papel.



![inclusion](images/secure.ses303/inclusion.jpg)



Una vez incluido, deberías obtener esto :



![Plugin Zwave](images/secure.ses303/information.jpg)



### Comandos 



Una vez que el módulo ha sido reconocido, los comandos asociados con el módulo serán
disponibles.



![Comandos](images/secure.ses303/commandes.jpg)



Aquí está la lista de comandos :



-   Temperatura : es el comando de medición de temperatura

-   Humedad : es el control de medición de humedad

-   Batería : es el comando de la batería

Varias temperaturas no visibles también están disponibles y serán
útil si ha conectado sondas externas



### Configuracion del modulo 



> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después
> inclusión.



Entonces es necesario configurar el módulo en
dependiendo de su instalación. Esto requiere pasar por el botón
"Configuración "del complemento OpenZwave de Jeedom.



![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)



Llegará a esta página (después de hacer clic en la pestaña
configuraciones)



![Config1](images/secure.ses303/config1.jpg)



Detalles del parámetro :



-   1: Ajusta cuánto debe variar la temperatura para
    el módulo lo envía a Jeedom (en pasos de 0.1)

-   2: Le permite configurar el intervalo de tiempo de envío de temperatura
    en Jeedom (en minutos)

-   3: Ajusta cuánto debe variar la humedad para que
    el módulo lo envía a Jeedom (por%)

-   4: Establece el intervalo de tiempo para enviar humedad a
    Jeedom (en minutos)

Todos los demás parámetros son idénticos y corresponden a todos
sondas externas posiblemente conectadas



### Grupos 



Este módulo tiene solo un grupo de asociación, es esencial



![Groupe](images/secure.ses303/groupe.jpg)



Bueno saber 
------------



### Específicos 



### Visual alternativo 



![widget1](images/secure.ses303/widget1.jpg)



Despertador 
------



Para activar este módulo, presione el botón en la parte posterior una vez



Faq. 
------



Este módulo se activa presionando una vez su botón de inclusión.



Este módulo es un módulo de batería, la nueva configuración será
tomado en cuenta en el próximo despertar.



Nota importante 
---------------



> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio
> de la configuración, después de un cambio de despertador, después de un
> cambio de grupos de asociación



**@sarakha63**
