Das Alarm Plugin ermöglicht Jeedom ein echtes Alarmsystem für seine
Hausautomatisierung zu habe, was einfach zu bedienen und zu konfigurieren ist.

Configuration du plugin
=======================

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci,
il n’y a aucune configuration supplémentaire à ce niveau.

Notion immédiate
================

C’est une notion très importante du plugin Alarme et il est
très important de bien la comprendre. Pour schématiser c’est comme si
vous aviez 2 alarmes, la première : l’alarme immédiate qui ne tient pas
compte des délais de déclenchement (attention elle prend bien en compte
les délais d’activation) et une 2ème alarme qui elle, prend en compte
les délais de déclenchement.

**Warum diese unmittelbare Vorstellung?**

Cette notion immédiate permet de déclencher des actions bien
spécifiques. Par exemple : vous rentrez chez vous et vous n’avez pas
désactivé l’alarme, avant de déclencher la sirène il peut être bon de
diffuser un message rappellant de bien désactiver l’alarme et si ce
n’est pas fait 1 minute plus tard (délai d’activation de 1 minute donc)
d’activer la sirène.

Dieses Konzept in verschiedenen Arten von Maßnahmen gefunden wird, jedes Mal,
Prinzip wird ausführlich beschrieben.

Equipements
===========

Die Konfiguration der Alarmanlage ist über das Menü 
Plugin > Sicherheit zugänglich 

Nach dem Hinzufügen eines Alarms erscheint folgendes :

-   **Alarm Gerätename** : Name Ihres Alarmes,

-   **Eltern Objekt** : gibt das übergeordnete Objekt an, zu dem das
    Gerät gehört,

-   **Kategorie** : die Geräte Kategorie (Sicherheit, im Allgemeinen
    für einen Alarm),

-   **Aktivieren** : ermöglicht es Ihnen, Ihr Gerät zu aktivieren

-   **Visible** : macht Ihr Gerät auf dem Armaturenbrett sichtbar,

-   **Dauerhaft aktiv ** : gibt an, dass der Alarm ständig aktiv sein soll
    (z. B. für einen Brandmeldealarm),

-   **Scharfschaltung sichtbar** : ermöglicht es Ihnen, den Befehl zum Scharfschalten
    von Alarmen auf dem Widget sichtbar zu machen oder nicht,

-   **Sofort sichtbarer Status** : Ermöglicht es Ihnen, den sofortigen Status des
    Alarms sichtbar zu machen (Erklärung siehe unten),

-   **Zustand und Alarmstatus archivieren** : ermöglicht es, dem Zustand oder
    den Status des Alarms zu archivieren.

-   **Séparer les zones** : permet de rendre les zones indépendantes en terme d'alerte. En temps normal si une zone est en alerte le plugin va ignorer les autres zones. En séparant les zones il répetera les actions pour les autres zones qui entreraient en alerte

-   **Réarmement automatique** : lors d'un déclenchement l'alarme complète se réarme pour prévenir des déclenchements suivants (en temps normal elle ne se réarme pas tant qu'il n'y a pas eu une action scénario/humaine pour le faire)

-   **Ne pas faire les actions immédiates si le capteur n'a pas de délai** : indique à l'alarme de ne pas faire les actions immédiates si le capteur n'a pas de délai de déclenchement, l'alarme ne fera donc que les actions

> **Tip**
>
> Pour chaque action il est possible de spécifier le mode dans lequel
> elle doit s’exécuter ou dans tous les modes

Zones
=====

Hauptteil des Alarms. Hier können Sie konfigurieren
verschiedene Zonen und Aktionen (sofortige und Bereich verschoben,
Beachten Sie, dass es auch möglich ist, global zu konfigurieren) zu machen
wenn sie ausgelöst wird. Eine Zone kann entweder volumetrisch sein (für
Tag, zum Beispiel), dass Umfang (für die Nacht) oder auch
Bereiche des Hauses (Garage, Schlafzimmer, Nebengebäude ....).

