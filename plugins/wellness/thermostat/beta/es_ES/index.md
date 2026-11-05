# Plugin de termostato

# Descripción

Este complemento permite crear y gestionar termostatos para controlar la calefacción de tu hogar. Funciona en dos modos, a elegir:

-   El modo **histéresis** consiste en encender y apagar la calefacción en función de la temperatura interior, en relación con un umbral correspondiente al valor de consigna. La histéresis permite evitar conmutaciones demasiado frecuentes cuando la temperatura se encuentra en torno al valor de consigna.
-   El modo **temporal** calcula un porcentaje de calefacción en un ciclo temporal predefinido, teniendo en cuenta las diferencias entre la temperatura de consigna y las temperaturas interior y exterior (aislamiento). Este modo es más preciso, cuenta con una función de aprendizaje que permite ajustar automáticamente los coeficientes, pero puede requerir algunos ajustes manuales para adaptarlo a su instalación. Es importante destacar que, para que el modo temporal funcione, es imprescindible disponer de un sensor de temperatura interior Y otro exterior.

# Configuración

Este complemento está pensado para crear termostatos en Jeedom. Permite controlar la calefacción, el aire acondicionado o ambos a la vez.

La ventaja con respecto a un termostato convencional es que se puede integrar totalmente en tu sistema de domótica. Además de regular la temperatura, que es lo que se le pide en primer lugar, el termostato puede interactuar con todos los dispositivos de la casa.

Entre sus características se encuentran:

-   tener en cuenta la temperatura exterior y, por lo tanto, el coeficiente de aislamiento de la vivienda,
-   un sistema de regulación que aprende para optimizar la regulación,
-   la posibilidad de controlar las persianas para desactivar el termostato,
-   la gestión de averías en equipos, sensores de temperatura y aparatos de calefacción,
-   una programación completa con el complemento de agenda, que incluye, entre otras cosas, la posibilidad de anticipar el cambio de temperatura de consigna para que se alcance la temperatura deseada a la hora programada (Smartstart)

En primer lugar, te mostraremos cómo se instala; a continuación, te explicaremos detalladamente los distintos ajustes de configuración del termostato y, por último, a través de algunos ejemplos de uso, te mostraremos cómo se puede ampliar su funcionalidad combinándolo con otros complementos o mediante escenarios.

## Configuración en unos pocos clics

El termostato de Jeedom es muy potente, pero para un uso convencional, su configuración es realmente sencilla y rápida, siempre y cuando se hayan entendido los pasos esenciales:

-   Definición del motor del termostato (histeresis o temporal). Se trata de la elección del algoritmo de regulación.
-   la configuración y el rango de funcionamiento: solo calefacción, aire acondicionado o ambos, temperaturas mínima y máxima de uso.
-   La definición de las acciones que debe realizar el termostato para calentar, enfriar o detenerse.

A continuación, aparecen varias pestañas:

-   La configuración de los modos establece temperaturas de consigna predeterminadas. Por ejemplo, el modo «confort» a 20 °C y el modo «eco» a 18 °C. También puede haber modos de día, de noche, de vacaciones, de ausencia, etc. Aquí ya empiezas a vislumbrar las posibilidades de personalización del complemento.
-   Para ajustar el funcionamiento del termostato, también podrás configurar situaciones en las que se interrumpa temporalmente la regulación (por ejemplo, una ventana abierta puede detener la calefacción). La configuración de esta interrupción se realiza aquí de forma sencilla.
-   La gestión de los modos de fallo de los sensores de temperatura o del sistema de calefacción permite definir las acciones que deben llevarse a cabo en caso de funcionamiento en modo degradado.
-   La pestaña «Configuración avanzada» permite ajustar los parámetros de regulación de la calefacción.
-   Además, si dispones del complemento Agenda, podrás programar los cambios de modo directamente desde la pestaña «Programación».

Tu termostato ya está operativo y, mediante el uso de escenarios o combinándolo con otros complementos (agenda, virtual, presencia, etc.), se integrará a la perfección en tu sistema de domótica. Esto es lo que se ve por defecto en el panel de control:

