Präsentation 
============

Mit diesem Plugin können Sie GCE IPX800-Karten verwalten.
Ursprünglich wurde dieses Plugin erstellt, um GCE IPX800s zu verbinden.

Im Dashboard sichtbare Daten : 
-----------------------------------

-   ''analoge Eingänge''

-   ''digitale Eingänge''

-   ''die Relais''

-   ''Impulszähler''

Installation / Einrichtung 
========================

Wir werden jetzt ein Gerät konfigurieren. Klicken Sie dazu auf
on '' Plugins / Home Automation Protocol / IPX800''

Klicken Sie dann oben links auf die Schaltfläche '' Ausrüstung hinzufügen''

Geben Sie dann den Namen des Geräts ein (z. IPX 1).

Dann definieren :

-   ''Übergeordnetes Objekt''

-   ''Kategorie '' (optional)

-   ''Aktiviere '' (überprüfe, sonst kann das Gerät nicht verwendet werden)

-   ''Sichtbar '' (optional, wenn Sie es nicht sichtbar machen möchten
    das Dashboard)

-   ''IP-Adresse''

-   ''Hafen''

-   ''Konto''

-   ''Passwort''

Aktualisierungsrate 
-----------------------------

Für analoge Eingänge und Zähler sind die Daten
wird jede Minute vom Plugin abgerufen. Es ist nicht möglich
eine höhere Frequenz haben. Im Übrigen, wenn der Push-Modus ist
aktiviert, ist die Aktualisierung fast augenblicklich.

Um den Push zu aktivieren, klicken Sie auf

![bouton config push](../images/bouton_config_push.jpg)

Gehen Sie dann nach unten und klicken Sie auf Übernehmen.

Verhalten mit der mobilen Anwendung 
--------------------------------------

Standardmäßig ist hier das Verhalten :

-   ''Das ip800''

Die Befehle sind alle konfiguriert.

-   ''analoge Eingänge''

Die Befehle sind standardmäßig alle sichtbar und der Typ hängt von der ab
gewählte Sonde.

-   ''digitale Eingänge''

Bestellungen gelten als Lichter.

-   ''die Relais''

Bestellungen gelten als Lichter.

-   ''Impulszähler''

Bestellungen gelten als generische Typen.

Es ist zu beachten, dass wir in der Anwendung die Befehle zu finden
von dem Moment an, in dem sie konfiguriert sind, auch wenn dies nicht der Fall ist
als sichtbar markiert. Um sie auszublenden, müssen Sie in auswählen
"Befehlskonfiguration "⇒" Generischer Typ "⇒" Ignorieren
dieser Befehl".

Einige Screenshots 
=======================

![ipx800 screenshot1](../images/ipx800_screenshot1.jpg)

![ipx800 screenshot2](../images/ipx800_screenshot2.jpg)

![ipx800 screenshot3](../images/ipx800_screenshot3.jpg)
