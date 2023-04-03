# Modbus

#Description

Complemento para leer y escribir en sus dispositivos ModbusTCP/IP y RTU
No compatible Wago al momento actual



# Configuración del complemento

Después de descargar el complemento, primero debe activarlo, como cualquier complemento Jeedom :

![config](../images/ModbusActiv.png)

Luego, hay que iniciar la instalación de las dependencias (aunque aparezcan OK) :

![dependances](../images/ModbusDep.png)

Finalmente, inicie el demonio :

![demon](../images/ModbusDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/ModbusConfig.png)

En esta misma pestaña, deberás elegir el valor de descanso entre actualizar tu equipo (por defecto 5 seg)

También puede optar por poner un Reintento para volver a ejecutar la solicitud en un comando/equipo que tendría un error (por defecto, Falso))
También puede elegir el número de intentos y la demora entre estos intentos.




# Uso del complemento


IMPORTANTE :

Para usar el complemento, debe conocer los parámetros de sus entradas / salidas de sus periféricos modbus (formato de datos, orden de bits, etc...)

Para los comandos, hay parámetros para seleccionar :

Detalles del parámetro :
- Valor negativo : para formatos de tipo LONG/INT, debe especificar si el valor de escritura/lectura será negativo
- Compensar : esto es si la compensación se tiene en cuenta o no en los números de registro en ciertos dispositivos Modbus
- Elija el tono del control deslizante : Esto es para elegir el paso del control deslizante en el caso de un comando de tipo Acción/Deslizador si desea enviar valores no enteros.




IMPORTANTE :

Dado el tiempo que lleva tener que configurar en ocasiones determinados equipos, es posible exportar los comandos de un equipo ya creado, para descargarlo localmente en .json.

Por lo tanto, puede importarlo fácilmente en otra caja en un nuevo equipo del mismo tipo (solo para cambiar lo que difiere en términos de su conexión)


En la página del equipo, abajo a la derecha, tienes este inserto : 

![dependances](../images/exportFunction.png)


Haga clic en Lista de pedidos para exportar; se abre una ventana con los comandos existentes en este equipo:

![dependances](../images/choiceCmds.png)

Puede seleccionarlos todos si es necesario usando el botón en la parte superior de la ventana. 
Cuando se elijan los comandos, haga clic en Validar.



Ahora verá los pedidos elegidos y listos para ser exportados en este cuadro :

![dependances](../images/exportCmds.png)

Solo tienes que hacer clic en Descargar configuración de las órdenes que acaban de aparecer.



Para importar comandos al equipo : haga clic en la parte superior derecha del equipo en el botón Importar Json :

![dependances](../images/importFunction.png)





También puede elegir directamente un modelo de equipo disponible en la configuración del complemento, para cargar los comandos proporcionados en este modelo; 
Elija el modelo elegido, luego Valide. Entonces puedes Guardar. 






CONTROLES DE REPRODUCCIÓN :

Para bobinas y entradas discretas :  
  - Agrega un nuevo comando Modbus y nombra el comando. Elija un comando de tipo de información, en tipo binario o numérico.
  - Elija el código de función correspondiente : FC01 o FC02
  - Entonces es necesario elegir el registro inicial así como el número de bytes a leer (el número de registros)
  Cuando guarde, el comando creado se eliminará, para crear tantos comandos como el número de bytes especificado.
  Ex: Si elige un registro de inicio de 1 y un número de bytes de 4, los comandos se crearán : LeerBobina_1, LeerBobina_2, LeerBobina_3, LeerBobina_4
  - Por supuesto, puede cambiar el nombre de ReadCoils/Discretes a su gusto.



  Para registros de existencias y registros de entradas:
  - Agrega un nuevo comando Modbus y nombra el comando. Elige un comando de tipo de información, en Tipo numérico.
  - Elige el formato correspondiente : Flotante, Largo/Entero o Bits
  - Elija el código de función correspondiente : FC04 o FC03
  - El registro inicial así como el número de bytes : para flotantes, el número máximo de registros codificados es de 4 registros.
  
  
Algunos registros solo se pueden leer leyendo varios registros al mismo tiempo en el mismo comando :

ejemplo : Creamos un comando, elegimos Info y otro subtipo, especificando 10 bytes (10 registros); al verificar LectureMultiRegistres, esto creará automáticamente 10 nuevos pedidos, utilizando el nombre del pedido original, más la identificación del pedido en iteración. Por supuesto, puede cambiar el nombre de los comandos; al leer el comando original, su valor contendrá una cadena de caracteres de los 10 valores de registro y actualizará los 10 comandos correspondientes.



