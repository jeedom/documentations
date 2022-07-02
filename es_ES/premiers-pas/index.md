# Primer paso

Bienvenido a esta documentación de primeros pasos, lo ayudará a poner en marcha su Jeedom.

## Registro en el Mercado

Lo primero que debe hacer es crear una cuenta en el Mercado para poder registrar su Jeedom en él. Hacer clic [aquí](https://market.jeedom.com/).

Haga clic en el botón "Registrarse" en la parte superior izquierda:

![S'enregistrer sur le Mercado](images/FirstStep_market1.jpg)

Rellena los diferentes campos y valida. Entonces deberías estar en tu cuenta de Market:

![Mercado](images/FirstStep_market2.jpg)


## Agregar su código de paquete de servicio

Si compró una caja Jeedom, debe haber recibido un correo electrónico que contiene un código para su paquete de servicio.

> **Importante**
>
> Es importante rellenarlo porque este código te da acceso a determinados plugins de forma gratuita, así como a servicios exclusivos.

> **Importante**
>
> Si compra un paquete de servicio en Jeedom Market, no tiene nada que hacer, se le asigna automáticamente.

Una vez que se haya recuperado el código del correo electrónico, todo lo que tiene que hacer es ir a la [Jeedom del mercado](https://market.jeedom.com/) e identifícate.

Luego ve a tu página de perfil:

![Profil Mercado](images/FirstStep_market_sp1.jpg)

Luego haga clic en la pestaña "Mis servicios", ingrese su número de paquete de servicio y valide.

> **Consejo**
>
> Si compró una caja Jeedom oficial, el número de paquete de servicio debería haberle sido enviado por correo electrónico. Si no ha recibido nada, póngase en contacto con la tienda donde compró su caja.

## Encuentra tu Jeedom en la red

Una vez que Jeedom esté conectado eléctricamente y conectado a su red local, así es como se conecta a él.

### Encuentra Jeedom

#### Por el mercado

Solution la plus simple (mais ne marche pas dans 100% des cas en fonction de la configuration de votre accès internet), il faut démarrer la box, attendre environ 10 minutes (attention si vous utilisez une image type netinstallation, ça sera plutôt 30min) e ir [aquí](https://www.jeedom.com/market/index.php?v=d&p=find)

> **Consejo**
>
> Tenga en cuenta que debe estar en la misma red que el cuadro Jeedom para que este método funcione.

> **Importante**
>
> Dependiendo de su caja ADSL, esta característica puede no funcionar. Si es así, nada grave, solo necesita conectarse a su caja ADSL y encontrar la IP de Jeedom en ella. Este paso no hace más que darle la IP local de su Jeedom. Esto no es cuando se agrega su Jeedom a su cuenta de Market.

#### Por tu caja de internet

-   Vaya a la interfaz de administración de su caja de Internet y busque Jeedom en sus dispositivos de red.
-   Obtener su IP.
-   Pon esta IP en tu navegador de internet. Deberías estar en la interfaz de Jeedom.

## Primera conexión

Cualquiera que sea el método utilizado, llegará a la página de inicio de sesión. Por defecto, el nombre de usuario y la contraseña son "admin".

![Connexion à votre Jeedom](images/FirstStep_box_connect.jpg)

## Vincular mi Jeedom a mi cuenta de Market

Veremos aquí cómo vincular su Jeedom a su cuenta de Market.

-   Una vez conectado a su Jeedom, debe ir a **Ajustes → Sistema → Configuración**
-   Haga clic en la pestaña **Actualizaciones/Mercado**
-   A continuación, haga clic en la pestaña **Mercado**
-   Revisa la caja **habilitar**
-   Remplissez l'adresse : `https://market.jeedom.com`
-   También complete los campos **Nombre del usuario** y **Contraseña** según sus identificadores (identificadores del Mercado y no de Jeedom)
-   Puede probar para verificar que la conexión es exitosa.
-   No olvides guardar !

Para obtener más detalles sobre la página de configuración, consulte *Manual de configuración -> Administración*.

## Obtener mi URL de acceso directo

Si tiene un Service Pack, Jeedom le proporciona una URL de acceso directo a su Jeedom sin tener que abrir los puertos en su caja u otros.

Para configurarlo solo tienes que ir a Ajustes → Sistema → Configuración

Luego ve a la sección "Redes""

![Réseaux](images/FirstStep_dns.jpg)

Una vez aquí, solo necesitas activar **Usar Jeedom DNS** entonces en la linea **Administración** de hacer **Para reiniciar** y su URL aparecerá en el nivel de estado HTTP, por supuesto, puede personalizarla desde la página de perfil de Market

> **Importante**
>
> Si acaba de vincular su Jeedom a su cuenta de Market, debe esperar de 24 a 48 horas antes de poder usar el servicio DNS

## Cambiar la contraseña predeterminada de Jeedom

Uno de los pasos importantes es cambiar la contraseña predeterminada de su cuenta Jeedom, para hacer esto haga clic en Configuración → Sistema → Usuarios:

Una vez allí, solo tienes que elegir la línea con el usuario **administración** y haga clic en **Contraseña** :

![Contraseña](images/FirstStep_boxPassword.jpg)

Una ventana te pedirá la contraseña. Tenga cuidado de recordarlo, o ya no podrá acceder a su Jeedom.

## Crear mi primer objeto

Vas a crear tu primer objeto, pero primero tienes que saber qué es un objeto.

En Jeedom, puede ser cualquier cosa, pero se recomienda hacerlo de acuerdo con sus monedas.

> **Consejo**
>
> Es posible definir relaciones entre objetos. Exemple : la sala de estar pertenece al objeto de la planta baja que a su vez pertenece al objeto de la casa.

Para crear un objeto, nada podría ser más simple :

-   Vaya a Herramientas → Objetos
-   Haga clic en el botón Agregar
-   Jeedom te preguntará por su nombre. Validar. Este es tu primer objeto creado :

![Objet](images/FirstStep_object.jpg)

Para obtener más información sobre esta parte, consulte *Manual de usuario -> Objeto*.

## Instalar mi primer complemento

Un complemento le permite agregar funcionalidad a Jeedom. Hay cientos de ellos. Muchos son gratuitos, otros pueden ser de pago. Para acceder a la página de complementos, vaya a Complementos → Administración de complementos.

Luego simplemente haga clic en Mercado:

A continuación, tendrá la lista de todos los complementos que se pueden instalar.

> **Importante**
>
> Ojo, algunos son oficiales y otros no. En caso de un problema con un complemento no oficial, el equipo de Jeedom no se hace responsable.

![Liste des Plugins](images/FirstStep_plugin1.jpg)

Al hacer clic en un complemento, obtiene su archivo:

![Fiche Plugins](images/FirstStep_plugin2.jpg)

Entonces encuentras :

- Botones para instalar el plugin : Se recomienda encarecidamente la versión estable,
- Un botón para eliminar el plugin,
- Una breve descripción,
- Un enlace a la documentación del complemento,
- Un enlace al registro de cambios (los últimos cambios realizados),
- Compatibilidad con diferentes plataformas,
- Opiniones de los usuarios,
- La forma de usar el complemento,
- Información adicional como autor, enlace a la discusión del foro sobre este complemento, fecha de la última actualización, etc.

Para obtener más información sobre complementos, *Manual de usuario -> Complemento*.

# Support

Jeedom aborda campos muy grandes y en evolución día a día.
Sin embargo, hay muchas maneras de encontrar ayuda y hacer sus preguntas.

## El foro

Lo encontrarás [aquí](https://community.jeedom.com/).

El foro es muy activo y contiene mucha información. Si tiene alguna pregunta, no dude en preguntar. Tendrás una respuesta en menos de una hora (en promedio). Sin embargo, tenga cuidado, el foro es mantenido por la comunidad Jeedom, compuesta por voluntarios, y no por la compañía Jeedom.

## Solicitudes de soporte (o tickets)

> **Importante**
>
> Tenga en cuenta que cualquier solicitud de soporte requiere que tenga una cuenta en Market.

Si no ha encontrado una solución a su problema, como último recurso, puede solicitar soporte al equipo de Jeedom. Esta solicitud pasa por un ticket. Es posible abrir uno de varias maneras:

-   Directamente desde Jeedom (método recomendado): Menú de configuración → Solicitud de soporte.
-   Si por alguna razón no tiene acceso a su Jeedom, siempre puede abrir un boleto desde el Mercado :
    -   Ya sea haciendo clic en su nombre y luego en *Solicitud de soporte*,
    -   ya sea yendo a tu perfil, luego en la parte **Entradas**, use el botón "Abrir una solicitud de soporte"".

![Solicitud de soporte](images/FirstStep_support.jpg)

El resto de intercambios se realizarán por correo electrónico.

> **Consejo**
>
> Si, al abrir un ticket, obtiene un error que indica que ha alcanzado su cuota, está limitado a una cierta cantidad de solicitudes de soporte por mes, según su paquete de servicios.

Los diferentes paquetes de servicios son :
- Comunidad (gratis): 2 entradas/mes (solo en plugins de pago))
- Power : 10 entradas/mes
- Pro : 100 entradas/mes

Puede encontrar los detalles de los paquetes de servicio [aquí](https://www.jeedom.com/site/fr/soft.html#obtenir)

>**IMPORTANTE**
>
>Ojo, vemos muchos usuarios con buzones de correo "mailinblack", que durante el 1er intercambio piden al remitente que valide un enlace para demostrar que efectivamente se trata de un humano. Este sistema no es compatible con nuestro sistema de ticketing, por lo que aunque te respondamos nunca recibirás la respuesta en tu buzón porque nos bloquea. Así que gracias en su página de perfiles de mercado por poner una dirección de correo electrónico que no utilice este sistema, de lo contrario, nunca recibirá nuestra respuesta.
