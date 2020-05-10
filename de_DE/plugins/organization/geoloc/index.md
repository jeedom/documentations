Plugin permettant de gérer des coordonnées et le calcul de distance
entre 2 points, le temps de trajet (en voiture) entre 2 points ainsi que
la distance.

Konfiguration
=============

Une fois le plugin installé et activé à partir du Market, on accède à la
page du plugin Géolocalisation par :

![geoloc28](../images/geoloc28.jpg)

Vous retrouvez ici tous vos équipements Geoloc :

![geoloc29](../images/geoloc29.jpg)

> **Tip**
>
> Comme à beaucoup d’endroit sur Jeedom, placer la souris tout à gauche
> permet de faire apparaître un menu d’accès rapide (vous pouvez à
> partir de votre profil le laisser toujours visible).

Une fois un équipement sélectionné vous obtenez :

![geoloc screenshot1](../images/geoloc_screenshot1.JPG)

L’onglet « Général » permet de choisir le nom de l’équipement, l’objet
parent ainsi que son état et sa visibilité. L’onglet « Commande » permet
de rajouter les informations que nous voulons obtenir. Une fois
l’équipement ajouté, nous avons le choix entre trois types de commandes
: fixe, dynamique et distance.

![geoloc screenshot2](../images/geoloc_screenshot2.jpg)

Fixe 
----

Représente un point ayant des coordonnées qui ne changent pas. Par
exemple les coordonnées de votre habitation, de votre travail…​ Il vous
suffit de noter les coordonnées sous la forme : Latitude,Longitude.

![geoloc3](../images/geoloc3.jpg)

Pour trouver les coordonnées de votre position fixe, allez simplement
sur Google map : <https://www.google.com/maps/preview> . Si vous
recherchez une adresse, alors les coordonnées seront dans l’adresse URL,
par exemple pour le 25 rue de Mogador :

![geoloc4](../images/geoloc4.jpg)

Vous pouvez également faire un clic gauche sur la carte, et les
coordonnées apparaîtront dans la petite carte en haut à gauche.

![geoloc4](../images/geoloc4.jpg)

Dynamique 
---------

Représente un point ayant des coordonnées variables, l’objet se déplace.
Il s’agit en général de votre portable. Cette commande contiendra donc
les dernières coordonnées envoyées jusqu’à ce que vous en envoyez de
nouvelles. L’URL pour mettre à jour cette commande est :

\#URL\_JEEDOM\#/core/api/jeeApi.php?api=\#API\_KEY\#&type=geoloc&id=\#ID\_CMD\#&value=%LOC

\#URL\_JEEDOM\# correspond à votre URL d’accès à Jeedom. Il s’agit (sauf
si vous êtes connecté à votre réseau local) de l’adresse internet que
vous utilisez pour accéder à Jeedom depuis l’extérieur. N’oubliez pas
d’indiquer le port ainsi que /jeedom/.

api=\#API\_KEY\# correspond à votre clé API, propre à votre
installation. Pour la trouver vous pouvez soit aller dans le plugin
Géoloc, elle est indiquée directement dans l’URL.

![geoloc5](../images/geoloc5.jpg)

Soit dans le menu « Général », puis « Administration » et «
Configuration », en activant le mode Expert vous verrez alors une ligne
clé API.

![geoloc6](../images/geoloc6.jpg)

&lt;id=\#ID\_CMD\# correspond à l’ID de votre commande. Une fois que
vous avez donné un nom à votre commande de Géolocalisation, déterminé
son type et sauvegardé, un numéro apparaît dans la case « \# » devant le
nom votre commande.

![geoloc7](../images/geoloc7.jpg)

%LOC correspond à vos coordonnées sous la forme Latitude,Longitude.

Il vous faut donc réaliser un HTTP POST sur cette adresse en remplaçant
%LOC par vos coordonnées.

Exemple sous Android avec Tasker 
=============

Attention : pour cet exemple, vous avez besoin de l’application Tasker
pour Android
(<https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm>).
Dans l’onglet « Tâches », nous rajoutons une nouvelle tâche ici appelée
« Jeedom ».

![geoloc8](../images/geoloc8.jpg)

Nous y ajoutons une première action, dans la catégorie « Divers », nous
sélectionnons « Obtenir la localisation ».

![geoloc9](../images/geoloc9.jpg)

![geoloc10](../images/geoloc10.jpg)

Nous allons utiliser n’importe quelle source pour obtenir notre
position, et nous allons fixer un délai de 30 sec afin que Tasker ait le
temps d’obtenir précisément nos coordonnées.

![geoloc11](../images/geoloc11.jpg)

![geoloc12](../images/geoloc12.jpg)

Un délai trop court pourrait ne pas permettre d’obtenir de coordonnées
ou alors des coordonnées imprécises. Il en est de même du type de
source. Nous ajoutons une deuxième action, dans la partie « Réseau »
cette fois, nous sélectionnons « Post HTTP ».

