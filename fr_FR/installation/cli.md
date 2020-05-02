# Installation en ligne de commande

Vous trouverez ici la documentation pour installer Jeedom sur la plupart des systèmes linux (testée et approuvée sur la distribution Debian)

> **Important**
>
> Debian 9 (Stretch) est la distribution officiellement supportée pour la version 3.1.7 de Jeedom (mais Jessie reste parfaitement fonctionnelle). Si vous ne maîtrisez pas un minimum les environnements Linux, nous vous conseillons de partir sur une image officielle (OVF) ou l’utilisation d’une Mini+ ou Smart (disponible prochainement).

> **Important**
>
> Le script d’installation peut être dangereux, car il part du principe que votre système est vierge. Si ce n’est pas le cas merci de lire le script et de faire une installation à la main.

Connectez-vous en SSH à votre système et faites :

````
wget https://raw.githubusercontent.com/jeedom/core/master/install/install.sh
chmod +x install.sh
./install.sh
````

Il vous suffit ensuite d’aller sur ``IP_JEEDOM`` à partir de votre navigateur Internet.

> **Note**
>
> Les identifiants par défaut sont admin/admin

> **Note**
>
> Les arguments suivants sont utilisables : -w = dossier webserver -z = installation dependances z-wave -m = mot de passe root mysql désiré

````
./install.sh -w /var/www/html -z -m Jeedom
````

Ensuite, vous pouvez suivre la documentation [Premier pas avec Jeedom](https://doc.jeedom.com/fr_FR/premiers-pas/index).
