Plugin zum Ausführen von Skripten (Shell, PHP, Ruby…),
http-Anforderungen zum Abrufen von Informationen in XML oder JSON.

Plugin Konfiguration 
=======================

Die Konfiguration ist sehr einfach, nach dem Herunterladen des Plugins ist es
Sie aktivieren es einfach und das wars.

![script1](../images/script1.PNG)

Die einzige Option ist, wo jeedom die Standardskripte setzt, es
wird empfohlen, es nicht zu berühren.

Gerätekonfiguration 
=============================

Die Konfiguration der Skriptausrüstung ist über das Menü zugänglich
Plugin :

![script2](../images/script2.PNG)

So sieht die Skript-Plugin-Seite aus (hier mit bereits 1
Ausrüstung) :

![script3](../images/script3.PNG)

Hier ist die Liste Ihrer Skripte. Sobald Sie klicken
auf Ausrüstung bekommen Sie :

![script4](../images/script4.PNG)

> **Spitze**
>
> Setzen Sie die Maus wie an vielen Stellen auf Jeedom ganz links
> ruft ein Schnellzugriffsmenü auf (Sie können
> von deinem Profil immer sichtbar lassen).

Hier finden Sie die gesamte Konfiguration Ihrer Geräte :

-   **Name der Skriptausrüstung** : Name Ihrer Skriptausrüstung

-   **Kategorie** : Gerätekategorien (es kann gehören
    mehrere Kategorien)

-   **Activate** : macht Ihre Ausrüstung aktiv

-   **Sichtbar** : macht es auf dem Dashboard sichtbar

-   **Übergeordnetes Objekt** : gibt das übergeordnete Objekt an, zu dem es gehört
    Ausrüstung

-   **Selbstverwirklichung** : Ermöglicht die Angabe eines Aktualisierungs-Cron
    automatisch für alle Befehle vom Typ Info.

Nachfolgend finden Sie die Liste der Bestellungen :

-   **Name** : Dieses Feld enthält den Namen, dem Sie geben möchten
    Ihre Bestellung / Informationen.

