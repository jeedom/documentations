# Jeedom Link-Plugin

Das Plugin **Jeedom Link** *(auch Jeelink genannt)* ermöglicht das Hochladen von Geräten von einer oder mehreren „Quell“-Jeedom-Installationen zu einem (oder mehreren) „Ziel“-Jeedom".

![jeelink1](../images/jeelink1.png)

Das Plugin muss auf jedem Jeedom installiert werden, egal ob Quelle oder Ziel.

Bevor wir beginnen, stellen wir sicher, dass wir die gleichen Begriffe verwenden :
- **Jeedom Source** : Jeedom Server, auf dem die Ausrüstung wieder zusammengebaut werden soll **Jeedom Ziel**.
- **Jeedom Ziel** : Jeedom-Server, der die von einem oder mehreren bereitgestellten Geräte empfängt und zentralisiert **Jeedoms-Quellen**.
- **Zuordnung** : Konfiguration auf der Ebene der vorgenommen **Jeedom Source** um die Ausrüstung auszuwählen, die in die hochgeladen werden soll **Jeedom Ziel**.

>**INFORMATION**
>
>Zum besseren Lesen und Verständnis dieser Dokumentation entsprechen die Screenshots auf weißem Hintergrund der **Jeedom Source** und solche mit schwarzem Hintergrund **Jeedom Ziel**.

# Configuration

## Plugin Konfiguration

Dieses Plugin erfordert keine spezielle Konfiguration und muss nach der Installation einfach aktiviert werden.

>**Wichtig**
>
>Bitte beachten Sie, dass die Deaktivierung des Plugins dazu führt, dass die Zieldateien des Plugins gelöscht werden, ohne dass sie wiederhergestellt werden können (außer dem Wiederherstellen eines Backups)

>**Wichtig**
>
>Die Netzwerkkonfigurationen aller Jeedoms *(Quellenziel)* MUSS in Ordnung sein, sonst funktioniert das Plugin nicht.

>**Wichtig**
>
>Es ist wichtig, dass nicht auf mehreren Zielobjekten derselbe API-Schlüssel vorhanden ist. Der Schlüssel eines Geräts basiert auf dem API-Schlüssel (daher sollte er nach der Konfiguration nicht geändert werden) und der Quell-ID des Geräts. Der gleiche API-Schlüssel auf den Ziel-Jeedoms führt daher zu Synchronisierungsproblemen mit Geräten, die möglicherweise nicht auf der Quelle angezeigt werden.

## Target Jeedom-Konfiguration

Der erste Schritt besteht darin, a zu definieren **Jeedom Ziel** seit **Jeedom Source** *(derjenige, der die Ausrüstung hält, die wieder zusammengebaut werden soll)*.

Gehen Sie dazu in das Menü **Plugins → Kommunikation → Jeedom Link** Klicken Sie dann auf die grüne Schaltfläche **Ziel Jeedoms**.

Es öffnet sich ein Fenster, in dem Sie hinzufügen oder ändern können **Jeedom (s) Ziel (e))**. Hinzufügen eines **Jeedom Ziel**, einfach ausfüllen :

- Der Name von **Jeedom Ziel**.
- Die IP-Adresse oder der DNS-Name, an den die **Jeedom Ziel** kann erreicht werden.
- Der **API-Schlüssel des Jeedom Link-Plugins** die **Jeedom Ziel**.
- Der Zugriffsmodus, intern oder extern (verwendet für Feedback von der **Jeedom Source** in Richtung **Jeedom Ziel**).

![jeelink2](../images/jeelink2.png)

>**TRICK**
>
>Sie finden die **Jeedom-Link-API-Schlüssel**, anlagenspezifisch im Menü **Einstellungen → System → Konfiguration → SPS**.

### Ausrüstungszuordnung

Nach der Konfiguration der **Jeedom Ziel** auf der **Jeedom Source**, Sie müssen zur Registerkarte gehen **Zuordnung** um die zu übertragenden Geräte auszuwählen **Jeedom Ziel**. Alle Befehle für jedes Gerät werden automatisch auf dem erstellt und konfiguriert **Jeedom Ziel**.

![jeelink3](../images/jeelink3.png)

Fügen Sie die Ausrüstung hinzu, die Sie hochladen möchten **Jeedom Ziel** anklicken **Ausrüstung hinzufügen** Wählen Sie dann das Objekt und die Ausrüstung aus :

![jeelink5](../images/jeelink5.png)

>**INFORMATION**
>
>Plugins, die ein bestimmtes Widget verwenden, finden es nicht auf der **Jeedom Ziel** *(Plugin Kamera, Netzwerke, etc…​)*.

>**Wichtig**
>
>Als Sicherheitsmaßnahme das Löschen eines Geräts, das a zugewiesen ist **Jeedom Ziel** seit einem **Jeedom Source** löschen Sie es nicht auf der **Jeedom Ziel**.

Es bleibt nur zu **Zu schützen** für die herzustellende Verbindung und das ausgewählte Gerät, das von der übertragen werden soll **Jeedom Source** zu **Jeedom Ziel**.

## Gerätekonfiguration

Kommen wir nun zum Menü **Plugins → Kommunikation → Jeedom Link** die **Jeedom Ziel** um die automatische Erstellung der zuvor ausgewählten Ausrüstung zu sehen :

![jeelink4](../images/jeelink4.png)

Wie bei jedem Jeedom-Gerät greifen Sie auf die Konfigurationsseite zu, indem Sie darauf klicken :

![jeelink6](../images/jeelink6.png)

In der Registerkarte **Befehle**, Sie greifen auf alle Parameter der Gerätesteuerung zu :

![jeelink7](../images/jeelink7.png)

>**Wichtig**
>
>Bezüglich der betroffenen Geräte auf a **Jeedom Source**, Löschen eines Betriebsmittels auf a **Jeedom Ziel** löschen Sie es nicht auf der **Jeedom Source**.

### Ändern der Jeedom-Quelle

Die folgenden 3 Parameter werden verwendet, um a zu ersetzen **Jeedom Source** ohne Datenverlust *(Geschichte zum Beispiel)* :

-   **Quelle Jeedom-Adresse**
-   **Jeedom Link-Quell-API-Schlüssel**
-   **Quellgeräte-ID** und **Quell-ID** einige Befehle.

Geben Sie dazu einfach die neue Adresse und den neuen Jeedom-Link-API-Schlüssel der Quelle Jeedom ein und ändern Sie die Kennungen der Geräte und Befehle.

# FAQ

>**Ich habe Fehler :** "Sie sind nicht berechtigt, diese Aktion auszuführen"
>
>Stellen Sie sicher, dass **Jeedom Link-API-Schlüssel** gut informiert sein :
>- Der **Jeedom-Link-API-Schlüssel** die **Jeedom Source** auf jedem Jeelink-Gerät der **Jeedom Ziel**.
>- Der **Jeedom-Link-API-Schlüssel** die **Jeedom Ziel** auf der Konfigurationsseite **Ziel Jeedoms** die **Jeedom Source**.
