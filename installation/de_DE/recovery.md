# Installation auf Smart/Atlas

## Sicherung von Jeedom

Bevor Sie das System neu installieren, **müssen Sie unbedingt ein aktuelles Backup von Jeedom herunterladen**, das nach Abschluss des Vorgangs zur Wiederherstellung verwendet werden kann:

1. Klicken Sie in der Jeedom-Benutzeroberfläche auf das Menü **Einstellungen → System → Backups**.

2. Klicken Sie auf die Schaltfläche **Sicherung starten**.

3. Wenn der Vorgang abgeschlossen ist, klicken Sie auf **Sicherung herunterladen**.

## Wiederherstellung des Systems

**Seit Version 4.4.20 entwickelt das Jeedom-Team eine eigene Funktion zur automatischen Wiederherstellung des Systems, die unmittelbar vor dem Systemstart ausgelöst wird**. Der Vorgang dauert etwa zwanzig Minuten, während derer das System nicht erreichbar ist.

Anschließend startet das System zunächst einmal, bevor es automatisch neu startet, um schließlich im Netzwerk sichtbar und erreichbar zu sein. Auf Smart kann man den Fortschritt verfolgen, indem man einen Bildschirm anschließt.

>**WICHTIG**
>
>Geduld ist gefragt: Auch wenn man leicht den Eindruck gewinnt, dass nichts passiert, sind 20 Minuten letztendlich gar nicht so lange.

>**INFORMATION**
>
>Es ist möglich, dass sich die MAC-Adresse Ihrer Box *(und damit auch die IP-Adresse)* je nach Kernel-Version ändert. Weitere Informationen finden Sie unter [Methoden zum Auffinden der Box im lokalen Netzwerk](/premiers-pas/#Accès%20local) bei Bedarf.

Der Vorgang kann direkt in Jeedom durchgeführt werden, indem Sie im Menü auf **Einstellungen → System → Wiederherstellung** klicken. Dabei stehen zwei verschiedene Vorgehensweisen zur Auswahl:

{% include lightbox.html src="../images/recovery.jpg" data="Recovery" title="Accueil page restauration système" imgstyle="display:block;margin:0 auto;" %}

### Automatikmodus

In diesem Modus wird der gesamte Vorgang vollautomatisch durchgeführt, ohne dass ein physischer Zugriff auf die Box erforderlich ist.

Nachdem Sie auf die Schaltfläche **Automatische Wiederherstellung** geklickt haben, wird das letzte System-Image direkt von unseren Servern auf den internen Speicher heruntergeladen. Die Integrität des Images wird überprüft, anschließend wird die Datei umbenannt.

Das System-Update wird beim nächsten Systemstart durchgeführt, es sei denn, die Datei der Wiederherstellung wird gelöscht oder aus dem Download-Verzeichnis verschoben.

>**INFORMATION**
>
>Um eine automatische Wiederherstellung „manuell“ vorzubereiten, ohne das Jeedom-Dienstprogramm zu verwenden, reicht es aus, ein kompatibles System-Image mit dem umbenannten Namen `JeedomSystemUpdate.img.gz` im Ordner `/install/update` von Jeedom *(`/var/www/html/install/update/JeedomSystemUpdate.img.gz`)*.

### USB-Modus

In diesem Modus muss ein USB-Stick angeschlossen werden, dessen erste Partition auf FAT32 formatiert ist `FAT` *(oder `ExFAT` + Schema `Enregistrement de démarrage principal (MBR)` unter macOS)*, in den Anschluss oben rechts (von hinten gesehen).

Die Schaltfläche **USB-Wiederherstellung** löst zunächst die Erkennung, Überprüfung und Einbindung des USB-Sticks aus. Anschließend wird das neueste System-Image von unseren Servern auf den USB-Stick heruntergeladen. Die Integrität des Images wird überprüft, und anschließend wird die USB-Konfigurationsdatei geschrieben.

Das System wird beim Start aktualisiert, wenn der vorbereitete USB-Stick in den ersten Anschluss oben rechts eingesteckt ist.

Eine Datei `JeedomSystemUpdate.log` wird während des Vorgangs auf dem USB-Stick erstellt. Sie enthält detaillierte Informationen zu den einzelnen Schritten der Wiederherstellung des Systems und dient in erster Linie dazu, zu verhindern, dass das System endlos aktualisiert wird. Diese Datei muss gelöscht werden, um die Systemaktualisierung erneut zu starten *(beispielsweise auf einer identischen Box mit demselben USB-Stick)*.

>**INFORMATION**
>
>Um selbst einen USB-Stick für die Wiederherstellung zu erstellen, müssen Sie lediglich **über den Datei-Explorer** *(kein Brennen erforderlich)* die folgenden Dateien in das Stammverzeichnis der ersten Partition des USB-Sticks kopieren *(Format `FAT`)* :
>
>- entweder ein kompatibles System-Image, das umbenannt wurde in `JeedomSystemUpdate.img.gz`
>- entweder ein kompatibles System-Image **zusammen mit der USB-Konfigurationsdatei** `JeedomSystemUpdate.ini` dessen Inhalt lautet `update_filename="Jeedom****-*.*.*_******-1*.*.img.gz"`.\
>`Jeedom****-*.*.*_******-1*.*.img.gz` entsprechend dem Namen der Datei auf dem USB-Stick.

### Protokolle

Die von der Wiederherstellung durchgeführten Vorgänge sind im Menü **Analyse → Protokolle** im Abschnitt **Wiederherstellung** einsehbar.

## Systemabbilder

Die derzeit vom Jeedom-Team bereitgestellten System-Images können je nach betroffener Hardware unter den folgenden Adressen frei eingesehen und heruntergeladen werden:

- [**Bild(er) des Jeedom Smart-Systems**](https://images.jeedom.com/smart/){:target="_blank"}
- [**System-Bild(er) von Jeedom Atlas**](https://images.jeedom.com/atlas/){:target="_blank"}

Anzeigen [**die Dokumentation zu den offiziellen System-Images**](/compatibility/#Images%20système%20officielles) Weitere Informationen finden Sie hier.

## eMMC-Smart-Beschriftung

Die neuen Funktionen zur Wiederherstellung des Systems können nicht auf einem Smart installiert werden, auf dem noch Debian 10 läuft. In diesem Fall muss zunächst das austauschbare eMMC-Laufwerk beschrieben werden, um auf eine neuere Debian-Version umzusteigen; siehe Dokumentation [**Anleitungen → Tutorials → Smart auf Werkseinstellungen zurücksetzen**](/howto/smart) Weitere Informationen finden Sie hier.

## Erste Anmeldung

Die Dokumentation zur [**Erste Anmeldung**](/premiers-pas/#Première%20connexion) um nach der Installation auf die Jeedom-Benutzeroberfläche zuzugreifen.
