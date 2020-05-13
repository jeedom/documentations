# Philio PST02 A - 4 en 1

**El módulo**

![module](images/philio.pst02a/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/philio.pst02a/vuedefaut1.jpg)

Resumen
------

El detector ZIP-PSM02-EU ofrece 4 funciones diferentes : detección de movimiento, detección de apertura, sensor de temperatura y sensor de luz. Consta de dos partes : un detector y un imán. Están diseñados para colocarse en una puerta o ventana con el imán fijado en la parte de apertura y el detector en la parte fija.

Abrir la puerta o ventana alejará el imán del detector, lo que activará el detector que enviará una señal de alarma de onda Z, si el sistema está armado (esta señal puede ser operada por una sirena o por un caja de domótica, por ejemplo). Este detector puede usarse para seguridad o para automatización. Cuando el detector está asociado con dispositivos de seguridad, sirve como un disparador de alerta al detectar cambios en los niveles de radiación infrarroja o la apertura de puertas / ventanas. Si una persona se mueve en el campo de visión del detector o abre una puerta / ventana, se transmite una señal de radio, que activa una alarma para disuadir a los intrusos.

El detector también se puede usar en combinación con un controlador Z-Wave para usos de automatización del hogar, detectando tanto los cambios en la radiación infrarroja (presencia) como los niveles de apertura de puertas / ventanas y los cambios en el nivel de brillo. Por lo tanto, podemos activar una luz al detectar movimiento o abrir la puerta en la oscuridad.

El detector también aumentará el brillo y la temperatura, ya sea en caso de un cambio significativo, y cada vez que se detecte un movimiento o apertura / cierre. Es necesario un controlador Z-Wave (control remoto, dongle, etc.) para integrar este detector en su red si ya tiene una red existente.

Fonctions
---------

-   Detector 4 en 1: movimiento, apertura, temperatura, luz
-   Adopta el reciente chip de la serie Z-Wave 400 para admitir operaciones multicanal y un mayor rendimiento de datos (9.6 / 40 / 100kbps)
-   Utiliza el SDK de Z-Wave 6.02
-   Rango de antena optimizado
-   Uso para aplicaciones de domótica o seguridad
-   Botón para incluir / excluir el detector
-   Autoprotection
-   Indicación de batería baja
-   Pequeño, discreto y estético
-   Facilidad de uso e instalación

Características técnicas
---------------------------

-   Tipo de módulo : Transmisor de onda Z
-   Suministro : 1 batería CR123A 3V
-   Duración de la batería : 2 años
-   Frecuencia : 868.42 MHz
-   Distancia de transmisión : 30m en interiores
-   Sensor de temperatura : -10 a 70 ° C
-   Sensor de brillo : 0 a 500 lux
-   Ángulo de detección PIR : 90 °
-   Rango de detección PIR : 8 a 10m
-   Dimensiones :
  -   Detector : 28 x 96 x 23 mm
  -   Imán : 10 x 50 x 12 mm
-   Peso : 52g
-   Temperatura de funcionamiento : -10 a 40 ° C
-   Humedad de funcionamiento : 85% HR máx
-   Norma CE : EN300 220-1
-   Certificación Z-Wave : ZC08-13050003

Datos del módulo
-----------------

-   Hacer : Philio Technology Corporation
-   Nombre : PST02-A Multisensor 4 en 1
-   ID del fabricante : 316
-   Tipo de producto : 2
-   ID del producto : 12

Configuration
-------------

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/philio.pst02a/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/philio.pst02a/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/philio.pst02a/commandes.jpg)

Aquí está la lista de comandos :

-   Presencia : es el comando que detectará una detección de presencia
-   Apertura : es el comando que generará una detección de apertura
-   Temperatura : es el comando que hace posible elevar la temperatura
-   Brillo : es el comando que hace posible aumentar el brillo
-   Sabotaje : Este es el comando de sabotaje (se activa en caso de desgarro)
-   Batería : es el comando de la batería

### Configuracion del modulo

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/philio.pst02a/config1.jpg)

![Config2](images/philio.pst02a/config2.jpg)

![Config3](images/philio.pst02a/config3.jpg)

Detalles del parámetro :

-   2: establece la señal enviada a los módulos en el grupo de asociación 2
-   3: ajusta la sensibilidad del sensor de presencia (0 : discapacitado 99: máxima sensibilidad)
-   4: ajusta el nivel de brillo desde el cual la señal definida en el parámetro 2 se enviará a los módulos asociados con el grupo 2
-   5: modo de funcionamiento (consulte la documentación del fabricante) Valor recomendado : 8
-   6: modo de funcionamiento multisensor (consulte la documentación del fabricante) Valor recomendado : 4
-   7: modo de funcionamiento personalizado del multisensor (consulte la documentación del fabricante) Valor recomendado : 6 (tener un retorno a OFF de la presencia)
-   8: permite definir la duración en pasos de 8 segundos de redetección de movimiento
-   9: permite definir después de cuánto tiempo se enviará la señal OFF a los módulos asociados con el grupo 2
-   10: se usa para definir la duración entre dos informes de batería (una unidad = parámetro 20)
-   11: le permite definir la duración entre dos informes de apertura automáticos (una unidad = parámetro 20)
-   12: le permite definir la duración entre dos informes de brillo automático (una unidad = parámetro 20) Valor recomendado : 3
-   13: permite definir el tiempo entre dos informes de temperatura automáticos (una unidad = parámetro 20) Valor recomendado : 2
-   20: duración de un intervalo para los parámetros 10 a 13 Valor recomendado : 10
-   21: valor de variación de temperatura en ° F para activar un informe
-   22: valor en% de variación de brillo para activar un informe Valor recomendado : 10

### Groupes

Este módulo tiene dos grupos de asociación, solo el primero es esencial.

![Groupe](images/philio.pst02a/groupe.jpg)

Wakeup
------

Para activar este módulo, solo hay una forma :

-   suelte el botón de manipulación y presiónelo nuevamente

Nota importante
---------------

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio en la configuración, después de un cambio en la activación, después de un cambio en los grupos de asociación
