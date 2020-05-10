Plugin zur Verwendung der Jeedom Handy-Anwendung.

Die mobile Jeedom-Anwendung erfordert die Installation dieses Plugins, um
Die Box kann mit der mobilen Anwendung kommunizieren.

Konfiguration des mobilen Plugins 
==============================

Nach der Installation des Plugins müssen Sie es nur noch aktivieren :

![mobile1](../images/mobile1.png)

**Konfiguration**

Um das Plugin zu konfigurieren, müssen Sie die Telefone hinzufügen, die
wird in der Lage sein, auf Jeedom zuzugreifen.

So fügen Sie ein Telefon hinzu : **Plugins** → **Kommunikation** → **App
Handy** → **Hinzufügen**

![mobile2](../images/mobile2.png)

Hier sind die einzugebenden Parameter :

-   **Name der mobilen Ausrüstung** : Telefonname

-   **Aktivieren** : Aktivieren des Zugriffs für dieses Mobiltelefon

-   **Handyr Typ** : Auswahl des Telefonbetriebssystems (iOS, Android)

-   **Benutzer** : Benutzer, der diesem Zugriff zugeordnet ist

> **Spitze**
>
> Die Wahl des Benutzers ist wichtig, da sie die bestimmt
> Geräte, zu denen dieser gemäß seinen Rechten Zugang hat.

![mobile3](../images/mobile3.png)

Nach dem Speichern erhalten Sie einen QRCode
die Anwendung, um sich selbst zu konfigurieren.

Konfiguration der von der App empfangenen Plugins und Befehle 
=======================================================

Nach der Initialisierung des Handy Plugins haben Sie die Möglichkeit
Überarbeiten Sie generische Arten von Steuerelementen, Plugins und Teilen.

![mobile10](../images/mobile10.png)

Durch Klicken auf ein Plugin können Sie es zum Chatten autorisieren oder nicht
mit der mobilen App und konfigurieren Sie jeden der generischen Typen
mit seinen Befehlen verbunden.

![mobile11](../images/mobile11.png)

Durch Klicken auf ein Teil können Sie es autorisieren oder nicht
in der mobilen Anwendung vorhanden, und konfigurieren Sie jeden der Typen
Generika im Zusammenhang mit seinen Bestellungen.

![mobile12](../images/mobile12.png)

Konfiguration der mobilen App 
=====================================

Sie finden die Anwendungen auf den mobilen Jalousien :

**Android Google Play**

![Google Play FR](../images/Google_Play_FR.png)

**Apple App Store**

![App Store FR](../images/App_Store_FR.png)

Erster Start der App 
--------------------------

Beim ersten Start der mobilen Anwendung wird ein Tutorial angeboten
um Sie bei der Konfiguration zu unterstützen.

Nach dem Herunterladen und Installieren Ihrer Jeedom Handy App,
Starten Sie die Anwendung auf Ihrem Smartphone.

Sie gelangen dann in ein Konfigurations-Tutorial, das wir
raten zu folgen. Einige Schritte wurden zuvor ausgeführt.

Sie haben dann die Wahl zwischen einer manuellen Konfiguration oder
automatisch per QRcode. Wenn Sie die Konfiguration per QRcode wählen,
Flashen Sie einfach den QR-Code im Handy App-Plugin
zuvor erstellte Smartphone-Geräte. In diesem Fall wird die Anwendung
Rufen Sie automatisch die gesamte Konfiguration Ihres Jeedom und ab
automatisch verbinden. Wenn es über WLAN mit Ihrem Zuhause verbunden ist,
Die Anwendung verwendet automatisch die Jeedom-Ethernet-Adresse
intern in Ihrem Netzwerk. Wenn Sie in 4G oder 3G verbunden sind, dort
verwendet Ihre externe Adresse, um eine Verbindung zu Ihrem Jeedom herzustellen (von
Beispiel über den Jeedom DNS-Dienst, wenn Sie ihn verwenden). Wenn Sie möchten
Für die manuelle Konfiguration müssen Sie in diesem Fall die eingeben
Geben Sie die internen und externen IP-Adressen Ihres Jeedom weiter. Diese Option
ist einer informierten Öffentlichkeit vorbehalten.

