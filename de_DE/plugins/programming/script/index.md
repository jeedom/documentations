# Skript-Plugin

Plugin zum Ausführen von Skripten (Shell, PHP, Ruby…) und http-Anforderungen zum Abrufen von Informationen in XML oder JSON.

# Plugin Konfiguration

Die Konfiguration ist sehr einfach. Nach dem Herunterladen des Plugins müssen Sie es nur noch aktivieren und fertig.

![configuration](./images/configuration.png)

Die einzige Möglichkeit besteht darin, dass jeedom die Skripte standardmäßig ablegt. Es wird empfohlen, sie nicht zu berühren.

# Gerätekonfiguration

Auf die Konfiguration der Skriptausrüstung kann über das Plugin / Programmiermenü zugegriffen werden

So sieht die Script-Plugin-Seite aus (hier bereits mit Ausrüstung) :

![liste des équipements](./images/liste_equipement.png)

Hier ist die Liste Ihrer Skripte. Sobald Sie auf ein Gerät klicken, erhalten Sie :

![équipement](./images/equipement.png)

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

- **Name der Skriptausrüstung** : Name Ihrer Skriptausrüstung
- **Kategorie** : Gerätekategorien (es kann zu mehreren Kategorien gehören)
- **Aktivieren** : macht Ihre Ausrüstung aktiv
- **Sichtbar** : macht es auf dem Dashboard sichtbar
- **Übergeordnetes Objekt** : Gibt das übergeordnete Objekt an, zu dem das Gerät gehört
- **Selbstverwirklichung** : Ermöglicht die Angabe eines Cron für die automatische Aktualisierung aller Befehle vom Typ "Info".
- **Verzögerung vor dem Aktualisieren der Informationen nach einer Aktion** : Geben Sie die Anzahl der Sekunden ein

![commandes](./images/commandes.png)
Hier finden Sie die Liste der Bestellungen :

- **Name** : Dieses Feld enthält den Namen, den Sie Ihrer Bestellung / Information geben möchten.
- **Symbol** : In diesem Feld können Sie Ihrem Namen ein Symbol zuordnen (in diesem Fall ersetzt Jeedom den Namen durch das Symbol im Dashboard).
- **Skripttyp** :
  - Der Typ **Http** : Ermöglicht das Senden einer Anforderung an ein externes Gerät, ohne unbedingt auf die Rückgabe dieses Befehls warten zu müssen. Das Beispiel, das als Unterstützung für den http-Typ dient, ist die Konfiguration einer Anforderung an eine Vera, ein Licht einzuschalten.
  - Der Typ **Skript** : Wird hauptsächlich zum Ausführen interner Jeedom-Skripte verwendet. Das Beispiel, das als Unterstützung für den Skripttyp dient, ist die Konfiguration des Temperaturüberwachungsskripts der Himbeere.
  - Der Typ **XML** : Ermöglicht das Abrufen von in XML codierten Informationen von einem Remote-Gerät. Das Beispiel, das als Unterstützung für den XML-Typ dient, ist die Konfiguration des Skripts zum Abfragen eines Öko-Geräts.
  - Der Typ **Json** : Ermöglicht das Abrufen von in JSON codierten Informationen von einem Remote-Gerät. Das Beispiel, das als Unterstützung für den JSON-Typ dient, ist die Konfiguration des Skripts zum Abfragen von Sickbeard (oder XBMC)).
- **der Typ** und die **Untertyp**
- Das Feld **Petition**
  - Dieses Feld muss die Abfrage selbst oder den Skriptpfad enthalten, wenn das Feld "Skripttyp" Skript ist. Die Schaltfläche "Durchsuchen"" : Mit dieser Option können Sie die Datei auswählen, die im internen Ordner Jeedom enthalten ist.

        > Auf diese Datei kann in SSH in zugegriffen werden ``/var/www/html/plugins/script/data/``. Zu Ihrer Information, der SSH-Befehl zum Zuweisen von Rechten ``www-data`` zu einer Datei ist : ``sudo chown www-data:www-Daten NOMDUSCRIPT.EXTENSION``. Beachten Sie, dass ein Skript zum Ausführen von Rechten über WWW-Daten verfügen muss.

  - Die Schaltfläche **Bearbeiten** : Mit dieser Option können Sie eine der im Verzeichnis enthaltenen Dateien mit einem internen Code-Editor bearbeiten und so auf den Dateicode zugreifen.
  - Die Schaltfläche **Neu** : ermöglicht das Erstellen einer Befehlsdatei.

        > Vergessen Sie nicht, den Namen der Datei und ihre vollständige Erweiterung einzugeben, da sonst Ihr hervorragendes Skript nicht funktioniert. Ohne Erweiterung kann Jeedom die mit Ihrer Datei verknüpfte Sprache nicht erkennen. CF. : Allgemeinheit
  - Die Schaltfläche **Löschen** : ermöglicht das Löschen einer Befehlsdatei.
