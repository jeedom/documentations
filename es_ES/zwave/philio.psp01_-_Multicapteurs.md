# Philio PSP01

**El módulo**

![module](images/philio.psp01/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/philio.psp01/vuedefaut1.jpg)

## Resumen

El detector PSP01 ofrece 3 funciones diferentes : detección de movimiento, sensor de temperatura y sensor de luz.

Este detector puede usarse para seguridad o para automatización. Cuando el detector está asociado con dispositivos de seguridad, sirve como un disparador de alerta al detectar cambios en los niveles de radiación infrarroja. Si una persona se mueve dentro del campo de visión del detector, se transmite una señal de radio, que activa una alarma para disuadir a los intrusos.

El detector también se puede usar en combinación con un controlador Z-Wave para fines de automatización del hogar, detectando tanto los cambios en los niveles de radiación infrarroja (presencia) como los cambios en el nivel de brillo. Por lo tanto, podemos activar una luz al detectar movimiento en la oscuridad.

El detector también aumentará el brillo y la temperatura, es decir, en caso de un cambio significativo, y cada vez que se detecte un movimiento. Es necesario un controlador Z-Wave (control remoto, dongle, etc.) para integrar este detector en su red si ya tiene una red existente.

## Funciones

-   Detector 3 en 1: movimiento, temperatura, luz
-   Adopta el reciente chip de la serie Z-Wave 400 para admitir operaciones multicanal y un mayor rendimiento de datos (9.6 / 40 / 100kbps)
-   Utiliza el SDK de Z-Wave 6.02
-   Rango de antena optimizado
-   Uso para aplicaciones de domótica o seguridad
-   Botón para incluir / excluir el detector
-   Autoprotection
-   Indicación de batería baja
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

## Características técnicas

-   Tipo de módulo : Transmisor de onda Z
-   Suministro : 1 batería CR123A 3V
-   Duración de la batería : 2 años
-   Frecuencia : 868.42 MHz
-   Distancia de transmisión : 30m en interiores
-   Sensor de temperatura : -10 a 70 ° C
-   Sensor de brillo : 0 a 500 lux
-   Ángulo de detección PIR : 90 °
-   Rango de detección PIR : 8 a 10m
-   Dimensiones : 28 x 96 x 23 mm
-   Peso : 39g
-   Temperatura de funcionamiento : -10 a 40 ° C
-   Humedad de funcionamiento : 85% HR máx
-   Norma CE : EN300 220-1
-   Certificación Z-Wave : ZC08-13050003

## Datos del módulo

-   Hacer : Philio Technology Corporation
-   Nombre : Philio PSP01
-   ID del fabricante : 316
-   Tipo de producto : 2
-   ID del producto : 2

## Configuración

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/philio.psp01/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/philio.psp01/information.jpg)

### Comandos

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/philio.psp01/commandes.jpg)

Aquí está la lista de comandos :

-   Presencia : es el comando que detectará una detección de presencia
-   Apertura : es el comando que generará una detección de apertura
-   Temperatura : es el comando que hace posible elevar la temperatura
-   Brillo : es el comando que hace posible aumentar el brillo
-   Sabotaje : Este es el comando de sabotaje (se activa en caso de desgarro)
-   Batería : es el comando de la batería

Todos los módulos de la gama tienen los mismos identificadores, depende de usted mostrar los correspondientes a su módulo.

### Configuración du module

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/philio.psp01/config1.jpg)

![Config2](images/philio.psp01/config2.jpg)

Detalles del parámetro :

-   2: establece la señal enviada a los módulos en el grupo de asociación 2
-   3: ajusta la sensibilidad del sensor de presencia (0 : discapacitado 99: máxima sensibilidad)
-   4: ajusta el nivel de brillo desde el cual la señal definida en el parámetro 2 se enviará a los módulos asociados con el grupo 2
-   5: modo de funcionamiento (no se recomienda cambiarlo : consulte la documentación del fabricante)
-   6: modo de funcionamiento multisensor (no se recomienda cambiarlo : consulte la documentación del fabricante)
-   9: permite definir después de cuánto tiempo se enviará la señal OFF a los módulos asociados con el grupo 2
-   10: le permite definir la duración entre dos informes de batería (una unidad = 30 minutos)
-   12: le permite definir la duración entre dos informes de brillo (una unidad = 30 minutos)
-   13: le permite definir el tiempo entre dos informes de temperatura (una unidad = 30 minutos)

### Grupos

Este módulo tiene dos grupos de asociación, solo el primero es esencial.

![Groupe](images/philio.psp01/groupe.jpg)

## Bueno saber

### Específicos

> **Punta**
>
> Este módulo tiene una particularidad, ya que no tiene un informe basado en variaciones sino solo en duración, envía toda su información sobre cada detección. También envía la señal de detección de presencia varias veces seguidas. Por lo tanto, es aconsejable marcar la casilla "Evento en cambio" en presencia si utiliza este comando como desencadenante de escenario.

## Despertador

Para activar este módulo, solo hay una forma :

-   suelte el botón de manipulación y presiónelo nuevamente

## Nota importante

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio en la configuración, después de un cambio en la activación, después de un cambio en los grupos de asociación
