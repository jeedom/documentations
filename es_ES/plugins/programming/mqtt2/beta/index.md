# Complemento MQTT

## Description

El complemento le permite conectar Jeedom a un brocker MQTT existente o instalar uno (en la ventana acoplable usando el complemento Docker). Este complemento puede : 
- servir como base para otro complemento para todo lo que pasa por MQTT
- servir en modo "independiente"" : puede crear comandos (información / acción) para enviar / recibir mensajes en MQTT
- ser utilizado para conducir jeedom desde otro equipo MQTT (como Nodered, por ejemplo) : el complemento puede controlar los comandos de Jeedom y transmitir todos los eventos de Jeedom en MQTT

## Installation

Hay 2 modos de instalación : 
- modo local : Jeedom instalará Mosquitto usando el complemento de la ventana acoplable (en un contenedor, por lo tanto), se encarga de la configuración (en particular, la autenticación). Tenga en cuenta que la instalación puede tardar varias decenas de minutos
- modo remoto : solo tiene que indicar a Jeedom la dirección del brocker MQTT (ex : mqtt://192.168.1.10:1883)

Puede especificar usuarios / contraseña para la conexión :
- en modo local puedes poner un nombre de usuario:contraseña por línea, cada par de identificadores tendrá acceso válido al brocker. De forma predeterminada, si no hay un identificador, jeedom agrega automáticamente un identificador
- en modo autónomo, simplemente coloque en la primera línea el par de nombre de usuario / contraseña para jeedom, separados por : (ej. si el nombre de usuario es `jeedom` y la contraseña` mqtt` tienes que poner` jeedom:mqtt'')

>**IMPORTANTE**
>
>En modo local no es posible no tener autenticación

- "Tema raíz de Jeedom" : tema raíz para enviar un pedido a Jeedom o al que envía eventos
- "Transmitir todos los eventos de pedidos" : indica si Jeedom debe enviar todos los eventos de comando en el bus MQTT 

## Equipement

Es posible crear equipos MQTT directamente desde el complemento, tenga cuidado en este caso sin automatización o plantilla siempre que tenga que hacer todo a mano.

Es necesario indicar el tema raíz (ex `test`) para el equipo luego en los comandos es suficiente con : 
- comandos de tipo de información : indique el tema completo, por ejemplo, si coloca `toto / 1`, todos los mensajes sobre el tema` test / toto / 1` se escribirán automáticamente en el comando en cuestión
- comandos de tipo de acción : para indicar el tema y el mensaje, por ejemplo, si pones `foo / 2` con el mensaje` plop`, cada clic en el comando enviará el mensaje` plop` sobre el tema` test / foo / 2`

>**NOTA**
>
>En los comandos de tipo de acción puede usar etiquetas #slider#, #title#, #message# Dónde #select# que serán reemplazados automáticamente según el tipo de comando por su valor durante la ejecución del comando

## Usando Jeedom a través de MQTT

Es posible conducir Jeedom a través de MQTT, aquí están los temas (los ejemplos asumen que el tema raíz es igual a `jeedom`, por lo que debe adaptarse si lo ha cambiado) : 
- `jeedom / cmd / set /#cmd_id#'' : permite ejecutar el comando `#cmd_id#`, puede pasar los parámetros en el mensaje como campos json dependiendo del subtipo del comando, por ejemplo : 
    - defecto : sin parámetros
    - cursor : `{control deslizante : 50} `
    - mensaje : `{título : "hola "mensaje : "Hola, todo bien ?" }''
    - color : `{color : "#96c927 "}`
    - listado : `{seleccionar : 1} `
    - comando de tipo de información : puede pasar el valor directamente o en json do `{valor : "cuco ", fecha y hora : "12/12/2021 10:30:00 "}`, `datetime` es opcional
- `jeedom / cmd / get /#cmd_id#'' : solicitar el valor del comando `#cmd_id#`to jeedom, esto devolverá` jeedom / cmd / value /#cmd_id#`con el valor de comando en el mensaje
- `jeedom / cmd / event /#cmd_id#'' : evento en el comando#cmd_id#`con el valor