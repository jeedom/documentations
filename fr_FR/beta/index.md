
## Beta et Alpha test de Jeedom

### Définition

Un Beta Testeur est un utilisateur qui teste les versions du logiciel avant qu'elles ne soient diffusées à tous les utilisateurs. Le beta testing permet de remonter des erreurs (bug fonctionnel ou soucis d'interface utilisateur par exemple) lors de la phase de développement. C'est donc une importante source d'amélioration pour le projet, qui peut apporter des idées fraiches et tester les nouveautés en conditions réelles. 

### Précautions

Les versions **Beta** et **Alpha** du Core ou des plugins sont des versions de développement. Même si les développeurs prennent bien sûr des précautions, ces versions peuvent comprendre des bugs susceptibles de rendre un plugin ou le Core totalement inopérant. Il faut donc être familier des procédures de backup, récupération, etc.

Le développement du Core se fait sur [Github](https://github.com/jeedom/core) sur la version **Alpha**. Celle-ci possède donc toutes les futures nouveautés, mais aussi le plus de bugs. De plus, les développements faits sur cette version sont susceptibles d'être annulés ou reportés. La version **Alpha** remonte ensuite en **Beta**, qui est généralement *Featured fixed* et consiste donc à s'assurer de sa stabilité, tout en permettant aux développeurs de plugins de tester leurs futures versions.

> **Important**
> Le passage en beta (ou alpha) d'un plugin ou du Core est risqué et interdit tout accès au support officiel de l'équipe Jeedom. Les développeurs sont toutefois présents sur [Community](https://community.jeedom.com/) pour aider en cas de problème, sans garantie toutefois.

> **Important**
> Il est fortement déconseillé d'installer une beta ou alpha sur un Jeedom de production ! Il est indispensable de tester sur un Raspberry ou une VM de test, et L'équipe Jeedom ne pourra être tenue pour responsable  de tout dysfonctionnement.

### Comment

Le Core de Jeedom est Open-Source. Tout le monde peut décider de passer son Jeedom d'une version Stable à une version Beta ou Alpha, avec toutes les précautions nécessaires citées ci-dessus.

Le Core possède trois branches principales sur [Github](https://github.com/jeedom/core):

-  **alpha** : Branche de la version V4 alpha. Principalement destinée aux développeurs pour la version suivante de Jeedom.
-  **beta** : Branche de la version V4 beta. Principalement destinée aux beta testeurs, pour tester avant passage en Stable.
-  **V4-stable** : Branche stable de la V4.

> **Attention**
> Encore une fois, cette manipulation est à réserver aux utilisateurs avancés en toute connaissance de cause.

> **Attention**
> Le *downgrade* de version est totalement déconseillé et peut rendre Jeedom totalement inopérant. Par exemple, updater de Beta v4.2 vers Stable v4.1 ne doit pas être fait ! Dans ce cas, la meilleure solution est d'attendre la future version Stable de l'actuelle Beta, puis remettre la configuration de Jeedom en version Stable, et faire une mise à jour manuelle. De même un backup d'une version ultérieure ne doit pas être restauré sur une version antérieure (par exemple backup 4.2 sur Core 4.1).

Pour changer de version, rendez vous dans *Réglages → Système → Configuration*, onglet *Mises à jour/Market*. Laissez la Source de mise à jour à **Défaut** et choisissez la version que vous souhaitez.

Ensuite, sauvegardez puis rendez vous dans *Réglages → Système → Centre de Mise à jour*. Ici lancez une mise à jour du Core.

### Feedbacks

Le but d'un beta testeur est de remonter les soucis rencontrés lors de ses tests.
Ces remontées se font sur **[Community](https://community.jeedom.com/)** dans la section **[beta-testeurs](https://community.jeedom.com/c/salon-des-beta-testeurs/6)**

C'est aussi sur cette section qu'un testeur peut créer un sujet pour proposer une amélioration.

> Chaque sujet sur cette section doit être identifié avec le tag de la version en cours de développement. Par exemple : tag v4_4 (un underscore est utilisé car les points sont interdits dans les tags sur Discourse.

Cette section n'est pas accessible publiquement. Pour y avoir accès, vous devez remplir un formulaire afin que l'équipe Jeedom donne [accès à votre compte](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/).

> Avant de remonter un problème, mettez à jour le Core et réessayez de reproduire. Voir ci-dessous.

### Gestion des mises à jour du Core

En version **Stable**, chaque changement provoque un changement de version (mineure, par exemple 4.1.xx) qui, si vous avez cochée **Vérification automatique des mises à jour**, provoquera un message et l’apparition de la pastille rouge dans la barre de menu. Ces mises à jour sont également affichées dans *Réglages → Système → Centre de Mise à jour* en cliquant manuellement sur *Vérifier les mises à jour*.

En version **Beta** et **Alpha**, les changements sont beaucoup plus fréquents (plusieurs fois par jour) et ne provoquent pas de changement de version. Elles n'apparaitront donc pas dans le *Centre de Mise à jour*, c'est au testeur de mettre régulièrement le Core à jour, de préférence avant toute phase de test et avant de remonter un problème afin de s'assurer que celui-ci n'a pas déjà été corrigé plus tôt.

> L'équipe change parfois de version en cours de développement, pour marquer certaines phases. Mais contrairement à la version Stable, beaucoup de changements sont faits entre deux versions. Chaque testeur peut suivre les commits sur les branches [Github](https://github.com/jeedom/core).

### Changelog

Dès le début du développement de la version **Alpha**, l'équipe essaye de tenir à jour le futur [Changelog](/fr_FR/core/4.4/changelog). Les nouveautés pouvant évoluer fortement voir être supprimées ou reportées, celui-ci n'est donc pas forcément à jour et n'a pas valeur de référence.

En version **Stable**, le changelog reprend chaque version mineure (4.1.26 -> 4.1.27 etc). En version **Beta** et **Alpha** le changelog est numéroté x.0.0 et ne correspond donc pas forcément à la version mineure en cours. Par exemple, lors du développement de la v4.2, le changelog est uniquement noté 4.2.0 alors qu'une beta peut être en 4.2.7. Lors du passage en **Stable**, le changelog tiendra alors compte de chaque future version mineure.

### Ressouces

 [Accès Community](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/)
 
Community [beta-testeurs](https://community.jeedom.com/c/salon-des-beta-testeurs/6)

[Doc contribuer](/fr_FR/contribute/)

[Doc Développeurs](/fr_FR/dev/)

[Github](https://github.com/jeedom/core)
