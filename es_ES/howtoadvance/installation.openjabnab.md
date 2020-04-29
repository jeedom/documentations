Aquí hay un tutorial sobre cómo instalar openjabnab localmente (en un rpi o
humming)

> **Note**
>
> Este tutorial está inspirado en gran medida por
> [este](http://jetweb.free.fr/nabaztag_rpi/Tutoriel_OJN_RPi_v1-1.pdf)

Instalación de dependencias. 
============================

Una vez que el sistema instalado en SSH haya terminado :

    apt-get update
    apt-get dist-upgrade
    apt-get install ssh
    apt-get install apache2 php5 php5-mysql libapache2-mod-php5
    reescritura de a2enmod
    apt-get install hacer
    apt-get install build-essential
    apt-get install libqt4-dev --fix-missing
    apt-get install qt4-dev-tools
    apt-get install bind9
    apt-get install git

Configuración de red 
=======================

Luego debe recuperar la dirección IP del sistema :

    ifconfig

El resultado es :

    eth0 Enlace encap:Ethernet HWaddr d0:63:b4:00:54:98
              inet addr:192.168.0.162 Bcast:192.168.0.255 máscara:255.255.255.0
              inet6 addr: fe80::d263:b4ff:fe00:Alcance 5498/64:Link
              UP BROADCAST RUNNING MULTICAST MTU:1500 métrico:1
              Paquetes RX:10721 errores:0 caído:0 desbordamientos:0 cuadros:0
              Paquetes TX:6477 errores:0 caído:0 desbordamientos:0 transportista:0
              colisiones:0 txqueuelen:1000
              Bytes RX:2032942 (1.9 MiB) bytes TX:1230703 (1.1 MiB)

Aquí la dirección IP es 192.168.0.162.

> **Note**
>
> Pora el resto del tutorial usaré esta IP, por supuesto es
> reemplazar dependiendo de cuál realmente

Luego edite el archivo /etc/resolv.conf

    vim /etc/resolv.conf

Y añadir :

    servidor de nombres 192.168.0.162

Configuración DNS 
====================

Edite el archivo /etc/bind/named.conf.local

    cd / etc / bind /
    vim named.conf.local

Y añadir :

    área "raspberry.pi""{
     tipo maestro
     archivo "/etc/bind/db.raspberry.pi";
    };
    zona "0.168.192.in-addr.arpa"{
     tipo maestro
     archivo "/etc/bind/db.192.168.0.inv";
    };

Cree el archivo db.raspberry.pi

vim db.raspberry.pi ---

Y poner en ello :

    $TTL 604800
    @ IN SOA ojn.raspberry.pi. root.raspberry.pi. (
     1; De serie
     604800; Actualizar
     86400; Reintentar
     2419200; Expira
     604800); Caché negativo TTL
    ;
    @ IN NS ojn.raspberry.pi.
    ojn EN A 192.168.0.162
    192.168.0.162 EN A 192.168.0.162

Luego cree este archivo db.192.168.0.inv

    vim db.192.168.0.inv

Y poner :

    $TTL 604800
    @ IN SOA ojn.raspberry.pi. root.localhost. (
     2; De serie
     604800; Actualizar
     86400; Reintentar
     2419200; Expira
     604800); Caché negativo TTL
    ;
    @ IN NS ojn.raspberry.pi.
    162 IN PTR ojn.raspberry.pi.

> **Important**
>
> Recuerde reemplazar el 162 en la última línea con el último
> parte de su sistema ip

Lanzar DNS :

    /etc/init.d/bind9 start

Prueba si es bueno :

    ping ojn.raspberry.pi

Deberías tener :

    root @ cubox-i:/ home / ojn # ping ojn.raspberry.pi
    PING ojn.raspberry.ft (192.168.0.162) 56 (84) bytes de datos.
    64 bytes de ojn.raspberry.ft (192.168.0.162): icmp_seq = 1 ttl = 64 tiempo = 0.069 ms
    64 bytes de ojn.raspberry.ft (192.168.0.162): icmp_seq = 2 ttl = 64 tiempo = 0.067 ms
    64 bytes de ojn.raspberry.ft (192.168.0.162): icmp_seq = 3 ttl = 64 tiempo = 0.059 ms
    64 bytes de ojn.raspberry.ft (192.168.0.162): icmp_seq = 4 ttl = 64 tiempo = 0.068 ms
    ^ C
    --- ojn.raspberry.estadísticas de ping pi ---
    4 paquetes transmitidos, 4 recibidos, 0% de pérdida de paquetes, tiempo 3000ms
    rtt min / avg / max / mdev = 0.059 / 0.065 / 0.069 / 0.010 ms

