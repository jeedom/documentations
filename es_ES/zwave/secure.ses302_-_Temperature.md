# Seguro SES 302 "Temperatura"

**El módulo**

![module](images/secure.ses302/module.jpg)

**El jeedom visual**

![vuedefaut1](images/secure.ses302/vuedefaut1.jpg)

## Resumen

La sonda SES302 se utiliza para medir la temperatura ambiente interior. Funciona con 2 pilas AA y cuenta con la certificación Z-Wave Plus. Además de su función principal, es posible cablear varias sondas SECURE externas al módulo, ya sea:

-   Un sensor de temperatura NTC externo (SES001)
-   4 sensores de temperatura cableados para tubería o tanque (SES002) conectados por cables de 1m
-   1 sensor de temperatura cableado para tubería o tanque (SES003) conectado por un cable de 4m

Estos módulos son ideales para la medición de temperatura en aplicaciones de control de calefacción central o cualquier otra aplicación similar. Su interfaz de usuario es sencilla, con un pulsador local y un LED indicador en el panel trasero. Uno puede incluirlo/excluirlo fácilmente en una red Z-Wave.

## Fonctions

-   Medición precisa de la temperatura
-   Aplicación en sistemas de control dinámico de depósitos/tubos/suelos radiantes/…​
-   Posibilidad de conectar sondas externas
-   Interoperable con productos y sistemas Z-Wave certificados
-   Instalación rápida y fácil
-   Informe de batería baja

## Características técnicas

-   Type: Portátil/montado en la pared
-   Rango de medición de temperatura: ±0.5°C para 0°C a 40°C
-   Chip Z-Wave Plus
-   Frecuencia : 868.42Mhz
-   Alimentation: 2 pilas AA (LR6)
-   Alcance : hasta 100 m en campo libre
-   Indice de PROTECCION : IP30
-   Dimensiones : 86x85x30mm

## Datos del módulo

-   Marca : Horstmann
-   Apellido : Sensor de temperatura SES 302
-   Identificación del fabricante : 89
-   Tipo Producto : 13
-   Identificación de producto : 2

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar el botón en la parte posterior durante 1 segundo y soltarlo, de acuerdo con su documentación en papel.

![inclusion](images/secure.ses302/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/secure.ses302/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/secure.ses302/commandes.jpg)

Aquí está la lista de comandos :

-   La temperatura : este es el comando de medición de temperatura
-   Batería : este es el comando de la bateria

Varias temperaturas no visibles también están disponibles y serán útiles si tiene conectadas sondas externas

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego es necesario configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/secure.ses302/config1.jpg)

Detalles del parámetro :

-   1: Le permite establecer cuánto debe variar la temperatura para que el módulo la envíe a Jeedom (en pasos de 0.1)
-   2: Le permite establecer el intervalo de tiempo para enviar la temperatura a Jeedom (en minutos)

Todos los demás parámetros son idénticos y corresponden a todas las sondas externas que se pueden conectar

### Groupes

Este módulo tiene un solo grupo de asociación, es imprescindible

![Groupe](images/secure.ses302/groupe.jpg)

## Wakeup

Para activar este módulo, presione el botón en la parte posterior una vez

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wake up, tras un cambio de grupos de asociación