- Das Feld **Optionen** : Feld mit variablen Optionen abhängig von der Wahl des Skripttyps.
- **Unit** : Dateneinheit (kann leer sein).
- **min / max** : Datengrenzen (können leer sein).
- **Chronik** : ermöglicht das Historisieren der Daten.
- **Anzeige** : ermöglicht die Anzeige der Daten im Dashboard.

> **Wichtig**
>
> Sonderzeichen sollten im Skriptpfad oder in seinen Parametern so weit wie möglich vermieden werden. Die erlaubten Zeichen sind : Zahlen, Buchstaben (Groß- oder Kleinschreibung)

> **Wichtig**
>
> Sie können im Anfragefeld (für http, json, xml) json eingeben, Sie müssen ihm nur `json voranstellen::`, Beispiel `json::{"clef":"valeur"}`

![exemple](./images/exemple.png)

Wird verwendet, um eine URL aufzurufen oder die Rückgabe einer URL abzurufen.

- ein Kontrollkästchen "SSL nicht aktivieren" : Wenn diese Option aktiviert ist, kann Jeedom auf Anfrage die Felder "Benutzer" und "Kennwort" nicht senden. Jeedom wird nicht versuchen, sich gegenüber dem Remote-Standort / der Remote-Maschine zu identifizieren.
- ein Kontrollkästchen "Leere Antwort zulassen" : Wenn diese Option aktiviert ist, kann Jeedom nicht auf eine Antwort warten oder eine Antwort auf den übertragenen Frame ignorieren. Im Allgemeinen prüfen wir, ob Jeedom einen "Curl-Fehler" zurückgibt : Leere Antwort vom Server".
- ein Kontrollkästchen "Niemals Fehler melden" : Ermöglicht es, im Fehlerfall keine Warnung auszulösen.
- ein Timeout-Feld" : Ohne Eingabe beträgt das Zeitlimit der Anforderung standardmäßig 2 Sekunden, andernfalls ist es den eingegebenen Wert wert.
- ein Feld "Maximale Versuche" : Standardmäßig maximal 4 Tests.
- ein "Benutzer" -Feld" : um einen Benutzernamen einzugeben.
- ein "Passwort" Feld" : um ein Passwort einzugeben.

# Die HTML-Auswahl

![Skript HTML](./images/script_html.png)

Ermöglicht das Übergeben einer Webseite (HTML-Datei), um einen obigen Wert abzurufen. Die Syntax ist dieselbe wie für jquery.

Das Optionsfeld enthält ein Feld "HTML-Datei-URL"" : Dieses Feld enthält daher den Link zu dem Computer, auf dem sich die betreffende HTML-Datei befindet.

# Die XML-Auswahl

![Skript XML](./images/script_xml.png)

Ermöglicht es Ihnen, XML wiederherzustellen und gezielt nach einem Wert darin zu suchen.

Das Optionsfeld enthält das Feld "URL der XML-Datei"" : Dieses Feld enthält daher den Link zu dem Computer, auf dem sich die betreffende XML-Datei befindet.

> **Wichtig**
>
> Es können nur Werte abgerufen werden, Attribute können nicht abgerufen werden.

# Die JSON-Wahl

![Skript JSON](./images/script_json.png)

Ermöglicht die Wiederherstellung von json und die gezielte Suche nach einem Wert darin.

Das Optionsfeld enthält ein Feld "JSON-Datei-URL"" : Dieses Feld enthält daher den Link zu dem Computer, auf dem sich die betreffende JSON-Datei befindet.

