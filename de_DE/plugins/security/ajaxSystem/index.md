# Ajax-System

## Configuration

>**WICHTIG**
>
>Um ein Echtzeit-Feedback zu erhalten, ist es UNBEDINGT notwendig, dass Ihr Jeedom von außen zugänglich ist (externe Zugriffs-URL verwendet .))

Die Konfiguration des Plugins ist sehr einfach und erfolgt in 2 Schritten : 

- Herstellen der Verbindung zwischen Ihrer Freiheit und Ihrem Alarm
- Hinzufügen einer E-Mail-Freigabe zum Melden von Ereignissen  

>**WICHTIG**
>
>Ein wichtiger Punkt Ajax löst keinen globalen Alarm aus, wenn ein Alarm ausgelöst wird, sondern erhöht den Status des Melders, der den Alarm ausgelöst hat (Ereignisbefehl)

>**WICHTIG**
>
>Der Daemon wird nur für den SIA-Teil verwendet. Wenn Sie es deaktivieren, kommen immer noch Informationen aus der Cloud zurück. Sie können es daher deaktivieren, wenn Sie den SIA-Teil nicht verwenden

## Compatibilité

Sie finden [Hier](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=ajaxSystem) die Liste der Module, die mit dem Plugin kompatibel sind

### Link-Konfiguration 

Um die Verbindung zwischen Ihrem Jeedom und Ihrem Ajax-Alarm herzustellen, gehen Sie zu "Plugin" -> "Plugin-Verwaltung" -> "Ajax-System", klicken Sie auf "Verbinden", geben Sie Ihre Ajax-Kennungen ein und klicken Sie auf "Validieren"".

>**WICHTIG**
>
>Wenn Sie ein professionelles Konto haben, sollten Sie es hier nicht verwenden, Sie müssen unbedingt ein einfaches Benutzerkonto verwenden

>**HINWEIS**
>
> Jeedom speichert Ihre Ajax-Anmeldeinformationen absolut nicht : Sie werden nur für die erste Anfrage an Ajax verwendet und haben das Zugriffstoken und das Aktualisierungstoken. Das Aktualisierungstoken ermöglicht die Wiederherstellung eines neuen Zugriffstokens mit einer Lebensdauer von nur wenigen Stunden.

>**HINWEIS**
>
> Sobald die Verbindung hergestellt ist, werden alle Anforderungen über unsere Cloud gesendet. In der Cloud wird Ihr Zugriffstoken jedoch zu keinem Zeitpunkt gespeichert, sodass nicht nur mit der Jeedom-Cloud auf Ihren Alarm reagiert werden kann. Für jede Aktion benötigen Sie unbedingt die Kombination aus dem Zugriffstoken Ihres Jeedom und einem Schlüssel, der nur unserer Cloud bekannt ist 

### Konfiguration der Ereignisberichterstattung

Gehen Sie in der Ajax-Anwendung zum Hub und dann in den Einstellungen (kleines Zahnrad oben rechts) zum Benutzer und fügen Sie den Benutzer hinzu : ajax@jeedom.com

>**HINWEIS**
>
>Die Einladung bleibt und bleibt immer ausstehend, das ist normal

## Ausrüstung 

Sobald die Konfiguration auf "Plugin" -> "Plugin-Verwaltung" -> "Ajax-System" steht, müssen Sie nur noch synchronisieren, Jeedom erstellt automatisch alle Ajax-Geräte, die mit Ihrem Ajax-Konto verknüpft sind. 

### Bewegungsmelder

Kleine Besonderheit beim Bewegungsmelder, es geht nicht um die permanente Bewegungserkennung. Tatsächlich geht es nur auf, wenn der Alarm aktiv ist und durch den Ereignisbefehl

### Öffnungsmelder

Für ihn keine Sorge, Sie haben Echtzeit-Status der Fenster- / Türöffnungs- / Geschlossen-Informationen.

## SIA

>**WICHTIG**
>
> Diese Funktion ist derzeit nicht mit RPIs kompatibel und scheint mit Debian 11 (das derzeit nicht offiziell mit jeedom kompatibel ist, weil zu viele Plugins es nicht unterstützen) nicht richtig zu funktionieren)

Es ist auch möglich, den Ajax-Alarm über das SIA-Protokoll mit Jeedom zu verbinden, was den Vorteil hat, dass es lokal ist (keine Cloud), aber nur Informationen empfangen kann (keine Alarmsteuerung möglich)).

>**WICHTIG**
>
> Wenn Sie in Python sind <3.8 (Debian 10), oder wenn Sie den `ImportError . erhalten: kann den Namen 'CommunicationsProtocol' von 'pysiaalarm' nicht importieren gehen Sie zu "Einstellungen" -> "System" -> "Konfiguration" dann "OS / DB" Registerkarte dann in "System Tools" klicken Sie auf "Öffnen" vor "System Verwaltung". Und mach den Befehl `sudo pip3 install pysiaalarm == 3.0.0b9`

## Konfigurieren des AIS

Die Konfiguration des SIA ist recht einfach, unter "Plugin" -> "Plugin Management" -> "Ajax Systems" haben Sie : 
- den SIA-Daemon tragen
- das SIA-Konto
- der SIA-Verschlüsselungsschlüssel

Sie müssen dann zur Ajax Systeme-Anwendung (von Ihrem Telefon aus) gehen, zu "Geräte" gehen, dann auf den Hub klicken, zu seiner Konfiguration gehen (Zahnrad oben rechts), zu "Überwachungszentrum" gehen und die Informationen eingeben : 

- Hafen (der in Jeedom)
- SIA-Konto (das gleiche in Jeedom)
- Verschlüsselungsschlüssel (idem)
- ip : setze die lokale IP von Jeedom

Sie können auch die Häufigkeit der Servicetests von 1 Minute auf 24 Stunden ändern (um die Belastung Ihres Jeedom zu reduzieren).

Wenn alles in Ordnung ist, sollten Sie normalerweise sehen, dass sich die "Zentrale" in "Verbunden" ändert"

>**WICHTIG**
>
> Bestimmte Informationen werden nur zurückgegeben, wenn das AIS konfiguriert ist

# FAQ

>**MQTT-Setup**
>
>In der Konfiguration des Plugins hat man die Möglichkeit für den SIA-Teil in mqtt zu übergeben, es wird freiwillig nicht erklärt wie, da die Implementierung relativ komplex ist. Die Option ist nur dazu da, ein Kundenbedürfnis zu erfüllen.
