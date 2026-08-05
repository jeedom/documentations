## Core v4.1 | Développeurs de plugin

### Obsolete

- Les fonctions `network->getInterfaceIp()` `network->getInterfaceMac()` et `network->getInterfaces()` ont été remplacées par `network->getInterfacesInfo()`.

### Changements

- La fonction `scenario->getHumanName()` de la class php scenario ne renvoit plus `[object][group][name]` mais `[group][object][name]`.
- La fonction `scenario->byString()` doit maintenant être appellée avec la structure `[group][object][name]`.
- La fonction `ajax::init()` accepte depuis la v4 un tableau "d'action" en paramètre et depuis la v4.1 vérifie si l'action reçue dans le querystring (avec une requête GET) est listée dans ce tableau, si ce n'est pas le cas la requête est bloquée.
Attention, en V3 l'argument optionnel était un boolean; donc il est possible de faire un code compatible v4.0 et supérieur mais pas avec la v3.
````php
  /* Fonction permettant l'envoi de l'entête 'Content-Type: application/json'
    En V3 : indiquer l'argument 'true' pour contrôler le token d'accès Jeedom
    En V4 : autoriser l'exécution d'une méthode 'action' en GET en indiquant le(s) nom(s) de(s) action(s) dans un tableau en argument
  */  
    ajax::init();
````

### Modifications optionnelles

#### Liste des objets parents

En v4.1 l'affichage de la sélection de l'objet parent d'un équipement a été revu et unifié. La liste est indentée en fonction du parent, et ordonnée comme dans le menu **Accueil  → Dashboard**, tel que définit dans **Outils → Objets**, Vue d’ensemble.

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

> Cette modification est compatible Core v4.0 et v3.x

