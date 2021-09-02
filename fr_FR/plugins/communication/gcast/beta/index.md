# Plugin Gcast

Le plugin Gcast permet d’établir un lien entre votre Google Assistant et Jeedom. Il sera possible d’utiliser votre Google Home / Google Mini pour faire du TTS ou interagir avec Jeedom via les interactions

# Configuration

## Configuration du plugin

Après téléchargement du plugin il vous faut l’activer et renseigner l’IP de votre Google Assistant. Ce plugin permet de faire parler un google cast et de contrôler son volume. Il permet aussi d’agir comme un pont pour les interactions et Google Home.

## Configuration de IFTTT pour le retour TTS (facultatif)

Sans IFTTT, votre Google Assistant ne pourras pas echanger avec Jeedom.

**Voici les quelques étapes de configuration :**

-   Se connecter ou s’inscrire sur IFTTT : <https://ifttt.com> (ou via l’application mobile)
-   Onglet "My Applets" puis "New Applet"
-   Clic sur "+This", choisir Google Assistant (lier votre Google Assistant à IFTTT si ce n’est pas déjà fait)
-   Choisir le trigger "Say a phrase with a text ingredient"

**Exemple de configuration de la première partie de l’Applet :**

-   **What do you want to say?** : dis à jeedom \$
    > **Tip**
    >
    > Il faut absolument mettre '\$' à la fin de votre phrase

-   **What’s another way to say it? (optional)** : maison \$
-   **And another way? (optional)** : jarvis \$
-   **What do you want the Assistant to say in response?** : Je m’exécute
    > **Tip**
    >
    > Ici il s’agit de la phrase que votre Google Assistant va repondre
    > avant qu’il traite votre demande

-   **Language** : French
-   Clic sur "+That", choisir Webhooks (activer le service si ce n’est pas déjà fait)
-   Choisir le seul trigger de disponible : Make a web request

**Exemple de configuration de la deuxième partie de l’Applet :**

-   **URL** : Vous devez coller l’url de retour indiquée dans la page de votre équipement
    > **Tip**
    >
    > L’url de retour doit être modifiée : ***ID\_EQUIPEMENT*** doit être remplacer par l’ID de votre Google Assistant (Cliquer sur "Configuration avancé" sur la page de votre équipement pour connaitre l’ID) et *query=XXXX* par query={{TextField}}

    > **Important**
    >
    > L’url doit être l’URL externe ``https://mon\_dns.com/plugins/gcast/core/php/gcastApi.php?apikey=xxxxxxMA\_CLE\_APIxxxxxxxx&id=142&query={{TextField}}``

-   **Method** : GET
-   **Content type** : application/json
-   **Body** : {{TextField}}

Il ne reste plus qu’a cliquer sur "Save" et profiter de vos intéractions entre Google Assistant et Jeedom !

L’utilisation de ASK est même possible

# FAQ

> **Le control du volume marche mais pas le TTS**
>
> Il faut verifier votre configuration réseaux interne (le plugin l'utilise pour la génération du TTS), en particulier pas de https sur le réseaux interne.