-   **Symbol** : In diesem Feld können Sie Ihrem Namen ein Symbol zuordnen (in
    Dieser Jeedom-Fall ersetzt den Namen durch das Symbol im Dashboard..

-   **Skripttyp** :

    -   Der http-Typ : ermöglicht das Senden einer Anfrage an ein Gerät
        extern, ohne unbedingt auf die Rückgabe dieses Befehls zu warten.
        Das Beispiel, das als Unterstützung für den http-Typ dient, ist das
        Konfiguration einer Anfrage an eine Vera zum Einschalten
        ein Licht.

    -   Der Skripttyp : Wird hauptsächlich zum Ausführen von Skripten verwendet
        innerhalb von Jeedom. Das Beispiel, das den Typ unterstützt
        Skript ist die Konfiguration des Temperaturüberwachungsskripts
        Himbeere auf dem Markt erhältlich.

    -   XML-Typ : ermöglicht das Abrufen von Informationen, die in codiert sind
        XML von entfernten Geräten. Das Beispiel, das als dienen wird
        XML-Typunterstützung ist die Skriptkonfiguration für
        ein Öko-Gerät abfragen.

    -   Der JSON-Typ : ermöglicht das Abrufen von Informationen, die in codiert sind
        JSON von einem Remote-Gerät. Das Beispiel, das als dienen wird
        Unterstützung für Typ JSON ist die Skriptkonfiguration für
        befragen Sickbeard (oder XBMC).

-   **der Typ** und die **Unterart**

-   Das Feld **Petition**

    -   Dieses Feld muss die Abfrage selbst oder den Pfad der enthalten
        Skript, wenn das Feld "Skripttyp" Skript ist. Die Schaltfläche
        "Reise" : Mit dieser Option können Sie die in der Datei enthaltene Datei auswählen
        interne Datei bei Jeedom.

        > **Spitze**
        >
        > Auf diese Datei kann in SSH zugegriffen werden
        > in / usr / share / nginx / www / jeedom / Plugins / script / core / resources /.
        > Zu Ihrer Information, der SSH-Befehl zum Zuweisen von WWW-Datenrechten
        > zu einer Datei ist : Sudo Chown
        > www-data:www-data NOMDUSCRIPT.EXTENSION. Beachten Sie, dass für
        > Führen Sie ein Skript aus, es muss über WWW-Datenrechte verfügen.

    -   Die Schaltfläche **Bearbeiten** : Ermöglicht das Bearbeiten mit einem Editor
        interner Code eine der im Verzeichnis enthaltenen Dateien
        Zugriff auf den Dateicode ermöglichen.

    -   Die Schaltfläche **Neu** : ermöglicht das Erstellen einer Befehlsdatei.

        > **Spitze**
        >
        > Vergessen Sie nicht, den Namen der Datei sowie deren Namen einzugeben
        > volle Ausdehnung auf Schmerzen, Ihr großartiges Skript nicht zu sehen
        > nicht funktionieren. Ohne Erweiterung wird Jeedom es nicht wissen
        > Erkennen Sie die mit Ihrer Datei verknüpfte Sprache. CF :
        > Allgemeinheit

    -   Die Schaltfläche **Entfernen** : ermöglicht das Löschen einer Datei
        der Ordnung.

    -   Die Schaltfläche **Aktie** : eines der wichtigsten und danach
        validierte die CGU-Entwickler in Ihrem Profil auf dem Markt,
        Ermöglicht es Ihnen, Ihre Kreation mit der Community zu teilen.

-   Das Feld **Optionen** : Feld mit variablen Optionen je nach Auswahl
    Skripttyp.

-   **Einheit** : Dateneinheit (kann leer sein).

-   **min / max** : Datengrenzen (können leer sein).

-   **historisieren** : ermöglicht das Historisieren der Daten.

-   **Anzeige** : ermöglicht die Anzeige der Daten im Dashboard.

-   **Ereignis** : Rückgabe im Falle von Ereignissen. Im Fall von RFXcom
    Dieses Kontrollkästchen muss immer aktiviert sein, da Sie keine Abfrage durchführen können
    ein RFXcom-Modul.

-   **Memcache zulassen** : ermöglicht Jeedom, den Cache für zu verwenden
    Wert (Standard 5 Minuten), bevor das Skript erneut ausgeführt werden muss
    neuer Wert.

-   **Lebenslanger Cache** : Ermöglicht das Ändern der Lebensdauer des Caches
    (Standard 5 min).

> **Wichtig**
>
> Vermeiden Sie so viel wie möglich im Skriptpfad oder in
> die Parameter davon Sonderzeichen. Die Charaktere
> erlaubt sein : Zahlen, Buchstaben (Groß- oder Kleinschreibung)

![script5](../images/script5.PNG)

Ermöglicht das Aufrufen einer URL oder das Abrufen der Rückgabe einer URL.

-   ein Kontrollkästchen "SSL nicht aktivieren" : Wenn aktiviert, wird Jeedom zugelassen
    die Felder "Benutzer" und "Passwort" nicht an zu senden
    die Anfrage. Jeedom wird nicht versuchen, sich mit zu identifizieren
    Remote-Standort / Maschine.

-   ein Kontrollkästchen "Leere Antwort zulassen" : wenn aktiviert, erlaubt
    Jeedom, nicht auf eine Antwort zu warten oder eine Antwort auf zu ignorieren
    der übertragene Rahmen. Im Allgemeinen prüfen wir, ob Jeedom uns eine "Locke" sendet
    Fehler : Leere Antwort vom Server".

-   ein Kontrollkästchen "Niemals Fehler melden" : lass uns nicht
    im Fehlerfall keine Warnung auslösen.

-   ein Timeout-Feld" : ohne informiert zu werden, das Timeout der Anfrage
    Der Standardwert ist 2 Sekunden, andernfalls ist der eingegebene Wert wert.

-   ein Feld "Maximale Versuche" : Standardmäßig maximal 4 Tests.

-   ein "Benutzer" -Feld" : um einen Benutzernamen einzugeben.

-   ein "Passwort" Feld" : um ein Passwort einzugeben.

Die HTML-Auswahl 
=============

![script8](../images/script8.PNG)

Analysieren Sie eine Webseite (HTML-Datei), um einen Wert abzurufen
oben. Die Syntax ist dieselbe wie für jquery.

Das Optionenfeld enthält ein Feld "HTML-Datei-URL"" : dieses Feld
enthält daher den Link zu dem Computer, auf dem sich die HTML-Datei befindet
Frage.

Die XML-Auswahl 
============

![script6](../images/script6.PNG)

Ermöglicht das Abrufen von XML und das gezielte Suchen nach einem Wert
in.

Das Optionenfeld enthält das Feld "URL der XML-Datei"" : dieses Feld
enthält daher den Link zu dem Computer, auf dem sich die XML-Datei befindet
Frage.

> **Wichtig**
>
> Es können nur Werte abgerufen werden, Attribute nicht
> kann wiederhergestellt werden.

Die JSON-Wahl 
=============

![script7](../images/script7.PNG)

Ermöglicht die Wiederherstellung von json und die gezielte Suche nach a
Wert in.

Das Optionenfeld enthält ein Feld "JSON-Datei-URL"" : dieses Feld
enthält daher den Link zu dem Computer, auf dem sich die JSON-Datei befindet
Frage.

HTTP-Beispiel : Eine Vera steuern 
==================================

Das Beispiel basiert auf einer Vera und besteht darin, eine Glühbirne anzutreiben
dimmbar. Ich werde nicht darüber nachdenken, wie man eine Vera fährt
Auf http-Anfrage wird das TLD-Forum mit Antworten gefüllt. Darüber hinaus,
Das Beispiel entspricht meiner Materialart und muss angepasst werden
Ihre.

> **Spitze**
>
> Eine Methode für diejenigen, die nach dem Schreiben von http-Anfragen suchen,
> Überprüfen Sie zuerst die Syntax in Ihrem Browser und erst dann
> Gehen Sie zur Konfiguration unter Jeedom. Wenn ein Aktionsskript dies nicht tut
> funktioniert nicht, wechseln Sie zu Info / Anderes Skript, damit Sie den Fehler sehen können
> zurück.

Lassen Sie uns gehen :

-   Wir schaffen Ausrüstung : Zum Beispiel LUM CUISINE (ich denke wir haben
    alle eine Küche zur Hand)

-   Wir verknüpfen es mit einem übergeordneten Objekt : Zum Beispiel VERA, es erlaubt mir
    Zentralisieren Sie alle Bestellungen im Zusammenhang mit VERA auf a
    Alleinerziehende.

-   Wählen Sie Ihre Kategorie.

-   Aktivieren Sie Ihre Ausrüstung, überprüfen Sie nicht sichtbar, wir werden ein wenig sehen
    später, wie man es mit einem virtuellen assoziiert (sexier, mehr WAF)

-   Geben Sie zur Selbstaktualisierung nichts ein, es ist ein Befehl
    Impuls verbunden mit einem Knopfdruck oder einem Szenario !

-   Fügen Sie einen Skriptbefehl hinzu

-   Denken Sie daran, zu speichern

Erklärungen :

-   Name : 100%, weil wir ein Licht mit voller Leistung einschalten

-   Skripttyp : http

-   Typ : Aktion (es ist eine Bestellung)

-   Untertyp : Fehler

-   Petition :

````
http://<IP_VERA>:3480/data_request?id=lu_action&output_format=json&DeviceNum=12&serviceId=urn:upnp-org:serviceId:Dimming1&action=SetLoadLevelTarget&newLoadlevelTarget=100
````

> **Spitze**
>
> Die "100" am Ende der Anforderung entspricht dem Leistungsprozentsatz
> Um dies zuzuweisen, setzen Sie "0" am Ende der Anfrage entsprechend
> Schalten Sie die Glühbirne aus.

Mit der Schaltfläche "Test" können Sie Ihre Bestellung testen !

Sie können daher Bestellungen in derselben Ausrüstung mit multiplizieren
Wenn Sie beispielsweise eine 60% ige Bestellung für ein schwaches Licht aufgeben, erstellen Sie
ein Drittel bei 30% für Nachtfahrten, die in a kombiniert werden sollen
Szenario,…

Es ist auch möglich, einen Befehl vom Typ Schieberegler zu erstellen, indem Sie den Befehl eingeben
tag \ #slider \ # in der Anfrage :

````
http://<IP_VERA>:3480/data_request?id=lu_action&output_format=json&DeviceNum=12&serviceId=urn:upnp-org:serviceId:Dimming1&action=SetLoadLevelTarget&newLoadlevelTarget=#slider#
````

> **Spitze**
>
> Wenn Ihre Bestellung vom Nachrichtentyp ist, können Sie Tags verwenden
> \ #message \ # und \ #title \ #, gleich für eine Farbbestellung mit
> das Tag \ #color \ # oder vom Typ Slider mit # Slider # oder Liste mit #select#

HTTP-Beispiel : Benachrichtigung an XBMC senden 
==============================================

Ziel : Senden Sie eine Benachrichtigung an XBMC, wenn Sie eine Tür öffnen
Eingang.

-   Name : XBMC DRÜCKEN

-   Skripttyp : http

-   Typ : Aktion (es ist eine Bestellung)

-   Unterart : Fehler

-   Petition :

````
http://IP_DE_XBMC:8080/jsonrpc?request={ %22jsonrpc%22:%222.0%22,%22method%22:%22GUI.ShowNotification%22,%22params%22:{ %22title%22:%22Mouvement%20Detecté%22,%22message%22:%22Porte%20Entrée%22},%22id%22:1}
````

Es liegt an Ihnen, dies beispielsweise in einem Szenario zu testen !

XBMC-API [hier] (http://wiki.xbmc.org/index.php?title = JSON-RPC_API / v6)
(nur die mit "erforderlich" gekennzeichneten Felder sind obligatorisch)

Ziel : Senden Sie eine Benachrichtigung an XBMC, wenn die Temperatur sinkt
unterhalb einer bestimmten Schwelle

Nehmen Sie das obige Beispiel :

-   Ersetzen Sie "Bewegung% 20 erkannt" durch "Risiko% 20 von% 20gel""

-   Ersetzen Sie "Porte% 20Entrée" durch
    "Temperatur %% 20 20extérieur:20% \ # \ [OUTER \] \ [OUTER \] \ [TEMPERATURE \] \% # 20"

Testez sur un scénario *\[EXTERIEUR\]\[EXTERIEUR\]\[TEMPERATURE\]* &lt;
15 zum Beispiel

Aktion : Starten Sie das Skript über eine virtuelle Ausrüstung, die mit Ihrem Skript verknüpft ist
!

SCRIPT-Beispiel 
==============

Das Schönste, aber nicht das Einfachste zu erklären.

Voraussetzungen : wissen, wie man ein Skript in PHP, Python oder Ruby entwickelt.

>**Wichtig**
>
> Die Erweiterung Ihres Skripts muss unbedingt dem Typ entsprechen. Ex .PHP für einen PHP-Typ. In der Tat basiert Jeedom auf der Erweiterung des Skripts für den Start der ausführbaren Datei (php if .PHP, Python wenn .py ....)

Das Skript zur Überwachung der Himbeertemperatur dient als Beispiel
für die Verwendung des Skripttyps : Skript

Nachdem Sie das Skript vom Markt heruntergeladen haben, klicken Sie auf die Schaltfläche "Durchsuchen""
Mit dieser Option können Sie die Datei temp \ _rasp.php auswählen.

Aus Neugier können Sie den Inhalt der Datei durch Drücken von anzeigen
Auf der Schaltfläche "Bearbeiten" sollten Sie den folgenden Code erhalten :

Dies ist ein PHP-Skript, das außerhalb von Jeedom wiederverwendet werden kann !

````
 <?php
    $temp = shell_exec("cat /sys/class/thermal/thermal_zone0/temp");
    $temp = $temp / 1000;
    $temp = round($temp,1);
    echo $temp
 ?>
 ````

Notiz : konkret ist es die PHP "Echo" -Funktion, die das gibt
Wert für Jeedom

Die Parameter 
--------------

Holen Sie sich Jeedom&#39;s Informationen, um sie in einem Skript zu verwenden. die
Die Wiederherstellung hängt von der Art des verwendeten Skripts ab :

Beispiel :

-   In der Leitung :
    /usr/share/nginx/www/jeedom/Plugins/script/core/ressources/MON\_SCRIPT\_PHP.php
    Liste, das Argument "Liste" ist eine Zeichenfolge (fest)
    mit der folgenden Funktion aus dem PHP-Skript abgerufen
    \ $ argv \ [1 \] vgl : Google für weitere Details zum Abrufen
    Parameter in PHP.

-   Wir haben zuvor gesehen, dass es möglich war, sich zu erholen
    dynamische Werte von Jeedom.

-   In der Leitung :
    /usr/share/nginx/www/jeedom/Plugins/script/core/ressources/radio.py
    VOL * slider *, daraus wird das Argument "* slider *" abgerufen
    argv \ [2 \]. Wenn jeedom das Skript ausführt, ist es
    ersetzt automatisch * slider * durch den Wert (numerisch)
    Schieberegler. vgl : Google für weitere Details zum Abrufen
    Parameter in Python.

-   Stärker : Potenziell alle Variablen, auf die über zugegriffen werden kann
    Jeedom kann vom Skript-Plugin verwendet werden :

    -   Sie möchten den Wert der Küchentemperatur wiederherstellen
        es außerhalb von Jeedom zu historisieren ?

    -   Übergeben Sie * \ [KÜCHE \] \ [KÜCHE \] \ [Temperatur \] * als Parameter
        zum Skript und Jeedom wird es durch den Wert ersetzen, der während gelesen wird
        der Sendung.

Empfehlung zum Testen der Parameter im PHP-Skript :

````
if (isset($argv)) {
 foreach ($argv as $arg) {
     $argList = explode('=', $arg);
     if (isset($argList[0]) && isset($argList[1])) {
         $_GET[$argList[0]] = $argList[1];
     }
 }
}
````

Einfaches XML-Beispiel 
==================

Hier ist das Format der Standard-XML :

````
<root>
    <led0>1</led0>
    <leds>
      <led1>toto</led1>
    </leds>
</root>
````

Wenn Sie den Wert von led0 in der Abfrage haben möchten, geben Sie led0 ein. wenn
Sie möchten den Wert von led1, dem Sohn der von Ihnen gesetzten LEDs
leds &gt; led1.

Notizz que l'élément racine &lt;root&gt; n'est pas à préciser dans le
Anforderungsfeld.

Komplexes XML-Beispiel 
====================

````
 <root>
   <led0>1</led0>
   <leds>
     <led1>toto</led1>
   </leds>
   <leds>
     <led1>tata</led1>
   </leds>
 </root>
 ````

Die Syntax lautet :

leds &gt; 1 &gt; led1 qui donne en réponse tata, 1 étant le numéro de
Array-Zeile !

Komplexeres XML-Beispiel 
=========================

````
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
````

Informationen aus dem Feld Wert des 1. Blocks abrufen:

``MesPar>0>Wert>0 qui retourne donc "268.56 "``

Um das folgende Element in der Wert "Struktur" zurückzugeben, müssen Sie
Geben Sie einfach die Bestellnummer in der Struktur an. Welches gibt
pour l'élément '&lt;Wert Typ="delta24"&gt;0.051&lt;/Wert&gt;' le code
folgende :

``MesPar>1>Wert>2``

Um zum nächsten "MyPar" -Block zu wechseln, müssen Sie daher den Index in ändern
Ergebnis : die 1 mal 2 zum Beispiel.

ACHTUNG : Wenn sich in der XML-Datei die Reihenfolge ändert, wird die Anforderung nicht geändert
funktioniert mehr. Die Anforderung muss entsprechend der Bestellung angepasst werden
zurück.

JSON-Beispiel 
============

Wie beim XML-Typ ist es möglich, Informationen aus zu lesen
eine JSON-Rückkehr.

Zur Erklärung werde ich mich auf JSON-Informationen mit stützen
die Sickbeard-Anwendung (boo… cpasbien) aber hier nur die Technik
Premium, nicht das Werkzeug !

Der Zugriff auf diese Datei ist über die folgende URL möglich :

``http://<IP_DELAMACHINEQUIEBERGESICKBEARD>:8083/api/XXXX/?cmd=history&limit=3``

Notiz : XXXX ist die für jeden SICKBEARD spezifische API-Schlüsselnummer.

Zunächst, bevor Sie mit der Konfiguration des Skript-Plugins beginnen
JSON, es geht darum, die wiederherzustellenden Informationen korrekt zu identifizieren., Auto
Hier werden wir einen Array-Begriff in die Retouren integrieren.

Überprüfen Sie die Anzeige von Informationen in Ihrem Browser (Test
unter Chrome).

Beispiel für die Rückgabe :

````
 {
     "data": [
         {
             "date": "2014-09-10 01:37",
             "episode": 4,
             "provider": "RNT",
             "quality": "SD TV",
             "resource": "XXX",
             "resource_path": "XXXX",
             "season": 2,
             "show_name": "Totovaalaplage S2E4",
             "status": "Downloaded",
             "tvdbid": XXXXX
         },
         {
             "date": "2014-09-10 01:36",
             "episode": 3,
             "provider": "RNT",
             "quality": "SD TV",
             "resource": "XXXX",
             "resource_path": "XXX",
             "season": 2,
             "show_name": "Totovaalaplage S2E3",
             "status": "Downloaded",
             "tvdbid": XXXXX
         },
         {
             "date": "2014-09-10 01:21",
             "episode": 1,
             "provider": "Cpasbien",
             "quality": "SD TV",
             "resource": "XXXX",
             "resource_path": "XXXX",
             "season": 1,
 ICI -->     "show_name": "Totovaplusauski aber Totovaalaplage S1E1",
             "status": "Snatched",
             "tvdbid": XXXX
         }
     ],
     "message": "",
     "result": "success"
 }
 ````

Für den Fall, dass wir den show \ _name des 3. zurückgeben möchten
Element in PHP (HIER markiert), wäre es notwendig zu tun : data &gt; 2
&gt;show \ _name, der Rückgabearray-Index, der bei Null beginnt.

In diesem Beispiel gibt die Schaltfläche "Test" "Totovaplusauski" zurück
aber Totovaalaplage S1E1".

Präzisierungen :

Beachten Sie die Syntax des Befehls Request vom Typ element0 &gt;
index du tableau &gt; élément1

Nachteile :

-   Mit dieser Methode kann jeweils nur ein Element wiederhergestellt werden.

-   Wenn wir alle Werte von "show \ _name" zurückgeben möchten, ist dies
    ist leider nicht möglich, müssen Sie das Skript duplizieren
    so oft wie nötig.

HTML-Beispiel 
============

Hier werden wir versuchen, die letzte FML abzurufen.

Zunächst müssen Sie die URL konfigurieren :

``http://www.viedemerde.fr``

Dann müssen Sie den "Pfad" der letzten FML finden. Um dies zu tun,
Sie müssen zur Site gehen und dann mit der rechten Maustaste auf das gewünschte Element klicken
Inspizieren Sie den Artikel, wir bekommen :

![script9](../images/script9.PNG)

Hier ist es der komplexeste Teil, der eine kleine Analyse erfordert. hier
Mein Text befindet sich in einem "a" -Tag, das sich in einem p-Typ-Element befindet
Das ist eine Klasse div "Post Artikel". Also muss ich auswählen
das erste div-Element der Klasse "post" und "Artikel", dann das erste
Element p und dass ich alles in den "a" -Tags bekomme, dass es
enthält. Also habe ich : "div.post.Artikel:erste p:zuerst a".

Also bekommen wir :

![script10](../images/script10.PNG)

Für ein Echtzeit-Update ist es möglich, einen Cron zu platzieren
Update.

> **Spitze**
>
> Bei der Installation eines Update-Cron wird Jeedom
> Aktivieren Sie automatisch das Kontrollkästchen Ereignis. Dies ist völlig normal.

Hier können Sie sich dann ein Szenario vorstellen, das Sie per SMS sendet
die letzte FML.
