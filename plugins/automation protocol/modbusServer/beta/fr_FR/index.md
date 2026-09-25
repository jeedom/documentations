# Plugin modbusServer


# Configuration du plugin

Après téléchargement du plugin, il faut tout d’abord activer celui-ci, comme tout plugin Jeedom :

![config](../images/ModbusServerActiv.png)

Ensuite, il faut lancer l’installation des dépendances (même si elles apparaissent OK) :

![dependances](../images/ModbusServerDep.png)

Enfin, il faut démarrer le démon :

![demon](../images/ModbusServerDemon.png)

Rien n’est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/ModbusServerConfig.png)

Par defaut le port du ModbusServer est 1048; c'est ce port qu'il faut renseigner coté client pour interroger le server
Vous pouvez changer ce port au besoin

Vous pouvez regler également le cron du plugin, qui se chargera de la mise à jour des commandes enregistrées sur le serveur. 



# Utilisation du plugin

Quand on se rend sur le plugin, il y a l'equipement jeeModbusServer qui est crée; c'est sur cet équipement que l'on ajoute les commandes de Jeedom que l'on veut ajouter au server

![jeeServer](../images/ModbusServerEqLogicServer.png)


Quand on entre dans l'equipement, on peut voir le bouton Mapping des commandes, qui servira a 'transformer' les commandes ajoutées en registres lisible par un client Modbus


Tout d'abord, on se rend dans l'onglet Commandes pour ajouter des commandes de notre Jeedom

![addCmdInfo](../images/ModbusServerAddCmdInfo.png)


On ajoute par exemple une commande Info :

On nomme la commande, et on recherche sur notre Jeedom via les objets la commande que l'on veut ajouté au jeeModbusServer. 

![cmdAdded](../images/ModbusServerCmdAdded.png)


Une fois fait, on peut sauvegarder l'equipement.



A partir de la, on peut aller mapper la commande en commande 'modbus'.

On retourne dans l'onglet Equipement, et on peut cliquer sur Mapping des commandes :
![btnServer](../images/ModbusServerBtnMapping.png)

Quand on clique sur Mapping de commandes, si aucune commande n'a été ajouté au serveur, vous verrez ce message d'erreur :
![noCmd](../images/ModbusServerNoCmd.png)


Si des commandes existents, on se retrouve avec une interface comme celle-ci:
![cmdMapped](../images/ModbusServerCmdMapped.png)

On peut y retrouver l'objet Jeedom où la commande se trouve, son équipement, ainsi que sa valeur actuelle. 

Les menus selecteurs servent a configurer le registre Modbus : 

- Le Type d'Input pour choisir le type de registre Modbus (holding, coil)
- Start Register : Registre de départ de cette commande Modbus
- Nb bytes : en Modbus, un registre peut etre ecrire sur plusieurs bytes (un registre est egal a 16 bits, soit 1 byte).
- Format Data : le type de la valeur (Integrer(entier), Float(Decimal) ou Bit(0 ou 1))
- ByteOrder et WordOrder : en général, ces reglages sont en Big sur les automates Modbus. Vous pouvez eventuellement mettre la valeur Little


Une fois les commandes configurées, on peut cliquer sur Valider. 

Les commandes seront injectées sur le serverModbus, et donc accesibles via un clientModbus, sur le port choisi en configuration


A la configuration et l'ajout d'une commande sur le serveur Modbus, via la modale, alors un Listener Jeedom sera créé sur le plugin, pour surveiller les changements d'etats de la commande initiale, et ainsi mettre a jour l'alias de commande sur le jeeModbusServer




