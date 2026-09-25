# Plugin Simulation de présence

Ce plugin permet de simuler facilement une présence dans la maison quand on est absent de manière crédible (heure et durée aléatoire des évènements)

Vous pouvez trouver [ici](https://blog.jeedom.com/4266-simulation-de-presence/) un article montrant un exemple de configuration du plugin

# Configuration du plugins

Rien de spécial ici juste à installer et activer le plugin

# Configuration des simulations

Vous retrouvez dans le premier onglet toute la configuration de votre équipement :

- Nom de l’équipement : nom de votre équipement Simulation,
- Objet parent : indique l’objet parent auquel appartient l’équipement,
- Activer : permet de rendre votre équipement actif,
- Visible : rend votre équipement visible sur le dashboard.

Ensuite, vous avez deux autres paramètres à configurer :

- Latitude et longitude de votre maison, ce qui permet au plugin de calculer en local les heures de lever et coucher du soleil

Dans le second onglet vous allez retrouver la configuration des simulations :

- elles ont un nom (pour les retrouver plus facilement)
- une condition de lancement, si la condition est fausse alors la simulation de ne se fera pas (si vous ne mettez rien alors la configuration se lancera forcément). Cette condition est évaluée au moment du lancement de la simulation (et non au moment de la programmation)
- des actions d'entrées : se font lors du lancement de la simulation
- des action de sorties (optionnelles) : se font lors de la fin de la simulation
- des heures de début et des durées :
  - l'heure de début peut être fixe entre 2 bornes (entre 18:30 et 19:30 par exemple, le plugin choisira chaque jour une heure aléatoire entre les deux bornes)
  - l'heure de début peut être par rapport au lever du soleil (par exemple de -20, pour 20 minutes avant à 30, pour 30 minutes après, ou 6:00 et 30min pour avoir quelque chose qui commence entre 6h00 et 30min après le levé du soleil)
  - l'heure de début peut être par rapport au coucher du soleil (par exemple de -10, pour 10 minutes avant à 15, pour 15 minutes après)
- une durée ou une heure de fin
  - si c'est une durée il vous suffit de mettre 20 en minimun et 40 en maximum pour une durée aléatoire entre 20 et 40 min
  - pour une heure de fin fixe entre 19h05 et 19h35 il faut mettre 19:05 en min et 19:35 en max
- Repétition : permet de repeter X fois l'action de debut/fin sur la période (attention la période doit etre supérieure à 2min, vous ne pouvez pas faire 5 répetition sur une simulation de durée 5min par exemple). Important il est recommandé de ne pas mettre plus de 5 en repetion, au dela le systeme peut ne pas les éxécuter

>**NOTE**
>
> Le format pour les heures est le suivant hh:mm, pour 12h30 il faut donc mettre 12:30

>**NOTE**
>
> Il faut bien remplir tous les champs sinon le plugin ne sera pas capable de calculer votre simulation et fera n'importe quoi.

>**IMPORTANT**
>
> Le plugin vous affiche les heures prévisionnelles de la simulation pour la prochaine période (si vous en avez plusieurs vous ne verrez donc comme la suivante)

>**IMPORTANT**
>
> Le plugin travails sur des cycles de 24h de 00h00 à 23:59, une programmation ne peut avoir lieu dans le cycle en cours. En résumé toute programmation commecera donc le lendemain.
