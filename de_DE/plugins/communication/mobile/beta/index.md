# Mobiles Plugin

Plugin zur Verwendung der Jeedom Mobile-Anwendung.

Die mobile Jeedom-Anwendung erfordert die Installation dieses Plugins, damit die Box mit der mobilen Anwendung kommunizieren kann.

# Konfiguration des mobilen Plugins

Nach der Installation des Plugins müssen Sie es nur noch aktivieren :

![mobile1](../images/mobile1.png)

****

Um das Plugin zu konfigurieren, müssen Sie die Telefone hinzufügen, die auf Jeedom zugreifen können.

So fügen Sie ein Telefon hinzu : ****  ****  **App
Mobile**  ****

![mobile2](../images/mobile2.png)

Hier sind die einzugebenden Parameter :

-   **Name der mobilen Ausrüstung** : Telefonname
-   **** : Aktivieren des Zugriffs für dieses Mobiltelefon
-   **Mobiler Typ** : Auswahl des Telefonbetriebssystems (iOS, Android)
-   **** : Benutzer, der diesem Zugriff zugeordnet ist

> ****
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

****

![Google Play FR](../images/Google_Play_FR.png)

****

![ Store FR](../images/App_Store_FR.png)

## Erster Start der App

Wenn Sie die Mobile-Anwendung zum ersten Mal starten, wird Ihnen ein Lernprogramm angeboten, das Sie bei der Konfiguration unterstützt.

Starten Sie die Anwendung nach dem Herunterladen und Installieren Ihrer mobilen Jeedom-Anwendung auf Ihrem Smartphone.

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

                           | Typ Gattung               | Dev Plugin Teil            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LIGHT](../images/LIGHT_1.jpg) | `Lumière Bouton On`<br/>`Button Off Light` | <br/>| Vorhandensein von zwei Tasten "EIN" und "Aus" keine Statusrückmeldung. |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton On`<br/>`Button Off Light`<br/>`State Light` | <br/><br/> | Bei vorhandener Statusrückmeldung wechselt die linke Taste zwischen Ein und Aus |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton Toggle`<br/>`State Light` | <br/> | Bei vorhandener Statusrückmeldung wechselt die linke Taste zwischen Ein und Aus |
![LIGHT](../images/LIGHT_3.jpg) | `Lumière Bouton On`<br/>`Button Off Light`<br/>`State Light`<br/>`Light Slider` | <br/><br/><br/> | Bei vorhandener Statusrückmeldung können Sie mit der linken Taste zwischen Ein und Aus wechseln und mit dem Schieberegler die Intensität steuern |
![LIGHT](../images/LIGHT_4.jpg) | `Lumière Bouton On`<br/>`Button Off Light`<br/>`State Light`<br/>`Light Slider`<br/>`Lichtfarbe (info)`<br/>`Lichtfarbe (Aktion)`<br/>`Lichtmodus` (optional, wird verwendet, um Lichtmodi zu haben, zum Beispiel Regenbogen auf Hue philips) | <br/><br/><br/><br/><br/><br/> | Bei vorhandener Statusrückmeldung können Sie mit der linken Taste zwischen Ein und Aus wechseln und mit dem Schieberegler die Intensität steuern. Im Kreis ist die Farbe der Lampe vorhanden. Wenn Sie darauf klicken, können Sie die Farbe ändern und einen Modus aktivieren |

### Die Steckdosen

                           | Typ Gattung               | Dev Plugin Teil            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ENERGY](../images/ENERGY_1.jpg) | `Prise Bouton On`<br/>`Button Off Socket`| <br/>| Vorhandensein von zwei Tasten "EIN" und "Aus" keine Statusrückmeldung. |
![ENERGY](../images/ENERGY_2.jpg) | `Prise Bouton On`<br/>`Button Off Socket`<br/>`State Taking` | <br/><br/> | Bei vorhandener Statusrückmeldung wechselt die linke Taste zwischen Ein und Aus |
![ENERGY](../images/ENERGY_3.jpg) | `Prise Bouton On`<br/>`Button Off Socket`<br/>`State Taking`<br/>`Slider Socket` | <br/><br/><br/> | Bei vorhandener Statusrückmeldung können Sie mit der linken Taste zwischen Ein und Aus wechseln und mit dem Schieberegler die Intensität steuern |

### Die Fensterläden

                           | Typ Gattung               | Dev Plugin Teil            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLAP](../images/FLAP_1.jpg)   | `Volet Bouton Monter`<br/>`Down-Button-Bereich`<br/>`Stop Button Pane`<br/>`State pane` (optional)) | <br/><br/><br/>`FLAP_STATE` (optional) | Vorhandensein von drei Tasten "Auf", "Ab", "Stopp", optionale Statusrückmeldung. |
![FLAP](../images/FLAP_2.jpg)   | `Volet Bouton Monter`<br/>`Down-Button-Bereich`<br/>`Stop Button Pane`<br/>`State pane`<br/>`Slider Button Pane` | <br/><br/><br/><br/> | Vorhandensein eines Schiebereglers mit einer Auf / Ab-Taste in Umschalten (mit Statussymbol) |

