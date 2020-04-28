.


 :

-   .
    
    

-   



.
.




.

 
===========================

 :

![vmware.createvm3](images/vmware.createvm3.PNG)

> **Notiz**
>
> 
> 
> [ici](https:

 :

![vmware.createvm4](images/vmware.createvm4.PNG)



 :

-   

-   

-   ,
    

-   

-   
    
    
    

 
=============================


:
.
.

 :

![vmware.createvm18](images/vmware.createvm18.PNG)

 :

![vmware.createvm19](images/vmware.createvm19.PNG)

" :

![vmware.createvm20](images/vmware.createvm20.PNG)

 :

![vmware.createvm21](images/vmware.createvm21.PNG)

 :

![vmware.createvm22](images/vmware.createvm22.PNG)

 :

![vmware.createvm23](images/vmware.createvm23.PNG)


Datenspeicher :

![vmware.createvm24](images/vmware.createvm24.PNG)

 
=============================

" :

![vmware.createvm5](images/vmware.createvm5.PNG)

Klicken Sie auf Weiter :

![vmware.createvm6](images/vmware.createvm6.PNG)

Geben Sie Ihrem Computer einen Namen und geben Sie dessen System an
Betrieb (hier installieren wir einen Debian) :

![vmware.createvm7](images/vmware.createvm7.PNG)

Geben Sie den Zieldatenspeicher an :

![vmware.createvm8](images/vmware.createvm8.PNG)

Hier können Sie die Parameter Ihres Computers (Festplatte) konfigurieren
hart, CPU, Gedächtnis ...) :

![vmware.createvm9](images/vmware.createvm9.PNG)

> **Notiz**
>
> Alle diese Parameter können anschließend ohne Bedenken geändert werden
> Es ist jedoch nicht wirklich möglich, die Größe zu reduzieren
> Eine Festplatte können Sie vergrößern (aber Sie müssen wissen, wie man sie verwaltet
> Betriebssystemebene weiter), aber nicht reduzieren.

Wählen Sie im CD / DVD-Laufwerk "ISO-Dateibank von
Daten" :

![vmware.createvm10](images/vmware.createvm10.PNG)

Wählen Sie dann den Speicherort Ihrer ISO aus (siehe
vorheriges Kapitel) und validieren :

![vmware.createvm11](images/vmware.createvm11.PNG)

Dann mach weiter :

![vmware.createvm12](images/vmware.createvm12.PNG)

Sie haben dann eine Zusammenfassung Ihrer Konfiguration, klicken Sie auf
"Beenden Sie" :

![vmware.createvm13](images/vmware.createvm13.PNG)

Eine Nachricht oben zeigt an, dass es gut ist, und klicken Sie dann auf
"Virtuelle Maschinen" :

![vmware.createvm14](images/vmware.createvm14.PNG)

Sie sollten Ihre virtuelle Maschine sehen (wenn nicht klicken
auf "Aktualisieren") klicken Sie darauf :

![vmware.createvm15](images/vmware.createvm15.PNG)

Sie müssen eine Seite dieses Typs haben, klicken Sie auf die Wiedergabetaste :

![vmware.createvm16](images/vmware.createvm16.PNG)

Ihr Computer wird gestartet und Sie können installieren
Ihr Betriebssystem :

![vmware.createvm17](images/vmware.createvm17.PNG)

> **Wichtig**
>
> Sobald Ihr Computer installiert ist, MÜSSEN Sie den installieren
> VMware-Tools (Dadurch kann VMware Informationen zu Ihrer VM abrufen
> und richtig ausschalten). Unter Debian einfach machen
> "sudo apt-get -y installiere open-vm-tools".

Für den Rest der Installation lade ich Sie ein, dies zu lesen
[tutoriel](https://jeedom.github.io/documentation/howto/de_DE/doc-howto-debian.installation.html#_installation)

Mounten Sie USB-Geräte in der VM 
=======================================

> **Notiz**
>
> Wenn Sie die folgenden Optionen nicht haben, müssen Sie sie aktualisieren
> der ESXi Embedded Host Client, alle Informationen
> [ici](https:

Es ist ein ziemlich seltener Bedarf, aber ich musste ihn für Jeedom verwenden
in der Tat habe ich auf meinem ESXi die Schlüssel Zwave, RFXcom, edisio, enOcean und GSM
verbunden und ich musste sie mit meiner Jeedom VM verbinden, um in der Lage zu sein
benutze es.

> **Notiz**
>
> Für Zwave, RFXcom, edisio und enOcean gibt es kein Problem, z
> GSM-Schlüssel müssen Sie befolgen
> [tutoriel](https://jeedom.github.io/documentation/howto/de_DE/doc-howto-gsm.huawei_mode_modem.html)
> vorher, um den Schlüssel nur im Modem-Modus zu erzwingen, sonst ist es nicht
> auf dem ESXi nicht richtig gesehen.

Gehen Sie zu Ihrer VM und führen Sie "Einstellungen ändern" aus" :

![vmware.createvm25](images/vmware.createvm25.PNG)

Klicken Sie auf "Anderes Gerät hinzufügen" und dann auf USB-Controller :

![vmware.createvm26](images/vmware.createvm26.PNG)

> **Notiz**
>
> Der folgende Schritt sollte für jedes USB-Gerät wiederholt werden
> Sie möchten eine Verbindung herstellen

Speichern, wiederholen Sie "Einstellungen ändern" und dann "Weitere hinzufügen"
Gerät "und" USB-Gerät" :

![vmware.createvm27](images/vmware.createvm27.PNG)

Wählen Sie Ihr USB-Gerät aus der Dropdown-Liste :

![vmware.createvm28](images/vmware.createvm28.PNG)

Und jetzt ist Ihr Gerät an Ihre VM angeschlossen. Bei jedem
Neustart wird automatisch wieder mit der VM verbunden und wenn Sie
physisch trennen / verbinden, dann wird es wieder verbunden
Ihre VM. Mit anderen Worten, die Verwendung ist jetzt total
transparent.
