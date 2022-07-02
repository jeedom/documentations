# Instalación en Synology

Aquí encontrará la documentación paso a paso para instalar Jeedom en un Synology (DSM 5.2 o más).

## Instalación de Docker

Ir al centro de paquetes :

![install synology 1](images/install_synology_1.PNG)

Haga clic en todo, luego instale el paquete Docker

![install synology 2](images/install_synology_2.PNG)

Espere hasta que finalice la instalación :

![install synology 3](images/install_synology_3.PNG)

> **Importante**
>
> Para tener acceso al paquete Docker es absolutamente necesario tener DSM 5.2 y un NAS compatible

## Recuperación de imagen Jeedom

Inicie la aplicación Docker :

![install synology 4](images/install_synology_4.PNG)

Haga clic en "Registrarse" :

![install synology 5](images/install_synology_5.PNG)

En el campo de búsqueda, escriba "jeedom", seleccione jeedom/jeedom (tome la última versión) y haga clic en descargar :

![install synology 20](images/install_synology_20.PNG)

Luego valide la solicitud de versión, lo mejor es tomar la última.

Luego haga clic en la imagen, aquí puede seguir el progreso de la descarga (puede tomar varias decenas de minutos)) :

![install synology 21](images/install_synology_21.PNG)

## Configuración de contenedores

Una vez hecho esto, haga clic en la imagen y luego inicie :

![install synology 22](images/install_synology_22.PNG)

Asigne un nombre a su jeedom, marque la casilla "Ejecutar el contenedor usando privilegios elevados", luego haga clic en configuración avanzada y luego en la configuración del puerto, redirija el puerto 80 (aquí a 9080) :

![install synology 26](images/install_synology_23.PNG)

Luego, en "Volumen", agregue los siguientes 2 volúmenes :

![install synology 26](images/install_synology_24.PNG)

Marque "Ejecutar el contenedor usando privilegios elevados" y luego valide todo.

> **IMPORTANTE**
>
> Algunos complementos deben tener la transmisión de red (tipo de complemento Xioami), para esto debe ABSOLUTAMENTE cambiar a la red en modo host (es posible solo durante la creación), cambiar el puerto de escucha predeterminado del servidor web (tipo 9080 para servidor web)

Tras una 1ª fase de puesta en marcha más o menos larga, solo hay que ir a IP_NAS:9080

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