![Vista del panel de control](./images/thermostat.png)

El candado que aparece en el widget permite bloquear el termostato en una temperatura determinada, ante cualquier imprevisto: vacaciones, invitados, etc.

## La creación de un termostato, paso a paso

Para crear un nuevo termostato, accede a la página de configuración desplegando el menú **Plugins → Confort** y selecciona **Termostato**. Haz clic en el botón **Añadir** situado en la parte superior izquierda e introduce el nombre que desees para tu termostato.

![Configuración general](./images/thermostat_config_générale.png)

En primer lugar, vamos a introducir los parámetros generales del termostato. Se encuentran en la parte superior izquierda, en la sección «General», y aquí hay que especificar el objeto principal, la activación y la visibilidad del termostato, información habitual para cualquier usuario de Jeedom.

## La elección del algoritmo del termostato

![Elección del algoritmo](./images/thermostat31.png)

En esta imagen se destaca el motor de funcionamiento del termostato. Existen dos algoritmos posibles para la regulación de la temperatura.

Cuando seleccionas el modo **Histeresis**, la calefacción se enciende en cuanto la temperatura es inferior al valor de consigna menos la histéresis y se apaga en cuanto la temperatura supera el valor de consigna más la histéresis.

![Principio del modo de histéresis](./images/PrincipeHysteresis.png)

Por ejemplo, si se ajusta la histéresis a 1 °C y el valor de consigna es de 19 °C, la calefacción se activa cuando la temperatura desciende por debajo de los 18 °C y se apaga en cuanto alcanza los 20 °C.

Los parámetros que hay que proporcionar son el valor de histéresis en °C y el comando que permite obtener la lectura de temperatura. La histéresis se ajustará en función de la precisión del sensor; por ejemplo, para una sonda con una precisión de 0,5 °C, una histéresis de 0,2 °C es un buen término medio.

Es posible tener en cuenta únicamente la histéresis positiva marcando la casilla **Histéresis positiva**. En el modo «Calefacción», el termostato se activará en cuanto la temperatura interior sea inferior a la valor de consigna o, en el modo «Aire acondicionado», en cuanto la temperatura interior sea superior a la valor de consigna.

![Histéresis](./images/thermostat1.png)

> **INFORMACIÓN**
>
> Los parámetros relacionados con la histéresis se encuentran en la pestaña **Avanzado**.

En el caso del modo **Temporal**, el control de la calefacción o la climatización se establece en un ciclo predefinido y la duración de la ejecución del control depende de la diferencia entre el valor de consigna y la temperatura medida por el sensor. El algoritmo también calculará el tiempo de calentamiento (o de refrigeración) en un ciclo en función de la inercia y el aislamiento de la estancia.

![Principio del modo temporizado](./images/PrincipeTemporel.png)

Por último, cuanto mayor sea el tiempo de ciclo, más lenta será la regulación. Por el contrario, un tiempo demasiado corto provocará conmutaciones frecuentes en el sistema de calefacción, que quizá no tenga tiempo de calentar el volumen de la estancia de forma eficaz. Se recomienda no reducir demasiado este tiempo de ciclo (los valores aceptables oscilan entre 30 y 60 minutos).

Este tipo de regulación está más optimizado, mejora el confort y permite lograr un ahorro energético considerable.

## La configuración general

Además del modo de funcionamiento del termostato, puedes decidir si el termostato se utiliza en modo calefacción, refrigeración o ambos. A continuación, indicas su rango de uso: los valores de consigna mínimo y máximo definirán los valores de consigna disponibles en el widget.

![Configuración del funcionamiento](./images/configFonctionnement.png)

A continuación, hay que especificar los comandos que permiten medir las temperaturas. Ten en cuenta que el modo «Temporal» necesita conocer obligatoriamente la temperatura exterior. Si no dispones de un sensor exterior, esta puede proporcionarla el complemento «Meteo».

![Selección de sensores](./images/selectionsondes.png)

> **CONSEJO**
>
> Los campos `Température minimale` y `Température maximale` definen el rango de funcionamiento del termostato fuera del cual se activa un fallo del sensor *(véase más abajo el apartado sobre las acciones en caso de fallo*).

