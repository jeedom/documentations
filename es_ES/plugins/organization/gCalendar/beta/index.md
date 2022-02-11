# Complemento de Google Calendar

El complemento **Calendario de Google** le permite recuperar eventos de sus calendarios de Google. También puede desencadenar una interacción durante un evento.

> **Importante**
>
> Google ahora impone una reconexión cada 7 días por razones de seguridad.

# Configuration

## Crea un dispositivo Google Calendar

En el lado de Jeedom, debe crear un dispositivo Google Calendar y recuperar la URL de redireccionamiento.

> **Importante**
>
> La URL para el acceso externo a su Jeedom debe estar absolutamente en https, Google no permite conexiones sin cifrar.

## Cree una cuenta de desarrollador de Google

Necesita crear una cuenta de desarrollador con Google para acceder a la API. Para hacerse, [siga este enlace](https://console.developers.google.com/apis/credentials), Cree un nuevo proyecto si es necesario y luego haga clic en "**+ Crear identificadores**" y seleccione "**ID de cliente de Oauth**".     
 Entonces escoge "**Aplicación web**" en el menú desplegable, luego agregue el'"*URL de retorno*" dado en la página del equipo Jeedom en "**URI de redireccionamiento permitidos**".

> **Importante**
>
>Cuando ingrese "URI de redireccionamiento autorizado", debe prestar atención a :
> - han autorizado el dominio antes [aquí](https://console.developers.google.com/apis/credentials/consent). Google te indicará normalmente
> - presione la tecla Intro después de copiar / pegar la URL de redireccionamiento de jeedom a la página de configuración de Google (*presionar el botón guardar directamente después de copiar / collar sin presionar la tecla enter no funciona!*)     

Recoge el'**Identificación del cliente**' y el **código secreto del cliente** (Deberá ingresarlos en el equipo lateral de Jeedom)

Luego debes agregar la API de Google Calendar yendo [aquí](https://console.developers.google.com/apis/dashboard). Haga clic en "**+ Activar API y servicios**" luego busque "API de Google Calendar" y agregue el.

> **A saber**
>
>El procedimiento anterior puede cambiar con el tiempo. Le recomendamos que siga las instrucciones dadas en el sitio.

## Vincular la cuenta de Google a jeedom

Cópialo **ID del cliente** y la **Clave secreta** Lado de Jeedom luego haga clic en el botón "**Enlazar**". No olvide guardar el equipo.

>**Importante**
>
>Atención para vincular las 2 cuentas (Google y Jeedom) es ABSOLUTAMENTE necesario estar conectado a Jeedom por su url externa (puede verlo en el centro de configuración de redes de partes de Jeedom)

# Commandes

El complemento solo incluye comandos que dan el título de los eventos.

# Interaction

Jeedom puede interpretar el título de un evento como una interacción y, por lo tanto, desencadenar una acción. Para ello, debe activar las interacciones en la página de configuración del equipo.

También puede indicar un comando de retorno mediante el cual jeedom responderá después de la ejecución de la interacción.    
