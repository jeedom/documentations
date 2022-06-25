# Philio psp01

**El módulo**

![module](images/philio.psp01/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/philio.psp01/vuedefaut1.jpg)

## Resumen

El detector PSP01 ofrece 3 funciones diferentes : detección de movimiento, sensor de temperatura y sensor de luz.

Este detector se puede utilizar para la seguridad o para la automatización. Cuando el detector está asociado con dispositivos de seguridad, sirve como disparador de alerta al detectar cambios en los niveles de radiación infrarroja. Si una persona se mueve dentro del campo de visión del detector, se transmite una señal de radio que activa una alarma para disuadir a los intrusos.

El detector también se puede utilizar junto con un controlador Z-Wave para fines de automatización del hogar, detectando tanto cambios en los niveles de radiación infrarroja (presencia) como cambios en el nivel de luz. Por lo tanto, la iluminación se puede activar cuando se detecta movimiento en la oscuridad.

El detector también aumentará el brillo y la temperatura, ya sea en caso de un cambio significativo, y cada vez que se detecte un movimiento. Se requiere un controlador Z-Wave (control remoto, dongle, etc.) para integrar este detector en su red si ya tiene una red existente.

## Fonctions

-   Detector 3 en 1: movimiento, temperatura, luz
-   Adopta el chip de la serie Z-Wave 400 reciente para admitir la operación multicanal y una velocidad de datos más alta (9.6/40/100 kbps)
-   Utiliza Z-Wave SDK 6.02
-   Rango de antena optimizado
-   Uso para aplicaciones de seguridad o domótica
-   Botón para incluir/excluir el detector
-   Autoprotection
-   Indicación de batería baja
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de mod : Transmisor de onda Z
-   Alimento : 1 batería CR123A de 3 V
-   Duración de la batería : 2 años
-   Frecuencia : 868.42 MHz
-   Distancia de transmisión : 30m en interiores
-   Sensor de temperatura : -10 a 70°C
-   Sensor de luz : 0 a 500 lux
-   Ángulo de detección PIR : 90°
-   Rango de detección PIR : 8 a 10m
-   Dimensiones : 28x96x23mm
-   Peso : 39g
-   Temperatura de funcionamiento : -10 a 40°C
-   Humedad de funcionamiento : 85%HR máx
-   Norma CE : EN300 220-1
-   Certificación Z-Wave : ZC08-13050003

## Datos del módulo

-   Marca : Corporación de Tecnología Philio
-   Apellido : Philio psp01
-   Identificación del fabricante : 316
-   Tipo Producto : 2
-   Identificación de producto : 2

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, debe presionar el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/philio.psp01/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/philio.psp01/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/philio.psp01/commandes.jpg)

Aquí está la lista de comandos :

-   Presencia : este es el comando que reportará una detección de presencia
-   Apertura : este es el comando que reportará una detección de apertura
-   La temperatura : este es el comando que te permite subir la temperatura
-   Brillo : este es el comando que te permite aumentar el brillo
-   Sabotaje : este es el comando de sabotaje (se activa en caso de rotura)
-   Batería : este es el comando de la bateria

Todos los módulos de la gama tienen los mismos identificadores, depende de usted mostrar los correspondientes a su módulo.

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/philio.psp01/config1.jpg)

![Config2](images/philio.psp01/config2.jpg)

Detalles del parámetro :

-   2: ajusta la señal enviada a los módulos en el grupo de asociación 2
-   3: regula la sensibilidad del sensor de presencia (0 : discapacitado 99: sensibilidad máxima)
-   4: permite ajustar el nivel de brillo a partir del cual se enviará la señal definida en el parámetro 2 a los módulos asociados al grupo 2
-   5: modo de funcionamiento (no se recomienda cambiarlo : consulte la documentación del fabricante)
-   6: modo de funcionamiento del multisensor (no se recomienda cambiarlo : consulte la documentación del fabricante)
-   9: permite definir después de cuánto tiempo se enviará la señal de APAGADO a los módulos asociados al grupo 2
-   10: le permite definir la duración entre dos informes de batería (una unidad = 30 minutos)
-   12: le permite definir la duración entre dos informes de luminosidad (una unidad = 30 minutos)
-   13: le permite definir la duración entre dos informes de temperatura (una unidad = 30 minutos)

### Groupes

Este módulo tiene dos grupos de asociación, solo el primero es imprescindible.

![Groupe](images/philio.psp01/groupe.jpg)

## Bueno saber

### Especificidades

> **Consejo**
>
> Este módulo tiene una particularidad, al no tener reporte basado en variaciones sino solo en duración, envía toda su información en cada detección. También envía la señal de detección de presencia varias veces después. Por lo tanto, es recomendable marcar la casilla "Evento en cambio" en la presencia si usa este comando como desencadenante de escenario.

## Wakeup

Para activar este módulo solo hay una forma de proceder :

-   suelte el botón de manipulación y vuelva a presionarlo

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wakeup, tras un cambio de grupos de asociación
