# Plugin OCPP

Le plugin **OCPP** permet d’utiliser Jeedom en tant que système central OCPP *(Open Charge Point Protocol)*. Il offre la possibilité de superviser une ou plusieurs bornes de recharge de véhicules électriques compatibles avec ce protocole.

# Configuration

## Configuration de la borne

Pour que le plugin soit en mesure de communiquer avec la borne, il est indispensable de la configurer correctement. Cette étape de configuration est propre à chaque modèle/fabricant, l'attendu étant :

- **Version du protocole** : activer la connexion OCPP en version supportée *(OCPP 1.6/2.0.1)*.
- **Adresse IP/URL/Endpoint** : renseigner l'adresse du système central OCPP *(ws://``IP_LOCALE_JEEDOM``:9000)*.
- **Identifiant de la borne** : chaque borne doit avoir un identifiant unique pour être reconnue par Jeedom *(ws://``IP_LOCALE_JEEDOM``:9000/``ID_BORNE``)*.

## Configuration du plugin

Comme tout plugin Jeedom, le plugin **OCPP** doit être activé après l'installation. Puis, suite à l'installation des dépendances, le démon peut être démarré.

Dans les minutes qui suivent le démarrage du démon, les bornes de recharge correctement configurées se connectent au système central Jeedom. Les équipements correspondants sont créés automatiquement.

>**INFORMATION**
>
>La communication s'établit par défaut sur le port `9000`. Il est possible de modifier ce port en cas de conflit, la configuration de la borne devant être adaptée en conséquence.

## Configuration des équipements

### Autorisations

Par défaut, toute borne nouvellement créée n'autorise aucune charge *(transaction)*.

Un menu déroulant permet d'autoriser toutes les transactions ou de sélectionner [un groupe d'autorisation](#Groupes%20d'autorisations).

>**IMPORTANT**
>
>En mode "Tout autoriser", ce sont les identifiants des utilisateurs Jeedom qui peuvent démarrer une charge.

### Paramètres de la borne

L'onglet **Paramètres** donne accès à l'ensemble des paramètres de configuration de la borne. Certains sont modifiables et d'autres non. Ils sont répartis en deux grandes familles : ceux propres au protocole OCPP et ceux spécifiques au fabricant.

>**INFORMATION**
>
>Pour afficher les champs non modifiables il faut cliquer sur l'icône en forme d'œil. Cliquer sur l'œil barré pour les cacher à nouveau.

Chaque borne peut donc être directement configurée depuis l'équipement Jeedom en cliquant sur le bouton **Enregistrer les paramètres sur la borne**. Une fenêtre listant l'ensemble des modifications apportées s'affiche alors, sélectionner les paramètres à appliquer puis cliquer sur **Enregistrer** pour les envoyer sur la borne.

>**IMPORTANT**
>
>Toute modification d'un paramètre de configuration de la borne est à appliquer en connaissance de cause. Une erreur étant susceptible d'entraîner des dysfonctionnements.

# Groupes d'autorisations

Cliquer sur le bouton **Autorisations** pour afficher la fenêtre de gestion des groupes d'autorisation. Cliquer sur **Ajouter un groupe** pour ajouter un nouveau groupe ou sélectionner un groupe existant pour le modifier.

## Ajouter des autorisations

Chaque groupe permet d'ajouter des autorisations manuellement ou de télécharger/envoyer le fichier d'autorisations au format CSV.

Une autorisation étant composée :
- **d'un identifiant** : unique pour chaque utilisateur *(badge RFID par exemple)*.
- **d'un statut** : Autorisé, Bloqué, Expiré ou Invalide.
- **d'une date d'expiration** : date de fin de l'autorisation *(facultatif sauf borne Hager par exemple)*
- **d'une autorisation pour les transactions concurrentes** : cocher la case pour autoriser plusieurs charges en parallèle pour cet identifiant.

Cliquer sur le bouton **Sauvegarder les autorisations** pour enregistrer les groupes d'autorisations.

# Transactions

Les données des transactions *(charges)* propres à chaque contexte *(toutes, par équipement, par autorisation)* sont accessibles par le bouton **Transactions** :
- **ID** : identifiant de la transaction.
- **Equipement** : nom de l'équipement Jeedom.
- **Utilisateur** : identifiant de l'utilisateur.
- **Début** : date de début.
- **Fin** : date de fin.
- **Durée** : durée totale de la charge.
- **Consommation (Wh)** : consommation totale en wattheures.
- **Connecteur** : numéro du connecteur/prise.

# Commandes

## Borne

- **Etat borne** *(info/binary)* : état d’activation de la borne.
- **Activer/Désactiver borne** *(action/other)* : disponibilité de la borne.
- **Statut borne** *(info/string)* : statut général de la borne.
- **Erreur borne** *(info/string)* : dernier message/code d’erreur.
- **Info borne** *(info/string)* : informations complémentaires.
- **Courant max borne** *(info/numeric)* : courant maximal *(SmartCharging)*.
- **Courant borne** *(action/slider)* : définir le courant maximal de la charge en cours *(SmartCharging)*.
- **Puissance max borne** *(info/numeric)* : puissance maximale *(SmartCharging)*.
- **Puissance borne** *(action/slider)* : définir la puissance maximale de la charge en cours *(SmartCharging)*.
- **Redémarrage logiciel/matériel borne** *(action/other)* : redémarrer la borne.

## Connecteur(s)

- **Etat connecteur** *(info/binary)* : état d’activation du connecteur.
- **Activer/Désactiver connecteur** *(action/other)* : disponibilité du connecteur.
- **Statut connecteur** *(info/string)* : statut du connecteur.
- **Erreur connecteur** *(info/string)* : dernier message/code d’erreur.
- **Info connecteur** *(info/string)* : informations complémentaires.
- **Utilisateur connecteur** *(info/string)* : identifiant de l'utilisateur en cours.
- **Démarrer charge connecteur** *(action/select)* : démarrer une transaction sur le connecteur.
- **Arrêter charge connecteur** *(action/other)* : arrêter la transaction en cours.

## Mesures

Les mesures sont créées automatiquement par le plugin selon la configuration **MeterValuesSampledData** définie sur la borne.
Chaque mesure reçue génère une commande **info/numeric**, historisée par défaut, avec l'unité adaptée *(Wh, W, A, V, Hz, °C, %, RPM)*.
Si la borne fournit des valeurs par phase, les commandes sont suffixées par **L1**, **L2** ou **L3**.

### Exemples de mesures

- **Current.Import – Courant consommé** *(A)* : intensité du courant utilisé *(par phase si disponible)*.
- **Current.Export – Courant injecté** *(A)* : intensité du courant renvoyé vers le réseau.
- **Current.Offered – Courant maximal** *(A)* : intensité maximale autorisée.
- **Energy.Active.Import.Register – Énergie consommée** *(Wh)* : énergie totale utilisée.
- **Energy.Active.Export.Register – Énergie injectée** *(Wh)* : énergie totale renvoyée vers le réseau.
- **Power.Active.Import – Puissance consommée** *(W)* : puissance instantanée utilisée.
- **Power.Active.Export – Puissance injectée** *(W)* : puissance instantanée renvoyée vers le réseau.
- **Power.Offered – Puissance maximale** *(W)* : puissance maximale autorisée.
- **Voltage – Tension** *(V)* : tension mesurée *(par phase si disponible)*.
- **Frequency – Fréquence** *(Hz)* : fréquence du réseau.
- **Power.Factor – Facteur de puissance** : rapport entre puissance active et apparente.
- **SoC – Niveau de charge** *(%)* : état de charge de la batterie du véhicule.
- **Temperature – Température** *(°C)* : température interne de la borne.
- **RPM – Vitesse du ventilateur** *(RPM)* : vitesse de rotation du ventilateur.
