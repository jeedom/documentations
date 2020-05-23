# Everspring Miniplug encendido / apagado - AN180-6

**El módulo**

![module](images/everspring.AN180-6/module.jpg)

**El visual de Jeedom**

![vuedefaut1](images/everspring.AN180-6/vuedefaut1.jpg)

## Resumen

El mini enchufe de encendido / apagado está diseñado para controlar el encendido y apagado de luces y equipos eléctricos en su hogar. Con un voltaje de 220 - 240 V, este enchufe puede soportar una carga de hasta 1500W (resistencia), 800W (incandescente), 200W (motor, fluorescente, Led)).

El Mini On / Off Plug es un dispositivo compatible con Z-Wave ™ diseñado para funcionar con todas las redes compatibles con Z-Wave ™. Puede ser controlado por un control remoto, software de PC o cualquier controlador Z-Wave en su red.

## Funciones

-   Controlar una lámpara o dispositivo de forma remota
-   Módulo de enchufe que se integra directamente entre una toma de corriente y la carga a controlar
-   Función ON / OFF para controlar lámparas o dispositivos (sin variación)
-   Control de carga local mediante botón integrado
-   Tecnología Z-Wave Plus
-   Dimensiones reducidas para pasar casi desapercibidas
-   LED de estado en el botón integrado
-   Función repetidora Z-Wave

## Características técnicas

-   Tipo de módulo : Receptor Z-Wave
-   Suministro : 230 V, 50 Hz
-   El consumo : 0.6W
-   Potencia máxima : Carga resistiva : 1500W, bombilla incandescente : 800W, bombilla fluorescente compacta : 200W, bombilla Led (no regulable) 200W
-   Frecuencia : 868.42 Mhz
-   Alcance : hasta 70 m en exteriores, hasta 30 m en edificios
-   Affichage: LED en el botón
-   Dimensiones : Longitud (enchufe incluido) : 74 mm de diámetro : 52mm

## Datos del módulo

-   Hacer : Everspring
-   Nombre : Miniplug encendido / apagado
-   ID del fabricante : 96
-   Tipo de producto : 4
-   ID del producto : 7

## Configuración

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, presione su botón 3 veces, de acuerdo con su documentación en papel. Es importante tener en cuenta que este módulo entra directamente en la inclusión cuando no pertenece a ninguna red y está alimentado

![inclusion](images/everspring.AN180-6/inclusion.jpg)

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/everspring.AN180-6/information.jpg)

### Comandos

Una vez que se reconoce el módulo, los comandos asociados con los módulos estarán disponibles.

![Comandos](images/everspring.AN180-6/commandes.jpg)

Aquí está la lista de comandos :

-   Estado : Es el comando que permite conocer el estado del zócalo (activar / desactivar)
-   Uno : Este es el comando que enciende la salida
-   Apagado : Es el comando que hace posible extinguir la captura

Tenga en cuenta que en el tablero de instrumentos, la información de estado, ON / OFF se encuentra en el mismo icono.

### Configuración du module

Puede configurar el módulo de acuerdo con su instalación. Para hacer esto, vaya al botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de parámetros)

![Config1](images/everspring.AN180-6/config1.jpg)

Detalles del parámetro :

-   1 : Este parámetro define el comando de valor de estado, no es aconsejable cambiar este valor.
-   2 : Este parámetro define el retraso para enviar el cambio de estado al grupo 1 (valor entre 3 y 25 segundos)
-   3 : Este parámetro se usa para definir si el socket reanudará su estado (ON u OFF) después de una recuperación de energía.

### Grupos

Este módulo tiene 2 grupos de asociación.

![Groupe](images/everspring.AN180-6/groupe.jpg)

> **Importante**
>
> Al menos Jeedom debería terminar en el grupo 1

## Bueno saber

### Específicos

-   La retroalimentación de estado no se puede configurar en 3 segundos.

## Despertador

No hay noción de activación en este módulo.
