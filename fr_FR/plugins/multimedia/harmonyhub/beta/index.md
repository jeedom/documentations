# Plugin Harmony Hub

Ce plugin permet de contrôler et de récupérer tous les dispositifs associés à un ou plusieurs Harmony Hub.

Après avoir récupéré toutes les informations relatives à ces dispositifs, le plugin sera en mesure de créer automatiquement toutes les commandes associées pour un contrôle total depuis Jeedom.

# Configuration

Comme tout plugin Jeedom, le plugin **Harmony Hub** doit être activé après l'installation.

## Configuration du plugin

Le plugin utilise des dépendances qu'il faudra installer en premier lieu en cliquant sur le bouton **Relancer**.

Une fois les dépendances installées, vous pouvez renseigner l'adresse IP sur laquelle est joignable le Harmony Hub.

>**ASTUCE**
>
>Le plugin est en mesure de dialoguer avec plusieurs hubs en même temps. Pour se faire, il faudra indiquer l'adresse IP de chaque hub séparée par le symbole `|`.

Cliquez ensuite sur le bouton **Fichiers de configuration** pour générer *(ou mettre à jour)* le(s) fichier(s) contenant toutes les informations sur les dispositifs associés à chaque hub Harmony.

## Configuration des équipements

Pour accéder aux différents équipements, dirigez-vous vers le menu **Plugins → Multimedia → Harmony Hub**.

>**INFORMATION**
>
>Le bouton + Ajouter permet d'ajouter un nouvel équipement Harmony Hub.

Pour chaque équipement nous retrouvons les paramètres généraux habituels ainsi que 2 menus déroulants permettant, pour l'un, de sélectionner le hub concerné par le dispositif et pour l'autre de choisir le type de dispositif parmis :

- **Activités** : Un équipement regroupant toutes vos activités ainsi que
    le power off général et une information de l’activité en cours.

- **Un de vos dispositifs** : Un équipement regroupant toutes les
    commandes pour un dispositif donné.

Une fois sélectionné, il suffit de cliquer sur le bouton **Sauvegarder** pour générer automatiquement la liste des commandes correspondantes :    

![harmonyhub screenshot4](../images/harmonyhub_commands.jpg)

# Commandes

Les commandes ne sont pas visibles par défaut, elles sont
cependant toutes disponibles via scénario, virtuels, etc…​

Si vous voulez en afficher sur votre dashboard, il suffit de les réorganiser en
glisser/déposer et de cocher la case **Afficher**. Vous pouvez ensuite, en jouant avec les retours à la ligne, des widgets spécifiques ou les icônes
proposées, créer une pseduo télécommande :

![harmonyhub screenshot5](../images/harmonyhub_screenshot5.jpg)
![harmonyhub screenshot6](../images/harmonyhub_screenshot6.jpg)

# Information importante

Depuis le 19-02-2019 il faut **activer une option développeur** dans l'application Harmony.

Voir ce lien de Logitech :
<https://community.logitech.com/s/question/0D55A00008OsX3CSAV/update-to-accessing-harmony-hubs-local-api-via-xmpp>
