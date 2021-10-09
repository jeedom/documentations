# Jeelink Plugin 

Plugin zum Verknüpfen von 2 Jeedoms

# Funktionsprinzip 

Das Plugin *Jeedom Link* (auch Jeelink genannt) ermöglicht den Aufstieg einer oder mehrerer Geräte von einem Jeedom zum anderen.

![jeelink1](../images/jeelink1.png)

> **Wichtig**
>
> Das Plugin muss auf allen Jeedoms, Source und Target installiert sein.

> **Spitze**
>
> Für ein gutes Verständnis ist es wichtig, die folgenden Begriffe zu verstehen : **Jeedom Source** : Jeedom Server, auf dem die Ausrüstung wieder zusammengebaut werden soll **Jeedom Ziel** **Jeedom Ziel** : Jeedom-Server, der die von der) **Jeedom (s) Quelle (n))** Die **Jeedom Ziel** Zentralisieren Sie dieses Gerät und das von allen) **Jeedom (s) Quelle (n))** konfiguriert).**Zuordnung** : Konfiguration durchgeführt am **Jeedom Source** um die Ausrüstung einzuschließen, die auf dem wieder zusammengebaut wird **Jeedom Ziel**

> **Notiz**
>
> Zum besseren Lesen und Verstehen dieses Tutorials : Die Screenshots auf schwarzem Hintergrund entsprechen dem **Jeedom Ziel**.Die Screenshots auf weißem Hintergrund entsprechen **Jeedom Source**.\.

# Plugin Konfiguration 

Nach der Installation müssen Sie nur das Plugin aktivieren. Dies erfordert keine spezielle Konfiguration.

# Konfiguration der Ziel-Jeedome 

Von **Jeedom Source**, Sobald Sie auf der Plugin-Seite sind (über Plugins-Verwaltung → Kommunikation → Jeedom-Link), müssen Sie nur noch auf "Konfigurieren der Ziel-Jeedoms" klicken".

Ein Fenster wird angezeigt und von dort aus können Sie konfigurieren oder hinzufügen **Jeedom (s) Ziel (e))**.

Hinzufügen eines **Jeedom Ziel**, gib einfach :

-   Der Name von **Jeedom Ziel**.
-   Die IP-Adresse oder der DNS-Name des **Jeedom Ziel**.
-   Der API-Schlüssel von **Jeedom Ziel**.
-   Geben Sie an, ob die Kommunikation intern oder extern ist (wird für Feedback verwendet, von **Jeedom Source** in Richtung **Jeedom Ziel**). Und speichern Sie die Konfiguration.

![jeelink2](../images/jeelink2.png)

> **Wichtig**
>
> Du musst **ABSOLUT** dass die Netzwerkkonfigurationen aller Jeedoms (Quelle und Ziel) in Ordnung sind, sonst funktioniert das Plugin nicht.

# Ausrüstungszuordnung 

Nach der Konfiguration der **Jeedom Ziel** Auf deine **Jeedom Source**, Sie müssen zur Registerkarte gehen *Zuordnung* um die Ausrüstung anzugeben, an die übertragen werden soll **Jeedom Ziel**. Alle Gerätebestellungen werden automatisch auf dem erstellt und konfiguriert **Jeedom Ziel**.

In der Registerkarte *Zuordnung*, Fügen Sie die Ausrüstung hinzu, zu der Sie zurückkehren möchten **Jeedom Ziel**.

![jeelink3](../images/jeelink3.png)

Klicken Sie auf *Ausrüstung hinzufügen* Wählen Sie das Objekt und die Ausrüstung aus, die hinzugefügt werden sollen :

![jeelink5](../images/jeelink5.png)

> **Spitze**
>
> Achtung : Plugins mit einem bestimmten Widget haben es nicht auf dem **Jeedom Ziel** (Kamera, Netzwerk-Plugin…).

> **Wichtig**
>
> Das Löschen des Gerätes auf der Konfigurationsseite des **Ziel Jeedoms** löscht es nicht automatisch auf dem **Jeedom Source**, Dies ist freiwillig und kein Fehler (es ist eine Sicherheit).

# "Meine Jeelinks" Ausrüstung" 

Nach dem Aktualisieren der Seite *Meine Jeelinks* die **Jeedom Ziel**, Sie sollten die automatische Erstellung der Ausrüstung sehen :

![jeelink4](../images/jeelink4.png)

Wie bei allen Jeedom-Geräten können Sie das Gerät, seine Steuerelemente usw. aktivieren / deaktivieren und anzeigen oder nicht oder die Kategorie ändern. Aber auch

![jeelink6](../images/jeelink6.png)

In der Registerkarte *Befehle*, Sie greifen auf alle Parameter der Gerätesteuerung zu :

![jeelink7](../images/jeelink7.png)

# Ändern der Jeedom-Quelle eines JeeLink 

Mit den folgenden 3 Parametern können Sie die Jeedom-Quelle ändern, beispielsweise wenn Sie ein Jeedom ersetzen, ohne Daten zu verlieren (z. B. Verlauf)). Dazu müssen Sie nur die neue Adresse und den neuen API-Schlüssel der Jeedom-Quelle eingeben und die Kennungen der Geräte und Befehle ändern (Sie finden sie in der erweiterten Konfiguration dieser, indem Sie auf das Zahnrad klicken).

-   Jeedom Quelladresse;
-   Jeedom Source API-Schlüssel;
-   Quellausrüstung und Bestell-IDs.

# Migration im alten Slave-Modus

Ein Tutorial ist verfügbar, [hier](https://jeedom.github.io/documentation/howto/de_DE/jeelink.migration.html) Festlegen der Vorgehensweise zum Migrieren eines Jeedom Slave in den neuen Jeedom Link-Betriebsmodus.

# Faq 

>**Beim Löschen von Geräten auf dem Quell-Jeedom werden diese nicht aus dem Ziel-Jeedom gelöscht**
>
>Dies ist normalerweise die Quell- / Zielsynchronisation, die nur zum Erstellen und niemals zum Löschen führt
