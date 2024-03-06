# Plugin Gestion Volets

Le plugin **Gestion des Volets** va vous permettre de gérer facilement le positionnement automatique de vos volets en fonction de l'élévation et de l'azimuth du soleil et/ou d'autres conditions de votre choix. Tous les calculs sont effectués directement par le plugin sans nécessiter de connexion à internet.

Bien appréhendé, ce plugin est en mesure de remplacer l'ensemble des scénarios relatifs à l'ouverture, la fermeture ou le positionnement de vos volets. Vous pouvez retrouver un exemple d'utilisation à la lecture de [cet article du blog rédigé par Loïc](https://blog.jeedom.com/5543-gestion-de-mes-volets/).

>**IMPORTANT**
>
>Le plugin **Gestion des Volets** ne fonctionne qu'avec des équipements possédant **une commande action/curseur** permettant de **positionner le volet à un certain pourcentage d'ouverture/fermeture**. Si votre volet ne fonctionne qu'en ouverture/fermeture, le plugin ne sera pas utilisable.

# Configuration

Le plugin **Gestion des Volets** doit simplement être activé après l’installation et ne nécessite pas d'autre configuration.

## Configuration des volets

Pour accéder aux différents équipements de **Gestion des Volets**, il faut se diriger vers le menu **Plugins → Automatisme → Gestion Volets**.

>**INFORMATION**
>    
>Le bouton **+ Ajouter** permet d'ajouter un nouveau volet à automatiser.

L'ensemble de la configuration d'automatisation de chaque volet s'effectue depuis le premier onglet de l'équipement :

- **Nom du volet** : Nom de l'équipement.
- **Objet parent** : Indique l’objet parent auquel appartient l’équipement.
- **Catégorie** : Permet de choisir la catégorie de l'équipement.
- **Options** :
    - **Activer** : Permet de rendre l'équipement actif.
    - **Visible** : Rend l'équipement visible.

En dessous, nous allons pouvoir configurer le moteur de gestion automatique en lui-même :

- **Condition pour vérification** : Condition à remplir pour que la gestion automatique s'active, si cette condition n'est pas vraie, le plugin ne modifiera pas la position du volet *(vide par défaut = toujours active)*.
- **Fréquence de vérification** : Fréquence de contrôle des exceptions et des conditions de positionnement.
- **Reprendre la main** : Autorisez ou non le système de gestion automatique à modifier la position du volet si celui-ci a été manœuvré manuellement.
>*Exemple : le système ferme le volet puis vous l'ouvrez manuellement quelques minutes plus tard, alors la gestion automatique ne se fera que si **Reprendre la main** est à "**Oui**" ou que le délai de reprise de main est dépassé ou encore que la commande **Reprendre gestion** ne soit déclenchée.*

- **Reprendre sur changement de mode** : Cochez la case pour reprendre la gestion automatique en cas de changement de mode.
- **Action immédiate prioritaire** : Cochez la case pour que les exceptions avec action immédiate s'exécutent peu importe les autres conditions, même en cas de suspension.

>**IMPORTANT**
>
>Les "modes" dont il est fait mention ici sont relatifs aux modes définis depuis l'onglet **Commandes** de chaque équipement du plugin **Gestion Volets** et ne font en aucun cas référence à d'éventuels modes du plugin **Mode**.

Par la suite il va falloir indiquer les coordonnées du bâtiment pour pouvoir calculer la position du soleil :

- **Utiliser la configuration générale** : Cochez la case pour utiliser les coordonnées renseignées dans la configuration générale de Jeedom.

ou

- **Latitude** : La latitude du bâtiment ou du volet.
- **Longitude** : La longitude du bâtiment ou du volet.
- **Altitude** : L'altitude du bâtiment ou du volet.

Enfin, ne reste plus qu'à renseigner les informations relatives au contrôle du volet :

- **Pourcentages de fermeture/ouverture** : Indiquez le pourcentage minimal de fermeture *(généralement 0)* et maximal d'ouverture *(généralement 99 ou 100)*.
- **Durée d'un déplacement** : Délai maximum en secondes pour effectuer un mouvement complet d'ouverture ou de fermeture.
- **Commande d'état** : Renseignez la commande info/numérique indiquant la position actuelle du volet.
- **Commande de positionnement** : Renseignez la commande action/curseur permettant de positionner le volet.
- **Commande d'actualisation** : Renseignez la commande action permettant de rafraîchir la position du volet *(facultatif)*.
- **Action par défaut** : Action qui sera effectuée par défaut si aucune exception ni position n'est valide.

![Configuration](./images/sunshutter_eqLogicConfig.png)

# Exceptions

Cet onglet va permettre de définir des règles spécifiques qui viendront en exception aux conditions relatives à la position du soleil de l'onglet suivant. Les règles sont vérifiées les unes après les autres, le moteur de gestion automatique s'arrête à la première règle valide et place le volet à la position indiquée.

