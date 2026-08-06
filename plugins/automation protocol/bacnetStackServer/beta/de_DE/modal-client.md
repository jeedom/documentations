# BACnet-Client

Über die BACnet-Clientschnittstelle können Sie BACnet-Geräte in Ihrem Netzwerk erkennen, auslesen und mit ihnen interagieren. Im Gegensatz zu dem Server, der ** Ihre Jeedom-Bestellungen, der Kunde ** entfernte BACnet-Geräte.

## Zugang

Um auf die Client-Schnittstelle zuzugreifen :
1. Von der Hauptseite des BACnet Stack Server-Plugins
2. Klicken Sie auf die Kachel **BACnet-Client**
3. Dann weiter **Netzwerkermittlung**

> **** : Der BACnet-Client arbeitet unabhängig vom BACnet-Server. Er hat seinen eigenen Dämon.

---

## Client-Daemon-Steuerung

Der Client-Daemon muss gestartet werden, um die Erkennungs- und Kommunikationsfunktionen nutzen zu können.

|  |  |
|--------|-------------|
| **Starten Sie den Client** | Starten Sie den BACnet-Client-Daemon |
| **Den Kunden stoppen** | Stoppt den Kundendämon! |
| **Aktualisierungsstatus** | Aktualisiert die Statusanzeige |

### Statusanzeige

- **Begonnen** (vert) : Der Kunde ist betriebsbereit
- **Befehl** (rouge) : Der Client ist nicht aktiv
- **** (orange) : Kommunikationsproblem

---

## Geräte entdecken (Wer ist)

Discovery ermöglicht es Ihnen, Ihr Netzwerk zu scannen, um alle erreichbaren BACnet-Geräte zu finden.

### Discovery-Einstellungen

|  |  | Standardmäßig |
|-------|-------------|------------|
| **Geräte-ID Min** | Untere Grenze des Scanintervalls | 0 |
| **Maximale Geräte-ID** | Obere Grenze des Scanintervalls | 4194303 |

### Aktionsschaltflächen

|  |  |
|--------|-------------|
| **Wer ist das?** | Sendet eine Who-Is-Anfrage über das Netzwerk und aktualisiert die Liste nach 2 Sekunden |
| **Liste die Geräte auf** | Zeigt bereits erkannte Geräte (aus dem Cache) an) |
| **Cache leeren** | Löscht den lokalen Cache der gefundenen Geräte |

### Tabelle der gefundenen Geräte

Für jedes gefundene Gerät zeigt die Tabelle Folgendes an :

|  |  |
|---------|-------------|
| **Geräte-ID** |  |
| **** | ) |
| **IP-Adresse** |  |
| **** | ) |
| **** |  |

#### Aktionen pro Gerät

- **Verwenden Sie dieses Gerät** (Handsymbol) : Füllt automatisch alle Geräte-ID- und IP-Felder in den Abschnitten Lesen, Schreiben, COV und Objektliste aus
- **Liste die Objekte auf** (Listensymbol) : Startet direkt das Einlesen der Objektliste des Geräts und scrollt zur Tabelle

### Cache-System

Die gefundenen Geräte werden lokal zwischengespeichert (24 Stunden), um zu vermeiden, dass das Netzwerk bei jedem Öffnen erneut gescannt werden muss. Ein Informationsbanner gibt das Alter des Caches an. Falls der Cache abgelaufen ist, können Sie über einen Link einen Scan neu starten.

---

## Immobilienbewertung

Dieser Abschnitt ermöglicht es Ihnen, eine bestimmte Eigenschaft eines entfernten BACnet-Objekts auszulesen.

### Pflichtfelder

|  |  |  |
|-------|-------------|---------|
| **Geräte-ID** |  | 1234 |
| **IP-Adresse** |  | .100 |
| **BACnet-Objekt** | : | analog-input:0 |
| **Eigentum** |  |  |

### Verfügbare Immobilien

| Eigentum |  |
|-----------|-------------|
| **** |  |
| **** |  |
| **** |  |
| **** |  |
| **** |  |
| **** | ) |
| **** |  |
| **** |  |
| **** |  |

Das Leseergebnis wird im JSON-Format im Ergebnisbereich angezeigt.

