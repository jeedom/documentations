# Plugin Simons Voss

Ce plugin permet de gérer le système SimonsVoss Smart Intego.

Il est compatible avec le plugin Gestion d'accès.

## Activation et présentation du plugin Gestion d'accès

### Activation
Après l'installation de votre plugin, vous devez l'activer.

> Vous devez installer les dépendances du plugin, noter le port utilisé par vos passerelles SimonsVoss, et vérifier que le protocole TCP est activé (il l'est normalement par défaut) sur vos passerelles.

Une fois le plugin activé, vous devriez le voir dans **Plugins** → **Sécurité** → **Simons Voss**. Si ce n'est pas le cas, actualisez la page (Ctrl+F5 ou Cmd+R).

### Présentation

Dans l'affichage par défaut du plugin, vous avez la possibilité de télécharger le fichier source de SimonsVoss. Ce fichier doit être récupéré dans le logiciel SimonsVoss une fois votre projet terminé.

### Lancement du projet

Une fois le fichier téléchargé et importé dans Jeedom, ce dernier analysera le contenu pour créer toutes les serrures et passerelles. Accédez aux différentes passerelles pour confirmer leurs adresses IP (vous pouvez les modifier via la commande dédiée).

Une fois cette étape terminée, vous pouvez relancer le démon SimonsVoss.

Les serrures doivent être opérationnelles.

Il existe deux types d'actions : **Normale** ou **Avec carte**. Les actions "Avec carte" permettent d'informer la serrure que l'action est validée via une carte passée devant la serrure (c'est cette action qui est recommandée pour la gestion d'accès).

Les serrures restent généralement en veille pendant 5 secondes. Ainsi, si vous effectuez une action "Normale", il est possible qu'elle ne réponde qu'après ce délai. En revanche, avec une carte, la serrure répondra immédiatement (à condition qu'une carte ait été passée au préalable). Vous pouvez consulter ce délai via un paramètre disponible dans la présentation de la serrure.

