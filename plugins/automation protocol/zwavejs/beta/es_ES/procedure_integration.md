# Procédure d'Intégration

Pour créer un fichier de configuration pour un nouveau produit, commencez par inclure ce produit dans Jeedom.

![alt text](../img/equipment.png)

Une fois sur la page du produit, cliquez sur le bouton **"Noeud"** pour faire apparaître cette fenêtre modale :

![alt text](../img/modal_noeud.png)

Les informations importantes à récupérer sont :

- **Identifiant :** XXX - XXX - XXX  
- **Configuration :** XXX.json

Le champ **Configuration** indique le nom à donner au fichier de configuration.  
Exemple : `qmsw-0A1X8.json`

Le champ **Identifiant** permet de déterminer :
- le dossier dans lequel créer le fichier ;
- la version à indiquer dans la configuration.

Le **premier nombre** de l'identifiant correspond au dossier.  
Exemple : avec `1120`, il faut créer le fichier `qmsw-0A1X8.json` dans le dossier `shellyqubino_1120`.

> ⚠️ **Attention :** Le nom du dossier ne correspond pas toujours au nom du fabricant. Il faut **se baser sur le numéro** !  
> Exemple : *Wintop* a pour numéro `151`, ce qui fait référence au dossier `schlage_151`.

Les **deuxième et troisième nombres** de l'identifiant correspondent à la **version**.  
Exemple : Version `"2"` : `[ "142" ]`

![alt text](../img/config_exemple.png)

- Pour le champ `"name"`, utilisez le modèle du produit.  
  Exemple : `"QMSW-0A1X8"`
- Pour le champ `"type"`, indiquez le type de produit : *Micromodule, Relais, Type d'ouverture*, etc.

---

## Création de commandes

La création automatique des commandes repose sur le champ `"properties"`.

Commencez par cliquer sur le bouton **"Valeurs"**, qui ouvrira une modale similaire à celle-ci :

![alt text](../img/modal_valeurs.png)

Les champs **"Manufacturer Specific"**, **"Configuration"** et **"Version"** peuvent être ignorés.

Les données intéressantes sont :
- Le **nom des commandes**
- leur **classe**

Dans le cas des **notifications**, on souhaite par exemple créer des commandes pour les alarmes de chaleur, ainsi que le niveau et le type d'alarme.

Pour cela, on se réfère au fichier `Notification.json` dans le dossier `properties`.

![alt text](../img/notification.png)

Une fois dans ce fichier, identifiez le type de propriété à utiliser.  
Exemple : pour créer une commande d'alarme `"heat-sensor"`, on ajoute dans le fichier de configuration :

```json
"Notification|heat-sensor": {
  "type": "heat-sensor"
}
```