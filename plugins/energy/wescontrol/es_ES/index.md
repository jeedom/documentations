# Complemento WES Control

Este complemento te permitirá controlar tu [**Servidor de energía WES de CartElectronic**](https://www.cartelectronic.fr/content/8-serveur-wes){:target="\_blank"} y recuperar todos los datos al instante en Jeedom.

![Imagen de Wes](../images/wes.png)

>**IMPORTANTE**
>
>El complemento es compatible con los servidores Wes con firmware `V0.84A10` mínimo. Para versiones inferiores, existe [la rama «less-than-V0.84A10»](https://github.com/jeedom/plugin-wescontrol/tree/less-than-V0.84A10) Se puede instalar desde GitHub.

>
>El equipo ya está trabajando en la integración de las extensiones de Wes que actualmente no son compatibles, como la extensión de 8 relés o Modbus, y hará todo lo posible para desarrollar el complemento en este sentido lo antes posible.

# Configuración general

## Configuración del complemento

Al igual que cualquier plugin de Jeedom, el plugin **Wes Control** debe activarse tras su instalación.

El complemento **Wes Control** utiliza su propio demonio para mantenerse en contacto constante con el servidor Wes. Puedes comprobar su estado en la página de configuración del complemento.

>**INFORMACIÓN**
>
>No es necesario preocuparse por el estado del demonio una vez activado el complemento, ya que al crear el primer equipo del servidor Wes, este configurará e iniciará automáticamente el demonio.

El complemento no requiere ninguna configuración específica, pero ofrece un campo que permite seleccionar el intervalo, en segundos, entre dos consultas al servidor Wes. *(30 segundos por defecto)*

>**IMPORTANTE**
>
>Si reduces este valor y observas que el sistema se ralentiza o se vuelve inestable, vuelve al valor por defecto *(30)*.

## Configuración del equipo servidor Wes

Para acceder a los distintos dispositivos **Wes Control**, ve al menú **Plugins → Energía → Wes Control**.

![Página de inicio del complemento](../images/wescontrol_navigate.png)

>**INFORMACIÓN**
>
>El botón **+ Añadir** permite añadir un nuevo servidor Wes.

Una vez creado tu equipo servidor Wes, haz clic en él para acceder a la configuración de accesos y a la gestión de equipos y funcionalidades.

Introduzca los datos generales del equipo e indique si dispone de accesorios opcionales conectados al Wes, como una pantalla o una fuente de alimentación de 9 voltios para la medición de la tensión de red, marcando las casillas correspondientes.

A continuación, introduce los datos de acceso al servidor Wes por HTTP para poder comunicarte con él:
- **IP del Wes**: dirección IP en la que se puede acceder al servidor Wes.
- **Puerto del Wes** *(opcional)*: puerto en el que se puede acceder al servidor Wes *(80 por defecto)*.
- **Identificador HTTP**: identificador que permite comunicarse mediante HTTP con el servidor Wes.
- **Contraseña HTTP**: contraseña que permite comunicarse mediante HTTP con el servidor Wes.

El complemento **Wes Control** incluye un archivo diseñado específicamente para Jeedom que permite acceder a más datos de los que están disponibles de forma predeterminada. Es necesario establecer una conexión FTP con el servidor Wes para transferir este archivo, por lo que también hay que rellenar los siguientes campos:
- **Nombre de usuario FTP**: nombre de usuario que permite comunicarse por FTP con el servidor Wes.
- **Contraseña FTP**: contraseña que permite comunicarse por FTP con el servidor Wes.
- **Archivo CGX de Jeedom**: marca la casilla para utilizar el archivo CGX de Jeedom.
- **Enviar archivo CGX**: Una vez introducidos los datos de conexión FTP, haz clic en este botón para transferir inmediatamente el archivo a la web.

>**INFORMACIÓN**
>
>Los datos de acceso al servidor Wes se pueden consultar desde la interfaz web del Wes, en el menú **Configuración → Acceso seguro**.

## Gestión de equipos / funcionalidad

La sección **Gestión de equipos** te permitirá seleccionar las funciones del Wes que deseas activar o desactivar.

Cada **casilla marcada** dará lugar a la **creación automática del dispositivo correspondiente** y, a la inversa, **cada casilla desmarcada** dará lugar a la **eliminación automática del dispositivo correspondiente**:

![Gestión de equipos](../images/wescontrol_generalManage.png)

# Equipo / configuración funcional

De vuelta a la página general del plugin **Wes Control**, los dispositivos activados anteriormente se agrupan por servidor y se ordenan en menús desplegables clasificados por tipo de función.

El campo de búsqueda permite visualizar inmediatamente el equipo buscado. A la derecha, el icono con forma de cruz cancela la búsqueda, la carpeta abierta despliega todos los menús y la carpeta cerrada los oculta.

![Navegación por los dispositivos](../images/wescontrol_screenshot1.png)

>**CONSEJO**
>
>Es posible reorganizar cada menú de la lista manteniendo pulsado el botón del ratón sobre él hasta colocarlo en el lugar deseado.

Como de costumbre, al hacer clic en un dispositivo, se accede a su página de configuración, donde se puede introducir la información general y consultar la lista de comandos.

## Parámetros de equipos opcionales

Algunos dispositivos cuentan con parámetros de configuración adicionales que habrá que introducir al activarlos.

Estos parámetros pueden ser el tipo de medida que hay que registrar para las pinzas amperimétricas *(consumo o producción)* o la fórmula de la tarifa eléctrica relacionada con la teleinformación, por ejemplo.

Otras pueden referirse a la selección de un tipo de material específico para personalizar las imágenes ilustrativas de los equipos, como el tipo de contador de impulsos *(agua, gas, gaspar)* o el tipo de pinza amperimétrica utilizada *(20 amperios o 100 amperios)*, entre otras cosas.

## Interfaz WES

En cada página de equipo (incluido el servidor Wes) hay, en la esquina superior derecha, un botón azul llamado **Interfaz Wes** que permite abrir la interfaz web del servidor Wes en una nueva pestaña de tu navegador.

En función del tipo de dispositivo que estés utilizando, se te redirigirá automáticamente a la página de interfaz correspondiente a esta función.

# Próximos desarrollos

El equipo ya está trabajando en la integración de las extensiones de Wes que actualmente no son compatibles, como la extensión de 8 relés o Modbus, y hará todo lo posible para desarrollar el complemento en este sentido lo antes posible.
