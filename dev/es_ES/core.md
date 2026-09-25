# Desarrollo del núcleo

## Árbol de navegación

El código está distribuido en diferentes directorios en la raíz de Jeedom *(`/var/www/html` por defecto)*:

- **3rdparty**: Carpeta que contiene las bibliotecas externas utilizadas por Jeedom *(jQuery, CodeMirror, etc.)*.
- **copia de seguridad**: Carpeta de copias de seguridad de Jeedom.
- **core**: Carpeta que contiene las funciones internas del Core:
	- **ajax**: Archivos PHP que sirven de interfaz entre las clases JavaScript y las clases PHP.
	- **api**: Archivos PHP de las API.
	- **clase**: Archivos de clases PHP *(eqLogic, cmd, jeeObject, history, cron, etc.)*.
	- **com**: Archivos de las clases PHP de comunicación *(http, shell)*.
	- **config**: Archivos PHP de configuración del núcleo y *default.config.ini*, que contienen los parámetros de configuración por defecto. Archivo de versión para la versión del núcleo.
	- **css**: Iconos disponibles con el Core y su CSS.
	- **i18n**: Archivos JSON que contienen las cadenas de texto traducidas.
	- **img**: Imágenes (logotipos, fondos, etc.) del Core.
	- **js**: Archivos de clases JavaScript, a los que se accede, entre otros, desde las páginas de Jeedom.
	- **php**: Archivos PHP necesarios para el núcleo (excluidas las clases).
	- **repo**: Archivos PHP específicos del mercado, Samba, etc.
	- **plantilla**: Archivos HTML *(Panel de control y Móvil)* para mostrar los eqLogics (mosaicos), controles (widgets) y escenarios.
	- **Temas**: Archivos CSS de los tres temas del núcleo (Dark, Light, Legacy), para el panel de control y dispositivos móviles.
- **datos**: Carpeta que contiene los datos del usuario (informes, vistas, archivos CSS/JS de personalización avanzada, diseño 3D, etc.).
- **Ordenador de sobremesa**: Carpeta que incluye todas las páginas que se muestran (la interfaz) en el ordenador de sobremesa y sus funciones.
	- **común**: Archivos js/php comunes a varias páginas. Reúne funciones a las que se puede acceder desde varias páginas, en particular el archivo *utils.js*, presente en todas las páginas en la versión de escritorio.
	- **css**: Archivos CSS específicos para la visualización en ordenador.
	- **img**: Imágenes específicas para la visualización en el escritorio.
	- **js**: Archivos js correspondientes a cada página *(administración, panel de control, escenario, etc.)*.
	- **modal**: Archivos PHP de las ventanas modales, que incluyen el código PHP/HTML y el código JavaScript.
	- **php**: Archivos PHP correspondientes a cada página *(administración, panel de control, escenario, etc.)*.
- **docs**: Documentación.
- **Instalación**: Archivos de instalación de Jeedom.
- **log**: Carpeta que contiene todos los registros (http.error, update, etc.) y los de los escenarios (subcarpeta scenarioLog, nombrados por su ID).
- **Móvil**: Dossier que incluye todas las páginas que se muestran (la interfaz de la aplicación web) en el móvil y sus funciones.
	- **css**: Archivos CSS específicos para la visualización en dispositivos móviles.
	- **html**: Archivos HTML correspondientes a cada página *(inicio, equipamiento, cronología, etc.)*.
	- **js**: Archivos js correspondientes a cada página *(inicio, equipamiento, cronología, etc.)*.
	- **modal**: Archivos HTML correspondientes a las ventanas modales en dispositivos móviles.
- **plugins**: Carpeta que contiene todos los plugins instalados.
- **script**: Script de implementación, certificados.
- **Asistencia técnica**: Carpeta que se utiliza en caso de solicitar asistencia técnica.
- **proveedor**: Carpeta que contiene bibliotecas PHP de terceros.

## Interfaz de usuario

La interfaz de Jeedom funciona como una página web, basada en PHP integrado con SQL y JavaScript/CSS.

Al principio, el navegador carga el archivo `/index.php` :
- Comprobación de la instalación de Jeedom, redirección a `install/setup.php` si es necesario.
- Verificación del origen: ordenador o móvil.
- Carga de los archivos y clases necesarios con `/core/php/core.inc.php`.
- Comprobación de la autenticación del usuario.
- Comprobación de los parámetros de la URL para cargar directamente el contenido correcto.
- Redirige a la versión de escritorio `/desktop/php/index.php` o móvil `mobile/html/home.html` en función de los parámetros de la URL.

### Escritorio

La interfaz de Jeedom funciona según el principio de «una sola página». Una vez cargada, las diferentes páginas se muestran cambiando el contenido de un contenedor.

