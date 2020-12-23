## Core v4.1 | Desarrolladores de complementos

### Suppression

- Las funciones `network-> getInterfaceIp (), network-> getInterfaceMac ()` y `network-> getInterfaces ()` han sido reemplazadas por `network-> getInterfacesInfo ()`.

### Changements

- La función `escenario-> getHumanName ()` de la clase de escenario php ya no devuelve `[objeto] [grupo] [nombre]` sino `[grupo] [objeto] [nombre]`.
- La función `escenario-> byString ()` ahora debe llamarse con la estructura `[grupo] [objeto] [nombre]`.

### Modificaciones opcionales

#### Lista de objetos principales

En v4.1 se ha revisado y unificado la visualización de la selección del objeto padre de un dispositivo. La lista se sangra según el padre y se ordena como en el menú **Inicio → Tablero**, como se define en **Herramientas → Objetos**, Resumen.

Para tener la misma lógica en los complementos, plugin / desktop / php / plugin file.php :

`` ''php
<select id="sel_object" class="eqLogicAttr form-control" data-l1key="object_id">
  <option value="">{{Aucun}}</option>
  <?php
  $options = '';
  foreach ((jeeObject::buildTree (nulo, falso)) como $ objeto) {
    $options .= '<option value="' . $object->getId() . '">' . str_repeat('&nbsp;&nbsp;', $object->getConfiguration('parentNumber')) . $object->getName() . '</option>';
  }
  echo $ opciones;
  ?>
</select>
`` ''

> Esta modificación es compatible con Core v4.0 y v3.x

