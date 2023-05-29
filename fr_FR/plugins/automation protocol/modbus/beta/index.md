# Modbus

#Description

Plugin permettant de lire et écrire sur vos équipements ModbusTCP/IP et RTU
Non compatible Wago a l heure actuelle



# Configuration du plugin

Après téléchargement du plugin, il faut tout d’abord activer celui-ci, comme tout plugin Jeedom :

![config](../images/ModbusActiv.png)

Ensuite, il faut lancer l’installation des dépendances (même si elles apparaissent OK) :

![dependances](../images/ModbusDep.png)

Enfin, il faut démarrer le démon :

![demon](../images/ModbusDemon.png)

Rien n’est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/ModbusConfig.png)

Dans ce même onglet, il vous faut choisir la valeur du repos entre l'actualisation de vos équipements (par défaut 5 sec)

Vous pouvez aussi choisir de mettre un Retry pour re-executer la requête sur une commande/équipement qui serait en erreur (par défaut False)
Vous pouvez également choisir le nombre de tentatives et le délai entre ces tentatives.




# Utilisation du plugin


IMPORTANT :

Pour utiliser le plugin, il vous faut connaitre les parametres de votre entrées/sorties de vos peripheriques modbus (format des données, ordre des bits, etcc...)

Pour les commandes, il y a des parametres a selectionner :

Details des parametres :
- Valeur negative : pour les formats de type LONG/INT, il faut preciser si la valeur en ecriture/lecture sera negative
- Offset : il s'agit de la prise en compte ou non du decalage dans les numeros de registre sur certains equipements Modbus
- Choisir le pas du slider : Il s'agit de choisir le pas du slider dans le cas d'une commande de type Action/Slider si vous souhaitez envoyer des valeurs non entieres.




IMPORTANT :

Etant donné le temps passé à devoir configurer parfois certains équipements, il est possible d'exporter les commandes d'un équipement deja créé, pour le télécharger en local en .json.

Vous pourrez donc l'importer soit sur une autre box facilement sur un nouvel équipement du même type (juste à changer ce qui differe au niveau de sa connexion)


Sur la page d'un équipement, en bas à droite, vous avez cet encart :

![dependances](../images/exportFunction.png)


On clique sur Liste des commandes à exporter; une fenetre s'ouvre avec les commandes existantes sur cet équipement:

![dependances](../images/choiceCmds.png)

Vous pouvez tout les sélectionner si besoin grace au bouton en haut de la fenetre.
Quand les commandes sont choisies, cliquez sur Valider.



Vous verrez désormais les commandes choisies et pretes à etre exportées dans cet encart :

![dependances](../images/exportCmds.png)

Il vous suffit de cliquez sur Telecharger Config des commandes qui vient d'apparaitre.



Pour importer les commandes sur un équipement : cliquez en haut a droit d l'equipement sur le bouton Import Json :

![dependances](../images/importFunction.png)





Vous pouvez aussi choisir directement un modele d'equipement disponible dans la configuration du plugin, pour charger des commandes prévues dans ce modèle;
Choisir le modele choisi, puis Valider. Ensuite vous pouvez Sauvegarder.


DETAILS SUR MODBUS :


La taille d'un registre Modbus est de 2bytes(2 octets), soit 16bits



COMMANDES DE LECTURE :

Pour les entrées Coils  :  
  - Vous ajouter une Nouvelle Commande Modbus, et vous nommez la commande. Vous choisissez une commande de type Info, sous type Binaire ou Numerique.
  - Choisir le fonction code correspondant : FC01
  - Il faut choisir ensuite le registre de départ ainsi que le nombre de registres a lire
  Quand vous sauvegardez, la commande créé sera supprimée, pour créer autant de commandes que le nombre de registres précisés.
  Ex: Si vous choisissiez un start register à 1 et un nombre de registres à 4, il sera créé les commandes : ReadCoil_1, ReadCoil_2, ReadCoil_3, ReadCoil_4
  - Vous pouvez bien sur renommer ensuite les ReadCoilsà votre convenance.

Pour Fc2 Read Discrete :

