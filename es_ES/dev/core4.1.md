### Core v4.1 | Desarrolladores de complementos

#### Modificaciones opcionales

##### Lista de objetos principales

En v4.1 se ha revisado y unificado la visualización de la selección del objeto padre de un dispositivo. La lista ahora está ordenada y con sangría según el padre.

Para tener la misma lógica en los complementos, complemento / escritorio / archivo de complemento.php :

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