# Exemples

## Http : Eine Vera steuern

Das Beispiel basiert auf einer Vera und besteht aus dem Antreiben einer dimmbaren Glühbirne. Ich werde nicht näher darauf eingehen, wie eine Vera per http-Anfrage gesteuert werden kann. Das TLD-Forum ist voller Antworten. Außerdem entspricht das Beispiel meiner Materialart und muss an Ihre angepasst werden.

> **Spitze**
>
> Eine Methode für diejenigen, die nach dem Schreiben von http-Anfragen suchen. Überprüfen Sie zuerst die Syntax in Ihrem Browser und wechseln Sie dann zur Konfiguration unter Jeedom. Wenn ein Aktionsskript nicht funktioniert, können Sie durch Umschalten auf das Skript "Info / Andere" den zurückgegebenen Fehler sehen.

Lassen Sie uns gehen :

- Wir schaffen Ausrüstung : Zum Beispiel LUM KÜCHE (Ich denke, wir haben alle eine Küche zur Hand)
- Wir verknüpfen es mit einem übergeordneten Objekt : Mit VERA kann ich beispielsweise alle mit VERA verbundenen Bestellungen auf einem einzigen Elternteil zentralisieren.
- Wählen Sie Ihre Kategorie.
- Aktivieren Sie Ihre Ausrüstung, überprüfen Sie sie nicht sichtbar, wir werden etwas später sehen, wie Sie sie mit einer virtuellen (sexier, mehr WAF) verknüpfen können)
- Geben Sie zur Selbstaktualisierung nichts ein, es handelt sich um einen Impulsbefehl, der mit einem Knopfdruck oder einem Szenario verknüpft ist !
- Fügen Sie einen Skriptbefehl hinzu
- Denken Sie daran, zu speichern

Erklärungen :

- Name : 100%, weil wir ein Licht mit voller Leistung einschalten
- Skripttyp : http
- Typ : Aktion (dies ist ein Befehl)
- Untertyp : Standard
- Petition :

`` ''url
http://<IP_VERA>:3480/data_request?id=lu_action&output_format=json&DeviceNum=12&serviceId=urn:upnp-org:serviceId:Dimming1&action=SetLoadLevelTarget&newLoadlevelTarget=100
`` ''

> **Spitze**
>
> Die "100" am Ende der Anforderung entspricht dem Prozentsatz der zuzuweisenden Leistung. Wenn Sie also "0" am Ende der Anforderung setzen, entspricht dies dem Ausschalten der Glühlampe.

Mit der Schaltfläche "Test" können Sie Ihre Bestellung testen !

Sie können daher Bestellungen in derselben Ausrüstung multiplizieren, indem Sie beispielsweise eine Bestellung mit 60% für schwaches Licht aufgeben und eine dritte Bestellung mit 30% für Nachtfahrten erstellen, die in einem Szenario kombiniert werden sollen usw

Es ist auch möglich, einen Schieberegler-Befehl zu erstellen, indem Sie das Tag `#slider#` in der Abfrage :

`` ''url
http://<IP_VERA>:3480/data_request?id=lu_action&output_format=json&DeviceNum=12&serviceId=urn:upnp-org:serviceId:Dimming1&action=SetLoadLevelTarget&newLoadlevelTarget=#slider#
`` ''

> **Spitze**
>
> Wenn Ihr Befehl vom Typ Nachricht ist, können Sie die Tags ` verwenden#message#` und `#title#`, dasselbe für einen Farbtypbefehl mit dem Tag `#color#`, oder Slider-Typ mit `#slider#` oder Liste mit `#select#`

## Http : Benachrichtigung an XBMC senden

Ziel : Senden Sie eine Benachrichtigung an XBMC, wenn Sie eine Vordertür öffnen.

- Name : XBMC DRÜCKEN
- Skripttyp : http
- Typ : Aktion (dies ist ein Befehl)
- Untertyp : Standard
- Petition :

`` ''url
http://IP_DE_XBMC:8080/jsonrpc?request={ %22jsonrpc%22:%222.0%22,%22method%22:%22GUI.ShowNotification%22,%22params%22:{ %22title%22:%22Mouvement% 20Détecté%22,%22message%22:%22Porte% 20Entrée%22},%22id%22:1}
`` ''