También es posible indicar el consumo diario en kWh de tu calefacción *(opcional)*; esto permitirá mostrar una indicación del rendimiento de tu calefacción mediante el cálculo **consumo/DJU** *(grados-día unificados)*. Asimismo, puedes mostrar cualquier comando que elijas en el termostato introduciéndolo en el campo **Comando personal**.

## Las acciones

Todo lo relacionado con el control del radiador o del aire acondicionado se describe en la pestaña **Acciones**. En ella se pueden definir varias acciones, lo que permite que nuestro termostato controle diferentes equipos (por ejemplo, en el caso de un funcionamiento por zonas o el control de otro termostato).

![Acciones en los dispositivos](./images/actionssurappareil.png)

Las acciones son aquellas que permiten calentar, enfriar (aire acondicionado) o detener el control. Se puede prever una acción complementaria cada vez que se modifique el valor de consigna, ya sea en modo manual o automático.

## Los modos: el punto de partida para la automatización

Los modos (definidos en la pestaña **Modos**) son ajustes predeterminados del termostato que se adaptan a tu estilo de vida. Por ejemplo, el modo *Noche* o *Eco* establece la temperatura que deseas cuando todo el mundo duerme. El modo *Día* o *Confort* determina el comportamiento del termostato para mantener una temperatura agradable cuando estás en casa. Aquí nada es fijo. Puedes definir tantos modos como desees para utilizarlos a través de escenarios (volveremos sobre esto más adelante).

En la imagen siguiente, el modo *Confort* tiene un valor de consigna de 19 °C y, en el modo *Eco*, el termostato está ajustado a 17 °C. El modo *Vacaciones* programa el termostato a 15 °C en caso de ausencia prolongada. No aparece en el panel de control, ya que se trata de un escenario que programa todos los dispositivos en modo *Vacaciones* y, de este modo, ajusta el termostato a este modo.

![Definición de los modos](./images/Definitionmodes.png)

Para configurar un modo, sigue estos pasos:

-   Haz clic en el botón *Añadir modo*,
-   Ponle un nombre a este modo, por ejemplo `Eco`,
-   añade una acción y selecciona el comando *Termostato* de tu equipo de termostato,
-   ajusta la temperatura deseada para este modo,
-   Marca la casilla **Visible** para que este modo aparezca en el widget del termostato del Dashboard.

>**IMPORTANTE**
>
>Atención: al cambiar el nombre de un modo, es imprescindible revisar los escenarios y los dispositivos que utilizan el nombre anterior para actualizarlo al nuevo.

## Las aberturas: para desactivar temporalmente el termostato

Imaginemos que quieres apagar momentáneamente la calefacción o el aire acondicionado, por ejemplo, para ventilar la habitación en la que está activo el termostato. Para detectar la apertura de la ventana, utilizarás un sensor situado en el marco móvil de la ventana, lo que te permitirá realizar esta interrupción añadiéndolo en la pestaña de configuración de aperturas. Aquí se pueden ajustar dos parámetros adicionales: los tiempos de apertura y cierre de la ventana que provocarán la interrupción y la reanudación del funcionamiento del termostato.

![Configuración de las aberturas](./images/configouvertures.png)

Puedes configurar el envío de una alerta si alguna de las ventanas indicadas en esta página permanece abierta durante más de `XX` minutos.

Para configurar el funcionamiento al abrir la ventana:

-   selecciona la información del sensor de apertura en el campo `Ouvrant`
-   Ajustar el tiempo antes de que se apague el termostato tras la apertura en el campo `Éteindre si ouvert plus de (min.) :`
-   Ajustar el tiempo tras cerrar la ventana que permite reiniciar el termostato en el campo `Rallumer si fermé depuis (min.) :`
-   Haz clic en el botón *Guardar* para registrar las aperturas.

> **CONSEJO**
>
> Es posible definir varias aberturas; esto es necesario cuando el termostato controla una zona compuesta por varias estancias.

## Predecir un modo degradado gracias a la gestión de fallos