- Creer une commande de type Info, sous type autre
- Choisir la fc02
- Choisir le format Bits, Big Endian, Big Word
- Renseigner le registre
- Et remplir le champ : Nombre de bits a lire (0 a 15)

Au retour de lecture, vous aurez une commande de type string avec la valeur des bits demandés


  Pour les Holdings Registers et les Inputs Registers:
  - Vous ajouter une Nouvelle Commande Modbus, et vous nommez la commande. Vous choisissez une commande de type Info, sous type Numerique.
  - Choisir le format correspondant : Float , Long/Integer ou Bits
  - Choisir le fonction code correspondant : FC04 ou FC03
  - Le Registre de depart ainsi que le nombre de registres : pour les floats, la valeur est au maximum encodé sur 4 registres, le minimum est de 2.



Certains registres ne peuvent se lire qu'en lisant plusieurs registres en meme temps sur une meme commande :

exemple : On créé une commande,choisir Info et soustype autre, en specifiant 10 registres;
Voir Parametres Specifique en fin de documentation


COMMANDES D'ECRITURE:

 Sur votre équipements, par défaut il y aura 3 commandes de type Action/message créées; Ecriture MultiRegistre, Ecriture Bit et Ecriture multicoils


IMPORTANT :


 Leur principe de fonctionnement:


![cmdEcritures](../images/modbusCmdsEcritures.png)




  CHANGEMENT DE BITS D'UN REGISTRE :

  Pour changer le bit d'un registre, vous devez utiliser la commande message EcritureBit; dans la configuration de la commande, dans le champ Registre de départ, vous devez choisir le numero du registre à écrire. Pas besoin d'autre configuration
  Ensuite, sur le corps du message de la commande sur le dashboard, vous devez utiliser la syntaxe suivante : valeurBit&indexbit
  Valeur bit possible 0 ou 1
  indexBit est la valeur entre 0 et 15 (valeurs comprises)
  Bien se referer a la documentation de votre équipement pour l'index du bit à changer




   NOUVELLE ECRITURE SUR PLUSIEURS REGISTRES A UNE REQUETE:

      - En créant une commande Action -> sous-type Autre, puis en choisissant Fc16, et en remplissant le Start Register et la nouvelle ligne Tableau Registre dans le Paramètrage de la commande, on pourra executer cette commande pour écrire a partir du registre du depart les valeurs entrées :

      Ex : Start Register : 10
      Ligne Tableau Registre : 10-45-22-25.6-2360
      On enverra sur les registres 10,11,12,13 et 14, les valeurs 10,45,22,22.6 et 2360
      Il faut bien séparer les valeurs par un - , et pour les nombres décimaux, bien mettre un .


  - Ecriture MultiRegistre : dans la configuration de la commande, il vous faut rentrer le registre de départ, ainsi que l'ordre des bytes et word.
  Par défaut, le fonctionCode est de fc16. Veuillez laisser cette configuration par défaut.

  Pour changer les valeurs sur les registres, il faut utiliser cette syntaxe:
  - valeuraenvoyer&nbderegistre, séparé par | :   Ex:  120&1|214.5&4      Nous envoyons l'entier 120 sur un registre, en partant du registre de départ configuré,
  puis 214.5 en float sur 4 registres suivant le précédent.

  Pour les types float, écrire la valeur comme ci dessus, avec un .


  - Ecriture MultiCoils : dans la configuration de la commande, il vous faut rentrer le registre de départ
      Par défaut, le fonctionCode est de fc15. Veuillez laisser cette configuration par défaut.

      Pour changer les valeurs sur les registres, il faut utiliser cette syntaxe:
      ex : 01110111    Cela enverra donc à partir du registre de départ configuré les valeurs True(1) ou False(0) aux registres



  - Ecriture Bit : dans la configuration de la commande, il vous faut rentrer le registre de départ, ainsi que l'ordre des bytes et word.
     Par défaut, le fonctionCode est de fc03, car cette commande sera a donner la valeur du registre parametré en binaire à la commande info "infobitbinary".

     Veuillez laisser cette configuration par défaut.

     Sur la commande info "infobitbinary", vous aurez la valeur binaire du registre parametre à la commande Ecriture Bit.
     Pour changer le bit sur le registre :

        valeuraenvoyer&PositionBit :   Ex:  1&4      Nous envoyons la valeur 1 au bit de la position 4 en partant de la droite
        Sur la commande info "infobitbinary", vous voyez la valeur 10000101, qui correspond a la valeur binaire du registre parametre.
        En écrivant 1&6, vous aurez dorenavant la valeur : 10100101 sur le registre parametré.



