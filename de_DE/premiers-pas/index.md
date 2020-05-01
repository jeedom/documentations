# Erster Schritt

Willkommen zu dieser Dokumentation des ersten Schritts, die Ihnen hilft, Ihr Jeedom in Betrieb zu nehmen.


## Registrierung am Markt

Das erste, was Sie tun müssen, ist, ein Konto auf dem Markt zu erstellen, um Ihr Jeedom darauf registrieren zu können. Klicken Sie auf [hier](https://market.jeedom.com/) um zu beginnen.

![premier market](images/premier-market.png)

Klicken Sie oben rechts auf die Schaltfläche "Registrieren":

![premier market2](images/premier-market2.png)

Füllen Sie die verschiedenen Felder aus und validieren Sie. Sie werden dann auf diese Seite stoßen:

![premier market3](images/premier-market3.png)

Hier wird Ihr Marktkonto erstellt.

## Hinzufügen Ihres Service Pack-Codes

Wenn Sie eine Jeedom-Box gekauft haben, sollten Sie eine E-Mail mit einem Code für Ihr Service Pack erhalten haben.

> **Important**
>
> Es ist wichtig, es auszufüllen, da Sie mit diesem Code kostenlos auf bestimmte Plugins sowie auf exklusive Dienste zugreifen können.

> **Important**
>
> Wenn Sie ein Service Pack auf dem Jeedom Markt kaufen, haben Sie nichts zu tun, es wird Ihnen automatisch zugewiesen.

Sobald der Code in der Mail abgerufen wurde, müssen Sie nur noch zu gehen [Jeedom Markt](https://market.jeedom.com/) und identifiziere dich.

Dann gehen Sie zu Ihrer Profilseite:

![premier servicepack](images/premier-servicepack.png)

Klicken Sie dann auf die Registerkarte "Meine Jeedoms""

![premier servicepack2](images/premier-servicepack2.png)

Geben Sie Ihre Service Pack-Nummer ein und bestätigen Sie:

![premier servicepack3](images/premier-servicepack3.png)

Hier ist Ihr Service Pack registriert.

> **Tip**
>
> Wenn Sie eine offizielle Jeedom-Box gekauft haben, sollte die Service Pack-Nummer per E-Mail an Sie gesendet worden sein. Wenn Sie nichts erhalten haben, wenden Sie sich bitte an das Geschäft, in dem Sie Ihre Box gekauft haben.

## Finden Sie Ihr Jeedom im Netzwerk

Sobald Jeedom elektrisch verbunden und mit Ihrem lokalen Netzwerk verbunden ist, erfahren Sie hier, wie Sie eine Verbindung herstellen.

### Finde Jeedom

#### Durch den Markt

Die einfachste Lösung (funktioniert jedoch in 100% der Fälle nicht, abhängig von der Konfiguration Ihres Internetzugangs). Sie müssen die Box starten und etwa 10 Minuten warten (seien Sie vorsichtig, wenn Sie ein Image vom Typ Netzinstallation verwenden, es dauert eher 30 Minuten). und geh [hier](https://www.jeedom.com/market/index.php?v=d&p=find)

> **Tip**
>
> Bitte beachten Sie, dass Sie sich im selben Netzwerk wie die Jeedom-Box befinden müssen, damit diese Methode funktioniert..

> **Important**
>
> Abhängig von Ihrer ADSL-Box funktioniert diese Funktionalität möglicherweise nicht. Wenn ja, nichts Ernstes, müssen Sie nur eine Verbindung zu Ihrer ADSL-Box herstellen und die Jeedom-IP darin finden. Dieser Schritt gibt Ihnen nur die lokale IP Ihres Jeedom. Dies ist nicht der Fall, wenn das Hinzufügen Ihres Jeedom zu Ihrem Marktkonto abgeschlossen ist.

#### Durch Ihre Internetbox

-   Gehen Sie zur Administrationsoberfläche Ihrer Internetbox und suchen Sie in Ihren Netzwerkgeräten nach Jeedom.

-   Holen Sie sich seine IP.

-   Geben Sie diese IP in Ihren Internetbrowser ein. Sie sollten sich auf der Jeedom-Oberfläche befinden.

## Erste Verbindung

Unabhängig davon, welche Methode verwendet wird, gelangen Sie auf die Anmeldeseite. Standardmäßig lauten Login und Passwort "admin"".

![premier jeedomfinder6](images/premier-jeedomfinder6.png)

## Verknüpfe mein Jeedom mit meinem Marktkonto

Wir werden hier sehen, wie Sie Ihr Jeedom mit Ihrem Marktkonto verknüpfen können.

-   Sobald Sie mit Ihrem Jeedom verbunden sind, müssen Sie zu Administration → Konfiguration gehen

-   Klicken Sie auf die Registerkarte **Updates**

-   Klicken Sie unten auf die Registerkarte **Market**

-   Aktivieren Sie das Kontrollkästchen **activer**

-   Remplissez l'adresse : `https://www.jeedom.com/market`

-   Füllen Sie auch die Felder "Benutzername" und "Passwort" entsprechend Ihren Kennungen aus (Marktkennungen und nicht Jeedom).

-   Sie können testen, ob die Verbindung korrekt hergestellt wurde.

-   Vergiss nicht zu sparen !

Weitere Informationen auf der Konfigurationsseite finden Sie unter * Konfigurationshandbuch -> Administration*.
.

## Holen Sie sich meine direkte Zugriffs-URL

Wenn Sie ein Service Pack haben, bietet Jeedom Ihnen eine direkte Zugriffs-URL zu Ihrem Jeedom, ohne die Ports an Ihrer Box oder einer anderen öffnen zu müssen.

Um es zu konfigurieren, gehen Sie einfach zu Allgemein → Administration → Konfiguration

Gehen Sie dann zum Abschnitt "Netzwerkkonfiguration""

![premier dns2](images/premier-dns2.png)

Sobald Sie hier sind, müssen Sie nur "Jeedom DNS verwenden" aktivieren und dann in der Zeile "Verwaltung" "Neustart" ausführen. Ihre URL wird auf HTTP-Statusebene angezeigt. Sie können sie natürlich auf der Profilseite anpassen vom Markt

> **Important**
>
> Wenn Sie gerade Ihr Jeedom mit Ihrem Markt-Konto verknüpft haben, müssen Sie 24 bis 48 Stunden warten, bevor Sie den DNS-Dienst nutzen können.

## Ändern Sie das Standardkennwort von Jeedom

Einer der wichtigen Schritte besteht darin, das Standardkennwort Ihres Jeedom-Kontos zu ändern. Klicken Sie dazu auf Administration → Benutzer (oben rechts).:

Sobald Sie darauf sind, müssen Sie nur noch die Leitung mit dem Benutzer auswählen **admin** und klicken Sie auf **Passwort ändern** :

![premier changeuser2](images/premier-changeuser2.png)

In einem Fenster werden Sie nach dem Passwort gefragt. Denken Sie daran, sonst können Sie nicht mehr auf Ihr Jeedom zugreifen :

![premier changeuser3](images/premier-changeuser3.png)

Hier haben Sie das Passwort des Administratorkontos geändert.

## Erstelle mein erstes Objekt

Sie werden Ihr erstes Objekt erstellen, aber zuerst müssen Sie wissen, was ein Objekt ist.

In Jeedom kann es alles und jedes sein, aber es wird empfohlen, es entsprechend Ihren Räumen zu tun.

> **Tip**
>
> Es ist beispielsweise möglich, Beziehungen zwischen Objekten zu definieren: Das Wohnzimmer gehört zum Objekt im Erdgeschoss, das selbst zum Hausobjekt gehört.

Nichts könnte einfacher sein, ein Objekt zu erstellen :

-   Gehen Sie zu Extras → Objekte

-   Klicken Sie auf die Schaltfläche Hinzufügen:

![premier objet2](images/premier-objet2.png)

-   Jeedom wird dich nach dem Namen fragen:

![premier objet3](images/premier-objet3.png)

-   Validieren. Dies ist Ihr erstes erstelltes Objekt :

![premier objet4](images/premier-objet4.png)

Weitere Informationen zu diesem Teil finden Sie unter * Benutzerhandbuch -> Objekt*.

## Installiere mein erstes Plugin

Ein Plugin ermöglicht das Hinzufügen von Funktionen zu Jeedom. Es gibt Hunderte. Viele sind kostenlos, andere können kostenpflichtig sein. Um auf die Plugins-Seite zuzugreifen, gehen Sie zu Plugins → Plugins-Verwaltung.

Dann klicken Sie einfach auf Markt:

![premier plugin2](images/premier-plugin2.png)

Sie haben dann die Liste aller Plugins, die installiert werden können.

> **Important**
>
> Bitte beachten Sie, dass einige offiziell sind und andere nicht. Im Falle eines Problems mit einem inoffiziellen Plugin kann das Jeedom-Team nicht verantwortlich gemacht werden.

![premier plugin3](images/premier-plugin3.png)

Durch Klicken auf ein Plugin erhalten Sie dessen Datei:

![premier plugin4](images/premier-plugin4.png)

Sie finden dann :

- Schaltflächen zum Installieren des Plugins : Die stabile Version wird dringend empfohlen,
- Eine Schaltfläche zum Entfernen des Plugins,
- Eine kurze Beschreibung,
- Ein Link zur Plugin-Dokumentation,
- Ein Link zum Changelog (die letzten vorgenommenen Änderungen),
- Kompatibilität mit verschiedenen Plattformen,
- Nutzerbewertungen,
- Wie man das Plugin benutzt,
- Zusätzliche Informationen wie der Autor, der Link zur Forumsdiskussion zu diesem Plugin, das Datum des letzten Updates usw..

Für weitere Informationen zu Plugins klicken Sie auf [hier](https://jeedom.github.io/core/de_DE/plugin).

# Unterstützung


Jeedom befasst sich mit sehr weiten Feldern und entwickelt sich von Tag zu Tag weiter.
Es gibt jedoch viele Möglichkeiten, Hilfe zu finden und Ihre Fragen zu stellen..

## Das Forum

Sie werden es finden [hier](https://community.jeedom.com/).

Das Forum ist sehr aktiv und enthält viele Informationen. Wenn Sie eine Frage haben, zögern Sie nicht, sie zu stellen. Sie haben eine Antwort in weniger als einer Stunde (im Durchschnitt). Bitte beachten Sie, dass das Forum von der Jeedom-Community, die sich aus Freiwilligen zusammensetzt, und nicht von der Jeedom-Firma unterhalten wird..

![premier support3](images/premier-support3.png)

## Unterstützunganfragen (oder Tickets)

> **Important**
>
> Bitte beachten Sie, dass alle Unterstützunganfragen ein Konto auf dem Markt haben müssen.

Wenn Sie als letztes Mittel keine Lösung für Ihr Problem gefunden haben, können Sie das Jeedom-Team um Unterstützung bitten.. Diese Anfrage geht durch ein Ticket. Es gibt verschiedene Möglichkeiten, eine zu öffnen.:

-   Direkt von Jeedom (empfohlene Methode): Wo immer Sie sich in Jeedom befinden, befindet sich oben rechts ein Ausrufezeichen, mit dem Sie Unterstützung anfordern können :

![premier support4](images/premier-support4.png)

-   Wenn Sie aus irgendeinem Grund keinen Zugang zu Ihrem Jeedom haben, können Sie jederzeit ein Ticket vom Markt öffnen :

    -   entweder mit dem Ausrufezeichen oben rechts,

    -   entweder indem Sie zu Ihrem Profil gehen (dann auf die Schaltfläche "Supportanfrage öffnen" klicken).

![premier support5](images/premier-support5.png)

Alle weiteren Austausche erfolgen per E-Mail.

> **Tip**
>
> Wenn beim Öffnen eines Tickets eine Fehlermeldung angezeigt wird, dass Sie Ihr Kontingent erreicht haben, bedeutet dies, dass Sie abhängig von Ihrem Service Pack auf eine bestimmte Anzahl von Unterstützunganfragen pro Monat beschränkt sind.

Die verschiedenen Service Packs sind :
- Community (kostenlos): 2 Tickets / Monat (nur für kostenpflichtige Plugins)
- Macht: 10 Tickets / Monat
- Pro: 100 Tickets / Monat

Sie finden die Details der Service Packs [hier](https://www.jeedom.com/site/fr/soft.html#obtenir)
