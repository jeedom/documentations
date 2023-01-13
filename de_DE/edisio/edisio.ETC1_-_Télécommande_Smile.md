# Edisio ETC1

**Das Modul**

![etc1.module 1](images/etc1/etc1.module-1.jpg)

![etc1.module 2](images/etc1/etc1.module-2.png)

**Das Jeedom Visual**

![etc1.vue default](images/etc1/etc1.vue-default.jpg)

## Zusammenfassung 

Les télécommandes “Smile” ont un canal, elles sont idéales pour la table de chevet, salle de bain et surtout pour les enfants, car celles-ci sont très robustes grâce au matériau utilisé. Ultra simples et à la fois “fun” elles ont pour but d'être pratiques dans l'habitat. Sie existieren in drei verschiedenen Farben.

Sie lassen sich leicht an die verschiedenen Empfänger anschließen und können daher Ein / Aus-Lichter, variable Lichter, Rollläden, Tore und Garagentore steuern. Erhältlich in 3 Farben.

Darüber hinaus ist die Interaktion mit anderen Protokollen möglich. Sie kann mit Empfängern der Marke Edisio, mit Jeedom, aber auch mit jedem Z-Wave-Empfänger in Ihrem Netzwerk interagieren.

## Fonctions

-   Art der Verwendung : Beleuchtung, Dimmer
-   Klein, diskret und ästhetisch
-   Benutzerfreundlichkeit und Installation

## Technische Daten

-   Modultyp : Edisio Sender
-   Versorgung : 3VDC (CR2032 Lithiumbatterie)
-   Kanäle : 1
-   Funkprotokoll : 868,3 MHz
-   Reichweite im freien Feld : 100M
-   Betriebstemperatur : -10 ° C + 50 ° C
-   Abmessungen : 65 x 18 mm
-   Schutzart : IP64

![etc1.dimmension](images/etc1/etc1.dimmension.png)

## Moduldaten

-   Machen Sie : Edisio Smart Home
-   Name : ETC1
-   Referenz : P01 / Y01 / L01

## Allgemeine Konfiguration

Informationen zum Konfigurieren des Edisio-Plugins und zum Zuordnen eines Moduls zu Jeedom finden Sie hier [Dokumentation](https://doc.jeedom.com/de_DE/plugins/automation%20protocol/edisio/).

> **Wichtig**
>
> Vergessen Sie nicht, die Option in der Plugin-Konfiguration zu aktivieren, damit Jeedom Ihre Sendermodule automatisch erstellt.

### Funktionsplan

So funktioniert die Fernbedienung :

![etc1.diagramme](images/etc1/etc1.diagramme.jpg)

### Batteriewechsel

Gehen Sie wie folgt vor, um die Batterie Ihrer Fernbedienung auszutauschen :

![etc1.remplacement pile](images/etc1/etc1.remplacement-pile.jpg)

## Assoziation der Fernbedienung mit Jeedom

Die Zuordnung eines Edisio-Senders ist einfach und automatisch. Drücken Sie einfach die Taste auf Ihrer Fernbedienung.

![Befehle](images/etc1/etc1.touche-c.jpg)

Sobald Sie Ihre zugehörige Ausrüstung haben, sollten Sie diese erhalten :

![etc1.general](images/etc1/etc1.general.jpg)

### Commandes

Sobald Ihre Ausrüstung erstellt ist, sollten Sie die mit dem Modul verknüpften Befehle erhalten :

![Befehle](images/etc1/etc1.commandes.jpg)

Hier ist die Liste der Befehle :

-   bt01 : Mit diesem Befehl können Sie mit Schaltfläche 1 interagieren
-   Batterie : Zeigt den Batteriestatus an

### Informations

Sobald Ihre Ausrüstung mit Jeedom verknüpft ist, stehen verschiedene Informationen zur Verfügung :

![Befehle](images/etc1/etc1.informations.jpg)

-   Schaffung : Gibt das Datum an, an dem das Gerät erstellt wurde
-   Kommunikation : Zeigt die letzte zwischen Jeedom und dem Mikromodul aufgezeichnete Kommunikation an
-   Batterie : Zeigt den Batteriestatus der Batteriemodule an
-   STATUS : Gibt den Status des Moduls zurück

### Utilisation

Sobald Ihre Fernbedienung konfiguriert ist, können Sie mit dem Jeedom-Szenario-Plugin mit Ihrer Fernbedienung auf Jeedom und seinen Geräten interagieren.

> **Notiz**
>
> Die Fernbedienung mit binärer Statusrückmeldung.