Die Anwendung wird synchronisiert und Sie gelangen auf die Startseite
(vorangestellt von einem Mini-Präsentationsleitfaden).

Die mobile Jeedom-App ist jetzt betriebsbereit.

Favoriten 
-----------

In der Anwendung können Sie Favoriten (Verknüpfungen von
Befehle, Plugins, Szenarien).

Hier ist das Verfahren zum Erstellen :

Klicken Sie auf einem der + auf dem Startbildschirm der Anwendung :

![mobile dashboard 1](../images/mobile_dashboard_1.PNG)

Sie gelangen auf die Auswahlseite für den Verknüpfungstyp :

![mobile dashboard 2](../images/mobile_dashboard_2.PNG)

Zum Beispiel werden wir Maßnahmen ergreifen, also bietet es uns
Räume / Objekte :

![mobile dashboard 3](../images/mobile_dashboard_3.PNG)

Sie müssen nur die gewünschte Aktion auswählen
Verknüpfung :

![mobile dashboard 4](../images/mobile_dashboard_4.PNG)

Es ist dann möglich, die Farbe anzupassen (für die
drei Farben sind verfügbar) :

![mobile dashboard 5](../images/mobile_dashboard_5.PNG)

Sowie die beiden dazugehörigen Texte :

![mobile dashboard 6](../images/mobile_dashboard_6.PNG) ![mobile
Dashboard 7] (../ images / mobile_dashboard_7.PNG)

Hier haben Sie jetzt eine Verknüpfung Ihrer Bestellung (in der
Version 1.1 Es wird erwartet, dass Ein / Aus-Befehle auf dem angezeigt werden
gleicher Schlüssel).

![mobile dashboard 8](../images/mobile_dashboard_8.PNG)

So konfigurieren Sie generische Typen richtig 
============================================

Generische Typen im Handy Plugin 
------------------------------------------

Besser als Worte, hier ist ein Beispiel für typische Generika für a
Licht mit all seinen Bedienelementen (siehe auch Tabelle Light plus
unten) :

![generic type in plugin](../images/generic_type_in_plugin.jpg)

Anwendungsvorlagentabellen 
---------------------------------------

### Die Lichter #

Bild                           | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LIGHT](../images/LIGHT_1.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off` | `LIGHT_ON`<br/>`LIGHT_OFF`| présence de deux boutons "ON" et "Off" pas de retour d'état. |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off`<br/>`Lumière Etat` | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton Toggle`<br/>`Lumière Etat` | `LIGHT_TOGGLE`<br/>`LIGHT_STATE` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off |
![LIGHT](../images/LIGHT_3.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off`<br/>`Lumière Etat`<br/>`Lumière Slider` | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off et le slider permet de contrôler l'intensité |
![LIGHT](../images/LIGHT_4.jpg) | `Lumière Bouton On`<br/>`Lumière Bouton Off`<br/>`Lumière Etat`<br/>`Lumière Slider`<br/>`Lumière Couleur (info)`<br/>`Lumière Couleur (action)`<br/>`Lumière Mode` (optionnel, il sert à avoir des mode de lumière,par exemple arc-en-ciel sur les philips Hue) | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER`<br/>`LIGHT_COLOR`<br/>`LIGHT_SET_COLOR`<br/>`LIGHT_MODE` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off et le slider permet de contrôler l'intensité. Dans le cercle la couleur de la lampe est présente et lors d'un cloc dans celui-ci vous pouvez changer la couleur et activer un mode |

### Die Steckdosen #

Bild                           | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ENERGY](../images/ENERGY_1.jpg) | `Prise Bouton On`<br/>`Prise Bouton Off`| `ENERGY_ON`<br/>`ENERGY_OFF`| présence de deux boutons "ON" et "Off" pas de retour d'état. |
![ENERGY](../images/ENERGY_2.jpg) | `Prise Bouton On`<br/>`Prise Bouton Off`<br/>`Prise Etat` | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off |
![ENERGY](../images/ENERGY_3.jpg) | `Prise Bouton On`<br/>`Prise Bouton Off`<br/>`Prise Etat`<br/>`Prise Slider` | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE`<br/>`ENERGY_SLIDER` | Retour d'état présent, le bouton de gauche permet de switcher entre On et Off et le slider permet de contrôler l'intensité |

### Die Fensterläden #

Bild                           | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLAP](../images/FLAP_1.jpg)   | `Volet Bouton Monter`<br/>`Volet Bouton Descendre`<br/>`Volet Bouton Stop`<br/>`Volet Etat`(optionnel) | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE`(optionnel) | Präsenz de trois boutons "Monter", "Descendre", "Stop", retour d'état optionnel. |
![FLAP](../images/FLAP_2.jpg)   | `Volet Bouton Monter`<br/>`Volet Bouton Descendre`<br/>`Volet Bouton Stop`<br/>`Volet Etat`<br/>`Volet Bouton Slider` | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE`<br/>`FLAP_SLIDER` | Präsenz d'un slider, avec un bouton Monter/Descendre en Toggle (avec icône d'état) |

