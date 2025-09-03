# Utilisation EmonCMS

EmonCMS est une application PHP de supervision de l’énergie (Emon : Energy Monitor)

Pour ce qui concerne le partage de données entre Jeedom et EmonCMS (dans un sens ou l’autre), vous trouverez dans cette documentation les moyens de la mettre en oeuvre.

Un bref mémo pour installer emoncms est également proposé (cette installation n’est actuellement pas proposé en natif dans Jeedom)

EmonCMS peut être installé à côté de Jeedom ou ailleurs. Vous pouvez meme utiliser l’instance emoncms.org

# Envoyer une valeur de Jeedom vers EmonCMS

Pour envoyer une valeur de Jeedom à EmonCMS, la solution la plus simple puisqu’elle est disponible nativement est d’utiliser l’URL de Push d’une information

Dans Jeedom, on peut accéder aux paramètres avancés en cliquant sur la roue crantée sur la droite.

Ensuite dans "Configuration avancée", on trouve le dernier paramètre Push URL, il faut le remplir avec l’adresse d’API EmonCMS pour la feed qu’on veut remplir

L’url de push est de la forme :

``https://serveur/emoncms/input/post.json?json={power:\#value\#}&apikey=xxx``

Avec les paramètres :

-   id : l’id de la feed qu’on trouve sur emoncms
-   apikey : la clef api de read&write pour emoncms
-   value : il faut bien laisser *value* pour que Jeedom envoie la valeur de l’info
-   power : c’est à modifier pour

# Notification vers Jeedom ou récupération depuis Jeedom

Pour prendre une donnée de emoncms dans Jeedom, il y a deux possibilités :

-   La première est de créer une info via le plugin script dans Jeedom et d’utiliser l’URL API de la feed. Cette méthode oblige à récupérer la valeur régulièrement ou via scénario par exemple et normalement non utile car les données ont leur source dans ``jeedom_setting`` : ``https://serveur/emoncms/feed/value.json?id=1&apikey=xxx``
-   La deuxième possibilité est d’utiliser le plugin Event d’emoncms pour déclencher une action sur certaines conditions. Cette méthode pourrait être utile si on a une donnée qui est calculée ou directement récupérée par emoncms (par exemple OpenBEM) Avec l’avantage de ne notifier qu’en cas de besoin, par contre le plugin event ne permet pas de faire de push et il faudra passer par MQTT pour la connexion Jeedom

# Mémo pour l’installation EmonCMS

L’installation est décrite sur cette page github [ici](https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall)

A noter que certains plugins semblent obsolètes avec la dernière version EmonCMS (v9 à fin 2015)

Si on les installe, il y a des problèmes avec les menus. De toute façon, on a besoin à priori uniquement de :

````
git clone https://github.com/emoncms/event.git # C’est lui qui pourra permettre de créer des réactions sur évènement dans emoncms pour notifier Jeedom
git clone https://github.com/emoncms/openbem.git # C’est un plugin pour faire un suivi des consommations énergétiques de la maison
git clone https://github.com/emoncms/energy.git
git clone https://github.com/emoncms/report.git
git clone https://github.com/elyobelyob/mqtt.git
````

# Configuration Nginx

Voici une configuration en exemple pour Nginx. Pour Apache il n’y a pas besoin de conf particulière un répertoire classique

````
location /emoncms {
       alias /var/www/emoncms/;
       index index.php;
        try_files = $uri $uri/ @missing;

   location ~ [^/]\.php(/|$) {
           fastcgi_split_path_info ^(.+?\.php)(/.*)$;
           fastcgi_pass unix:/var/run/php5-fpm.sock;
           fastcgi_index index.php;
           include fastcgi_params;
           fastcgi_param   REMOTE_USER   $remote_user;
           fastcgi_param  PATH_INFO $fastcgi_path_info;
           fastcgi_param SCRIPT_FILENAME /var/www/emoncms/index.php;
       }

}

location @missing {
        rewrite ^/emoncms/(.*)$ /emoncms/index.php?q=$1&$args last;
}
````
