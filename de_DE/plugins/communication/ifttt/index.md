# IFTTT Plugin

Dieses Plugin ermöglicht das Senden eines Ereignisses an IFTTT

# Plugin Konfiguration 

Nach dem Herunterladen des Plugins müssen Sie es aktivieren, es erfordert keine andere Konfiguration.

![ifttt7](./images/ifttt7.PNG)

# Gerätekonfiguration 

Auf die Konfiguration der IFTTT-Geräte kann über das Plugins-Menü zugegriffen werden :

![ifttt8](./images/ifttt8.PNG)

So sieht die IFTTT-Plugin-Seite aus (hier mit bereits 1 Gerät) :

![ifttt9](./images/ifttt9.PNG)

Sobald Sie auf eine davon klicken, erhalten Sie :

![ifttt10](./images/ifttt10.PNG)

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name der Ausrüstung** : Name Ihrer IFTTT-Ausrüstung
-   **Aktivieren** : macht Ihre Ausrüstung aktiv
-   **Sichtbar** : macht es auf dem Dashboard sichtbar
-   **Schlüssel** : IFTTT-Schlüssel, den Sie in der Konfiguration des Webhooks-Dienstes finden (der den Channel Maker ersetzt))

Nachfolgend finden Sie die Konfiguration der Befehle :

-   **Name** : Name der Bestellung
-   **Untertyp** : Gerätetyp
-   **Ereignis** : Ereignisname in IFTTT konfiguriert
-   **Wert** : Wert, der an IFTTT gesendet werden soll, 3 mögliche Unterscheidungen, abhängig vom Subtyp, den Sie für die Tags verwenden können : \.#color\.#, \.#slider\.#, \.#message\.# und \#title\.#
-   Erweiterte Konfiguration (kleine gekerbte Räder) : Dient zum Anzeigen der erweiterten Konfiguration des Befehls (Protokollierungsmethode, Widget usw.))
-   Test : Wird zum Testen des Befehls verwendet
-   Löschen (unterschreiben -) : ermöglicht das Löschen des Befehls

# Erstellung eines IFTTT-Kontos 

