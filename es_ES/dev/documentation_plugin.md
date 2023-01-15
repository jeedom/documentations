# Cómo hacer la documentación de un complemento

## Introduction

Veremos en esta documentación cómo hacer la documentación de su complemento.

## Principe

El principio es muy simple, la documentación del complemento debe ser un enlace web simple para indicar en su archivo de información.json (ver detalles [aquí](https://doc.jeedom.com/es_ES/dev/structure_info_json) ) en el campo de la documentación.

Tenga en cuenta que también tiene un campo de registro de cambios que debe funcionar de la misma manera que el campo de documentación.

## Como hacer ?

Como se vio arriba, solo debes indicar en el archivo de información.json el enlace http (s) a su documentación, por lo que está libre en la presentación, el host o incluso el modo :

- un blog
- un servidor web simple
- github (único método que veremos aquí)

## Github

La forma más fácil para su documentación es usar el sistema de páginas github que tiene la ventaja de ser muy fácil de usar.

### Lenguaje de documentación

Github admite asciidoc y markedown (md) para las páginas, solo veremos el markdown aquí.

No le describiremos la sintaxis completa de Markdown, otros sitios ya lo hacen muy bien, incluyendo [este](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Emplacement

Le recomendamos que en su complemento (alojado en github) cree una carpeta y copie los archivos y directorios de la carpeta / docs en la plantilla del complemento (consulte [aquí](https://doc.jeedom.com/es_ES/dev/plugin_template) )

Una vez hecho esto, tendrá en la carpeta / docs una carpeta fr_FR (la única para modificar). En esta carpeta, le recomendamos que haga 2 archivos :

- ``changelog.md`` => su registro de cambios
- ``index.md`` => su documentación

### Publicación

La carga es bastante simple, simplemente vaya a su repositorio de github, luego a "Configuración" y en la parte de "Páginas de GitHub" para activar la que está en la "carpeta maestra de rama / documentos" (como se indica en el título, solo los archivos en la carpeta / docs de la rama maestra de su complemento estarán en línea).

![doc-github](images/tutoDoc.png)

Github le proporcionará un enlace de tipo ``https://jeedom.github.io/plugin-template/`` (después de unos minutos, al revisarlo, debería ver el diseño de su documentación correctamente).

Ahora necesita poner los enlaces de su documentación en el archivo de información.json de tu plugin para eso es necesario :

- Añadir ``#language#/`` para el enlace a la documentación, esto nos da nuestro ejemplo ``https://jeedom.github.io/plugin-template/#language#/``
- Añadir ``#language#/changelog`` para el enlace a su cambio, así que este es nuestro ejemplo ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Nota**
>
> Como puede ver, cuando el usuario solicita ver su documento, Jeedom o el mercado lo reemplazarán automáticamente #language# por el idioma del usuario para señalar el idioma correcto (si su documentación no está disponible en el idioma del usuario, automáticamente, esto se referirá al francés)
