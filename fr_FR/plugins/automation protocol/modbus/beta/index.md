# Modbus

#Description

Plugin permettant de lire et écrire sur vos équipements ModbusTCP/IP et RTU



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




COMMANDES DE LECTURE :

Pour les entrées Coils et Discretes Inputs :  
  - Vous ajouter une Nouvelle Commande Modbus, et vous nommez la commande. Vous choisissez une commande de type Info, sous type Binaire ou Numerique.
  - Choisir le fonction code correspondant : FC01 ou FC02
  - Il faut choisir ensuite le registre de départ ainsi que le nombre de bytes a lire (le nombre de registres)
  Quand vous sauvegardez, la commande créé sera supprimée, pour créer autant de commandes que le nombre de bytes précisé.
  Ex: Si vous choisissiez un start register à 1 et un nombre de bytes à 4, il sera créé les commandes : ReadCoil_1, ReadCoil_2, ReadCoil_3, ReadCoil_4
  - Vous pouvez bien sur renommer ensuite les ReadCoils/Discretes à votre convenance.



  Pour les Holdings Registers et les Inputs Registers:
  - Vous ajouter une Nouvelle Commande Modbus, et vous nommez la commande. Vous choisissez une commande de type Info, sous type Numerique.
  - Choisir le format correspondant : Float , Long/Integer ou Bits
  - Choisir le fonction code correspondant : FC04 ou FC03
  - Le Registre de depart ainsi que le nombre de bytes : pour les floats, le maximum de registres encodé est de 4 registres.



COMMANDES D'ECRITURE:

 Sur votre équipements, par défaut il y aura 3 commandes de type Action/message créées; Ecriture MultiRegistre, Ecriture Bit et Ecriture multicoils


IMPORTANT :


 Leur principe de fonctionnement:



![cmdEcritures](../images/modbusCmdsEcritures.png)




  - Ecriture MultiRegistre : dans la configuration de la commande, il vous faut rentrer le registre de départ, ainsi que l'ordre des bytes et word.
  Par défaut, le fonctionCode est de fc16. Veuillez laisser cette configuration par défaut.

  Pour changer les valeurs sur les registres, il faut utiliser cette syntaxe:
  - valeuraenvoyer&nbderegistre, séparé par | :   Ex:  120&1|214.5&4      Nous envoyons l'entier 120 sur un registre, en partant du registre de départ configuré,
  puis 214.5 en float sur 4 registres suivant le précédent.

  Pour les types float, écrire la valeur comme ci dessus, avec un .


  - Ecriture MultiCoils : dans la configuration de la commande, il vous faut rentrer le registre de départ
  Par défaut, le fonctionCode est de fc15. Veuillez laisser cette configuration par défaut.

  Pour changer les valeurs sur les registres, il faut utiliser cette syntaxe:
  -  ex : 01110111    Cela enverra donc à partir du registre de départ configuré les valeurs True(1) ou False(0) aux registres




  - Ecriture Bit : dans la configuration de la commande, il vous faut rentrer le registre de départ, ainsi que l'ordre des bytes et word.
  Par défaut, le fonctionCode est de fc03, car cette commande sera a donner la valeur du registre parametré en binaire à la commande info "infobitbinary".

  Veuillez laisser cette configuration par défaut.

  Sur la commande info "infobitbinary", vous aurez la valeur binaire du registre parametre à la commande Ecriture Bit.
  Pour changer le bit sur le registre

  - valeuraenvoyer&PositionBit :   Ex:  1&4      Nous envoyons la valeur 1 au bit de la position 4 en partant de la droite
  Sur la commande info "infobitbinary", vous voyez la valeur 10000101, qui correspond a la valeur binaire du registre parametre.
  En ecrivant 1&6, vous aurez dorenavant la valeur : 10100101 sur le registre parametré.



IMPORTANT :


Certains automates n'ont pas la fonction fc06
Vous pouvez créér une commande Action, sous type Message, et choisir fc16
Dans le dashboard, il faut utiliser cette syntaxe :
registre de depart ! valeur & nbregistres séparé par un |

Ex: 7!122.5&2|10!22&2

On va ecrire à partir du registre 7, la valeur 122.5 sur 2 registres et egalement a partir du registre 10, la valeur 22, sur 2 registres



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
