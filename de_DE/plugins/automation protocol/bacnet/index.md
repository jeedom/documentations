# Bacnet

## Description

Le plugin Bacnet permet de récupérer les informations de vos équipements Bacnet/IP et d'interagir avec eux depuis votre Jeedom. Il supporte de nombreuses fonctionnalités avancées telles que l'importation de fichiers EDE, l'ajout manuel de points, la visualisation des calendriers (schedules) et bien plus encore.

## Plugin-Konfiguration

Après téléchargement du plugin, il faut tout d'abord l'activer, comme tout plugin Jeedom :

![config](./images/BacnetConfig.png)

Dann müssen Sie die Installation der Abhängigkeiten starten (auch wenn sie OK erscheinen) :

![dependances](./images/BacnetDep.png)

Schließlich müssen wir den Dämon starten :

![demon](./images/BacnetDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](./images/BacnetSocket.png)

Auf derselben Registerkarte müssen Sie den Cron-Wert zum Aktualisieren Ihrer Ausrüstung auswählen.

## Comment déclarer un équipement Bacnet dans Jeedom

### Détection automatique

>**WICHTIG**
>
>Vos équipements BACNET doivent se trouver sur le même réseau que votre Jeedom pour être détectés automatiquement.

Rendez-vous dans le menu « Plugins → Protocole domotique → Bacnet » :



Vous pouvez lancer un scan de type broadcast, qui enverra un whois à tout votre réseau pour trouver les équipements Bacnet. 
Une fenetre s'affichera avec les résultats. 
Vous pourrez scanner ensuite les points du/des device(s) choisis.

Sur une grande installation;un whois global peut perturber les équipements bacnet, il est conseillé alors d'ajouter un équipement manuellement (vous pourrez lui choisir son adresse IP et son device ID) : un bouton Scan de point est présent sur chaque équipement pour faire un scan de cet équipement en particulier

Nach dem Scan wird eine Tabelle mit allen Ein-/Ausgängen Ihrer Geräte angezeigt.

Suivant les constructeurs d'équipements, certaines valeurs ne sont pas disponibles.

Il vous suffit de sélectionner les commandes à créer en cochant une des options suivant votre choix (commande de type info ou de type action), vous pouvez valider à la suite, et vous serez amené sur la page de l'équipement avec les commandes créées.

-
Cliquez ensuite sur votre équipement créé, puis cochez « Activer » et « Visible » pour le voir apparaître sur votre dashboard.

Pour ajouter des commandes ultérieurement à un équipement existant, il faudra refaire un scan des points de cet équipements. 
Les commandes deja créées auront leur checkbox deja cochées sur le tableau des points.

### Ajout manuel de point

Si votre équipement n'est pas lu, du à un nombre trop grand d'objets, une erreur vous indiquera qu'il faut ajouter les points manuellement (ou injecter un EDE)

Depuis la page de l'équipement, cliquez sur le bouton "Ajouter manuellement des points" :

1. Renseignez l'ID d'instance de chaque point
2. Sélectionnez le type d'objet (Analog Input, Binary Output, etc.)
3. Choisissez le mode (lecture seule ou lecture/écriture)
4. Donnez un nom à la commande
5. Ajoutez éventuellement une unité et une description
6. Cliquez sur "+" pour ajouter d'autres points si nécessaire

Une fois tous vos points configurés, cliquez sur "Créer les commandes" pour les ajouter à votre équipement.

### Importation via fichier EDE

Le plugin supporte l'importation de points Bacnet à partir d'un fichier EDE (Engineering Data Exchange). Cette méthode est particulièrement utile pour les systèmes complexes avec de nombreux points.

Depuis la page de l'équipement, cliquez sur le bouton "Importer fichier EDE" :

1. Sélectionnez votre fichier EDE au format CSV
2. Le système analysera le fichier et vous montrera un aperçu des données
3. Vous pourrez sélectionner les points que vous souhaitez importer
4. Configurez les options d'importation (historisation, visibilité)
5. Cliquez sur "Importer" pour créer les commandes

Le plugin détectera automatiquement le séparateur utilisé dans le fichier (virgule, point-virgule ou tabulation) et analysera la structure pour extraire correctement les informations des points Bacnet.

## Die Bestellungen

Rendez-vous dans l'onglet « Commandes » de la page de configuration du nouvel équipement Bacnet.

Ici vous pouvez masquer et rendre visibles les différentes commandes de type « action » et « info » disponibles (les commandes de type « info » peuvent également être historisées) :

![cmdVisible](./images/BacnetVisible.png)

Alle erstellten Geräte haben standardmäßig 2 Befehle commands : une commande info « Connexion Bacnet » et une commande action « Refresh », qui serviront à voir l'état de la connexion Bacnet sur votre dashboard, et à rafraîchir les valeurs de vos commandes.

![cmdBase](./images/BacnetCmdBase.png)

## Visualisation et gestion des calendriers (schedules)

Le plugin permet désormais de visualiser et gérer les calendriers (schedules) BACnet des équipements qui supportent cette fonctionnalité.

Depuis la page de l'équipement, cliquez sur le bouton "Calendriers/Planifications" :

Une fenêtre s'ouvre et affiche tous les calendriers disponibles sur l'équipement. Pour chaque calendrier, vous pouvez :

1. Visualiser la programmation hebdomadaire
2. Consulter les exceptions (jours fériés, etc.)
3. Modifier les horaires et valeurs des événements
4. Ajouter de nouveaux événements de planification
5. Supprimer des événements existants

