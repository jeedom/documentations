# Plugin thermostat management

## Description

Ce plugin permet de gerer le thermostat dans une piece en fonction de la présence ou non d'une personne, du mode (jour/nuit par exemple) et de(s) fenetre(s)/porte(s) ouverte(nt)

## Configuration

Le plugin n'a aucun configuration spécifique

## Equipement

### Général

Vous avez ici (hormis nom de l'équipement, actif/inactif, visible/invisible...) : 

- "Ne rien faire automatiquement si" : si jamais la maison est en mode été* ou si jamais la maison est en mode absent (donc personne de présent) ou encore si on est hors des heures de travail alors aucun contrôle de la part du plugin (vu que le bureau sert aussi de chambre c'est plus confortable la nuit)
- "Reprendre la main après (min), ne rien mettre pour jamais" : indique au plugin de reprendre le contrôle du thermostat de la pièce au bout de 30min si quelqu'un y a touché

### Thermostat

Ici vous indiquez la commande d'action et d'état du thermostat

### Mouvement

Là on va définir la notion de présence dans une pièce. Cela se fait à l'aide d'un simple capteur de présence mais on voulait éviter les montées de consignes si on ne fait que passer dans la pièce. Donc on a des paramètres pour spécifier ce qu'est une présence, la température de consigne à mettre et le délai avant de revenir à la valeur précédente. Pour avoir par exemple si il y a eu une présence plus de 70% du temps les 5 dernieres minutes alors mettre la consigne à 20.5 et ensuite si pendant 10min il n'y a plus personne alors remettre la consigne à la valeur d'origine

### Ouverture

Vous indiquez ici vos ouverture ainsi que les differents parametre
- temps avant changement de consigne lors d'une ouverture
- consigne à mettre
- delai avant retour à la consigne précedent suite à la fermeture

### Commande

Ici vous allez juste pouvoir creer des commandes de mode avant la consigne en fonction du mode