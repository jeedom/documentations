# 21/10/2019

- Correction d'un bug lors de la création de l'équipement

# 14/10/2019

- Correction d'un bug lors du renommage d'un mode

# 28/04/2019

- Fehlerbehebungen

# 23/04/2019

- Fehlerbehebungen

# 17/01/2019

- Possibilité d'utiliser des variables ou calcul pour les délais de Maintient (s), Activation et Déclenchement
- Aktualisierung des Dokuments

# 18/07/2018

- Aktualisierung des Dokuments
- Correction de bug sur le renommage des modes
- Si l'alarme est déjà active l'armement ne la réactive pas
- Ajout d'une option pour un déclenchement multi-zones (si une autre zone rentre en alerte alors l'alarme se déclenche)
- Ajout d'action lors de la reprise de surveillance d'un capteur
- Ajout du tag #zone#
- Ajout d'un bouton pour dupliquer une alarme

# 06/03/2018

- Ajout de la gestion des commandes orphelines
- Si des capteurs sont désactivés alors les actions d'activation ok ne sont plus déclenchées
- Fehlerbehebungen
- Les détecteurs ayant des délais d'activation et étant toujours actif après ce délai ne déclenchent plus l'alarme, mais lancent une activation KO, avec surveillance de ce détecteur exclu jusqu'à un retour à la normale

# 12/02/2018

- Es wurde ein Fehler beim Verschieben von Aktionen beim Auslösen behoben

- Die Möglichkeit, eine Verzögerung hinzuzufügen, führt einen Alarmaktivierungsauslöser vor

# 2017.01.12

-   Fehler behoben, zum Deaktivieren von Detektoren

-   Gestion des secondes sur le delai d’activation (JEED-63)

-   Retour en arrière sur le non déclenchement des actions immédiates si
    die Aktivierungszeit ist leer oder null

-   Wenn, wenn ein Sensor aktiviert ist ansprechbar und hat keine Zeit
    d’activation alors l’alarme s’arme quand même en ignorant ce capteur
    (à moins qu’il revienne au repos)

-   Hinzufügen globale Trigger-Aktion (mehr gefilterten Bereich,
    ratsam ist es als Aktionen eher zu verwenden
    Auslösung durch Fläche)

-   Code-Optimierung

-   ACHTUNG: Der Alarm mehr Aktien ausgeführt werden, wenn immediates
    keine Triggerverzögerung !!!!!! ⇒ Abbrechen

-   Die Fähigkeit zu filtern, um die Maßnahmen in Bezug auf die Durchführung
    Alarmmodus

-   Hinzufügen Pause Befehl / Erholung

-   Verbesserte Konfigurationsschnittstelle