Eine obere rechte Taste ermöglicht es Ihnen, so viele, wie Sie hinzufügen
möchten.

> **Tipp**
>
> Sie können mit einem Klick auf den Namen, den Namen des Bereichs bearbeiten
> Es (gegenüber der Bezeichnung "Zone Name").

Eine Zone besteht aus verschiedenen Elementen: - Auslöser, - Aktion
sofort - Aktion.

Déclencheur
-----------

Un déclencheur est une commande binaire, qui lorsqu’elle vaut 1 va
déclencher l’alarme. Il est possible d’inverser le déclencheur, pour que
ça soit l’état 0 du capteur qui déclenche l’alarme, en mettant
"inverser" sur OUI. Une fois votre déclencheur choisi, vous pouvez
spécifier un délai d’activiation en minute (il n’est pas possible de
descendre en-dessous de la minute). Ce délai permet par exemple, si vous
activez l’alarme avant de sortir de chez vous, de ne pas déclencher
l’alarme avant une minute (le temps de vous laisser sortir). Autre cas,
certains détecteurs de mouvement restent en mode déclenché (valeur 1)
pendant un certain temps même si il n’y a aucune détection, par exemple
4 minutes, il est donc bon de décaler l’activation de ces capteurs de 4
ou 5 min pour que l’alarme ne se déclenche pas immédiatement après
l’activation. Ensuite vous avez le délai de déclenchement, à la
différence du délai d’activation qui n’a lieu que une fois lors de
l’activation de l’alarme, celui-ci est mis en place après chaque
déclenchement d’un capteur. La cinématique est la suivante lors du
déclenchement du capteur (ouverture de porte, détection de présence), si
les délais d’activation sont passés, l’alarme va déclencher les actions
immédiates mais va attendre que le délai d’activation soit fini avant de
déchencher les actions. Enfin vous avez le bouton "inverser" qui permet
d’inverser l’état déclencheur du capteur (0 au lieu de 1).

Vous avez aussi un paramètre **Maintient** qui permet de spécifier un délai de maintient du déclencheur avant de déclencher l'alarme. Ex si vous avez un détecteur de fumée qui remonte parfois de fausses alarmes vous pouvez spécifier un délai de 2s. Lors du déclenchement de l'alarme Jeedom va attendre 2s et vérifier que le détecteur de fumée est toujours en alerte si ce n'est pas le cas il ne déclenchera pas l'alarme.  

Kleines Beispiel zu verstehen: der ersten Trigger
(* \ [Salon \] \ [Eye \] \ [Presence \] *) Ich habe hier eine Aktivierungsperiode von 5
Minuten und Abzug 1 Minute. Dies bedeutet, dass, wenn
Aktiviere ich den Alarm während der ersten 5 Minuten kein Trigger
Der Alarm kann nicht stattfinden, weil dieser Sensor. Nach dieser Zeit
5 Minuten, wenn die Bewegung durch den Sensor erfasst wird, wird der Alarm
1 Minute warten (die Zeit, mich vom Alarm zu lassen), bevor
Aktionen auslösen. Wenn ich hatte unmittelbare Aktionen, die sie
beginnen würde sofort für die Frist, ohne warten
Aktivierung, nicht sofortige Maßnahmen stattgefunden haben, nach (1
Minute nach den unmittelbaren Aktionen).

Action immédiate
----------------

Wie oben beschrieben, sind diese Aktionen, die von der ausgelöst werden
Triggern der Triggerverzögerung ignoriert (aber
selbst wenn unter Berücksichtigung der Aktivierungszeit). Sie müssen nur
wählen die gewünschte Aktionssteuer dann davon funktionieren
komplette Ausführungsparameter.

> **Note**
>
> Lorsque plusieurs zones sont déclenchées successivement, seules les
> actions immédiates de la 1ere zone déclenchée sont exécutées.

Modes
=====

Die Modi sind recht einfach einzurichten, müssen Sie nur angeben,
die aktiven Bereiche in Abhängigkeit von der Betriebsart.