### Hochwasser #

Bild                           | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLOOD](../images/FLOOD.jpg)   | `Innondation`<br/>`Temperatur`(optionnel)<br/>`Humidité`(optionnel)<br/>`Sabotage`(optionnel)|`FLOOD`<br/>`TEMPERATURE`(optionnel)<br/>`HUMIDITY`(optionnel)<br/>`HUMIDITY`(optionnel) | Permet d'avoir son capteur d'inondation complet sur une seule ligne.

### Sperren #

Bild                         | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LOCK](../images/LOCK.jpg)   | `Sperren Etat`<br/>`Sperren Bouton Ouvrir`<br/>`Sperren Bouton Fermer` | `LOCK_STATE`<br/>`LOCK_OPEN`<br/>`LOCK_CLOSE` | Retour d'état présent, le bouton de gauche permet de switcher entre on et off |

### Meerjungfrau #

Bild                         | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SIREN](../images/SIREN.jpg)   | `Meerjungfrau Etat`<br/>`Meerjungfrau Bouton On`<br/>`Meerjungfrau Bouton Off` | `SIREN_STATE`<br/>`SIREN_ON`<br/>`SIREN_OFF` | Retour d'état présent, le bouton de gauche permet de switcher entre on et off |

### Rauch #

Bild                           | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SMOKE](../images/SMOKE.jpg)   | `Rauch`<br/>`Temperatur`(optionnel)|`SMOKE`<br/>`TEMPERATURE`(optionnel) | Permet d'avoir son capteur de fumée complet sur une seule ligne.

### Temperatur #

Bild                                       | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![TEMPERATURE](../images/TEMPERATURE.jpg)   | `Temperatur`<br/>`Humidité`(optionnel)|`TEMPERATURE`<br/>`HUMIDITY`(optionnel) | Voir Bild.

### Präsenz #

Bild                                 | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![PRESENCE](../images/PRESENCE.jpg)   | `Präsenz`<br/>`Temperatur`(optionnel)<br/>`Luminosité`(optionnel)<br/>`Humidité`(optionnel)<br/>`UV`(optionnel)<br/>`Sabotage`(optionnel)|`PRESENCE`<br/>`TEMPERATURE`(optionnel)<br/>`BRIGHTNESS`(optionnel)<br/>`HUMIDITY`(optionnel)<br/>`UV`(optionnel)<br/>`SABOTAGE`(optionnel) | Voir image.

### Öffnen #

Bild                                       | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![OPENING](../images/OPENING.jpg)   | `Porte / Fenêtre`<br/>`Temperatur`(optionnel)|`OPENING / OPENING_WINDOW`<br/>`TEMPERATURE`(optionnel) | Voir Bild (à savoir que vous pouvez choisir entre fenêtre et porte).