### Inondation

                           | Typ Gattung               | Dev Plugin Teil            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLOOD](../images/FLOOD.jpg)   | `Innondation`<br/>`TEMPERATUR` (optional)<br/>`Luftfeuchtigkeit` (optional)<br/>`SABOTAGE` (optional)|`FLOOD`<br/>`TEMPERATUR` (optional)<br/>`FEUCHTIGKEIT` (optional)<br/>`FEUCHTIGKEIT` (optional) | Ermöglicht es Ihnen, Ihren gesamten Hochwassersensor in einer einzigen Leitung zu haben.

### Serrure

                         | Typ Gattung               | Dev Plugin Teil            |           |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LOCK](../images/LOCK.jpg)   | ` Etat`<br/>`Open Button Lock`<br/>`Lock Button Close` | <br/><br/> | Bei vorhandener Statusrückmeldung wechselt die linke Taste zwischen Ein und Aus |

### Meerjungfrau

                         | Typ Gattung               | Dev Plugin Teil            |           |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SIREN](../images/SIREN.jpg)   | `Meerjungfrau Etat`<br/>`Siren Button On`<br/>`Siren Button Off` | <br/><br/> | Bei vorhandener Statusrückmeldung wechselt die linke Taste zwischen Ein und Aus |

### Rauch

                           | Typ Gattung               | Dev Plugin Teil            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SMOKE](../images/SMOKE.jpg)   | `Rauch`<br/>`TEMPERATUR` (optional)|`SMOKE`<br/>`TEMPERATUR` (optional) | Ermöglicht es Ihnen, Ihren kompletten Rauchsensor in einer einzigen Leitung zu haben.

### Temperatur

                                       | Typ Gattung               | Dev Plugin Teil            |           |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![TEMPERATURE](../images/TEMPERATURE.jpg)   | `Temperatur`<br/>`Luftfeuchtigkeit` (optional)|`TEMPERATURE`<br/>`FEUCHTIGKEIT` (optional) | Siehe Bild.

### Präsenz

                                 | Typ Gattung               | Dev Plugin Teil            |           |
:-----------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![PRESENCE](../images/PRESENCE.jpg)   | `Präsenz`<br/>`TEMPERATUR` (optional)<br/>`Helligkeit` (optional)<br/>`Luftfeuchtigkeit` (optional)<br/>`UV` (optional)<br/>`SABOTAGE` (optional)|`PRESENCE`<br/>`TEMPERATUR` (optional)<br/>`BRIGHTNESS` (optional)<br/>`FEUCHTIGKEIT` (optional)<br/>`UV` (optional)<br/>`SABOTAGE` (optional) | Siehe Bild.

### Ouvrant

                                       | Typ Gattung               | Dev Plugin Teil            |           |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![OPENING](../images/OPENING.jpg)   | `Porte / Fenêtre`<br/>`TEMPERATUR` (optional)|<br/>`TEMPERATUR` (optional) | Siehe Bild (d. H. Sie können zwischen Fenster und Tür wählen).

### Pilotdraht

                               | Typ Gattung               | Dev Plugin Teil            |           |
:---------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![HEATING](../images/HEATING.jpg)   | `Chauffage fil pilote Bouton ON`<br/>`Taste zum Ausheizen des Pilotkabels AUS`<br/>`Heizungs-Pilotdrahtzustand`<br/>`Button Pilot Wire Heizung` (optional) | <br/><br/><br/>|Mit den Schaltflächen EIN / AUS und Status können Sie die Schaltfläche ganz links in der Vorlage erstellen, und mit der Taste "Pilotdrahtheizung" können Sie Schaltflächen hinzufügen (max. 5))

## DIE JOKERS

### Allgemeine Aktion

                             | Typ Gattung               | Dev Plugin Teil            |           |
:-------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ACTION](../images/ACTION.jpg)   | `Action Générique`           | `GENERIC_ACTION`             | Le bouton prend la forme du type de l'action. Par défaut c'est un toggle, si c'est un message alors vous avez une enveloppe, si slider vous avez un slider etc...

### Allgemeine Informationen

                         | Typ Gattung               | Dev Plugin Teil            |           |
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
 !**

In Version 1.0 ist ein Fehler aufgetreten.0 und 1,0.1 im Kamerateil. Das Problem wird mit 1.0 nicht wieder auftreten.2 Um den Cache zu löschen, ohne die App zu teuer zu machen, gehen Sie einfach zur Konfiguration Ihrer mobilen App und klicken Sie auf "Cache löschen"".

**Ich habe Bedenken hinsichtlich der ersten Synchronisierung in der App oder von SQL im mobilen Plugin !**

Sie müssen generische Typen eingeben und das Plugin zum Senden von Generika autorisieren. Sehen Sie sich das Dokument etwas höher an.
