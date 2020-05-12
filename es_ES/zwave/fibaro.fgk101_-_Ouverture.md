# Detector de apertura Fibaro - FGK-101

**El módulo**

![module](images/fibaro.fgk101-DS18B20/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/fibaro.fgk101-DS18B20/vuedefaut1.jpg)

# Resumen

Este detector compatible con baterías y Z-Wave tiene un sensor de láminas, un interruptor de proximidad con operación magnética, que detecta la apertura de una puerta o ventana cuando los dos elementos están distantes.

El dispositivo consta de una parte con un imán (la parte móvil), fijada en la puerta o ventana, así como la unidad principal colocada en la parte fija de la ventana / puerta con tornillos o un adhesivo. Cuando las dos partes ya no son opuestas, se envía automáticamente una señal de radio Z-Wave.

Además, este detector tiene una entrada analógica para conectar una sonda de temperatura DS18B20 de 1 cable. Este detector también tiene una entrada cableada, por lo que puede usarse como transmisor universal : deje de lado su contacto magnético y conecte sus entradas de tornillo a cualquier detector (normalmente cerrado) de su elección, como un detector de humo, gas o monóxido de carbono, etc.

Es necesario un controlador Z-Wave (control remoto, dongle, etc.) para integrar este detector en su red si ya tiene una red existente.

## Fonctions

-   Detector de apertura
-   Botón para incluir / excluir el detector
-   Detección de batería baja
-   Protección contra manipulaciones
-   1 entrada cableada sin potencial
-   1 entrada analógica de 1 cable (para conectar una sonda de temperatura DS18B20)
-   Muy pequeño, dimensiones reducidas
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de módulo : Transmisor de onda Z
-   Color : Blanco (FGK-101/102/103/104/105/106/107 según el color)
-   Suministro : Batería ER14250 (1 / 2AA) 3.6V
-   Frecuencia : 868.42 Mhz
-   Distancia de transmisión : 50m de campo libre, 30m en interiores
-   Dimensions: 76 x 17 x 19 mm
-   Temperatura de funcionamiento : 0-40 ° C

## Datos del módulo

-   Hacer : Grupo Fibar
-   Nombre : Fibaro FGK-101 con sonda de temperatura (DS18B20)
-   ID del fabricante : 271
-   Tipo de producto : 1792
-   ID del producto : 4096

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/fibaro.fgk101-DS18B20/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/fibaro.fgk101-DS18B20/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/fibaro.fgk101-DS18B20/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : es el comando que elevará el estado abierto o cerrado del módulo
-   Batería : Es el comando que permite volver al estado de la batería

Puede ocultar o mostrar estos comandos como desee.

### Configuracion del modulo

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/fibaro.fgk101-DS18B20/config1.jpg)

![Config2](images/fibaro.fgk101-DS18B20/config2.jpg)

Detalles del parámetro :

-   Despertador : Este es el intervalo de activación del módulo (valor recomendado 7200)
-   1: establece el retraso para cancelar la alarma de entrada IN (contacto seco)
-   2: le permite elegir si el led azul debería parpadear al abrir y cerrar la puerta, por ejemplo
-   3: se usa para definir el tipo de contacto conectado al bloque de terminales (IN)
-   5: no se recomienda cambiar este parámetro a menos que sepa por qué (define el tipo de señal enviada al grupo de asociación 1)
-   7: valor enviado al grupo de asociación 1
-   9: le permite configurar el envío de la señal de cancelación entre la entrada IN y el grupo de asociación 1
-   12: permite ajustar la sensibilidad al cambio de temperatura (si una sonda de 1 cable está conectada al módulo)
-   13: Permite configurar el modo de transmisión de señales de temperatura y almacenar
-   14: activa la función de activación de escena

### Groupes

Este módulo tiene tres grupos de asociación, solo el tercero es esencial.

![Groupe](images/fibaro.fgk101-DS18B20/groupe.jpg)

## Bueno saber

### Específicos

> **Punta**
>
> Este módulo es muy quisquilloso al despertar y requiere una proximidad muy cercana al controlador cuando está incluido

### Visual alternativo

![vuewidget](images/fibaro.fgk101-DS18B20/vuewidget.jpg)

## Wakeup

Para activar este módulo, solo hay una forma :

-   presione el botón de inclusión 3/4 veces. Puede ser necesario hacer esto varias veces seguidas (2 o 3)

## Faq.

Este módulo se activa presionando 3 veces en uno de los botones de manipulación. Pero el otro botón de manipulación debe ser presionado.

Este módulo tiene un rango muy bajo. Es recomendable incluirlo tan cerca de su casilla.

Este módulo es un módulo de batería, la nueva configuración se tendrá en cuenta en la próxima activación.

## Nota importante

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio en la configuración, después de un cambio en la activación, después de un cambio en los grupos de asociación
