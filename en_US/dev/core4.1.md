## Core v4.1 | Plugin Developers

### Obsolete

- The functions `network->getInterfaceIp()` `network->getInterfaceMac()` and `network->getInterfaces()` have been replaced by `network->getInterfacesInfo()`.

### Changements

- The `scenario->getHumanName()` function of the php scenario class no longer returns `[object][group][name]` but `[group][object][name]`.
- The `scenario->byString()` function must now be called with the `[group][object][name]` structure.
- The `ajax function::init()` accepts since v4 an "action" array as parameter and since v4.1 checks if the action received in the querystring (with a GET request) is listed in this table, if not the request is blocked.
Be careful, in V3 the optional argument was a boolean; so it is possible to make a v4 compatible code.0 and above but not with v3.
````php
  /* Function allowing the sending of the 'Content-Type' header: application/json'
    In V3 : indicate the argument 'true' to control the Jeedom access token
    In V4 : allow the execution of an 'action' method in GET by indicating the name(s) of the action(s) in an array as an argument
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

> This modification is Core v4 compatible.0 and v3.x

