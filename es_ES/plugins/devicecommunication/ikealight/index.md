# Complemento IkeaLight

El complemento IkeaLight permite establecer un enlace con la puerta de enlace Ikea Tradfri. Puede controlar sus luces y obtener información sobre el estado en tiempo real.

# Configuration

## Configuración del plugin

Después de descargar el complemento, debe activarlo e ingresar la IP de su puerta de enlace, así como la clave disponible en la etiqueta de la puerta de enlace (el "Código de seguridad").

## Compatibilité

Puedes encontrar [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=ikealight) la lista de módulos compatibles con el complemento

## Detección de bombilla

Para escanear el equipo de Ikea, simplemente inicie el demonio una vez que las dependencias se hayan instalado correctamente.     
Las bombillas levantadas por la pasarela y que son reconocidas por Jeedom se integrarán automáticamente.     

Si una bombilla no retrocede, coloque el complemento en ``Debug``, para relanzar el descubrimiento y proporcionarnos el registro para que podamos agregar las bombillas que faltan. (Recuerda especificar el modelo de tu bombilla así como sus características en el ticket : es regulable, es variable en blanco, es variable en color). El complemento también te traerá los enchufes de las persianas

**Una vez descubierto, cada bombilla tendrá :**

-   Las acciones correspondientes
-   La información correspondiente

>**Symfonisk**
>
>Los altavoces conectados a Symfonisk no son administrados por este complemento sino por el complemento de Sonos.
