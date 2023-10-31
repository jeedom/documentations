# Sauvegardes
**Réglages → Système → Sauvegardes**

Jeedom offre la possibilité d’être sauvegardé et restauré depuis ou à partir de différents emplacements.
Cette page permet la gestion des sauvegardes, restaurations.


Vous y trouvez, à gauche, les paramètres et les boutons d’action. Sur la droite, dans la partie Informmations le statut en temps réel de l’action en cours (sauvegarde ou restauration), si vous en avez lancé une.

## Sauvegardes Locales

- **Emplacement** : Indique le dossier dans lequel Jeedom copie les sauvegardes. Il est recommandé de ne pas le changer. Si vous êtes en chemin relatif, son origine est l’endroit où Jeedom est installé.
- **Rétention temporelle (jours)** : Nombre de jours de sauvegarde à garder. Une fois ce délai passé, les sauvegardes seront supprimées. Attention de ne pas mettre un nombre de jours trop élevé, sinon votre système de fichiers peut vite être saturé.
- **Taille totale maximale (Mo)** : Permet de limiter la place prise par l’ensemble des sauvegardes dans le dossier de sauvegarde. Si cette valeur est dépassée, Jeedom va supprimer les sauvegardes les plus anciennes jusqu’à retomber en-dessous de la taille maximale fixée. Il gardera cependant au moins une sauvegarde.

- **Lancer une sauvegarde** : Permet de lancer une sauvegarde manuellement et immédiatement (utile si vous voulez faire un changement critique. Cela vous permettra de revenir en arrière). Vous avez aussi un bouton pour lancer une sauvegarde sans envoyer l’archive sur le cloud (nécessite un abonnement voir plus bas). L’envoi d’une sauvegarde sur le cloud peut prendre un certain temps. Cette option permet donc d’éviter une perte de temps trop importante.

- **Sauvegardes disponibles** : Liste des sauvegardes locales disponibles.

- **Supprimer la sauvegarde** : Supprime la sauvegarde locale sélectionnée dans le popup au-dessus.
  
- **Restaurer la sauvegarde** : Lance la restauration de la sauvegarde sélectionnée dans le popup au-dessus.

- **Télécharger la sauvegarde** : Permet de télécharger sur votre ordinateur l’archive de la sauvegarde sélectionnée dans le popip au-dessus.
  
- **Ajouter une sauvegarde** : Permet d’ajouter dans le dossier des sauvegardes locales une archive se trouvant sur l’ordinateur que l’on utilise actuellement (permet par exemple de restaurer une archive précédemment récupérée sur un nouveau Jeedom ou lors d'une réinstallation).

## Sauvegardes Market

- **Envoi des sauvegardes** : Indique à Jeedom d’envoyer les sauvegardes sur le cloud du Market, attention il faut avoir pris l’abonnement.

- **Sauvegardes disponibles** : Liste des sauvegardes cloud disponibles.

- ***Rapatrier la sauvegarde en local** : Rapatrie la sauvegarde cloud sélectionnée au-dessus dans le dossier local.

## Sauvegardes Samba

- **Envoi des sauvegardes** : Indique à Jeedom d’envoyer les sauvegardes sur le partage samba configuré ici Réglages → Système→Configuration : Mises à jour/Market.

- **Sauvegardes disponibles** : Liste des sauvegardes samba disponibles.

- **Rapatrier la sauvegarde en local** : Rapatrie la sauvegarde samba sélectionnée au-dessus dans le dossier local.

> **IMPORTANT**
>
> Les backups de Jeedom doivent absolument être enregistrés dans un dossier dédié Jeedom ! En effet Jeedom supprimera tous ce qui n’est pas un backup Jeedom du dossier.
>
> Pour les utilisateurs d'ordinateur Apple, attention par défaut safari décompresse les archives de Backup Jeedom. Il faut donc configurer safari pour éviter ce souci.

# Qu’est-ce qui est sauvegardé ?

Lors d’une sauvegarde, Jeedom va sauvegarder tous ses fichiers et la base de données. Cela contient donc toute votre configuration (équipements, commandes, historiques, scénarios, design, etc.).

Au niveau des protocoles domotiques, comme le Z-Wave, les modules inclus sont liés au controleur il n’est donc pas possible de sauvegarder avec le backup Jeedom. Il faut donc garder le même contrôleur pour retrouver ses modules Zwave ou utiliser les outils de backup spécifiques (comme celui de aeotec, ou de zwavejs ui).

> **Note**
>
> Le système sur lequel est installé Jeedom n’est pas sauvegardé. Si vous avez modifié des paramètres de ce système (notamment via SSH), c’est à vous de trouver un moyen de les récupérer en cas de soucis. De même les dépendances ne le sont pas non plus il faudra donc les réinstaller après une restauration.

# Sauvegarde cloud

La sauvegarde dans le cloud permet à Jeedom d’envoyer vos sauvegardes directement sur le Market. Cela vous permet de les restaurer facilement et d’être sûr de ne pas les perdre. Le Market conserve les 6 dernières sauvegardes. Pour vous abonner il suffit d’aller sur votre page **profil** sur le Market, puis, dans l’onglet **mes backups**. Vous pouvez, à partir de cette page, récupérer une sauvegarde ou acheter un abonnement (pour 1, 3, 6 ou 12 mois).

> **Tip**
>
> Vous pouvez personnaliser le nom des fichiers de sauvegarde à partir de l’onglet **Mes Jeedoms**, en évitant toutefois les caractères exotiques.

# Fréquence des sauvegardes automatiques

Jeedom effectue une sauvegarde automatique tous les jours à la même heure. Il est possible de modifier celle-ci, à partir du "Moteur de tâches" (la tâche est nommée **Jeedom backup**), mais ce n’est pas recommandé. En effet, elle est calculée par rapport à la charge du Market.
