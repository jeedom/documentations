# GRDF-Plugin

Plugin zur Datenwiederherstellung von kommunizierenden Gaszählern *(Gazpar zum Beispiel)* über [eines Kundenkontos **GRDF**](https://login.monespace.grdf.fr/mire/connexion){:target="\_blank"}.

Dieses Plugin ermöglicht den Zugriff auf Gasverbrauchswerte sowie ggf. Einspritzwerte *(Nur professionelle Messgeräte)*. Er benutzt **die offizielle GRDF ADICT API**.

Abhängig vom Zählertyp können zwei Arten von Daten wiederhergestellt werden :
 - **Veröffentlichte Daten** werden von allen Zählern bereitgestellt. Hierbei handelt es sich um an den Lieferanten übermittelte Daten, die für die Rechnungsstellung verwendet werden. Diese Daten können bis zu einem Zeitraum von maximal 5 Jahren eingesehen werden.
 - **Aufschlussreiche Daten** beziehen sich auf die täglichen Daten, die von den Zählern übermittelt werden und monatliche Daten für die Abrechnung veröffentlichen *(1M/MM)*. Diese Daten können bis zu einem Zeitraum von maximal 3 Jahren eingesehen werden.

Je nach Zählertyp sind die verfügbaren Daten jedoch unterschiedlich, ebenso wie die Verfügbarkeitshäufigkeit.

| **Zählertyp** | Veröffentlichte Daten | Aufschlussreiche Daten | Entlastungshäufigkeit | Anrufhäufigkeit |
|:---:|---|---|---|---|
| **6M** *(particuliers)* | Halbjahresdaten | | Alle 6 Monate von D+2 bis D+3 nach Übergabe | 1 bis 2 Mal im Monat |
| **1M** *(particuliers)* | Monatliche Daten Monat M-1 | Tägliche Daten :<br>- geschätzt<br>- letzte Monate M-1 | Jeden Monat von D+2 bis D+3 nach dem Erscheinungsdatum *(veröffentlichte und endgültige Informationen)*<br>Täglich von D+1 bis D+3 *(geschätzte Informationen)* | 1 bis 2 Mal im Monat *(veröffentlicht)*<br>1 Mal pro Tag *(informatives)* |
| **M.M.** *(professionnels)* | Monatliche Daten Monat M-1 | Täglicher Datenmonat M-1 | Jeden Monat zwischen D+2 nach dem Veröffentlichungsdatum und der 7. Olympiade des Monats M *(veröffentlicht)*<br>Jeden Monat zwischen dem 10. und 20. des Monats M *(informatives)* | 1 bis 14 Mal pro Monat *(veröffentlicht)*<br>1 bis 11 Mal pro Monat *(informatives)* |
| **Kein Wort** *(professionnels)* | Tägliche Daten :<br>- geschätzt<br>- letzte Monate M-1 | | Täglich von D+1 bis D+2 *(geschätzt veröffentlicht)*<br>Jeden Monat zwischen der 1. und 6. Olympiade des Monats M *(endgültig veröffentlicht)* | 1 Mal pro Tag |

>**INFORMATION**
>
>Die Zähler **6M** sind unterstützte Plugins, wurden jedoch normalerweise alle durch Zähler ersetzt **1M** Ende 2023.

# Configuration

Wie jedes Jeedom-Plugin ist das Plugin **GRDF** muss nach der Installation aktiviert werden.

## Plugin-Setup

>**INFORMATION**
>
>Fühlen sich frei **PCE-Identifikationsnummer kopieren** wenn es während dieses Vorgangs erscheint, da es während des Jeedom-Gerätekonfigurationsschritts nützlich sein wird.

Zunächst müssen Sie die Weitergabe von GRDF-Daten an Jeedom autorisieren, indem Sie auf das Bild klicken **Autorisieren Sie den Zugriff auf das GRDF-Konto** von der Plugin-Konfigurationsseite :

![Lien espace client GRDF](../images/link_grdf.jpg)

Anschließend werden Sie auf diese Seite weitergeleitet, auf der Sie Angaben machen müssen **Ihre Identifikatoren auf dem Jeedom-Markt** Klicken Sie dann auf die Schaltfläche **Bestätigen** :

![Authentification compte Market Jeedom](../images/Auth_Jeedom.jpg)

**Melden Sie sich in Ihrem GRDF-Kundenbereich an** Wählen Sie dann einen Zähler aus **warten auf Zustimmung** :

![Sélection compteur GRDF](../images/grdf_home.jpg)

Wählen Sie Ihre Einwilligungen aus und klicken Sie dann auf die Schaltfläche **Bestätigen** :

 - **Meine Gasverbrauchsdaten** : **Ja** *(obligatoire)*
   - **Startdatum** : **1. Januar des laufenden Jahres** oder am 1. Januar bis zu 4 Jahren, um frühere Jahre in Jeedom zu konsultieren.
   - **Endtermin** : Optional das gleiche Datum wie z. B. das Ende der Einwilligung.
   - **Veröffentlichte Daten** : **Ja** *(obligatoire)*
   - **Aufschlussreiche Daten** : **Ja** *(wärmstens empfohlen)*
 - **Meine Vertragsdaten** : **Ja** *(facultatif)*
 - **Meine technischen Daten** : **Ja** *(obligatoire)*
 - **Beginndatum der Einwilligung** : **Heutiges Datum**
 - **Enddatum der Einwilligung** : Eine Wahl.

![Consentement GRDF](../images/grdf_choose.jpg)

Sobald Ihre Einwilligungen validiert wurden, haben Sie die Möglichkeit dazu **Geben Sie Ihr Einverständnis für eine weitere PCE** Oder **Zurück zur Jeedom-Seite** Bestätigung des Endes des Vorgangs :

![Validation GRDF](../images/grdf_consent.jpg)

>**WICHTIG**
>
>Wenn Sie auf eine dieser Seiten nicht zugreifen können, deaktivieren Sie den Werbeblocker des Browsers.

## Gerätekonfiguration

Um auf die verschiedenen Geräte zuzugreifen **GRDF**, Sie müssen zum Menü gehen **Plugins → Energie → GRDF**.

>**INFORMATION**
>
>Die Taste **Hinzufügen** ermöglicht Ihnen das Hinzufügen eines neuen Zählers.

Nach der Validierung der Zugangsberechtigungen bleibt nur noch die Bereitstellung **die Identifikationsnummer des PCE** betroffen *(Leerzeichen werden automatisch entfernt)* Speichern Sie dann die Ausrüstung.

Die Option **Speichern Sie den Umrechnungskoeffizienten** ermöglicht es Ihnen, das Verhältnis zwischen der tatsächlich verbrauchten Energie zu ermitteln *(kWh)* und die Lautstärke *(m3)*.

Professionelle Messgeräte *(MM oder TT)* verfügen über ein zusätzliches Konfigurationsfeld, in dem Sie die Art der durchzuführenden Messung auswählen können :
 - **Verbrauch**
 - **Injektion** *(Biomethan-Produzenten)*
 - **Die 2**

# Commandes

Bestellungen werden automatisch basierend auf der Häufigkeit der Datenerfassung erstellt *(Tag, Monat, Semester)* und ihre Art *(endgültig oder geschätzt)*.

Das Plugin ist dafür verantwortlich, bei Bedarf monatliche und jährliche Berechnungen durchzuführen, weshalb es ratsam ist, in der Einwilligungsphase das Startdatum des Zugriffs auf die Gasverbrauchsdaten auf den 1. Januar einzutragen.

Bei der ersten Sicherung aktiver und korrekt konfigurierter Geräte integriert das Plugin automatisch die im GRDF-Kundenbereich verfügbaren Historien seit dem Startdatum des Zugriffs auf Gasverbrauchsdaten. Dieser Vorgang wird wahrscheinlich lange dauern. Sie können den Fortschritt über das Menü verfolgen **Analyse → Protokolle** *(meldet sich bei „debug“ an)*.

>**INFORMATION**
>
>Die Datenübermittlung erfolgt in Kilowattstunden („kWh“) mit Ablesedatum 6 Uhr morgens. Sie werden nicht in Echtzeit zur Verfügung gestellt, sondern zum Zeitpunkt ihres Inkrafttretens in Jeedom erfasst.
