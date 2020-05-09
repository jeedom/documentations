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
plugin :

![image](index_html_6e0dcff06783d142.png)

Lancez l’installation des dépendances :

![image](index_html_ee255917648caafe.png)

L’installation peut prendre du temps…

![image](index_html_8f5ac294e319722b.png)

Une fois les dépendances installées, la date de la dernière installation
est inscrite :

![image](index_html_ae07628d0d9cf23c.png)

Allez dans les logs puis vérifiez le log « pulseaudio\_dep » afin de
vérifier s’il y a des éventuelles erreurs

![image](index_html_1857092a331f01.png)

Configuration du plugin 
-----------------------

De retour dans la configuration du plugin Pulseaudio, dans la section
« Plugin PulseAudio », sélectionner le port de clé Bluetooth :

![image](index_html_a5211f99cfeafe53.png)

Enfin, sauvegardez les modifications.

Configuration des équipements 
=============================

Pour accéder à la configuration des équipements PulseAudio, aller dans
l’onglet « Plugins », « Multimédia » puis « PulseAudio » :

![image](index_html_6144037f2a656556.png)

Cliquez sur « Ajouter » pour ajouter une enceinte Bluetooth :

![image](index_html_a952e7310171feda.png)

Ajoutez un nom à votre équipement :

![image](index_html_5a766711e205ad3.png)

Renseignez les différents champs :

![image](index_html_59ce8e4aed01a0ef.png)

-   **Nom de l’enceinte Bluetooth** : le nom de votre équipement

-   **Objet parent** : indique l’objet parent auquel appartient
    l’équipement

-   **Port clé Bluetooth** : sélection du port de votre émetteur
    Bluetooth utilisé pour ce profil

-   **Catégorie** : les catégories de l’équipement

-   **Commentaire** : perme d’ajouter un commentaire

-   **Activer** : permet de rendre votre équipement actif

Cliquez sur l’assistant d’appairage :

![image](index_html_b11a463a181fee2c.png)

Cliquez sur le bouton « suivant » :

![image](index_html_74cfef6547af4c77.png)

L’assistant scanne les périphériques Bluetooth situés aux alentours de
votre box Jeedom :

![image](index_html_fe41bb846a95a14d.png)

Entez l’adresse MAC de votre enceinte Bluetooth, puis cliquez sur
« suivant » :

![image](index_html_dc20199f96adebcf.png)

L’assistant connecte votre enceinte Bluetooth à Jeedom :

![image](index_html_775afe588b6090f6.png)

Une fois terminé, cliquez sur « suivant » .

Entrez un nom de service.

**ATTENTION** : il ne faut aucun espace ou caractère spécial dans ce nom
de service

Cliquez sur « suivant » une fois terminé :

![image](index_html_d15cbd674d21a3e7.png)

Fermez l’assistant :

![image](index_html_34ceb59a4191f244.png)

L’adresse MAC de votre enceinte Bluetooth et le nom du service associé
sont renseignés :

![image](index_html_2f0531b2fa9ff325.png)

Activez, puis Enregistrez l’équipement :

![image](index_html_b314d3c57bca2c32.png)

FAQ 
===

**Comment vérifier le status de mon service associé à mon enceinte ?.**

Cliquez sur le bouton « Status » :

![image](index_html_44f3633e34fd5c50.png)

Vérifier le statut du service. Celui-ci doit être démarré (start) avec
succès (SUCCESS) :

![image](index_html_fa551e46a49f58af.png)

**Comment tester l’envoi d’un fichier son à mon enceinte ?.**

Cliquez sur le bouton « Tester » :

![image](index_html_bcb212ce18487be2.png)

La lecture d’un fichier audio de test démarre. Le son sort de votre
enceinte Bluetooth.

Pour arrêter le test, cliquez sur « Arrêter le test ». Le processus de
lecture est stoppé.

![image](index_html_d2e914b1c2572539.png)

**Comment régler le volume de mes sorties son ?.**

Allez dans la configuration du plugin Pulseaudio, dans la section
« Plugin PulseAudio » :

![image](index_html_5ba2b0d4b358e723.png)

**Le volume de votre enceinte peut être réglé. Vous pouvez aussi cocher
les sorties audios à désactiver**

Troubleshoting 
==============

**Je n’ai pas de son !!!.**

Pensez à vérifier tous les logs afin de détecter un éventuel problème 

![image](index_html_672321a0b40ba4c5.png)
