# Wetter Plugin

Das Plugin **Wetter** Ermöglicht das Abrufen von Wetterdaten aus einer oder mehreren Städten. Die Informationen stammen von der Website **Openweathermap** die unter anderem Zugriff auf Vorhersagen, Sonnenauf- und -untergangsinformationen, Temperatur, Luftfeuchtigkeit, Wind usw...

Diese Daten werden alle 30 Minuten aktualisiert.

>**INFORMATION**
>
>OpenWeather bietet eine Liste mit Informationen für die nächsten 120 Stunden. Daher kennen wir je nach aktuellem Zeitpunkt nur einen Teil der Informationen bei D+4. Daher wird diese Vorhersage für D + 4 verfeinert, um im Verlauf des aktuellen Tages genauer zu werden. Aus diesem Grund können bestimmte Informationen, wie die auf D + 4 erreichte MAX-Temperatur, nur am Ende des Tages sinnvoll sein.

# Configuration

## Plugin-Setup

Dieses Plugin erfordert keine spezielle Konfiguration und muss nach der Installation einfach aktiviert werden.

## Gerätekonfiguration

Die Wetterausrüstung ist über das Menü zugänglich **Plugins → Wetter → Wetter**.

>**INFORMATION**
>
>Die Taste **+ Hinzufügen** erlaubt Ihnen, eine neue Wetterausrüstung hinzuzufügen.

Durch Klicken auf ein Gerät gelangen Sie direkt zu dessen Konfigurationsseite :

- **Ausrüstungsname** : Name der Wetterausrüstung.
- **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört.
- **Kategorie** : Ermöglicht die Auswahl der Gerätekategorie.
- **Optionen** :
    - **Aktivieren** : Ermöglicht es Ihnen, das Gerät zu aktivieren.
    - **Sichtbar** : Macht Ausrüstung sichtbar.
    - **Vollständige mobile Anzeige** : Wenn Sie das Kontrollkästchen aktivieren, können Sie alle Wetterinformationen auf Mobiltelefonen anzeigen.
    - **Bild Modus** : Aktivieren Sie das Kontrollkästchen, um Bilder anstelle von Symbolen im Widget anzuzeigen.

Anschließend müssen Sie die GPS-Koordinaten des Ortes eingeben, von dem Sie die Wetterinformationen abrufen möchten :

- **Breite** : Breitengrad des Ortes, dessen Wetter Sie abrufen möchten *(Unter dem Formular XX.XXXXXXX)*.
- **Längengrad** : Längengrad des Ortes, dessen Wetter Sie abrufen möchten *(Unter dem Formular XX.XXXXXXX)*.

Durch Klicken auf die Registerkarte **Befehle**, finden wir die Liste aller verfügbaren Befehle sowie die Möglichkeit, die Zahlenwerte zu protokollieren.

Der Befehl **Nummer** gibt einen Code an, der sich auf den aktuellen Zustand bezieht, unter dem Sie weitere Informationen finden können [an dieser Adresse](https://openweathermap.org/weather-conditions).
