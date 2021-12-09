# Mode Plugin

Plugin zum Verwalten verschiedener Modi einer Wohnung / eines Hauses / eines Zimmers, aber auch der Atmosphäre.

## Plugin Konfiguration

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es nur noch aktivieren. Auf dieser Ebene gibt es keine Konfiguration.

## Gerätekonfiguration

Auf die Konfiguration der Modusausrüstung kann über das Plugin-Menü und dann über die Organisation zugegriffen werden :

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

- **Gerätename Modus** : Name Ihres Gerätemodus,
- **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
- **Aktivieren** : macht Ihre Ausrüstung aktiv,
- **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar,
- **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören).
- **Modus hinzufügen** : Schaltfläche, um einen neuen Modus hinzuzufügen

Unten finden Sie die Liste der Modi. Wenn Sie darauf klicken, können Sie die Aktionen auswählen, die beim Betreten und / oder Verlassen dieses Modus ausgeführt werden sollen.

>**Wichtig**
>
>Seien Sie vorsichtig, wenn Sie einen Modus umbenennen. Es ist wichtig, die Szenarien / Geräte zu überprüfen, die den alten Namen verwendet haben, um sie auf den neuen umzustellen.

## Geräteerstellung

- Klicke auf *Hinzufügen*
- Gib einen Namen
- Wählen Sie l'*Übergeordnetes Objekt*
- Aktivieren Sie die
- Registerkarte auswählen *Modi* um die Modi hinzuzufügen (siehe [die Beispiele](#exemples))

## Exemples

### Verschlussmodus

Beispiel eines Geräts ohne Eingabe- oder Ausgabeaktion in den Modi. Geräte dieses Typs können als Auslöser für ein Szenario oder zur Konditionierung von Aktionen in einem Szenario nützlich sein.

![Mode volet](../images/mode_volet.png)

### Präsenzmodus

Beispiel eines Geräts mit Aktionen, die beim Ändern des Modus definiert wurden.

In diesem Gerät erstellen wir 3 Modi auf der Registerkarte *Modi* Ausrüstung:

- Vorhanden
- Absent
- Vacances

![Mode présence](../images/mode_presence_mode.png)

Beim Umschalten in den Modus *Vorhanden*, Wir möchten, dass der Alarm deaktiviert und die Heizung in den Komfortmodus geschaltet wird (2 Eingabeaktionen).

![Mode présence action entrée](../images/mode_presence_entree.png)

Beim Verlassen des Modus *Vorhanden* in den Modus wechseln *Abwesend* oder *Ferien*, Wir möchten, dass der Alarm aktiviert wird (1 Ausgangsaktion).

![Mode présence action sortie](../images/mode_presence_sortie.png)

Für Modi *Abwesend* und *Ferien*, Wir werden nur für jeden dieser Modi eine Eingabeaktion erstellen, um die Heizung zu verwalten (Eco for the *Abwesend*, Frostschutz für den Modus *Ferien*).

![Mode absent vacances](../images/mode_presence_absent_vacances.png)

#### Fonctionnement

- Wenn wir den Modus verlassen *Vorhanden* in Mode *Abwesend*, Der Alarm wird aktiviert (Aktion zum Beenden *Vorhanden*) und die Heizung schaltet auf eco (Moduseintrittsaktion) *Abwesend*).  
- Wenn wir den Modus verlassen *Vorhanden* in Mode *Ferien*, Der Alarm wird aktiviert (Aktion zum Beenden *Vorhanden*) und die Heizung schaltet auf Frostschutz (Einstiegswirkung der *Ferien*).
- Wenn wir den Modus verlassen *Abwesend* in Mode *Vorhanden*, Der Alarm ist deaktiviert (Eingabeaktion des *Vorhanden*) und die Heizung schaltet auf Komfort (Moduseintritt *Vorhanden*).
- Wenn wir den Modus verlassen *Abwesend* in Mode *Ferien*, Die Heizung geht in Frostschutz (Eintrittswirkung der *Ferien*).
- Wenn wir den Modus verlassen *Ferien* in Mode *Vorhanden*, Der Alarm ist deaktiviert (Eingabeaktion des *Vorhanden*) und die Heizung schaltet auf Komfort (Moduseintritt *Vorhanden*).
- Wenn wir den Modus verlassen *Ferien* in Mode *Abwesend*, Die Heizung schaltet auf Öko (Eingangsaktion des *Abwesend*).

### Anwesenheitsmodus zweimal

Wir haben das vorherige Beispiel geringfügig geändert, um die Filterung nach Aktionen zu veranschaulichen.

![Filtre](../images/mode_presence_filtre.png)

Dazu wird der Alarm beim Verlassen des Modus nicht mehr aktiviert *Vorhanden* aber bei der Eingabe von Modi *Abwesend* und *Ferien*. Nach der Modifikation bekommen wir das :

![Vorhanden](../images/mode_presence_bis_present.png)
![Abwesend](../images/mode_presence_bis_absent.png)
![Ferien](../images/mode_presence_bis_vacances.png)

Hinweis : auf die Modi *Abwesend* und *Ferien*, Der Alarm wird nur aktiviert, wenn Sie aus dem Modus kommen *Vorhanden*. Wenn wir gehen von *Abwesend* beim *Ferien* (und umgekehrt) ist der Alarm bereits aktiviert, sodass die Aktion nicht wiederholt werden muss.

#### Operation bis

- Wenn wir den Modus verlassen *Vorhanden* in Mode *Abwesend*, Der Alarm ist aktiviert (Moduseintragsaktion *Abwesend*) und die Heizung schaltet auf eco (Moduseintrittsaktion) *Abwesend*).  
- Wenn wir den Modus verlassen *Vorhanden* in Mode *Ferien*, Der Alarm ist aktiviert (Moduseintragsaktion *Ferien*) und die Heizung schaltet auf Frostschutz (Einstiegswirkung der *Ferien*).
- Wenn wir den Modus verlassen *Abwesend* in Mode *Vorhanden*, Der Alarm ist deaktiviert (Eingabeaktion des *Vorhanden*) und die Heizung schaltet auf Komfort (Moduseintritt *Vorhanden*).
- Wenn wir den Modus verlassen *Abwesend* in Mode *Ferien*, Die Heizung geht in Frostschutz (Eintrittswirkung der *Ferien*). Der Alarm ist nicht aktiviert.
- Wenn wir den Modus verlassen *Ferien* in Mode *Vorhanden*, Der Alarm ist deaktiviert (Eingabeaktion des *Vorhanden*) und die Heizung schaltet auf Komfort (Moduseintritt *Vorhanden*).
- Wenn wir den Modus verlassen *Ferien* in Mode *Abwesend*, Die Heizung schaltet auf Öko (Eingangsaktion des *Abwesend*).  Der Alarm ist nicht aktiviert.
