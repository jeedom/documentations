# Geoloc-Plugin

Plugin zum Verwalten von Koordinaten und Berechnen der Entfernung zwischen 2 Punkten, der Fahrzeit (mit dem Auto) zwischen 2 Punkten sowie der Entfernung.

# Configuration

Sobald das Plugin über den Markt installiert und aktiviert ist, greifen Sie über auf die Seite des Geolocation-Plugins zu :

![geoloc28](../images/geoloc28.jpg)

Hier finden Sie alle Ihre Geoloc-Geräte :

![geoloc29](../images/geoloc29.jpg)

> **Spitze**
>
> Wie an vielen Stellen in Jeedom wird durch Platzieren der Maus ganz links ein Schnellzugriffsmenü angezeigt (Sie können es in Ihrem Profil immer sichtbar lassen).

Sobald ein Gerät ausgewählt ist, erhalten Sie :

![geoloc screenshot1](../images/geoloc_screenshot1.JPG)

L'onglet « Général » permet de choisir le nom de l'équipement, l'objet parent ainsi que son état et sa visibilité. L'onglet « Commande » permet de rajouter les informations que nous voulons obtenir. Sobald die Ausrüstung hinzugefügt wurde, haben wir die Wahl zwischen drei Arten von Steuerungen : fest, dynamisch und distanziert.

![geoloc screenshot2](../images/geoloc_screenshot2.jpg)

## Fixe

Stellt einen Punkt mit Koordinaten dar, die sich nicht ändern. Zum Beispiel die Koordinaten Ihres Hauses, Ihrer Arbeit ... Sie müssen nur die Koordinaten im Formular notieren : Breite, Länge.

![geoloc3](../images/geoloc3.jpg)

Pour trouver les coordonnées de votre position fixe, allez simplement sur Google map : <https://www.google.com / maps / Vorschau> . Wenn Sie nach einer Adresse suchen, befinden sich die Kontaktdaten in der URL-Adresse, z. B. für 25 rue de Mogador :

![geoloc4](../images/geoloc4.jpg)

Sie können auch mit der linken Maustaste auf die Karte klicken. Die Koordinaten werden in der kleinen Karte oben links angezeigt.

![geoloc4](../images/geoloc4.jpg)

## Dynamique

Stellt einen Punkt mit variablen Koordinaten dar, das Objekt bewegt sich. Dies ist normalerweise Ihr Laptop. Diese Bestellung enthält daher die zuletzt gesendeten Kontaktdaten, bis Sie neue senden. Die URL zum Aktualisieren dieses Befehls lautet :

``\.#URL\._JEEDOM\.#/core/api/jeeApi.php?api=\.#API\._KEY\.#&type=geoloc&id=\.#ID\._CMD\.#&value=%LOC``

\.#URL\._JEEDOM\.# entspricht Ihrer Jeedom-Zugriffs-URL. Dies ist (sofern Sie nicht mit Ihrem lokalen Netzwerk verbunden sind) die Internetadresse, mit der Sie von außen auf Jeedom zugreifen. Vergessen Sie nicht, den Port sowie / jeedom / anzugeben.

api=\.#API\._KEY\.# entspricht Ihrem API-Schlüssel, der für Ihre Installation spezifisch ist. Um es zu finden, können Sie entweder zum Géoloc-Plugin gehen, es wird direkt in der URL angegeben.

![geoloc5](../images/geoloc5.jpg)

Soit dans le menu « Général », puis « Administration » et « Konfiguration », en activant le mode Expert vous verrez alors une ligne clé API.

![geoloc6](../images/geoloc6.jpg)

&lt;id=\.#ID\._CMD\.# entspricht der ID Ihrer Bestellung. Une fois que vous avez donné un nom à votre commande de Géolocalisation, déterminé son type et sauvegardé, un numéro apparaît dans la case « \.# » devant le nom votre commande.

![geoloc7](../images/geoloc7.jpg)

``%LOC`` entspricht Ihren Koordinaten in der Form Breite, Länge.

Sie müssen daher einen HTTP-POST für diese Adresse durchführen, indem Sie% LOC durch Ihre Kontaktdaten ersetzen.

# Android Beispiel mit Tasker

Achtung : Für dieses Beispiel benötigen Sie die Tasker-App für Android
(<https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm>). Dans l'onglet « Tâches », nous rajoutons une nouvelle tâche ici appelée « Jeedom ».

![geoloc8](../images/geoloc8.jpg)

Nous y ajoutons une première action, dans la catégorie « Divers », nous sélectionnons « Obtenir la localisation ».

![geoloc9](../images/geoloc9.jpg)

![geoloc10](../images/geoloc10.jpg)

Wir werden jede Quelle verwenden, um unsere Position zu erhalten, und wir werden ein Zeitlimit von 30 Sekunden festlegen, damit Tasker die hat
Zeit, unsere Kontaktdaten zu erhalten.

![geoloc11](../images/geoloc11.jpg)

![geoloc12](../images/geoloc12.jpg)

Ein zu kurzer Zeitrahmen ermöglicht möglicherweise nicht das Abrufen von Kontaktdaten oder ungenaue Kontaktdaten. Dies gilt auch für den Quellentyp. Nous ajoutons une deuxième action, dans la partie « Réseau » cette fois, nous sélectionnons « Post HTTP ».

