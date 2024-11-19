# Google Smarthome Plugin

Dieses Plugin ermöglicht es Ihnen :

- Verwenden Sie die native Implementierung von Google für die Verwaltung verbundener Objekte

Es kann auf zwei Arten funktionieren :

- Standalone : Sie erstellen die Anwendungen im Entwicklungsmodus auf Google-Seite und verbinden dann Ihren Jeedom mit dem Google-Dienst
- Wolke : über einen Cloud-Service von Jeedom

> **Wichtig**
>
> Für den Cloud-Modus ist ein Abonnement für Sprachdienste erforderlich (3 Monate kostenlos beim Kauf des Plugins)). Sie können Ihr Abonnement verwalten [hier](https://market.jeedom.com/index.php?v=d&p=profils#services)

> **Wichtig**
>
> Für GOOGLE muss Ihr Jeedom in HTTPS (das Plugin funktioniert nicht in HTTP) mit einem gültigen Zertifikat (daher kein selbstsigniertes Zertifikat) zugänglich sein)
>
> Dank der Power- oder Ultimate Service Packs ist Ihr Jeedom über HTTPS zugänglich.
> Wenn Sie über ein Community Service Pack verfügen, müssen Sie selbst ein SSL-Zertifikat installieren, das von einer Zertifizierungsstelle ausgestellt wurde (z: Lassen Sie uns verschlüsseln).

> **Wichtig**
>
> Das Plugin unterstützt keine Geräte mit Doppelfunktionen (2 Ausgänge wie bestimmte zwave Fibaro-Module)). Sie müssen unbedingt 2 virtuelle durchlaufen, um es aufzuschlüsseln.

# Cloud-Modus

> **Wichtig**
>
> Es ist wichtig, die folgenden Schritte in der angegebenen Reihenfolge auszuführen !!!

> **Wichtig**
>
> Wenn Sie eine Fehlermeldung erhalten, dass Ihr Benutzerpasswort oder Passwort falsch ist, müssen Sie dies tun :
> - Überprüfen Sie, ob Google Home auf dem Markt aktiv ist
> - Wenn dies der Fall ist, sind Sie sich Ihrer Kennungen sicher (seien Sie vorsichtig, Sie müssen die Groß-/Kleinschreibung beachten)) ?
> - Wenn dies der Fall ist, ändern Sie Ihr Passwort im Markt und speichern Sie es in der Konfiguration des Sprachassistentendienstes (Marktprofilseite, Registerkarte „Meine Dienste“)

Gehen Sie nach der Installation des Plugins einfach zur Konfiguration des Plugins, wählen Sie den Cloud-Modus und klicken Sie auf "Senden" (dadurch werden die Verbindungsinformationen an die Plugin-API auf dem Markt gesendet)

Dann müssen Sie in Jeedom in Kommunikation/Google Smarthome auf Speichern klicken, um Ihre Erstkonfiguration zu senden. Sie benötigen mindestens ein Gerät in OK (andernfalls wird beim Verbinden von Google Home <-> Jeedom eine Fehlermeldung angezeigt)

Dann müssen Sie in der Google Home-Anwendung zur ersten Registerkarte gehen und auf Hinzufügen klicken (das +) :

![gsh](../images/gsh29.png)

Konfigurieren Sie dann ein Gerät :

![gsh](../images/gsh30.png)

Ein "Funktioniert mit Google" :

![gsh](../images/gsh31.png)

Suchen Sie dann in der Liste mit der Suchschaltfläche (Lupe oben rechts) nach "Jeedom Smarthome" und klicken Sie darauf :

![gsh](../images/gsh32.png)

Geben Sie Ihre Marktkennungen ein (also die Märkte, nicht die Ihrer Jeedom).

![gsh](../images/gsh6.png)

Unter Plugins -> Kommunikation -> Google Smarthome können Sie Ihre verschiedenen Geräte konfigurieren (siehe Kapitel Plugin-Konfiguration))