Las averías pueden deberse a los sensores de temperatura o al sistema de control de la calefacción. El termostato puede detectar un fallo cuando se produce una desviación prolongada de la temperatura respecto al valor de consigna.

### Falla de la sonda de temperatura

El termostato activa un fallo de sonda si la última lectura de temperatura es demasiado antigua, si la temperatura interior es inferior al mínimo o superior al máximo configurado, o si el valor no es válido. Cuando se produce el fallo, es posible poner el aparato en un modo de funcionamiento predeterminado, por ejemplo, forzar la orden de un radiador con cable de control. De forma más sencilla, el envío de un mensaje SMS o de una notificación permite recibir una alerta e intervenir manualmente.

> **IMPORTANTE**
>
> El `Délai entre 2 réceptions de T°` se encuentra en la pestaña *Avanzado*. Este control utiliza la fecha de recogida de la orden de temperatura del termostato. Deja este campo en blanco o en `0` desactiva el control del retardo. Los límites `Température minimale` y `Température maximale` se encuentran en la pestaña *Equipos*; un campo vacío desactiva el control correspondiente.

![Fallo de los sensores](./images/defaillancesonde.png)

Para definir una acción en caso de fallo:

-   haz clic en la pestaña *Fallo del sensor*,
-   Haz clic en el botón *Añadir una acción de fallo*
-   seleccione una acción y complete los campos asociados

Puedes introducir varias acciones, que se ejecutarán de forma secuencial y, en el caso de acciones más complejas, utilizar un escenario *(escribir `scenario` sin acentos en el campo «Acción» y, a continuación, haz clic en otro lugar para poder introducir el nombre del escenario)*.

En las opciones de acciones en caso de fallo de un sensor, las siguientes etiquetas permiten personalizar las notificaciones:

| Etiqueta | Contenido |
| --- | --- |
| `#failure_message#` | Mensaje detallado con el nombre del termostato, las causas, la temperatura y los límites afectados, o el plazo y la fecha de la última recepción. |
| `#failure_reason#` | Códigos de causas activas, separados por comas: `timeout`, `temperature_low`, `temperature_high`, `invalid_temperature`. |
| `#temperature#` | Último valor de temperatura conocido. |
| `#last_collect#` | Fecha de la última lectura de la temperatura. |
| `#slider#` | Ajuste del termostato, como antes. |

Por ejemplo, introducir `#failure_message#` en el texto de una notificación da `[Maison][Salon] : Température intérieure 32 °C supérieure au maximum autorisé 30 °C` o `[Maison][Salon] : Aucune mise à jour de la température depuis 47 minutes (délai maximal : 30 minutes, dernière réception : …)`.

La situación general sigue siendo `Défaillance sonde`. Los detalles del fallo están disponibles en los registros y en las opciones de las acciones a través de las etiquetas anteriores.

Las acciones existentes se conservan. Un fallo persistente no reinicia las acciones en cada comprobación; la aparición de una nueva causa las reinicia una sola vez con un mensaje que agrupa los fallos activos. El retorno a la normalidad reinicia cada causa por separado. Los controles de tiempo y de valores no válidos son compartidos por los motores de tiempo e histéresis; los excesos de los límites mínimo/máximo siguen activando sus acciones desde el control periódico.

### Falla de calefacción / aire acondicionado

El correcto funcionamiento de la calefacción o el aire acondicionado depende de un buen control de la temperatura de consigna. El termostato analiza la evolución de la temperatura en relación con la consigna y los márgenes de fallo de calor/frío a lo largo de varios ciclos. Los límites absolutos de temperatura mínima y máxima se deben al fallo del sensor descrito anteriormente.

> **IMPORTANTE**
>
> Los parámetros de detección de averías en la calefacción o el aire acondicionado se encuentran en la pestaña *Avanzado*. Se trata de la `Marge de défaillance chaud` para la calefacción y la `Marge de défaillance froid` para la climatización.

![Avería de la calefacción](./images/defaillancechauffage.png)

Para definir una acción en caso de fallo:

