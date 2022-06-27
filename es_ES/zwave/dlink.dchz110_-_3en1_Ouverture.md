# D-Link DCH-Z110 - "Apertura 3 en 1"

**El módulo**

![module](images/dlink.dchz110/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/dlink.dchz110/vuedefaut1.jpg)

## Resumen

El detector DCH-Z110 ofrece 3 funciones diferentes : detección de apertura, sensor de temperatura y detector de luminosidad. Está formado por dos partes : un detector y un imán. Están diseñadas para colocarse en una puerta o ventana con el imán fijado en la parte que abre y el detector en la parte fija.

Al abrir la puerta o la ventana, el imán se alejará del detector, lo que activará el detector que enviará una señal de alarma Z-Wave, si el sistema está armado (esta señal puede ser operada por una sirena o por una caja de automatización del hogar para ejemplo). El sensor también se puede utilizar para el control automático de la iluminación, dependiendo del nivel de luz. Por ejemplo, el sensor enviará una señal al interruptor Z-Wave para encender la luz cuando la puerta se abra y la habitación esté oscura.

El detector también aumentará el brillo y la temperatura, ya sea en caso de un cambio significativo, y cada vez que se detecte la apertura/cierre. Se necesita un controlador Z-Wave (control remoto, dongle...?) para integrar este detector en su red si ya tiene una red existente.

## Fonctions

-   Detector 3 en 1: Apertura, temperatura, luz
-   Rango de antena optimizado
-   Uso para aplicaciones de seguridad o domótica
-   Botón para incluir/excluir el detector
-   Autoprotection
-   Indicación de batería baja
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

Sitio [oficial](http://www.dlink.com/-/media/Consumer_Products/DCH/DCH%20Z110/Datasheet/DCH_Z110_Datasheet_FR.pdf)

Otro enlace [técnico](http://www.kafkas.gr/uploads/Pdf/182732/DCH-Z120_183010381_01_Z02.PDF)

![caracteristiques techniques](images/dlink.dchz110/caracteristiques_techniques.jpg)

## Datos del módulo

-   Marca : D-Link
-   Modelo : DCH-Z110 mydlink™ Sensor de puerta y ventana para el hogar
-   Fabricante : Sistema FIBARO
-   Identificación del fabricante : 264 \[0x0108\]
-   Tipo Producto : 2 \[0x0002\]
-   Identificación de producto : 14 \[0x000e\]

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> No instale el módulo en la ventana/puerta antes de configurarlo correctamente, y preste mucha atención a la alineación del imán cuando pruebe en una superficie plana y durante la instalación. (Use cuñas si es necesario) Para poner este módulo en modo de inclusión, presione el botón de asociación 3 veces en 1.5 segundos, según su documentación. (parpadeo rojo constante en modo de emparejamiento)

![config inclusion](images/dlink.dchz110/config-inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/dlink.dchz110/apres_inclusion.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/dlink.dchz110/commandes.jpg)

Aquí está la lista de comandos :

-   Apertura : este es el comando que reportará una detección de apertura
-   La temperatura : este es el comando que te permite subir la temperatura
-   Brillo : este es el comando que te permite aumentar el brillo
-   Sabotaje : este es el comando de sabotaje (se activa en caso de rotura)
-   Batería : este es el comando de la bateria

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, o una modificación, guarde y siempre despierte el módulo presionando el botón de asociación. Debería parpadear en rojo y cambiar de estado.

Luego es necesario configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/dlink.dchz110/config1.jpg)

![Config2](images/dlink.dchz110/config2.jpg)

Detalles del parámetro :

-   2: ajusta la señal enviada a los módulos en el grupo de asociación 2
-   4: permite configurar el nivel de luminosidad a partir del cual se enviará la señal definida en el parámetro 2 a los módulos asociados al grupo 2
-   5: modo de funcionamiento (consulte la documentación del fabricante)
-   6: modo de funcionamiento multisensor (consulte la documentación del fabricante). Valor recomendado : 7
-   7: modo de funcionamiento personalizado del multisensor (consulte la documentación del fabricante). Valor recomendado : 20 (para tener la apertura funcional)
-   9: permite definir después de cuánto tiempo se enviará la señal de APAGADO a los módulos asociados al grupo 2
-   10: le permite definir la duración entre dos informes de batería (una unidad = parámetro 20)
-   11: le permite definir la duración entre dos relaciones de apertura automática (una unidad = parámetro 20)
-   12: le permite definir la duración entre dos proporciones de brillo automático (una unidad = parámetro 20). Valor recomendado : 6
-   13: le permite definir la duración entre dos informes automáticos de temperatura (una unidad = parámetro 20). Valor recomendado : 2
-   20: duración de un intervalo para los parámetros 10 a 13. Valor recomendado : 10
-   21: valor de variación en °F de la temperatura para activar un informe
-   22: valor en % de variación de brillo para activar un informe. Valor recomendado : 10

### Groupes

Este módulo tiene dos grupos de asociación, solo el primero es imprescindible.

![Groupe](images/dlink.dchz110/groupe.jpg)

## Bueno saber

Posible asociación/notificación con otros módulos (ejemplo: Sirena DCH-Z510 notificación de timbre en la apertura de puertas/ventanas)

## Wakeup

Para activar este módulo solo hay una forma de proceder :

-   Suelte el botón de emparejamiento y vuelva a presionarlo
-   Reducir el intervalo de activación en la configuración del módulo/sistema (en segundos))

## Preguntas frecuentes.

Este módulo se despierta presionando su botón de asociación.

Este módulo es un módulo alimentado por batería, la nueva configuración se tendrá en cuenta en la próxima activación. (botón de asociación para forzarlo, de ahí el interés de no montar el módulo antes de su correcta configuración)

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
