# Änderungsprotokoll Broadlink

>**WICHTIG**
>
>Wenn keine Informationen zum Update vorhanden sind, bedeutet dies, dass es sich ausschließlich um eine Aktualisierung der Dokumentation, der Übersetzung oder des Textes handelt.

# 17/10/2026

- Fehlerbehebungen
- Jeedom v4.5 erforderlich

# 28/02/2025

- Beheben Sie einen Speicherverlust im Daemon
- Behebung eines Problems bei der Installation von Abhängigkeiten, das bei bestimmten Installationen auftreten konnte
- Entfernung der **Installation** von 2 Abhängigkeiten (`pycrypto` & `asn1crypto`), die für das Plugin nicht mehr benötigt werden
- Schnittstellenmodernisierung
- Debian 11 erforderlich
- Debian 12-Kompatibilität
- Jeedom v4.4.8 erforderlich

# 30/09/2022

- Die Installation von Abhängigkeiten auf Jeedom v4.2 wurde behoben

# 05/03/2021

- Aktualisierung des Abhängigkeitsskripts nach der Änderung der Kryptografie

# 15/01/2021

- Ein Problem mit Buster-Abhängigkeiten wurde behoben

# 23/11/2020

- Verwaltung der Abhängigkeiten bestimmter Installationen, die durch Kryptografie-Bibliotheken von Drittanbietern in Python 3 beschädigt wurden *(Führen Sie die Abhängigkeiten erneut aus, falls Probleme auftreten)*

# 20/11/2020

- Allgemeine Optimierungen
- Neue Darstellung der Objektliste
- Hinzufügen des Tags „V4-Kompatibilität“

# 31/07/2020

- Umstellung auf Python 3 *(die Abhängigkeiten müssen wahrscheinlich neu installiert werden)*
- Unterstützung für den RM4 hinzugefügt *(siehe Dokumentation für Besonderheiten)*
- Hinzufügen eines erweiterten RF-Lernvorgangs in zwei Schritten: einem Schritt zum Variieren der Frequenzen und zum Ermitteln der richtigen Frequenz sowie einem weiteren Schritt zum Einlernen. Dies erhöht die Kompatibilität beim Einlernen.

# 11/09/2019

- Anpassung für jeedom v4

# 09/05/2018

- Hinzufügen des Bildes von SC1

# 10/03/2018

- Erzwingen Sie Ja für Abhängigkeiten
