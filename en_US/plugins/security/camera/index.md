Plugin for creating and managing wifi cameras (display and
recording)

Plugin configuration
=======================

After installing the plugin, you just have to activate it, however
there are some advanced configuration settings:

-   **Records Path**: indicates the path where Jeedom must
    store the images that it captures from your cameras (it is not recommended
    to touch it). If your path is not in the way
    installing Jeedom then you will only be able to view the
    catches in Jeedom.

-   **Maximum size of the recording folder (MB)**: indicates the
    maximum size allowed for the folder where the captures are
    recorded (it is not recommended to touch it). If this quota is
    reaches Jeedom will delete the oldest captures.

-   **Le plugin caméra doit réagir aux interactions** : mots clés /
    phrases auxquel(le)s le plugin réagira via les interactions de Jeedom.

-   **Panel**: Allows you to display the panel (Menu
    Accueil -> Caméra) et d’avoir une vue sur l’ensemble de vos
    caméras (voir plus bas). N'oubliez pas d'activer le panel dans la configuration du plugin pour y avoir accès plus tard.


Configuration des équipements
=============================

Equipement
----------

Here you have the main information of your camera:

-   **Name of camera equipment**: name of your camera equipment

-   **Parent Object**: Specifies the parent object to which belongs
    equipment

-   **Enable**: makes your equipment active

-   **Visible**: makes it visible on the dashboard

-   **IP**: the local IP address of your camera

-   **Port**: the port for which to attach the camera

-   **Protocol**: the communication protocol of your camera (http
    or https)

-   **Username**: username to login to the
    caméra (si nécessaire). Attention le plugin ne supporte pas les caractères
    spéciaux (il faut donc se limiter aux chiffres, lettres minuscule/majuscule)

-   **Password**: password to connect to the camera
    (si nécessaire).Attention le plugin ne supporte pas les caractères
    spéciaux (il faut donc se limiter aux chiffres, lettres minuscule/majuscule)

-   **URL de snapshot** : URL de "snapshot" de la caméra. Change en
    function of the cameras. Be careful not to put a feed url under
    to plant Jeedom. You can add \ #username \ # tags
    et \#password\#, qui seront automatiquement remplacés par le nom
    user name and password when using this
    order

-   **URL du flux** : url du flux video de la caméra de type rtsp://#username#:#password#@#ip#:554/videoMain (exemple pour les caméras Foscam)

-   **Model**: Choose the model of the camera. Attention if
    you change that will overwrite your configuration settings

Images
------

Cette partie vous permet de configurer la qualité de l’image. En effet
Jeedom diminue la taille de l’image ou la compresse avant de l’envoyer à
votre navigateur. Cela permet de gagner en fluidité des images (car
elles sont moins lourdes). C’est aussi dans cette partie que vous pouvez
configurer le nombre d’images par seconde à afficher. Tous les réglages
sont déclinés en : mobile/desktop et miniature/normal.

-   Refreshment (s): delay in seconds between the display of 2
    images (vous pouvez ici mettre des chiffres inférieurs à 1)

-   Compression (%): the lower it is, the less the image is compressed,
    100 % aucune compression n’est faite

-   Size (% - 0: automatic): the higher the% the higher one is
    proche de la taille d’origine de l’image. A 100 % aucun
    image resizing does not take place

> **Note**
>
> Si vous mettez une compression de 0% et une taille de 100%, Jeedom ne
> touchera pas à l’image en mode normal. Cela n’est pas valable en mode
> miniature où il y a une taille maximum de l’image de 360px.

Capture
-------

-   Durée maximum d’un enregistrement : durée maximum des
    recordings

-   Toujours faire une vidéo : force Jeedom à toujours transformer les
    enregistrements en vidéo avant l’enregistrement

-   Number of frames per second of the video: number of frames per
    second videos

-   Motion detection threshold (0-100): detection threshold of
    movement (it is advisable to put 2). More value is big
    the more the sensitivity increases.

-   Delete all captures from the camera: delete all
    camera captures and recordings

Alimentation
------------

-   Commande ON : Commande permettant de mettre en marche l’alimentation
    from the camera

-   Commande OFF : Commande permettant de couper l’alimentation de la
    camera

Commandes
---------

-   ID of the command (use with info type commands for by
    example back up the motion information from the camera to Jeedom
    by API, see below)

-   Nom de la commande avec la possibilité de mettre une icône à la
    place (pour la supprimer il faut double-cliquer sur l’icône
    in question)

-   Type et sous-type de la commande

