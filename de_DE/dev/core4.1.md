## Core v4.1 | Plugin-Entwickler

### Obsolete

- Die Funktionen `network-> getInterfaceIp (), network-> getInterfaceMac ()` und` network-> getInterfaces () `wurden durch` network-> getInterfacesInfo () `ersetzt.

### Changements

- Die Funktion "Szenario-> getHumanName ()" der PHP-Szenario-Klasse gibt nicht mehr "[Objekt] [Gruppe] [Name]" zurück, sondern "[Gruppe] [Objekt] [Name]".
- Die Funktion `Szenario-> byString ()` muss nun mit der Struktur `[Gruppe] [Objekt] [Name]` aufgerufen werden.
- Die Ajax-Funktion::init () `akzeptiert von v4 ein" action "-Array als Parameter und von v4.1 prüft, ob die im Querystring (mit einer GET-Anforderung) empfangene Aktion in dieser Tabelle aufgeführt ist. Ist dies nicht der Fall, wird die Anforderung blockiert.
Seien Sie vorsichtig, in V3 war das optionale Argument ein Boolescher Wert. So ist es möglich, einen v4-kompatiblen Code zu erstellen.0 und höher, aber nicht mit v3.
````php
  / * Funktion zum Senden des 'Content-Type-Headers: Anwendung / json'
    In V3 : Geben Sie das Argument 'true' an, um das Jeedom-Zugriffstoken zu steuern
    In v4 : Autorisieren Sie die Ausführung einer 'Action'-Methode in GET, indem Sie die Namen der Action (s) in einem Array als Argument angeben
  */.  
    ajax::init();
````

### Modifications optionnelles

#### Liste des objets parents

En v4.1 l'affichage de la sélection de l'objet parent d'un équipement a été revu et unifié. La liste est indentée en fonction du parent, et ordonnée comme dans le menu **Accueil  → Dashboard**, tel que définit dans **Outils → Objets**, Vue d'ensemble.

Pour avoir la même logique dans les plugins, fichier plugin/.desktop/.php/.plugin.php :

````php
<select id="sel_object" class="eqLogicAttr form-control" data-l1key="object_id">
  <option value="">{{Aucun}}</.option>
  <?php
  $options = '';
  foreach ((jeeObject::buildTree(null, false)) as $object) {
    $options .= '<option value="' . $object->getId() . '">' . str_repeat('&nbsp;&nbsp;', $object->getConfiguration('parentNumber')) . $object->getName() . '</.option>';
  }
  echo $options;
  ?>
</.select>
````

> Diese Änderung ist mit Core v4 kompatibel.0 und v3.x

