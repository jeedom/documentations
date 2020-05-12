# Complemento de Google Calendar

El complemento de agenda le permite recuperar eventos de su Google Calendar. También puede iniciar una interacción durante un evento

# Configuración 

## Crea un dispositivo Google Calendar 

En el lado de Jeedom, debe crear un dispositivo Google Calendar y recuperar la URL de redireccionamiento. 

> **Importante**
>
> La url de acceso externo a su Jeedom debe estar absolutamente en https. Google no permite conexiones sin cifrar.

## Crea una cuenta de desarrollador en Google 

Debe crear una cuenta de desarrollador con google para acceder a las API, vaya [aquí](https://console.developers.google.com/apis/credentials) luego haga "Crear identificadores" y "ID de cliente Oauth", seleccione "Aplicación web" y en "URI de redireccionamiento autorizado" ponga el que figura en la página de configuración del equipo jeedom.

> **Importante**
>
> Tenga cuidado cuando ingrese "URI de redireccionamiento autorizado" al que debe prestar atención : 
> - habiendo autorizado el dominio aquí antes [aquí](https://console.developers.google.com/apis/credentials/consent). Google te indicará normalmente
> - Bueno, presione la tecla Intro después de copiar / pegar la URL de redireccionamiento de Jeedom a la página de configuración de Google (¡presionar el botón Guardar directamente después de copiar / clasificar sin presionar la tecla Intro no funciona!

Recupere la clave y el secreto del cliente (deberá colocarlos en el lado de Jeedom en el equipo)

Luego debe agregar la API de Google Calendar yendo [aquí](https://console.developers.google.com/apis/dashboard), luego en "Activar la API" y busque "API de Google Calendar" y luego agregue el.

## Vincula la cuenta de Google a jeedom 

Copie la clave del cliente y el cliente secreto en el lado de Jeedom, luego haga clic en el botón Enlace, valide todo.

>**Importante**
>
>Tenga cuidado de vincular las 2 cuentas (Google y Jeedom) DEBE estar conectado a Jeedom por su url externa (puede verla en el centro de configuración de Jeedom en la sección de red)

# Comando 

El complemento solo incluye comandos que le dan el título del evento

# Interacción 

Jeedom puede interpretar el título de un evento como una interacción y, por lo tanto, desencadenar una acción. Para esto debes activar las interacciones en la página de configuración del equipo.

También puede indicar un comando de retorno mediante el cual jeedom responderá después de la ejecución de la interacción.
