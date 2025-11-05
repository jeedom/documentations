# Android Autovoice

Der Zweck dieses Artikels ist es, Sie bei der Verwendung von Android zu unterstützen, um mit Jeedom zu sprechen. Wir werden die Jeedom-Interaktions-Engine verwenden, die es ermöglicht, Anfragen zu formulieren und dass Jeedom darauf reagiert (und auf Wunsch auch verschiedene Szenarien oder Elemente aktiviert)).

# Installation

## Die Voraussetzungen

Natürlich benötigen Sie ein Android-Gerät (Tablet, Telefon, PC mit Mikrofon und Lautsprechern) und installieren es [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=fr) und [AutoVoice](https://play.google.com/store/apps/details?id=com.joaomgcd.autovoice&hl=fr). Mit letzterem können Sie Ihre eigenen Sprachbefehle für Google Now erstellen, um Ihre Aufgaben mithilfe von Sprache zu automatisieren.

Hinweis : AutoVoice ist nur die Komponente für das Gespräch mit Jeedom, ermöglicht Jeedom jedoch keine Antwort. Dazu benötigen Sie das Tasker-Plugin nicht. Wir können dieses Beispiel auch verwenden, indem wir die Spracherkennung von AutoVoice durch ein NFC-Tag, eine Geolokalisierung, eine empfangene SMS usw. ersetzen

## Das Prinzip

Wir werden ein Tasker-Profil für den Status verwenden. Dies ist eine Spracherkennung von AutoVoice. In Task werden wir Tasker dann bitten, 2 Aktionen auszuführen. Der erste besteht darin, Jeedom anzurufen und das Textergebnis der Spracherkennung zu übertragen. Die zweite wird darin bestehen, die Rückkehr von Jeedom anzukündigen.

# Profilerstellung

Wir fügen ein neues Profil mit einem hinzu **Zustand** als Auslöser.

![android.autovoice1](images/android.autovoice1.png)

Wir wählen **Plugin** auf dem ersten Bildschirm.

![android.autovoice2](images/android.autovoice2.png)

Im Plugin-Typ wählen wir **AutoVoice**.

![android.autovoice3](images/android.autovoice3.png)

Im Untermenü **AutoVoice**, Wir wählen **Anerkannt**.

![android.autovoice4](images/android.autovoice4.png)

Sie können die Standardkonfiguration speichern, sofern Sie dies nicht möchten
Geben Sie Schlüsselwörter oder andere Parameter an.

![android.autovoice5](images/android.autovoice5.png)

Wir können dem Profil einen Namen wie "Jeedom Interactions" geben und das Backup wird nach dem Link mit einer Aufgabe erstellt.

# Die Aufgabe

Wir fügen ein **neue Aufgabe** zum neu erstellten Profil. Zum Beispiel könnte es "Jeedom API" genannt werden".

![android.autovoice6](images/android.autovoice6.png)

Die Aufgabe gruppiert schließlich 2 Aktionen : **API-Aufruf** und **sag zurück**.

![android.autovoice7](images/android.autovoice7.png)

Zuerst fügen wir eine Typaktion hinzu **Netzwerk**.

![android.autovoice8](images/android.autovoice8.png)

Dann wählen wir **Holen Sie sich HTTP**.

![android.autovoice9](images/android.autovoice9.png)

Hier werden wir mit Jeedom Informationen füllen. Hier sind die einzugebenden Informationen :

-   Serveur:Hafen : ``https://mondomain.tld``
-   Weg : ``/jeedom/core/api/jeeApi.php?apikey=votreclef&type=interact&query=%avcommnofilter&utf8=1``

Vergessen Sie nicht, Ihren API-Schlüssel anstelle der Kette "Ihr Schlüssel" zu verwenden" . Wir müssen gehen ``%avcommonfilter`` Am Ende wird es durch die Rückgabe von Autovoice ersetzt.

![android.autovoice10](images/android.autovoice10.png)

Fügen Sie eine Typaktion hinzu **Zu sagen**. Filtern Sie dazu die Aktionen, indem Sie an der Lupe "say" setzen.

![android.autovoice11](images/android.autovoice11.png)

Und wir gehen zurück ``%HTTPD`` im Textfeld.

![android.autovoice12](images/android.autovoice12.png)

Es ist vorbei. Bei der Texterkennung durch AutoVoice wird Jeedom aufgerufen und Sie haben die Antwort in den Interaktionen konfiguriert, die von Ihrem Telefon gesprochen werden. Vergessen Sie nicht, Jeedom-Interaktionen zu konfigurieren, und Sie können danach fragen, was Sie wollen. Von "Was ist die Temperatur im Wohnzimmer" bis "Schalten Sie das Wohnzimmerlicht ein."".

> **Spitze**
>
> Wenn es von Anfang an nicht funktioniert, liegt dies häufig daran, dass AutoVoice nicht aktiv ist. Starten Sie es dazu, klicken Sie auf Google Now Integration und oben auf die erste Option und autorisieren Sie AutoVoice.

> **Spitze**
>
> Standardmäßig deaktiviert AutoVoice die Google Now-Suche. Es ist möglich, dieses Verhalten abzubrechen. Klicken Sie dazu in Tasker auf Ihr Profil, dann auf "Edition" (kleiner Stift), dann auf "Erweitert" (unten) und deaktivieren Sie "Do" Google Now Search "(ganz unten).