### Pilotdraht #

Bild                               | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:---------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![HEATING](../images/HEATING.jpg)   | `Chauffage fil pilote Bouton ON`<br/>`Chauffage fil pilote bouton OFF`<br/>`Chauffage fil pilote Etat`<br/>`Chauffage fil pilote bouton`(optionnel) | `HEATING_ON`<br/>`HEATING_OFF`<br/>`HEATING_STATE`<br/>`HEATING_OTHER`|Les boutons ON/OFF et Etat permette de créer le bouton tout à gauche du template et les `chauffage fil pilote Bouton`sont là pour rajouter des boutons (5 max)

DIE JOKERS 
----------

### Allgemeine Aktion #

Bild                             | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ACTION](../images/ACTION.jpg)   | `Action Générique`           | `GENERIC_ACTION`             | Le bouton prend la forme du type de l'action. Par défaut c'est un toggle, si c'est un message alors vous avez une enveloppe, si slider vous avez un slider etc...

### Allgemeine Informationen #

Bild                         | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![INFO](../images/INFO.jpg)   | `Information Générique`           | `GENERIC_INFO`             | Le bouton prend la forme du type de l'info.


Fehlerbehebung 
===============

Handy Hilfe 
-----------

**→ Ich bin auf Android-Version der App (1.0.1 oder 1,0.0) Ich kann nicht
Kein Zugriff auf meine Zimmer oder gar auf die Konfiguration der App.**

> **Kaution**
>
> Sie hatten ein Popup, das Sie vor Bedenken hinsichtlich der Parameter warnte
> Zugänglichkeit, müssen Sie nur zum gehen
> Eingabehilfeneinstellungen Ihres Mobiltelefons und deaktivieren Sie diese
> Anwendungen, die diese Option verwenden. (Eine Korrektur wird vorgenommen
> bald auf der App)

**→ Ich habe eine Nachricht in einer der Zeilen meiner Module, die mir dies mitteilt
Fehlen eines generischen Typs !**

> **Spitze**
>
> Wenn Sie diese Nachricht lesen, erfahren Sie, für welchen generischen Typ sie fehlt
> Erstellen Sie eine kompatible Vorlage. Wenden Sie es einfach an.
> Siehe [Dokument Kapitel Typ
> Generisch] (https://www.jeedom.com/doc/documentation/plugins/mobile/fr_FR/mobile#_configuration_des_plugins_et_commandes_que_reçoit_l_app).

**→ Ich habe ein Problem mit einem der sogenannten voll integrierten Plugins (Wetter,
Thermostat, Alarm, Kamera) !**

> **Spitze**
>
> Zögern Sie nicht, auf Ihr Modul zuzugreifen und auf zu klicken
> Speichern Sie erneut, um die Typen wieder einzuschließen
> Credits für das Modul.

**→ Es ist unmöglich, Informationen zur Begrüßung der App zu veröffentlichen !**

> **Spitze**
>
> Dies ist normal und wird in Version 1.1 verfügbar sein.

**→ Ich habe die Anwendung, die viel Speicherplatz in meinem beansprucht
Telefon !**

> **Spitze**
>
> In Version 1.0 ist ein Fehler aufgetreten.0 und 1,0.1 auf dem Spiel
> Kamera. Das Problem wird mit 1.0 nicht wieder auftreten.2, zu löschen
> Verstecke es, ohne die App zu überteuern. Gehe einfach zur Konfiguration
> Klicken Sie in Ihrer mobilen App auf "Cache löschen"".

**→ Ich habe Bedenken hinsichtlich der ersten Synchronisierung in der App oder von SQL im mobilen Plugin !**

> **Spitze**
>
> Sie müssen generische Typen eingeben und das Plugin zum Senden von Generika autorisieren. Sehen Sie sich das Dokument etwas höher an.
