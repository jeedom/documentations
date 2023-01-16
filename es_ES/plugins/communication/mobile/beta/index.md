# Complemento móvil

Complemento para usar la aplicación Jeedom Mobile.

La aplicación móvil Jeedom requiere la instalación de este complemento para que la caja pueda comunicarse con la aplicación móvil.

# Configuración de complemento móvil

Después de instalar el complemento, solo necesita activarlo :

![mobile1](../images/mobile1.png)

****

Para configurar el complemento, debe agregar los teléfonos que podrán acceder a Jeedom.

Para agregar un teléfono : ****  ****  **App
Mobile**  ****

![mobile2](../images/mobile2.png)

Aquí están los parámetros para ingresar :

-   **Nombre del equipo móvil** : Nombre del teléfono
-   **** : Habilitar el acceso para este móvil
-   **Tipo de móvil** : Selección del sistema operativo del teléfono (iOS, Android)
-   **** : Usuario asociado con este acceso

> ****
>
> La elección del usuario es importante porque determina el equipo al que tendrá acceso de acuerdo con sus derechos.

![mobile3](../images/mobile3.png)

Después de guardar, obtendrá un QRCode que permite que la aplicación se configure.

# Configuración de complementos y comandos recibidos por la aplicación

Después de la inicialización del complemento móvil, tiene la posibilidad de modificar los tipos genéricos de pedidos, complementos y piezas.

![mobile10](../images/mobile10.png)

Al hacer clic en un complemento, puede autorizarlo o no a chatear con la aplicación móvil y configurar cada uno de los tipos genéricos asociados con sus comandos.

![mobile11](../images/mobile11.png)

Al hacer clic en una parte, puede autorizarla o no para que esté presente en la aplicación móvil y configurar cada uno de los tipos genéricos asociados con sus pedidos.

![mobile12](../images/mobile12.png)

# Configuración de la aplicación móvil

Encontrará las aplicaciones en las persianas móviles :

****

![Google Play FR](../images/Google_Play_FR.png)

****

![ Store FR](../images/App_Store_FR.png)

## Primer lanzamiento de la aplicación

Cuando inicie la aplicación móvil por primera vez, se le ofrecerá un tutorial para ayudarlo a configurarla.

Después de descargar e instalar su aplicación móvil Jeedom, inicie la aplicación en su teléfono inteligente.

Luego llega a un tutorial de configuración que le recomendamos que siga. Algunos pasos se han realizado previamente.

Luego podrá elegir entre una configuración manual o automática por QRcode. Si opta por la configuración de QRcode, simplemente muestre el QRcode presente en el complemento de la aplicación móvil en el equipo del teléfono inteligente creado previamente. En este caso, la aplicación recuperará automáticamente toda la configuración de su Jeedom y se conectará automáticamente. Cuando está conectado a su hogar a través de Wifi, la aplicación usará automáticamente la dirección Ethernet de Jeedom interna de su red. Cuando esté conectado en 4G o 3G, usará su dirección externa para conectarse a su Jeedom (por ejemplo, a través del servicio DNS de Jeedom si lo usa)). Si elige la configuración manual, en este caso deberá ingresar manualmente las direcciones IP internas y externas de su Jeedom. Esta opción está reservada para un público informado.

La aplicación se sincronizará y usted llegará a su página de inicio (precedida por una mini guía de presentación).

La aplicación móvil Jeedom ahora está lista para funcionar.

## Favoritos

En la aplicación puede tener Favoritos (accesos directos de comandos, complementos, escenarios).

Aquí está el procedimiento para crearlos :

Haga clic en uno de los + en la pantalla de inicio de la aplicación :

![mobile dashboard 1](../images/mobile_dashboard_1.PNG)

Llegará a la página de selección de tipo de acceso directo :

![mobile dashboard 2](../images/mobile_dashboard_2.PNG)

Por ejemplo, vamos a tomar medidas, por lo que nos ofrece monedas / objetos :

![mobile dashboard 3](../images/mobile_dashboard_3.PNG)

Luego, simplemente seleccione la acción que desea como acceso directo :

![mobile dashboard 4](../images/mobile_dashboard_4.PNG)

Entonces es posible personalizar el color de este (por el momento se proponen tres colores) :

![mobile dashboard 5](../images/mobile_dashboard_5.PNG)

Así como los dos textos asociados :

![mobile dashboard 6](../images/mobile_dashboard_6.PNG)
![mobile dashboard 7](../images/mobile_dashboard_7.PNG)

Aquí, ahora tiene un acceso directo de su pedido (en la versión 1.1 Se espera que los comandos de encendido / apagado aparezcan en la misma tecla).

![mobile dashboard 8](../images/mobile_dashboard_8.PNG)

# Cómo configurar correctamente los tipos genéricos

## Tipos genéricos en el complemento móvil

