# IPX800v5-Plugin

>**WICHTIG**
>
> Dieses Plugin ist ein Entwurf, angesichts der vom Hersteller bereitgestellten API können wir nicht viel machen

>**WICHTIG**
>
> Bitte beachte, dass das Plugin zahlt, wenn es in den Stall geht

## Description

>**WICHTIG**
>
> Beachten Sie die Komplexität der vom Hersteller bereitgestellten API, dieses Plugin wird für Anfänger nicht empfohlen. Wenn Sie stattdessen eine viel einfachere ipx800v4 verwenden können.

Dieses Plugin ermöglicht eine Jeedom-Verbindung zu einem ipx800v5.

## Configuration

In der Plugin-Konfiguration können Sie die aufzurufenden APIs sowie die Häufigkeit auswählen

>**HINWEIS**
>
> Es scheint, dass die Core / io-API für alles ausreicht, was das Pilotieren / Abrufen von Binärinformationen ist

## Equipements

Auf den Geräten müssen Sie lediglich den IP-Teil und den API-Schlüssel konfigurieren (erzeugt aus der Schnittstelle des IPX800-Teilsystems dann "APIKEY ."")

### Commandes

Dies ist komplizierter ... Für die Wiederherstellung von Informationen müssen Sie im Feld "Schlüssel" den Pfad zu den Informationen in der Form `xxx . eingeben::yyy::yyy` oder `xxx::yyyy`.

>**HINWEIS**
>
>Für die Nummer der Erweiterung wissen wir nicht, wie wir sie über die Benutzeroberfläche finden können ... Am einfachsten ist es in Ihrem Browser zu tun `#IP_IPX#/ api / ebx / x4vR?ApiKey=#apikey#`indem Sie die IP und den apikey ersetzen, erhalten Sie die Liste aller x4vr-Erweiterungen sowie deren ID. Für x8r ersetzen Sie einfach x4vr durch x8r 

#### Informations

- ``65536::wir : ermöglicht es Ihnen, den Status (ein / aus) der Variablen 65536 abzurufen, die den Zustand von Relaisausgang 1 darstellt (oder es ist kompliziert, ich bestätige, aber es ist der Hersteller, der entscheidet). Um die Nummern der Variablen zu finden musst du auf "Links" dann "Variablen" gehen und links auf das gewünschte IO klicken, im mittleren Frame hast du dann die Variablen-ID
- `ipx::ioRelayState::0` : gibt den Status von Relais 0 (die 1 in echt auf dem ipx, für diese Art von Befehl müssen Sie jedes Mal 1 hinzufügen) des ipx
- `ipx::ioRelayState::7` : gibt den Status von Relais 7 (die 8 in echt auf der ipx, für diese Art von Befehl müssen Sie jedes Mal 1 hinzufügen) der ipx
- `ipx::ana_IPX_Input::0` : gibt den Wert des Analogeingangs 0 an (die 1 in real auf dem ipx, für diese Art von Befehl muss jedes Mal 1 hinzugefügt werden)
- `ipx::ioDInput::3` : gibt den Wert des Binäreingangs 3 (die 4 in Real auf dem ipx, für diesen Befehlstyp muss jedes Mal 1 hinzugefügt werden))
- `` 4456448::anaCommand::2` :  gibt die Position (in %) von Jalousie 3 an, die mit einer x4vr-Nebenstelle mit der Nummer `4456448` . verbunden ist
- `` 4259841::ioOutputState::2` :  gibt den Ausgangsstatus 3 (immer +1 zu tun) der x8r-Erweiterung mit der Nummer `4259841`
- `` 4259841::ioLongPush::2` :  gibt den Status von Eingang 3 (immer das zu tunde +1) während eines langen Drückens der x8r-Nebenstelle mit der Nummer `4259841`

#### Actions

- `core::io::65536::{"on":wahr} ` : Wird verwendet, um die Variable 65536 zu aktivieren, die den Relaisausgang 1 repräsentiert. Um die Nummern der Variablen zu finden musst du auf "Links" dann "Variablen" gehen und links auf das gewünschte IO klicken, im mittleren Frame hast du dann die Variablen-ID
- `core::io::65536::{"on":falsch} ` : dito zum Ausschalten

>**HINWEIS**
>
>Im Moment wissen wir nicht, wie wir die Erweiterungen verwalten sollen. Das Problem kommt von der API, die zwingt, den gewünschten Zustand aller Ausgaben der Erweiterung auf einmal zurückzugeben. Problem, wenn Sie einen Rollladen schließen, möchten Sie am 1... 
