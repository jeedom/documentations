# Mobiles Plugin

Plugin zur Verwendung der Jeedom Mobile-Anwendung.

Die mobile Jeedom-Anwendung erfordert die Installation dieses Plugins, damit die Box mit der mobilen Anwendung kommunizieren kann.



# Konfiguration des Mobile-Plugins für Application V2

Nach der Installation des Plugins müssen Sie es nur noch aktivieren :

![mobile1](../images/mobile1.png)


# Erste Verbindung mit der V2-Anwendung

Um Ihr Telefon zu verbinden : es gibt 2 mögliche Methoden;
Auf dem ersten Bildschirm der Anwendung wird Ihnen angeboten, Ihr Marktkonto zu verbinden und so alle mit diesem Konto verknüpften Boxen zu finden oder einfach eine Box hinzuzufügen.

![v2ConnectMarket](../images/v2firstConnect.jpeg)


#### __LOGIN ÜBER DAS MARKET ACCOUNT__ :

![v2ConnectMarket](../images/v2connectMarket.PNG)

Sie müssen lediglich Ihre Markt-ID und Ihr Passwort eingeben.


#### __LOGIN ÜBER BOX-ID__ :

![v22methods](../images/v22methods.PNG)

Mehrere Auswahlmöglichkeiten auf diesem Bildschirm :

  - Sie geben die URL Ihres Jeedoms (intern oder extern) sowie die Zugangskennungen dazu ein und bestätigen mit dem LOGIN-Button


  - Sie klicken auf QR-Code : ein neuer Bildschirm erscheint; Sie können einen QRCode aus dem Mobile-Plugin der Box, die Sie hinzufügen möchten, über die Registerkarte QRCODE des Plugins scannen.

![v2ModalQrApp](../images/v2QRCodeConnect.PNG)


> Registerkarte „Qr-Code“ des Mobile-Plugins

>> ![v2ModalPlugin](../images/v2ModalQrCode.png)



Nach diesem ersten Schritt sind Sie in der Anwendung registriert: Wenn Sie das Mobile-Plugin haben, haben Sie über das Menü Zugriff auf Benachrichtigungen, QrCodes, Menüanpassung ....


Im Menü haben Sie eine Registerkarte Boxen, die alle auf diesem Marktkonto vorhandenen Boxen zusammenfasst

![v2MenuBoxs](../images/v2MenuBoxs.PNG)

![v2floutedBoxs](../images/v2floutedBoxs.png)

Klicken Sie einfach auf das Kästchen, in dem das Mobile-Plugin installiert ist, und identifizieren Sie sich dann, um auf das Kästchen zuzugreifen.

Das Feld wird an den Anfang der Liste gestellt, nachdem es seine Authentifizierung validiert hat.
Sie können dies für mehrere Boxen tun.

Sie können auch unten rechts auf die Schaltfläche + klicken, um auf verschiedene Optionen zuzugreifen
  - QRCode zum Hinzufügen einer Box zur Liste über das Mobile-Plugin,
  - Manuell, um eine Box manuell hinzuzufügen
  - Erkennung Atlas und Luna (wenn Sie mit WLAN verbunden sind, erkennen die Boxen im Netzwerk)
  - Market-Synchronisierung, um konfigurierte Market-Kontoinformationen zu aktualisieren

![v2greenBtnAdd](../images/v2greenBtnAdd.PNG)






# Konfiguration des mobilen Plugins

Nach der Installation des Plugins müssen Sie es nur noch aktivieren :

![mobile1](../images/mobile1.png)

**Konfiguration**

Um das Plugin zu konfigurieren, müssen Sie die Telefone hinzufügen, die auf Jeedom zugreifen können.

So fügen Sie ein Telefon hinzu : **Plugins** → **Kommunikation** → **App
Mobile** → **Hinzufügen**

![mobile2](../images/mobile2.png)

Hier sind die einzugebenden Parameter :

