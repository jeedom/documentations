Nodon Télécommande - Soft Remote 
================================

 \

-   **The module**

 \

![module](images/nodon.softremote/module.jpg)

 \

-   **Le visuel Jeedom**

 \

![vuedefaut1](images/nodon.softremote/vuedefaut1.png)

 \

Summary 
------

 \

La Soft Remote NodOn® peut contrôler directement n'importe quel appareil
compatible Z-Wave® ou Z-Wave Plus® tel que la prise intelligente NodOn®.

Elle peut également déclencher des scènes via une centrale domotique
compatible.

 \

Functions 
---------

 \

-   Contrôle n'importe quel appareil compatible Z-Wave

-   Résistante aux chocs et aux éclaboussures

-   Se fixe partout grâce à son aimant intégré

-   6 coloris available

 \

Caractéristiques techniques 
---------------------------

 \

-   Food : Pile CR2032 – Autonomie 1,5 - 2ans

-   4 boutons

-   Aimant intégré pour fixation sur surface métallique

-   Résistante aux chocs et aux éclaboussures

-   Température de fonctionnement : 0°C à 40°C - Altitude : 2000m

-   Protocole radio Z-Wave® : 868.4MHz – 500 Series – Compatible Z-Wave
    Plus® SDK 06.51.06

-   Portée : 40m en intéieur / 80m en extérieur

-   Dimensions 56\*56\*20mm

-   Garantie 2 ans

 \

Données du module 
-----------------

 \

-   Marque : Nodon

-   Name : CRC-3-6-0x Soft Remote

-   Fabricant ID : 357

-   Type Produit : 2

-   Produit ID : 2

 \

Setup 
-------------

 \

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en
inclusion référez-vous à cette
[documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 \

> **IMPORTANT**
>
> Pour mettre ce module en mode inclusion il faut appuyer sur les deux
> bouton (+ et 0 plein) jusqu'à que la lumière devienne rose puis
> appuyer sur le bouton +, conformément à sa documentation papier.

 \

![inclusion](images/nodon.softremote/inclusion.jpg)

 \

Une fois inclus vous devriez obtenir ceci :

 \

![Plugin Zwave](images/nodon.softremote/information.png)

 \

### Commands 

 \

Une fois le module reconnu, les commandes associées au module seront
available.

 \

![Commands](images/nodon.softremote/commandes.png)

 \

Voici la liste des commandes :

 \

-   Buttons : c'est la commande qui remontera le bouton appuyé

+----------------+----------------+----------------+----------------+----------------+
| Buttons        | Appui          | Long press     | Relaxation    | Double support   |
+================+================+================+================+================+
| **1 (0         | 10             | 12             | 11             | 13             |
| plein)**       |                |                |                |                |
+----------------+----------------+----------------+----------------+----------------+
| **2 (+)**      | 20             | 22             | 21             | 23             |
+----------------+----------------+----------------+----------------+----------------+
| **3 (0 vide)** | 30             | 32             | 31             | 33             |
+----------------+----------------+----------------+----------------+----------------+
| **4 (-)**      | 40             | 42             | 41             | 43             |
+----------------+----------------+----------------+----------------+----------------+

-   Drums : c'est la commande qui remonte le niveau des piles

 \

### Setup of the module 

 \

> **IMPORTANT**
>
> Lors d'une première inclusion réveillez toujours le module juste après
> l'inclusion.

 \

Ensuite si vous voulez effectuer la configuration du module en fonction
de votre installation, il faut pour cela passer par la bouton
"Setup" du plugin OpenZwave de Jeedom.

 \

![Setup plugin Zwave](images/plugin/bouton_configuration.jpg)

 \

Vous arriverez sur cette page (après avoir cliqué sur l'onglet
paramètres)

 \

![Config1](images/nodon.softremote/config1.png)

 \

Détails des paramètres :

 \

-   1-2 : Permet de choisir le profil des boutons en cas d'usage en
    central (inutile pour un usage dans Jeedom)

-   3 : Paramètre important pour dire si l'interrupteur doit fonctionner
    en mode Scene ou Central Scene (Absolument mettre Scene)

-   4-7 : Choisir le mode de fonctionnement des boutons (en cas
    d'associations groupes)

-   8 : Permet de choisir le mode de fonctionnement de la LED

### Groups 

 \

Ce module possède 7 groupes d'association.

 \

![Groupe](images/nodon.softremote/groupe.png)

 \

-   Groupe 1 – Lifeline : Ce groupe est généralement utilisé pour
    reporter des informations de la Smart Plug au contrôleur principal
    du réseau.

-   Groupe 2 à 5 – Les appareils dans ces groupes sont contrôlés par le
    bouton correspondant selon le profil MONO

-   Groupe 6 à 7 – Les appareils dans ces groupes sont contrôlés par les
    boutons correspondants selon le profil DUO

 \

> **IMPORTANT**
>
> A minima Jeedom devrait se retrouver dans le groupe 1  \

Bon à savoir 
------------

 \

### Spécificités 

 \

-   Ce module peut être capricieux à l'inclusion. Ne pas hésiter à le
    réveiller 1 ou 2 fois après l'inclusion. Et bien vérifier le
    groupe d'association.

 \

Wakeup 
------

 \

Pour réveiller ce module il suffit d'appuyer sur un des boutons

 \

F.A.Q. 
------

 \

Ce module est un module sur batterie, la nouvelle configuration ne sera
prise en compte que si vous réveillez la télécommande.

 \

Note importante 
---------------

 \

> **IMPORTANT**
>
> Il faut réveiller le module : après son inclusion, après un changement
> de la configuration , après un changement de wakeup, après un
> changement des groupes d'association

 \

**@lunarok**
