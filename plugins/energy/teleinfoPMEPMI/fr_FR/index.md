# Plugin Téléinfo PME-PMI

Le plugin **Téléinfo PME-PMI** permet la relève et l'interprétation de la téléinformation des compteurs industriels communicants PME-PMI connectés en série (USB, GPIO).

# Configuration

Comme tout plugin Jeedom, le plugin **Téléinfo PME-PMI** doit être activé après l'installation.

## Configuration du plugin

Une fois les dépendances correctements installées, il suffit de sélectionner le port série sur lequel le compteur est branché puis sauvegarder la configuration. Le démon peut alors être démarré.

## Configuration des équipements

L'équipement relatif au compteur est automatiquement créé dans Jeedom après avoir démarré le démon et reçu une première trame complète. Il n'y a aucune configuration particulière à renseigner au niveau des équipements.

# Commandes

Les commandes sont également créées automatiquement, au fur et à mesure, en fonction des informations reçues notamment la période tarifaire.

>Exemple :
>![Exemple de tuile](../images/tile.png)
