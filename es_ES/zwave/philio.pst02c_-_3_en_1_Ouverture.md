# Philio PST02 C - Apertura 3 en 1

**El módulo**

![module](images/philio.pst02c/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/philio.pst02c/vuedefaut1.jpg)

## Resumen

El detector ZIP-PSM01 ofrece 3 funciones diferentes : detección de apertura, sensor de temperatura y detector de luz. Consta de dos partes : un detector y un imán. Están diseñados para colocarse en una puerta o ventana con el imán fijado en la parte de apertura y el detector en la parte fija.

Abrir la puerta o ventana alejará el imán del detector, lo que activará el detector que enviará una señal de alarma de onda Z, si el sistema está armado (esta señal puede ser operada por una sirena o por un caja de domótica, por ejemplo). El sensor también se puede utilizar para el control automático de la iluminación, según el nivel de brillo. Por ejemplo, el sensor enviará una señal al interruptor Z-Wave para encender la luz cuando la puerta se abra y la habitación esté oscura.

El detector también aumentará el brillo y la temperatura, es decir, en caso de un cambio significativo, y cada vez que se detecte la apertura / cierre.

Es necesario un controlador Z-Wave (control remoto, dongle, etc.) para integrar este detector en su red si ya tiene una red existente.

## Funciones

-   Detector 3 en 1: Apertura, temperatura, luz
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
-   Duración de la batería : 3 años (para 14 viajes por día)
-   Frecuencia : 868.42 MHz
-   Distancia de transmisión : 30m en interiores
-   Sensor de temperatura : -10 a 70 ° C
-   Sensor de brillo : 0 a 500 lux
-   Dimensiones :
  -   Detector : 28 x 96 x 23 mm
  -   Imán : 10 x 50 x 12 mm
-   Peso : 52g
-   Temperatura de funcionamiento : -10 a 40 ° C
-   Humedad de funcionamiento : 85% HR máx
-   Norma CE : EN300 220-1
-   Certificación Z-Wave : ZC08-13050003

## Datos del módulo

-   Hacer : Philio Technology Corporation
-   Nombre : PST02-C Sensor de puerta / ventana 3 en 1
-   ID del fabricante : 316
-   Tipo de producto : 2
-   ID del producto : 14

## Configuración

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón de inclusión 3 veces, de acuerdo con su documentación en papel.

![inclusion](images/philio.pst02c/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/philio.pst02c/information.jpg)

### Comandos

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/philio.pst02c/commandes.jpg)

Aquí está la lista de comandos :

-   Apertura : es el comando que generará una detección de apertura
-   Temperatura : es el comando que hace posible elevar la temperatura
-   Brillo : es el comando que hace posible aumentar el brillo
-   Batería : es el comando de la batería

### Configuración du module

> **Importante**
>
> Durante una primera inclusión, siempre active el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![Config1](images/philio.pst02c/config1.jpg)

![Config2](images/philio.pst02c/config2.jpg)

![Config3](images/philio.pst02c/config3.jpg)

Detalles del parámetro :

-   2: establece la señal enviada a los módulos en el grupo de asociación 2
-   4: ajusta el nivel de brillo desde el cual la señal definida en el parámetro 2 se enviará a los módulos asociados con el grupo 2
-   5: modo de funcionamiento (consulte la documentación del fabricante) Valor recomendado : 8
-   6: modo de funcionamiento multisensor (consulte la documentación del fabricante) Valor recomendado : 4
-   7: modo de funcionamiento personalizado del multisensor (consulte la documentación del fabricante) Valor recomendado : 20 (tener la apertura funcional)
-   9: permite definir después de cuánto tiempo se enviará la señal OFF a los módulos asociados con el grupo 2
-   10: se usa para definir la duración entre dos informes de batería (una unidad = parámetro 20)
-   11: le permite definir la duración entre dos informes de apertura automáticos (una unidad = parámetro 20)
-   12: le permite definir la duración entre dos informes de brillo automático (una unidad = parámetro 20) Valor recomendado : 3
-   13: permite definir el tiempo entre dos informes de temperatura automáticos (una unidad = parámetro 20) Valor recomendado : 2
-   20: duración de un intervalo para los parámetros 10 a 13 Valor recomendado : 10
-   21: valor de variación de temperatura en ° F para activar un informe
-   22: valor en% de variación de brillo para activar un informe Valor recomendado : 10

### Grupos

Este módulo tiene dos grupos de asociación, solo el primero es esencial.

![Groupe](images/philio.pst02c/groupe.jpg)

## Despertador

Para activar este módulo, solo hay una forma :

-   suelte el botón de manipulación y presiónelo nuevamente

## Nota importante

> **Importante**
>
> Tienes que despertar el módulo : después de su inclusión, después de un cambio en la configuración, después de un cambio en la activación, después de un cambio en los grupos de asociación
