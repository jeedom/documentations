Plugin para crear y gestionar cámaras inalámbricas (pantalla y
registro)

Configuración de plugin
=======================

Después de instalar el plugin, sólo hay que activarlo, sin embargo,
Unos ajustes de configuración avanzada:

-   **Documentos** Ruta de acceso: Indica la ruta donde debe Jeedom
    almacenar imágenes que captan las cámaras (no se recomienda
    tocarlo). Si la ruta no está en el camino
    Jeedom instalación a continuación, puede ver la
    capturas en Jeedom.

-   **El tamaño máximo de la carpeta de grabación (MB)** indica el
    el tamaño máximo permitido para la carpeta en la que la captura es
    grabada (que no debe ser tocado). Si esta cuota está
    alcanzado Jeedom eliminar las capturas más antiguos.

-   **Le plugin caméra doit réagir aux interactions** : mots clés /
    phrases auxquel(le)s le plugin réagira via les interactions de Jeedom.

-   ** ** Grupo: le permite ver el panel (Menú
    Accueil -> Caméra) et d’avoir une vue sur l’ensemble de vos
    caméras (voir plus bas). N'oubliez pas d'activer le panel dans la configuration du plugin pour y avoir accès plus tard.


Configuration des équipements
=============================

Equipement
----------

Aquí tienes la información básica de la cámara:

-   **Nombre del equipo de la cámara**: su cámara nombre de equipo

-   **Objeto padre** : especifica el objeto padre al que pertenece
    equipo

-   ** ** Activar: para que su equipo activo

-   Visible ** **: hace visible en el tablero de instrumentos

-   ** ** IP: la dirección IP local de su cámara

-   ** ** Puerto: El puerto en el que montar la cámara

-   ** ** Protocolo: protocolo de comunicación de la cámara (http
    o https)

-   ** ** Nombre de usuario: nombre de usuario para conectarse a la
    caméra (si nécessaire). Attention le plugin ne supporte pas les caractères
    spéciaux (il faut donc se limiter aux chiffres, lettres minuscule/majuscule)

-   ** ** Contraseña: contraseña para conectarse a la cámara
    (si nécessaire).Attention le plugin ne supporte pas les caractères
    spéciaux (il faut donc se limiter aux chiffres, lettres minuscule/majuscule)

-   **URL de snapshot** : URL de "snapshot" de la caméra. Change en
    cámaras basadas. Tenga cuidado de no poner un url flujo bajo
    planta pena de Jeedom. Puede añadir etiquetas \ #username \ #
    et \#password\#, qui seront automatiquement remplacés par le nom
    usuario y la contraseña cuando se utiliza este
    orden

-   **URL du flux** : url du flux video de la caméra de type rtsp://#username#:#password#@#ip#:554/videoMain (exemple pour les caméras Foscam)

-   ** ** Modelo: selecciona el modelo de la cámara. Tenga cuidado si
    cambia que se sobreponen a los parámetros de configuración

Images
------

Cette partie vous permet de configurer la qualité de l’image. En effet
Jeedom diminue la taille de l’image ou la compresse avant de l’envoyer à
votre navigateur. Cela permet de gagner en fluidité des images (car
elles sont moins lourdes). C’est aussi dans cette partie que vous pouvez
configurer le nombre d’images par seconde à afficher. Tous les réglages
sont déclinés en : mobile/desktop et miniature/normal.

-   Actualizar (s): tiempo en segundos entre la pantalla 2
    images (vous pouvez ici mettre des chiffres inférieurs à 1)

-   Compresión (%): cuanto menor es el menos la imagen se comprime en
    100 % aucune compression n’est faite

-   Tamaño (% - 0: Automático): cuanto mayor es el%, mayor es uno es
    proche de la taille d’origine de l’image. A 100 % aucun
    imagen de cambio de tamaño se produce

> **Note**
>
> Si vous mettez une compression de 0% et une taille de 100%, Jeedom ne
> touchera pas à l’image en mode normal. Cela n’est pas valable en mode
> miniature où il y a une taille maximum de l’image de 360px.

Capture
-------

-   Durée maximum d’un enregistrement : durée maximum des
    grabaciones

-   Toujours faire une vidéo : force Jeedom à toujours transformer les
    enregistrements en vidéo avant l’enregistrement

-   Número de fotogramas por segundo del video: velocidad de fotogramas
    segundo vídeos