-   **Name der mobilen Ausrüstung** : Telefonname
-   **Aktivieren** : Aktivieren des Zugriffs für dieses Mobiltelefon
-   **Mobiler Typ** : Auswahl des Telefonbetriebssystems (iOS, Android)
-   **Benutzer** : Benutzer, der diesem Zugriff zugeordnet ist

> **Spitze**
>
> Die Wahl des Benutzers ist wichtig, da sie die Ausrüstung bestimmt, auf die er gemäß seinen Rechten zugreifen kann.

![mobile3](../images/mobile3.png)

Nach dem Speichern erhalten Sie einen QRCode, mit dem sich die Anwendung selbst konfigurieren kann.

# Konfiguration der von der App empfangenen Plugins und Befehle

Nach der Initialisierung des Mobile Plugins haben Sie die Möglichkeit, die generischen Arten von Bestellungen, Plugins und Teilen zu ändern.

![mobile10](../images/mobile10.png)

Durch Klicken auf ein Plugin können Sie es autorisieren oder nicht, mit der mobilen Anwendung zu chatten, und jeden der generischen Typen konfigurieren, die seinen Befehlen zugeordnet sind.

![mobile11](../images/mobile11.png)

Durch Klicken auf ein Teil können Sie es autorisieren oder nicht, in der mobilen Anwendung vorhanden zu sein, und jeden der generischen Typen konfigurieren, die seinen Bestellungen zugeordnet sind.

![mobile12](../images/mobile12.png)

# Konfiguration der mobilen App

Sie finden die Anwendungen auf den mobilen Jalousien :

**Android Google Play**

![Google Play FR](../images/Google_Play_FR.png)

**Apple App Store**

![App Store FR](../images/App_Store_FR.png)

## Erster Start der App

Wenn Sie die Mobile-Anwendung zum ersten Mal starten, wird Ihnen ein Lernprogramm angeboten, das Sie bei der Konfiguration unterstützt.

Nachdem Sie Ihre Jeedom-Mobilanwendung heruntergeladen und installiert haben, starten Sie die Anwendung auf Ihrem Smartphone.

Sie gelangen dann zu einem Konfigurations-Tutorial, dem Sie folgen sollten. Einige Schritte wurden zuvor ausgeführt.

Sie haben dann die Wahl zwischen einer manuellen oder automatischen Konfiguration per QRcode. Wenn Sie sich für die Konfiguration per QR-Code entscheiden, flashen Sie einfach den QR-Code, der im Mobile App-Plugin des zuvor erstellten Smartphone-Geräts vorhanden ist. In diesem Fall stellt die Anwendung automatisch die gesamte Konfiguration Ihres Jeedom wieder her und stellt automatisch eine Verbindung her. Wenn die Verbindung über WLAN mit Ihrem Zuhause verbunden ist, verwendet die Anwendung automatisch die in Ihrem Netzwerk interne Jeedom-Ethernet-Adresse. Wenn Sie mit 4G oder 3G verbunden sind, wird Ihre externe Adresse verwendet, um eine Verbindung zu Ihrem Jeedom herzustellen (z. B. über den Jeedom-DNS-Dienst, wenn Sie diesen verwenden). Wenn Sie sich für eine manuelle Konfiguration entscheiden, müssen Sie in diesem Fall die internen und externen IP-Adressen Ihres Jeedom manuell eingeben. Diese Option ist einer informierten Öffentlichkeit vorbehalten.

Die Anwendung wird synchronisiert und Sie gelangen auf die Startseite (vorangestellt von einem Mini-Präsentationshandbuch)).

Die mobile Jeedom-App ist jetzt betriebsbereit.

## Favoriten

In der Anwendung können Sie Favoriten haben (Verknüpfungen von Befehlen, Plugins, Szenarien).

Hier ist das Verfahren zum Erstellen :

Klicken Sie auf einem der + auf dem Startbildschirm der Anwendung :

