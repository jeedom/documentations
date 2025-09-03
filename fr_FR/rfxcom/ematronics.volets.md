# Volet Ematronics

## Recherche de l’ID de la télécommande

### Aller dans "Plugins", "Gestion des plugins", "RFX COM"

![image07](images/volet.ematronic/image07.png)

### Dans "Gestion des protocoles RFXcom"

![image04](images/volet.ematronic/image04.png)

cocher le Protocole 8, BlindsT1, Enregistrer et sortir.

![image08](images/volet.ematronic/image08.png)

### Activer, "Lancer en mode debug"

![image03](images/volet.ematronic/image03.png)

Attendre l’ouverture de la fenêtre, puis appuyer sur la touche Ouvrir de votre télécommande Ematronic.

````
MainThread - rfxcmd:2765 - DEBUG - Test message: 09 19 03 01 1F 84 B9 01 01 60
MainThread - rfxcmd:2805 - DEBUG - Message OK
MainThread - rfxcmd:328 - DEBUG - Verified OK
MainThread - rfxcmd:334 - DEBUG - PacketType: 19
MainThread - rfxcmd:338 - DEBUG - SubType: 03
MainThread - rfxcmd:342 - DEBUG - SeqNbr: 01
MainThread - rfxcmd:346 - DEBUG - Id1: 1F
MainThread - rfxcmd:350 - DEBUG - Id2: 84
MainThread - rfxcmd:359 - DEBUG - Verify correct packet length
MainThread - rfxcmd:556 - DEBUG - Save packet to log_msgfile
````

### Rechercher de l’ID de la télécommande

Remarque: les télécommandes Ematronic commencent toujours par : 09 19 03 donc la zone qui nous intéresse démarre de "Test message" : 09 19 03.

Repérer : Id1 et Id2 et ajouter l’hexadecimal suivant : dans mon exemple Id1=1F et Id2=84. vous devez donc les repérer dans la ligne, "Test message" et en extraire l’Id3 , ici Id3=B9, Notre télécommande a donc comme ID ⇒ 1F84B9.

### Arrêter le Mode Debug par le bouton "Arrêter/Redémarrer le démon"

![image06](images/volet.ematronic/image06.png)

## Création de la télécommande sous JeeDom

Aller dans Plugins, Protocole domtique, RFXcom.

![image10](images/volet.ematronic/image10.png)

Cliquer sur "Ajouter" et saisir un nom pour votre télécommande virtuelle.

![image00](images/volet.ematronic/image00.png)

Dans la liste des équipements, choisir le template : "Volet Ematronic - Défaut".

Remplacer l’ID automatique par celui que vous avez extrait précédemment et Cocher "Activer" et "Visible" :

![image11](images/volet.ematronic/image11.png)

Cliquer sur "Sauvegarder" pour enregistrer votre configuration et charger le template "Volet Ematronic - Défaut".

![image02](images/volet.ematronic/image02.png)

Voilà votre télécommande est prête, elle doit ressembler à ça :

![image05](images/volet.ematronic/image05.png)

## Associer votre télécommande virtuelle JeeDom à votre moteur Ematronic

### Réinitialisation du moteur

- Débrancher électriquement le moteur.
- Sur la télécommande d’origine, laisser le bouton "Up" Appuyé 3 ou 4 secondes, la led devient rouge fixe.
- Brancher électriquement le moteur.
- Relâcher le bouton de la télécommande.
- Le moteur fera 5 bips.
- Rapidement, appuyer avec un trombone sur le "micro bouton" à l’arrière de la télécommande.
- Le moteur fera 3 bips.

## Association de la télécommande virtuelle JeeDom au moteur Ematronic

- Débrancher électriquement le moteur.
- Sur le télécommande d’origine, laisser le bouton "Up" Appuyer 3 ou 4 secondes, la led devient rouge fixe.
- Brancher électriquement le moteur.
- Relâcher le bouton de la télécommande.
- Le moteur fera 5 bips.
- Appuyer sur la Commande "Monter" de la télécommande virtuelle de JeeDom.
[image](images/volet.ematronic/image09.png)
- Le moteur fera 3 bips, pour annoncer que votre JeeDoom est associé !!
