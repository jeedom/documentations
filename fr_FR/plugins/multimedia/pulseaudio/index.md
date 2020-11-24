# Plugin PulseAudio

Plugin permettant de connecter une enceinte Bluetooth à votre Jeedom. Le
plugin permet aussi de contrôler le volume de votre enceinte via le
package pulseaudio.

Description :
=============

Ce plugin permet la gestion du service PulseAudio. Ce service gère tout
ce qui concerne les entrées sorties sons et micro, que les sorties
soient filaires, via bluetooth ou encore sur le réseau.

Il rend également visible le service PulseAudio sur votre réseau
interne, il vous est alors possible de le contrôler depuis un PC sous
GNU/Linux et de faire en sorte que la musique lue sur votre PC soit
envoyée sur la sortie son de Jeedom.

Ce plugin permet également l’ajout des enceintes Bluetooth au service
PulseAudio de Jeedom et le propose comme une sortie standard. Ainsi, via
Jeedom et ce plugin PulseAudio vous pouvez exécuter Deezer sur votre PC
sous GNU/Linux (ou Windows avec le client PulseAudio compatible) et
faire en sorte que le son soit envoyés aux enceintes bluetooth
raccordées à Jeedom ainsi que sur la sortie son (HDMI/Jack) de Jeedom
pour compléter avec un ampli.

Ce mode simultané arrivera prochainement avec la possibilité de mettre
une latence, évitant le décalage entre les sorties son
HDMI/Jack/Bluetooth, parfait pour le mode soirée à la foi sur la
terrasse avec les enceintes Bluetooth et dans la salle avec l’ampli !

Configuration
=============

Installation du plugin
----------------------

Après téléchargement du plugin, il vous faudra simplement activer le
plugin et lancer l’installation des dépendances.

L’installation peut prendre du temps… Une fois les dépendances installées, la date de la dernière installation
est inscrite.

Allez dans les logs puis vérifiez le log « pulseaudio\_dep » afin de
vérifier s’il y a des éventuelles erreurs.

Configuration du plugin
-----------------------

De retour dans la configuration du plugin Pulseaudio, dans la section
« Plugin PulseAudio », sélectionner le port de clé Bluetooth et sauvegardez les modifications.

Configuration des équipements
=============================

Pour accéder à la configuration des équipements PulseAudio, aller dans
l’onglet « Plugins », « Multimédia » puis « PulseAudio ».

Cliquez sur « Ajouter » pour ajouter une enceinte Bluetooth :

-   **Nom de l’enceinte Bluetooth** : le nom de votre équipement.

-   **Objet parent** : indique l’objet parent auquel appartient
    l’équipement

-   **Port clé Bluetooth** : sélection du port de votre émetteur
    Bluetooth utilisé pour ce profil.

-   **Catégorie** : les catégories de l’équipement.

-   **Activer** : permet de rendre votre équipement actif.

-   **Visible** : permet de rendre votre équipement visible.

Cliquez sur l’assistant d’appairage :

- Cliquez sur le bouton « suivant »,

- L’assistant scanne les périphériques Bluetooth situés aux alentours de
votre box Jeedom,

- Renseignez l’adresse MAC de votre enceinte Bluetooth, puis cliquez sur
« suivant »,

- L’assistant connecte votre enceinte Bluetooth à Jeedom,

- Une fois terminé, cliquez sur « suivant ».

Entrez un nom de service.

**ATTENTION** : il ne faut aucun espace ou caractère spécial dans ce nom
de service.

Cliquez sur « suivant » une fois terminé et fermez l’assistant.

L’adresse MAC de votre enceinte Bluetooth et le nom du service associé
sont renseignés.

Activez, puis Enregistrez l’équipement :

FAQ
===

**Comment vérifier le status de mon service associé à mon enceinte ?.**

Cliquez sur le bouton « Status » :

Vérifier le statut du service. Celui-ci doit être démarré (start) avec
succès (SUCCESS) :

**Comment tester l’envoi d’un fichier son à mon enceinte ?.**

Cliquez sur le bouton « Tester » :

La lecture d’un fichier audio de test démarre. Le son sort de votre
enceinte Bluetooth.

Pour arrêter le test, cliquez sur « Arrêter le test ». Le processus de
lecture est stoppé.

**Comment régler le volume de mes sorties son ?.**

Allez dans la configuration du plugin Pulseaudio, dans la section
« Plugin PulseAudio » :

**Le volume de votre enceinte peut être réglé. Vous pouvez aussi cocher
les sorties audios à désactiver**

Troubleshoting
==============

**Je n’ai pas de son !!!.**

Pensez à vérifier tous les logs afin de détecter un éventuel problème.
