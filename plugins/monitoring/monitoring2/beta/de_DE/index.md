# Überwachungs-Plugin

Das Plugin ermöglicht die Überwachung von Systemen und verfügt über mehrere CLI-Engines (Bash), SNMP, Ping und URL

> **Wichtig**
>
> Dieses Plugin ist recht komplex und muss daher die Dokumentation und einige Kenntnisse lesen. ES IST NICHT STECKEN UND SPIELEN

# Configuration

Nach dem Herunterladen des Plugins müssen Sie das Plugin lediglich aktivieren

# Equipements

Auf die Konfiguration der Überwachungsgeräte kann über das Menü Plugins und dann über Überwachung zugegriffen werden

- Name der Ausrüstung
- Übergeordnetes Objekt
- Kategorie
- Activer
- Visible
- Aktualisieren Sie die Häufigkeit : im Cron-Format (ex \*/ 15 \* \.* \.* \.*)
- Motor : Motor für das betreffende Gerät zu aktivieren.
- Bash / Shell-Einstellungen
		- Modus : lokal oder remote (wenn lokal, gibt es nichts anderes zu füllen)
		- IP
		- Benutzername
		- Passwort
- SNMP-Einstellungen
		- IP
		- Protocole
		- Benutzername
		- Passwort
		- Modeauthentifizierung
		- Sicherheit
		- Privates Protokoll
		- Priv Passphrase
- Ping-Einstellungen
		- IP

# Moteur

SNMP
----

Mit der SNMP-Engine können Sie eine Verbindung zu Computern in SNMP herstellen und Werte abrufen. Unten das Beispiel der SNMP-OID

### Allgemeine OIDs

#### Load

| OID                                  | Daten                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.10.1.3.1           | 1 Minute laden                        |
| .1.3.6.1.4.1.2021.10.1.3.2           | 5 Minuten laden                        |
| .1.3.6.1.4.1.2021.10.1.3.3           | 15 Minuten laden                       |

#### CPU

| OID                                  | Daten                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.11.9.0             | Prozentsatz der Benutzer-CPU-Zeit          |
| .1.3.6.1.4.1.2021.11.50.0            | Rohe Benutzer-CPU-Zeit                    |
| .1.3.6.1.4.1.2021.11.10.0            | Prozentsatz der System-CPU-Zeit       |
| .1.3.6.1.4.1.2021.11.52.0            | Rohe System-CPU-Zeit                  |
| .1.3.6.1.4.1.2021.11.11.0            | Prozentsätze der CPU-Leerlaufzeit         |
| .1.3.6.1.4.1.2021.11.53.0            | Rohe Leerlauf-CPU-Zeit                    |
| .1.3.6.1.4.1.2021.11.51.0            | Rohe schöne CPU-Zeit                    |

#### Speicherstatistik

| OID                                  | Daten                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.4.3.0              | Gesamt-Swap-Größe                      |
| .1.3.6.1.4.1.2021.4.4.0              | Verfügbarer Swap Space                 |
| .1.3.6.1.4.1.2021.4.5.0              | Gesamter RAM in der Maschine                 |
| .1.3.6.1.4.1.2021.4.6.0              | Insgesamt RAM frei                       |
| .1.3.6.1.4.1.2021.4.11.0             | Insgesamt verwendeter RAM                       |
| .1.3.6.1.4.1.2021.4.13.0             | Insgesamt freigegebener RAM                     |
| .1.3.6.1.4.1.2021.4.14.0             | Gesamter RAM-Puffer                   |
| .1.3.6.1.4.1.2021.4.15.0             | Gesamter zwischengespeicherter Speicher                  |

#### Disk

| OID                                  | Daten                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.9.1.2.X            | Pfad, in dem die Festplatte bereitgestellt ist       |
| .1.3.6.1.4.1.2021.9.1.3.X            | Pfad des Geräts für die Partition |
| .1.3.6.1.4.1.2021.9.1.6.X            | Gesamtgröße der Festplatte / Partition (kByte)                             |
| .1.3.6.1.4.1.2021.9.1.7.X            | Verfügbarer Speicherplatz auf der Festplatte          |
| .1.3.6.1.4.1.2021.9.1.8.X            | Verwendeter Speicherplatz auf der Festplatte               |
| .1.3.6.1.4.1.2021.9.1.9.X            | Prozentsatz des auf der Festplatte verwendeten Speicherplatzes     |
| .1.3.6.1.4.1.2021.9.1.10.X           | Prozentsatz der auf der Festplatte verwendeten Inodes    |

#### System

| OID                                  | Daten                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.2.1.1.3.0                   | Systembetriebszeit                        |

### VMware-OIDs

| OID                                  | Daten                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.2.1.25.2.3.1.6.6            | Speichernutzung                  |
| .1.3.6.1.4.1.6876.1.2.0              | VMware-Version                    |

### OIDs Synology

