# Instalación de la línea de comandos

# Instalación automática

Para una instalación automática, siga la documentación correspondiente a su tipo de sistema : 

- Sobre una [Máquina virtual](https://doc.jeedom.com/es_ES/installation/vm)
- Sobre el [bearemetal (similar a Intel Nuc)](https://doc.jeedom.com/es_ES/installation/baremetal)

# Instalación manual

Aquí encontrará la documentación para instalar Jeedom en Debian

> **Importante**
>
> Debian 10 (Buster) es la distribución con soporte oficial para la versión 3.3.X o más de Jeedom (pero Stretch sigue siendo perfectamente funcional). Si no tienes unos conocimientos mínimos de entornos Linux, te aconsejamos que empieces con un Smart.

> **Importante**
>
> El script de instalación puede ser peligroso, porque asume que su sistema está limpio. De lo contrario, lea el script e instálelo manualmente.

>**PUNTAS**
>
>Para saber la ip de la vm (una vez conectada a ella se muestran los identificadores en la pantalla de conexión) realizada ``ip -s -c -h a``

SSH en su sistema y hacer :

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

Entonces solo ve a ``IP_JEEDOM`` desde su navegador web.

> **Nota**
>
> Las credenciales predeterminadas son admin/admin

> **Nota**
>
> Se pueden usar los siguientes argumentos : -w = carpeta del servidor web -z = instalar las dependencias de z-wave -m = contraseña raíz de mysql deseada

````
./install.sh -w /var/www/html -z -m Jeedom
````

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index).