-   Query to send to the camera to do an action (switch to mode
    night, ptz, etc.). You can use \ #username \ # tags and
    \#password\#, qui seront automatiquement remplacés par le nom
    user name and password when using this
    order

-   Commande stop : pour les caméras PTZ, il existe souvent une commande
    which stops the movement, it is here that it must be specified

-   Show: to display the command or not on the dashboard

-   Advanced configuration (small wheels): displays
    the advanced configuration of the command (historization method,
    widget, etc.)

-   Test: test the command

-   Delete (sign -): delete the command

Le widget
=========

We find on this one the image of the camera, the commands defined
in the configuration, the command to take a capture, the command
to start taking multiple image captures and ordering for
browse these captures.

> **Tip**
>
> On the dashboard and the panel it is possible to resize the
> widget to adapt it to his needs

Un clic sur l’image permet d’afficher celle-ci dans une fenêtre et
dans un format plus grand.

Un clic sur la dernière commande pour parcourir les captures vous
affichera celle-ci.

You find here all the catches organized by day then by
date, you can for each of them:

-   see it bigger by clicking on the image

-   download it

-   delete it

En mobile le widget est un peu différent : si vous cliquez sur l’image de
la caméra vous obtenez celle-ci en plus grande avec les commandes
possibles.

Les panels
==========

The camera plugin also provides a panel that allows you to
see all your cameras at once, it is accessible by Home →
Camera.

> **Note**
>
> To have it you have to activate it on the plugin configuration page

It is of course also available in mobile by Plugin → Camera:

Enregistrement et envoi de capture
==================================

Cette commande un peu spécifique permet suite à la prise de capture de
faire l’envoi de celle-ci (compatible avec le plugin slack, mail et
transfert).

La configuration est assez simple vous appelez l’action d’envoi de
capture (dénommée "Enregistrement") dans un scénario. Dans la partie titre vous passez les options.

Par défaut il suffit de mettre le nombre de captures voulues dans le champ "nombre captures ou options", mais vous pouvez aller plus
loin avec des options (voir détail ci-dessous "options avancées des captures"). Dans la partie message, vous n'avez plus qu'à renseigner la commande du plugin (actuellement slack, mail ou transfert) qui fait l’envoi des captures. Vous pouvez en mettre plusieurs séparés par des &&.

Options avancées des captures
---------------------------

-   nbSnap: number of captures, if not specified then the catches are
    faites jusqu’à une demande d’arrêt d’enregistrement ou d’arrêt de la
    camera

-   delay : délai entre 2 captures, si non précisé alors le délai est de
    1s

-   wait: timeout before starting the captures, if not
    specified then no sending is done

-   sendPacket : nombre de captures déclenchant l’envoi de paquet de captures, si non
    précisé alors les captures ne seront envoyées qu’à la fin

-   detectMove=1 : envoi les captures que s'il y a un changement supérieur au
    seuil de détection (voir configuration de la caméra)

-   movie = 1: Once the recording is finished, the images are
    converties en vidéo

-   sendFirstSnap=1 : envoi la première capture de l’enregistrement

> **Exemples**
>
> nbSnap=3 delay=5 ==> envoi 3 captures faites à 5 secondes d'intervalle (envoi déclenché via le scénario)
> movie=1 sendFirstSnap=1 detectMove=1 ==> envoi la première capture, puis envoi d'une capture à chaque détection de mouvement et enregistre une vidéo jusqu'à la commande "Arrêter Enregistrement" à insérer dans le scénario. Le film sera stocké sur votre Jeedom.


Envoi de la détection de mouvement à Jeedom
===========================================

If you have a camera that has motion detection and that
you want to transmit this one to Jeedom here is the url to put on your
camera:

    http: //#IP_JEEDOM#/core/api/jeeApi.php apikey APIKEY = # # & type = camera & id = # ID # & value = # value #

You must of course before creating an info command on
your camera

FAQ
===

>**Où sont les enregistrements ?**
>
>Les enregistrements se trouvent par défaut dans plugins/camera/data/records/*ID\_CAM*, attention cela peut varier si vous avez demandé à Jeedom de les enregistrer ailleurs

>**Les dépendances n'arrivents pas à s'installer ?**
>
>En ssh ou dans administration -> OS/DB -> Système faire : dpkg --configure -a

>**Quelles sont les conditions pour que ma caméra soit compatible Jeedom (si elle n'est pas dans la liste de compatibilité) ?**
>
> La seule condition c'est que la caméra possède une url qui renvoi une image (et bien une image pas un flux video)
