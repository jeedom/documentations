# Crear una máquina virtual en VMware

Aquí veremos cómo crear una máquina virtual en VMware.

Antes hay algo importante que debes saber sobre VMware: hay dos formas de gestionarlo:

-   La interfaz web (presente por defecto en la versión 6.0 actualización 2, o a través de un VIB para las demás versiones) se accede mediante IP\_ESXI/ui
-   el cliente pesado y tradicional de VMware (vSphere Client)

En este caso, utilizaré principalmente la interfaz web, ya que creo que es el futuro de VMware, que cada vez se aleja más del cliente pesado (de hecho, todas las novedades desde la versión 5.1 no son compatibles con el cliente pesado).

Cabe señalar también que la interfaz web aún se encuentra en fase de implementación en VMware, por lo que es probable que te encuentres con algunos errores o ralentizaciones, pero basta con actualizar la página para que todo vuelva a funcionar sin problemas.

# Conexión a la interfaz web

Accede a IP\_ESXI/ui con tu navegador de Internet; deberías ver lo siguiente:

![vmware.createvm3](../images/vmware.createvm3.PNG)

> **Nota**
>
> Si aún no tienes nada, te recomiendo que instales la interfaz web; toda la información [aquí](vmware.trucs_et_astuces)

Introduce tus datos de acceso a ESXI:

![vmware.createvm4](../images/vmware.createvm4.PNG)

Como podéis ver, la interfaz es bastante agradable y permite hacer muchas cosas; no voy a entrar en detalles, pero desde esta pantalla ya podéis:

-   detener/reiniciar el ESXi
-   ver el uso de los recursos (CPU, memoria y disco)
-   obtener información sobre tu sistema (tiempo de funcionamiento, versión de VMware, versión de la BIOS, visualización de los datastores)
-   botón para crear una máquina virtual (lo vamos a usar enseguida)
-   un botón de acción que, entre otras cosas, permite pasar al modo de mantenimiento (muy útil si tienes un clúster de ESXi; de lo contrario, nunca lo usarás) y activar o desactivar el servicio SSH (se utiliza en el tutorial de configuración de copias de seguridad)

# Envío de la imagen ISO de instalación