-   haz clic en la pestaña *Avería de la calefacción/aire acondicionado*,
-   Haz clic en el botón *Añadir una acción de fallo*
-   seleccione una acción y complete los campos asociados

Puedes introducir varias acciones, que se ejecutarán de forma secuencial y, en el caso de acciones más complejas, utilizar un escenario *(escribir `scenario` sin acentos en el campo «Acción» y, a continuación, haz clic en otro lugar para poder introducir el nombre del escenario)*.

## Gestione casos especiales con la configuración avanzada del termostato

Esta pestaña contiene todos los parámetros de configuración del termostato en modo programable. En la mayoría de los casos, no es necesario modificar estos valores, ya que el sistema de autoaprendizaje calculará automáticamente los coeficientes. Sin embargo, aunque el termostato puede adaptarse a la mayoría de las situaciones, es posible ajustar los coeficientes para optimizar la configuración de tu instalación.

![Configuración avanzada del termostato](./images/configurationavancee.png)

Los coeficientes son los siguientes:

-   **Coeficiente de calefacción / Coeficiente de refrigeración**: se trata de la ganancia del sistema de regulación. Este valor se multiplica por la diferencia entre la temperatura de consigna y la temperatura interior medida para calcular el tiempo de calefacción o refrigeración.
-   **Aprendizaje en caliente / Aprendizaje en frío**: este parámetro indica el estado de avance del aprendizaje. Un valor de 1 indica el inicio del aprendizaje; el algoritmo realiza un ajuste aproximado de los coeficientes. A medida que este parámetro aumenta, el ajuste se va perfeccionando. Un valor de 50 indica el final del aprendizaje.
-   **Aislamiento de calefacción / Aislamiento de aire acondicionado**: este coeficiente se multiplica por la diferencia entre la temperatura de consigna y la temperatura exterior medida para calcular el tiempo de calefacción o aire acondicionado. Representa la influencia de la temperatura exterior en el tiempo de calefacción o aire acondicionado y su valor suele ser inferior al coeficiente de calefacción o aire acondicionado, en el caso de una estancia bien aislada.
-   **Aprendizaje de aislamiento térmico / Aprendizaje de aislamiento frigorífico**: misma función que la anterior, pero para los coeficientes de aislamiento.
-   **Desviación de la calefacción (%) / Desviación del aire acondicionado (%)**: La desviación de la calefacción permite tener en cuenta las *fuentes internas de calor*; normalmente no debería ser fija, pero se supone que el aprendizaje integra la parte dinámica en los otros dos coeficientes. Las *aportaciones internas* son, por ejemplo, un ordenador que provoca un aumento de la temperatura al encenderse, pero también pueden ser las personas (1 persona = 80 W de media) o el frigorífico de la cocina. En una habitación orientada al sur, una fachada soleada puede aportar energía adicional. En teoría, este coeficiente es negativo.
- **Compensación que hay que aplicar si se considera que el radiador está caliente (%)**: utilícela si su sistema de control de la calefacción presenta una inercia considerable, ya sea debido a los radiadores, a la configuración de la estancia (distancia entre el radiador y el sensor de temperatura) o al propio sensor de temperatura (según los modelos, su capacidad de respuesta es mayor o menor). La consecuencia visible de esta inercia es un rebasamiento temporal del valor de consigna durante los aumentos importantes de temperatura (por ejemplo, cuando la consigna pasa de 15 °C a 19 °C). Este parámetro corresponde al desfase observado entre el periodo de calentamiento (= la calefacción está encendida) y el periodo en el que la temperatura registrada por el sensor aumenta, dividido por la duración del ciclo configurada. Por ejemplo, si se observa un desfase de 30 minutos entre el inicio del calentamiento y el inicio del aumento de temperatura, y la duración de los ciclos de calentamiento está ajustada en 60 minutos, se puede establecer este parámetro en el 50 %. De este modo, cuando a un ciclo de calefacción al 100 % le sigue otro ciclo, este parámetro permite tener en cuenta el calor generado por el radiador en el primer ciclo, pero que aún no ha sido medido por la sonda, a la hora de calcular el segundo ciclo, reduciendo en la misma proporción su potencia de calefacción. La potencia del segundo ciclo se reducirá entonces en un 50 % con respecto al cálculo realizado en función de la temperatura medida por el sensor.
-   **Autoaprendizaje**: casilla de selección para activar o desactivar el aprendizaje de los coeficientes.
-   **Smart Start**: Esta opción permite dotar de inteligencia al termostato, anticipando el cambio de consigna para que la temperatura se alcance a la hora programada. Esta opción requiere tener instalado el complemento de agenda. Atención: para que el Smart Start funcione, es imprescindible que el nivel de aprendizaje sea superior a 25. Otro punto a tener en cuenta es que solo tiene en cuenta el evento más próximo que vaya a producirse.
-   **Ciclo (min)**: se trata del ciclo de cálculo del termostato. Al final del ciclo y en función de la diferencia entre las temperaturas y el valor de consigna, el termostato calcula el tiempo de calentamiento para el siguiente ciclo.
-   **Tiempo mínimo de calentamiento (% del ciclo)**: Si el cálculo da como resultado un tiempo de calentamiento inferior a este valor, el termostato considera que no es necesario calentar o refrigerar, por lo que el control se pospondrá hasta el siguiente ciclo. Esto permite evitar daños en determinados aparatos, como las estufas, y, al mismo tiempo, lograr una verdadera eficiencia energética.
-   **Margen de fallo de calefacción / Margen de fallo de refrigeración**: este valor se utiliza para detectar un fallo de funcionamiento de la calefacción o la climatización. Cuando la temperatura se sale de este margen con respecto al valor de consigna durante más de tres ciclos consecutivos, el termostato pasa al modo de fallo de calefacción.
- **Limita los ciclos incesantes de encendido/apagado (pellets, gas, gasóleo) y PID**: Esta opción permite regular con diferentes niveles de calefacción. La señal de retorno de la potencia del siguiente ciclo debe indicar al aparato de calefacción el nuevo valor de consigna del nivel de calefacción. Los ciclos finalizan al 100 %, por lo que es necesario que la duración del ciclo sea corta.
- **Diferencial de consigna - temperatura exterior para el modo calefacción/aire acondicionado**: el termostato selecciona el modo (calefacción o aire acondicionado) en función de la consigna y la temperatura exterior (por motivos de ahorro, se parte del principio de que la temperatura interior tiende a igualarse a la temperatura exterior). Con estos parámetros puedes modificar el umbral. Ej.: si quieres 25 y fuera hace 22, por defecto el termostato se pondrá en modo calefacción (solo se pone en este modo para el cálculo, lo que no significa que vaya a calentar), al establecer el delta de calefacción en 4, ya no calentará porque 25-22=3 y 3<4, por lo que pasará al modo de refrigeración (siempre y cuando, claro está, la temperatura interior sea superior a la temperatura de consigna).

