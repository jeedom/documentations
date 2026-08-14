# Installation auf PC/Mini-PC

Die folgende Vorgehensweise basiert auf der Verwendung einer System-Image-Datei, auf der Debian und Jeedom bereits vorinstalliert sind.

>**INFORMATION**
>
>Um Jeedom manuell auf einem Debian-System zu installieren, lesen Sie bitte die Dokumentation zu [Installation über die Befehlszeile](cli).

## System-Image herunterladen

Das Jeedom-Team stellt optimierte System-Images für 64-Bit-Computer bereit.

Der erste Schritt besteht darin, das System-Image herunterzuladen, das Sie installieren möchten:

- [**Jeedom x86-64-Systemabbild(er)**](https://images.jeedom.com/x86-64/){:target="_blank"}

>**INFORMATION**
>
>Anzeigen [**die entsprechende Dokumentation**](/compatibility/#Images%20système%20officielles) Weitere Informationen zu den Jeedom-System-Images.

## Brennen des Systemabbilds

Die zuvor heruntergeladene Datei muss auf einen Datenträger gebrannt werden, von dem aus der Rechner booten kann, beispielsweise einen USB-Stick.

>**INFORMATION**
>
>Wenn Sie keine Brennsoftware kennen, können Sie folgende verwenden [balenaEtcher](https://etcher.balena.io/){:target="_blank"}.

Um den Brennvorgang durchzuführen, befolgen Sie einfach die Anweisungen des Herstellers der von Ihnen verwendeten Software.

Sobald das System-Image auf den Boot-Datenträger gebrannt ist, muss man nur noch davon booten.

>**WICHTIG**
>
>Sollten Sie Probleme beim Booten vom USB-Stick haben, lesen Sie bitte die Dokumentation zu Ihrer Hardware bezüglich der BIOS-Boot-Optionen.

## Installationsoptionen

Nach dem Starten des Computers vom Datenträger mit dem System-Image werden verschiedene Installationsoptionen auf dem Bildschirm angezeigt:

{% include lightbox.html src="../images/install-menu-amd64.jpg" data="InstallMenuAMD64" title="Menu d'installation Jeedom (AMD64)" imgstyle="width:75%;display:block;margin:0 auto;" %}

- **Jeedom installieren (automatischer Modus)**: **Installiert das System automatisch**, ohne dass ein Eingreifen erforderlich ist. Der Rechner wird nach Abschluss des Vorgangs ausgeschaltet.
>**WICHTIG**
>
>Dieser Modus wird standardmäßig nach 60 Sekunden ausgeführt, **die Installation kann daher ohne Anschluss eines Bildschirms durchgeführt werden**.

- **Jeedom installieren (manueller Modus)**: In diesem Modus müssen Sie **die Konfiguration des zu installierenden Systems manuell eingeben** *(Sprache, Land, Netzwerk, Speichermedium usw.)*.

- **Jeedom Live**: Ermöglicht es, **Jeedom in einer nicht persistenten Umgebung zu testen**, ohne das System zu installieren.
>**INFORMATION**
>
>Diese Funktion ist ab Debian 12 Bookworm verfügbar.

## Hardware-Kompatibilität

Eine nicht vollständige Liste der von Jeedom unterstützten Computer finden Sie unter [Dokumentation **Kompatibilität**](/compatibility/#Matériels%20supportés)

## Erste Anmeldung

Die Dokumentation zur [**Erste Anmeldung**](/premiers-pas/#Première%20connexion) um nach der Installation auf die Jeedom-Benutzeroberfläche zuzugreifen.
