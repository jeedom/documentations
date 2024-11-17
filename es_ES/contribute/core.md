# Contribuir al desarrollo del núcleo

Quieres contribuir al desarrollo del Jeedom Core ?

- Puedes hacer relaciones públicas (*Solicitudes de extracción*) Sobre *repositorio* de Core.
- Si tienes ideas de desarrollo y quieres participar a largo plazo, no dudes en [contacta con el equipo del proyecto](mailto:contact@jeedom.com).

Estos son los conceptos básicos que debe conocer :

> Antes de enviar un PR, actualice su alfa para verificar que el error aún no se haya solucionado. Y sincroniza tu repositorio de github.

> Comprueba que lo que estás arreglando no cause otros errores. La mayoría de las funciones principales son llamadas por diferentes páginas front-end o por otras funciones principales y complementos. Haga una búsqueda en el Core para ver/comprender dónde se utilizan las funciones y, en caso de duda, informe el problema y su corrección en [Comunidad](https://community.jeedom.com/).

## Ramas de Github

Para participar en el desarrollo de Jeedom, debes tener una cuenta [Github](https://github.com/).

El código principal es de código abierto y está disponible [aquí](https://github.com/jeedom/core).

- **alfa** :  Rama de la versión V4 alpha. Destinado principalmente a desarrolladores para la próxima versión de Jeedom.
- **Beta** : Rama de la versión V4 beta. Destinado principalmente a probadores beta, para probar antes de cambiar a estable.
- **Maestro** : Rama estable de V4.

Las actualizaciones se realizan en estas ramas de acuerdo con la configuración de Jeedom **Configuración → Sistema → Configuración / Actualizaciones / Mercado**.

RP (*Solicitudes de extracción*) siempre debe hacerse en la rama alfa.

Asimismo, para participar en discusiones sobre [Comunidad](https://community.jeedom.com/), registrarse como desarrollador : [Jeedom dev](https://www.jeedom.com/fr/dev.html).

## Desarrollo

Para ayudar al desarrollo del Core, debe dominar uno o más de los siguientes idiomas:

- Php : Desarrollo de clases php, llamadas ajax desde el front-end.
- JavaScript : Desarrollo de clases js y front-end.
- Css : Desarrollo de interfaz.

También es deseable tener conocimiento del entorno Linux.

## Árbol del núcleo

El código se distribuye en diferentes directorios en la raíz de Jeedom (por defecto : /var/www/html) :

- **Tercera parte** : Carpeta que incluye bibliotecas externas utilizadas por Jeedom (jQuery, CodeMirror, etc).
- **reserva** : Carpeta de respaldo de Jeedom.
- **núcleo** : Archivo que incluye las funciones internas del Core:
	- **ajax** : Interfaz de archivos php entre clases js y clases php.
	- **API** : Archivos php API.
	- **clase** : Archivos de clase PHP (*eqLogic, cmd, jeeObject, historial, cron, etc.*).
	- **com** : Archivos de clase php de comunicación (*http, shell*).
	- **config** : Archivos php de configuración principal y *default.config.ini* incluida la configuración predeterminada. Archivo de versión para la versión Core.
	- **css** : Iconos disponibles con Core y su CSS.
	- **i18n** : Archivos json que incluyen cadenas traducidas.
	- **img** : Imágenes principales (logotipos, fondos, etc.).
	- **js** : Archivos de clase js, llamados en particular desde las páginas de Jeedom.
	- **php** : Archivos php requeridos por Core (excluyendo clases).
	- **repositorio** : Archivos PHP específicos del mercado, samba, etc.
	- **Plantilla** : Archivos HTML (*Tablero y móvil*) para mostrar eqLogics (Tile), comandos (Widgets) y escenarios.
	- **Temas** : Archivos CSS de los tres temas principales (oscuro, claro, heredado), para tablero y dispositivos móviles.
- **datos** : Carpeta que incluye datos del usuario (informes, vistas, personalización avanzada css / js, diseño 3D, etc).
- **Escritorio** : Carpeta que incluye todas las páginas mostradas (la interfaz) en el escritorio y sus funciones.
	- **común** : Archivos js/php comunes a varias páginas. Grupos de funciones que se pueden llamar desde varias páginas, en particular *utils.js*, presente en todas las páginas del escritorio.
	- **css** : Escritorio ver archivos CSS específicos.
	- **img** : Imágenes específicas de la vista de escritorio.
	- **js** : Archivos js correspondientes a cada página (*administración, tablero, escenario, etc.*).
	- **modal** : Archivos php modales, incluido código php / html y código js.
	- **php** : Archivos php correspondientes a cada página (*administración, tablero, escenario, etc.*).
- **docs** : Documentación.
- **instalar** : Archivos de instalación de Jeedom.
- **Registro** : Carpeta que incluye todos los registros (http.error, actualización, etc) y los de los escenarios (subcarpeta stageLog, nombrada por id).
- **Móvil** : Carpeta que incluye todas las páginas mostradas (interfaz de la aplicación web) en el móvil y sus funciones.
	- **css** : Móvil ver archivos CSS específicos.
	- **HTML** : Archivos HTML correspondientes a cada página (*hogar, equipo, cronograma, etc.*).
	- **js** : Archivos js correspondientes a cada página (*hogar, equipo, cronograma, etc.*).
	- **modal** : Archivos HTML correspondientes a los modales en Mobile.
- **plugins** : Carpeta que incluye todos los complementos instalados.
- **Guión** : Script de implementación, certificados.
- **Apoyo** : Carpeta utilizada en caso de solicitud de soporte.
- **vendedor** : Carpeta que incluye bibliotecas php de terceros.


## Front-end

La interfaz de Jeedom funciona como un sitio web, desde php interconectado con SQL y js/CSS.

Inicialmente, el navegador carga el archivo `/ index.php :
- Verificando la instalación de Jeedom, consulte ʻinstall / setup.php` si es necesario.
- Verificación del origen de escritorio o móvil.
- Cargando los archivos y clases necesarios con `/ core / php / core.inc.php`.
- Verificación de la autenticación de usuario.
- Verificación de parámetros en la URL para cargar directamente el contenido correcto.
- Redirigir a la versión de escritorio `/ desktop / php / index.php` o Mobile `mobile / html / home.html` según los parámetros de la URL.

### Desktop

La interfaz de Jeedom funciona según el principio de una página. Una vez cargadas, las diferentes páginas se muestran cambiando el contenido de un contenedor.

El archivo principal de Desktop es `/ desktop / php / index.php`.

Cada página tiene al menos dos parámetros en la URL. Ejemplo :

`https://my.dns1.jeedom.com/index.php?v = d & p = tablero` :
- **v** : Versión de interfaz : d para escritorio, m para móvil.
- **pag** : Página para mostrar. Aquí, "tablero".

En este caso, el archivo `/ desktop / php / index.php` cargará el archivo `/ desktop / php / dashboard.php` en el div `div_pageContainer`. Esto también cargará el archivo `/ desktop / js / dashboard.js`, incluidas las funciones js específicas para la visualización de esta página (aquí, el panel).

El archivo `/ desktop / php / index.php` también se encarga de :
- Modo de verificación *rescatar*
- Verificar la autenticación del usuario.
- Verifique si es necesario la página a cargar según la configuración (página predeterminada del usuario).
- Crea la estructura html (*head, body, div_pageContainer, etc*).
- Cargue CSS, bibliotecas, etc.
- Cargar tema de usuario.
- Crea la barra de menú.
- Ingrese algunas variables globales php / js.
- Cargue el archivo js `desktop / common / js / utils.js`

El archivo `desktop / common / js / utils.js`, por lo tanto, siempre está presente y se carga una vez. Permite :
- Administrar eventos de menu js.
- Administrar los parámetros de la URL de acuerdo con la página solicitada.
- Cargue la página solicitada en el div `div_pageContainer`.
- Gestionar la apertura / cierre de modales (ventana de diálogo).
- Gestionar un posible cambio de tema según la hora.
- Permitir que diferentes archivos js accedan a funciones comunes.

Entonces los archivos de índice.php y utilidades.js proporciona la estructura y las funciones básicas de la interfaz.
Luego, el contenido de la página llamada se carga desde el escritorio / php / page.php y desktop / js / page.js.
Estos archivos de contenido, puramente orientados a la interfaz, pueden acceder a las funciones Core (clases `/ core / class`) directamente en php, o en js gracias a las clases js (` / core / js`) a través de llamadas ajax (`/ core / ajax`).

Las funciones internas del Core están, por lo tanto, bien separadas, para la operación interna (Back-end), pero son accesibles a través de la interfaz. Asimismo, cada página tiene su propio código php y js. Esto le permite desarrollar y mantener mejor el código, pero también optimizar el rendimiento cargando solo las clases y funciones necesarias.

#### Núcleo v4.2
Desde Core v4.2, todas las funciones js del archivo `desktop/common/js/utils.js` están aislados en un espacio de nombres `jeedomUtils{}`.
Por ejemplo, la función anterior en la ventana raíz `loadPage()` se convierte en `jeedomUtils.loadPage()`.

Por razones de compatibilidad con versiones anteriores de complementos, las funciones antiguas aún se declaran y quedarán obsoletas en una versión posterior. [Ver la lista aquí](https://github.com/jeedom/core/blob/alpha/desktop/common/js/utils.js#L1423).

#### Núcleo v4.3
Continuando desde la versión 4.2, las páginas frontales del escritorio se han aislado para evitar hacer referencia a variables y funciones en la ventana raíz. Esto protege contra posibles colisiones de declaraciones y facilita la lectura y comprensión del código, así como su depuración.

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

Se usa para pasar variables de un script php al front-end js. Por ejemplo :

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

La interfaz de escritorio responde y se adapta al tamaño del navegador. Sin embargo, algunas cosas, como editar un escenario, serían complicadas en una pantalla pequeña. Además, en un teléfono inteligente al aire libre, en 3G o incluso 4G, es importante optimizar la velocidad de la pantalla. Por eso Jeedom tiene una interfaz móvil, más ligera y adaptada a pantallas pequeñas.

La página de referencia es `/ mobile / html / index.html`, que se encarga de :
- Verificar la autenticación del usuario.
- Crea la estructura html (*head, body, div_pageContainer, etc*).
- Cargue CSS, bibliotecas, etc.
- Cargar tema de usuario.
- Ingrese algunas variables globales php / js.
- Cargue el archivo js `mobile / js / application.js`

El archivo `mobile / js / application.js` contiene funciones comunes a todas las páginas.

En cuanto a la interfaz de escritorio, la página llamada consta de dos archivos :
- `/ mobile / html / home.html` : el código html.
- `/ mobile / js / home.js` : las funciones js específicas de esta página.

Una diferencia notable en Mobile es la ausencia de páginas PHP. Por lo tanto, la generación de código se basa en las clases js, que siempre pueden llamar a funciones Core con llamadas ajax.

### Archivos CSS

Core CSS se basa principalmente en estos archivos :
- En el escritorio :
	- escritorio / css / boostrap.css : Versión limpiada por el equipo CSS Bootstrap v3.3.7.
	- desktop / css / desktop.main.css : CSS de la interfaz principal.
	- escritorio / css / coreWidgets.css : CSS específico para los widgets principales.

- En móvil :
	- mobiles / css / mobile.main.css : CSS de la interfaz principal.
	- móviles / css / coreWidgets.css : CSS específico para los widgets principales.

Los temas contienen CSS específico para cada tema, incluidos colors.css.

Orden de carga de CSS en el escritorio :
- Css de tercera parte (CodeMirror, etc.).
- Fuentes (roboto, camingocode, text-security-disc).
- coreWidgets.css
- Escritorio.main.css
- colores.css (variables de color del tema).
- core2019_xx.css (archivo de tema principal).
- oscuridad.css (si está habilitado en la configuración).
- personalizado.css (archivo css de personalización avanzada).


## Back-end

*En curso*

La interfaz es una cosa, pero, por supuesto, su Jeedom siempre está activo, para ejecutar escenarios, crons, registros, historias, etc.

El Back-end se basa en las mismas clases php que el Front-end, presente en `/ core / class /`. Cada parte de Jeedom tiene su propia clase php, en particular :

- jeeObject.class.php : Reagrupa las funciones relativas a los objetos Jeedom.
- eqLogic.class.php : Agrupa las funciones relativas a los equipos Jeedom.
- cmd.class.php : Agrupa las funciones relativas a los controles Jeedom.
- cron.class.php : Agrupa las funciones relativas a las tareas programadas de Jeedom.
- config.class.php : Agrupa las funciones relativas a los parámetros de configuración de Jeedom.
- escenario.clase.php : Reúne las funciones relativas a los escenarios Jeedom.
- DB.class.php : Reúne todas las funciones para acceder a la base de datos de Jeedom. Todo el acceso SQL requerido por otras clases es administrado por este.

etc.

