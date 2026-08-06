# Plugin Agenda

Le plugin **Agenda** permet de gérer des agendas et de déclencher des actions en début et/ou fin d'évènement.

# Configuration

## Configuration du plugin

Ce plugin ne nécessite pas de configuration particulière et doit simplement être activé après l'installation.

## Configuration des équipements

Les équipements sont accessibles à partir du menu **Plugins → Organisation → Agenda**.

Sur cette page vous retrouvez la liste de vos Agendas. Cliquez sur un agenda pour accéder à la configuration de l'équipement correspondant :

- **Nom de agenda** : Nom de l'équipement Agenda.
- **Objet parent** : Indique l’objet parent auquel appartient l’équipement.
- **Catégorie** : Permet de choisir la catégorie de l'équipement.
- **Options** :
  - **Activer** : Permet de rendre l'équipement actif.
  - **Visible** : Rend l'équipement visible.

- **Widget** :
  - **Nombre de jours** : défini le nombre de jours maximum à afficher sur le widget.
  - **Nombre d’évènements** : défini le nombre d’évènements maximum à afficher sur le widget.

- **Liste des évènements de l’agenda** : affiche la liste de tous les évènements de l’agenda *(un clic sur le nom permet d’éditer l’évènement)*.

L'onglet **Agenda** permet d'afficher une vue type agenda incluant tous les évènements. Vous pouvez vous déplacer dans l'agenda, choisir de l’afficher par année, mois, ,semaine, jour ou planning à la semaine. Un clic sur un évènement ouvre la fenêtre d’édition de l'évènement concerné.

# Evènements

## Création d'un évènement

Pour créer un nouvel évènement, cliquez sur le bouton **Ajouter évènement** depuis la page de configuration de l'agenda auquel l'évènement doit être rattaché ou sur le bouton **Dupliquer** depuis la fenêtre de configuration d'un évènement appartenant au même agenda.

## Configuration des évènements

La fenêtre de création/configuration des évènements permet de définir les paramètres, les actions et la récurrence propres à chaque évènement. Sur le premier onglet, vous retrouvez :

- **Nom de l’événement** : nom de votre événement.
- **Masquer sur le widget** : permet de ne pas afficher cet évènement sur le widget.
- **Icône** : permet d’ajouter une icône devant le nom de l'évènement *(cliquer sur le bouton "Choisir une icône")*.
- **Couleur de fond** : permet de choisir la couleur de fond de l'événement *(cocher la case pour un fond transparent)*.
- **Couleur du texte** : permet de choisir la couleur du texte l'événement.

En haut à droite de la fenêtre d'édition des évènements se trouvent 3 boutons:

- **Dupliquer** : permet de dupliquer l'évènement pour en créer un nouveau *(pensez à sauvegarder le nouvel évènement ainsi généré)*.
- **Enregistrer** : permet de sauvegarder l'évènement.
- **Supprimer** : permet de supprimer l'évènement complet ou seulement une occurrence.

## Actions de début/fin

Dans cet onglet, vous allez pouvoir définir les actions à effectuer au début et/ou à la fin de l’évènement. Pour ajouter une action, il suffit de cliquer sur le bouton **+ Action de début/fin**, vous pouvez ajouter autant d'actions que vous le souhaitez.

![Ajouter des actions](../images/calendar_addActions.png)

