## Plugin Modbus

### Description

Plugin permettant de lire et écrire sur vos équipements ModbusTCP/IP et RTU avec une architecture asynchrone.

---

### Plugin Setup

After downloading the plugin, you must first activate it, like any Jeedom plugin :

![config](../images/ModbusActiv.png)

Then, you have to start the installation of the dependencies (even if they appear OK) :

![dependances](../images/ModbusDep.png)

Finally, start the daemon :

![demon](../images/ModbusDemon.png)

![socket](../images/ModbusConfig.png)

#### Paramètres de Configuration

**Architecture Moderne** : Le plugin utilise désormais une architecture asynchrone avec gestion de queue Python pour optimiser les performances, la stabilité et gérer de manière optimale les connexions.

**Paramètres disponibles** :

- **Utilisation de MQTT** : Permet de publier les valeurs des registres sur un broker MQTT (nécessite le plugin MQTT officiel installé et configuré)
- **Port Socket** : Port d'écoute du daemon Python (55030 par défaut, ne pas modifier sauf conflit)
- **Niveau de Log de la librairie Modbus** : Niveau de verbosité de la librairie pymodbus
  - ERROR (par défaut, recommandé) : Affiche uniquement les erreurs critiques
  - Warning : Affiche les avertissements
  - DEBUG : Mode verbeux pour le débogage
  - CRITICAL : Uniquement les erreurs fatales
- **Délai entre chaque boucle d'interrogation** : Temps d'attente entre les cycles de lecture des équipements (en secondes). Utilisé par le système de queue pour espacer les lectures.
- **Nombre de devices lus en parallèle** : Nombre d'équipements interrogés simultanément (3 par défaut). Augmenter si vous avez beaucoup d'équipements rapides, diminuer si vous avez des problèmes de stabilité.
- **Messages validation/erreur Write** : Affiche des notifications lors des opérations d'écriture

**Gestion automatique des erreurs** : Le système gère automatiquement les erreurs de communication avec :
- Reconnexion intelligente en cas d'échec
- Backoff progressif (augmentation du délai de retry)
- Suivi du statut de chaque équipement
- Réutilisation des connexions TCP pour optimiser les performances

:warning: **IMPORTANT** : Après toute modification de la configuration, pensez à **sauvegarder ET redémarrer le daemon**.

---

### Use of the plug-in

**IMPORTANT** :

Pour utiliser le plugin, vous devez connaître les paramètres de vos entrées/sorties Modbus :
- Format des données (int16, int32, float32, etc.)
- Ordre des mots - Non ou Oui (Big Word / Little Word)
- Registres de départ et nombres de registres

#### Paramètres des commandes :

