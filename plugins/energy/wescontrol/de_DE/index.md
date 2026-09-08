# WES Control Plugin

Mit diesem Plugin können Sie die Kontrolle über Ihr [**WES-Energieserver von CartElectronic**](https://www.cartelectronic.fr/content/8-serveur-wes){:target="\_blank"} und alle Daten sofort in Jeedom abzurufen.

![Bild: Wes](../images/wes.png)

>**WICHTIG**
>
>Das Plugin ist mit Wes-Servern mit Firmware kompatibel `V0.84A10` Minimum. Für ältere Versionen gibt es [der Zweig „less-than-V0.84A10“](https://github.com/jeedom/plugin-wescontrol/tree/less-than-V0.84A10) kann über GitHub installiert werden.

>
>Das Team arbeitet bereits an der Integration der derzeit noch nicht unterstützten Wes-Erweiterungen wie beispielsweise der 8-Relais-Erweiterung oder Modbus und wird sein Bestes tun, um das Plugin so schnell wie möglich in diese Richtung weiterzuentwickeln.

# Allgemeine Konfiguration

## Plugin Konfiguration

Wie jedes Jeedom-Plugin muss auch das Plugin **Wes Control** nach der Installation aktiviert werden.

Das Plugin **Wes Control** nutzt einen eigenen Daemon, um ständig mit dem Wes-Server in Verbindung zu bleiben. Den Status können Sie auf der Konfigurationsseite des Plugins überprüfen.

>**INFORMATION**
>
>Sie müssen sich nach der Aktivierung des Plugins keine Gedanken über den Status des Daemons machen, da bei der Erstellung des ersten Wes-Servergeräts der Daemon automatisch konfiguriert und gestartet wird.

Das Plugin erfordert keine besondere Konfiguration, bietet jedoch ein Feld, in dem die Zeitspanne in Sekunden zwischen zwei Abfragen des Wes-Servers ausgewählt werden kann. *(Standardmäßig 30 Sekunden)*

>**WICHTIG**
>
>Wenn Sie diesen Wert verringern und dabei Verzögerungen oder Instabilität des Systems feststellen, stellen Sie den Standardwert *(30)* wieder ein.

## Konfiguration der Wes-Serverausrüstung

Um auf die verschiedenen **Wes Control**-Geräte zuzugreifen, gehen Sie zum Menü **Plugins → Energie → Wes Control**.

![Startseite des Plugins](../images/wescontrol_navigate.png)

>**INFORMATION**
>
>Mit der Schaltfläche **+ Hinzufügen** können Sie einen neuen Wes-Server hinzufügen.

Nachdem Sie Ihre Wes-Serverausrüstung erstellt haben, klicken Sie darauf, um auf die Zugriffskonfiguration sowie die Verwaltung der Geräte und Funktionen zuzugreifen.

Geben Sie die allgemeinen Informationen zum Gerät ein und geben Sie anschließend an, ob Sie optionale Geräte an das Wes angeschlossen haben, wie beispielsweise einen Bildschirm oder ein 9-Volt-Netzteil zur Messung der Netzspannung, indem Sie die entsprechenden Kästchen ankreuzen.

Geben Sie anschließend die Zugangsdaten für den Wes-Server über HTTP ein, um mit ihm kommunizieren zu können:
- **IP des WES**: IP-Adresse, unter der der WES-Server erreichbar ist.
- **WES-Port** *(optional)*: Port, über den der WES-Server erreichbar ist *(standardmäßig 80)*.
- **HTTP-ID**: Eine Kennung, die die Kommunikation mit dem Wes-Server über HTTP ermöglicht.
- **HTTP-Passwort**: Passwort für die HTTP-Kommunikation mit dem Wes-Server.

Das Plugin **Wes Control** enthält eine speziell für Jeedom entwickelte Datei, die den Zugriff auf mehr Daten ermöglicht, als standardmäßig verfügbar sind. Es ist erforderlich, eine FTP-Verbindung zum Wes-Server herzustellen, um diese Datei zu übertragen. Daher müssen auch die folgenden Felder ausgefüllt werden:
- **FTP-Benutzername**: Benutzername für die FTP-Verbindung mit dem Wes-Server.
- **FTP-Passwort**: Passwort für die FTP-Verbindung mit dem Wes-Server.
- **Jeedom-CGX-Datei**: Aktivieren Sie das Kontrollkästchen, um die Jeedom-CGX-Datei zu verwenden.
- **CGX-Datei senden**: Nachdem Sie die FTP-Anmeldedaten eingegeben haben, klicken Sie auf diese Schaltfläche, um die Datei sofort auf den Webserver zu übertragen.

>**INFORMATION**
>
>Die Anmeldedaten für den Wes-Server können über die Weboberfläche von Wes im Menü **Konfiguration → Sicherer Zugriff** abgerufen werden.

## Geräte- / Funktionsmanagement

Im Bereich **Geräteverwaltung** können Sie auswählen, welche Funktionen des Wes aktiviert bzw. deaktiviert werden sollen.

Jedes **angekreuzte Kästchen** führt zur **automatischen Erstellung des entsprechenden Geräts**, und umgekehrt führt **jedes nicht angekreuzte Kästchen** zur **automatischen Löschung des entsprechenden Geräts**:

![Gerätemanagement](../images/wescontrol_generalManage.png)

# Ausstattung / Funktionskonfiguration

Zurück auf der Übersichtsseite des Plugins **Wes Control** werden die zuvor aktivierten Geräte nach Server gruppiert und in Akkordeon-Menüs sortiert, die nach Funktionsart geordnet sind.

Über das Suchfeld wird das gesuchte Gerät sofort angezeigt. Rechts bricht das Kreuzsymbol die Suche ab, der geöffnete Ordner klappt alle Menüs auf und der geschlossene Ordner klappt alles wieder ein.

![Navigation durch die Geräte](../images/wescontrol_screenshot1.png)

>**TIPP**
>
>Jedes Menü in der Liste lässt sich neu anordnen, indem man die Maustaste gedrückt hält und es an die gewünschte Stelle zieht.

Wie üblich gelangen Sie durch einen Klick auf ein Gerät zu dessen Konfigurationsseite, auf der Sie allgemeine Informationen eingeben und die Liste der Befehle einsehen können.

## Optionale Ausstattungsparameter

Bestimmte Geräte verfügen über zusätzliche Konfigurationseinstellungen, die bei der Aktivierung eingegeben werden müssen.

Diese Parameter können beispielsweise die Art der zu erfassenden Messwerte für Stromzangen *(Verbrauch oder Erzeugung)* oder die Formel für den Stromtarif im Zusammenhang mit der Fernabfrage sein.

Andere können die Auswahl eines bestimmten Gerätetyps betreffen, um die Abbildungen der Geräte individuell anzupassen, wie beispielsweise den Typ des Impulszählers *(Wasser, Gas, Gaspar)* oder den Typ der verwendeten Stromzange *(20 Ampere oder 100 Ampere)* unter anderem.

## WES-Schnittstelle

Auf jeder Geräteseite (einschließlich des Wes-Servers) befindet sich oben rechts eine blaue Schaltfläche mit der Bezeichnung **Wes-Oberfläche**, über die Sie die Weboberfläche des Wes-Servers in einem neuen Tab Ihres Browsers öffnen können.

Je nach Art des Geräts, auf dem Sie sich befinden, werden Sie automatisch auf die für diese Funktion zuständige Benutzeroberfläche weitergeleitet.

# Kommende Entwicklungen

Das Team arbeitet bereits an der Integration der derzeit noch nicht unterstützten Wes-Erweiterungen wie beispielsweise der 8-Relais-Erweiterung oder der Modbus-Erweiterung und wird sein Bestes tun, um das Plugin in dieser Hinsicht so schnell wie möglich weiterzuentwickeln.
