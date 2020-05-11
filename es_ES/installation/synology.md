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

## Recuperación e instalación de imágenes de Jeedom

Inicie la aplicación Docker :

![install synology 4](images/install_synology_4.PNG)

Haga clic en "Registrarse" :

![install synology 5](images/install_synology_5.PNG)

En el campo de búsqueda, escriba "jeedom", seleccione jeedom / jeedom y haga clic en descargar :

![install synology 20](images/install_synology_20.PNG)

Luego valide la solicitud de versión, lo mejor es tomar la última.

Luego haga clic en la imagen, aquí puede seguir el progreso de la descarga (puede tomar varias decenas de minutos) :

![install synology 21](images/install_synology_21.PNG)

Una vez terminado, haga clic en la imagen y luego inicie :

![install synology 22](images/install_synology_22.PNG)

Asigne un nombre a su libertad así como un puerto local redirigido al puerto 80 (aquí 9080) y luego haga lo siguiente :

![install synology 23](images/install_synology_23.PNG)

Hacer a continuación :

![install synology 24](images/install_synology_24.PNG)

Haga clic en "Configuración avanzada"

![install synology 25](images/install_synology_25.PNG)

Luego en "Agregar una carpeta"

![install synology 26](images/install_synology_26.PNG)

Elija una carpeta en su Synology (es en esta carpeta donde habrá todos los archivos jeedom), tenga cuidado de desmarcar "Solo lectura"

![install synology 27](images/install_synology_27.PNG)

En la ruta, coloque / var / www / html y luego haga clic en "Entorno" :

![install synology 28](images/install_synology_28.PNG)

Repita esta operación para la carpeta / var / lib / mysql

Marque "Ejecutar el contenedor con privilegios elevados" y luego valide todo :

![install synology 29](images/install_synology_29.PNG)

Marque "Ejecutar este contenedor cuando el asistente haya terminado" y luego haga clic en "Aplicar".

> **Configuración de configuración avanzada**
>
> Hay 3 parámetros de configuración opcionales, estos parámetros deben pasarse como una variable de entorno
> - APACHE_PORT : permite cambiar el puerto predeterminado (80) para escuchar el servidor web
> - MODE_HOST : indica que la red está en modo host

> **Importante**
>
> Cierto complemento necesita tener la transmisión de red (tipo de complemento Xioami), para eso debe cambiar ABSOLUTAMENTE a la red en modo host (solo posible durante la creación), cambiar el puerto de escucha predeterminado del servidor web y ssh por puertos no utilizados (escriba 9080 para el servidor web y 9022 para el ssh), y establezca la variable MODE_HOST en 1

Ahora necesita instalar Jeedom, es muy simple, vaya a IP\_NAS:9080

Entonces puedes seguir la documentación [Primer paso con Jeedom](https://doc.jeedom.com/es_ES/premiers-pas/index)