- **Offset** : Prise en compte du décalage de numérotation des registres (certains équipements commencent à 0, d'autres à 1)
- **Inverser les mots** : Ordre d'assemblage des mots dans les registres
- **Pas du slider** : Incrément du slider pour les commandes Action/Slider (permet d'envoyer des valeurs décimales)

#### Import/Export de configuration

Gain de temps lors de la configuration ! Vous pouvez exporter les commandes d'un équipement déjà créé vers un fichier .json local.

Vous pourrez ensuite l'importer sur un nouvel équipement du même type (il suffira d'adapter les paramètres de connexion spécifiques).

Sur la page d'un équipement, vous trouverez les boutons d'import/export :

![dependances](../images/importJson.png)

---

## PLAYBACK CONTROLS

### FC01 - Read Coils (Bobines de sortie)

Pour lire des Coils :
1. Créer une Nouvelle Commande Modbus
2. Type : **Info**, Sous-type : **Binaire** ou **Numérique**
3. Choisir le function code : **FC01**
4. Renseigner le **departure register** et le **nombre de bits à lire**

**IMPORTANT** : La commande initiale sera automatiquement supprimée pour créer autant de commandes individuelles que le nombre de registres spécifiés.

**Example** : Si vous choisissez registre de départ = 1 et nombre = 4, il sera créé :
- ReadCoil_1
- ReadCoil_2  
- ReadCoil_3
- ReadCoil_4

Vous pouvez ensuite renommer ces commandes à votre convenance.

---

### FC02 - Read Discrete Inputs (Entrées discrètes)

Pour lire des entrées discrètes :
1. Créer une commande **Info** / **Autre**
2. Choisir **FC02**
3. Format : **Bits**
4. Word order : Selon votre équipement (Big ou Little)
5. Renseigner le **departure register**
6. Indiquer le **nombre de bits à lire** (0 à 15)

**Retour** : La commande retournera une chaîne de caractères (string) représentant les bits lus (ex: "10110001").

---

### FC03 - Read Holding Registers (Registres de maintien)
### FC04 - Read Input Registers (Registres d'entrée)

Pour lire des registres numériques :
1. Créer une Nouvelle Commande Modbus
2. Type : **Info**, Sous-type : **Numérique**
3. Choisir le format approprié :
   - **Float** (float32, float64) : Valeurs décimales
   - **Integer** (int16, int32, int64, uint16, uint32, uint64) : Valeurs entières
   - **Bits** : Pour une représentation binaire
4. Choisir le function code : **FC03** ou **FC04**
5. Renseigner le **departure register**
6. Nombre de registres : 
   - Float32 : 2 registres
   - Float64 : 4 registres
   - Int16/Uint16 : 1 registre
   - Int32/Uint32 : 2 registres
   - Int64/Uint64 : 4 registres

---

## WRITE COMMANDS

Par défaut, 3 types de commandes d'écriture sont proposées lors de la création d'un équipement :
- **Ecriture MultiRegistre** (FC16)
- **Write Bit** (FC06 pour modifier un bit spécifique)
- **Ecriture MultiCoils** (FC15)

![cmdEcritures](../images/modbusCmdsEcritures.png)

---

### FC16 - Écriture Multi-Registres Consécutifs

**Utilisation** : Écrire sur plusieurs registres **qui se suivent** en une seule opération.

#### Méthode 1 : 

1. Créer une commande **Action/Défaut**
2. Choisir le function code : **FC16**
3. Cliquer sur le bouton **"Configurer FC16"** qui apparaît

![cmdEcritures](../images/configFc16.png)

4. Dans la fenêtre qui s'ouvre, configurer pour chaque registre :
   - La valeur à écrire
   - Le format de donnée (int16, int32, float32, etc.)

![cmdEcritures](../images/bootboxFc16.png)

5. Ajouter/Supprimer des lignes selon vos besoins
6. Renseigner le **departure register** sur la commande

**IMPORTANT** : Les valeurs seront écrites séquentiellement à partir du registre de départ, en tenant compte du nombre de registres requis par chaque format.

**Example** :
- Departure register : 10
- Valeur 1 : 15 (format int32) → Écrira sur les registres 10 et 11
- Valeur 2 : 20 (format int16) → Écrira sur le registre 12
- Etc.

#### Méthode 2 : )

 **** .

1. Créer une commande **Action/Message**
2. Choisir le function code : **FC16**
3. Cocher **"isSpecific"** dans la configuration avancée
)

##### 

**|valeur|format`** *(recommandé)*

.

```
84|210|int16
```


**** : 

```
84|210|int16;85|1500|uint16
```


**|format`** *()*

```
210|int16
```


**!** *()*

```
84!
```


|  | Format |
|------|--------|
|   |   |
|   |   |
|   | Float32 |
|   |  |
|   | uint32 |

##### 



##### 

```
 : 
#[Equipement][Ecriture Eqlogic1][message]# = "84|210|int16"


#[Equipement][Ecriture Eqlogic1][message]# = "84|210|int16;85|1500|uint16"
```

#### Méthode 3 : 

 :

```php
$cmd = cmd::byId(iddevotrecommande);
if(is_object($cmd)){
    $cmd->setConfiguration('arrayRegisters', [
        ['value' => '10', 'format' => 'intformat16'],
        ['value' => '25.5', 'format' => 'floatformat32'],
        ['value' => '12', 'format' => 'intformat16']
    ]);
    $cmd->save();
}
```

---

### FC06 - Écriture Simple ou Multi-Registres NON Consécutifs

