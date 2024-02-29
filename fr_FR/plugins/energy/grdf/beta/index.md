# Plugin GRDF

Plugin permettant la récupération des données des compteurs de gaz communicants *(Gazpar par exemple)* par l'intermédiaire [d'un compte client **GRDF**](https://login.monespace.grdf.fr/mire/connexion){:target="\_blank"}.

Ce plugin est en mesure de fournir l'accès aux relevés de consommation de gaz ainsi que ceux d'injection le cas échéant *(compteurs professionnels uniquement)*. Il utilise **l'API officielle GRDF ADICT**.

Selon le type de compteur, 2 types de données peuvent être récupérées :
 - **Les données publiées** sont fournies par tous les compteurs. Il s'agit des données transmises au fournisseur pour servir à la facturation. Ces données peuvent être consultées jusqu'à 5 ans en arrière au maximum.
 - **Les données informatives** font référence aux données quotidiennes transmises par les compteurs publiant les données mensuelles pour facturation *(1M/MM)*. Ces données peuvent être consultées jusqu'à 3 ans en arrière au maximum.

Toujours selon le type de compteur, les données disponibles ne sont pas les mêmes tout comme leur fréquence de mise à disposition.

| **Type de compteur** | Données publiées | Données informatives | Fréquence de relève | Fréquence d'appel |
|:---:|---|---|---|---|
| **6M** *(particuliers)* | Données semestrielles | | Tous les 6 mois de J+2 à J+3 après la relève | 1 à 2 fois par mois |
| **1M** *(particuliers)* | Données mensuelles mois M-1 | Données quotidiennes :<br>- estimées<br>- définitives mois M-1 | Tous les mois de J+2 à J+3 après la date de publication *(publiées & informatives définitives)*<br>Tous les jours de J+1 à J+3 *(informatives estimées)* | 1 à 2 fois par mois *(publiées)*<br>1 fois par jour *(informatives)* |
| **MM** *(professionnels)* | Données mensuelles mois M-1 | Données quotidiennes mois M-1 | Tous les mois entre J+2 après la date de publication et le 7ème JO du mois M *(publiées)*<br>Tous les mois entre le 10 et le 20 du mois M *(informatives)* | 1 à 14 fois par mois *(publiées)*<br>1 à 11 fois par mois *(informatives)* |
| **JJ** *(professionnels)* | Données quotidiennes :<br>- estimées<br>- définitives mois M-1 | | Tous les jours de J+1 à J+2 *(publiées estimées)*<br>Tous les mois entre le 1er et le 6ème JO du mois M *(publiées définitives)* | 1 fois par jour |

>**INFORMATION**
>
>Les compteurs **6M** sont pris en charge le plugin cependant ils ont normalement tous été remplacés par des compteurs **1M** à fin 2023.

# Configuration

Comme tout plugin Jeedom, le plugin **GRDF** doit être activé après l'installation.

## Configuration du plugin

>**INFORMATION**
>
>N'hésitez pas à **copier le numéro d'identification PCE** lorsqu'il apparaît durant cette opération car il sera utile lors de l'étape de configuration de l'équipement Jeedom.

Pour commencer il faut autoriser le partage des données GRDF avec Jeedom en cliquant sur l'image **Autoriser l'accès au compte GRDF** depuis la page de configuration du plugin :

![Lien espace client GRDF](../images/link_grdf.jpg)

Vous êtes alors redirigé vers cette page sur laquelle il faut renseigner **vos identifiants au market Jeedom** puis cliquer sur le bouton **Valider** :

![Authentification compte Market Jeedom](../images/Auth_Jeedom.jpg)

**Connectez-vous à votre espace client GRDF** puis sélectionnez un compteur **en attente de consentement** :

![Sélection compteur GRDF](../images/grdf_home.jpg)

Sélectionnez vos consentements puis cliquez sur le bouton **Valider** :

 - **Mes données de consommation gaz** : **Oui** *(obligatoire)*
   - **Date de début** : **1er janvier de l'année en cours** ou 1er janvier jusqu'à 4 années en arrière pour consulter les années précédentes dans Jeedom.
   - **Date de fin** : Au choix, la même date que celle de fin de consentement par exemple.
   - **Données publiées** : **Oui** *(obligatoire)*
   - **Données informatives** : **Oui** *(fortement conseillé)*
 - **Mes données contractuelles** : **Oui** *(facultatif)*
 - **Mes données techniques** : **Oui** *(obligatoire)*
 - **Date de début de consentement** : **Date du jour**
 - **Date de fin de consentement** : Au choix.

![Consentement GRDF](../images/grdf_choose.jpg)

Une fois vos consentements validés, vous avez la possibilité de **donner votre consentement pour un autre PCE** ou **retourner sur la page Jeedom** confirmant la fin de l'opération :

![Validation GRDF](../images/grdf_consent.jpg)

>**IMPORTANT**
>
>Si vous ne parvenez pas à accéder à l’une de ces pages, désactivez le bloqueur de publicité du navigateur.

## Configuration des équipements

Pour accéder aux différents équipements **GRDF**, il faut se rendre dans le menu **Plugins → Energie → GRDF**.

>**INFORMATION**
>
>Le bouton **Ajouter** permet d'ajouter un nouveau compteur.

Une fois les autorisations d'accès validées, il ne reste plus qu'à renseigner **le numéro d'identification du PCE** concerné *(les espaces sont automatiquement supprimés)* puis sauvegarder l'équipement.

Les compteurs professionnels *(MM ou JJ)* possèdent un champ de configuration complémentaire permettant de choisir le type de mesure à relever :
 - **Consommation**
 - **Injection** *(Producteurs de Biométhane)*
 - **Les 2**

# Commandes

Les commandes sont crées automatiquement en fonction de la fréquence de relève des données *(jour, mois, semestre)* et de leur type *(définitives ou estimées)*.

Le plugin se charge d'effectuer les calculs mensuels et annuels lorsque cela est nécessaire c'est pourquoi il est conseillé de renseigner la date de début d'accès aux données de consommation gaz au 1er janvier lors de l'étape de consentement.

Lors de la 1ère sauvegarde d'un équipement actif et correctement configuré, le plugin va automatiquement intégrer les historiques disponibles sur l'espace client GRDF depuis la date de début d'accès aux données de consommation gaz. Ce processus est susceptible de durer un long moment, vous pouvez en suivre l'avancée depuis le menu **Analyse → Logs** *(logs en `debug`)*.

>**INFORMATION**
>
>Les données sont transmises en kilowatt-heure (`kWh`) avec une date de relève à 6h du matin. Elles ne sont pas mises à disposition en temps réel mais sont enregistrées à leur date d'effet dans Jeedom.
