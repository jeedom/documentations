

# Contribuir al desarrollo básico

Quieres contribuir al desarrollo del Core of Jeedom ?

- Puedes hacer relaciones públicas (*Solicitudes de extracción*) sobre *repositorio* de núcleo.
- Si tienes ideas para desarrollos y deseas participar a largo plazo, no dudes en [contactar al equipo del proyecto](mailto:contact@jeedom.com).

Estos son los conceptos básicos que debe saber :

## Sucursales de Github

Para participar en el desarrollo de Jeedom, debe tener una cuenta [Github](https://github.com/).

El código Core es de código abierto y está disponible [aquí](https://github.com/jeedom/core).

- **alfa** :  Rama alfa V4. Principalmente destinado a desarrolladores para la próxima versión de Jeedom.
- **beta** : Rama de la versión beta V4. Principalmente destinado a probadores beta, para probar antes de cambiar a Estable.
- **V4-estable** : Rama estable de V4.
- **liberar** : Release Candidate rama de V3. Solo para corrección de errores.
- **Maestro** : Rama de lanzamiento estable V3.

Las actualizaciones se realizan en estas sucursales de acuerdo con la configuración de Jeedom **Ajustes → Sistema → Configuración / Actualizaciones / Mercado**.

Los PR (*Solicitudes de extracción*) siempre debe hacerse en la rama alfa.

Asimismo, para participar en los debates sobre [Comunidad](https://community.jeedom.com/), registrarse como desarrollador : [Jeedom desarrollador](https://www.jeedom.com/fr/dev.html).

## Desarrollo

Para ayudar con el desarrollo de Core, debe dominar uno o más de los siguientes idiomas:

- PHP : Desarrollo de clases php, llamadas ajax desde el front-end.
- javascript : Desarrollo de clases js y front-end.
- CSS : Desarrollo de interfaz.

También es deseable el conocimiento del entorno Linux.

## Árbol central

El código se distribuye en diferentes directorios en la raíz de Jeedom (por defecto : var/www/html) :

- Tercera parte : Carpeta que incluye las bibliotecas externas utilizadas por Jeedom (jQuery, CodeMirror, etc).
- respaldo : Carpeta de copias de seguridad de Jeedom.
- **centro** : Carpeta que incluye funciones internas principales:
	- **ajax** : Interfaz de archivos php entre clases js y clases php.
	- API : Archivos php API.
	- **clase** : Archivos de clase php (*eqLogic, cmd, jeeObject, historial, cron, etc.*).
	- com : Archivos de clase php de comunicación (*http, caparazón*).
	- configuración : Archivos php de configuración central y *predeterminado.config.ini* incluidos los ajustes de configuración predeterminados. archivo de versión para la versión Core.
	- CSS : Iconos disponibles con el Core y su CSS.
	- i18n : Archivos json que incluyen cadenas de caracteres traducidas.
	- imagen : Imágenes (logotipos, fondos, etc.) de Core.
	- **js** : Archivos de clase js, llamados en particular desde las páginas de Jeedom.
	- php : Archivos PHP necesarios para el Core (excluyendo clases).
	- repos : Archivos PHP específicos de market, samba, etc.
	- **modelo** : Archivos html (*Tablero y Móvil*) para mostrar eqLogics (Mosaico), comandos (Widgets) y escenarios.
	- **temas** : Archivos CSS de los tres temas Core (Dark, Light, Legacy), para Dashboard y Mobile.
- datos : Carpeta que contiene los datos del usuario (Informes, Vistas, Personalización avanzada css/js, Diseño 3D, etc).
- **escritorio** : Carpeta que incluye todas las páginas mostradas (la interfaz) en el escritorio y sus funciones.
	- común : Archivos js/php comunes a todas o varias páginas. Agrupa funciones que se pueden llamar desde varias páginas, en particular la *utils.js*, presente en todas las páginas en Desktop.
	- CSS : Archivos css específicos de la vista de escritorio.
	- imagen : Imágenes específicas de la pantalla de escritorio.
	- js : Js archivos correspondientes a cada página (*administración, tablero, escenarios, etc.*).
	- modal : Archivos php modales, incluido el código php/html y el código js.
	- php : Archivos php correspondientes a cada página (*administración, tablero, escenarios, etc.*).
- documentos : Documentación.
- Instalar en pc : Archivos de instalación de Jeedom.
- Iniciar sesión : Carpeta que incluye todos los registros (http.error, actualización, etc) y los de los escenarios (subcarpeta escenarioLog, nombrada por id).
- **móvil** : Archivo que incluye todas las páginas mostradas (la interfaz de la aplicación web) en el móvil y sus funciones.
	- CSS : Archivos css específicos de la vista móvil.
	- html : Archivos html correspondientes a cada página (*hogar, equipo, cronograma, etc.*).
	- js : Js archivos correspondientes a cada página (*hogar, equipo, cronograma, etc.*).
	- modal : Archivos html correspondientes a modales en Mobile.
- complementos : Carpeta que incluye todos los complementos instalados.
- guion : Script de implementación, certificados.
- apoyo : Carpeta utilizada en caso de solicitud de soporte.
- vendedor : Carpeta que incluye bibliotecas php de terceros.


## Front-end

La interfaz de Jeedom funciona como un sitio web, desde php interconectado con SQL y js / CSS.

Inicialmente, el navegador carga el archivo `/index.php` :
- Verificación de la instalación de Jeedom, referencia a `install/setup.php` si es necesario.
- Verificación de procedencia de escritorio o móvil.
- Cargando archivos y clases necesarios con `/core/php/core.inc.php`.
- Verificación de autenticación de usuario.
- Verificación de parámetros en la url para cargar directamente el contenido correcto.
- Redirigir a la versión de escritorio `/desktop/php/index.php` o móvil `móvil/html/casa.html` dependiendo de los parámetros de URL.

### Desktop

La interfaz Jeedom funciona según el principio de One-Page. Una vez cargadas, se muestran las diferentes páginas cambiando el contenido de un contenedor.

El archivo principal en Desktop es `/desktop/php/index.php`.

Cada página tiene al menos dos parámetros en la URL. Ejemplo :

`https://my.dns1.jeedom.com/index.php?v=d&p=panel de control` :
- **v** : Versión de interfaz. d para escritorio, m para móvil.
- **pags** : Página para mostrar. Aquí, `panel de control`.

En este caso, el archivo `/desktop/php/index.php` cargará el archivo `/desktop/php/dashboard.php` en el div `div_pageContainer`. Esto también cargará el archivo `/desktop/js/dashboard.js`, incluidas las funciones js específicas para la visualización de esta página (aquí, el panel).

El archivo `/escritorio/php/index.php` también se ocupa de :
- Modo de verificación *rescate*
- Verificar autenticación de usuario.
- Comprobar si es necesario la página a cargar según la configuración (página por defecto del usuario).
- Crear la estructura html (*cabeza, cuerpo, div_pageContainer, etc*).
- Cargar CSS, bibliotecas, etc.
- Cargar tema de usuario.
- Crear la barra de menú.
- Complete algunas variables globales de php/js.
- Cargue el archivo js `desktop/common/js/utils.js`

El archivo `desktop/common/js/utils.js` por lo tanto, siempre está presente y se carga una vez. Permite :
- Administrar menú js eventos.
- Administrar parámetros de url según la página solicitada.
- Cargue la página solicitada en el div `div_pageContainer`.
- Gestionar apertura/cierre de modales (ventana de diálogo).
- Gestionar un posible cambio de tema en función de la hora.
- Permita que diferentes archivos js accedan a funciones comunes.

Entonces el índice.php y las utilidades.js proporciona la estructura básica y las funciones de la interfaz.
Luego, el contenido de la página llamada se carga desde el escritorio/php/página.php y escritorio/js/page.js.
Estos archivos de contenido puramente orientados a la interfaz pueden acceder a funciones principales (clases `/core/class`) directamente en php, o en js usando clases js (`/core/js`) a través de llamadas ajax (`/core/ajax`).

Las funciones internas del Core están así bien separadas, para el funcionamiento interno (Back-end), pero son accesibles por la interfaz. Del mismo modo, cada página tiene su propio código php y js. Esto permite evolucionar y mantener mejor el código, pero también optimizar el rendimiento al cargar solo las clases y funciones necesarias.

#### Núcleo v4.2
Desde Core v4.2, todas las funciones js del archivo `desktop/common/js/utils.js` están aislados en un espacio de nombres `jeedomUtils{}`.
Por ejemplo, la función anterior en la ventana raíz `loadPage()` se convierte en `jeedomUtils.loadPage()`.

Por razones de compatibilidad con versiones anteriores de complementos, las funciones antiguas aún se declaran y quedarán obsoletas en una versión posterior. [Ver la lista aquí](https://github.com/jeedom/core/blob/alpha/desktop/common/js/utils.js#L1423).

#### Núcleo v4.3
Continuando desde la versión 4.2, las páginas frontales del escritorio se han aislado para evitar hacer referencia a variables y funciones en la ventana raíz. Esto asegura posibles colisiones de declaración, facilita la lectura y comprensión del código, así como su depuración.

El archivo `core/js/jeedom.class.js` declara dos nuevos espacios de nombres :
##### jeeFrontEnd[}

Algunas variables globales ahora están en este espacio de nombres :

```js
jeeFrontEnd = {
  __description: 'Objeto global donde cada página principal registra sus propias funciones y variables en su nombre de subobjeto.',
  jeedom_firstUso: '',
  language: '',
  userProfils: {},
  planEditOption: {state: falso, chasquido: falso, cuadrícula: falso, tamaño de cuadrícula: falso, resaltar: true},
  //cargar el historial de la página:
  PAGINA ANTERIOR: null,
  UBICACIÓN_ANTERIOR: null,
  NO_POPSTAT: false,
  modifyWithoutSave: false,
  //@index.php
  serverDatetime: null,
  clientServerDiffDatetime: null,
  serverDatetime: null,
  serverTZoffsetMin: null,
}
```

Ejemplo típico para desktop/js/corepage.js :

```js
"uso estricto"

si (!jeeFrontEnd.corepage) {
	jeeFrontEnd.corepage = {
		myVar: 'oneVar',
		init: function() {
			window.jeeP = este // acceso directo a la raíz
		},
		postInit: function() {
			//Hacer cosas una vez cargada la página
		},
		myFunction: función(_var) {
			var myFuncContextVar = esto.miVar + ' -> ' + _var
			console.log(myFuncContextVar)
		}
	}
}

jeeFrontEnd.corepage.init()

$(function() {
  jeeFrontEnd.corepage.postInit()
})

$('#myButton').on('click', function() {
	jeeP.myFunction('prueba')
})
```

> Por lo tanto, el espacio de nombres de la página no se volverá a crear al volver a esta misma página. Además, la variable `jeeP` permite usar `jeeFrontEnd.corepage` con una sintaxis corta, corresponde a un `self` específico de la página.

##### jeephp2js[}

Se usa para pasar variables de un script php al front-end js. Por ejemplo:

```php
enviarVarToJS([
  'jeephp2js.myjsvar1' => init('tipo', ''),
  'jeephp2js.myjsvar2' => configuración::byKey('habilitar CustomCss')
]);
```

Puis

```js
$(function() {
  si (jeephp2js.mijsvar1 == '1') { ... }
})
```

> El espacio de nombres jeephp2js{} se vacía en el cambio de página para evitar cualquier variable residual inesperada.

### Mobile

La interfaz del escritorio es receptiva y se adapta al tamaño del navegador. Sin embargo, algunas cosas, como editar un escenario, serían complicadas en una pantalla pequeña. Además, en un smartphone en exterior, en 3G o incluso 4G, es importante optimizar la velocidad de visualización. Es por esto que Jeedom cuenta con una interfaz Mobile, más liviana y adaptada a pantallas pequeñas.

La página de referencia es `/mobile/html/index.html`, que se ocupa de :
- Verificar autenticación de usuario.
- Crear la estructura html (*cabeza, cuerpo, div_pageContainer, etc*).
- Cargar CSS, bibliotecas, etc.
- Cargar tema de usuario.
- Complete algunas variables globales de php/js.
- Cargue el archivo js `mobile/js/application.js`

El archivo `móvil/js/aplicación.js` contiene funciones comunes a todas las páginas.

En cuanto a la interfaz de escritorio, la página llamada consta de dos archivos :
- `/móvil/html/casa.html` : el codigo html.
- `/móvil/js/casa.js` : las funciones js específicas de esta página.

Una diferencia notable en Mobile es la ausencia de páginas php. Por lo tanto, la generación de código se basa en las clases js, que aún pueden llamar a las funciones principales con llamadas ajax.

### Archivos CSS

Core CSS se basa principalmente en estos archivos:
- En escritorio :
	- escritorio/css/boostrap.CSS : Versión limpiada por el equipo de CSS Bootstrap v3.3.7.
	- escritorio/css/escritorio.principal.CSS : Interfaz principal CSS.
	- escritorio/css/coreWidgets.CSS : CSS específico para los widgets de Core.

- Móvil :
	- móviles/css/móvil.principal.CSS : Interfaz principal CSS.
	- móviles/css/coreWidgets.CSS : CSS específico para los widgets de Core.

Los temas contienen CSS específico del tema, incluido colors.css.

Orden de carga de CSS de escritorio :
- CSS de terceros (CodeMirror, etc.).).
- Fuentes (robot, camingocode, text-security-disc).
- coreWidgets.css
- escritorio.main.css
- colores.css (variables de color del tema).
- núcleo2019_xx.css (archivo principal del tema)).
- oscuridad.css (si está activado en la configuración).
- disfraz.css (archivo css de personalización avanzada).


## Back-end

*en curso*

La interfaz es una cosa, pero por supuesto, su Jeedom siempre está activo para ejecutar escenarios, crons, registros, historias, etc.

El back-end se basa en las mismas clases de php que el front-end, presente en `/core/class/`. Cada parte de Jeedom tiene su clase php, en particular :

- jeeObject.clase.php : Agrupa las funciones relativas a los objetos Jeedom.
- eqLogic.clase.php : Combina las funciones relativas a los equipos Jeedom.
- cmd.clase.php : Agrupa las funciones relacionadas con los comandos de Jeedom.
- cron.clase.php : Agrupa las funciones relativas a las tareas programadas de Jeedom.
- configuración.class.php : Agrupa las funciones relativas a los parámetros de configuración de Jeedom.
- escenario.clase.php : Agrupa las funciones relativas a los escenarios de Jeedom.
- DB.clase.php : Incluye todas las funciones de acceso a la base de datos de Jeedom. Todo el acceso SQL requerido por otras clases es manejado por esta.

etc.

