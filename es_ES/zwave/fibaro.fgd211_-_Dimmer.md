# Atenuador Fibaro - FGD-211

**El módulo**

![module](images/fibaro.fgd211/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/fibaro.fgd211/vuedefaut1.jpg)

## Resumen

El micromódulo de atenuación FGD-211 le permitirá controlar una lámpara o luz de techo de forma remota utilizando el protocolo Z-Wave mientras mantiene su interruptor existente.

Por lo tanto, podrá operar la lámpara conectada y variar su intensidad utilizando el interruptor existente, un transmisor Z-Wave o directamente desde el botón del micromódulo. Es compatible con cualquier tipo de lámpara que admita regulación (incandescente, fluorescente compacta, LED, etc.)). El micromódulo dimmer Fibaro es un concentrado de tecnología, detecta automáticamente el tipo de carga conectada y está protegido contra sobretensiones.

Para las bombillas fluorescentes que no admiten la atenuación, el módulo actúa automáticamente como un módulo de interruptor (solo ON/OFF)).

Se puede utilizar en modo 2 hilos (sin neutro), reemplazando un interruptor existente, o en modo 3 hilos con un módulo de alimentación convencional (Fase + Neutro).

Para lámparas de muy bajo consumo (lámpara LED por ejemplo), se puede utilizar la carga (bypass) FGB-001 que permite el correcto funcionamiento del módulo. Se requiere un controlador Z-Wave (control remoto, dongle, etc.) para integrar este detector en su red si ya tiene una red existente. Cada módulo Z-Wave funciona como un repetidor inalámbrico con los demás módulos, para garantizar la cobertura total de su hogar.

## Fonctions

-   Controla la iluminación de forma remota
-   Se instala detrás de un interruptor existente
-   ON/OFF y función de atenuación
-   Uso en modo de 2 hilos (neutro no necesario))
-   Detección automática de carga
-   Protegido contra sobrecarga
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de mod : Receptor de onda Z
-   Alimento : 230V, 50Hz
-   Alambrado : neutro no es necesario
-   Carga maxima : 25-500W (carga resistiva) o 1.5A (carga inductiva)
-   Tipo de lámpara compatible (regulable) : Incandescente, Fluocopacta, Halógena (230VAC y 12VDC con transformador electrónico), LED
-   Tipo de lámpara compatible (no regulable)) : Fluorescente compacto, LED
-   Fusible : 2.5A
-   Frecuencia : 868.42Mhz
-   Distancia de transmisión : 50m campo abierto, 30m bajo techo
-   Dimensions: 15x42x36mm
-   Temperatura de funcionamiento : 0-40°C
-   Temperatura límite : 105°C
-   Estándares : EN 55015 y EN 60669-2-1

## Datos del módulo

-   Marca : Grupo fibar
-   Apellido : Fibaro FGMS-001 \[Sensor de movimiento\]
-   Identificación del fabricante : 271
-   Tipo Producto : 256
-   Identificación de producto : 4106

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/fibaro.fgd211/inclusion.jpg)

> **Consejo**
>
> Si ya has integrado tu módulo en la pared, puedes incluirlo haciendo muchos viajes de ida y vuelta en el interruptor o muchas pulsaciones si tienes un pulsador.

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/fibaro.fgd211/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/fibaro.fgd211/commandes.jpg)

Aquí está la lista de comandos :

-   Intensidad : Este es el control que te permite ajustar la intensidad de la luz
-   Nosotros : Este es el comando que enciende la luz
-   Apagado : Este es el comando que apaga la luz
-   Estado : Este es el comando que le permite saber el estado de la luz

Tenga en cuenta que en el panel de control toda la información se encuentra en el mismo icono

### Configuración del módulo

Puede configurar el módulo de acuerdo a su instalación. Para hacer esto, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/fibaro.fgd211/config1.jpg)

![Config2](images/fibaro.fgd211/config2.jpg)

![Config3](images/fibaro.fgd211/config3.jpg)

Detalles del parámetro :

-   1: Funciones TODO ENCENDIDO / TODO APAGADO : se usa solo si ha asociado el FGD-211 con otro módulo
-   6: digamos cómo se envía la información al grupo de asociación 1
-   7: permite comprobar o no el estado del módulo asociado antes de enviar un comando
-   8: le permite definir el porcentaje de variación (auto)
-   9: duración de la variación entre los dos extremos (manual)
-   10: duración de la variación entre los dos extremos (auto)
-   11: permite definir el porcentaje de variación (manual)
-   12: le permite definir el nivel máximo permitido
-   13: le permite definir el nivel mínimo permitido
-   14: CONFIGURACIÓN IMPORTANTE : permite elegir entre un interruptor BIESTABLE o MONOESTABLE (pulsador)
-   15: activa la opción de poner el brillo al máximo con doble pulsación (o adelante y atrás en biestable))
-   16: opción para habilitar el recuerdo del último estado
-   17: le permite elegir entre el modo de ida y vuelta y el modo de control remoto
-   18: permite sincronizar el nivel de regulación con los demás reguladores asociados
-   19: modo de funcionamiento del interruptor biestable (inversión o no)
-   20: le permite ajustar el nivel mínimo para bombillas LED regulables, por ejemplo
-   30: le permite definir el modo de funcionamiento del módulo en caso de recepción de una señal de alarma de difusión
-   39: duración de la alarma definida en el parámetro 30
-   41: permite activar o no la función de Activaciones de Escenas

### Groupes

Este módulo tiene tres grupos de asociación, solo el tercero es imprescindible.

![Groupe](images/fibaro.fgd211/groupe.jpg)

## Bueno saber

### Especificidades

> **Fianza**
>
> El parámetro más importante de la configuración es el 14. Permite elegir el tipo de interruptor utilizado. De forma predeterminada, el tipo se establece en monoestable.

Si desea excluir/incluir el módulo sin desmontar su interruptor, puede presionar su interruptor varias veces (o retroceder y retroceder en el caso de un interruptor biestable))

### Visuales alternativos

![vuewidget](images/fibaro.fgd211/vuewidget.jpg)

## Wakeup

No hay noción de despertar en este módulo.

## Preguntas frecuentes.

No. este módulo se puede incluir o excluir presionando el interruptor varias veces.
