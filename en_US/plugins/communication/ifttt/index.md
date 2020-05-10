This plugin allows to send an event to IFTTT

== Plugin configuration

After downloading the plugin you have to activate it, this one does not
requires no other configuration.

![ifttt7](../images/ifttt7.PNG)

Equipment configuration
=============================

IFTTT device configuration is accessible from the menu
plugins:

![ifttt8](../images/ifttt8.PNG)

That's what the IFTTT plugin page looks like (here with already 1
device) :

![ifttt9](../images/ifttt9.PNG)

> **Tip**
>
> As in many places in Jeedom, moving the mouse towards the far left opens a quick options menu (you can have it always visible by setting your profile's options).
>
>

Once you click on one of them, you get:

![ifttt10](../images/ifttt10.PNG)

You can find here the full configuration of your device :

-   **Device name**: name of your IFTTT device

-   **Enable**: makes your equipment active

-   **Visible**: makes it visible on the dashboard

-   **Key**: IFTTT key that you will find in the configuration of the
    Webhooks service (which replaces channel maker)

Below you find the command configuration:

-   **Name**: name of the command

-   **Subtype**: device subtype

-   **Evènement** : nom de l’èvenement configuré dans IFTTT

-   **Valeur** : valeur a envoyer à IFTTT, 3 distinctions possibles, en
    fonction du sous-type vous pouvez utiliser les tags : \#color\#,
    \#slider\#, \#message\# et \#title\#

-   configuration avancée (petites roues crantées) : permet d’afficher
    la configuration avancée de la commande (méthode
    d’historisation, widget…​)

-   Test: test the command

-   supprimer (signe -) : permet de supprimer la commande

Création d’un compte IFTTT 
==========================

Créez un compte sur IFTTT si ce n’est pas déjà fait, en allant sur
[IFTTT](:https://ifttt.com) :

![ifttt1](../images/ifttt1.png)

Renseignez votre adresse mail puis votre nom d’utilisateur et faites
créer :

![ifttt2](../images/ifttt2.PNG)

Un petit guide va vous expliquer les possibilités, une fois celui-ci
terminé, cliquez en haut a droite sur search :

![ifttt3](../images/ifttt3.PNG)

Puis dans recherche tapez webhooks et cliquez sur webhooks :

![ifttt4](../images/ifttt4.PNG)

Puis sur connect :

![ifttt5](../images/ifttt5.png)

Et là il vous faut récupérer votre clef :

![ifttt6](../images/ifttt6.png)

Cette clef est à copier dans le champ "Clef" de votre équipement sous
Jeedom

![ifttt11](../images/ifttt11.PNG)

Création de votre premier "Applet" 
==================================

Pour cela rien de plus simple, dans IFTTT cliquez sur "My applets" puis
sur "New applet"

![ifttt12](../images/ifttt12.png)

Puis cliquez sur "New applet" :

![ifttt13](../images/ifttt13.PNG)

Click on the "this":

![ifttt14](../images/ifttt14.png)

Then search for "Webhooks" and click on it:

![ifttt15](../images/ifttt15.png)

Click on "Receive a web request"

![ifttt16](../images/ifttt16.png)

Donnez un nom à votre "event", attention celui-ci doit correspondre au
nom de l’évènement dans la commande Jeedom, il faut donc bien le
mémoriser, puis validez :

![ifttt17](../images/ifttt17.png)

Then click on that:

![ifttt18](../images/ifttt18.png)

Ensuite à vous de voir, pour l’exemple je vais faire un envoi de
notification sur mon téléphone (il faut au préalable avoir installé
l’application IFTTT dessus), je clique donc sur Notifications :

![ifttt19](../images/ifttt19.png)

Validez en cliquant sur "Send a notification" (peut changer en fonction
des channels) :

![ifttt20](../images/ifttt20.png)

Ensuite il faut écrire le message de la notification, il existe ici des
tags (ingredient) possible :

-   **{{EventName}}** : nom de l’évenement, ici weather

-   **{{Value1}}** : valeur 1 envoyé dans le channel, cela se configure
    sur la commande dans Jeedom

-   **{{Value2}}** : valeur 2 envoyé dans le channel, cela se configure
    sur la commande dans Jeedom

-   **{{Value3}}** : valeur 3 envoyé dans le channel, cela se configure
    sur la commande dans Jeedom

-   **{{OccurredAt}}** : date de l’occurence

Voilà ce que cela donne ici (je veux recevoir la notification de la
méteo en cours chez moi), valider en cliquant sur "Create Action" :

![ifttt21](../images/ifttt21.PNG)

Donnez un nom a votre applet (recette) et validez en cliquant sur
"Create action" :

![ifttt22](../images/ifttt22.PNG)

Voilà vous avez créer votre "applets" coté IFTTT :

![ifttt23](../images/ifttt23.PNG)

Il reste plus qu’a créer la commande coté Jeedom, c’est assez simple :

![ifttt24](../images/ifttt24.PNG)

Ici rien de particulier, il faut bien remettre le nom de l’évènement
IFTTT dans Jeedom et ensuite mettre les valeurs à passer à IFTTT, ici
les conditions méteo dans l’ingrédient value1

> **Tip**
>
> Coté Jeedom vous pouvez, si vous faites une commande de sous-type
> message par exemple, mettre le tag \#message\# dans un ou plusieurs
> champs "Valeur". Ainsi, dans votre scénario la valeur du message sera
> tranmis à IFTTT. La même chose est possible avec \#title\#, \#color\#,
> \#slider\#

Envoi d’information de IFTTT vers Jeedom 
========================================

Il est aussi possible de faire dans l’autre sens, envoi d’information de
IFTTT vers Jeedom. Voilà comment faire pour par exemple envoyer une
information lorsque le téléphone pénètre dans une zone donnée. Première
chose à faire, créer une nouvelle applet :

![ifttt25](../images/ifttt25.png)

Then click on "this":

![ifttt26](../images/ifttt26.png)

Select "Location":

![ifttt27](../images/ifttt27.png)

Choose your trigger (here I'm going to take when we enter in
a zone) :

![ifttt28](../images/ifttt28.png)

Mark your zone then do "Create Trigger":

![ifttt29](../images/ifttt29.png)

Click on "that":

![ifttt30](../images/ifttt30.png)

Search for "Webhooks" and click on it:

![ifttt31](../images/ifttt31.png)

Click on "Make a web request":

![ifttt32](../images/ifttt32.png)

Coté Jeedom, sur votre équipement IFTTT, créer une commande de type
info/autre (ou binaire si vous voulez juste savoir si vous êtês dans la
zone), comme cela :

![ifttt33](../images/ifttt33.PNG)

-   Très important ici : récupérer l’id de la commande (ici 5369).

On retourne ensuite sur IFTTT et dans notre webhooks on va lui donner
l’url à appeller. C’est ici l’étape la plus compliquée, trouver votre
url d’accès externe :

-   Vous utilisez le DNS jeedom alors c’est :
    [https://XXXXX.dns.jeedom.com/core/api/jeeApi.php?apikey=\#APIKEY\#&type=ifttt&id=\#IDCMD\#&value=\#VALEUR\#](https://XXXXX.dns.jeedom.com/core/api/jeeApi.php?apikey=#APIKEY#&type=ifttt&id=#IDCMD#&value=#VALEUR#).
    Attention si vous avez une adresse en /jeedom il faut bien penser à
    la rajouter avant le /core

-   Vous avez votre propre DNS alors l’url est de la forme
    [http://\#VOTRE\_DNS\#/core/api/jeeApi.php?apikey=\#APIKEY\#&type=ifttt&id=\#IDCMD\#&value=\#VALEUR\#](http://#VOTRE_DNS#/core/api/jeeApi.php?apikey=#APIKEY#&type=ifttt&id=#IDCMD#&value=#VALEUR#).
    Attention si vous avez une adresse en /jeedom il faut bien penser à
    la rajouter avant le /core

Pensez bien à remplacer :

-   \#APIKEY\# : par votre clef API JEEDOM (elle se trouve dans Général
    → Administration → Configuration)

-   \#IDCMD\# : par l’id de votre commande précédemment créée

-   \#VALEUR\# : par la valeur que vous voulez donner à votre commande.
    Attention ici les espaces doivent être remplacés par des %20 (et il
    vaut mieux éviter les caractères spéciaux), ex : Hors%20zone

Voilà ce que cela donne :

![ifttt34](../images/ifttt34.png)

Pensez bien à mettre methode sur Get, puis cliquez sur "Create Action".

Donnez un titre à votre applets puis cliquez sur "Create action". Et
voilà, dès que vous rentrez dans la zone Jeedom sera prévenu.

> **Important**
>
> Il faut aussi faire une recette pour la sortie de zone sinon Jeedom ne
> sera pas prévenu lors de votre sortie de la zone
