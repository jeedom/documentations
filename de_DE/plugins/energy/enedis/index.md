# Enedis Linky Plugin

Plugin zur Wiederherstellung des Verbrauchs des kommunizierenden Messgeräts *Linky* durch Abfragen des Kundenkontos *Enedis*. Da die Daten nicht in Echtzeit verfügbar sind, ruft das Plugin die Stromverbrauchsdaten vom Vortag ab.

Es stehen 4 Arten von Verbrauchsdaten zur Verfügung :
- die **gezogene Kraft** pro halbe Stunde *(in kW)*.
- die **Täglicher Verbrauch** *(in kWh)*.
- die **monatlicher Verbrauch** *(in kWh)*.
- die **Jahresverbrauch** *(in kWh)*.

>**Wichtig**      
>Il est nécessaire d'être en possession d'un compte-client Enedis : https://mon-compte-client.enedis.fr/.

# Configuration

## Plugin Konfiguration

Das Plugin **Enedis Linky** erfordert keine spezielle Konfiguration und sollte erst nach der Installation aktiviert werden.

Die Daten werden stündlich zwischen 16 und 22 Uhr überprüft und nur aktualisiert, wenn sie in Jeedom nicht verfügbar sind.

## Gerätekonfiguration

Zugriff auf die verschiedenen Geräte **Enedis Linky**, Gehe zum Menü **Plugins → Energie → Enedis Linky**.

> **Wissen**    
> Die Schaltfläche **+ Hinzufügen** ermöglicht es Ihnen, ein neues Konto hinzuzufügen **Enedis Linky**.

Füllen Sie auf der Ausrüstungsseite das Feld aus'**Login** ebenso wie **Passwort** Ihres Kundenkontos *Enedis* Klicken Sie dann auf die Schaltfläche **Speichern**.

Das Plugin überprüft dann die korrekte Verbindung zur Site *Enedis* und abrufen und in den Verlauf einfügen :
- **gezogene Kraft** : die 48 Werte des Vortages *(1 Wert pro halbe Stunde)*,
- **Täglicher Verbrauch** : die letzten 30 Tage,
- **monatlicher Verbrauch** : die letzten 12 Monate,
- **Jahresverbrauch** : die letzten 3 Jahre.

>**Notiz**     
>Daten werden nur hinzugefügt, wenn sie in Ihrem Kundenkonto verfügbar sind *Enedis*.
