Es ist wichtig, Backups Ihrer VMs zu haben, und es ist ein Punkt, dies nicht zu tun
Vor allem nicht zu vernachlässigen, ganz zu schweigen von Hardwarefehlern, die Sie können
Eines Tages muss ich nach einem Fehler zu einem Backup zurückkehren
Manipulation oder ein Problem nach einem Update. Sei vorsichtig hier wir
spricht über das vollständige Image von VMs, es ist nicht nur eine Anwendungssicherung,
es wird daher eine ziemlich große Größe haben.


.  :

-   

-   . 
    
    



. 


> **Notiz**
>
> 
> 
> version . 
> 

 
=========================


[script](https://raw.githubusercontent.com/lamw//master/.sh)

.

> **Notiz**
>
> 
> .. 
> .

 
================




![vmware.backup](images/vmware.backup.PNG)




 
====================================

> **Notiz**
>
> 
> 
> 

.
enthält :

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    =
    =

 :

-   **** 

-   **** 

> **Notiz**
>
> 
> [ici](https:.
> 

> **Wichtig**
>
> 
> 

 
==============


. .
Kehren Sie in SSH zum ESXi zurück (stellen Sie gegebenenfalls die Verbindung wieder her) und tun Sie dies :

    / vmfs / volume / Backup / .sh -a -g / vmfs / volume / Backup / .conf

Dies startet eine Sicherung aller Ihrer VMs (und kann daher viel Zeit in Anspruch nehmen
Zeit). Am Ende sollten Sie auf Ihrem Backup-Datenspeicher a haben
Ordner nach VM und in jedem VM-Ordner ein Unterordner nach Datum
mit 4 Dateien :

![vmware.backup2](images/vmware.backup2.PNG)

-   \. * - flach.vmdk ⇒ die virtuelle Festplatte Ihres Computers

-   \.*.vmdk ⇒ der Deskriptor der Disc

-   \.*.vmx ⇒ die Datei, die die Konfiguration Ihres Computers enthält

-   STATUS.ok ⇒ zeigt an, dass das Backup in Ordnung ist

Hier ist eine weitere Möglichkeit für die Befehlszeile :

-   Backup-Simulation :

<!-- -->

    / vmfs / volume / Backup / .sh -d dryrun -a -g / vmfs / volume / Backup / .conf

-   Starten Sie im Debug-Modus :

<!-- -->

    / vmfs / volume / Backup / .sh -d debug -a -g / vmfs / volume / Backup / .conf

-   Sichern Sie nur die VM "toto"

<!-- -->

    / vmfs / volume / Backup / .sh -m toto -a -g / vmfs / volume / Backup / .conf

Automatischer Start der Sicherung 
=================================

Sie müssen die Befehlszeile zur crontab hinzufügen, aber unter VMware die
crontab ist etwas Besonderes und wird bei jedem Start besonders überschrieben. Für
Vermeiden Sie dies, damit Sie ein kleines Skript hinzufügen müssen, das das aktualisiert
crontab beim Booten (keine Sorge, es ist ziemlich einfach und schnell), in
SSH auf dem ESXi tun :

    vi /etc/rc.local.d/local.sh

Und vor "exit 0" fügen Sie die folgenden Zeilen hinzu :

    / bin / kill $ (cat /var/run/crond.pid)
    / bin / echo "0 0 1 * * / vmfs / volume / Backup / .sh -a -g / vmfs / volume / Backup / .conf> / dev / null 2> & 1 ">> / var / spool / cron / crontabs / root
    / usr / lib / vmware / Busybox / Bin / Busybox Crond

> **Notiz**
>
> Hier fordere ich jeden 1. des Monats ein Backup an, das Sie ändern können
> dies durch Ändern : 0 0 1 \. * \.*

> **Notiz**
>
> Hier mache ich ein Backup aller VMs, Sie können dies anpassen, indem Sie
> Ersetzen Sie -a durch -m ma \. _vm. Seien Sie vorsichtig, wenn Sie setzen möchten
> Bei mehreren VMs müssen Sie die Zeile "/ bin / echo" 0 0 1 \. * \. duplizieren*
> / vmfs / volume / Backup / .sh -a -g
> / vmfs / volume / Backup / .conf &gt;/dev/null 2&gt;&1" &gt;&gt;
> / var / spool / cron / crontabs / root "und legen Sie eine pro VM für die Sicherung ab

> **Wichtig**
>
> Vergessen Sie nicht, den Pfad an die Konfigurationsdatei von anzupassen
>  entsprechend Ihrer Konfiguration :
> / vmfs / volume / Backup / .conf

Letzter Schritt: Sie müssen Ihr ESXi neu starten, damit der Cron genommen werden kann
In Anbetracht dessen können Sie das Ergebnis sehen, indem Sie (immer in SSH) :

    cat / var / spool / cron / crontabs / root

Hier müssen Sie eine Linie haben :

    0 0 1 * * / vmfs / volume / Backup / .sh -a -g / vmfs / volume / Backup / .conf> / dev / null 2> & 1
