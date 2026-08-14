# Android Autovoice

Dieses Objekt soll Ihnen eine Anleitung zur Verwendung von Android für die Kommunikation mit Jeedom geben. Wir werden die Jeedom-Interaktions-Engine nutzen, mit der Sie Anfragen stellen können, auf die Jeedom antwortet (und auf Wunsch auch verschiedene Szenarien oder Elemente aktiviert).

# Installation

## Voraussetzungen

Natürlich benötigt man ein Android-Gerät (Tablet, Smartphone, PC mit Mikrofon und Lautsprechern) und muss darauf [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=fr) und [AutoVoice](https://play.google.com/store/apps/details?id=com.joaomgcd.autovoice&hl=fr). Mit dieser Funktion kann man eigene Sprachbefehle für Google Now erstellen, um Aufgaben per Sprachbefehl zu automatisieren.

Hinweis: AutoVoice ist lediglich die Komponente, um mit Jeedom zu sprechen, ermöglicht es Jeedom jedoch nicht, zu antworten. Damit dies möglich ist, wird das Tasker-Plugin nicht benötigt. Man kann dieses Beispiel auch nutzen, indem man die Spracherkennung von AutoVoice durch einen NFC-Tag, eine Geolokalisierung, eine empfangene SMS usw. ersetzt…​

## Das Prinzip

Wir werden ein Tasker-Profil auf Basis eines Status verwenden. Dabei handelt es sich um eine Spracherkennung von AutoVoice. Anschließend weisen wir Tasker im Rahmen einer Aufgabe an, zwei Aktionen auszuführen. Die erste besteht darin, Jeedom aufzurufen und ihm das Textergebnis der Spracherkennung zu übermitteln. Die zweite besteht darin, die Rückmeldung von Jeedom auszusprechen.

# Profil erstellen

Wir fügen ein neues Profil hinzu, bei dem ein **Status** als Auslöser dient.

![android.autovoice1](../images/android.autovoice1.png)

Auf dem ersten Bildschirm wählen Sie **Plugin** aus.

![android.autovoice2](../images/android.autovoice2.png)

Als Plugin-Typ wählen wir **AutoVoice** aus.

![android.autovoice3](../images/android.autovoice3.png)

Im Untermenü **AutoVoice** wählen Sie **Recognized** aus.

![android.autovoice4](../images/android.autovoice4.png)

Sie können die Standardkonfiguration speichern, es sei denn, Sie möchten
Geben Sie Suchbegriffe oder andere Parameter ein.

![android.autovoice5](../images/android.autovoice5.png)

Man kann dem Profil einen Namen wie „Jeedom Interactions“ geben, und die Speicherung erfolgt nach der Verknüpfung mit einer Aufgabe.

# Die Aufgabe

Dem neu erstellten Profil wird eine **neue Aufgabe** hinzugefügt. Diese könnte beispielsweise „Jeedom-API“ heißen.

![android.autovoice6](../images/android.autovoice6.png)

Die Aufgabe umfasst letztendlich zwei Schritte: **API-Aufruf** und **Rückmeldung**.

![android.autovoice7](../images/android.autovoice7.png)

Zunächst fügen wir eine Aktion vom Typ **Netzwerk** hinzu.

![android.autovoice8](../images/android.autovoice8.png)

Anschließend wählt man **Get HTTP** aus.

![android.autovoice9](../images/android.autovoice9.png)

Nun geben wir die Jeedom-Daten ein. Folgende Angaben müssen eingegeben werden:

-   Server:Port: ``https://mondomain.tld``
-   Pfad: ``/jeedom/core/api/jeeApi.php?apikey=votreclef&type=interact&query=%avcommnofilter&utf8=1``

Vergessen Sie nicht, Ihren API-Schlüssel anstelle der Zeichenfolge „Ihr Schlüssel“ einzufügen. Achten Sie darauf, ``%avcommonfilter`` Letztendlich wird dies durch die Rückkehr von Autovoice ersetzt werden.

![android.autovoice10](../images/android.autovoice10.png)

Fügen Sie eine Aktion vom Typ **Dire** hinzu. Filtern Sie dazu die Aktionen, indem Sie in der Suchlupe „dire“ eingeben.

![android.autovoice11](../images/android.autovoice11.png)

Und dann geht’s nach Hause ``%HTTPD`` in das Textfeld.

![android.autovoice12](../images/android.autovoice12.png)

Das war’s schon. Bei der Spracherkennung durch AutoVoice wird Jeedom aufgerufen, und Sie erhalten die in den Interaktionen konfigurierte Antwort, die von Ihrem Telefon angesagt wird. Vergessen Sie nicht, die Jeedom-Interaktionen zu konfigurieren, dann können Sie das System alles fragen, was Sie möchten. Von „Wie hoch ist die Temperatur im Wohnzimmer?“ bis hin zu „Schalte das Licht im Wohnzimmer ein“.

> **Tipp**
>
> Wenn es auf Anhieb nicht funktioniert, liegt das oft daran, dass AutoVoice nicht aktiviert ist. Starten Sie daher die App, klicken Sie auf „Google Now-Integration“ und dann auf die erste Option ganz oben und erteilen Sie AutoVoice die Berechtigung.

> **Tipp**
>
> Standardmäßig deaktiviert AutoVoice die Google Now-Suche. Sie können diese Einstellung jedoch rückgängig machen. Klicken Sie dazu in Tasker auf Ihr Profil, dann auf „Bearbeiten“ (kleiner Bleistift), anschließend auf „Erweitert“ (ganz unten) und deaktivieren Sie die Option „Google Now-Suche durchführen“ (ganz unten).
