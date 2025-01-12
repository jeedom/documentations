# Cómo documentar un complemento

## Introduction

Veremos en esta documentación cómo documentar su complemento.

## Principe

El principio es muy simple, la documentación del complemento debe ser un simple enlace web para indicarlo en su archivo de información.json (ver detalles [aquí](https://doc.jeedom.com/es_ES/dev/structure_info_json) ) en el campo de la documentación.

Tenga en cuenta que también tiene un campo de registro de cambios que debería funcionar de la misma manera que el campo de documentación.

## Como hacerlo ?

Como se ve arriba, solo necesita indicar en el archivo de información.json el enlace http(s) a su documentación, por lo tanto, es libre de la presentación, el host o incluso el modo :

- un blog
- un servidor web sencillo
- github (único método que veremos aquí)

## Github

La forma más sencilla de realizar su documentación es utilizar el sistema de páginas de github que tiene la ventaja de ser muy fácil de usar.

### Idioma de la documentación

Github admite asciidoc y markdown (md) para páginas, aquí solo veremos markdown.

No vamos a describirle la sintaxis completa de Markdown, otros sitios ya lo hacen muy bien, incluido [Éste](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Emplacement

Le recomendamos que en su complemento (alojado en github) cree una carpeta y copie los archivos y directorios de la carpeta /docs a la plantilla del complemento (consulte [aquí](https://doc.jeedom.com/es_ES/dev/plugin_template) )

Una vez hecho esto, tendrás en la carpeta /docs una carpeta fr_FR (la única para modificar). En esta carpeta, le recomendamos crear 2 archivos :

- ``changelog.md`` => tu registro de cambios
- ``index.md`` => tu documentación

### En línea

La carga es bastante simple, simplemente vaya a su repositorio de github, luego a "Configuración" y en la sección "Páginas de GitHub" para activar la que está en la "rama maestra /carpeta docs" (como lo indica el texto, solo los archivos en la carpeta /docs de la rama maestra de su complemento estará en línea).

![doc-github](images/tutoDoc.png)

Github luego le proporcionará un enlace como ``https://jeedom.github.io/plugin-template/`` (Después de unos minutos, al acceder a él, debería ver su documentación distribuida correctamente).

Ahora necesita colocar los enlaces de su documentación en el archivo de información.json de tu complemento para esto necesitas :

- agregar ``#language#/`` para el enlace a la documentación, esto por lo tanto da en nuestro ejemplo ``https://jeedom.github.io/plugin-template/#language#/``
- agregar ``#language#/changelog`` para el enlace a su cambio, esto por lo tanto se basa en nuestro ejemplo ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Nota**
>
> Habrás comprendido que cuando el usuario solicite ver tu documento, Jeedom o el mercado lo reemplazarán automáticamente #language# por el idioma del usuario para señalar el idioma correcto (si su documentación no está disponible en el idioma del usuario, automáticamente señalará el francés))
