# Description

Dieses Plugin ermöglicht es Ihnen :

- Verwenden Sie die native Implementierung von Google für die Verwaltung verbundener Objekte

Es kann auf zwei Arten funktionieren :

- Standalone : Sie erstellen die Anwendungen im Entwicklungsmodus auf der Google-Seite und verbinden dann Ihr Jeedom mit dem Google-Dienst
- Wolke : über einen Cloud-Service von Jeedom

> **Important**
>
> Für den Cloud-Modus ist ein Abonnement für Sprachdienste erforderlich (3 Monate kostenlos beim Kauf des Plugins).. Sie können Ihr Abonnement verwalten [hier](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

> **Important**
>
> Welchen Modus Sie auch verwenden, Sie MÜSSEN ABSOLUT auf Ihr Jeedom in HTTPS zugreifen können (das Plugin funktioniert nicht in HTTP).

> **Important**
>
> Das Plugin unterstützt keine Geräte mit Doppelfunktionen (2 Ausgänge als bestimmtes zwave Fibaro-Modul). Sie müssen unbedingt 2 virtuelle durchlaufen, um es aufzuschlüsseln.

# Cloud-Modus

> **IMPORTANT**
>
> Es ist wichtig, die folgenden Schritte in der angegebenen Reihenfolge auszuführen !!!

> **IMPORTANT**
>
> Wenn Sie eine Fehlermeldung erhalten, die Sie darüber informiert, dass Ihr Benutzerkennwort nicht korrekt ist oder nicht, müssen Sie dies tun :
> - Überprüfen Sie, ob Amazon Alexa auf dem Markt aktiv ist
> - Wenn dies der Fall ist, achten Sie auf Ihre Anmeldeinformationen (Aufmerksamkeit, die Sie in Groß- / Kleinschreibung beachten müssen) ?
> - Wenn dies der Fall ist, ändern Sie Ihr Passwort auf dem Markt und haben Sie es bei der Konfiguration des Sprachassistenten-Dienstes (Registerkarte Marktprofile Seite Meine Dienste) gespeichert

Nach der Installation des Plugins müssen Sie nur noch zur Konfiguration des Plugins gehen, den Cloud-Modus auswählen und dann auf "Senden" klicken (dadurch werden die Verbindungsinformationen an die Plugin-API auf dem Markt gesendet).

Dann müssen Sie in Jeedom in Communication / Google Smarthome auf Speichern klicken, um Ihre Erstkonfiguration zu senden. Sie benötigen mindestens ein Gerät in OK (andernfalls tritt beim Verbinden von Google Home <-> Jeedom ein Fehler auf).

Dann müssen Sie in der Google-Startanwendung zur ersten Registerkarte gehen und auf Hinzufügen (das +) klicken. :

![gsh](../images/gsh29.png)

Konfigurieren Sie dann ein Gerät :

![gsh](../images/gsh30.png)

Ein "Funktioniert mit Google" :

![gsh](../images/gsh31.png)

Suchen Sie dann in der Liste mit der Suchschaltfläche (Lupe oben rechts) nach "Jeedom Smarthome" und klicken Sie darauf :

![gsh](../images/gsh32.png)

Füllen Sie es in Ihre Marktkennungen aus (nun, diese Märkte, nicht die Ihres Jeedom).

![gsh](../images/gsh6.png)

Unter Plugin -> Kommunikation -> Google Smarthome können Sie Ihre verschiedenen Geräte konfigurieren (siehe Kapitel Konfiguration des Plugins).

>**NOTE**
>
>Um vom Standalone-Modus in den Cloud-Modus zu wechseln, müssen Sie :
>- Im Plugin in die Wolke gehen und dann speichern
>- 24h warten
>- In der Google-Startanwendung müssen Sie testmarthome (Ihre eigenständige Anwendung) trennen.
>- Klicken Sie in Communication / Google Smarthome auf Speichern, um Ihre Erstkonfiguration zu senden
>- Verknüpfen Sie Jeedom Smarthome in Google Home


> **IMPORTANT**
>
>Für jede Änderung der Konfiguration der an Google Home gesendeten Geräte (Hinzufügen von Geräten, Löschen von Geräten, Ändern eines generischen Auftragstyps) muss dann unbedingt Plugin -> Kommunikation -> Googme Smarthome aufgerufen werden speichern

# Standalone-Modus

> **IMPORTANT**
>
> Wenn Sie den Cloud-Modus verwendet haben, sollten Sie diesen Teil nicht ausführen !!! Gehen Sie direkt zum Kapitel "Plugin-Konfiguration"

> **IMPORTANT**
>
> Der Standalone-Modus ist ein "Betrug", da Sie bei Google im Entwicklungsmodus eine Anwendung erstellen, die die Synchronisierung nur für 3 Tage nach Aktivierung des Testmodus ermöglicht. Wenn Sie also Geräte hinzufügen oder ändern, aktivieren Sie den Testmodus alle 3 Tage erneut, um eine Synchronisierung durchführen zu können. Achtung, wir sprechen von einer Änderung der Konfiguration, wenn Sie keine Geräte hinzufügen oder ändern. Es gibt nichts zu tun. Die Anwendung funktioniert ohne zeitliche Begrenzung

> **IMPORTANT**
>
> Da es sich bei der Anwendung um eine Entwickleranwendung auf der Google-Seite handelt, können sie diese jederzeit ausschneiden, löschen oder die Regeln ändern.. In diesem Fall kann Jeedom im Falle einer Fehlfunktion nicht zur Verantwortung gezogen werden..

> **IMPORTANT**
>
> Damit die Anwendung (en) funktionieren, ist es wichtig, dass sich Ihre Jeedom in https mit einem gültigen Zertifikat befindet (wenn Sie ein Service Pack haben, ist dafür ein DNS-Zugriff vorhanden).

Zur Erinnerung, das Plugin ermöglicht es Ihnen :

- Verwenden Sie die native Implementierung von Google für die Verwaltung verbundener Objekte
- Verwenden Sie Jeedom-Interaktionen mit "Sprechen Sie mit ..."

Es sind daher 2 Anwendungen bei Google gelistet : eine für den Google Smarthome-Teil und eine für den Interaktionsteil (Sie können natürlich nur einen der beiden Schritte ausführen)

## Google Smarthome App

Komm schon [hier](https://console.actions.google.com) Klicken Sie dann auf "Projekt hinzufügen / importieren""

![gsh](../images/gsh7.png)

Geben Sie dem Projekt einen Namen, ändern Sie die Standardsprache und -region und validieren Sie :

![gsh](../images/gsh8.png)

Wählen Sie "Home Control"" :

![gsh](../images/gsh9.png)

Klicken Sie auf "Smarthome" :

![gsh](../images/gsh10.png)

Klicken Sie auf "Benennen Sie Ihre Smart Home-Aktion"" :

![gsh](../images/gsh11.png)

Setzen Sie "smarthome test" und validieren Sie (Speichern-Schaltfläche oben rechts) :

![gsh](../images/gsh12.png)

Klicken Sie dann links auf "Aktionen" :

![gsh](../images/gsh13.png)

Dann "Fügen Sie Ihre erste Aktion hinzu" :

![gsh](../images/gsh14.png)

Wir müssen hier die URL angeben, um aus Jeedom zu kommen. Um es zu haben, ist es sehr einfach: In Jeedom müssen Sie zur Plugin-Verwaltungsseite gehen, den "Standalone" -Modus auswählen (und nebenbei speichern). Die URL heißt "Fulfillment URL""

![gsh](../images/gsh15.png)

Gehen Sie dann zu "Kontoverknüpfung" (linkes Menü) :

![gsh](../images/gsh13.png)

Wählen Sie "Nein, ich möchte nur die Kontoerstellung auf meiner Website zulassen" und klicken Sie auf "Weiter"" :

![gsh](../images/gsh16.png)


Wählen Sie "OAuth" und dann "Autorisierungscode" und klicken Sie auf "Weiter"" :

![gsh](../images/gsh17.png)

Füllen Sie dann die 4 Felder gemäß der Plugin-Konfigurationsseite aus und klicken Sie auf "Weiter"" :

![gsh](../images/gsh18.png)

> **NOTE**
>
> Die Felder sind :
> - Client-ID zuerst
> - dann der geheime Klient
> - dann "Autorisierungs-URL" (achten Sie darauf, die aus dem Abschnitt "Smarthome" zu übernehmen)
> - dann "Token URL" (achten Sie darauf, die aus dem Abschnitt "Smarthome" zu nehmen)

Es gibt nichts zu tun, einfach "Weiter" :

![gsh](../images/gsh19.png)

Schreiben Sie "Toto" und dann "Speichern"" :

![gsh](../images/gsh20.png)

Konfigurieren Sie nun den Homegraph-API-Schlüssel [hier](https://console.developers.google.com/apis/dashboard), Klicken Sie dann mit der rechten Maustaste auf "Bibliothek" :

![gsh](../images/gsh21.png)

> **NOTE**
>
> Wenn Sie kein Projekt haben, müssen Sie eines erstellen

Und suchen Sie nach "Homegraph" :

![gsh](../images/gsh22.png)

Klicken Sie auf homegraphapi, aktivieren Sie die API und klicken Sie auf verwalten :

![gsh](../images/gsh23.png)

Klicken Sie links auf die Kennung :

![gsh](../images/gsh24.png)

Dann auf "Kennungen von APIs und Diensten" :

![gsh](../images/gsh25.png)

Klicken Sie auf "Kennungen erstellen" und dann auf "API-Schlüssel"" :

![gsh](../images/gsh26.png)

Kopieren Sie den generierten API-Schlüssel und fügen Sie ihn auf der Verwaltungsseite des Google Smarthome-Plugins in "Google API Homegraph" ein"

Der letzte Schritt, um Jeedom die Projekt-ID zum Verwalten der Verbindung zu geben, ist [hier](https://console.actions.google.com) Klicken Sie dann auf Ihr Projekt. Recuperez l'url de la forme "https://console.actions.google.com / u / 0 / project / myproject-31023 / summary ", die Projekt-ID befindet sich zwischen project / und / summary. Im Beispiel hier ist es" myproject-31023 ". Kopieren Sie diese ID auf die Verwaltungsseite das Google Smarthome-Plugin in "Smarthome Project ID".

Hier können Sie jetzt links auf "Aktion" klicken" :

![gsh](../images/gsh27.png)

Dann auf Test :

![gsh](../images/gsh28.png)

Dann brauchen Sie auf einem Smartphone **android** (darf nicht auf einem iPhone funktionieren) Verbinden Sie sich mit Ihrem Jeedom über **die externe URL** davon. Gehen Sie dann zur Heimanwendung, dann "Konfigurieren oder Hinzufügen", dann "Gerät konfigurieren" und klicken Sie schließlich auf "Funktioniert mit Google" und fügen Sie Ihren oben erstellten Dienst hinzu (er beginnt mit [Test]).

## JWT-Konfiguration

Mit JWT können Sie jede Änderung des STATUS eines an Google gesendeten Geräts automatisch melden. Auf diese Weise können Sie den STATUS schneller abrufen, wenn Sie ihn von Google Home oder der Google Home-App anfordern.. Die Konfiguration ist nicht obligatorisch. Wenn Sie jedoch das Kontrollkästchen "Zurück zum Status" aktivieren, müssen Sie dies unbedingt tun, damit es funktioniert.

Um die Konfiguration vorzunehmen, die Sie benötigen

* geh [hier](https://console.developers.google.com/iam-admin/serviceaccounts), wenn Google Sie auffordert, das Projekt auszuwählen (das oben erstellte).
* Klicken Sie auf Dienstkonto erstellen
  * Geben Sie ihm einen Namen (Sie können setzen, was Sie wollen, vermeiden)
  * Stellen Sie die generierte E-Mail direkt unten wieder her, um sie in die Konfiguration des Plugins auf Jeedom (Felder) zu kopieren : Kundenpost (JWT))
  * Klicken Sie auf Erstellen
  * Klicken Sie auf Weiter, ohne etwas zu ändern
  * Klicken Sie auf "Schlüssel erstellen""
    * Verlassen Sie JSON und klicken Sie auf OK
  * Klicken Sie auf OK
  * Öffnen Sie die heruntergeladene Datei und kopieren Sie den Teil 'private_key' (beginnt mit "----- BEGIN PRIVATE KEY -----", eingeschlossen und endet mit "----- END PRIVATE KEY ----- \ n ", enthalten ohne") in der Konfiguration des Plugins auf Jeedom (Felder : Privater Schlüssel (JWT))

# Plugin Konfiguration

Gehen Sie auf Ihrem Jeedom zu Plugin -> Kommunikation -> Google Smarthome und wählen Sie im Gerätebereich das Gerät aus, das an Google übertragen werden soll, sowie den Gerätetyp.

![gsh](../images/gsh2.png)

> **IMPORTANT**
>
> Das Plugin basiert auf den generischen Jeedom-Befehlen zur Steuerung Ihrer Hausautomation. Es ist daher sehr wichtig, diese korrekt zu konfigurieren.

> **NOTE**
>
> Für den Typ "Kamera" müssen Sie die URL des Streams unbedingt konfigurieren (wir haben nur das RTSP getestet), damit es funktioniert.
> Beachten Sie, dass sich die Kameraunterstützung derzeit in der Beta-Phase befindet und viele Ressourcen verbraucht

## Equipement

Auf Geräten können Sie konfigurieren :

* Optionen :
  * Senden : Senden Sie das Gerät an Google Home, damit es es steuern kann (bitte beachten Sie, dass die Konfiguration der generischen Credits in Ordnung ist).
  * Erhöhen Sie den Staat : Senden Sie Informationen zu Statusänderungen direkt an Google (dies vermeidet, dass Google Home bei einer Informationsanfrage Jeedom in Frage stellt).. Siehe Abschnitt "JWT-Konfiguration"
  * Herausforderung [Keine, Code] : Wenn Sie sich im Codemodus befinden, werden Sie von Google für jede Aktion auf dem Gerät nach einem Code (der unten angegebene) gefragt
* STATUS : Gibt an, ob die Übertragung in Ordnung ist. Wenn es sich um NOK handelt, stammt es vom generischen Typ. Wenn Sie auf NOK klicken, können Sie die Informationen über den benötigten generischen Typ erhalten
* Typ : gibt die Art der Ausrüstung an
* Spitzname : Gerätename, wenn leer, wird der Gerätename verwendet
* Aktion :
  * Ermöglicht die erweiterte Konfiguration von Geräten für Google Home (abhängig vom verwendeten Typ)
  * Erweiterte Konfiguration von Geräten, ermöglicht den Zugriff auf die erweiterte Konfiguration von Befehlen und damit das Ändern generischer Typen
  * Ermöglicht den direkten Zugriff auf die Gerätekonfigurationsseite

### Type

Die Arten der Ausrüstung sind wichtig, damit Google entsprechend den von Ihnen angegebenen Sätzen reagieren kann.

> **IMPORTANT**
>
> Jeedom-Unterstützung für "Beta" -Typen, die noch nicht bei Google dokumentiert sind, sodass dies je nach Updates bei Google möglicherweise funktioniert oder nicht

* Licht : unterstützt das Ein- und Ausschalten, Farbwechsel und Dimmen....
* Thermostat : Unterstützung von Sollwertänderungen und Modi (in begrenztem Umfang werden nur bestimmte Modusnamen von Google autorisiert. Achten Sie auf die erweiterte Konfiguration.)
* Steckdose : ein / aus
* Kamera : In der Beta kann der Stream auf einem Android-Fernseher im lokalen Netzwerk angezeigt werden
* Speichern : ermöglicht das Öffnen / Schließen eines Rollos (Sie können die Richtung in der erweiterten Konfiguration umkehren)
* Klappe : öffnet / schließt einen Verschluss (Sie können die Richtung in der erweiterten Konfiguration umkehren)
* [Beta-Fenster] : unterstützt normalerweise den offenen / geschlossenen STATUS eines Fensters (zur Information nur, wenn ich die Frage auf Englisch stelle, dass es funktioniert)
* Tür [Beta] : unterstützt normalerweise den offenen / geschlossenen STATUS einer Tür (zur Information nur, wenn ich die Frage auf Englisch stelle, dass sie funktioniert)
* Alarm [Beta] : Ermöglicht das Aktivieren / Deaktivieren des Alarms (achten Sie darauf, dass Sie den Begriff Waffe / Deaktivieren verwenden, damit Google die Aktion ausführt).
* Sperre [Beta] : Geräte schließen / öffnen
* TV [Beta] : Mit dieser Option können Sie die Lautstärke und die Kanäle ändern
* Schwanger [Beta] : Mit dieser Option können Sie die Lautstärke ändern und anhalten, anhalten, als nächstes, vorheriges fortsetzen

## Szenario

Sie können auf der Registerkarte "Szene" auch Szenen mit Eingabe- und Ausgabeaktionen erstellen.

![gsh](../images/gsh3.png)

> **NOTE**
>
> Um ein Szenario zu starten, sagen Sie einfach "Name des Szenarios aktivieren" oder "Name des Szenarios deaktivieren".#

> **NOTE**
>
> Beim Speichern fordert Jeedom automatisch eine Synchronisierung mit Google an. Achtung im Standalone-Modus Wenn Sie einen Fehler haben (Typ "Angeforderte Entität wurde nicht gefunden"), versuchen Sie, den Test der Anwendung erneut zu aktivieren ([hier](https://console.actions.google.com)) Klicken Sie dann erneut auf die Verbindungsschaltfläche auf der Seite der Plugin-Konfigurationsseite. Überprüfen Sie auch die Konfiguration (insbesondere den oauth-Teil) Ihrer Google-Anwendung (manchmal werden die Felder von Google gelöscht).

Sie müssen die Geräte lediglich den Räumen in der Google Home-App zuweisen

# FAQ

>**Ich kann die Zuordnung im Cloud-Modus nicht herstellen ?**
>
> Wir müssen das überprüfen :
> - Sie sind in https in Ordnung (wenn Sie ein Service Pack haben, verwenden Sie jeeodm DNS, diese sind standardmäßig sicher)
> - Sie haben den Google-Assistenten auf dem Markt aktiviert (Profilseite, Registerkarte "Meine Dienste" und Konfiguration im Abschnitt "Sprachassistent").
> - Sie haben das Abonnement für Sprachdienste abonniert und es ist weiterhin gültig (erforderlich ab dem 01.06.2019).. Dies ist auf Ihrer Marktprofilseite unter Tab meine Dienste zu sehen
> - Es ist notwendig, im Plugin -> Kommunikation -> Google Smarthome "Sende" -Geräte auszuwählen und den Typ einzustellen und schließlich zu speichern
> - Verwenden Sie Ihre Marktanmeldeinformationen gut

>**Während der Zuordnung habe ich einen Fehler (aber nicht bei einem Problem mit Passwort / Benutzername)**
>
>Wenn Sie während der Zuordnung zu Jeedom einen Fehler haben, liegt dies wahrscheinlich daran, dass Sie vor der Zuordnung keine Geräte hinzugefügt / übertragen haben. Um dies zu korrigieren, gehen Sie zu Plugins -> Kommunikation -> Alexa und aktivieren Sie mindestens ein Gerät zum Senden und Speichern (überprüfen Sie, ob das Gerät in Ordnung ist. Wenn es sich in NOK befindet, klicken Sie auf NOK, um zu sehen, warum oder fragen Sie nach generischer Typ in jeedom). Wiederholen Sie dann die Zuordnung

>**Was sind die möglichen Bestellungen ?**
>
>Sprachbefehle (sowie Rückgaben) werden nur von Google verwaltet [Dokumentation](https://support.google.com/googlehome/answer/7073578?hl=fr)

>**Der Assistent bittet mich, die Teile zuzuweisen, aber ich weiß nicht, was die Ausrüstung entspricht.**
>
>Ja, der Assistent zeigt nicht den tatsächlichen Namen des Geräts an, sondern nur den Spitznamen. Sie müssen daher den Assistenten beenden und zur Homepage der Home Control zurückkehren.. Durch Klicken auf das Gerät erhalten Sie dessen Namen und können es dann einem Raum zuordnen

>**Warum müssen Sie jedem Gerät Teile zuweisen? ?**
>
>Da Google dies nicht über die API zulässt, müssen Sie dies unbedingt manuell tun.

>**Ich erhalte die Fehlermeldung "OpenSSL kann keine Daten signieren"**
>
>Sie müssen das Kontrollkästchen "Bericht erstellen" aktivieren, ohne die JWT-Konfiguration vorzunehmen

>**Beim Speichern wird die Fehlermeldung "Ressource 404 kann nicht gefunden werden" angezeigt**
>
>Keine Sorge, alles wird gespeichert, es wird nur die automatische Synchronisierung nicht durchgeführt. Damit Ihr Assistent "Meine Geräte synchronisieren" anzeigt. Um zu versuchen, dieses Problem zu beheben :
> gehe zur nächsten Seite [hier](https://console.cloud.google.com/cloud-resource-manager). Auf dieser Seite sehen Sie die Liste geh Projekte, auch der unsichtbaren auf der Google-Aktionsseite. Löschen Sie alle nicht verwendeten Projekte.
> Wiederholen Sie dann das Tutorial aus dem Schritt Konfigurieren des API-Schlüssels Homegraph (Aktivierung, Generierung des Schlüssels, dann trennen Sie die Freiheit von Ihrem Google-Konto und wiederholen Sie den Link).


>**Sie haben einen Verbindungsfehler oder können den Parameter nicht aktualisieren. Überprüfen Sie Ihre Verbindung im Cloud-Modus**
>
>In jeedom ist es im Plugin erforderlich, Geräte hinzuzufügen, die Zuordnung von Jeedom Smarthome in der Google Home-Anwendung zu speichern und zu wiederholen

>**Ich erhalte die Fehlermeldung "Anscheinend ist Jeedom Smart Home derzeit nicht verfügbar." oder "Entschuldigung, ich kann keine Verbindung zu Jeedom Smart Home herstellen."**
>
>Versuchen Sie, die Zuordnung der Google Smarthome-App aufzuheben oder erneut aufzuheben. Achten Sie darauf, dass Sie die offizielle Anwendung und keine [TEST] -Anwendung verwenden, wenn Sie zuvor den Standalone-Modus verwendet haben.

>**Beim Hinzufügen von Geräten habe ich NOK**
>
>Klicken Sie einfach auf NOK. In einem Fenster wird der generische Typ angezeigt, den Sie auf den Gerätesteuerungen haben müssen, damit er funktioniert
