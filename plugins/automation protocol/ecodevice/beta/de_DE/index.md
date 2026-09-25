Präsentation
============

Mit diesem Plugin können Sie GCE Ecodevice-Karten verwalten.

Ursprünglich wurde dieses Plugin erstellt, um GCE Ecodevices zu verbinden.

Im Dashboard sichtbare Daten :
-----------------------------------

-   '''Tele-Informationsschalter '''

![ecodevice screenshot2](../images/ecodevice_screenshot2.jpg)

-   '''Impulszähler'''

![ecodevice screenshot3](../images/ecodevice_screenshot3.jpg)

Aktualisierungsrate
-----------------------------

Das Plugin aktualisiert diese Daten auf zwei Arten :

Die Daten werden vom Plugin jede Minute für alle abgerufen
die Zähler. Eine höhere Frequenz ist nicht möglich.

Für Durchflussraten, Momentanverbrauch und Scheinleistung a
Die Erfassung erfolgt durch einen Daemon gemäß der konfigurierten Häufigkeit
Plugin-Level. Bitte beachten Sie, dass ein starker Rückgang einen großen Rückgang erzeugt
Überlastung Ihres Jeedom-Servers.

Installation / Einrichtung
========================

Wir werden jetzt ein Gerät konfigurieren. Klicken Sie dazu auf
on '' 'Plugins / Hausautomationsprotokoll / Öko-Gerät'''.

Klicken Sie dann oben links auf die Schaltfläche "'' 'Hinzufügen eines
équipement'''".

Geben Sie dann den Namen des Geräts ein (z. Ecodevice 1).

Dann definieren :

-   '''Übergeordnetes Objekt'''

-   '''Kategorie '' '(optional)

-   '''Aktivieren Sie '' '(überprüfen Sie, ob das Gerät sonst nicht verwendet werden kann)

-   '''Sichtbar '' '(optional, wenn Sie es nicht sichtbar machen möchten
    das Dashboard)

-   '''IP-Adresse'''

-   '''Port'''

-   '''Compte'''

-   '''Passwort'''

![ecodevice screenshot1](../images/ecodevice_screenshot1.jpg)

Sie finden alle Elemente der Karte im Menü unter
links durch Klicken auf das Symbol.

Hier ist die Zählerkonfigurationsseite. Solange der Zählertyp
ist nicht definiert, Aufträge werden nicht erstellt.

![ecodevice screenshot4](../images/ecodevice_screenshot4.jpg)

Hier ist die Konfigurationsseite für eine Tele-Informationseingabe. Solange die
Vertragsart ist nicht definiert, Aufträge werden nicht angelegt.

![ecodevice screenshot5](../images/ecodevice_screenshot5.jpg)

FAQ
===

Klicken Sie im linken Menü auf das folgende Symbol
Zugang : ![die](../images/acces_sous_indicateur.jpg)

Standardmäßig ist es jede Minute. Es ist möglich zu konfigurieren
Drücken Sie das Ecodevice manuell auf. Für Belastungen Verbrauch
Momentane und scheinbare Kraft kann mehr gesammelt werden
häufig abhängig vom Dämon.

Klicken Sie auf das Symbol links neben dem Kartennamen in der Liste von
gauche.

Um den Kraftstoffdurchfluss in einer Betriebsstunde zu berechnen,
Kennen Sie die Markierung Ihrer Kraftstoffdüse. Dafür du
Informationen finden Sie in [dem Dokument
suivant](http://fr.cd.danfoss.com/PCMPDF/DKBDPD060A204.pdf).

Der angegebene Wert ist in USgal / Stunde mit der Entsprechung in kg / h angegeben.

Für die Dichte des Kraftstoffs können wir 820 kg / m³ und einen Druck von 7 nehmen
bar.

Wenn Sie also eine Düse mit der Markierung 0 haben.65S : 2,67 kg / h (abhängig von
Danfoss Tisch). 2,67 x 0,82 = 2,1894 Liter pro Stunde. Dies gibt eine
"ungefähre" Angabe Ihres Verbrauchs.

Ja, es wurde nicht von mir geschrieben, hat aber den Verdienst zu existieren.
Danke an den Herausgeber.
<http://blog.domadoo.fr/guides/jeedom-guide-dutilisation-plugin-ecodevice/>
