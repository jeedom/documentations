# DUWI 05436 "Persiana enrollable"

 **El módulo**

![1 Module](images/duwi.05436/1-Module.PNG)

**El visual de Jeedom**

![Visuel defaut](images/duwi.05436/Visuel_defaut.PNG)

## Resumen 

El módulo de persiana enrollable DUWI 05436 le permite controlar persianas enrollables en dos direcciones.

Sus características principales son :

-   La posibilidad de usar un 'Común' para cambiar el ascenso o descenso. De repente, es posible controlar ambas direcciones con cualquier tipo de voltaje, incluso un neutro.
-   La posibilidad de enviar una señal de ascenso / descenso continuo sin límite de tiempo.

Attention: este módulo no envía su estado al controlador de onda z cuando el usuario presiona los botones directamente. Debe actualizar su posición para actualizar o ajustar la Encuesta (consulte a continuación).

## Fonctions

-   Arriba / abajo
-   Un cable común que se activará en ascenso o descenso
-   Requiere neutral para operar
-   Protección de fusibles
-   Tiempos de subida y bajada ajustables por configuración de parámetros o por aprendizaje en el módulo
-   El interruptor se suministra con el módulo, no intercambiable

## Características técnicas

-   Tipo de módulo : Receptor / actuador Z-Wave
-   230V, 50Hz fuente de alimentación
-   Neutral requerido
-   Carga máxima : 1800W (resistivo), 460VA (inductivo)
-   Fusible : T8AH
-   Frecuencia : 868.42 Mhz
-   Dimensiones : 52 x 52 x 31 mm
-   Rango de temperatura : 0 ° C / + 40 ° C

## Datos del módulo

-   Hacer : Popp / Duwi
-   Nombre : Control de persianas ZW ESJ
-   ID del fabricante : 100
-   Tipo de producto : 16385
-   ID del producto : 0

## Connexion

![2 Montage](images/duwi.05436/2-Montage.PNG)

## Configuration

Para configurar el complemento OpenZwave y saber cómo incluir a Jeedom, consulte esto [Documentación](https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/).

> **Importante**
>
> Para poner el módulo en modo de inclusión, presione el botón arriba o abajo tres veces. La exclusión se realiza de la misma manera.

Una vez incluido, deberías obtener esto :

![Plugin Zwave](images/duwi.05436/3-Inclusion.PNG)

### Commandes

Una vez que se reconoce el módulo, los comandos asociados con el módulo estarán disponibles.

![Comandos](images/duwi.05436/4-Commandes.PNG)

Aquí está la lista de comandos :

-   Estado : Esta es la posición actual del obturador, en porcentaje de 0 a 99
-   Bajar : comando para descender por completo
-   Subir : comando para montar completamente
-   Detener : parada inmediata del movimiento
-   Refrescar : actualizar el estado actual del módulo
-   Nivel : control deslizante para colocar una abertura parcial

#### Establecer los tiempos de subida y bajada :

El interruptor debe retirarse para tener acceso a los dos botones "arriba" y "abajo"".

Coloque la aleta en la parte superior si desea ajustar el tiempo de descenso, y viceversa.

Presione al menos 2 segundos en ambos botones (arriba y abajo) simultáneamente. El LED debería comenzar a parpadear en verde.

Luego presione y mantenga presionado el botón hacia abajo o hacia arriba hasta llegar a la posición deseada. Cuando sueltas el botón, el LED se ilumina en verde continuo durante unos segundos. El tiempo es memorizado.

Repita la operación en la otra dirección.

### Configuracion del modulo

Luego, si desea configurar el módulo de acuerdo con su instalación, debe pasar por el botón "Configuración" del complemento OpenZwave de Jeedom.

![Configuración plugin Zwave](images/plugin/bouton_configuration.jpg)

Llegará a esta página (después de hacer clic en la pestaña de parámetros)

![Config1](images/duwi.05436/5-Paramètres.PNG)

Detalles del parámetro :

-   0 : Tiempo de funcionamiento :
Estos son los tiempos de subida y bajada. Deberías encontrar tu aprendizaje allí.
La codificación se realiza mediante dos pares de bytes : el primero para el ascenso y el segundo para el descenso.
Los valores se codifican en hexadecimal en el módulo y se restablecen en decimal en la pantalla de Jeedom.
Por ejemplo : para 4626, esto da en hexadecimal : 0x1212. O 0x12 para el ascenso y 0x12 para el descenso. O bien, devuelto a decimal : 18 años para ascenso y descenso.
Anotar : forzar un valor a cero para este parámetro implicará que el módulo cambiará hacia arriba o hacia abajo sin límite de tiempo. Entonces será necesario enviar un 'Stop' para interrumpir.
-   1 : Funcionalidad de parada : Habilitado o deshabilitado :
Se usa para indicar si presionar en la dirección opuesta durante el movimiento detiene el obturador o lo devuelve inmediatamente en la dirección opuesta.

### Groupes

Este módulo tiene solo un grupo de asociación en el que debe estar su controlador Z-Wave.

![Groupe](images/duwi.05436/6-Groupes.PNG)

## Bueno saber

-   Como se especifica al principio, el módulo no informa los cambios de posición realizados por el usuario presionando el interruptor directamente. Para tener un retorno del estado, es necesario :
    - ya sea configurar una encuesta a los 5 minutos en la configuración, pestaña 'valores'
![Groupe](images/duwi.05436/7-Poll.PNG)
  - cree un escenario que inicie el comando 'Actualizar' cada x minutos (al menos 1 minuto)
-   La operación de configuración sin límite de tiempo puede ser útil para los comandos de VMC
