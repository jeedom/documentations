# Plugin Enedis Linky

# Description

Plugin permettant la récupération des données de consommation électrique des compteurs communicants *(linky par exemple)* par l'interrogation du [compte-client **Enedis**](https://mon-compte.enedis.fr/auth/XUI/#login/&realm=/enedis&forward=true){:target="\_blank"}.

>**IMPORTANT**
>
>Le plugin a été totalement réécrit en février 2021 pour utiliser **l'api officielle Enedis Data-Connect**. Si vous utilisiez le plugin auparavant, nous vous invitons à créer un nouvel équipement ou à supprimer toutes les commandes d'un équipement antérieur.

Il est possible d'accéder aux données de **consommation**, de **production** ou aux 2 types de mesure directement dans un équipement.

5 données sont remontées pour chaque type de mesure :
- la **consommation horaire** par demi-heure *(en kW)*.
>*Autrement appelée "courbe de consommation" ou "puissance soutirée", cette donnée restitue la puissance appelée par tous vos appareils électriques en moyenne sur une demi-heure.*

- la **consommation journalière** *(en kWh)*.
- la **consommation mensuelle** *(en kWh)*.
- la **consommation annuelle** *(en kWh)*.
- la **puissance max** *(en kVA)*.

>**INFORMATION**  
>    
>Les données n'étant pas mises à disposition en temps réel, le plugin récupère chaque jour les données de consommation électrique de la veille.

# Configuration

## Configuration du plugin

Le plugin **Enedis Linky** ne nécessite pas de configuration spécifique et doit seulement être activé après l'installation.

Tant que le plugin n'a pas récupéré l'intégralité des données de la veille, il continue d'interroger les serveurs toutes les heures entre 5h et 20h, autrement les appels sont suspendus jusqu'au lendemain.

Afin de ne pas surcharger les serveurs Enedis, les appels se font à une minute aléatoire qui peut être consultée ou modifiée sur la page de configuration du plugin.

## Configuration des équipements

Pour accéder aux différents équipements **Enedis Linky**, dirigez-vous vers le menu **Plugins → Energie → Enedis Linky**.

>**INFORMATION**
>    
>Le bouton **+ Ajouter** permet d'ajouter un nouveau compteur/PDL.

Si ce n'est pas déjà fait, commencez par autoriser le partage des données Enedis avec Jeedom en cliquant sur le bouton **Lier Enedis avec Jeedom : j'accède à mon espace client Enedis** :      

![Lien espace-client Enedis](./images/link_enedis.png)

Vous êtes alors redirigé vers cette page sur laquelle il faut renseigner **vos identifiants au market Jeedom** puis cliquer sur le bouton **Valider** :      

![Authentification compte Market Jeedom](./images/Auth_Jeedom.png)

Redirection vers la page de consentement Enedis sur laquelle il faut **cocher la case** et cliquer sur **Valider** :     

![Autorisation Enedis](./images/Auth_Enedis.png)

Une fois le partage des données validé, cette page s'affiche :     

![Succès](./images/Auth_Enedis_success.png)

>**IMPORTANT**
>    
>Si vous ne parvenez pas à accéder à l’une de ces pages, désactiver le bloqueur de publicité du navigateur.

Une fois le partage des données autorisé, il ne reste plus qu'à renseigner le numéro d'identification du Point de Livraison concerné *(PDL)* et le type de mesure à récupérer.

Lors de la 1ère sauvegarde de l'équipement, le plugin va automatiquement créer les commandes nécessaires et intégrer les historiques disponibles sur le site internet Enedis jusqu'à 3 années en arrière.

>**ASTUCE**
>
>Si pour une raison ou une autre le plugin ne parvenait pas à récupérer les historiques lors de la création des commandes, il suffira de supprimer les commandes puis de sauvegarder l'équipement pour à nouveau générer les commandes et leur historique.

>**INFORMATION**
>
>Les données de consommation horaire sont quand à elles récupérées sur les 7 derniers jours au maximum.

# Template de widget

Le plugin offre la possibilité d'afficher les données de consommation et/ou de production dans un template de widget imitant l'aspect d'un compteur *Linky*. Le clic sur le bouton "**- | +**" permet de basculer de la consommation à la production pour ceux qui ont accès aux 2 types de mesures.

![Template de widget](./images/enedis_screenshot1.png)

Pour activer cette option, il suffit de cocher la case **Template de widget** sur la page générale de l'équipement concerné. Une fois la case cochée, une option permet de sélectionner la couleur de fond du widget.

>**INFORMATION**
>     
>Le template de widget sera affiché aussi bien sur les versions desktop que mobile.

>**ASTUCE**
>     
>En version desktop, les informations affichées sur le widget s'adaptent en taille lors du redimensionnement de la tuile.

# Changelog

[Voir le changelog](https:\/\/doc.jeedom.com\/#language#\/plugins\/energy\/enedis\/changelog)
