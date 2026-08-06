# Telefon Markt Plugin

Plugin zum Senden von SMS und Telefonieren mit automatischen Nachrichten von Jeedom.

> **Wichtig**
>
> Dieses Plugin geht durch den Markt, es ist also ein Cloud-Dienst, für dessen Funktion eine Internetverbindung erforderlich ist.

> **Spitze**
>
> Das Plugin arbeitet mit einem Kreditsystem, 1 SMS = 1 Kredit für Frankreich, sonst 2 Credits, 1 Anruf = 2 Credits für Frankreich, sonst 4 Credits. Sie können Ihr Guthaben überprüfen [hier](https://market.jeedom.com/index.php?v=d&p=profils#services). Bei niedrigen Credits (weniger als 5) wird eine E-Mail an Sie gesendet.

> **Wichtig**
>
> Textnachrichten sind auf 140 Zeichen und Anrufe auf 450 Zeichen begrenzt.

# Plugin Konfiguration

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es nur noch aktivieren. Auf dieser Ebene gibt es keine Konfiguration.

# Gerätekonfiguration

Die Konfiguration der Telefonmarktausrüstung ist über das Menü Plugins → Kommunikation zugänglich.

Sobald ein Ausrüstungsgegenstand hinzugefügt wurde, erhalten Sie ihn :

- **Ausrüstungsname** : Name Ihrer Telefonmarktausrüstung,
- **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört,
- **Kategorie** : Gerätekategorie,
- **Aktivieren** : macht Ihre Ausrüstung aktiv,
- **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar.

Durch Klicken auf die Registerkarte „Bestellungen“ gelangen Sie zur Liste der Bestellungen:

- **Name** : Der im Dashboard angezeigte Name,
- **Typ** : Art des Befehls (Anrufe oder SMS),
- **Anzahl** : Telefonnummer, die angerufen werden soll oder an die eine SMS gesendet werden soll (je nach Typ),
- **Anzeige** : ermöglicht die Anzeige der Bestellung im Dashboard,
- **Test** : Wird zum Testen des Befehls verwendet,
- **Löschen** (Schild -) : ermöglicht das Löschen des Befehls.

  >**Wichtig**
  >Das Hinzufügen von Befehlen (Schaltfläche „Hinzufügen“ oben rechts) ist unbedingt erforderlich, um Anrufe tätigen oder Textnachrichten senden zu können.
