# 

. .

## 

### )

 **BACnet-Client** (Netzwerkermittlung)
 **** 
3. Klicken Sie auf **Liste die Objekte auf** 

5. Klicken Sie auf ****


### 

1. Aus Abschnitt **BACnet-Client**, Klicken Sie auf ****
2. Einstellungen manuell konfigurieren (Geräte-ID, IP usw.).)
3. Verwenden **Scannen Sie die Objekte** Befehle entdecken und hinzufügen

---

## Gerätekonfiguration

### Allgemeine Einstellungen

| Einstellung |  |
|-----------|-------------|
| **Gerätebezeichnung** |  |
| **Übergeordnetes Objekt** |  |
| **Kategorie** | .) |
| **** |  |
| **** |  |

### BACnet-Clientkonfiguration

Diese Parameter sind spezifisch für das entfernte BACnet-Gerät :

| Einstellung |  |  |
|-----------|-------------|---------|
| **Geräte-ID** |  | 64 |
| **IP-Adresse** |  | .100:47808 |
| **** | ) | 8 |

> **IP-Format** : Immer noch im `IP`-Format:Port` (ex : 192.168.1.100:).

> **** :  **** . .  ****.

### Scannen Sie die Objekte

 :

#### ")

 :
- Es wird nur der Abschnitt „Objektliste“ angezeigt
- Geräte-ID und IP-Adresse sind bereits vorausgefüllt
- 
- )
- 
- **** : )
- **** : 

#### ")

 :
-  : 
-  : )
- 
- 
- **** : 

 [BACnet-Client](modal-client.md#scan-sélectif-dobjets).

---

## Aktualisierungsmethode

Die Aktualisierungsmethode bestimmt, wie die Befehlswerte aktualisiert werden.

### Cron (periodische Aktualisierung))

Der Standardmodus. Jeedom fragt das BACnet-Gerät in regelmäßigen Abständen ab, um die Werte aller Objekte auszulesen.

| Einstellung |  |
|-----------|-------------|
| **In den Cronjob einbinden** |  |

Die Frequenz ist global konfigurierbar in der **Plugin-Konfiguration** (1 Minute, 5 Minuten, 10 Minuten oder 1 Stunde).

### COV (Update zur Veranstaltung))

Im COV-Modus (Change of Value) sendet das BACnet-Gerät nur dann eine Benachrichtigung, wenn sich ein Wert ändert. Effizienter im Hinblick auf den Netzwerkverkehr.

|  |  |
|----------|--------------|
|  |  |
|  |  |
|  |  |

> **** : Wenn Sie den VOC-Modus auswählen, werden die Geräte nur über VOC-Benachrichtigungen aktualisiert. Deaktivieren Sie anschließend „In Cron einbeziehen“, um doppelte Abfragen zu vermeiden.

---

## COV-Abonnements

### Abonnements ansehen

Der Knopf **Abonnements laden** Zeigt die Liste der BACnet-Objekte an, für die auf diesem Gerät ein COV-Abonnement aktiv ist.

### Abonnements verwalten

COV-Abonnements werden über die BACnet-Client-Schnittstelle verwaltet :
1. Listen Sie die Objekte auf dem Gerät auf
2. Klicken Sie auf die Schaltfläche **** eines Objekts
3. Dauer und Modus konfigurieren (bestätigt oder nicht))
4. Klicken Sie auf ****

### Lebensdauer

Ein COV-Abonnement hat eine begrenzte Laufzeit.  :
- 5 Minuten bis 24 Stunden (vordefinierte Werte))
- Permanent (Lebensdauer = 0))

Das Plugin verlängert Abonnements automatisch vor deren Ablauf.

---

## Gerätesteuerungen

### Registerkarte „Bestellungen“

 **** Listet alle für dieses Gerät erstellten Befehle auf.

### Befehlstypen

Jedes importierte BACnet-Objekt kann generieren :

|  |  |  |  |
|------|-----------|-------------|-----------|
| **** |  |  |  |
| **** |  |  |  |

### 

 **** (. .

> .

### Namenskonventionen

Die `logicalId` von Befehlen folgt dem Format :
- `bacnet_info_analog-input_0` → Info-Befehl für Analogeingangsinstanz 0
- `bacnet_action_analog-output_1` → Aktionsbefehl für Analogausgangsinstanz 1

Bindestriche im BACnet-Typ werden in der logischen ID durch Unterstriche ersetzt (z. B : ).

---

## Bewährte Verfahren

### Auswahl der Aktualisierungsmethode

-  **** für einfache Geräte oder solche, die keine VOCs unterstützen
-  **** für kritische Werte, die eine sofortige Reaktion erfordern (Alarme, Detektoren))
- Sie können die beiden kombinieren : COV für bestimmte Elemente und Cron als Ausweichlösung

### Organisation

- Erstellen Sie ein BACnet-Gerät pro Remote-Gerät
- Verwenden Sie aussagekräftige Namen für Befehle
- Bringen Sie die Ausrüstung an den richtigen Jeedom-Objekten (Räumen) an)

### Performance

- Im Cron-Modus sollten Sie nicht zu häufig scannen (5 Minuten sind ein guter Kompromiss))
- Bei Installationen mit vielen Geräten ist der COV-Modus vorzuziehen
- Beschränken Sie die Anzahl der importierten Artikel auf diejenigen, die tatsächlich nützlich sind

---

## Fehlerbehebung

### Die Werte werden nicht aktualisiert

1. Prüfen Sie, ob das Gerät eingeschaltet ist
2. Überprüfen Sie, ob die Option „In Cron einbeziehen“ aktiviert ist (Cron-Modus))
3. Überprüfen Sie, ob der Daemon gestartet wurde
4. Testen Sie einen manuellen Lesevorgang von der BACnet-Client-Schnittstelle
5. Überprüfen Sie die Plugin-Protokolle

### Die Objektprüfung hat nichts gefunden

1. Überprüfen Sie die Geräte-ID und die IP-Adresse
2. Stellen Sie sicher, dass der Client-Daemon gestartet ist
3. Führen Sie zunächst eine Whois-Abfrage durch, um die Sichtbarkeit des Geräts zu bestätigen
4. Einige Geräte erfordern eine BACnet-Authentifizierung

### Fehler beim Hinzufügen von Befehlen

1. Stellen Sie vor dem Scannen sicher, dass die Geräte gesichert sind
2. Duplikate werden automatisch behandelt (vorhandene Einträge werden grün markiert))
3. Falls ein Problem auftritt, löschen Sie das Gerät und erstellen Sie es neu
