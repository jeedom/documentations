# Complemento CoolAutomation

Le plugin CoolAutomation permet d'intégrer vos systèmes de climatisation CoolAutomation dans votre environnement Jeedom. Il vous offre la possibilité de contrôler et de surveiller vos unités de climatisation directement depuis votre interface domotique.

## Présentation

CoolAutomation est un fabricant de passerelles pour systèmes de climatisation, permettant de contrôler vos unités via une interface unique. Ce plugin permet d'intégrer ces passerelles dans votre système Jeedom pour une gestion centralisée de votre confort thermique.

## Prérequis

- Avoir un équipement CoolAutomation (CoolMaster ou CoolLinkHub) installé et configuré sur votre réseau local.
- Connaître l'adresse IP de votre équipement CoolAutomation.

## Installation du plugin

Comme pour tous les plugins Jeedom, l'installation se fait depuis le Market Jeedom. Une fois le plugin installé, il vous suffit de l'activer.

# Descubrimiento automático de equipos CoolAutomation

Le plugin dispose d'une fonction de détection automatique des équipements CoolAutomation présents sur votre réseau.

Il suffit simplement de cliquer sur **Scan Réseau** pour lancer une détection des équipements sur votre réseau.

![scanNetwork](./images/scanNetwork.png)

Une fois trouvés, les équipements (eqlogics) correspondants seront automatiquement créés dans votre Jeedom.




# Détail de l'équipement

La page de l'équipement regroupe toutes les informations nécessaires à la configuration et à la création des unités dépendantes.

> **Note**: Toutes les informations de cette page sont automatiquement rafraîchies à chaque fois que vous y accédez.

![eqlogicMain](./images/eqlogicMain.png)

## Informations techniques

Sur la partie droite, vous pouvez consulter les paramètres techniques de l'équipement :
- Version du firmware
- Nombre maximum de lignes disponibles sur l'appareil
- Nombre d'unités maximales supportées
- Autres caractéristiques techniques

Ces données sont affichées à titre informatif uniquement et ne peuvent pas être modifiées via l'interface.

## Configuration de connexion

Sur la partie gauche, vous trouverez :
- L'adresse IP de l'équipement
- Son numéro de série

> **Important** : Ces deux informations sont essentielles car elles permettent d'adresser correctement les requêtes vers l'API de l'appareil. 

## Serveur REST

En dessous des informations de connexion, vous trouverez l'état du Serveur REST. Il s'agit du serveur web intégré à l'appareil qui permet la communication avec le plugin Jeedom. 

Si le serveur n'est pas activé, vous devez l'activer en cliquant sur le bouton correspondant :

![activateRestServer](./images/activateRestServer.png)

> **ATENCIÓN**  
> L'activation du serveur REST provoquera le redémarrage de l'équipement.

## Gestion des unités

Dans la section "Gestion des Lignes Actives", vous retrouverez toutes les unités connectées à votre équipement CoolAutomation et disponibles pour être intégrées à Jeedom.



# Personnalisation de l'équipement

## Changer l'image de l'équipement

Vous pouvez personnaliser l'apparence de votre équipement CoolAutomation en modifiant son image. Pour cela :

1. Rendez-vous sur la page de l'équipement CoolAutomation
2. Cliquez sur l'image existante pour afficher la bibliothèque d'images
3. Sélectionnez l'image qui correspond le mieux à votre équipement
4. Cliquez sur "Sauvegarder" pour appliquer le changement

![chooseImg](./images/chooseImg.png)

# Creación de Unidades y su Equipo Maestro

Pour intégrer les unités de climatisation connectées à votre équipement CoolAutomation :

1. Accédez à la page de configuration de l'équipement principal
2. Dans la section "Gestion des Lignes Actives", cochez les unités que vous souhaitez contrôler
3. Cliquez sur "Sauvegarder"

![checkboxLines](./images/checkboxLines.png)

Cette action créera :
- Un équipement Jeedom pour chaque unité sélectionnée
- Un équipement "Maître" permettant de commander l'ensemble d'une ligne

> **ATENCIÓN**  
> - Si vous décochez une unité déjà créée puis sauvegardez, l'équipement correspondant sera supprimé.  
> - Si toutes les unités d'une ligne sont décochées, l'équipement Maître de cette ligne sera également supprimé.

# Aperçu des équipements créés

Après avoir configuré vos unités, vous pourrez visualiser l'ensemble des équipements créés.

Vue d'ensemble des lignes créées :
![linesCreated](./images/linesCreated.png)

Détail des unités enfants :
![detailsChilds](./images/detailsChilds.png)





# Organisation des équipements

## Asignar unidades a un objeto

