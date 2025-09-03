# 

Cette documentation présente les étapes à suivre après la mise en service de votre box Jeedom.

## Interface

Votre instance Jeedom est accessible par son interface web à son adresse sur le réseau local.

### Accès local

Pour accéder à l'interface Jeedom, il est nécessaire de connaître l'adresse IP ou le nom d'hôte de la machine sur le réseau local. Voici trois méthodes pour l'obtenir :

#### Découverte automatique

Le market Jeedom propose [**un outil de découverte permettant de récupérer les adresses IP des instances Jeedom connectées au même réseau local**](https://www.jeedom.com/market/index.php?v=d&p=find){:target="_blank"}.

>**Importante**
>
>Il est nécessaire que la box soit démarrée depuis plusieurs minutes pour que la découverte Jeedom fonctionne.\
>De plus, cette fonctionnalité dépend de la configuration réseau appliquée localement et peut être inutilisable dans certaines conditions.

#### Routeur

Vous pouvez retrouver l'adresse IP de votre box Jeedom en accédant à l'interface d'administration de votre routeur ou box internet.

La plupart propose une liste des appareils/périphériques connectés, avec leur nom d'hôte, adresse MAC et adresse IP. Recherchez un périphérique nommé “Jeedom” ou identifiez-le via son adresse MAC.

>**Importante**
>
>Se référer au manuel du fabricant en cas de difficulté à atteindre l'interface d'administration du routeur.

#### Nom d'hôte

L'interface Jeedom est également accessible par le nom d'hôte de la machine.

- En cas d'utilisation d'une image système officielle pour déployer Jeedom, le nom d'hôte est connu et Jeedom doit être accessible sur :

  | Machine            | Interface Jeedom   |
  |--------------------|--------------------|
  | [Luna](https://images.jeedom.com/luna/){:target="_blank"} | [http://jeedomluna.local](http://jeedomluna.local){:target="_blank"} |
  | [Atlas](https://images.jeedom.com/atlas/){:target="_blank"} | [http://jeedomatlas.local](http://jeedomatlas.local){:target="_blank"} |
  | [Smart](https://images.jeedom.com/smart/){:target="_blank"} | [http://jeedomsmart.local](http://jeedomsmart.local){:target="_blank"} |
  | [Ordinateur *(installation automatique)*](https://images.jeedom.com/x86-64/){:target="_blank"} | [http://jeedom.local](http://jeedom.local){:target="_blank"} |
  | [Freebox](https://images.jeedom.com/freebox/){:target="_blank"} | [http://jeedomfreebox.local](http://jeedomfreebox.local){:target="_blank"} |

- ). .

  L'adresse de l'interface Jeedom doit normalement correspondre à : `http://MACHINE.DOMAIN`.

### Primera conexión

[Une fois l'adresse de Jeedom connue](#Accès%20local), saisissez-la dans votre navigateur internet pour accéder à la page de connexion :

{% include lightbox.html src="images/FirstStep_box_connect.jpg" data="FirstStep_box_connect" title="Connexion Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

>**Importante**
>
>Les identifiants par défaut sont : `admin/admin`.

Lorsque vous vous connectez avec les identifiants par défaut, Jeedom vous invite à modifier le mot de passe `admin`. **Saisissez simplement 2 fois le nouveau mot de passe pour sécuriser l'accès de cet utilisateur**.

Il est également possible de modifier le mot de passe de l'utilisateur `admin` en cliquant sur le bouton **Contraseña** de la page de gestion des utilisateurs *(accessible par le menu **Réglages → Système → Utilisateurs**)* :

{% include lightbox.html src="images/FirstStep_boxPassword.jpg" data="FirstStep_boxPassword" title="Contraseña admin" imgstyle="width:75%;display:block;margin:0 auto;" %}

>**Importante**
>
>Mémorisez bien le nouveau mot de passe, il permet de se connecter à l'interface Jeedom.

## Market

Le market permet de consulter, installer et même publier des plugins facilement, d'enregistrer ses instances Jeedom ou de bénéficier des services Jeedom notamment.

### Inscription

Pour créer un compte sur le market Jeedom, il n'y a qu'à [**remplir les champs requis par la page d'enregistrement**](https://www.jeedom.com/market/index.php?v=d&p=register){:target="_blank"} :

{% include lightbox.html src="images/FirstStep_market1.jpg" data="FirstStep_market1" title="Inscription Mercado Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

Après validation, vous êtes connectés à votre compte et redirigés vers l'accueil :

{% include lightbox.html src="images/FirstStep_market2.jpg" data="FirstStep_market2" title="Accueil Mercado Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

### Service Pack

Les boxes officielles Jeedom sont accompagnées d'un code **Service Pack**, reçu par email, qui permet de bénéficier de plugins et de services gratuitement.

Pour activer votre Service Pack, il faut saisir ce code lorsque demandé après avoir cliqué sur le bouton **Je dispose d'un code** de l'onglet [**Mes services de votre profil market**](https://www.jeedom.com/market/index.php?v=d&p=profils#services){:target="_blank"}.

>**INFORMATION**
>
>Veuillez vous rapprocher de votre revendeur si vous n'avez pas reçu de code Service Pack suite à l'acquisition d'une box officielle Jeedom.

### Lien avec Jeedom

Afin que votre instance Jeedom puisse communiquer avec le market, il faut renseigner les identifiants de votre profil dans la configuration générale en passant par le menu **Preferencias → Sistema → Configuración**.

Rendez-vous ensuite à l'onglet **Actualizaciones / Mercado**, sous-onglet **Configuration des dépôts : Mercado** et renseignez les champs suivants avant de sauvegarder :

- Activer Market : cocher la case
- Adresse : `https://market.jeedom.com`
- Nombre de usuario : identifiant de votre profil market
- Contraseña : mot de passe de votre profil market

>**INFORMATION**
>
>Vous pouvez cliquer sur le bouton **Tester** pour vérifier que la connexion s'effectue correctement.

### Accès à distance

Que vous disposiez d'un Service Pack ou que vous ayez souscrit au service **Accès à distance facilité** *(DNS Jeedom)*, Jeedom génère une adresse d'accès à distance permettant de s'y connecter hors du réseau local.

Pour activer ce service, il faut simplement se rendre dans le menu **Réglages → Système → Configuration**, onglet **Réseaux** :

{% include lightbox.html src="images/FirstStep_dns.jpg" data="FirstStep_dns" title="Réseaux Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

Marca la casilla **Activer DNS Jeedom**, puis cliquez sur le bouton **(Re)démarrer**. Après un bref instant et une fois le service démarré, l'adresse d'accès à distance s'affiche à l'écran.

>**INFORMATION**
>
>Selon les circonstances, l'accès à distance peut prendre plusieurs heures pour être totalement fonctionnel.

Vous pouvez personnaliser l'adresse d'accès à distance en cliquant le bouton **Configuration** du service depuis [**votre profil market**](https://www.jeedom.com/market/index.php?v=d&p=profils#services){:target="_blank"}.

Retrouvez tous les détails dans [la documentation dédiée au service Accès à distance - DNS Jeedom](../howto/mise_en_place_dns_jeedom).

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
