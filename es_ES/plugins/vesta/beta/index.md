# Complemento de Vesta

#Description

Plugin para gestionar tu central Vesta



# Configuración del complemento

Después de descargar el complemento, primero debe activarlo, como cualquier complemento Jeedom :

![config](./images/vestaActiv.png)

Luego, hay que iniciar la instalación de las dependencias (aunque aparezcan OK) :

![dependances](./images/vestaDep.png)

Finalmente, inicie el demonio :

![demon](./images/vestaDemon.png)

Puede modificar el puerto del socket de escucha para Eventos provenientes de la central

![socket](./images/vestaConfig.png)







# Uso del complemento


IMPORTANTE :

Para recibir Eventos de su central, debe configurar el panel de esta última. 
En este último, accesible a través de la IP local de la central en su navegador, debe ir a Configuración del sistema, luego Informe


Y modifica la siguiente url :

![urlpanel](./images/vestapanel.png)

Reemplace la ip con la ip local de su jeedom y el puerto con el que configuró en el complemento

Elija un grupo diferente de las otras URL de informes

Recuerde configurar Esencial y No reintentar

Sauvegardez

![essential](./images/vestapanel2.png)






En su plugin, una vez completada la configuración, simplemente debe pulsar en Sincronizar para crear automáticamente los equipos correspondientes a las Particiones y Zonas creadas en el webInterface de su central

Los equipos (sensor, detector IR, etc.) configurados y asignados a las zonas en la interfaz web, tendrán comandos creados automáticamente en las zonas correspondientes.