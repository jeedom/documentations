# Complemento LoraPayload

Este complemento es un complemento que permite vincular los comandos de carga útil de LoraWan y crear un dispositivo con comandos mientras se analizan los valores.

# Configuration

## Configuración del complemento

Puede verificar el estado de las dependencias aquí y relanzarlas. En caso de problemas con el complemento, reinicie siempre las dependencias incluso si está bien si hay dudas.


# El complemento

Vaya al menú de complementos / protocolo para encontrar el complemento.

En esta página puedes ver los módulos ya incluidos.

En la parte superior de esta página tienes varios botones
!alt text](image.png)
-   **Botón Agregar** : Le permite agregar equipo
-   **Botón de configuración** : Este botón abre la ventana de configuración del complemento
-   **** : . (  )

# Equipement

Cuando haces clic en uno de tus módulos, llegas a su página de configuración :

-   Dar un nombre al módulo
-   Activar / hacer visible o no
-   Elija su objeto padre
-   Asignarle una categoría

En el lado derecho encontrarás :

-   El perfil del equipo (a elegir manualmente por el usuario al crear)
-   Ver lo visual

También tienes dos pestañas adicionales:

-   Una pestaña de Carga útil (descrita en el siguiente párrafo)
-   Una pestaña de Órdenes (aquí es donde encontrará los controles correspondientes a su equipo; esta pestaña es estándar en Jeedom)

# Agregar equipo
!alt text](image-1.png)
.

.

Es importante en el lado derecho elegir el tipo de equipo. Esto es lo que permitirá saber cómo analizar el marco.

 :
!alt text](image-2.png)
-    )
-   .
-   .
-   .


Una vez hecho esto, puedes guardar. A continuación, la próxima vez que reciba un marco, se actualizarán los comandos de su equipo

# Envoyer des commandes

Certains modules Lorawan possèdent des commandes de type Action qui permettent d'envoyer des consignes aux modules via l'interface Jeedom.

Dans l'onglet Equipement du plugin LoraPayload :

- Vous devez choisir la commande d'envoi (que ce soit MQTT ou autres)
- Vous devez choisir si voulez avoir une confirmation (Ack). C'est une information remontée dans MQTT sur un topic dédié qui n'influence pas les données remontées.

Concernant la commande d'envoi, dans le cas d'utilisation de MQTT, c'est une commande dans MQTT de type Action et de sous-type Message. Le topic est le topic dédié aux downlinks et la valeur de la commande est #message#.
---
# )

 **** .

---

##  

1. **** :  
     
   Exemple:  
   -   
   - 

2. ****:  
   

3. ****.

---

## 

Remplacer:
js
) {
    
}
 
) {
    
    
}


---

## 

Remplacer:
js
) {

}
 
) {
    
}

##  
:
js
 = {
    Decode,
    Encode
}

## 

1. ****  ``/var/www/html/plugins/lorapayload/core/config/devices/ `` ``.js``).

:

- 

- : )

##  
json
{
  "": {
    "name": " 
    "groupe": "
    "configuration": {
      "type": "",
      "language": ")
      "deviceProfile": ")
    },
    "commands": 
      {
        "name": " 
        "type": ")
        "subtype": "
        "isVisible": 
        "isHistorized": 
        "unite": "
        "logicalId": "parsed::)
      },
      {
        "name": "
        "type": "info",
        "subtype": "numeric",
        "isVisible": 0,
        "isHistorized": 0,
        "unite": "",
        "logicalId": " 
      },
      {
        "name": "Reboot",
        "type": ")
        "subtype": "other",
        "isVisible": 1,
        "logicalId": "encoder::reboot::::<fonction>::<valeur>)
      },
      {
        "name": "",
        "type": "action",
        "subtype": "
        "isVisible": 1,
        "logicalId": "encoder::",
        "configuration": {
          "minValue": 1,
          "maxValue": 5000,
          "step": 1
        }
      },
      {
        "name": "",
        "type": "info",
        "subtype": "string",
        "isVisible": 0,
        "isHistorized": 0,
        "logicalId": "
      }
    ],
    "compatibility": 
      {
        "manufacturer": "Milesight",
        "name": "GS601",
        "doc": "",
        "type": "",
        "remark": "",
        "inclusion": "",
        "imglink": ""
      }
    ]
  }
}


### ?
.

#### 
- ****: .

- ****: : ).

- **Configuración**:

    - `type`: .

    - `language`: .

    - `deviceProfile`: ).

- ****: ).

    - ****:

        - `info`: ).

        - `action`: ).

- ****:

    - `numeric`: .

    - `string`: .

    - `binary`: .

    - : .

    - `other`: .

- ****: ).

- ****: ).
(")

- ****: ).

- ****:

    - : ``parsed::nom_de_la_variable`` (.)

    - : 
        js
        encoder::<fonction>::<valeur>
        
        ou
         
        encoder::<fonction>
         
        (: slider)

    - : ``"logicalId": "payload"``

- ****: .

##### 
- : : ``decoded.temperature ⇒ "parsed::temperature"``).

- .

- .).

- .



## 

- : 

- : ``milesight_gs601.png``)
---
# ?
.

    - Regarde le tableau  la section “Commandes downlink”  “Configuración via payload”,

    - .

.

    - .

 | (.

4. (**): .


:

|                 |  |                     |
| -------------------- | ----------------- | ------------------------------ |
|                |               | 0: :       |
|  |            | 1: : ... |
|        |             |                           |
|        |             |                           |

json
{
  "": {
    "enable": 1,
    "": 2,
    "": 30,
    "": 40
  }
}

-  :
|2|30|

# Panel

##  ?

-  **** ( ****.
-  :
  -  **** .

- .
!alt text](image-3.png)

---
## 

-  :
!alt text](image-4.png)
!alt text](image-9.png)
---



# FAQ

-   Algunos comandos no se actualizan al mismo tiempo que otros : sí, de hecho, algunos módulos de Lorawan no envían necesariamente toda la información al mismo tiempo y con la misma frecuencia
