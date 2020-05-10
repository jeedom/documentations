Beschreibung 
===========

Mit dem Agenda-Plugin können Sie Ereignisse von Ihrem Google abrufen
Tagebuch. Er kann auch während eines Ereignisses eine Interaktion initiieren

Konfiguration 
=============

Erstellen Sie ein Google Kalender-Gerät 
=================================

Auf der Jeedom-Seite müssen Sie ein Google Kalender-Gerät erstellen und die Weiterleitungs-URL abrufen. 

> **Wichtig**
>
> Die URL des externen Zugriffs auf Ihr Jeedom muss unbedingt in https angegeben sein. Google erdieubt keine unverschlüsselten Verbindungen.

Erstellen Sie ein Entwicklerkonto bei Google 
=======================================

Sie müssen ein Entwicklerkonto bei Google erstellen, um Zugriff zu haben
API, los
[ici](https://console.developers.google.com/apis/credentials) puis
Wählen Sie "Kennungen erstellen" und "Oauth-Kunden-ID" aus
"Webanwendung "und in" Autorisierte Weiterleitungs-URIs "geben Sie die ein
auf der Konfigurationsseite für Jeedom-Geräte angegeben.

> **Wichtig**
>
> Seien Sie vorsichtig, wenn Sie "Authorized Redirect URIs" eingeben, auf die Sie achten müssen : 
> - die Domain hier vor [hier] autorisiert haben (https://console.developers.google.com/apis/credentials/consent). Google wird Sie normal signalisieren
> - Drücken Sie die Eingabetaste, nachdem Sie die Weiterleitungs-URL von jeedom auf die Google-Konfigurationsseite kopiert / eingefügt haben (das Drücken der Schaltfläche Speichern direkt nach dem Kopieren / Sortieren ohne Drücken der Eingabetaste funktioniert nicht !!!)

Holen Sie sich den Client-Schlüssel und das Client-Geheimnis (Sie müssen sie ablegen
Jeedom Seite in der Ausrüstung)

Anschließend müssen Sie die Google Kalender-API hinzufügen, indem Sie fortfahren
[ici](https://console.developers.google.com/apis/dashboard), puis en
Führen Sie "API aktivieren" aus und suchen Sie nach "Google Kalender-API". Fügen Sie dann hinzu
die.

Verknüpft das Google-Konto mit jeedom 
==============================

Kopieren Sie den Kundenschlüssel und das Kunden-Secrey auf der Jeedom-Seite und klicken Sie dann auf
Klicken Sie auf die Schaltfläche Verknüpfen, um alle zu überprüfen.

>**Wichtig**
>
>Um die beiden Konten (Google und Jeedom) zu verknüpfen, ist es ABSOLUT erforderlich, über die externe URL mit Jeedom verbunden zu sein (Sie können dies im Jeedom-Teilnetzwerk des Konfigurationszentrums sehen).

Befehl 
========

Das Plugin hat nur einen Befehl, der Ihnen den Titel gibt
das aktuelle Ereignis

Interaktion 
===========

Jeedom kann den Titel eines Ereignisses als Interaktion interpretieren und
also eine Aktion auslösen. Dazu müssen Sie das aktivieren
Interaktionen auf der Gerätekonfigurationsseite.

Sie können auch einen Rückgabeauftrag angeben, mit dem jeedom dies tun wird
Antworten Sie nach der Ausführung der Interaktion.

Faq 
===