Lorsque vous avez de nombreuses unités, il peut être fastidieux d'attribuer individuellement chaque unité à un objet parent (pièce) dans Jeedom. Le plugin propose une fonctionnalité d'attribution par lot :

1. Cochez les unités que vous souhaitez associer à un même objet
2. Cliquez sur "Attribuer la sélection à un objet"
3. Sélectionnez l'objet parent dans la liste déroulante

![attribuateObjects](./images/attribuateObjects.png)

> **Astuce** : Vous pouvez sélectionner toutes les unités en une seule fois en utilisant la case à cocher située à côté du bouton d'attribution.

# Gestion des données

## Actualización de datos

Les données de vos équipements sont actualisées automatiquement selon la fréquence configurée dans les paramètres du plugin.

Pour un rafraîchissement manuel plus ciblé, vous disposez de deux méthodes :

1. **Rafraîchissement par ligne** : Cliquez sur l'icône "Refresh" d'un équipement Maître pour actualiser les données de toutes les unités qui lui sont rattachées.

2. **Rafraîchissement individuel** : Cliquez sur l'icône "Refresh" d'une unité spécifique pour n'actualiser que les données de cette unité.

Cette approche permet d'optimiser les requêtes réseau en ne rafraîchissant que les données nécessaires.


# Contrôle des équipements

## Pilotage des unités et des Maîtres

Le plugin vous offre deux niveaux de contrôle :

1. **Contrôle individuel** : Chaque unité peut être pilotée indépendamment via ses propres commandes.

2. **Contrôle groupé** : Pour commander simultanément toutes les unités d'une même ligne, utilisez les commandes de l'équipement Maître correspondant.

> **Important concernant les consignes de température**  
> Les consignes de température sont toujours associées à un mode spécifique : Caliente o frío.  
> Lorsque vous modifiez une consigne via un équipement Maître :
> - La valeur de consigne sera mise à jour sur toutes les unités rattachées
> - Le mode associé (Chaud ou Froid) sera également appliqué à toutes les unités
> 
> **Conseil** : Pensez à réajuster le mode souhaité sur chaque unité après avoir défini une consigne globale si vous souhaitez des modes différents pour certaines unités.

# Fonctionnalités avancées

## Registro masivo

Le plugin vous permet d'activer l'historisation des commandes pour plusieurs équipements simultanément :

1. Accédez à la page principale du plugin et cliquez sur l'icône d'historisation :

   ![modalHistorize](./images/modalHistorize.png)

2. Sélectionnez le périmètre d'historisation souhaité :

   ![chooseOptionHistorize](./images/chooseOptionHistorize.png)

   Options disponibles :
   - Une unité spécifique
   - Toutes les unités d'un équipement CoolMaster/CoolLinkHub
   - Toutes les unités du plugin

3. Selon votre choix initial, un second sélecteur apparaîtra pour affiner votre sélection :

   ![secondSelect](./images/secondSelect.png)

4. Sélectionnez les commandes à historiser (vous pouvez toutes les sélectionner via la première case à cocher) :

   ![selectedCmds](./images/selectedCmds.png)

5. Cliquez sur "Historiser" pour appliquer la configuration.



# Gestion avancée des températures

## Limites de consigne Min/Max

Le plugin offre une fonctionnalité de gestion des plages de températures admissibles pour chaque mode de fonctionnement.

Pour l'activer :

1. Accédez à la configuration du plugin
2. Activez l'option "Gestion Min/Max"

Une fois activée, quatre commandes supplémentaires seront créées pour chaque unité :
- Consigne Min Chaud
- Consigne Max Chaud  
- Consigne Min Froid
- Consigne Max Froid

### Configuration des limites

Pour chaque commande, vous pouvez définir des valeurs minimales et maximales dans leur configuration, créant ainsi une plage de consigne autorisée pour chaque mode.

### Fonctionnement automatique

Cette fonctionnalité offre deux avantages principaux :

1. **Protection contre les modifications externes** : Si une consigne est modifiée directement sur l'appareil physique (hors Jeedom) et sort des plages définies, le cron du plugin rétablira automatiquement la consigne à la valeur limite la plus proche.

2. **Validation des commandes** : Lorsque vous envoyez une commande de consigne depuis Jeedom, celle-ci ne sera appliquée que si la valeur demandée se trouve dans la plage autorisée pour le mode en cours (chaud ou froid).

# Dépannage et assistance

En cas de problème avec le plugin :

1. Vérifiez que votre équipement CoolAutomation est correctement connecté au réseau
2. Assurez-vous que le serveur REST est bien activé
3. Consultez les logs du plugin pour identifier d'éventuelles erreurs
4. Vérifiez que les firmwares de vos équipements sont à jour

Pour toute question ou assistance supplémentaire, n'hésitez pas à consulter le forum Jeedom ou à contacter le support.