> **Tip**
>
> Il est possible de renommer le mode en cliquant sur le nom de celui-ci
> (en face du label "Nom du mode"). Attention lors du renommage d'un mode il faut absoluement revoir les scénarios/équipement qui utiliser l'ancien nom pour les passer sur le nouveau

> **Note**
>
> Lors du renommage d’un mode, il faut sur le widget de l’alarme
> recliquer sur le mode en question pour une prise en compte complète
> (sinon Jeedom reste sur l’ancien mode)

> **Important**
>
> Il faut absolument créer au moins un mode et lui affecter des zones
> sinon votre alarme ne marchera pas.

Activation OK
=============

Cette partie permet de définir les actions à faire suite à une
activation de l’alarme. Ici encore, vous retrouverez la notion immédiate
qui représente les actions à faire tout de suite après armement de
l’alarme, ensuite viennent les actions d’activation qui elles sont
exécutées après les délais de déclenchement.

Dans l’exemple, ici j’allume par exemple une lampe en rouge pour
signaler que l’armement a bien été pris en compte et je l’éteins une
fois l’armement complet (car normalement il n’y a plus personne dans le
périmètre de l’alarme, sinon ça la déclenche).

> **Wichtig**
>
> Die OK Aktivierungsmaßnahmen berücksichtigen nicht in die Zeit
> Aktivierung. Wenn Sie eine Verzögerung auf die Aktivierung eines Sensors
> Öffnen, auch wenn Ihre Tür ist offen Aktivierungsmaßnahmen
> Wird ausgeführt werden.

Activation KO
=============

Ces actions sont exécutées si un capteur est déclenché suite à l'activation de l'alarme ou après le delai d'activation d'un capteur si celui-ci est en alerte

Vous pouvez aussi ici ajouter des actions lors de la reprise de surveillance d'un capteur

Déclenchement
=============

Permet de configurer les actions globales à faire lors d’un déclenchement
de l’alarme. Vous n’êtes pas obligé d’en ajouter si vous avez
configuré des actions spécifiques par zone.

Désactivation OK
================

Diese Aktionen werden ausgeführt, wenn der Alarm deaktiviert und sie
nicht ausgelöst. Beispiel Sie nach Hause kommen, die Öffnung
Tür, die den Alarm auslöst, aber Sie setzen eine Zeit
Auslösen des Sensors und den Alarm ausschalten, bevor die
Frist, OK Deaktivierung Aktionen werden ausgeführt. Wenn durch Nachteile
Sie stoppte den Alarm nach dem Ende dieser Reise Verzögerung
wäre nicht der Fall gewesen.

Réinitialisation
================

Cette partie vous permet de définir les actions à faire lorsque l’alarme
est déclenchée puis désactivée. Ici aussi il y a des actions immédiates
et différées. Voici un exemple : vous rentrez chez vous, les délais
d’activation sont passés, mais en ouvrant la porte cela déclenche
l’alarme. Si vous la désactivez (avant les délais de déclenchement)
alors les actions de réinitialisation immédiate seront exécutées, mais
pas celles de réinitialisation normale. Si vous la désactivez après les
délais de déclenchement, alors les actions de réinitialisation immédiate
et normale seront exécutées.

FAQ
===

>**Quels sont les tags possible ?**
>
> Les tags possible sont :
>
> - #mode# : nom du mode en cours
> - #trigger# : nom de la commande qui a déclenché l'alerte
> - #zone# : nom de la zone de la commande qui a déclenché l'alerte

>**Comment réarmer une alarme permanente ?**
>
>Il suffit de cliquer sur un des modes de l’alarme (même
>celui actif).

>**Peut-on mettre les délais en secondes ?**
>
>C’est possible pour le "Délai de déclenchement" (il faut mettre des
>nombres à virgule, ex : 0.5 pour 30 secondes) mais pas pour le
>"Délai d’activation" (ne pas mettre de chiffres à virgule pour
>ce paramètre).

>**Je ne comprends pas mon alarme ne fait rien**
>
>Vérifiez que l’alarme a bien un mode d’actif
