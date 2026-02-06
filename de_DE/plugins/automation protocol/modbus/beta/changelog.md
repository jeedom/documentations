# ModBus-Änderungsprotokoll

>**WICHTIG**
>
>Zur Erinnerung: Wenn es keine Informationen über die Aktualisierung gibt, bedeutet dies, dass es sich nur um die Aktualisierung von Dokumentation, Übersetzung oder Text handelt.

>**WICHTIG**
>
>Une refonte globale du plugin à été effectuée. Les méthodes d'écritures ou les parametrages des registres pourraient etre a refaire/re-adapter suivant les installations. Merci de bien faire un backup et de le télécharger en local avant de mettre à jour le plugin


# 
-  : 
- 
- 

# 09/12/2025
- Fix remontées valeurs

# 04/11/2025
- OS Minimum : Debian 11
- Jeedom Minimum : 4.4.19
- Montée de version de pymodbus en 3.8.6
- Passage en asynchrone
- Suppression ByteOrder car non standard avec Modbus
- Suppression du parametre Nombre de registres : gérer maintenant via le choix du format de données choisi
- Refonte conversion registres
- Gestion programmée
- Optimisation et fix sur multiples clients TCP
- Ajout Configurer Fc16 via bootbox pour valeurs et format
- Ajout format short/ushort (int8,uint8)
- Ajout Mode Cyclique ou sur déclenchement

# 01/11/2025

- Fix selection des functions codes

# 31/10/2025

- Gestion formatType UInt8 et Int8


# 28/10/2025

- Optimisation et fix sur multiples clients TCP

# 18/07/2025

- Ajout Configurer Fc16 via bootbox pour valeurs et format

# 01/04/2025

- Ajout option MQTT : envoie des infos de registres sur broker MQTT (nécessite le plugin officiel MQTT)


# 19/03/2025

- OS Minimum : Debian 11
- Jeedom Minimum : 4.4.19
- Montée de version de pymodbus en 3.8.6
- Passage en asynchrone
- Suppression ByteOrder car non standard avec Modbus
- Suppression du parametre Nombre de registres : gérer maintenant via le choix du format de données choisi
- Refonte conversion registres


# 30/10/2025

- Fix Debian12

# 06/02/2025

- Fix error NameCmd


# 11.08.2024

- Behebung eines Python3-Speicherlecks

# 30.07.2024

- Hinzufügen eines Registers in der EcritureBit-Nachricht

# 26.07.2024

- Neue Methode zum Ändern von Bits in einem Register hinzugefügt (siehe Dokument)
- In der Plugin-Konfiguration hinzugefügt : Auswahl der Protokollebene der Modbus-Bibliothek


# 18.07.2024

- String-Format hinzufügen
- Höhere Präzision der Datenformate im Selektor


# 26.03.2024

- Fix Update für bestimmte Pymodbus-Version

# 29.05.2023

Erstellen Sie ein Backup von JEEDOM, bevor Sie die neue Beta installieren.
- Schreiben Sie 1 Bit
- Bestellungen über Xlsx importieren/exportieren
- Neue Syntaxoperation auf Befehl (siehe Dok)
- Fixs

# 15.05.2023

- Neue UI-Befehlseinstellungen
- Conversion-Optimierungswerte
- Hex-Rückgabeparameter

# 03.04.2023

- Neue UI-Befehlseinstellungen
- ArrayRegistres-Parameter zum fortlaufenden Schreiben ab einem Startregister

# 10.01.2023
- Importpakete für Python 3.9 korrigiert

# 13.10.2022
- Option Schreibnachricht aktivieren/deaktivieren
- NbBytes-Option, um die Aufteilung eines Registers in x Bytes festzulegen

# 10.07.2022
- Neues voraufgezeichnetes Modellsystem
- ReadMultiRegisters-Option für Befehle

# 26.09.2022
- Neuer Timeout-Parameter zwischen Leseregister

# 23.09.2022
- Änderungsprotokolle pyModbus-Bibliothek

# 16.08.2022
- Wahl des Ports für Modbus TCP (standardmäßig 502)

# 01.08.2022
- BugFix beim Trennen eines Gerätes am selben Bus

# 02.05.2022
- Funktion Exportieren einer Json-Datei und Importieren von Bestellungen nach Equipment

# 20.03.2022
- Funktion Fc16 Register nicht befolgt

# 14.02.2022
- Fc16-Funktion für SPS ohne Fc6

# 02.03.2022
- Beta-Version, kompatibel mit 4.2.7