![geoloc13](../images/geoloc13.jpg)

![geoloc14](../images/geoloc14.jpg)

Dans la case « Serveur :Port » nous copions notre URL complétée sauf
pour la partie %LOC.

![geoloc15](../images/geoloc15.jpg)

![geoloc16](../images/geoloc16.jpg)

Lorsque nous lançons notre tâche « Jeedom », une icône devrait vous
informer de l’utilisation de votre GPS dans votre barre de notification.

![geoloc17](../images/geoloc17.jpg)

Une fois le délai écoulé, nous cliquons sur « tester » dans Jeedom et
les coordonnées de notre portable apparaissent alors dans le popup.
Tasker a automatiquement remplacé la variable %LOC par vos coordonnées.

![geoloc18](../images/geoloc18.jpg)

Il vous suffit à présent de créer un scénario dans Tasker qui ira lancer
cette tâche quand vous en avez besoin. Par exemple toutes les heures,
quand vous vous connectez en wifi…

Distance, Temps de trajet et Distance de trajet 
=============

Permet de calculer la distance, le temps de trajet (en voiture, à l’aide
de Google Maps) ou la distance d’un trajet (en voiture, à l’aide de
Google Maps) entre deux points. Il est donc nécessaire d’avoir déjà
renseigné au moins deux commandes. Ici nous avons les coordonnées fixes
de notre maison ainsi que les coordonnées mises à jour de notre
portable. Nous pouvons donc calculer la distance entre les deux. Nous
sélectionnons « Distance » en type et nos deux commandes précédentes
dans les options. Une fois sauvegardé, nous utilisons le bouton tester
et la distance apparaît alors dans le popup. Ici 1,34 km.

![geoloc19](../images/geoloc19.jpg)

De même si vous voulez le temps de trajet ou la distance d’un trajet, il
faut choisir respectivement dans type : "Temps de trajet" ou "Distance
de trajet".

Ce plugin fonctionne comme un module, c’est-à-dire qu’une fois
sauvegardé nous pouvons le retrouver dans la liste des actions ou
commandes, il est ainsi très simple de l’utiliser lors de la création de
scénarios par exemple. Nous pouvons par exemple réaliser un scénario qui
se base sur la distance entre notre portable et la maison par exemple.

Exemple de scénario 
=============

Dans la partie « Scénario », nous créons un scénario nommé « Géoloc TV »
qui nous permet d’allumer la TV quand nous sommes à moins de 250 m de
notre maison. Attention : les systèmes de positionnement n’étant pas
précis au mètre près, pensez à prendre une marge lors de la création de
vos scénarios. Dans « Mode de scénario » nous choisissons « Provoqué »
et en « Déclencheur » nous ajoutons notre portable. En effet, c’est
lorsque les coordonnées de notre portable vont être mises à jour que
nous allons déclencher le scénario.

![geoloc20](../images/geoloc20.jpg)

Nous ajoutons un élément « Si / Alors / Sinon » avec comme condition une
distance inférieure à 250 m et comme action la mise sous tension de la
TV.

![geoloc21](../images/geoloc21.jpg)

Nous n’avons rien mis dans la partie « Sinon » ainsi il ne se passera
rien si je suis à plus de 250 m. Une fois sauvegardé, nous pouvons
regarder le log. Nous voyons ici que Jeedom a testé la distance entre le
portable et la maison et comme celle-ci est supérieure à 250 m, alors il
ne s’est rien passé.

![geoloc22](../images/geoloc22.jpg)

Pour notre test nous vérifions bien que la TV est hors tension, le
widget nous affiche bien 0 watt de consommation.

![geoloc23](../images/geoloc23.jpg)

Nous nous rapprochons de notre maison et nous lançons la tâche sur
Tasker. Nous pouvons voir en testant la distance que celle-ci est de
0,03 km désormais. Nous sommes donc bien sous les 250 m.

![geoloc24](../images/geoloc24.jpg)

La partie scénario nous informe que celui-ci a bien été lancé
dernièrement.

![geoloc25](../images/geoloc25.jpg)

Un tour dans le log nous permet de voir que celui-ci a bien été lancé
suite à la mise à jour des coordonnées du portable, et que la distance
était bien inférieure à 0,25 km.

![geoloc26](../images/geoloc26.jpg)

Le plugin de la TV sur l’écran d’accueil montre bien que celle-ci est
désormais alimentée.

![geoloc27](../images/geoloc27.jpg)

Voilà un exemple d’utilisation du plugin Géolocalisation.

Bien sûr nous avons réalisé le HTTP POST depuis un smartphone sous
Android mais il est tout à fait concevable qu’une tablette puisse
réaliser la même chose (avec internet) ou encore un PC portable avec un
script pour récupérer et envoyer ses coordonnées.
