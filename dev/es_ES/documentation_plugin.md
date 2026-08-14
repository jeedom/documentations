# Cómo elaborar la documentación de un complemento

## Introducción

En esta documentación veremos cómo crear la documentación de tu plugin.

## Principio

El principio es muy sencillo: la documentación del complemento debe ser un simple enlace web que hay que indicar en tu archivo info.json (ver los detalles [aquí](structure_info_json) ) en el campo «documentación».

Ten en cuenta que también hay un campo «changelog» que debe funcionar de la misma manera que el campo «documentación».

## ¿Cómo se hace?

Como se ha visto anteriormente, solo tienes que indicar en el archivo info.json el enlace http(s) a tu documentación, por lo que tienes total libertad en cuanto a la presentación, el proveedor de alojamiento o incluso el formato:

- un blog
- un sencillo servidor web
- GitHub (el único método que veremos aquí)

## GitHub

Lo más sencillo para tu documentación es utilizar el sistema de páginas de GitHub, que tiene la ventaja de ser muy fácil de usar.

### Idioma de la documentación

GitHub admite Asciidoc y Markdown (md) para las páginas; aquí solo veremos Markdown.

No vamos a describir aquí la sintaxis completa de Markdown, ya que hay otros sitios web que lo hacen muy bien, entre ellos [este](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Ubicación

Te recomendamos que, en tu plugin (alojado en GitHub), crees una carpeta y copies en ella los archivos y directorios de la carpeta /docs de la plantilla del plugin (véase [aquí](plugin_template) )

Una vez hecho esto, tendrás en la carpeta /docs una carpeta llamada fr_FR (la única que hay que modificar). En esta carpeta, te recomendamos que crees dos archivos:

- ``changelog.md`` => tu registro de cambios
- ``index.md`` => tu documentación

### Publicación en línea

Publicarlo en línea es bastante sencillo: solo tienes que ir a tu repositorio de GitHub, seleccionar «Configuración» y, en la sección «Páginas de GitHub», activar la opción «rama master /carpeta /docs» (tal y como indica el nombre, solo se publicarán en línea los archivos que se encuentren en la carpeta /docs de la rama master de tu plugin).

![doc-github](../images/tutoDoc.png)

A continuación, GitHub te proporcionará un enlace del tipo ``https://jeedom.github.io/plugin-template/`` (al cabo de unos minutos, al hacer clic en el enlace, deberías ver la documentación con el formato correcto).

Ahora tienes que añadir los enlaces de tu documentación al archivo info.json de tu plugin. Para ello, debes:

- añadir ``#language#/`` En cuanto al enlace a la documentación, nos lleva a nuestro ejemplo ``https://jeedom.github.io/plugin-template/#language#/``
- añadir ``#language#/changelog`` En cuanto al enlace a tu modificación, en nuestro ejemplo queda así: ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Nota**
>
> Como habrás comprendido, cuando el usuario solicite consultar tu documentación, Jeedom o el market sustituirán automáticamente #language# por el idioma del usuario para redirigirlo al idioma correcto (si tu documentación no está disponible en el idioma del usuario, se le redirigirá automáticamente al francés).