Es liegt an Ihnen, dies beispielsweise in einem Szenario zu testen !

XBMC-API [hier](http://wiki.xbmc.org/index.php?title=JSON-RPC_API/v6) (Nur die mit "erforderlich" gekennzeichneten Felder sind obligatorisch)

Ziel : Senden Sie eine Benachrichtigung an XBMC, wenn die Temperatur einen bestimmten Schwellenwert unterschreitet

Nehmen Sie das obige Beispiel :

- Ersetzen Sie „Movement%20Detected“ durch „Risk%20of%20freeze“
- Ersetzen Sie `Door%20Entry` durch `Temperature%20exterior%20:% 20#[EXTERIEUR][EXTERIEUR][TEMPERATURE]#`

Testen Sie ein Szenario `#[EXTERIEUR][EXTERIEUR][TEMPERATURE]# < 5` par exemple

Aktion : Starten Sie das Skript über eine virtuelle Ausrüstung, die mit Ihrem Skript verknüpft ist !

## SCRIPT

Das Schönste, aber nicht das Einfachste zu erklären.

**Voraussetzungen : wissen, wie man ein Skript in PHP, Python, Perl oder Ruby entwickelt.**

>**Wichtig**
>
> Die Erweiterung Ihres Skripts muss unbedingt dem Typ entsprechen. In der Tat basiert Jeedom auf der Erweiterung des Skripts für den Start der ausführbaren Datei
>
> Wenn Ihr Dateiname nicht enthält :
>
> - .php .py .pl .rb
>

Das Skript-Plugin startet eine Shell, die es basierend auf der Direktive der 1. Zeile (shebang) ausführt ).
Beispiel :

`` ''bash
#!/ bin / csh -f
#!/ bin / ksh
#!/ usr / bin / env python3
#!/ usr / bin / env php
#!/ usr / bin / env Knoten
Usw. ...
`` ''

Das Skript zur Überwachung der Himbeertemperatur dient als Beispiel für die Verwendung des Skripttyps : Script

Nach dem Herunterladen des Skripts können Sie über die Schaltfläche "Durchsuchen" die Datei temp\_rasp.php auswählen.

Aus Neugier können Sie den Inhalt der Datei anzeigen, indem Sie auf die Schaltfläche "Bearbeiten" klicken. Sie sollten den folgenden Code erhalten :

Dies ist ein PHP-Skript, das außerhalb von Jeedom wiederverwendet werden kann !

`` ''php
<?php
$temp = shell_exec("cat /sys/class/thermal/thermal_zone0/temp");
$temp = $temp / 1000;
$temp = round($temp,1);
echo $temp;
?>
 `` ''

Notiz : konkret ist es die PHP "Echo" -Funktion, die Jeedom den Wert gibt

### Die Parameter

Holen Sie sich Jeedom's Informationen, um sie in einem Skript zu verwenden. Die Wiederherstellung hängt von der Art des verwendeten Skripts ab :

- In der Leitung : `/var/www/html/plugins/script/data/my_script.php my_value`, das Argument `my_value` est une chaîne de caractères (fixe) récupérée dans le Skript php dans le tableau d'arguments `$argv` voir <https://www.php.net/manual/fr/reserved.variables.argv.php> für weitere Details.
- Wir haben zuvor gesehen, dass es möglich ist, dynamische Werte aus Jeedom abzurufen.
- In der Leitung : `/var/www/html/plugins/script/data/radio.py VOL #slider#`, das Argument `#slider#` wird auf diese Weise `$argv[2]` abgerufen. Wenn das Skript von Jeedom ausgeführt wird, ersetzt es automatisch `#slider#` durch den (numerischen) Wert des Schiebereglers. siehe Google für Details zum Abrufen von Parametern in Python.

- Stärker : Möglicherweise können alle Variablen, auf die Jeedom zugreifen kann, vom Skript-Plugin verwendet werden :
  - Sie möchten den Wert der Küchentemperatur wiederherstellen, um sie außerhalb von Jeedom zu speichern ?
  - Überspringen `#[MAISON][CUISINE][Température]#` als Parameter an das Skript und Jeedom ersetzt es durch den beim Senden gelesenen Wert.

