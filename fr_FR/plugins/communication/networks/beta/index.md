# Plugin Networks

Ce plugin permet de faire un ping ou un wake-on-lan sur un équipement réseau.

# Configuration du plugin

Après téléchargement du plugin, il suffit juste d’activer celui-ci et d'installer les dépendances, il n’y a aucune configuration à ce niveau.

# Configuration des équipements

La configuration des équipements Networks est accessible à partir du menu plugin :

![networks2](../images/networks2.PNG)

Vous retrouvez ici toute la configuration de votre équipement :

- **Nom de l’équipement** : nom de votre équipement Networks,
- **Objet parent** : indique l’objet parent auquel appartient l’équipement,
- **Catégorie** : les catégories de l’équipement (il peut appartenir à plusieurs catégories),
- **Activer** : permet de rendre votre équipement actif,
- **Visible** : rend votre équipement visible sur le Dashboard,
- **Adresse IP** : adresse IP sur laquelle faire le ping,
- **Adresse MAC (wol)** : adresse MAC pour le wake-on-lan,
- **Broadcast IP (wol)** : adresse IP de broadcast du réseau pour     envoyer le wake-on-lan,
- **Méthode de ping** : Choix de la méthode de ping : *IP* (normal), *ARP* (à privilégier pour les smartphones et périphériques qui s'endorment), *PORT* (pour tester si un port est ouvert)
- **Maximum de tentatives en cas d'échec**: Nombre maximum entre 1 et 10 de tentatives en cas d'échec. En cas de réussite, le plugin s'arrête immédiatement.
- **TTL** : Seulement si méthode *IP*. Time-to-live, les valeurs peuvent être :
  - 0 : même hôte
  - 1 : même sous-réseaux
  - 32 : même site
  - 64 : même région
  - 128 : même continent
  - 256 : aucune limite
    Si vous avez une erreur de type 'Time to live exceeded' , il faut augmenter cette valeur. Si vide, alors le paramètre vaut 255. A noter que sur certaines configuration (Docker par exemple) le 255 n'est pas autorisé il faut donc diminuer cette valeur.
- **Port** : Port sur lequel faire le ping si vous êtes en mode ping sur un port (exemple : 8080 pour 192.168.0.12:8080),
- **Auto-actualisation (cron)** : cron définissant la fréquence du ping,

> **Note**
>
> Jeedom va vérifier toutes les minutes (par défaut) le ping sur l’IP.

> **Important**
>
> Si vous ne renseignez pas l’adresse MAC et broadcast alors vous n’aurez pas de commande wake-on-lan.

> **Note**
>
> L’adresse MAC doit être de la forme : 5E:FF:56:A2:AF:15
