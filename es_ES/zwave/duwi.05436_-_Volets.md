# DUWI 05436 "Persiana enrollable"

 **El módulo**

![1 Module](images/duwi.05436/1-Module.PNG)

**La imagen de Jeedom**

![Visuel defaut](images/duwi.05436/Visuel_defaut.PNG)

## Resumen 

El módulo de persianas DUWI 05436 permite controlar las persianas en dos direcciones.

Sus principales características son :

-   La capacidad de usar un 'Común' para cambiar hacia arriba o hacia abajo. Como resultado, es posible controlar ambas direcciones con cualquier tipo de tensión, incluso con neutro.
-   La capacidad de enviar una señal continua arriba/abajo sin límite de tiempo.

Attention: este módulo no envía su estado al controlador z-wave cuando el usuario presiona directamente los botones. Es necesario hacer un 'Actualizar' en su posición para actualizar, o para ajustar la Encuesta (ver abajo).

## Fonctions

-   Abajo arriba
-   Un cable común que se cambiará hacia arriba o hacia abajo
-   Requiere neutral para operar
-   Fusible de protección
-   Tiempos de subida y bajada ajustables por configuración o por aprendizaje en el módulo
-   El interruptor se suministra con el módulo, no intercambiable

## Características técnicas

-   Tipo de mod : Receptor/actuador Z-Wave
-   Fuente de alimentación 230V, 50Hz
-   Neutro requerido
-   Carga maxima : 1800W (resistiva), 460VA (inductiva)
-   Fusible : T8AH
-   Frecuencia : 868.42Mhz
-   Dimensiones : 52x52x31mm
-   Rango de temperatura : 0°C / +40°C

## Datos del módulo

-   Marca : Popp/duwi
-   Apellido : Control de persianas ZW ESJ
-   Identificación del fabricante : 100
-   Tipo de producto : 16385
-   Identificación de producto : 0

## Connexion

![2 Montage](images/duwi.05436/2-Montage.PNG)

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir Jeedom, consulte este [documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner el módulo en modo de inclusión, presione arriba o abajo tres veces. La exclusión se hace de la misma manera.

Una vez incluido, debe obtener esto :

![Plugin Zwave](images/duwi.05436/3-Inclusion.PNG)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Pedidos](images/duwi.05436/4-Commandes.PNG)

Aquí está la lista de comandos :

-   Estado : esta es la posición actual del panel, en porcentaje de 0 a 99
-   Para ir abajo : comando para descender completamente
-   Subir : comando para montar completamente
-   Deténgase : parada inmediata del movimiento
-   Actualizar : actualizar el estado actual del módulo
-   Nivel : deslizador para posicionar una apertura parcial

#### Ajuste de los tiempos de subida y bajada :

Tienes que quitar el interruptor para tener acceso a los dos botones "arriba" y "abajo"".

Coloque la aleta en la parte superior si desea ajustar el tiempo de descenso y viceversa.

Presiona al menos 2s en los dos botones (arriba y abajo) simultáneamente. El LED debería comenzar a parpadear en verde.

Luego presione continuamente el botón hacia abajo o hacia arriba hasta llegar a la posición deseada. Cuando sueltas el botón, el LED se enciende en verde fijo durante unos segundos. El tiempo se memoriza.

Repetir la operación en el otro sentido.

### Configuración del módulo

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento Jeedom OpenZwave.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de configuración)

![Config1](images/duwi.05436/5-Paramètres.PNG)

Detalles del parámetro :

-   0 : Tiempo de ejecución :
Estos son los tiempos de subida y bajada. Deberías encontrar tu aprendizaje allí.
La codificación se realiza mediante dos pares de bytes : el primero para el ascenso y el segundo para el descenso.
Los valores se codifican en hexadecimal en el módulo y se devuelven a decimal en la pantalla Jeedom.
Por ejemplo : para 4626, esto da en hexadecimal : 0x1212. 0x12 para arriba y 0x12 para abajo. O bien, traído de nuevo en decimal : 18s para arriba y abajo.
Anotar : forzar un valor a cero para este parámetro implicará que el módulo cambiará para subir o bajar sin límite de tiempo. Entonces será necesario enviar un 'Stop' para interrumpir.
-   1 : Funcionalidad de parada : Habilitado o deshabilitado :
Sirve para indicar si al pulsar en sentido contrario durante un movimiento se detiene la persiana o se la devuelve inmediatamente en sentido contrario.

### Groupes

Este módulo tiene solo un grupo de asociación en el que debe ubicarse su controlador Z-Wave.

![Groupe](images/duwi.05436/6-Groupes.PNG)

## Bueno saber

-   Como se especificó al principio, el módulo no reporta los cambios de posiciones realizados por el usuario al presionar directamente el interruptor. Por lo tanto, para tener una retroalimentación de estado, es necesario :
    - configurar una encuesta a los 5 minutos en la configuración, pestaña 'valores''
![Groupe](images/duwi.05436/7-Poll.PNG)
  - o cree un escenario que inicie el comando 'Actualizar' cada x minutos (al menos 1 minuto)
-   Establecer una operación sin límite de tiempo puede ser útil para los controles de VMC
