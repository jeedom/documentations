# Plugin Google smarthome

Ce plugin permet de :

- utiliser l'implementation native de Google pour la gestion des objets connectés

Il peut fonctionner suivant 2 manières :

- Standalone : vous créez les applications en mode dev côté Google puis connectez votre Jeedom au service Google
- Cloud : en passant par un service cloud mis à disposition par Jeedom

> **Important**
>
> Le mode cloud nécessite un abonnement aux services vocaux (3 mois offerts lors de l'achat du plugin). Vous pouvez gérer votre abonnement [ici](https://market.jeedom.com/index.php?v=d&p=profils#services)

> **Important**
>
> GOOGLE impose que votre Jeedom soit accessible en HTTPS (le plugin ne marche pas en HTTP) avec un certificat valide (donc pas de certificat auto-signé)
>
> Grâce aux Service Pack Power ou Ultimate, votre Jeedom est accessible en HTTPS.
> Si vous disposez d'un Service Pack Community, vous devez installer vous même un certificat SSL émis par une autorité de certification (ex: Let's Encrypt).

> **Important**
>
> Le plugin ne supporte pas les équipements avec des doubles fonctions (2 sorties comme certains modules zwave Fibaro). Il faut absolument passer par 2 virtuels pour le décomposer.

# Mode cloud

> **IMPORTANT**
>
> Il est important de faire les étapes suivantes dans l'ordre indiqué !!!

> **IMPORTANT**
>
> Si vous avez un message d'erreur vous indiquant que votre mot de passe ou non d'utilisateur n'est pas bon il faut :
> - vérifier que Google Home est bien en actif sur le market
> - si c'est bien le cas, etês-vous sûr de vos identifiants (attention il faut respecter majuscule/minuscule) ?
> - si c'est le cas changer votre mot de passe sur le market et sur la configuration du service d'assistant vocal (page profil du market onglet mes services) faire sauvegarder

