Plugin para ordenar el Nabaztag.

Configuración 
=============

Configuración del equipo 
=============================

Una vez que el complemento está instalado y activado desde Market, accede a
Página del complemento Nabaztag por :

![nabaztag1](../images/nabaztag1.png)

Aquí encontrarás todos tus equipos Nabaztag :

![nabaztag2](../images/nabaztag2.png)

> **Punta**
>
> Como en muchos lugares de Jeedom, coloca el mouse en el extremo izquierdo
> abre un menú de acceso rápido (puedes
> desde tu perfil siempre déjalo visible).

Una vez que se selecciona un equipo, obtienes :

![nabaztag3](../images/nabaztag3.png)

Aquí encontrarás toda la configuración de tu equipo :

-   **Nombre del equipo Nabaztag.** : nombre de su equipo Nabaztag

-   **Objeto padre** : indica el objeto padre al que pertenece
    equipo

-   **Categoría** : categorías de equipos (puede pertenecer a
    categorías múltiples)

-   **Activar** : activa su equipo

-   **Visible** : lo hace visible en el tablero

-   **Dirección (openjabnab.fr o @IP)** : openjabnab o dirección IP (DNS)
    su openjabnab si lo autohospeda

-   **Dirección MAC** : la dirección mac de tu conejo (ver más abajo)

-   **API Token Purple** : Token API (ver más abajo)

A continuación encontrará la lista de pedidos. :

-   el nombre que se muestra en el tablero

-   Mostrar : permite mostrar los datos en el tablero

-   configuración avanzada (ruedas con muescas pequeñas) : Muestra
    La configuración avanzada del comando (método
    historia, widget ...)

-   Probar : Se usa para probar el comando

La lista de comandos es la siguiente :

-   **De pie** : Despierta el conejo

-   **Reiniciar** : Reinicia el conejo

-   **Hora de acostarse** : Vamos a decirle al conejo que se vaya a la cama

-   **Calidad del aire** : Da calidad del aire (requiere
    activación del complemento correspondiente en openjabnab)

-   **Efemérides** : Dar efemérides (requiere activación de
    complemento correspondiente en openjabnab)

-   **Reloj parlante** : Da el tiempo (requiere la activación de
    complemento correspondiente en openjabnab)

-   **Tiempo** : Da tiempo (requiere la activación del complemento
    corresponsal en openjabnab)

-   **Diciendo** : Dar un dicho (requiere la activación del complemento
    corresponsal en openjabnab)

-   **Oreja izquierda** : Le permite elegir la posición del oído.
    izquierda (16 posiciones posibles)

-   **Oreja derecha** : Le permite elegir la posición del oído.
    derecha (16 posiciones posibles)

-   **Hablar** : Digamos una oración al conejo

Recuperar dirección máxima y token 
===================================

Vaya al sitio web [openjabnab] (http://openjabnab.fr/ojn_admin/index.php)
luego inicie sesión en su cuenta :

![nabaztag4](../images/nabaztag4.png)

Click en conejo :

![nabaztag5](../images/nabaztag5.png)

Luego haga clic en API :

![nabaztag6](../images/nabaztag6.png)

Aquí active la API púrpura y pública y obtenga la dirección mac, así como
la clave API púrpura para ponerlo en la configuración de tu conejo
en Jeedom

Reproductor 
======

Aquí está el widget obtenido después de la creación del equipo. :

![nabaztag7](../images/nabaztag7.png)

Registro de cambios detallado :
<https://github.com/jeedom/plugin-nabaztag/commits/stable>
