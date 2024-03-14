# Generischer Plugin-Typ

## Introduction

Mit dem Generic Type Plugin können Benutzer ihre eigenen generischen Typen in Jeedom aus einer Excel-Datei, einer JSON-Datei oder von Hand erstellen.

## Plugin-Setup

Es ist notwendig, in der Plugin-Konfiguration ein Suffix generischer Typen einzugeben (Beispiel : MAJEEDOM)

![Plugin-Setup](./images/configuration_plugin.png)

## Plugin-Verwaltung

![Plugin-Verwaltung](./images/gestion_plugin.png)

1. JSON/XLS-Datei importierenX : ermöglicht Ihnen das Hinzufügen einer Liste generischer Typen aus einer XSLX-Datei

![Import XLSX](./images/import_xlsx.png)

oder eine JSON-Datei

„json
{
    "PUMP_STATE_MAJEEDOM": {
        "name": "Pumpenzustand (MAJEEDOM)",
        "family": "PUMPE (MAJEEDOM)",
        "familyid": "PUMPE _MAJEEDOM",
        "type": "Info",
        "subType": "binary",
        "genTypePerso_type": true
    },
    "PUMP_ON_MAJEEDOM": {
        "name": "Pumpe an (MAJEEDOM)",
        "family": "PUMPE (MAJEEDOM)",
        "familyid": "PUMPE _MAJEEDOM",
        "type": "Action",
        "subType": "other",
        "genTypePerso_type": true
    },
    "PUMP_OFF_MAJEEDOM": {
        "name": "Pumpenstopp (MAJEEDOM)",
        "family": "PUMPE (MAJEEDOM)",
        "familyid": "PUMPE _MAJEEDOM",
        "type": "Action",
        "subType": "other",
        "genTypePerso_type": true
    }
}
„

2. Konfiguration in JSON importieren : ermöglicht Ihnen, eine Konfigurationsliste auf Befehle mit diesem generischen Typ anzuwenden. 
### Die Liste der Konfigurationen ist wie folgt : 

#### Historique
- Historiser
- Glättungsmodus

#### Berechnung und Rundung
- Arrondi

#### Unité
- Unité

#### Autres
- Wiederholen Sie identische Werte
- Min
- Max
- Dashboard-Widget
- Mobiles Widget

### JSON-Beispiel :

„json
{
    "WATER_CONSUMPTION_2_MAJEEDOM": {
        "isHistorized": "0",
        "historizeMode": "none",
        "uniteValue": "°C"
    },
    "WASSERVERBRAUCH_MAJEEDOM": {
        "isHistorized": "0",
        "historizeMode": "avg",
        "historizeRound": "5",
        "uniteValue": "kwh"
    },
    "GAS_CONSUMPTION_MAJEEDOM": {
        "isHistorized": "1",
        "historizeMode": "avg",
        "historizeRound": "10",
        "uniteValue": "m3"
    }
}
„

3. Konfiguration in JSON exportieren : ermöglicht es Ihnen, die Liste der Konfigurationen herunterzuladen, um sie beispielsweise in eine andere Box zu importieren.

4. Laden Sie die JSON/XLS-Datei hochX : ermöglicht Ihnen das Herunterladen der Liste der zuvor importierten XLSX/JSON-Dateien.

5. Alles löschen : ermöglicht Ihnen das Löschen aller generischen Typen, die für die Box spezifisch sind.


## Übersicht über generische Typen, die diesem Plugin zugeordnet sind

![Apercu du plugin](./images/apercu_plugin.png)

1. Hinzufügen : ermöglicht Ihnen das manuelle Hinzufügen eines generischen Typs.

2. Rückwärts : ermöglicht es Ihnen, die Auswahl generischer Typen in der Tabelle umzukehren.

3. Herunterladen : Ermöglicht das Herunterladen der ausgewählten generischen Typen oder aller (falls keine Auswahl vorhanden ist)).

4. Löschen : Ermöglicht das Löschen der ausgewählten generischen Typen).

5. Bearbeiten : Ermöglicht Ihnen, den generischen Typ zu ändern

## Anwenden des generischen Typs auf Befehle

1. Geben Sie die gewünschte Konfiguration ein

![Configuration du Art générique](./images/configuration_type_generique.png)

2. Wählen Sie die Liste der Befehle aus, um diesen generischen Typ auf sie anzuwenden

![Liste des commandes](./images/liste_commandes.png)