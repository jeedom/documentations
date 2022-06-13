# Cómo documentar un complemento

## Introduction

Veremos en esta documentación cómo documentar su complemento.

## Principe

El principio es muy simple, la documentación del complemento debe ser un enlace web simple para indicar en su archivo de información.json (ver detalle [aquí](https://doc.jeedom.com/es_ES/dev/structure_info_json) ) en el campo de la documentación.

Tenga en cuenta que también tiene un campo de registro de cambios que debe funcionar de la misma manera que el campo de documentación.

## Como hacer ?

Como se vio arriba, solo tiene que indicar en el archivo de información.json el enlace http(s) a su documentación, por lo que es libre en la presentación, el host o incluso el modo :

- un blog
- un servidor web sencillo
- github (único método que veremos aquí)

## Github

La forma más fácil para su documentación es usar el sistema de páginas github que tiene la ventaja de ser muy fácil de usar.

### Idioma de la documentación

Github admite asciidoc y markdown (md) para páginas, aquí solo veremos markdown.

No vamos a describirle la sintaxis de rebajas completa, otros sitios ya lo hacen muy bien, incluyendo [Éste](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

### Emplacement

Le recomendamos que en su complemento (alojado en github) cree una carpeta y copie los archivos y directorios de la carpeta /docs en el complemento de plantilla (consulte [aquí](https://doc.jeedom.com/es_ES/dev/plugin_template) )

Una vez hecho esto, tendrás en la carpeta /docs una carpeta fr_FR (la única para modificar). En esta carpeta, le recomendamos que haga 2 archivos :

- ``changelog.md`` => tu registro de cambios
- ``index.md`` => tus documentos

### Publicación

Ponerlo en línea es bastante simple, simplemente vaya a su repositorio de github, luego a "Configuración" y en la sección "Páginas de GitHub" active el que está en "carpeta maestra /docs" (como indica la redacción, solo los archivos en la carpeta /docs de la rama maestra de su complemento estará en línea).

![doc-github](images/tutoDoc.png)

Github luego le proporcionará un enlace como ``https://jeedom.github.io/plugin-template/`` (después de unos minutos, al revisarlo, debería ver su documentación con el formato correcto).

Ahora necesita poner los enlaces de su documentación en el archivo de información.json de tu complemento para esto necesitas :

- agregar ``#language#/`` para el enlace a la documentación, por lo que esto da en nuestro ejemplo ``https://jeedom.github.io/plugin-template/#language#/``
- agregar ``#language#/changelog`` para el enlace a su cambio, por lo que esto da en nuestro ejemplo ``https://jeedom.github.io/plugin-template/#language#/changelog``

> **Nota**
>
> Comprenderá, cuando el usuario solicite ver su documento, Jeedom o el mercado lo reemplazarán automáticamente #language# por el idioma del usuario para señalar el idioma correcto (si su documentación no está disponible en el idioma del usuario, entonces automáticamente, volverá al francés)