![mobile dashboard 1](../images/mobile_dashboard_1.PNG)

Sie gelangen auf die Auswahlseite für den Verknüpfungstyp :

![mobile dashboard 2](../images/mobile_dashboard_2.PNG)

Zum Beispiel werden wir Maßnahmen ergreifen, damit wir Teile / Objekte erhalten :

![mobile dashboard 3](../images/mobile_dashboard_3.PNG)

Wählen Sie dann einfach die gewünschte Aktion als Verknüpfung aus :

![mobile dashboard 4](../images/mobile_dashboard_4.PNG)

Es ist dann möglich, die Farbe dieser zu personalisieren (im Moment werden drei Farben vorgeschlagen) :

![mobile dashboard 5](../images/mobile_dashboard_5.PNG)

Sowie die beiden dazugehörigen Texte :

![mobile dashboard 6](../images/mobile_dashboard_6.PNG)
![mobile dashboard 7](../images/mobile_dashboard_7.PNG)

Hier haben Sie jetzt eine Verknüpfung Ihrer Bestellung (in Version 1.1 Es wird erwartet, dass Ein / Aus-Befehle auf derselben Taste angezeigt werden).

![mobile dashboard 8](../images/mobile_dashboard_8.PNG)

# So konfigurieren Sie generische Typen richtig

## Generische Typen im Mobile Plugin

Besser als Worte, hier ist ein Beispiel für die generischen Credits für ein Licht mit all seinen Steuerelementen (siehe auch die Lichttabelle unten) :

![generic type in plugin](../images/generic_type_in_plugin.jpg)

## Anwendungsvorlagentabellen

### Die Lichter

