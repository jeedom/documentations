## Plugin Modbus

### Description

Plugin permettant de lire et écrire sur vos équipements ModbusTCP/IP et RTU



### Configuration du plugin

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





 :warning: Choix Niveau de Log de la librairie Modbus :

 Par defaut, il est configuré sur ERROR, la librairie étant verbeuse
 Vous pouvez changer son niveau : il vous faudra sauvegarder et redemarrer le demon




### Utilisation du plugin


IMPORTANT :

Pour utiliser le plugin, il vous faut connaitre les parametres de votre entrées/sorties de vos peripheriques modbus (format des données, ordre des bits, etcc...)

Pour les commandes, il y a des parametres a selectionner :

Details des parametres :
- Offset : il s'agit de la prise en compte ou non du decalage dans les numeros de registre sur certains equipements Modbus
- Choisir le pas du slider : Il s'agit de choisir le pas du slider dans le cas d'une commande de type Action/Slider si vous souhaitez envoyer des valeurs non entieres.




IMPORTANT :

Etant donné le temps passé à devoir configurer parfois certains équipements, il est possible d'exporter les commandes d'un équipement deja créé, pour le télécharger en local en .json.

Vous pourrez donc l'importer soit sur une autre box facilement sur un nouvel équipement du même type (juste à changer ce qui differe au niveau de sa connexion)


Sur la page d'un équipement, sur la droite, vous avez boutons :

![dependances](../images/importJson.png)





### COMMANDES DE LECTURE :

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






   #### ECRITURE MULTI REGISTRES:

  ###### Ecriture FC16 : registres suivis
        
  En Modbus, la fonction FC16 sert à écrire sur plusieurs registres consécutifs, pour cela :
  En créant une commande puis en choisissant Fc16, la commande sera parametrée en action/defaut et un bouton Configuer Fc16 apparaitra. 

 ![cmdEcritures](../images/configFc16.png)

  Il suffit de cliquer dessus, et on entre ici la valeur à attribuée à chaque registre ainsi que le format de la donnée.

  ![cmdEcritures](../images/bootboxFc16.png)
 
  

  Vous pouvez ajouter ou enlever des valeurs

  Il faut parametrer le registre de départ sur la commande. 
  Et de ce registre de départ que les valeurs seront écrites. 
  Les formats de données entrent en compte également, et si le registre de départ est 10, et que la premiere valeur a envoyée est 15 en int32, alors cela écrira 15 sur le registre 10 et 11. Et l'ecriture suivante si renseignée, sera sur le registre 12 à minima

  Vous pouvez également créer cette commande fc16, et venir changer les valeurs via scenario par exemple, sans repasser par l'UI du plugin :

  ```php
  $cmd = cmd::byId(iddevotrecommande);
  if(is_object($cmd)){
      $cmd->setConfiguration('arrayRegisters', [['value' => '10', 'format' => 'intformat16'],['value' => '12', 'format' => 'intformat16']]);
      $cmd->save();
  }
  ```

  ###### Ecriture FC6 : écriture simple ou registres non-suivis

  En créant une commande puis en choisissant Fc6, sur une commande Action/Curseur, vous n'avez qu'a renseigner le registre, le format de données, et c'est en actionnant ce curseur que la valeur choisie sera envoyée sur le registre


  Pour une écriture multiple, 2 choix possibles :
  En crééant une commmande Action/Défaut, il faut cocher Ecriture Registres non suivis : un bouton Configurer Fc6 apparaitra: vous pouvez cliquez dessus, pour configurer les registres d'ecritures (numero du registre, la valeur à envoyer, et le format). 
  En crééant une commande Action/Message, c'est via le dashboard que l'on entre les valeurs et registres dans le corps du message, avec la syntaxe suivante :

          adresseRegistre|valeur|format;adresseRegistre2|valeur|format;etccc

          Pour le format, vous disposez de :
          int16, int32, uint16, uint32, int64, uint64










  ###### Ecriture Bit : dans la configuration de la commande, il vous faut l'ordre des bytes et word.

  Une commande Ecriture Bit est incluse sur vos équipements et doit etre utilisée pour venir changer un bit sur un registre.

  Par défaut, le fonctionCode est de fc03, car cette commande sert à donner la valeur du registre parametré en binaire à la commande info "infobitbinary".

  Veuillez laisser cette configuration par défaut.

  Sur la commande info "infobitbinary", vous aurez la valeur binaire du registre parametre à la commande Ecriture Bit.
  
  Pour changer le bit sur le registre , on utilise sur le corps du message de la commande Ecriture Bit :

  valeuraenvoyer&PositionBit&Registre :   Ex:  1&4      Nous envoyons la valeur 1 au bit de la position 4 en partant de la droite, au registre spécifié
  Sur la commande info "infobitbinary", vous voyez la valeur 10000101, qui correspond a la valeur binaire du registre parametre.
  En écrivant 1&6, vous aurez dorenavant la valeur : 10100101 sur le registre parametré.





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




# Paramètres Spécifiques

###### RETOUR HEXA :
  Pour avoir une commande qui retourne la valeur du registre en HexaDecimal (pour une commande qui remonte les erreurs d'un équipement par exemple), il vous créer votre commande, la paramètrer comme habituellement,
  et cocher Retour Hexa.
  Au changement de valeur, la commande passera en sous type String,et prendra le retour hexa  



###### LECTURE MULTIREGISTRES :
  en cochant LectureMultiRegistres, cela va créé automatiquement autant de nouvelles commandes que le nombre precisé dans Nombre de registre, reprenant le nom de la commande originale, plus l'id de la commande en iteration. Vous pouvez bien attendu renommer les commandes; à la lecture de la commande originale, sa valeur contiendra une chaine de caractere des 10 valeurs des registres, et mettra à jour les 10 commandes correspondantes.


###### OPERATION SUR COMMANDE :
  Pour une opération sur le retour de value : dans le champ Opération sur la commande, vous pouvez remplir une opération mathématique en mettant le tag #value# pour indiquer la valeur de cette commande :
  exemple : (#value# / 10 ) * 2
  Le calcul sera effectué sur le retour de data de cette commande.
  Bien utiliser * pour les multiplications


###### Lecture Bits Registre :
En choisissant cela sur une commande Info, cela va créer une commande de type info, representant les 16 bits de ce registre ; cette nouvelle commande est crée a la remontée des valeurs pour la premiere fois, et est ensuite mise à jour a chaque nouvelle remontée.




# Import/Export Commandes XLSX

Après la création d'un équipement, vous pouvez importer un fichier xlsx pour la création de vos commandes
Le fichier template se trouver dans plugins/modbus/data/templateXlsx/exportModbus.xls
Vous pouvez y acceder et le télécharger via votre Jeedom -> Reglages->Systeme->Editeur de fichiers



# MQTT

Dans la configuration du plugin, vous pouvez cocher Utilisation de MQTT
Si le plugin officiel MQTT est installé et configuré, alors au demarrage du demon de Modbus, un topic sera créé sur le broker, et à la mise à jour des valeurs via le cron, les informations des registres seront également publiés sur le broker via le topic suivant :

jeeModbusMQTT/nomDeL'equipement/dataCmds


Sur la page d'un équipement, vous pouvez changer le topic par défaut (nom de l'équipement), par ce que vous désirez :

![renammeTopic](../images/renammeTopic.png)