Algunos registros pueden requerir ser divididos en varios bytes :
ejemplo : un registro 17, según la documentación del dispositivo, debe devolver un valor FF o 00 (para saber si un ventilador funciona o no) en el primer byte del registro, así como un valor numérico en el segundo byte del registro.
Entonces es necesario crear un comando en fc3, y especificar en el campo nbOctets el número 2; esto creará 2 comandos adicionales, basados en el nombre del comando inicial; estos 2 comandos corresponden cada uno a un byte. Los valores devueltos arriba estarán en hexadecimal; si necesita el valor numérico, debe verificar Hexa2dec en este mismo comando.



ESCRIBIR COMANDOS:

 En su equipo, por defecto habrá 3 comandos de tipo Acción/mensaje creados; Escritura de registro múltiple, escritura de bit y escritura de bobina múltiple


IMPORTANTE :


 Su principio de funcionamiento:



![cmdEcritures](../images/modbusCmdsEcritures.png)


NUEVA ESCRITURA :

 - Al crear un comando Acción -> Otro subtipo, luego al elegir Fc16, y al completar el Registro de inicio y la nueva línea de la Tabla de registros en los Parámetros del comando, podemos ejecutar este comando para escribir desde el registro de inicio los valores ingresados :

 Ex : Inicio Registro : 10
      Registro de tabla de líneas : 10-45-22-25.6-2360
      Enviaremos en los registros 10,11,12,13 y 14, los valores 10,45,22,22.6 y 2360
      Los valores deben estar separados por un -, y para números decimales, poner un .


  - Escritura de registro múltiple : en la configuración del comando se debe ingresar el registro de inicio, así como el orden de los bytes y palabra.
  Por defecto, el código de función es FC16. Por favor, deje esta configuración por defecto.

  Para cambiar los valores en los registros, use esta sintaxis:
  - valorparaenviar&nbofregistro, separados por | :   Ex:  120 y 1|214.5&4 Enviamos el entero 120 a un registro, partiendo del registro inicial configurado,
  entonces 214.5 en float en 4 registros siguientes al anterior.

  Para tipos flotantes, escriba el valor como se indica arriba, con un .


  - Escritura multibobina : en la configuración del comando, debe ingresar el registro de inicio
  Por defecto, el código de función es fc15. Por favor, deje esta configuración por defecto.

  Para cambiar los valores en los registros, use esta sintaxis:
  -  Ex : 01110111 Entonces esto enviará desde el registro de inicio configurado los valores True(1) o False(0) a los registros



  - Bit de escritura : en la configuración del comando se debe ingresar el registro de inicio, así como el orden de los bytes y palabra.
  Por defecto, el código de función es fc03, porque este comando le dará el valor del registro establecido en binario al comando info "infobitbinary".

  Por favor, deje esta configuración por defecto.

  En el comando info "infobitbinary", tendrá el valor binario del registro de parámetros en el comando Write Bit.
  Para cambiar el bit en el registro

  - valuetoend&PositionBit :   Ex:  1&4 Enviamos el valor 1 al bit de la posición 4 empezando por la derecha
  En el comando de información "infobitbinary", verá el valor 10000101, que corresponde al valor binario del registro de parámetros.
  Al escribir 1 y 6, ahora tendrá el valor : 10100101 en el registro configurado.



IMPORTANTE :


Algunos PLC no tienen la función fc06
Puede crear un comando de acción, en Tipo de mensaje, y elegir fc16
Compruebe el registro Fc16 no rastreado
En el tablero, debe usar esta sintaxis :
registro de salida ! value & nbregisters separados por un |

Ex: 7!122.5 y 2|10!22 y 2

Escribiremos del registro 7, el valor 122.5 en 2 registros y también del registro 10, el valor 22, en 2 registros



Para escribir en una bobina :

Ejemplo para registro 1 On:
- Agrega un nuevo comando Modbus y nombra el comando. Elige un comando de tipo Acción, en Tipo predeterminado.
- Elija Fc5 Escribir bobina simple
- Registro de salida : 1
- Número de bytes : 1
- Poner 1 en valor para enviar

Ejemplo de registro 1 Off:
- Agrega un nuevo comando Modbus y nombra el comando. Elige un comando de tipo Acción, en Tipo predeterminado.
- Elija Fc5 Escribir bobina simple
- Registro de salida : 1
- Número de bytes : 1
- Poner 0 en valor para enviar


Al actuar sobre estos comandos de acción en su tablero, enviará Verdadero o Falso a sus Coils.




Para escribir en un registro de retención :

- Agrega un nuevo comando Modbus y nombra el comando. Elige un comando de tipo Acción, en Tipo de control deslizante.
- También elija un valor mínimo y máximo para este control deslizante (recuerde tomar un valor mínimo para enviar un valor negativo)
- Elija BC6 Escribir registro único
- Elige el número de registros : 1
- Elija el paso del control deslizante (para decimales, escriba con un .   ex: 0.2)



Cuando se realiza una escritura, ya sea que tenga éxito o no, aparece un mensaje en Jeedom. 
Puede deshabilitar/habilitar este mensaje desde la configuración del complemento.
