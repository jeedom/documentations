# Contribuir a la documentación

La documentación de Jeedom está centralizada en este sitio, mediante varios mecanismos. Al igual que Jeedom's Core, se puede acceder a la documentación en Github y es de código abierto (licencia MIT).

Para participar en la documentación, debe tener una cuenta [Github](https://github.com/).

Por supuesto, siempre puede hacer un mensaje en el [Foro](https://community.jeedom.com/), poniendo la etiqueta documentation-jeedom en su mensaje.

Esto se diferencia en tres categorías :

## Documentación general

Las páginas de documentación general son aquellas que no provienen directamente del Core.

Por ejemplo :

- [Presentación](https://doc.jeedom.com/es_ES/presentation/)
- [Conceptos](https://doc.jeedom.com/es_ES/concept/)
- [Contribuir a la documentación](https://doc.jeedom.com/es_ES/contribute/doc)

Estas páginas están disponibles en [repositorio de documentación](https://github.com/jeedom/documentations/tree/master/fr_FR)

Siguiendo la URL en el sitio de documentación, puede encontrar el archivo md correspondiente. Ejemplos :

- Presentación -> https://github.com/jeedom/documentations/blob/master/es_ES/presentation/index.md
- Conceptos -> https://github.com/jeedom/documentations/blob/master/es_ES/concept/index.md
- Contribuir a la documentación -> https://github.com/jeedom/documentations/blob/master/es_ES/contribute/doc.md

Entonces puedes hacer relaciones públicas (*Solicitudes de extracción*) en estos archivos `.md`.

Puede ver en este directorio, los directorios principales, complementos, etc. Estos se administran automáticamente, por lo que no es necesario hacer relaciones públicas aquí (leer más).


## Documentación de Jeedom Core

La documentación principal está en el repositorio principal, en el directorio doc : [https://github.com/jeedom/core/tree/alpha/docs/fr_FR](https://github.com/jeedom/core/tree/alpha/docs/fr_FR)

Para cada página de Jeedom, tienes una página.md correspondiente.

Estas son las páginas a las que puede acceder (?) En la parte superior derecha de la interfaz de su Jeedom, y ubicadas en las secciones :

- Manual del usuario
- Manual de configuración

Entonces puedes hacer relaciones públicas (*Solicitudes de extracción*) en archivos .md, preferiblemente en la rama alfa.


## Documentación de complementos

Siguiendo el mismo principio que la documentación principal, la de los complementos se recupera automáticamente del repositorio de complementos.

Por ejemplo, para el complemento OpenZWave

- Accès à la doc ici : https://doc.jeedom.com/es_ES/plugins/automation%20protocol/openzwave/
- Repository du plugin : https://github.com/jeedom/plugin-openzwave/blob/beta/docs/es_ES/index.md

Allí debe encontrar el repositorio del complemento en cuestión, luego ir a su directorio doc / fr_FR. Al distinguir entre [complementos oficiales](https://github.com/jeedom) complementos de terceros. Además, los complementos de pago (oficiales o de terceros) no son accesibles, porque en repositorios privados. En este caso, siempre puede hacer un mensaje en el [Foro](https://community.jeedom.com/), con la etiqueta documentation-jeedom o el complemento.


## Las traducciones

Las traducciones están presentes en los archivos de otros idiomas. El directorio `docs / i18n /` contiene archivos .json por idioma para la traducción de las cadenas de caracteres de la propia interfaz Core.

Estos son generados automáticamente por un sistema de traducción específico de Jeedom. Por lo tanto, no es necesario modificarlo, ya que el sistema lo sobrescribirá. Si desea mejorar las traducciones, puede informarlo en [Comunidad](https://community.jeedom.com/). Si domina uno de los idiomas de Jeedom y desea ir más allá, puede solicitar acceso al sistema de traducción, que le permite corregir todas las traducciones de cada idioma de las diferentes versiones del Core y de los complementos oficiales : [contacta con el equipo del proyecto](mailto:contact@jeedom.com).

En el código puede especificar cadenas para traducir así :

En php : `$ myString = __ ('Mi oración que será traducida', __FILE __);`

En JavaScript : ``{% raw %}var myString = '{{Mi oración que será traducida}}'{% endraw %}``

El sistema de traducción se encargará de su traducción y su referencia en los archivos json (`docs / i18n /`), y el núcleo de su reemplazo en la interfaz.

Si desea vincular a otra página de documentación, puede agregar `/ fr_FR / contrib / doc`. Al traducir, la parte fr_FR se adaptará automáticamente.


