# 

Cette documentation présente les étapes à suivre après la mise en service de votre box Jeedom.

## Interface

Votre instance Jeedom est accessible par son interface web à son adresse sur le réseau local.

### Accès local

Pour accéder à l'interface Jeedom, il est nécessaire de connaître l'adresse IP ou le nom d'hôte de la machine sur le réseau local. Voici trois méthodes pour l'obtenir :

#### Découverte automatique

Le market Jeedom propose [**un outil de découverte permettant de récupérer les adresses IP des instances Jeedom connectées au même réseau local**](https://www.jeedom.com/market/index.php?v=d&p=find){:target="_blank"}.

>**Wichtig**
>
>Il est nécessaire que la box soit démarrée depuis plusieurs minutes pour que la découverte Jeedom fonctionne.\
>De plus, cette fonctionnalité dépend de la configuration réseau appliquée localement et peut être inutilisable dans certaines conditions.

#### Routeur

Vous pouvez retrouver l'adresse IP de votre box Jeedom en accédant à l'interface d'administration de votre routeur ou box internet.

La plupart propose une liste des appareils/périphériques connectés, avec leur nom d'hôte, adresse MAC et adresse IP. Recherchez un périphérique nommé “Jeedom” ou identifiez-le via son adresse MAC.

>**Wichtig**
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

### Erste Verbindung

[Une fois l'adresse de Jeedom connue](#Accès%20local), saisissez-la dans votre navigateur internet pour accéder à la page de connexion :

{% include lightbox.html src="images/FirstStep_box_connect.jpg" data="FirstStep_box_connect" title="Connexion Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

>**Wichtig**
>
>Les identifiants par défaut sont : `admin/admin`.

Lorsque vous vous connectez avec les identifiants par défaut, Jeedom vous invite à modifier le mot de passe `admin`. **Saisissez simplement 2 fois le nouveau mot de passe pour sécuriser l'accès de cet utilisateur**.

Il est également possible de modifier le mot de passe de l'utilisateur `admin` en cliquant sur le bouton **Passwort** de la page de gestion des utilisateurs *(accessible par le menu **Réglages → Système → Utilisateurs**)* :

{% include lightbox.html src="images/FirstStep_boxPassword.jpg" data="FirstStep_boxPassword" title="Passwort admin" imgstyle="width:75%;display:block;margin:0 auto;" %}

>**Wichtig**
>
>Mémorisez bien le nouveau mot de passe, il permet de se connecter à l'interface Jeedom.

## Market

Le market permet de consulter, installer et même publier des plugins facilement, d'enregistrer ses instances Jeedom ou de bénéficier des services Jeedom notamment.

### Inscription

Pour créer un compte sur le market Jeedom, il n'y a qu'à [**remplir les champs requis par la page d'enregistrement**](https://www.jeedom.com/market/index.php?v=d&p=register){:target="_blank"} :

{% include lightbox.html src="images/FirstStep_market1.jpg" data="FirstStep_market1" title="Inscription Markt Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

Après validation, vous êtes connectés à votre compte et redirigés vers l'accueil :

{% include lightbox.html src="images/FirstStep_market2.jpg" data="FirstStep_market2" title="Accueil Markt Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

### Service Pack

Les boxes officielles Jeedom sont accompagnées d'un code **Service Pack**, reçu par email, qui permet de bénéficier de plugins et de services gratuitement.

Pour activer votre Service Pack, il faut saisir ce code lorsque demandé après avoir cliqué sur le bouton **Je dispose d'un code** de l'onglet [**Mes services de votre profil market**](https://www.jeedom.com/market/index.php?v=d&p=profils#services){:target="_blank"}.

>**INFORMATION**
>
>Veuillez vous rapprocher de votre revendeur si vous n'avez pas reçu de code Service Pack suite à l'acquisition d'une box officielle Jeedom.

### Lien avec Jeedom

Afin que votre instance Jeedom puisse communiquer avec le market, il faut renseigner les identifiants de votre profil dans la configuration générale en passant par le menu **Einstellungen → System → Konfiguration**.

Rendez-vous ensuite à l'onglet **Updates / Markt**, sous-onglet **Configuration des dépôts : Markt** et renseignez les champs suivants avant de sauvegarder :

- Activer Market : cocher la case
- Adresse : `https://market.jeedom.com`
- Benutzername : identifiant de votre profil market
- Passwort : mot de passe de votre profil market

>**INFORMATION**
>
>Vous pouvez cliquer sur le bouton **Tester** pour vérifier que la connexion s'effectue correctement.

### Accès à distance

Que vous disposiez d'un Service Pack ou que vous ayez souscrit au service **Accès à distance facilité** *(DNS Jeedom)*, Jeedom génère une adresse d'accès à distance permettant de s'y connecter hors du réseau local.

Pour activer ce service, il faut simplement se rendre dans le menu **Réglages → Système → Configuration**, onglet **Réseaux** :

{% include lightbox.html src="images/FirstStep_dns.jpg" data="FirstStep_dns" title="Réseaux Jeedom" imgstyle="width:75%;display:block;margin:0 auto;" %}

Aktivieren Sie das Kontrollkästchen **Activer DNS Jeedom**, puis cliquez sur le bouton **(Re)démarrer**. Après un bref instant et une fois le service démarré, l'adresse d'accès à distance s'affiche à l'écran.

>**INFORMATION**
>
>Selon les circonstances, l'accès à distance peut prendre plusieurs heures pour être totalement fonctionnel.

Vous pouvez personnaliser l'adresse d'accès à distance en cliquant le bouton **Configuration** du service depuis [**votre profil market**](https://www.jeedom.com/market/index.php?v=d&p=profils#services){:target="_blank"}.

Retrouvez tous les détails dans [la documentation dédiée au service Accès à distance - DNS Jeedom](../howto/mise_en_place_dns_jeedom).

## Erstelle mein erstes Objekt

Sie werden Ihr erstes Objekt erstellen, aber zuerst müssen Sie wissen, was ein Objekt ist.

In Jeedom kann es alles und jedes sein, aber es wird empfohlen, es entsprechend Ihren Räumen zu tun.

> **Spitze**
>
> Es ist möglich, Beziehungen zwischen Objekten zu definieren. Exemple : Das Wohnzimmer gehört zum Objekt im Erdgeschoss, das selbst zum Hausobjekt gehört.

Nichts könnte einfacher sein, ein Objekt zu erstellen :

-   Gehen Sie zu Extras → Objekte.
-   Klicken Sie auf die Schaltfläche Hinzufügen.
-   Jeedom wird dich nach dem Namen fragen. Validieren. Dies ist Ihr erstes erstelltes Objekt :

![Objet](images/FirstStep_object.jpg)

Weitere Informationen zu diesem Teil finden Sie unter *Benutzerhandbuch -> Objekt*.

## Installiere mein erstes Plugin

Ein Plugin ermöglicht das Hinzufügen von Funktionen zu Jeedom. Es gibt Hunderte. Viele sind kostenlos, andere können kostenpflichtig sein. Um auf die Plugins-Seite zuzugreifen, gehen Sie zu Plugins → Plugins-Verwaltung.

Dann klicken Sie einfach auf Markt:

Sie haben dann die Liste aller Plugins, die installiert werden können.

> **Wichtig**
>
> Bitte beachten Sie, dass einige offiziell sind und andere nicht. Im Falle eines Problems mit einem inoffiziellen Plugin kann das Jeedom-Team nicht verantwortlich gemacht werden.

![Liste des Plugins](images/FirstStep_plugin1.jpg)

Durch Klicken auf ein Plugin erhalten Sie dessen Datei:

![Fiche Plugins](images/FirstStep_plugin2.jpg)

Sie finden dann :

- Schaltflächen zum Installieren des Plugins : Die stabile Version wird dringend empfohlen,
- Eine Schaltfläche zum Entfernen des Plugins,
- Eine kurze Beschreibung,
- Ein Link zur Plugin-Dokumentation,
- Ein Link zum Changelog (die neuesten Änderungen),
- Kompatibilität mit verschiedenen Plattformen,
- Nutzerbewertungen,
- Wie man das Plugin benutzt,
- Zusätzliche Informationen wie der Autor, der Link zur Forumsdiskussion zu diesem Plugin, das Datum des letzten Updates usw.

Weitere Informationen zu Plugins, *Benutzerhandbuch -> Plugin*.

# Support

Jeedom befasst sich mit sehr weiten Feldern und entwickelt sich von Tag zu Tag weiter.
Es gibt jedoch viele Möglichkeiten, Hilfe zu finden und Ihre Fragen zu stellen.

## Das Forum

Sie werden es finden [hier](https://community.jeedom.com/).

Das Forum ist sehr aktiv und enthält viele Informationen. Wenn Sie eine Frage haben, zögern Sie nicht, sie zu stellen. Sie haben eine Antwort in weniger als einer Stunde (im Durchschnitt)). Bitte beachten Sie, dass das Forum von der Jeedom-Community, die sich aus Freiwilligen zusammensetzt, und nicht von der Jeedom-Firma unterhalten wird.

## Supportanfragen (oder Tickets)

> **Wichtig**
>
> Bitte beachten Sie, dass alle Supportanfragen ein Konto auf dem Markt haben müssen.

Wenn Sie als letztes Mittel keine Lösung für Ihr Problem gefunden haben, können Sie das Jeedom-Team um Unterstützung bitten. Diese Anfrage geht durch ein Ticket. Es gibt verschiedene Möglichkeiten, eine zu öffnen:

-   Direkt von Jeedom (empfohlene Methode): Einstellungsmenü → Supportanfrage.
-   Wenn Sie aus irgendeinem Grund keinen Zugang zu Ihrem Jeedom haben, können Sie jederzeit ein Ticket vom Markt öffnen :
    -   Klicken Sie entweder auf Ihren Namen und dann auf *Supportanfrage*,
    -   entweder indem Sie zu Ihrem Profil gehen, dann in den Abschnitt **Tickets**, Verwenden Sie die Schaltfläche "Supportanfrage öffnen".

![Supportanfrage](images/FirstStep_support.jpg)

Alle weiteren Austausche erfolgen per E-Mail.

> **Spitze**
>
> Wenn beim Öffnen eines Tickets eine Fehlermeldung angezeigt wird, dass Sie Ihr Kontingent erreicht haben, sind Sie abhängig von Ihrem Service Pack auf eine bestimmte Anzahl von Supportanfragen pro Monat beschränkt.

Die verschiedenen Service Packs sind :
- Community (kostenlos): 2 Tickets / Monat (nur für kostenpflichtige Plugins)
- Power : 10 Tickets / Monat
- Pro : 100 Tickets / Monat

Sie finden die Details der Service Packs [hier](https://www.jeedom.com/site/fr/soft.html#obtenir).

>**Wichtig**
>
>Seien Sie vorsichtig, wir sehen viele Benutzer mit „mailinblack“-Postfächern, die beim ersten Austausch den Absender bitten, einen Link zu bestätigen, um zu beweisen, dass es sich tatsächlich um einen Menschen handelt. Dieses System ist nicht mit unserem Ticketsystem kompatibel. Selbst wenn wir Ihnen antworten, erhalten Sie die Antwort nie in Ihrem Postfach, da es uns blockiert. Geben Sie daher bitte auf Ihrer Marktprofilseite eine E-Mail-Adresse an, die dieses System nicht nutzt, sonst erhalten Sie nie unsere Antwort.
