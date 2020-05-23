# Complemento IkeaLight

El complemento IkeaLight permite establecer un enlace con la puerta de enlace Ikea Tradfri. Puede controlar sus luces y obtener retroalimentación de estado en tiempo real.

# Configuración

## Configuración du plugin

Después de descargar el complemento, debe activarlo e ingresar la IP de su puerta de enlace, así como la clave disponible en la etiqueta de la puerta de enlace (el "Código de seguridad").

## Detección de bombilla

Para escanear el equipo de Ikea, simplemente inicie (una vez que las dependencias comenzaron) el demonio. Las bombillas reensambladas por la puerta de enlace y reconocidas por Jeedom se crearán automáticamente. Si no aparece una bombilla, coloque el complemento de depuración para reiniciar el descubrimiento y proporciónenos el registro para que podamos agregar las bombillas faltantes. (Recuerde especificar su bombilla y sus características en el boleto : es regulable, es variable en blanco, es variable en color). El complemento también te traerá los enchufes de las persianas

**Una vez descubierto, cada bombilla tendrá :**

-   Las acciones correspondientes
-   La información correspondiente

>**Symfonisk**
>
>Los altavoces conectados a Symfonisk no son administrados por este complemento sino por el complemento Sonos
