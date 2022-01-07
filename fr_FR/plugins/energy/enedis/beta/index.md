# Plugin Enedis

Plugin permettant la récupération des données de consommation électrique des compteurs communicants *(linky par exemple)* par l'interrogation du [compte-client **Enedis**](https://mon-compte.enedis.fr/auth/XUI/#login/&realm=/enedis&forward=true){:target="\_blank"}.

>**IMPORTANT**
>
>Le plugin a été totalement réécrit en février 2021 pour utiliser **l'api officielle Enedis Data-Connect**. Si vous utilisiez le plugin auparavant, nous vous invitons à créer un nouvel équipement ou à supprimer toutes les commandes d'un équipement antérieur.

Il est possible d'accéder aux données de **consommation**, de **production** ou aux 2 types de mesure directement dans un équipement.

5 données sont remontées pour chaque type de mesure :
- la **consommation horaire** par demi-heure *(en kW)*.
- la **consommation journalière** *(en kWh)*.
- la **consommation mensuelle** *(en kWh)*.
- la **consommation annuelle** *(en kWh)*.
- la **puissance max** *(en kVA)*.

>**INFORMATION**  
>    
>Les données n'étant pas mises à disposition en temps réel, le plugin récupère chaque jour les données de consommation électrique de la veille.

Tant que le plugin n'a pas récupéré l'intégralité des données de la veille, il continue d'interroger les serveurs Enedis toutes les 30 minutes entre 6h et 20h, autrement les appels sont suspendus jusqu'au lendemain.

# Configuration

Comme tout plugin Jeedom, le plugin **Enedis** doit être activé après l'installation.

## Gestion des dépendances

Le plugin nécessite la présence du paquet Linux `php-mbstring` normalement présent par défaut, le statut des dépendances doit donc être **OK** dès l'installation du plugin. Dans le cas contraire, il faudra cliquer sur le bouton **Relancer** pour installer le paquet manquant.

## Configuration du plugin

Si ce n'est pas déjà fait, commencez par autoriser le partage des données Enedis avec Jeedom en cliquant sur le bouton **Autoriser l'accès aux serveurs Enedis : j'accède à mon espace client Enedis** depuis la page de configuration du plugin :      

![Lien espace-client Enedis](../images/link_enedis.png)

Vous êtes alors redirigé vers cette page sur laquelle il faut renseigner **vos identifiants au market Jeedom** puis cliquer sur le bouton **Valider** :      

![Authentification compte Market Jeedom](../images/Auth_Jeedom.png)

Redirection vers la page de consentement Enedis sur laquelle il faut **cocher la case** et cliquer sur **Valider** :     

![Autorisation Enedis](../images/Auth_Enedis.png)

Une fois le partage des données validé, cette page s'affiche :     

![Succès](../images/Auth_Enedis_success.png)

>**IMPORTANT**
>    
>Si vous ne parvenez pas à accéder à l’une de ces pages, désactiver le bloqueur de publicité du navigateur.

## Configuration des équipements

Pour accéder aux différents équipements **Enedis**, dirigez-vous vers le menu **Plugins → Energie → Enedis**.

>**INFORMATION**
>    
>Le bouton **+ Ajouter** permet d'ajouter un nouveau compteur/PDL.

Une fois le partage des données autorisé depuis la page de configuration du plugin, il ne reste plus qu'à renseigner **le numéro d'identification du Point de Livraison** concerné *(PDL)* et le **type de mesure** à récupérer.

Lors de la 1ère sauvegarde d'un équipement actif et configuré, le plugin va automatiquement créer les commandes nécessaires et intégrer les historiques disponibles sur le site Enedis depuis le 1er janvier de l'année en cours. Ce processus est susceptible de durer plusieurs minutes, vous pouvez en suivre l'avancée depuis le menu **Analyse → Logs** *(logs en ``debug``)*.

>**INFORMATION**
>
>Les données de consommation horaire sont quand à elles récupérées sur les 7 derniers jours au maximum.

## Ajout de données

Il est possible d'intégrer des historiques à la demande, jusqu'à 3 années en arrière, directement depuis le site Enedis. Pour se faire, il suffit de cliquer sur le bouton bleu **Ajout historiques** depuis l’onglet **Commandes** d’un équipement, dans la colonne **Action** de la commande concernée :

![Ajout d'historiques](../images/enedis_addHistory.png)

Choisissez ensuite la date de début puis cliquez sur **OK** pour initier le processus.

Les données jour, mois, année et puissance max seront intégrées de la date choisie jusqu'au 1er janvier de l'année en cours. Les données horaires, quand à elles, seront intégrées jusqu’à 7 jours après la date choisie.

>**INFORMATION**
>
>Ces contraintes de temps sont fixées par Enedis.

# Template de widget

>**INFORMATION**
>     
>Le template de widget sera affiché aussi bien sur les versions desktop que mobile.

Le plugin offre la possibilité d'afficher les données de consommation et/ou de production dans un template de widget imitant l'aspect d'un compteur *Linky*. Le clic sur le bouton "**- \| +**" permet de basculer de la consommation à la production pour ceux qui ont accès aux 2 types de mesures.

![Template de widget](../images/enedis_screenshot1.png)

Pour activer cette option, il suffit de cocher la case **Template de widget** sur la page générale de l'équipement concerné. Une fois la case cochée, une option permet de sélectionner la couleur de fond du widget *(163, 204, 40 par défaut)*.

>**ASTUCE**
>     
>En version desktop, les informations affichées sur le widget s'adaptent en taille lors du redimensionnement de la tuile.

# FAQ

>**J'ai des erreurs `Error on enedis json return` dans les logs pourtant les données sont visibles sur le site Enedis**
>
>Il arrive quelquefois qu'il faille se rendre  directement sur le site Enedis afin de valider les dernières CGU en date pour accéder à nouveau aux données. Il est également parfois nécessaire de remettre en place la liaison Jeedom/Enedis depuis la page de configuration du plugin.

>**Je n'ai pas de données Jour/Mois/Année pour le 31 décembre 2021**
>
>Pour récupérer ces données il suffit de cliquer sur le bouton **Ajout historiques** de la commande **Consommation Jour** et de sélectionner la date du 1er janvier 2021 comme date de départ.  