Empfehlung zum Testen der Parameter im PHP-Skript :

`` ''php
if (isset($argv)) {
    foreach ($argv als $arg) {
        $argList = explode('=', $arg);
        if (isset($argList[0]) && isset($argList[1])) {
            $_GET[$argList[0]] = $argList[1];
        }
    }
}
`` ''

## XEinzel-ML

Hier ist das Format des Standard-XML :

`` ''xml
<root>
    <led0>1</led0>
    <leds>
        <led1>toto</led1>
    </leds>
</root>
`` ''

Wenn Sie den Wert von led0 in der Abfrage haben möchten, geben Sie led0 ein. Si vous voulez la valeur de la led1 qui est le fils de leds vous mettez leds &gt; led1.

Notez que l'élément racine &lt;root&gt; n'est pas à préciser dans le champ Petition.

## XKomplexes ML

`` ''xml
<root>
    <led0>1</led0>
    <leds>
        <led1>toto</led1>
    </leds>
    <leds>
        <led1>tata</led1>
    </leds>
</root>
 `` ''

Die Syntax lautet :

`leds > 1 > led1`, was Tata als Antwort gibt, wobei 1 die Zeilennummer des Arrays ist !

## XKomplexer ML

`` ''xml
<AKT_Data ID="SMS-Liste" ZeitSt="01.05.2017 18:55">
    <MesPar DH="HBCHa" StrNr="2167" Typ="02" Var="02">
        <Name>Tresa - Ponte Tresa, Rocchetta</Name>
        <Datum>01.05.2017</Datum>
        <Zeit>18:50</Zeit>
        <Wert>268.56</Wert>
        <Wert dt="-24h">268.51</Wert>
        <Wert Typ="delta24">0.051</Wert>
        <Wert Typ="m24">268.52</Wert>
        <Wert Typ="max24">268.56</Wert>
        <Wert Typ="min24">268.50</Wert>
    </MesPar>
    <MesPar DH="HBCHa" StrNr="2265" Typ="03" Var="02">
        <Name>Inn - Tarasp</Name>
        <Datum>01.05.2017</Datum>
        <Zeit>18:50</Zeit>
        <Wert>4.85</Wert>
        <Wert dt="-24h">7.98</Wert>
        <Wert Typ="delta24">-3.130</Wert>
        <Wert Typ="m24">6.15</Wert>
        <Wert Typ="max24">7.98</Wert>
        <Wert Typ="min24">4.85</Wert>
    </MesPar>
    <MesPar DH="HBCHa" StrNr="2270" Typ="02" Var="32">
        <Name>Doubs - Combe des Sarrasins</Name>
        <Datum>01.05.2017</Datum>
        <Zeit>18:00</Zeit>
        <Wert>500.65</Wert>
        <Wert dt="-24h">500.65</Wert>
        <Wert Typ="delta24">0.000</Wert>
        <Wert Typ="m24">500.65</Wert>
        <Wert Typ="max24">500.65</Wert>
        <Wert Typ="min24">500.64</Wert>
    </MesPar>
</AKT_Data>
`` ''

Informationen aus dem Feld Wert des 1. Blocks abrufen:

`MesPar>0>Wert>0` was also "268.56 "

Um das nächste Element in der Wert "Struktur" zurückzugeben, müssen Sie nur die Bestellnummer in der Struktur angeben. Was für das Element `<Wert Typ="delta24"> 0.051</Wert> ` den folgenden Code :

`MesPar>1>Wert>2`

Um zum nächsten "MyPar" -Block zu gelangen, müssen Sie daher den Index entsprechend ändern : die 1 mal 2 zum Beispiel.

Achtung : Wenn sich die Reihenfolge in der XML-Datei ändert, funktioniert die Anforderung nicht mehr. Die Anforderung muss entsprechend der zurückgegebenen Bestellung angepasst werden.

## JSON

Wie beim XML-Typ ist es möglich, Informationen aus einer JSON-Rückgabe zu lesen.

