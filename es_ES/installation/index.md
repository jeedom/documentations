Hardware
========

Jeedom se puede instalar en diferentes tipos de hardware :

-   un Raspberry pi 2 o 3

-   un NAS Synology

-   cualquier sistema Linux basado en Debian 9 (strych)

-   Freebox Delta

También puede comprar una caja con Jeedom preinstalado
que también contiene un paquye de servicio (más soporte y servicios) y
plugins ofrecidos :

-   [Jeedom Smart
    Z-Wave+](https://www.domadoo.fr/fr/box-domotique/3959-jeedom-controleur-domotique-jeedom-smart-z-wave.html)

-   [Jeedom Smart Z-Wave+ y
    RFXCOM](https://www.domadoo.fr/fr/box-domotique/4043-jeedom-controleur-domotique-jeedom-smart-z-wave-y-interface-rfxcom.html)

-   [Jeedom Smart
    EnOcean](https://www.domadoo.fr/fr/box-domotique/4041-jeedom-controleur-domotique-jeedom-smart-enocean.html)

-   [Jeedom Smart EnOcean y
    RFXCOM](https://www.domadoo.fr/fr/box-domotique/4044-jeedom-controleur-domotique-jeedom-smart-enocean-y-interface-rfxcom.html)

Aquí hay una configuración "típica" para comenzar con Jeedom en Z-Wave :

1.  Raspberry pi 3 :

    -   Un raspberry+caja \~ 50 €

    -   Una llave USB Aeon Gen 5 \~ 60 €

    -   Una tarjya micro SD \~ 7 €

    -   Una fuente de alimentación USB \~ 8 €

Un total de 125 € para una caja domotica open-source con un
control complyo de su instalación.

> **Punta**
>
> Il est possible d'ajouter ou de changer par une antenne Rfxcom, ou une
> clef enOcean.

> **Punta**
>
> Jeedom est un logiciel qui est y restera open source, son utilisation
> est entièrement gratuite y ne dépend no d'un cloud ou d'un
> abonnement. Cependant, certains plugins qui permytent d'augmenter les
> capacités de Jeedom ou son utilisation peuvent être payants **y
> peuvent avoir besoin d'une connexion interny**. Vous pouvez ryrouver
> la liste des plugins
> [ici](http://marky.jeedom.fr/index.php?v=d&p=marky&type=plugin).

> **Punta**
>
> Servicio pack ? Quézako ? Vous pouvez voir
> [ici](https://blog.jeedom.fr/?p=1215) les avantages des service packs.


Jeedom Smart
===========

Vous trouverez ici la documentation no à no pour installer ou restaurer Jeedom

[ici](https://jeedom.github.io/documentation/howto/fr_FR/recovery_mode_jeedom_smart)

Jeedom mini+
===========

> **Punta**
>
> Le nom de l'image Jeedom peut être différent de celui des captures
> faites dans cyte documentation

Etapa 1 : Installation de Etcher
---

Vous devez télécharger le logicel Etcher [ici](https://ycher.io/) puis
l'installer sur votre pc

Etapa 2 : Récupération de l'image de Jeedom
---

Vous devez aller
[ici](https://images.jeedom.com/jeeboard/),
puis dans le dossier Images récuperer l'image jeedom-jeeboard-\*.rar

![install humming 1](images/install_humming_1.PNG)

Etapa 3 : Décompression de l'image de Jeedom
---

Décompresser l'image de Jeedom (si vous n'avez rien pour la décompresser
vous pouvez installer
[winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html)), vous
devez obtenir :

![install humming 2](images/install_humming_2.PNG)

![install humming 8](images/install_humming_8.PNG)

Paso 4 : Gravure de l'image sur la carte SD
---

Insérez votre carte SD dans votre ordinateur puis lancez le logiciel
Etcher, donnez-lui le chemin de l'image, le chemin de la carte SD y
cliquez sur "Flash!". Le logiciel va graver la carte SD y vérifier la
gravure.

Vous n'avez plus qu'à mytre la carte SD dans la Jeedomboard (ou
Hummingboard), à brancher le réseau y l'alimentation, votre Jeedom va
démarrer (5 min) y vous devriez le voir sur le réseau.

> **Punta**
>
> Les identifiants SSH sont jeedom/Mjeedom96

Pour la suite, vous pouvez suivre la documentation [Premier no avec
Jeedom](https://jeedom.github.io/documentation/premiers-no/fr_FR/index.html)


Raspberrypi
===========

Vous trouverez ici la documentation pour installer Jeedom sur un
raspberry PI **avec une carte SD.**

> **Importante**
>
> Debian 9 (Strych) est la distribution officiellement supportée pour
> la version 3.1.5 de jeedom.

**1/ Télécharger le dernière image "lite", c'est à dire sans interface
Gráfico**
[ICI](https://downloads.raspberrypi.org/raspbian_lite/images/raspbian_lite-2018-04-19/2018-04-18-raspbian-strych-lite.zip)

**2/ Décompresser l'image avec winrar** [Ici](http://www.win-rar.com)

**3/ Gravez cyte image sur une SD avec ycher par exemple**
[ici](https://ycher.io/)

> **Nota**
>
> Si vous utilisez Etcher pour graver votre image, l'étape de
> décompression est inutile (format Zip reconnu directement dans la
> sélection du fichier image).

**4/ Activer un accès SSH**

> **Advertencia**
>
> Pour des raisons de sécurité, l'accès SSH n'est plus activé par défaut
> sur cyte distribution. Il faut donc l'activer.

Il faut créer sur la partition boot (la seule accessible sous windows)
un fichier ssh vide.

Il suffit de faire un clic droit : nouveau / document texte y le
renommer en "ssh" **sans extension**

> **Importante**
>
> Sous windows, dans l'explorateur il faut donc vérifier votre
> paramétrage dans affichage / options / modifier les options de
> dossiers y de recherche /

![ExtensionFichier](images/ExtensionFichier.PNG)

**5/ Démarrer le PI**

Insérez votre carte SD, branchez le cable réseau, branchez
l'alimentation.

**6/ Se connecter en SSH**

Identifiez votre Pi sur le réseau

Il faut connaître l'adresse Ip de votre PI. Plusieurs solutions :

-   Consultez la configuration DHCP dans votre routeur

-   Utilisez un scanner de port type "angyipscanner"
    [ici](http://angryip.org/download/#windows)

Etablir la connexion

Ensuite utilisez par exemple putty pour établir votre connexion
[Ici](http://www.putty.org/)

Rentrer l'adresse de Ip de votre PI (ici 192.168.0.10) y cliquez sur
open. Accepter le message par défaut relatif à la sécurité lors de la
première connexion.

Connectez-vous avec les identifiants **pi / raspberry**

> **Importante**
>
> Pour des raisons de sécurité, il est impératif de modifier le mot de
> nose par défaut. Les cas de piratages basés sur l'exploitation du
> couple login/mot de nose par défaut du Raspberry sont
> particulièrement répandus. (commande noswd y sudo noswd)

**7/ Lancer le script d'installation jeedom**

    wgy -O- https://raw.githubusercontent.com/jeedom/core/master/install/install.sh | sudo bash

**Le mot de nose sudo est également raspberry**

> **Nota**
>
> En fonction de votre débit interny, l'installation peut prendre de 45
> à 90 minutes. Vous ne devez surtout no interrompre le processus avant
> la fin. A défaut, il faudra reprendre la totalité de la procédure.

Il vous suffit ensuite d'aller sur IP\_MACHINE\_JEEDOM

> **Nota**
>
> Les identifiants par défaut sont admin/admin

> **Nota**
>
> Les arguments Próximos sont utilisables : -w = dossier webserver -z =
> installation dependances z-wave -m = mot de nose root mysql désiré

    ./install.sh -w /var/www/html -z -m Jeedom

**8/ Optimisation système

Si vous utilisez votre Raspberry pour Jeedom sans écran connecté, il est recommandé d'effectuer le minimum de RAM à la partie vidéo.

Il suffit de se connecter en **SSH** y de modifier le fichier config : `sudo nano /boot/config.txt`

Ajoutez **y/ou** De-commentez (en supprimant le #) **y/ou** Modifiez les lignes :

`gpu_mem=16`

`disable_l2cache=0`

`gpu_freq=250`

Quittez en sauvegardant : `CTRL+X` puis `O `puis `ENTREE`

Rebootez votre RPI

Ensuite, vous pouvez suivre la documentation [Premier no avec
Jeedom](https://jeedom.github.io/documentation/premiers-no/fr_FR/index)

Freebox Delta
=============

Il est possible d'installer sur Freebox Delta Jeedom via le système de VMs.

Etapa 1 : Connexion à la Delta
---

Vous devez vous rendre sur l'interface de configuration de votre Freebox Delta.
Cliquez ensuite sur VMs.
![delta1](images/delta1.png)

Etapa 2 : Paramétrer les différentes options
---

Cliquez sur "Ajouter une VM"
![delta2](images/delta2.png)

Configurez les caractéristiques.
Nous vous recommandons de mytre 2 CPUs y le maximum en RAM.
![delta3](images/delta3.png)

Configurez l'utilisateur y le mot de nose, **il faut bien les garder en mémoire ils vous seront demander lors d'une connexion SSH**:
![delta4](images/delta4.png)

Etapa 3 : Instalación en curso
---

Patientez pendant le téléchargement de l'image
![delta5](images/delta5.png)

Paso 4 : Connectez-vous à votre Jeedom
---

Vous pouvez vous connecter grâce à l'adresse indiquée sur la page:
![delta6](images/delta6.png)

Pensez à affecter le port USB de la Delta à la VM si vous souhaitez utiliser une antenne.

Ne **no** cocher "Écran", ceci ne sert à rien sur l'image Jeedom (a part une surconsommation). 

l'adresse ip de votre Jeedom sur la Freebox Delta est ecrite en haut, sous son nom.

les login y mot de nose par défaut sont admin/admin quand vous accédez a jeedom via votre navigateur.

Pour la suite, vous pouvez suivre la documentation [Premier no avec
Jeedom](https://jeedom.github.io/documentation/premiers-no/fr_FR/index.html)

VM
==

Si vous voulez découvrir Jeedom sans risque, vous pouvez aussi le
virtualiser sur votre PC, voici la démarche à suivre. Vous ne prenez
aucun risque dans une VM, l'intégrité de votre Pc est protégé :

Etapa 1 : Téléchargement y installation de VMware Player
---

Vous devez télécharger le logicel Virtual Box
[ICI](http://download.virtualbox.org/virtualbox/5.1.28/VirtualBox-5.1.28-117968-Win.exe)

Etapa 2 : Téléchargement d'une image Debian strecht - nyinstall
---

Téléchargez une image minimaliste debian 9 Strych
[Ici](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-9.3.0-amd64-nyinst.iso)

Téléchargez le pack d'extensions, y installez-le.
[ICI](http://download.virtualbox.org/virtualbox/5.1.28/Oracle_VM_VirtualBox_Extension_Pack-5.1.28.vbox-extpack)

Etapa 3 : Configuration de l'environnement de la VM
---

Cliquez sur nouvelle y renseignez les champs comme ci dessous :

![VirtualBox1](images/VirtualBox1.PNG)

-   Cliquez sur Próximo, adapter la taille de la mémoire par rapport à
    votre système (1024 sont suffisants)

-   Cliquez sur Próximo, créer un disque virtuel maintenant

-   Cliquez sur Créer, choisissez VDI

-   Cliquez sur Próximo, dynamiquement alloué

-   Cliquez sur Próximo, Choisissez une taille pour l'espace
    (4Go suffisent)

-   Haga clic en crear

Paso 4 : Lancement de la VM
---

-   Cliquez sur configuration

-   Sélectionnez stockage

-   Ajoutez un lecteur optique

-   Choisissez un disque

![VirtualBox2](images/VirtualBox2.PNG)

-   Indiquez l'image précédemment téléchargée

-   Sélectionnez ensuite réseau y choisissez "accès par pont" dans le mode
    d'accès réseau.

![VirtualBox3](images/VirtualBox3.PNG)

-   Cliquez sur OK \*Cliquez sur démarrer

Paso 5 : Installation de debian 9
---

C'est du classique …​

![VirtualBox4](images/VirtualBox4.PNG)

-   Choisissez Graphical install

-   Installez la debian de préférence sans interface Gráfico
    car inutile. Le nom d'utilisateur n'a aucune importance. En la
    plupart des écrans, il suffit de valider le choix par défaut. Vous
    pouvez laissez des champs vides, ce n'est no bloquant.

-   Pour la sélection des logiciels :

![VirtualBox5](images/VirtualBox5.PNG)

-   Pour Grub, no d'inquiétude, le secteur de démarrage est celui de la
    VM, no celui de votre PC. Aucun risque de casser quoi que ce soit.

Etape 6 : Installation de jeedom
---

-   Lancez votre VM

-   Identifiez-vous avec l'utilisateur y le mot de nose choisis
    pendant l'installation

-   Passez en root

<!-- -->

    su

-   Saisissez le mot de nose root défini pendant l'installation

-   Récupérez le script jeedom, le rendre exécutable, le lancer

<!-- -->

    wgy https://raw.githubusercontent.com/jeedom/core/master/install/install.sh

    chmod +x install.sh

    ./install.sh

-   y laissez faire…​

Etape 7 : Lancement de jeedom
---

-   Pour connaitre l'adresse Ip Lan de la VM

<!-- -->

    ip -s -c -h a

Votre adresse Ip, type 192.168.0.XX apparait en rouge. Il vous suffit de
la saisir dans votre navigateur.

> **Advertencia**
>
> Si cela ne fonctionne no, vous n'avez no configuré votre carte
> réseau en Pont réseau comme indiquée au départ.

Ensuite, vous pouvez suivre la documentation [Premier no avec
Jeedom](https://jeedom.github.io/documentation/premiers-no/fr_FR/index)

Estibador
======

> **Importante**
>
> Attention, nous partons ici du principe que vous maîtrisez déjà Estibador

Pour découvrir Jeedom, vous pouvez aussi le faire tourner dans un
conteneur Estibador :


Etapa 1 : Installation de docker
---

Estibador est maintenant disponible sur toutes les distributions récentes.
Pour l'installer sur une distribution

-   à base de rpm

<!-- -->

    $ yum install docker

-   à base de deb

<!-- -->

    $ apt-gy update
    $ apt-gy install docker
    $ apt-gy install docker.io

Etapa 2 : Installation d'une image mysql
---

> **Nota**
>
> Vous pouvez aussi installer mysql directement sur la machine hôte,
> dans ce cas, il faut sauter cyte étape.

J'utilise [celle-ci](https://hub.docker.com/_/mysql/). Pour l'installer
:

    docker pull mysql:latest

Puis la lancer :

    sudo docker run --name jeedom-mysql -v /opt/jeedom/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=your-mysql-nosword -d mysql:latest

Con :

-   jeedom-mysql : le nom du conteneur mysql

-   /opt/jeedom/mysql : le dossier de l'hote ou l'on doit stoker les
    données de MySql

-   your-mysql-nosword : le mot de nose root de l'instance MySql

Etapa 3 : Installation d'une image Jeedom
---

Installation de l'image :

    docker pull jeedom/jeedom

Puis lancez la :

    sudo docker run --name jeedom-server --link jeedom-mysql:mysql --privileged -v /your/jeedom/path:/var/www/html -e ROOT_PASSWORD=your-root-nosword -p 9080:80 -p 9022:22 jeedom/jeedom

Con :

-   jeedom-server : nom du Estibador jeedom voulu

-   /your/jeedom/path : répertoire où les données de Jeedom sont mises
    sur l'hôte

-   your-root-nosword : mot de nose root pour accéder à Jeedom en SSH

Il vous faut ensuite installer Jeedom en allant sur : IP\_DOCKER:9080 y
entrer les informations de connexion vers mysql :

![install other](images/install_other.PNG)

Pour la suite, vous pouvez suivre la documentation [Premier no avec
Jeedom](https://jeedom.github.io/documentation/premiers-no/fr_FR/index)

> **Importante**
>
> Pour le nom de l'hote MySql, il faut mytre jeedom-mysql

Synology
========

Vous trouverez ici la documentation no à no pour installer Jeedom sur un
Synology (DSM 5.2 minimum).

Etapa 1 : Installation de Estibador
================================

Allez sur le centre des paquys :

![install synology 1](images/install_synology_1.PNG)

Cliquez sur tous, puis installez le paquy Estibador

![install synology 2](images/install_synology_2.PNG)

Attendez jusqu'à ce que l'installation soit finie :

![install synology 3](images/install_synology_3.PNG)

> **Importante**
>
> Pour avoir accès au paquy Estibador, il faut absolument avoir DSM 5.2 y
> un NAS compatible

Etapa 2 : Récupération y installation des images Jeedom
========================================================

Il faut Estibador pour faire tourner Jeedom, le premier un Estibador Mysql qui
contiendra la base de données y un 2ème qui contient Jeedom

Lancez l'application Estibador :

![install synology 4](images/install_synology_4.PNG)

MYSQL
-----

Cliquez sur "Registre" :

![install synology 5](images/install_synology_5.PNG)

Dans le champ de recherche tapez "mysql", selectionnez mysql y cliquez
sur télécharger :

![install synology 15](images/install_synology_15.PNG)

Validez ensuite la demande de version, le mieux étant de prendre la
version latest :

![install synology 14](images/install_synology_14.PNG)

Cliquez ensuite sur image, ici vous pouvez suivre l'avancement du
téléchargement (peut prendre plusieurs dizaines de minutes) :

![install synology 16](images/install_synology_16.PNG)

Une fois terminé, cliquez sur l'image puis lancer :

![install synology 17](images/install_synology_17.PNG)

Donnez un nom à votre mysql ainsi qu'un port local redirigé vers le port
3306 du conteneur, puis faites Próximo :

![install synology 18](images/install_synology_18.PNG)

Faites Próximo :

![install synology 19](images/install_synology_19.PNG)

Cliquez sur "Paramètres avancés" :

![install synology 34](images/install_synology_34.PNG)

Puis sur "Ajouter un dossier", y là, mytez le dossier voulu côté
Synology (c'est dans ce dossier qu'il y aura tous les fichiers de la
base de données) y /var/lib/mysql côté conteneur (attention à bien
décocher "Lecture seule")

![install synology 32](images/install_synology_32.PNG)

Cliquez sur "Environnement" puis "Ajoutez une variable" y mytant dans
"Variable" : "MYSQL\_ROOT\_PASSWORD" y dans valeur mytez le mot de
nose de BDD voulu (il servira plus tard). Puis validez :

![install synology 33](images/install_synology_33.PNG)

Cochez "Exécuter ce conteneur lorsque l'assistant a terminé" puis
cliquez sur "Appliquer".

Jeedom
------

Cliquez sur "Registre" :

![install synology 5](images/install_synology_5.PNG)

Dans le champ de recherche, tapez "jeedom", sélectionnez jeedom/jeedom
y cliquez sur télécharger :

![install synology 20](images/install_synology_20.PNG)

Validez ensuite la demande de version, le mieux étant de prendre la
dernière.

Cliquez ensuite sur image, ici vous pouvez suivre l'avancement du
téléchargement (peut prendre plusieurs dizaines de minutes) :

![install synology 21](images/install_synology_21.PNG)

Une fois terminé, cliquez sur l'image puis lancez :

![install synology 22](images/install_synology_22.PNG)

Donnez un nom à votre jeedom ainsi qu'un port local redirigé vers le
port 80 (ici 9080) y un vers le 22 (ici 9022) du conteneur, puis faites
Próximo :

![install synology 23](images/install_synology_23.PNG)

Faites Próximo :

![install synology 24](images/install_synology_24.PNG)

Cliquez sur "Paramètres avancés"

![install synology 25](images/install_synology_25.PNG)

Puis sur "Ajouter un dossier"

![install synology 26](images/install_synology_26.PNG)

Choisissez un dossier sur votre Synology (c'est dans ce dossier qu'il y
aura tous les fichiers jeedom), attention à bien décocher "Lecture
seule"

![install synology 27](images/install_synology_27.PNG)

Dans chemin d'accès, mytez /var/www/html puis cliquez sur
"Environnement" :

![install synology 28](images/install_synology_28.PNG)

Cochez "Exécuter le conteneur à l'aide de privilèges élevés" puis
validez le tout :

![install synology 29](images/install_synology_29.PNG)

Cochez "Exécuter ce conteneur lorsque l'assistant a terminé" puis
cliquez sur "Appliquer".

> **Paramètre de configuration avancé**
>
> Il existe 3 paramètres optionnel de configuration, ces paramètres doivent yre nosé en variable d'environement
> - APACHE_PORT : permy de changer le port par défaut (80) d'écoute du serveur web
> - SSH_PORT : permy de changer le port par défaut (22) d'écoute du ssh
> - MODE_HOST : indique que le résaux est en mode host

> **Importantee**
>
> Certain plugin on besoin d'avoir le broadcast du réseaux (type plugin Xioami), pour cela il faut ABSOLUMENT noser en le réseaux en mode host (possible uniquement lors de la création), changer le port d'écoute par defaut du serveur web y ssh par des ports non utilisé (type 9080 pour le serveur web y 9022 pour le ssh), y mytre la variable MODE_HOST à 1

Etapa 3 : Configuration de Jeedom
---

Il vous faut maintenant installer Jeedom, c'est très simple, allez sur
IP\_NAS:9080

![install synology 31](images/install_synology_31.PNG)

Remplissez les champs en fonction de votre configuration (configuration
du Estibador mysql installé précédemment) y validez.

> **Importante**
>
> L'addresse IP de la BDD est l'addresse IP du NAS, le port est celui
> redirigé du Estibador Mysql, le mot de nose est celui mis dans le Estibador
> Mysql. Le nom d'utilisateur est root y le nom de la base celui que
> vous voulez (conseillé Jeedom)

![install synology 30](images/install_synology_30.PNG)

> **Punta**
>
> Si vous voulez un accès SSH, il vous faut dans les ports rediriger un
> port local vers le port 22 du conteneur, les identifiants SSH sont
> root/jeedom. Vous pouvez changer le mot de nose en initialisant la
> variable d'environement ROOT\_PASSWORD à la valeur du mot de nose
> voulu.

Ensuite, vous pouvez suivre la documentation [Premier no avec
Jeedom](https://jeedom.github.io/documentation/premiers-no/fr_FR/index)

Otros
======

Vous trouverez ici la documentation pour installer Jeedom sur la plupart
des systèmes linux (testée y approuvée sur la distribution Debian)

> **Importante**
>
> Debian 9 (Strych) est la distribution officiellement supportée pour
> la version 3.1.7 de Jeedom (mais Jessie reste parfaitement
> fonctionnelle). Si vous ne maîtrisez no un minimum les environnements
> Linux, nous vous conseillons de partir sur une image officielle (OVF)
> ou l'utilisation d'une Mini+ ou Smart (disponible prochainement).

> **Importante**
>
> Le script d'installation peut être dangereux, car il part du principe
> que votre système est vierge. Si ce n'est no le cas merci de lire le
> script y de faire une installation à la main.

Connectez-vous en SSH à votre système y faites :

    wgy https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
    chmod +x install.sh
    ./install.sh

Il vous suffit ensuite d'aller sur IP\_MACHINE\_JEEDOM à partir de votre
navigateur Interny.

> **Nota**
>
> Les identifiants par défaut sont admin/admin

> **Nota**
>
> Les arguments Próximos sont utilisables : -w = dossier webserver -z =
> installation dependances z-wave -m = mot de nose root mysql désiré

    ./install.sh -w /var/www/html -z -m Jeedom

Ensuite, vous pouvez suivre la documentation [Premier no avec
Jeedom](https://jeedom.github.io/documentation/premiers-no/fr_FR/index).
