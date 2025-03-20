# Plugin Simons Voss

Ce plugin est utilisé pour une gestion du systeme SimonsVoss Smart Intego.

Il est de conivence avec le plugin Gestion D'acces.

## Activation et présentation du plugin gestion d'accès

### Activation
Après instalation de votre plugin, vous devez l'activer.

>Il vous faut installer les dependances de votre plugin, et noter le port utilisé de vos gateways SimonsVoss, ne pas oublier d'activer le TCP (normalement activé d'origine) dans vos gateway.

Après avoir activé le plugin vous devriez le voir dans  **Plugins** → **Sécurité** → **Simons Voss**. Si ce n'est pas le cas n'hésitez pas à actualiser votre page (Ctrl+F5 ou Cmd+R).

### Présentation

Dans l'affichage par défaut du plugin, vous avez la possibilité de telecharger le fichier source de SimonsVoss, ce fichier est a recuperer dans le logiciel de SimonsVoss une fois votre projet fini.

### Lancement du projet

une fois uploader dans Jeedom, Jeedom l'analisera pou créer toutes les serrures et gateway.
accedez au diferrente gateway pour confirmé leur adresse IP (vous pouvez la changer dans la commande dediée).

une fois tout fait. vous pouvez relancer le démon Simonsvoss.

les Serrures doivent communiquer.

Il y a toujours deux types d'action 'Normale' ou 'Avec carte'. les actions avec carte permette d'informait la serrure que cette action et valider via la carte passer (cet donnc cette action que l'on va preconiser pour la partie gestion d'acces).

les serrures dormes normalement pendant 5sec, donc si vous faite une action (Normale) il est possible qu'elle ne reponde que 5 secondes apres, par contre avec carte elle repondra imediatement (si vous avez passer une carte au prealable devant).
il est possible d'ecouter ce temp via un paramettre disponible sur la presentation de la serrure).

### Ajouter une nouvelle serrure ou gateway.
si vous avez oublier une serrure ou gateway, vous pouvez les ajouter via le csv de SimonsVoss, il vous suffit de le reuploader "UNIQUEMENT LES MODULES NON INCLUS" avec l'entête du CSV dans le plugin et de relancer le demon.

### Changer une serrure.
si vous la changer dans le logiciel de simonsVoss, il vous suffira juste de changer le deviceID et le chipID inscrit dans l'ancienne serrure par les nouveaux present sur le logiciel SimonsVoss.

### Supprimer une serrure ou gateway.
si vous avez supprimer une serrure ou gateway, il vous suffit de supprimer la serrure dans le plugin et de relancer le demon.

### Changement d'une gateway pour une serrure. (meilleurs réseaux)
si vous avez une serrure qui ne repond pas bien, vous pouvez la changer de gateway, pour cela il vous suffit de changer dans le logiciel simonsVoss puis d'aller dans le plugin choisir la serrure et changer l'adresse ip par celle de la nouvelle gateway.
