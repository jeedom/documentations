# Plugin Generic Type

## Introduction

The Generic Type Plugin allows users to create their own generic types in Jeedom from an excel file, a JSON file or by hand.

## Plugin setup

It is necessary to enter a suffix of generic types in the plugin configuration (example : MAJEEDOM)

![Plugin setup](./images/configuration_plugin.png)

## Plugin management

![Plugin management](./images/gestion_plugin.png)

1. Import JSON/XLS fileX : allows you to add a list of generic types from an xslx file

![Import XLSX](./images/import_xlsx.png)

or a JSON file

```json
{
    "PUMP_STATE_MAJEEDOM": {
        "name": "Pump State (MAJEEDOM)",
        "family": "PUMP (MAJEEDOM)",
        "familyid": "PUMP _MAJEEDOM",
        "type": "Info",
        "subType": "binary",
        "genTypePerso_type": true
    },
    "PUMP_ON_MAJEEDOM": {
        "name": "Pump On (MAJEEDOM)",
        "family": "PUMP (MAJEEDOM)",
        "familyid": "PUMP _MAJEEDOM",
        "type": "Action",
        "subType": "other",
        "genTypePerso_type": true
    },
    "PUMP_OFF_MAJEEDOM": {
        "name": "Pump Stop (MAJEEDOM)",
        "family": "PUMP (MAJEEDOM)",
        "familyid": "PUMP _MAJEEDOM",
        "type": "Action",
        "subType": "other",
        "genTypePerso_type": true
    }
}
```

2. Import configuration in JSON : allows you to apply a configuration list to commands with this generic type. 
### The list of configurations is as follows : 

#### Historique
- Historiser
- Smoothing mode

#### Calculation and Rounding
- Arrondi

#### Unité
- Unité

#### Autres
- Repeat identical values
- Min
- Max
- Dashboard widget
- Mobile Widget

### JSON example :

```json
{
    "WATER_CONSUMPTION_2_MAJEEDOM": {
        "isHistorized": "0",
        "historizeMode": "none",
        "uniteValue": "°C"
    },
    "WATER_CONSUMPTION_MAJEEDOM": {
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
```

3. Export configuration in JSON : allows you to download the list of configurations in order to import it to another box for example.

4. Upload JSON/XLS fileX : allows you to download the list of previously imported XLSX/JSON files.

5. Delete everything : allows you to delete all generic types specific to the box.


## Overview of generic types associated with this plugin

![Apercu du plugin](./images/apercu_plugin.png)

1. Add : allows you to add a generic type manually.

2. Reverse : allows you to reverse the selection of generic types in the table.

3. Download : allows you to download the selected generic types or all (if no selection).

4. Delete : allows you to delete the selected generic type(s)).

5. Edit : allows you to modify the generic type

## Applying the generic type to commands

1. Enter the desired configuration

![Configuration du kind générique](./images/configuration_type_generique.png)

2. Select the list of commands to apply this generic type to them

![Liste des commandes](./images/liste_commandes.png)