Après l'installation du plugin, il vous suffit d'aller sur la configuration du plugin, de sélectionner le mode Cloud puis de cliquer sur "Envoyer" (cela va envoyer les informations de connexion à l'api du plugin sur le market)

Ensuite dans Jeedom dans Communication/Google Smarthome il faut cliquer sur sauvegarder pour envoyer votre configuration initiale, il faut au moins un équipement en OK (sinon lors de la connexion Google Home <-> Jeedom vous aurez une erreur)

Ensuite sur l'application Google Home il faut aller dans le premier onglet cliquer sur Ajouter (le +) :

![gsh](../images/gsh29.png)

Puis configurer un appareil :

![gsh](../images/gsh30.png)

Sur "Fonctionne avec Google" :

![gsh](../images/gsh31.png)

Ensuite dans la liste avec le bouton rechercher (loupe en haut à droite), chercher "Jeedom Smarthome" et cliquez dessus :

![gsh](../images/gsh32.png)

La renseignez vos identifiants market (et bien ceux market pas ceux de votre Jeedom).

![gsh](../images/gsh6.png)

Dans plugins -> communication -> Google Smarthome vous pouvez configurer vos différents équipements (voir chapite Configuration du plugin)

>**NOTE**
>
>Pour passer du mode standalone au mode cloud il faut :
>- dans le plugin passer en cloud puis sauvegarder
>- attendre 24h
>- dans l'application Google Home il faut dissocier testsmarthome (votre application standalone)
>- dans Communication/Google Smarthome il faut cliquer sur sauvegarder pour envoyer votre configuration initiale
>- Lier Jeedom Smarthome dans Google Home


> **IMPORTANT**
>
>Toute modification de configuration des équipements transmis à Google Home (ajout d'un équipement, suppression d'un équipement, changement d'un générique type d'une commande) nécessite forcement d'aller dans Plugin -> Communication -> Googme Smarthome puis de faire sauvegarder

# Mode standalone

> **IMPORTANT**
>
> Google modifiant (très) souvent l'interface nous n'avons pas les ressources humaines pour refaire toutes les captures écrans à chaque fois. Il peut donc y avoir de grosses differences entre les captures et la réalité

> **IMPORTANT**
>
> Si vous avez utilisé le mode cloud il ne faut surtout pas faire cette partie !!! Passez directement au chapitre "Configuration du plugin"

> **IMPORTANT**
>
> Le mode standalone est une "arnaque" car cela vous fait créer une application chez Google en mode développement qui ne permet la synchronisation que pendant 3 jours après activation du mode test. Il faut donc lors de l'ajout ou modification des équipements réactiver le mode test tous les 3 jours pour pouvoir faire une synchronisation. Attention on parle bien d'une modification de la configuration si vous n'ajoutez pas ou ne modifiez pas d'équipements il n'y a rien à faire l'application marchera sans limite de temps

> **IMPORTANT**
>
> Etant donné que l'application est une application de dev côté Google ils peuvent à tout moment la couper, la supprimer ou changer les régles. Dans ce cas Jeedom ne pourra aucunement être tenu responsable en cas de mauvais fonctionnement.

> **IMPORTANT**
>
> Pour que la ou les applications marchent il faut absolument que votre Jeedom soit en https avec un certificat valide (si vous avez un service pack l'accès DNS est là pour ça)

Pour rappel le plugin permet de :

- utiliser l'implémentation native de Google pour la gestion des objets connectés
- utiliser les intéractions de Jeedom en utilisant "Parler à ..."

Il y a donc 2 applications côté Google : une pour la partie Google Smarthome et une pour la partie intéraction (vous pouvez bien sûr n'en faire qu'une des 2)

## Application Google Smarthome

Allez [ici](https://console.actions.google.com) puis cliquez sur "Add/import project"

![gsh](../images/gsh7.png)

Donnez un nom au projet changez langue et région par défaut et validez :

![gsh](../images/gsh8.png)

Sélectionnez "Home control" :

![gsh](../images/gsh9.png)

Cliquez sur "Smarthome" :

![gsh](../images/gsh10.png)

Cliquez sur "Name your Smart Home action" :

![gsh](../images/gsh11.png)

Mettez "test smarthome" et validez (bouton Save en haut à droite) :

![gsh](../images/gsh12.png)

Ensuite à gauche cliquez sur "Actions" :

![gsh](../images/gsh13.png)

Puis "Add your first action" :

![gsh](../images/gsh14.png)

Il va falloir donner ici l'url d'arrivée de Jeedom. Pour l'avoir c'est très simple, il faut dans Jeedom aller sur la page de gestion du plugin, bien choisir le mode "Standalone" (et enregistrer au passage), l'url est celle qui s'appelle "Fulfillment URL"

![gsh](../images/gsh15.png)

Ensuite allez dans "Account linking" (menu de gauche) :

![gsh](../images/gsh13.png)

Sélectionnez "No, I only want to allow account creation on my website" et faite "Next" :

![gsh](../images/gsh16.png)


Sélectionnez "OAuth" puis "Autorization code" et faite "Next" :

![gsh](../images/gsh17.png)

Remplissez ensuite les 4 champs en fonction de la page de configuration du plugin, puis faite "Next" :

![gsh](../images/gsh18.png)

> **NOTE**
>
> Les champs sont :
> - le client ID en premier
> - puis le client secret
> - puis "Authorization URL" (attention à bien prendre celle de la partie "Smarthome")
> - puis "Token URL" (attention à bien prendre celle de la partie "Smarthome")

Il n'y a rien à faire là simplement "Next" :

![gsh](../images/gsh19.png)

Ecrivez "Toto" puis faites "Save" :

![gsh](../images/gsh20.png)

Il faut maintenant configurer la clé API homegraph, pour cela allez [ici](https://console.developers.google.com/apis/dashboard), puis à droite cliquez sur "Bibliothèque" :

![gsh](../images/gsh21.png)

> **NOTE**
>
> Si vous n'avez pas de projet il vous faut en créer un

Et cherchez "Homegraph" :

![gsh](../images/gsh22.png)

Cliquez sur homegraphapi puis activez l'api et cliquez sur gérer :

![gsh](../images/gsh23.png)

Cliquez sur identifiant à gauche :

![gsh](../images/gsh24.png)

Puis sur "Identifiants des API et services" :

![gsh](../images/gsh25.png)

Cliquez sur "Créer des identifiants" puis sur "Clé API" :

![gsh](../images/gsh26.png)

Copiez la clef API générée et collez la sur la page de gestion du plugin Google Smarthome dans "Homegraph API Google"

Dernière étape à faire donner l'id projet à Jeedom pour la gestion de la connexion, allez [ici](https://console.actions.google.com) puis cliquez sur votre projet. Récuperez l'url de la forme "https://console.actions.google.com/u/0/project/monprojet-31023/overview", l'id du projet est entre project/ et /overview, dans l'exemple ici c'est "monprojet-31023", copiez cet id sur la page de gestion du plugin Google Smarthome dans "ID du projet Smarthome".

Voilà vous pouvez maintenant cliquer à gauche sur "Action" :

![gsh](../images/gsh27.png)

Puis sur test :

![gsh](../images/gsh28.png)

Il vous faut ensuite sur un smartphone **android** (obligatoirement ne marche pas sur un iphone) vous connecter à votre Jeedom par **l'url externe** de celui-ci. Il faut ensuite aller dans l'application home puis "configurer ou ajouter" puis "Configurer un appareil" et enfin cliquer sur "Fonctionne avec Google" et là ajouter votre service créé plus haut (il commence par [test])

## Configuration jwt

JWT permet de remonter automatiquement tout changement d'état d'un équipement transmis à Google, cela permet donc d'avoir plus rapidement l'état lors d'une demande à Google Home ou sur l'application Google Home. Il n'est pas obligatoire de le configurer par contre si vous cochez la case "Remonter l'état" il faut absolument l'avoir fait pour que cela fonctionne.

Pour faire la configuration il faut

* aller [ici](https://console.developers.google.com/iam-admin/serviceaccounts), si Google vous le demande il faut choisir le projet (celui créé juste au-dessus).
* Cliquer sur créer un compte de service
  * Lui donner un nom (vous pouvez mettre ce que vous voulez, évitez )
  * Récuperer le mail généré juste en-dessous pour le copier dans la configuration du plugin sur Jeedom (champs : Mail client (JWT))
  * Cliquez sur créer
  * Cliquez sur continuer sans rien modifier
  * Cliquez sur  "Créer une clé"
    * Laissez JSON et cliquez sur OK
  * Cliquez sur OK
  * Ouvrez le fichier téléchargé et copiez la partie 'private_key' (commence par "-----BEGIN PRIVATE KEY-----", inclus et fini par "-----END PRIVATE KEY-----\n", inclus sans les ") dans la configuration du plugin sur Jeedom (champs : Clef privé (JWT))

# Configuration du plugin

Sur votre Jeedom, allez sur Plugins -> Communication -> Google Smarthome et dans la partie équipement sélectionnez les équipements à transmettre à Google ainsi que le type de l'équipement.

![gsh](../images/gsh2.png)

> **IMPORTANT**
>
> Le plugin se base sur les types génériques de Jeedom des commandes pour piloter votre domotique. Il est donc très important de configurer ceux-ci correctement.Vous pouvez voir [ici](https://doc.jeedom.com/fr_FR/core/4.4/types) la documentation sur les génériques type

> **NOTE**
>
> Pour le type "caméra" vous devez absolument configurer l'URL du flux (nous avons testé seulement le RTSP) pour que cela marche.
> A noter que le support des caméras est pour le moment en béta et consomme énormement de ressources

## Equipement

Sur les équipements vous pouvez configurer :

* Options :
  * Transmettre : envoi l'équipement au Google Home pour qu'il puisse le piloter (attention il faut que la configuration des génériques type soit OK)
  * Remonter l'état : envoi toute information de changement d'état à Google directement (cela évite que lors d'une demande d'information Google Home interroge Jeedom). Voir partie "Configuration JWT"
  * Challenge [Aucun,Code] : si en mode code alors Google vous demandera un Code (celui indiqué juste en dessous) pour chaque action sur l'équipement
* Status : indique si la transmission est OK, si c'est NOK alors cela vient des Générique type. Si vous clicquez sur NOK vous pouvez avoir les informations sur les types génériques nécessaires
* Type : indique le type d'équipements
* Pseudo : pseudo de l'équipement, si vide alors c'est le nom de l'équipement qui est utilisé
* Action :
  * Permet la configuration avancée de l'équipement pour Google Home (dépend du type utilisé)
  * Configuration avancée de l'équipements, permet d'accéder à la configuration avancée des commandes et donc de modifier les types génériques
  * Permet d'aller directement sur la page de configuration de l'équipement

### Type

Les types d'équipements sont importants cela permet à Google de réagir en fonction des phrases que vous dites.

> **IMPORTANT**
>
> Jeedom supporte des types "béta" non encore documentés chez Google donc qui peuvent marcher ou non en fonction des mises à jour chez google

> **IMPORTANT**
>
> Le type thermostat n'est pleinement supporté qu'à travers un équipement venant du plugin thermostat, dans le cas contraire la gestion des modes risque de ne pas marcher
> 
> Pour la gestion du mode sur un type thermostat, il faut :
> - Une info de type "autre" qui prend comme valeur "heat", "cool", "off", "eco" et lui affecter le type generic : Thermostat Mode
> - Des actions qui réalisent les changements de mode et leur affecter le type generic : Thermostat Mode
> - Il faut également rattacher dans les paramètres de l'équipement dans le plugin gsh de l'action au mode correspondant (partie "Configuration TemperatureSetting")

## Scénario

Vous pouvez aussi créer des scènes dans l'onglet scènario, avec des actions d'entrée et de sortie.

![gsh](../images/gsh3.png)

> **NOTE**
>
> Pour lancer un scénario il suffit de dire "Active #nom du scénario#" ou "Désactive #nom du scénario#

> **NOTE**
>
> Lors de la sauvegarde Jeedom va automatiquement demander une synchronisation avec Google. Attention en mode standalone si vous avez une erreur (type "Requested entity was not found") essayez de réactiver le test de l'application ([ici](https://console.actions.google.com)) puis de recliquer sur le bouton de connexion sur la page de configuration du plugin. Vérifiez aussi la configuration (surtout la partie oauth) de votre application google (parfois les champs sont effacés par Google)

Il ne vous reste plus qu'à faire l'affectation des équipements aux pièces dans l'application Google Home

# FAQ

>**Je n'arrive pas à faire l'association en mode cloud ?**
>
> Il faut vérifier que :
> - vous êtes bien en https (si vous avez un service pack, utilisez les DNS jeedom ceux-ci sont sécurisés par défaut)
> - vous avez bien activé Google assistant sur le market (page profils, onglet mes services puis configuration dans la partie Assistants vocaux)
> - vous avez bien souscrit à l'abonnement pour les services vocaux et que celui-ci est encore valide (nécessaire à partir du 01/06/2019). Cela se voit sur votre page profils du market, onglet mes services
> - il faut dans plugins -> communication -> Google Smarthome sélectionner "transmettre" des équipements et bien mis le type et enfin sauvegarder
> - bien utiliser vos identifiants market
> - si vous êtes en certificat let’s encrypt ne pas oublier de mettre le root et l’intermédiaire dans la chaine de certification
> - pas de module OK (il en faut obligatoirement un sinon google refuse de faire le lien)
> - si vous êtes sur votre propre domaine des soucis de résolution du nom de domaine en ip, aucune idée du pourquoi. Coté Jeedom les DNS sont ceux fournis par défaut par OVH (on a de toute façon pas la main dessus). J’ai même eu le cas d’utilisateur ayant le DNS chez OVH et pourtant impossible de le résoudre sur nos machines…
> - Problème avec le téléphone, sur certaine marque le navigateur est soit pas à jour soit pas chrome par défaut et ça pose soucis pour faire le lien
> - Si vous avez le soucis encore malgrè ça essayer de n’envoyer que un module type lumière


>**Quelles sont les commandes possibles ?**
>
>Les commandes vocales (ainsi que les retours) sont gérés uniquement pas Google, voilà la [documentation](https://support.google.com/googlehome/answer/7073578?hl=fr)

>**L'assistant me demande d'affecter les pièces mais je ne sais pas à quoi correspond l'équipement.**
>
>Oui l'assisant n'affiche pas le nom réel de l'équipement, juste le pseudo. Il faut donc quitter l'assistant et revenir sur la page d'acceuil du contrôle de la maison. Là en cliquant sur l'équipement vous allez avoir son nom vous pourrez ensuite l'affecter à une pièce

>**Pourquoi faut-il affecter des pièces à chaque équipement ?**
>
>Car Google ne permet pas de le faire par l'API vous devez donc absolument le faire manuellement.

>**J'ai le message d'erreur "OpenSSL unable to sign data"**
>
>Vous avez du cocher la case "Pousser l'état" (dans la configuration avancée, bouton vert avec la roue cranté) sans faire la configuration JWT

>**J'ai le message d'erreur "Cant find ressource 404" lors de la sauvegarde**
>
>Alors pas de souci tout est bien sauvé, c'est juste la synchronisation automatique qui n'est pas faite. Pour la faire dites "Synchroniser mes appareils" à votre assistant. Pour tenter de corriger ce souci :
> allez sur la page suivante [ici](https://console.cloud.google.com/cloud-resource-manager). Sur cette page vous verrez la liste de tous les projets même ceux invisibles sur la page google actions. Supprimer tous les projets inutilisés.
> Puis refaites le tuto à partir de l'étape configurer la clé api Homegraph (activation, génération de clé, puis dissocier jeedom de votre compte google et refaites le lien)


>**Vous avez un link error ou Impossible de mettre à jour le paramètre, vérifier votre connexion en mode cloud**
>
>Il faut dans jeedom, sur le plugin ajouter des équipements, sauvegarder et refaire l'association de Jeedom Smarthome dans l'application Google Home

>**J'ai l'erreur "Apparemment Jeedom Smart Home est indisponible pour le moment." ou "Pardon je ne peux pas établir la connexion avec Jeedom Smart Home."**
>
>Essayez de dé-associé/ré-associé l'application Google smarthome. Attention à bien prendre l'application officielle et non une application [TEST] si vous avez utilisez le mode standalone avant. Si le problème persiste regarder (en particulier dans une scène) que le temps d'éxecution reste inférieur à 2s (maximum autorisé par Google)

>**Lors de l'ajout des équipements j'ai des NOK**
>
>Cliquez simplement sur le NOK une fenêtre vous dira les génériques type à avoir sur les commandes de l'équipement pour que cela marche. Vous pouvez voir [ici](https://doc.jeedom.com/fr_FR/concept/generic_type) la documentation sur les générique type

>**Le changement de vitesse sur un ventilateur ne marche pas**
>
>Après analyse Google n'envoie pas d'ordre lors d'une action sur la vitesse. Il faut donc attendre que Google corrige
