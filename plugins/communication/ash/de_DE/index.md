# Alexa Smarthome Plugin

Dieses Plugin ermöglicht es, die Verbindung zwischen Ihrem Jeedom und Alexa herzustellen

Es kann über einen Cloud-Dienst von Jeedom betrieben werden.

> **Wichtig**
>
> Das Plugin erfordert ein Abonnement für Sprachdienste. Sie können Ihr Abonnement verwalten [hier](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

> **Wichtig**
>
> AMAZON setzt voraus, dass Ihr Jeedom in HTTPS (das Plugin funktioniert nicht in HTTP) mit einem gültigen Zertifikat (daher kein selbstsigniertes Zertifikat) zugänglich ist)
>
> Dank der Power- oder Ultimate Service Packs ist Ihr Jeedom über HTTPS zugänglich.
> Wenn Sie über ein Community Service Pack verfügen, müssen Sie selbst ein SSL-Zertifikat installieren, das von einer Zertifizierungsstelle ausgestellt wurde (z: Lassen Sie uns verschlüsseln, ...).

> **Wichtig**
>
> Das Plugin unterstützt keine Geräte mit Doppelfunktionen (2 Ausgänge als bestimmtes zwave Fibaro-Modul). Sie müssen unbedingt 2 virtuelle durchlaufen, um es aufzuschlüsseln.

# Herstellen der Verbindung zu Alexa

> **Wichtig**
>
> Es ist wichtig, die folgenden Schritte in der angegebenen Reihenfolge auszuführen !!!

## Konfigurationsmarkt

Nach der Installation des Plugins müssen Sie nur zum Konfigurationsteil des Plugins gehen und dann auf Konfiguration an den Markt senden klicken.

## Alexa Konfiguration

