# Complemento OCPP

El complemento **OCPP** permite utilizar Jeedom como sistema central OCPP *(Open Charge Point Protocol)*. Ofrece la posibilidad de supervisar uno o varios puntos de recarga de vehículos eléctricos compatibles con este protocolo.

# Configuración

## Configuración del terminal

Para que el complemento pueda comunicarse con el terminal, es imprescindible configurarlo correctamente. Este paso de configuración varía según el modelo y el fabricante, y lo que se espera es lo siguiente:

- **Versión del protocolo**: activar la conexión OCPP en la versión 1.6.
- **Dirección IP/URL/punto final**: introduce la dirección del sistema central OCPP *(ws://``IP_LOCALE_JEEDOM``:9000)*.
- **Identificador del dispositivo**: cada dispositivo debe tener un identificador único para que Jeedom lo reconozca *(ws://``IP_LOCALE_JEEDOM``:9000/``ID_BORNE``)*.

## Configuración del complemento

Al igual que cualquier plugin de Jeedom, el plugin **OCPP** debe activarse tras su instalación. A continuación, una vez instaladas las dependencias, se puede iniciar el demonio.

En los minutos siguientes al inicio del demonio, los puntos de recarga correctamente configurados se conectan al sistema central Jeedom. Los dispositivos correspondientes se crean automáticamente.

>**INFORMACIÓN**
>
>La comunicación se establece por defecto en el puerto `9000`. Es posible modificar este puerto en caso de conflicto, debiendo adaptarse la configuración del terminal en consecuencia.

## Configuración de los dispositivos

### Autorizaciones

Por defecto, cualquier terminal recién creado no permite ninguna carga *(transacción)*.

Un menú desplegable permite autorizar todas las transacciones o seleccionar [un grupo de permisos](#grupos-de-permisos).

>**IMPORTANTE**
>
>En el modo «Permitir todo», se acepta cualquier identificador que se presente en el terminal. El comando **Iniciar carga** muestra entonces la lista de usuarios de Jeedom.

### Parámetros del terminal

La pestaña **Configuración** permite acceder a todos los parámetros de configuración del terminal. Algunos se pueden modificar y otros no. Se dividen en dos grandes grupos: los propios del protocolo OCPP y los específicos del fabricante.

>**INFORMACIÓN**
>
>Para mostrar los campos no editables, hay que hacer clic en el icono con forma de ojo. Haz clic en el ojo tachado para volver a ocultarlos.

Por lo tanto, cada terminal se puede configurar directamente desde el equipo Jeedom haciendo clic en el botón **Guardar los parámetros en el terminal**. A continuación, aparecerá una ventana con una lista de todos los cambios realizados; selecciona los parámetros que desees aplicar y, a continuación, haz clic en **Guardar** para enviarlos al terminal.

>**IMPORTANTE**
>
>Cualquier modificación de un parámetro de configuración del terminal debe realizarse con pleno conocimiento de causa, ya que un error podría provocar fallos de funcionamiento.

# Grupos de permisos

Haz clic en el botón **Autorizaciones** para abrir la ventana de gestión de grupos de autorización. Haz clic en **Añadir un grupo** para añadir un nuevo grupo o selecciona un grupo ya existente para modificarlo.

## Añadir permisos

Cada grupo permite añadir permisos manualmente o descargar/enviar el archivo de permisos en formato CSV.

Para añadir un grupo de permisos, basta con hacer clic en el botón **Añadir un grupo** y, a continuación, introducir el nombre del grupo.

>**INFORMACIÓN**
>
>Al hacer doble clic en el nombre de un grupo, se puede cambiar su nombre.

Una autorización se compone de:
- **un identificador**: único para cada usuario *(por ejemplo, una tarjeta RFID; no distingue entre mayúsculas y minúsculas)*.
- **un nombre**: identificación legible del usuario *(opcional)*.
- **un estado**: Autorizado, Bloqueado, Caducado o No válido.
- **con fecha de caducidad**: fecha de finalización de la autorización *(opcional, salvo en el caso de los terminales Hager, por ejemplo)*
- **autorización para transacciones concurrentes**: marca la casilla para autorizar varias cargas simultáneas para este identificador.

Haz clic en el botón **Guardar autorizaciones** para guardar los grupos de autorizaciones.

# Transacciones

Se puede acceder a los datos de las transacciones *(gastos)* específicos de cada contexto *(todas, por equipo, por autorización)* mediante el botón **Transacciones**:
- **ID**: identificador de la transacción.
- **Equipo**: nombre del equipo de Jeedom.
- **Usuario**: nombre de usuario o nombre del usuario.
- **Inicio**: fecha de inicio.
- **Fin**: fecha de finalización.
- **Duración**: tiempo total de la carga.
- **Consumo (Wh)**: consumo total en vatios-hora.
- **Conector**: número del conector o toma.

>**INFORMACIÓN**
>
>Independientemente de la lista de transacciones solicitadas *(todas, por terminal o por usuario)*, estas se actualizan en tiempo real al crearse o al cerrarse.

# Controles

## Terminal

- **Estado del terminal** *(info/binary)*: estado de activación del terminal.
- **Activar/Desactivar terminal** *(acción/otro)*: disponibilidad del terminal.
- **Estado del terminal** *(info/string)*: estado general del terminal.
- **Error en el terminal** *(info/string)*: último mensaje/código de error.
- **Información del terminal** *(info/string)*: información adicional.
- **Corriente máxima en el terminal** *(info/numérico)*: corriente máxima *(SmartCharging)*.
- **Corriente del terminal** *(acción/control deslizante)*: definir la corriente máxima del terminal *(SmartCharging)*.
- **Potencia máxima del punto de recarga** *(info/numérico)*: potencia máxima *(SmartCharging)*.
- **Potencia del terminal** *(acción/control deslizante)*: definir la potencia máxima del terminal *(SmartCharging)*.
- **Reinicio de software/hardware del terminal** *(acción/otro)*: reiniciar el terminal.

## Conector(es)

- **Estado del conector** *(info/binary)*: estado de activación del conector.
- **Activar/Desactivar conector** *(acción/otro)*: disponibilidad del conector.
- **Estado del conector** *(info/string)*: estado del conector.
- **Error de conector** *(info/string)*: último mensaje/código de error.
- **Información del conector** *(info/string)*: información adicional.
- **Usuario del conector** *(info/string)*: identificador del usuario actual.
- **Iniciar carga en el conector** *(acción/seleccionar)*: iniciar una transacción en el conector.
- **Detener la carga del conector** *(acción/otro)*: detener la transacción en curso.

## Medidas

El plugin crea automáticamente las mediciones según la configuración **MeterValuesSampledData** definida en el terminal.
Cada medida recibida genera un comando **info/numeric**, que se registra de forma predeterminada, con la unidad correspondiente *(Wh, W, A, V, Hz, °C, %, RPM)*.
Si el terminal proporciona valores por fase, los comandos llevan el sufijo **L1**, **L2** o **L3**.

### Ejemplos de medidas

- **Current.Import – Corriente consumida** *(A)*: intensidad de la corriente consumida *(por fase, si está disponible)*.
- **Current.Export – Corriente inyectada** *(A)*: intensidad de la corriente devuelta a la red.
- **Current.Offered – Corriente máxima** *(A)*: intensidad máxima permitida.
- **Energy.Active.Import.Register – Energía consumida** *(Wh)*: energía total utilizada.
- **Energy.Active.Export.Register – Energía inyectada** *(Wh)*: energía total devuelta a la red.
- **Power.Active.Import – Potencia consumida** *(W)*: potencia instantánea consumida.
- **Power.Active.Export – Potencia inyectada** *(W)*: potencia instantánea devuelta a la red.
- **Power.Offered – Potencia máxima** *(W)*: potencia máxima permitida.
- **Voltaje – Tensión** *(V)*: tensión medida *(por fase, si está disponible)*.
- **Frecuencia** *(Hz)*: frecuencia de la red eléctrica.
- **Power.Factor – Factor de potencia**: relación entre la potencia activa y la potencia aparente.
- **SoC – Nivel de carga** *(%)*: estado de carga de la batería del vehículo.
- **Temperatura – Temperature** *(°C)*: temperatura interna del terminal.
- **RPM – Velocidad del ventilador** *(RPM)*: velocidad de rotación del ventilador.
