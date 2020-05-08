Veremos aquí cómo actualizar manualmente en
Jeedom, a través de la consola SSH.

Prerrequisitos 
=========

-   saber cómo conectarse en SSH a Jeedom

-   Conozca los identificadores SSH (consulte la documentación de instalación)

-   tener acceso a Internet desde el cuadro Jeedom

> **Important**
>
> Recuerde hacer y exportar una copia de seguridad antes de cualquier actualización
> manual.

Descargar y descomprimir 
===============================

En SSH, haz :

    sudo su -
    cd / root
    wget https://github.com/jeedom/core/archive/master.zip
    descomprimir master.zip
    cp -R core-master / * / var / www / html
    cp -R core-master /.[^.]* / var / www / html

Actualización 
===========

Todavía en SSH:

    sudo su -
    php / var / www / html / install / update.modo php = fuerza
    chmod 775 -R / var / www / html
    www-data chown:www-data -R / var / www / html

> **Important**
>
> Si su instalación de Jeedom es un poco vieja, es necesario reemplazar
> todos / var / www / html por / usr / share / nginx / www / jeedom
