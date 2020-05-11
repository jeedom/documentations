EmonCMS es una aplicación de monitoreo de energía PHP (Emon :
Monitor de energía)

Con respecto al intercambio de datos entre Jeedom y EmonCMS (en
de una forma u otra), encontrará en esta documentación los medios
para implementarlo.

También hay disponible una breve nota para instalar emoncms (esto
la instalación no se ofrece actualmente de forma nativa en Jeedom)

EmonCMS se puede instalar junto a Jeedom o en otro lugar. Usted puede
incluso use la instancia emoncms.org

Enviar un valor de Jeedom a EmonCMS 
=========================================

Para enviar un valor de Jeedom a EmonCMS, la solución más simple
ya que está disponible de forma nativa es usar la URL Push de un
information

En Jeedom, puede acceder a la configuración avanzada haciendo clic en el
rueda dentada a la derecha.

Luego, en "Configuración avanzada", encontramos el último parámetro
Push URL, debe completarse con la dirección de la API de EmonCMS para el feed
queremos llenar

La url de empuje es de la forma :

[https://serveur/emoncms/input/post.json?json = {poder:\#value\#}&apikey=xxx](https://serveur/emoncms/input/post.json?json = {poder:#value#}& apikey = xxx)

Con parámetros :

-   Identificación: la identificación del feed que se encuentra en emoncms

-   apikey: La clave de API de lectura y escritura para emoncms

-   valor: debemos irnos *value* para que Jeedom envíe el
    valor de la información

-   poder: modificar para

Notificación a Jeedom o recuperación de Jeedom 
======================================================

Para tomar datos de emoncms en Jeedom, hay dos posibilidades
:

-   El primero es crear una información a través del complemento de script en Jeedom
    y use la URL de API del feed. Este método requiere recuperación
    el valor regularmente o por escenario, por ejemplo y normalmente
    no es útil porque los datos tienen su fuente en jeedom\_setting

        https://serveur/emoncms/feed/value.json?id=1&apikey=xxx

-   La segunda posibilidad es usar el complemento Evento emoncms
    para desencadenar una acción en ciertas condiciones. Este metodo
    podría ser útil si tenemos datos calculados o
    recuperado directamente por emoncms (por ejemplo OpenBEM) con
    la ventaja de notificar solo cuando sea necesario, sin embargo, el complemento
    el evento no le permite presionar y tendrá que pasar por MQTT
    para conexión Jeedom

Memo para la instalación de EmonCMS 
================================

La instalación se describe en esta página de github :

<https://github.com/emoncms/emoncms/blob/master/docs/LinuxInstall.md>

Tenga en cuenta que algunos complementos parecen obsoletos con la última versión
EmonCMS (v9 a finales de 2015)

Si los instalamos, hay problemas con los menús. De todas formas,
solo necesitamos a priori :

git clone <https://github.com/emoncms/event.git> (Él es quien puede
permitir crear reacciones en evento en emoncms para
notificar a Jeedom)

git clone <https://github.com/emoncms/openbem.git> (Este es un complemento para
controlar el consumo de energía de la casa)

git clone <https://github.com/emoncms/energy.git>

git clone <https://github.com/emoncms/report.git>

git clone <https://github.com/elyobelyob/mqtt.git>

Configuración de Nginx 
===================

Aquí hay un ejemplo de configuración para Nginx. Para Apache no hay
conf especial necesita un repertorio clásico

    ubicación / emoncms {
           alias / var / www / emoncms /;
           index index.php;
            try_files = $ uri $ uri / @missing;

       ubicación ~ [^ /] \.php(/|$) {
               fastcgi_split_path_info ^ (. +?\.php)(/.*)$;
               fastcgi_pass unix:/var/run/php5-fpm.sock;
               fastcgi_index index.php;
               incluir fastcgi_params;
               fastcgi_param REMOTE_USER $ remote_user;
               fastcgi_param PATH_INFO $ fastcgi_path_info;
               fastcgi_param SCRIPT_FILENAME /var/www/emoncms/index.php;
           }

    }

    ubicación @missing {
            reescribir ^ / emoncms / (.*) $ /emoncms/index.php?q = $ 1 y $ args últimos;
    }
