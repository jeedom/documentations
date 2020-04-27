Plugin permettant de récupérer les informations des équipements Netatmo Security

# Configuration du plugin

Une fois le plugin installé, il vous faut renseigner vos informations de
connexion Netatmo :

-   **Client ID** : votre client ID (voir partie configuration)

-   **Client secret** : votre client secret (voir partie configuration)

-   **Nom d’utilisateur** : nom d’utilisateur de votre compte netatmo

-   **Mot de passe** : mot de passe de votre compte Netatmo

-   **Synchroniser** : permet de synchroniser Jeedom avec votre compte
    Netamo pour découvrir automatiquement vos équipements Netamo. A
    faire après avoir sauvegardé les paramètres précedent.

# Recupération des informations de connexion

Pour intégrer votre Welcome, vous devez posséder un client\_id et un
client\_secret généré sur le site <http://dev.netatmo.com>.

Une fois dessus cliquez sur start :

![netatmoWelcome10](../images/netatmoWelcome10.png)

Puis sur "create an app"

![netatmoWelcome11](../images/netatmoWelcome11.png)

Identifiez vous, avec votre mail et mot de passe

![netatmoWelcome12](../images/netatmoWelcome12.png)

Remplissez les champs "Name" et "Description" (peux importe ce que vous
mettez ca n’a aucune importance) :

![netatmoWelcome13](../images/netatmoWelcome13.png)

Puis tout en bas de la page cochez la case "I accept the terms of use"
puis cliquez sur "Create"

![netatmoWelcome14](../images/netatmoWelcome14.png)

Recuperer les informations "CLient id" et "Client secret" et copier les
dans la partie configuration du plugin dans Jeedom (voir chapitre
précedent)

![netatmoWelcome15](../images/netatmoWelcome15.png)

# Configuración de los dispositivos

La configuration des équipements Netatmo est accessible à partir du menu
plugin -> Securité -> Netatmo Security

Une fois que vous cliquez sur un équipement vous retrouvez ici toute la configuration de votre équipement :

-   **Nom de l’équipement Netatmo** : nom de votre équipement Netatmo
-   **Objet parent** : indique l’objet parent auquel appartient l’équipement
-   ** ** Activar: para que su equipo activo
-   Visible ** **: hace visible en el tablero de instrumentos

A continuación encontrará la lista de ordenes :

-   le nom de la commande
-   historiser : permet d’historiser la donnée
-   configuration avancée (petites roues crantées) : permet d’afficher
    la configuration avancée de la commande (méthode d’historisation, widget…​)
-   Prueba: prueba el comando

# FAQ

>**Je n'ai pas les évenements en temps réel mais au bout de 15min**
>
>Pour avoir un retour en temps réel des évenements (déclenchement alarme incendie, personne qui passe devant la camera..) il faut ABSOLUMENT que votre jeedom ait une URL externe en https avec un certificat valide sur le port 443 (et uniquement ce port la). C'est une obligation imposé par netatmo
