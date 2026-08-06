# Shutter Management Plugin

El complemento **Gestión de persianas** le permitirá gestionar fácilmente el posicionamiento automático de sus persianas de acuerdo con la elevación y el azimut del sol y / u otras condiciones de su elección. Todos los cálculos se llevan a cabo directamente por el complemento sin necesidad de una conexión a Internet.

Bien entendido, este complemento puede reemplazar todos los escenarios relacionados con la apertura, cierre o posicionamiento de sus persianas. Puede encontrar un ejemplo de uso leyendo [este artículo de blog escrito por Loïc](https://blog.jeedom.com/5543-gestion-de-mes-volets/).

>**Importante**
>
>El complemento **Gestión de persianas** solo funciona con equipos que tienen **una acción / comando de cursor** permitiendo **posicionar la persiana en un cierto porcentaje de apertura / cierre**. Si su obturador solo funciona al abrir / cerrar, el complemento no se podrá utilizar.

# Configuration

El complemento **Gestión de persianas** solo necesita habilitarse después de la instalación y no requiere configuración adicional.

## Configuración de las persianas

Para acceder a los distintos equipos de **Gestión de persianas**, tienes que ir al menú **Complementos → Automatización → Gestión de persianas**.

>**INFORMACIÓN**
>    
>El botón **+ Agregar** le permite agregar un nuevo obturador para automatizar.

Toda la configuración de automatización de cada componente se realiza desde la primera pestaña del equipo :

- **Nombre del componente** : Nombre del equipo.
- **Objeto padre** : Indica el objeto padre al que pertenece el equipo.
- **Categoría** : Le permite elegir la categoría de equipo.
- **Opciones** :
    - **Activar** : Se utiliza para activar el equipo.
    - **Visible** : Hacer visible el equipo.

A continuación, podremos configurar el propio motor de gestión automática :

- **Condición para verificación** : Condición a cumplir para que se active la gestión automática, si esta condición no se cumple el plugin no modificará la posición del panel *(vacío por defecto = siempre activo)*.
- **Frecuencia de verificación** : Frecuencia de comprobación de excepciones y condiciones de posicionamiento.
- **Recuperar el control** : Autorizar o no al sistema de gestión automática a modificar la posición de la persiana si se ha accionado manualmente.
>*Ejemplo : el sistema cierra el obturador y luego lo abre manualmente unos minutos más tarde, luego la gestión automática solo se realizará si **Recuperar el control** Me senté "**Sí**" o que ha pasado el tiempo de recuperación o que la orden **Asumir la gestión** se activa.*

- **Reanudar al cambiar de modo** : Marque la casilla para reanudar la gestión automática en caso de cambio de modo.
- **Acción prioritaria inmediata** : Marque la casilla para que las excepciones de acción inmediata se ejecuten independientemente de otras condiciones, incluso si están suspendidas.

>**Importante**
>
>Los "modos" mencionados aquí se relacionan con los modos definidos en la pestaña **Comandos** de cada equipo de complemento **Gestión de persianas** y no se refiera de ninguna manera a ningún modo de complemento **Modo**.

Posteriormente será necesario indicar las coordenadas del edificio para poder calcular la posición del sol :

- **Usar configuración general** : Marque la casilla para usar los datos de contacto ingresados en la configuración general de Jeedom.

ou

- **Latitud** : La latitud del edificio o la contraventana.
- **Longitud** : La longitud del edificio o la contraventana.
- **Altitud** : La altitud del edificio o la contraventana.

Finalmente, solo queda completar la información relativa al control de la persiana :

- **Porcentajes de cierre / apertura** : Indique el porcentaje mínimo de cierre *(generalmente 0)* y máxima apertura *(generalmente 99 o 100)*.
- **Duración de un viaje** : Tiempo máximo en segundos para realizar un movimiento completo de apertura o cierre.
- **Comando de estado** : Complete el comando info / numérico que indica la posición actual de la persiana.
- **Control de posicionamiento** : Complete el comando de acción / cursor utilizado para colocar el obturador.
- **Actualizar comando** : Complete el comando de acción para actualizar la posición del obturador *(facultatif)*.
- **Acción por defecto** : Acción que se realizará de forma predeterminada si ninguna excepción o posición es válida.

![Configuración](../images/sunshutter_eqLogicConfig.png)

# Exceptions

Esta pestaña te permitirá definir reglas específicas que serán una excepción a las condiciones relativas a la posición del sol en la siguiente pestaña. Las reglas se revisan una tras otra, el motor de gestión automática se detiene en la primera regla válida y coloca la persiana en la posición indicada.

- **Condición** : La condición que debe cumplirse para que la regla sea válida *(facultatif)*.
- **Modo** : Si se ingresa, la condición solo será válida si el obturador se encuentra actualmente en el modo especificado. Es posible especificar varios modos separándolos con comas *(facultatif)*.
- **Excepción inmediata** : Marque la casilla para que la regla se ejecute inmediatamente tan pronto como la condición sea válida. Tenga en cuenta que esto solo funciona cuando cambia el estado de los comandos. Si pones por ejemplo `#hour# == 1022` la excepción inmediata no funcionará. Lo mismo para las variables.
- **Suspender** : Marque la casilla para suspender la gestión automática mientras la regla sea válida.
- **Posición** : La posición deseada en porcentaje si la regla es válida *(vacío = sin acción)*.
- **Etiqueta** : Etiqueta asociada a la validación de la regla de excepción *(facultatif)*.

![Excepciones](../images/sunshutter_exceptions.png)

# Positionnement

Es dentro de esta pestaña donde podrás gestionar el posicionamiento de la persiana de forma automática según la posición del sol.

- **Condición** : Condición, complementaria a la posición, a cumplir para validar el posicionamiento de la persiana *(facultatif)*.
- **Acimut** : Complete los límites de azimut del sol en grados entre los cuales la condición será válida.
- **Elevacion** : Complete los límites de elevación del sol en grados entre los cuales la condición será válida.
- **Posición** : La posición deseada en porcentaje si las condiciones de posicionamiento (y adicionales si aplica) son válidas.
- **Etiqueta** : Etiqueta asociada a la validación de la condición de posicionamiento *(facultatif)*.

![Conditions](../images/sunshutter_conditions.png)

>**CONSEJO**
>
>El sitio [suncalc.org](https://www.suncalc.org){:target = "\_ blank"} permite, una vez ingresada su dirección, visualizar la posición del sol y los ángulos de acimut y elevación según las horas del día *(solo arrastra el solito hacia arriba)*.

# Programmation

Esta pestaña solo aparece si el complemento **Agenda** está instalado en tu Jeedom. Enumera la programación del complemento **Agenda** actuar sobre la gestión automática de este componente para, por ejemplo, planificar una suspensión y una reanudación manual durante las horas de siesta de un niño.

# Commandes

Esta última pestaña da acceso a la lista de comandos y permite definir / borrar modos para la gestión automática de la persiana :

- **Azimut del sol** : Ángulo azimutal actual del sol.
- **Salida del sol** : ángulo de elevación actual del sol.
- **Refrescar** : Forzar actualización de pedidos **Azimut del sol** y **Salida del sol**.
>Por supuesto, es posible utilizar los valores de los comandos **Sol azimut** y **Salida del sol** en otros lugares de Jeedom.

- **Estado de gestión** : Estado actual de la gestión automática en binario *(0 = suspendido / 1 = activo)*.
- **Acción de la fuerza** : Forzar el cálculo de la posición de la persiana según la posición del sol y las excepciones y aplicar el posicionamiento independientemente del estado de la gestión automática *(suspendido o no)*.
- **Última posición** : última posición solicitada al obturador por el complemento.
- **Etiqueta** : Etiqueta correspondiente a una excepción o una condición de posicionamiento válida.
- **Suspender** : Suspende la gestión automática de persianas.
- **Suspender (etiqueta)** : Estado actual de la suspensión de la gestión automática de persianas *(Ninguno / Manual / Automático)*.
- **Reanudar** : Forzar el reinicio de la gestión automática.
>Este es el comando que debe ejecutarse para volver a la gestión automática si ha cambiado la posición de su persiana manualmente y configurado **Recuperar el control** en "**No**".

- **Modo** : Modo de obturador actual.

El botón azul **Agregar un modo** le permite agregar un nuevo comando de acción cuyo nombre corresponderá al nuevo modo actual desde el momento en que se ejecuta.

>**CONSEJO**
>
>Puede, por ejemplo, definir un modo **Día** y un modo **Noche** y ajuste la apertura y el cierre de su persiana de acuerdo con estos 2 modos.

# Santé

El complemento **Gestión de persianas** tiene una ventana **Salud**, en la página de equipamiento general, que le permite ver de un vistazo las configuraciones de cada gestión automática.

# Panel

El complemento también tiene un panel de administración disponible tanto en la versión de escritorio como en la versión móvil. Para activarlo, simplemente vaya a **Complementos → Gestión de complementos**, haga clic en el complemento **Gestión de persianas** y marque las casillas para mostrar los paneles en la parte inferior derecha.
