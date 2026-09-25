# Access Management Plugin

# Description

Dieses Plugin wird für die erweiterte Verwaltung eines Zugriffssystems unter Verwendung der folgenden Funktionen verwendet :

- Aktivierung und Präsentation des Plugins
- Erstellung und Verwaltung von Türen
- Benutzererstellung und -verwaltung
- Erstellung und Verwaltung von Gruppen
- Erstellung und Verwaltung von Zeitfenstern
- Verlaufssuche

>**Informationen**
>
>Alle Screenshots werden unter einem Thema aufgenommen. Wenn das Erscheinungsbild Ihres Jeedom nicht genau gleich ist, machen Sie sich keine Sorgen.

## Aktivierung und Präsentation des Access Management Plugins

### Activation
Nach der Installation Ihres Plugins müssen Sie es aktivieren.

>**TIPP**
>
>Wenn Sie KNX verwenden, in der Gruppe **Konfiguration** Füllen Sie die Felder aus.

![activation](../images/activation.jpg)

Nachdem Sie das Plugin aktiviert haben, sollten Sie es in sehen  **Plugins** → **Sicherheit** → **Zugriffsverwaltung**. Wenn dies nicht der Fall ist, zögern Sie nicht, Ihre Seite zu aktualisieren (``Ctrl+F5`` oder ``Cmd+R``).

![gestionAcces](../images/path.jpg)

### Präsentation

In der Standardansicht des Plugins können Sie eine Bagde, einen Benutzer, ein Zeitfenster oder eine Tür hinzufügen.

Auf verschiedenen Registerkarten können Sie die einzelnen Elemente leicht finden.
Die Suchleiste hilft beim Sortieren in jeder Kategorie, um einen Artikel leichter zu finden.

![gestionAcces](../images/base.jpg)

Auf dem **Dashboard** Eine Historie der letzten 20 Ereignisse ist verfügbar.

![gestionAcces](../images/dashbord.jpg)

## Erstellung und Verwaltung von Türen

### Türerstellung

**Hinzufügen** eine Tür schaffen.
In diesem Feld können Sie den Namen der Tür definieren.

![gestionAcces](../images/nameEqu.jpg)

In der Liste *Typ*, auswählen **Tür / Leser**.

![gestionAcces](../images/selEqu.jpg)

### Türkonfiguration

**Gerätekonfiguration** ermöglicht die Konfiguration der Tür.

![gestionAcces](../images/confReader.jpg)

### Ausrüstungsrechte

**Ausrüstungsrechte** wird verwendet, um der Tür bestimmte Zeitfenster zuzuweisen, in denen Benutzer ihre Ausweise nicht zum Passieren benötigen.

![gestionAcces](../images/rightReader.jpg)

**Rechte hinzufügen** Mit dieser Option können Sie ein bereits vorhandenes Zeitfenster auswählen, um es Ihrer Tür zuzuweisen.

>**Wichtig**
>
>Alle Benutzer, die mit der ausgewählten Zeitzone verbunden sind, können diese Tür während der darauf festgelegten Zeiten passieren.

![gestionAcces](../images/scheduleReader.jpg)

![gestionAcces](../images/rightReader0.jpg)

Die Schaltfläche **-** Entfernt das Zeitfenster.

## Benutzererstellung und -verwaltung

### Benutzererstellung

**Hinzufügen** wird verwendet, um einen Benutzer zu erstellen.
In diesem Feld können Sie den Benutzernamen definieren.

![gestionAcces](../images/nameEqu.jpg)

In der Liste *Typ*, anzeigen **Benutzer**.

![gestionAcces](../images/selUser.jpg)

### Benutzerkonfiguration

**Benutzereinstellungen** wird zum Konfigurieren verwendet.

![gestionAcces](../images/confUser.jpg)

Mehrere Felder sind anpassbar.
Sie können angeben :

- eine Benutzer-ID (entsprechend den Ausweisnummern des Benutzers),
- der Name,
- der Vorname,
- Benutzerprofilbild,
- Das Startdatum ist der erste Tag Ihres neuen Benutzers,
- das Enddatum, das der letzte Tag Ihres neuen Benutzers ist,
- Benutzerstatus :
    - In Dienst _ (Standardstatus) _,
    - Volé,
    - Perdu,
- Vier Felder, in denen Sie Notizen hinzufügen können.

Die Schaltfläche **Kopie** nimmt den Wert von **Benutzername**, die **Vorname des Benutzers** und von'**Benutzer-ID** um sie zuzuweisen **Name der Ausrüstung**, was Sie in der Registerkarte sehen können **Gerät**.

Die Schaltfläche **Senden** Mit dieser Option können Sie das gewünschte Profilfoto für Ihren Benutzer übertragen.

![gestionAccess](../images/imgUser.jpg)

Die Schaltfläche **Download** Benutzerfoto hochladen.
Die Datei wird gemäß den in den Feldern angegebenen Werten benannt **Benutzername** und **Vorname des Benutzers** (durch einen Bindestrich getrennt).

### Gruppen für einen Benutzer konfigurieren

 **Gruppenkonfiguration** wird verwendet, um Ihren Benutzer einer Gruppe zuzuweisen.

>**Notiz**
>
>Aktivieren Sie ein Kontrollkästchen, um die entsprechende Gruppe auszuwählen.

![gestionAccess](../images/confGUser.jpg)

### Benutzerrechte

Die Registerkarte **Benutzerrechte** wird verwendet, um dem Benutzer bestimmte Rechte zuzuweisen.

