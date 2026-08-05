# Usando emoncms

EmonCMS es una aplicación de monitoreo de energía PHP (Emon : Monitor de energía)

Con respecto al intercambio de datos entre Jeedom y EmonCMS (de una forma u otra), encontrará en esta documentación los medios para implementarlo.

También está disponible una breve nota para instalar emoncms (esta instalación actualmente no se ofrece de forma nativa en Jeedom)

EmonCMS se puede instalar junto a Jeedom o en otro lugar. Incluso puedes usar la instancia emoncms.org

# Enviar un valor de Jeedom a EmonCMS

Para enviar un valor de Jeedom a EmonCMS, la solución más simple ya que está disponible de forma nativa es usar la URL Push de una información

En Jeedom, puede acceder a los parámetros avanzados haciendo clic en la rueda dentada a la derecha.

Luego, en "Configuración avanzada", encontramos el último parámetro Push URL, debe completarse con la dirección de API EmonCMS para el feed que queremos llenar

La url de empuje es de la forma :

``https://serveur/emoncms/input/post.json?json={power:\#value\#}&apikey=xxx``

Con parámetros :

-   Identificación : la identificación del feed que se encuentra en emoncms
-   apikey : La clave de API de lectura y escritura para emoncms
-   valor : debemos irnos *valor* para que Jeedom envíe el valor de la información
-   poder : modificar para

# Notificación a Jeedom o recuperación de Jeedom

Para tomar datos de emoncms en Jeedom, hay dos posibilidades :

-   El primero es crear una información a través del complemento de script en Jeedom y usar la URL de API del feed. Este método requiere recuperar el valor regularmente o mediante un escenario, por ejemplo, y normalmente no es útil porque los datos tienen su origen en ``jeedom_setting`` : ``https://serveur/emoncms/feed/value.json?id=1&apikey=xxx``
-   La segunda posibilidad es usar el complemento Evento emoncms para activar una acción en ciertas condiciones. Este método podría ser útil si tenemos datos calculados o recuperados directamente por emoncms (por ejemplo, OpenBEM). Con la ventaja de notificar solo cuando sea necesario, por otro lado, el complemento de eventos no permite presionar y Tendrá que pasar por MQTT para la conexión Jeedom

# Memo para la instalación de EmonCMS

La instalación se describe en esta página de github [aquí](https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md)

Tenga en cuenta que algunos complementos parecen obsoletos con la última versión de EmonCMS (v9 a finales de 2015)

Si los instalamos, hay problemas con los menús. De todos modos, solo necesitamos a priori :

````
git clone https://github.com/emoncms/event.git # C'est lui qui pourra permettre de créer des réactions sur évènement dans emoncms pour notifier Jeedom
git clone https://github.com/emoncms/openbem.git # C'est un plugin pour faire un suivi des consommations énergétiques de la maison
git clone https://github.com/emoncms/energy.git
git clone https://github.com/emoncms/report.git
git clone https://github.com/elyobelyob/mqtt.git
````

# Configuración de Nginx

Aquí hay un ejemplo de configuración para Nginx. Para Apache no hay necesidad de un directorio conf clásico específico

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
