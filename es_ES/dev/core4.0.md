## Núcleo v4.0 | Desarrolladores de complementos

### Deprecated

- Font-awesome 4 ya no está integrado en el Core, reemplazado por Font-Awesome 5 [migración](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### Compatibilidad V4 en el mercado

El v3 que se lanzará en noviembre de 2020 tendrá un módulo de migración que le permitirá cambiar de V3 a V4.

Durante la fase de migración de v3 a v4, complementos sin compatibilidad con v4 en su información.json alertará al usuario final antes de la actualización.


Si su complemento es compatible con v4, indíquelo en la información.json de tu complemento.

Ejemplo **info.json**: `"compatibility" : ["miniplus","inteligente","rpi","docker","diy","v4"],`

Puede probar desde un escenario / bloque de código si sus complementos tienen la compatibilidad informada:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  ~~~ php
  {% raw %}
  // Autor de complementos para verificar (sensible a mayúsculas y minúsculas))
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  foreach ($complementosArray como $complemento) {
    if ($complemento['autor'] == $autor) {
      $countPlugins++;
    if ($complemento['hardwareCompatibility']['v4'] != '1') {
        $countIncompatibles++;
      $scenario->setLog('Plugin ' . $plugin['name'] . ' does not have v4 compatibility tag.');
    }
    }
  }
  si ($cuentaComplementos > 0) {
    si ($cuentaIncompatibles > 0) {
      $scenario->setLog($author . ' : ' . $countIncompatibles . ' potentially incompatible Jeedom V4 plugin on ' . $countPlugins . ' checked');
    } más {
      $scenario->setLog('All ' . $countPlugins . ' plugin developed by ' . $author . ' are Jeedom V4 compatible. Congratulations!');
    }
  } más {
    $scenario->setLog('No plugin found for ' . $author);
  }
  {% endraw %}
  ~~~

</details>

### Adaptación de plugins para Core v4

- Limpie los estilos en línea tanto como sea posible (vea [plantilla de plugin](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
- pantalla de comando de intervalo : clase `estado`
- Botón de control : una `acción` de clase
- En los grupos de entrada:
  - class `roundedLeft` en el primer elemento (una entrada, botón, etc.))
    - class `roundedRight` en el último elemento (una entrada, botón, etc)
- En el div eqLogicThumbnailContainer:
    - Eliminar todos los estilos!
    - En los divs principales, agregue una clase de color:
      - colores del logotipo: `logoPrimary` y `logoSecondary`
        - verde : `success`
        - bleu: `info`
        - orange: `warning`
        - Rojo : `danger`
- Cuidado con los plugins con plantillas: icono de actualización cambiado (font-awesome 5) :
- Preste atención a la clase de botones, entrada, etc:
    - btn : 32px alto
    - btn-sm / entrada-sm : 28px de alto
    - btn-xs : 22px alto
- Archivo escritorio/php/pluginid.php : reemplazar objeto::todo () de jeeObject::all()

- Pruebe los complementos en los tres temas 2019 Light / Dark / Legacy.

- Imágenes en png con alfa si es necesario, para evitar los antiestéticos cuadrados blancos en el tema oscuro.

Al final, las páginas del complemento deben ser coherentes con las páginas principales de objetos/escenarios/interacciones (tamaños, colores, diseños, etc.)). Sin efecto de estilo, pero consistencia.

> Observación :
>
> La barra lateral no sobrevivió v4 ! Para reemplazarlo, está disponible un menú contextual en las pestañas de escenarios, objetos, interacciones, complementos.

> Actualizaciones :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. Esto evita esperar a que pase el robot y hace que la actualización esté disponible de inmediato.

> Recuerdo :
>
> Las imágenes que se muestran en las páginas de complementos no deben cargarse desde la red, sino que deben estar entre los archivos locales del complemento.

> Atención :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! Es el más peligroso por lo que el más lejano.


### Limpiador de archivos

Tanto la v4 como la nueva v3 tienen una limpieza automática de archivos que no están presentes en la actualización automática de su complemento.

El núcleo elimina automáticamente los archivos de más de 7 días que no han tenido una actualización.

- Elimina archivos que tienen más de 7 días de acuerdo con la actualización de su complemento.
- Solo afecta a carpetas > `3rdparty`, `3rparty`, `desktop`, `mobile`, `core`, `docs`, `install`, `script`, `vendor`, `plugin_info`.
- `resource(s)` y `data` no se ven afectados, pero lo invitamos a usar `data` para cualquier encargo.
- Los archivos que comienzan con `custom` tampoco se ven afectados.

Si desea realizar un cambio antes de limpiar, puede usar `pre_install.php` (en plugin_info).
Ver [plantilla de plugin](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### Mercado de enlace de GitHub

Cambio de nombre de github para acceder a tus repositorios privados.

Ahora es necesario usar jeedom-market en lugar de zoic.

### La documentación

El sitio de documentación también ha cambiado su apariencia.

Ahora los enlaces se refieren directamente a su documentación.

### La traducción

Estamos desarrollando una nueva herramienta de traducción. Actualmente lo estamos probando internamente y nos pondremos en contacto con usted pronto para sugerirle que integre sus complementos en él.