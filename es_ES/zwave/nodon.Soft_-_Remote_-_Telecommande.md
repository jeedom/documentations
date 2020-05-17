# Mediodía Télécommande - Soft Remote

**El módulo**

![module](images/nodon.softremote/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/nodon.softremote/vuedefaut1.png)

## Resumen

El Soft Remote NodOn® puede controlar directamente cualquier dispositivo compatible con Z-Wave® o Z-Wave Plus®, como el enchufe inteligente NodOn®.

También puede activar escenas a través de un centro de automatización del hogar compatible.

## Funciones

-   Controla cualquier dispositivo compatible con Z-Wave
-   Resistente a golpes y salpicaduras
-   Se adhiere a todas partes gracias a su imán integrado
-   6 colores disponibles

## Características técnicas

-   Suministro : Batería CR2032 - Autonomía 1,5 - 2 años
-   4 botones
-   Imán integrado para fijación a superficie metálica
-   Resistente a golpes y salpicaduras
-   Temperatura de funcionamiento : 0 ° C a 40 ° C - Altitud : 2000m
-   Protocolo de radio Z-Wave® : 868.4MHz - Serie 500 - Compatible con Z-Wave Plus® SDK 06.51.06
-   Alcance : 40m en interiores / 80m en exteriores
-   Dimensiones 56 \*56 \*20mm
-   2 años de garantia

## Datos del módulo

-   Hacer : Nodon
-   Nombre : CRC-3-6-0x Control remoto suave
-   ID del fabricante : 357
-   Tipo de producto : 2
-   ID del producto : 2

## Configuración

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione los dos botones (+ y 0 completos) hasta que la luz se vuelva rosa, luego presione el botón +, de acuerdo con su documentación en papel.

![inclusion](images/nodon.softremote/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/nodon.softremote/information.png)

### Comandos

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/nodon.softremote/commandes.png)

Aquí está la lista de comandos :

-   Botones : es el comando que empujará el botón hacia arriba

+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| Botones        | Apoyo          | Pulsación larga     | Relajamiento    | Doble soporte   |
+ ================ + ================ + ================ = + ================ + ================= +
| **1 (0         | 10             | 12             | 11             | 13             |
| completo)**       |                |                |                |                |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **2 (+)**      | 20             | 22             | 21             | 23             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **3 (0 vacío)** | 30             | 32             | 31             | 33             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +
| **4 (-)**      | 40             | 42             | 41             | 43             |
+ ---------------- + ---------------- + --------------- - + ---------------- + ---------------- +

-   Batería : es el comando que eleva el nivel de las baterías

### Configuración du module

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/nodon.softremote/config1.png)

Detalles del parámetro :

-   1-2 : Le permite elegir el perfil de los botones cuando se usa centralmente (inútil para usar en Jeedom)
-   3 : Parámetro importante para decir si el interruptor debe funcionar en el modo Escena o Escena central (escena configurada absolutamente)
-   4-7 : Elija el modo de operación del botón (en caso de asociaciones de grupo)
-   8 : Le permite elegir el modo de funcionamiento del LED

### Grupos

Este módulo tiene 7 grupos de asociación.

![Groupe](images/nodon.softremote/groupe.png)

-   Grupo 1 - Línea de vida : Este grupo se usa generalmente para informar información del Smart Plug al controlador de red principal.
-   Grupo 2 a 5: los dispositivos de estos grupos se controlan mediante el botón correspondiente según el perfil MONO
-   Grupo 6 a 7: los dispositivos de estos grupos se controlan mediante los botones correspondientes según el perfil DUO

> **Importante**
>
> Al menos Jeedom debería terminar en el grupo 1

## Bueno saber

### Específicos

-   Este módulo puede ser complicado en la inclusión. No dudes en despertarlo 1 o 2 veces después de la inclusión. Bueno revisa el grupo de asociación.

## Despertador

Para activar este módulo, solo presione uno de los botones

## Nota importante

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio en la configuración, después de un cambio en la activación, después de un cambio en los grupos de asociación
