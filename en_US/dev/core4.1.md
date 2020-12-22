## Core v4.1 | Plugin developers

### Suppression

- The functions `network-> getInterfaceIp (), network-> getInterfaceMac ()` and `network-> getInterfaces ()` have been replaced by `network-> getInterfacesInfo ()`.

### Changements

- The `scenario-> getHumanName ()` function of the php scenario class no longer returns `[object] [group] [name]` but `[group] [object] [name]`.
- The `scenario-> byString ()` function must now be called with the structure `[group] [object] [name]`.

### Optional modifications

#### List of parent objects

In v4.1 the display of the selection of the parent object of a device has been revised and unified. The list is indented according to the parent, and ordered as in the menu **Home → Dashboard**, as defined in **Tools → Objects**, Overview.

To have the same logic in the plugins, plugin / desktop / plugin file.php :

`` ''php
<select id="sel_object" class="eqLogicAttr form-control" data-l1key="object_id">
  <option value="">{{Aucun}}</option>
  <?php
  $options = '';
  foreach ((jeeObject::buildTree (null, false)) as $ object) {
    $options .= '<option value="' . $object->getId() . '">' . str_repeat('&nbsp;&nbsp;', $object->getConfiguration('parentNumber')) . $object->getName() . '</option>';
  }
  echo $ options;
  ?>
</select>
`` ''

> This modification is Core v4 compatible.0 and v3.x

