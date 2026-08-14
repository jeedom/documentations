# Installation auf einer virtuellen Maschine

Die folgende Vorgehensweise basiert auf der Verwendung einer System-Image-Datei, auf der Debian und Jeedom bereits vorinstalliert sind.

>**INFORMATION**
>
>Um Jeedom manuell auf einer virtuellen Maschine unter Debian zu installieren, lesen Sie bitte die Dokumentation zu [Installation über die Befehlszeile](cli).

## Erstellung der VM

Wahrscheinlich verfügen Sie bereits über einen Hypervisor, um diese Dokumentation lesen zu können. Auch wenn der Vorgang zum Erstellen einer virtuellen Maschine *(VM)* bei den verschiedenen Lösungen recht ähnlich ist, sollten Sie natürlich unbedingt die für Ihre Plattform geltende Dokumentation befolgen.

Um nur einige bekannte Hypervisoren als Beispiele zu nennen:

- [**VirtualBox**](https://www.virtualbox.org/){:target="_blank"} : Kostenloser Open-Source-Hypervisor vom Typ 2, ideal für Testumgebungen oder Arbeitsplätze. Kompatibel mit Windows, macOS und Linux.
- [**VMware**](https://www.vmware.com/){:target="_blank"} : Große Auswahl an Hypervisoren, darunter VMware Workstation (Typ 2) für Endgeräte und VMware ESXi (Typ 1) für Server. Eine robuste und in Unternehmen weit verbreitete Lösung.
- [**Proxmox**](https://www.proxmox.com/en/){:target="_blank"} : Eine auf KVM (Typ 1) basierende Open-Source-Plattform, die vollständige Virtualisierung mit LXC-Containern kombiniert. Sehr gut geeignet für Server, professionelle Umgebungen und Heimlabore.
- [**Hyper-V**](https://learn.microsoft.com/fr-fr/windows-server/virtualization/hyper-v/get-started/Install-Hyper-V){:target="_blank"} : Nativer Hypervisor von Microsoft, der in Windows Server sowie in die Pro- und Enterprise-Editionen von Windows integriert ist.

## Konfiguration der VM

Es gibt keine wirklich empfohlene Konfiguration für Jeedom, da diese vom Auslastungsgrad der jeweiligen Instanz abhängt.

Für ein robustes Gerät, das dennoch nicht überdimensioniert ist, kann man davon ausgehen, dass die folgenden Werte in den meisten Fällen ausreichend sind:

| CPU | Arbeitsspeicher | Festplatte |
|----------------|----------------|----------------|
| 2 Kerne | 2048 MiB | 16 GiB |

## Start vom System-Image

Das Jeedom-Team stellt optimierte System-Images für 64-Bit-Computer bereit.

Bevor Sie die virtuelle Maschine starten, müssen Sie das System-Image herunterladen, das Sie installieren möchten *(bei einigen Hypervisoren können Sie die Datei direkt über den URL-Link herunterladen)*:

- [**Jeedom x86-64-Systemabbild(er)**](https://images.jeedom.com/x86-64/){:target="_blank"}

>**INFORMATION**
>
>Anzeigen [**die entsprechende Dokumentation**](/compatibility/#Images%20système%20officielles) Weitere Informationen zu den Jeedom-System-Images.

Die Bilddatei im Format `iso` muss anschließend in das von der virtuellen Maschine emulierte optische Laufwerk *(CD/DVD)* geladen werden, das selbst an erster Stelle in der Startreihenfolge steht.

>**WICHTIG**
>
>Bei Problemen lesen Sie bitte die Dokumentation des Hypervisors.

## Installationsoptionen

Nach dem Start der virtuellen Maschine mit dem in das optische Laufwerk geladenen System-Image werden verschiedene Installationsoptionen auf dem Bildschirm angezeigt:

{% include lightbox.html src="../images/install-menu-amd64.jpg" data="InstallMenuAMD64" title="Menu d'installation Jeedom (AMD64)" imgstyle="width:75%;display:block;margin:0 auto;" %}

- **Jeedom installieren (automatischer Modus)**: **Installiert das System automatisch**, ohne dass ein Eingreifen erforderlich ist. Der Rechner wird nach Abschluss des Vorgangs ausgeschaltet.
>**WICHTIG**
>
>Dieser Modus wird standardmäßig nach 60 Sekunden ausgeführt, **die Installation kann daher ohne Verbindung zum virtuellen Bildschirm durchgeführt werden**.

- **Jeedom installieren (manueller Modus)**: In diesem Modus müssen Sie **die Konfiguration des zu installierenden Systems manuell eingeben** *(Sprache, Land, Netzwerk, Speichermedium usw.)*.

- **Jeedom Live**: Ermöglicht es, **Jeedom in einer nicht persistenten Umgebung zu testen**, ohne das System zu installieren.
>**INFORMATION**
>
>Diese Funktion ist ab Debian 12 Bookworm verfügbar.

## Hardware-Kompatibilität

Eine nicht vollständige Liste der von Jeedom unterstützten Hypervisoren finden Sie unter [Dokumentation **Kompatibilität**](/compatibility/#Matériels%20supportés)

## Erste Anmeldung

Die Dokumentation zur [**Erste Anmeldung**](/premiers-pas/#Première%20connexion) um nach der Installation auf die Jeedom-Benutzeroberfläche zuzugreifen.
