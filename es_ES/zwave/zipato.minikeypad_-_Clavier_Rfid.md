# Zipato miniteclado RFID

**El módulo**

![module](images/zipato.minikeypad/module.jpg)

**La imagen de Jeedom**

![vuedefaut1](images/zipato.minikeypad/vuedefaut1.jpg)

## Resumen

Controle su sistema de seguridad con este mini teclado de pared Zipato !

Con este teclado RFID compatible con Z-Wave, podrá activar o desactivar fácilmente su sistema de alarma. Las teclas "Home" y "Away" le permiten armar/desarmar el sistema de seguridad y/o ejecutar escenarios de automatización del hogar rápidamente. Además de usar el teclado numérico, también puede deslizar una etiqueta RFID frente al teclado para armar/desarmar el sistema. El teclado transmite a tu controlador domótico el identificador de la credencial que ha sido reconocida. Puede crear fácilmente escenarios basados en la persona que usó su credencial.

## Fonctions

-   Teclado y RFID
-   Admite la tecnología Z-Wave
-   Arma/desarma tu sistema de seguridad
-   Control de acceso mediante lectura de tarjetas RFID
-   Control de acceso con teclado numérico
-   Protección contra manipulación
-   Indicador LED para confirmar cada acción
-   Zumbador incorporado para indicación audible de activación/desactivación de alarma, por ejemplo

## Características técnicas

-   Tipo : Esclavo de onda Z
-   Alimento : 2 pilas AA de 1,5 V
-   Frecuencia : 868.42 MHz
-   Rango inalámbrico : 30m en campo abierto
-   Protocolo RFID : ISO15693, ISO18000-3, Tag-it™, RFID
-   Zumbador : 60dBa a 10cm de distancia
-   Temperatura de almacenamiento : -5°C a +65°C
-   Humedad para el almacenamiento : 10% a 70%
-   Temperatura de funcionamiento : 10°C a 40°C
-   Humedad de funcionamiento : 30% a 80%
-   Dimensiones : 62x62x20mm
-   Certificados : Seguridad : CEM de UL : FCC CE RoHS

## Datos del módulo

-   Marca : Zipato
-   Apellido : Mini teclado RFID Zipato
-   Identificación del fabricante : 151
-   Tipo Producto : 24881
-   Identificación de producto : 17665

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner este módulo en modo de inclusión, simplemente presione la pestaña metálica durante dos segundos (el LED rojo en el panel frontal debe parpadear dos veces) y suelte la pestaña para que se produzca la inclusión.

![inclusion](images/zipato.minikeypad//inclusion.jpg)

Una vez incluido, debe obtener esto :

![information](images/zipato.minikeypad/information.jpg)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![commandes](images/zipato.minikeypad/commandes.jpg)

Aquí está la lista de comandos :

-   Valores : este es el comando que levantará el local/visitante (5 para visitante 6 para local)
-   Sabotaje : este es el comando de sabotaje (se activa en caso de rotura)
-   Codificado : muestra el código de la credencial o del teclado cuando el código ingresado no está en una de las memorias
-   Batería : este es el comando de la bateria

### Configuración del módulo

> **Importante**
>
> Durante una primera inclusión, siempre despierte el módulo justo después de la inclusión.

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![bouton configuration](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña Configuración)

![config1](images/zipato.minikeypad/config1.jpg)

Detalles del parámetro :

-   1: le permite restaurar la configuración predeterminada (no recomendado)
-   2: plazo de cancelación (no modificable))
-   3: volver por pitido : le permite activar o no una serie de 8 pitidos después del reconocimiento de una credencial/código
-   4: número de pitidos por segundo (dejarlo sin cambios no tiene ningún efecto)
-   5: modo de operación : modo normal o siempre despierto (no recomendado porque consume mucho, mucho pilas))

### Groupes

Este módulo tiene dos grupos de asociación.

![groupe](images/zipato.minikeypad/groupe.jpg)

> **Importante**
>
> Para un funcionamiento óptimo de su módulo. Jeedom debe estar asociado al menos con el grupo 1.

### Insignias / códigos

En la página del equipo hay una pestaña Asistente.

![bouton assistant](images/plugin/bouton_assistant.jpg)

Esto le permite agregar códigos. Verás una mesa allí.

![config2](images/zipato.minikeypad/config2.jpg)

-   Esta tabla le permite ver las memorias ocupadas en su teclado
-   Para registrar un nuevo código, haga clic en el botón verde en la memoria deseada y siga los pasos
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
