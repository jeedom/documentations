Description
===========

Ce plugin permet de créer et gérer des thermostats pour piloter le
chauffage de votre domicile. Il fonctionne selon 2 modes, au choix :

-   le mode **hystéresis** correspond à l’allumage et l’extinction du
    chauffage en fonction de la température intérieure, par rapport à un
    seuil correspondant à la consigne. L’hystéresis permet d’éviter des
    commutations trop fréquentes lorsque la température est autour
    la consigne.

<!-- -->

-   le mode **temporel** calcule un pourcentage de chauffage sur un
    cycle temporel prédéfini, en tenant compte des écarts entre la
    consigne et les températures intérieure et extérieure (isolation).
    Ce mode est plus précis, dispose d’un apprentissage permettant
    d’ajuster automatiquement les coefficients mais peut nécessiter
    quelques réglages manuels pour l’adapter à votre installation.
    Important pour que le mode temporel marche il faut absolument une
    sonde de température intérieure ET extérieure.

Configuration
=============

Ce plugin est destiné à la création de thermostats dans Jeedom. Il
permet de piloter le chauffage, la climatisation ou les deux à la fois.

L’intérêt par rapport à un thermostat classique, c’est qu’il va pouvoir
s’intégrer totalement dans votre installation domotique. Outre la
régulation de température, car c’est bien ce qu’on lui demande en
premier lieu, le thermostat peut interagir avec tous les équipements de
la maison.

Parmi ses caractéristiques, on trouve :

-   la prise en compte de la température extérieure, par conséquent du
    coefficient d’isolation de la maison,

-   un système de régulation qui apprend pour optimiser la régulation,

-   la possibilité de gérer les ouvrants pour débrayer le thermostat,

-   la gestion des défaillances des équipements, sondes de température
    et appareils de chauffage,

-   une programmation complète avec le plugin agenda, avec notamment la
    possibilité d’anticiper le changement de consigne pour que la
    température soit atteinte à l’heure programmée (smart start)

Dans un premier temps, nous allons vous montrer la mise en œuvre, puis
détailler les différents réglages de la configuration du thermostat et
enfin, au travers de quelques cas d’utilisation, comment on peut
l’enrichir en combinaison avec d’autres plugins ou à l’aide de
scénarios.

La configuration en quelques clics
----------------------------------

Le thermostat de Jeedom est très puissant mais pour une utilisation
traditionnelle, sa mise en œuvre est vraiment simple et rapide, à partir
du moment où on a compris les étapes essentielles :

-   définition du Moteur de thermostat (hystérésis ou temporel). C’est
    le choix de l’algorithme de régulation.

-   la configuration et la plage de fonctionnement : chauffage
    uniquement, climatisation ou bien les deux , températures min et
    max d’utilisation.

-   La définition des actions que le thermostat doit exécuter pour
    chauffer, refroidir ou arrêter.

On trouve ensuite différents onglets :

-   La configuration des modes définit des températures de
    consignes prédéterminées. Par exemple, le mode confort à 20°C, eco
    à 18°C. Il peut y avoir aussi jour, nuit, vacances, absence,…​vous
    commencez à entrevoir ici les possibilités de personnalisation
    du plugin.

-   Pour affiner le mode de fonctionnement du thermostat, vous allez
    pouvoir également configurer des ouvertures qui vont interrompre
    temporairement la régulation (par exemple, une fenêtre ouverte peut
    arrêter le chauffage). La définition de cette interruption
    s’effectue ici simplement.

-   La gestion des modes de défaillance pour les sondes de température
    ou pour le chauffage permet de définir des actions à exécuter pour
    un mode dégradé.

-   L’onglet Configuration avancée permet d’ajuster les paramètres de
    régulation du chauffage.

-   Si de plus, vous disposez du plugin Agenda, la programmation des
    changements de mode devient possible directement depuis
    l’onglet programmation.

Votre thermostat est maintenant opérationnel, et par l’utilisation de
scénarios ou en le combinant avec d’autres plugins (agenda,
virtuel,présence,…​), il va se fondre en douceur dans votre installation
domotique. Voilà ce que l’on obtient sur le dashboard :

![Aspect sur le dashboard](../images/thermostat.png)

Le verrou présent sur le widget permet de bloquer le thermostat dans une
consigne donnée, suite à un imprévu : congés, invités,…​.


La création d’un thermostat en détail
-------------------------------------

