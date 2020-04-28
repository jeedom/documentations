


> **Nota**
>
> 
> [celui-ci](http:

Instalación de dependencias. 
============================

 :

    
    
    
    
    
    
    
    
    
    
    

 
=======================

 :

    

 :

    ::63::00:54:98
              :  Bcast:.:
              : ::::::
              ::1
              :::::0
              :::::0
              ::1000
              :.:.

.

> **Nota**
>
> 
> 



    

 :

    

 
====================



    
    

 :

    "{
     
     
    };
    "{
     
     
    };



. ---

 :

    $TTL 604800
    @ IN SOA .. root.raspberry.. (
     
     
     
     
     
    ;
    @ IN NS ..
    
    



    

 :

    $TTL 604800
    @ IN SOA .. root.localhost. (
     
     
     
     
     
    ;
    @ IN NS ..
    .

> **Importante**
>
> 
> 

 :

    

 :

    

 :

    :
    ...
    ..: .
    ..: .
    ..: .
    ..: .
    
    --- . ---
    
    .

> **Nota**
>
> 

 :

    

 :

    

 
=========================

 :

    
    

 :

    :
    :
    

 
============================

Hacer :

    
    

 :

    <VirtualHost *:80>
            
            
             <Directory />
                     
                    
             </Directory>
             <Directory /home/ojn/OpenJabNab/http-wrapper/>
                     
                     
                    
                     
             </Directory>
    </VirtualHost>

 :

    

 :

    

 :

    <Directory /home/ojn/>
            
            
            
    </Directory>

 :

    

 
=========================

Hacer :

    
    
    
    

> **Nota**
>
> 

 
==========================

Hacer :

    .
    

 :

    
    
    
    

.*

 
=======================================


: :

    

 :

    http://./ojn_admin/install.php



 
====================

 :

    
    
    .

 :

    http://./ojn_admin/index.php

> **Nota**
>
> 
> Bajo

 
======================


. 
.


.


 :

     : 
     : 
     : ..
     : 

 
====================================================


. 
. Hacer :

    
    

 :

     |  |  | 
         .
    

Entonces haz :

    


 :

    crontab -e

 :

    @reboot /home/ojn/checkojn.sh
    *

> **Importante**
>
> 
> 

 
============================================

 :

    http://./ojn_admin/index.php

Usted debe tener :

![installation.openjabnab](images/installation.openjabnab.PNG)


Usuario :

![installation.openjabnab2](images/installation.openjabnab2.PNG)

 :

![installation.openjabnab3](images/installation.openjabnab3.PNG)

 :

![installation.openjabna](images/installation.openjabna.PNG)


 :

![installation.openjabnab5](images/installation.openjabnab5.PNG)


 :

![installation.openjabnab6](images/installation.openjabnab6.PNG)


 :

![installation.openjabnab7](images/installation.openjabnab7.PNG)

Ahora necesita activar la API púrpura y pasarla en público,
también es aquí donde encontrarás la clave púrpura de la API que te servirá
para Jeedom :

![installation.openjabnab8](images/installation.openjabnab8.PNG)

A continuación encontrará la lista de complementos,  olvide agregarlos
activar (tipo TTS o control del oído) :

![installation.openjabnab9](images/installation.openjabnab9.PNG)

onguración de Jeedom 
=======================

La conguración en Jeedom es Bajotante simple, primero debes
conéctese en SSH a Jeedom (si tiene un cuadro de Jeedom los identicadores
están en el documento de instalación). Luego edite el archivo / etc / hosts

    

Y agregue la siguiente línea :

    

Entonces todo sucede en Jeedom, después de crear tu conejo aquí.
la conguración para poner:

![installation.openjabnab10](images/installation.openjabnab10.PNG)

Aquí está tu conejo ahora tiene su proa madriguera local !!!!!

Poner el TTS localmente 
======================

Todo es local excepto el TTS que pasa por el sitio de Acapela pero es
posible modicando algus archivos para pasarlos localmente

> **Nota**
>
> onsideraré que oenjabnab está instalado en
> / home / ojn / OpenJabNab y estás conectado como
> el usuario de openjabnab, aquí ojn

reación de tts jeedom 
----------------------

Necesita crear una carpeta jeedom en servver / tts :

    mkdir / home / ojn / OpenJabNab / server / tts / jeedom

Entonces tienes que hacer 3 archivos :

-   jeedom.pro

<!-- -->

    ######################################################################
    # Generado automáticamente por q (2.01a) sáb ene. 19 19:10:01 2008
    ######################################################################

    PLANTILLA = lib
    ONFIG - = depuración
    ONFIG + + qt lanzamiento del complemento
    QT + = red xml
    QT - = muérdago
    INLUDEPATH += . ../../server ../../lib
    OBJETIVO = tts_jeedom
    DESTDIR = ../../bin/tts
    DEPENDPATH += . ../../server ../../lib
    LIBS + = -L ../../ bin / -lcommon
    MO_DIR = ./tmp/moc
    OBJETS_DIR = ./tmp/obj
    win32 {
      QMAKE_XXFLAGS_WARN_ON + = -WX
    }
    unix {
      QMAKE_LFLAGS + = -Wl, -rpath, \ '\ $$ ORIGIN \'
      QMAKE_XXFLAGS + = -Werror
    }

    # De entrada
    HEADERS + = tts_jeedom.h
    FUENTES + = tts_jeedom.cpp

-   tts \ _jeedom.h

<!-- -->

    #ifndef _TTSAAPELA_H_
    #denir _TTSAAPELA_H_

    #incluir <QHttp>
    #incluir <QMultiMap>
    #incluir <QTextStream>
    #incluir <QThread>
    #incluye "ttsinterface.h"

    clase TTSJeedom : Public TTSInterface
    {
      Q_OBJET
      Q_INTERFAES (TTSInterface)

    publico:
      TTSJeedom ();
      virtual ~ TTSJeedom ();
      QByteArray reateNewSound (QString, QString, bool);

    privado:
    };

    #endif

-   tts \ _jeedom.cpp

<!-- -->

    #incluir <QDateTime>
    #incluir <QUrl>
    #incluir <QryptographicHash>
    #incluir <QMapIterator>
    #incluir "tts_jeedom.h"
    #incluye "log.h"
    #incluir <QNetworkReply>
    #incluir <QNetworkRequest>
    #incluir <QNetworkAccessManager>

    Q_EXPORT_PLUGIN2 (tts_jeedom, TTSJeedom)

    TTSJeedom::TTSJeedom ():TTSInterface ("jeedom", "Jeedom")
    {
      voiceList.insert ("fr", "fr");
    }

    TTSJeedom::~ TTSJeedom ()
    {
    }

    QByteArray TTSJeedom::reateNewSound (texto QString, voz QString, bool forceOverwrite)
    {
      QEventLoop loop;
      si (!voiceList.contains (voz))
        voz = "fr";
      // Verique (y cree si es necesario) la carpeta de salida
      QDir outputFolder = ttsFolder;
      si (!outputFolder.exists (voz))
        outputFolder.mkdir (voz);

      si (!outputFolder.cd (voz))
      {
        LogError (QString ("No se puede crear la carpeta TTS : % 1 "). Arg (ttsFolder.absoluteFilePath (voz)));
        devolver QByteArray ();
      }

      // ompute leName
      QString leName = QryptographicHash::.::
      

      si (!::
        .

      
      
      ::

      
      ::

      
      

      
      ?::

      
      

      
      si (!::
      {
         : "
        devolver QByteArray ();
      }
      
      
      .
    }

> **Nota**
>
> 


 :

    
    

 
-------------

    
    
    

 
------------------------------


 :

    

Por

    

 
--------------------