![gestionAccess](../images/rightUser.jpg)

**Rechte hinzufügen**, Ermöglicht die Auswahl einer Tür und eines Zeitbereichs, die dem ausgewählten Benutzer zugewiesen werden.
Es stehen zwei Optionen zur Verfügung : **Ablehnen** und **Akzeptiere** zum Handeln.

![gestionAccess](../images/addRightUser.jpg)

Die neu zugewiesenen Rechte werden auf der Registerkarte angezeigt **Benutzerrechte**. Die Minus-Taste (**-**) entfernt Rechte.

![gestionAccess](../images/rightUser0.jpg)

## Erstellung und Verwaltung von Gruppen

### Erstellung einer Gruppe
Verwenden Sie die Schaltfläche **Hinzufügen** um eine Gruppe zu erstellen.
In diesem Feld können Sie den Gruppennamen definieren.

![gestionAccess](../images/nameEqu.jpg)

Wählen Sie in der Typenliste aus **Gruppe**.

![gestionAccess](../images/selGroup.jpg)

#### Rechte einer Gruppe

Die Registerkarte **Gruppenrechte** wird verwendet, um Ihrer Gruppe bestimmte Rechte zuzuweisen.

**Rechte hinzufügen**, Mit dieser Option können Sie eine Tür und einen Zeitbereich auswählen, die der ausgewählten Gruppe zugewiesen werden.
Es stehen zwei Optionen zur Verfügung **Ablehnen** und **Akzeptiere** zum Handeln.

![gestionAccess](../images/addRightGroup.jpg)

In der Registerkarte **Gruppenrechte** Die neuen betroffenen Rechte werden angezeigt. Die Schaltfläche **-** entfernt Rechte.

![gestionAccess](../images/rightGroup.jpg)

## Erstellung und Verwaltung von Zeitfenstern

### Erstellung eines Zeitfensters
Verwenden Sie die Schaltfläche **Hinzufügen** um einen Zeitbereich zu erstellen.
In diesem Feld können Sie den Namen des Zeitfensters definieren.

![gestionAccess](../images/nameEqu.jpg)

Wählen Sie in der Typenliste aus **Zeitbereich**.

![gestionAccess](../images/selTimelapse.jpg)

### Zeitbereichskonfiguration

Die Registerkarte **Zeitschlitzkonfiguration** ermöglicht die Konfiguration eines neuen Zeitfensters.

![gestionAccess](../images/confTimelapse.jpg)

>**Informationen**
>
> - Um ein Zeitfenster zu konfigurieren, klicken Sie mit der linken Maustaste auf die Felder, die Sie je nach Tag und Uhrzeit interessieren.   
Ein Feld wird blau, wenn es aktiv ist.    
>Standardmäßig sind die Boxen täglich von 10:30 bis 19:00 Uhr aktiv.
>Um eine Box zu deaktivieren, klicken Sie mit der rechten Maustaste darauf. Dies wird dann transparent.
> - Standardmäßig werden Feiertage berücksichtigt. Deaktivieren Sie die blauen Kästchen in der Zeile **"Feiertage"**.
> - Schieben Sie die Bildlaufleiste am unteren Rand der Tabelle nach rechts, um weitere Zeitpläne anzuzeigen.


## Verlaufssuche

**Wichtiger Schritt** : Um auf diesen Teil zugreifen zu können, ist es wichtig, eine Anpassung vorab vorzunehmen. Gehe zu **Plugins** → **Plugin Verwaltung**, IN **Meine Plugins**, Klicken Sie auf **Zugriffsverwaltung**.

![gestionAccess](../images/gestPlug.jpg)

Im Spiel **Platte** überprüfen **Desktop-Panel anzeigen** dann klicken Sie auf **Speichern**.

![gestionAccess](../images/confPlug.jpg)

Sobald die Änderung vorgenommen wurde, wird ein neuer Abschnitt im Menü angezeigt **Mein Haus** ist verfügbar.
Wenn es jedoch nicht angezeigt wird, aktualisieren Sie Ihre Seite unbedingt.

![gestionAccess](../images/newPlug.jpg)

**Mein Haus** → **Zugriffsverwaltung** um auf die erweiterte Suche zuzugreifen. In der Standardansicht werden die letzten 20 aufgezeichneten Ereignisse angezeigt.

![gestionAccess](../images/search.jpg)

Im linken Teil können Sie die Suchkriterien festlegen.

 - **Benutzerliste :** Namen der gesuchten Benutzer. Sie können mehrere Benutzer auswählen.
 - **Ausrüstungsliste :** Namen der gesuchten Ausrüstung. Sie können mehrere Geräte auswählen.
 - **Liste der Zeitfenster :** Namen der gesuchten Titel. Sie können mehrere Zeitfenster auswählen.
 - **Startdatum :** Geben Sie ein Startdatum und eine Startzeit für Ihre Suche ein.
 - **Datum Ende** Geben Sie ein Enddatum und eine Uhrzeit für Ihre Suche an.
 - **Liste der Gruppen** Namen der gesuchten Gruppen. Sie können mehrere Gruppen auswählen.
 - **Liste der Aktionen** Wählen Sie das Ergebnis einer Aktion aus, zwischen denen Sie wählen können : **Alle**, **Ablehnen** und **Erlaube**.

>**Wichtig**
>
>Im oberen Teil der Tabelle, unter jedem Spaltentitel, können Sie in den verschiedenen Feldern eine zweite Suche durchführen, um die Ergebnisse zu sortieren.
