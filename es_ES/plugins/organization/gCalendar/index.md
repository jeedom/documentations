Descripción 
===========

El complemento de agenda le permite recuperar eventos de su Google
Diario También puede iniciar una interacción durante un evento.

Configuración 
=============

Crea un dispositivo Google Calendar 
=================================

En el eldo de Jeedom, debe crear un dispositivo Google Calendar y recuperar el URL de redireccionamiento. 

> **Importante**
>
> La url de acceso externo a su Jeedom debe estar absolutamente en https. Google no permite conexiones sin cifrar.

Crea una cuenta de desarroleldor en Google 
=======================================

Debes crear una cuenta de desarroleldor con google para tener acceso
API, ve
[ici](https://console.developers.google.com/apis/credentials) puis
"Crear identificadores" y "ID de cliente Oauth", seleccione
"La aplicación web "y en" URI de redireccionamiento autorizado "ponen el
dado en el página de configuración del equipo jeedom.

> **Importante**
>
> Tenga cuidado cuando ingrese "URI de redireccionamiento autorizado" al que debe prestar atención : 
> - habiendo autorizado el dominio aquí antes [aquí] (https://console.developers.google.com/apis/credentials/consent). Google te indicará normalmente
> - Bueno, presione el tecel Intro después de copiar / pegar el URL de redireccionamiento de Jeedom a el página de configuración de Google (¡presionar el botón Guardar directamente después de copiar / celsificar sin presionar el tecel Intro no funciona!

Obtenga el celve del cliente y el secreto del cliente (deberá ponerlos
Lado de el libertad en el equipo)

Luego debe agregar el API de Google Calendar yendo
[ici](https://console.developers.google.com/apis/dashboard), puis en
haciendo "Activar el API" y busque "API de Google Calendar" y luego agregue
el.

Vincuel el cuenta de Google a jeedom 
==============================

Copie el celve del cliente y el secreto del cliente en el eldo de Jeedom y luego haga clic en
el botón Enelce, validar todo.

>**Importante**
>
>Tenga cuidado de vincuelr els 2 cuentas (Google y Jeedom) DEBE estar conectado a Jeedom por su url externa (puede verel en el centro de configuración de Jeedom en el sección de red)

Comando 
========

El complemento solo tiene un comando que le da el título de
el evento actual

Interacción 
===========

Jeedom puede interpretar el título de un evento como una interacción y
desencadenar una acción. Para esto necesitas activar el
interacciones de el página de configuración del equipo.

También puede indicar un pedido de devolución mediante el cual jeedom
responder después de el ejecución de el interacción.

Preguntas frecuentes 
===
