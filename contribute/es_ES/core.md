# Contribuir al núcleo y a los complementos

Jeedom es un programa de código abierto cuyo código se puede consultar en [GitHub](https://github.com/jeedom/core/tree/develop){:target="_blank"} y que está abierto a las aportaciones de desarrolladores externos.

>**IMPORTANTE**
>
>Es fundamental comprender el código propuesto sin basarse exclusivamente en los resultados generados por la inteligencia artificial. No obstante, esta puede resultar útil para optimizar el código o para realizar comprobaciones adicionales.

## Requisitos previos

Para contribuir al desarrollo del núcleo de Jeedom o de un complemento, hay que conocer y tener en cuenta algunos requisitos previos:
- En primer lugar, es imprescindible conocer y aplicar [El proceso de pruebas beta de Jeedom](/contribute/beta),
- también es necesario disponer de[una cuenta de usuario en GitHub](https://github.com/){:target="_blank"},
- Experiencia [una *Pull Request* en GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request){:target="_blank"},
- Comprender el lenguaje afectado por los cambios *(`PHP`, `JavaScript`, `HTML`, `CSS`, `Python`, `Node.js`, etc.)*,
- Probar los cambios propuestos para asegurarse de que no provocan otros errores o efectos no deseados,
- Por último, puede ser necesario tener conocimientos del sistema Linux Debian, dependiendo del código que se vaya a desarrollar.

## Desarrolladores externos

Tanto si eres un desarrollador experimentado como si no, cada uno tiene un papel que desempeñar para contribuir al desarrollo y la evolución de la solución Jeedom a su nivel. Se puede obtener ayuda a través de la documentación y el foro de Jeedom.

>**INFORMACIÓN**
>
>Si no te sientes cómodo modificando directamente los archivos del núcleo o de un complemento, pero quieres aportar tu granito de arena, siempre puedes colaborar creando un tema en el foro, en la sección [«Uso del núcleo de Jeedom»](https://community.jeedom.com/c/utilisation-du-core-de-jeedom/57){:target="_blank"} o [la dedicada a los complementos](https://community.jeedom.com/c/plugins/46){:target="_blank"} con la etiqueta del complemento correspondiente.

### Documentación para desarrolladores

Le recomendamos que consulte periódicamente la documentación relativa a la [desarrollo del núcleo](/dev/core) o en el [desarrollo de un complemento](/dev/) con el fin de aplicar las normas establecidas y garantizar el cumplimiento de los estándares de Jeedom.

### Foro de desarrolladores

Además de la documentación, también tienes acceso a [en la feria de desarrolladores del foro](https://community.jeedom.com/c/developpeur-developpeurs/5){:target="_blank"} que está repleto de información.

>**INFORMACIÓN**
>
>Este foro es de solo lectura por defecto; para poder participar en él, es imprescindible haber [registrado como desarrollador de Jeedom](https://market.jeedom.com/index.php?v=d&p=becomeDeveloper){:target="_blank"}.

## Contribuir al núcleo de Jeedom

Las contribuciones al núcleo de Jeedom deben enviarse a [la rama «develop»](https://github.com/jeedom/core/tree/develop){:target="_blank"} en la gran mayoría de los casos, salvo que ya exista una rama dedicada a esa funcionalidad. En caso de duda, te recomendamos que abras una incidencia para que los mantenedores puedan indicarte cuál es la rama adecuada o, si es necesario, crear una nueva.

>**IMPORTANTE**
>
>Si quieres enviar varios cambios, debes abrir tantas *solicitudes de incorporación* como correcciones o funcionalidades afectadas.

## Colaborar con los complementos

En cuanto a los complementos, las solicitudes de mejora deben enviarse a la rama `beta`.

>**INFORMACIÓN**
>
>Algunos repositorios de plugins no son de acceso público. En ese caso, también puedes colaborar creando un tema en [el foro](https://community.jeedom.com/c/plugins/46){:target="_blank"} con la etiqueta del complemento correspondiente.

## Gestión de traducciones

Las traducciones se generan automáticamente en los archivos `i18n/*.json`. No es necesario modificar estos archivos, ya que un robot los actualiza periódicamente.

Para que el sistema de traducción funcione, hay que respetar ciertas normas de formato según el idioma utilizado:
- En `PHP`, fuera de la sección `desktop/php` :
```php
$myString = __('Ma phrase qui sera traduite', __FILE__);
```

- En `PHP`, en la sección `desktop/php` :
```php
{% raw %}$myString = '{{Ma phrase qui sera traduite}}'{% endraw %};
```

- En `JavaScript`:
```js
{% raw %}var myString = '{{Ma phrase qui sera traduite}}'{% endraw %}
```
