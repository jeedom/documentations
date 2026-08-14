# Uso de EmonCMS

EmonCMS es una aplicación PHP para la supervisión del consumo energético (Emon: Energy Monitor)

En cuanto al intercambio de datos entre Jeedom y EmonCMS (en cualquier sentido), en esta documentación encontrarás cómo llevarlo a cabo.

También se ofrece una breve guía para instalar emoncms (esta instalación no está disponible de forma nativa en Jeedom por el momento).

EmonCMS se puede instalar junto con Jeedom o en cualquier otro lugar. Incluso puedes utilizar la instancia de emoncms.org

# Enviar un valor desde Jeedom a EmonCMS

Para enviar un valor de Jeedom a EmonCMS, la solución más sencilla, ya que está disponible de forma nativa, es utilizar la URL de Push de una información

En Jeedom, se puede acceder a los ajustes avanzados haciendo clic en la rueda dentada situada a la derecha.

A continuación, en «Configuración avanzada», se encuentra el último parámetro, «Push URL»; hay que rellenarlo con la dirección de la API de EmonCMS correspondiente al feed que se quiera completar.

La URL de push tiene el siguiente formato:

``https://serveur/emoncms/input/post.json?json={power:\#value\#}&apikey=xxx``

Con los siguientes parámetros:

-   id: el identificador del feed que se encuentra en emoncms
-   apikey: la clave API de Read&Write para eMoncms
-   valor: hay que dejar *valor* para que Jeedom envíe el valor de la información
-   potencia: hay que cambiarlo por

# Notificación a Jeedom o recuperación desde Jeedom

Para importar datos de emoncms a Jeedom, hay dos posibilidades:

-   La primera consiste en crear una noticia mediante el plugin de script en Jeedom y utilizar la URL de la API del feed. Este método obliga a recuperar el valor periódicamente o mediante un escenario, por ejemplo, y normalmente no resulta útil, ya que los datos proceden de ``jeedom_setting`` : ``https://serveur/emoncms/feed/value.json?id=1&apikey=xxx``
-   La segunda opción es utilizar el plugin Event de emoncms para activar una acción en determinadas condiciones. Este método podría resultar útil si se dispone de un dato que emoncms calcula o recupera directamente (por ejemplo, OpenBEM). La ventaja es que solo se envía una notificación cuando es necesario; sin embargo, el plugin Event no permite realizar notificaciones push, por lo que habrá que utilizar MQTT para la conexión con Jeedom.

# Guía para la instalación de EmonCMS

La instalación se describe en esta página de GitHub [aquí](https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md)

Cabe señalar que algunos complementos parecen estar obsoletos con la última versión de EmonCMS (v9 a finales de 2015).

Si los instalamos, surgen problemas con los menús. En cualquier caso, a priori solo necesitamos:

````
git clone https://github.com/emoncms/event.git # C’est lui qui pourra permettre de créer des réactions sur évènement dans emoncms pour notifier Jeedom
git clone https://github.com/emoncms/openbem.git # C’est un plugin pour faire un suivi des consommations énergétiques de la maison
git clone https://github.com/emoncms/energy.git
git clone https://github.com/emoncms/report.git
git clone https://github.com/elyobelyob/mqtt.git
````

# Configuración de Nginx

A continuación se muestra una configuración de ejemplo para Nginx. Para Apache no es necesaria ninguna configuración especial, basta con un directorio estándar.

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
