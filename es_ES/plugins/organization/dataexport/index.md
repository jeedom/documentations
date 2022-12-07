# Complemento de exportación de datos

Complemento que permite generar y gestionar el archivo de exportaciones históricas de los pedidos de su elección a un archivo `* .csv`.

El complemento ofrece la posibilidad de exportar los valores brutos de cada pedido durante el período seleccionado o las estadísticas del mismo : **media, min., max., suma, desviación estándar, número de valores, último valor**.

Es posible recuperar el archivo de exportación de varias formas :
- Descarga directa bajo demanda,
- Enviando en el canal de su elección vía programación,
- Enviando en el canal de su elección a través de un escenario.

También se incluye una herramienta de importación para poder integrar valores en el historial de una orden Jeedom.

# Configuration

## Configuración del plugin

El complemento **Exportación de datos** no requiere ninguna configuración específica y solo debe activarse después de la instalación.

## Configuración del equipo

Para administrar sus diferentes lotes de exportación, vaya al menú **Complementos → Organización → Exportación de datos** y haga clic en el equipo que desea configurar.

>**INFORMACIÓN**
>
>El botón **+ Agregar** le permite crear un nuevo lote de exportación.

Puede dar un nombre al lote de exportación, asignarle un objeto principal *(útil para identificar el comando de envío de exportación en un escenario)* y activarlo o desactivarlo.    
Marcar la casilla **Estadísticas** le permite optar por una exportación de estadísticas *(media, min., max., suma, desviación estándar, varianza, número de valores, último valor)* en lugar de valores brutos.

### Elija la periodicidad de la exportación

![Exportación de datos - sélection de la période](./images/dataexport_selectPeriod.png)

Elija el período para el que se debe recuperar el historial entre las posibilidades ofrecidas :
- **Dias** : la selección se hará en el **"X" últimos días** *(minimum:1/maximum:999)*.
- **Período** : Seleccione un **período predefinido** *(Semana actual, semana anterior, mes actual, mes anterior, año actual, año anterior, etc...)*.
- **Fechas** : Complete manualmente el **fechas de inicio y finalización** de la selección.  
>**CONSEJO**
>
>Si no se ingresa la fecha de finalización, será el día actual por defecto.

### Elija los pedidos para exportar

![Exportación de datos - sélection des commandes](./images/dataexport_selectCommands.png)

Luego seleccione los pedidos para los que desea obtener los historiales haciendo clic en el botón azul **Mostrar pedidos históricos**.    

Se abre una ventana y muestra la lista de pedidos registrados con un cuadro de selección para marcar al comienzo de la línea. Cada columna se puede filtrar u ordenar, el botón **Marcha atrás** permite la inversión de la selección actual y el botón verde **Validar** guarda la selección actual.

Debajo del botón selector de comando está **la lista de comandos seleccionados actualmente**.

>**CONSEJO**
>
>Al hacer clic en el nombre de un pedido, se abre la página de configuración del pedido en cuestión.

# Archivar archivos de exportación

Para acceder a las exportaciones archivadas, vaya a la pestaña **Archivar** equipo.

El campo **Retencion** le permite indicar la cantidad de archivos de exportación para mantener en archivos *(minimum:1/maximum:99)*.

Debajo de la parte **Navegación** muestra la lista de archivos de exportación actualmente archivados. Seleccione uno de los archivos para ver **vista previa del documento** *(limitado a las primeras 1000 líneas)* y **activar los botones de descarga y eliminación de archivos**.

# Exportar datos

## Descarga bajo demanda

Una vez elegido el período y los pedidos, guarde el equipo y luego haga clic en el botón azul **Exportación CSV** para generar una nueva exportación que corresponda a los criterios solicitados.

Al final del proceso, el nuevo archivo se agregará automáticamente a la lista de exportaciones en la pestaña **Archivar**. Haga clic en el nombre del archivo para seleccionarlo y luego en el botón verde **Descargar** para descargarlo inmediatamente a través de su navegador.

## Enviar vía programación

Es posible enviar el archivo de exportación en el canal de su elección *(Correo, Telegram, Discord, etc...)* mediante programación configurada directamente en la página del equipo.

![Exportación de datos - Enviar vía programación](./images/dataexport_cronSend.png)

Para activar el horario, marque la casilla **Activar** de la sección **Envío programado**.

