## Kern v4.1 | Plugin-Entwickler

### Obsolete

- Die Funktionen „network->getInterfaceIp()“, „network->getInterfaceMac()“ und „network->getInterfaces()“ wurden durch „network->getInterfacesInfo()“ ersetzt.

### Changements

- Die Funktion „scenario->getHumanName()“ der PHP-Szenarioklasse gibt nicht mehr „[Objekt][Gruppe][Name]“, sondern „[Gruppe][Objekt][Name]“ zurück.
- Die Funktion „scenario->byString()“ muss nun mit der Struktur „[group][object][name]“ aufgerufen werden.
- Die Ajax-Funktion::init()` akzeptiert seit v4 und seit v4 ein „action“-Array als Parameter.1 prüft, ob die im Querystring (bei einer GET-Anfrage) empfangene Aktion in dieser Tabelle aufgeführt ist. Ist dies nicht der Fall, wird die Anfrage blockiert.
Seien Sie vorsichtig, in V3 war das optionale Argument ein boolescher Wert; Daher ist es möglich, v4-kompatiblen Code zu erstellen.0 und höher, jedoch nicht mit v3.
````php
  /* Funktion, die das Senden des „Content-Type“-Headers ermöglicht: application/json'
    In V3 : Geben Sie das Argument „true“ an, um das Jeedom-Zugriffstoken zu steuern
    In V4 : Autorisieren Sie die Ausführung einer Aktionsmethode in GET, indem Sie den/die Namen der Aktion(en) in einem Array als Argument angeben
  */  
    ajax::init();
````

### Modifications optionnelles

#### Liste des objets parents

En v4.1 l'affichage de la sélection de l'objet parent d'un équipement a été revu et unifié. La liste est indentée en fonction du parent, et ordonnée comme dans le menu **Accueil  → Dashboard**, tel que définit dans **Outils → Objets**, Vue d'ensemble.

Pour avoir la même logique dans les plugins, fichier plugin/desktop/php/plugin.php :

````php
<select id="sel_object" class="eqLogicAttr form-control" data-l1key="object_id">
  <option value="">{{Aucun}}</option>
  <?php
  $options = '';
  foreach ((jeeObject::buildTree(null, false)) as $object) {
    $options .= '<option value="' . $object->getId() . '">' . str_repeat('&nbsp;&nbsp;', $object->getConfiguration('parentNumber')) . $object->getName() . '</option>';
  }
  echo $options;
  ?>
</select>
````

> Diese Modifikation ist Core v4-kompatibel.0 und v3.x

