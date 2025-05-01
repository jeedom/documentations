    # Plugin Mobile

    Plugin permettant d’utiliser l’application Mobile Jeedom.

    L’application mobile Jeedom nécessite l’installation de ce plugin afin que la Box puisse dialoguer avec l’application Mobile.

    # Configuration du plugin Mobile pour Application V2

    Après installation du plugin, il vous suffit de l’activer :

    ![mobile1](./images/mobile1.png)

    # Première connexion à l'application V2

    Pour connecter votre téléphone : il y a 2 méthodes possible;
    Sur le premier écran de l'application, il vous est proposé de connecter votre compte Market, et ainsi de retrouver toutes les Boxs associées à ce compte, ou bien simplement ajouter une Box.

    ![v2ConnectMarket](./images/v2firstConnect.jpeg)

    > **IMPORTANT**
    >
    > Pour profiter des fonctionnalités de l'application, le Core de votre Jeedom doit être en 4.4.0 minimum

    #### **CONNEXION VIA LE COMPTE MARKET** :

    ![v2ConnectMarket](./images/v2connectMarket.jpeg)

    Il vous faut simplement rentrer votre identifiant Market ainsi que votre mot de passe.

    #### **CONNEXION VIA Box ID** :

    ![v22methods](./images/v22methods.jpeg)

    Plusieurs choix sur cet écran :

    - Vous entrez l'url de votre Jeedom (interne ou externe), ainsi que les identifiants d'accès à celle-ci et vous confirmez avec le bouton CONNEXION

    - Vous cliquez sur QR Code : un nouvel écran apparait; vous pourrez scanner un QR Code depuis le plugin Mobile de la Box que vous souhaitez ajoutée, via l'onglet QR Code du plugin.

    ![v2ModalQrApp](./images/v2QRCodeConnect.PNG)

    > Onglet QR Code du plugin Mobile

    > > ![v2ModalPlugin](./images/v2ModalQrCode.png)

    Une fois cette première étape passée, vous êtes enregistré dans l'application: si vous possédez le plugin Mobile, vous aurez accès via le menu aux Notifications, aux QR Codes, la customisation du Menu ....

    Dans le menu, vous aurez un onglet Boxs, qui regroupe toutes les Box présentes sur ce compte Market

    ![v2MenuBoxs](./images/v2MenuBoxs.PNG)

    ![v2floutedBoxs](./images/v2floutedBoxs.png)

    Il vous suffit de cliquer sur la Box où le plugin Mobile est installé, puis de vous identifier pour accéder à la Box.

    La Box passera en haut de la liste, ayant validée son authentification.
    Vous pouvez faire ainsi pour plusieurs Boxs.

    Vous pouvez aussi cliquer sur le bouton + en bas à droite pour accéder à différentes options;

    - QR Code pour ajouter une Box à la liste via le plugin Mobile,
    - Manuel pour ajouter manuellement une Box
    - Détection Atlas et Luna (si vous êtes en Wifi, détectera les Boxs sur le réseau)
    - Synchronisation Market pour actualiser les informations du compte Market configuré

    ![v2greenBtnAdd](./images/v2greenBtnAdd.PNG)

    Pour accéder aux fonctionnalités comme les Notifications, la Personnalisation du Menu ou la Géolocalisation, il faut au préalable avoir sélectionné au moins une Box 'actuelle'

    ![v2ActualBoxFlouted](./images/v2ActualBoxFlouted.jpeg)

    # Fonctionnement de la Géolocalisation

    Nous ajoutons une zone de Géolocalisation en cliquant sur l'icône +

    ![v2AddZone](./images/v2AddZone.jpeg)

    Nous tapons l'adresse recherchée, nous validons avec Entrée sur son téléphone; le curseur va alors se positionner sur l'adresse recherchée.
    Nous pouvons ensuite ajouter un nom et sauvegarder la zone.

    Cela créera une nouvelle commande sur votre équipement mobile, de type binaire, qui correspondra aux entrées et sorties de la zone si la géolocalisation est activée sur votre téléphone mobile.

    Nous pouvons également changer le radius de la zone, pour étendre la détection de la zone.

    ![v2ModifyBigRadius](./images/v2ModifyBigRadius.jpeg)


    Pour supprimer une zone, vous cliquez sur Editer, et cliquer ensuite sur l'icone Corbeille. Cela supprimera la zone de l'application, ainsi que la commande sur la box associée.

    # Paramètres de l'application:

    Vous pouvez choisir la durée d'affichage des Notifications inApp, suivant leur type : Succès, Info et Erreur: par défaut, elles sont reglées sur 5 secondes :


    <img src="./images/inAppduration.jpeg" width="300" height="300"/>

    # FAQ

    > **Mon mobile ne possède pas d'IQ (identifiant unique)**
    >
    > Le plugin Mobile a besoin de l'IQ du téléphone pour l'identifier. Si dans les logs du plugin vous voyez ce parametre manquant, il suffit simplement de vous rendre dans le menu Préférences de l'app, et automatiquement une alerte vous indiquera que la récuperation de l'IQ est en cours

    > **J'ai des soucis avec les notifications**
    >
    > Cette partie est actuellement en cours d'amélioration et d'optimisation sur l'application beta.

    > **J'ai des soucis d'affichage de ma webview**
    >
    > Sur votre Jeedom, dans les Préférences, vérifiez que la page d'accueil du mobile soit bien ACCUEIL.


