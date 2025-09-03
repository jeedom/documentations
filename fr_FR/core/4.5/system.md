# Systeme

Page réservée aux utilisateurs avancés. Elle permet de lancer des commandes SSH directement depuis Jeedom.

## Ajout de commandes

Il est possible d'ajouter des commandes personnalisées. Pour cela il faut créer un fichier `systemCustomCmd.json` dans `data` depuis l'éditeur Jeedom (Configuration -> OS/DB -> Editeur de fichier). Le fichier doit avoir la forme suivante : 
```
[
   {
      "cmd":"ma super commande",
      "name":"nom de ma commande"
   },
   {
      "cmd":"ma super commande 2",
      "name":"nom de ma commande 2"
   }
]
```