>**Notiz**
>
>Um vom Standalone-Modus in den Cloud-Modus zu wechseln, müssen Sie :
>- Im Plugin in die Cloud gehen und dann speichern
>- 24h warten
>- In der Google-Startanwendung müssen Sie testsmarthome (Ihre eigenständige Anwendung) trennen)
>- In Kommunikation/Google Smarthome müssen Sie auf Speichern klicken, um Ihre Erstkonfiguration zu senden
>- Verknüpfen Sie Jeedom Smarthome in Google Home


> **Wichtig**
>
>Für jede Änderung der Konfiguration der an Google Home gesendeten Geräte (Hinzufügen von Geräten, Löschen von Geräten, Ändern eines generischen Auftragstyps) muss dann unbedingt Plugin -> Kommunikation -> Googme Smarthome aufgerufen werden speichern

# Standalone-Modus

> **Wichtig**
>
> Google ändert die Benutzeroberfläche (sehr) oft, wir verfügen nicht über die personellen Ressourcen, um jedes Mal alle Screenshots erneut zu erstellen. Daher kann es zu großen Unterschieden zwischen den Aufnahmen und der Realität kommen

> **Wichtig**
>
> Wenn Sie den Cloud-Modus verwendet haben, sollten Sie diesen Teil nicht ausführen !!! Gehen Sie direkt zum Kapitel „Plugin-Konfiguration“"

> **Wichtig**
>
> Der Standalone-Modus ist ein "Betrug", da Sie bei Google im Entwicklungsmodus eine Anwendung erstellen, die die Synchronisierung nur für 3 Tage nach Aktivierung des Testmodus ermöglicht. Wenn Sie also Geräte hinzufügen oder ändern, aktivieren Sie den Testmodus alle 3 Tage erneut, um eine Synchronisierung durchführen zu können. Achtung, wir sprechen von einer Änderung der Konfiguration, wenn Sie keine Geräte hinzufügen oder ändern. Es gibt nichts zu tun. Die Anwendung funktioniert ohne zeitliche Begrenzung

> **Wichtig**
>
> Da es sich bei der Anwendung um eine Entwickleranwendung auf der Google-Seite handelt, können sie diese jederzeit ausschneiden, löschen oder die Regeln ändern. In diesem Fall kann Jeedom im Falle einer Fehlfunktion nicht zur Verantwortung gezogen werden.

> **Wichtig**
>
> Damit die Anwendung (en) funktionieren, ist es wichtig, dass sich Ihr Jeedom in https mit einem gültigen Zertifikat befindet (wenn Sie über ein Service Pack verfügen, ist dafür ein DNS-Zugriff vorhanden)

Zur Erinnerung, das Plugin ermöglicht es Ihnen :

- Verwenden Sie die native Implementierung von Google für die Verwaltung verbundener Objekte
- Verwenden Sie Jeedom-Interaktionen mit "Sprechen Sie mit ..."

Es sind daher 2 Anwendungen bei Google gelistet : eine für den Google Smarthome-Teil und eine für den Interaktionsteil (Sie können natürlich nur einen der beiden machen))

## Google Smarthome App

