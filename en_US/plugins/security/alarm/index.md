The Alarm plugin allows Jeedom to have a real alarm system for
its home automation, very simple to use and configure.

Plugin configuration
=======================

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci,
il n’y a aucune configuration supplémentaire à ce niveau.

Immediate concept
================

C’est une notion très importante du plugin Alarme et il est
très important de bien la comprendre. Pour schématiser c’est comme si
vous aviez 2 alarmes, la première : l’alarme immédiate qui ne tient pas
compte des délais de déclenchement (attention elle prend bien en compte
les délais d’activation) et une 2ème alarme qui elle, prend en compte
les délais de déclenchement.

**Why this immediate notion?**

Cette notion immédiate permet de déclencher des actions bien
spécifiques. Par exemple : vous rentrez chez vous et vous n’avez pas
désactivé l’alarme, avant de déclencher la sirène il peut être bon de
diffuser un message rappellant de bien désactiver l’alarme et si ce
n’est pas fait 1 minute plus tard (délai d’activation de 1 minute donc)
d’activer la sirène.

This notion is found in different types of actions, each time
its principle will be detailed.

Devices
===========

The alarm equipment configuration is accessible from the menu
Plugin &gt; Security.

Once an alarm is added you are left with:

-   **Name of alarm equipment**: name of your alarm,

-   **Parent Object**: Specifies the parent object to which belongs
    equipment,

-   **Category**: the category of equipment (general safety
    for an alarm),

-   **Enable**: to make your equipment active,

-   **Visible**: makes your equipment visible on the dashboard,

-   **Always active**: indicates that the alarm will be permanently
    active (for example for a fire alarm),

-   **Arming visible**: makes it possible to make visible or not the order
    arming the alarm on the widget,

-   **Immediate status visible**: allows to make the immediate status of
    the visible alarm (see below for the explanation),

-   **History and status of the alarm**: allows you to log or
    not the state and status of the alarm.

-   **Séparer les zones** : permet de rendre les zones indépendantes en terme d'alerte. En temps normal si une zone est en alerte le plugin va ignorer les autres zones. En séparant les zones il répetera les actions pour les autres zones qui entreraient en alerte

-   **Réarmement automatique** : lors d'un déclenchement l'alarme complète se réarme pour prévenir des déclenchements suivants (en temps normal elle ne se réarme pas tant qu'il n'y a pas eu une action scénario/humaine pour le faire)

-   **Ne pas faire les actions immédiates si le capteur n'a pas de délai** : indique à l'alarme de ne pas faire les actions immédiates si le capteur n'a pas de délai de déclenchement, l'alarme ne fera donc que les actions

> **Tip**
>
> Pour chaque action il est possible de spécifier le mode dans lequel
> elle doit s’exécuter ou dans tous les modes

Areas
=====

Main part of the alarm. This is where you set up
different zones and actions (immediate and delayed by zone,
note that it is also possible to configure them globally) to do
triggering case. An area may be volumetric (for
the day for example) that perimetric (for the night) or also
areas of the house (garage, bedroom, outbuildings ....).

A button at the top right allows you to add as many as you
want.

> **Tip**
>
> It is possible to edit the name of the zone by clicking on the name of the
> this one (in front of the label "Name of the zone").

A zone consists of different elements: - trigger, - action
immediate, - action.

Trigger
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

Small example to understand: on the first trigger
(* \ [Salon \] \ [Eye \] \ [Presence \] *) Here I have an activation time of 5
minutes and 1 minute trigger. It means that when
I activate the alarm, during the first 5 minutes no triggering
the alarm can not take place because of this sensor. After this time
5 minutes, if motion is detected by the sensor, the alarm will
wait 1 minute (the time to let me turn off the alarm) before
trigger the actions. If I had immediate actions these
would have started immediately without waiting for the end of
activation, non-immediate actions would have taken place after (1
minute after the immediate actions).

Immediate action
----------------

As described above, these are actions that are triggered as soon as
triggering by not taking into account the triggering delay (but in
taking into account any activation delay). You just have to
select the desired action command and then according to it
fill in the execution parameters.

> **Note**
>
> Lorsque plusieurs zones sont déclenchées successivement, seules les
> actions immédiates de la 1ere zone déclenchée sont exécutées.

Modes
=====

The modes are simple enough to configure, just indicate
active zones according to the mode.

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

> **Important**
>
> OK activation actions do not take into account deadlines
> activation. If you have a delay on activating a sensor
> opening, even if your door is open activation actions
> will be executed.

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

These actions are executed when the alarm is disabled and
is not triggered. Example you go home, opening the
door that sounds the alarm, but you put a delay of
trigger on the sensor and you turn off the alarm before the end of the
delay, the OK deactivation actions will be executed. If however
you had stopped the alarm after the end of the triggering time this
would not have been the case.

Reset
=======

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
