# Android Autovoice

Dieser Artikel soll Sie bei der Verwendung von Android anleiten, um mit Jeedom zu sprechen. Wir werden die Jeedom-Interaktions-Engine verwenden, die es ermöglicht, Anfragen zu formulieren und Jeedom darauf zu reagieren (und auf Wunsch auch verschiedene Szenarien oder Elemente zu aktivieren).

# Installation

## Voraussetzungen

Natürlich benötigen Sie ein Android-Gerät (Tablet, Telefon, PC mit Mikrofon und Lautsprechern) und installieren darauf [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=fr) und [AutoVoice](https://play.google.com/store/apps/details?id=com.joaomgcd.autovoice&hl=fr). Letzteres ermöglicht es Ihnen, Ihre eigenen Sprachbefehle für Google Now zu erstellen, um Ihre Aufgaben per Sprache zu automatisieren.

Notieren : AutoVoice ist nur die Komponente, um mit Jeedom zu sprechen, erlaubt Jeedom jedoch nicht zu antworten. Dazu benötigen Sie das Tasker-Plugin nicht. Wir können dieses Beispiel auch verwenden, indem wir die AutoVoice-Spracherkennung durch ein NFC-Tag, Geolokalisierung, eine empfangene SMS usw. ersetzen

## Das Prinzip

Wir werden ein Tasker-Profil im Status verwenden. Dies wird eine Spracherkennung von AutoVoice sein. Dann werden wir Tasker bitten, 2 Aktionen auszuführen. Der erste besteht darin, Jeedom anzurufen und ihm das Textergebnis der Spracherkennung zu senden. Die zweite wird die Rückkehr von Jeedom sein.

# Profilerstellung

Wir fügen ein neues Profil mit a hinzu **Zustand** als Auslöser.

![android.autovoice1](images/android.autovoice1.png)

Wir wählen aus **Plugin** auf dem ersten Bildschirm.

![android.autovoice2](images/android.autovoice2.png)

Als Plugin-Typ wählen wir aus **AutoVoice**.

![android.autovoice3](images/android.autovoice3.png)

Im Untermenü **AutoVoice**, wir wählen aus **Anerkannt**.

![android.autovoice4](images/android.autovoice4.png)

Sie können die Standardkonfiguration speichern, sofern Sie dies nicht möchten
Geben Sie Schlüsselwörter oder andere Parameter an.

![android.autovoice5](images/android.autovoice5.png)

Wir können dem Profil einen Namen wie "Jeedom Interactions" geben und das Backup wird nach der Verknüpfung mit einer Aufgabe erstellt.

# Aufgabe

Wir fügen ein **neue Aufgabe** zum neu erstellten Profil. Sie könnte beispielsweise "Jeedom API".

![android.autovoice6](images/android.autovoice6.png)

Die Aufgabe wird schließlich 2 Aktionen gruppieren : **API-Aufruf** und **sagen wir die Rückkehr**.

![android.autovoice7](images/android.autovoice7.png)

Zuerst fügen wir eine Aktion vom Typ hinzu **Netzwerk**.

![android.autovoice8](images/android.autovoice8.png)

Dann selektieren wir **Holen Sie sich HTTP**.

![android.autovoice9](images/android.autovoice9.png)

Dort füllen wir die Jeedom-Informationen aus. Hier sind die Informationen zur Eingabe :

-   Serveur:Hafen : ``https://mondomain.tld``
-   Weg : ``/jeedom/core/api/jeeApi.php?apikey=votreclef&type=interact&query=%avcommnofilter&utf8=1``

Vergessen Sie nicht, Ihren API-Schlüssel anstelle der Zeichenfolge "Ihr Schlüssel" . Du musst lassen ``%avcommonfilter`` am Ende wird diese durch die Rücksendung von Autovoice ersetzt.

![android.autovoice10](images/android.autovoice10.png)

Typaktion hinzufügen **Sagen**. Filtern Sie dazu die Aktionen, indem Sie auf Höhe der Lupe „sagen“ setzen.

![android.autovoice11](images/android.autovoice11.png)

Und wir gehen zurück ``%HTTPD`` im Textfeld.

![android.autovoice12](images/android.autovoice12.png)

Es ist fertig. Bei der Texterkennung durch AutoVoice wird Jeedom angerufen und Sie haben die Antwort in den Interaktionen konfiguriert, die von Ihrem Telefon gesprochen werden. Vergessen Sie nicht, Jeedom-Interaktionen zu konfigurieren, und Sie können ihn alles fragen, was Sie wollen. Von „Wie heiß ist es im Wohnzimmer“ bis „Wohnzimmerlicht einschalten“".

> **Tipp**
>
> Wenn es nicht von Anfang an funktioniert, liegt es oft daran, dass AutoVoice nicht aktiv ist. Klicken Sie dazu auf Google Now Integration und auf die erste Auswahl ganz oben und autorisieren Sie AutoVoice.

> **Tipp**
>
> Standardmäßig deaktiviert AutoVoice die Google Now-Suche. Es ist möglich, dieses Verhalten abzubrechen. Klicken Sie dazu in Tasker auf Ihr Profil, dann auf „Bearbeiten“ (kleiner Bleistift), dann auf „Erweitert“ (ganz unten) und deaktivieren Sie „Ausführen“. Google Now Search" (unten).
