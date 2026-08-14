# Colaborar en la documentación

La documentación de Jeedom está centralizada en esta web a través de varios mecanismos. Al igual que el núcleo de Jeedom, [La documentación está disponible en GitHub](https://github.com/jeedom/documentations){:target="_blank"} y es de código abierto *(licencia MIT)*.

Esta se divide en tres grandes categorías:
- [Documentación general](#Documentation%20générale)
- [La documentación del núcleo de Jeedom](#Documentation%20du%20core%20Jeedom)
- [Documentación de los complementos](#Documentation%20des%20plugins)

>**INFORMACIÓN**
>
>Si quieres revisar un gran número de archivos, es mejor hacerlo por etapas *(por sección, por ejemplo)* en lugar de enviar muchas modificaciones de una sola vez.

## Requisitos previos

Para contribuir a la documentación, hay que conocer y tener en cuenta algunos requisitos previos:
- En primer lugar, hay que disponer de[una cuenta de usuario en GitHub](https://github.com/){:target="_blank"},
- Experiencia [una *Pull Request* en GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request){:target="_blank"},
- Saber [el lenguaje `Markdown`](https://fr.wikipedia.org/wiki/Markdown){:target="_blank"} utilizado para dar formato al texto,
- Dado que las traducciones se generan a partir del francés, **las contribuciones deben enviarse obligatoriamente en francés *(carpeta `fr_FR`)***,
- Por último, dado que las traducciones se generan automáticamente, **no se debe realizar ninguna modificación en los archivos `.translation_memory/*.json`**.

>**INFORMACIÓN**
>
>Si no te sientes cómodo modificando directamente los archivos de documentación, también puedes colaborar creando un tema en [el foro](https://community.jeedom.com/){:target="_blank"} con la etiqueta `documentation-jeedom`.

## Documentación general

Las páginas de documentación general abarcan todas las secciones, salvo las relativas a los **Manuales** *(Jeedom core)* y a los **Plugins**. Se puede acceder a los archivos en [la presentación de la documentación](https://github.com/jeedom/documentations/tree/master){:target="_blank"}.

Cada página del sitio web de documentación corresponde a un archivo `Markdown` *(\*.md)* en GitHub, por ejemplo:
- Esta página, **Colaborar en la documentación** ([doc.jeedom.com/contribute/#LANG#/doc](/contribute/doc)) corresponde al archivo [contribute/fr_FR/doc.md](https://github.com/jeedom/documentations/blob/master/contribute/fr_FR/doc.md){:target="_blank"}.
- La página **Compatibilidad** ([doc.jeedom.com/compatibility/#LANG#/](/compatibility)) corresponde al archivo [compatibilidad/es_ES/index.md](https://github.com/jeedom/documentations/blob/master/compatibility/fr_FR/index.md){:target="_blank"}.
- La página **Instalación en Raspberry Pi** ([doc.jeedom.com/installation/#LANG#/rpi](/installation/rpi)) corresponde al archivo [instalación/fr_FR/rpi.md](https://github.com/jeedom/documentations/blob/master/installation/fr_FR/rpi.md){:target="_blank"}.
- La página **Desarrollo de complementos** ([doc.jeedom.com/dev/#LANG#/](/dev)) corresponde al archivo [dev/fr_FR/index.md](https://github.com/jeedom/documentations/blob/master/dev/fr_FR/index.md){:target="_blank"}.
- Y así sucesivamente...

>**IMPORTANTE**
>
>Dado que la documentación del núcleo y de los complementos se genera desde su propio repositorio, no se aceptarán contribuciones en las carpetas `core`, `plugins` y `plugins_contributor` *(véanse los párrafos siguientes)*. La documentación `PHPDoc` también se genera automáticamente, por lo que tampoco es necesario modificarla manualmente.

## Documentación del núcleo de Jeedom

La documentación del núcleo de Jeedom se encuentra en las secciones **Manual de usuario** y **Manual de configuración**, a las que se puede acceder haciendo clic en el botón ❔ situado en la esquina superior derecha de la interfaz de Jeedom. Los archivos se encuentran en [el repositorio del núcleo](https://github.com/jeedom/core/tree/develop/docs/fr_FR){:target="_blank"}, en el directorio `docs/fr_FR`.

Cada página del manual corresponde a un archivo `Markdown` *(\*.md)* en GitHub, por ejemplo:
- **Manual de usuario - Panel de control** ([doc.jeedom.com/core/#VERSION#/#LANG#/dashboard](/core/dashboard)) corresponde al archivo [docs/es_ES/dashboard.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/dashboard.md){:target="_blank"}.
- **Manual de usuario - Escenarios** ([doc.jeedom.com/core/#VERSION#/#LANG#/scenario](/core/scenario)) corresponde al archivo [docs/es_ES/scenario.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/scenario.md){:target="_blank"}.
- **Manual de configuración - Personalización avanzada** ([doc.jeedom.com/core/#VERSION#/#LANG#/custom](/core/custom)) corresponde al archivo [docs/es_ES/custom.md](https://github.com/jeedom/core/tree/develop/docs/fr_FR/custom.md){:target="_blank"}.

>**IMPORTANTE**
>
>Las contribuciones deben enviarse a la rama `develop` desde la base.

## Documentación de los complementos

La documentación de los complementos se divide en las secciones **Complementos oficiales** y **Complementos de terceros**. Como su nombre indica, los complementos oficiales los desarrolla el equipo de Jeedom, mientras que los complementos de terceros son obra de desarrolladores externos e independientes.

Los complementos de terceros se encargan de generar por sí mismos sus páginas de documentación y de registro de cambios; la página web de documentación de Jeedom las recoge y ofrece un enlace de acceso directo a dichas páginas.

Por su parte, la documentación de los complementos oficiales se obtiene directamente de sus repositorios de GitHub.

>**INFORMACIÓN**
>
>Algunos repositorios de plugins no son de acceso público. En ese caso, siempre puedes colaborar creando un tema en [el foro](https://community.jeedom.com/c/plugins/46){:target="_blank"} con la etiqueta `documentation-jeedom` y la del complemento.

Al igual que en el núcleo, cada página de documentación de un complemento oficial corresponde a un archivo `Markdown` *(\*.md)* en GitHub. Tomemos como ejemplo **el plugin ZwaveJS**:
- **Documentación del complemento Z-Wave JS** ([doc.jeedom.com/plugins/automation%20protocol/zwavejs/beta/#LANG#/](/plugins/automation%20protocol/zwavejs/beta/)) corresponde al archivo [docs/es_ES/index.md](https://github.com/jeedom/plugin-zwavejs/blob/beta/docs/fr_FR/index.md){:target="_blank"}.
- **Registro de cambios del complemento Z-Wave JS** ([doc.jeedom.com/plugins/automation%20protocol/zwavejs/beta/#LANG#/changelog](/plugins/automation%20protocol/zwavejs/beta/changelog)) corresponde al archivo [docs/es_ES/changelog.md](https://github.com/jeedom/plugin-zwavejs/blob/beta/docs/fr_FR/changelog.md){:target="_blank"}.

>**IMPORTANTE**
>
>Las contribuciones deben enviarse a la rama `beta` plugins en la gran mayoría de los casos.