> **INFORMACIÓN ÚTIL**
>
> El autoaprendizaje está siempre activo. Sin embargo, la fase de inicialización puede ser relativamente larga *(unos 3 días)*. Durante esta fase, es conveniente que haya periodos lo suficientemente largos en los que el valor de consigna no cambie.

## Controles del termostato

![Lista de comandos en el resumen de domótica](./images/thermostatlistecommandes.png)

No todos los comandos son accesibles mediante programación; algunos son datos de estado que devuelve el complemento. En los escenarios se encuentran:

![Lista de comandos en los escenarios](./images/thermostatcommandesscenario.png)

-   **Los modos**: es posible cambiar de modo ejecutando directamente los comandos (en este caso, Confort, Confort matutino, Eco, Vacaciones)
-   **Apagado**: este comando desactiva el termostato, la regulación ya no está activa y la calefacción o el aire acondicionado se apagan
-   **Termostato**: se trata del valor de consigna del termostato
-   **lock**: comando de bloqueo; no es posible modificar el estado del termostato (cambio de modo, valor de consigna)
-   **desbloquear**: desbloquea el termostato para poder modificar su estado
-   **Solo calefacción**: la regulación solo se activa para calentar
-   **Solo aire acondicionado**: la regulación solo está activa para enfriar
-   **Offset de calefacción**: modifica el coeficiente de offset de la calefacción correspondiente a las aportaciones internas: un escenario puede modificar este parámetro en función, por ejemplo, de un detector de presencia.
-   **Compensación de frío**: igual que arriba, pero para el aire acondicionado
-   **Todo permitido**: modifica el funcionamiento del termostato para que actúe tanto en modo calefacción como en modo aire acondicionado
-   **Potencia**: disponible únicamente en modo temporizado, este comando indica el porcentaje de tiempo de calefacción/refrigeración respecto al tiempo total del ciclo.
-   **Rendimiento**: solo disponible si dispone de un control de temperatura exterior y un control de consumo (en kWh, que se pone a cero todos los días a las 00:00). Este indicador le muestra el rendimiento de su sistema de calefacción en relación con los grados-día unificados.
-   **Delta de consigna**: disponible únicamente en modo temporizado, este comando permite introducir un delta de cálculo sobre la consigna. Si es > 0, el termostato comprueba si debe calentar hasta (consigna - delta/2); en caso afirmativo, intentará calentar hasta (consigna + delta/2). La ventaja es que se calienta durante más tiempo, pero con menos frecuencia.

