# Complemento móvil

Complemento para usar la aplicación Jeedom Mobile.

La aplicación móvil Jeedom requiere la instalación de este complemento para que la caja pueda comunicarse con la aplicación móvil.

# Configuración del complemento móvil para la aplicación V2

Después de instalar el complemento, solo necesita activarlo :

![mobile1](./images/mobile1.png)

# Primera conexión a la aplicación V2

Para conectar tu teléfono : hay 2 métodos posibles;
En la primera pantalla de la aplicación, se le ofrece conectar su cuenta de mercado y así encontrar todas las casillas asociadas a esta cuenta, o simplemente agregar una casilla.

![v2ConnectMarket](./images/v2firstConnect.jpeg)

> **IMPORTANTE**
>
> Para beneficiarse de las funcionalidades de la aplicación, el núcleo de su Jeedom debe estar en 4.4.0 mínimo

#### **INICIAR SESIÓN A TRAVÉS DE LA CUENTA DE MERCADO** :

![v2ConnectMarket](./images/v2connectMarket.PNG)

Todo lo que tiene que hacer es ingresar su Market ID y contraseña.

#### **CONEXIÓN MEDIANTE BOX ID** :

![v22methods](./images/v22methods.PNG)

Varias opciones en esta pantalla :

- Ingresas la url de tu Jeedom (interna o externa), así como los identificadores de acceso a la misma y confirmas con el botón LOGIN

- Haces clic en el código QR : aparece una nueva pantalla; puede escanear un código QR desde el complemento móvil del Box que desea agregar, a través de la pestaña Código QR del complemento.

![v2ModalQrApp](./images/v2QRCodeConnect.PNG)

> Pestaña Código QR del complemento móvil

> > ![Complemento v2Modal](./images/v2ModalQrCode.png)

Una vez realizado este primer paso, ya estás registrado en la aplicación: Si tienes el complemento Móvil, tendrás acceso a través del menú a Notificaciones, Códigos QR, Personalización del menú ....

En el menú, tendrá una pestaña Cajas, que agrupa todas las cajas presentes en esta cuenta de mercado

![v2MenuBoxs](./images/v2Menuboxs.PNG)

![v2floutedBoxs](./images/v2floutedboxs.png)

Simplemente haga clic en el Box donde está instalado el complemento Móvil, luego identifíquese para acceder al Box.

La casilla irá al principio de la lista, habiendo validado su autenticación.
Puedes hacer esto para varias cajas.

También puede hacer clic en el botón + en la parte inferior derecha para acceder a diferentes opciones;

- Código QR para agregar un Box a la lista mediante el complemento Móvil,
- Manual para agregar una caja manualmente
- Detección Atlas y Luna (si estás en Wifi, detectará las cajas en la red)
- Sincronización de Market para actualizar la información de la cuenta de Market configurada

![v2greenBtnAdd](./images/v2greenBtnAdd.PNG)

Para acceder a funciones como Notificaciones, Personalización de Menú o Geolocalización, primero debes haber seleccionado al menos una casilla actual'

![v2ActualBoxFlouted](./images/v2ActualboxFlouted.jpeg)

# Cómo funciona la geolocalización

Añadimos una zona de Geolocalización pulsando en el icono +

![v2AddZone](./images/v2AddZone.jpeg)

Escribimos la dirección que buscamos, validamos con Enter en su teléfono; el cursor se posicionará entonces en la dirección deseada.
Luego podemos agregar un nombre y guardar la zona.

Esto creará un nuevo comando en tu equipo móvil, de tipo binario, que corresponderá a las entradas y salidas de la zona si la geolocalización está activada en tu teléfono móvil.

También podemos cambiar el radio de la zona, para ampliar la detección de la zona.

![v2ModifyBigRadius](./images/v2ModifyBigRadius.jpeg)

# FAQ

> **Tengo problemas con las notificaciones**
>
> Esta parte se está mejorando y optimizando actualmente en la aplicación beta.

> **Tengo problemas para mostrar mi vista web**
>
> En tu Jeedom, en Preferencias, comprueba que la página de inicio móvil sea INICIO.