| OID                                  | Daten                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.6574.1.5.1.0            | Modell                               |
| .1.3.6.1.4.1.6574.1.5.3.0            | DSM-Version                          |
| .1.3.6.1.4.1.6574.1.1.0              | Systemstatus                       |
| .1.3.6.1.4.1.6574.3.1.1.2.0          | Zeigt den RAID-Status an               |
| .1.3.6.1.4.1.6574.1.4.2.0            | CPU-Lüfter                              |
| .1.3.6.1.4.1.6574.1.4.1.0            | Lüftersystem                          |
| .1.3.6.1.4.1.2021.11.9.0             | CPU-Auslastung                           |
| .1.3.6.1.4.1.6574.1.2.0              | Systemtemp                         |
| .1.3.6.1.4.1.6574.2.1.1.5.X          | Status von Datenträger X (beginnt bei 0)    |
| .1.3.6.1.4.1.6574.2.1.1.6.X          | Plattentemperatur X (beginnt bei 0)                                   |
| .1.3.6.1.4.1.6574.3.1.1.2.X          | Status von Schlachtzug X (beginnt bei 0)      |
| .1.3.6.1.4.1.6574.6.1.1.3.1          | Anzahl der in CIFS verbundenen Benutzer                                 |
| .1.3.6.1.4.1.6574.6.1.1.3.2          | Anzahl der bei AFP angemeldeten Benutzer |
| .1.3.6.1.4.1.6574.6.1.1.3.3          | Anzahl der in NFS angemeldeten Benutzer |
| .1.3.6.1.4.1.6574.6.1.1.3.4          | Anzahl der über FTP angemeldeten Benutzer |
| .1.3.6.1.4.1.6574.6.1.1.3.5          | Anzahl der in SFTP verbundenen Benutzer                                 |
| .1.3.6.1.4.1.6574.6.1.1.3.6          | Anzahl der angemeldeten Benutzer in HTTP / HTTPS                           |
| .1.3.6.1.4.1.6574.6.1.1.3.7          | Anzahl der in TELNET verbundenen Benutzer                               |
| .1.3.6.1.4.1.6574.6.1.1.3.8          | Anzahl der in SSH angemeldeten Benutzer |
| .1.3.6.1.4.1.6574.6.1.1.3.9          | Anzahl der angemeldeten Benutzer ANDERER                                |

### OIDs Synology UPS

| OID                                  | Daten                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.6574.4.1.1.0            | Modell                               |
| .1.3.6.1.4.1.6574.4.2.1.0            | STATUS                               |
| .1.3.6.1.4.1.6574.4.2.12.1.0         | Last                               |
| .1.3.6.1.4.1.6574.4.3.1.1.0          | Batteriestatus                        |
| .1.3.6.1.4.1.6574.4.3.6.1.0          | Autonomie                            |

### Vom Plugin berechnete OIDs

| OID                                  | Daten                              |
|--------------------------------------|--------------------------------------|
| sysuptime                            | Formatierte Systemverfügbarkeit            |
| Speicher verwendet                           | Tatsächliche Speichernutzung       |
| cpuused                              | Durchschnittliche CPU-Auslastung unter VMware                               |
| vmwarerunvm                          | Anzahl der auf VMware gestarteten VMs     |
| diskused::X                          | Disc-Füllrate X      |
| networkin::X                         | Durchschnittlicher X-Durchsatz der Ausgabeschnittstelle                               |
| networkout::X                        | Durchschnittlicher Durchfluss der Eingangs-X-Schnittstelle                               |
| runprocess::X                        | Gibt die Anzahl der ausgeführten X-Prozesse an                               |

Ping
----

Für Ping sind 2 Befehle möglich :

| Befehl                             | Daten                              |
|--------------------------------------|--------------------------------------|
| Klingeln                                 | Ping-Ergebnis                     |
| Latenz                              | Latenztest                      |

CLI
---

Hier können Sie alle vom Plugin vorgefertigten Bash-Befehle oder Befehle verwenden :

| Befehl                             | Daten                              |
|--------------------------------------|--------------------------------------|
| cpufreq                              | CPU-Frequenz                        |
| cputemp                              | CPU-Temperatur                      |
| CPU auslastung                             | CPU-Auslastung in %                 |
| memuse                               | % des verwendeten Speichers                 |
| tauschen                                 | % des verwendeten Swaps                    |
| loadavg15                            | Laden Sie über 15 Minuten                     |
| Betriebszeit                               | Betriebszeit der Maschine                 |
| hdduse::\.#mount\.#                    | % der Nutzung des Montagepunktes *montieren*                              |

URL
---

| Befehl                             | Daten                              |
|--------------------------------------|--------------------------------------|
| access::\.#url\.#::\.#username\.#::\.#password\.# | Testen Sie den Zugriff auf eine URL mit *URLs* : URLs à tester (ex <http://www.google.fr>), *Benutzername*: Benutzername (falls erforderlich)),*Kennwort* : Benutzerkennwort (kann leer sein)       |
