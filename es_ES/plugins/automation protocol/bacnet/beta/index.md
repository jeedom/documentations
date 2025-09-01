# Bacnet

## Description

. .

## Configuración del complemento

 :

![config](../images/BacnetConfig.png)

Luego, debe iniciar la instalación de las dependencias (incluso si aparecen bien) :

![dependances](../images/BacnetDep.png)

Finalmente, debemos iniciar el demonio :

![demon](../images/BacnetDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetSocket.png)

En esta misma pestaña, debes elegir el valor Cron para actualizar tu equipo.

## 

### 

>**IMPORTANTE**
>
>.

Rendez-vous dans le menu « Plugins → Protocole domotique → Bacnet » :



. 
. 
.

) : 

Después del escaneo, se mostrará una tabla con todas las entradas / salidas de su equipo.

.

.

-
Cliquez ensuite sur votre équipement créé, puis cochez « Activer » et « Visible » pour le voir apparaître sur votre dashboard.

. 
.

### 

)

" :


.)
)




.

### 

). .

" :




)


.

## Las órdenes

Rendez-vous dans l'onglet « Commandes » de la page de configuration du nouvel équipement Bacnet.

Ici vous pouvez masquer et rendre visibles les différentes commandes de type « action » et « info » disponibles (les commandes de type « info » peuvent également être historisées) :

![cmdVisible](../images/BacnetVisible.png)

Todo el equipo creado tendrá 2 comandos por defecto : une commande info « Connexion Bacnet » et une commande action « Refresh », qui serviront à voir l'état de la connexion Bacnet sur votre dashboard, et à rafraîchir les valeurs de vos commandes.

![cmdBase](../images/BacnetCmdBase.png)

## )

.

" :

.  :


.)




).

>****
>
>.

>**IMPORTANTE**
>
>Respecto a la escritura: por seguridad, el protocolo Bacnet proporciona por defecto un sistema de escritura con niveles de prioridad en las entradas / salidas de sus equipos.
Hay 16 niveles de prioridad (el nivel más bajo tiene prioridad sobre todos los demás)). Su equipo puede estar programado de tal manera que la función de escritura desarrollada en este complemento no tenga prioridad sobre la programación lógica del equipo / sistema por defecto.
Para E / S de tipo de salida, el complemento se configura con escritura de prioridad 8 (Operador manual).
Más información sobre el tema :

https://store.chipkin.com/articles/bacnet-why-doesnt-the-present-value-change

.
Debe saber que los PresentValues del tipo de entradas / salidas: La salida analógica, la salida binaria y la salida multiestado siempre se pueden controlar.
. Queda a criterio exclusivo del fabricante. .

Al crear las órdenes de tipo de escritura elegidas, también se creará una orden de acción asociada, que por defecto no es visible en el tablero.
Al hacer clic en él, restablece la tabla de prioridad de escritura de una entrada / salida a los valores predeterminados.
Tendrá un nombre con << resetPrioritesEcriture >>
".

## Lista en acción de comando (para MultiStateValue)

) : ahora bien, si eliges un multiEstado, el comando será de tipo Slider por defecto, pero puedes listarlo en la lista de comandos del equipo; aparecerá un nuevo campo Lista de valores;
 : por ejemplo 1-4-5-8
Al guardar el equipo, este pondrá estos valores en la lista del pedido en el Dashboard
.

## Prioridad de escritura

A Manejar con cuidado

Un campo de prioridad de escritura está disponible en cada orden creada

Según la documentación :

En BACnet, el objeto en el que podemos escribir a menudo proporciona lo que se llama la matriz de prioridad. Esta matriz contiene 16 niveles en los que podemos escribir (siendo 1 la prioridad más alta).

El uso típico de prioridad es :

1 Manual-Seguridad humana 2 Automático-Seguridad humana 3 Disponible 4 Disponible 5 Control de equipos críticos 6 Mínimo encendido/apagado 7 Disponible 8 Operador manual (anulación) 9 Disponible 10 Disponible (control típico de un supervisor) 11 Disponible 12 Disponible 13 Disponible 14 Disponible 15 Disponible (Horario) 16 Disponible



Si no se ingresa ningún valor en un comando de escritura, el valor predeterminado se establecerá en 8.

## 

 :
- 
- 
- 
- Schedule
- Calendar
- Device

 :
- )


.

## 

 :



)


.
