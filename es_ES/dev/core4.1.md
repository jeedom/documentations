## Núcleo v4.1 | Desarrolladores de complementos

### Obsolete

- Las funciones `network->getInterfaceIp()`, `network->getInterfaceMac()` y `network->getInterfaces()` han sido reemplazadas por `network->getInterfacesInfo()`.

### Changements

- La función `scenario->getHumanName()` de la clase de escenario PHP ya no devuelve `[object][group][name]` sino `[group][object][name]`.
- La función `scenario->byString()` ahora debe llamarse con la estructura `[group][object][name]`.
- La función `ajax`::`init()` acepta una matriz de "acción" como parámetro desde v4 y desde v4.1. Comprueba si la acción recibida en la cadena de consulta (con una solicitud GET) aparece en esta tabla; si no, se bloquea la solicitud.
Tenga en cuenta que en V3 el argumento opcional era un booleano; por lo tanto, es posible escribir código compatible con V4.0 y superiores, pero no con v3.
````php
  /* Función para enviar el encabezado 'Content-Type': aplicación/json'
    En V3 : Especifique el argumento 'verdadero' para controlar el token de acceso de Jeedom
    En V4 : Permitir la ejecución de un método de 'acción' usando GET especificando el nombre de la(s) acción(es) en una matriz como argumento
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

> Esta modificación es compatible con Core v4.0 y v3.x

