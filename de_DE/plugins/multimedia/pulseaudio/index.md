Plugin zum Anschließen eines Bluetooth-Lautsprechers an Ihr Jeedom. Die
Mit dem Plugin können Sie auch die Lautstärke Ihres Lautsprechers über das Plugin steuern
Pulseaudio-Paket.

Description : 
=============

Dieses Plugin ermöglicht die Verwaltung des PulseAudio-Dienstes. Dieser Service verwaltet alles
in Bezug auf die Audio- und Mikrofoneingänge und -ausgänge als die Ausgänge
entweder verkabelt, über Bluetooth oder im Netzwerk.

Außerdem wird der PulseAudio-Dienst in Ihrem Netzwerk sichtbar
intern können Sie es dann von einem laufenden PC aus steuern
GNU / Linux und lassen Sie die Musik auf Ihrem PC abspielen
gesendet auf Jeedom Tonausgabe.

Dieses Plugin ermöglicht auch das Hinzufügen von Bluetooth-Lautsprechern zum Dienst
Jeedom PulseAudio und bietet es als Standardausgabe. Also über
Jeedom und dieses PulseAudio-Plugin können Sie Deezer auf Ihrem PC ausführen
unter GNU / Linux (oder Windows mit dem kompatiblen PulseAudio-Client) und
Lassen Sie den Ton an die Bluetooth-Lautsprecher senden
angeschlossen an Jeedom sowie an den Soundausgang (HDMI / Jack) von Jeedom
mit einem Verstärker zu vervollständigen.

Dieser Simultanmodus wird bald mit der Möglichkeit der Einstellung verfügbar sein
Latenz, um die Verzögerung zwischen den Tonausgängen zu vermeiden
HDMI / Jack / Bluetooth, perfekt für den Abendmodus zum Glauben an die
Terrasse mit Bluetooth-Lautsprechern und im Raum mit dem Verstärker !

Konfiguration 
=============

Plugin Installation 
----------------------

Nach dem Herunterladen des Plugins müssen Sie lediglich das aktivieren
plugin :

![image](index_html_6e0dcff06783d142.png)

Starten Sie die Installation von Abhängigkeiten:

![image](index_html_ee255917648caafe.png)

Die Installation kann einige Zeit dauern

![image](index_html_8f5ac294e319722b.png)

Sobald die Abhängigkeiten installiert sind, das Datum der letzten Installation
ist registriert:

![image](index_html_ae07628d0d9cf23c.png)

Allez dans les logs puis vérifiez le log « pulseaudio\_dep » afin de
Überprüfen Sie, ob Fehler vorliegen

![image](index_html_1857092a331f01.png)

Plugin Konfiguration 
-----------------------

Zurück in der Konfiguration des Pulseaudio-Plugins im Abschnitt
« Plugin PulseAudio », sélectionner le port de clé Bluetooth :

![image](index_html_a5211f99cfeafe53.png)

Speichern Sie abschließend die Änderungen.

Gerätekonfiguration 
=============================

Um auf die Konfiguration der PulseAudio-Geräte zuzugreifen, gehen Sie zu
l'onglet « Plugins », « Multimédia » puis « PulseAudio » :

![image](index_html_6144037f2a656556.png)

Cliquez sur « Ajouter » pour ajouter une Bluetooth-Lautsprecher :

![image](index_html_a952e7310171feda.png)

Fügen Sie Ihrer Ausrüstung einen Namen hinzu:

![image](index_html_5a766711e205ad3.png)

Füllen Sie die verschiedenen Felder aus:

![image](index_html_59ce8e4aed01a0ef.png)

-   **Name des Bluetooth-Lautsprechers** : den Namen Ihrer Ausrüstung

-   **Übergeordnetes Objekt** : gibt das übergeordnete Objekt an, zu dem es gehört
    Ausrüstung

-   **Bluetooth-Schlüsselanschluss** : Auswahl des Anschlusses Ihres Senders
    Bluetooth für dieses Profil verwendet

-   **Kategorie** : Ausrüstungskategorien

-   **Kommentar** : ermöglicht das Hinzufügen eines Kommentars

-   **Aktivieren** : macht Ihre Ausrüstung aktiv

Klicken Sie auf den Pairing-Assistenten:

![image](index_html_b11a463a181fee2c.png)

Cliquez sur le bouton « suivant » :

![image](index_html_74cfef6547af4c77.png)

Der Assistent scannt die Bluetooth-Geräte in der Umgebung
deine Jeedom Box:

![image](index_html_fe41bb846a95a14d.png)

Geben Sie die MAC-Adresse Ihres Bluetooth-Lautsprechers ein und klicken Sie auf
« suivant » :

![image](index_html_dc20199f96adebcf.png)

Der Assistent verbindet Ihren Bluetooth-Lautsprecher mit Jeedom:

![image](index_html_775afe588b6090f6.png)

Une fois terminé, cliquez sur « suivant » .

Geben Sie einen Dienstnamen ein.

**Achtung** : Dieser Name darf keine Leerzeichen oder Sonderzeichen enthalten
des Dienstes

Cliquez sur « suivant » une fois terminé :

![image](index_html_d15cbd674d21a3e7.png)

Schließen Sie den Assistenten:

![image](index_html_34ceb59a4191f244.png)

Die MAC-Adresse Ihres Bluetooth-Lautsprechers und der Name des zugehörigen Dienstes
informiert sind:

![image](index_html_2f0531b2fa9ff325.png)

Aktivieren und dann Geräte registrieren:

![image](index_html_b314d3c57bca2c32.png)

Faq 
===

**So überprüfen Sie den Status meines Dienstes, der meinem Gehäuse zugeordnet ist ?.**

Cliquez sur le bouton « Status » :

![image](index_html_44f3633e34fd5c50.png)

Überprüfen Sie den Servicestatus. Dies muss mit begonnen werden
Erfolg (ERFOLG):

![image](index_html_fa551e46a49f58af.png)

**So testen Sie das Senden einer Audiodatei an meinen Lautsprecher ?.**

Cliquez sur le bouton « Tester » :

![image](index_html_bcb212ce18487be2.png)

Die Wiedergabe einer Test-Audiodatei beginnt. Der Ton kommt aus deinem
Bluetooth-Lautsprecher.

Pour arrêter le test, cliquez sur « Arrêter le test ». Der Prozess von
Lesen wird gestoppt.

![image](index_html_d2e914b1c2572539.png)

**So stellen Sie die Lautstärke meiner Tonausgänge ein?.**

Gehen Sie zur Konfiguration des Pulseaudio-Plugins im Abschnitt
« Plugin PulseAudio » :

![image](index_html_5ba2b0d4b358e723.png)

**Die Lautstärke Ihres Lautsprechers kann eingestellt werden. Sie können auch überprüfen
die Audioausgänge zu deaktivieren**

Fehlerbehebung 
==============

**Ich habe keinen Ton!!!.**

Denken Sie daran, alle Protokolle zu überprüfen, um ein mögliches Problem zu erkennen

![image](index_html_672321a0b40ba4c5.png)
