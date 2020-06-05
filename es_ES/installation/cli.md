# Instalación de línea de comando

# Instalación automática

Puede instalar directamente el SO y Jeedom al mismo tiempo mientras automatiza desde el ISO disponible [aquí](https://images.jeedom.com/x86-64/). Luego solo tiene que hacer "Instalar en el disco" (tecla enter), luego "sí" (flecha hacia abajo y luego ingresar). Todo lo demás se hará automáticamente (de 10 a 30 minutos), luego, una vez que el vm se reinicie, esperará 5 minutos y deberá tener acceso a Jeedom simplemente poniendo la ip de jeedom en un navegador.

# Instalación manual

Aquí encontrará la documentación para instalar Jeedom en Debian

> **Importante**
>
> Debian 10 (Buster) es la distribución oficialmente compatible para la versión 3.3.X o más de Jeedom (pero Stretch sigue siendo perfectamente funcional). Si no tiene un comando mínimo de entornos Linux, le recomendamos que comience con un Smart.

> **Importante**
>
> La secuencia de comandos de instalación puede ser peligrosa porque supone que su sistema está en blanco. De lo contrario, lea el guión e instálelo a mano.

>**Consejos**
>
>Para conocer la IP de la VM (una vez conectada a ella, los identificadores se muestran en la pantalla de conexión) ``ip -s -c -h a``

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