> **Consejo**
>
> El uso del termostato en modo `Chauffage seulement` es necesario haber definido los comandos «*¿Qué tengo que hacer para encender la calefacción?*» y «*¿Qué tengo que hacer para apagarlo todo?*». En modo `Climatisation seulement`, se necesitan los comandos *¿Qué tengo que hacer para enfriar?* y *¿Qué tengo que hacer para apagarlo todo?*. Y en modo `Tout autorisé`, es necesario haber introducido los tres comandos.

## Un ejemplo concreto de uso del termostato

Una vez configurado el termostato, hay que programarlo. La mejor forma de explicarlo es partir de un caso práctico. Por ejemplo, queremos programar nuestro termostato en función de las horas en que los ocupantes están en casa.

En un primer momento, vamos a utilizar dos escenarios para poner la calefacción en modo **Confort** (temperatura de consigna de 20 °C) todas las mañanas de la semana entre las 5:00 y las 7:30, y por la tarde entre las 17:00 y las 21:00. El modo **Confort** también se activará los miércoles por la tarde, de las 12:00 a las 21:00, y los fines de semana, de las 8:00 a las 22:00. El resto del tiempo, la calefacción pasará al modo **Eco**, con una temperatura de consigna de 18 °C.

Por lo tanto, creamos el escenario ***Calefacción de confort***, en modo programado:

![Escenario programado](./images/thermostat11.png)

y el código:

![Modo de confort](./images/scenarioconfort.png)

Siguiendo el mismo principio, el escenario «Calefacción Eco»:

![Escenario programado en modo Eco](./images/thermostat13.png)

y su código:

![Escenario en modo Eco](./images/scenarioeco.png)

Ten en cuenta que, en los escenarios, el control del termostato es completo, ya que se puede modificar el modo de funcionamiento (solo calefacción o solo aire acondicionado), los modos, el valor de consigna y el bloqueo (bloquear, desbloquear).

Aunque la creación de escenarios puede resultar complicada en ocasiones, en el caso de la programación de un termostato, la combinación de las acciones del termostato con el calendario del complemento de agenda permite hacerlo de forma sencilla.

El complemento de agenda permite ir más allá en la programación y, sobre todo, reduce el riesgo de cometer errores. De hecho, a diferencia de la programación anterior, el calendario aparecerá claramente en la pantalla y podremos tener en cuenta los días festivos, las vacaciones... En definitiva, controlar el termostato en función de nuestro estilo de vida.

## Programación con el complemento de agenda

Aquí no vamos a presentar el complemento Agenda, ya que el objetivo es vincularlo con la programación del termostato. Cabe destacar que, si dispones del complemento Agenda, aparecerá una pestaña llamada *Programación* en la configuración del termostato, que te permitirá acceder directamente a la agenda asociada.

