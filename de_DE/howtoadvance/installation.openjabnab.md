# Openjabnab-Installation

Hier ist ein Tutorial, wie man openjabnab lokal installiert (auf einem rpi oder summen)

> **Notiz**
>
> Dieses Tutorial ist weitgehend inspiriert von [Dieses hier](http://jetweb.free.fr/nabaztag_rpi/Tutoriel_OJN_RPi_v1-1.pdf)

# Abhängigkeiten installieren

Sobald das System in SSH installiert ist :

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

# Netzwerkeinrichtung

Rufen Sie als Nächstes die IP-Adresse des Systems ab :

``ifconfig``

Das Ergebnis ist :

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

Hier lautet die IP-Adresse 192.168.0.162.

> **Notiz**
>
> Für den Rest des Tutorials werde ich diese IP verwenden, sie ist natürlich entsprechend derjenigen zu ersetzen, die Sie wirklich haben

Bearbeiten Sie dann die Datei ``/etc/resolv.conf``

``vim  /etc/resolv.conf``

Und hinzufügen :

``nameserver 192.168.0.162``

# DNS-Setup

Bearbeiten Sie die Datei ``/etc/bind/named.conf.local``

````
cd /etc/bind/
vim named.conf.local
````

Und hinzufügen :

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

Erstellen Sie die Datei ``db.raspberry.pi``

``vim db.raspberry.pi ---``

Und einlegen :

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

Erstellen Sie dann diese Datei ``db.192.168.0.inv``

``vim db.192.168.0.inv``

Und legen :

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

> **Wichtig**
>
> Denken Sie daran, die 162 der letzten Zeile durch den letzten Teil der IP Ihres Systems zu ersetzen

Starten Sie DNS :

``/etc/init.d/bind9 start``

Testen Sie, ob es gut ist :

``ping ojn.raspberry.pi``

Du solltest haben :

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

> **Notiz**
>
> Sie müssen Strg + C drücken, um den Ping zu beenden

Aus Sicherheitsgründen werden wir die Auflösung auch in /etc/hosts hinzufügen, do :

``vim /etc/hosts``

Und hinzufügen :

``192.168.0.162 ojn.raspberry.pi``

# Openjabnab-Wiederherstellung

Wir werden zuerst den Benutzer erstellen :

````
adduser ojn
cd /home/ojn
````

Klonen Sie dann openjabnab :

````
git clone https://github.com/OpenJabNab/OpenJabNab.git
chown -R ojn:ojn /home/ojn/OpenJabNab/
chmod 0777 /home/ojn/OpenJabNab/http-wrapper/ojn_admin/include
````

# Konfiguration des Webservers

Fertig :

````
cd /etc/apache2/sites-available/
vim ojn.conf
````

Und hinzufügen :

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

Aktivieren Sie dann die Website :

``a2ensite ojn``

Dann müssen Sie das Openjabnab-Serververzeichnis autorisieren, tun :

``vim /etc/apache2/apache2.conf``

Und hinzufügen :

````
<Directory /home/ojn/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
````

Starten Sie dann den Apache neu :

``service apache2 reload``

# Openjabnab installieren

Fertig :

````
su ojn
cd /home/ojn/OpenJabNab/server
qmake -r
make
````

> **Notiz**
>
> Dieser Schritt kann sehr lang sein (bis zu 45min)

# Openjabnab-Setup

Fertig :

````
cp openjabnab.ini-dist bin/openjabnab.ini
vim bin/openjabnab.ini
````

Und ändern Sie die folgenden Zeilen :

````
StandAloneAuthBypass = true
AllowAnonymousRegistration = true
AllowUserManageBunny = true
AllowUserManageZtamp = true
````

Und alle ersetzen *meine.domain.com* durch *ojn.raspberry.pi*

# Openjabnab-Webserver-Setup

Auf Ihrem Beitrag müssen Sie die Datei bearbeiten ``C:\Windows\System32\drivers\etc`` und hinzufügen :

``192.168.0.162 ojn.raspberry.pi``

Dann geh zu :

``http://ojn.raspberry.pi/ojn_admin/install.php``

Bestätigen Sie alles

# Serverstart

Das war's, Sie müssen nur noch den Server starten :

````
su ojn
cd ~/OpenJabNab/server/bin
./openjabnab
````

Gehen Sie jetzt zu :

``http://ojn.raspberry.pi/ojn_admin/index.php``

> **Notiz**
>
> Wenn alles in Ordnung ist, sollten die Statistiken unten angezeigt werden

# Kaninchen-Setup

Um den Hasen zu konfigurieren, ist es ganz einfach, Sie müssen ihn ausstecken und dann wieder einstecken, halten Sie seinen Knopf gedrückt. Sie sollte normalerweise blau leuchten.

Dann sollten Sie mit Ihrem PC ein neues nabaztagXX-WLAN-Netzwerk haben, verbinden Sie sich damit, indem Sie 192.168.0.1 eingeben.

Geben Sie dort Ihre WLAN-Konfiguration und die folgenden Informationen ein :

````
DHCP enabled : no
Local Mask : 255.255.255.0
Local gateway : 192.168.0.1 ou 192.168.0.254 (en fonction de votre réseau)
DNS server : 192.168.0.162
````

# Openjabnab-Serverüberwachung und Autostart

Wie Sie feststellen werden, stoppt der Openjabnab-Server, wenn Sie Ihre Sitzung schließen. Es ist daher notwendig, ein kleines Skript hinzuzufügen, um den Server zu überwachen und automatisch zu starten. Fertig :

````
cd /home/ojn
vim checkojn.sh
````

Und füge hinzu :

````
if [ $(ps ax | grep openjabnab | grep -v grep | wc -l) -eq 0 ]; then
    su ojn; cd /home/ojn/OpenJabNab/server/bin;nohup ./openjabnab >> /dev/null 2>&1 &
fi
````

Dann mach :

``chmod +x checkojn.sh``

Es ist jetzt erforderlich, das Skript beim Start hinzuzufügen und beispielsweise alle 15 Minuten eine Überprüfung durchzuführen :

``crontab -e``

Und hinzufügen :

````
@reboot /home/ojn/checkojn.sh
*/15 * * * * /home/ojn/checkojn.sh
````

> **Wichtig**
>
> Es ist unbedingt erforderlich, es in die Crontab von root zu legen, wenn Sie noch beim Benutzer ojn sind, drücken Sie Strg+D

# Richten Sie Ihr Häschen in openjabnab ein

Gehe zu :

``http://ojn.raspberry.pi/ojn_admin/index.php``

Du musst haben :

![installation.openjabnab](images/installation.openjabnab.PNG)

Sie müssen nun ein Konto erstellen, indem Sie auf Benutzer erstellen klicken :

![installation.openjabnab2](images/installation.openjabnab2.PNG)

Geben Sie die angeforderten Informationen ein und melden Sie sich an :

![installation.openjabnab3](images/installation.openjabnab3.PNG)

Sobald die Verbindung hergestellt ist, gehen Sie zum Server :

![installation.openjabnab4](images/installation.openjabnab4.PNG)

Gehen Sie dann nach unten, um die Liste der verbundenen Kaninchen zu finden und ihre Mac-Adresse abzurufen :

![installation.openjabnab5](images/installation.openjabnab5.PNG)

Gehen Sie dann zum Konto und füllen Sie den Feldnamen und die MAC-Adresse des Kaninchens aus und bestätigen Sie dann :

![installation.openjabnab6](images/installation.openjabnab6.PNG)

Sie finden Ihr Kaninchen nun auf der Kaninchenseite, klicken Sie darauf, um seine Konfiguration zu öffnen :

![installation.openjabnab7](images/installation.openjabnab7.PNG)

Sie müssen jetzt die violette API aktivieren und öffentlich machen, hier finden Sie auch den violetten API-Schlüssel, der für Jeedom verwendet wird :

![installation.openjabnab8](images/installation.openjabnab8.PNG)

Unten finden Sie die Liste der Plugins, vergessen Sie nicht, sie zu aktivieren (TTS-Typ oder Ohrsteuerung) :

![installation.openjabnab9](images/installation.openjabnab9.PNG)

# Jeedom-Setup

Die Konfiguration in Jeedom ist recht einfach, Sie müssen sich zuerst in SSH mit Jeedom verbinden (wenn Sie eine Jeedom-Box haben, finden Sie die Kennungen im Installationsdokument). Bearbeiten Sie dann die Datei /etc/hosts

``vim /etc/hosts``

Und fügen Sie die folgende Zeile hinzu :

``192.168.0.162 ojn.raspberry.pi``

Dann passiert alles in Jeedom, nachdem Sie Ihr Kaninchen hier erstellt haben, ist die Konfiguration zu setzen:

![installation.openjabnab10](images/installation.openjabnab10.PNG)

Hier hat Ihr Kaninchen jetzt einen eigenen Bau vor Ort !!!!!

# Legen Sie das TTS lokal ab

Alles ist lokal, mit Ausnahme des TTS, das über die Acapela-Site geht, aber es ist möglich, einige Dateien zu ändern, um es lokal zu übergeben

> **Notiz**
>
> Ich gehe davon aus, dass oenjabnab in /home/ojn/OpenJabNab installiert ist und dass Sie als Benutzer von openjabnab angemeldet sind, hier ojn

## Erstellung von tts jeedom

Sie müssen einen jeedom-Ordner in servver/tts erstellen :

``mkdir /home/ojn/OpenJabNab/server/tts/jeedom``

Dann müssen Sie 3 Dateien erstellen :

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

> **Notiz**
>
> Vergessen Sie nicht, die TODOs zu ersetzen

Sie müssen dann das tts jeedom aktivieren, indem Sie die Datei ändern ``/home/ojn/OpenJabNab/server/tts/tts.pro`` durch Hinzufügen von jeedom zu ``SUBDIRS`` :

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

## Änderung des tts-Dienstes

Sie müssen die Datei bearbeiten ``/home/ojn/OpenJabNab/server/bin/openjabnab.ini`` und ändern ``TTS=acapela`` durch ``TTS=jeedom``

## Relaunch von openjabnab

Der einfachste Weg hier ist, die Maschine neu zu starten, um openjabnab neu zu starten
