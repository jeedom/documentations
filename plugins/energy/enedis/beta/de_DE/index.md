# Enedis Plugin

Plugin zum Abrufen der Stromverbrauchsdaten von intelligenten Stromzählern *(z. B. Linky)* durch Abfrage des [Kundenkonto **Enedis**](https://mon-compte.enedis.fr/auth/XUI/#login/&realm=/enedis&forward=true){:target="\_blank"}.

Es ist möglich, direkt in einem Gerät auf die Daten zum **Verbrauch**, zur **Erzeugung** oder zu beiden Messarten zuzugreifen.

Es werden 5 Verbrauchswerte angezeigt, sowie dieselben 4 Werte ohne die maximale Leistung bei der Erzeugung:
- der **stündliche Verbrauch** pro halbe Stunde *(in kW)*.
- der **tägliche Verbrauch** *(in kWh)*.
- der **monatliche Verbrauch** *(in kWh)*.
- der **Jahresverbrauch** *(in kWh)*.
- die **maximale Leistung** *(in kVA)*.

Da Enedis die Daten nicht in Echtzeit zur Verfügung stellt, ruft das Plugin täglich die Daten des Vortags ab. Solange noch nicht alle Daten abgerufen wurden, fragt es die Enedis-Server bis 19 Uhr alle 30 Minuten erneut ab und setzt den Vorgang am nächsten Morgen fort.

Bei jedem Abruf werden die Daten zu Tag, Monat, Jahr und maximaler Leistung seit dem 1. Januar des laufenden Jahres sowie die stündlichen Daten der letzten 7 Tage abgefragt. Die bereits gespeicherten historischen Daten werden an die Daten von Enedis angepasst: Eine verspätet übermittelte oder von Enedis korrigierte Angabe aktualisiert die entsprechenden Werte.

# Konfiguration

Wie jedes Jeedom-Plugin muss auch das **Enedis**-Plugin nach der Installation aktiviert werden.

## Plugin Konfiguration

Falls noch nicht geschehen, erlauben Sie zunächst die Weitergabe von Enedis-Daten an Jeedom, indem Sie auf der Konfigurationsseite des Plugins auf die Schaltfläche **Zugriff auf die Enedis-Server erlauben: Ich gehe zu meinem Enedis-Kundenbereich** klicken:

![Link zum Enedis-Kundenbereich](../images/link_enedis.png)

Sie werden dann auf diese Seite weitergeleitet, auf der Sie **Ihre Anmeldedaten für den Jeedom-Market** eingeben und anschließend auf die Schaltfläche **Bestätigen** klicken müssen:

![Authentifizierung des Jeedom-Market-Kontos](../images/Auth_Jeedom.png)

Weiterleitung zur Einwilligungsseite von Enedis, auf der Sie **das Kästchen ankreuzen** und auf **Bestätigen** klicken müssen:

![Genehmigung durch Enedis](../images/Auth_Enedis.png)

Sobald die Datenfreigabe bestätigt wurde, wird folgende Seite angezeigt:

![Erfolg](../images/Auth_Enedis_success.png)

>**WICHTIG**
>
>Wenn Sie eine dieser Seiten nicht aufrufen können, deaktivieren Sie bitte den Werbeblocker Ihres Browsers.

## Gerätekonfiguration

Um auf die verschiedenen **Enedis**-Geräte zuzugreifen, gehen Sie zum Menü **Plugins → Energie → Enedis**. Über die Schaltfläche **+ Hinzufügen** können Sie einen neuen Zähler/PDL hinzufügen.

Sobald die Datenfreigabe auf der Konfigurationsseite des Plugins autorisiert wurde, müssen nur noch **die Identifikationsnummer der betreffenden Lieferstelle** *(PDL)* und die **Art der Messung**, die abgerufen werden soll, eingegeben werden.

Bei der ersten Datensicherung eines aktiven und konfigurierten Geräts erstellt das Plugin automatisch die erforderlichen Befehle und integriert die auf der Enedis-Website verfügbaren Verlaufsdaten ab dem 1. Januar des laufenden Jahres. Dieser Vorgang kann mehrere Minuten dauern; Sie können den Fortschritt im Menü **Analyse → Protokolle** verfolgen *(Protokolle in ``debug``)*.

Wenn Sie **die Erfassung und Speicherung des stündlichen Verbrauchs** in Ihrem Enedis-Konto nicht aktiviert haben, müssen Sie das Kontrollkästchen **Stündliche Daten: Deaktivieren** anklicken, damit die entsprechenden Befehle nicht erstellt werden.

# Daten hinzufügen

Auf Wunsch können die Verbrauchsdaten der vergangenen Jahre von den Enedis-Servern integriert werden. Klicken Sie dazu einfach auf die blaue Schaltfläche **Verbrauchsdaten hinzufügen** auf der Registerkarte **Befehle** eines Geräts in der Spalte **Aktion** des betreffenden Befehls:

![Verlaufsdaten hinzufügen](../images/enedis_addHistory.png)

Für die Steuerungen „Tag“ und „Maximalleistung“ wählen Sie das Startjahr aus den beiden vorangegangenen Jahren aus: Die Daten für Tag, Monat, Jahr und Maximalleistung werden vom 1. Januar dieses Jahres bis zum 1. Januar des laufenden Jahres berücksichtigt.

Für zeitgesteuerte Bestellungen wählen Sie bitte das Startdatum aus, wobei der Zeitraum auf die letzten drei Jahre beschränkt ist: Die Daten werden in den folgenden sieben Tagen integriert, was der von Enedis festgelegten maximalen Dauer entspricht.

Klicken Sie anschließend auf **OK**, um die Integration zu starten.

# Widget-Vorlage

Das Plugin bietet die Möglichkeit, Verbrauchs- und/oder Erzeugungsdaten in einer Widget-Vorlage anzuzeigen, die das Aussehen eines *Linky*-Zählers nachahmt, und zwar sowohl in der Desktop- als auch in der mobilen Version. Durch Klicken auf die Schaltfläche „**- \| +**“ kann zwischen Verbrauch und Erzeugung umgeschaltet werden, sofern beide Messarten verfügbar sind. Eine Kontrollleuchte zeigt zudem an, ob die Daten aktuell sind oder nicht *(grün = alle Daten sind aktuell, orange = einige Daten sind nicht aktuell, rot = keine Daten sind aktuell)*.

![Widget-Vorlage](../images/enedis_screenshot1.png)

Die Widget-Vorlage ist standardmäßig aktiviert. Um zum Standard-Widget von Jeedom zurückzukehren, deaktivieren Sie einfach das Kontrollkästchen **Widget-Vorlage** auf der Registerkarte **Informationen** in den erweiterten Einstellungen des Geräts.

Die Farben der Vorlage lassen sich auf der Registerkarte **Anzeige** in den erweiterten Einstellungen des Geräts separat für die Desktop- und die mobile Version anpassen:
- Hintergrundfarbe *(`Template : background-color`)*, grün am Zähler *(163, 204, 40)*, wenn das Kontrollkästchen **Standard** aktiviert ist.
- die Farbe der Titelleiste *(`Template : titlebar-color`)*, transparent bei der Erstellung des Geräts.

![Das Widget anpassen](../images/enedis_customizeWidget.png)

# Häufig gestellte Fragen

>**In den Protokollen werden Fehler beim Abrufen der Daten angezeigt, obwohl diese auf der Enedis-Website sichtbar sind**
>
>Manchmal muss man direkt auf die Enedis-Website gehen, um die aktuellsten Nutzungsbedingungen zu akzeptieren und wieder Zugriff auf die Daten zu erhalten. Manchmal ist es auch erforderlich, die Verbindung zwischen Jeedom und Enedis über die Konfigurationsseite des Plugins neu herzustellen.
