Descripción
===========

Este complemento le permite crear y administrar termostatos para controlar el
calentando tu casa. Funciona en 2 modos, tu eliges :

-   el modo **histéresis** corresponde a encender y apagar
    calentamiento en función de la temperatura interior, en relación con un
    umbral correspondiente al punto de ajuste. La histéresis ayuda a prevenir
    cambio muy frecuente cuando la temperatura es de alrededor
    la consigna.

<!-- -->

-   el modo **temporal** calcula un porcentaje de calentamiento en un
    ciclo de tiempo predefinido, teniendo en cuenta las diferencias entre el
    consigna y temperatura interior y exterior (aislamiento).
    Este modo es más preciso, tiene un aprendizaje que permite
    ajusta automáticamente los coeficientes pero puede requerir
    algunos ajustes manuales para adaptarlo a su instalación.
    Importante para que el modo horario funcione, absolutamente necesitas un
    sensor de temperatura interior y exterior.

Configuración
=============

Este complemento está destinado a la creación de termostatos en Jeedom. Él
Puede controlar la calefacción, el aire acondicionado o ambos.

La ventaja en comparación con un termostato convencional es que
integrarse completamente en su sistema domótico. Además del
regulación de temperatura, porque eso es lo que le pedimos en
primero, el termostato puede interactuar con todo el equipo
la casa.

Entre sus características están :

-   teniendo en cuenta la temperatura exterior, en consecuencia el
    coeficiente de aislamiento de la casa,

-   un sistema regulatorio que aprende a optimizar la regulación,

-   la posibÉlidad de manejar las puertas para desconectar el termostato,

-   gestión de fallas de equipos, sondas de temperatura
    y calentadores,

-   programación completa con el complemento de agenda, incluido en particular el
    posibÉlidad de anticipar el cambio de consigna para que el
    la temperatura se alcanza a la hora programada (inicio inteligente)

Primero, le mostraremos la implementación, luego
detallar los diferentes ajustes de la configuración del termostato y
finalmente, a través de algunos casos de uso, cómo podemos
enriquecerlo en combinación con otros complementos o usando
Escenarios.

Configuración en unos pocos clics
----------------------------------

El termostato Jeedom es muy potente pero para usar
tradicional, su implementación es realmente simple y rápida, desde
desde el momento en que entendemos los pasos esenciales :

-   definición del motor del termostato (histéresis o tiempo). Es
    la elección del algoritmo de regulación.

-   configuración y rango operativo : Calefacción
    solo, aire acondicionado o ambos, min y
    uso máximo.

-   Definir las acciones que debe realizar el termostato para
    calentar, enfriar o parar.

Luego hay diferentes pestañas :

-   La configuración de los modos define temperaturas de
    instrucciones predeterminadas. Por ejemplo, modo confort a 20 ° C, eco
    a 18 ° C. También puede haber día, noche, vacaciones, ausencia, ... usted
    empieza a ver aquí las posibÉlidades de personalización
    plugin.

-   Para refinar el modo de funcionamiento del termostato, deberá
    También podrá configurar aperturas que interrumpirán
    regulación temporal (por ejemplo, una ventana abierta puede
    dejar de calentar). La definición de esta interrupción
    se hace aquí simplemente.

-   Gestión de modos de falla para sensores de temperatura.
    o para calentar permite definir acciones a ejecutar para
    un modo degradado.

-   La pestaña Configuración avanzada le permite ajustar los parámetros de
    regulación de calefacción.

-   Si además, tiene el complemento Agenda, la programación de
    los cambios de modo se hacen posibles directamente desde
    la pestaña de programación.

Su termostato ahora está operativo y al usar
escenarios o combinándolo con otros complementos (agenda,
presencia, ...), se integrará sin problemas en su instalación
domótica Esto es lo que tenemos en el tablero :

![Aspect sur le dashboard](../images/Termostato.png)

El bloqueo en el widget le permite bloquear el termostato en un
instrucción dada después de un evento imprevisto : dejar, invitados, ....


La creación de un termostato en detalle.
-------------------------------------

Para crear un nuevo termostato, vaya a la página
configuración desplegando el menú Complementos / Bienestar y seleccione
Termostato Haga clic en el botón * Agregar * en la esquina superior izquierda y
ingrese el nombre deseado para su termostato.

