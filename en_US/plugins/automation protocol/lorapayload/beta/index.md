# LoraPayload plugin

This plugin is a plugin allowing to link LoraWan payload commands and to create a device with commands while parsing the values.

# Configuration

## Plugin configuration

You can check the state of dependencies here and relaunch them. In case of problems with the plugin always restart the dependencies even if OK in doubt.


# The plugin

Go to the plugins / protocol menu to find the plugin.

On this page you can see the modules already included.

On the upper part of this page you have several buttons
![alt text](../images/image.png)
-   **Add button** : Allows you to add equipment
-   **Configuation button** : This button opens the plugin configuration window
-   **Bonton Génération automatique** : Permet d'ajouter un nouvel équipement dans jeedom et sur chirpstack. ( Recommandé pour l'ajout d'équipement )

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
![alt text](../images/image-1.png)
Il suffit de cliquer sur le bouton `Génération automatique` et de choisir un nom.
Ensuite vous pouvez configurer l'objet Parent, renseigner le Dev EUI l'app Key, l'application pour chirpstack
Pour configurer, activer l'équipement, choisir une ou des catégories, et rendre l'équipement visible ou non.

It is important on the right side to choose the type of equipment. This is what will allow us to know how to parse the frame.

L'onglet LoRaWAN est très important :
![alt text](../images/image-2.png)
-   Vous devez choisir la commande info qui reçoit le payload que ce soit MQTT ou autres ( important si vous avez utilisé le bouton `Ajouter` sinon avec `Génération automatique` tout est généré automatiquement )
-   Vous pouvez choisir si le format du payload est en Hexadécimal ou Base64.
-   Avec Euqueue downlink payload, vous pouvez envoyer des downlinks manuellement.


Once done you can save. Following this, the next time you receive a frame, the commands for your equipment will update

# Sending orders

Some Lorawan modules have Action commands which can be used to send instructions to the modules via the Jeedom interface.

In the LoraPayload plugin's Equipment tab :

- You must choose the  command (MQTT or other))
- You must choose whether you want confirmation (Ack). This information is entered into MQTT on a dedicated topic and has no influence on the data entered.
The send command, when used with MQTT, is an MQTT command of type Action and sub-type Message. The topic is the topic dedicated to downlinks and the value of the command is *message*.
---
# Ajouter un nouveau capteur Milesight (downlink/uplink)

Cette section détaille **l'ajout de la configuration et de la gestion des commandes (uplink/downlink) pour un capteur Milesight** dans le plugin LoraPayload.

---

## 1. Ajout des fichiers d'encodage/décodage 

1. **Créer un fichier JavaScript** nommé selon la convention suivante :  
   `milesight_modele.js`  
   Exemple :  
   - `milesight_WT101.js`  
   - `milesight_GS601.js`

2. **Déposer ce fichier dans** :  
   `/var/www/html/plugins/lorapayload/resources/lorapayload/payloads/`

3. **Fusionner le code d'encodage (encoder) et décodage (decoder) dans ce même fichier**.

---

## 2. Adapter la fonction Decode

Remplacer :
```js
function Decode(fPort, bytes) {
    return milesightDeviceDecode(bytes);
}
Par 
function Decode(input) {
    bytes = input.bytes;
    return milesightDeviceDecode(bytes);
}
```

---

## 3. Adapter la fonction Encoder

Remplacer :
```js
function Encode(fPort, obj, variables) {
return milesightDeviceEncode(obj);
}
Par 
function Encode(obj) {
    return milesightDeviceEncode(obj);
}
```
## 4. Explorter les fonctions 
A la fin du fichier, ajouter:
```js
module.exports = {
    Decode,
    Encode
};
```
## 5. Déclaration du capteur dans la configuration

1. **Créer un dossier** dans ``/var/www/html/plugins/lorapayload/core/config/devices/ ``qui porte le même nom que votre fichier d'encodage/décodage (sans l'extension ``.js``).

2. Ajouter dans ce dossier :

- Un fichier JSON de configuration du même nom que le JS

- Une image PNG du capteur (format recommandé : 250x250 px)

