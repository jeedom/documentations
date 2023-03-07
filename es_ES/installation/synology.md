# Instalación en Synology

Aquí encontrará la documentación paso a paso para instalar Jeedom en un Synology (DSM 5.2 mínimo).

## Instalación de Docker

Ir al centro de paquetes :

![install synology 1](images/install_synology_1.PNG)

Haga clic en todo, luego instale el paquete Docker

![install synology 2](images/install_synology_2.PNG)

Espere hasta que termine la instalación :

![install synology 3](images/install_synology_3.PNG)

> **Importante**
>
> Para acceder al paquete Docker, debe tener DSM 5.2 y un NAS compatible

## Jeedom recuperación de imagen

Inicie la aplicación Docker :

![install synology 4](images/install_synology_4.PNG)

Haga clic en "Registrarse" :

![install synology 5](images/install_synology_5.PNG)

En el campo de búsqueda, escriba "jeedom", seleccione jeedom/jeedom y haga clic en descargar :

![install synology 20](images/install_synology_20.PNG)

Luego valide la solicitud de versión, lo mejor es tomar la última (tomar la última versión).
 _Pero para algunos modelos de Sybology puede ser necesario elegir la versión *-buster_

Luego haga clic en la imagen, aquí puede seguir el progreso de la descarga (puede tomar varias decenas de minutos) :

![install synology 21](images/install_synology_21.PNG)

## Configuración de contenedores

Una vez terminado, haga clic en la imagen y luego inicie :

![install synology 22](images/install_synology_22.PNG)

Dé un nombre a su libertad, marque la casilla "Ejecutar el contenedor con privilegios elevados", luego haga clic en parámetros avanzados y luego en los parámetros del puerto redirigido el puerto 80 (aquí alrededor de 9080) :

![install synology 26](images/install_synology_23.PNG)

Luego, en "Volumen", agregue los siguientes 2 volúmenes :

![install synology 26](images/install_synology_24.PNG)

Marque "Ejecutar el contenedor con privilegios elevados" y luego valide todo.

> **Importante**
>
> Cierto complemento necesita tener transmisión de red (tipo de complemento Xioami), para esto DEBE cambiar ABSOLUTAMENTE a la red en modo host (solo posible durante la creación), cambie el puerto de escucha predeterminado del servidor web ( escriba 9080 para el servidor web)

> **Importante**
>
> En caso de error, si el servicio de Apache no se inicia con este error en los registros: ```function not implemented: AH00141: Could not initialize random number generator``` en este caso debes usar la imagen `jeedom/jeedom4.3-buster`.

Después de una primera o más larga fase de inicio, solo tiene que ir a IP_NAS:9080

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