---

## Eigentumsurkunde

In diesem Abschnitt können Sie einen Wert in ein entferntes BACnet-Objekt schreiben.

### Pflichtfelder

|  |  |  |
|-------|-------------|---------|
| **Geräte-ID** |  | 1234 |
| **IP-Adresse** |  | .100 |
| **BACnet-Objekt** | : | analog-output:0 |
| **Eigentum** |  |  |
| **** |  | 23.5 |
| **Datentyp** |  | ) |
| **** | ) | ) |

### Datentypen

|  |  |  |
|------|-------------|---------|
| **)** |  | 23.5 |
| **)** |  | 100 |
| **** |  |  |
| **** |  | "" |
| **** |  | 1 |

### BACnet-Priorität

BACnet verwendet 16 Prioritätsstufen (1 = höchste, 16 = niedrigste)). Aktueller Stand :

|  |  |
|----------|---------------|
| 8 |  |
| 10 |  |
| 12 |  |
| 14 |  |
| 16 | ) |

---

## COV-Abonnement (Wertänderung))

Der COV-Mechanismus ermöglicht es Ihnen, automatisch eine Benachrichtigung zu erhalten, wenn sich der Wert eines BACnet-Objekts ändert, ohne dass Sie das Gerät ständig abfragen müssen.

### Einstellungen

|  |  |  |
|-------|-------------|---------|
| **Geräte-ID** |  | 1234 |
| **IP-Adresse** |  | .100 |
| **BACnet-Objekt** | : | analog-input:0 |
| **** | ) | 3600 |

### Boutons

|  |  |
|--------|-------------|
| **** |  |
| **Abbestellen** |  |

### Verfügbare Laufzeiten (über das Verwaltungs-Popup))

- 5 Minuten (300 Sekunden))
- 10 Minuten (600 Sekunden))
- 30 Minuten (1800er Jahre))
- 
- 
- )

### 

 **** (. . .

> **** : . .

---

## 

.

### Utilisation

 **Geräte-ID** '**IP-Adresse**
 :
   - **** : )
   - **** : )

> **** : . .

### 

 :

|  |  |
|---------|-------------|
| **** |  |
| **** | .) |
| **** |  |
| **** | ) |
| **** | ) |
| **** |  |
| **** |  |

### 

- **** (bleu) : )

### 

|  |  |
|--------|-------------|
| **** |  |
| **** |  |
| **** () |  |
| **** () |  |

### 

|  |  |
|--------|-------------|
| **** |  |
| **** |  |
| **** |  |

### 

 **** :

- 
- 

 :
-  **** 
-  **** (

---

## 

 **** .  :
- 
- )
- 

### 

 ****
 **** (orange)

> **** : .

### 

 :

####  : )

 :

|  |  |
|-------|-------------|
| **** | .) |
| **** | ) |
| **** | " |

**** :
- **** : 
-  ****  : 

**** :
-  ****  :
  - 
  - 

**** :
- 
  -  **** "Info" : 
  -  **** "" : 
-  **X** 
- 

####  : 

 :

- **** : :instance`
- **** :
  
  analog-value:100
  analog-input:200
  binary-value:0
  multi-state-output:42
  
- 
- 

### 

)
 ****
 :
   - )
   - .)
   - 
   - 


### 

 :


 ****
 :
   -  : `analog-input`
   -  : 
   -  : 
   -  : 
   -  : 
   -  : 
 ****


 :

analog-input:150
analog-input:151
analog-input:152
analog-input:153
analog-input:154


### 

|  |  |
|--------------|---------------|
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |

---

## 

Der Knopf **** .

### 

|  |  |  |
|------|--------|-------------|
| 0 |  |  |
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |
| 5 |  |  |
| 7 |  |  |

### 

|  |  |
|------|---------------|
| **** |  |
| **** | Zeitüberschreitung – Das Gerät reagiert nicht |
| **** | Lesezugriff verweigert |
| **** | Schreibzugriff verweigert (nur lesend)) |
| **** | Unbekanntes Element – Ist auf dem Gerät nicht vorhanden |

 : ).

---

## Fehlerbehebung

### 

)



### 



)


### 





### "

. ).
