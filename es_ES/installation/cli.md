# Instalación de línea de comando

Aquí encontrará la documentación para instalar Jeedom en la mayoría de los sistemas Linux (probado y aprobado en la distribución Debian)

> **Importante**
>
> Debian 10 (Buster) es la distribución oficialmente compatible para la versión 3.3.X o más Jeedom (pero Stretch sigue siendo perfectamente funcional). Si no tiene un comando mínimo de entornos Linux, le recomendamos que comience con un Smart.

> **Importante**
>
> La secuencia de comandos de instalación puede ser peligrosa porque supone que su sistema está en blanco. De lo contrario, lea el guión e instálelo a mano.

Conéctese en SSH a su sistema y haga :

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

Entonces solo ve a ``IP_JEEDOM`` desde su navegador de internet.

> **Nota**
>
> Las credenciales predeterminadas son admin / admin

> **Nota**
>
> Se pueden usar los siguientes argumentos : -w = carpeta del servidor web -z = dependencias de instalación z-wave -m = contraseña de root mysql deseada

````
./install.sh -w /var/www/html -z -m Jeedom
````

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index).