Zur Erklärung werde ich mich auf JSON-Informationen mit der Sickbeard-Anwendung (boo… cpasbien) stützen, aber hier nur auf die Haupttechnik, nicht auf das Tool!

Der Zugriff auf diese Datei ist über die folgende URL möglich :

`http://<IP_DELAMACHINEQUIEBERGESICKBEARD>:8083/api/XXXX/?cmd=history&limit=3`

Notiz : XXXX ist die für jeden SICKBEARD spezifische API-Schlüsselnummer.

Bevor Sie mit der Konfiguration des JSON-Skript-Plugins beginnen, müssen Sie zunächst die wiederherzustellenden Informationen korrekt identifizieren., denn hier werden wir einen Begriff des Arrays in die Rückgaben integrieren.

Überprüfen Sie die Anzeige von Informationen in Ihrem Browser (Test in Chrome).

Beispiel für die Rückgabe :

`` ''json
{
    "data": [
        {
            "date": "10.09.2014 01:37",
            "episode": 4,
            "provider": "RNT",
            "quality": "SD-TV",
            "resource": "XXX",
            "Ressourcenpfad": "XXXX",
            "season": 2,
            "Name anzeigen": "Totovaalaplage S2E4",
            "status": "Downloaded",
            "tvdbid": XXXXX
        },
        {
            "date": "10.09.2014 01:36",
            "episode": 3,
            "provider": "RNT",
            "quality": "SD-TV",
            "resource": "XXXX",
            "Ressourcenpfad": "XXX",
            "season": 2,
            "Name anzeigen": "Totovaalaplage S2E3",
            "status": "Downloaded",
            "tvdbid": XXXXX
        },
        {
            "date": "10.09.2014 01:21",
            "episode": 1,
            "provider": "Cpasbien",
            "quality": "SD-TV",
            "resource": "XXXX",
            "Ressourcenpfad": "XXXX",
            "season": 1,
HIER --> "show_name": "Totovaplusauski aber Totovaalaplage S1E1",
            "status": "Snatched",
            "tvdbid": XXXX
        }
    ],
    "message": "",
    "result": "success"
}
`` ''

In der Hypothese, in der wir den show\_name des 3. Elements in php (HIER markiert) zurückgeben möchten, müssten wir dies tun : data> 2> show\_name, der Rückgabearray-Index, der bei Null beginnt.

In diesem Beispiel gibt die Schaltfläche "Test" "Totovaplusauski aber Totovaalaplage S1E1" zurück".

Präzisierungen :

Beachten Sie die Syntax des Abfragebefehls vom Typ element0> Array-Index> element1

Nachteile :

- Mit dieser Methode kann jeweils nur ein Element wiederhergestellt werden.
- Wenn Sie alle Werte von "show\_name" zurückgeben möchten, ist dies leider nicht möglich. Sie müssen das Skript so oft wie nötig duplizieren.

## HTML

Hier werden wir versuchen, die letzte FML abzurufen.

Zuerst müssen Sie die URL konfigurieren :

``http://www.viedemerde.fr``

Dann müssen Sie den "Pfad" der letzten FML finden. Gehen Sie dazu zur Website, klicken Sie mit der rechten Maustaste auf den gewünschten Artikel und überprüfen Sie den Artikel, den Sie erhalten :

![Beispiel HTML 1](./images/exemple_HTML_1.png)

Dies ist der komplexeste Teil und erfordert eine kleine Analyse. Hier befindet sich mein Text in einem "a" -Tag, das sich in einem Element vom Typ p befindet, das ein Post-Artikel der Klasse div ist". Also muss ich das erste div-Element der Klasse "post" und "article" auswählen, dann das erste Element p und ich bekomme alles in den darin enthaltenen "a" -Tags. Also habe ich : "div.post.article:erste p:zuerst a".

Also bekommen wir :

![Beispiel HTML VDM](./images/exemple_HTML_VDM.png)

Für ein Update in Echtzeit ist es möglich, ein Update zu erstellen.

> **Spitze**
>
> Bei der Installation eines Update-Cron aktiviert Jeedom automatisch das Kontrollkästchen Ereignis. Dies ist völlig normal.

Hier können Sie sich dann ein Szenario vorstellen, das Ihnen per SMS die letzte FML sendet.
