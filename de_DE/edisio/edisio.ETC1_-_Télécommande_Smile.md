# Edisio ETC1

**Das Modul**

![etc1.module 1](images/etc1/etc1.module-1.jpg)

![etc1.module 2](images/etc1/etc1.module-2.png)

**Das Jeedom-Visual**

![etc1.vue default](images/etc1/etc1.vue-default.jpg)

## Zusammenfassung 

Les télécommandes “Smile” ont un canal, elles sont idéales pour la table de chevet, salle de bain et surtout pour les enfants, car celles-ci sont très robustes grâce au matériau utilisé. Ultra simples et à la fois “fun” elles ont pour but d'être pratiques dans l'habitat. Es gibt sie in drei verschiedenen Farben.

Sie lassen sich einfach mit den verschiedenen Empfängern verbinden und können so Ein/Aus-Beleuchtung, variable Beleuchtung, Rollläden, Tore, Garagentore steuern. Erhältlich in 3 Farben.

Darüber hinaus ist die Interaktion mit anderen Protokollen möglich, es kann mit Empfängern der Marke Edisio, mit Jeedom, aber auch mit jedem Z-Wave-Empfänger in Ihrem Netzwerk interagieren.

## Fonctions

-   Art der Verwendung : Beleuchtung, Dimmer
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Eigenschaften

-   Mod-Typ : Edisio-Sender
-   Einspeisung : 3VDC (Lithiumbatterie CR2032)
-   Kanäle : 1
-   Funkprotokoll : 868,3MHz
-   Reichweite in offenen Feldern : 100M
-   Betriebstemperatur : -10 °C +50 °C
-   Maße : 65 x 18 mm
-   Stärke des Schutzes : IP64

![etc1.dimmension](images/etc1/etc1.dimmension.png)

## Moduldaten

-   Markieren : Edisio Smart Home
-   Nachname : ETC1
-   Bezug : P01/Y01/L01

## Allgemeine Einrichtung

Informationen zum Konfigurieren des Edisio-Plug-ins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Damit Jeedom Ihre Sendermodule automatisch erstellt, vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren.

### Betriebsdiagramm

So funktioniert die Fernbedienung :

![etc1.diagramme](images/etc1/etc1.diagramme.jpg)

### Batterieersatz

Gehen Sie wie folgt vor, um die Batterie in Ihrer Fernbedienung auszutauschen :

![etc1.remplacement pile](images/etc1/etc1.remplacement-pile.jpg)

## Zuordnung der Fernbedienung zu Jeedom

Die Zuordnung eines Edisio-Senders erfolgt einfach und automatisch. Drücken Sie einfach die Taste auf Ihrer Fernbedienung.

![Aufträge](images/etc1/etc1.touche-c.jpg)

Sobald Ihre Ausrüstung verknüpft ist, sollten Sie diese erhalten :

![etc1.general](images/etc1/etc1.general.jpg)

### Commandes

Sobald Ihre Ausrüstung erstellt ist, sollten Sie die mit dem Modul verknüpften Befehle erhalten :

![Aufträge](images/etc1/etc1.commandes.jpg)

Hier ist die Liste der Befehle :

-   bt01 : Dies ist der Befehl, mit dem Sie mit Taste 1 interagieren können
-   Batterie : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, sind verschiedene Informationen verfügbar :

![Aufträge](images/etc1/etc1.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte aufgezeichnete Kommunikation zwischen Jeedom und dem Mikromodul an
-   Batterie : Zeigt den Batteriestatus der Batteriemodule an
-   Status : Gibt den Status des Moduls zurück

### Utilisation

Sobald Ihre Fernbedienung konfiguriert ist, können Sie mit dem Jeedom Scenario-Plugin mit Ihrer Fernbedienung auf Jeedom und seinen Geräten interagieren.

> **Notiz**
>
> Die Fernbedienung verfügt über eine binäre Statusrückmeldung.
