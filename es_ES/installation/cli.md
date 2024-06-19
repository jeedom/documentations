# Instalación de línea de comando

# Instalación automática

Para la instalación automática, siga la documentación correspondiente a su tipo de sistema : 

- Sobre una [VM](https://doc.jeedom.com/es_ES/installation/vm)
- En [metal desnudo (tipo Intel Nuc)](https://doc.jeedom.com/es_ES/installation/baremetal)

# Instalación manual

Aquí encontrará la documentación para instalar Jeedom en Debian

> **Importante**
>
> Debian 10 es la distribución oficialmente soportada para la versión 3.3.X de Jeedom (pero Stretch sigue siendo perfectamente funcional).  Debian 11 es la distribución oficial de la versión 4.xx. Si no tienes un conocimiento mínimo de entornos Linux, te aconsejamos que optes por una caja Jeedom como Luna, Atlas o Smart.

> **Importante**
>
> La secuencia de comandos de instalación puede ser peligrosa porque supone que su sistema está en blanco. De lo contrario, lea el guión e instálelo a mano.

>**Consejos**
>
>Para conocer la IP de la VM (una vez conectada a ella, los identificadores se muestran en la pantalla de conexión) ``ip -s -c -h a``

Conéctese en SSH a su sistema y haga :

````
wget https://www.jeedom.com/install
chmod +x install
./install
````

Entonces solo ve a ``IP_JEEDOM`` desde su navegador de internet.

> **Nota**
>
> Las credenciales predeterminadas son admin / admin

> **Nota**
>
> Se pueden usar los siguientes argumentos : -w = carpeta del servidor web -z = dependencias de instalación z-wave -m = contraseña de root mysql deseada

````
./install -w /var/www/html -z -m Jeedom
````

>**Nota**
>
>Si deseas instalar la versión alfa de jeedom debes hacer :
````
wget https://raw.githubusercontent.com/jeedom/core/alpha/install/install.sh
chmod +x install.sh
./install.sh -v alpha
````

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index).
