# Complemento Enedis Linky

# Description

Complemento que permite la recuperación de datos de consumo eléctrico de contadores inteligentes *(linky por ejemplo)* cuestionando el [cuenta cliente **Enedis**](https://mon-compte.enedis.fr/auth/XUI/#login/&realm=/enedis&forward=true){:target = "\_ en blanco"}.

>**Importante**
>
>El complemento se reescribió por completo en febrero de 2021 para usar **la API oficial de Enedis Data-Connect**. Si usó el complemento antes, lo invitamos a crear un nuevo equipo o eliminar todos los controles de un equipo anterior.

Es posible acceder a datos desde **consumo**, de **producción** oa los 2 tipos de medición directamente en un dispositivo.

Se reportan 5 datos para cada tipo de medición :
- el **consumo por hora** por media hora *(en kW)*.
>*También llamado "curva de carga", estos datos devuelven la potencia demandada / inyectada en promedio durante media hora.*

- el **consumo diario** *(en kWh)*.
- el **consumo mensual** *(en kWh)*.
- el **consumo anual** *(en kWh)*.
- el **máximo poder** *(en kVA)*.

>**INFORMACIÓN**  
>    
>Como los datos no están disponibles en tiempo real, el complemento recupera los datos de consumo de electricidad del día anterior a cada día.

# Configuration

## Configuración del plugin

El complemento **Enedis Linky** no requiere configuración específica y solo debe activarse después de la instalación.

Siempre que el complemento no haya recuperado todos los datos del día anterior, continúa sondeando los servidores cada hora entre las 5 a.m. y las 8 p.m., de lo contrario, las llamadas se suspenden hasta el día siguiente.

Para no sobrecargar los servidores de Enedis, las llamadas se realizan en un minuto aleatorio que se puede ver o modificar en la página de configuración del complemento.

## Configuración del equipo

Para acceder a los diferentes equipos **Enedis Linky**, ir al menú **Complementos → Energía → Enedis Linky**.

>**INFORMACIÓN**
>    
>El botón **+ Agregar** le permite agregar un nuevo medidor / PDL.

Si aún no lo ha hecho, comience por autorizar el intercambio de datos de Enedis con Jeedom haciendo clic en el botón **Vincula a Enedis con Jeedom : Accedo a mi área de clientes de Enedis** :      

![Lien espace-client Enedis](./images/link_enedis.png)

A continuación, se le redirige a esta página en la que debe informar **sus datos de inicio de sesión para el mercado de Jeedom** luego haga clic en el botón **Validar** :      

![Authentification compte Market Jeedom](./images/Auth_Jeedom.png)

Redirección a la página de consentimiento de Enedis en la que es necesario **marcar la casilla** y haga clic en **Validar** :     

![Autorisation Enedis](./images/Auth_Enedis.png)

Una vez que se valida el intercambio de datos, se muestra esta página :     

![Succès](./images/Auth_Enedis_success.png)

>**Importante**
>    
>Si no puede acceder a ninguna de estas páginas, desactive el bloqueador de anuncios del navegador.

Una vez que se ha autorizado el intercambio de datos, todo lo que queda es informar **el número de identificación del Punto de Entrega** preocupado *(PDL)* y el **tipo de medida** volver.

Al guardar el equipo por primera vez, el complemento creará automáticamente los comandos necesarios e integrará los historiales disponibles en el sitio web de Enedis hasta hace 3 años.

>**CONSEJO**
>
>Si por un motivo u otro el plugin no pudo recuperar los historiales al crear los pedidos, bastará con borrar los pedidos y luego guardar el equipo para generar los pedidos y su historial nuevamente.

>**INFORMACIÓN**
>
>Los datos de consumo por hora se recuperan durante los últimos 7 días como máximo.

# Plantilla de widget

El complemento ofrece la posibilidad de mostrar datos de consumo y / o producción en una plantilla de widget imitando la apariencia de un medidor *Linky*. El clic en el botón "**- \| +**" permite pasar del consumo a la producción para quienes tienen acceso a 2 tipos de medidas.

![Plantilla de widget](./images/enedis_screenshot1.png)

Para activar esta opción, simplemente marque la casilla **Plantilla de widget** en la página general del equipo en cuestión. Una vez que la casilla está marcada, una opción le permite seleccionar el color de fondo del widget *(163, 204, 40 por defecto)*.

>**INFORMACIÓN**
>     
>La plantilla del widget se mostrará en las versiones de escritorio y móvil.

>**CONSEJO**
>     
>En la versión de escritorio, la información que se muestra en el widget se adapta en tamaño al cambiar el tamaño del mosaico.