Bild                           | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LIGHT](../images/LIGHT_1.jpg) | `Lumière Bouton On`<br/>`Button Off Light` | `LIGHT_ON`<br/>`LIGHT_OFF`| Vorhandensein von zwei Tasten "EIN" und "Aus" keine Statusrückmeldung. |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton On`<br/>`Button Off Light`<br/>`State Light` | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE` | Bei vorhandener Statusrückmeldung wechselt die linke Taste zwischen Ein und Aus |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton Toggle`<br/>`State Light` | `LIGHT_TOGGLE`<br/>`LIGHT_STATE` | Bei vorhandener Statusrückmeldung wechselt die linke Taste zwischen Ein und Aus |
![LIGHT](../images/LIGHT_3.jpg) | `Lumière Bouton On`<br/>`Button Off Light`<br/>`State Light`<br/>`Light Slider` | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER` | Bei vorhandener Statusrückmeldung können Sie mit der linken Taste zwischen Ein und Aus wechseln und mit dem Schieberegler die Intensität steuern |
![LIGHT](../images/LIGHT_4.jpg) | `Lumière Bouton On`<br/>`Button Off Light`<br/>`State Light`<br/>`Light Slider`<br/>`Lichtfarbe (info)`<br/>`Lichtfarbe (Aktion)`<br/>`Lichtmodus` (optional, wird verwendet, um Lichtmodi zu haben, zum Beispiel Regenbogen auf Hue philips) | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER`<br/>`LIGHT_COLOR`<br/>`LIGHT_SET_COLOR`<br/>`LIGHT_MODE` | Bei vorhandener Statusrückmeldung können Sie mit der linken Taste zwischen Ein und Aus wechseln und mit dem Schieberegler die Intensität steuern. Im Kreis ist die Farbe der Lampe vorhanden. Wenn Sie darauf klicken, können Sie die Farbe ändern und einen Modus aktivieren |

### Die Steckdosen

Bild                           | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ENERGY](../images/ENERGY_1.jpg) | `Prise Bouton On`<br/>`Button Off Socket`| `ENERGY_ON`<br/>`ENERGY_OFF`| Vorhandensein von zwei Tasten "EIN" und "Aus" keine Statusrückmeldung. |
![ENERGY](../images/ENERGY_2.jpg) | `Prise Bouton On`<br/>`Button Off Socket`<br/>`State Taking` | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE` | Bei vorhandener Statusrückmeldung wechselt die linke Taste zwischen Ein und Aus |
![ENERGY](../images/ENERGY_3.jpg) | `Prise Bouton On`<br/>`Button Off Socket`<br/>`State Taking`<br/>`Slider Socket` | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE`<br/>`ENERGY_SLIDER` | Bei vorhandener Statusrückmeldung können Sie mit der linken Taste zwischen Ein und Aus wechseln und mit dem Schieberegler die Intensität steuern |

### Die Fensterläden

Bild                           | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLAP](../images/FLAP_1.jpg)   | `Volet Bouton Monter`<br/>`Down-Button-Bereich`<br/>`Stop Button Pane`<br/>`State pane` (optional)) | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE` (optional) | Vorhandensein von drei Tasten "Auf", "Ab", "Stopp", optionale Statusrückmeldung. |
![FLAP](../images/FLAP_2.jpg)   | `Volet Bouton Monter`<br/>`Down-Button-Bereich`<br/>`Stop Button Pane`<br/>`State pane`<br/>`Slider Button Pane` | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE`<br/>`FLAP_SLIDER` | Vorhandensein eines Schiebereglers mit einer Auf / Ab-Taste in Umschalten (mit Statussymbol) |

### Inondation

Bild                           | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLOOD](../images/FLOOD.jpg)   | `Innondation`<br/>`TEMPERATUR` (optional)<br/>`Luftfeuchtigkeit` (optional)<br/>`SABOTAGE` (optional)|`FLOOD`<br/>`TEMPERATUR` (optional)<br/>`FEUCHTIGKEIT` (optional)<br/>`FEUCHTIGKEIT` (optional) | Ermöglicht es Ihnen, Ihren gesamten Hochwassersensor in einer einzigen Leitung zu haben.

### Serrure

Bild                         | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LOCK](../images/LOCK.jpg)   | `Sperren Etat`<br/>`Open Button Lock`<br/>`Lock Button Close` | `LOCK_STATE`<br/>`LOCK_OPEN`<br/>`LOCK_CLOSE` | Bei vorhandener Statusrückmeldung wechselt die linke Taste zwischen Ein und Aus |

### Meerjungfrau

Bild                         | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SIREN](../images/SIREN.jpg)   | `Meerjungfrau Etat`<br/>`Siren Button On`<br/>`Siren Button Off` | `SIREN_STATE`<br/>`SIREN_ON`<br/>`SIREN_OFF` | Bei vorhandener Statusrückmeldung wechselt die linke Taste zwischen Ein und Aus |

### Rauch

Bild                           | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SMOKE](../images/SMOKE.jpg)   | `Rauch`<br/>`TEMPERATUR` (optional)|`SMOKE`<br/>`TEMPERATUR` (optional) | Ermöglicht es Ihnen, Ihren kompletten Rauchsensor in einer einzigen Leitung zu haben.

### Temperatur

Bild                                       | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![TEMPERATURE](../images/TEMPERATURE.jpg)   | `Temperatur`<br/>`Luftfeuchtigkeit` (optional)|`TEMPERATURE`<br/>`FEUCHTIGKEIT` (optional) | Siehe Bild.

### Präsenz

Bild                                 | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![PRESENCE](../images/PRESENCE.jpg)   | `Präsenz`<br/>`TEMPERATUR` (optional)<br/>`Helligkeit` (optional)<br/>`Luftfeuchtigkeit` (optional)<br/>`UV` (optional)<br/>`SABOTAGE` (optional)|`PRESENCE`<br/>`TEMPERATUR` (optional)<br/>`BRIGHTNESS` (optional)<br/>`FEUCHTIGKEIT` (optional)<br/>`UV` (optional)<br/>`SABOTAGE` (optional) | Siehe Bild.

### Ouvrant

Bild                                       | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![OPENING](../images/OPENING.jpg)   | `Porte / Fenêtre`<br/>`TEMPERATUR` (optional)|`OPENING / OPENING_WINDOW`<br/>`TEMPERATUR` (optional) | Siehe Bild (d. H. Sie können zwischen Fenster und Tür wählen).

### Pilotdraht

Bild                               | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:---------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![HEATING](../images/HEATING.jpg)   | `Chauffage fil pilote Bouton ON`<br/>`Taste zum Ausheizen des Pilotkabels AUS`<br/>`Heizungs-Pilotdrahtzustand`<br/>`Button Pilot Wire Heizung` (optional) | `HEATING_ON`<br/>`HEATING_OFF`<br/>`HEATING_STATE`<br/>`HEATING_OTHER`|Mit den Schaltflächen EIN / AUS und Status können Sie die Schaltfläche ganz links in der Vorlage erstellen, und mit der Taste "Pilotdrahtheizung" können Sie Schaltflächen hinzufügen (max. 5))

## DIE JOKERS

### Allgemeine Aktion

Bild                             | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:-------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ACTION](../images/ACTION.jpg)   | `Action Générique`           | `GENERIC_ACTION`             | Le bouton prend la forme du type de l'action. Par défaut c'est un toggle, si c'est un message alors vous avez une enveloppe, si slider vous avez un slider etc...

### Allgemeine Informationen

Bild                         | Typ Gattung               | Dev Plugin Teil            | Beschreibung          |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![INFO](../images/INFO.jpg)   | `Information Générique`           | `GENERIC_INFO`             | Le bouton prend la forme du type de l'info.


# Troubleshooting

**Ich bin auf Android-Version der App (1.0.1 oder 1,0.0) Ich kann nicht auf meine Teile oder sogar die Konfiguration der App zugreifen.**

Sie hatten ein Popup-Fenster, das Sie vor Bedenken hinsichtlich der Eingabehilfeneinstellungen warnte. Sie müssen daher nur zu den Eingabehilfeneinstellungen Ihres Mobiltelefons gehen und die Anwendungen mit dieser Option deaktivieren. (Ein Fix wird in Kürze in der App veröffentlicht)

**Ich habe eine Nachricht in einer der Zeilen meiner Module, die mir sagt, dass es so ist
Fehlen eines generischen Typs !**

Wenn Sie diese Nachricht lesen, erfahren Sie, welcher generische Typ fehlt, um eine kompatible Vorlage zu erstellen. Wenden Sie es einfach an.Siehe die [doc Kapitel Generischer Typ](https://www.jeedom.com/doc/documentation/plugins/mobile/de_DE/mobile#_configuration_des_plugins_et_commandes_que_reçoit_l_app).

**Ich habe ein Problem mit einem der Plugins namens voll integriert (Wetter,
Thermostat, Alarm, Kamera) !**

Zögern Sie nicht, auf Ihr Modul zuzugreifen, und klicken Sie erneut auf Speichern. Dadurch werden die mit dem Modul verknüpften generischen Typen wieder aufgenommen.

**Informationen zur Begrüßung der App können nicht angegeben werden !**

Dies ist normal und wird in Version 1.1 verfügbar sein.

**Ich habe die Anwendung, die viel Speicher in meinem beansprucht
Telefon !**

In Version 1.0 ist ein Fehler aufgetreten.0 und 1,0.1 im Kamerateil. Das Problem wird mit 1.0 nicht wieder auftreten.2 Um den Cache zu löschen, ohne die App zu teuer zu machen, gehen Sie einfach zur Konfiguration Ihrer mobilen App und klicken Sie auf "Cache löschen"".

**Ich habe Bedenken hinsichtlich der ersten Synchronisierung in der App oder von SQL im mobilen Plugin !**

Sie müssen generische Typen eingeben und das Plugin zum Senden von Generika autorisieren. Sehen Sie sich das Dokument etwas höher an.