El archivo principal en Desktop es `/desktop/php/index.php`.

Cada página tiene al menos dos parámetros en la URL. Ejemplo:

`https://my.dns1.jeedom.com/index.php?v=d&p=dashboard` :
- **v**: Versión de la interfaz: `d` para ordenador de sobremesa, `m` para móviles.
- **p**: Página que se va a mostrar. Aquí, `dashboard`.

En este caso, el archivo `/desktop/php/index.php` Se va a cargar el archivo `/desktop/php/dashboard.php` en la div `div_pageContainer`. Este también cargará el archivo `/desktop/js/dashboard.js` que incluye las funciones de JavaScript específicas para la visualización de esta página (en este caso, el Dashboard).

El archivo `/desktop/php/index.php` también se encarga de:
- Comprobar el modo *rescue*
- Comprobar la autenticación del usuario.
- Comprueba, si es necesario, la página que se debe cargar en función de la configuración (página predeterminada del usuario).
- Crear la estructura HTML *(head, body, div_pageContainer, etc.)*.
- Cargar los archivos CSS, las bibliotecas, etc.
- Cargar el tema del usuario.
- Crear la barra de menú.
- Establecer algunas variables globales de PHP/JS.
- Cargar el archivo js `desktop/common/js/utils.js`

El archivo `desktop/common/js/utils.js` por lo tanto, siempre está presente y se carga una sola vez. Permite:
- Gestionar los eventos JavaScript del menú.
- Gestionar los parámetros de la URL en función de la página solicitada.
- Cargar la página solicitada en el div `div_pageContainer`.
- Gestionar la apertura y el cierre de las ventanas de diálogo.
- Gestionar un posible cambio de tema en función de la hora.
- Permitir que los distintos archivos js accedan a funciones comunes.

Así, los archivos index.php y utils.js proporcionan la estructura y las funciones básicas de la interfaz.
A continuación, se carga el contenido de la página solicitada desde desktop/php/page.php y desktop/js/page.js.
Estos archivos de contenido, orientados exclusivamente a la interfaz, pueden acceder a las funciones del Core (las clases `/core/class`) directamente en PHP, o en JavaScript gracias a las clases de JavaScript (`/core/js`) mediante llamadas AJAX (`/core/ajax`).

Las funciones internas del Core están bien separadas para el funcionamiento interno (back-end), pero son accesibles a través de la interfaz. Del mismo modo, cada página tiene su propio código PHP y JavaScript. Esto permite mejorar el desarrollo y el mantenimiento del código, además de optimizar el rendimiento al cargar únicamente las clases y funciones necesarias.

#### Core v4.2
Desde la versión v4.2 de Core, todas las funciones js del archivo `desktop/common/js/utils.js` están aisladas en un espacio de nombres `jeedomUtils{}`.
Por ejemplo, la función que antes aparecía en la ventana raíz `loadPage()` se está convirtiendo en `jeedomUtils.loadPage()`.

