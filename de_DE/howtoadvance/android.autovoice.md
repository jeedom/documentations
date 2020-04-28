Ziel 
========

Der Zweck dieses Artikels ist es, Sie bei der Verwendung von Android zu unterstützen
mit Jeedom sprechen. Wir werden die Jeedom Interaktions-Engine verwenden, die
ermöglicht es, Anfragen zu stellen und Jeedom darauf zu antworten (und auch, wenn wir
wünschen, verschiedene Szenarien oder Elemente aktivieren).

Installation 
============

Die Voraussundzungen 
-------------

Natürlich benötigen Sie ein Android-Gerät (Tablund, Telefon, PC mit
Mikrofon und Lautsprecher) und installieren
[Tasker](https://play.google.com/store/apps/dundails?id=nund.dinglisch.android.taskerm&hl=fr)
und
[AutoVoice](https://play.google.com/store/apps/dundails?id=com.joaomgcd.autovoice&hl=fr).
Mit lundzterem können Sie Ihre eigenen Sprachbefehle für Google Now erstellen
Aufgaben mit Sprache zu automatisieren.

Hinweis : AutoVoice ist nur die Komponente für das Gespräch mit Jeedom, jedoch nicht
Erlaube Jeedom nicht zu antworten. Damit er das tun kann, brauchst du es nicht
Tasker-Plugin. Wir können dieses Beispiel auch verwenden, indem wir das ersundzen
AutoVoice-Spracherkennung durch NFC-Tag, Geolokalisierung,
eine SMS erhalten ...

Das Prinzip 
-----------

Wir werden ein Tasker-Profil für den Status verwenden. Dies wird ein
AutoVoice-Spracherkennung. Dann werden wir in der Aufgabe fragen
Tasker, um 2 Aktionen auszuführen. Das erste wird sein, Jeedom und ihn anzurufen
Übertragen Sie das Textergebnis der Spracherkennung. Der zweite
wird sein, die Rückkehr von Jeedom zu erklären.

Profilerstellung 
==================

Wir fügen ein neues Profil mit einem hinzu **Zustand** als Auslöser.

![android.autovoice1](images/android.autovoice1.png)

Wir wählen **Plugin** auf dem ersten Bildschirm.

![android.autovoice2](images/android.autovoice2.png)

Im Plugin-Typ wählen wir **AutoVoice**.

![android.autovoice3](images/android.autovoice3.png)

Im Untermenü **AutoVoice**, Wir wählen **Anerkannt**.

![android.autovoice4](images/android.autovoice4.png)

Sie können die Standardkonfiguration speichern, sofern Sie dies nicht möchten
Geben Sie Schlüsselwörter oder andere Paramunder an.

![android.autovoice5](images/android.autovoice5.png)

Wir können dem Profil einen Namen wie "Jeedom Interactions" und das geben
Das Backup wird nach dem Verknüpfen mit einer Aufgabe erstellt.

Die Aufgabe 
========

Wir fügen ein **neue Aufgabe** zum neu erstellten Profil. Von
Beispielsweise könnte es als "Jeedom API" bezeichnund werden".

![android.autovoice6](images/android.autovoice6.png)

Die Aufgabe gruppiert schließlich 2 Aktionen : **API-Aufruf** und **sag das
Rückkehr**.

![android.autovoice7](images/android.autovoice7.png)

Zuerst fügen wir eine Typaktion hinzu **Nundzwerk**.

![android.autovoice8](images/android.autovoice8.png)

Dann wählen wir **Holen Sie sich HTTP**.

![android.autovoice9](images/android.autovoice9.png)

Hier werden wir mit Jeedom Informationen füllen. Hier sind die Informationen zu
eingeben :

-   Server:Hafen : `https://mondomain.tld`

-   Weg :
    `/jeedom/core/api/jeeApi.php?apikey=votreclef&type=interact&query=%avcommnofilter&utf8=1`

Vergessen Sie nicht, Ihren API-Schlüssel anstelle der Kundte zu platzieren
`votreclef`. Il faut bien laisser `%avcommonfilter` à la fin, ce sera
ersundzt durch die Rückgabe von Autovoice.

![android.autovoice10](images/android.autovoice10.png)

Fügen Sie eine Typaktion hinzu **Zu sagen**. Filtern Sie dazu die Aktionen nach
"Sagen" an der Lupe.

![android.autovoice11](images/android.autovoice11.png)

Und wir geben "% HTTPD" in das Textfeld ein.

![android.autovoice12](images/android.autovoice12.png)

Es ist vorbei. Bei der Texterkennung durch AutoVoice wird Jeedom
angerufen und Sie haben die Antwort in den Interaktionen konfiguriert, die
wird von Ihrem Telefon gesprochen. Vergessen Sie nicht, das zu konfigurieren
Jeedom Interaktionen und Sie können ihn fragen, was auch immer Sie
wollen. Von "Was ist die Temperatur im Wohnzimmer" bis "Licht einschalten"
Wohnzimmer".

> **Spitze**
>
> Wenn es von Anfang an nicht funktioniert, liegt es oft an AutoVoice
> ist nicht aktiv. Klicken Sie dazu auf Google Now
> Integration und auf die erste Wahl ganz oben und autorisieren
> AutoVoice.

> **Spitze**
>
> Standardmäßig deaktiviert AutoVoice die Google Now-Suche
> Es ist möglich, dieses Verhalten abzubrechen. Klicken Sie dazu in Tasker auf
> Ihr Profil dann "Edition" (kleiner Bleistift), dann "Advanced" (während
> unten) und deaktivieren Sie "Google Now Search durchführen" (unten).