Erstellen Sie ein IFTTT-Konto, falls Sie dies noch nicht getan haben [IFTTT](:https://ifttt.com) :

![ifttt1](./images/ifttt1.png)

Geben Sie Ihre E-Mail-Adresse und dann Ihren Benutzernamen ein und lassen Sie ihn erstellen :

![ifttt2](./images/ifttt2.PNG)

Eine kleine Anleitung erklärt Ihnen die Möglichkeiten. Wenn Sie fertig sind, klicken Sie bei der Suche oben rechts auf :

![ifttt3](./images/ifttt3.PNG)

Geben Sie dann in der Suche Webhooks ein und klicken Sie auf Webhooks :

![ifttt4](./images/ifttt4.PNG)

Dann auf verbinden :

![ifttt5](./images/ifttt5.png)

Und dort müssen Sie Ihren Schlüssel abholen :

![ifttt6](./images/ifttt6.png)

Dieser Schlüssel muss im Feld "Schlüssel" Ihrer Ausrüstung unter Jeedom kopiert werden

![ifttt11](./images/ifttt11.PNG)

# Erstellung Ihres ersten "Applets"

Nichts könnte einfacher sein, klicken Sie in IFTTT auf "Meine Applets" und dann auf "Neues Applet""

![ifttt12](./images/ifttt12.png)

Klicken Sie dann auf "Neues Applet" :

![ifttt13](./images/ifttt13.PNG)

Klicken Sie auf "dies"" :

![ifttt14](./images/ifttt14.png)

Suchen Sie dann nach "Webhooks" und klicken Sie darauf :

![ifttt15](./images/ifttt15.png)

Klicken Sie auf "Webanforderung erhalten""

![ifttt16](./images/ifttt16.png)

Geben Sie Ihrem "Ereignis" einen Namen. Beachten Sie, dass es dem Namen des Ereignisses im Befehl "Jeedom" entsprechen muss. Es muss daher gespeichert und dann validiert werden :

![ifttt17](./images/ifttt17.png)

Dann klicken Sie darauf :

![ifttt18](./images/ifttt18.png)

Dann sehen Sie, für das Beispiel werde ich eine Benachrichtigung auf meinem Telefon senden (Sie müssen zuerst die IFTTT-Anwendung darauf installieren), also klicke ich auf Benachrichtigungen :

![ifttt19](./images/ifttt19.png)

Bestätigen Sie mit einem Klick auf "Benachrichtigung senden" (kann sich je nach Kanal ändern) :

![ifttt20](./images/ifttt20.png)

Dann müssen Sie die Nachricht der Benachrichtigung schreiben, hier sind Tags (Zutaten) möglich :

-   **{{EventName}}** : Name der Veranstaltung, hier Wetter
-   **{{Value1}}** : Der im Kanal gesendete Wert 1 wird über den Befehl in Jeedom konfiguriert
-   **{{Value2}}** : Der im Kanal gesendete Wert 2 wird über den Befehl in Jeedom konfiguriert
-   **{{Value3}}** : Der im Kanal gesendete Wert 3 wird über den Befehl in Jeedom konfiguriert
-   **{{OccurredAt}}** : Datum des Auftretens

Dies ist, was es hier gibt (ich möchte die Benachrichtigung über das Wetter in meinem Haus erhalten), validieren Sie, indem Sie auf "Aktion erstellen" klicken" :

![ifttt21](./images/ifttt21.PNG)

Geben Sie Ihrem Applet (Rezept) einen Namen und bestätigen Sie, indem Sie auf "Aktion erstellen" klicken" :

![ifttt22](./images/ifttt22.PNG)

Hier haben Sie Ihre "Applets" aufgelisteten IFTTT erstellt :

![ifttt23](./images/ifttt23.PNG)

Es bleibt mehr als die Bestellung auf der Jeedom-Seite zu erstellen, es ist ganz einfach :

![ifttt24](./images/ifttt24.PNG)

Hier gibt es nichts Besonderes. Sie müssen den Namen des Ereignisses IFTTT in Jeedom eingeben und dann die Werte an IFTTT übergeben, hier die Wetterbedingungen im Inhaltsstoffwert1

> **Spitze**
>
> Auf der Jeedom-Seite können Sie, wenn Sie beispielsweise einen Nachrichtensubtyp bestellen, das Tag \ einfügen#message\.# in einem oder mehreren "Wert" -Feldern". In Ihrem Szenario wird der Wert der Nachricht an IFTTT übergeben. Das gleiche ist mit \ möglich#title\.#, \.#color\.#, \.#slider\.#

# Senden von Informationen von IFTTT an Jeedom 

Es ist auch möglich, Informationen von IFTTT an Jeedom zu senden. So senden Sie beispielsweise Informationen, wenn das Telefon einen bestimmten Bereich betritt. Erstellen Sie als Erstes ein neues Applet :

![ifttt25](./images/ifttt25.png)

Klicken Sie dann auf "dies"" :

![ifttt26](./images/ifttt26.png)

Wählen Sie "Standort" :

![ifttt27](./images/ifttt27.png)

Wählen Sie Ihren Auslöser (hier nehme ich beim Betreten einer Zone) :

![ifttt28](./images/ifttt28.png)

Markieren Sie Ihren Bereich und führen Sie "Trigger erstellen" aus" :

![ifttt29](./images/ifttt29.png)

Klicken Sie auf "das" :

![ifttt30](./images/ifttt30.png)

Suchen Sie nach "Webhooks" und klicken Sie darauf :

![ifttt31](./images/ifttt31.png)

Klicken Sie auf "Webanforderung stellen"" :

![ifttt32](./images/ifttt32.png)

Jeedom-Seite erstellen Sie auf Ihrer IFTTT-Ausrüstung einen Befehl info / other type (oder binär, wenn Sie nur wissen möchten, ob Sie sich in der Nähe befinden) :

![ifttt33](./images/ifttt33.PNG)

Sehr wichtig hier : Holen Sie sich die Befehls-ID (hier 5369).

Wir kehren dann zu IFTTT zurück und geben ihm in unseren Webhooks die URL zum Aufrufen. Dies ist der komplizierteste Schritt. Finden Sie Ihre externe Zugriffs-URL :

-   Sie verwenden jeedom DNS, also ist dies : ``https://XXXXX.dns.jeedom.com/core/api/jeeApi.php?apikey=\.#APIKEY\.#&type=ifttt&id=\.#IDCMD\.#&value=\.#VALEUR\.#``. Achtung, wenn Sie eine Adresse in / jeedom haben, müssen Sie daran denken, diese vor dem / core hinzuzufügen
-   Sie haben Ihr eigenes DNS, dann hat die URL die Form ``http://\.#VOTRE\._DNS\.#/core/api/jeeApi.php?apikey=\.#APIKEY\.#&type=ifttt&id=\.#IDCMD\.#&value=\.#VALEUR\.#``. Achtung, wenn Sie eine Adresse in / jeedom haben, müssen Sie daran denken, diese vor dem / core hinzuzufügen

Denken Sie daran, zu ersetzen :

-   \.#APIKEY\.# : über Ihren JEEDOM-API-Schlüssel (diesen finden Sie unter Allgemein → Administration → Konfiguration)
-   \.#IDCMD\.# : anhand der ID Ihrer zuvor erstellten Bestellung
-   \.#VALEUR\.# : durch den Wert, den Sie Ihrer Bestellung geben möchten. Achtung hier müssen die Leerzeichen durch% 20 ersetzt werden (und es ist besser, Sonderzeichen zu vermeiden), z : Ohne% 20zone

Das gibt es :

![ifttt34](./images/ifttt34.png)

Denken Sie daran, die Methode auf Get zu setzen und dann auf "Aktion erstellen" zu klicken".

Geben Sie Ihren Applets einen Titel und klicken Sie auf "Aktion erstellen"". Und voila, sobald Sie den Jeedom-Bereich betreten, wird benachrichtigt.

> **Wichtig**
>
> Sie müssen auch ein Rezept erstellen, um das Gebiet zu verlassen, sonst tut Jeedom dies nicht
> wird nicht benachrichtigt, wenn Sie den Bereich verlassen

> **Notiz**
>
> Um die Webhook-URL auf ifttt zu erhalten, müssen Sie zu gehen [hier](https://ifttt.com/maker_webhooks) Klicken Sie dann auf Dokumentation
