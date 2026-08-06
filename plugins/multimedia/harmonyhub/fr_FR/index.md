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

Sauvegardez la configuration et Démarrer le démon.

## Configuration des équipements

Pour accéder aux différents équipements, dirigez-vous vers le menu **Plugins → Multimedia → Harmony Hub**.

Si la configuration du plugin est correcte, tous vos équipements auront été créé automatiquement avec leurs commandes.

Pour chaque équipement nous retrouvons les paramètres généraux habituels ainsi que 1 menu déroulant permettant de choisir l'icône du dispositif. Cette configuration est facultative et n'influence en rien le comportement du plugin.

# Information importante

Vérifiez si vous devez **activer l'option développeur** dans l'application Harmony.

Voir ce lien de Logitech :
<https://community.logitech.com/s/question/0D55A00008OsX3CSAV/update-to-accessing-harmony-hubs-local-api-via-xmpp>
