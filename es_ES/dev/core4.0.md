## Núcleo v4.0 | Desarrolladores de complementos

### Deprecated

- Font-awesome 4 ya no está integrado en Core, reemplazado por Font-Awesome 5 [migración](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### Compatibilidad V4 en el mercado

La v3 que se lanzará en noviembre de 2020 tendrá un módulo de migración que le permitirá pasar de la V3 a la V4.

Durante la fase de migración de v3 a v4, complementos sin compatibilidad con v4 en su información.json alertará al usuario final antes de la actualización.


Si tu plugin es compatible con v4, indícalo en la información.json de tu complemento.

Ejemplo **info.json**: `"compatibility" : ["miniplus","inteligente","rpi","docker","bricolaje","v4"],`

Puede probar desde un escenario/bloque de código si sus complementos tienen la compatibilidad ingresada:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  ~~~ php
  {% raw %}
  //Autor de los complementos a verificar (distingue entre mayúsculas y minúsculas))
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  foreach ($pluginsArray como $plugin) {
    if ($plugin['autor'] == $autor) {
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

- Limpie el estilo en línea tanto como sea posible (consulte [plantilla de complemento](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
- visualización del comando span : clase `estado`
- Botón de control : una "acción colectiva"
- En grupos de entrada:
  - clase `roundedLeft` en el primer elemento (una entrada, botón, etc.))
    - clase `roundedRight` en el último elemento (una entrada, botón, etc.))
- En el div eqLogicThumbnailContainer:
    - Eliminar todos los estilos!
    - En los divs principales, agregue una clase de color:
      - colores del logotipo: `logoPrimario` y `logoSecondario`
        - Verde : `success`
        - bleu: `info`
        - orange: `warning`
        - rojo : `danger`
- Tenga cuidado con los complementos con plantillas: el icono de actualización ha cambiado (font-awesome 5) :
- Preste atención a las clases de botones, entradas, etc:
    - btn : 32 píxeles de alto
    - btn-sm / entrada-sm : 28 píxeles de alto
    - btn-xs : 22 píxeles de alto
- Archivo escritorio/php/pluginid.php : reemplazar objeto::todos() por jeeObject::all()

- Pruebe los complementos en los tres temas de 2019: Claro / Oscuro / Legado.

- Imágenes PNG con alfa si es necesario, para evitar antiestéticos cuadrados blancos en el tema Oscuro.

En última instancia, las páginas del complemento deben ser coherentes con las páginas de los objetos/escenarios/interacciones principales (tamaños, colores, diseños, etc). Sin efecto de estilo, pero sí consistencia.

> Observó :
>
> La barra lateral no sobrevivió a la v4 ! Para reemplazarlo, hay un menú contextual disponible en las pestañas de escenarios, objetos, interacciones y complementos.

> Actualizaciones :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. Esto evita esperar a que pase el robot y hace que la actualización esté disponible de inmediato.

> Recordatorio :
>
> Las imágenes mostradas en las páginas del complemento no deben cargarse desde la red, sino que deben estar entre los archivos locales del complemento.

> Atención :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! Es el más peligroso y por tanto el más lejano.


### Limpiador de archivos

V4 y el nuevo v3 tienen limpieza automática de archivos que no están presentes en la actualización automática del complemento.

El core elimina automáticamente archivos con más de 7 días de antigüedad que no han tenido actualización.

- Elimina archivos que tienen más de 7 días dependiendo de la actualización de su complemento.
- Solo afecta a carpetas > `3rdparty`, `3rparty`, `desktop`, `mobile`, `core`, `docs`, `install`, `script`, `vendor`, `plugin_info`.
- Los "recursos" y los "datos" no se ven afectados, pero le invitamos a utilizar "datos" para cualquier personalización.
- Los archivos cuyo nombre comienza con "personalizado" tampoco se ven afectados.

Si desea realizar un cambio antes de la limpieza, puede utilizar `pre_install.php` (en plugin_info).
Ver [plantilla de complemento](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### Mercado de enlaces de GitHub

Cambio de nombre de github para acceder a tus repositorios privados.

Ahora debes usar jeedom-market en lugar de zoic.

### Documentación

El sitio de documentación también ha cambiado de apariencia.

Ahora los enlaces van directamente a su documentación.

### Traducción

Actualmente estamos desarrollando una nueva herramienta de traducción. Actualmente lo estamos probando internamente y nos comunicaremos con usted pronto para ofrecerle integrar sus complementos en él.