# Installation openjabnab

Voici un tuto sur comment installer openjabnab en local (sur un rpi ou humming)

> **Note**
>
> Ce tuto est largement inspiré de [celui-ci](http://jetweb.free.fr/nabaztag_rpi/Tutoriel_OJN_RPi_v1-1.pdf)

# Installation des dépendances

Une fois le système installé en SSH faites :

````
apt-get update
apt-get dist-upgrade
apt-get install ssh
apt-get install apache2 php5 php5-mysql libapache2-mod-php5
a2enmod rewrite
apt-get install make
apt-get install build-essential
apt-get install libqt4-dev --fix-missing
apt-get install qt4-dev-tools
apt-get install bind9
apt-get install git
````

# Configuration du réseau

Il faut ensuite récupérer l’addresse IP du système :

``ifconfig``

Le résultat est :

````
eth0      Link encap:Ethernet  HWaddr d0:63:b4:00:54:98
          inet addr:192.168.0.162  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: fe80::d263:b4ff:fe00:5498/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:10721 errors:0 dropped:0 overruns:0 frame:0
          TX packets:6477 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:2032942 (1.9 MiB)  TX bytes:1230703 (1.1 MiB)
````

Ici l’adresse IP est la 192.168.0.162.

> **Note**
>
> Pour toute la suite du tuto j’utiliserai cette IP, elle est bien sûr à remplacer en fonction de celle que vous avez réellement

Editez ensuite le fichier ``/etc/resolv.conf``

``vim  /etc/resolv.conf``

Et ajoutez :

``nameserver 192.168.0.162``

# Configuration du DNS

Editez le fichier ``/etc/bind/named.conf.local``

````
cd /etc/bind/
vim named.conf.local
````

Et ajoutez :

````
zone "raspberry.pi"{
 type master;
 file "/etc/bind/db.raspberry.pi";
};
zone "0.168.192.in-addr.arpa"{
 type master;
 file "/etc/bind/db.192.168.0.inv";
};
````

Créez le fichier ``db.raspberry.pi``

``vim db.raspberry.pi ---``

Et mettez dedans :

````
$TTL 604800
@ IN SOA ojn.raspberry.pi. root.raspberry.pi. (
 1 ; Serial
 604800 ; Refresh
 86400 ; Retry
 2419200 ; Expire
 604800 ) ; Negative Cache TTL
;
@ IN NS ojn.raspberry.pi.
ojn IN A 192.168.0.162
192.168.0.162 IN A 192.168.0.162
````

Puis créez ce fichier ``db.192.168.0.inv``

``vim db.192.168.0.inv``

Et mettez :

````
$TTL 604800
@ IN SOA ojn.raspberry.pi. root.localhost. (
 2 ; Serial
 604800 ; Refresh
 86400 ; Retry
 2419200 ; Expire
 604800 ) ; Negative Cache TTL
;
@ IN NS ojn.raspberry.pi.
162 IN PTR ojn.raspberry.pi.
````

> **Important**
>
> Pensez bien à remplacer le 162 de la dernière ligne par la dernière partie de l’ip de votre système

Lancer le DNS :

``/etc/init.d/bind9 start``

Testez si c’est bon :

``ping ojn.raspberry.pi``

Vous devriez avoir :

````
root@cubox-i:/home/ojn# ping ojn.raspberry.pi
PING ojn.raspberry.pi (192.168.0.162) 56(84) bytes of data.
64 bytes from ojn.raspberry.pi (192.168.0.162): icmp_seq=1 ttl=64 time=0.069 ms
64 bytes from ojn.raspberry.pi (192.168.0.162): icmp_seq=2 ttl=64 time=0.067 ms
64 bytes from ojn.raspberry.pi (192.168.0.162): icmp_seq=3 ttl=64 time=0.059 ms
64 bytes from ojn.raspberry.pi (192.168.0.162): icmp_seq=4 ttl=64 time=0.068 ms
^C
--- ojn.raspberry.pi ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3000ms
rtt min/avg/max/mdev = 0.059/0.065/0.069/0.010 ms
````

> **Note**
>
> Il faut faire ctrl+c pour quitter le ping

Par sécurité on va aussi ajouter la résolution dans /etc/hosts, faites :

``vim /etc/hosts``

Et ajoutez :

``192.168.0.162 ojn.raspberry.pi``

# Récupération d’openjabnab

On va d’abord créer l’utilisateur :

````
adduser ojn
cd /home/ojn
````

Puis cloner openjabnab :

````
git clone https://github.com/OpenJabNab/OpenJabNab.git
chown -R ojn:ojn /home/ojn/OpenJabNab/
chmod 0777 /home/ojn/OpenJabNab/http-wrapper/ojn_admin/include
````

# Configuration du serveur web

Faites :

````
cd /etc/apache2/sites-available/
vim ojn.conf
````

Et ajoutez :

````
<VirtualHost *:80>
        DocumentRoot /home/ojn/OpenJabNab/http-wrapper/
        ServerName ojn.raspberry.pi
         <Directory />
                 Options FollowSymLinks
                AllowOverride None
         </Directory>
         <Directory /home/ojn/OpenJabNab/http-wrapper/>
                 Options Indexes FollowSymLinks MultiViews
                 AllowOverride all
                Order allow,deny
                 allow from all
         </Directory>
</VirtualHost>
````

Puis activez le site :

``a2ensite ojn``

Il faut ensuite autoriser le répertoire du serveur openjabnab, faites :

``vim /etc/apache2/apache2.conf``

Et ajoutez :

````
<Directory /home/ojn/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
````

Puis on redémarre apache :

``service apache2 reload``

# Installation d’openjabnab

Faites :

````
su ojn
cd /home/ojn/OpenJabNab/server
qmake -r
make
````

> **Note**
>
> Cette étape peut être très longue (jusqu’à 45min)

# Configuration d’openjabnab

Faites :

````
cp openjabnab.ini-dist bin/openjabnab.ini
vim bin/openjabnab.ini
````

Et changez les lignes suivantes :

````
StandAloneAuthBypass = true
AllowAnonymousRegistration = true
AllowUserManageBunny = true
AllowUserManageZtamp = true
````

Et remplacez tous les *my.domain.com* par *ojn.raspberry.pi*

# Configuration du serveur web openjabnab

Sur votre post vous devez éditer le fichier ``C:\Windows\System32\drivers\etc`` et rajouter :

``192.168.0.162 ojn.raspberry.pi``

Puis allez sur :

``http://ojn.raspberry.pi/ojn_admin/install.php``

Validez le tout

# Lancement du serveur

Voilà tout est prêt il ne reste plus qu’à lancer le serveur :

````
su ojn
cd ~/OpenJabNab/server/bin
./openjabnab
````

Maintenant allez sur :

``http://ojn.raspberry.pi/ojn_admin/index.php``

> **Note**
>
> Si tout est bon vous devriez avoir les statistique qui apparaissent en bas

# Configuration du lapin

Pour configurer le lapin c’est assez simple, vous devez le débrancher puis en le rebrancher, rester appuyez sur son bouton. Il doit normalement s’allumer en bleu.

Ensuite avec votre PC vous devriez avoir un nouveau réseau wifi nabaztagXX, connectez-vous dessus en tapant 192.168.0.1.

Une fois dessus renseignez votre configuration wifi et les informations suivantes :

````
DHCP enabled : no
Local Mask : 255.255.255.0
Local gateway : 192.168.0.1 ou 192.168.0.254 (en fonction de votre réseau)
DNS server : 192.168.0.162
````

# Surveillance du serveur openjabnab et démarrage auto

Comme vous le remarquerez si vous fermez votre session le serveur openjabnab s’arrête. Il faut donc ajouter un petit script pour surveiller le serveur et le démarrer automatiquement. Faites :

````
cd /home/ojn
vim checkojn.sh
````

Et ajoutez dedans :

````
if [ $(ps ax | grep openjabnab | grep -v grep | wc -l) -eq 0 ]; then
    su ojn; cd /home/ojn/OpenJabNab/server/bin;nohup ./openjabnab >> /dev/null 2>&1 &
fi
````

Puis faites :

``chmod +x checkojn.sh``

Il faut maintenant ajouter le script au démarrage et une verification toute les 15min par exemple :

``crontab -e``

Et ajoutez :

````
@reboot /home/ojn/checkojn.sh
*/15 * * * * /home/ojn/checkojn.sh
````

> **Important**
>
> Il faut absolument le mettre dans la crontab de root, si vous êtes encore avec l’utilisateur ojn faites ctrl+D

# Configuration de votre lapin dans openjabnab

Allez sur :

``http://ojn.raspberry.pi/ojn_admin/index.php``

Vous devez avoir :

![installation.openjabnab](images/installation.openjabnab.PNG)

Il faut vous maintenant vous créer un compte en cliquant sur créer un utilisateur :

![installation.openjabnab2](images/installation.openjabnab2.PNG)

Renseignez les informations demandées et connectez-vous :

![installation.openjabnab3](images/installation.openjabnab3.PNG)

Une fois connecté allez sur server :

![installation.openjabnab4](images/installation.openjabnab4.PNG)

Puis descendez pour trouver la liste des lapins connectés et récuperer son adresse mac :

![installation.openjabnab5](images/installation.openjabnab5.PNG)

Allez ensuite sur compte et renseignez le champ nom et adresse mac du lapin puis validez :

![installation.openjabnab6](images/installation.openjabnab6.PNG)

Vous retrouvez maintenant sur la page lapin votre lapin, cliquez dessus pour ouvrir sa configuration :

![installation.openjabnab7](images/installation.openjabnab7.PNG)

Il vous faut maintenant activer l’api violet et la passer en public, c’est aussi ici que vous retrouvez la clef api violet qui vous servira pour Jeedom :

![installation.openjabnab8](images/installation.openjabnab8.PNG)

En dessous vous retrouvez la liste des plugins, n’oubliez pas de les activer (type TTS ou contrôle des oreilles) :

![installation.openjabnab9](images/installation.openjabnab9.PNG)

# Configuration de Jeedom

La configuration dans Jeedom est assez simple, il faut tout d’abord se connecter en SSH à Jeedom (si vous avez une box Jeedom les identifiants sont dans la doc d’installation). Puis editer le fichier /etc/hosts

``vim /etc/hosts``

Et ajouter la ligne suivante :

``192.168.0.162 ojn.raspberry.pi``

Ensuite tous se passe dans Jeedom, après avoir créer votre lapin voilà la configuration à mettre:

![installation.openjabnab10](images/installation.openjabnab10.PNG)

Voilà votre lapin a maintenant son propre terrier en local !!!!!

# Mettre le TTS en local

Tout est local sauf le TTS qui passe par le site Acapela mais il est possible en modifiant quelques fichiers de le passer en local

> **Note**
>
> Je vais considérer que oenjabnab est installé dans /home/ojn/OpenJabNab et que vous êtes connecté en tant que l’utilisateur d’openjabnab, ici ojn

## Création du tts jeedom

Il vous faut crêer un dossier jeedom dans servver/tts :

``mkdir /home/ojn/OpenJabNab/server/tts/jeedom``

Il faut ensuite faire 3 fichiers :

-   ``jeedom.pro``

````
######################################################################
# Automatically generated by qmake (2.01a) sam. janv. 19 19:10:01 2008
######################################################################

TEMPLATE = lib
CONFIG -= debug
CONFIG += plugin qt release
QT += network xml
QT -= gui
INCLUDEPATH += . ../../server ../../lib
TARGET = tts_jeedom
DESTDIR = ../../bin/tts
DEPENDPATH += . ../../server ../../lib
LIBS += -L../../bin/ -lcommon
MOC_DIR = ./tmp/moc
OBJECTS_DIR = ./tmp/obj
win32 {
  QMAKE_CXXFLAGS_WARN_ON += -WX
}
unix {
  QMAKE_LFLAGS += -Wl,-rpath,\'\$$ORIGIN\'
  QMAKE_CXXFLAGS += -Werror
}

# Input
HEADERS += tts_jeedom.h
SOURCES += tts_jeedom.cpp
````

-   ``tts\jeedom.h``

````
#ifndef _TTSACAPELA_H_
#define _TTSACAPELA_H_

#include <QHttp>
#include <QMultiMap>
#include <QTextStream>
#include <QThread>
#include "ttsinterface.h"

class TTSJeedom : public TTSInterface
{
  Q_OBJECT
  Q_INTERFACES(TTSInterface)

public:
  TTSJeedom();
  virtual ~TTSJeedom();
  QByteArray CreateNewSound(QString, QString, bool);

private:
};

#endif
````

-   ``tts\jeedom.cpp``

````
#include <QDateTime>
#include <QUrl>
#include <QCryptographicHash>
#include <QMapIterator>
#include "tts_jeedom.h"
#include "log.h"
#include <QNetworkReply>
#include <QNetworkRequest>
#include <QNetworkAccessManager>

Q_EXPORT_PLUGIN2(tts_jeedom, TTSJeedom)

TTSJeedom::TTSJeedom():TTSInterface("jeedom", "Jeedom")
{
  voiceList.insert("fr", "fr");
}

TTSJeedom::~TTSJeedom()
{
}

QByteArray TTSJeedom::CreateNewSound(QString text, QString voice, bool forceOverwrite)
{
  QEventLoop loop;
  if(!voiceList.contains(voice))
    voice = "fr";
  // Check (and create if needed) output folder
  QDir outputFolder = ttsFolder;
  if(!outputFolder.exists(voice))
    outputFolder.mkdir(voice);

  if(!outputFolder.cd(voice))
  {
    LogError(QString("Cant create TTS Folder : %1").arg(ttsFolder.absoluteFilePath(voice)));
    return QByteArray();
  }

  // Compute fileName
  QString fileName = QCryptographicHash::hash(text.toAscii(), QCryptographicHash::Md5).toHex().append(".mp3");
  QString filePath = outputFolder.absoluteFilePath(fileName);

  if(!forceOverwrite && QFile::exists(filePath))
    return ttsHTTPUrl.arg(voice, fileName).toAscii();

  // Fetch MP3
  QHttp http("TODO_IP_JEEDOM");
  QObject::connect(&http, SIGNAL(done(bool)), &loop, SLOT(quit()));

  QByteArray ContentData;
  ContentData += "apikey=TODO_API_JEEDOM&text="+QUrl::toPercentEncoding(text);

  QHttpRequestHeader Header;
  Header.addValue("Host", "TODO_IP_JEEDOM");

  Header.setContentLength(ContentData.length());
  Header.setRequest("GET", "/core/api/tts.php?apikey=TODO_API_JEEDOM&text="+QUrl::toPercentEncoding(text), 1, 1);

  http.request(Header, ContentData);
  loop.exec();

  QFile file(filePath);
  if (!file.open(QIODevice::WriteOnly))
  {
    LogError("Cannot open sound file for writing : "+filePath);
    return QByteArray();
  }
  file.write(http.readAll());
  file.close();
  return ttsHTTPUrl.arg(voice, fileName).toAscii();
}
````

> **Note**
>
> N’oubliez pas de remplacer les TODO

Il faut ensuite activer le tts jeedom en modifiant le fichier ``/home/ojn/OpenJabNab/server/tts/tts.pro`` en ajoutant jeedom à ``SUBDIRS`` :

````
TEMPLATE = subdirs
SUBDIRS = acapela google jeedom
````

## Recompilation

````
cd /home/ojn/OpenJabNab/server
qmake -r
make
````

## Modification du service de tts

Il faut éditer le fichier ``/home/ojn/OpenJabNab/server/bin/openjabnab.ini`` et changer ``TTS=acapela`` par ``TTS=jeedom``

## Relance d’openjabnab

Le plus simple est ici de redémarrer la machine pour relancer openjabnab
