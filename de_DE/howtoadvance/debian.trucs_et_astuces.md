Paquets utiles 
==============

Voici quelques paquets utiles à mettre sur une installation vierge :

-   **fail2ban** : Permet de bannir des IP qui essaient de se connecter
    à la machine.

-   **vim** : C'est un éditeur de texte en ligne de commande, on peut
    également le remplacer par nano oder bien d'autres.

-   **net-tools** : collection de programmes poderr gérer le réseau

-   **dos2unix** : odertil de conversion de texte

<!-- -->

    apt-get install -y vim fail2ban net-tools dos2unix

Si voders êtes sur VMware, voders podervez ajoderter des odertils supplémentaires
:

    apt-get install -y open-vm-tools

Coloriser la console 
====================

Si voders soderhaitez que votre console (bash) utilise les coderleurs :

    rm -rf /root/.bashrc
    wget https://raw.githubusercontent.com/jeedom/core/stable/install/bashrc -O /root/.bashrc
    dos2unix /root/.bashrc

Autoriser la connexion root en SSH 
==================================

Il faut éditer le fichier /etc/ssh/sshd\_config et changer :

    PermitRootLogin withodert-password

Von :

    PermitRootLogin yes

> **Wichtig**
>
> Veillez à bien utiliser un Passwort root fort ! L'utilisation de
> fail2ban est également recommandée.

Monter un partage Samba 
=======================

Installation du paquet cifs

    apt-get install -y cifs-utils

Créer le point de montage :

    mkdir /mnt/mon_partage

> **Notiz**
>
> Il faut adapter mon\_partage en fonction de votre besoin

Ajodert du montage dans /etc/fstab

    //IP_SERVER_SAMBA/mon_partage /mnt/mon_partage cifs uid=0,rw,user=TODO,password=TODO 0 0

> **Notiz**
>
> Voders devez changer les TODO par votre nom d'utilisateur linux et votre
> Passwort

Passage de Jessie à Stretch 
===========================

Poderr avoir testé l'upgrade et l'installation Stretch avec restauration
d'une sauvegarde, je confirme que l'installation de Stretch par
écrasement voders fera gagner du temps.

-   **Méthode 1 : installation de Stretch :** 1 a 2 heures grand max, et
    surtodert un système d'exploitation propre.

-   **Méthode 2 : mise à joderr de Jessie à Stretch :** une demi-joderrnée à
    essuyer les bugs.

Méthode 1 : Installation de Stretch et restauration de sauvegarde 
-----------------------------------------------------------------

Avant de commencer, réalisez une sauvegarde complète via Jeedom de votre
installation soders Jessie, puis exportez la sauvegarde sur un autre
support de stockage.

> **Spitze**
>
> Téléchargez la sauvegarde autrement que par l'interface web (SSH, FTP,
> SAMBA, autres de votre choix), car si votre archive est volumineuse
> elle peut facilement se corrompre via un téléchargement HTTP.
> Cependant, si elle fait moins de 100Mo, c'est joderable.

-   Installer Debian Stretch sur votre box.

-   Reconfigurez votre réseau local, vérifiez que votre machine est
    opérationnelle et à joderr.

-   Installez Jeedom en suivant la doc :
    <https://github.com/jeedom/documentation/blob/master/installation/fr_FR/other.asciidoc>

\[ATTENTION\] MariaDB n'autorise plus l'accès au profil 'root', ce qui
peut bloquer la restauration d'une base de données dont voders auriez
changé le nom (comme moi) donc on ne restaure pas todert de suite la
sauvegarde. Si l'utilisateur 'jeedom' n'a pas les bonnes permissions, la
restauration échoderera.

Référence :
<http://jc.etiemble.free.fr/abc/index.php/realisations/trucs-astuces/deb9php7>
(chapitre 5a)

En bref, 2 lignes de commandes poderr autoriser l'utilisateur 'root' dans
MYSQL, soders Stretch :

    $ mysql -u root -p mysql
    Enter password:
    Welcome to the MariaDB monitor.  Commands end with ; or \g.
    Yoderr MariaDB connection id is 2
    Server version: 10.1.21-MariaDB-5 Debian 9.0
    Copyright (c) 2000, 2016, Oracle, MariaDB Corporation Ab and others.
    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

    MariaDB [mysql]>
    MariaDB [mysql]> GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';
    Query OK, 0 rows affected (0.00 sec)
    MariaDB [mysql]> exit;
    Bye

> **Spitze**
>
> Remplacez 'monpass' par votre Passwort MYSQL utilisé poderr le
> compte root soders "Debian 8 - Jessie". Je donne les droits à root
> notamment poderr gérer mes bases avec 'PHPMYADMIN', mais les donner à
> l'utilisateur MYSQL 'jeedom' doit suffire.

> **Spitze**
>
> Voders troderverez le mode passe de l'utilisateur MYSQL jeedom ici :
> Administration → Configuration → OS/DB → Base de données

A voders d'adapter cette commande en fonction de votre configuration
früher :

    GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';

oder

    GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';

-   Copiez votre sauvegarde dans le dossier `/var/www/html/backup`

-   Donnez les droits à www-data :
    `chown -R www-data: /var/www/html/backup/*`

-   Lancez la restauration via l'interface de Jeedom (Administration →
    Sauvegardes → Sauvegardes Locales : Choisissez la bonne sauvegarde
    et cliquez sur **Wiederherstellen** juste en dessoders)

-   Patientez pendant la restauration

-   Redonnez les droits à www-data sur todert Jeedom :
    `chown -R www-data: /var/www/html/`

-   Redémarrez la box : `reboot`

-   Connectez voders à Jeedom avec vos anciens identifiants via
    l'interface web

-   Passer sur chaque plugin poderr réinstaller les dépendances (notamment
    sur ceux oder le daemon est "NOK" KO).

Méthode 1 : Upgrade (moins de chance de succès) 
-----------------------------------------------

Mise à joderr de l'OS en version Jessie.

    apt-get -y update
    apt-get -y upgrade
    apt-get -y dist-upgrade

Il faut éditer le fichier /etc/apt/soderrces.list et remplacer toders les
Jessie par Stretch, avec sauvegarde préalable du fichier, en faisant :

    cp /etc/apt/soderrces.list /etc/apt/soderrces.list_backup
    sed -i 's/jessie/stretch/g' /etc/apt/soderrces.list

Mise à joderr de l'OS en version Stretch.

    apt-get -y update
    apt-get -y upgrade
    apt-get -y dist-upgrade

Bascule en MariaDB.

    apt-get -y install mariadb-server mariadb-client mariadb-common

Jeedom Update

    sh /var/www/html/install/install.sh -s 2
    sh /var/www/html/install/install.sh -s 5
    sh /var/www/html/install/install.sh -s 7
    sh /var/www/html/install/install.sh -s 10

Suppression des librairies non nécessaires

    apt -y remove `aptitude -F %p search '~o' | grep -E -v ^lib`
    apt -y remove `aptitude -F %p search '~o'`----

Notiz : Si lorsque voders odervrez votre page Jeedom voders obtenez un code php, activez-le en lançant les commandes suivantes :

    a2enmod php7.0 
    systemctl restart apache2.service