Por motivos de compatibilidad con versiones anteriores de los complementos, las funciones antiguas siguen estando declaradas y quedarán obsoletas en una versión posterior. [Ver la lista aquí](https://github.com/jeedom/core/blob/alpha/desktop/common/js/utils.js#L1423).

#### Core v4.3
Siguiendo la línea de la versión 4.2, se han aislado las páginas del front-end en la versión de escritorio para evitar hacer referencia a variables y funciones en la ventana raíz. Esto evita posibles conflictos de declaración y facilita la lectura y la comprensión del código, así como su depuración.

El archivo `core/js/jeedom.class.js`declara dos nuevos espacios de nombres:
##### jeeFrontEnd

Algunas variables globales se encuentran ahora en este espacio de nombres:

```js
jeeFrontEnd = {
  __description: 'Global object where each Core page register its own functions and variable in its sub-object name.',
  jeedom_firstUse: '',
  language: '',
  userProfils: {},
  planEditOption: {state: false, snap: false, grid: false, gridSize: false, highlight: true},
  //loadPage history:
  PREVIOUS_PAGE: null,
  PREVIOUS_LOCATION: null,
  NO_POPSTAT: false,
  modifyWithoutSave: false,
  //@index.php
  serverDatetime: null,
  clientServerDiffDatetime: null,
  serverDatetime: null,
  serverTZoffsetMin: null,
}
```

Ejemplo típico de `desktop/js/corepage.js` :

```js
"use strict"

if (!jeeFrontEnd.corepage) {
	jeeFrontEnd.corepage = {
		myVar: 'oneVar',
		init: function() {
			window.jeeP = this //root shortcut
		},
		postInit: function() {
			//Do stuff once page loaded
		},
		myFunction: function(_var) {
			var myFuncContextVar = this.myVar + ' -> ' + _var
			console.log(myFuncContextVar)
		}
	}
}

jeeFrontEnd.corepage.init()

$(function() {
  jeeFrontEnd.corepage.postInit()
})

$('#myButton').on('click', function() {
	jeeP.myFunction('test')
})
```

> Por lo tanto, el espacio de nombres de la página no se volverá a crear al volver a esta misma página. Además, la variable `jeeP` permite utilizar `jeeFrontEnd.corepage` con una sintaxis breve, equivale a un `self` específico de la página.

##### jeephp2js

Se utiliza para pasar variables de un script PHP al JavaScript del front-end. Por ejemplo:

```php
sendVarToJS([
  'jeephp2js.myjsvar1' => init('type', ''),
  'jeephp2js.myjsvar2' => config::byKey('enableCustomCss')
]);
```

A continuación

```js
$(function() {
  if (jeephp2js.myjsvar1 == '1') { ... }
})
```

> El espacio de nombres jeephp2js{} se vacía al cambiar de página para evitar cualquier variable residual inesperada.

### Móvil

La interfaz de escritorio es adaptativa y se ajusta al tamaño del navegador. Sin embargo, algunas acciones, como editar un escenario, resultarían complicadas en una pantalla pequeña. Además, al utilizar un smartphone en exteriores, con conexión 3G o incluso 4G, es importante optimizar la velocidad de carga de la página. Por eso, Jeedom cuenta con una interfaz móvil, más ligera y adaptada a las pantallas pequeñas.

La página de referencia es `/mobile/html/index.html`, que se encarga de:
- Comprobar la autenticación del usuario.
- Crear la estructura HTML *(head, body, div_pageContainer, etc.)*.
- Cargar los archivos CSS, las bibliotecas, etc.
- Cargar el tema del usuario.
- Establecer algunas variables globales de PHP/JS.
- Cargar el archivo js `mobile/js/application.js`

El archivo `mobile/js/application.js` contiene las funciones comunes a todas las páginas.

Al igual que en la interfaz de escritorio, la página a la que se accede está formada por dos archivos:
- `/mobile/html/home.html` : el código HTML.
- `/mobile/js/home.js` : las funciones JavaScript específicas de esta página.

Una diferencia notable en la versión móvil es la ausencia de páginas PHP. Por lo tanto, la generación del código se basa en clases JavaScript, que siempre pueden invocar las funciones del núcleo mediante llamadas AJAX.

### Archivos CSS

Los CSS del Core se basan principalmente en estos archivos:
- En el escritorio:
	- `desktop/css/boostrap.css` : Versión revisada por el equipo de CSS Bootstrap v3.3.7.
	- `desktop/css/desktop.main.css` : CSS principal de la interfaz.
	- `desktop/css/coreWidgets.css` : CSS específicos de los widgets del núcleo.

- En el móvil:
	- `mobile/css/mobile.main.css` : CSS principal de la interfaz.
	- `mobile/css/coreWidgets.css` : CSS específicos de los widgets del núcleo.

Los temas contienen archivos CSS propios de cada tema, en particular los archivos colors.css.

Orden de carga de los CSS en la versión de escritorio:
- CSS de terceros (CodeMirror, etc.).
- Fuentes (Roboto, Camingocode, Text-Security-Disc).
- coreWidgets.css
- desktop.main.css
- colors.css (variables de color del tema).
- core2019_xx.css (archivo principal del tema).
- shadows.css (si está activado en la configuración).
- custom.css (archivo CSS de personalización avanzada).


## Back-end

*en curso*

La interfaz es una cosa, pero, por supuesto, tu Jeedom sigue activo para ejecutar los escenarios, las tareas programadas, los registros, los historiales, etc.

El back-end se basa en las mismas clases PHP que el front-end, presentes en `/core/class/`. Cada parte de Jeedom tiene su propia clase PHP, en concreto:

- `jeeObject.class.php` : Agrupa las funciones relacionadas con los objetos de Jeedom.
- `eqLogic.class.php` : Agrupa las funciones relacionadas con los dispositivos de Jeedom.
- `cmd.class.php` : Agrupa las funciones relacionadas con los controles de Jeedom.
- `cron.class.php` : Agrupa las funciones relacionadas con las tareas programadas de Jeedom.
- `config.class.php` : Agrupa las funciones relacionadas con los parámetros de configuración de Jeedom.
- `scenario.class.php` : Agrupa las funciones relacionadas con los escenarios de Jeedom.
- `DB.class.php` : Agrupa todas las funciones de acceso a la base de datos de Jeedom. Todos los accesos SQL que necesitan las demás clases se gestionan a través de esta.

etc.