- **Condition** : La condition à remplir pour que la règle soit valide *(facultatif)*.
- **Mode** : Si renseigné, la condition ne sera valide que si le volet est actuellement dans le mode spécifié. Il est possible de spécifier plusieurs modes en les séparant par des virgules *(facultatif)*.
- **Exception immédiate** : Cochez la case pour que la règle s'exécute immédiatement dès que la condition est valide. Attention cela ne marche que lors de changement d'état de commandes. Si vous mettez par exemple `#hour# == 1022` l'exception immédiate ne marchera pas. Idem pour les variables.
- **Suspendre** : Cochez la case pour suspendre la gestion automatique tant que la règle est valide.
- **Position** : La position désirée en pourcentage si la règle est valide *(vide = aucune action)*.
- **Label** : Label associé à la validation de la règle d'exception *(facultatif)*.

![Exceptions](./images/sunshutter_exceptions.png)

# Positionnement

C'est au sein de cet onglet que vous allez pouvoir gérer le positionnement du volet automatiquement en fonction de la position du soleil.

- **Condition** : Condition, complémentaire à la position, à remplir pour que le postionnement du volet soit validé *(facultatif)*.
- **Azimuth** : Renseignez les bornes d'azimuth du soleil en degrés entre lesquelles la condition sera valide.
- **Elévation** : Renseignez les bornes d'élévation du soleil en degrés entre lesquelles la condition sera valide.
- **Position** : La position désirée en pourcentage si les conditions de positionnement (et complémentaires le cas échéant) sont valides.
- **Label** : Label associé à la validation de la condition de positionnement *(facultatif)*.

![Conditions](./images/sunshutter_conditions.png)

>**ASTUCE**
>
>Le site [suncalc.org](https://www.suncalc.org){:target="\_blank"} permet, une fois votre adresse rentrée, de visualiser la position du soleil et les angles d'azimuth et d'élévation en fonction des heures de la journée *(il suffit de faire glisser le petit soleil en haut)*.

# Programmation

Cet onglet n'apparait que si le plugin **Agenda** est installé sur votre Jeedom. Il recense les programmations du plugin **Agenda** agissant sur la gestion automatique de ce volet pour, par exemple, planifier une suspension et une reprise manuelle pendant les heures de sieste d'un enfant.

# Commandes

Ce dernier onglet donne accès à la liste des commandes et permet de définir/supprimer des modes pour la gestion automatique du volet :

- **Azimut soleil** : Angle d'azimuth actuel du soleil.
- **Elévation soleil** : Angle d'élévation actuel du soleil.
- **Rafraichir** : Force la mise à jour des commandes **Azimut soleil** et **Elévation soleil**.
>Il est bien sûr possible d'utiliser les valeurs des commandes **Azimuth soleil** et **Elévation soleil** ailleurs dans Jeedom.

- **Etat gestion** : Etat actuel de la gestion automatique en binaire *(0 = suspendue / 1 = active)*.
- **Forcer action** : Force le calcul de position du volet en fonction de la position du soleil et des exceptionbs et applique le positionnement quel que soit l\'état de la gestion automatique *(suspendue ou non)*.
- **Dernière position** : Dernière position demandée au volet par le plugin.
- **Label** : Label correspondant à une exception ou une condition de positionnement valide.
- **Suspendre** : Suspend la gestion automatique du volet.
- **Suspendre (Label)** : Etat actuel de la suspension de la gestion automatique du volet *(Aucun / Manuel / Auto)*.
- **Reprendre** : Force la remise en route de la gestion automatique.
>C'est cette commande qu'il faudra exécuter pour repasser en gestion automatique si vous avez modifié la position de votre volet manuellement et configuré **Reprendre la main** à "**Non**".

- **Mode** : Mode actuel du volet.

Le bouton bleu **Ajouter un mode** permet d'ajouter une nouvelle commande action dont le nom correspondra au nouveau mode en cours à partir du moment où elle est exécutée.

>**ASTUCE**
>
>Vous pouvez, par exemple, définir un mode **Jour** et un mode **Nuit** et régler l'ouverture et la fermeture de votre volet en fonction de ces 2 modes.

# Santé

Le plugin **Gestion des Volets** est pourvu d'une fenêtre **Santé**, sur la page générale des équipements, qui permet de visualiser d'un seul coup d'œil les configurations de chaque gestion automatique.

# Panel

Le plugin est également doté d'un panel de gestion disponible à la fois en version desktop et mobile. Pour l'activer, il suffit d'aller dans **Plugins → Gestion des plugins**, cliquer sur le plugin **Gestion Volets** et de cocher les cases pour afficher les panels tout en bas à droite.
