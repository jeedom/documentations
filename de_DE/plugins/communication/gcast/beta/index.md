# Gcast Plugin

Mit dem Gcast-Plugin können Sie eine Verbindung zwischen Ihrem Google-Assistenten und Jeedom herstellen. Sie können Ihr Google Home / Google Mini verwenden, um TTS durchzuführen oder über Interaktionen mit Jeedom zu interagieren

# Configuration

## Plugin Konfiguration

Nach dem Herunterladen des Plugins müssen Sie es aktivieren und die IP Ihres Google-Assistenten eingeben. Dieses Plugin ermöglicht es, eine Google-Besetzung zu sprechen und ihre Lautstärke zu steuern. Es fungiert auch als Brücke für Interaktionen und Google Home.

## Konfigurieren von IFTTT für die TTS-Rückgabe (optional)

Ohne IFTTT kann Ihr Google-Assistent nicht mit Jeedom austauschen.

**Hier sind die wenigen Konfigurationsschritte :**

-   Se connecter ou s'inscrire sur IFTTT : <https://ifttt.com> (oder über die mobile App)
-   Registerkarte "Meine Applets" und dann "Neues Applet""
-   Klicken Sie auf "+ This" und wählen Sie "Google Assistant" (verknüpfen Sie Ihren Google Assistant mit IFTTT, falls dies noch nicht geschehen ist))
-   Wählen Sie den Auslöser "Sagen Sie eine Phrase mit einer Textzutat"

**Beispiel für die Konfiguration des ersten Teils des Applets :**

-   **Was willst du sagen?** : dis à jeedom \$
    > **Spitze**
    >
    > Sie müssen unbedingt '\ $' am Ende Ihres Satzes setzen

-   **Was ist eine andere Art, es zu sagen? (optional)** : maison \$
-   **Und noch anders? (optional)** : jarvis \$
-   **Was soll der Assistent als Antwort sagen??** : Das tue ich
    > **Spitze**
    >
    > Hier ist es der Satz, den Ihr Google-Assistent beantwortet
    > bevor es Ihre Anfrage bearbeitet

-   **Sprache** : French
-   Klicken Sie auf "+ That" und wählen Sie "Webhooks" (aktivieren Sie den Dienst, falls dies noch nicht geschehen ist))
-   Wählen Sie den einzigen verfügbaren Auslöser : Stellen Sie eine Webanfrage

**Beispiel für die Konfiguration des zweiten Teils des Applets :**

-   **URLs** : Sie müssen die auf Ihrer Ausrüstungsseite angegebene Rückgabe-URL einfügen
    > **Spitze**
    >
    > Die Rückgabe-URL muss geändert werden : ***ID\_ AUSRÜSTUNG*** muss durch die ID Ihres Google-Assistenten ersetzt werden (Klicken Sie auf der Seite Ihres Geräts auf "Erweiterte Konfiguration", um die ID zu erfahren) und *query=XXXX* per query = {{TextField}}

    > **Wichtig**
    >
    > URL muss externe URL sein ``https://mon\_dns.com/plugins/gcast/core/php/gcastApi.php?apikey=xxxxxxMA\_CLE\_APIxxxxxxxx&id=142&query={{TextField}}``

-   **Methode** : GET
-   **Inhaltstyp** : Anwendung / json
-   **Körper** : {{TextField}}

Alles was Sie tun müssen, ist auf "Speichern" zu klicken und Ihre Interaktionen zwischen Google Assistant und Jeedom zu nutzen !

Die Verwendung von ASK ist sogar möglich

# FAQ

> **Die Lautstärkeregelung funktioniert, aber nicht das TTS**
>
> Sie müssen Ihre interne Netzwerkkonfiguration überprüfen (das Plugin verwendet sie für die TTS-Generierung), insbesondere kein https in den internen Netzwerken.
