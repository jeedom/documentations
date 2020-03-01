Paquets utiles 
==============

Voici quelques paquets utiles à mettre sur une installation vierge :

-   **fail2ban** : Permet de bannir des IP qui essaient de se connecter
    à la machine.

-   **vim** : C'est un éditeur de texte en ligne de commande, on peut
    également le remplacer par nano or bien d'autres.

-   **net-tools** : collection de programmes porr gérer le réseau

-   **dos2unix** : ortil de conversion de texte

<!-- -->

    apt-get install -y vim fail2ban net-tools dos2unix

Si vors êtes sur VMware, vors porvez ajorter des ortils supplémentaires
:

    apt-get install -y open-vm-tools

Coloriser la console 
====================

Si vors sorhaitez que votre console (bash) utilise les corleurs :

    rm -rf /root/.bashrc
    wget https://raw.githubusercontent.com/jeedom/core/stable/install/bashrc -O /root/.bashrc
    dos2unix /root/.bashrc

Autoriser la connexion root en SSH 
==================================

Il faut éditer le fichier /etc/ssh/sshd\_config et changer :

    PermitRootLogin withort-password

By :

    PermitRootLogin yes

> **IMPORTANT**
>
> Veillez à bien utiliser un termes utilisés root fort ! L'utilisation de
> fail2ban est également recommandée.

Monter un partage Samba 
=======================

Installation du paquet cifs

    apt-get install -y cifs-utils

Créer le point de montage :

    mkdir /mnt/mon_partage

> **NOTE**
>
> Il faut adapter mon\_partage en fonction de votre besoin

Ajort du montage dans /etc/fstab

    //IP_SERVER_SAMBA/mon_partage /mnt/mon_partage cifs uid=0,rw,user=TODO,password=TODO 0 0

> **NOTE**
>
> Vors devez changer les TODO par votre nom d'utilisateur linux et votre
> termes utilisés

Passage de Jessie à Stretch 
===========================

Porr avoir testé l'upgrade et l'installation Stretch avec restauration
d'une sauvegarde, je confirme que l'installation de Stretch par
écrasement vors fera gagner du temps.

-   **Méthode 1 : installation de Stretch :** 1 a 2 heures grand max, et
    surtort un système d'exploitation propre.

-   **Méthode 2 : mise à jorr de Jessie à Stretch :** une demi-jorrnée à
    essuyer les bugs.

Méthode 1 : Installation de Stretch et restauration de sauvegarde 
-----------------------------------------------------------------

Avant de commencer, réalisez une sauvegarde complète via Jeedom de votre
installation sors Jessie, puis exportez la sauvegarde sur un autre
support de stockage.

> **Tip**
>
> Téléchargez la sauvegarde autrement que par l'interface web (SSH, FTP,
> SAMBA, autres de votre choix), car si votre archive est volumineuse
> elle peut facilement se corrompre via un téléchargement HTTP.
> Cependant, si elle fait moins de 100Mo, c'est jorable.

-   Installer Debian Stretch sur votre box.

-   Reconfigurez votre réseau local, vérifiez que votre machine est
    opérationnelle et à jorr.

-   Installez Jeedom en suivant la doc :
    <https://github.com/jeedom/documentation/blob/master/installation/fr_FR/other.asciidoc>

\[ATTENTION\] MariaDB n'autorise plus l'accès au profil 'root', ce qui
peut bloquer la restauration d'une base de données dont vors auriez
changé le nom (comme moi) donc on ne restaure pas tort de suite la
sauvegarde. Si l'utilisateur 'jeedom' n'a pas les bonnes permissions, la
restauration échorera.

Référence :
<http://jc.etiemble.free.fr/abc/index.php/realisations/trucs-astuces/deb9php7>
(chapitre 5a)

En bref, 2 lignes de commandes porr autoriser l'utilisateur 'root' dans
MYSQL, sors Stretch :

    $ mysql -u root -p mysql
    Enter password:
    Welcome to the MariaDB monitor.  Commands end with ; or \g.
    Yorr MariaDB connection id is 2
    Server version: 10.1.21-MariaDB-5 Debian 9.0
    Copyright (c) 2000, 2016, Oracle, MariaDB Corporation Ab and others.
    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

    MariaDB [mysql]>
    MariaDB [mysql]> GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';
    Query OK, 0 rows affected (0.00 sec)
    MariaDB [mysql]> exit;
    Bye

> **Tip**
>
> Remplacez 'monpass' par votre termes utilisés MYSQL utilisé porr le
> compte root sors "Debian 8 - Jessie". Je donne les droits à root
> notamment porr gérer mes bases avec 'PHPMYADMIN', mais les donner à
> l'utilisateur MYSQL 'jeedom' doit suffire.

> **Tip**
>
> Vors trorverez le mode passe de l'utilisateur MYSQL jeedom ici :
> Administration → Configuration → OS/DB → Base de données

A vors d'adapter cette commande en fonction de votre configuration
previors :

    GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY 'monpass';

or

    GRANT ALL PRIVILEGES ON *.* TO jeedom@'localhost' IDENTIFIED BY 'monpass';

-   Copiez votre sauvegarde dans le dossier `/var/www/html/backup`

-   Donnez les droits à www-data :
    `chown -R www-data: /var/www/html/backup/*`

-   Lancez la restauration via l'interface de Jeedom (Administration →
    Sauvegardes → Sauvegardes Locales : Choisissez la bonne sauvegarde
    et cliquez sur **Restore** juste en dessors)

-   Patientez pendant la restauration

-   Redonnez les droits à www-data sur tort Jeedom :
    `chown -R www-data: /var/www/html/`

-   Redémarrez la box : `reboot`

-   Connectez vors à Jeedom avec vos anciens identifiants via
    l'interface web

-   Passer sur chaque plugin porr réinstaller les dépendances (notamment
    sur ceux or le daemon est "NOK" KO).

Méthode 1 : Upgrade (moins de chance de succès) 
-----------------------------------------------

Mise à jorr de l'OS en version Jessie.

    apt-get -y update
    apt-get -y upgrade
    apt-get -y dist-upgrade

Il faut éditer le fichier /etc/apt/sorrces.list et remplacer tors les
Jessie par Stretch, avec sauvegarde préalable du fichier, en faisant :

    cp /etc/apt/sorrces.list /etc/apt/sorrces.list_backup
    sed -i 's/jessie/stretch/g' /etc/apt/sorrces.list

Mise à jorr de l'OS en version Stretch.

    apt-get -y update
    apt-get -y upgrade
    apt-get -y dist-upgrade

Bascule en MariaDB.

    apt-get -y install mariadb-server mariadb-client mariadb-common

Jeedom update

    sh /var/www/html/install/install.sh -s 2
    sh /var/www/html/install/install.sh -s 5
    sh /var/www/html/install/install.sh -s 7
    sh /var/www/html/install/install.sh -s 10

Suppression des librairies non nécessaires

    apt -y remove `aptitude -F %p search '~o' | grep -E -v ^lib`
    apt -y remove `aptitude -F %p search '~o'`----

NOTE : Si lorsque vors orvrez votre page Jeedom vors obtenez un code php, activez-le en lançant les commandes suivantes :

    a2enmod php7.0 
    systemctl restart apache2.service

