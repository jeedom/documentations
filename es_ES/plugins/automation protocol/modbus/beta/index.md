## 

### Description

Complemento para leer y escribir en sus dispositivos ModbusTCP/IP y RTU



### Configuración del complemento

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





 :warning: Elección del nivel de registro de la biblioteca Modbus :

 De forma predeterminada, está configurado en ERROR y la biblioteca es detallada
 Puedes cambiar su nivel : necesitarás guardar y reiniciar el demonio




### Uso del complemento


IMPORTANTE :

Para usar el complemento, debe conocer los parámetros de sus entradas / salidas de sus periféricos modbus (formato de datos, orden de bits, etc...)

Para los comandos, hay parámetros para seleccionar :

Detalles del parámetro :
- Compensar : esto es si la compensación se tiene en cuenta o no en los números de registro en ciertos dispositivos Modbus
- Elija el tono del control deslizante : Esto es para elegir el paso del control deslizante en el caso de un comando de tipo Acción/Deslizador si desea enviar valores no enteros.




IMPORTANTE :

Dado el tiempo que lleva tener que configurar en ocasiones determinados equipos, es posible exportar los comandos de un equipo ya creado, para descargarlo localmente en .json.

Por lo tanto, puede importarlo fácilmente en otra caja en un nuevo equipo del mismo tipo (solo para cambiar lo que difiere en términos de su conexión)


 :

![dependances](../images/importJson.png)





### CONTROLES DE REPRODUCCIÓN :

Para entradas de bobinas  :  
  - Agrega un nuevo comando Modbus y nombra el comando. Elija un comando de tipo de información, en tipo binario o numérico.
  - Elija el código de función correspondiente : FC01
  - Entonces es necesario elegir el registro de inicio, así como el número de registros para leer
  Al guardar se borrará el comando creado, para crear tantos comandos como registros especificados.
  Ex: Si elige un registro de inicio de 1 y un número de registros de 4, los comandos se crearán : LeerBobina_1, LeerBobina_2, LeerBobina_3, LeerBobina_4
  - Por supuesto, puede cambiar el nombre de las ReadCoils a su gusto.

Para lectura discreta Fc2 :

- Crear un pedido de tipo Info, bajo otro tipo
- Elige fc02
- Elija el formato Bits, Big Endian, Big Word
- Completa el registro
- Y rellena el campo : Número de bits a leer (0 a 15)

Cuando regrese de leer, tendrá un comando de tipo cadena con el valor de los bits solicitados


  Para registros de existencias y registros de entradas:
  - Agrega un nuevo comando Modbus y nombra el comando. Elige un comando de tipo de información, en Tipo numérico.
  - Elige el formato correspondiente : Flotante, Largo/Entero o Bits
  - Elija el código de función correspondiente : FC04 o FC03
  - El registro inicial así como el número de registros : para flotantes, el valor se codifica en un máximo de 4 registros, el mínimo es 2.



Algunos registros solo se pueden leer leyendo varios registros al mismo tiempo en el mismo comando :

ejemplo : Creamos un comando, elegimos Info y otro subtipo, especificando 10 registros;
Ver Parámetros Específicos al final de la documentación


ESCRIBIR COMANDOS:

 En su equipo, por defecto habrá 3 comandos de tipo Acción/mensaje creados; Escritura de registro múltiple, escritura de bit y escritura de bobina múltiple


IMPORTANTE :


 Su principio de funcionamiento:


![cmdEcritures](../images/modbusCmdsEcritures.png)






   #### :

  ######  : 
        
   :
  . 

 ![cmdEcritures](../images/configFc16.png)

  .

  ![cmdEcritures](../images/bootboxFc16.png)
 
  

  

  . 
  . 
  . 

   :

  php
  $cmd = cmd::byId(iddevotrecommande);
  )){
      $cmd->setConfiguration('arrayRegisters', [['value' => '10', 'format' => 'intformat16'],['value' => '12', 'format' => 'intformat16']]);
      $cmd->save();
  }
  

  ######  : 

  


   :
   : : ). 
   :

          adresseRegistre|valeur||valeur|

           :
          










  ###### Bit de escritura : en la configuración del comando, necesita el orden de bytes y palabras.

  .

  ".

  Por favor, deje esta configuración por defecto.

  En el comando info "infobitbinary", tendrá el valor binario del registro de parámetros en el comando Write Bit.
  
   :

  valorparaenviar&PosicionarBit&Registrar :   Ex:  1&4 Enviamos el valor 1 al bit en la posición 4 desde la derecha, al registro especificado
  En el comando de información "infobitbinary", verá el valor 10000101, que corresponde al valor binario del registro de parámetros.
  Al escribir 1 y 6, ahora tendrá el valor : 10100101 en el registro configurado.





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




# Parámetros específicos

###### RETORNO HEXAGONAL :
  Para tener un comando que devuelva el valor del registro en HexaDecimal (para un comando que reporte los errores de un equipo por ejemplo), creas tu comando, configuralo como siempre,
  y marque Retorno hexadecimal.
    



###### LECTURA MULTIREGISTRO :
  al verificar LectureMultiRegistres, esto creará automáticamente tantos comandos nuevos como el número especificado en Número de registros, usando el nombre del comando original, más la identificación del comando en iteración. Por supuesto, puede cambiar el nombre de los comandos; al leer el comando original, su valor contendrá una cadena de caracteres de los 10 valores de registro y actualizará los 10 comandos correspondientes.


###### OPERACIÓN A LA ORDEN :
  Para una operación de devolución de valor : en el campo Operación del pedido, puede completar una operación matemática colocando la etiqueta #value# para indicar el valor de este comando :
  ejemplo : (#value# / 10 ) * 2
  El cálculo se realizará en la devolución de datos de este comando.
  Haz buen uso de * para multiplicaciones


###### Leer bits de registro :
Al elegir esto en un comando de información, se creará un comando de tipo información, que representa los 16 bits de este registro; Este nuevo comando se crea cuando los valores se informan por primera vez y luego se actualiza con cada nuevo informe.




# Comandos XLS de importación/exportaciónX

Después de la creación de un equipo, puede importar un archivo xlsx para la creación de sus pedidos
El archivo de plantilla se puede encontrar en plugins/modbus/data/templateXlsx/exportModbus.xls
Puede acceder a él y descargarlo a través de su Jeedom -> Configuración-> Sistema-> Editor de archivos



# MQTT


 :




 :

![renammeTopic](../images/renammeTopic.png)




