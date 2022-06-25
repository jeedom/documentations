# Seguro SIR 321 "Temporizador"

**El módulo**

![module](images/secure.sir321/module.jpg)

**El jeedom visual**

![vuedefaut1](images/secure.sir321/vuedefaut1.jpg)

## Resumen

El temporizador digital SIR321 es un simple interruptor de botón que recuerda apagar los aparatos eléctricos por usted. Se pueden lograr grandes ahorros de energía agregando este simple dispositivo a cualquier aparato eléctrico de alta potencia, con cargas de hasta 3kW (resistiva).

Estas unidades son perfectas para su uso en calentadores de panel, calentadores de inmersión, calentadores de toallas y calentadores de aceite. El impulso varía de 30 a 120 minutos.

El SIR 321 admite los sensores de temperatura externos SES001, SES002 y SES003.

## Fonctions

-   Booster para calentador de inmersión, radiador de panel, radiador toallero, radiador de aceite
-   Temporizador de caldera
-   Ventilación forzada en salas de conferencias
-   Medición de la temperatura de la calefacción por suelo radiante (con sensores opcionales))
-   Fácil de usar y confiable
-   Lograr ahorros de energía

## Características técnicas

-   Type: Temporizador electrónico
-   Relais: 13(3)A, 230V AC, adecuado para cargas de hasta 3kW
-   Alimentation: 230 V CA, 50 Hz
-   Dimensiones 85x85x44mm
-   Indice de PROTECCION : IP30
-   Temperatura de funcionamiento: 0°C a 35°C

## Datos del módulo

-   Marca : Horstmann
-   Apellido : Temporizador de cuenta atrás SIR 321 RF
-   Identificación del fabricante : 89
-   Tipo Producto : 1/2 (según se incluya con sonda de temperatura o no))

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).
> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón durante 1 segundo (hasta que parpadee rápidamente) y suéltelo, de acuerdo con su documentación en papel.

![inclusion](images/secure.sir321/inclusion.jpg)

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/secure.sir321/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/secure.sir321/commandes.jpg)

Aquí está la lista de comandos :

-   Nosotros : este es el comando para encender el rele
-   Apagado : este es el comando para apagar el rele
-   La temperatura : este es el comando de medición de temperatura si hay una sonda externa presente

### Configuración del módulo

Si desea configurar el módulo, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/secure.sir321/config1.jpg)

Detalles del parámetro :

-   1: Habilita o deshabilita la función de temporizador a prueba de fallas (consulte la documentación del módulo)
-   2: Le permite configurar la unidad de temperatura
-   3: Le permite establecer el intervalo de tiempo para enviar la temperatura a Jeedom (en segundos)
-   4: Le permite establecer cuánto debe variar la temperatura para que el módulo la envíe a Jeedom (en pasos de 0.1 10-→0.1)
-   5: Le permite establecer una temperatura de corte más allá de la cual el módulo cortará el relé

### Groupes

Este módulo tiene dos grupos de asociación. Si el primero es imprescindible, el segundo está activo y es imprescindible si se conecta un sensor de temperatura.

![Groupe](images/secure.sir321/groupe.jpg)