> **Note**
>
> Tienes que hacer ctrl + c para salir del ping

Por seguridad también agregaremos la resolución en / etc / hosts, do :

    vim / etc / hosts

Y añadir :

    192.168.0.162 ojn.raspberry.pi

Recuperación de Openjabnab 
=========================

Primero crearemos el usuario :

    adduser ojn
    cd / home / ojn

Luego clone openjabnab :

    git clone https://github.com/OpenJabNab/OpenJabNab.git
    chown -R ojn:ojn / home / ojn / OpenJabNab /
    chmod 0777 / home / ojn / OpenJabNab / http-wrapper / ojn_admin / include

Configuración del servidor web 
============================

Hacer :

    cd / etc / apache2 / sites-available /
    vim ojn.conf

Y añadir :

    <VirtualHost *:80>
            DocumentRoot / home / ojn / OpenJabNab / http-wrapper /
            ServerName ojn.raspberry.pi
             <Directory />
                     Opciones de FollowSymLinks
                    AllowOverride None
             </Directory>
             <Directory /home/ojn/OpenJabNab/http-wrapper/>
                     Opciones de índice de FollowSymLinks MultiViews
                     Permitir anular todo
                    Orden permitir, negar
                     permitir de todos
             </Directory>
    </VirtualHost>

Luego active el sitio :

    a2ensite ojn

Luego debe autorizar el directorio del servidor openjabnab, hacer :

    vim /etc/apache2/apache2.conf

Y añadir :

    <Directory /home/ojn/>
            Opciones de índice FollowSymLinks
            AllowOverride None
            Requerir todo otorgado
    </Directory>

Luego reiniciamos apache :

    servicio de recarga apache2

Instalación de openjabnab 
=========================

Hacer :

    su ojn
    cd / home / ojn / OpenJabNab / server
    qhacer -r
    hacer

> **Note**
>
> Este paso puede ser muy largo (hasta 45 minutos)

Configuración de Openjabnab 
==========================

Hacer :

    cp openjabnab.ini-dist bin / openjabnab.ini
    vim bin / openjabnab.ini

Y cambia las siguientes líneas :

    StandAloneAuthBypass = true
    AllowAnonymousRegistration = true
    AllowUserManageBunny = true
    AllowUserManageZtamp = true

Y reemplace todos * mi.dominio.com * por * ojn.raspberry.pi*

Configuración del servidor web Openjabnab 
=======================================

En tu publicoación debes editar el archivo
C:\\ Windows \\ System32 \\ drivers \\ etc y agregue :

    192.168.0.162 ojn.raspberry.pi

Entonces sigue :

    http://ojn.raspberry.pi/ojn_admin/install.php

Validar todo

Lanzamiento del servidor 
====================

Ahora todo está listo, todo lo que queda es iniciar el servidor :

    su ojn
    cd ~ / OpenJabNab / server / bin
    ./openjabnab

Ahora ve a :

    http://ojn.raspberry.pi/ojn_admin/index.php

> **Note**
>
> Si todo está bien, debería tener las estadísticas que aparecen en
> Bajo

Configuración de conejo 
======================

Para configurar el conejo es Bajotante simple, debes desenchufarlo
luego vuelva a conectarlo, quédese presionando su botón. Debe
normalmente azul claro.

Luego, con su PC, debe tener una nueva red wifi
nabaztagXX, conéctese escribiendo 192.168.0.1.

Una vez encendido, ingrese su configuración e información wifi
siguiendo :

    DHCP habilitado : no
    Máscara local : 255.255.255.0
    Puerta de enlace local : 192.168.0.1 o 192.168.0.254 (dependiendo de su red)
    Servidor DNS : 192.168.0.162

Supervisión del servidor Openjabnab e inicio automático 
====================================================

Como notará si cierra la sesión del servidor
Openjabnab se detiene. Entonces tienes que agregar un pequeño script a
supervisar el servidor e iniciarlo automáticamente. Hacer :

    cd / home / ojn
    vim checkojn.sh

