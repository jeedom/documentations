# Plugin JeeDashboardPublish

## Introduction

Le Plugin JeeDashboardPublish permet de publier des valeurs depuis Jeedom en utilisant le plugin jMQTT.

## Configuration du plugin

Il est nécessaire de renseigner les paramètres du Broker MQTT.

![Configuration du plugin](../images/configuration_plugin.png)

## Configuration des équipements

Il est possible de créer autant d'équipements qu'on veut : 

![Liste des équipements](../images/liste_equipement.png)

Il est recommandé de renseigner un préfixe afin d'avoir des noms uniques avec deux méthnodes :

![Configuration des équipements - 1](../images/configuration_equipement_1.png)

1. Un préfixe en dure.

2. En utilisant une variable de Jeedom. Il est nécessaire de cocher la case "Est une variable de Jeedom" et renseigner le nom de la variable : variable(xxx)

## Utilisation

![Configuration des équipements - 2](../images/configuration_equipement_2.png)

Il est possible de renseigner le noms des commandes à publier en sélectionnant une liste de commandes avec le bouton "Choisir les commandes" ou bien en ajoutant manuellement avec le bouton "Ajouter une télémetrie".

Il est possible d'exporter les historiques d'une ou des commandes en spécifiant une date de début.

