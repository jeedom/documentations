# Bacnet

## Description

Le plugin Bacnet permet de récupérer les informations de vos équipements Bacnet/IP et d'interagir avec eux depuis votre Jeedom. Il supporte de nombreuses fonctionnalités avancées telles que l'importation de fichiers EDE, l'ajout manuel de points, la visualisation des calendriers (schedules) et bien plus encore.

## Configuración del complemento

Après téléchargement du plugin, il faut tout d'abord l'activer, comme tout plugin Jeedom :

![config](./images/BacnetConfig.png)

Luego, debe iniciar la instalación de las dependencias (incluso si aparecen bien) :

![dependances](./images/BacnetDep.png)

Finalmente, debemos iniciar el demonio :

![demon](./images/BacnetDemon.png)

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](./images/BacnetSocket.png)

En esta misma pestaña, debes elegir el valor Cron para actualizar tu equipo.

## Comment déclarer un équipement Bacnet dans Jeedom

### Détection automatique

>**IMPORTANTE**
>
>Vos équipements BACNET doivent se trouver sur le même réseau que votre Jeedom pour être détectés automatiquement.

Rendez-vous dans le menu « Plugins → Protocole domotique → Bacnet » :



Vous pouvez lancer un scan de type broadcast, qui enverra un whois à tout votre réseau pour trouver les équipements Bacnet. 
Une fenetre s'affichera avec les résultats. 
Vous pourrez scanner ensuite les points du/des device(s) choisis.

Sur une grande installation;un whois global peut perturber les équipements bacnet, il est conseillé alors d'ajouter un équipement manuellement (vous pourrez lui choisir son adresse IP et son device ID) : un bouton Scan de point est présent sur chaque équipement pour faire un scan de cet équipement en particulier

Después del escaneo, se mostrará una tabla con todas las entradas / salidas de su equipo.

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

## Las órdenes

Rendez-vous dans l'onglet « Commandes » de la page de configuration du nouvel équipement Bacnet.

Ici vous pouvez masquer et rendre visibles les différentes commandes de type « action » et « info » disponibles (les commandes de type « info » peuvent également être historisées) :

![cmdVisible](./images/BacnetVisible.png)

Todo el equipo creado tendrá 2 comandos por defecto : une commande info « Connexion Bacnet » et une commande action « Refresh », qui serviront à voir l'état de la connexion Bacnet sur votre dashboard, et à rafraîchir les valeurs de vos commandes.

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

>**IMPORTANTE**
>
>Respecto a la escritura: por seguridad, el protocolo Bacnet proporciona por defecto un sistema de escritura con niveles de prioridad en las entradas / salidas de sus equipos.
Hay 16 niveles de prioridad (el nivel más bajo tiene prioridad sobre todos los demás)). Su equipo puede estar programado de tal manera que la función de escritura desarrollada en este complemento no tenga prioridad sobre la programación lógica del equipo / sistema por defecto.
Para E / S de tipo de salida, el complemento se configura con escritura de prioridad 8 (Operador manual).
Más información sobre el tema :

https://store.chipkin.com/articles/bacnet-why-doesnt-the-present-value-change

Pour une écriture sur un équipement Bacnet, on interagit sur la PresentValue de l'entrée/sortie correspondante.
Debe saber que los PresentValues del tipo de entradas / salidas: La salida analógica, la salida binaria y la salida multiestado siempre se pueden controlar.
Celles des entrées/sorties de type AnalogValue, BinaryValue ou MultistateValue sont commandables si le fabricant a implanté cette fonctionnalité. Queda a criterio exclusivo del fabricante. Veuillez vous renseigner auprès de la documentation de votre équipement pour en savoir plus à ce sujet.

Al crear las órdenes de tipo de escritura elegidas, también se creará una orden de acción asociada, que por defecto no es visible en el tablero.
Al hacer clic en él, restablece la tabla de prioridad de escritura de una entrada / salida a los valores predeterminados.
Tendrá un nombre con << resetPrioritesEcriture >>
Pour rendre visible cette commande sur votre dashboard, il faut vous rendre dans les commandes de votre équipement et cocher la case "Afficher".

## Lista en acción de comando (para MultiStateValue)

Quand vous avez créé une commande d'Écriture comme habituellement depuis les résultats du scan, elle est de base en Slider ou On Off, suivant le type de point Bacnet remonté (analog, binary) : ahora bien, si eliges un multiEstado, el comando será de tipo Slider por defecto, pero puedes listarlo en la lista de comandos del equipo; aparecerá un nuevo campo Lista de valores;
Vous pouvez y mettre les valeurs que vous désirez, séparées par un -, sans espace : por ejemplo 1-4-5-8
Al guardar el equipo, este pondrá estos valores en la lista del pedido en el Dashboard
Au changement de cette valeur, cela enverra la valeur à écrire sur le point paramétré.

## Prioridad de escritura

A Manejar con cuidado

Un campo de prioridad de escritura está disponible en cada orden creada

Según la documentación :

En BACnet, el objeto en el que podemos escribir a menudo proporciona lo que se llama la matriz de prioridad. Esta matriz contiene 16 niveles en los que podemos escribir (siendo 1 la prioridad más alta).

El uso típico de prioridad es :

1 Manual-Seguridad humana 2 Automático-Seguridad humana 3 Disponible 4 Disponible 5 Control de equipos críticos 6 Mínimo encendido/apagado 7 Disponible 8 Operador manual (anulación) 9 Disponible 10 Disponible (control típico de un supervisor) 11 Disponible 12 Disponible 13 Disponible 14 Disponible 15 Disponible (Horario) 16 Disponible

Vous pouvez choisir une priorité d'écriture sur les commandes souhaitées, en choisissant un nombre entre 1 et 16

Si no se ingresa ningún valor en un comando de escritura, el valor predeterminado se establecerá en 8.

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
