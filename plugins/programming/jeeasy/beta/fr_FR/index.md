# Plugin Jeeasy

Jeeasy est l'assistant de configuration officiel de Jeedom. Il vous accompagne pas à pas dans la mise en route de votre installation : langue, paramètres principaux, installation des plugins et création de vos premières pièces.

>**IMPORTANT**
>
>Un compte Market est nécessaire pour installer et utiliser l'assistant de configuration.

## Lancer l'assistant

Lors de la première connexion à une nouvelle installation, Jeedom vous propose de démarrer avec l'assistant de configuration. Si vos identifiants Market ne sont pas encore renseignés, ils vous sont demandés avant l'installation de l'assistant.

<!-- Capture : fenêtre de première utilisation (choix assistant / sauvegarde) -->

L'assistant peut également être relancé à tout moment :

- depuis le bouton **Assistant de configuration** de la fenêtre **À propos**, accessible en cliquant sur la version de Jeedom dans le menu utilisateur en haut à droite,
- depuis la page du plugin, via **Plugins → Programmation → Jeeasy**, en cliquant sur **Assistant de configuration**.

## Naviguer dans l'assistant

L'assistant se présente en plein écran sous la forme d'une succession d'étapes. Les flèches en bas de l'écran permettent de passer à l'étape suivante ou de revenir à la précédente, et les pastilles numérotées permettent d'accéder directement à une étape.

<!-- Capture : assistant en plein écran avec les pastilles de navigation -->

Le bouton **Fermer l'assistant** en haut de l'écran permet de quitter l'assistant à tout moment. Dans ce cas, certaines configurations ne seront pas effectuées et les plugins proposés ne seront pas installés.

## Les étapes de l'assistant

### Accueil

Choisissez la langue et le pays de votre installation.

### Paramètres généraux

Modifiez le nom de votre installation et son fuseau horaire.

### Interface

Choisissez le thème de l'interface et activez ou non la coloration des icônes.

### Réseaux

Vérifiez les adresses d'accès à votre installation :

- **Local** : l'adresse d'accès depuis votre réseau local, gérée automatiquement par défaut,
- **Externe** : l'adresse d'accès depuis l'extérieur. Si votre service pack comprend l'accès à distance, vous pouvez l'activer directement depuis cette étape.

### Plugins

Selon votre service pack, l'assistant vous propose une sélection de plugins. Sur une box **Atlas**, **Luna** ou **Freebox Delta**, le plugin dédié à votre box est proposé en tête de liste. Cliquez sur ceux que vous souhaitez installer, ils seront installés et activés après confirmation au passage à l'étape suivante, avec la gestion automatique de leurs dépendances et de leur démon.

<!-- Capture : étape Plugins avec quelques plugins sélectionnés -->

### Objets

Choisissez l'objet principal qui correspond le mieux à votre installation (un appartement, une maison ou un bâtiment), puis sélectionnez les pièces à créer. Vous pouvez aussi ne définir aucun objet principal.

<!-- Capture : étape Objets, choix des pièces -->

### Services

Découvrez les services Jeedom qui complètent votre installation : sauvegarde dans le cloud, accès à distance, assistants vocaux, monitoring, SMS et appels.

### Prêt à démarrer

Votre installation est configurée. Les plugins sélectionnés peuvent continuer à s'installer en arrière-plan pendant quelques minutes, jusqu'à 30 minutes selon leur nombre, et vous pouvez commencer à utiliser Jeedom pendant ce temps. Cliquez sur la coche en bas à droite pour quitter l'assistant.

## Page du plugin

La page du plugin, accessible via **Plugins → Programmation → Jeeasy**, propose également d'autres outils :

- **Détecter mes équipements** : analyse votre réseau local à la recherche d'équipements et vous propose les plugins compatibles pour les contrôler,
- **Configurer ma maison** : crée une nouvelle pièce ou modifie une pièce existante,
- **Ajouter un équipement** : vous guide dans l'ajout d'un module selon sa technologie,
- **Configurer un équipement** : vous guide dans la configuration d'un équipement existant selon son type.

<!-- Capture : page du plugin (remplace menuJeeasy.png) -->

![Détection des équipements](../images/networkdiscover.png)