**Utilisation** : Écrire sur un seul registre OU sur plusieurs registres **non consécutifs** (registres éparpillés).

#### Méthode 1 : Écriture simple avec Slider

Pour une écriture sur **un seul registre** avec choix de valeur dynamique :

1. Créer une commande **Action/Curseur**
2. Choisir le function code : **FC06**
3. Renseigner :
   - **Departure register**
   - **Format de donnée** (int16, float32, etc.)
   - **Min/Max** du slider
4. Actionner le curseur sur le dashboard pour envoyer la valeur choisie

#### Méthode 2 : Écriture multi-registres NON consécutifs (interface)

Pour écrire sur **plusieurs registres à des adresses différentes** :

1. Créer une commande **Action/Défaut**
2. Choisir le function code : **FC06**
3. Cocher **"Ecriture Registres non suivis"**
4. Cliquer sur **"Configurer FC6"**
5. Configurer chaque registre :
   - Numéro du registre
   - Valeur à envoyer
   - Format de donnée

#### Méthode 3 : Écriture multi-registres via Message

Pour configurer dynamiquement les registres à écrire :

1. Créer une commande **Action/Message**
2. Choisir le function code : **FC06**
3. Cocher **"isSpecific"** dans la configuration avancée
4. Dans le corps du message, utiliser la syntaxe :

```
adresseRegistre|valeur|format;adresseRegistre2|valeur2|format2;...
```

**Formats disponibles** :
- `int16`, `int32`, `int64`
- `uint16`, `uint32`, `uint64`
- `float32`, `float64`

**Example** :
```
100|25.5|float32;105|1|int16;200|15000|uint32
```
Ceci écrira :
- 25.5 (float32) sur le registre 100
- 1 (int16) sur le registre 105
- 15000 (uint32) sur le registre 200

---

### FC05 - Écriture Single Coil (Bobine unique)

**Utilisation** : Écrire True/False (1/0) sur une seule bobine.

#### Exemple pour activer la bobine 1 (ON) :

1. Créer une commande **Action/Défaut**
2. Choisir **FC05 - Write Single Coil**
3. Registre de départ : **1**
4. Nb de bytes : **1**
5. Valeur à envoyer : **1**

#### Exemple pour désactiver la bobine 1 (OFF) :

1. Créer une autre commande **Action/Défaut**
2. Choisir **FC05 - Write Single Coil**
3. Registre de départ : **1**
4. Nb de bytes : **1**
5. Valeur à envoyer : **0**

En activant ces commandes depuis le dashboard, vous enverrez True (1) ou False (0) à la bobine.

---

### FC15 - Écriture Multi-Coils (Plusieurs bobines)

**Utilisation** : Écrire sur plusieurs bobines consécutives en une seule opération.

1. Créer une commande **Action/Défaut**
2. Choisir **FC15 - Write Multiple Coils**
3. Renseigner le **departure register**
4. Configurer le tableau de valeurs via **"Configurer FC15"** ou **arrayCoils**

**Format** : Tableau de valeurs 0 ou 1 pour chaque bobine.

---

### Écriture Bit - Modifier un bit spécifique dans un registre

**Utilisation** : Changer la valeur d'un seul bit dans un registre sans affecter les autres bits.

Une commande **"Write Bit"** est créée par défaut sur vos équipements.

#### Configuration :

1. La commande utilise par défaut **FC03** pour lire d'abord la valeur actuelle du registre
2. Une commande info **"infobitbinary"** affiche la représentation binaire du registre
3. Pour changer un bit, utiliser la syntaxe dans le corps du message :

```
valeur&positionBit&registre
```

**Example** :
```
1&4&100
```
Écrit la valeur **1** au bit de **position 4** (en partant de la droite) dans le **registre 100**.

#### Visualisation :

Si "infobitbinary" affiche `10000101` et que vous envoyez `1&6` :
- Avant : `10000101`
- Après : `10100101`
Le bit en position 6 est passé à 1.

---

## Specific Parameters

### Retour Hexadécimal

Pour obtenir la valeur d'un registre en hexadécimal (utile pour les codes d'erreur) :

