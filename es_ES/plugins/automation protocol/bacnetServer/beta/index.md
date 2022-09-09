# BacnetServer

#Description

El complemento Bacnet le permite crear un equipo Bacnet de su Jeedom para que se vea en la red



# Configuración del complemento

Después de descargar el complemento, primero debe activarlo, como cualquier complemento Jeedom :

![config](../images/BacnetServerConfig.png)

Luego, hay que iniciar la instalación de las dependencias (aunque aparezcan OK) :

![dependances](../images/BacnetServerDep.png)

Finalmente, inicie el demonio :

![demon](../images/BacneServerDemon.png)


Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetServerConfig.png)


En esta misma pestaña, debes elegir el valor de Cron para actualizar tu equipo.




# Cómo funciona el complemento ?




>**IMPORTANTE**
>
>Su equipo BACNET debe estar en la misma red que su Jeedom para ser detectado por él.


De forma predeterminada, se crea un dispositivo jeeBacnetServer; es este dispositivo 'bacnet' el que verá su supervisor de Bacnet en la red

Puede configurar su deviceId en la configuración del complemento

![menu](../images/BacnetServerConfig.png)


Para agregar comandos Jeedom a su jeeBacnetServer, haga clic en Agregar comandos al servidor :

![accueil](../images/BacnetServerAccueil.png)


Se abrirá un modal, donde aparecerán todos los comandos de tipo Info presentes en los diferentes plugins de tu jeedom.


>**IMPORTANTE**
>
>Su equipo debe estar Activo para que los comandos sean detectados en este modal.


Debe agregar la unidad de Bacnet que desea inyectar en la instancia de Bacnet. Atención, es absolutamente necesario tener la misma sintaxis que las unidades disponibles en la lista de unidades, disponible haciendo clic en Ver Lista Unidades
También debe nombrar el pedido, rellenando el campo previsto a tal efecto. 
No ponga espacios en el nombre del comando

![syntaxUnites](../images/BacnetServerList.png)

![syntaxCmds](../images/BacnetServersyntax.png)

Todo lo que tienes que hacer es buscar los que quieras y Validar.


![accueil](../images/BacnetServerModale.png)


Se creará el dispositivo bacnet con el ID de instancia que ha elegido y aparecerá en su red.


Para actualizar los valores necesitas configurar el cron en la configuración del plugin.

![accueil](../images/BacnetServerConfig.png)



Para borrar comandos del Servidor, debe ir a los comandos del equipo, y simplemente Borrar los que desee y luego guardar.



También puede eliminar el dispositivo de la red, así como sus puntos bacnet, haciendo clic en Eliminar el jeeBacnetServer.


![accueil](../images/BacnetServerReinit.png)




# Configuración de pedidos :


Para cambiar la unidad de los puntos bacnet, y verlos aparecer en la red, debe introducir la unidad en el campo habilitado a tal efecto en los pedidos.

En la red bacnet, las instancias de los puntos utilizarán los nombres de los comandos especificados en el campo del modal Adiciones de comandos.



También se proporciona una función de cálculo posterior : 
si elige completar este postCalcul, entonces el valor inyectado en el dispositivoBacnet habrá tomado el valor inicial para cargarse con el cálculo especificado

Puedes por ejemplo :

#value# * 10


Esto tomará el valor inicial del comando cargado, luego lo multiplicará por 10 antes de actualizarlo en la instancia de jeeServer

Ejemplo :

![accueil](../images/BacnetServerPost.png)



>**IMPORTANTE**
>
>Encontrará todos los comandos existentes en el jeeServer en la pantalla del complemento, haciendo clic en Cmds JeeServer


![accueil](../images/BacnetServerAccueil.png)

![cmdExist](../images/BacnetServerCmdsExit.png)


# Importar/Exportar el jeeBacnetServer :


![accueil](../images/BacnetServerAccueil.png)

Para prevenir necesidades, se proporcionan 2 opciones : 


- Dispositivo de exportación :

Al hacer clic en este botón, descargará un archivo Json que contiene la configuración del dispositivo, así como sus comandos.


- Importar dispositivo :

Al hacer clic en este botón, puede importar el archivo json de configuración de jeeBacnetServer que habría descargado, para usar los comandos que se configuraron en este