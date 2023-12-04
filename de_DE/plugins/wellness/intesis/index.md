# Intesis

#Description

Plugin zur Steuerung **les passerelles « Intesis Wifi (ASCII) AC Interfaces » (anciennement dénommées Intesisbox).**  basierend auf dem WMP-Protokoll.

Les passerelles « Intesis Wifi (ASCII) AC Interfaces » sont des box qui permettent de domotiser des systèmes de climatisation gainables (interface Intesis à connecter en filaire sur le bus du climatisateur) ou à split avec télécommande infrarouge (interface Intesis IR).

Dieses Plugin unterstützt alle Modelle von Intesis Wifi (ASCII) AC-Schnittstellen (sowohl verkabelt als auch IR), jedoch **ist nicht kompatibel mit IntesisHome-Gateways** (und insbesondere nicht mit Intesis-Gateways aus der IntesisHome-Reihe).

Intesis Wifi (ASCII) AC Interfaces Gateways sind [hier zum Verkauf angeboten.](https://www.domadoo.fr/fr/323_intesis-unites-ac-domestiques-daikin-vers-une-interface-wi-fi-rac)

# Plugin Konfiguration

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es wie jedes Jeedom-Plugin zuerst aktivieren :

![conf](./images/intesisConf.png)

In diesem Fall wird dringend empfohlen, die Installation von Abhängigkeiten zu starten (auch wenn diese in Ordnung sind) :

![dependances](./images/intesisDep.png)

Starten Sie schließlich den Dämon :

![demon](./images/intesisDem.png)

Schließlich müssen Sie überprüfen, ob alles grün und in Ordnung ist :

![ok](./images/intesisOk.png)

Es gibt nichts anderes zu tun.

Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](./images/intesisSocket.png)

# So deklarieren Sie eine neue Intesis-Wifi-Schnittstelle in Jeedom

Rendez-vous dans le menu « Plugins → Confort → Intesis » :

![menu](./images/intesisMenu.png)

Sie gelangen auf die nächste Seite, die aus zwei Abschnitten besteht :

- **Management** mit den folgenden Optionen : « Ajouter » et « Configuration » (cette option vous renvoie à la page de configuration du plugin, décrite au point précédent).
- **Meine Intesis** : Hier werden die von Jeedom verwalteten Intesis-WLAN-Gateways angezeigt.

![gestion](./images/intesisGest.png)

Vous devez donc cliquer sur l'option « Ajouter » et renseigner le nom de l'équipement (Climatisation Salon, par exemple) :

![ajoutEquipement](./images/intesisAddeq.png)

Vous devez ensuite compléter les autres champs de la page de configuration du nouvel équipement Intesis, dont l'objet, la catégorie, cocher « Activer » et « Visible », puis vous devez **Geben Sie die IP-Adresse ein** Ihr Intesisbox Wifi Gateway :

![confEquipement](./images/intesisConfEq.png)

>**Wichtig**
>
>Sie müssen sicherstellen, dass Ihr Intesisbox Wifi-Gateway eine feste IP in Ihrem lokalen Netzwerk hat. Andernfalls kann sich die IP ändern. In diesem Fall kann Jeedom das Gateway nicht mehr steuern.

Alles was Sie tun müssen, ist speichern.

# Bestellungen

Rendez-vous dans l'onglet « Commandes » de la page de configuration du nouvel équipement Intesis.

Ici vous pouvez masquer et rendre visibles les différentes commandes de type « action » et « info » disponibles (les commandes de type « info » peuvent également être historisées) :

![cmd](./images/intesisCmd.png)

Das Plugin bietet insgesamt 14 Befehle.

Bestellungen de type « action » (actionneurs) disponibles sont les suivantes :

- Ein : Klimaanlage einschalten
-	Aus : Klimaanlage ausschalten
- Anleitung : Ändern des Temperatursollwerts der Klimaanlage
- Listenmodus : So ändern Sie die Betriebsart der Klimaanlage (Auto, Heizen, Trocknen, Lüfter, Kühlen)
- Auf-Ab-Schaukel : Zum Ändern des Schwingungsmodus der vertikalen Luftstrom-Orientierungsschaufeln (1, 2, 3 und Swing))
- Links-rechts-Schaukel : Ändern des Schwingungsmodus der horizontalen Luftstrom-Orientierungsschaufeln (1, 2, 3 und Swing))
- Lüftergeschwindigkeit : So ändern Sie die Lüfterdrehzahl (von 1 bis 4))

Bestellungen de type « info» (capteurs) disponibles sont les suivantes :

-	Zustand : Statusrückmeldung Klimaanlage EIN / AUS
-	Sollwertinfo : Rückmeldung des Temperatursollwertstatus
-	Modus : Statusrückmeldung zur Betriebsart der Klimaanlage (Auto, Heizen, Trocknen, Lüfter, Kühlen)
-	High-Low-Oszillationsinfo : Statusrückmeldung des Schwingungsmodus der vertikalen Schaufeln der Klimaanlage.
-	Links-Rechts-Schwingungsinformationen : Statusrückmeldung des Schwingungsmodus der horizontalen Schaufeln der Klimaanlage.
-	Informationen zur Lüftergeschwindigkeit : Rückmeldung des Lüftergeschwindigkeitsstatus
-	Temperatur : Raumumgebungstemperatur

Sie können Befehle ausblenden, die für Sie nicht nützlich sind. Dies kann beispielsweise der Fall sein, wenn Ihre Klimaanlage keine Luftstrom-Orientierungsschaufeln hat.

À l'inverse, vous pouvez rendre visibles les commandes de type « info » qui vous sont utiles.

# Das Intesis-Widget

Wie in Punkt 3) oben angegeben, sind die Befehle, die im Widget angezeigt werden, nur diejenigen, die Sie zuvor sichtbar gemacht haben.

>**Bemerkung**
>
>Pour les commandes de type « info », le retour d'état se fait toutes les 5 minutes. Wenn Sie also die Fernbedienung der Klimaanlage verwenden, um den Sollwert (oder einen anderen) zu ändern, spiegelt Jeedom diesen Zustand innerhalb eines Zeitraums von maximal 5 Minuten im Widget wider.

Wie bei jedem Jeedom-Widget können Sie die Steuerelemente im Widget im Bearbeitungsmodus neu organisieren (klicken Sie dazu oben links auf den Stift) :

![widget](./images/intesisWidget.png)

Einige Beispiele für Intesis-Widgets mit verschiedenen sichtbaren Befehlen (in Jeedom V3) :

![widget1](./images/intesisWidget1.png)

![widget2](./images/intesisWidget2.png)

![widget3](./images/intesisWidget3.png)

Beispiel für ein Intesis-Widget in Jeedom V4 :

![widgetV4](./images/intesisWidgetV4.png)