1. Créer/Configurer votre commande normalement
2. Cocher **"HEX RETURN"**
3. La commande passera automatiquement en sous-type **String**
4. Les valeurs retournées seront en hexadécimal

---

### Lecture Multi-Registres

Pour créer automatiquement des commandes individuelles à partir d'une lecture groupée :

1. Créer une commande de lecture
2. Cocher **"LectureMultiRegistres"**
3. Spécifier le **nombre de registres**

**Résultat** : Le plugin créera automatiquement autant de commandes que le nombre de registres spécifié.

**Example** : Si vous lisez 10 registres consécutifs, 10 nouvelles commandes seront créées (une par registre).

La commande originale contiendra une chaîne de caractères avec toutes les valeurs, et mettra à jour automatiquement les 10 commandes individuelles.

---

### OPERATION ON ORDER

Pour appliquer un calcul mathématique sur la valeur retournée :

1. Dans le champ **"Opération sur la commande"**
2. Utiliser le tag `#value#` pour représenter la valeur brute
3. Écrire l'opération mathématique

**Exemples** :
```
(#value# / 10)
(#value# * 2) + 5
(#value# - 32) * 5 / 9
```

**Opérateurs disponibles** : `+`, `-`, `*`, `/`

**IMPORTANT** : Bien utiliser `*` pour les multiplications (pas `x`).

---

### Lecture Bits du Registre

Pour visualiser tous les bits d'un registre sous forme binaire :

1. Créer/Configurer une commande **Info**
2. Cocher **"Read Register Bits"**

**Résultat** : Une nouvelle commande **Info/String** sera créée automatiquement, affichant les 16 bits du registre sous forme de chaîne binaire (ex: `1011001010010110`).

Cette commande sera mise à jour automatiquement à chaque lecture du registre.

---

## Import/Export Commandes JSON

Vous pouvez exporter/importer un fichier JSON pour créer rapidement toutes les commandes d'un équipement
Il vous faut configurer les commandes d'un équipement, puis de cliquer sur Exporter Commandes en JSON sur la partie droite de la page. Cela téléchargera le JSON sur votre navigateur.
Vous pourrez ensuite l'importer sur un autre équipement similaire sur cette Jeedom ou une autre, et retrouver le meme parametrage de commandes


### Utilisation

1. Télécharger/Exporter le JSON
2. Sur la page d'un équipement, utiliser le bouton **"Importer JSON de commandes"**
3. Sélectionner votre fichier

Toutes les commandes seront créées automatiquement avec leurs paramètres.

---

## MQTT

### Activation

Dans la configuration du plugin, cocher **"Utilisation de MQTT"**.

**Prérequis** : Le plugin officiel MQTT Manager doit être installé et configuré.

### Fonctionnement

Au démarrage du daemon Modbus :
- Un topic est créé automatiquement sur le broker MQTT
- À chaque mise à jour des valeurs, les données sont publiées sur MQTT

**Topic par défaut** :
```
jeeModbusMQTT/nomDeLequipement/dataCmds
```

### Personnalisation du Topic

Sur la page d'un équipement, vous pouvez modifier le topic par défaut :

![renammeTopic](../images/renammeTopic.png)

Remplacez "nomDeLequipement" par le nom de votre choix.

---

## Conseils et Bonnes Pratiques

1. **Testez d'abord** : Commencez par lire quelques registres pour valider la connexion avant de créer toutes les commandes
2. **Utilisez l'offset** : Vérifiez la documentation de votre équipement pour savoir s'il faut activer l'offset
3. **Word Order** : En cas de valeurs incohérentes, essayez de changer l'ordre des mots (Big Word / Little Word)
4. **Logs** : En cas de problème, passez temporairement en mode DEBUG et consultez les logs
5. **Performance** : Ajustez le nombre de devices lus en parallèle selon votre infrastructure
6. **MQTT** : Utilisez MQTT pour intégrer facilement vos données Modbus avec d'autres systèmes (Node-RED, Home Assistant, etc.)

---

## Support

En cas de problème, consultez :
1. Les logs du plugin (niveau DEBUG si nécessaire)
2. La community Jeedom
3. Le GitHub du plugin pour signaler un bug

