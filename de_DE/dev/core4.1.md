### Core v4.1 | Plugin-Entwickler

#### Optionale Änderungen

##### Liste der übergeordneten Objekte

In v4.1 Die Anzeige der Auswahl des übergeordneten Objekts eines Geräts wurde überarbeitet und vereinheitlicht. Die Liste ist jetzt geordnet und wird nach dem übergeordneten Element eingerückt.

Um die gleiche Logik in den Plugins zu haben, geben Sie die Datei plugin / desktop / plugin ein.php :

`` ''php
<select id="sel_object" class="eqLogicAttr form-control" data-l1key="object_id">
	<option value="">{{Aucun}}</option>
	<?php
	$options = '';
	foreach ((jeeObject::buildTree (null, false)) als $ object) {
		$options .= '<option value="' . $object->getId() . '">' . str_repeat('&nbsp;&nbsp;', $object->getConfiguration('parentNumber')) . $object->getName() . '</option>';
	}
	echo $ options;
	?>
</select>
`` ''

> Diese Änderung ist mit Core v4 kompatibel.0 und v3.x

