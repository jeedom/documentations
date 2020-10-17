# Contribuir al desarrollo del núcleo

Desea contribuir al desarrollo de Jeedom Core ?

- Puedes hacer relaciones públicas (*Solicitudes de extracción*) Sobre *repositorio* de Core.
- Si tiene ideas para el desarrollo y desea participar a largo plazo, no dude en [contacta al equipo del proyecto](mailto:contact@jeedom.com).

Aquí están los conceptos básicos para saber :

## Ramas Github

Para participar en el desarrollo de Jeedom, debes tener una cuenta [Github](https://github.com/).

El código central es de código abierto y está disponible [aquí](https://github.com/jeedom/core).

- **alfa** :  Rama alfa V4. Destinado principalmente a desarrolladores para la próxima versión de Jeedom.
- **Beta** : Rama beta V4. Destinado principalmente a probadores beta, para probar antes de cambiar a estable.
- **V4 estable** : Rama estable de V4.
- **Lanzamiento** : Liberar la rama candidata de V3. Solo para correcciones de errores.
- **Maestro** : Rama de la versión estable V3.

Las actualizaciones se realizan en estas ramas dependiendo de la configuración de Jeedom **Configuración → Sistema → Configuración / Actualizaciones / Market**.

Relaciones públicas (*Solicitudes de extracción*) siempre debe hacerse en la rama alfa.

Del mismo modo, para participar en debates sobre [Comunidad](https://community.jeedom.com/), registrarse como desarrollador : [Jeedom dev](https://www.jeedom.com/fr/dev.html).

## Desarrollo

Para ayudar al desarrollo del Core, debe dominar uno o más de los siguientes idiomas:

- Php : Desarrollo de clases php, llamadas ajax desde el front-end.
- JavaScript : Desarrollo de clases js y front-end.
- Css : Desarrollo de interfaz.

El conocimiento del entorno Linux también es deseable.

## Árbol de núcleo

El código se distribuye en diferentes directorios en la raíz de Jeedom (por defecto : var / www / html) :

- Tercera parte : Archivo que incluye las bibliotecas externas utilizadas por Jeedom (jQuery, CodeMirror, etc).
- reserva : Carpeta de copias de seguridad de Jeedom.
- **núcleo** : Archivo que contiene las funciones internas del Core:
	- **ajax** : Interfaz de archivos php entre clases js y clases php.
	- API : API php archivos.
	- **clase** : Archivos de clase php (*eqLogic, cmd, jeeObject, history, cron, etc.*).
	- com : Archivos de clase php de comunicación (*http, shell*).
	- config : Configuración básica de archivos php y *default.config.ini* incluidos los ajustes de configuración predeterminados. archivo de versión para la versión Core.
	- css : Iconos disponibles con Core y sus CSS.
	- i18n : Archivos Json que incluyen cadenas traducidas.
	- img : Imágenes principales (logotipos, fondos, etc.).
	- **js** : Archivos de clase js, llamados en particular desde las páginas de Jeedom.
	- php : Archivos php necesarios para Core (excepto clases).
	- repo : Archivos php específicos del mercado, samba, etc.
	- **Plantilla** : Archivos html (*Panel de control y móvil*) para mostrar eqLogics (Tile), comandos (Widgets) y escenarios.
	- **Temas** : Archivos CSS de los tres temas principales (Dark, Light, Legacy), para Dashboard y Mobile.
- datos : Archivo que incluye datos de usuario (Informes, Vistas, css / js de Personalización avanzada, Diseño 3D, etc).
- **Escritorio** : Archivo que incluye todas las páginas mostradas (interfaz) en el escritorio y sus funciones.
	- común : Archivos Js / php comunes a todas o varias páginas. Agrupa funciones a las que se puede llamar desde varias páginas, en particular la *utils.js*, presente en todas las páginas del escritorio.
	- css : Vista de escritorio de archivos CSS específicos.
	- img : Imágenes específicas de escritorio.
	- js : Js archivos correspondientes a cada página (*administración, tablero, escenario, etc.*).
	- modal : Archivos php modales, incluidos el código php / html y el código js.
	- php : Archivos php correspondientes a cada página (*administración, tablero, escenario, etc.*).
- docs : Documentación.
- instalar : Archivos de instalación de Jeedom.
- Registro : Archivo que incluye todos los registros (http.error, actualización, etc.) y los de los escenarios (la subcarpeta scenoglog, nombrada por id).
- **Móvil** : Archivo que incluye todas las páginas que se muestran (interfaz de aplicación web) en dispositivos móviles y sus funciones.
	- css : Vista móvil de archivos CSS específicos.
	- HTML : Archivos html correspondientes a cada página (*hogar, equipo, cronograma, etc.*).
	- js : Js archivos correspondientes a cada página (*hogar, equipo, cronograma, etc.*).
	- modal : Archivos HTML correspondientes a modal en Mobile.
- plugins : Archivo que incluye todos los complementos instalados.
- Guión : Script de implementación, certificados.
- Apoyo : Archivo utilizado al solicitar soporte.
- vendedor : Archivo que incluye bibliotecas php de terceros.


## Front-end

La interfaz Jeedom funciona como un sitio web, desde php en interfaz con SQL y desde js / CSS.

Inicialmente, el navegador carga el archivo `/ index.php` :
- Verificación de la instalación de Jeedom, referencia a `install / setup.php` si es necesario.
- Comprobación de procedencia de escritorio o móvil.
- Cargue los archivos y clases necesarios con `/ core / php / core.inc.php`.
- Verificación de autenticación de usuario.
- Comprobación de parámetros en la URL para cargar el contenido correcto directamente.
- Redirigir a la versión de escritorio `/ desktop / php / index.php` o Mobile `mobile / html / home.html` según los parámetros de la URL.

### Desktop

La interfaz Jeedom funciona según el principio de una página. Una vez cargadas, las diferentes páginas se muestran cambiando el contenido de un contenedor.

El archivo principal en Desktop es `/ desktop / php / index.php`.

Cada página tiene al menos dos parámetros en la URL. Ejemplo :

`https://my.dns1.jeedom.com/index.php?v = d & p = tablero de instrumentos` :
- **v** : Versión de interfaz. d para escritorio, m para móvil.
- **pags** : Página para mostrar. Aquí, `tablero de instrumentos`.

En este caso, el archivo `/ desktop / php / index.php` cargará el archivo `/ desktop / php / dashboard.php` en el div `div_pageContainer`. Esto también cargará el archivo `/ desktop / js / dashboard.js` incluidas las funciones js específicas de la visualización de esta página (aquí, el Panel de control).

El archivo `/ desktop / php / index.php` también se encarga de :
- Modo de verificación *rescatar*
- Verificar la autenticación del usuario.
- Compruebe si es necesario la página para cargar de acuerdo con la configuración (página predeterminada del usuario).
- Crea la estructura html (*head, body, div_pageContainer, etc*).
- Carga CSS, bibliotecas, etc.
- Cargar tema de usuario.
- Crea la barra de menú.
- Ingrese algunas variables globales de php / js.
- Cargue el archivo js `escritorio / común / js / utils.js`

El archivo `desktop / common / js / utils.Por lo tanto, js` siempre está presente y se carga una vez. Permite :
- Administra eventos js desde el menú.
- Gestionar parámetros de URL de acuerdo con la página solicitada.
- Cargue la página solicitada en el div `div_pageContainer`.
- Gestionar la apertura / cierre de modales (ventana de diálogo).
- Administre un posible cambio de tema según la hora.
- Permitir que diferentes archivos js accedan a funciones comunes.

Entonces el índice.PHP y las utilidades.js proporciona la estructura y funciones básicas de la interfaz.
Luego, el contenido de la página llamada se carga desde el escritorio / php / page.php y escritorio / js / page.js.
Estos archivos de contenido puramente orientados a la interfaz pueden acceder a las funciones principales (las clases `/ core / class`) directamente en php, o en js gracias a las clases js (` / core / js`) a través de llamadas ajax (`/ core / ajax`).

Por lo tanto, las funciones internas del Core están bien separadas, para operación interna (Back-end), pero son accesibles a través de la interfaz. Del mismo modo, cada página tiene su propio código php y js. Esto hace posible desarrollar y mantener mejor el código, pero también optimizar el rendimiento al cargar solo las clases y funciones necesarias.

### Mobile

La interfaz de escritorio responde y se adapta al tamaño del navegador. Sin embargo, algunas cosas, como editar un guión, serían complicadas en una pantalla pequeña. Además, en un teléfono inteligente en el exterior, en 3G o incluso 4G, es importante optimizar la velocidad de la pantalla. Es por eso que Jeedom tiene una interfaz móvil más ligera adecuada para pantallas pequeñas.

La página de referencia es `/ mobile / html / index.html`, que se encarga de :
- Verificar la autenticación del usuario.
- Crea la estructura html (*head, body, div_pageContainer, etc*).
- Carga CSS, bibliotecas, etc.
- Cargar tema de usuario.
- Ingrese algunas variables globales de php / js.
- Cargue el archivo js `mobile / js / application.js`

El archivo `mobile / js / application.js` contiene las funciones comunes a todas las páginas.

En cuanto a la interfaz de escritorio, la página llamada consta de dos archivos :
- `/ mobile / html / home.html` : código HTML.
- `/ mobile / js / home.js` : las funciones js específicas de esta página.

Una diferencia notable en dispositivos móviles es la ausencia de páginas php. Por lo tanto, la generación del código se basa en las clases js, que siempre pueden llamar a las funciones principales con llamadas ajax.

### Archivos CSS

Core CSS se basa principalmente en estos archivos:
- En el escritorio :
	- escritorio / css / boostrap.css : Versión limpiada por el equipo CSS Bootstrap v3.3.7.
	- desktop / css / desktop.main.css : Interfaz principal CSS.
	- desktop / css / coreWidgets.css : CSS específico para widgets Core.

- En móvil :
	- mobiles / css / mobile.main.css : Interfaz principal CSS.
	- móviles / css / coreWidgets.css : CSS específico para widgets Core.

Los temas contienen CSS específicos para cada tema, incluidos colors.css.

Orden de carga de CSS en el escritorio :
- 3rd Party css (CodeMirror, etc.).
- Fuentes (roboto, camingocode, text-security-disc).
- coreWidgets.css
- Escritorio.main.css
- colores.css (variables de color del tema).
- core2019_xx.css (archivo de tema principal).
- oscuridad.css (si está habilitado en la configuración).
- personalizado.css (archivo css de personalización avanzada).


## Back-end

*En curso*

La interfaz es una cosa, pero, por supuesto, su Jeedom siempre está activo, para ejecutar los escenarios, los crons, los registros, las historias, etc.

El Back-end se basa en las mismas clases de php que el Front-end, presente en `/ core / class /`. Cada parte de Jeedom tiene su clase php, en particular :

- jeeObject.class.php : Agrupa funciones relacionadas con objetos Jeedom.
- eqLogic.class.php : Combina funciones relacionadas con equipos Jeedom.
- cmd.class.php : Combina funciones relacionadas con los comandos Jeedom.
- clase cron.php : Combina funciones relacionadas con las tareas programadas de Jeedom.
- config.class.php : Agrupa funciones relacionadas con los parámetros de configuración de Jeedom.
- escenario.clase.php : Combina las funciones relacionadas con los escenarios de Jeedom.
- DB.class.php : Combina todas las funciones de acceso a la base de datos Jeedom. Este administra todo el acceso a SQL requerido por las otras clases.

etc.

## Documentation

Más allá del desarrollo puro de Core, también puede participar en la documentación de Jeedom.

Esto se puede encontrar en `docs / fr_FR /`. Puedes hacer relaciones públicas (*Solicitudes de extracción*) en archivos .md, preferiblemente en la rama alfa.

Las traducciones están presentes en los archivos de otros idiomas. El directorio `docs / i18n /` contiene archivos .json por idioma para la traducción de las cadenas de caracteres de la interfaz Core.

Estos son generados automáticamente por un sistema de traducción específico de Jeedom. Por lo tanto, no es necesario realizar cambios, ya que el sistema los sobrescribirá. Si desea mejorar las traducciones, puede informarlo [Comunidad](https://community.jeedom.com/). Si domina uno de los idiomas de Jeedom y desea ir más allá, puede solicitar acceso al sistema de traducción, que le permite corregir todas las traducciones de cada idioma de las diferentes versiones del Core y de los plugins oficiales : [contacta al equipo del proyecto](mailto:contact@jeedom.com).

En el código puede especificar cadenas para traducir así :

En php : `$ $ myString = __ ('Mi oración a traducir', __FILE __);`

En js : ``{% raw %}var myString = '{{Mi oración se traducirá}}'{% endraw %}``

El sistema de traducción se encargará de su traducción y su referencia en los archivos json (`docs / i18n /`), y el núcleo de su reemplazo en la interfaz.

