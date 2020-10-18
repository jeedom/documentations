# Complemento Gcast

El complemento Gcast hace posible establecer un enlace entre su Asistente de Google y Jeedom. Será posible usar su Google Home / Google Mini para hacer TTS o interactuar con Jeedom a través de interacciones

# Configuration

## Configuración del plugin

Después de descargar el complemento, debe activarlo e ingresar la IP de su Asistente de Google. Este complemento permite hablar en Google Cast y controlar su volumen. También actúa como un puente para las interacciones y Google Home.

## Configuración de IFTTT para devolución TTS (opcional)

Sin IFTTT, su Asistente de Google no podrá intercambiar con Jeedom.

**Estos son los pocos pasos de configuración :**

-   Se connecter ou s'inscrire sur IFTTT : <https://ifttt.com> (o mediante la aplicación móvil)
-   Pestaña "Mis Applets" y luego "Nuevo Applet"
-   Haga clic en "+ Esto", elija Asistente de Google (enlace su Asistente de Google a IFTTT si aún no lo ha hecho))
-   Elija el activador "Diga una frase con un ingrediente de texto"

**Ejemplo de configuración de la primera parte del Applet :**

-   **Que quieres decir?** : dis à jeedom \$
    > **Punta**
    >
    > Debe poner absolutamente '\ $' al final de su oración

-   **¿Cuál es otra forma de decirlo?? (optional)** : maison \$
-   **Y de otra manera? (optional)** : jarvis \$
-   **¿Qué quiere que diga el Asistente en respuesta??** : Yo hago
    > **Punta**
    >
    > Aquí está la oración que responderá tu Asistente de Google
    > antes de que procese su solicitud

-   **Idioma** : French
-   Haga clic en "+ Eso", elija Webhooks (active el servicio si aún no lo ha hecho))
-   Elija el único disparador disponible : Hacer una solicitud web

**Ejemplo de configuración de la segunda parte del Applet :**

-   **URL** : Debe pegar la URL de retorno indicada en la página de su equipo
    > **Punta**
    >
    > La URL de retorno debe cambiarse : ***ID\_ EQUIPO*** debe ser reemplazado por la ID de su Asistente de Google (Haga clic en "Configuración avanzada" en la página de su equipo para conocer la ID) y *query=XXXX* por consulta = {{TextField}}

    > **Importante**
    >
    > La URL debe ser externa ``https://mon\_dns.com/plugins/gcast/core/php/gcastApi.php?apikey=xxxxxxMA\_CLE\_APIxxxxxxxx&id=142&query={{TextField}}``

-   **Método** : GET
-   **Tipo de contenido** : aplicación / json
-   **Cuerpo** : {{TextField}}

Todo lo que tiene que hacer es hacer clic en "Guardar" y aprovechar sus interacciones entre Google Assistant y Jeedom !

El uso de ASK es incluso posible

# FAQ

> **El control de volumen funciona pero no el TTS**
>
> Debe verificar la configuración de su red interna (el complemento lo usa para la generación de TTS), en particular, no https en las redes internas.