Y agrega :

    if [$ (ps ax | grep openjabnab | grep -v grep | wc -l) -eq 0]; entonces
        su ojn; cd / home / ojn / OpenJabNab / server / bin; nohup ./ openjabnab >> / dev / null 2> & 1 &
    fi

Entonces haz :

    chmod + x checkojn.sh

Ahora debemos agregar el script al inicio y una verificación
cada 15 min por ejemplo :

    crontab -e

Y añadir :

    @reboot /home/ojn/checkojn.sh
    */ 15 * * * * /home/ojn/checkojn.sh

> **Important**
>
> Es absolutamente necesario ponerlo en el crontab raíz, si está
> de nuevo con el usuario ojn do ctrl + D

Configuración de tu conejo en openjabnab 
============================================

Seguir :

    http://ojn.raspberry.pi/ojn_admin/index.php

Usted debe tener :

![installation.openjabnab](images/installation.openjabnab.PNG)

Ahora debe crear una cuenta haciendo clic en crear un
Usuario :

![installation.openjabnab2](images/installation.openjabnab2.PNG)

Complete la información solicitada e inicie sesión :

![installation.openjabnab3](images/installation.openjabnab3.PNG)

Una vez conectado, vaya al servidor :

![installation.openjabnab4](images/installation.openjabnab4.PNG)

Luego baja para encontrar la lista de conejos conectados y recupera
su dirección mac :

![installation.openjabnab5](images/installation.openjabnab5.PNG)

Luego vaya a la cuenta y complete el nombre y el campo de dirección mac del
conejo luego validar :

![installation.openjabnab6](images/installation.openjabnab6.PNG)

Ahora encontrarás tu conejo en la página del conejo, haz clic en él
para abrir su configuración :

![installation.openjabnab7](images/installation.openjabnab7.PNG)

Ahora necesita activar la API púrpura y pasarla en público,
también es aquí donde encontrarás la clave púrpura de la API que te servirá
para Jeedom :

![installation.openjabnab8](images/installation.openjabnab8.PNG)

A continuación encontrará la lista de complementos, no olvide agregarlos
activar (tipo TTS o control del oído) :

![installation.openjabnab9](images/installation.openjabnab9.PNG)

Configuración de Jeedom 
=======================

La configuración en Jeedom es Bajotante simple, primero debes
conéctese en SSH a Jeedom (si tiene un cuadro de Jeedom los identificadores
están en el documento de instalación). Luego edite el archivo / etc / hosts

    vim / etc / hosts

Y agregue la siguiente línea :

    192.168.0.162 ojn.raspberry.pi

Entonces todo sucede en Jeedom, después de crear tu conejo aquí.
la configuración para poner:

![installation.openjabnab10](images/installation.openjabnab10.PNG)

Aquí está tu conejo ahora tiene su propia madriguera local !!!!!

Poner el TTS localmente 
======================

Todo es local excepto el TTS que pasa por el sitio de Acapela pero es
posible modificando algunos archivos para pasarlos localmente

> **Note**
>
> Consideraré que oenjabnab está instalado en
> / home / ojn / OpenJabNab y estás conectado como
> el usuario de openjabnab, aquí ojn

Creación de tts jeedom 
----------------------

Necesita crear una carpeta jeedom en servver / tts :

    mkdir / home / ojn / OpenJabNab / server / tts / jeedom

Entonces tienes que hacer 3 archivos :

-   jeedom.pro

<!-- -->

    ######################################################################
    # Generado automáticamente por qhacer (2.01a) sáb ene. 19 19:10:01 2008
    ######################################################################

    PLANTILLA = lib
    CONFIG - = depuración
    CONFIG + + qt lanzamiento del complemento
    QT + = red xml
    QT - = muérdago
    INCLUDEPATH += . ../../server ../../lib
    OBJETIVO = tts_jeedom
    DESTDIR = ../../bin/tts
    DEPENDPATH += . ../../server ../../lib
    LIBS + = -L ../../ bin / -lcommon
    MOC_DIR = ./tmp/moc
    OBJECTS_DIR = ./tmp/obj
    win32 {
      QMAKE_CXXFLAGS_WARN_ON + = -WX
    }
    unix {
      QMAKE_LFLAGS + = -Wl, -rpath, \ '\ $$ ORIGIN \'
      QMAKE_CXXFLAGS + = -Werror
    }

    # De entrada
    HEADERS + = tts_jeedom.h
    FUENTES + = tts_jeedom.cpp

