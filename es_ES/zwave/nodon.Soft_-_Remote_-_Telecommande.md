# 

**El módulo**

![module](images/nodon.softremote/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/nodon.softremote/vuedefaut1.png)

## Resumen

.

.

## Fonctions

-   
-   
-   
-   

## Características técnicas

-   Alimento : Pila CR2032 – Autonomía 1,5 - 2 años
-   4 botones
-   
-   
-   Temperatura de funcionamiento :  : 2000m
-   Protocolo inalámbrico Z-Wave® : 868.4MHz – Serie 500 – Compatible Z-Wave Plus® SDK 06.51.06
-   Alcance : 
-   **20mm
-   2 años de garantía

## Datos del módulo

-   Marca : Nodon
-   Apellido : 
-   Identificación del fabricante : 357
-   Tipo Producto : 2
-   Identificación de producto : 2

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> .

![inclusion](images/nodon.softremote/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/nodon.softremote/information.png)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/nodon.softremote/commandes.png)

Aquí está la lista de comandos :

-   Botones : este es el comando que levantara el boton presionado

+----------------+----------------+--------------- -++----------------+----------------+
| Botones        | Apoyo          | Pulsación larga     | Liberar    | Soporte doble   |
+================+================+=============== =+================+================+
| **         | 10             | 12             | 11             | 13             |
| plein)**       |                |                |                |                |
+----------------+----------------+--------------- -++----------------+----------------+
| **)**      | 20             | 22             | 21             | 23             |
+----------------+----------------+--------------- -++----------------+----------------+
| **)** | 30             | 32             | 31             | 33             |
+----------------+----------------+--------------- -++----------------+----------------+
| **4 (-)**      | 40             | 42             | 41             | 43             |
+----------------+----------------+--------------- -++----------------+----------------+

-   Batería : 

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/nodon.softremote/config1.png)

Detalles del parámetro :

-   1-2 : Le permite elegir el perfil de los botones en caso de uso central (inútil para usar en Jeedom)
-   3 : Parámetro importante para decir si el interruptor debe funcionar en el modo Escena o Escena central (Absolutamente poner Escena)
-   4-7 : Elegir el modo de funcionamiento de los botones (en caso de asociaciones de grupos)
-   8 : Le permite elegir el modo de funcionamiento del LED

### Groupes

Este módulo tiene 7 grupos de asociación.

![Groupe](images/nodon.softremote/groupe.png)

-   Grupo 1 – Línea de vida : Este grupo generalmente se usa para reportar información del Smart Plug al controlador de red principal.
-   Grupo 2 a 5: los dispositivos de estos grupos se controlan mediante el botón correspondiente según el perfil MONO
-   

> **Importante**
>
> Al menos Jeedom debería terminar en el grupo 1

## Bueno saber

### Especificidades

-   Este módulo puede ser temperamental cuando se incluye. No dude en despertarlo una o dos veces después de la inclusión. Bueno, revisa el grupo de la asociación.

## Wakeup



## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