-   umbral de detección de movimiento (0-100): umbral de detección
    movimiento (se recomienda poner 2). A medida que el valor es grande
    más aumenta la sensibilidad.

-   Eliminar todas las capturas de la cámara: borra todos
    las capturas y la cámara graba

Alimentation
------------

-   Commande ON : Commande permettant de mettre en marche l’alimentation
    la cámara

-   Commande OFF : Commande permettant de couper l’alimentation de la
    cámara

Commandes
---------

-   Identificación de la orden (usar con comandos de información de tipo de
    por ejemplo, hasta información de movimiento de cámara a Jeedom
    por API, ver abajo)

-   Nom de la commande avec la possibilité de mettre une icône à la
    place (pour la supprimer il faut double-cliquer sur l’icône
    en cuestión)

-   Type et sous-type de la commande

-   Solicitud de envío de la cámara para hacer una acción (modo de transferencia
    noche PTZ, etc.). Se puede utilizar el \ etiquetas #username \ # y
    \#password\#, qui seront automatiquement remplacés par le nom
    usuario y la contraseña cuando se utiliza este
    orden

-   Commande stop : pour les caméras PTZ, il existe souvent une commande
    que se detiene el movimiento, esto es donde se especifica la

-   Ver: Muestra el orden o no en el salpicadero

-   Configuración avanzada (pequeñas ruedas dentadas): Muestra
    el control prolongado de la configuración (método de tala,
    flash, etc.)

-   Prueba: prueba el comando

-   Eliminar (signo -): eliminar comandos

Le widget
=========

Nos encontramos en él la imagen de la cámara, que se define comandos
en la configuración, el comando para tomar una instantánea, control de
para empezar a tomar varias instantáneas y comando para
navegar por estas capturas.

> **Tip**
>
> En el salpicadero y el panel es posible cambiar el tamaño
> Widget para adaptarse a sus necesidades

Un clic sur l’image permet d’afficher celle-ci dans une fenêtre et
dans un format plus grand.

Un clic sur la dernière commande pour parcourir les captures vous
affichera celle-ci.

Aquí encontrará todas las capturas organizados por día y por
fecha en la que puede para cada uno:

-   ver más grande haciendo clic en la imagen

-   descargar

-   eliminar

En mobile le widget est un peu différent : si vous cliquez sur l’image de
la caméra vous obtenez celle-ci en plus grande avec les commandes
possibles.

Les panels
==========

El plug-in cámara también proporciona un panel que le permite
ver a la vez todas sus cámaras, es accesible mediante Inicio →
Cámara.

> **Nota**
>
> Para que se tiene que activar la página de configuración del plugin

Por supuesto, es también disponible en móviles → plug-in de la cámara:

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

-   nbSnap: número de captura, si no se especifica a continuación, la captura es
    faites jusqu’à une demande d’arrêt d’enregistrement ou d’arrêt de la
    cámara

-   delay : délai entre 2 captures, si non précisé alors le délai est de
    1s

-   esperar: período de espera antes de comenzar la captura, si no se
    precie entonces no envío se hace

-   sendPacket : nombre de captures déclenchant l’envoi de paquet de captures, si non
    précisé alors les captures ne seront envoyées qu’à la fin

-   detectMove=1 : envoi les captures que s'il y a un changement supérieur au
    seuil de détection (voir configuration de la caméra)

-   película = 1: Una vez finalizada la grabación, las imágenes son
    converties en vidéo

-   sendFirstSnap=1 : envoi la première capture de l’enregistrement

> **Exemples**
>
> nbSnap=3 delay=5 ==> envoi 3 captures faites à 5 secondes d'intervalle (envoi déclenché via le scénario)
> movie=1 sendFirstSnap=1 detectMove=1 ==> envoi la première capture, puis envoi d'une capture à chaque détection de mouvement et enregistre une vidéo jusqu'à la commande "Arrêter Enregistrement" à insérer dans le scénario. Le film sera stocké sur votre Jeedom.


Envoi de la détection de mouvement à Jeedom
===========================================

Si usted tiene una cámara que cuenta con detección de movimiento y
que quiere transmitir a la Jeedom url aquí para poner en su
la cámara:

    http: //#IP_JEEDOM#/core/api/jeeApi.php apikey apikey = # # & type = & id = cámara # ID # & valor = # valor #

Se debe entender antes de crear un tipo de información de comandos
su cámara

Preguntas frecuentes
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