-   tts \_jeedom.h

<!-- -->

    #ifndef _TTSACAPELA_H_
    #definir _TTSACAPELA_H_

    #incluir <QHttp>
    #incluir <QMultiMap>
    #incluir <QTextStream>
    #incluir <QThread>
    #incluye "ttsinterface.h"

    clase TTSJeedom : Public TTSInterface
    {
      Q_OBJECT
      Q_INTERFACES (TTSInterface)

    publico:
      TTSJeedom ();
      virtual ~ TTSJeedom ();
      QByteArray CreateNewSound (QString, QString, bool);

    privado:
    };

    #endif

-   tts \_jeedom.cpp

<!-- -->

    #incluir <QDateTime>
    #incluir <QUrl>
    #incluir <QCryptographicHash>
    #incluir <QMapIterator>
    #incluir "tts_jeedom.h"
    #incluye "log.h"
    #incluir <QNetworkReply>
    #incluir <QNetworkRequest>
    #incluir <QNetworkAccessManager>

    Q_EXPORT_PLUGIN2 (tts_jeedom, TTSJeedom)

    TTSJeedom::TTSJeedom():TTSInterface ("jeedom", "Jeedom")
    {
      voiceList.insert ("fr", "fr");
    }

    TTSJeedom::~TTSJeedom()
    {
    }

    QByteArray TTSJeedom::CreateNewSound (texto QString, voz QString, bool forceOverwrite)
    {
      QEventLoop loop;
      si (!voiceList.contains (voz))
        voz = "fr";
      // Verifique (y cree si es necesario) la carpeta de salida
      QDir outputFolder = ttsFolder;
      si (!outputFolder.exists (voz))
        outputFolder.mkdir (voz);

      si (!outputFolder.cd (voz))
      {
        LogError (QString ("No se puede crear la carpeta TTS : % 1 "). Arg (ttsFolder.absoluteFilePath (voz)));
        devolver QByteArray ();
      }

      // Compute fileName
      QString fileName = QCryptographicHash::hash (texto.toAscii (), QCryptographicHash::Md5) .toHex (). Append (". Mp3");
      QString filePath = outputFolder.absoluteFilePath (fileName);

      si (!forceOverwrite && QFile::existe (filePath))
        volver ttsHTTPUrl.arg (voz, nombre de archivo) .toAscii ();

      // Recuperar MP3
      QHttp http ("TODO_IP_JEEDOM");
      QObject::connect (& http, SIGNAL (hecho (bool)), & loop, SLOT (quit ()));

      QByteArray ContentData;
      ContentData + = "apikey = TODO_API_JEEDOM & text =" + QUrl::toPercentEncoding (texto);

      QHttpRequestHeader Header;
      Header.addValue ("Host", "TODO_IP_JEEDOM");

      Header.setContentLength (ContentData.length ());
      Header.setRequest ("GET", "/core/api/tts.php?apikey = TODO_API_JEEDOM & text = "+ QUrl::toPercentEncoding (texto), 1, 1);

      http.request (Encabezado, ContentData);
      loop.exec ();

      Archivo QFile (filePath);
      si (!file.open (QIODevice::WriteOnly))
      {
        LogError ("No se puede abrir el archivo de sonido para escribir : "+filePath);
        devolver QByteArray ();
      }
      file.write (http.readAll ());
      file.close ();
      volver ttsHTTPUrl.arg (voz, nombre de archivo) .toAscii ();
    }

> **Note**
>
> No olvides reemplazar los TODOs

Luego active el tts jeedom modificando el archivo
/home/ojn/OpenJabNab/server/tts/tts.pro agregando jeedom a SUBDIRS :

    PLANTILLA = subdirs
    SUBDIRS = acapela google jeedom

Recompilar 
-------------

    cd / home / ojn / OpenJabNab / server
    qhacer -r
    hacer

Modificación del servicio tts 
------------------------------

Edite el archivo /home/ojn/OpenJabNab/server/bin/openjabnab.ini
y cambiar :

    TTS = acapela

Par

    TTS = libertad

Relanzamiento de openjabnab 
--------------------

La forma más fácil es reiniciar la máquina para reiniciar openjabnab
