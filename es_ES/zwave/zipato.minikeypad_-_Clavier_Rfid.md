# 

**El módulo**

![module](images/zipato.minikeypad/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/zipato.minikeypad/vuedefaut1.jpg)

## Resumen

 !

. . . . .

## Fonctions

-   
-   
-   
-   
-   
-   Protección contra manipulación
-   
-   

## Características técnicas

-   Tipo : 
-   Alimento : 
-   Frecuencia : 868.42 MHz
-    : 
-    : 
-    : 
-   Temperatura de almacenamiento : -
-    : 
-   Temperatura de funcionamiento : 
-    : 
-   Dimensiones : 
-   Certificados :  :  : 

## Datos del módulo

-   Marca : Zipato
-   Apellido : 
-   Identificación del fabricante : 151
-   Tipo Producto : 24881
-   Identificación de producto : 17665

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> .

![inclusion](images/zipato.minikeypad//inclusion.jpg)

Una vez incluido, debe obtener esto :

![information](images/zipato.minikeypad/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![commandes](images/zipato.minikeypad/commandes.jpg)

Aquí está la lista de comandos :

-    : )
-   Sabotaje : este es el comando de sabotaje (se activa en caso de rotura)
-    : 
-   Batería : este es el comando de la bateria

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

.

![bouton configuration](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![config1](images/zipato.minikeypad/config1.jpg)

Detalles del parámetro :

-   1: )
-   2: )
-   3:  : 
-   4: )
-   5:  : )

### Groupes

Este módulo tiene dos grupos de asociación.

![groupe](images/zipato.minikeypad/groupe.jpg)

> **Importante**
>
> Para un funcionamiento óptimo de su módulo. .

### 

.

![bouton assistant](images/plugin/bouton_assistant.jpg)

. .

![config2](images/zipato.minikeypad/config2.jpg)

-   
-   
-   Para eliminar un código, simplemente haga clic en el botón rojo.
-   Es imposible guardar el mismo código/credencial en dos memorias diferentes
-   Es imposible (por razones de seguridad) leer el valor de un código registrado

> **Importante**
>
> Recuerde activar el módulo después de agregar un código o insignia.

## Ejemplos de uso

![exemple](images/zipato.minikeypad/exemple.jpg)

El activador es el comando de evento, de hecho, se actualiza solo cuando se presenta un código/distintivo válido. Si el valor es 6 (casa) se desactiva la alarma (por ejemplo), o se enciende la regleta, se enciende la luz según la luminosidad, se envía una notificación para indicar que alguien ha vuelto, se lanza un resumen voz para hacer un reporte del tiempo por ejemplo. En caso contrario (necesariamente 5) activamos la alarma, cortamos la regleta, enviamos una notificación para indicar que la casa está vacía.

## Bueno saber

### Especificidades

El teclado lee códigos/distintivos de dos formas :

-   cuando presiona inicio/fuera durante los primeros 1-2 segundos si comienza a escribir un código, leerá ese código
-   si no se hace nada en los primeros 1-2 segundos, pasa al modo de lectura de tarjeta RFID (luz roja encendida)). En este momento puede leer una placa, no antes.

## Wakeup

Para activar este módulo hay dos formas de proceder :

-   presione el botón de manipulación y luego suéltelo después de 1 a 2 segundos
-   presione Inicio, un número aleatorio y Entrar

## Nota IMPORTANTE

> **Importante**
>
> Tienes que despertar el módulo : tras su inclusión, tras un cambio de configuración, tras un cambio de wake up, tras un cambio de grupos de asociación
