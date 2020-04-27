Description 
===========

Plugin servant à piloter une clef blink(1).

Configuration 
=============

El plugin no requiere ninguna configuración, solo actívelo :

![blink1](../images/blink1.png)

Configuración del dispositivo
=============================

La configuration des équipements blink(1) est accessible à partir du
menu Plugins :

![blink2](../images/blink2.png)

Voilà à quoi ressemble la page du plugin blink(1) (ici avec déjà un
équipement) :

![blink3](../images/blink3.png)

Voilà à quoi ressemble la page de configuration d’un équipement blink(1)
:

![blink4](../images/blink4.png)

> **Sugerencia**
>
> Como en muchos lugares en Jeedom, coloque el mouse hacia la izquierda
> permite abrir un menú de acceso rápido (puede
>dejarlo siempre visible desde su perfil).

Aquí encontrará toda la configuración de su dispositivo:

-   **Nom de l’équipement blink(1)** : nom de votre équipement blink(1)

-   **Objeto padre** : especifica el objeto padre al que pertenece
    equipo

-   ** ** Activar: para que su equipo activo

-   Visible ** **: hace visible en el tablero de instrumentos

-   **Mode** : le mode dans lequel vous voulez faire fonctionner
    votre blink(1) (voir plus bas pour la description)

Ci-dessous vous retrouvez la liste des commandes :

-   le nom affiché sur le dashboard

-   le type et le sous-type

-   el valor: permite dar el valor del comando de acuerdo.
    d’une autre commande, d’une clef (cas d’un interrupteur virtuel),
    d’un calcul…​.

-   Paramètres : nom du pattern à lancer ou de la commande à lancer

-   afficher : permet d’afficher la donnée sur le dashboard

-   configuration avancée (petites roues crantées) : permet d’afficher
    la configuration avancée de la commande (méthode
    d’historisation, widget…​)

-   Prueba: prueba el comando

-   supprimer (signe -) : permet de supprimer la commande

Mode "Local" 
============

![blink5](../images/blink5.png)

Mode à utiliser si le blink(1) est branché sur un des ports USB de
Jeedom. Le seul paramètre dans ce mode est non obligatoire et permet de
sélectionner un blink(1) en particulier si vous en avez plusieurs de
branchés.

Mode "Appels à l’API blink(1)" 
------------------------------

![blink6](../images/blink6.png)

Dans ce mode, Jeedom va directement appeler l’api de blink1control, il
faut donc que Jeedom puisse joindre en direct le système sur lequel la
clef blink(1) est installée.

Dans ce mode les paramètres de configuration sont :

-   **Adresse ou IP** : adresse ou ip où la clef blink(1) est installée

-   **Port** : port sur lequel l’application blink1control écoute

-   **Pattern** : permet de synchroniser les pattern avec ceux de
    l’application blink1control

Installation de l’application blink1control 
-------------------------------------------

L’application blink1control se trouve
[ici](http://blink1.thingm.com/blink1control/), dans la partie download,
elle est disponible pour windows et mac. Une fois téléchargée, lancez
l’installation de l’application.

Configuration de l’application blink1control 
--------------------------------------------

Une fois installée et lancée vous devez avoir :

![blink7](../images/blink7.png)

Cette application offre de très nombreuses possibilités. Rapidement on
trouve en haut à gauche le statut de la clef (ici non branchée), en bas
à gauche les évènements, en haut au centre des actions rapides pour
piloter la clef, juste en-dessous un système de choix avancé des modes
et couleurs, et à droite les patterns.

Une fois là, il faut cliquer sur la petite roue crantée dans device pour
faire apparaître le menu de configuration avancée et activer l’api
server, en mettant bien serverHost sur any. Notez aussi le port pour le
reporter dans la configuration de Jeedom.

![blink8](../images/blink8.png)

Validez et redémarrez blink1control pour qu’il le prenne en compte.

Mode "Surveillance par URL" 
===========================

![blink9](../images/blink9.png)

Dans ce mode c’est l’application blink1control qui appelle toutes les X
secondes cette URL qui va lui donner ses instructions.

Pour le configurer, il faut dans l’applicaiton blink1control aller sur
tools puis cliquer sur le petit plus (+) pour en ajouter un, ensuite
faire URL et copier l’URL que donne Jeedom (champs URL à surveiller)
dans le path. Vous pouvez aussi configurer la fréquence de mise à jour.

> **Important**
>
> Pour que cela marche il faut que le PC sur lequel est blink1control
> puisse accèder à Jeedom. Si vous utilisez un pc portable à l’extérieur
> de votre réseau avec la clef dessus, il faut donc que Jeedom soit
> accessible de l’extérieur. Si vous ne savez pas comment faire, le
> mieux est d’utiliser le DNS Jeedom.

Dans ce mode vous avez aussi une option "Ne pas répéter les commandes"
celle-ci permet de ne plus répéter la dernière commande une fois que
blink1control a pris en compte la demande. Il est conseillé de la
laisser cochée.

Mode "Les deux" 
===============

![blink11](../images/blink11.png)

Ce mode est une combinaison des 2 modes précédents, l’avantage c’est
qu’il combine la vitesse de réaction du premier et la possibilité de le
faire fonctionner même à l’extérieur de chez soi du deuxième. Pour la
configuration il faut donc suivre les procédures pour le mode "Appels à
l’API blink(1)" et le mode "Surveillance par URL".

Mode "SSH" 
==========

![blink12](../images/blink12.png)

Ce mode doit être utilisé si vous avez mis le blink(1) sur une machine
linux autre que celle où est installé Jeedom (Jeedom maître car le
plugin n’est pas compatible en déporté). La configuration est assez
simple :

-   **Numéro de périphérique** : ID du périphérique, à n’utiliser que si
    vous avez plusieurs clefs blink(1) sur votre machine

-   **Adresse ou IP** : adresse IP de la machine où est branchée la clef

-   **Nom d’utilisateur** : le nom d’utilisateur pour se connecter sur
    la machine où est branchée la clef

-   **Chemin relatif de l’exécutable blink1-tool** : chemin relatif vers
    l’exécutable blink1-tool

> **Tip**
>
> L’exécutable est disponible
> [ici](https://github.com/todbot/blink1/releases), attention Jeedom ne
> fonctionne qu’avec la version linux qui n’est bien sûr compatible
> qu’avec une machine de type linux (rpi, rpi2, jeedomboard, cubieboard,
> bananapi…​). Il suffit de transférer l’exécutable sur la machine où
> est branchée la clef, et de le rendre exécutable (chmod +x
> blink1-tool)

> **Important**
>
> Pour que cela fonctionne, il faut avoir mis en place au niveau SSH
> l’échange de clef RSA pour que Jeedom puisse se connecter sur la
> machine où est branchée la clef sans fournir de mot de passe.