# Configurar el complemento Mobile V1

Después de instalar el complemento, solo necesita activarlo :

![mobile1](../images/mobile1.png)

**Configuración**

Para configurar el complemento, debe agregar los teléfonos que podrán acceder a Jeedom.

Para agregar un teléfono : **Plugins** → **Comunicación** → **App
Mobile** → **Añadir**

![mobile2](../images/mobile2.png)

Aquí están los parámetros para ingresar :

- **Nombre del equipo móvil** : Nombre del teléfono
- **Activar** : Habilitar el acceso para este móvil
- **Tipo de móvil** : Selección del sistema operativo del teléfono (iOS, Android)
- **Usuario** : Usuario asociado con este acceso

> **Punta**
>
> La elección del usuario es importante porque determina el equipo al que tendrá acceso de acuerdo con sus derechos.

![mobile3](../images/mobile3.png)

Después de guardar, obtendrás un código QR que permitirá que la aplicación se configure sola.

# Configuración de complementos y comandos recibidos por la aplicación

Después de la inicialización del complemento móvil, tiene la posibilidad de modificar los tipos genéricos de pedidos, complementos y piezas.

![mobile10](../images/mobile10.png)

Al hacer clic en un complemento, puede autorizarlo o no a chatear con la aplicación móvil y configurar cada uno de los tipos genéricos asociados con sus comandos.

![mobile11](../images/mobile11.png)

Al hacer clic en una parte, puede autorizarla o no para que esté presente en la aplicación móvil y configurar cada uno de los tipos genéricos asociados con sus pedidos.

![mobile12](../images/mobile12.png)

# Configuración de la aplicación móvil

Encontrará las aplicaciones en las persianas móviles :

**Android Google Play**

![Google Play FR](../images/Google_Play_FR.png)

**Apple App Store**

![App Store FR](../images/App_Store_FR.png)

## Primer lanzamiento de la aplicación

Cuando inicie la aplicación móvil por primera vez, se le ofrecerá un tutorial para ayudarlo a configurarla.

Después de descargar e instalar su aplicación móvil Jeedom, inicie la aplicación en su teléfono inteligente.

Luego llega a un tutorial de configuración que le recomendamos que siga. Algunos pasos se han realizado previamente.

Luego podrá elegir entre configuración manual o automática mediante código QR. Si opta por la configuración mediante código QR, simplemente muestre el código QR presente en el complemento de la aplicación móvil en el equipo del teléfono inteligente creado anteriormente. En este caso, la aplicación recuperará automáticamente toda la configuración de su Jeedom y se conectará automáticamente. Cuando está conectado a su hogar a través de Wifi, la aplicación usará automáticamente la dirección Ethernet de Jeedom interna de su red. Cuando esté conectado en 4G o 3G, usará su dirección externa para conectarse a su Jeedom (por ejemplo, a través del servicio DNS de Jeedom si lo usa)). Si elige la configuración manual, en este caso deberá ingresar manualmente las direcciones IP internas y externas de su Jeedom. Esta opción está reservada para un público informado.

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

Ahí lo tienes, ahora tienes un atajo para tu comando (en la versión 1.1 Se espera que los comandos de encendido / apagado aparezcan en la misma tecla).

![mobile dashboard 8](../images/mobile_dashboard_8.PNG)

# Cómo configurar correctamente los tipos genéricos

## Tipos genéricos en el complemento móvil

Mejor que las palabras, aquí hay un ejemplo de los créditos genéricos para una luz con todos sus controles (vea también la tabla de Luz a continuación)) :

![generic type in plugin](../images/generic_type_in_plugin.jpg)

## Tablas de plantillas de aplicación

### Las luces

