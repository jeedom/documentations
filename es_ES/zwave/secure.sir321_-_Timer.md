# Temporizador seguro SIR 321 ""

**El módulo**

![module](images/secure.sir321/module.jpg)

**El visual de la libertad**

![vuedefaut1](images/secure.sir321/vuedefaut1.jpg)

## Resumen

El temporizador digital SIR321 es un simple interruptor de botón que recuerda apagar sus dispositivos eléctricos por usted. Es posible un gran ahorro de energía al agregar este dispositivo simple en cualquier dispositivo eléctrico de alta potencia, con cargas de hasta 3kW (resistivo).

Estas unidades son perfectas para usar en paneles de calefacción, calentadores de inmersión, calentadores de toallas y enfriadores de aceite. El impulso va de 30 a 120 minutos.

El SIR 321 es compatible con los sensores de temperatura externos SES001, SES002 y SES003.

## Funciones

-   Booster para calentador de inmersión, radiador de panel, radiador de toalla, radiador de baño de aceite
-   Temporizador de caldera
-   Ventilación forzada en salas de conferencias
-   Medición de la temperatura del suelo radiante (con sensores opcionales)
-   Simple de usar y confiable
-   Ahorrar energía

## Características técnicas

-   Type: Temporizador electrónico
-   Relais: 13 (3) A, 230 V CA, adecuado para cargas de hasta 3 kW
-   Alimentation: 230 V CA, 50 Hz
-   Dimensiones 85x85x44mm
-   Indice de PROTECCION : IP30
-   Temperatura de funcionamiento: 0 ° C a 35 ° C

## Datos del módulo

-   Hacer : Horstmann
-   Nombre : Temporizador de cuenta regresiva RF SIR 321
-   ID del fabricante : 89
-   Tipo de producto : 1/2 (dependiendo de si se incluye con una sonda de temperatura o no)

## Configuración

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).
> **Importante**
>
> Para poner este módulo en modo de inclusión, presione el botón durante 1 segundo (hasta que parpadee rápidamente) y suéltelo, de acuerdo con su documentación en papel.

![inclusion](images/secure.sir321/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/secure.sir321/information.jpg)

### Comandos

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/secure.sir321/commandes.jpg)

Aquí está la lista de comandos :

-   Uno : este es el comando para encender el relé
-   Apagado : es el comando para apagar el relé
-   Temperatura : es el comando de medición de temperatura si hay una sonda externa presente

### Configuración du module

Si desea configurar el módulo, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de parámetros)

![Config1](images/secure.sir321/config1.jpg)

Detalles del parámetro :

-   1: Le permite activar o no la función de temporizador a prueba de fallas (consulte la documentación del módulo)
-   2: Ajusta la unidad de temperatura
-   3: Establece el intervalo de tiempo para enviar la temperatura a Jeedom (en segundos)
-   4: Le permite establecer cuánto debe variar la temperatura para que el módulo lo envíe a Jeedom (en pasos de 0.1 10- → 0.1)
-   5: Le permite establecer una temperatura de corte por encima de la cual el módulo cortará el relé

### Grupos

Este módulo tiene dos grupos de asociación. Si el primero es esencial, el segundo está activo y es esencial si se conecta un sensor de temperatura.

![Groupe](images/secure.sir321/groupe.jpg)