![Configuración générale](../images/Termostato_config_générale.png)

Primero, informaremos los parámetros generales de la
termostato Se encuentran en la parte superior izquierda, sección general y es necesario
especifique aquí el objeto principal, la activación y la visibÉlidad del
termostato, información habitual para cualquier usuario de jeedom.

La elección del algoritmo de termostato
--------------------------------------

![Choix de l'algorithme](../images/Termostato31.png)

En esta imagen, se destaca el motor de operación del termostato..
Hay 2 algoritmos posibles para la regulación de la temperatura..

Cuando selecciona el modo de histéresis, el inicio de su
el calentamiento ocurre tan pronto como la temperatura está por debajo del punto de ajuste
menos la histéresis y se apaga tan pronto como la temperatura excede el
punto de ajuste más histéresis.

![Principe du modo hystérésis](../images/PrincipeHysteresis.png)

Por ejemplo, si configura la histéresis a 1 ° C y el punto de ajuste
es 19 ° C, luego el calentamiento se activa cuando la temperatura baja
debajo de 18 ° C y se detiene tan pronto como alcanza los 20 ° C.

Los parámetros a suministrar son la histéresis en ° C y el comando que
permite recuperar la medición de temperatura. Ajustaremos la histéresis en
dependiendo de la precisión del sensor, por ejemplo, para una sonda precisa
a 0.5 ° C, una histéresis de 0.2 ° C es un buen compromiso.

> **Punta**
>
> El parámetro de histéresis se encuentra en la pestaña * avanzada*.

En el caso del modo horario, la calefacción o
el aire acondicionado se define en un ciclo predefinido y la duración de la ejecución
del comando es una función de la diferencia entre el punto de ajuste y el
temperatura medida por el sensor. El algoritmo también calculará
el tiempo de calentamiento (o enfriamiento) en un ciclo dependiendo de
inercia y aislamiento de la habitación.

![Principe du modo temporal](../images/PrincipeTemporel.png)

Finalmente, cuanto más largo sea el tiempo del ciclo, más lenta será la regulación.
Por el contrario, un tiempo demasiado corto provocará cambios frecuentes
de su sistema de calefacción que puede no tener tiempo para
calentar el volumen de la habitación de manera efectiva. Se recomienda no
reducir demasiado este tiempo de ciclo (se incluyen valores aceptables
entre 30 y 60 minutos).

Este tipo de regulación está más optimizada, mejora la comodidad y
permite ahorros sustanciales de energía.

La configuración
----------------

Además del motor de funcionamiento del termostato, puede decidir si
El termostato se utÉliza en calefacción, aire acondicionado o ambos.
Luego indicas su rango de uso : temperaturas mínimas y
máximo definirá los posibles valores de consigna accesibles en
el widget.

![Configuración du fonctionnement](../images/configFonctionnement.png)

A continuación, especifique los comandos que miden el
temperatura y control de la calefacción o aire acondicionado. Tenga en cuenta que el
tiempo motor necesita saber la temperatura exterior. Si usted
no tiene un sensor externo, esto puede ser proporcionado por
el plugin meteorológico.

![Sélection des sondes](../images/selectionsondes.png)

> **Punta**
>
> Los campos `Límite inferior de temperatura` y
> `Borne de température supérieure` définissent la plage de
> funcionamiento del termostato fuera del cual una falla del
> la calefacción está encendida. Ver abajo el párrafo sobre
> acciones por defecto.

Para el control del radiador o aire acondicionado, se describe en
* Pestaña Acciones*. Aquí podemos definir varios
acciones, lo que le da a nuestro termostato la capacidad de controlar
diferentes equipos (caso de operación por zona por ejemplo o
control de otro termostato)

![Actions sur les appareÉls](../images/actionssurappareÉl.png)

Las acciones son aquellas que calientan, enfrían
(aire acondicionado), pare el comando. Una acción complementaria puede
ser considerado en cada cambio de punto de ajuste, ya sea en modo
manual o automático.

Las modas : el punto de partida para la automatización
----------------------------------------------------

Los modos (definidos en la pestaña * Modos *) son
puntos de consigna predeterminados del termostato que corresponden a su modo de
la vida Por ejemplo, el modo **Noche** o **Eco** dar la temperatura que
deseas cuando todos duermen. El modo **Día** o
**Confort** determina el comportamiento del termostato para tener un
temperatura de confort cuando estás en casa. Nada aqui
no está congelado. Puede definir tantos modos como desee para
úselos a través de escenarios (volveremos a eso más adelante).

En la imagen de abajo, el modo **Confort** tiene un punto de ajuste de
19 ° C y para modo **Eco**, el termostato se ajusta a 17 ° C. El modo
**Vacaciones** programa el termostato a 15 ° C en caso de ausencia prolongada.
No es visible en el tablero, porque es un escenario que
programar todo el equipo en * vacaciones * y así posicionar el
termostato en este modo.

![Définition des modos](../images/Definitionmodos.png)

Para definir un modo, proceda de la siguiente manera :

-   Haga clic en el botón * Agregar modo*,

-   donnez un nom à ce modo, par exemple `Eco`,

-   agregue una acción y elija el comando * Termostato * en su
    equipo de termostato,

-   ajustar la temperatura deseada para este modo,

-   marca la casÉlla **Visible** para que aparezca este modo en el
    widget de termostato en el tablero.


>**Importante**
>
>Atención durante el cambio de nombre de un modo es absolutamente necesario revisar los escenarios / equipos que usan el nombre antiguo para pasarlos al nuevo


Las aberturas : para interrumpir temporalmente el termostato
--------------------------------------------------------------

Imagine que desea detener temporalmente su calefacción o
su aire acondicionado, por ejemplo, para ventÉlar la habitación para la cual
el termostato está activo. Para detectar la apertura de la ventana, usted
use un sensor ubicado en la abertura de su ventana, usted
permitiendo así llevar a cabo esta interrupción agregándola en
pestaña de configuración de aperturas. Dos parámetros
adicionales son ajustables aquí, estos son los horarios de apertura y
cierre de la ventana que causará la interrupción y la reanudación
como funciona el termostato.

![Configuración des overtures](../images/configovertures.png)

Para configurar la operación cuando se abre la ventana :

-   sélectionnez l'info du capteur d'overture dans le champ `Ouverture`

-   Ajuste el tiempo antes de que el termostato se apague después de abrir
    el campo `Apagar si está abierto más de (min) :`

-   ajustar el tiempo después de cerrar la ventana permitiendo
    reiniciar el termostato en el campo
    `Rallumer si fermé depuis (min) :`

-   haga clic en el botón * Guardar * para guardar la toma
    cuenta de aperturas

> **Punta**
>
> Es posible definir varias aberturas, esto es necesario
> cuando el termostato controla un área compuesta por varias habitaciones.

> **Punta**
>
> Es posible establecer una alerta si la apertura dura más de xx minutos.


Predecir un modo degradado gracias a la gestión de fallos
-----------------------------------------------------------

Las fallas pueden provenir de sensores de temperatura o
del control de calefacción. El termostato puede detectar una falla durante
una desviación prolongada de la temperatura desde el punto de ajuste.

### Falla de la sonda de temperatura

Si las sondas utÉlizadas por el termostato no devuelven ninguna **cambiar**
temperatura, por ejemplo, si las baterías están gastadas, entonces el
el termostato inicia acciones de falla. Cuando la culpa
ocurre, es posible poner el dispositivo en un
funcionamiento predeterminado, por ejemplo, forzar el orden de un radiador
Cable pÉloto. Más simplemente enviando un mensaje de texto o un
notificación permite ser advertido e intervenir manualmente.

> **Punta**
>
> El parámetro que permite al termostato decidir sobre una falla de
> la sonda se encuentra en la pestaña * Avanzado*. Este es el
> `délai max entre 2 relevés de température`.

![DéfaÉllance des sondes](../images/defaÉllancesonde.png)

Para definir una acción de falla :

-   haga clic en la pestaña * Error de sonda*,

-   haga clic en el botón * Agregar una acción de falla*

-   seleccione una acción y complete los campos asociados

Puede ingresar varias acciones, que se ejecutarán en secuencia
y en el caso de acciones más complejas, use un escenario
(escriba `escenario` sin acento en el campo de acción y luego haga clic en
en otro lugar para poder ingresar el nombre del escenario).

### Falla de calefacción / aire acondicionado

El buen funcionamiento de la calefacción o del aire acondicionado es
condicionado por un buen seguimiento del depósito. Entonces si la temperatura
se desvía del rango operativo del termostato, se enciende
acciones de falla de calefacción / aire acondicionado. Este analisis
tiene lugar durante varios ciclos.

> **Punta**
>
> El parámetro que permite al termostato decidir sobre una falla de
> la sonda se encuentra en la pestaña * Avanzado*. Se trata de la
> `Marge de défaÉllance chaud` por le Calefacción et de la
> `Marge de défaÉllance froid` por la climatisation.

En esta imagen, la acción de falla envía la orden para cambiar a
Modo ECO del radiador por el cable pÉloto, luego envía un mensaje por el
plugin pushbullet.

![DéfaÉllance calefaccion](../images/defaÉllanceCalefacción.png)

Para definir una acción de falla :

-   haga clic en la pestaña * Fallo de calefacción / aire acondicionado*,

-   haga clic en el botón * Agregar una acción de falla*

-   seleccione una acción y complete los campos asociados

Puede ingresar varias acciones, que se ejecutarán en secuencia
y en el caso de acciones más complejas, use un escenario
(escriba `escenario` sin acento en el campo de acción y luego haga clic en
en otro lugar para poder ingresar el nombre del escenario).

Gestione casos especiales con la configuración avanzada del termostato
---------------------------------------------------------------------

Esta pestaña contiene todos los parámetros para ajustar el termostato en modo
temporal En la mayoría de los casos, no hay necesidad de modificar
estos valores, porque el autoaprendizaje calculará automáticamente el
coeficientes Sin embargo, incluso si el termostato puede adaptarse a la
en la mayoría de los casos, es posible ajustar los coeficientes
para una configuración optimizada para su instalación.

![Configuración avancée du
termostato] (../ images / configurationavancee.png)

Los coeficientes son los siguientes :

-   **Coeficiente de calentamiento / coeficiente de enfriamiento** : Él
    es la ganancia del sistema regulatorio . Este valor es
    multiplicado por la diferencia entre el punto de ajuste y la temperatura
    interior medido para deducir el tiempo de calentamiento / enfriamiento.

-   **Aprendizaje en caliente / aprendizaje en frío** : este parámetro indica
    progreso de aprendizaje. Un valor de 1 indica el
    inicio del aprendizaje, el algoritmo realiza un ajuste aproximado
    coeficientes. Luego, a medida que este parámetro aumenta,
    la configuración es refinada. Un valor de 50 indica el final
    de aprendizaje.

-   **Aislamiento de calefacción / aislamiento de aire acondicionado** : este coeficiente es
    multiplicado por la diferencia entre el punto de ajuste y la temperatura exterior
    medido para deducir el tiempo de calentamiento / enfriamiento. Él
    representa la contribución de la temperatura exterior al tiempo de
    calefacción / aire acondicionado y su valor es normalmente menor que
    coeficiente de calefacción / aire acondicionado, en el caso de una habitación
    bien aislado.

-   **Aprenda aislamiento en caliente / Aprenda aislamiento en frío** :
    misma función que la anterior, pero para los coeficientes de aislamiento.

-   **Compensación de calefacción (%) / Compensación de aire acondicionado (%)** : El desplazamiento de calentamiento
    permite tener en cuenta * contribuciones internas *, normalmente no
    no debe repararse, pero se supone que el aprendizaje integra el
    parte dinámica en los otros 2 coeficientes. Los aportes
    interno *, es por ejemplo una computadora que causará un
    aumento de temperatura cuando se enciende, pero también puede ser
    individuos (1 persona = 80 W en promedio), el refrigerador en
    la cocina. En una habitación al sur, es una fachada soleada que
    puede proporcionar energía adicional. En teoría, esto
    coeficiente es negativo.

- **Desplazamiento a aplicar si el radiador se considera caliente (%)** : para usar si su sistema de control de calefacción tiene una inercia significativa, ya sea debido a los radiadores, la configuración de la habitación (distancia entre el radiador y el sensor de temperatura) o el propio sensor de temperatura ( dependiendo del modolo, su reactividad es más o menos). La consecuencia visible de esta inercia es un sobreimpulso temporal del punto de ajuste durante aumentos significativos de temperatura (punto de ajuste que va de 15 ° C a 19 ° C, por ejemplo). Este parámetro corresponde a la diferencia observada entre el período de calentamiento (= el calentamiento está encendido) y el período en que aumenta la temperatura medida por la sonda, dividida por la duración del ciclo configurado.. Por ejemplo, si hay una diferencia de 30 minutos entre el inicio del calentamiento y el inicio del aumento de la temperatura, y la duración de los ciclos de calentamiento se establece en 60 minutos, podemos establecer este parámetro en un 50%. Por lo tanto, cuando un ciclo de calentamiento al 100% es seguido por otro calentamiento, este parámetro hace posible tener en cuenta el calor generado por el radiador en el primer ciclo pero aún no medido por la sonda para el cálculo del segundo ciclo, reduciendo d '' su potencia de calentamiento. La potencia del segundo ciclo se reducirá en un 50% en comparación con el cálculo realizado de acuerdo con la temperatura medida por la sonda..

-   **Autoaprendizaje** : casÉlla de verificación para activar / desactivar
    aprendiendo los coeficientes.

-   **Inicio inteligente** : Esta opción le da inteligencia al
    termostato, anticipando el cambio del punto de ajuste para que el
    temperatura alcanzada a la hora programada. Esta opcion
    requiere el complemento de agenda. Atención para el comienzo inteligente de trabajar
    el aprendizaje debe ser más de 25. Otro punto
    toma ese evento más cercano para venir

-   **Ciclo (min)** : este es el ciclo de cálculo del termostato. Al final
    ciclo y en función de la diferencia entre las temperaturas y el
    punto de ajuste, el termostato calcula el tiempo de calentamiento para el
    siguiente ciclo.

-   **Tiempo de calentamiento mínimo (% del ciclo)** : Si el cálculo da como resultado
    un tiempo de calentamiento inferior a este valor, luego el termostato
    considera que no es necesario calentar / enfriar, el
    el comando pasará al siguiente ciclo. Esto evita
    dañar ciertos dispositivos como estufas, pero también
    lograr una eficiencia energética real.

-   **Margen de falla en caliente / Margen de falla en frío** : este
    el valor se usa para detectar un mal funcionamiento
    calefacción / aire acondicionado. Cuando la temperatura sale de esto
    margen en comparación con el punto de ajuste durante más de 3 ciclos
    el termostato cambia al modo de falla
    calefaccion.

- **Limita los ciclos de encendido / apagado incesante (pellet, gas, fuel oÉl) y PID** : Esta opción le permite regular con diferentes niveles de calefacción.. El retorno de energía del siguiente ciclo debe dar el nuevo punto de ajuste del nivel de calefacción al calentador. Los ciclos terminan al 100%, por lo tanto, tenga un tiempo de ciclo corto.

> **Punta**
>
> El aprendizaje siempre está activo. Pero la fase de inicialización
> puede ser relativamente largo (alrededor de 3 días). Durante este
> fase, es necesario tener períodos suficientemente largos durante
> que el punto de ajuste no cambia.

Controles del termostato
---------------------------

El widget del termostato está integrado en el complemento, los controles de la
Por lo tanto, no todos los termostatos son directamente accesibles en el
Configuración del plugin. Deberá utÉlizar el * Resumen de automatización del hogar * (menú
General) para configurarlos. También serán utÉlizables en
los escenarios.

![Liste des Comandos dans le résumé
domótica] (../ images / TermostatolisteComandos.png)

No todos los comandos son accesibles en la programación, algunos
son información de estado devuelta por el complemento. En
escenarios que encontramos :

![Liste des Comandos dans les
escenarios] (../ images / TermostatoComandosscenario.png)

-   **Las modas** : es posible hacer cambios de modo, por
    ejecutando directamente los comandos (aquí, Comfort, Comfort morning,
    Eco, vacaciones)

-   **Apagado** : este comando corta el termostato, la regulación no es
    más activo, la calefacción / aire acondicionado se detiene

-   **Termostato** : este es el punto de ajuste del termostato

-   **cerradura** : comando de bloqueo, no es posible
    modificar el estado del termostato (cambio de modo, punto de ajuste)

-   **desbloquear** : desbloquea el termostato permitiéndole cambiar su
    Estado

-   **Solo calefacción** : la regulación solo interviene para
    calor

-   **Solo aire acondicionado** : la regulación solo está activa para
    genial

-   **Compensación de calentamiento** : modifica el coeficiente de compensación del calentamiento
    correspondiente a contribuciones internas : un escenario puede cambiar esto
    parámetro basado en un detector de presencia, por ejemplo

-   **Compensación en frío** : como arriba pero para aire acondicionado

-   **Permitir todo** : cambia el comportamiento del termostato para actuar
    tanto calefacción como aire acondicionado

-   **Potencia** : solo disponible en modo horario, este comando indica el porcentaje de tiempo de calentamiento / enfriamiento durante el tiempo del ciclo.

-   **Rendimiento** : solo está disponible si tiene un control de temperatura exterior y un control de consumo (en kWh, restablezca a 0 todos los días a las 00:00). Esto le muestra el rendimiento de su sistema de calefacción en comparación con el día de grado unificado.

-   **Punto de ajuste delta** : solo disponible en modo horario, este comando le permite ingresar un delta de cálculo en el punto de ajuste. Si> 0, entonces el termostato buscará si debe calentarse (punto de ajuste - delta / 2) si es así, buscará calentarse a (punto de ajuste + delta / 2). La ventaja es calentar más tiempo pero con menos frecuencia..

> **Punta**
>
> El uso del termostato en modo `Solo calefacción` requiere
> haber definido los comandos * Para calentar debo ?* y * para todo
> parar tengo que ?* En el modo `Solo aire acondicionado`, debe
> * Para enfriar tengo que ?* y * Para detener todo lo que tengo que ?*.
> Y en el modo `Todos autorizados`, debe haber ingresado el 3
> Comandos.

Un ejemplo concreto del uso del termostato.
----------------------------------------------

Cuando su termostato está configurado, debe realizar el
programación La mejor manera de explicarlo es tomar un
caso de uso. Entonces, queremos programar nuestro termostato en
según las horas de presencia de los ocupantes de la casa.

Primero, usaremos 2 escenarios para poner el
calefacción en modo **Confort** (punto de ajuste 20 ° C) todas las mañanas del
semana entre las 5 a.m. y las 7:30 a.m., luego en la noche entre las 5 p.m. y las 9 p.m.. El modo
**Confort** también se activará el miércoles por la tarde de 12 p.m. a 9 p.m. y
fines de semana de 8 a.m. a 10 p.m.. El resto del tiempo, la calefacción cambia a
**Eco**, con un punto de ajuste de 18 ° C.

Entonces creamos el escenario ***Calefacción de confort***, en modo programado :

![Scénario programmé](../images/Termostato11.png)

y el código :

![Scenario modo confort](../images/scenarioconfort.png)

Sobre el mismo principio, el escenario "Ecocalentamiento"" :

![Scénario programmé en modo Eco](../images/Termostato13.png)

y su código :

![Scénario en modo Eco](../images/scenarioeco.png)

Tenga en cuenta que en los escenarios, el control del termostato está completo
ya que podemos actuar en el modo de funcionamiento (calefacción o
solo), modos, consigna y bloqueo
(bloquear, desbloquear).

Si la creación de escenarios es a veces complicada, para el caso de
programar un termostato, la combinación de acciones del termostato
con el calendario del complemento de agenda permite hacer esto simplemente.

El complemento de agenda le permite ir más allá en la programación y
especialmente presenta menos riesgo de estar equivocado. De hecho, en comparación con
programación anterior, el calendario aparecerá en claro en
la pantalla y podremos tomar días festivos,
vacaciones ... En resumen, controle el termostato de acuerdo con su estÉlo de vida.

Programación con el complemento de agenda
-----------------------------------

No presentamos aquí el complemento Agenda, el objetivo es
emparejar con la programación del termostato. Tenga en cuenta que si usted
tiene el complemento de agenda, aparece una pestaña * Programación * en el
configuración del termostato, que permite el acceso directo a la agenda
asociado.

Entonces vamos a crear una nueva agenda llamada **Programación
Calefacción**, a lo que agregaremos los eventos de cambio de modo de la
Termostato.

Una vez creado el calendario, agregaremos los eventos de la mañana (lunes a
Viernes de 5 a.m. a 7:30 a.m.), tarde (lunes, martes, jueves y viernes de 5 p.m.
9 p.m.), miércoles (miércoles mediodía a 9 p.m.), fin de semana (8 a.m. a 10 p.m.),
Días feriados. Todos estos eventos tienen como acción inicial el
selección de modo **Confort** del termostato y como acción final el
modo **Eco** :

![Actions de l'agenda](../images/agendaactions.png)

Para la programación del evento vespertino :

![Programación de l'évènement](../images/agendaprogrammation.png)

Simplemente repita para cada evento para obtener esta agenda
colorido mensual :

![affichage mensuel de l'agenda](../images/agendamensuel.png)

Volviendo a la configuración del termostato, puede acceder a
calendario de eventos directamente desde la pestaña de programación :

![onglet programmation du
termostato] (../ images / termostato tabprogrammation.png)

Visualización del funcionamiento del termostato.
---------------------------------------------

Una vez que el termostato está configurado, es importante verificar su
eficiencia.

![Menu de visualisation des
termostatos] (../ images / menuaccueÉlTermostatos.png)

Dans le menu `AccueÉl`, on trove le sos-menu `Termostato`. Ventana
que se muestra cuando se selecciona este menú se divide en tres áreas
:

-   El widget del termostato para ver el estado instantáneo del
    Termostato,

-   un gráfico que representa el tiempo de calentamiento acumulado por día (en
    número de horas),

-   otro gráfico que muestra el punto de ajuste, las curvas de temperatura
    estado interior y calefacción.

![cumul du temps de chauffe du
termostato] (../ images / graphecumultempsdechauffe.png)

*Gráfico de tiempo de calentamiento acumulado*

![graphe des corbes du
termostato] (../ images / graphecorbesTermostato.png)

*Gráfico de curva del termostato*

Preguntas frecuentes
===

>**¿Podemos usar el termostato con un piso calentado, que tiene una alta inercia ?**
>
>    El termostato se adapta prácticamente a todos los casos pero
>    esto requiere un análisis exhaustivo de su instalación para
>    ajustar los coeficientes, si estás en un
>    situación especial. Vea la sección sobre * configuración
>    avanzado * para ajustar los coeficientes, especialmente en el caso de un
>    calefacción por suelo radiante. Varios temas en el foro tratan
>    utÉlizando el termostato para diferentes tipos de calefacción
>    (estufa, caldera de suelo radiante, etc.)

>**Mis coeficientes siguen moviéndose**
>
>   Esto es normal, el sistema corrige constantemente sus coeficientes
>   gracias al sistema de autoaprendizaje

>**¿Cuánto tiempo lleva, en el modo de tiempo, aprender ?**
>
>   El sistema tarda en promedio 7 días en aprender y regular
>   forma óptima

>**No puedo programar mi termostato**
>
>   La programación del termostato se puede hacer por un escenario,
>   ya sea con el uso del complemento Agenda.

>**Mi termostato nunca parece entrar en modo de calefacción o aire acondicionado.**
>
>   Si el termostato no tiene control correspondiente a la calefacción
>    y / o aire acondicionado no puede cambiar a estos modos.

>**No importa cómo cambie la temperatura o el modo, el termostato siempre vuelve al estado anterior.**
>
>   Verifique que su termostato no esté bloqueado

>**En modo historial, mi termostato nunca cambia de estado**
>
>   Es que los sensores de temperatura no suben automáticamente
>    su valor, es aconsejable configurar un "Cron de
>    control"

>**Las curvas del termostato (especialmente el punto de ajuste) no parecen ser correctas**
>
>   Mire el lado suavizado del historial de pedidos en cuestión. De hecho, para ganar eficiencia, Jeedom promedia los valores durante 5 minutos y luego durante la hora.

>**La pestaña de modo / acción está vacía y cuando hago clic en los botones Agregar no hace nada**
>
> Intente deshabÉlitar Adbcerradura (o cualquier otro bloqueador de anuncios), por alguna razón desconocida estos bloquean el JavaScript de la página sin motivo.