Les actions peuvent être des commandes Jeedom standards ou bien [des commandes spécifiques de scénario](https://doc.jeedom.com/fr_FR/core/4.1/scenario#Les%20commandes%20sp%C3%A9cifiques).

>**ASTUCE**
>
>Il est possible de modifier l’ordre des actions par glisser/déposer.

## Programmation des évènements

C’est au sein de cet onglet que se trouve toute la gestion temporelle de votre évènement :

- **Dates** :
  - **Début** : date de début de l'évènement.
  - **Fin** : date de fin de l'évènement *(l'icône en bout de ligne permet de définir l'évènement sur toute la journée)*.
- **Inclure par date** : permet d'ajouter une date d’occurrence. Vous pouvez en définir plusieurs en les séparant par des ``, (virgules)`` *(exemple: AAAA-MM-JJ,AAAA-MM-JJ)*. Il est également possible de définir une plage de dates avec ``: (deux points)`` *(exemple: AAAA-MM-JJ:AAAA-MM-JJ)*.
- **Inclure par agenda** : permet d’inclure des occurrences en fonction de celles d'un autre agenda ou d'un autre évènement. Par exemple, vous avez un événement ``A``, répété tous les lundis, que vous incluez dans votre évènement courant : alors votre évènement courant sera également répété tous les lundis.
- **Exclure par date** : idem que **Inclure par date** mais pour ignorer des occurrences.
- **Exclure par agenda** : permet de mettre en exclusion cet événement en fonction d’un autre agenda ou évènement *(pour éviter que 2 événements contradictoires se retrouvent ensembles par exemple)*.

>**INFORMATION**
>
>Les options **Exclure par date** et **Exclure par agenda** ne sont accessibles que si la répétition de l'évènement est activée.

## Répétition des évènements

La répétition va vous permettre de paramétrer les occurrences de vos évènements exactement comme vous le désirez :

- **Activer** : cocher la case pour activer la répétition et afficher les options correspondantes.
- **Mode - Répétition simple** :
  - **Répéter tous les** : permet de définir la fréquence de répétition de l’évènement *(tous les 3 jours, tous les 2 mois, etc…​)*.
  - **Uniquement les** : permet de restreindre la répétition à certains jours de la semaine.
- **Mode - Répétition avancée** :
  - **Fréquence** : permet de choisir une répétition tous les 2ème lundis du mois par exemple...
- **Restriction** : permet d’exclure les jours fériés ou de restreindre l’événement aux jours fériés / semaines paires / semaines impaires uniquement.
- **Jusqu’à** : dernière date d’occurrence de l’événement.

>**INFORMATION**
>
>Les jours fériés concernent uniquement la France métropolitaine.

# Agenda, commandes et scénario

Un agenda possède plusieurs commandes :

- **En cours** : donne la liste des évènements en cours séparés par des virgules. Pour l’utiliser dans un scénario, le plus simple est d’utiliser l’opérateur *"contient"* (``matches``) ou *"ne contient pas"* (``not matches``) *(exemple : ``[Appartement][test][En cours] matches "/Anniv/"`` sera vrai si dans la liste des évènements en cours il y a "Anniv")*.
- **Ajouter une date** : permet, depuis un scénario, d'ajouter une date à un évènement. Vous pouvez ajouter plusieurs dates en les séparant par des virgules *(attention si vous changez le nom de l'évènement il faudra le modifier dans le scénario)*.
- **Retirer une date** : permet, depuis un scénario, de retirer une date à un évènement. Vous pouvez retirer plusieurs dates en les séparant par des virgules *(attention si vous changez le nom de l'évènement il faudra le modifier dans le scénario)*.

>**INFORMATION**
>
>Il est possible d’utiliser la commande "En cours" comme déclencheur de scénario. Chaque mise à jour de l’information déclenchera l’exécution du scénario, il est donc préférable d’utiliser cette commande dans un scénario programmé avec un test sur la valeur.

>**IMPORTANT**
>
>Attention il ne faut surtout pas faire d'evenement à répétition qui se chevauge lui meme, ce genre de cas n'est pas géré par le plugin. Exemple un evenement qui dure 48h et qui se répéte tous les jours.

# API

L'api se repose sur l'api jsonrpc, elle propose pour le plugin les méthodes suivantes:

- **event::getAllCalendarAndEvents** permet de récupérer l'ensemble des agendas et des évènements
- **event::getAllEvents** permet de récupérer tous les évènements d'un calendrier
- **event::byId** permet de récupérer un évènement en fonction de son ID
- **event::save** permet de créer / modifier un évènement
- **event::remove** permet de supprimer un évènement

## event::getAllCalendarAndEvents

**Paramètres d'entrée**
/Aucun/

```json
{
    "jsonrpc": "2.0",
    "method": "event::getAllCalendarAndEvents",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcpumplfAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar"
    }
}
```

**Exemple de résultat**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": [
    {
      "id": "641",
      "name": "labo",
      "logicalId": "",
      "generic_type": null,
      "object_id": null,
      "eqType_name": "calendar",
      "isVisible": "0",
      "isEnable": "1",
      "configuration": {
        "createtime": "2023-03-16 14:40:50",
        "nbWidgetDay": 7
      },
      "timeout": null,
      "category": [],
      "display": {
        "backGraph::info": 0
      },
      "order": "9999",
      "comment": null,
      "tags": null,
      "status": {
        "lastCommunication": "2023-03-17 11:02:46",
        "timeout": 0,
        "warning": 0,
        "danger": 0
      },
      "cache": [],
      "events": [
        {
          "id": "2",
          "eqLogic_id": "641",
          "cmd_param": {
            "eventName": "Mon event",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "text_color": "#ffffff",
            "start": [],
            "end": [],
            "in_progress": 1
          },
          "startDate": "2023-03-17 10:30:00",
          "endDate": "2023-03-17 14:30:00",
          "repeat": {
            "includeDate": "",
            "includeDateFromCalendar": "",
            "excludeDate": "",
            "excludeDateFromCalendar": "",
            "enable": "0",
            "mode": "simple",
            "positionAt": "first",
            "day": "monday",
            "freq": 0,
            "unite": "days",
            "excludeDay": {
              "1": "1",
              "2": "1",
              "3": "1",
              "4": "1",
              "5": "1",
              "6": "1",
              "7": "1"
            },
            "nationalDay": "all"
          },
          "until": null
        },
        {
          "id": "3",
          "eqLogic_id": "641",
          "cmd_param": {
            "eventName": "Mon event 2",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "text_color": "#ffffff",
            "start": [],
            "end": [],
            "in_progress": 0
          },
          "startDate": "2023-03-17 11:30:00",
          "endDate": "2023-03-17 11:45:00",
          "repeat": {
            "includeDate": "",
            "includeDateFromCalendar": "",
            "excludeDate": "",
            "excludeDateFromCalendar": "",
            "enable": "0",
            "mode": "simple",
            "positionAt": "first",
            "day": "monday",
            "freq": 0,
            "unite": "days",
            "excludeDay": {
              "1": "1",
              "2": "1",
              "3": "1",
              "4": "1",
              "5": "1",
              "6": "1",
              "7": "1"
            },
            "nationalDay": "all"
          },
          "until": null
        },
        {
          "id": "4",
          "eqLogic_id": "641",
          "cmd_param": {
            "eventName": "Mon event",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "text_color": "#ffffff",
            "start": [],
            "end": [],
            "in_progress": 0
          },
          "startDate": "2023-03-18 10:30:00",
          "endDate": "2023-03-18 14:30:00",
          "repeat": {
            "includeDate": "",
            "includeDateFromCalendar": "",
            "excludeDate": "",
            "excludeDateFromCalendar": "",
            "enable": "0",
            "mode": "simple",
            "positionAt": "first",
            "day": "monday",
            "freq": 0,
            "unite": "days",
            "excludeDay": {
              "1": "1",
              "2": "1",
              "3": "1",
              "4": "1",
              "5": "1",
              "6": "1",
              "7": "1"
            },
            "nationalDay": "all"
          },
          "until": null
        },
        {
          "id": "5",
          "eqLogic_id": "641",
          "cmd_param": {
            "eventName": "Mon event",
            "noDisplayOnDashboard": "0",
            "icon": "",
            "color": "#2980b9",
            "transparent": "0",
            "text_color": "#ffffff",
            "start": [],
            "end": [],
            "in_progress": 0
          },
          "startDate": "2023-03-18 10:40:00",
          "endDate": "2023-03-18 14:50:00",
          "repeat": {
            "includeDate": "",
            "includeDateFromCalendar": "",
            "excludeDate": "",
            "excludeDateFromCalendar": "",
            "enable": "0",
            "mode": "simple",
            "positionAt": "first",
            "day": "monday",
            "freq": 0,
            "unite": "days",
            "excludeDay": {
              "1": "1",
              "2": "1",
              "3": "1",
              "4": "1",
              "5": "1",
              "6": "1",
              "7": "1"
            },
            "nationalDay": "all"
          },
          "until": null
        }
      ]
    }
  ]
}
```

## event::getAllEvents

**Paramètres d'entrée**

- eqLogic_id /int/

```json
{
    "jsonrpc": "2.0",
    "method": "event::getAllEvents",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcpumplfAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar",
        "eqLogic_id": 641
    }
}
```

**Exemple de résultat**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": [
    {
      "id": "2",
      "eqLogic_id": "641",
      "cmd_param": {
        "eventName": "Mon event",
        "noDisplayOnDashboard": "0",
        "icon": "",
        "color": "#2980b9",
        "transparent": "0",
        "text_color": "#ffffff",
        "start": [],
        "end": [],
        "in_progress": 0
      },
      "startDate": "2023-03-17 10:30:00",
      "endDate": "2023-03-17 14:30:00",
      "repeat": {
        "includeDate": "",
        "includeDateFromCalendar": "",
        "excludeDate": "",
        "excludeDateFromCalendar": "",
        "enable": "0",
        "mode": "simple",
        "positionAt": "first",
        "day": "monday",
        "freq": 0,
        "unite": "days",
        "excludeDay": {
          "1": "1",
          "2": "1",
          "3": "1",
          "4": "1",
          "5": "1",
          "6": "1",
          "7": "1"
        },
        "nationalDay": "all"
      },
      "until": null
    },
    {
      "id": "3",
      "eqLogic_id": "641",
      "cmd_param": {
        "eventName": "Mon event 2",
        "noDisplayOnDashboard": "0",
        "icon": "",
        "color": "#2980b9",
        "transparent": "0",
        "text_color": "#ffffff",
        "start": [],
        "end": [],
        "in_progress": 0
      },
      "startDate": "2023-03-17 11:30:00",
      "endDate": "2023-03-17 11:45:00",
      "repeat": {
        "includeDate": "",
        "includeDateFromCalendar": "",
        "excludeDate": "",
        "excludeDateFromCalendar": "",
        "enable": "0",
        "mode": "simple",
        "positionAt": "first",
        "day": "monday",
        "freq": 0,
        "unite": "days",
        "excludeDay": {
          "1": "1",
          "2": "1",
          "3": "1",
          "4": "1",
          "5": "1",
          "6": "1",
          "7": "1"
        },
        "nationalDay": "all"
      },
      "until": null
    }
  ]
}
```

