# Description

Le plugin IkeaLight permet d’établir un lien avec la passerelle Ikea
Tradfri. Vous pourrez controller vos lumières et avoir un retour d’état
temps réel.

# Setup

## Plugin configuration

Après téléchargement du plugin il vous faut l’activer et renseigner l’IP
de votre passerelle ainsi que la clé disponible sur l’étiquette de la
passerelle (le "Security code").

## Détection des ampoules

Pour scanner les équipements Ikea, il suffit de lancer (une fois les dépendances
elancé) le démon. Les ampoules remontés par la
passerelle et qui sont reconnus par Jeedom seront automatiquement créé.
Si une ampoule ne remonte pas merci de mettre le plugin de Debug de
relancer la découverte et de nous fournir la log afin que l’on puisse
rajouter les ampoules manquantes. (Pensez à bien préciser votre ampoule
ainsi que ses caractéristiques dans le ticket : est elle dimmable, est
elle variable en blanc, est elle variable en couleur). Le plugin vous remontera également les prises les stores

**Une fois decouverte chaque ampoule aura :**

-   Les actions correspondantes
-   Les infos correspondantes

>**Symfonisk**
>
>Les enceintes connectée Symfonisk ne sont pas gerées par ce plugin mais par le plugin Sonos
