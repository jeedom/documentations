## Core v4.1 | Desarrolladores de complementos

### Obsolete

- Las funciones `network-> getInterfaceIp (), network-> getInterfaceMac ()` y `network-> getInterfaces ()` han sido reemplazadas por `network-> getInterfacesInfo ()`.

### Changements

- La función `escenario-> getHumanName ()` de la clase de escenario php ya no devuelve `[objeto] [grupo] [nombre]` sino `[grupo] [objeto] [nombre]`.
- La función `escenario-> byString ()` ahora debe llamarse con la estructura `[grupo] [objeto] [nombre]`.
- La función ajax::init () `acepta desde v4 una matriz de" acción "como parámetro y desde v4.1 comprueba si la acción recibida en la cadena de consulta (con una solicitud GET) se enumera en esta tabla, si este no es el caso, la solicitud está bloqueada.
Tenga cuidado, en V3 el argumento opcional era un booleano; por lo que es posible hacer un código compatible v4.0 y superior pero no con v3.
````php
  / * Función que permite el envío del encabezado 'Content-Type: aplicación / json'
    En V3 : indicar el argumento 'verdadero' para controlar el token de acceso Jeedom
    En v4 : autorizar la ejecución de un método de 'acción' en GET indicando el (los) nombre (s) de la (s) acción (es) en una matriz como argumento
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

