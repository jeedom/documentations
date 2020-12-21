## Core v4.1 | Développeurs de plugin

### Suppression

- Les fonctions `network->getInterfaceIp()` `network->getInterfaceMac()` et `network->getInterfaces()` ont été remplacées par `network->getInterfacesInfo()`.

### Changements

- La fonction `scenario->getHumanName()` de la class php scenario ne renvoit plus `[object][group][name]` mais `[group][object][name]`.
- La fonction `scenario->byString()` doit maintenant être appellée avec la structure `[group][object][name]`.

### Modifications optionnelles

#### Liste des objets parents

En v4.1 l'affichage de la sélection de l'objet parent d'un équipement a été revu et unifié. La liste est maintenant ordonnée, et indentée en fonction du parent.

Pour avoir la même logique dans les plugins, fichier plugin/desktop/plugin.php :

```php
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
```

> Cette modification est compatible Core v4.0 et v3.x

