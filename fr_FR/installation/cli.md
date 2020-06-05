# Installation en ligne de commande

# Installation automatique

Vous pouvez directement installer l'OS et Jeedom en meme temps tout automatiquent en partant de l'iso disponible [ici](https://images.jeedom.com/x86-64/). Vous avez juste ensuite à faire "Install on disk" (touche entrée), puis "yes" (flèche bas puis entrée). Toute la suite va se faire automatiquement (10 à 30min), puis une fois la vm redemarré attendant 5min et vous devriez avoir accès à Jeedom en mettant simplement l'ip de jeedom dans un navigateur.

# Installation manuel

Vous trouverez ici la documentation pour installer Jeedom sur Debian

> **Important**
>
> Debian 10 (Buster) est la distribution officiellement supportée pour la version 3.3.X ou plus de Jeedom (mais Stretch reste parfaitement fonctionnelle). Si vous ne maîtrisez pas un minimum les environnements Linux, nous vous conseillons de partir une Smart.

> **Important**
>
> Le script d’installation peut être dangereux, car il part du principe que votre système est vierge. Si ce n’est pas le cas merci de lire le script et de faire une installation à la main.

>**TIPS**
>
>Pour connaitre l'ip de la vm (une fois connecté dessus, les identifiants s'affichent sur l'écran de connexion) faite ``ip -s -c -h a``

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
