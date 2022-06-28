# Enchufe inteligente Nodon - Enchufe inteligente

**El módulo**

![module](images/nodon.smartplug/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/nodon.smartplug/vuedefaut1.jpg)

## Resumen

El enchufe controlado a distancia NodOn® se puede controlar a través de una unidad de automatización del hogar compatible con Z-Wave® o Z-Wave Plus® o directamente a través de otros controladores Z-Wave® o Z-Wave Plus® como el Soft Remote, el interruptor de pared o el control remoto Octan NodOn®. Estándar alemán (Schuko) o francés (Tipo E), el enchufe se puede enchufar en ambas direcciones, al revés o al revés. Combinadas con su diseño delgado, estas 2 características permiten una fácil integración, sin bloquear los barriles vecinos en una regleta. Aprender el zócalo con su controlador solo lleva unos segundos. Un botón local permite encender o apagar el enchufe directamente.

## Fonctions

-   Detección de pérdida de alimentación de red
-   Ergonomique: Posibilidad de conectar el enchufe cabeza arriba/cabeza abajo
-   Gestión inteligente de alarmas
-   Alcance de radio mejorado
-   Amperaje máximo: 16A

## Características técnicas

-   Alimento : 230V CA +/-10% - 50Hz
-   Máximo poder : 3000W continuo / 3500W cíclico (Carga resistiva) Consumo intrínseco : &lt;1W
-   Temperatura de funcionamiento : 0°C a 40°C - Altitud : 2000m
-   Protocolo inalámbrico Z-Wave® : 868.4MHz – Serie 500 – Compatible Z-Wave Plus® SDK 06.51.01
-   Alcance: 40m interior / 80m exterior
-   Dimensions: 104\*51\*36mm
-   2 años de garantía
-   Tipo UE

## Datos del módulo

-   Marca : Nodon
-   Apellido : Smartplug
-   Identificación del fabricante : 357
-   Tipo Producto : 1
-   Identificación de producto : 1

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón hasta que la luz se vuelva roja, de acuerdo con su documentación en papel.

![inclusion](images/nodon.smartplug/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/nodon.smartplug/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/nodon.smartplug/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : Este es el comando que le permite conocer el estado del socket (On/Off)
-   Nosotros : Este es el comando que le permite encender el zócalo
-   Apagado : Este es el comando que le permite apagar el zócalo
-   Estado : Permite saber si la toma está alimentada o no (detección/desconexión de corte de corriente))

Tenga en cuenta que en el tablero, la información de Estado, ENCENDIDO/APAGADO se encuentra en el mismo icono.

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento Jeedom Zwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/nodon.smartplug/config1.jpg)

![Config1](images/nodon.smartplug/config2.jpg)

Detalles del parámetro :

-   1 : Este parámetro define el estado (ON/OFF) del Smart Plug después de un corte de energía o después de enchufarlo
-   2 : Este parámetro se utiliza para configurar los informes de notificación de falla/retorno de energía, así como los grupos asociados (Grupos 4, 5, 6, 7, 8). Son posibles varias combinaciones (consulte la documentación en papel o la burbuja de ayuda en jeedom). Se recomienda establecer este parámetro en 1.
-   3 : Este parámetro habilita o deshabilita los grupos 2 y 3.
-   4 : Le paramètre force l'état de la Smart Plug à « ON » (Smart Plug activée). Cuando el parámetro está activado, no es posible apagar el Smart Plug (local o radio))
-   Parámetros 5 a 20 : A través de los parámetros de configuración \#5 à \#20, es posible configurar hasta 8 alarmas diferentes. Para configurar correctamente sus alarmas, el formulario en línea: www.nodón.es/support/asp3/alarm lo guiará

### Groupes

Este módulo tiene 8 grupos de asociación.

![Groupe](images/nodon.smartplug/groupe.jpg)

-   Grupo 1 – Línea de vida : Este grupo generalmente se usa para reportar información del Smart Plug al controlador de red principal.
-   Grupo 2 – Supervisión del estado del Smart Plug Cuando el Smart Plug se activa (respectivamente desactiva) a través del botón local, envía un comando de activación (respectivamente desactivación) a los dispositivos asociados. No se envía ningún mando si el cambio de estado del Smart Plug ha sido provocado por un mando vía radio
-   Grupo 3 – Monitoreo de estado complementario Cuando el Smart Plug se activa (respectivamente desactiva) a través del botón local, envía un comando de desactivación (respectivamente activación) a los dispositivos asociados. No se envía ningún mando si el cambio de estado del Smart Plug ha sido provocado por un mando vía radio.
-   Grupo 4: Notificación de falla de energía Cuando el enchufe inteligente detecta una falla de energía o un retorno de energía, se envía un informe de notificación a los dispositivos asociados. Le rapport envoyé est un « Notiﬁcation Report : Administración de energía: CA desconectada/reconectada).
-   Grupo 5 – Activación en caso de corte de corriente Cuando el Smart Plug detecta un corte de corriente, activa los dispositivos asociados.
-   Grupo 6 – Desactivación por corte de corriente Cuando el Smart Plug detecta un corte de corriente, desactiva los dispositivos asociados
-   Grupo 7 – Activación en retorno de energía Cuando el Smart Plug detecta un retorno de energía, activa los dispositivos asociados.
-   Grupo 8 – Desactivación en retorno de energía Cuando el Smart Plug detecta un retorno de energía, desactiva los dispositivos asociados

> **Importante**
>
> Al menos Jeedom debería estar en los grupos 1 y 4

## Bueno saber

### Especificidades

-   No es necesario preocuparse por enchufar/desenchufar el enchufe para observar la alarma. Este solo funcionará unas 3 veces. Más allá de eso, el enchufe debe permanecer encendido por un corto tiempo para recargar la batería interna.

## Wakeup

No hay noción de despertar en este módulo.
