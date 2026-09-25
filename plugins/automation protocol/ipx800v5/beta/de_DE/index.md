# IPX800v5-Plugin

>**WICHTIG**
>
> Dieses Plugin ist ein Entwurf, angesichts der vom Hersteller bereitgestellten API können wir nicht viel machen.

>**WICHTIG**
>
> Bitte beachte, dass das Plugin zahlt, wenn es in den Stall geht.

## Description

>**WICHTIG**
>
> Beachten Sie die Komplexität der vom Hersteller bereitgestellten API, dieses Plugin wird für Anfänger nicht empfohlen. Wenn Sie stattdessen eine viel einfachere ipx800v4 verwenden können.

.

## Configuration

.

>**HINWEIS**
>
> .

## Equipements

").

### Commandes

::yyy::yyy` oder `xxx::".

>**HINWEIS**
>
> : #IP_IPX#/ api / ebx / x4vR?ApiKey=#apikey##IP_IPX##apikey#. .

#### Informations

- ``65536::wir : . 
- `ipx::ioRelayState::0` : 
- `ipx::ioRelayState::7` : 
- `ipx::ana_IPX_Input::0` : gibt den Wert des Analogeingangs 0 an (die 1 in real auf dem ipx, für diese Art von Befehl muss jedes Mal 1 hinzugefügt werden)
- `ipx::ioDInput::3` : gibt den Wert des Binäreingangs 3 (die 4 in Real auf dem ipx, für diesen Befehlstyp muss jedes Mal 1 hinzugefügt werden))
- `` 4456448::anaCommand::2` : gibt die Position (in %) von Jalousie 3 an, die mit einer x4vr-Nebenstelle mit der Nummer `4456448` . verbunden ist
- `` 4259841::ioOutputState::2` : gibt den Ausgangsstatus 3 (immer +1 zu tun) der x8r-Erweiterung mit der Nummer `4259841`
- `` 4259841::ioLongPush::2` :  

#### Actions

- `core::io::65536::{"on":wahr} ` : Wird verwendet, um die Variable 65536 zu aktivieren, die den Relaisausgang 1 repräsentiert. 
- `core::io::65536::{"on":falsch} ` : dito zum Ausschalten

>**HINWEIS**
>
>Im Moment wissen wir nicht, wie wir die Erweiterungen verwalten sollen. . ...
