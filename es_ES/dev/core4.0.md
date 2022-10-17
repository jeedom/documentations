## Core v4.0 | Desarrolladores de complementos

### Deprecated

- Font-Awesome 4 ya no está integrado en el Core, reemplazado por Font-Awesome 5 [Migración](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### Compatibilidad V4 en el mercado

La v3 que se lanzará en noviembre de 2020 tendrá un módulo de migración que permitirá pasar de V3 a V4.

Durante la fase de migración de v3 a v4, los complementos sin compatibilidad v4 en su información.json alertará al usuario final antes de la actualización.


Si su complemento es compatible con v4, indíquelo en la información.json de su complemento.

Ejemplo **info.json**: `"compatibility" : ["miniplus", "smart", "rpi", "docker", "diy", "v4"], `

Puede probar desde un escenario / bloque de código si sus complementos tienen la compatibilidad indicada:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  ~~~ php
  {% raw %}
  // Autor de los complementos a comprobar (distingue entre mayúsculas y minúsculas)
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  foreach ($ pluginsArray como $ plugin) {
    if ($ plugin ['autor'] == $ autor) {
      $countPlugins++;
    if ($ plugin ['hardwareCompatibility'] ['v4'] != '1') {
        $countIncompatibles++;
      $scenario->setLog('Plugin ' . $plugin['name'] . ' does not have v4 compatibility tag.');
    }
    }
  }
  si ($ countPlugins> 0) {
    si ($ countIncompatible> 0) {
      $scenario->setLog($author . ' : ' . $countIncompatibles . ' potentially incompatible Jeedom V4 plugin on ' . $countPlugins . ' checked');
    } otro {
      $scenario->setLog('All ' . $countPlugins . ' plugin developed by ' . $author . ' are Jeedom V4 compatible. Congratulations!');
    }
  } otro {
    $scenario->setLog('No plugin found for ' . $author);
  }
  {% endraw %}
  ~~~

</details>

### Adaptación de complementos para Core v4

- Limpie el estilo en línea tanto como sea posible (cf [Plantilla de complemento](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
- pantalla de comando span : clase `estado`
- Botón de control : una acción de clase
- En el grupo de entrada:
  - class `roundLeft` en el primer elemento (una entrada, un botón, etc)
    - class `roundRight` en el último elemento (una entrada, un botón, etc)
- En el div eqLogicThumbnailContainer:
    - Eliminar todos los estilos!
    - En los divs principales, agregue una clase de color:
      - colores del logo: `logoPrimary` y` logoSecondary`
        - Verde : `success`
        - bleu: `info`
        - orange: `warning`
        - Rojo : `danger`
- Tenga cuidado con los complementos con plantillas: el icono de actualización ha cambiado (fuente impresionante 5) :
- Preste atención a la clase de botones, entrada, etc:
    - btn : 32px de alto
    - btn-sm / input-sm : 28px de alto
    - btn-xs : 22px de alto
- Escritorio / php / archivo pluginid.php : reemplazar objeto::all () por jeeObject::all()

- Pruebe los complementos en los tres temas Light / Dark / Legacy de 2019.

- Imágenes en png con alfa si es necesario, para evitar cuadrados blancos antiestéticos en el tema oscuro.

Al final, las páginas del complemento deben ser coherentes con las páginas de los objetos / escenarios / interacciones principales (tamaños, colores, diseños, etc.)). Sin efecto de estilo, pero consistencia.

> Observación :
>
> La barra lateral no sobrevivió a la v4 ! Para reemplazarlo, un menú contextual está disponible en las pestañas para escenarios, objetos, interacciones, complementos.

> Actualizaciones :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. Esto evita esperar a que pase el robot y hace que la actualización esté disponible de inmediato.

> Recordar :
>
> Las imágenes que se muestran en las páginas de complementos no deben cargarse desde la red, pero deben estar entre los archivos de complementos locales.

> Atención :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! Es el más peligroso por lo tanto el más lejano.


### Limpiador de archivos

Tanto la v4 como la nueva v3 tienen limpieza automática de archivos que no están presentes en la actualización automática de su complemento.

El núcleo elimina automáticamente los archivos de más de 7 días que no se han actualizado.

- Borra archivos que tienen más de 7 días dependiendo de la actualización de su complemento.
- Solo afecta carpetas> `3rdparty`,` 3rparty`, `desktop`,` mobile`, `core`,` docs`, `install`,` script`, `vendor`,` plugin_info`.
- `recurso (s)` y `datos` no se ven afectados, pero lo invitamos a utilizar` datos` para cualquier.
- Los archivos cuyo nombre comienza con "custom" tampoco se ven afectados.

Si desea hacer una modificación antes de limpiar, puede usar `pre_install.php` (en plugin_info).
Ver [Plantilla de complemento](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### Mercado de enlaces de GitHub

Cambio de nombre de github para acceder a sus silencios privados.

Ahora debes usar jeedom-market en lugar de zoic's.

### La documentación

El sitio de documentación también ha cambiado de apariencia.

Ahora enlaces directos a sus documentaciones.

### La traducción

Estamos en proceso de desarrollar una nueva herramienta de traducción. Actualmente lo estamos probando internamente y nos comunicaremos con usted pronto para sugerirle que integre sus complementos en él.