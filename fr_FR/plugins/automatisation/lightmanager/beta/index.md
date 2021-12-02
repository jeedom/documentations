# Light Manager  (Gestion Lumière)

## Description

Ce plugin permet d'allumer ou d'eteindre la lumiere en fonction de la présence d'une personne et de la luminisité extérieure. Il est capable de gerer la temporisation suite à l'absence de mouvement. Il gere aussi la notion de debryage pour ne pas eteindre la lumiere trop tot si vous l'avez allumée manuellement et qu'il n'y a pas de mouvement.

## Configuration

Le plugin n'a aucun configuration spécifique

## Equipement

### Général

C'est ici que vous definisez le nom de l'équipement, si il est actif ou non, la visibilitée...

### Lumière

Ici, il faut donner la commande pour allumer la lumière, pour l'éteindre et pour connaître l'état. Ce plugin ne marche que avec les lumières ayant un retour d'état binaire (allumée ou éteinte).

### Mouvement

Là, vous définissez vos détecteurs de mouvements, vous pouvez en avoir autant que vous voulez.

### Luminosité

Vous mettez votre capteur de luminosité ainsi que le seuil pour allumer la lumiere. Il est possible d'en mettre plusieurs. Dans ce cas, si l'un des détecteurs tombe en-dessous de la valeur de seuil alors la lumière s'allumera lors d'un mouvement.

>**NOTE**
>
>Vous pouvez aussi demander au plugin de plutot recuperer la valeur minimum de la luminosité sur les X dernieres minutes, attention dans ce cas la il faut absolument que la commande de luminosité soit historisée.

### Temporisation

Ici vous pouvez :

- Définir le délai d'extinction lorsqu'il n'y a plus de mouvement
- Activer ou non le débrayage si la lumière n'est pas dans l'état attendu (quelqu'un l'a allumée)
- Le délai avant la reprise en main de la gestion de la lumière par le plugin 

Pour les 2 derniers paramètres, le cas est assez simple : quelqu'un allume la lumière passe devant le détecteur puis s'en va, au bout du XX secondes le détecteur renvoie l'information comme quoi il n'y a personne, puis passé 1 minute (dans mon cas) le plugin devrait éteindre la lumière. Avec le débrayage, le plugin ne va rien faire et attendre 5 min avant de reprendre en gestion automatique et éteindre la lumière.</p>