Pour créer un nouveau thermostat, rendez-vous sur la page de
configuration en déroulant le menu Plugins/Bien-être et sélectionnez
Thermostat. Cliquez sur le bouton *Ajouter* situé en haut à gauche et
renseignez le nom souhaité pour votre thermostat.

![Configuration générale](../images/thermostat_config_générale.png)

Dans un premier temps, nous allons renseigner les paramètres généraux du
thermostat. On les trouve en haut à gauche, section général et il faut
préciser ici l’objet parent, l’activation et la visibilité du
thermostat, informations habituelles pour tout utilisateur de jeedom.

Le choix de l’algorithme du thermostat
--------------------------------------

![Choix de l'algorithme](../images/thermostat31.png)

En évidence sur cette image le Moteur de fonctionnement du thermostat.
Il y a 2 algorithmes possibles pour la régulation de température.

Lorsque vous sélectionnez le mode Hystérésis, la mise en route de votre
chauffage se produit dès que la température est inférieure à la consigne
moins l’hystérésis et il s’éteint dès que la température dépasse la
consigne plus l’hystérésis.

![Principe du mode hystérésis](../images/PrincipeHysteresis.png)

Par exemple, si on règle l’hystérésis à 1°C et que la valeur de consigne
vaut 19°C, alors le chauffage s’active lorsque la température passe en
dessous de 18°C et s’arrête dès qu’il atteint 20°C.

Les paramètres à fournir sont l’hystérésis en °C et la commande qui
permet de récupérer la mesure de température. On règlera l’hystérésis en
fonction de la précision du capteur, par exemple pour une sonde précise
à 0.5°C, un hystérésis de 0.2°C est un bon compromis.

> **Tip**
>
> Le paramètre hystérésis se trouve dans l’onglet *avancée*.

Dans le cas du mode temporel, la commande de chauffage ou de
climatisation est définie sur un cycle prédéfini et la durée d’exécution
de la commande est fonction de l’écart entre la consigne et la
température mesurée par le capteur. L’algorithme va également calculer
le temps de chauffe (ou de climatisation) sur un cycle en fonction de
l’inertie et de l’isolation de la pièce.

![Principe du mode temporel](../images/PrincipeTemporel.png)

Enfin, plus le temps de cycle sera grand, plus la régulation sera lente.
A l’inverse, un temps trop faible provoquera des commutations fréquentes
de votre système de chauffage qui n’aura peut-être pas le temps de
chauffer le volume de la pièce efficacement. Il est recommandé de ne pas
trop diminuer ce temps de cycle (les valeurs acceptables sont comprises
entre 30 et 60mn).

Ce type de régulation est plus optimisé, il améliore le confort et
permet de réaliser des économies d’énergie substantielles.

La configuration
----------------

Outre le moteur de fonctionnement du thermostat, vous pouvez décider si
le thermostat est utilisé en mode chauffage, climatisation ou les deux.
Puis vous indiquez sa plage d’utilisation : les températures minimale et
maximale vont définir les valeurs possibles de consigne accessibles sur
le widget.

![Configuration du fonctionnement](../images/configFonctionnement.png)

Ensuite, il faut préciser les commandes qui permettent de mesurer la
température et de piloter le chauffage ou la climatisation. Notez que le
moteur temporel a besoin de connaître la température extérieure. Si vous
ne disposez pas d’un capteur extérieur, celle-ci peut être fournie par
le plugin météo.

![Sélection des sondes](../images/selectionsondes.png)

> **Tip**
>
> Les champs `Borne de température inférieure` et
> `Borne de température supérieure` définissent la plage de
> fonctionnement du thermostat en dehors de laquelle une défaillance du
> chauffage est enclenchée. Voir ci dessous le paragraphe sur les
> actions de défaillance.

Pour la commande du radiateur ou du climatiseur, il est décrit dans
l’onglet *Actions*. On peut ici définir plusieurs
actions, ce qui donne la possibilité à notre thermostat de piloter
différents équipements (cas d’un fonctionnement par zone par exemple ou
contrôle d’un autre thermostat)

![Actions sur les appareils](../images/actionssurappareil.png)

Les actions sont celles qui permettent de chauffer, de refroidir
(climatisation), d’arrêter la commande. Une action complémentaire peut
être envisagée à chaque changement de consigne, que ce soit en mode
manuel ou automatique.

Les modes : le point de départ pour l’automatisation
----------------------------------------------------

Les modes (définis dans l’onglet *Modes*) sont des
consignes prédéterminées du thermostat qui correspondent à votre mode de
vie. Par exemple, le mode **Nuit** ou **Eco** donne la température que
vous souhaitez lorsque tout le monde dort. Le mode **Jour** ou
**Confort** détermine le comportement du thermostat pour avoir une
température de confort lorsque vous êtes présent au domicile. Ici, rien
n’est figé. Vous pouvez définir autant de modes que vous le souhaitez pour
les utiliser via des scénarios (Nous y reviendrons plus tard).

Dans l’image ci-dessous, le mode **Confort** a une valeur de consigne de
19°C et pour le mode **Eco**, le thermostat est réglé à 17°C. Le mode
**Vacances** programme le thermostat à 15°C en cas d’absence prolongée.
Il n’est pas visible sur le dashboard, car c’est un scénario qui
programme tous les équipements en *vacances* et ainsi positionner le
thermostat sur ce mode.

![Définition des modes](../images/Definitionmodes.png)

Pour définir un mode, procédez comme suit :

-   Cliquez sur le bouton *Ajouter Mode*,

-   donnez un nom à ce mode, par exemple `Eco`,

-   ajoutez une action et choisissez la commande *Thermostat* de votre
    équipement thermostat,

-   ajustez la température souhaitée pour ce mode,

-   cochez la case **Visible** pour faire apparaître ce mode sur le
    widget du thermostat sur le Dashboard.


>**IMPORTANT**
>
>Attention lors du renommage d'un mode il faut absoluement revoir les scénarios/équipement qui utiliser l'ancien nom pour les passer sur le nouveau


Les ouvertures : pour interrompre temporairement le thermostat
--------------------------------------------------------------

Imaginons que vous souhaitez arrêter momentanément votre chauffage ou
votre climatiseur, par exemple pour aérer la pièce pour laquelle le
thermostat est actif. Pour détecter l’ouverture de la fenêtre, vous
utiliserez un capteur situé sur l’ouvrant de votre fenêtre, vous
permettant ainsi de réaliser cette interruption en l’ajoutant dans
l’onglet de configuration des ouvertures. Deux paramètres
supplémentaires sont réglables ici, ce sont les durées d’ouverture et de
fermeture de la fenêtre qui vont provoquer l’interruption et la reprise
du fonctionnement du thermostat.

![Configuration des ouvertures](../images/configouvertures.png)

Pour configurer le fonctionnement à l’ouverture de la fenêtre :

-   sélectionnez l’info du capteur d’ouverture dans le champ `Ouverture`

-   ajuster le temps avant coupure du thermostat après l’ouverture dans
    le champ `Eteindre si ouvert plus de (min) :`

-   ajuster le temps après fermeture de la fenêtre permettant de
    relancer le thermostat dans le champ
    `Rallumer si fermé depuis (min) :`

-   cliquez sur le bouton *Sauvegarder* pour enregistrer la prise en
    compte des ouvertures

> **Tip**
>
> Il est possible de définir plusieurs ouvertures, ceci est nécessaire
> lorsque le thermostat contrôle une zone composée de plusieurs pièces.

> **Tip**
>
> Il est possible de définir une alerte si l'ouverture dure plus de xx minutes.


Prévoir un mode dégradé grâce à la gestion des défaillances
-----------------------------------------------------------

Les défaillances peuvent provenir soit des sondes de température, soit
de la commande de chauffage. Le thermostat peut détecter un défaut lors
d’un écart prolongé de la température avec la consigne.

### Défaillance des sondes de température

Si les sondes utilisées par le thermostat ne renvoient pas de **changement**
de température, par exemple en cas d’usure des piles, alors le
thermostat enclenche les actions de défaillance. Lorsque le défaut
survient, il est possible de mettre l’appareil dans un mode de
fonctionnement prédéterminé, par exemple forcer l’ordre d’un radiateur
fil pilote. Plus simplement l’envoi d’un message par sms ou d’une
notification permet d’être prévenu et d’intervenir manuellement.

> **Tip**
>
> Le paramètre qui permet au thermostat de décider d’une défaillance de
> sonde est situé dans l’onglet *Avancée*. Il s’agit du
> `délai max entre 2 relevés de température`.

![Défaillance des sondes](../images/defaillancesonde.png)

Pour définir une action de défaillance :

-   cliquez sur l’onglet *Défaillance sonde*,

-   cliquez sur le bouton *Ajoutez une action de défaillance*

-   sélectionnez une action et remplissez les champs associés

Vous pouvez saisir plusieurs actions, qui seront exécutées en séquence
et dans le cas d’actions plus complexes, faire appel à un scénario
(taper `scenario` sans accent dans le champs action puis cliquer
ailleurs pour pouvoir saisir le nom du scénario).

### Défaillance du chauffage/climatisation

Le bon fonctionnement du chauffage ou de la climatisation est
conditionné par un bon suivi de consigne. Ainsi, si la température
s’écarte de la plage de fonctionnement du thermostat, celui-ci enclenche
les actions de défaillance du chauffage/climatisation. Cette analyse
s’effecue sur plusieurs cycles.

> **Tip**
>
> Le paramètre qui permet au thermostat de décider d’une défaillance de
> sonde est situé dans l’onglet *Avancée*. Il s’agit de la
> `Marge de défaillance chaud` pour le chauffage et de la
> `Marge de défaillance froid` pour la climatisation.

Sur cette image, l’action de défaillance envoie l’ordre de passage en
mode ECO du radiateur par le fil pilote, puis envoie un message par le
plugin pushbullet.

![Défaillance du chauffage](../images/defaillancechauffage.png)

Pour définir une action de défaillance :

-   cliquez sur l’onglet *Défaillance du chauffage/climatisation*,

-   cliquez sur le bouton *Ajoutez une action de défaillance*

-   sélectionnez une action et remplissez les champs associés

Vous pouvez saisir plusieurs actions, qui seront exécutées en séquence
et dans le cas d’actions plus complexes, faire appel à un scénario
(taper `scenario` sans accent dans le champs action puis cliquer
ailleurs pour pouvoir saisir le nom du scénario).

Gérer des cas particuliers avec la configuration avancée du thermostat
---------------------------------------------------------------------

Cet onglet contient tous les paramètres de réglage du thermostat en mode
temporel. Dans la plupart des cas, il n’est pas nécessaire de modifier
ces valeurs, car l’auto-apprentisssage va calculer automatiquement les
coefficients. Cependant, même si le thermostat peut s’adapter à la
plupart des cas de figure, il est possible d’ajuster les coefficients
pour une configuration optimisée à votre installation.

![Configuration avancée du
thermostat](../images/configurationavancee.png)

Les coefficients sont les suivants :

-   **Coefficient de chauffage / Coefficient de climatisation** : il
    s’agit du gain du système de régulation . Cette valeur est
    multipliée par l’écart entre la consigne et la température
    intérieure mesurée pour déduire le temps de chauffage/climatisation.

-   **Apprentissage chaud / Apprentissage froid** : ce paramètre indique
    l’état d’avancement de l’apprentissage. Une valeur de 1 indique le
    début de l’apprentissage, l’algorithme effectue un réglage grossier
    des coefficients. Puis au fur et à mesure que ce paramètre augmente,
    le réglage s’affine. Une valeur de 50 indique la fin
    de l’apprentissage.

-   **Isolation chauffage / Isolation clim** : ce coefficient est
    multiplié par l’écart entre la consigne et la température extérieure
    mesurée pour déduire le temps de chauffage/climatisation. Il
    représente la contribution de la température extérieure au temps de
    chauffage/climatisation et sa valeur est normalement inférieure au
    coefficient de chauffage/climatisation, dans le cas d’une pièce
    bien isolée.

-   **Apprentissage isolation chaud / Apprentissage isolation froid** :
    même fonction que ci-dessus, mais pour les coefficients d’isolation.

-   **Offset chauffage(%) / Offset clim(%)** : L’offset du chauffage
    permet de tenir compte des *apports internes*, normalement il ne
    devrait pas être fixe mais on suppose que l’apprentissage intègre la
    partie dynamique dans les 2 autres coefficients. Les *apports
    internes*, c’est par exemple un ordinateur qui va provoquer une
    élévation de température lorsqu’on l’allume, mais ce peut-être aussi
    les individus (1 personne =80W en moyenne), le réfrigérateur dans
    la cuisine. Dans une pièce au sud, c’est une façade ensoleillée qui
    peut réaliser un apport d’énergie supplémentaire. En théorie, ce
    coefficient est négatif.

- **Offset à appliquer si le radiateur est considéré chaud (%)** : à utiliser si votre système de contrôle du chauffage a une inertie non négligeable, que ce soit du fait des radiateurs, de la configuration de la pièce (distance entre le radiateur et la sonde de température) ou de la sonde de température elle-même (selon les modèles, leur réactivité est plus ou moins grande). La conséquence visible de cette inertie est un dépassement temporaire de la consigne lors des montées en température importantes (consigne qui passe de 15°C à 19°C par exemple). Ce paramètre correspond au décalage constaté entre la période de chauffe (= le chauffage est allumé) et la période où la température relevée par la sonde augmente, divisé par la longueur du cycle paramétrée. Par exemple, si on constate un décalage de 30 minutes entre le début de la chauffe et le début de l’élévation de température, et que la durée des cycles de chauffe est réglée sur 60 minutes, on peut mettre ce paramètre 50%. Ainsi, quand un cycle de chauffe à 100% est suivi par une autre chauffe, ce paramètre permet de prendre en compte la chaleur générée par le radiateur au premier cycle mais non encore mesurée par la sonde pour le calcul du deuxième cycle, en diminuant d’autant sa puissance de chauffe. La puissance du deuxième cycle sera alors diminuée de 50% par rapport au calcul réalisé en fonction de la température mesurée par la sonde.

-   **Auto apprentissage** : case à cocher pour activer/désactiver
    l’apprentissage des coefficients.

-   **Smart start** : Cette option permet de donner de l’intelligence au
    thermostat, en anticipant le changement de consigne pour que la
    température soit atteinte à l’heure programmée. Cette option
    nécessite d’avoir le plugin agenda. Attention pour que le smart start marche
    il faut absolument que l'apprentissage soit à plus de 25. Autre point il ne
    prend que l'évenement le plus proche à venir

-   **cycle (min)** : il s’agit du cycle de calcul du thermostat. En fin
    de cycle et en fonction de l’écart entre les températures et la
    consigne, le thermostat calcule le temps de chauffe pour le
    cycle suivant.

-   **Temps de chauffe minimum (% du cycle)** : Si le calcul aboutit à
    un temps de chauffe inférieur à cette valeur, alors le thermostat
    considère qu’il n’est pas nécessaire de chauffer/climatiser, la
    commande se reportera sur le cycle suivant. Cela permet d’éviter
    d’endommager certains appareils comme les poêles, mais aussi
    d’obtenir une réelle efficacité énergétique.

-   **Marge de défaillance chaud / Marge de défaillance froid** : cette
    valeur est utilisée pour détecter un défaut de fonctionnement
    du chauffage/climatisation. Lorsque la température sort de cette
    marge par rapport à la consigne pendant plus de 3 cycles
    consécutifs, le thermostat passe en mode de défaillance
    du chauffage.

- **Limite les cycles marche/arrêt incessants (pellet, gaz, fioul) et PID** : LCette option permet de faire de la régulation avec différents niveaux de chauffe. Le retour de la puissance du prochain cycle doit donné la nouvelle consigne de niveau de chauffe à l'appareil de chauffage. Les cycles se terminent à 100%, il faut donc avoir un temps de cycle court.

> **Tip**
>
> L’apprentissage est toujours actif. Mais la phase d’initialisation
> peut être relativement longue (compter environ 3 jours). Pendant cette
> phase, il convient d’avoir des périodes suffisamment longues pendant
> lesquelles la consigne ne change pas.

Les commandes du thermostat
---------------------------

Le widget du thermostat est intégré au plugin, les commandes du
thermostat ne sont donc pas toutes directement accessibles dans la
configuration du plugin. Il faudra utiliser le *Résumé Domotique* (menu
Général) pour les paramétrer. Elles seront également utilisables dans
les scénarios.

![Liste des commandes dans le résumé
domotique](../images/thermostatlistecommandes.png)

Toutes les commandes ne sont pas accessibles en programmation, certaines
sont des informations d’état renvoyées par le plugin. Dans les
scénarios, on trouve :

![Liste des commandes dans les
scénarios](../images/thermostatcommandesscenario.png)

-   **Les modes** : il est possible de faire les changements de mode, en
    exécutant directement les commandes (ici, Confort, Confort matin,
    Eco, Vacances)

-   **Off** : cette commande coupe le thermostat, la régulation n’est
    plus active, le chauffage/climatisation est arrêté

-   **Thermostat** : il s’agit de la consigne du thermostat

-   **lock** : commande de verrouillage, il n’est pas possible de
    modifier l’état du thermostat (changement de mode, consigne)

-   **unlock** : déverrouille le thermostat permetant de modifier son
    état

-   **Chauffage seulement** : la régulation n’intervient que pour
    chauffer

-   **Climatisation seulement** : la régulation n’est active que pour
    refroidir

-   **Offset chauffage** : modifie le coefficient d’offset du chauffage
    correspondant aux apports internes : un scénario peut modifier ce
    paramètre en fonction d’un détecteur de présence par exemple

-   **Offset froid** : comme ci-dessus mais pour la climatisation

-   **Tout autorisé** : modifie le comportement du thermostat pour agir
    à la fois en chauffage et en climatisation

-   **Puissance** : uniquement disponible en mode temporel, cette commande indique le pourcentage de temps de chauffe/refroidissement sur le temps de cycle.

-   **Performance** : uniquement disponible si vous avez une commande de températeur extérieure et une commande de consommation (en kwh, remis à 0 tous les jours à 00h00). Celle-ci vous indique la performance de votre systeme de chauffage par rapport au degrès jour unifié.

-   **Delta consigne** : uniquement disponible en mode temporel, cette commande permet de saisir un delta de calcul sur la consigne. Si > 0 alors le thermostat va chercher si il doit chauffer pour (consigne - delta/2) si oui alors il va chercher à chauffer jusqu'à (consigne + delta/2). L'interêt est de chauffer plus longtemps mais moins souvent.

> **Tip**
>
> L’utilisation du thermostat en mode `Chauffage seulement` nécesite
> d’avoir défini les commandes *Pour chauffer je dois ?* et *Pour tout
> arrêter je dois ?* En mode `Climatisation seulement`, il faut les
> commandes *Pour refroidir je dois ?* et *Pour tout arrêter je dois ?*.
> Et en mode `Tout autorisé`, il est nécessaire d’avoir saisi les 3
> commandes.

Un exemple concret d’utilisation du thermostat
----------------------------------------------

Lorsque votre thermostat est configuré, il faut réaliser la
programmation. La meilleure méthode pour l’expliquer est de prendre un
cas d’utilisation. Ainsi, on souhaite programmer notre thermostat en
fonction des heures de présence des occupants de la maison.

Dans un premier temps, nous allons utiliser 2 scénarios pour mettre le
chauffage en mode **Confort** (consigne 20°C) tous les matins de la
semaine entre 5h et 7h30, puis le soir entre 17h et 21h. Le mode
**Confort** sera également activé le mercredi après-midi de 12h à 21h et
le week-end de 8h à 22h. Le reste du temps, le chauffage bascule en mode
**Eco**, avec une consigne de 18°C.

On crée donc le scénario ***Chauffage confort***, en mode programmé :

![Scénario programmé](../images/thermostat11.png)

et le code :

![Scenario mode confort](../images/scenarioconfort.png)

Sur le même principe, le scénario "Chauffage Eco" :

![Scénario programmé en mode Eco](../images/thermostat13.png)

et son code :

![Scénario en mode Eco](../images/scenarioeco.png)

Notez que dans les scénarios, le pilotage du thermostat est complet
puisqu’on peut agir sur le mode de fonctionnement (chauffage ou
climatisation seulement), les modes, la valeur de consigne et le verrou
(lock, unlock).

Si la création de scénario est parfois compliqué, pour le cas de la
programmation d’un thermostat, la combinaison des actions du thermostat
avec le calendrier du plugin agenda permet de réaliser ceci simplement.

Le plugin agenda permet d’aller plus loin dans la programmation et
surtout présente moins de risque de se tromper. En effet, par rapport à
la programmation précédente, le calendrier va apparaître en clair sur
l’écran et on va pouvoir tenir compte des jours fériés, des
vacances…​.Bref, piloter le thermostat en fonction de son mode de vie.

Programmation avec le plugin agenda
-----------------------------------

Nous ne présentons pas ici le plugin Agenda, l’objectif étant de le
coupler avec la programmation du thermostat. A noter que si vous
disposez du plugin agenda, un onglet *Programmation* apparaît dans la
configuration du thermostat, permettant d’accéder directement à l’agenda
associé.

Nous allons donc créer un nouvel agenda nommé **Programmation
chauffage**, auquel on ajoutera les événements de changement de mode du
thermostat.

Une fois l’agenda créé, on va ajouter les événements Matin (du lundi au
vendredi de 5h à 7h30), Soir (le lundi, mardi, jeudi et vendredi de 17h
à 21h), Mercredi (le mercredi de 12h à 21h), Weekend (de 8h à 22h),
Jours fériés. Tous ces événements, ont comme action de début la
sélection du mode **Confort** du thermostat et comme action de fin le
mode **Eco** :

![Actions de l'agenda](../images/agendaactions.png)

Pour la programmation de l’évènement Soir :

![Programmation de l'évènement](../images/agendaprogrammation.png)

Il suffit de réitérer pour chaque évènement pour obtenir cet agenda
mensuel coloré :

![affichage mensuel de l'agenda](../images/agendamensuel.png)

En revenant dans la configuration du thermostat, on peut accéder aux
évènements de l’agenda directement depuis l’onglet programmation :

![onglet programmation du
thermostat](../images/thermostatongletprogrammation.png)

Visualisation du fonctionnement du thermostat
---------------------------------------------

Une fois le thermostat configuré, il est important de vérifier son
efficacité.

![Menu de visualisation des
thermostats](../images/menuaccueilthermostats.png)

Dans le menu `Accueil`, on trouve le sous-menu `Thermostat`. La fenêtre
qui s’affiche lorsqu’on sélectionne ce menu est découpée en trois zones
:

-   Le *widget* thermostat, pour visualiser l’état instantané du
    thermostat,

-   un graphique représentant le cumul du temps de chauffe par jour (en
    nombre d’heures),

-   un autre graphique qui affiche les courbes de consigne, température
    intérieure et état du chauffage.

![cumul du temps de chauffe du
thermostat](../images/graphecumultempsdechauffe.png)

*Graphe du cumul du temps de chauffe*

![graphe des courbes du
thermostat](../images/graphecourbesthermostat.png)

*Graphe des courbes du thermostat*

FAQ
===

>**Peut-on utiliser le thermostat avec un plancher chauffant, qui présente une forte inertie ?**
>
>    Le thermostat s’adapte pratiquement à tous les cas de figure mais
>    cela nécessite une analyse approfondie de votre installation pour
>    ajuster les coefficients, si vous êtes dans une
>    situation particulière. Consultez la section sur la *configuration
>    avancée* pour ajuster les coefficients, notamment dans le cas d’un
>    plancher chauffant. Plusieurs sujets sur le forum traitent de
>    l’utilisation du thermostat pour les différents types de chauffage
>    (poêle, chaudière plancher chauffant,…​etc)

>**Mes coefficients n’arrêtent pas de bouger**
>
>   C’est normal, le système corrige en permanence ses coefficients
>   grâce au système d’auto-apprentissage

>**Combien de temps faut-il, en mode temporel, pour apprendre ?**
>
>   Il faut en moyenne 7 jours pour que le système apprenne et régule de
>   maniere optimale

>**Je n’arrive pas à programmer mon thermostat**
>
>   La programmation du thermostat peut se faire soit par un scénario,
>   soit avec l’utilisation du plugin Agenda.

>**Mon thermostat semble ne jamais passer en mode chauffage ou climatisation**
>
>   Si le thermostat n’a pas de commande correspondant au chauffage
>    et/ou à la climatisation celui-ci ne peut pas passer dans ces modes.

>**J’ai beau changer la température ou le mode, le thermostat revient toujours à l’état précedent**
>
>   Verifiez que votre thermostat n’est pas verouillé

>**En mode histéresis mon thermostat ne change jamais d’état**
>
>   C’est que les sondes de température ne remontent pas automatiquement
>    leur valeur, il est conseillé de mettre en place un "Cron de
>    contrôle"

>**Les courbes du thermostat (en particulier la consigne) ne semblent pas être juste**
>
>   Regarder du coté du lissage de l'historique des commandes en question. En effet pour gagner en efficacité Jeedom fait une moyenne des valeurs sur 5 min puis sur l'heure.

>**L'onglet mode/action est vide et quand je clique sur les boutons ajouter ca ne fait rien**
>
> Essayez de désactiver Adblock (ou tout autre bloqueur de publicité), pour une raison inconnu ceux-ci bloque sans raison le JavaScript de la page.