![geoloc13](../images/geoloc13.jpg)

![geoloc14](../images/geoloc14.jpg)

Dans la case « Serveur :Port » nous copions notre URL complétée sauf pour la partie %LOC.

![geoloc15](../images/geoloc15.jpg)

![geoloc16](../images/geoloc16.jpg)

Lorsque nous lançons notre tâche « Jeedom », une icône devrait vous informer de l'utilisation de votre GPS dans votre barre de notification.

![geoloc17](../images/geoloc17.jpg)

Une fois le délai écoulé, nous cliquons sur « tester » dans Jeedom et les coordonnées de notre portable apparaissent alors dans le popup. Der Tasker hat die Variable% LOC automatisch durch Ihre Kontaktdaten ersetzt.

![geoloc18](../images/geoloc18.jpg)

Jetzt müssen Sie nur noch ein Szenario in Tasker erstellen, das diese Aufgabe bei Bedarf startet. Zum Beispiel jede Stunde, wenn Sie eine Verbindung über WLAN herstellen…

# Entfernung, Reisezeit und Reisestrecke

Berechnet die Entfernung, Reisezeit (mit dem Auto, mit Google Maps) oder die Entfernung einer Reise (mit dem Auto, mit Google Maps) zwischen zwei Punkten. Es ist daher erforderlich, mindestens zwei Befehle bereits ausgefüllt zu haben. Hier haben wir die festen Koordinaten unseres Hauses sowie die aktualisierten Koordinaten unseres Handys. So können wir den Abstand zwischen den beiden berechnen. Nous sélectionnons « Distance » en type et nos deux commandes précédentes dans les options. Nach dem Speichern verwenden wir die Testschaltfläche und die Entfernung wird dann im Popup angezeigt. Hier 1,34 km.

![geoloc19](../images/geoloc19.jpg)

Ebenso, wenn Sie die Reisezeit oder die Entfernung einer Reise wollen, es
muss jeweils in Typ wählen : "Reisezeit "oder" Entfernung
Reise".

Dieses Plugin funktioniert wie ein Modul, das heißt, wenn es einmal gespeichert ist, finden wir es in der Liste der Aktionen oder Befehle. Daher ist es sehr einfach, es beispielsweise beim Erstellen von Szenarien zu verwenden. Wir können zum Beispiel ein Szenario durchführen, das zum Beispiel auf der Entfernung zwischen unserem Laptop und dem Haus basiert.

# Beispielszenario

Dans la partie « Scénario », nous créons un scénario nommé « Géoloc TV » qui nous permet d'allumer la TV quand nous sommes à moins de 250 m de notre maison. Achtung : Positionierungssysteme sind nicht auf den nächsten Meter genau. Denken Sie daran, bei der Erstellung Ihrer Szenarien einen Spielraum einzuhalten. Dans « Mode de scénario » nous choisissons « Provoqué » et en « Déclencheur » nous ajoutons notre portable. In der Tat werden wir das Szenario auslösen, wenn die Koordinaten unseres Mobiltelefons aktualisiert werden.

![geoloc20](../images/geoloc20.jpg)

Nous ajoutons un élément « Si / Alors / Sinon » avec comme condition une distance inférieure à 250 m et comme action la mise sous tension de la TV.

![geoloc21](../images/geoloc21.jpg)

Nous n'avons rien mis dans la partie « Sinon » ainsi il ne se passera rien si je suis à plus de 250 m. Nach dem Speichern können wir uns das Protokoll ansehen. Wir sehen hier, dass Jeedom den Abstand zwischen dem Laptop und dem Haus getestet hat und da dieser mehr als 250 m beträgt, ist nichts passiert.

![geoloc22](../images/geoloc22.jpg)

Für unseren Test überprüfen wir, ob der Fernseher ausgeschaltet ist. Das Widget zeigt uns einen Verbrauch von 0 Watt an.

![geoloc23](../images/geoloc23.jpg)

Wir nähern uns unserem Haus und beginnen die Aufgabe auf Tasker. Wir können durch Testen der Entfernung sehen, dass sie jetzt 0,03 km beträgt. Wir sind also weit unter 250 m.

![geoloc24](../images/geoloc24.jpg)

Der Szenarioteil informiert uns darüber, dass er kürzlich gestartet wurde.

![geoloc25](../images/geoloc25.jpg)

Eine Tour durch das Protokoll zeigt, dass es nach der Aktualisierung der Koordinaten des Mobiltelefons gestartet wurde und dass die Entfernung viel weniger als 0,25 km betrug.

![geoloc26](../images/geoloc26.jpg)

Das TV-Plugin auf dem Startbildschirm zeigt an, dass es jetzt mit Strom versorgt wird.

![geoloc27](../images/geoloc27.jpg)

Hier ist ein Beispiel für die Verwendung des Geolocation-Plugins.

Natürlich haben wir den HTTP-POST von einem Android-Smartphone aus durchgeführt, aber es ist durchaus denkbar, dass ein Tablet (mit dem Internet) oder sogar ein Laptop mit einem Skript das Gleiche tun kann, um seine Details abzurufen und zu senden.
