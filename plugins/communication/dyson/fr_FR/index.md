# Plugin Dyson

Plugin permettant de piloter les équipements Dyson, pour le moment seul le purificateur Hot + Cool Cryptomic a été testé (mais les autres purificateur devrait etre rapide à ajouter)

# Configuration

Après l'installation des dépendances, il vous suffit d'entrée vos identifiants Dyson, de (re)lancer le demon et de faire une sychronisation depuis la page du plugin vos équipements devrait apparaitre.

>**NOTE**
>
>Une fois le demon lancé le plugin fonctionne en local (il se connecte directement à l'ip de l'équipement)

# FAQ

>**Mon équipement se crée mais le modele et les commandes ne sont pas bonne**
>
>Il faut envoyer une demande de support (et bien de support) à Jeedom SAS avec le modele de l'équipement ainsi que le type (ca se trouve dans configuration avancé -> information -> configuration -> device). Il est aussi possible que le support vous demande les logs en debug du plugin (en particulier après l'éxecution de la commande rafraichir)