Komm schon [hier](https://console.actions.google.com) Klicken Sie dann auf "Projekt hinzufügen / importieren""

![gsh](../images/gsh7.png)

Geben Sie dem Projekt einen Namen, ändern Sie die Standardsprache und -region und bestätigen Sie :

![gsh](../images/gsh8.png)

Wählen Sie "Home Control"" :

![gsh](../images/gsh9.png)

Klicken Sie auf "Smarthome" :

![gsh](../images/gsh10.png)

Klicken Sie auf "Benennen Sie Ihre Smart Home-Aktion"" :

![gsh](../images/gsh11.png)

Setzen Sie "smarthome test" und validieren Sie (Schaltfläche Speichern oben rechts) :

![gsh](../images/gsh12.png)

Klicken Sie dann links auf "Aktionen" :

![gsh](../images/gsh13.png)

Dann "Fügen Sie Ihre erste Aktion hinzu" :

![gsh](../images/gsh14.png)

Sie müssen hier die Ankunfts-URL von Jeedom angeben. Um es zu haben, ist es sehr einfach: In Jeedom müssen Sie zur Plugin-Verwaltungsseite gehen, den "Standalone" -Modus auswählen (und nebenbei speichern). Die URL heißt "Fulfillment URL""

![gsh](../images/gsh15.png)

Gehen Sie dann zu "Kontoverknüpfung" (linkes Menü) :

![gsh](../images/gsh13.png)

Wählen Sie "Nein, ich möchte nur die Kontoerstellung auf meiner Website zulassen" und klicken Sie auf "Weiter"" :

![gsh](../images/gsh16.png)


Wählen Sie "OAuth" und dann "Autorisierungscode" und klicken Sie auf "Weiter"" :

![gsh](../images/gsh17.png)

Füllen Sie dann die 4 Felder gemäß der Plugin-Konfigurationsseite aus und klicken Sie auf "Weiter"" :

![gsh](../images/gsh18.png)

> **Notiz**
>
> Die Felder sind :
> - Client-ID zuerst
> - dann der geheime Klient
> - dann "Autorisierungs-URL" (achten Sie darauf, die aus dem Abschnitt "Smarthome" zu entnehmen")
> - dann "Token URL" (achten Sie darauf, die aus dem Abschnitt "Smarthome" zu nehmen")

Es gibt nichts zu tun, einfach "Weiter" :

![gsh](../images/gsh19.png)

Schreiben Sie „Toto“ und führen Sie dann „Speichern“ aus" :

![gsh](../images/gsh20.png)

Sie müssen nun den Homegraph-API-Schlüssel konfigurieren, um dies zu tun [hier](https://console.developers.google.com/apis/dashboard), Klicken Sie dann mit der rechten Maustaste auf "Bibliothek" :

![gsh](../images/gsh21.png)

> **Notiz**
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

Kopieren Sie den generierten API-Schlüssel und fügen Sie ihn auf der Verwaltungsseite des Google Smarthome-Plugins in „Homegraph API Google“ ein"

Der letzte Schritt, um Jeedom die Projekt-ID zum Verwalten der Verbindung zu geben, ist [hier](https://console.actions.google.com) Klicken Sie dann auf Ihr Projekt. Récuperez l'url de la forme "https://console.actions.google.com / u / 0 / project / myproject-31023 / summary ", die Projekt-ID befindet sich zwischen project / und / summary. Im Beispiel hier ist es" myproject-31023 ". Kopieren Sie diese ID auf die Verwaltungsseite das Google Smarthome-Plugin in "Smarthome Project ID".

Das war’s, Sie können nun links auf „Aktion“ klicken" :

![gsh](../images/gsh27.png)

Dann auf Test :

![gsh](../images/gsh28.png)

Dann brauchen Sie auf einem Smartphone **Androide** (darf nicht auf einem iphone funktionieren) verbinde dich mit deinem Jeedom durch **die externe URL** davon. Gehen Sie dann zur Heimanwendung, dann "Konfigurieren oder Hinzufügen", dann "Gerät konfigurieren" und klicken Sie schließlich auf "Funktioniert mit Google" und fügen Sie Ihren oben erstellten Dienst hinzu (er beginnt mit [Test])

## JWT-Konfiguration

Mit JWT können Sie jede Änderung des Status eines an Google gesendeten Geräts automatisch melden. Auf diese Weise können Sie den Status schneller abrufen, wenn Sie ihn von Google Home oder der Google Home-App anfordern. Die Konfiguration ist nicht zwingend erforderlich. Wenn Sie jedoch das Kontrollkästchen „Status melden“ aktivieren, müssen Sie dies unbedingt getan haben, damit es funktioniert.

Um die Konfiguration vorzunehmen, die Sie benötigen

* geh [hier](https://console.developers.google.com/iam-admin/serviceaccounts), Wenn Google Sie dazu auffordert, müssen Sie das Projekt auswählen (das oben erstellte)).
* Klicken Sie auf Dienstkonto erstellen
  * Geben Sie ihm einen Namen (Sie können setzen, was Sie wollen, vermeiden )
  * Rufen Sie die unten generierte E-Mail ab, um sie in die Plugin-Konfiguration auf Jeedom zu kopieren (Felder : Mail-Client (JWT))
  * Klicken Sie auf Erstellen
  * Klicken Sie auf Weiter, ohne etwas zu ändern
  * Klicken Sie auf "Schlüssel erstellen""
    * Verlassen Sie JSON und klicken Sie auf OK
  * Klicken Sie auf OK
  * Öffnen Sie die heruntergeladene Datei und kopieren Sie den Teil „private_key“ (beginnt mit „-----BEGIN PRIVATE KEY-----“, einschließlich und endet mit „-----END PRIVATE KEY-----\n). ", ohne das ") in der Plugin-Konfiguration auf Jeedom enthalten (Felder : Privater Schlüssel (JWT))

# Plugin Konfiguration

Gehen Sie auf Ihrem Jeedom zu Plugins -> Kommunikation -> Google Smarthome und wählen Sie im Abschnitt „Geräte“ das Gerät aus, das an Google übertragen werden soll, sowie den Gerätetyp.

![gsh](../images/gsh2.png)

> **Wichtig**
>
> Das Plugin basiert auf den generischen Jeedom-Befehlen zur Steuerung Ihrer Hausautomation. Es ist daher sehr wichtig, diese korrekt zu konfigurieren.Sie können sehen [hier](https://doc.jeedom.com/de_DE/core/4.4/types) Dokumentation zu typischen Generika

> **Notiz**
>
> Für den Typ "Kamera" müssen Sie die URL des Streams unbedingt konfigurieren (wir haben nur das RTSP getestet), damit es funktioniert.
> Beachten Sie, dass sich die Kameraunterstützung derzeit in der Beta-Phase befindet und viele Ressourcen verbraucht

## Equipement

Auf Geräten können Sie konfigurieren :

* Optionen :
  * Senden : sendet das Gerät an Google Home, damit es gesteuert werden kann (Vorsicht, die Konfiguration der generischen Typen muss in Ordnung sein))
  * Erhöhen Sie den Staat : Senden von Statusänderungsinformationen direkt an Google (dies verhindert, dass Google Home bei der Anforderung von Informationen Jeedom befragt)). Siehe Abschnitt "JWT-Konfiguration"
  * Herausforderung [Keine, Code] : Wenn Sie sich im Codemodus befinden, werden Sie von Google für jede Aktion auf dem Gerät nach einem Code (der unten angegebene) gefragt
* STATUS : Gibt an, ob die Übertragung in Ordnung ist. Wenn es sich um NOK handelt, stammt es vom generischen Typ. Wenn Sie auf NOK klicken, erhalten Sie Informationen zu den erforderlichen generischen Typen
* Typ : gibt die Art der Ausrüstung an
* Spitzname : Gerätename, wenn leer, wird der Gerätename verwendet
* Aktion :
  * Ermöglicht die erweiterte Konfiguration von Geräten für Google Home (abhängig vom verwendeten Typ))
  * Die erweiterte Gerätekonfiguration ermöglicht den Zugriff auf die erweiterte Befehlskonfiguration und damit die Änderung generischer Typen
  * Ermöglicht den direkten Zugriff auf die Gerätekonfigurationsseite

### Type

Die Art der Ausrüstung ist wichtig, damit Google auf die von Ihnen gesagten Sätze reagieren kann.

> **Wichtig**
>
> Jeedom unterstützt „Beta“-Typen, die bei Google noch nicht dokumentiert sind, sodass diese je nach Aktualisierungen bei Google möglicherweise funktionieren oder auch nicht

> **Wichtig**
>
> Der Thermostat-Typ wird nur durch Geräte unterstützt, die vom Thermostat-Plugin stammen. Andernfalls funktioniert die Verwaltung der Modi möglicherweise nicht
> 
> Um den Modus eines Thermostattyps zu verwalten, müssen Sie Folgendes tun :
> - Informationen vom Typ „andere“, die als Wert „Heizen“, „Kühlen“, „Aus“, „Öko“ annehmen und ihm den Typ „Generisch“ zuweisen : Thermostatmodus
> - Aktionen, die Modusänderungen durchführen und ihnen den generischen Typ zuweisen : Thermostatmodus
> - Es ist außerdem erforderlich, die Aktion in den Geräteparametern im gsh-Plugin (Abschnitt „Konfiguration Temperatureinstellung“) mit dem entsprechenden Modus zu verbinden")

## Szenario

Sie können im Szenario-Tab auch Szenen mit Ein- und Ausstiegsaktionen erstellen.

![gsh](../images/gsh3.png)

> **Notiz**
>
> Um ein Szenario zu starten, sagen Sie einfach "Aktiv #nom du scénario#" oder "Deaktivieren #nom du scénario#

> **Notiz**
>
> Beim Speichern fordert Jeedom automatisch eine Synchronisierung mit Google an. Achtung im Standalone-Modus Wenn Sie einen Fehler haben (Typ "Angeforderte Entität wurde nicht gefunden"), versuchen Sie, den Test der Anwendung erneut zu aktivieren ([hier](https://console.actions.google.com)) Klicken Sie dann erneut auf die Verbindungsschaltfläche auf der Plugin-Konfigurationsseite. Überprüfen Sie auch die Konfiguration (insbesondere den OAuth-Teil) Ihrer Google-Anwendung (manchmal werden die Felder von Google gelöscht))

Sie müssen die Geräte lediglich den Räumen in der Google Home-App zuweisen

# FAQ

>**Ich kann die Zuordnung im Cloud-Modus nicht herstellen ?**
>
> Wir müssen das überprüfen :
> - Sie befinden sich in https (wenn Sie ein Service Pack haben, verwenden Sie jeedom DNS, diese sind standardmäßig sicher)
> - Sie haben Google Assistant auf dem Markt aktiviert (Profilseite, Registerkarte „Meine Dienste“ und dann Konfiguration im Bereich „Sprachassistenten“))
> - Sie haben das Abonnement für Sprachdienste abonniert und es ist weiterhin gültig (erforderlich ab dem 01.06.2019)). Dies ist auf Ihrer Marktprofilseite auf der Registerkarte „Meine Dienstleistungen“ zu sehen
> - Sie müssen unter Plugins -> Kommunikation -> Google Smarthome „Geräte übertragen“ auswählen und den Typ festlegen und abschließend speichern
> - Verwenden Sie Ihre Marktanmeldeinformationen gut
> - Wenn Sie über ein Let's-Encrypt-Zertifikat verfügen, vergessen Sie nicht, den Root und den Intermediär in die Zertifizierungskette einzufügen
> - Kein OK-Modul (Sie müssen eines haben, sonst weigert sich Google, einen Link zu erstellen)
> - Wenn Sie sich in Ihrer eigenen Domain befinden, treten Probleme bei der Auflösung des Domainnamens in IP auf, keine Ahnung, warum. Auf der Jeedom-Seite sind die DNS diejenigen, die standardmäßig von OVH bereitgestellt werden (wir haben sowieso keine Kontrolle darüber). Ich hatte sogar den Fall, dass ein Benutzer das DNS bei OVH hat und es dennoch nicht auf unseren Computern auflösen kann
> - Problem mit dem Telefon, bei einigen Marken ist der Browser entweder veraltet oder standardmäßig nicht verchromt, und es treten Probleme beim Herstellen des Links auf
> - Wenn das Problem weiterhin besteht, versuchen Sie, nur ein Lichtmodul einzusenden


>**Was sind die möglichen Bestellungen ?**
>
>Sprachbefehle (sowie Rückgaben) werden nur von Google verwaltet [Dokumentation](https://support.google.com/googlehome/answer/7073578?hl=fr)

>**Der Assistent bittet mich, die Teile zuzuweisen, aber ich weiß nicht, was die Ausrüstung entspricht.**
>
>Ja, der Assistent zeigt nicht den tatsächlichen Namen des Geräts an, sondern nur den Spitznamen. Sie müssen daher den Assistenten beenden und zur Homepage der Home Control zurückkehren. Durch Klicken auf das Gerät erhalten Sie dessen Namen und können es dann einem Raum zuordnen

>**Warum müssen Sie jedem Gerät Teile zuweisen? ?**
>
>Da Google dies nicht über die API zulässt, müssen Sie dies unbedingt manuell tun.

>**Ich erhalte die Fehlermeldung "OpenSSL kann keine Daten signieren"**
>
>Sie müssen das Kontrollkästchen "Push the state" (in der erweiterten Konfiguration grüne Taste mit dem gekerbten Rad) aktivieren, ohne die JWT-Konfiguration vorzunehmen

>**Beim Speichern wird die Fehlermeldung "Ressource 404 kann nicht gefunden werden" angezeigt**
>
>Also keine Sorge, alles wird gespeichert, nur die automatische Synchronisierung wird nicht durchgeführt. Damit Ihr Assistent "Meine Geräte synchronisieren" anzeigt. Um zu versuchen, dieses Problem zu beheben :
> gehe zur nächsten Seite [hier](https://console.cloud.google.com/cloud-resource-manager). Auf dieser Seite sehen Sie die Liste aller Projekte, auch der unsichtbaren auf der Google-Aktionsseite. Löschen Sie alle nicht verwendeten Projekte.
> Wiederholen Sie dann das Tutorial ab dem Schritt „Konfigurieren des Homegraph-API-Schlüssels“ (Aktivierung, Schlüsselgenerierung), trennen Sie dann jeedom von Ihrem Google-Konto und wiederholen Sie den Link)


>**Sie haben einen Verbindungsfehler oder können den Parameter nicht aktualisieren. Überprüfen Sie Ihre Verbindung im Cloud-Modus**
>
>In jeedom ist es im Plugin erforderlich, Geräte hinzuzufügen, die Zuordnung von Jeedom Smarthome in der Google Home-Anwendung zu speichern und zu wiederholen

>**Ich erhalte die Fehlermeldung "Anscheinend ist Jeedom Smart Home derzeit nicht verfügbar." oder "Entschuldigung, ich kann keine Verbindung zu Jeedom Smart Home herstellen."**
>
>Versuchen Sie, die Zuordnung der Google Smarthome-App aufzuheben oder erneut aufzuheben. Achten Sie darauf, die offizielle Anwendung und keine [TEST]-Anwendung zu verwenden, wenn Sie zuvor den Standalone-Modus verwendet haben. Wenn das Problem weiterhin besteht, überprüfen Sie (insbesondere in einer Szene), ob die Ausführungszeit weniger als 2 Sekunden beträgt (der von Google zugelassene Höchstwert))

>**Beim Hinzufügen von Ausrüstung habe ich NIO**
>
>Klicken Sie einfach auf das NOK. Ein Fenster zeigt Ihnen an, welche generischen Typen Sie auf den Gerätesteuerungen haben müssen, damit dies funktioniert. Sie können sehen [hier](https://doc.jeedom.com/de_DE/concept/generic_type) die Dokumentation zum generischen Typ

>**Das Ändern der Drehzahl eines Lüfters funktioniert nicht**
>
>Nach der Analyse sendet Google während einer Geschwindigkeitsaktion keinen Auftrag. Wir müssen daher warten, bis Google korrigiert