|              Imagen              | Tipo genérico                                                                                                                                                                                                                                                   | Parte del complemento de desarrollo                                                                                                        |                                                                                                                           Descripción                                                                                                                            |
| :-----------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![LUZ](../images/LIGHT_1.jpg) | `Botón de luz encendido`<br/>`Botón apagado luz`                                                                                                                                                                                                                     | `LIGHT_ON`<br/>`LIGHT_OFF`                                                                                               |                                                                                                   presencia de dos botones "ON" y "Off" sin retroalimentación de estado.                                                                                                   |
| ![LUZ](../images/LIGHT_2.jpg) | `Botón de luz encendido`<br/>`Botón apagado luz`<br/>`State Light`                                                                                                                                                                                                  | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`                                                                             |                                                                                          Comentarios de estado presentes, el botón izquierdo alterna entre encendido y apagado                                                                                           |
| ![LUZ](../images/LIGHT_2.jpg) | `Botón de alternancia de luz`<br/>`State Light`                                                                                                                                                                                                                       | `LIGHT_TOGGLE`<br/>`LIGHT_STATE`                                                                                         |                                                                                          Comentarios de estado presentes, el botón izquierdo alterna entre encendido y apagado                                                                                           |
| ![LUZ](../images/LIGHT_3.jpg) | `Botón de luz encendido`<br/>`Botón apagado luz`<br/>`State Light`<br/>`Light Slider`                                                                                                                                                                             | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER`                                                          |                                                                    Estado de retroalimentación presente, el botón izquierdo permite cambiar entre Encendido y Apagado y el control deslizante permite controlar la intensidad                                                                    |
| ![LUZ](../images/LIGHT_4.jpg) | `Botón de luz encendido`<br/>`Botón apagado luz`<br/>`State Light`<br/>`Light Slider`<br/>`Color claro (información)`<br/>`Color claro (acción)`<br/>`Modo de luz` (opcional, se usa para tener modos de luz, por ejemplo arco iris en Philips Hue) | `LIGHT_ON`<br/>`LIGHT_OFF`<br/>`LIGHT_STATE`<br/>`LIGHT_SLIDER`<br/>`LIGHT_COLOR`<br/>`LIGHT_SET_COLOR`<br/>`LIGHT_MODE` | Estado de retroalimentación presente, el botón izquierdo permite cambiar entre Encendido y Apagado y el control deslizante permite controlar la intensidad. En el círculo, el color de la lámpara está presente y, al hacer clic en él, puede cambiar el color y activar un modo |

### Los enchufes

|               Imagen               | Tipo genérico                                                               | Parte del complemento de desarrollo                                                   |                                                        Descripción                                                         |
| :-------------------------------: | :--------------------------------------------------------------------------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------: |
| ![ENERGÍA](../images/ENERGY_1.jpg) | `Botón de enchufe activado`<br/>`Toma de botón apagado`                                     | `ENERGY_ON`<br/>`ENERGY_OFF`                                        |                                presencia de dos botones "ON" y "Off" sin retroalimentación de estado.                                |
| ![ENERGÍA](../images/ENERGY_2.jpg) | `Botón de enchufe activado`<br/>`Toma de botón apagado`<br/>`Toma de estado`                    | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE`                     |                       Comentarios de estado presentes, el botón izquierdo alterna entre encendido y apagado                        |
| ![ENERGÍA](../images/ENERGY_3.jpg) | `Botón de enchufe activado`<br/>`Toma de botón apagado`<br/>`Toma de estado`<br/>`Toma deslizante` | `ENERGY_ON`<br/>`ENERGY_OFF`<br/>`ENERGY_STATE`<br/>`ENERGY_SLIDER` | Estado de retroalimentación presente, el botón izquierdo permite cambiar entre Encendido y Apagado y el control deslizante permite controlar la intensidad |

### Los boletos

|              Imagen              | Tipo genérico                                                                                                        | Parte del complemento de desarrollo                                                            |                                     Descripción                                     |
| :-----------------------------: | :-------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------: |
| ![SOLAPA](../images/FLAP_1.jpg)   | `Panel de botones de montaje`<br/>`Panel de botones hacia abajo`<br/>`Panel de botones de parada`<br/>`Panel de estado` (opcional)                | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE` (opcional)        |  Presencia de tres botones "Arriba", "Abajo", "Detener", retroalimentación de estado opcional.  |
| ![SOLAPA](../images/FLAP_2.jpg)   | `Panel de botones de montaje`<br/>`Panel de botones hacia abajo`<br/>`Panel de botones de parada`<br/>`Panel de estado`<br/>`Panel del botón deslizante` | `FLAP_UP`<br/>`FLAP_DOWN`<br/>`FLAP_STOP`<br/>`FLAP_STATE`<br/>`FLAP_SLIDER` | Presencia de un control deslizante, con un botón Arriba / Abajo en Toggle (con icono de estado) |

