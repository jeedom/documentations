# Systemwiederherstellung bei Jeedom Smart

## Sicherung von Jeedom

Zunächst einmal **ist es unerlässlich, ein Backup von Jeedom zu erstellen**, das nach Abschluss des Vorgangs wiederhergestellt werden kann.

1. Rufen Sie die Jeedom-Benutzeroberfläche auf und klicken Sie dann auf das Menü **Einstellungen > System > Backups**.

2. Klicken Sie auf die Schaltfläche **Sicherung starten**.

3. Wenn die Sicherung abgeschlossen ist, klicken Sie auf **Sicherung herunterladen**.

4. Sobald die Jeedom-Sicherung heruntergeladen ist, schalten Sie das System über das Menü **Einstellungen > System > Herunterfahren** aus.

## Systemwiederherstellung über eMMC

In dieser Anleitung wird erläutert, wie Sie die Systemumgebung einer Jeedom Smart-Box aktualisieren können, auf der noch **Debian 10 Buster** installiert ist. Dazu müssen Sie den internen Speicher *(eMMC)* direkt beschreiben, indem Sie die folgenden Schritte ausführen.

>**WICHTIG**
>
>**Bevor Sie loslegen, sollten Sie sich unbedingt das Video zum Austausch des eMMC ansehen, in dem der Aus- und Einbau der Jeedom Smart-Box detailliert beschrieben wird** *(2 Minuten)*:
>
>[![Demontage/Wiedereinbau des Smart im Video](https://img.youtube.com/vi/lUhtP687s2E/hqdefault.jpg)](https://youtu.be/lUhtP687s2E){:target="_blank"}

### Voraussetzungen

Um das System zu aktualisieren, müssen Sie Folgendes tun:

- Besorgen Sie sich **einen kleinen Kreuzschlitzschraubendreher**, um die Box zu öffnen

---

- Erwerben [**eine Ersatz-eMMC-Karte**](https://www.domadoo.fr/fr/controleurs-adaptateurs/5539-jeedom-carte-memoire-emmc-16go-de-remplacement-pour-jeedom-smart.html){:target="_blank"}

**ODER**

- Die neueste Version herunterladen [**Vom Team bereitgestelltes Bild des Jeedom Smart-Systems**](https://images.jeedom.com/smart/){:target="_blank"}
- Besorgen Sie sich **einen Odroid-C2-kompatiblen eMMC-zu-USB/SD/µSD-Adapter**, um das Image von einem Computer aus zu brennen, zum Beispiel:

![Beispiel für einen eMMC-Adapter](../images/emmc_adapter.jpg)

### Demontage der Jeedom Smart-Box

1. Trennen Sie alle an den Smart angeschlossenen externen Geräte *(Stromversorgung, Ethernet, USB, HDMI...)* und schrauben Sie die Antenne vom internen Controller ab.

2. Lösen Sie die beiden Schrauben an der Vorderseite der Box an der Plexiglasplatte ***(Vorsicht, zerbrechlich!)***.

3. Schieben Sie die Hauptplatine zur Rückseite des Gehäuses:

![Smart öffnen](../images/smart_open.jpg)

### Beschriftung des eMMC

1. Den eMMC-Speicher unter dem Mainboard herausnehmen:

![eMMC ausklinken](../images/smart_emmc.jpg)

>**INFORMATION**
>
>**Wenn Sie die ursprüngliche eMMC** durch eine eMMC mit vorinstalliertem Jeedom unter Debian 11 ersetzen, **stecken Sie die neue eMMC** anstelle der alten ein **und fahren Sie dann direkt mit dem Schritt [Aufzug](#Remontage%20de%20la%20box%20Jeedom%20Smart)**.

2. Die eMMC auf den Adapter aufstecken und diesen an einen Computer anschließen:

![eMMC auf dem PC](../images/emmc_to_pc.jpg)

3. Öffnen Sie die Brennsoftware *(z. B. balenaEtcher)*.

4. Wählen Sie **die System-Image-Datei als Quelle** und **das eMMC-Medium als Ziel** aus und starten Sie den Brennvorgang.

5. Nach Abschluss des Brennvorgangs den Adapter vom Computer trennen, dann die eMMC-Karte herausnehmen und wieder unter der Hauptplatine des Smart einrasten lassen.

### Wiederaufbau der Jeedom Smart-Box

1. Schieben Sie die Hauptplatine von hinten nach vorne durch das Gehäuse.

2. Setzen Sie die Plexiglasscheibe wieder ein und schrauben Sie die beiden Schrauben an der Vorderseite der Box wieder fest, ohne dabei zu viel Kraft anzuwenden:

![Smart abschrauben](../images/smart_unscrew.jpg)

3. Die Antenne wieder festschrauben und anschließend die externen Geräte wieder anschließen, zuletzt das Netzkabel.

## Automatische Systemwiederherstellung oder USB-Wiederherstellung

Sobald das Debian-System in Version 11 oder höher installiert ist, können System-Updates direkt über den Jeedom-Core durchgeführt werden, indem Sie folgende Schritte befolgen: [Das neue Installationsverfahren auf Smart](/installation/recovery)

## Einführung in das neue System

### Erstinbetriebnahme

Beim ersten Start wird das Dateisystem so angepasst, dass es den gesamten verfügbaren Speicherplatz einnimmt, bevor die Box automatisch neu startet.

>**INFORMATION**
>
>Dieser Vorgang kann bis zu 2 Minuten dauern.

### Zugriff auf Jeedom

Da das System neu installiert wurde, muss der erste Zugriff auf die Jeedom-Benutzeroberfläche mit den folgenden Anmeldedaten erfolgen: `admin`/`admin`.

### Wiederherstellung von Jeedom

1. Gehen Sie zum Menü **Einstellungen > System > Backups**.

2. Klicken Sie auf **Sicherung hinzufügen** und wählen Sie die zuvor erstellte Sicherung aus.

3. Klicken Sie auf **Sicherung wiederherstellen**.

### Änderung des Anschlusses des internen Controllers

**Ab Debian 11 muss der Port des internen Controllers geändert werden**, da dieser nicht mehr `/dev/ttyS1` aber `/dev/ttyAML1` auf diesem neuen System.
