# Cómo hacer la documentación de un complemento

## Introduccion

Veremos en esta documentación cómo hacer la documentación de su complemento.

## Principio

El principio es muy simple, la documentación del complemento debe ser un simple enlace web para indicar en su archivo de información.json (ver detalles [aquí](https://doc.jeedom.com/es_ES/dev/structure_info_json) ) en el campo de la documentación.

Tenga en cuenta que también tiene un campo de registro de cambios que debería funcionar de la misma manera que el campo de documentación.

## Como hacer ?

Como se ve arriba, solo tiene que indicar en el archivo de información.json el enlace http (s) a su documentación, por lo tanto, es libre en la presentación, el host o incluso el modo :

- un blog
- un servidor web simple
- github (único método que veremos aquí)

## Github

La forma más fácil para su documentación es usar el sistema de páginas github que tiene la ventaja de ser muy fácil de usar.

### Lenguaje de documentación

Soporte de asciidoc y markedown (md) de Github para páginas, solo veremos el markedown aquí.

No le describiremos la sintaxis completa de rebajas, otros sitios ya lo hacen muy bien, [este](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Ubicación

Recomendamos en su complemento (alojado en github) hacer una carpeta y copiar los archivos y el directorio de la carpeta de documentos en el complemento de plantilla (consulte [aquí](https://doc.jeedom.com/es_ES/dev/plugin_template) )

Una vez hecho esto, tendrá en la carpeta docs una carpeta fr_FR (la única para modificar). En esta carpeta te recomendamos que hagas 2 archivos :

- ``changelog.md`` => su registro de cambios
- ``index.md`` => su documentación

### Publicación

Conectarse en línea es bastante simple, en su repositorio de github, luego en "Configuración" y en la parte de "Páginas de GitHub", actívelo en la "rama maestra / carpeta de documentos" (como lo indica la redacción de solo los archivos en el la carpeta / documentación de la rama maestra de su complemento estará en línea).

![doc-github](images/tutoDoc.png)

Github le proporcionará un enlace de tipo ``https://jeedom.github.io/plugin-template/`` (después de unos minutos de revisarlo, debería ver el diseño de la documentación correctamente).

Ahora necesita poner los enlaces de su documentación en el archivo de información.json de tu plugin para eso es necesario :

- Añadir ``#language#/`` para el enlace a la documentación, esto nos da nuestro ejemplo ``https://jeedom.github.io/plugin-template/#language#/``
- Añadir ``#language#/changelog`` para el enlace a su cambio, así que este es nuestro ejemplo ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Nota**
>
> Comprenderá cuándo el usuario solicitará ver su documento de jeedom o el mercado lo reemplazará automáticamente #language# por el idioma del usuario para señalar el idioma correcto (si su documentación no está disponible en el idioma del usuario, esto volverá automáticamente al francés)
