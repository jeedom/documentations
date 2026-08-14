# Openjabnab-Installation

Hier ist eine Anleitung zur lokalen Installation von openjabnab (auf einem RPi oder Humming)

> **Hinweis**
>
> Diese Anleitung ist weitgehend inspiriert von [dieser](http://jetweb.free.fr/nabaztag_rpi/Tutoriel_OJN_RPi_v1-1.pdf)

# Einrichtung der Nebengebäude

Sobald das System über SSH installiert ist, führen Sie Folgendes aus:

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

# Netzwerkkonfiguration

Anschließend muss die IP-Adresse des Systems abgerufen werden:

``ifconfig``

Das Ergebnis lautet:

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

Die IP-Adresse lautet hier 192.168.0.162.

> **Hinweis**
>
> Im weiteren Verlauf dieser Anleitung werde ich diese IP-Adresse verwenden; diese muss natürlich durch Ihre tatsächliche IP-Adresse ersetzt werden.

Bearbeiten Sie anschließend die Datei ``/etc/resolv.conf``

``vim  /etc/resolv.conf``

Und fügen Sie hinzu:

``nameserver 192.168.0.162``

# DNS-Konfiguration

Datei bearbeiten ``/etc/bind/named.conf.local``

````
cd /etc/bind/
vim named.conf.local
````

Und fügen Sie hinzu:

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

Und geben Sie Folgendes hinein:

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

Erstellen Sie anschließend diese Datei ``db.192.168.0.inv``

``vim db.192.168.0.inv``

Und geben Sie Folgendes ein:

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
> Denken Sie daran, die 162 in der letzten Zeile durch den letzten Teil der IP-Adresse Ihres Systems zu ersetzen.

DNS starten:

``/etc/init.d/bind9 start``

Probieren Sie aus, ob es funktioniert:

``ping ojn.raspberry.pi``

Sie sollten Folgendes haben:

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

> **Hinweis**
>
> Um den Ping zu beenden, muss man Strg+C drücken.

Zur Sicherheit fügen wir die Auflösung auch in die Datei /etc/hosts ein. Führen Sie dazu folgenden Befehl aus:

``vim /etc/hosts``

Und fügen Sie hinzu:

``192.168.0.162 ojn.raspberry.pi``

# Wiederherstellung von openjabnab

Zunächst erstellen wir den Benutzer:

````
adduser ojn
cd /home/ojn
````

Anschließend openjabnab klonen:

````
git clone https://github.com/OpenJabNab/OpenJabNab.git
chown -R ojn:ojn /home/ojn/OpenJabNab/
chmod 0777 /home/ojn/OpenJabNab/http-wrapper/ojn_admin/include
````

# Konfiguration des Webservers

So geht’s:

````
cd /etc/apache2/sites-available/
vim ojn.conf
````

Und fügen Sie hinzu:

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

Aktivieren Sie anschließend die Website:

``a2ensite ojn``

Anschließend müssen Sie das Verzeichnis des OpenJabnab-Servers freigeben. Führen Sie dazu folgenden Befehl aus:

``vim /etc/apache2/apache2.conf``

Und fügen Sie hinzu:

````
<Directory /home/ojn/>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
</Directory>
````

Anschließend starten wir Apache neu:

``service apache2 reload``

# Installation von openjabnab

So geht’s:

````
su ojn
cd /home/ojn/OpenJabNab/server
qmake -r
make
````

> **Hinweis**
>
> Dieser Schritt kann sehr lange dauern (bis zu 45 Minuten)

# Konfiguration von openjabnab

So geht’s:

````
cp openjabnab.ini-dist bin/openjabnab.ini
vim bin/openjabnab.ini
````

Und ändern Sie die folgenden Zeilen:

````
StandAloneAuthBypass = true
AllowAnonymousRegistration = true
AllowUserManageBunny = true
AllowUserManageZtamp = true
````

Und ersetzen Sie alle *my.domain.com* durch *ojn.raspberry.pi*

# Konfiguration des OpenJabnab-Webservers

In Ihrem Beitrag müssen Sie die Datei bearbeiten ``C:\Windows\System32\drivers\etc`` und hinzufügen:

``192.168.0.162 ojn.raspberry.pi``

Gehen Sie dann zu:

``http://ojn.raspberry.pi/ojn_admin/install.php``

Bestätigen Sie alles

# Start des Servers

So, alles ist bereit, jetzt muss nur noch der Server gestartet werden:

````
su ojn
cd ~/OpenJabNab/server/bin
./openjabnab
````

Gehen Sie nun zu:

``http://ojn.raspberry.pi/ojn_admin/index.php``

> **Hinweis**
>
> Wenn alles geklappt hat, sollten unten die Statistiken angezeigt werden

# Einrichtung des „Lapin“

Die Einrichtung des „Lapin“ ist ganz einfach: Sie müssen es ausstecken und wieder einstecken und dabei die Taste gedrückt halten. Normalerweise sollte es dann blau leuchten.

Anschließend sollte auf Ihrem PC ein neues WLAN-Netzwerk namens „nabaztagXX“ angezeigt werden. Verbinden Sie sich damit, indem Sie 192.168.0.1 eingeben.

Geben Sie dort Ihre WLAN-Konfiguration und die folgenden Informationen ein:

````
DHCP enabled : no
Local Mask : 255.255.255.0
Local gateway : 192.168.0.1 ou 192.168.0.254 (en fonction de votre réseau)
DNS server : 192.168.0.162
````

# Überwachung des OpenJabNab-Servers und automatischer Start

Wie Sie feststellen werden, wird der OpenJabnab-Server beendet, wenn Sie sich abmelden. Daher muss ein kleines Skript hinzugefügt werden, um den Server zu überwachen und automatisch zu starten. Führen Sie Folgendes aus:

````
cd /home/ojn
vim checkojn.sh
````

Und fügen Sie Folgendes hinzu:

````
if [ $(ps ax | grep openjabnab | grep -v grep | wc -l) -eq 0 ]; then
    su ojn; cd /home/ojn/OpenJabNab/server/bin;nohup ./openjabnab >> /dev/null 2>&1 &
fi
````

Führen Sie anschließend Folgendes aus:

``chmod +x checkojn.sh``

Nun muss das Skript zum Systemstart hinzugefügt und beispielsweise alle 15 Minuten eine Überprüfung durchgeführt werden:

``crontab -e``

Und fügen Sie hinzu:

````
@reboot /home/ojn/checkojn.sh
*/15 * * * * /home/ojn/checkojn.sh
````

> **Wichtig**
>
> Das muss unbedingt in die crontab von root eingefügt werden. Wenn Sie noch als Benutzer „ojn“ angemeldet sind, drücken Sie Strg+D.

# Einrichtung Ihres „Lapin“ in OpenJabNab

Gehen Sie auf:

``http://ojn.raspberry.pi/ojn_admin/index.php``

Sie benötigen:

![Installation.openjabnab](../images/installation.openjabnab.PNG)

Sie müssen nun ein Konto erstellen, indem Sie auf „Benutzer anlegen“ klicken:

![installation.openjabnab2](../images/installation.openjabnab2.PNG)

Geben Sie die erforderlichen Informationen ein und melden Sie sich an:

![installation.openjabnab3](../images/installation.openjabnab3.PNG)

Sobald Sie angemeldet sind, gehen Sie zum Server:

![installation.openjabnab4](../images/installation.openjabnab4.PNG)

Scrollen Sie dann nach unten, um die Liste der verbundenen „Lapins“ anzuzeigen und deren MAC-Adresse abzurufen:

![installation.openjabnab5](../images/installation.openjabnab5.PNG)

Gehen Sie anschließend auf „Konto“ und geben Sie den Namen und die MAC-Adresse des „Lapin“ ein und bestätigen Sie anschließend:

![installation.openjabnab6](../images/installation.openjabnab6.PNG)

Auf der Seite „Kaninchen“ finden Sie nun Ihr Kaninchen. Klicken Sie darauf, um die Einstellungen zu öffnen:

![installation.openjabnab7](../images/installation.openjabnab7.PNG)

Sie müssen nun die Violet-API aktivieren und auf „öffentlich“ umstellen. Hier finden Sie auch den Violet-API-Schlüssel, den Sie für Jeedom benötigen:

![installation.openjabnab8](../images/installation.openjabnab8.PNG)

Nachfolgend finden Sie eine Liste der Plugins. Vergessen Sie nicht, diese zu aktivieren (z. B. TTS oder Ohrsteuerung):

![installation.openjabnab9](../images/installation.openjabnab9.PNG)

# Jeedom-Konfiguration

Die Konfiguration in Jeedom ist recht einfach: Zunächst müssen Sie sich per SSH bei Jeedom anmelden (wenn Sie eine Jeedom-Box besitzen, finden Sie die Anmeldedaten in der Installationsanleitung). Bearbeiten Sie anschließend die Datei /etc/hosts

``vim /etc/hosts``

Und fügen Sie die folgende Zeile hinzu:

``192.168.0.162 ojn.raspberry.pi``

Anschließend läuft alles über Jeedom. Nachdem Sie Ihr „Kaninchen“ erstellt haben, nehmen Sie bitte folgende Einstellungen vor:

![Installation.openjabnab10](../images/installation.openjabnab10.PNG)

So, jetzt hat Ihr Kaninchen seinen eigenen Bau vor Ort!!!!!

# TTS lokal einrichten

Alles läuft lokal, mit Ausnahme der TTS, die über die Acapela-Website läuft. Durch Ändern einiger Dateien ist es jedoch möglich, diese ebenfalls lokal auszuführen.

> **Hinweis**
>
> Ich gehe davon aus, dass OpenJabNab unter /home/ojn/OpenJabNab installiert ist und dass Sie als OpenJabNab-Benutzer angemeldet sind, hier also als „ojn“.

## Erstellung des Jeedom-TTS

Sie müssen einen Ordner „jeedom“ unter „server/tts“ erstellen:

``mkdir /home/ojn/OpenJabNab/server/tts/jeedom``

Anschließend müssen drei Dateien erstellt werden:

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

> **Hinweis**
>
> Vergessen Sie nicht, die TODO-Einträge zu ersetzen

Anschließend muss die Jeedom-TTS-Funktion durch Bearbeiten der Datei aktiviert werden ``/home/ojn/OpenJabNab/server/tts/tts.pro`` durch Hinzufügen von Jeedom zu ``SUBDIRS`` :

````
TEMPLATE = subdirs
SUBDIRS = acapela google jeedom
````

## Neukompilierung

````
cd /home/ojn/OpenJabNab/server
qmake -r
make
````

## Änderung des TTS-Dienstes

Die Datei muss bearbeitet werden ``/home/ojn/OpenJabNab/server/bin/openjabnab.ini`` und ändern ``TTS=acapela`` von ``TTS=jeedom``

## Neustart von openjabnab

Am einfachsten ist es, den Rechner neu zu starten, um openjabnab neu zu starten.