Mejor que las palabras, aquí hay un ejemplo de los créditos genéricos para una luz con todos sus controles (vea también la tabla de Luz a continuación)) :

![generic type in plugin](../images/generic_type_in_plugin.jpg)

## Tablas de plantillas de aplicación

### Las luces

                           | Tipo genérico               | Parte del complemento de desarrollo            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LIGHT](../images/LIGHT_1.jpg) | `Lumière Bouton On`<br/>`Botón apagado luz` | <br/>| presencia de dos botones "ON" y "Off" sin retroalimentación de estado. |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton On`<br/>`Botón apagado luz`<br/>`State Light` | <br/><br/> | Comentarios de estado presentes, el botón izquierdo alterna entre encendido y apagado |
![LIGHT](../images/LIGHT_2.jpg) | `Lumière Bouton Toggle`<br/>`State Light` | <br/> | Comentarios de estado presentes, el botón izquierdo alterna entre encendido y apagado |
![LIGHT](../images/LIGHT_3.jpg) | `Lumière Bouton On`<br/>`Botón apagado luz`<br/>`State Light`<br/>`Light Slider` | <br/><br/><br/> | Estado de retroalimentación presente, el botón izquierdo permite cambiar entre Encendido y Apagado y el control deslizante permite controlar la intensidad |
![LIGHT](../images/LIGHT_4.jpg) | `Lumière Bouton On`<br/>`Botón apagado luz`<br/>`State Light`<br/>`Light Slider`<br/>`Color claro (información)`<br/>`Color claro (acción)`<br/>`Modo de luz` (opcional, se utiliza para tener modos de luz, por ejemplo, arco iris en Hue philips) | <br/><br/><br/><br/><br/><br/> | Estado de retroalimentación presente, el botón izquierdo permite cambiar entre Encendido y Apagado y el control deslizante permite controlar la intensidad. En el círculo, el color de la lámpara está presente y, al hacer clic en él, puede cambiar el color y activar un modo |

### Los enchufes

                           | Tipo genérico               | Parte del complemento de desarrollo            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ENERGY](../images/ENERGY_1.jpg) | `Prise Bouton On`<br/>`Toma de botón apagado`| <br/>| presencia de dos botones "ON" y "Off" sin retroalimentación de estado. |
![ENERGY](../images/ENERGY_2.jpg) | `Prise Bouton On`<br/>`Toma de botón apagado`<br/>`Toma de estado` | <br/><br/> | Comentarios de estado presentes, el botón izquierdo alterna entre encendido y apagado |
![ENERGY](../images/ENERGY_3.jpg) | `Prise Bouton On`<br/>`Toma de botón apagado`<br/>`Toma de estado`<br/>`Toma deslizante` | <br/><br/><br/> | Estado de retroalimentación presente, el botón izquierdo permite cambiar entre Encendido y Apagado y el control deslizante permite controlar la intensidad |

### Los boletos

                           | Tipo genérico               | Parte del complemento de desarrollo            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLAP](../images/FLAP_1.jpg)   | `Volet Bouton Monter`<br/>`Panel de botones hacia abajo`<br/>`Panel de botones de parada`<br/>`Panel de estado` (opcional) | <br/><br/><br/>`FLAP_STATE` (opcional) | Presencia de tres botones "Arriba", "Abajo", "Detener", retroalimentación de estado opcional. |
![FLAP](../images/FLAP_2.jpg)   | `Volet Bouton Monter`<br/>`Panel de botones hacia abajo`<br/>`Panel de botones de parada`<br/>`Panel de estado`<br/>`Panel del botón deslizante` | <br/><br/><br/><br/> | Presencia de un control deslizante, con un botón Arriba / Abajo en Toggle (con icono de estado) |

### Inondation

                           | Tipo genérico               | Parte del complemento de desarrollo            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![FLOOD](../images/FLOOD.jpg)   | `Innondation`<br/>`TEMPERATURA` (opcional)<br/>`Humedad` (opcional)<br/>`SABOTAGE` (opcional)|`FLOOD`<br/>`TEMPERATURA` (opcional)<br/>`HUMEDAD` (opcional)<br/>`HUMEDAD` (opcional) | Le permite tener su sensor de inundación completo en una sola línea.

### Serrure

                         | Tipo genérico               | Parte del complemento de desarrollo            |           |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![LOCK](../images/LOCK.jpg)   | ` Etat`<br/>`Bloqueo de botón abierto`<br/>`Cerrar el botón de bloqueo` | <br/><br/> | Comentarios de estado presentes, el botón izquierdo alterna entre encendido y apagado |

### Sirena

                         | Tipo genérico               | Parte del complemento de desarrollo            |           |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SIREN](../images/SIREN.jpg)   | `Sirena Etat`<br/>`Siren Button On`<br/>`Siren Button Off` | <br/><br/> | Comentarios de estado presentes, el botón izquierdo alterna entre encendido y apagado |

### Humo

                           | Tipo genérico               | Parte del complemento de desarrollo            |           |
:-----------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![SMOKE](../images/SMOKE.jpg)   | `Humo`<br/>`TEMPERATURA` (opcional)|`SMOKE`<br/>`TEMPERATURA` (opcional) | Le permite tener su sensor de humo completo en una sola línea.

### Temperatura

                                       | Tipo genérico               | Parte del complemento de desarrollo            |           |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![TEMPERATURE](../images/TEMPERATURE.jpg)   | `Temperatura`<br/>`Humedad` (opcional)|`TEMPERATURE`<br/>`HUMEDAD` (opcional) | Ver foto.

### Presencia

                                 | Tipo genérico               | Parte del complemento de desarrollo            |           |
:-----------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![PRESENCE](../images/PRESENCE.jpg)   | `Presencia`<br/>`TEMPERATURA` (opcional)<br/>`Brillo` (opcional)<br/>`Humedad` (opcional)<br/>`UV` (opcional)<br/>`SABOTAGE` (opcional)|`PRESENCE`<br/>`TEMPERATURA` (opcional)<br/>`BRILLO` (opcional)<br/>`HUMEDAD` (opcional)<br/>`UV` (opcional)<br/>`SABOTAGE` (opcional) | Ver foto.

### Ouvrant

                                       | Tipo genérico               | Parte del complemento de desarrollo            |           |
:-----------------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![OPENING](../images/OPENING.jpg)   | `Porte / Fenêtre`<br/>`TEMPERATURA` (opcional)|<br/>`TEMPERATURA` (opcional) | Ver imagen (es decir, puede elegir entre ventana y puerta).

### Cable piloto

                               | Tipo genérico               | Parte del complemento de desarrollo            |           |
:---------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![HEATING](../images/HEATING.jpg)   | `Chauffage fil pilote Bouton ON`<br/>`Botón de apagado del cable piloto de calentamiento`<br/>`Calentar el estado del cable piloto`<br/>`Botón de calentamiento del cable piloto` (opcional) | <br/><br/><br/>|Los botones ON / OFF y Status le permiten crear el botón en el extremo izquierdo de la plantilla y el `botón de calentamiento del cable piloto 'está ahí para agregar botones (5 máx)

