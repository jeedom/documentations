# Plugin Enedis

Plugin permettant la récupération des données de consommation électrique des compteurs communicants *(Linky par exemple)* par l'interrogation du [compte-client **Enedis**](https://mon-compte.enedis.fr/auth/XUI/#login/&realm=/enedis&forward=true){:target="\_blank"}.

Il est possible d'accéder aux données de **consommation**, de **production** ou aux 2 types de mesure directement dans un équipement.

5 données sont remontées en consommation, et les 4 mêmes sans la puissance max en production :
- la **consommation horaire** par demi-heure *(en kW)*.
- la **consommation journalière** *(en kWh)*.
- la **consommation mensuelle** *(en kWh)*.
- la **consommation annuelle** *(en kWh)*.
- la **puissance max** *(en kVA)*.

Les données n'étant pas mises à disposition en temps réel par Enedis, le plugin récupère chaque jour celles de la veille. Tant qu'il ne les a pas toutes récupérées, il interroge à nouveau les serveurs Enedis toutes les 30 minutes jusqu'à 19h, puis reprend le lendemain matin.

À chaque récupération, les données jour, mois, année et puissance max sont interrogées depuis le 1er janvier de l'année en cours, et les données horaires sur les 7 derniers jours. Les historiques déjà enregistrés sont réalignés sur les données Enedis : une donnée fournie en retard ou corrigée par Enedis met à jour les valeurs concernées.

# Configuration

Comme tout plugin Jeedom, le plugin **Enedis** doit être activé après l'installation.

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
>Si vous ne parvenez pas à accéder à l’une de ces pages, désactivez le bloqueur de publicité du navigateur.

## Configuration des équipements

Pour accéder aux différents équipements **Enedis**, dirigez-vous vers le menu **Plugins → Energie → Enedis**. Le bouton **+ Ajouter** permet d'ajouter un nouveau compteur/PDL.

Une fois le partage des données autorisé depuis la page de configuration du plugin, il ne reste plus qu'à renseigner **le numéro d'identification du Point de Livraison** concerné *(PDL)* et le **type de mesure** à récupérer.

Lors de la 1ère sauvegarde d'un équipement actif et configuré, le plugin va automatiquement créer les commandes nécessaires et intégrer les historiques disponibles sur le site Enedis depuis le 1er janvier de l'année en cours. Ce processus est susceptible de durer plusieurs minutes, vous pouvez en suivre l'avancée depuis le menu **Analyse → Logs** *(logs en ``debug``)*.

Si vous n'avez pas activé **l'enregistrement et la collecte de la consommation horaire** sur votre compte Enedis, il faudra cocher la case **Données horaires : Désactiver** pour que les commandes correspondantes ne soient pas créées.

# Ajout de données

Il est possible d'intégrer à la demande les historiques des années précédentes depuis les serveurs Enedis. Pour ce faire, il suffit de cliquer sur le bouton bleu **Ajout historiques** depuis l’onglet **Commandes** d’un équipement, dans la colonne **Action** de la commande concernée :

![Ajout d'historiques](../images/enedis_addHistory.png)

Pour les commandes jour et puissance max, choisissez l'année de début parmi les 3 années précédentes : les données jour, mois, année et puissance max seront intégrées du 1er janvier de cette année jusqu'au 1er janvier de l'année en cours.

Pour les commandes horaires, choisissez la date de début, dans la limite des 3 dernières années : les données seront intégrées sur les 7 jours suivants, durée maximale fixée par Enedis.

Cliquez ensuite sur **OK** pour lancer l'intégration.

# Template de widget

Le plugin offre la possibilité d'afficher les données de consommation et/ou de production dans un template de widget imitant l'aspect d'un compteur *Linky*, aussi bien sur la version bureau que mobile. Le clic sur le bouton "**- \| +**" permet de basculer de la consommation à la production pour ceux qui ont accès aux 2 types de mesures. Un voyant permet également de savoir si les données sont à jour ou non *(vert = toutes les données sont à jour, orange = certaines données ne sont pas à jour, rouge = aucune donnée n'est à jour)*.

![Template de widget](../images/enedis_screenshot1.png)

Le template de widget est activé par défaut. Pour revenir au widget standard de Jeedom, il suffit de décocher la case **Template de widget** dans l'onglet **Informations** de la configuration avancée de l'équipement.

Les couleurs du template se règlent dans l'onglet **Affichage** de la configuration avancée de l'équipement, séparément pour les versions bureau et mobile :
- la couleur de fond *(`Template : background-color`)*, vert du compteur *(163, 204, 40)* lorsque la case **Défaut** est cochée.
- la couleur de la barre de titre *(`Template : titlebar-color`)*, transparente à la création de l'équipement.

![Personnaliser le widget](../images/enedis_customizeWidget.png)

# FAQ

>**J'ai des erreurs de récupération des données dans les logs alors qu'elles sont visibles sur le site Enedis**
>
>Il arrive quelquefois qu'il faille se rendre directement sur le site Enedis afin de valider les dernières CGU en date pour accéder à nouveau aux données. Il est également parfois nécessaire de remettre en place la liaison Jeedom/Enedis depuis la page de configuration du plugin.
