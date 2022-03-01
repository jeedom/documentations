# Complemento Velux MQTT

El complemento **Velux MQTT** le permitirá controlar sus tragaluces y/o sus persianas "io-homecontrol" en Jeedom a través de la interfaz VELUX KLF 200 y controlar su posición, subir o bajar y detenerse.

Las aberturas primero deben emparejarse con la interfaz VELUX KLF 200 y deben conectarse en ethernet en la misma red local que Jeedom *([consulte la documentación de KLF200](https://www.domadoo.fr/fr/index.php?controller=attachment&id_attachment=2287){:destino="\_espacio en blanco"})*.

# Configuration

Como cualquier complemento de Jeedom, el complemento **Velux MQTT** debe activarse después de la instalación.

## Gestión de dependencias

El complemento **Velux MQTT** se basa en complementos oficiales **Gestión de Docker** y **Administrador de MQTT** trabajar. Si aún no era el caso, estos 2 complementos se instalarán durante la instalación de las dependencias.

>**INFORMACIÓN**
>
>Es probable que la instalación de las dependencias tarde varios minutos dependiendo de las configuraciones.

## Administrador de MQTT

Un corredor MQTT debe estar configurado y activo en el complemento **Administrador de MQTT** para transmitir y recuperar las posiciones de los flaps. Consulte la documentación del complemento para usar un corredor existente o para crear uno localmente en Jeedom.

Tan pronto como el demonio del complemento **Administrador de MQTT** estará activo, el plugin **Velux MQTT** podrá recuperar automáticamente la información de conexión del intermediario MQTT.

## Configuración del complemento

La configuración del complemento consiste en completar la información de conexión a la interfaz VELUX KLF 200 :

- **Dirección IP** : La dirección IP del KLF200 en la red local.
- **Contraseña de wifi** : La contraseña WiFi KLF200 *(inscrito en la espalda)*.

## Instalación del contenedor Velux MQTT

Una vez que se haya ingresado y guardado la información de conexión para la interfaz VELUX KLF 200, haga clic en el botón **Instalar VELUX MQTT** para comprobar que todo está en orden y proceder con la creación del contenedor **Velux MQTT** en complemento **Gestión de Docker**.

Al final del procedimiento, los estatutos del estibador **Velux MQTT** debe mostrarse en verde con las palabras *"running"* y *"CONNECTED"*. De lo contrario, verifique los registros del dispositivo **Velux MQTT** en complemento **Gestión de Docker**.

# Equipements

Para acceder a los diferentes equipos **Velux MQTT**, dirígete al menú **Complementos → Protocolo domótico → Velux MQTT**.

El botón **Sincronizar** crea automáticamente el equipo correspondiente a las aberturas enumeradas en la interfaz KLF 200 en Jeedom.

# Commandes

Cada equipo **Velux MQTT** tiene estos comandos :

- **Estado** : posición actual de la aleta.

>**TRUCO**
>
>Por defecto, la interfaz KLF 200 proporciona un porcentaje de cierre *(100% = cerrado)* que el complemento se transforma en porcentaje abierto. Si desea volver a la operación predeterminada, simplemente desmarque la casilla **Contrarrestar** De la orden **Estado**.

- **Posición** : Comando de posicionamiento de persianas.
- **Abrir** : Comando de apertura de persiana.
- **Detener** : Comando de parada de persiana.
- **Cerrar** : Comando de cierre de persiana.
- **Actualizar** : Envía un mensaje de parada a la persiana para forzar el refresco de la posición.