Luego aparecen 3 nuevos campos :
- **Programación** : indicar la programación por un cron.
> **CONSEJO**
>
>Haga clic en el signo de interrogación al final de la línea para acceder al asistente cron y configurar fácilmente el horario.

- **Enviar orden** : seleccione el comando Acción / Mensaje que permite enviar en el canal elegido *(facultatif)*.
> **INFORMACIÓN**
>
>Si no se selecciona ningún comando de envío, el archivo de exportación se seguirá generando y archivando.

- **Título del envío** : Complete el título que se adjuntará a este envío *(facultatif)*.
> **CONSEJO**
>
>Es posible utilizar [**etiquetas de escenario**](https://doc.jeedom.com/es_ES/core/4.1/scenario#Les%20tags){:target = "\_ blank"} en el título del envío.  

## Enviar por escenario

También puede enviar el archivo de exportación al canal de su elección *(Correo, Telegram, Discord, etc...)* a través de un escenario.

![Exportación de datos - Enviar por escenario](./images/dataexport_scenarioSend.png)

Luego debe seleccionar el comando **Enviar exportación CSV** correspondiente al lote de exportación deseado en un bloque *Acción* de un escenario.
Complete el **Título** *(facultatif)* así como el **Comando de acción / mensaje para enviar la exportación** en el canal deseado *(facultatif)*.

> **CONSEJO**
>
>En cuanto al envío por programación, es posible utilizar [**etiquetas de escenario**](https://doc.jeedom.com/es_ES/core/4.1/scenario#Les%20tags){:target = "\_ blank"} en el título de envío y el archivo será archivado automáticamente por el complemento si no se ingresa ningún comando de envío.

# Datos de importacion

Si desea integrar datos en el historial de un pedido de Jeedom, puede utilizar esta herramienta. Para hacerlo, debe enviar un archivo de hoja de cálculo con la extensión `csv` **con separadores de punto y coma** que contiene una columna de valores para integrar y una columna de marcas de tiempo correspondientes.

Tenga cuidado con las marcas de tiempo que se pueden interpretar y modificar según la aplicación de hoja de cálculo que esté utilizando. Por ejemplo, **Sobresalir** tiende a eliminar los segundos automáticamente y formatear la fecha en formato francés de forma predeterminada. En este caso, deberá indicar un formato personalizado como `dd / mm / aaaa hh:mm:ss` o `aaaa-mm-dd hh:mm:ss` para celdas que contienen una marca de tiempo.

>**IMPORTANTE**
>
>Importar datos a Jeedom no es trivial y debe hacerse a sabiendas. Siempre es recomendable realizar una copia de seguridad preliminar de Jeedom antes de cualquier intervención de este tipo.

Para acceder a la herramienta de importación de valor, vaya a la página general del complemento y luego haga clic en el botón **Importar**.

![Exportación de datos - Datos de importacion](./images/dataexport_import.png)

La ventana de importación se utiliza para integrar valores en el historial de una orden de tipo Info desde un archivo `*.csv` siempre que :
- El archivo contiene **una columna llamada "Fecha"**,
- El archivo contiene **una columna llamada "Valor"**,
- El separador de columna es **un punto y coma**,
- La **formato de fecha** se ha introducido correctamente (francés \| international).

## Enviar datos

Haga clic en el botón para seleccionar un archivo `CSV`. Una vez cargado, el archivo se verifica y la información importante se muestra en la pantalla :
- **Nombre y talla** del archivo,
- **Número de líneas** a tratar,
- **Período** preocupado por la importación,
- **Fechas y valores** importar.

## Recibir datos

Luego haga clic en el botón para seleccionar el comando destinado a recibir los valores. A continuación, se mostrará en la pantalla información como el subtipo y la unidad.

Si ya existe un historial en el pedido para el período afectado por la importación, también se mostrará su contenido.

## Procesar datos existentes

Si hay un historial en el pedido durante la fase afectada por la importación, la herramienta le preguntará cómo desea administrar estos datos.

3 opciones son posibles :
- **Conservar todos los datos** ya presente en la historia,
- **Reemplazar solo valores duplicados** entre el archivo csv y el historial,
- **Sobrescribir todos los datos** en la historia durante el período.

## Iniciar importación

Una vez que Jeedom haya integrado y verificado el archivo que contiene los datos a importar, se haya ingresado el comando de recepción de datos y se haya realizado su elección con respecto al procesamiento del historial, puede hacer clic en el botón **Importar archivo** para iniciar el procedimiento.