Tous les changements peuvent être enregistrés sur l'équipement (si celui-ci supporte l'écriture des schedules, ce qui est rare sur certains équipements).

>**NOTE**
>
>La gestion des calendriers est particulièrement utile pour les systèmes CVC (chauffage, ventilation, climatisation) qui fonctionnent selon des plages horaires définies.

>**WICHTIG**
>
>Zum Schreiben: Aus Sicherheitsgründen bietet das Bacnet-Protokoll standardmäßig ein Schreibsystem mit Prioritätsstufen für die Ein-/Ausgänge seiner Geräte.
Es gibt 16 Prioritätsstufen (die niedrigste hat Vorrang vor allen anderen)). Ihr Gerät kann so programmiert werden, dass die in diesem Plugin entwickelte Schreibfunktion standardmäßig keinen Vorrang vor der logischen Programmierung des Geräts / Systems hat.
Für Ausgabetyp I / O ist das Plugin mit Schreibpriorität 8 konfiguriert (Manual Operator).
Mehr Infos zum Thema :

https://store.chipkin.com/articles/bacnet-why-doesnt-the-present-value-change

Pour une écriture sur un équipement Bacnet, on interagit sur la PresentValue de l'entrée/sortie correspondante.
Sie sollten wissen, dass die PresentValues der Ein-/Ausgänge Typ: Analogausgang, Binärausgang und Multistate-Ausgang sind immer steuerbar.
Celles des entrées/sorties de type AnalogValue, BinaryValue ou MultistateValue sont commandables si le fabricant a implanté cette fonctionnalité. Es liegt im alleinigen Ermessen des Herstellers. Veuillez vous renseigner auprès de la documentation de votre équipement pour en savoir plus à ce sujet.

Beim Erstellen der ausgewählten Schreibaufträge wird auch ein zugehöriger Aktionsauftrag erstellt, der standardmäßig nicht auf dem Dashboard sichtbar ist.
Durch Anklicken wird die Schreibprioritätstabelle eines Ein-/Ausgangs auf den Standard zurückgesetzt.
Es hat einen Namen mit << resetPrioritesEcriture >>
Pour rendre visible cette commande sur votre dashboard, il faut vous rendre dans les commandes de votre équipement et cocher la case "Afficher".

## Liste der Befehlsaktionen (für MultiStateValue)

Quand vous avez créé une commande d'Écriture comme habituellement depuis les résultats du scan, elle est de base en Slider ou On Off, suivant le type de point Bacnet remonté (analog, binary) : Wenn Sie nun einen MultiState auswählen, ist der Befehl standardmäßig vom Typ Slider, Sie können ihn jedoch in der Liste der Gerätebefehle auflisten; Es erscheint ein neues Feld „Werteliste“
Vous pouvez y mettre les valeurs que vous désirez, séparées par un -, sans espace : zum Beispiel 1-4-5-8
Beim Speichern der Ausrüstung werden diese Werte in die Liste der Bestellung im Dashboard übernommen
Au changement de cette valeur, cela enverra la valeur à écrire sur le point paramétré.

## Schreibpriorität

A Vorsichtig behandeln

Für jede erstellte Bestellung ist ein Feld „Schreibpriorität“ verfügbar

Gemäß der Dokumentation :

In BACnet stellen Objekte, auf die wir schreiben können, häufig das sogenannte PriorityArray bereit. Dieses Array enthält 16 Ebenen, auf die wir schreiben können (1 ist die höchste Priorität)).

Typische Verwendung von Priorität ist :

1 Manuell – Lebenssicherheit 2 Automatisch – Lebenssicherheit 3 Verfügbar 4 Verfügbar 5 Kontrolle kritischer Geräte 6 Mindest-Ein/Aus 7 Verfügbar 8 Manueller Bediener (Override) 9 Verfügbar 10 Verfügbar (typische Steuerung durch einen Vorgesetzten) 11 Verfügbar 12 Verfügbar 13 Verfügbar 14 Verfügbar 15 Verfügbar (Zeitplan) 16 Verfügbar

Vous pouvez choisir une priorité d'écriture sur les commandes souhaitées, en choisissant un nombre entre 1 et 16

Wenn bei einem Schreibbefehl kein Wert eingegeben wird, wird der Wert standardmäßig auf 8 gesetzt.

## Informations supplémentaires des protocoles supportés

Le plugin BACnet supporte les types d'objets suivants :
- Analog Input, Output, Value
- Binary Input, Output, Value
- Multi-State Input, Output, Value
- Schedule
- Calendar
- Device

Les protocoles de communication supportés sont :
- BACnet/IP (UDP/IP)


Le plugin est compatible avec les équipements respectant la norme ASHRAE 135 qui définit le protocole BACnet.

## Dépannage et diagnostic

Si vous rencontrez des problèmes avec votre équipement BACnet, voici quelques étapes de dépannage :

1. Vérifiez que le démon est bien en cours d'exécution
2. Assurez-vous que votre équipement est bien sur le même réseau que Jeedom
3. Vérifiez qu'aucun pare-feu ne bloque les ports UDP 47808 (port BACnet par défaut)
4. Consultez les logs du plugin pour identifier d'éventuelles erreurs

Pour les équipements qui ne sont pas détectés automatiquement, utilisez l'ajout manuel ou l'importation via fichier EDE.
