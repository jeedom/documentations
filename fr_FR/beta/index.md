
# Beta test de Jeedom

Un bêta‑testeur est un utilisateur qui teste les versions du logiciel avant qu'elles soient diffusées à l'ensemble des utilisateurs. Le beta testing permet de remonter des erreurs qui pourraient apparaitre lors de la phase de développement *(bug fonctionnel ou souci d'interface par exemple)*. C'est une importante source d'amélioration pour le projet, qui permet d'apporter des idées fraîches et de tester les nouveautés en conditions réelles.

## Mises en garde

Bien que les développeurs prennent un maximum de précautions, les versions en cours de développement sont susceptibles d'inclure des bugs pouvant rendre un plugin ou le core totalement inopérants. De la même manière, les fonctionnalités en cours de développement peuvent être reportées, voire abandonnées en fonction des circonstances. Il faut donc être plutôt à l'aise avec les procédures de sauvegarde/restauration de Jeedom avant de se lancer dans le beta testing.

Comme indiqué ci-dessus, le fait de basculer Jeedom ou un plugin sur une version en cours de développement comporte des risques. Par conséquent, **il est fortement recommandé de le faire sur une installation de test prévue à cet effet *([une machine virtuelle](../installation/vm) par exemple)* plutôt que sur un Jeedom en production**.

>**IMPORTANT**
>
>L'équipe Jeedom ne peut être tenue responsable de tout dysfonctionnement survenant suite à l'installation d'une version autre que stable. Dans ce cas **l'accès au support officiel est impossible**, il faut donc [faire une remontée](#Faire%20une%20remontée).

## Branches

Jeedom est un logiciel open-source dont le développement peut être suivi en temps réel sur [Github](https://github.com/jeedom/core){:target="_blank"}. Chaque branche correspondant à différents niveaux d'avancement dans son développement.

### Branches principales

-  **develop** : Version en cours de développement incluant des modifications régulières *(intégration continue)*.
-  **release** : Prochaine version déployée quelques jours avant passage en stable.
-  **master** : Version stable de Jeedom *(branche par défaut incluant le support officiel)*.

### Branches annexes

Les branches annexes correspondent à des développements indépendants et ponctuels, voués à être intégrés à une branche principale.

-  **feat/xxxxx-yyyyy** : Nouvelle fonctionnalité testable avant son déploiement dans `develop`.
-  **fix/xxxxx-yyyyy** :  Correctif non urgent testable quelques jours avant son déploiement dans `develop`.
-  **hotfix/xxxxx-yyyyy** : Correctif urgent rapidement déployé dans `master` & `develop`.

>**INFORMATION**
>
>`xxxxx-yyyyy` correspond au sujet court de la fonctionnalité ou du correctif en question.

### Changer de version

A la lecture des [mises en garde](#Mises%20en%20garde) exposées précédemment, il est évident que **cette manipulation est à réserver aux utilisateurs avancés en toute connaissance de cause**.

Pour changer de branche, et donc de version Jeedom, rendez-vous dans le menu **Réglages → Système → Configuration**, onglet **Mises à jour/Market**. Laissez la source de mise à jour sur **Défaut** et sélectionnez la version du core *(branche)* que vous souhaitez installer.

Ensuite, cliquez sur le bouton **Sauvegarder** puis dirigez-vous vers le menu **Réglages → Système → Centre de Mise à jour**. Depuis cette page il ne reste qu'à effectuer une mise à jour du core pour basculer sur la nouvelle version.

>**IMPORTANT**
>
>En cas de changement de numérotation du core, il est vivement déconseillé de revenir sur une version inférieure *(downgrade)*. Il est plutôt recommandé d'attendre que les modifications arrivent en version stable pour rebasculer dessus.\
>Concernant les branches annexes, une fois la fonctionnalité ou le correctif testés, il faut revenir sur la version à la base *(`develop` dans la majorité des cas)*.

## Mises à jour

En `master` *(stable)* ou `release`, chaque nouvelle version entraine un changement de numérotation *(x.y.z)*. Si la case **Vérification automatique des mises à jour** est cochée, alors un message de notification sera émis dans Jeedom accompagné d'une pastille rouge dans la barre de menu. Sinon il faut se rendre dans le menu **Réglages → Système → Centre de Mise à jour** puis cliquer sur le bouton **Vérifier les mises à jour**.

À l'inverse, les autres branches n'engendrent pas de notification ni d'alerte dans le centre de mises à jour malgré des modifications régulières. Il revient donc au bêta‑testeur de mettre le core à jour manuellement et régulièrement. Avant chaque phase de tests notamment, et surtout, avant d'effectuer toute remontée afin de s'assurer que le problème n'a pas déjà été corrigé.

## Changelog

Le **journal des modifications** *(ou changelog)* offre un aperçu des changements apportés par chaque version de Jeedom.

Seules les versions [`master` *(stable)*](../core/#VERSION#/changelog){:target="_blank"} et [`release`](https://github.com/jeedom/core/blob/release/docs/#LANG#/changelog.md){:target="_blank"} garantissent la présence d'un changelog détaillé et à jour.

En `develop`, **si renseigné**, le changelog peut être consulté directement sur [Github](https://github.com/jeedom/core/blob/develop/docs/#LANG#/changelog.md){:target="_blank"} mais le plus fiable est de prendre connaissances des [dernières *Pull Requests* validées sur cette branche](https://github.com/jeedom/core/pulls?q=is%3Apr+is%3Aclosed+sort%3Aupdated-desc){:target="_blank"}.

Les branches annexes faisant quant à elles référence à un élément précis, elles ne nécessitent à première vue pas de détails pour être appréhendées.

## Plugins

La présente page s'attarde principalement sur les beta tests autour du core Jeedom mais le principe reste sensiblement le même pour les plugins. En effet, les plugins sont mis à disposition en version stable *(branche `master`)* par défaut mais ils disposent également de versions `beta` pour les développements en cours.

Pour accéder aux plugins en version `beta`, il est nécessaire de cocher la case **Activer l'accès aux plugins beta** dans [votre profil Market](https://market.jeedom.com/index.php?v=d&p=profils){:target="_blank"}. Il suffit ensuite d'installer ou de réinstaller le plugin dans cette version.

>**IMPORTANT**
>
>L'installation d'un plugin en version `beta` fait perdre tout accès au support officiel.

## Faire une remontée

Les bêta‑testeurs sont en première ligne pour identifier un dysfonctionnement, tester une nouvelle fonctionnalité ou valider une correction avant publication en stable.

Après avoir clairement analysé la situation, plusieurs canaux sont disponibles pour effectuer des remontées les plus détaillées possibles avec tout le contexte nécessaire. Quel que soit le canal choisi, la première étape indispensable consiste à effectuer une recherche afin de s'assurer que le sujet n'est pas déjà abordé pour ne pas créer de doublons.

>**IMPORTANT**
>
>Il est crucial de comprendre un minimum le sujet par soi-même sans se reposer intégralement sur l'analyse d'une intelligence artificielle. Celle-ci peut toutefois rester utile pour la mise en forme de la remontée ou pour ajouter du complément *(vérifié)*.

### Forum Jeedom

Les remontées peuvent être formulées directement dans [le salon des bêta‑testeurs du forum Jeedom](https://community.jeedom.com/c/salon-des-beta-testeurs/6){:target="_blank"}.

Choisissez la section adaptée à la catégorie de la remontée puis ajoutez les étiquettes *(tags)* en lien avec le sujet *(`v4_5` par exemple)*. Il ne reste plus qu'à rédiger votre retour en incluant le maximum d'informations afin que toute personne extérieure soit en mesure de comprendre, de reproduire et d'analyser la situation.

>**INFORMATION**
>
>Le salon des bêta‑testeurs intègre également [une section **Suggestions**](https://community.jeedom.com/c/salon-des-beta-testeurs/suggestion/29){:target="_blank"} pour proposer des améliorations.

### Issue Github

Si, après recherche, une *issue* ou une *pull request* est déjà ouverte sur le même sujet alors vous pouvez y ajouter votre analyse à condition qu'elle apporte des éléments pertinents dans le cadre du développement concerné.

Sinon, vous pouvez ouvrir [une *issue* sur Github](https://github.com/jeedom/core/issues){:target="_blank"} détaillant de manière exhaustive le dysfonctionnement rencontré.

>**INFORMATION**
>
>L'anglais est la norme sur Github pour que tout un chacun soit en mesure de comprendre le sujet mais nous acceptons les textes rédigés en français.

## Contribuer au développement

Que ce soit pour corriger une simple faute d'orthographe ou de syntaxe, ou même pour proposer un changement plus important, tout le monde peut participer au développement et à l'évolution de la solution Jeedom à son niveau.

### Documentation

Les pages de documentation que vous consultez actuellement nécessitent des mises à jour et des adaptations régulières pour rester valables et fiables. L'assistance de la communauté est grandement appréciée à ce niveau.

Quelques spécificités sont à prendre en compte avant de proposer des changements sur la documentation. Il est donc indispensable de prendre connaissance des bonnes pratiques pour [contribuer à la documentation](../contribute/doc) en premier lieu.

### Core Jeedom

A l'instar de la documentation, le core Jeedom est également ouvert aux contributions externes. Référez-vous à la page [Contribuer au développement du Core](../contribute/core) pour en savoir plus.