## 6. Exemple de configuration JSON pour un capteur Milesight 
```json
{
  "milesight_GS601": {
    "name": "Milesight GS601 - Vape Detector",  // Modele + Nom du capteur 
    "groupe": "Milesight",      //Nom du Fabricant
    "configuration": {
      "type": "milesight_GS601",
      "language": "js",         // Indique que l'encodeur/décodeur est en JS (sinon omettre)
      "deviceProfile": "C"      // Indique que le profil LoRaWAN du device est "Class C" (sinon omettre)
    },
    "commands": [
      {
        "name": "Température",  // Nom 
        "type": "info",         // Commande info = remonte une info du capteur (uplink)
        "subtype": "numeric",   // numeric/string/binary selon la donnée
        "isVisible": 1,         // 1 = visible, 0 = cachée
        "isHistorized": 1,      // 1 = historisé, 0 = non historisé
        "unite": "°C",          // Unité d'affichage
        "logicalId": "parsed::temperature" // Doit correspondre à la variable dans le JS (decoded.temperature)
      },
      {
        "name": "fPort",        // Toujours préciser le fPort
        "type": "info",
        "subtype": "numeric",
        "isVisible": 0,
        "isHistorized": 0,
        "unite": "",
        "logicalId": "fport" // Port utilisé pour les downlinks
      },
      {
        "name": "Reboot",
        "type": "action",        // Commande action = envoi une commande vers le capteur (downlink)
        "subtype": "other",
        "isVisible": 1,
        "logicalId": "encoder::reboot::1" // Format pour envoyer une commande d'action (encoder::<fonction>::<valeur>)
      },
      {
        "name": "Set report interval",
        "type": "action",
        "subtype": "slider",     // slider/other selon le type d'action
        "isVisible": 1,
        "logicalId": "encoder::report_interval",
        "configuration": {
          "minValue": 1,
          "maxValue": 5000,
          "step": 1
        }
      },
      {
        "name": "Payload brut",
        "type": "info",
        "subtype": "string",
        "isVisible": 0,
        "isHistorized": 0,
        "logicalId": "payload"   // Pour afficher le payload reçu tel quel
      }
    ],
    "compatibility": [
      {
        "manufacturer": "Milesight",
        "name": "GS601",
        "doc": "",
        "type": "milesight_GS601",
        "remark": "",
        "inclusion": "",
        "imglink": "milesight_GS601"
      }
    ]
  }
}

```
### Comment écrire le fichier de configuration JSON?
Le fichier de configuration JSON permet de décrire chaque capteur (uplink et downlink), d'associer les variables décodées, de définir les commandes d'action, et d'assurer l'affichage correct dans Jeedom.

#### Explication des champs principaux
- **name**: Nom lisible du capteur.

- **groupe** : Nom du fabricant (ex: Milesight, Dragino, etc).

- **Configuration** :

    - `type` : Doit correspondre au nom du fichier, en minuscule.

    - `language` : Mettre "js" si le décodeur est en JavaScript, sinon ne pas mettre ce champ.

    - `deviceProfile` : Mettre "C" si le capteur est en LoRaWAN Class C (optionnel).

- **commands** : Tableau listant toutes les commandes liées au capteur (infos ou actions).

    - **type** :

        - `info` : Pour une variable reçue (uplink).

        - `action` : Pour une commande à envoyer (downlink).

- **subtype** :

    - `numeric` : valeur numérique.

    - `string` : texte.

    - `binary` : binaire.

    - `slider/slide` : pour les commandes actions avec valeur à faire varier.

    - `other` : action simple sans argument.

- **isVisible** : Affichage de la commande (1 = oui, 0 = non).

- **isHistorized** : Historisation de la commande (1 = oui, 0 = non).
(Utilisé uniquement pour type "info")

- **unite** : Unité d'affichage (optionnel pour les valeurs numériques).

- **logicalId** :

    - Pour une info : ``parsed::nom_de_la_variable`` (récupérée dans la partie `decoded.` du JS)

    - Pour une action downlink : 
        ```js
        encoder::<fonction>::<valeur>
        ```
        ou
        ```js 
        encoder::<fonction>
        ``` 
        (si la valeur est définie dynamiquement, ex: slider)

    - Pour afficher le payload reçu tel quel : ``"logicalId": "payload"``

- **compatibility** : Tableau listant les capteurs compatibles, le fabricant, le type, et le lien image.

##### Bonnes pratiques
- Respecter les noms de variables : le champ `logicalId` doit strictement correspondre au nom exposé dans la fonction de décodage du JS (ex: ``decoded.temperature ⇒ "parsed::temperature"``).

- Toujours indiquer la commande d'action de façon claire pour faciliter la gestion des downlinks.

- Mettre toutes les unités pour chaque mesure si besoin (°C, %, V, etc.).

- Ajouter la compatibilité (fabricant, modèle, image) pour faciliter l'identification dans Jeedom.



## Ajouter l'image du capteur

- Format recommandé : PNG, 250x250 px

- Nommez le fichier comme votre capteur (ex : ``milesight_gs601.png``)
---
# Comment faire pour choisir la bonne structure pour les sous-types messages ?
1. Consulte la documentation officielle du capteur ou de l'API.

    - Regarde le tableau ou la section “Commandes downlink” ou “Configuration via payload”,

    - Repère les champs attendus, leur ordre, les valeurs acceptées, les unités, etc.

2. Note l'exemple de payload dans la doc.

    - Parfois c'est un tableau, parfois un JSON d'exemple.

3. Prépare la chaîne de valeurs à envoyer dans le bon ordre, séparées par | (comme vu plus haut), ou sous forme de JSON si l'outil le demande.

