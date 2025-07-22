# Virtuelles Zähler-Plugin

Das Plugin **Virtueller Schalter** ermöglicht Ihnen die Erstellung von Energiezählern in Kilowattstunden aus Rohindizes *(Wh/kWh)* und/oder Befugnisse *(W/kW)*, sei es zum Einzeltarif oder zu Haupt-/Nebenverkehrszeiten. Mit diesem Plugin können Sie auch Zähler pro Benutzer erstellen *(Angepasst/OCPP)*.

>**IMPORTANT**
>
>Les options relatives au protocole OCPP ne sont visibles que **si le plugin OCPP est installé**.

# Configuration

## Plugin-Setup

![Plugin-Setup](./images/config_plugin.jpg)

- **Standardpreise**: Wählen Sie Standardpreise für virtuelle Zähler aus *(Einzeltarif oder Haupt-/Nebenverkehrszeiten)*.
- **Preisumschaltung**: Bei Standardpreisen in Haupt-/Nebenverkehrszeiten wählen Sie den Befehl „Standardpreis zum Umschalten von Informationen/Binärdaten“ aus *(1=Hauptverkehrszeiten/0=Nebenverkehrszeiten)*.
- **OCPP**:
  - **Automatische Erstellung von Zählern**: Aktivieren Sie das Kontrollkästchen, um automatisch Zähler pro Benutzer für jede neue OCPP-Transaktion zu erstellen.
  - **Forcer**: Crée instantanément tous les compteurs OCPP des utilisateurs autorisés sans devoir attendre une transaction.

## Gerätekonfiguration

Um einen neuen virtuellen Zähler hinzuzufügen, klicken Sie auf die Schaltfläche **+Hinzufügen**.

- **Zählertyp**: Wählen Sie den Zählertyp aus *()*.
- **Preise**: Passen Sie ggf. die Preise an.
- **Preisumschaltung**: Passen Sie bei Spitzen-/Nebenzeitenpreisen ggf. den Befehl zum Umschalten zwischen Info- und binärer Preisgestaltung an.

---

- **Kennung**: Geben Sie bei benutzerdefinierten oder OCPP-Zählern die Benutzerkennung an.

### Zu verarbeitende Daten

Virtuelle Zähler vom Typ **OCPP** Transaktionsdaten für jeden Benutzer automatisch abrufen.

Für andere müssen Sie auf die Schaltfläche klicken **Bestellungen verwalten** des Abschnitts **Zu verarbeitende Daten** Dann **Fügen Sie einen Eintrag hinzu**.

- **Standardzähler**:

  ![Daten compteur standard](./images/default_input.jpg)

	- **Daten**: Info/digitale Kontrolle der zu verarbeitenden Rohdaten.
	- **Einheit**: Wählen Sie das Gerät aus, wenn es nicht automatisch erkannt wird *(Wh/kWh/W/kW)*.

- **Benutzerdefinierte Zähler**:

  ![Daten compteur personnalisé](./images/custom_input.jpg)

	- **Daten**: Info/digitale Kontrolle der zu verarbeitenden Rohdaten.
	- **Einheit**: Wählen Sie das Gerät aus, wenn es nicht automatisch erkannt wird *(Wh/kWh/W/kW)*.
	- **Kennung**: Schließen Sie den Befehl info/other ab und geben Sie dabei die Kennung des aktuellen Benutzers an *(Damit die Transaktion erfasst werden kann, muss der Wert mit der auf Geräteebene definierten Kennung übereinstimmen)*.

## Commandes

Les commandes suivantes sont créées, en fonction de la tarification:

- **Einzelpreis**:
  - **Index** *(Info/numerisch in kWh)*.

- **Haupt-/Nebenverkehrszeiten**:
  - **Spitzenstundenindex** *(Info/numerisch in kWh)*.
  - **Index der Stunden außerhalb der Hauptverkehrszeiten** *(Info/numerisch in kWh)*.
  - **Index total** *(Info/numerisch in kWh)*.

Et en fonction du type de compteur:

- **Compteurs OCPP et compteurs personnalisés *(si données brutes en W ou kW)***:
  - **Puissance** *(Info/numérique en W)*.
