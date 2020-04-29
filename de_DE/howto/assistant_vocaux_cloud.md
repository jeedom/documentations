# Cloud-Sprachassistenten

## Beschreibung

Mit diesem Dienst können Sie Ihr Jeedom mit Sprachassistenten von Google und Amazon verbinden.

Es kann mit verwendet werden 
- das Dialogflow-Plugin, [Dokumentation](https://jeedom.github.io/plugin-dialogflow/de_DE/)
- oder das Google Smarthome Plugin, [Dokumentation](https://jeedom.github.io/plugin-gsh/de_DE/)
- oder das Alexa Plugin, [Dokumentation](https://jeedom.github.io/plugin-ash//de_DE/)

Dieser Service ist kostenpflichtig und kann auf dem Jeedom Market auf der Seite abonniert werden [Meine Dienste](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

Ihre Unterschiede finden Sie in der jeweiligen Dokumentation der Plugins.

Sobald das Abonnement abonniert ist, müssen Sie auf die Synchronisierung warten (siehe nächstes Kapitel).. Sie können konfigurieren, indem Sie der Dokumentation des Plugins folgen

## Synchronisation und Verzögerung

Während der folgenden Aktionen treten Synchronisationsverzögerungen auf :

- Kontoaktivierung
- Kauf des Jahres über den Voice Assistant-Dienst
- Änderung des API-Smarthome-Plugin-API-Schlüssels
- Jeedom URL ändern
- Passwortmarkt ändern

Die Synchronisation erfolgt alle 6 Stunden (um 12.10 Uhr 6.60.10.12.12.10.18.10). Diese Synchronisierung ist auf unseren Wunsch zurückzuführen, den Server eines Drittanbieters, der Ihre Jeedom und die Google / Amazon-Infrastruktur verbindet, unabhängig und autonom zu machen (dies vermeidet bei einem Problem auf dem Markt beispielsweise den Verlust des Sprachassistentendienstes).. Während der Synchronisation erfolgt ein Neustart des Dienstes (Unterbrechung von weniger als 1 s), wodurch die Beschränkung auf einmal alle 6 Stunden erklärt wird.
