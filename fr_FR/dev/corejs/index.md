## Développement js et Core 4.4 +


Le Core de Jeedom a subi une profonde restructuration du front-end en v4.4. Historiquement basé sur jQuery et Bootstrap v3, le Core est dorénavant écrit en Vanilla js, sans framework. Les plugins jQuery ont été remplacés par des librairies internes ou d'autres librairies également en js.

Les plugins seront forcément impactés dans de futures versions, puisque ces libs et même jQuery sont voués à ne plus être chargés par le Core.

> Attention, les plugins suivant ces recommandations ne fonctionneront pas sur un Core pré 4.4 !
> 
> Il faudra donc appliquer `"require" : "4.4",` dans l'info.json du plugin.

Le but ici n'est pas d'expliquer toutes les méthodes js, il y a assez de docs officielles là-dessus :

- [MSDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [javaScript](https://devdocs.io/javascript/)


Nous verrons donc ici les principales fonctions apportées par le Core, utilisables dans les plugins.

- [Dov dev Jeedom Core 4.4](/fr_FR/dev/core4.4)

- [Raccourcis sur les éléments html](/fr_FR/dev/corejs/shortcuts)  
- [Boites de dialogue](/fr_FR/dev/corejs/dialogs)  
- [Helpers](/fr_FR/dev/corejs/helpers)  
- [Gestion des événements (*listeners*) js](/fr_FR/dev/corejs/events)  
- [Gestion des appels Ajax](/fr_FR/dev/corejs/ajax)  
- [Setter / Getter des valeurs](/fr_FR/dev/corejs/jeevalue)  
- [Autocomplétion](/fr_FR/dev/corejs/jeeComplete)  



