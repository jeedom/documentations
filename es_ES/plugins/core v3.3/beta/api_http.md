Jeedom ofrece a los desarrolladores y usuarios una API
completo para que pueda controlar Jeedom desde cualquier objeto
connecté.

Hay dos API disponibles : un piloto orientado al desarrollador
.0 y otro a través de URL y solicitud HTTP.

Esta API se usa muy fácilmente mediante solicitudes HTTP simples a través de
URL.

> **Nota**
>
> Para toda esta documentación, \#IP\_JEEDOM\# coincide con tu url
> acceso a Jeedom. Esto es (a menos que esté conectado a su red
> local) de la dirección de Internet que utiliza para acceder a Jeedom
> desde afuera.

> **Nota**
>
> Para toda esta documentación, \#API\_KEY\# coincide con tu llave
> API, específica para su instalación. Para encontrarlo, tienes que ir a
> el menú "General" → "Configuración" → pestaña "General"".

Guión 
========

Aquí está la URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = escenario & id = \#ID\#&action=\#ACTION\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = escenario e id=#ID#&action=#ACTION#)

-   **** : coincide con su id de escenario. La identificación está en el
    página del escenario en cuestión, en &quot;herramientas&quot; → &quot;Escenarios&quot;, una vez que
    escenario seleccionado, junto al nombre de la pestaña &quot;General&quot;. otro
    manera de encontrarlo : en &quot;Herramientas&quot; → &quot;Escenarios&quot;, haga clic en
    "Resumen".

-   **** : corresponde a la acción que desea aplicar. la
    los pedidos disponibles son : "iniciar "," detener "," desactivar "y
    "activar "para iniciar, detener, desactivar o
    activar el escenario.

-   **** \ [Opcional \] : si la acción es &quot;inicio&quot;, puede omitir
    etiquetas para el escenario (ver documentación sobre escenarios) en
    las etiquetas de formulario = toto% 3D1% 20tata% 3D2 (tenga en cuenta que% 20 corresponde a un
    espacio y% 3D a = )

Comando de información / acción 
====================

Aquí está la URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = cmd & id = \#ID\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = cmd e id=#ID#)

-   **** : corresponde a la identificación de lo que desea conducir o desde qué
    desea recibir información

La forma más fácil de obtener esta URL es ir a la página Herramientas →
Resumen de automatización del hogar, para buscar el comando y luego abrir su configuración
avanzado (el icono de &quot;engranaje&quot;) y allí verá una URL que contiene
ya todo lo que necesita dependiendo del tipo y subtipo de
commande.

> **Nota**
>
> Es posible para el campo \#ID\# para hacer múltiples pedidos
> de una vez. Para hacer esto, debe pasar una matriz en json (ex
> % 5B12,58,23% 5D, tenga en cuenta que \ [y \] deben estar codificados, de ahí que% 5B
> y% 5D). El regreso de Jeedom será un json

> **Nota**
>
> Los parámetros deben estar codificados para url, puede usar
> un utensilio, [](https://meyerweb.com/eric/tools/dencoder/)

 
===========

Aquí está la URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = interactuar y consultar = \#QUERY\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = interactuar y consultar=#QUERY#)

-   **** : pregunta para hacerle a Jeedom

-   **** \ [Opcional \] : le dice a Jeedom si codifica la consulta
    en utf8 antes de intentar responder

-   **** \ [Opcional \] : 0 para que Jeedom responda incluso si
    no entendí, 1 de lo contrario

-   **** \ [Opcional \] : nombre de usuario de la persona
    interacción desencadenante

-   **responder\_cmd** \ [Opcional \] : ID de comando para usar para
    satisfacer la demanda

 
=======

Aquí está la URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = mensaje y categoría = \#CATEGORY\#&message=\#MESSAGE\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = mensaje y categoría=#CATEGORY#&message=#MESSAGE#)

-   **** : categoría de mensaje para agregar al centro de mensajes

-   **** : mensaje en cuestión, tenga cuidado de pensar en la codificación
    el mensaje (el espacio se convierte en% 20, =% 3D). Puedes usar un
    outil, [](https://meyerweb.com/eric/tools/dencoder/)

 
=====

Aquí está la URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = object](http://#IP_JEEDOM#?apikey=#APIKEY#& type = object)

Devuelve en json la lista de todos los objetos Jeedom

 
==========

Aquí está la URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = eqLogic & object\_id = \#OBJECT\_ID\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = eqLogic & object_id=#OBJECT_ID#)

-   **el objeto\_id** : ID del objeto del que queremos recuperar
    équipements

 
========

Aquí está la URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = comando & eqLogic\_id = \#EQLOGIC\_ID\#](http://#IP_JEEDOM#?apikey=#APIKEY#& type = comando & eqLogic_id=#EQLOGIC_ID#)

-   **** : Identificación del equipo del que queremos recuperar
    commandes

Datos completos 
=========

Aquí está la URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = fullData](http://#IP_JEEDOM#?apikey=#APIKEY#& type = fullData)

Devuelve todos los objetos, equipos, comandos (y su valor si esto
son informaciones) en json

 
========

Aquí está la URL =
[http://\#IP\_JEEDOM\#?apikey=\#APIKEY\#& type = variable & name = \#NAME\#&value=](http://#IP_JEEDOM#?apikey=#APIKEY#& type = variable & name=#NAME#&value=)**

-   **** : nombre de la variable cuyo valor se desea (lectura de
    el valor)

-   **** \ [Opcional \] : si se especifica &quot;valor&quot;, entonces la variable
    tomará este valor (escribir un valor)


