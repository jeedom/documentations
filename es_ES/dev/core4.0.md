## Núcleo v4.0 | Desarrolladores de complementos

### Deprecated

-  [](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### 

.

..


..

Ejemplo ****: `"compatibility" : 

:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  
  {% raw %}
  )
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  ) {
    ) {
      $countPlugins++;
    '] != '1') {
        $countIncompatibles++;
      $scenario->setLog('Plugin ' . $plugin['name'] . ' does not have v4 compatibility tag.');
    }
    }
  }
  ) {
    ) {
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

### 

-  [](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
-  : 
-  : 
- :
  - )
    - )
- :
    - !
    - :
      - : 
        -  : `success`
        - bleu: `info`
        - orange: `warning`
        -  : `danger`
- Atención a los complementos con plantillas: El icono de actualización ha cambiado (font-awesome 5)) :
- Preste atención a la clase de botones, entrada, etc:
    - botón : 32px de alto
    - botón-sm / entrada-sm : 28px de alto
    - btn-xs : 22px de alto
- Archivo desktop/php/pluginid.php : reemplazar objeto::all() por jeeObject::all()

- Prueba de complementos en los tres temas de 2019: Claro/Oscuro/Legaciado.

- Imágenes en png con alfa si es necesario, para evitar antiestéticos cuadrados blancos en tema oscuro.

En última instancia, las páginas del complemento deben ser coherentes con las páginas principales de objetos/escenarios/interacciones (tamaños, colores, diseños, etc.)). Sin efecto estilístico, pero con consistencia.

> Observó :
>
> La barra lateral no sobrevivió a la v4 ! Para reemplazarlo, está disponible un menú contextual en las pestañas de escenarios, objetos, interacciones y complementos.

> Actualizaciones :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. Esto evita tener que esperar a que pase el robot y hace que la actualización esté disponible inmediatamente.

> Recordatorio :
>
> Las imágenes que se muestran en las páginas del complemento no deben cargarse desde la web, sino que deben estar entre los archivos locales del complemento.

> Atención :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! Es el más peligroso y por lo tanto el más lejano.


### Limpiador de archivos

La versión 4 y la nueva versión 3 tienen limpieza automática de archivos que no están presentes en la actualización automática del complemento.

El núcleo elimina automáticamente los archivos con más de 7 días de antigüedad que no se hayan actualizado.

- Elimina archivos que tengan más de 7 días de antigüedad dependiendo de la actualización de tu complemento.
- Solo afecta a las carpetas > `3rdparty`, `3rparty`, `desktop`, `mobile`, `core`, `docs`, `install`, `script`, `vendor`, `plugin_info`.
- Los recursos y datos no se ven afectados, pero le recomendamos que utilice datos para cualquier aplicación personalizada.
- Los archivos cuyos nombres comienzan con «custom» tampoco se verán afectados.

Si desea realizar un cambio antes de limpiar, puede utilizar `pre_install`.php` (en plugin_info).
Ver [](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### Mercado de enlace de GitHub

Cambio de nombre de Github para acceder a sus repositorios privados.

Ahora debes usar jeedom-market en lugar de zoic.

### La documentación

El sitio de documentación también ha cambiado su apariencia.

Ahora los enlaces van directamente a tu documentación.

### La traducción

Actualmente estamos desarrollando una nueva herramienta de traducción. Actualmente lo estamos probando internamente y nos comunicaremos con usted pronto para ofrecerle integrar sus complementos.