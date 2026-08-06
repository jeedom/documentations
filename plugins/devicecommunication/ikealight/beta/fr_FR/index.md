# Plugin IkeaLight

Le plugin IkeaLight permet d’établir un lien avec la passerelle Ikea Tradfri. Vous pourrez contrôler vos lumières et avoir un retour d’état en temps réel.

# Configuration

## Configuration du plugin

Après téléchargement du plugin il vous faut l’activer et renseigner l’IP de votre passerelle ainsi que la clé disponible sur l’étiquette de la passerelle (le "Security code").

## Compatibilité

Vous pouvez trouver [ici](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=ikealight) la liste des modules compatible avec le plugin

## Détection des ampoules

Pour scanner les équipements Ikea, il suffit de démarrer le démon une fois les dépendances correctement installées.     
Les ampoules remontées par la passerelle et qui sont reconnus par Jeedom seront automatiquement intégrées.     

Si une ampoule ne remonte pas merci de mettre le plugin en ``Debug``, de relancer la découverte et de nous fournir la log afin que l’on puisse ajouter les ampoules manquantes. (Pensez à bien préciser le modèle de votre ampoule ainsi que ses caractéristiques dans le ticket : est elle dimmable, est elle variable en blanc, est elle variable en couleur). Le plugin vous remontera également les prises les stores

**Une fois decouverte chaque ampoule aura :**

-   Les actions correspondantes
-   Les infos correspondantes

>**SYMFONISK**
>
>Les enceintes connectées Symfonisk ne sont pas gerées par ce plugin mais par le plugin Sonos.
