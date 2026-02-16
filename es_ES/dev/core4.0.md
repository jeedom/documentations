## Núcleo v4.0 | Desarrolladores de complementos

### Deprecated

- Font Awesome 4 ya no está integrado en el Core y fue reemplazado por Font Awesome 5 [migración](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### Compatibilidad V4 en el mercado

La versión 3, que se lanzará en noviembre de 2020, tendrá un módulo de migración que permitirá a los usuarios actualizar de la versión 3 a la versión 4.

Durante la fase de migración de v3 a v4, los complementos sin compatibilidad con v4 se incluyen en su información.json alertará al usuario final antes de la actualización.


Si su complemento es compatible con v4, indíquelo en la información.json de tu complemento.

Ejemplo **información.json**: `"compatibility" : ["miniplus","inteligente","rpi","docker","bricolaje","v4"],`

Puede probar desde un escenario/bloque de código si sus complementos tienen la información de compatibilidad correcta:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  ~~~ php
  {% raw %}
  //Autor de los complementos a comprobar (sensible a mayúsculas y minúsculas))
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  foreach ($pluginsArray como $plugin) {
    si ($plugin['autor'] == $autor) {
      $countPlugins++;
    si ($plugin['hardwareCompatibility']['v4'] != '1') {
        $countIncompatibles++;
      $scenario->setLog('Plugin ' . $plugin['name'] . ' does not have v4 compatibility tag.');
    }
    }
  }
  si ($countPlugins > 0) {
    si ($countIncompatibles > 0) {
      $scenario->setLog($author . ' : ' . $countIncompatibles . ' potentially incompatible Jeedom V4 plugin on ' . $countPlugins . ' checked');
    } demás {
      $scenario->setLog('All ' . $countPlugins . ' plugin developed by ' . $author . ' are Jeedom V4 compatible. Congratulations!');
    }
  } demás {
    $scenario->setLog('No plugin found for ' . $author);
  }
  {% endraw %}
  ~~~

</details>

### Adaptación de complementos para Core v4

- Limpie el estilo en línea tanto como sea posible (ver [plantilla de complemento](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
- visualización del comando span : clase `estado`
- Botón de control : una demanda colectiva
- En el grupo de entrada:
  - clase `roundedLeft` en el primer elemento (una entrada, un botón, etc.))
    - clase `roundedRight` en el último elemento (una entrada, un botón, etc.))
- En el div eqLogicThumbnailContainer:
    - Eliminar todos los estilos!
    - Agregar una clase de color a los divs principales:
      - colores del logotipo: `logoPrimary` y `logoSecondary`
        - Verde : `success`
        - bleu: `info`
        - orange: `warning`
        - rojo : `danger`
- Nota sobre los complementos con plantillas: El icono de actualización ha cambiado (font-awesome 5)) :
- Preste atención a las clases de los botones, entradas, etc:
    - botón : 32 píxeles de alto
    - btn-sm / entrada-sm : 28px de alto
    - btn-xs : 22px de alto
- Archivo desktop/php/pluginid.php : reemplazar objeto::all() por jeeObject::all()

- Pruebe los complementos en los tres temas de 2019: Claro / Oscuro / Legado.

- Imágenes PNG con canales alfa cuando sea necesario, para evitar cuadrados blancos antiestéticos en el tema oscuro.

En última instancia, las páginas del complemento deben ser coherentes con las páginas principales del objeto/escenario/interacción (tamaños, colores, diseños, etc.)). Sin florituras estilísticas, pero sí coherencia.

> Observó :
>
> La barra lateral no sobrevivió a la v4 ! Para reemplazarlo, está disponible un menú contextual en las pestañas de escenarios, objetos, interacciones y complementos.

> Actualizaciones :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. Esto evita tener que esperar a que pase el robot y hace que la actualización esté disponible inmediatamente.

> Recordatorio :
>
> Las imágenes que se muestran en las páginas del complemento no deben cargarse desde Internet, sino que deben estar entre los archivos locales del complemento.

> Atención :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! Es el más peligroso, por lo tanto el más lejano.


### Limpiador de archivos

La versión 4 y la nueva versión 3 tienen limpieza automática de archivos que no están presentes en la actualización automática del complemento.

El núcleo elimina automáticamente los archivos que tengan más de 7 días y que no se hayan actualizado.

- Elimina archivos con más de 7 días de antigüedad, dependiendo de la actualización de tu complemento.
- Solo afecta a las siguientes carpetas: `3rdparty`, `3rparty`, `desktop`, `mobile`, `core`, `docs`, `install`, `script`, `vendor`, `plugin_info`.
- `resource(s)` y `data` no se ven afectados, pero le recomendamos que utilice `data` para cualquier proyecto personalizado.
- Los archivos cuyo nombre comienza con «custom» tampoco se verán afectados.

Si desea realizar un cambio antes de la limpieza, puede utilizar `pre_install`.php` (en plugin_info).
Ver [plantilla de complemento](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### Mercado de enlaces de GitHub

Cambio de nombre de GitHub para acceder a sus repositorios privados.

Ahora necesitas utilizar jeedom-market en lugar de zoic.

### La documentación

El sitio web de documentación también ha cambiado su apariencia.

Ahora, los enlaces conducen directamente a su documentación.

### La traducción

Actualmente estamos desarrollando una nueva herramienta de traducción. Actualmente lo estamos probando internamente y nos comunicaremos con usted pronto para ofrecerle la opción de integrar sus complementos.