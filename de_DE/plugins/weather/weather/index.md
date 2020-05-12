# Wetter Plugin

Mit dem Wetter-Plugin können Sie Wetterdaten für eine oder mehrere Städte wiederherstellen. Es bietet unter anderem Informationen zu Sonnenaufgang und Sonnenuntergang, Temperatur, Vorhersage, Wind usw. Die abgerufenen Informationen stammen von der openweathermap-Website.

# Plugin Konfiguration

Nach der Installation des Plugins müssen Sie es aktivieren und dann Ihren API-Schlüssel eingeben.

Um Ihren API-Schlüssel zu erhalten, müssen Sie gehen [hier](https://home.openweathermap.org), Erstellen Sie ein Konto und kopieren Sie Ihren API-Schlüssel in den Bereich auf der Plugin-Konfigurationsseite.

> **Wichtig**
>
> Sie müssen einige Stunden warten, bis die Taste aktiv ist, bevor Sie Informationen abrufen können

# Gerätekonfiguration

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name der Wetterausrüstung** : Name Ihrer Wetterausrüstung
-   **Aktivieren** : macht Ihre Ausrüstung aktiv
-   **Sichtbar** : macht Ihre Ausrüstung auf dem Armaturenbrett sichtbar
-   **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört
-   **Stadt** : Sie müssen den Namen Ihrer Stadt gefolgt von der Landesvorwahl eingeben, z : Paris, fr
-   **Mobil Vollansicht** : Zeigt alle Wetterinformationen an oder nicht auf dem Handy

Nachfolgend finden Sie alle verfügbaren Befehle sowie die Möglichkeit, die numerischen Werte zu historisieren oder nicht. Der Code (Nummer) hängt von den Bedingungen ab [hier](https://openweathermap.org/weather-conditions)

Die Wetterdaten werden alle 30 Minuten aktualisiert.

> **Spitze**
>
> Wir empfehlen Ihnen zu gehen [hier](https://openweathermap.org/find?) um zu überprüfen, ob Ihre Stadt, Ihr Dorf bekannt ist oder nicht. In diesem Fall müssen Sie die nächstgelegene bekannte Stadt finden und in die Konfiguration Ihrer Ausrüstung eingeben, um die Informationen abrufen zu können.

> **Spitze**
>
> Une fois la recherche de votre ville réussie le site openweathermap vous montre les informations disponibles et vous devriez avoir dans votre navigateur une url du type <https://openweathermap.org/city/2988507>. Diese Nummer am Ende der URL kann beispielsweise auch in Jeedom-Geräten anstelle von Paris eingegeben werden

>**Wichtig**
>OpenWeather bietet eine Liste mit Informationen für die nächsten 120 Stunden. Daher kennen wir basierend auf der aktuellen Zeit nur einen Teil der Informationen zu D + 4. Daher wird diese Vorhersage für D + 4 verfeinert, um im Verlauf des aktuellen Tages genauer zu werden. Aus diesem Grund können bestimmte Informationen, wie die auf D + 4 erreichte MAX-Temperatur, nur am Ende des Tages sinnvoll sein.