Sobald der Dienst aktiv ist, müssen Sie auf der Alexa-App oder auf der [Website](https://alexa.amazon.fr/spa/index.html) Gehen Sie zum Skill-Teil und suchen Sie nach der Jeedom-Skill. Aktivieren Sie sie dann. Dort werden Sie nach Kennungen gefragt, die Sie vom Markt nehmen müssen (achten Sie darauf, dass Sie Ihre Marktkennungen und nicht die Ihrer Jeedom-Kennungen eingeben)

> **Wichtig**
>
> Wenn Sie eine Fehlermeldung erhalten, die Sie darüber informiert, dass Ihr Benutzerkennwort nicht korrekt ist oder nicht, müssen Sie dies tun :
> - Überprüfen Sie, ob Amazon Alexa auf dem Markt aktiv ist
> - Wenn dies der Fall ist, achten Sie auf Ihre Kennungen (achten Sie auf Groß- / Kleinschreibung) ?
> - Wenn dies der Fall ist, ändern Sie Ihr Passwort auf dem Markt und haben Sie es bei der Konfiguration des Sprachassistenten-Dienstes (Registerkarte Marktprofile Seite Meine Dienste) gespeichert

> **Wichtig**
>
>Jede Änderung der Konfiguration der an Alexa übertragenen Geräte (Hinzufügen von Geräten, Löschen von Geräten, Ändern eines generischen Auftragstyps) erfordert zwangsläufig das Aufrufen von Plugin -> Kommunikation -> Alexa und anschließendes Speichern und in der Alexa-Anwendung, um eine Entdeckung zu wiederholen

## Plugin Konfiguration

Mit dem Plugin können Sie Geräte oder Szenen an Alexa übertragen. Es muss angegeben werden, welche Geräte oder Szenen an Alexa übertragen werden sollen.
Gehen Sie auf Ihrem Jeedom zu Plugin -> Kommunikation -> Alexa.

Die standardmäßig geladene Registerkarte betrifft die zu übertragenden Geräte : In diesem Teil müssen Sie das Gerät auswählen, das an Alexa übertragen werden soll, sowie den Typ (eine Kategorie für Alexa) des Geräts (dieser Typ unterscheidet sich von den generischen Typen von Jeedom, die für Befehle gelten)). Weitere Einzelheiten zu Alexa-Kategorien (siehe [hier](https://developer.amazon.com/fr-FR/docs/alexa/device-apis/alexa-discovery.html#display-categories))

> **Wichtig**
>
> Das Plugin basiert auf den generischen Jeedom-Befehlen zur Steuerung Ihrer Hausautomation. Es ist daher sehr wichtig, diese korrekt zu konfigurieren. Sie können sehen [hier](https://doc.jeedom.com/de_DE/core/4.2/types) Erklärungen zu generischen Generika

> **Wichtig**
>
> Für die Modi benötigen Sie mindestens zwei, andernfalls lehnt Amazon die Konfiguration ab und nichts wird synchronisiert

Sie können auf der Registerkarte "Szene" auch Szenen mit Eingabe- und Ausgabeaktionen erstellen.

> **Wichtig**
>
> Wenn Sie keine Geräte senden (kein OK in der Geräteliste des Alexa-Plugins), betrachtet Amazon dies als Fehler und verwendet die letzte bekannte Konfiguration. Wenn Sie also alles vergessen und keine Geräte senden, übernimmt amazon die letzte bekannte Konfiguration und lässt daher alles wieder erscheinen.

# FAQ

>**Ich habe gelesen, dass das Plugin ein Abonnement erfordern würde, warum ?**
>
> Es ist ganz einfach, Jeedom ist eine Nicht-Cloud-Lösung (hören Sie, dass alles zu Hause ist, es gibt keinen Server für Ihr Jeedom auf unserer Seite), aber Alexa kann nur Anforderungen für eine Fertigkeit an einen einzelnen Server senden. Also mussten wir einen Server erstellen, der alle Anfragen von Alexa empfängt und sie erneut an Ihr Jeedom überträgt. Leider Server (zusätzlich zu den Kosten für Entwicklung und Wartung) zu einem Mietpreis auf unserer Seite. Aus diesem Grund wird es ein Abonnement für den Dienst "Voice Assistant" geben, der sowohl Amazon als auch Google abdeckt (keine Sorge, der Preis ist minimal, das Ziel ist nur, die Kosten des Servers zu amortisieren)

>**Um die Fensterläden zu öffnen / schließen, muss ich Ein- / Ausschalten sagen ?**
>
> Dies ist normal. Alexa unterstützt das Öffnen von Geräten (aus Sicherheitsgründen) nicht. Sie müssen also davon ausgehen, dass es sich um ein Licht handelt. Dank der Routinen können Sie öffnen / schließen sagen

>**Alexa sagt mir "das Gerät reagiert nicht", während die Aktion gut gemacht ist**
>
> Schauen Sie sich Ihre generischen Typen an. Alexa benötigt unbedingt eine Statusrückgabe, andernfalls wird Ihnen mitgeteilt, dass das Gerät nicht reagiert. Achten Sie auch auf die Verzögerung, mit der die Aktion ausgeführt wird, wenn sie zu lang ist. Sie erhalten die Meldung, dass das Gerät nicht reagiert.

>**Während der Zuordnung habe ich einen Fehler (aber nicht bei einem Problem mit Passwort / Benutzername)**
>
>Wenn Sie während der Zuordnung zu Jeedom einen Fehler haben, liegt dies wahrscheinlich daran, dass Sie vor der Zuordnung keine Geräte hinzugefügt / übertragen haben. Um dies zu korrigieren, gehen Sie zu Plugins -> Kommunikation -> Alexa und aktivieren Sie mindestens ein Gerät zum Senden und Speichern (überprüfen Sie, ob das Gerät in Ordnung ist. Wenn es sich in NOK befindet, klicken Sie auf NOK, um zu sehen, warum oder fragen Sie nach generischer Typ in Jeedom). Wiederholen Sie dann die Zuordnung

>**Beim Hinzufügen von Geräten habe ich NOK**
>
>Klicken Sie einfach auf NOK. In einem Fenster wird der generische Typ angezeigt, den Sie auf den Gerätesteuerungen haben müssen, damit er funktioniert. Sie können sehen [hier](https://doc.jeedom.com/de_DE/concept/generic_type) die Dokumentation zum generischen Typ

>**Das Hinzufügen von Ausrüstung / Szene wird in der alexa-Anwendung nicht angezeigt**
>
> Du musst :
> - löschte alle meine übertragenen Geräte (grün OK) aus dem Alexa-Plugin
> - gut sparen
> - “oublié” tous mes équipement jeedom visibles dans la rubrique Maison connectée de Alexa.amazon.com (oder die App)
> - im plugin -> plugin management dann alexa auf "send the configuration to the market" klicken"
> - mache eine Entdeckung von Alexa
> - Rückgabegeräte
> - Wiederholen Sie die Erkennung von Alexa
