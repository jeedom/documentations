# Complemento modbusServer


# Configuración del complemento

Después de descargar el complemento, primero debe activarlo, como cualquier complemento Jeedom :

![config](../images/ModbusServerActiv.png)

Luego, hay que iniciar la instalación de las dependencias (aunque aparezcan OK) :

![dependances](../images/ModbusServerDep.png)

Finalmente, inicie el demonio :

![demon](../images/ModbusServerDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/ModbusServerConfig.png)

Por defecto, el puerto ModbusServer es 1048; es este puerto el que debe ingresarse en el lado del cliente para consultar el servidor
Puede cambiar este puerto según sea necesario

También puede configurar el cron del complemento, que se encargará de actualizar los pedidos registrados en el servidor. 



# Uso del complemento

Cuando vamos al complemento, está el equipo jeeModbusServer que se crea; es en este equipo que agregamos los comandos Jeedom que queremos agregar al servidor

![jeeServer](../images/ModbusServerEqLogicServer.png)


Cuando ingresa al equipo, puede ver el botón Asignación de comandos, que se utilizará para 'transformar' los comandos agregados en registros legibles por un cliente Modbus


Primero, vamos a la pestaña Comandos para agregar comandos desde nuestro Jeedom

![addCmdInfo](../images/ModbusServerAddCmdInfo.png)


Agregamos por ejemplo un comando Info :

Nombramos el comando y buscamos en nuestro Jeedom a través de los objetos el comando que queremos agregar al jeeModbusServer. 

![cmdAdded](../images/ModbusServerCmdAdded.png)


Una vez hecho esto, puede guardar el equipo.



A partir de ahí, podemos asignar el comando a un comando 'modbus''.

Volvemos a la pestaña Equipos, y podemos hacer clic en Mapeo de pedidos :
![btnServer](../images/ModbusServerBtnMapping.png)

Cuando hace clic en Asignación de pedidos, si no se ha agregado ningún pedido al servidor, verá este mensaje de error :
![noCmd](../images/ModbusServerNoCmd.png)


Si existen comandos, terminamos con una interfaz como esta:
![cmdMapped](../images/ModbusServerCmdMapped.png)

Puede encontrar el objeto Jeedom donde se encuentra el pedido, su equipo, así como su valor actual. 

Los menús del selector se utilizan para configurar el registro Modbus : 

- El Tipo de entrada para elegir el tipo de registro Modbus (retención, bobina)
- Inicio Registro : Registro inicial de este comando Modbus
- Número de bytes : en Modbus, un registro se puede escribir en varios bytes (un registro es igual a 16 bits, es decir, 1 byte).
- Formato de datos : el tipo del valor (Entero (entero), Flotante (Decimal) o Bit (0 o 1))
- ByteOrder y WordOrder : en general, estas configuraciones están en Big en los PLC Modbus. Opcionalmente puedes poner el valor Little


Una vez que se han configurado los comandos, puede hacer clic en Validar. 

Los comandos se inyectarán en el servidorModbus y, por lo tanto, serán accesibles a través de un clienteModbus, en el puerto elegido en la configuración


Al configurar y agregar un comando al servidor Modbus, a través del modal, se creará un Jeedom Listener en el complemento, para monitorear los cambios en el estado del comando inicial y así actualizar el comando alias en jeeModbusServer




