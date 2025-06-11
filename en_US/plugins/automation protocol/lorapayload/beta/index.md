# LoraPayload plugin

This plugin is a plugin allowing to link LoraWan payload commands and to create a device with commands while parsing the values.

# Configuration

## Plugin configuration

You can check the state of dependencies here and relaunch them. In case of problems with the plugin always restart the dependencies even if OK in doubt.


# The plugin

Go to the plugins / protocol menu to find the plugin.

On this page you can see the modules already included.

On the upper part of this page you have several buttons
!alt text](image.png)
-   **Add button** : Allows you to add equipment
-   **Configuation button** : This button opens the plugin configuration window
-   **** : . (  )

# Equipement

When you click on one of your modules, you arrive on its configuration page :

-   Give a name to the module
-   Activate / make it visible or not
-   Choose its parent object
-   Assign it a category

On the right side you will find :

-   The equipment profile (to be chosen manually by the user when creating)
-   See the visual

You also have two additional tabs:

-   A Payload tab (described in the next paragraph)
-   An Orders tab (this is where you will find the controls corresponding to your equipment - this tab is standard at Jeedom)

# Adding equipment
!alt text](image-1.png)
.

.

It is important on the right side to choose the type of equipment. This is what will allow us to know how to parse the frame.

 :
!alt text](image-2.png)
-    )
-   .
-   .
-   .


Once done you can save. Following this, the next time you receive a frame, the commands for your equipment will update

# Sending orders

Some Lorawan modules have Action commands which can be used to send instructions to the modules via the Jeedom interface.

In the LoraPayload plugin's Equipment tab :

- You must choose the  command (MQTT or other))
- You must choose whether you want confirmation (Ack). This information is entered into MQTT on a dedicated topic and has no influence on the data entered.

The send command, when used with MQTT, is an MQTT command of type Action and sub-type Message. The topic is the topic dedicated to downlinks and the value of the command is #message#.
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

- **Configuration**:

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

    - Regarde le tableau  la section “Commandes downlink”  “Configuration via payload”,

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

-   Some commands do not update at the same time as others : yes indeed some Lorawan modules do not necessarily send all the information at the same time and with the same frequency
