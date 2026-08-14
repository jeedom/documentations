# Erste Schritte mit Jeedom

Diese Dokumentation beschreibt die Schritte, die nach der Inbetriebnahme Ihrer Jeedom-Box zu befolgen sind.

## Benutzeroberfläche

Auf Ihre Jeedom-Instanz können Sie über deren Weboberfläche unter der entsprechenden Adresse im lokalen Netzwerk zugreifen.

### Lokaler Zugriff

Um auf die Jeedom-Benutzeroberfläche zugreifen zu können, müssen Sie die IP-Adresse oder den Hostnamen des Geräts im lokalen Netzwerk kennen. Hier sind verschiedene Methoden, um diese zu ermitteln:

#### Automatische Erkennung

Der Jeedom-Marktplatz bietet [**Ein Tool zur Erkennung, mit dem sich die IP-Adressen der Jeedom-Instanzen abrufen lassen, die mit demselben lokalen Netzwerk verbunden sind**](https://www.jeedom.com/market/index.php?v=d&p=find){:target="_blank"}.

>**WICHTIG**
>
>Die Box muss bereits seit einigen Minuten laufen, damit die Jeedom-Erkennung funktioniert.\
>Zudem hängt diese Funktion von der lokal verwendeten Netzwerkkonfiguration ab und ist unter bestimmten Umständen möglicherweise nicht nutzbar.

#### Router

Die IP-Adresse Ihrer Jeedom-Box finden Sie, indem Sie auf die Verwaltungsoberfläche Ihres Routers oder Ihrer Internet-Box zugreifen.

Die meisten bieten eine Liste der verbundenen Geräte/Peripheriegeräte mit deren Hostnamen, MAC-Adresse und IP-Adresse an. Suchen Sie nach einem Gerät mit dem Namen „Jeedom“ oder identifizieren Sie es anhand seiner MAC-Adresse.

>**WICHTIG**
>
>Lesen Sie die Bedienungsanleitung des Herstellers, falls Sie Schwierigkeiten haben, auf die Verwaltungsoberfläche des Routers zuzugreifen.

#### Hostname

Auf die Jeedom-Oberfläche kann auch über den Hostnamen des Rechners zugegriffen werden.

- Bei Verwendung einer [offizielles System-Image](/compatibility/#Images%20système%20officielles) Um Jeedom zu installieren, ist der Hostname bekannt und Jeedom muss unter folgender Adresse erreichbar sein:

| Gerät | Jeedom-Schnittstelle   |
|--------------------|--------------------|
| **Luna** | [http://jeedomluna.local](http://jeedomluna.local){:target="_blank"} |
| **Atlas** | [http://jeedomatlas.local](http://jeedomatlas.local){:target="_blank"} |
| **Smart** | [http://jeedomsmart.local](http://jeedomsmart.local){:target="_blank"} |
| **Computer/Hypervisor** *(automatische Installation)* | [http://jeedom.local](http://jeedom.local){:target="_blank"} |
| **Freebox** | [http://jeedomfreebox.local](http://jeedomfreebox.local){:target="_blank"} |

- Wenn Sie Debian selbst installiert haben, entspricht der Hostname dem bei der Installation festgelegten Namen des Rechners (`MACHINE`). `DOMAIN = local` Standardmäßig oder, falls zutreffend, der bei der Installation angegebene spezifische Domainname.

Die Adresse der Jeedom-Schnittstelle sollte normalerweise lauten: `http://MACHINE.DOMAIN`.

#### Systemkonsole

Seit einer [offizielles System-Image](/compatibility/#Images%20système%20officielles): Bei jedem direkten Zugriff auf die Konsole wird sofort die Adresse der Jeedom-Schnittstelle angezeigt:

{% include lightbox.html src="../images/shell_ip.jpg" data="shell_ip" title="Console système : IP Jeedom" imgstyle="display:block;margin:0 auto;" %}

Die IP-Adresse kann auch durch Eingabe des folgenden Befehls angezeigt werden:
```sh
ip addr | grep 'inet ' | tail -n 1
```

### Erste Anmeldung

[Sobald die Adresse von Jeedom bekannt ist](#Accès%20local), geben Sie diese Adresse in Ihren Internetbrowser ein, um zur Anmeldeseite zu gelangen:

{% include lightbox.html src="../images/FirstStep_box_connect.jpg" data="FirstStep_box_connect" title="Connexion Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

>**WICHTIG**
>
>Die Standard-Anmeldedaten lauten: `admin/admin`.

Wenn Sie sich mit den Standard-Anmeldedaten anmelden, fordert Jeedom Sie auf, das Passwort zu ändern `admin`. **Geben Sie das neue Passwort einfach zweimal ein, um den Zugriff dieses Benutzers zu sichern**.

Es ist auch möglich, das Passwort des Benutzers zu ändern `admin` Klicken Sie auf die Schaltfläche **Passwort** auf der Seite zur Benutzerverwaltung *(erreichbar über das Menü **Einstellungen → System → Benutzer**)*:

{% include lightbox.html src="../images/FirstStep_boxPassword.jpg" data="FirstStep_boxPassword" title="Mot de passe admin" imgstyle="width:75%;display:block;margin:0 auto;" %}

>**WICHTIG**
>
>Merken Sie sich das neue Passwort gut, damit Sie sich bei der Jeedom-Benutzeroberfläche anmelden können.

## Markt

Über den Market können Sie Plugins ganz einfach anzeigen, installieren und sogar veröffentlichen, Ihre Jeedom-Instanzen registrieren oder insbesondere die Jeedom-Dienste nutzen.

### Anmeldung

Um ein Konto im Jeedom-Market zu erstellen, müssen Sie lediglich [**Füllen Sie die auf der Registrierungsseite erforderlichen Felder aus**](https://www.jeedom.com/market/index.php?v=d&p=register){:target="_blank"} :

{% include lightbox.html src="../images/FirstStep_market1.jpg" data="FirstStep_market1" title="Inscription Market Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

Nach der Bestätigung sind Sie in Ihrem Konto angemeldet und werden zur Startseite weitergeleitet:

{% include lightbox.html src="../images/FirstStep_market2.jpg" data="FirstStep_market2" title="Accueil Market Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

### Service Pack

Die offiziellen Jeedom-Boxen werden mit einem **Service Pack**-Code geliefert, den Sie per E-Mail erhalten und der Ihnen den kostenlosen Zugriff auf Plugins und Dienste ermöglicht.

Um Ihr Service Pack zu aktivieren, müssen Sie diesen Code eingeben, wenn Sie dazu aufgefordert werden, nachdem Sie auf die Schaltfläche **Ich habe einen Code** auf der Registerkarte [**Meine Dienstleistungen aus Ihrem Marktprofil**](https://www.jeedom.com/market/index.php?v=d&p=profils#services){:target="_blank"}.

>**INFORMATION**
>
>Bitte wenden Sie sich an Ihren Händler, falls Sie nach dem Kauf einer offiziellen Jeedom-Box keinen Service-Pack-Code erhalten haben.

### Anbindung an Jeedom

Damit Ihre Jeedom-Instanz mit dem Market kommunizieren kann, müssen Sie Ihre Profil-Anmeldedaten in den allgemeinen Einstellungen unter dem Menüpunkt **Einstellungen → System → Konfiguration** eingeben.

Wechseln Sie anschließend zur Registerkarte **Updates/Market**, zur Unterregisterkarte **Repository-Einstellungen: Market** und füllen Sie die folgenden Felder aus, bevor Sie speichern:

- Market aktivieren: Das Kontrollkästchen ankreuzen
- Adresse: `https://market.jeedom.com`
- Benutzername: Ihre Market-Profil-ID
- Passwort: Passwort für Ihr Market-Profil

>**INFORMATION**
>
>Sie können auf die Schaltfläche **Testen** klicken, um zu überprüfen, ob die Verbindung ordnungsgemäß hergestellt wird.

### Fernzugriff

Unabhängig davon, ob Sie über ein Service Pack verfügen oder den Dienst **Einfacher Fernzugriff** *(DNS Jeedom)* abonniert haben, generiert Jeedom eine Fernzugriffsadresse, über die Sie sich von außerhalb des lokalen Netzwerks verbinden können.

Um diesen Dienst zu aktivieren, gehen Sie einfach ins Menü **Einstellungen → System → Konfiguration**, Registerkarte **Netzwerke**:

{% include lightbox.html src="../images/FirstStep_dns.jpg" data="FirstStep_dns" title="Réseaux Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

Aktivieren Sie das Kontrollkästchen **Jeedom-DNS aktivieren** und klicken Sie anschließend auf die Schaltfläche **(Neu)starten**. Nach kurzer Zeit und sobald der Dienst gestartet ist, wird die Adresse für den Fernzugriff auf dem Bildschirm angezeigt.

>**INFORMATION**
>
>Je nach den Umständen kann es mehrere Stunden dauern, bis der Fernzugriff vollständig funktionsfähig ist.

Sie können die Adresse für den Fernzugriff anpassen, indem Sie auf die Schaltfläche **Konfiguration** des Dienstes klicken unter [**Ihr Marktprofil**](https://www.jeedom.com/market/index.php?v=d&p=profils#services){:target="_blank"}.

Alle Details finden Sie unter [Dokumentation zum Dienst „Fernzugriff“ – DNS Jeedom](/howto/mise_en_place_dns_jeedom).

## Mein erstes Objekt erstellen

Sie werden nun Ihr erstes Objekt erstellen, aber zunächst müssen Sie wissen, was ein Objekt ist.

In Jeedom kann das alles Mögliche sein, aber es empfiehlt sich, die Einrichtung entsprechend Ihrer Räume vorzunehmen.

> **Tipp**
>
> Es ist möglich, Beziehungen zwischen Objekten zu definieren. Beispiel: Das Wohnzimmer gehört zum Objekt „Erdgeschoss“, das wiederum zum Objekt „Haus“ gehört.

Ein Objekt zu erstellen ist ganz einfach:

-   Gehen Sie zu „Extras“ → „Objekte“.
-   Klicken Sie auf die Schaltfläche „Hinzufügen“.
-   Jeedom fragt Sie nach dem Namen des Objekts. Bestätigen Sie. Damit haben Sie Ihr erstes Objekt erstellt:

![Betreff](../images/FirstStep_object.jpg)

Weitere Informationen zu diesem Abschnitt finden Sie unter *Bedienungsanleitung -> Objekt*.

## Mein erstes Plugin installieren

Mit einem Plugin lassen sich Funktionen zu Jeedom hinzufügen. Es gibt Hunderte davon. Viele sind kostenlos, andere sind kostenpflichtig. Um zur Plugin-Seite zu gelangen, gehen Sie auf „Plugins“ → „Plugin-Verwaltung“.

Klicken Sie anschließend einfach auf „Market“:

Sie erhalten dann eine Liste aller Plugins, die installiert werden können.

> **Wichtig**
>
> Bitte beachten Sie, dass einige Plugins offiziell sind, andere hingegen nicht. Bei Problemen mit einem inoffiziellen Plugin kann das Jeedom-Team keine Haftung übernehmen.

![Liste der Plugins](../images/FirstStep_plugin1.jpg)

Wenn Sie auf ein Plugin klicken, gelangen Sie zu dessen Detailseite:

![Plugins-Übersicht](../images/FirstStep_plugin2.jpg)

Dort finden Sie dann:

- Schaltflächen zum Installieren des Plugins: Die stabile Version wird dringend empfohlen,
- Eine Schaltfläche zum Entfernen des Plugins,
- Eine kurze Beschreibung,
- Ein Link zur Dokumentation des Plugins,
- Ein Link zum Changelog (die zuletzt vorgenommenen Änderungen),
- Kompatibilität mit verschiedenen Plattformen,
- Nutzerbewertungen,
- So verwenden Sie das Plugin:
- Weitere Informationen wie der Autor, der Link zur Forumsdiskussion über dieses Plugin, das Datum der letzten Aktualisierung usw.

Weitere Informationen zu den Plugins finden Sie unter *Bedienungsanleitung -> Plugin*.

# Support

Jeedom deckt sehr weitreichende Bereiche ab, die sich täglich weiterentwickeln.
Es stehen Ihnen jedoch zahlreiche Möglichkeiten zur Verfügung, um Hilfe zu erhalten und Ihre Fragen zu stellen.

## Das Forum

Sie finden es [hier](https://community.jeedom.com/).

Das Forum ist sehr aktiv und enthält eine Fülle von Informationen. Wenn Sie eine Frage haben, zögern Sie nicht, sie zu stellen. Sie erhalten (im Durchschnitt) innerhalb einer Stunde eine Antwort. Bitte beachten Sie jedoch, dass das Forum von der Jeedom-Community, die aus Freiwilligen besteht, und nicht vom Unternehmen Jeedom betrieben wird.

## Supportanfragen (oder Tickets)

> **Wichtig**
>
> Bitte beachten Sie: Für jede Supportanfrage ist ein Konto im Market erforderlich.

Wenn Sie keine Lösung für Ihr Problem gefunden haben, können Sie als letzten Ausweg eine Supportanfrage an das Jeedom-Team stellen. Diese Anfrage erfolgt über ein Ticket. Es gibt mehrere Möglichkeiten, ein Ticket zu erstellen:

-   Direkt über Jeedom (empfohlene Vorgehensweise): Menü „Einstellungen“ → „Supportanfrage“.
-   Sollten Sie aus irgendeinem Grund keinen Zugriff auf Ihr Jeedom haben, können Sie jederzeit über den Market ein Ticket erstellen:
    -   entweder indem Sie auf Ihren Namen und anschließend auf *Supportanfrage* klicken,
    -   Entweder gehen Sie in Ihr Profil und dann in den Bereich **Tickets** und klicken dort auf die Schaltfläche „Supportanfrage erstellen“.

![Supportanfrage](../images/FirstStep_support.jpg)

Der weitere Austausch erfolgt ausschließlich per E-Mail.

> **Tipp**
>
> Wenn Sie beim Erstellen eines Tickets eine Fehlermeldung erhalten, dass Sie Ihr Kontingent erreicht haben, bedeutet dies, dass Sie je nach Ihrem Service Pack auf eine bestimmte Anzahl von Supportanfragen pro Monat beschränkt sind.

Die verschiedenen Service Packs sind:
- Community (kostenlos): 2 Tickets/Monat (nur für kostenpflichtige Plugins)
- Power: 10 Tickets/Monat
- Pro: 100 Tickets/Monat

Hier finden Sie detaillierte Informationen zu den Service Packs [hier](https://www.jeedom.com/site/fr/soft.html#obtenir).

>**WICHTIG**
>
>Achtung: Wir stellen fest, dass viele Nutzer E-Mail-Adressen mit „mailinblack“ verwenden, die beim ersten Kontakt den Absender auffordern, einen Link zu bestätigen, um nachzuweisen, dass es sich tatsächlich um einen Menschen handelt. Dieses System ist nicht mit unserem Ticket-System kompatibel. Selbst wenn wir Ihnen antworten, erhalten Sie die Antwort daher niemals in Ihrem E-Mail-Postfach, da dieses uns blockiert. Bitte geben Sie daher auf Ihrer Profilseite im Market eine E-Mail-Adresse an, die dieses System nicht nutzt, da Sie sonst unsere Antwort niemals erhalten werden.