Una vez que hayas descargado tu imagen ISO de instalación ([aquí](https://cdimage.debian.org/cdimage/archive/11.8.0/amd64/iso-cd/debian-11.8.0-amd64-netinst.iso) (por ejemplo, para Debian 11.8 en instalación desde red), debes guardarlo en tu almacén de datos.

Para ello, haz clic en «datastore»:

![vmware.createvm18](../images/vmware.createvm18.PNG)

Selecciona tu almacén de datos (normalmente se llama «datastore1»):

![vmware.createvm19](../images/vmware.createvm19.PNG)

Haz clic en «Explorador de la base de datos»:

![vmware.createvm20](../images/vmware.createvm20.PNG)

Haz clic en «Descargar» (el primero):

![vmware.createvm21](../images/vmware.createvm21.PNG)

Selecciona la imagen ISO que has descargado previamente y confirma:

![vmware.createvm22](../images/vmware.createvm22.PNG)

A continuación, puede seguir el estado del envío:

![vmware.createvm23](../images/vmware.createvm23.PNG)

Una vez finalizado el proceso, podrás comprobar que tu ISO se ha guardado correctamente en el almacén de datos:

![vmware.createvm24](../images/vmware.createvm24.PNG)

# Creación de tu primera máquina virtual

Haz clic en el botón «Crear/Guardar una máquina virtual»:

![vmware.createvm5](../images/vmware.createvm5.PNG)

Haz clic en «Siguiente»:

![vmware.createvm6](../images/vmware.createvm6.PNG)

A continuación, asigna un nombre a tu máquina e indica su sistema operativo (en este caso, vamos a instalar Debian):

![vmware.createvm7](../images/vmware.createvm7.PNG)

Indica el almacén de datos de destino:

![vmware.createvm8](../images/vmware.createvm8.PNG)

Aquí podrás configurar los parámetros de tu equipo (disco duro, CPU, memoria…​):

![vmware.createvm9](../images/vmware.createvm9.PNG)

> **Nota**
>
> Todos estos parámetros se pueden modificar posteriormente sin problemas; sin embargo, hay que tener en cuenta que no es realmente posible reducir el tamaño de un disco duro: se puede aumentar (pero hay que saber gestionarlo a nivel del sistema operativo después), pero no reducirlo.

En la unidad de CD/DVD, selecciona «Archivo ISO de la base de datos»:

![vmware.createvm10](../images/vmware.createvm10.PNG)

A continuación, selecciona la ubicación donde está guardado tu archivo ISO (véase el capítulo anterior) y confirma:

![vmware.createvm11](../images/vmware.createvm11.PNG)

A continuación, haz lo siguiente:

![vmware.createvm12](../images/vmware.createvm12.PNG)

A continuación, aparecerá un resumen de tu configuración; haz clic en «Finalizar»:

![vmware.createvm13](../images/vmware.createvm13.PNG)

Aparecerá un mensaje en la parte superior indicándote que todo está bien; a continuación, haz clic en «Máquinas virtuales»:

![vmware.createvm14](../images/vmware.createvm14.PNG)

Deberías ver tu máquina virtual (si no es así, haz clic en «Actualizar»); haz clic en ella:

![vmware.createvm15](../images/vmware.createvm15.PNG)

Si tienes una página de este tipo, haz clic en el botón de reproducción:

![vmware.createvm16](../images/vmware.createvm16.PNG)

Tu ordenador se encenderá y podrás instalar tu sistema operativo:

![vmware.createvm17](../images/vmware.createvm17.PNG)

> **Importante**
>
> Una vez instalada tu máquina, es IMPRESCINDIBLE instalar las herramientas de VMware (esto permite a VMware obtener información sobre tu máquina virtual y apagarla correctamente). En Debian, basta con ejecutar «sudo apt-get -y install open-vm-tools».

Para continuar con la instalación, te invito a leer esto [tutorial](debian.installation)

# Montar los dispositivos USB en la máquina virtual

> **Nota**
>
> Si no ves las opciones que aparecen a continuación, significa que tienes que actualizar el ESXi Embedded Host Client; toda la información [aquí](vmware.trucs_et_astuces)

Es una necesidad bastante poco habitual, pero tuve que recurrir a ella para Jeedom, ya que tengo conectadas en mi ESXi las claves Z-Wave, RFXcom, Edisio, enOcean y GSM, y necesitaba conectarlas a mi máquina virtual Jeedom para poder utilizarlas.

> **Nota**
>
> Con Z-Wave, RFXcom, edisio y enOcean no hay ningún problema; en cuanto a los módulos GSM, debes seguir estas instrucciones [tutorial](gsm.huawei_mode_modem) antes para forzar la clave en modo módem únicamente; de lo contrario, esta no se detecta correctamente en el ESXi.

Accede a tu máquina virtual y selecciona «Modificar parámetros»:

![vmware.createvm25](../images/vmware.createvm25.PNG)

Haz clic en «Añadir otro dispositivo» y, a continuación, selecciona «Controlador USB»:

![vmware.createvm26](../images/vmware.createvm26.PNG)

> **Nota**
>
> El siguiente paso deberá repetirse para cada dispositivo USB que desee conectar

Guarda, vuelve a seleccionar «Modificar ajustes», luego «Añadir otro dispositivo» y «Dispositivo USB»:

![vmware.createvm27](../images/vmware.createvm27.PNG)

Elige tu dispositivo USB en la lista desplegable:

![vmware.createvm28](../images/vmware.createvm28.PNG)

Y ya está, tu dispositivo está conectado a tu máquina virtual. Cada vez que se reinicie, se volverá a conectar automáticamente a la máquina virtual y, si lo desconectas o conectas físicamente, se volverá a conectar a tu máquina virtual. En otras palabras, su uso es ahora totalmente transparente.
