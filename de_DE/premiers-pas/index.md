# Erster Schritt

Willkommen zu dieser Dokumentation der ersten Schritte, sie wird Ihnen helfen, Ihr Jeedom in Betrieb zu nehmen.

## Registrierung auf dem Markt

Das erste, was Sie tun müssen, ist, ein Konto auf dem Markt zu erstellen, um Ihr Jeedom darauf registrieren zu können. Klicken [hier](https://market.jeedom.com/).

Klicken Sie oben links auf die Schaltfläche „Registrieren“:

![S'enregistrer sur le Markt](images/FirstStep_market1.jpg)

Füllen Sie die verschiedenen Felder aus und bestätigen Sie. Sie sollten sich dann in Ihrem Market-Konto befinden:

![Markt](images/FirstStep_market2.jpg)


## Hinzufügen Ihres Service Pack-Codes

Wenn Sie eine Jeedom-Box gekauft haben, müssen Sie eine E-Mail mit einem Code für Ihr Service Pack erhalten haben.

> **Wichtig**
>
> Es ist wichtig, es auszufüllen, da Sie mit diesem Code kostenlos auf bestimmte Plugins sowie auf exklusive Dienste zugreifen können.

> **Wichtig**
>
> Wenn Sie ein Service Pack vom Jeedom Market kaufen, brauchen Sie nichts zu tun, es wird Ihnen automatisch zugewiesen.

Sobald der Code aus der E-Mail abgerufen wurde, müssen Sie nur noch auf die gehen [Jeedom auf dem Markt](https://market.jeedom.com/) und identifiziere dich.

Gehen Sie dann auf Ihre Profilseite:

![Profil Markt](images/FirstStep_market_sp1.jpg)

Klicken Sie dann auf die Registerkarte "Meine Dienste", geben Sie Ihre Service Pack-Nummer ein und bestätigen Sie.

> **Tipp**
>
> Wenn Sie eine offizielle Jeedom-Box gekauft haben, sollte Ihnen die Service Pack-Nummer per E-Mail zugesandt worden sein. Wenn Sie nichts erhalten haben, wenden Sie sich bitte an das Geschäft, in dem Sie Ihre Box gekauft haben.

## Finden Sie Ihr Jeedom im Netzwerk

Sobald Jeedom elektrisch angeschlossen und mit Ihrem lokalen Netzwerk verbunden ist, erfahren Sie hier, wie Sie eine Verbindung herstellen.

### Finden Sie Jedom

#### Durch den Markt

Die einfachste Lösung (funktioniert aber nicht in 100% der Fälle, abhängig von der Konfiguration Ihres Internetzugangs), Sie müssen die Box starten, etwa 10 Minuten warten (Vorsicht, wenn Sie ein Image vom Typ Netzinstallation verwenden, es wird eher so aussehen 30min) und los [hier](https://www.jeedom.com/market/index.php?v=d&p=find)

> **Tipp**
>
> Bitte beachten Sie, dass Sie sich im selben Netzwerk wie die Jeedom-Box befinden müssen, damit diese Methode funktioniert.

> **Wichtig**
>
> Abhängig von Ihrer ADSL-Box funktioniert diese Funktion möglicherweise nicht. Wenn ja, nichts Ernstes, müssen Sie sich nur mit Ihrer ADSL-Box verbinden und die Jeedom-IP darin finden. Dieser Schritt tut nichts anderes, als Ihnen die lokale IP Ihres Jeedom zu geben. Dies ist nicht der Fall, wenn Sie Ihr Jeedom zu Ihrem Market-Konto hinzufügen.

#### Durch Ihre Internetbox

-   Gehen Sie zur Administrationsoberfläche Ihrer Internetbox und suchen Sie in Ihren Netzwerkgeräten nach Jeedom.
-   Holen Sie sich seine IP.
-   Geben Sie diese IP in Ihren Internetbrowser ein. Sie sollten sich auf der Jeedom-Oberfläche befinden.

## Erste Verbindung

Unabhängig von der verwendeten Methode gelangen Sie dann auf die Anmeldeseite. Standardmäßig lauten Login und Passwort „admin".

![Connexion à votre Jeedom](images/FirstStep_box_connect.jpg)

## Verknüpfen Sie mein Jeedom mit meinem Market-Konto

Wir werden hier sehen, wie Sie Ihr Jeedom mit Ihrem Market-Konto verknüpfen.

-   Sobald Sie mit Ihrem Jeedom verbunden sind, müssen Sie zu gehen **Einstellungen → System → Konfiguration**
-   Klicken Sie auf die Registerkarte **Updates/Markt**
-   Klicken Sie unten auf die Registerkarte **Markt**
-   Aktivieren Sie das Kontrollkästchen **ermöglichen**
-   Remplissez l'adresse : `https://market.jeedom.com`
-   Füllen Sie auch die Felder aus **Nutzername** und **Passwort** gemäß Ihren Identifikatoren (Identifikatoren des Marktes und nicht von Jeedom)
-   Sie können testen, ob die Verbindung erfolgreich ist.
-   Speichern nicht vergessen !

Weitere Einzelheiten zur Konfigurationsseite finden Sie unter *Konfigurationshandbuch -> Verwaltung*.

## Holen Sie sich meine direkte Zugriffs-URL

Wenn Sie ein Service Pack haben, bietet Jeedom Ihnen eine direkte Zugriffs-URL auf Ihr Jeedom, ohne dass Sie die Ports auf Ihrer Box oder anderem öffnen müssen.

Um es zu konfigurieren, müssen Sie nur zu Einstellungen → System → Konfiguration gehen

Gehen Sie dann zum Abschnitt "Netzwerke""

![Réseaux](images/FirstStep_dns.jpg)

Sobald Sie hier sind, müssen Sie nur noch aktivieren **Verwenden Sie Jeedom-DNS** dann auf der Linie **Management** machen **Neustarten** und Ihre URL wird auf HTTP-Statusebene angezeigt, Sie können sie natürlich auf der Marktprofilseite anpassen

> **Wichtig**
>
> Wenn Sie Ihr Jeedom gerade mit Ihrem Market-Konto verknüpft haben, müssen Sie 24 bis 48 Stunden warten, bevor Sie den DNS-Dienst nutzen können

## Ändern Sie das Standardpasswort von Jeedom

Einer der wichtigsten Schritte besteht darin, das Standardkennwort Ihres Jeedom-Kontos zu ändern. Klicken Sie dazu auf Einstellungen → System → Benutzer:

Dort angekommen, müssen Sie nur noch die Leitung mit dem Benutzer wählen **Administrator** und klicken Sie auf **Passwort** :

![Passwort](images/FirstStep_boxPassword.jpg)

Ein Fenster fragt Sie nach dem Passwort. Denken Sie daran, sich daran zu erinnern, oder Sie können nicht mehr auf Ihr Jeedom zugreifen.

## Erstelle mein erstes Objekt

Sie werden Ihr erstes Objekt erstellen, aber zuerst müssen Sie wissen, was ein Objekt ist.

In Jeedom kann es alles sein, aber es wird empfohlen, es nach Ihren Münzen zu tun.

> **Tipp**
>
> Es ist möglich, Beziehungen zwischen Objekten zu definieren. Exemple : Das Wohnzimmer gehört zum Erdgeschossobjekt, das wiederum zum Hausobjekt gehört.

Nichts könnte einfacher sein, um ein Objekt zu erstellen :

-   Gehen Sie zu Extras → Objekte
-   Klicken Sie auf die Schaltfläche Hinzufügen
-   Jeedom wird Sie nach dem Namen fragen. Bestätigen. Dies ist Ihr erstes erstelltes Objekt :

![Objet](images/FirstStep_object.jpg)

Weitere Informationen zu diesem Teil finden Sie unter *Benutzerhandbuch -> Objekt*.

## Installiere mein erstes Plugin

Ein Plugin ermöglicht es Ihnen, Funktionalität zu Jeedom hinzuzufügen. Es gibt Hunderte von ihnen. Viele sind kostenlos, andere können bezahlt werden. Um auf die Plugin-Seite zuzugreifen, gehen Sie zu Plugins → Plugin-Verwaltung.

Dann klicken Sie einfach auf Markt:

Sie erhalten dann eine Liste aller Plugins, die installiert werden können.

> **Wichtig**
>
> Seien Sie vorsichtig, einige sind offiziell und andere nicht. Im Falle eines Problems mit einem inoffiziellen Plugin kann das Jeedom-Team nicht haftbar gemacht werden.

![Liste des Plugins](images/FirstStep_plugin1.jpg)

Wenn Sie auf ein Plugin klicken, erhalten Sie seine Datei:

![Fiche Plugins](images/FirstStep_plugin2.jpg)

Sie finden dann :

- Schaltflächen zum Installieren des Plugins : Die stabile Version wird dringend empfohlen,
- Eine Schaltfläche zum Löschen des Plugins,
- Eine kurze Beschreibung,
- Ein Link zur Plugin-Dokumentation,
- Ein Link zum Änderungsprotokoll (die letzten vorgenommenen Änderungen),
- Kompatibilität mit verschiedenen Plattformen,
- Benutzerbewertungen,
- Die Art und Weise, das Plugin zu verwenden,
- Zusätzliche Informationen wie Autor, Link zur Forumsdiskussion über dieses Plugin, Datum der letzten Aktualisierung usw.

Weitere Informationen zu Plugins, *Benutzerhandbuch -> Plugin*.

# Support

Jeedom befasst sich Tag für Tag mit sehr großen und sich entwickelnden Feldern.
Es gibt jedoch viele Möglichkeiten für Sie, Hilfe zu finden und Ihre Fragen zu stellen.

## Das Forum

Du wirst es finden [hier](https://community.jeedom.com/).

Das Forum ist sehr aktiv und enthält viele Informationen. Wenn Sie eine Frage haben, zögern Sie nicht, sie zu stellen. Sie erhalten eine Antwort in weniger als einer Stunde (im Durchschnitt). Seien Sie jedoch vorsichtig, das Forum wird von der Jeedom-Community unterhalten, die sich aus Freiwilligen zusammensetzt, und nicht von der Firma Jeedom.

## Supportanfragen (oder Tickets)

> **Wichtig**
>
> Bitte beachten Sie, dass Sie für jede Support-Anfrage ein Konto auf dem Market haben müssen.

Wenn Sie keine Lösung für Ihr Problem gefunden haben, können Sie als letzten Ausweg Unterstützung vom Jeedom-Team anfordern. Diese Anfrage läuft über ein Ticket. Es ist möglich, eine auf mehrere Arten zu öffnen:

-   Direkt von Jeedom (empfohlene Methode): Einstellungsmenü → Supportanfrage.
-   Wenn Sie aus irgendeinem Grund keinen Zugriff auf Ihr Jeedom haben, können Sie jederzeit ein Ticket auf dem Markt eröffnen :
    -   Entweder indem Sie auf Ihren Namen und dann auf klicken *Unterstützungsanfrage*,
    -   entweder indem du auf dein Profil gehst, dann im Teil **Eintrittskarten**, Verwenden Sie die Schaltfläche "Support-Anfrage öffnen"".

![Unterstützungsanfrage](images/FirstStep_support.jpg)

Der restliche Austausch erfolgt per E-Mail.

> **Tipp**
>
> Wenn Sie beim Öffnen eines Tickets eine Fehlermeldung erhalten, dass Sie Ihr Kontingent erreicht haben, sind Sie abhängig von Ihrem Service Pack auf eine bestimmte Anzahl von Supportanfragen pro Monat beschränkt.

Die verschiedenen Service Packs sind :
- Gemeinschaft (kostenlos): 2 Tickets/Monat (nur bei kostenpflichtigen Plugins))
- Power : 10 Karten/Monat
- Pro : 100 Karten/Monat

Die Details der Service Packs finden Sie hier [hier](https://www.jeedom.com/site/fr/soft.html#obtenir)

>**WICHTIG**
>
>Seien Sie vorsichtig, wir sehen viele Benutzer mit "mailinblack"-Postfächern, die während des ersten Austauschs den Absender bitten, einen Link zu validieren, um zu beweisen, dass es sich tatsächlich um einen Menschen handelt. Dieses System ist nicht mit unserem Ticketing-System kompatibel. Selbst wenn wir Ihnen antworten, erhalten Sie die Antwort nie in Ihrer Mailbox, da sie uns blockiert. Vielen Dank, dass Sie auf Ihrer Marktprofilseite eine E-Mail-Adresse angeben, die dieses System nicht verwendet, da Sie sonst nie unsere Antwort erhalten.
