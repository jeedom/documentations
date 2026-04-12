# Contribuer au core ou aux plugins

Jeedom est un logiciel open-source dont le code est consultable sur [GitHub](https://github.com/jeedom/core/tree/develop){:target="_blank"} et qui est ouvert aux contributions des développeurs tiers.

>**IMPORTANT**
>
>Il est crucial de comprendre le code proposé sans se reposer intégralement sur des développements réalisés par une intelligence artificielle. Celle-ci peut toutefois rester utile pour de l'optimisation ou pour effectuer des vérifications complémentaires.

## Prérequis

Pour contribuer au développement du core Jeedom ou d'un plugin, quelques prérequis sont à connaître et à prendre en compte :
- Tout d'abord, il est indispensable de prendre connaissance et d'appliquer [la procédure de bêta-test de Jeedom](../beta/),
- il faut également disposer d'[un compte utilisateur sur GitHub](https://github.com/){:target="_blank"},
- Savoir faire [une *Pull Request* sur GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request){:target="_blank"},
- Comprendre le langage concerné par les modifications *(`PHP`, `JavaScript`, `HTML`, `CSS`, `Python`, `Node.js`, etc.)*,
- Tester les changements proposés afin de s'assurer qu'ils n'engendrent pas d'autres bugs ou effets de bord,
- Enfin, des connaissances du système Linux Debian peuvent être nécessaires en fonction du code à faire évoluer.

## Développeurs tiers

Que vous soyez développeur confirmé ou pas, chacun a son rôle à jouer pour participer au développement et à l'évolution de la solution Jeedom à son niveau. Différentes aides peuvent être fournies à travers la documentation et le forum Jeedom.

>**INFORMATION**
>
>Si vous n'êtes pas à l'aise à l'idée d'intervenir directement sur les fichiers du core ou d'un plugin mais que vous souhaitez apporter votre pierre à l'édifice, vous pouvez toujours contribuer en créant un sujet sur le forum dans la section ["Utilisation du core de Jeedom"](https://community.jeedom.com/c/utilisation-du-core-de-jeedom/57){:target="_blank"} ou [celle dédiée aux plugins](https://community.jeedom.com/c/plugins/46){:target="_blank"} avec l'étiquette du plugin concerné.

### Documentation pour les développeurs

Nous vous recommandons de prendre régulièrement connaissance des documentations relatives au [développement du core](../dev/core) ou au [développement d'un plugin](../dev/) afin d'appliquer les rêgles établies et d'être certain de respecter les normes de Jeedom.

### Forum pour les développeurs

En complément de la documentation, vous avez également accès [au salon des développeurs du forum](https://community.jeedom.com/c/developpeur-developpeurs/5){:target="_blank"} qui regorge d'informations.

>**INFORMATION**
>
>Ce salon est en lecture seule par défaut, pour pouvoir y intervenir il est indispensable d'être préalablement [inscrit en tant que développeur Jeedom](https://market.jeedom.com/index.php?v=d&p=becomeDeveloper){:target="_blank"}.

## Contribuer au core Jeedom

Les contributions au core Jeedom, doivent impérativement être mises en place et soumises sur [la branche `develop`](https://github.com/jeedom/core/tree/develop){:target="_blank"}.

>**IMPORTANT**
>
>Si vous souhaitez soumettre plusieurs changements, il faut ouvrir autant de *pull requests* que de corrections ou fonctionnalités concernées.

## Contribuer aux plugins

Concernant les plugins, les demandes d'évolution doivent être soumises sur la branche `beta`.

>**INFORMATION**
>
>Certains dépôts de plugins ne sont pas accessibles publiquement. Dans ce cas, vous pouvez également contribuer en créant un sujet sur [le forum](https://community.jeedom.com/c/plugins/46){:target="_blank"} avec l'étiquette du plugin concerné.

## Gestion des traductions

Les traductions sont générées automatiquement dans les fichiers `i18n/*.json`. Il est inutile de modifier ces fichiers car ils sont réécrits régulièrement par un robot.

Pour que le système de traduction fonctionne il faut respecter un certain formalisme selon le langage utilisé :
- En `PHP`, hors dossier `desktop/php` :
```php
$myString = __('Ma phrase qui sera traduite', __FILE__);
```
- En `PHP`, dans le dossier `desktop/php` :
```php
$myString = '{{Ma phrase qui sera traduite}}';
```
- En `JavaScript`:
```js
var myString = '{{Ma phrase qui sera traduite}}'
```