## event::byId

**Paramètres d'entrée**

- event_id /int/

```json
{
    "jsonrpc": "2.0",
    "method": "event::byId",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcpumplfAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar",
        "event_id": 5
    }
}
```

**Exemple de résultat**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": {
    "id": "5",
    "eqLogic_id": "641",
    "cmd_param": {
      "eventName": "Mon event encore modifié",
      "noDisplayOnDashboard": "0",
      "icon": "",
      "color": "#2980b9",
      "transparent": "0",
      "text_color": "#ffffff",
      "start": [
        {
          "options": {
            "enable": "1",
            "background": "0"
          },
          "cmd": "#2507#"
        },
        {
          "options": {
            "enable": "1",
            "background": "0",
            "level": "success",
            "message": "salut"
          },
          "cmd": "alert"
        }
      ],
      "end": [
        {
          "options": {
            "enable": "1",
            "background": "0"
          },
          "cmd": "#2507#"
        }
      ],
      "in_progress": 0
    },
    "startDate": "2023-03-18 10:19:00",
    "endDate": "2023-03-18 11:50:00",
    "repeat": {
      "includeDate": "",
      "includeDateFromCalendar": "",
      "excludeDate": "",
      "excludeDateFromCalendar": "",
      "enable": "0",
      "mode": "simple",
      "positionAt": "first",
      "day": "monday",
      "freq": 0,
      "unite": "days",
      "excludeDay": {
        "1": "1",
        "2": "1",
        "3": "1",
        "4": "1",
        "5": "1",
        "6": "1",
        "7": "1"
      },
      "nationalDay": "all"
    },
    "until": null
  }
}
```

## event::save

**Paramètres d'entrée**

- event /json object/

```json
{
    "jsonrpc": "2.0",
    "method": "event::save",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcpumplfAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar",
        "event":    {
  "eqLogic_id": "641",
  "id": "5",
  "cmd_param": {
    "eventName": "Mon event encore modifié",
    "noDisplayOnDashboard": "0",
    "icon": "",
    "color": "#2980b9",
    "transparent": "0",
    "text_color": "#ffffff",
    "start": [
      {
        "options": {
          "enable": "1",
          "background": "0"
        },
        "cmd": "#[Aucun][ 00:15:bc:00:31:01:01:79][Sirene Off]#"
      },
      {
        "options": {
          "enable": "1",
          "background": "0",
          "level": "success",
          "message": "salut"
        },
        "cmd": "alert"
      }
    ],
    "end": [
      {
        "options": {
          "enable": "1",
          "background": "0"
        },
        "cmd": "#[Aucun][ 00:15:bc:00:31:01:01:79][Sirene Off]#"
      }
    ]
  },
  "startDate": "2023-03-18 10:19:00",
  "endDate": "2023-03-18 11:50:00",
  "repeat": {
    "includeDate": "",
    "includeDateFromCalendar": "",
    "excludeDate": "",
    "excludeDateFromCalendar": "",
    "enable": "0",
    "mode": "simple",
    "positionAt": "first",
    "day": "monday",
    "freq": "0",
    "unite": "days",
    "excludeDay": {
      "1": "1",
      "2": "1",
      "3": "1",
      "4": "1",
      "5": "1",
      "6": "1",
      "7": "1"
    },
    "nationalDay": "all"
  },
  "until": ""
}
    }
}
```

**Exemple de résultat**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": {
    "id": null,
    "eqLogic_id": "641",
    "cmd_param": {
      "eventName": "Mon event encore modifié",
      "noDisplayOnDashboard": "0",
      "icon": "",
      "color": "#2980b9",
      "transparent": "0",
      "text_color": "#ffffff",
      "start": [
        {
          "options": {
            "enable": "1",
            "background": "0"
          },
          "cmd": "#2507#"
        },
        {
          "options": {
            "enable": "1",
            "background": "0",
            "level": "success",
            "message": "salut"
          },
          "cmd": "alert"
        }
      ],
      "end": [
        {
          "options": {
            "enable": "1",
            "background": "0"
          },
          "cmd": "#2507#"
        }
      ],
      "in_progress": 0
    },
    "startDate": "2023-03-18 10:19:00",
    "endDate": "2023-03-18 11:50:00",
    "repeat": {
      "includeDate": "",
      "includeDateFromCalendar": "",
      "excludeDate": "",
      "excludeDateFromCalendar": "",
      "enable": "0",
      "mode": "simple",
      "positionAt": "first",
      "day": "monday",
      "freq": 0,
      "unite": "days",
      "excludeDay": {
        "1": "1",
        "2": "1",
        "3": "1",
        "4": "1",
        "5": "1",
        "6": "1",
        "7": "1"
      },
      "nationalDay": "all"
    },
    "until": null
  }
}
```

## event::remove

**Paramètres d'entrée**

- event_id /int/

```json
{
    "jsonrpc": "2.0",
    "method": "event::remove",
    "params": {
        "apikey": "0EVJcR8UyTBlhUFYbcpumplfAMWBc2aYHtNAc0RPFdeIrlnXBRhnSNqiiQdrR5dt",
        "plugin": "calendar",
        "event_id": 5
    }
}
```

**Exemple de résultat**

```json
{
  "jsonrpc": "2.0",
  "id": 99999,
  "result": "success"
}
```
