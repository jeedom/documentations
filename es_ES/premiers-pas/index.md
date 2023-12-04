# Primer paso

Bienvenido a la documentación de este primer paso, le ayudará a poner su Jeedom en servicio.

## Registro en el mercado

Lo primero que debe hacer es crear una cuenta en el Mercado para poder registrar su Jeedom en él. Haga clic en [aquí](https://market.jeedom.com/).

Haga clic en el botón "Registrarse" en la esquina superior izquierda :

![S'enregistrer sur le Mercado](images/FirstStep_market1.jpg)

Rellene los diferentes campos y valide. Entonces deberías estar en tu cuenta de Market:

![Mercado](images/FirstStep_market2.jpg)


## Agregar su código de paquete de servicio

Si compró una caja Jeedom, entonces debería haber recibido un correo electrónico con un código para su paquete de servicio.

> **Importante**
>
> Es importante completarlo porque este código le da acceso a ciertos complementos de forma gratuita, así como a servicios exclusivos.

> **Importante**
>
> Si compra un paquete de servicio en Jeedom Market, no tiene nada que hacer, se le asigna automáticamente.

Una vez que se haya recuperado el código del correo electrónico, todo lo que tiene que hacer es ir al [Mercado de la libertad](https://market.jeedom.com/) e identificarte.

Luego ve a tu página de perfil:

![Profil Mercado](images/FirstStep_market_sp1.jpg)

Luego haga clic en la pestaña “Mis servicios” e ingrese su número de Service Pack y valide.

> **Punta**
>
> Si compró una caja oficial de Jeedom, el número del paquete de servicio debería haberse enviado por correo electrónico. Si no ha recibido nada, comuníquese con la tienda donde compró su caja.

## Encuentra tu Jeedom en la red

Una vez que Jeedom esté conectado eléctricamente y conectado a su red local, aquí le mostramos cómo conectarse a él.

### Encontrar Jeedom

#### A través del mercado

Solution la plus simple (mais ne marche pas dans 100% des cas en fonction de la configuration de votre accès internet), il faut démarrer la box, attendre environ 10 minutes (attention si vous utilisez une image type netinstallation, ça sera plutôt 30 minutes ) e ir [aquí](https://www.jeedom.com/market/index.php?v=d&p=find)

> **Punta**
>
> Tenga en cuenta que debe estar en la misma red que el cuadro Jeedom para que este método funcione.

> **Importante**
>
> Dependiendo de su caja ADSL, es posible que esta función no funcione. Si es así, nada serio, solo necesita conectarse a su caja ADSL y encontrar la IP de libertad en ella. Este paso no hace más que darle la IP local de su Jeedom. Esto no ocurre cuando se agrega su Jeedom a su cuenta de mercado.

#### Por su caja de internet

-   Vaya a la interfaz de administración de su caja de internet y busque Jeedom en sus dispositivos de red.
-   Consigue su IP.
-   Pon esta IP en tu navegador de internet. Deberías estar en la interfaz Jeedom.

## Primera conexión

Cualquiera que sea el método utilizado, llegarás a la página de inicio de sesión. Por defecto, el nombre de usuario y la contraseña son "admin".

![Connexion à votre Jeedom](images/FirstStep_box_connect.jpg)

## Enlace mi Jeedom a mi cuenta de mercado

Veremos aquí cómo vincular su Jeedom a su cuenta de Market.

-   Una vez conectado a su libertad, debe ir a **Preferencias → Sistema → Configuración**.
-   Click en la pestaña **Actualizaciones / Mercado**.
-   A continuación, haga clic en la pestaña **Mercado**.
-   Marca la casilla **Activar**.
-   Remplissez l'adresse : `https://market.jeedom.com`.
-   También complete los campos **Nombre de usuario** y **Contraseña** basado en sus identificadores (identificadores de mercado y no Jeedom).
-   Puede probar para verificar que la conexión se realizó correctamente.
-   No olvides guardar !

Para obtener más detalles sobre la página de configuración, consulte *Manual de configuración -> Administración*.

## Obtener mi URL de acceso directo

Si tiene un Service Pack, Jeedom le proporciona una URL de acceso directo a su Jeedom sin tener que abrir los puertos en su caja u otro.

Para configurarlo, simplemente vaya a Configuración → Sistema → Configuración

Luego ve a la parte de "Redes""

![Réseaux](images/FirstStep_dns.jpg)

Una vez aquí, solo actívala **Usando Jeedom DNS** luego en la línea **Gestión** de hacer **Reiniciar** y su URL aparecerá en el nivel de estado HTTP, por supuesto, puede personalizarla desde la página de perfil de Market.

> **Importante**
>
> Si acaba de vincular su Jeedom a su cuenta de Market, debe esperar de 24 a 48 horas antes de poder utilizar el servicio DNS

## Cambiar la contraseña predeterminada de Jeedom

Uno de los pasos importantes es cambiar la contraseña predeterminada de su cuenta Jeedom, para eso haga clic en Configuración → Sistema → Usuarios:

Una vez en ella, solo debes elegir la línea con el usuario **Administración** y haga clic en **Contraseña** :

![Contraseña](images/FirstStep_boxPassword.jpg)

Una ventana le pedirá la contraseña. Tenga cuidado de recordarlo bien, o ya no podrá acceder a su Jeedom.

## Crear mi primer objeto

Creará su primer objeto, pero primero debe saber qué es un objeto.

En Jeedom, puede ser cualquier cosa, pero se recomienda hacerlo de acuerdo a sus habitaciones.

> **Punta**
>
> Es posible definir relaciones entre objetos. Exemple : la sala de estar pertenece al objeto de la planta baja que a su vez pertenece al objeto de la casa.

Nada podría ser más simple para crear un objeto :

-   Vaya a Herramientas → Objetos.
-   Haga clic en el botón Agregar.
-   Jeedom te preguntará el nombre. Validar. Este es tu primer objeto creado :

![Objet](images/FirstStep_object.jpg)

Para obtener más información sobre esta parte, vea *Manual de usuario -> Objeto*.

## Instalar mi primer complemento

Un complemento permite agregar funcionalidad a Jeedom. Hay cientos. Muchos son gratuitos, otros pueden ser de pago. Para acceder a la página de complementos, vaya a Complementos → Gestión de complementos.

Luego solo haga clic en Market:

Luego tendrá la lista de todos los complementos que se pueden instalar.

> **Importante**
>
> Tenga en cuenta que algunos son oficiales y otros no. En el caso de un problema con un complemento no oficial, el equipo de Jeedom no se hace responsable.

![Liste des Plugins](images/FirstStep_plugin1.jpg)

Al hacer clic en un complemento, obtiene su archivo:

![Fiche Plugins](images/FirstStep_plugin2.jpg)

Entonces encuentras :

- Botones para instalar el complemento : la versión estable es muy recomendable,
- Un botón para eliminar el complemento,
- Una breve descripcion,
- Un enlace a la documentación del complemento,
- Un enlace al registro de cambios (los últimos cambios),
- Compatibilidad con diferentes plataformas,
- Opiniones de usuarios,
- Cómo usar el complemento,
- Información adicional como el autor, el enlace a la discusión del foro sobre este complemento, la fecha de la última actualización, etc.

Para más información sobre complementos, *Manual de usuario -> Complemento*.

# Support

Jeedom aborda campos muy amplios y evoluciona día a día.
Sin embargo, hay muchas maneras de encontrar ayuda y hacer sus preguntas.

## El foro

Lo encontraras [aquí](https://community.jeedom.com/).

El foro es muy activo y contiene mucha información. Si tiene alguna pregunta, no dude en preguntarla. Tendrá una respuesta en menos de una hora (en promedio). Tenga en cuenta que el foro es mantenido por la comunidad Jeedom, compuesta por voluntarios, y no por la compañía Jeedom.

## Solicitudes de soporte (o tickets))

> **Importante**
>
> Tenga en cuenta que todas las solicitudes de soporte deben tener una cuenta en Market.

Si no ha encontrado una solución a su problema, como último recurso, puede solicitar asistencia al equipo de Jeedom. Esta solicitud pasa por un ticket. Hay varias formas de abrir uno:

-   Directamente de Jeedom (método recomendado): Menú de configuración → Solicitud de soporte.
-   Si por alguna razón no tiene acceso a su Jeedom, siempre puede abrir un boleto del Mercado :
    -   O haciendo clic en su nombre y luego en *Solicitud de soporte*,
    -   ya sea yendo a tu perfil, luego en la sección **Entradas**, use el botón "Abrir una solicitud de soporte".

![Solicitud de soporte](images/FirstStep_support.jpg)

Todos los intercambios posteriores serán por correo electrónico.

> **Punta**
>
> Si, al abrir un ticket, obtiene un error que indica que ha alcanzado su cuota, entonces está limitado a una cierta cantidad de solicitudes de soporte por mes, dependiendo de su paquete de servicios.

Los diferentes paquetes de servicio son :
- Comunidad (gratis): 2 tickets / mes (solo en complementos pagos)
- Power : 10 entradas / mes
- Pro : 100 entradas / mes

Puede encontrar el detalle de los paquetes de servicio [aquí](https://www.jeedom.com/site/fr/soft.html#obtenir).

>**Importante**
>
>Ojo, vemos muchos usuarios con buzones "mailinblack", que durante el primer intercambio piden al remitente que valide un enlace para demostrar que efectivamente se trata de un humano. Este sistema no es compatible con nuestro sistema de ticketing, por lo que aunque te contestemos nunca recibirás la respuesta en tu buzón porque nos bloquea. Por lo tanto, ingrese una dirección de correo electrónico en su página de perfil de mercado que no utilice este sistema; de lo contrario, nunca recibirá nuestra respuesta.
