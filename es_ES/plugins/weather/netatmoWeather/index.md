Plugin permettant de récupérer les informations des stations météo
Netatmo.

configuración del plugin
=======================

Une fois le plugin installé, il vous faut renseigner vos informations de
connexion Netatmo :

![netatmoWeather2](./images/netatmoWeather2.png)

-   **Client ID** : votre client ID (voir partie configuration)

-   **Client secret** : votre client secret (voir partie configuration)

-   **Nom d’utilisateur** : nom d’utilisateur de votre compte netatmo

-   **Mot de passe** : mot de passe de votre compte Netatmo

-   **Synchroniser** : permet de synchroniser Jeedom avec votre compte
    Netamo pour découvrir automatiquement vos équipements Netamo. A
    faire après avoir sauvegardé les paramètres précedent.

Recupération des informations de connexion 
==========================================

Pour intégrer votre station, vous devez posséder un client\_id et un
client\_secret généré sur le site <http://dev.netatmo.com>.

Une fois dessus cliquez sur start :

![netatmoWeather10](./images/netatmoWeather10.png)

Puis sur "create an app"

![netatmoWeather11](./images/netatmoWeather11.png)

Identifiez vous, avec votre mail et mot de passe

![netatmoWeather12](./images/netatmoWeather12.png)

Remplissez les champs "Name" et "Description" (peux importe ce que vous
mettez ca n’a aucune importance) :

![netatmoWeather13](./images/netatmoWeather13.png)

Puis tout en bas de la page cochez la case "I accept the terms of use"
puis cliquez sur "Create"

![netatmoWeather14](./images/netatmoWeather14.png)

Recuperer les informations "CLient id" et "Client secret" et copier les
dans la partie configuration du plugin dans Jeedom (voir chapitre
précedent)

![netatmoWeather15](./images/netatmoWeather15.png)

> **Important**
>
> Attention il faut bien que l’url de callback soit à "None" sinon ca ne
> marchera pas.

Configuración del dispositivo
=============================

La configuration des équipements Netatmo est accessible à partir du menu
plugin :

![netatmoWeather3](./images/netatmoWeather3.png)

Voilà à quoi ressemble la page du plugin Netatmo (ici avec déjà 2
équipement) :

![netatmoWeather4](./images/netatmoWeather4.png)

> **Tip**
>
> Comme à beaucoup d’endroits sur Jeedom, placer la souris tout à gauche
> permet de faire apparaître un menu d’accès rapide (vous pouvez à
> partir de votre profil le laisser toujours visible).

Une fois que vous cliquez sur un équipement vous obtenez :

![netatmoWeather5](./images/netatmoWeather5.png)

Aquí encontrará toda la configuración de su dispositivo:

-   **Nom de l’équipement Netatmo** : nom de votre équipement Netatmo

-   **Objeto padre** : especifica el objeto padre al que pertenece
    equipo

-   ** ** Activar: para que su equipo activo

-   Visible ** **: hace visible en el tablero de instrumentos

-   **Identifiant** : identifiant unique de l’équipement

-   **Type** : type de votre équipement (station, sonde intérieure,
    sonde extérieures…​)

A continuación encontrará la lista de ordenes :

-   le nom affiché sur le dashboard

-   historiser : permet d’historiser la donnée

-   configuration avancée (petites roues crantées) : permet d’afficher
    la configuration avancée de la commande (méthode
    d’historisation, widget…​)

-   Prueba: prueba el comando

Widget 
======

Voici le widget standard pour une station sur le dashboard :

![netatmoWeather6](./images/netatmoWeather6.png)

Et en mobile :

![netatmoWeather7](./images/netatmoWeather7.png)

Preguntas frecuentes
===

Quelle est la fréquence de rafraîchissement ?

:   Le systeme recupère les informations toutes les 15 min.


