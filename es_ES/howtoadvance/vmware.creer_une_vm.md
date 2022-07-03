# Crear una máquina virtual bajo vmware

Veremos aquí cómo crear una VM bajo VMware.

Primero, hay una cosa importante que debe saber sobre VMware, hay 2 formas de administrarlo :

-   la interfaz web (presente por defecto en 6.0 actualización 2, o a través de un vib para otras versiones), se accede por IP\_ESXI/ui
-   Cliente pesado e histórico de VMware (cliente vSphere)

Aquí usaré principalmente la interfaz web porque creo que es el futuro de VMware que está abandonando cada vez más el cliente pesado (además de todas las características nuevas desde el 5.1 no se puede usar con el cliente grueso).

También tenga en cuenta que la interfaz web aún se está configurando en VMware, de hecho, seguramente encontrará algunos errores o ralentizaciones con una pequeña actualización de la página y comenzará de nuevo sin preocupaciones.

# Iniciar sesión en la interfaz web

Vaya a IP\_ESXI/ui con su navegador de Internet, debe tener :

![vmware.createvm3](images/vmware.createvm3.PNG)

> **Nota**
>
> Si no tienes nada te aconsejo que instales la interfaz web, toda la información [aquí](https://doc.jeedom.com/es_ES/howtoadvance/vmware.trucs_et_astuces)

Ingrese sus credenciales de inicio de sesión de ESXI :

![vmware.createvm4](images/vmware.createvm4.PNG)

Como puedes ver la interfaz es bastante agradable y te permite hacer muchas cosas, no voy a entrar en detalles pero ya puedes hacerlo desde esta pantalla :

-   apagar/reiniciar el ESXi
-   ver el uso de recursos (CPU, memoria y disco)
-   tener información sobre su sistema (tiempo de actividad, versión de VMware, versión de BIOS, visualización de almacenes de datos)
-   botón para crear una VM (la usaremos justo después)
-   un botón de acción que le permite cambiar al modo de mantenimiento (útil si tiene un clúster ESXi, de lo contrario nunca lo usará), activar/desactivar el servicio SSH (se usa en el tutorial de configuración de respaldo)

# Enviando la iso de instalación

Después de descargar su iso de instalación ([aquí](http://cdimage.debian.org/debian-cd/10.4.0/amd64/iso-cd/debian-10.4.0-amd64-netinst.iso) por ejemplo para debian 8.5 en netinstall), tienes que ponerlo en tu almacén de datos.

Para hacer esto, haga clic en almacén de datos :

![vmware.createvm18](images/vmware.createvm18.PNG)

Seleccione su almacén de datos (generalmente se llama datastore1) :

![vmware.createvm19](images/vmware.createvm19.PNG)

Haga clic en "Navegador de almacén de datos" :

![vmware.createvm20](images/vmware.createvm20.PNG)

Haga clic en "Descargar" (el primero) :

![vmware.createvm21](images/vmware.createvm21.PNG)

Selecciona la iso previamente descargada y valida :

![vmware.createvm22](images/vmware.createvm22.PNG)

A continuación, puede seguir el progreso del envío :

![vmware.createvm23](images/vmware.createvm23.PNG)

Una vez terminado, puede ver que su iso ha llegado al almacén de datos :

![vmware.createvm24](images/vmware.createvm24.PNG)

# Creación de su primera máquina virtual

Haga clic en el botón "Crear/Registrar una VM"" :

![vmware.createvm5](images/vmware.createvm5.PNG)

Haga clic en Siguiente :

![vmware.createvm6](images/vmware.createvm6.PNG)

Luego dale un nombre a tu máquina y especifica su sistema operativo (aquí instalaremos un Debian) :

![vmware.createvm7](images/vmware.createvm7.PNG)

Especificar el almacén de datos de destino :

![vmware.createvm8](images/vmware.createvm8.PNG)

Aquí podrás configurar los parámetros de tu máquina (disco duro, cpu, memoria…​) :

![vmware.createvm9](images/vmware.createvm9.PNG)

> **Nota**
>
> Todos estos parámetros se pueden cambiar después del hecho sin preocupaciones, tenga en cuenta de todos modos que no es realmente posible reducir el tamaño de un disco duro, se puede aumentar (pero debe saber cómo administrar esto a nivel del 'OS entonces) pero no reducirlo.

En la unidad de CD/DVD, seleccione "Archivo ISO de base de datos" :

![vmware.createvm10](images/vmware.createvm10.PNG)

Luego seleccione la ubicación donde se almacena su ISO (ver capítulo anterior) y valide :

![vmware.createvm11](images/vmware.createvm11.PNG)

Entonces haz lo siguiente :

![vmware.createvm12](images/vmware.createvm12.PNG)

A continuación, tiene un resumen de su configuración, haga clic en "Finalizar" :

![vmware.createvm13](images/vmware.createvm13.PNG)

Un mensaje en la parte superior le dirá que está bien, luego haga clic en "Máquinas virtuales" :

![vmware.createvm14](images/vmware.createvm14.PNG)

Debería ver su máquina virtual (si no, haga clic en "Actualizar"), haga clic en ella :

![vmware.createvm15](images/vmware.createvm15.PNG)

Debe tener una página de este tipo, haga clic en el botón de reproducción :

![vmware.createvm16](images/vmware.createvm16.PNG)

Su máquina se iniciará y podrá instalar su sistema operativo :

![vmware.createvm17](images/vmware.createvm17.PNG)

> **Importante**
>
> Una vez que su máquina esté instalada, es ABSOLUTAMENTE necesario instalar las herramientas de VMware (le permite a VMware tener información sobre su máquina virtual y apagarla correctamente)). En Debian simplemente haga "sudo apt-get -y install open-vm-tools".

Para el resto de la instalación te invito a leer esto [tutorial](https://doc.jeedom.com/es_ES/howtoadvance/debian.installation)

# Montar dispositivos USB en la VM

> **Nota**
>
> Si no tiene las opciones a continuación, debe actualizar ESXi Embedded Host Client, toda la información [aquí](https://doc.jeedom.com/es_ES/howto/doc-howto-vmware.trucs_et_astuces.html)

Es una necesidad bastante rara, pero tuve que usarla para Jeedom, de hecho tengo las claves Zwave, RFXcom, edisio, enOcean y GSM conectadas en mi ESXi y tuve que conectarlas a mi VM Jeedom para poder usarla.

> **Nota**
>
> Para Zwave, RFXcom, edisio y enOcean no hay problema, para llaves GSM tienes que seguir esto [tutorial](https://doc.jeedom.com/es_ES/howtoadvance/gsm.huawei_mode_modem) antes de forzar la tecla en modo modem solo de lo contrario no se ve correctamente en el ESXi.

Vaya a su VM y luego haga "Cambiar configuración" :

![vmware.createvm25](images/vmware.createvm25.PNG)

Haga clic en "Agregar otro dispositivo" y luego en el controlador USB :

![vmware.createvm26](images/vmware.createvm26.PNG)

> **Nota**
>
> El siguiente paso deberá repetirse para cada dispositivo USB que desee conectar

Guarde, repita "Cambiar configuración", luego "Agregar otro dispositivo" y "Dispositivo USB" :

![vmware.createvm27](images/vmware.createvm27.PNG)

Elija su dispositivo USB de la lista desplegable :

![vmware.createvm28](images/vmware.createvm28.PNG)

Y ahora su dispositivo está conectado a su VM. En cada reinicio, se volverá a conectar automáticamente a la VM y, si lo desconecta/conecta físicamente, se volverá a conectar a su VM. En otras palabras, el uso ahora es totalmente transparente.