### Inondation

|              Imagen              | Tipo genérico                                                                                 | Parte del complemento de desarrollo                                                                        |                             Descripción                              |
| :-----------------------------: | :--------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------: |
| ![INUNDACIÓN](../images/FLOOD.jpg)   | `Innondation`<br/>`TEMPERATURA` (opcional)<br/>`Humedad` (opcional)<br/>`SABOTAGE` (opcional) | `FLOOD`<br/>`TEMPERATURA` (opcional)<br/>`HUMEDAD` (opcional)<br/>`HUMEDAD` (opcional) | Le permite tener su sensor de inundación completo en una sola línea. |

### Serrure

|             Imagen             | Tipo genérico                                                         | Parte del complemento de desarrollo                             |                                  Descripción                                  |
| :---------------------------: | :--------------------------------------------------------------------- | :-------------------------------------------- | :---------------------------------------------------------------------------: |
| ![CERRAR](../images/LOCK.jpg)   | `Bloqueo de estado`<br/>`Bloqueo de botón abierto`<br/>`Cerrar el botón de bloqueo` | `LOCK_STATE`<br/>`LOCK_OPEN`<br/>`LOCK_CLOSE` | Comentarios de estado presentes, el botón izquierdo alterna entre encendido y apagado |

### Sirena

|              Imagen              | Tipo genérico                                               | Parte del complemento de desarrollo                            |                                  Descripción                                  |
| :-----------------------------: | :----------------------------------------------------------- | :------------------------------------------- | :---------------------------------------------------------------------------: |
| ![SIRENA](../images/SIREN.jpg)   | "Estado de sirena"<br/>`Siren Button On`<br/>`Siren Button Off` | `SIREN_STATE`<br/>`SIREN_ON`<br/>`SIREN_OFF` | Comentarios de estado presentes, el botón izquierdo alterna entre encendido y apagado |

### Humo

|              Imagen              | Tipo genérico                       | Parte del complemento de desarrollo                    |                           Descripción                            |
| :-----------------------------: | :----------------------------------- | :----------------------------------- | :--------------------------------------------------------------: |
| ![FUMAR](../images/SMOKE.jpg)   | `humo`<br/>`TEMPERATURA` (opcional) | `SMOKE`<br/>`TEMPERATURA` (opcional) | Le permite tener su sensor de humo completo en una sola línea. |

### Temperatura

|                    Imagen                    | Tipo genérico                          | Parte del complemento de desarrollo                       | Descripción |
| :-----------------------------------------: | :-------------------------------------- | :-------------------------------------- | :---------: |
| ![Temperatura](../images/TEMPERATURE.jpg)   | `TEMPERATURA`<br/>`Humedad` (opcional) | `TEMPERATURE`<br/>`HUMEDAD` (opcional) | Ver foto. |

### Presencia

|                 Imagen                 | Tipo genérico                                                                                                                              | Parte del complemento de desarrollo                                                                                                                           | Descripción |
| :-----------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ | :---------: |
| ![Presencia](../images/PRESENCE.jpg)   | `PRESENCIA`<br/>`TEMPERATURA` (opcional)<br/>`Brillo` (opcional)<br/>`Humedad` (opcional)<br/>`UV` (opcional)<br/>`SABOTAGE` (opcional) | `PRESENCE`<br/>`TEMPERATURA` (opcional)<br/>`BRILLO` (opcional)<br/>`HUMEDAD` (opcional)<br/>`UV` (opcional)<br/>`SABOTAGE` (opcional) | Ver foto. |

### Ouvrant