Por lo tanto, vamos a crear una nueva agenda llamada **Programación de la calefacción**, a la que añadiremos los eventos de cambio de modo del termostato.
Una vez creado el calendario, vamos a añadir los eventos «Mañana» (de lunes a viernes, de 5:00 a 7:30), «Tarde» (los lunes, martes, jueves y viernes, de 17:00 a 21:00), «Miércoles» (los miércoles, de 12:00 a 21:00), «Fin de semana» (de 8:00 a 22:00) y «Días festivos». Todos estos eventos tienen como acción inicial la selección del modo **Confort** del termostato y como acción final el modo **Eco**:

![Actividades de la agenda](./images/agendaactions.png)

Para la programación del evento «Noche»:

![Programación del evento](./images/agendaprogrammation.png)

Basta con repetir la operación para cada evento para obtener este colorido calendario mensual:

![vista mensual de la agenda](./images/agendamensuel.png)

Al volver a la configuración del termostato, se puede acceder a los eventos del calendario directamente desde la pestaña «Programación»:

![pestaña de programación del termostato](./images/thermostatongletprogrammation.png)

## Visualización del funcionamiento del termostato

Una vez configurado el termostato, es importante comprobar su eficacia.

![Menú de visualización de los termostatos](./images/menuaccueilthermostats.png)

En el menú `Accueil`, se encuentra el submenú `Thermostat`. La ventana que aparece al seleccionar este menú se divide en tres zonas:

-   El *widget* del termostato, para ver el estado actual del termostato,
-   un gráfico que representa el tiempo acumulado de calefacción al día (en número de horas),
-   otro gráfico que muestra las curvas de consigna, la temperatura interior y el estado de la calefacción.

![acumulación del tiempo de calentamiento del termostato](./images/graphecumultempsdechauffe.png)

*Gráfico del tiempo acumulado de calentamiento*

![gráfico de las curvas del termostato](./images/graphecourbesthermostat.png)

*Gráfico de las curvas del termostato*

# Preguntas frecuentes

>**¿Se puede utilizar el termostato con un suelo radiante, que presenta una gran inercia?**
>
>El termostato se adapta prácticamente a cualquier situación, pero es necesario realizar un análisis en profundidad de tu instalación para ajustar los coeficientes si te encuentras en una situación particular. Consulta la sección sobre *configuración avanzada* para ajustar los coeficientes, especialmente en el caso de la calefacción por suelo radiante. En el foro hay varios hilos que tratan sobre el uso del termostato para los diferentes tipos de calefacción (estufa, caldera, suelo radiante, etc.).

>**Mis coeficientes no dejan de variar**
>
>   Es normal, el sistema corrige constantemente sus coeficientes gracias al sistema de autoaprendizaje.

>**¿Cuánto tiempo se tarda, en términos de tiempo, en aprender?**
>
>El sistema tarda una media de 7 días en aprender y regularse de forma óptima

>**No consigo programar mi termostato**
>
>La programación del termostato puede realizarse mediante un escenario o utilizando el complemento Agenda.

>**Parece que mi termostato nunca pasa al modo de calefacción o aire acondicionado**
>
>Si el termostato no dispone de un mando correspondiente a la calefacción y/o al aire acondicionado, no podrá activarse en estos modos.

>**Por mucho que cambie la temperatura o el modo, el termostato siempre vuelve al estado anterior**
>
>Comprueba que tu termostato no esté bloqueado

>**En modo de histéresis, mi termostato nunca cambia de estado**
>
>El caso es que los sensores de temperatura no envían automáticamente sus valores, por lo que se recomienda configurar una «tarea programada de control».

>**Las curvas del termostato (en concreto, el valor de consigna) no parecen ser correctas**
>
>Comprueba si se ha suavizado el historial de los comandos en cuestión. De hecho, para ganar en eficiencia, Jeedom calcula la media de los valores cada 5 minutos y luego cada hora.

>**La pestaña «Modo/Acción» está vacía y, cuando hago clic en los botones «Añadir», no ocurre nada**
>
>Intenta desactivar Adblock (o cualquier otro bloqueador de anuncios), ya que, por alguna razón desconocida, estos bloquean sin motivo el JavaScript de la página.