## Los bromistas

### Acción genérica

                             | Tipo genérico               | Parte del complemento de desarrollo            |           |
:-------------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![ACTION](../images/ACTION.jpg)   | `Action Générique`           | `GENERIC_ACTION`             | Le bouton prend la forme du type de l'action. Par défaut c'est un toggle, si c'est un message alors vous avez une enveloppe, si slider vous avez un slider etc...

### Información genérica

                         | Tipo genérico               | Parte del complemento de desarrollo            |           |
:---------------------------: | :--------------------------- | :--------------------------- | :------------------: |
![INFO](../images/INFO.jpg)   | `Information Générique`           | `GENERIC_INFO`             | Le bouton prend la forme du type de l'info.


# Troubleshooting

**Estoy en la versión de Android de la aplicación (1.0.1 o 1.0.0) No puedo acceder a mis partes o incluso a la configuración de la aplicación.**

Recibió una ventana emergente que le advirtió que le preocupa la configuración de accesibilidad, por lo que solo tiene que ir a la configuración de accesibilidad de su dispositivo móvil y desmarcar las aplicaciones con esta opción. (Pronto se traerá una solución en la aplicación)

**Tengo un mensaje en una de las líneas de mis módulos que me dice que
falta un tipo genérico !**

Al leer este mensaje, le indica qué tipo genérico falta para crear una plantilla compatible. Solo aplícalo.Consulte el [doc capítulo Tipo genérico](https://www.jeedom.com/doc/documentation/plugins/mobile/es_ES/mobile#_configuration_des_plugins_et_commandes_que_reçoit_l_app).

**Tengo un problema con uno de los complementos llamado totalmente integrado (clima,
termostato, alarma, cámara) !**

No dude en acceder a su módulo y haga clic en Guardar nuevamente, esto volverá a incluir los tipos genéricos asociados con el módulo.

**No se puede poner una información sobre la bienvenida de la aplicación !**

Esto es normal, estará disponible en la versión 1.1.

**Tengo la aplicación que ocupa mucha memoria en mi
 !**

Hubo un error en las versiones 1.0.0 y 1.0.1 en la parte de la cámara. El problema no volverá a suceder con 1.0.2, para eliminar el caché sin sobrevalorar la aplicación, simplemente vaya a la configuración de su aplicación móvil y haga clic en "eliminar el caché".

**Me preocupa la primera sincronización en la aplicación o sql en el complemento móvil !**

Tienes que poner tipos genéricos y autorizar el complemento para enviar genéricos ver el documento un poco más alto.