|                Imagen                | Tipo genérico                                 | Parte del complemento de desarrollo                                       |                              Descripción                              |
| :---------------------------------: | :--------------------------------------------- | :------------------------------------------------------ | :-------------------------------------------------------------------: |
| ![APERTURA](../images/OPENING.jpg)   | `Puerta/Ventana`<br/>`TEMPERATURA` (opcional) | `OPENING / OPENING_WINDOW`<br/>`TEMPERATURA` (opcional) | Ver imagen (es decir, puede elegir entre ventana y puerta). |

### Cable piloto

|                Imagen                | Tipo genérico                                                                                                                                      | Parte del complemento de desarrollo                                                      |                                                                          Descripción                                                                           |
| :---------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![CALEFACCIÓN](../images/HEATING.jpg)   | `Botón de encendido del calentamiento del cable piloto`<br/>`Botón de apagado del cable piloto de calentamiento`<br/>`Calentar el estado del cable piloto`<br/>`Botón de calentamiento del cable piloto` (opcional) | `HEATING_ON`<br/>`HEATING_OFF`<br/>`HEATING_STATE`<br/>`HEATING_OTHER` | Los botones ON / OFF y Status le permiten crear el botón en el extremo izquierdo de la plantilla y el `botón de calentamiento del cable piloto 'está ahí para agregar botones (5 máx) |

## Los bromistas

### Acción genérica

|               Imagen               | Tipo genérico               | Parte del complemento de desarrollo |                                                                            Descripción                                                                            |
| :-------------------------------: | :--------------------------- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![ACCIÓN](../images/ACTION.jpg)   | `Acción genérica` | `ACCIÓN_GENERICA`  | El botón toma la forma del tipo de acción. De forma predeterminada es un interruptor, si es un mensaje entonces tienes un sobre, si es un control deslizante tienes un control deslizante, etc... |

### Información genérica

|             Imagen             | Tipo genérico                    | Parte del complemento de desarrollo |                 Descripción                 |
| :---------------------------: | :-------------------------------- | :---------------- | :-----------------------------------------: |
| ![INFORMACIÓN](../images/INFO.jpg)   | `Información genérica` | `INFO_GENERICA`    | El botón toma la forma del tipo de información. |

# Troubleshooting

**Estoy en la versión de Android de la aplicación (1.0.1 o 1.0.0) No puedo acceder a mis partes o incluso a la configuración de la aplicación.**

Recibió una ventana emergente que le advirtió que le preocupa la configuración de accesibilidad, por lo que solo tiene que ir a la configuración de accesibilidad de su dispositivo móvil y desmarcar las aplicaciones con esta opción. (Pronto se traerá una solución en la aplicación)

**Tengo un mensaje en una de las líneas de mis módulos diciéndome que falta un Tipo Genérico !**

Al leer este mensaje, le indica qué tipo genérico falta para crear una plantilla compatible. Solo aplícalo. Consulte el [doc capítulo Tipo genérico](https://www.jeedom.com/doc/documentation/plugins/mobile/es_ES/mobile#_configuration_des_plugins_et_commandes_que_reçoit_l_app).

**Tengo un problema con uno de los llamados complementos totalmente integrados (Tiempo, Termostato, Alarma, Cámara) !**

No dudes en acceder a tu módulo y hacer clic en guardar nuevamente, esto volverá a incluir los tipos genéricos asociados al módulo.

**No se puede poner una información sobre la bienvenida de la aplicación !**

Esto es normal, estará disponible en la versión 1.1.

**Tengo la aplicación que ocupa mucha memoria en mi teléfono !**

Hubo un error en las versiones 1.0.0 y 1.0.1 en la parte de la cámara. El problema no volverá a suceder con 1.0.2, para eliminar el caché sin borrar la aplicación, simplemente ve a la configuración de tu App Móvil y haz clic en "eliminar caché".

**Me preocupa la primera sincronización en la aplicación o sql en el complemento móvil !**

Tienes que poner tipos genéricos y autorizar el complemento para enviar genéricos ver el documento un poco más alto.