4. (*Facultatif*) : Si tu es un utilisateur avancé, tu peux regarder le code pour vérifier le mapping pour écrire le message.

Exemple Concret
Supposons, dans la documentation Milesight, tu trouves ce tableau :

| Champ                | Valeurs possibles | Description                    |
| -------------------- | ----------------- | ------------------------------ |
| enable               | 0, 1              | 0: Désactiver, 1: Activer      |
| threshold\_condition | 1,2,3,4           | 1: en-dessous, 2: au-dessus... |
| threshold\_min       | 0\~100            | En °C                          |
| threshold\_max       | 0\~100            | En °C                          |

```json
{
  "temperature_alarm_settings": {
    "enable": 1,
    "threshold_condition": 2,
    "threshold_min": 30,
    "threshold_max": 40
  }
}
```
- Commande à passer dans le message :
`"1|2|30|40"`

# Panel

## Qu'est-ce que le panel Lorapayload ?

- Le **panel Lorapayload** est une interface disponible dans Jeedom qui **centralise les informations des capteurs venant de votre réseau LoRaWAN**.
- Il affiche :
  - La liste **complète des capteurs connectées** au serveur LNS leurs statuts en temps réel.

- Pour l'afficher, il faut se rendre dans la configuration du plugin Lorapayload, elle se trouve en bas a droite.
![alt text](../images/image-3.png)

---
## Visualisation dans Jeedom

- Accède à ces panels depuis l'interface Jeedom :
![alt text](../images/image-4.png)
![alt text](../images/image-9.png)
---
## Gestionnaire de file d'attente

Cette mise à jour améliore la gestion de la file d'attente des downlinks dans le plugin lorapayload pour Jeedom. Elle introduit :
- Un démon (lorapayloadd.php) chargé d'exécuter les downlinks au bon moment.

- Un panneau d'administration pour visualiser, rafraîchir ou purger la queue depuis l'interface Jeedom,

- Un système de priorités (champ `priority`).

- Un réordonnancement FIFO respectueux du tempo de rafraîchissement (`refreshTime`).

- Un recalcul complet des timestamps (`ts`) lorsque des downlinks prioritaires sont détectés.

- Une temporisation légère pour regrouper les appels et éviter les collisions.

### Fonctionnalités clés

1. **Démon Worker**
Le démon (`lorapayloadd.php`) tourne en continu et lit la clé de cache `queueDownlink`. À chaque cycle :
- Cycle toutes les 3s
- Relit à chaque itération pour prendre en compte les purges ou modifications.

2. **Panneau d'administration**

![alt text](../images/image-11.png)

Dans l'interface Jeedom, onglet Acceuil → lorapayload → Cache queueDownlink :
- Liste des downlinks en attente (`EqLogic ID`, `priorité`, `DevEUI`, `ts`, `Downlink (JSON)`, `actions`),
- Boutons : `Rafraîchir`, `Vider tout`, `Supprimer` (entry par entry),
- Affichage de la taille actuelle de la file.

3. **Fonctionnalités clés**
- **Démon**
Exécution programmée des downlinks selon leur champ `ts` et relecture dynamique de la queue pour tenir compte des purges.

- **Priorité**
Attribut priority dans chaque équipement (0 = normal, 1 = prioritaire).
Lorsqu'au moins un prioritaire existe, la file est triée en deux blocs : prioritaires puis normaux.

- **Temporisation des envoies (Refresh Time)**
`refreshTime` (en secondes) paramétrable dans le plugin (défaut : 0 s).
Assure un espacement minimal entre deux downlinks du même équipement.

- **Recalcul de la file**
Si des priorités sont détectées, la queue complète est retriée selon : priorité (`1` > `0`) et l'ordre d'arrivée (`received_at`).
Les timestamps `ts` sont ensuite recalculés pour chaque équipement, en appliquant le `tempo` en FIFO.

- **Temporisation légère**
`usleep(200 ms)` avant le recalcul si des priorités sont présentes, pour regrouper les ajouts simultanés.

- **Gestion de la taille**
tailleQueue définit le nombre maximal d'entrées. Au-delà, les plus anciennes sont automatiquement purgées.



4. **Configuration**
Configurer les équipements prioritaires en allant dans les configuration de l'équipement puis dans `LoRaWAN > Downlink`
![alt text](../images/image-13.png)
Si votre équipement est prioritaire, cochez sur le check point `Prioritaire` puis enregistrez.
Ensuite rendez-vous dans les configurations du plugin Lorapayload et dans le champs configuration, ajustez les paramètres globaux en fonction de votre application.
![alt text](../images/image-12.png)
Redémarrer le démon s'il est arrêté ou en statut NOK.
Suivre et gérer l'état de la file dans l'onglet Cache queueDownlink.
_________
# FAQ

-   Some commands do not update at the same time as others : yes indeed some Lorawan modules do not necessarily send all the information at the same time and with the same frequency
