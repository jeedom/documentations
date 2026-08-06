# Plugin PJLink

Le plugin **PJLink** permet le contrôle des vidéoprojecteurs compatibles avec le protocole *PJLink* pour communiquer sur le réseau local.

La liste non-exhaustive des marques compatibles avec le protocole *PJLink* est : **BenQ, Canon, Casio, Epson, Fujifilm, Hitachi, InFocus, Maxell, Mitsubishi, Nec, Panasconic, Ricoh, Sharp, Sky, Sony...**

![PJLink Compatible Brands](../images/compatibleBrands.png)

Pour plus d'informations sur les modèles prenant en charge le protocole *PJLink*, veuillez vous référer à [cette liste classée par année de commercialisation](https://pjlink.jbmia.or.jp/english/list.html){:target="\_blank"} ou à la documentation de votre matériel.

> **Information importante**    
> Les équipements compatibles se décomposent en 2 classes, selon votre matériel vous n'aurez pas accès aux mêmes informations :
> * **Classe 1** : compatible avec les fonctions de base.
> * **Classe 2** : compatible avec les fonctions de base et les fonctions avancées.


# Configuration

## Configuration du plugin

Le plugin **PJLink** ne nécessite aucune configuration spécifique et doit seulement être activé après l'installation.

![PJLink plugin configuration](../images/pjlink0.png)

Le plugin utilise un *cron5* afin de mettre à jour les données toutes les 5 minutes.

## Configuration des équipements

Pour accéder aux différents équipements **PJLink**, dirigez-vous vers le menu **Plugins → Multimédia → PJLink**.

![PJLink plugin configuration](../images/pjlink1.png)

> **A savoir**    
> Le bouton **+ Ajouter** permet d'ajouter un nouvel équipement **PJLink**.

Sur la page de l'équipement renseignez l'**adresse ip** du matériel *(obligatoire)* ainsi que le **mot de passe** si un mot de passe a été défini sur le matériel *(facultatif)*.    
Le **port** utilisé par défaut par le protocole est le **4352**. A ne modifier qu'en connaissance de cause.    
Le **timeout** est défini par défaut à **5** secondes. Vous pouvez augmenter ce délai si votre matériel met plus de temps à répondre.

Cochez la case **Activer** et cliquez sur le bouton **Sauvegarder**. Le plugin va alors créer les commandes correspondant à votre matériel et récupérer les informations disponibles.

**Classe 1 :**
![PJLink plugin configuration](../images/pjlink2.png)

**Classe 2 :**
![PJLink plugin configuration](../images/pjlink3.png)

# Template de widget

Le visuel des équipements **PJLink** se veut épuré et pertinent. Différentes informations sont affichées au survol de chaque icône.

Vous n'aurez pas accès aux mêmes commandes selon les possiblités offertes par votre matériel.

## Classe 1

![PJLink plugin configuration](../images/pjlink4.png)

* ![PJLink plugin configuration](../images/pjlink6.png) : De couleur verte, cette icône indique qu'aucune erreur n'est en cours. Si une erreur est détectée, l'icône sera de couleur orange et le contenu de l'erreur sera indiqué au survol ou sur la dernière information directement dans l'équipement.
* ![PJLink plugin configuration](../images/pjlink7.png) : S'affiche si le son est coupé *(Mute Audio)*.
* ![PJLink plugin configuration](../images/pjlink8.png) : S'affiche si la vidéo est coupée *(Mute Video)*.
* L'icône représentant le vidéoprojecteur change de couleur en fonction de l'état du matériel :
  * **Verte** : Le vidéoprojecteur est allumé.
  * **Rouge** : Le vidéoprojecteur est éteint.
  * **Bleue** : Le vidéoprojecteur est en cours de refroidissement.
  * **Orange** : Le vidéoprojecteur est en cours de chauffe.
* **Entrée Vidéo** : Permet de sélectionner l'entrée vidéo *(input)*.
* **Power** : Allumer/Éteindre le matériel.
* **Mute Audio** : Pour arrêter ou reprendre la diffusion sonore.
* **Mute Video** : Pour arrêter ou reprendre la diffusion vidéo.

## Classe 2

![PJLink plugin configuration](../images/pjlink5.png)

Toutes les commandes de la classe 1 sont accessibles et également :

* ![PJLink plugin configuration](../images/pjlink9.png) : S'affiche si l'audio et la vidéo sont gelés *(Freeze)*.
* **Freeze** : Geler/Dégeler la vidéo et l'audio.
* **Speaker Volume** : Le bouton "**-**" permet de diminuer le volume sonore et "**+**" de l'augmenter.
* **Microphone Volume** : Le bouton "**-**" permet de diminuer le volume du microphone et "**+**" de l'augmenter.
