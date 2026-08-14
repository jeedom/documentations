# Publicar un complemento en el mercado

## Requisitos previos

- Estar registrado como desarrollador en el mercado, ver [Desarrollo de complementos > Cuenta de desarrollador](index#Compte%20développeur),
- Haber subido su plugin a GitHub *(repositorio privado o público)*.
- Presentar tu plugin en el foro en la sección [**Feria de desarrolladores**, categoría **Presentación de plugins**](https://community.jeedom.com/c/developpeur-developpeurs/presentation-plugin/20){:target="_blank"}.

>**INFORMACIÓN**
>
>Si estás registrado correctamente como desarrollador en el Market, pero no tienes acceso de escritura al «Salón de desarrolladores» del foro para poder publicar un mensaje, debes abrir una solicitud de asistencia.

## Presentación del complemento

Es imprescindible haber publicado la presentación de tu plugin en el foro para enviar una solicitud de paso a la versión estable.

Recomendamos redactar esta presentación desde su primera publicación en versión beta o incluso tan pronto como esté operativo a través de un simple enlace de GitHub. De hecho, presentar tu plugin rápidamente tiene varias ventajas:
- evitar que otro desarrollador proponga el mismo complemento,
- obtener ayuda para el diseño,
- permitir que el equipo de Jeedom sepa para qué sirve el complemento y cómo está programado,
- comparar sus ideas y comentarios con los de los usuarios.

### Formato de la presentación

Cada desarrollador decide qué información quiere proporcionar; oficialmente, solo son obligatorios los siguientes campos:
- **Nombre** e **id**
- **Descripción de las funciones**
- **Lenguajes utilizados** *(PHP, JavaScript, Python, Node.js, C, etc.)*
- ¿Utiliza un **demonio**? ¿**dependencias**? ¿**crons**? ¿**listeners**?
- ¿Dispone de un **panel** *(panel de control y/o aplicación móvil)*?
- ¿Es **gratis** o **de pago**?
- **Enlace a GitHub** *(salvo que el repositorio sea privado)*
- **Enlace a la documentación** *(si está disponible)*

### Etiquetas

En el foro hay disponibles diferentes etiquetas *(o tags)* para que puedas clasificar tu plugin:
- **dependance_intall**: instala las dependencias
- **demon**: utiliza un demonio
- **Node.js** o **Python**: lenguaje utilizado por el demonio
- **jsonrpc**: utiliza la API JSON-RPC de Jeedom
- **panel-dash**: genera un panel específico
- **beta** o **estable**: estado del complemento
- **gratis** o **de pago**: precios del complemento

Una vez que el complemento se haya validado como estable, se le debe asignar una etiqueta específica con el siguiente formato: `plugin-ID_PLUGIN` para poder encontrar fácilmente los temas que le interesan. Si por alguna razón no se hubiera creado esta etiqueta, puede abrir un tema en el foro o enviar una solicitud de asistencia.

## Publicación

Para publicar un nuevo complemento, hay que iniciar sesión en el Market con tu cuenta de desarrollador y, a continuación, hacer clic en el menú **Market** y en **Añadir**. Ahora solo tienes que introducir la información sobre el complemento:
- General:
  - Precio
  - ID
  - Nombre

- Fuente del repositorio
  - Token *(permite el acceso a los repositorios privados)*. Para crear un token, solo tienes que ir a esta [página de GitHub](https://github.com/settings/tokens){:target="_blank"}, elegir `token classic` o `fine-grained`, `aucune expiration` y marcar la sección `repo`
  - Nombre de usuario del repositorio de GitHub
  - Nombre del repositorio de GitHub

Una vez introducida esta información, puedes hacer clic en el botón **VALIDAR**. Si todo está bien configurado, el mercado debería realizar una primera sincronización del complemento. A continuación, solo tienes que editar la ficha del complemento para rellenar las diferentes ramas *(no olvides hacer clic en **VALIDAR** antes de realizar una **PRUEBA**)*:
  - **Beta**: `beta` por ejemplo
  - **Estable**: `master` por ejemplo

>**INFORMACIÓN**
>
>Por defecto, tu nombre de autor del plugin es tu nombre de usuario de Market. Para cambiarlo, ve a tu **Perfil** de Market y rellena el campo **Autor** de la sección **Para desarrolladores**.

### Sincronización

Todos los complementos se sincronizan automáticamente con el Market cada día a partir de la 1 de la madrugada. También es posible realizar una sincronización manual de una rama concreta haciendo clic en el botón **GitHub beta** o **GitHub estable** desde la ficha del complemento en el Market.

Es esta etapa de sincronización *(diaria, automática o manual)* la que activa una alerta de actualización del complemento para los usuarios y la actualización de la ficha de Market.
