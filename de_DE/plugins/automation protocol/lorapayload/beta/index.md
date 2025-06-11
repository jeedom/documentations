# LoraPayload-Plugin

Dieses Plugin ist ein Plugin, das es ermöglicht, LoraWan-Nutzlastbefehle zu verknüpfen und ein Gerät mit Befehlen zu erstellen, während die Werte analysiert werden.

# Configuration

## Plugin-Konfiguration

Sie können den Status der Abhängigkeiten hier überprüfen und neu starten. Bei Problemen mit dem Plugin immer die Abhängigkeiten neu starten, auch wenn im Zweifel OK.


# Das Plugin

Gehen Sie zum Menü Plugins / Protokoll, um das Plugin zu finden.

Auf dieser Seite sehen Sie die bereits enthaltenen Module.

Im oberen Teil dieser Seite haben Sie mehrere Schaltflächen
!alt text](image.png)
-   **Schaltfläche hinzufügen** : Ermöglicht das Hinzufügen von Ausrüstung
-   **Konfigurationstaste** : Diese Schaltfläche öffnet das Plugin-Konfigurationsfenster
-   **** : . (  )

# Equipement

Wenn Sie auf eines Ihrer Module klicken, gelangen Sie auf dessen Konfigurationsseite :

-   Geben Sie dem Modul einen Namen
-   Aktivieren / sichtbar machen oder nicht
-   Wählen Sie sein übergeordnetes Objekt
-   Weisen Sie ihm eine Kategorie zu

Auf der rechten Seite finden Sie :

-   Das Geräteprofil (vom Benutzer beim Anlegen manuell auszuwählen))
-   Sehen Sie sich das Bild an

Sie haben auch zwei zusätzliche Registerkarten:

-   Eine Registerkarte Nutzlast (beschrieben im nächsten Absatz)
-   Eine Registerkarte „Aufträge“ (hier finden Sie die Bedienelemente für Ihre Ausrüstung – diese Registerkarte ist Standard bei Jeedom)

# Ausrüstung hinzufügen
!alt text](image-1.png)
.

.

Auf der rechten Seite ist es wichtig, die Art der Ausrüstung zu wählen. So können Sie den Frame analysieren.

 :
!alt text](image-2.png)
-    )
-   .
-   .
-   .


Sobald Sie fertig sind, können Sie speichern. Danach werden die Befehle für Ihr Gerät aktualisiert, wenn Sie das nächste Mal einen Frame erhalten

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

- **Aufbau**:

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

    - Regarde le tableau  la section “Commandes downlink”  “Aufbau via payload”,

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

-   Einige Befehle werden nicht gleichzeitig mit anderen aktualisiert : Ja, einige Lorawan-Module senden nicht unbedingt alle Informationen gleichzeitig und mit der gleichen Häufigkeit
