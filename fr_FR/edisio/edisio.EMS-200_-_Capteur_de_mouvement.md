# Edisio EMS 200

**Le module**

![ems200.module](images/ems200/ems200.module.jpg)

## Résumé

Placé dans un couloir, le salon, le garage de votre maison par exemple, le capteur de mouvement détecte une présence, le changement d’état est instantané.

Grâce à son angle de vision étendu et sa portée, il permet de sécuriser un large périmètre. L’indicateur LED intégré signale tout changement d’état.

## Fonctions

-   Détecte les mouvements, même dans le noir complet
-   Ultra compact
-   Signal transmis instantanément lors d’une détection
-   Auto-protection à l’arrachage
-   Facilité d’utilisation et d’installation
-   Montage au mur par des vis ou par double face
-   Informations sur le niveau de la batterie

## Caractéristiques techniques

-   Type de module : Emetteur Edisio
-   Alimentation : 3VDC (Pile Lithium ER14250)
-   Fréquence : 868,3 MHz
-   Température de fonctionnement : 0°C +45°C
-   Portée en champs libre : 100M
-   Portée de détection : 6M
-   Dimensions : 25x79x19mm
-   Degré de protection : IP20
-   Utilisation : En intérieur

## Données du module

-   Marque : Edisio Smart Home
-   Nom : EMS-200

## Configuration générale

Pour configurer le plugin Edisio et associer un module à Jeedom, référez-vous à cette [documentation](../plugins/automation%20protocol/edisio/).

> **Important**
>
> Pour que Jeedom crée automatiquement vos modules émetteurs, n’oubliez pas d’activer l’option dans la configuration du plugin.

> **Tip**
>
> Le placement est conseillé à une hauteur de 150 cm et à proximité de la température ressentie voulue.

### Bouton "E"

Vous trouverez le bouton "E" qui est le bouton d’association du capteur de température.

![ems200.bouton e](images/ems200/ems200.bouton-e.jpg)

### Détection

Le capteur détecte le moindre mouvement dans un rayon d’environ 6m

![ems200.detection](images/ems200/ems200.detection.jpg)

### Réglage de la minuterie

Par défaut, la minuterie est désactivée. Ce paramètre sert à configurer le délai :

![ems200.minuterie](images/ems200/ems200.minuterie.jpg)

## Association du capteur à Jeedom

L’association du capteur de mouvement, est simple comme bonjour. Il suffit d’appuyer sur le bouton "E", situé sous le capteur. Celui-ci sera reconnu automatiquement par Jeedom. Il suffira de se rendre dans le plugin Edisio. Vous pourrez ainsi le placer dans un objet, lui donner un nom et sauvegarder.

Une fois votre équipement associé, vous devriez obtenir ceci :

![ems200.general](images/ems200/ems200.general.jpg)

> **Tip**
>
> Afin que le widget soit présent sur le dashboard, pensez à placer votre équipement dans un objet.

### Commandes

Une fois votre équipement créé, vous devriez obtenir les commandes associées au module :

![Commandes](images/ems200/ems200.commande.jpg)

Voici la liste des commandes :

-   Présence : C’est la commande qui indique si une présence est détectée
-   Batterie : Indique l’état de la batterie

### Informations

Une fois votre équipement associé à Jeedom, diverses informations seront disponibles :

![Commandes](images/ems200/ems200.informations.jpg)

-   Création : Indique la date à laquelle l’équipement à était créé
-   Communication : Indique la dernière communication enregistrée entre Jeedom et le module
-   Batterie : Indique l’état de la batterie des modules à piles
-   Status : Retourne le status du module