IMPORTANT :


Certains automates n'ont pas la fonction fc06
  Voir Parametres specifiques en fin de documentation



Pour écrire sur un Coil :

Exemple pour le registre 1 On:
- Vous ajouter une Nouvelle Commande Modbus, et vous nommez la commande. Vous choisissez une commande de type Action, sous type Defaut.
- Choisir Fc5 Write Single Coil
- Registre de depart : 1
- Nb de bytes : 1
- Mettre 1 dans valeur a envoyer

Exemple pour le registre 1 Off:
- Vous ajouter une Nouvelle Commande Modbus, et vous nommez la commande. Vous choisissez une commande de type Action, sous type Defaut.
- Choisir Fc5 Write Single Coil
- Registre de depart : 1
- Nb de bytes : 1
- Mettre 0 dans valeur a envoyer


En agissant sur ces commandes action sur votre dashboard, vous enverrez donc True ou False à vos Coils.




Pour écrire sur un Holding Register :

- Vous ajouter une Nouvelle Commande Modbus, et vous nommez la commande. Vous choisissez une commande de type Action, sous type Slider.
- Choisir aussi une valeur Min et Max pour ce slider (pensez a prendre une valeur min pour envoyer valeur negative)
- Choisir Fc6 Write Single Register
- Choisir le nombre de registre : 1
- Choisir le pas du slider (pour les décimales, écrire avec un .   ex: 0.2)



Quand une écriture s'effectue, que cela réussisse ou non, un message apparait sur Jeedom.
Vous pouvez désactiver/activer ce message depuis la configuration du plugin.





# Paramètres Spécifiques

RETOUR HEXA :
  Pour avoir une commande qui retourne la valeur du registre en HexaDecimal (pour une commande qui remonte les erreurs d'un équipement par exemple), il vous créer votre commande, la paramètrer comme habituellement,
  et cocher Retour Hexa.

  Cela créera au retour d'état une nouvelle commande qui portera le nom de la commande originale, suivi de _HEXAVALUE



LECTURE MULTIREGISTRES :
  en cochant LectureMultiRegistres, cela va créé automatiquement autant de nouvelles commandes que le nombre precisé dans Nombre de registre, reprenant le nom de la commande originale, plus l'id de la commande en iteration. Vous pouvez bien attendu renommer les commandes; à la lecture de la commande originale, sa valeur contiendra une chaine de caractere des 10 valeurs des registres, et mettra à jour les 10 commandes correspondantes.



Fc16 REGISTRES NON SUIVIS :
  Certains automates n'ont pas la fonction fc06
  Vous pouvez créér une commande Action, sous type Message, et choisir fc16
  Cocher Fc16 Registre non suivis
  Dans le dashboard, il faut utiliser cette syntaxe :
  registre de depart ! valeur & nbregistres séparé par un |

  Ex: 7!122.5&2|10!22&2

  On va écrire à partir du registre 7, la valeur 122.5 sur 2 registres et également a partir du registre 10, la valeur 22, sur 2 registres



OPERATION SUR COMMANDE :
  Pour une opération sur le retour de value : dans le champ Opération sur la commande, vous pouvez remplir une opération mathématique en mettant le tag #value# pour indiquer la valeur de cette commande :
  exemple : (#value# / 10 ) * 2
  Le calcul sera effectué sur le retour de data de cette commande.
  Bien utiliser * pour les multiplications






# Import/Export Commandes XLSX

Après la création d'un équipement, vous pouvez importer un fichier xlsx pour la création de vos commandes
Le fichier template se trouver dans plugins/modbus/data/templateXlsx/exportModbus.xls
Vous pouvez y acceder et le télécharger via votre Jeedom -> Reglages->Systeme->Editeur de fichiers
