# Watering (arrosage)

>**IMPORTANT**
>
>Ce plugin n'est pas "user friendly", il est complexe à prendre en main et vous demandera beaucoup de temps pour arriver a un resultat satisfaisant

## Description

Le principe du plugin est le suivant, la nécessité d’arrosage dépend de :

- la plante : géré avec les têtes d’arrosage à débit variable pour équilibrer l’arrosage en fonction des plantes
- le soleil qu’il y a eu
- la température qu’il a fait
- la pluie qu’il est tombée

On arrive sur une formule de pourcentage d’arrosage : (C1 * Ensoleillement + C2 * Température – C3 * Pluie) + C4. C’est le côté pas user friendly du plugin car il ne peut pas trouver les coefficients pour vous, il faut donc y aller petit à petit.

Vous pouvez voir [ici](https://blog.jeedom.com/5529-gestion-de-larrosage/) un exemple d'utilisation du plugin.

## Configuration

Le plugin n'a aucun configuration spécifique

## Equipement

### Général

C'est ici que vous definisez le nom de l'équipement, si il est actif ou non, la visibilitée...

### Arrosage

Ici les commandes pour démarrer l’arrosage, le couper et voir le statut.

### Capteurs

Ici vous donnez le capteur de luminosité extérieure (avec le seuil au-dessus duquel on considère que c’est ensoleillé), le capteur de température et de pluie (qui donne la pluie des dernières 24h).

### Configuration

Ici vous avez : 

- le cron de lancement de l’arrosage (qui peut être multiple)
- la durée de base de l’arrosage
- la limite de non arrosage s’il a plu plus que XX mm
- la limite d’arrosage si la température moyenne n’a pas dépassé un certain seuil
- une condition libre de non arrosage (c’est là que je me base sur le capteur d’humidité du sol)
- une limite de non arrosage s’il n’y a pas eu plus de XX min d’ensoleillement
- là c’est un peu particulier : on peut spécifier au plugin « si l’arrosage se fait après une certaine heure, prendre les données sur XX heures au lieu de la journée en cours ». Par exemple, cela est utile si on arrose le matin afin de prendre les données de la veille au lieu de celle depuis 00h00 (ce qui n’aurait pas de sens car il n’y a pas trop de soleil la nuit).

Enfin, vient la partie compliquée des coefficients. Ici deux colonnes : une pour le calcul en temps normal, et une pour le calcul si on prend les XX dernières heures (donc le cas où c’est arrosé le matin). Clairement, je n’ai pas trop de conseils à vous donner là-dessus, c’est vraiment un affinage petit à petit.

## Panel

Si vous activez le panel dans la configuration de jeedom alors vous pouvez avoir une page qui vous donne l'état actuelle de l'équipement qui gère l'arrosage ainsi qu'un graphique vous donnant le nombre d'heure de soleil, la quantité de pluie et le temps d'arrosage.

## Widget

On voit la dernière durée d’arrosage, le temps d’ensoleillement, la quantité de pluie, le dernier pourcentage d’arrosage pratiqué, la prochaine durée d’arrosage estimée et le statut. On peut aussi interdire l’arrosage pour la journée en cours, stopper l’arrosage, le lancer en marche forcée ou le lancer en fonction du calcul à l’instant T.